from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import io
import json
import re
import requests
import time
from dotenv import load_dotenv
from PyPDF2 import PdfReader
from docx import Document

# Load environment variables
load_dotenv()

app = Flask(__name__)
# Enable CORS for React frontend (localhost:5173)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Configure APIs
OPENROUTER_API_KEYS = [
    os.getenv("OPENROUTER_API_KEY"),
]
# Filter out None and empty strings
OPENROUTER_API_KEYS = [k for k in OPENROUTER_API_KEYS if k]

def get_best_model_list(task_type="creative"):
    """
    Returns an optimized list of models for speed and reliability.
    """
    if task_type == "analysis":
        # Put slightly faster high-capacity models first to avoid timeout
        return [
            "google/gemini-2.0-flash-lite-preview-02-05:free",
            "stepfun/step-3.5-flash:free",
            "qwen/qwen-2.5-72b-instruct:free",
            "meta-llama/llama-3.3-70b-instruct:free",
            "google/gemma-2-9b-it:free",
            "mistralai/pixtral-12b:free",
            "liquid/lfm-40b:free",
            "meta-llama/llama-3.1-8b-instruct:free",
            "qwen/qwen-2.5-7b-instruct:free",
            "microsoft/phi-3-medium-4k-instruct:free",
        ]
    else:
        return [
            "google/gemini-2.0-flash-lite-preview-02-05:free",
            "stepfun/step-3.5-flash:free",
            "qwen/qwen-2.5-7b-instruct:free",
            "meta-llama/llama-3.1-8b-instruct:free",
            "google/gemma-2-9b-it:free",
            "microsoft/phi-3-mini-128k-instruct:free",
            "meta-llama/llama-3.2-3b-instruct:free",
        ]

def call_openrouter_with_retry(prompt, task_type="creative"):
    """
    Helper to call OpenRouter with multiple keys, model fallbacks, and 429 retry logic.
    """
    if not OPENROUTER_API_KEYS:
        return None, "No OpenRouter API keys configured"

    models = get_best_model_list(task_type)
    last_error = "Unknown error"
    
    for i, model_name in enumerate(models):
        # Rotate through available keys
        key_index = i % len(OPENROUTER_API_KEYS)
        current_key = OPENROUTER_API_KEYS[key_index]
        
        # Max retries for a single model if it has a rate limit
        max_model_retries = 2
        for attempt in range(max_model_retries):
            try:
                print(f"\n⚡ Trying Model ({i+1}/{len(models)}): {model_name} [Key {key_index + 1}] (Attempt {attempt+1})")
                
                headers = {
                    "Authorization": f"Bearer {current_key}",
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:5173",
                    "X-Title": "Tech Titans Career Intelligence",
                }
                
                payload = {
                    "model": model_name,
                    "messages": [{"role": "user", "content": prompt}],
                    "temperature": 0.5 if task_type == "analysis" else 0.7,
                    "provider": {
                        "allow_fallbacks": True
                    }
                }
                
                # Use even longer timeout for resume analysis (60s) to handle slow free providers
                current_timeout = 60 if task_type == "analysis" else 30
                
                response = requests.post(
                    "https://openrouter.ai/api/v1/chat/completions",
                    headers=headers,
                    data=json.dumps(payload),
                    timeout=current_timeout 
                )
                
                if response.status_code == 200:
                    res_data = response.json()
                    if res_data.get('choices'):
                        content = res_data['choices'][0]['message']['content'].strip()
                        print(f"✅ Success with {model_name}")
                        return content, None
                
                if response.status_code == 429:
                    print(f"📉 Rate limited on {model_name}. Waiting 3s...")
                    time.sleep(3) # Slightly longer wait
                    continue 
                
                error_data = response.text
                last_error = f"{model_name} ({response.status_code}): {error_data}"
                print(f"⚠️ Failed with {model_name}: Status {response.status_code}")
                
                # If not 429, just move to next model immediately
                break 
                
            except Exception as e:
                last_error = str(e)
                print(f"❌ Error with {model_name}: {str(e)}")
                break # Move to next model
                
    return None, f"All models and keys failed. Last error: {last_error}"

def extract_text_from_pdf(pdf_file):
    """Extract text from PDF file"""
    try:
        pdf_reader = PdfReader(pdf_file)
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text()
        return text
    except Exception as e:
        print(f"Error extracting PDF text: {str(e)}")
        return None

