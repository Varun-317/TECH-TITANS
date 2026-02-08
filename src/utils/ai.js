export const analyzeResume = async (resumeText, jd, apiKey) => {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:5173", // Optional, for OpenRouter rankings
            "X-Title": "Tech Titans ATS", // Optional, for OpenRouter rankings
        },
        body: JSON.stringify({
            "model": "google/gemini-2.0-flash-lite-preview-02-05:free", // Using a fast, free-tier-friendly model
            "messages": [
                {
                    "role": "system",
                    "content": `As an advanced ATS scanner with expertise in Technology, provide a detailed analysis of the resume against the job description. 
                    Your response MUST be in JSON format with the following structure:
                    {
                        "matchScore": number (0-100),
                        "summary": "string (brief overview)",
                        "strengths": ["string"],
                        "weaknesses": ["string"],
                        "missingKeywords": ["string"],
                        "recommendations": ["string"]
                    }`
                },
                {
                    "role": "user",
                    "content": `Resume Text: ${resumeText}\n\nJob Description: ${jd}`
                }
            ],
            "response_format": { "type": "json_object" }
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || "Failed to analyze resume");
    }

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
};