def extract_text_from_docx(docx_file):
    """Extract text from DOCX file"""
    try:
        doc = Document(docx_file)
        text = ""
        for paragraph in doc.paragraphs:
            text += paragraph.text + "\n"
        return text
    except Exception as e:
        print(f"Error extracting DOCX text: {str(e)}")
        return None

@app.route("/api/analyze-resume", methods=["POST"])
def analyze_resume():
    """API endpoint to analyze resume"""
    try:
        if 'resumeFile' not in request.files:
            return jsonify({"error": "No resume file provided"}), 400
        
        file = request.files['resumeFile']
        job_description = request.form.get('jobDescription', '')
        filename = file.filename
        
        # Extract text based on file type
        resume_text = None
        file_type = "PDF"
        
        if filename.lower().endswith('.pdf'):
            resume_text = extract_text_from_pdf(io.BytesIO(file.read()))
        elif filename.lower().endswith('.docx'):
            file_type = "DOCX"
            resume_text = extract_text_from_docx(io.BytesIO(file.read()))
        else:
            return jsonify({"error": "Unsupported file format. Please upload PDF or DOCX"}), 400
            
        if not resume_text:
            return jsonify({"error": f"Could not extract text from {file_type}"}), 400
        
        # Truncate text to avoid prompt bloat
        resume_text = resume_text[:10000]
        
        prompt = f"""
        You are an expert ATS (Applicant Tracking System) analyzer specialized in Technology and Engineering roles.
        Analyze the following resume{" and job description" if job_description else ""}:
        
        RESUME:
        {resume_text}
        
        {f"JOB DESCRIPTION: {job_description}" if job_description else ""}
        
        Respond ONLY with valid JSON in this format:
        {{
          "matchScore": <0-100>,
          "summary": "string (brief overview)",
          "strengths": ["string"],
          "weaknesses": ["string"],
          "missingKeywords": ["string"],
          "recommendations": ["string"]
        }}
        """
        
        content, error = call_openrouter_with_retry(prompt, task_type="analysis")
        
        if error:
            return jsonify({"error": error}), 500
            
        try:
            # Extract JSON from potential markdown code blocks
            json_match = re.search(r'(\{.*\})', content, re.DOTALL)
            if json_match:
                analysis = json.loads(json_match.group(1))
            else:
                analysis = json.loads(content)
                
            return jsonify(analysis)
        except Exception as e:
            return jsonify({"error": f"Failed to parse AI response: {str(e)}"}), 500
        
    except Exception as e:
        print(f"Error in analyze_resume: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route("/api/market/insights", methods=["GET"])
def get_market_insights():
    """API endpoint to get industry-specific market insights"""
    try:
        domain = request.args.get("domain", "Computer Engineering")
        
        # Define market data for each industry
        market_data = {
            "Computer Engineering": {
                "jobs": [
                    {"role": "Senior Fullstack Engineer", "salary": "$145k - $210k", "company": "FAANG", "skills": ["React", "Node.js", "System Design"], "location": "San Francisco"},
                    {"role": "Backend Engineer", "salary": "$120k - $180k", "company": "Startups", "skills": ["Python", "AWS", "Microservices"], "location": "Remote"},
                    {"role": "DevOps Engineer", "salary": "$130k - $190k", "company": "Enterprise", "skills": ["Docker", "K8s", "CI/CD"], "location": "New York"}
                ],
                "skills": [
                    {"name": "React", "demand": 92, "growth": "+45%"},
                    {"name": "System Design", "demand": 88, "growth": "+35%"},
                    {"name": "Docker/K8s", "demand": 85, "growth": "+60%"}
                ]
            },
            "Mechanical Engineering": {
                "jobs": [
                    {"role": "Product Design Lead", "salary": "$110k - $160k", "company": "Manufacturing", "skills": ["CAD", "FEA", "Project Management"], "location": "Detroit"},
                    {"role": "Mechanical Engineer", "salary": "$90k - $140k", "company": "Aerospace", "skills": ["CATIA", "ANSYS", "Thermodynamics"], "location": "Southern CA"},
                    {"role": "Manufacturing Engineer", "salary": "$95k - $145k", "company": "Automotive", "skills": ["Lean", "Six Sigma", "CAD"], "location": "Various"}
                ],
                "skills": [
                    {"name": "CAD Design", "demand": 78, "growth": "+25%"},
                    {"name": "FEA", "demand": 72, "growth": "+20%"},
                    {"name": "Additive Manufacturing", "demand": 68, "growth": "+50%"}
                ]
            },
            "Automobile Engineering": {
                "jobs": [
                    {"role": "EV Systems Architect", "salary": "$130k - $190k", "company": "Tesla/NIO", "skills": ["EV Tech", "Control Systems", "Battery Tech"], "location": "Bay Area"},
                    {"role": "Powertrain Engineer", "salary": "$110k - $165k", "company": "OEM", "skills": ["Engine Design", "Simulation", "Emissions"], "location": "Detroit"},
                    {"role": "Autonomous Driving Engineer", "salary": "$135k - $200k", "company": "Waymo", "skills": ["ADAS", "LiDAR", "C++"], "location": "Mountain View"}
                ],
                "skills": [
                    {"name": "EV Powertrains", "demand": 89, "growth": "+80%"},
                    {"name": "Autonomous Systems", "demand": 85, "growth": "+70%"},
                    {"name": "Battery Management", "demand": 82, "growth": "+65%"}
                ]
            },
            "Robotics & Automation": {
                "jobs": [
                    {"role": "Robotics Software Engineer", "salary": "$125k - $185k", "company": "Boston Dynamics", "skills": ["ROS", "C++", "ML"], "location": "Boston"},
                    {"role": "Automation Engineer", "salary": "$100k - $155k", "company": "Manufacturing", "skills": ["PLC", "SCADA", "CAM"], "location": "Midwest"},
                    {"role": "Computer Vision Engineer", "salary": "$120k - $175k", "company": "Perception", "skills": ["OpenCV", "YOLO", "PyTorch"], "location": "Remote"}
                ],
                "skills": [
                    {"name": "ROS", "demand": 81, "growth": "+40%"},
                    {"name": "Computer Vision", "demand": 86, "growth": "+55%"},
                    {"name": "PLC Programming", "demand": 74, "growth": "+15%"}
                ]
            },
            "Electrical Engineering": {
                "jobs": [
                    {"role": "Embedded Systems Lead", "salary": "$120k - $175k", "company": "Semiconductor", "skills": ["Verilog", "FPGA", "C"], "location": "San Jose"},
                    {"role": "Power Systems Engineer", "salary": "$105k - $160k", "company": "Utility", "skills": ["PSSE", "Smart Grid", "High Voltage"], "location": "Various"},
                    {"role": "PCB Design Engineer", "salary": "$95k - $145k", "company": "Electronics", "skills": ["Altium", "Signal Integrity", "EMC"], "location": "Remote"}
                ],
                "skills": [
                    {"name": "FPGA/Verilog", "demand": 79, "growth": "+30%"},
                    {"name": "Embedded C", "demand": 84, "growth": "+25%"},
                    {"name": "Power Electronics", "demand": 76, "growth": "+35%"}
                ]
            },
            "Communication Engineering": {
                "jobs": [
                    {"role": "5G Network Architect", "salary": "$135k - $200k", "company": "Telecom", "skills": ["5G", "Network Design", "Protocols"], "location": "Various"},
                    {"role": "RF Engineer", "salary": "$115k - $170k", "company": "Wireless", "skills": ["RF Design", "HFSS", "Antennas"], "location": "San Diego"},
                    {"role": "Optical Communications Engineer", "salary": "$120k - $175k", "company": "Fiber Companies", "skills": ["Fiber Optics", "DWDM", "DSP"], "location": "Remote"}
                ],
                "skills": [
                    {"name": "5G Technology", "demand": 87, "growth": "+75%"},
                    {"name": "RF Design", "demand": 78, "growth": "+20%"},
                    {"name": "Fiber Optics", "demand": 72, "growth": "+25%"}
                ]
            }
        }
        
        # Get data for the requested domain, fallback to default
        data = market_data.get(domain, market_data["Computer Engineering"])
        return jsonify(data)
    
    except Exception as e:
        print(f"Error in get_market_insights: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "running",
        "api_keys_configured": len(OPENROUTER_API_KEYS)
    })

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    print(f"🚀 Tech Titans Backend starting on http://localhost:{port}")
    print(f"  Configured Keys: {len(OPENROUTER_API_KEYS)}")
    app.run(debug=True, port=port)
