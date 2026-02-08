// Comprehensive course resources, materials, and quiz questions for each industry/domain

export const courseResources = {
  "Computer Engineering": [
    {
      id: 1,
      title: 'Adv. Data Structures & Algorithms (DSA)',
      duration: '55 mins',
      tag: 'Video',
      completed: true,
      resources: [
        { type: 'video', title: 'Graph Algorithms Explained', link: 'https://www.youtube.com/watch?v=tIv5LVcubAQ' },
        { type: 'course', title: 'Grokking DSA - InterviewIO', link: 'https://www.interviewio.com/dsa' },
        { type: 'doc', title: 'Big O Complexity Cheat Sheet', link: 'https://www.bigocheatsheet.com' },
        { type: 'practice', title: 'LeetCode DSA Problems', link: 'https://leetcode.com/tag/data-structures/' }
      ],
      quiz: [
        { question: 'What is the time complexity of BFS?', options: ['O(V+E)', 'O(V^2)', 'O(E log V)'], answer: 0 },
        { question: 'Which sorting algorithm is most stable?', options: ['QuickSort', 'MergeSort', 'HeapSort'], answer: 1 },
        { question: 'What is the space complexity of recursive DFS?', options: ['O(1)', 'O(V)', 'O(E)'], answer: 1 }
      ]
    },
    {
      id: 2,
      title: 'System Design: Scalable Architectures',
      duration: '1.5 hours',
      tag: 'Lab',
      completed: false,
      resources: [
        { type: 'video', title: 'System Design Interview Guide', link: 'https://www.youtube.com/watch?v=ZgdS0EUmn70' },
        { type: 'course', title: 'Grokking System Design Interview', link: 'https://www.educative.io/courses/grokking-the-system-design-interview' },
        { type: 'doc', title: 'System Design Primer', link: 'https://github.com/donnemartin/system-design-primer' },
        { type: 'practice', title: 'Design HighLevelArchitecture (HLD) Problems', link: 'https://github.com/systemdesign-prep/resources' }
      ],
      quiz: [
        { question: 'What is CAP theorem?', options: ['Consistency, Availability, Partition tolerance', 'Cache, API, Protocol', 'Compute, Algorithm, Performance'], answer: 0 },
        { question: 'Which is better for write-heavy workloads?', options: ['SQL DB', 'NoSQL DB', 'File Storage'], answer: 1 }
      ]
    },
    {
      id: 3,
      title: 'Fullstack Development (MERN/Next.js)',
      duration: '45 mins',
      tag: 'Video',
      completed: false,
      resources: [
        { type: 'video', title: 'MERN Stack Mastery', link: 'https://www.youtube.com/watch?v=7CqJlxBYj-M' },
        { type: 'course', title: 'Next.js 14 Full Stack Course', link: 'https://www.udemy.com/course/nextjs-14-react/' },
        { type: 'doc', title: 'React Official Docs', link: 'https://react.dev' },
        { type: 'practice', title: 'Build Full Stack Projects', link: 'https://www.projecteuler.net' }
      ],
      quiz: [
        { question: 'What is React Hook dependency array?', options: ['Optional dependencies', 'Required for updates', 'Controls side effect re-runs'], answer: 2 }
      ]
    },
    {
      id: 4,
      title: 'Cloud DevOps (AWS/Docker/K8s)',
      duration: '2 hours',
      tag: 'Project',
      completed: false,
      resources: [
        { type: 'video', title: 'Docker & Kubernetes Tutorial', link: 'https://www.youtube.com/watch?v=3c-iBneYpgY' },
        { type: 'course', title: 'AWS Solutions Architect', link: 'https://www.acloud.guru/' },
        { type: 'doc', title: 'Kubernetes Official Docs', link: 'https://kubernetes.io/docs/' },
        { type: 'lab', title: 'Play with Docker', link: 'https://labs.play-with-docker.com' }
      ],
      quiz: [
        { question: 'What does K8s stand for?', options: ['Kubernetes', 'KubeSys', 'K-Eight-S'], answer: 0 }
      ]
    }
  ],
  "Mechanical Engineering": [
    {
      id: 1,
      title: 'Advanced CAD Modeling (SolidWorks/Fusion 360)',
      duration: '60 mins',
      tag: 'Video',
      completed: true,
      resources: [
        { type: 'video', title: 'Fusion 360 Complete Tutorial', link: 'https://www.youtube.com/watch?v=BEUR8nSrg-I' },
        { type: 'course', title: 'Fusion 360 Certified Training', link: 'https://help.autodesk.com/view/fusion360/ENU/' },
        { type: 'doc', title: 'SolidWorks User Guide', link: 'https://www.solidworks.com/en' },
        { type: 'practice', title: 'Thingiverse CAD Models', link: 'https://www.thingiverse.com' }
      ],
      quiz: [
        { question: 'What is a loft feature in CAD?', options: ['Morphing between profiles', 'Circular pattern', 'Mirror operation'], answer: 0 }
      ]
    },
    {
      id: 2,
      title: 'Finite Element Analysis (FEA) Simulation',
      duration: '2 hours',
      tag: 'Lab',
      completed: false,
      resources: [
        { type: 'video', title: 'ANSYS FEA Basics', link: 'https://www.youtube.com/watch?v=Lr6TxJLZN_0' },
        { type: 'course', title: 'Finite Element Methods Course', link: 'https://www.coursera.org/learn/finite-element-method' },
        { type: 'doc', title: 'Stress Analysis Guide', link: 'https://www.simscale.com/docs/' },
        { type: 'lab', title: 'Online FEA Simulator', link: 'https://www.simscale.com' }
      ],
      quiz: [
        { question: 'What defines mesh quality in FEA?', options: ['Element size', 'Node count', 'Aspect ratio and distortion'], answer: 2 }
      ]
    },
    {
      id: 3,
      title: 'Thermodynamics & Heat Transfer Analysis',
      duration: '50 mins',
      tag: 'Quiz',
      completed: false,
      resources: [
        { type: 'video', title: 'Thermodynamics Fundamentals', link: 'https://www.youtube.com/watch?v=4OIfCk_q-jA' },
        { type: 'course', title: 'Heat Transfer Theory', link: 'https://www.edx.org/course/heat-transfer' },
        { type: 'doc', title: 'Engineering Thermodynamics', link: 'https://www.sciencedirect.com' }
      ],
      quiz: [
        { question: 'What is the first law of thermodynamics?', options: ['Energy conservation', 'Entropy increase', 'Heat flows cold to hot'], answer: 0 }
      ]
    },
    {
      id: 4,
      title: 'Additive Manufacturing & 3D Printing',
      duration: '1.5 hours',
      tag: 'Project',
      completed: false,
      resources: [
        { type: 'video', title: 'Additive Manufacturing Explained', link: 'https://www.youtube.com/watch?v=_Lz0zYnKPdE' },
        { type: 'course', title: 'ASTM 3D Printing Standards', link: 'https://www.astm.org' },
        { type: 'doc', title: '3D Printing Materials Guide', link: 'https://www.sculpteo.com/blog' }
      ],
      quiz: [
        { question: 'Which 3D printing method uses UV light?', options: ['FDM', 'SLA', 'SLS'], answer: 1 }
      ]
    }
  ],
  "Automobile Engineering": [
    {
      id: 1,
      title: 'Electric Vehicle (EV) Powertrain Systems',
      duration: '55 mins',
      tag: 'Video',
      completed: true,
      resources: [
        { type: 'video', title: 'EV Powertrain Design Overview', link: 'https://www.youtube.com/watch?v=iHvtPJ3CfEE' },
        { type: 'course', title: 'EV Battery Technology Course', link: 'https://www.coursera.org/learn/electric-vehicle' },
        { type: 'doc', title: 'Motor Drive Design Handbook', link: 'https://www.ti.com/lit/df/tidufc3b/tidufc3b.pdf' },
        { type: 'research', title: 'IEEE EVT Research Papers', link: 'https://ieeexplore.ieee.org' }
      ],
      quiz: [
        { question: 'What is the primary advantage of EV motors?', options: ['High efficiency', 'Instant torque', 'Both efficiency and instant torque'], answer: 2 }
      ]
    },
    {
      id: 2,
      title: 'Vehicle Dynamics & Chassis Design',
      duration: '2.4 hours',
      tag: 'Lab',
      completed: false,
      resources: [
        { type: 'video', title: 'Vehicle Dynamics Deep Dive', link: 'https://www.youtube.com/watch?v=YKP0hQW4Wnc' },
        { type: 'course', title: 'Automotive Chassis Design', link: 'https://www.edx.org/course/vehicle-dynamics' },
        { type: 'doc', title: 'Suspension Systems Handbook', link: 'https://www.bosch-mobility.com' },
        { type: 'simulation', title: 'IPG CarMaker Simulation', link: 'https://ipg.de/en' }
      ],
      quiz: [
        { question: 'What is understeer vs oversteer?', options: ['Turning response types', 'Speed settings', 'Brake configurations'], answer: 0 }
      ]
    },
    {
      id: 3,
      title: 'Autonomous Driving Levels & Sensors (LiDAR)',
      duration: '40 mins',
      tag: 'Video',
      completed: false,
      resources: [
        { type: 'video', title: 'Autonomous Vehicles 101', link: 'https://www.youtube.com/watch?v=kKbCaJFKSHE' },
        { type: 'course', title: 'Self-Driving Car Specialization', link: 'https://www.coursera.org/specializations/self-driving-cars' },
        { type: 'doc', title: 'SAE Automation Levels', link: 'https://www.sae.org/standards/content/j3016_202401/' },
        { type: 'research', title: 'LiDAR Technology Papers', link: 'https://arxiv.org/list/cs.RO/recent' }
      ],
      quiz: [
        { question: 'How many levels of autonomous driving are there?', options: ['3', '5', '6'], answer: 2 }
      ]
    },
    {
      id: 4,
      title: 'Battery Management Systems (BMS) Design',
      duration: '1 hour',
      tag: 'Project',
      completed: false,
      resources: [
        { type: 'video', title: 'BMS Design Fundamentals', link: 'https://www.youtube.com/watch?v=OXhYzJXL5X8' },
        { type: 'course', title: 'Battery Pack Design & Analysis', link: 'https://www.udemy.com/course/battery-management-systems/' },
        { type: 'doc', title: 'ISO 26262 Functional Safety', link: 'https://www.iso.org/standard/51362.html' },
        { type: 'tool', title: 'Battery Modeling Software', link: 'https://www.comsol.com' }
      ],
      quiz: [
        { question: 'What is the purpose of BMS?', options: ['Monitor cells', 'Balance cells', 'Monitor, balance & protect'], answer: 2 }
      ]
    }
  ],
  "Robotics & Automation": [
    {
      id: 1,
      title: 'ROS (Robot Operating System) Fundamentals',
      duration: '55 mins',
      tag: 'Video',
      completed: true,
      resources: [
        { type: 'video', title: 'ROS for Beginners', link: 'https://www.youtube.com/watch?v=qWysVqgsXJs' },
        { type: 'course', title: 'Complete ROS Course', link: 'https://www.robotics-for-engineers.com' },
        { type: 'doc', title: 'ROS Official Documentation', link: 'http://wiki.ros.org' },
        { type: 'practice', title: 'ROS Tutorials & Exercises', link: 'http://wiki.ros.org/ROS/Tutorials' }
      ],
      quiz: [
        { question: 'What is a ROS Node?', options: ['Hardware device', 'Process running ROS code', 'Network connection'], answer: 1 }
      ]
    },
    {
      id: 2,
      title: 'Kinematics & Path Planning Algorithms',
      duration: '2.4 hours',
      tag: 'Lab',
      completed: false,
      resources: [
        { type: 'video', title: 'Robot Kinematics Explained', link: 'https://www.youtube.com/watch?v=dHp9BvqMiBU' },
        { type: 'course', title: 'Robot Kinematics & Dynamics', link: 'https://www.coursera.org/learn/robotics-kinematics' },
        { type: 'doc', title: 'Motion Planning Library (MoveIt)', link: 'https://moveit.ros.org' },
        { type: 'simulation', title: 'Gazebo Robot Simulator', link: 'http://gazebosim.org' }
      ],
      quiz: [
        { question: 'What is Forward Kinematics?', options: ['End-effector position from joint angles', 'Joint angles from end-effector', 'Speed calculation'], answer: 0 }
      ]
    },
    {
      id: 3,
      title: 'PLC Programming for Industrial Automation',
      duration: '30 mins',
      tag: 'Quiz',
      completed: false,
      resources: [
        { type: 'video', title: 'PLC Programming Basics', link: 'https://www.youtube.com/watch?v=xR6XCvU2SJU' },
        { type: 'course', title: 'Siemens S7-1200 PLC Training', link: 'https://new.siemens.com/us/en/products/industrial/automation/control-systems.html' },
        { type: 'doc', title: 'IEC 61131-3 Standard', link: 'https://www.iso.org/standard/65773.html' }
      ],
      quiz: [
        { question: 'What does PLC stand for?', options: ['Programmable Logic Controller', 'Process Logic Computer', 'Programmable Link Component'], answer: 0 }
      ]
    },
    {
      id: 4,
      title: 'Computer Vision for Robotics (OpenCV/YOLO)',
      duration: '1.5 hours',
      tag: 'Project',
      completed: false,
      resources: [
        { type: 'video', title: 'Computer Vision with OpenCV', link: 'https://www.youtube.com/watch?v=nnH3-yk5ZEA' },
        { type: 'course', title: 'OpenCV Python Course', link: 'https://www.udemy.com/course/computer-vision-with-opencv/' },
        { type: 'doc', title: 'YOLOv8 Documentation', link: 'https://docs.ultralytics.com' },
        { type: 'lab', title: 'Object Detection Real-time Demo', link: 'https://github.com/ultralytics/yolov8' }
      ],
      quiz: [
        { question: 'What is the main advantage of YOLO?', options: ['High accuracy', 'Real-time detection', 'Uses no GPU'], answer: 1 }
      ]
    }
  ],
  "Electrical Engineering": [
    {
      id: 1,
      title: 'Circuit Analysis & PCB Design (Altium)',
      duration: '60 mins',
      tag: 'Video',
      completed: true,
      resources: [
        { type: 'video', title: 'Circuit Analysis Fundamentals', link: 'https://www.youtube.com/watch?v=ysKBmb5KV9g' },
        { type: 'course', title: 'PCB Design with Altium', link: 'https://www.udemy.com/course/pcb-design-using-altium-designer/' },
        { type: 'doc', title: 'Ohm\'s Law & Circuit Theorems', link: 'https://www.electronics-tutorials.ws' },
        { type: 'tool', title: 'Altium Official Tutorials', link: 'https://www.altium.com/documentation' }
      ],
      quiz: [
        { question: 'What is impedance in AC circuits?', options: ['Resistance only', 'Resistance + Reactance', 'Voltage ratio'], answer: 1 }
      ]
    },
    {
      id: 2,
      title: 'Power Systems & Smart Grid Technology',
      duration: '2 hours',
      tag: 'Lab',
      completed: false,
      resources: [
        { type: 'video', title: 'Power Systems Overview', link: 'https://www.youtube.com/watch?v=kROlhMIp_Eg' },
        { type: 'course', title: 'Smart Grid Technology', link: 'https://www.edx.org/course/smart-grid-fundamentals' },
        { type: 'doc', title: 'IEEE Power & Energy Society Standards', link: 'https://standards.ieee.org/standard/' },
        { type: 'simulation', title: 'PSSE Power System Simulator', link: 'https://www.siemens-energy.com/en/portfolio/software/pss-e' }
      ],
      quiz: [
        { question: 'What is a transformer?', options: ['AC voltage regulator', 'Converts AC voltage levels', 'Power storage device'], answer: 1 }
      ]
    },
    {
      id: 3,
      title: 'Microcontroller Programming (Embedded C)',
      duration: '45 mins',
      tag: 'Quiz',
      completed: false,
      resources: [
        { type: 'video', title: 'Embedded C Programming Guide', link: 'https://www.youtube.com/watch?v=5nQ3lWTdKWQ' },
        { type: 'course', title: 'STM32 Microcontroller Course', link: 'https://www.udemy.com/course/stm32-microcontroller-programming/' },
        { type: 'doc', title: 'ARM Cortex-M Documentation', link: 'https://developer.arm.com' },
        { type: 'practice', title: 'Arduino IDE Projects', link: 'https://www.arduino.cc/en/Guide' }
      ],
      quiz: [
        { question: 'What is UART protocol?', options: ['Wireless protocol', 'Serial communication protocol', 'Power protocol'], answer: 1 }
      ]
    },
    {
      id: 4,
      title: 'Renewable Energy Systems Integration',
      duration: '1.5 hours',
      tag: 'Project',
      completed: false,
      resources: [
        { type: 'video', title: 'Solar & Wind Energy Systems', link: 'https://www.youtube.com/watch?v=7j0Vit50rAk' },
        { type: 'course', title: 'Renewable Energy Engineering', link: 'https://www.coursera.org/learn/renewable-energy' },
        { type: 'doc', title: 'IRENA Technology Briefs', link: 'https://www.irena.org' },
        { type: 'research', title: 'Solar Energy Journal', link: 'https://www.sciencedirect.com/journal/solar-energy' }
      ],
      quiz: [
        { question: 'What is the efficiency of commercial solar panels?', options: ['50%+', '20-22%', 'Over 90%'], answer: 1 }
      ]
    }
  ],
  "Communication Engineering": [
    {
      id: 1,
      title: '5G Network Architecture & Protocols',
      duration: '60 mins',
      tag: 'Video',
      completed: true,
      resources: [
        { type: 'video', title: '5G Technology Explained', link: 'https://www.youtube.com/watch?v=GEx_d0SjvS0' },
        { type: 'course', title: '5G Network Fundamentals', link: 'https://www.coursera.org/learn/5g' },
        { type: 'doc', title: '3GPP 5G Specifications', link: 'https://www.3gpp.org' },
        { type: 'research', title: 'IEEE 5G Research Papers', link: 'https://ieeexplore.ieee.org' }
      ],
      quiz: [
        { question: 'What is the latency of 5G?', options: ['100ms', '10ms', '1ms'], answer: 2 }
      ]
    },
    {
      id: 2,
      title: 'Satellite Communication Systems Design',
      duration: '2 hours',
      tag: 'Lab',
      completed: false,
      resources: [
        { type: 'video', title: 'Satellite Communication Overview', link: 'https://www.youtube.com/watch?v=UxJJYc3w8rs' },
        { type: 'course', title: 'Satellite System Design', link: 'https://www.edx.org/course/satellite-communications' },
        { type: 'doc', title: 'ITU Satellite Regulations', link: 'https://www.itu.int/en/ITU-R/study-groups/' },
        { type: 'tool', title: 'Satellite Orbit Simulator', link: 'https://www.n2yo.com' }
      ],
      quiz: [
        { question: 'What are the three types of satellite orbits?', options: ['GEO, MEO, LEO', 'High, Mid, Low', 'Circular, Elliptical, Polar'], answer: 0 }
      ]
    },
    {
      id: 3,
      title: 'Antenna Theory & Wave Propagation',
      duration: '45 mins',
      tag: 'Video',
      completed: false,
      resources: [
        { type: 'video', title: 'Antenna Fundamentals', link: 'https://www.youtube.com/watch?v=eWz9pqwZsZo' },
        { type: 'course', title: 'Antenna Theory and Design', link: 'https://www.edx.org/course/antenna-theory' },
        { type: 'doc', title: 'Wave Propagation in Free Space', link: 'https://www.electronics-tutorials.ws/rf/' },
        { type: 'simulation', title: 'HFSS Antenna Simulator', link: 'https://www.ansys.com' }
      ],
      quiz: [
        { question: 'What is antenna gain?', options: ['Signal amplification', 'Directional concentration of power', 'Frequency response'], answer: 1 }
      ]
    },
    {
      id: 4,
      title: 'Fiber Optic Communication Links',
      duration: '1.5 hours',
      tag: 'Project',
      completed: false,
      resources: [
        { type: 'video', title: 'Fiber Optics Technology', link: 'https://www.youtube.com/watch?v=xUOPUzPvslQ' },
        { type: 'course', title: 'Optical Communications', link: 'https://www.coursera.org/learn/optical-communications' },
        { type: 'doc', title: 'Fiber Optic Cable Standards', link: 'https://www.iec.ch' },
        { type: 'research', title: 'Journal of Optical Communications', link: 'https://www.degruyter.com/journal/key/joc' }
      ],
      quiz: [
        { question: 'What is the speed of light in fiber?', options: ['3 x 10^8 m/s', '2 x 10^8 m/s', '1.5 x 10^8 m/s'], answer: 2 }
      ]
    }
  ]
};

export const jobMarketData = {
  "Computer Engineering": {
    jobs: [
      { role: 'Senior Fullstack Engineer', salary: '$145k - $210k', company: 'FAANG', skills: ['React', 'Node.js', 'System Design'], location: 'San Francisco' },
      { role: 'Backend Engineer', salary: '$120k - $180k', company: 'Startups', skills: ['Python', 'AWS', 'Microservices'], location: 'Remote' },
      { role: 'DevOps Engineer', salary: '$130k - $190k', company: 'Enterprise', skills: ['Docker', 'K8s', 'CI/CD'], location: 'New York' }
    ],
    skills: [
      { name: 'React', demand: 92, growth: '+45%' },
      { name: 'System Design', demand: 88, growth: '+35%' },
      { name: 'Docker/K8s', demand: 85, growth: '+60%' }
    ]
  },
  "Mechanical Engineering": {
    jobs: [
      { role: 'Product Design Lead', salary: '$110k - $160k', company: 'Manufacturing', skills: ['CAD', 'FEA', 'Project Management'], location: 'Detroit' },
      { role: 'Mechanical Engineer', salary: '$90k - $140k', company: 'Aerospace', skills: ['CATIA', 'ANSYS', 'Thermodynamics'], location: 'Southern CA' },
      { role: 'Manufacturing Engineer', salary: '$95k - $145k', company: 'Automotive', skills: ['Lean', 'Six Sigma', 'CAD'], location: 'Various' }
    ],
    skills: [
      { name: 'CAD Design', demand: 78, growth: '+25%' },
      { name: 'FEA', demand: 72, growth: '+20%' },
      { name: 'Additive Manufacturing', demand: 68, growth: '+50%' }
    ]
  },
  "Automobile Engineering": {
    jobs: [
      { role: 'EV Systems Architect', salary: '$130k - $190k', company: 'Tesla/NIO', skills: ['EV Tech', 'Control Systems', 'Battery Tech'], location: 'Bay Area' },
      { role: 'Powertrain Engineer', salary: '$110k - $165k', company: 'OEM', skills: ['Engine Design', 'Simulation', 'Emissions'], location: 'Detroit' },
      { role: 'Autonomous Driving Engineer', salary: '$135k - $200k', company: 'Waymo', skills: ['ADAS', 'LiDAR', 'C++'], location: 'Mountain View' }
    ],
    skills: [
      { name: 'EV Powertrains', demand: 89, growth: '+80%' },
      { name: 'Autonomous Systems', demand: 85, growth: '+70%' },
      { name: 'Battery Management', demand: 82, growth: '+65%' }
    ]
  },
  "Robotics & Automation": {
    jobs: [
      { role: 'Robotics Software Engineer', salary: '$125k - $185k', company: 'Boston Dynamics', skills: ['ROS', 'C++', 'ML'], location: 'Boston' },
      { role: 'Automation Engineer', salary: '$100k - $155k', company: 'Manufacturing', skills: ['PLC', 'SCADA', 'CAM'], location: 'Midwest' },
      { role: 'Computer Vision Engineer', salary: '$120k - $175k', company: 'Perception', skills: ['OpenCV', 'YOLO', 'PyTorch'], location: 'Remote' }
    ],
    skills: [
      { name: 'ROS', demand: 81, growth: '+40%' },
      { name: 'Computer Vision', demand: 86, growth: '+55%' },
      { name: 'PLC Programming', demand: 74, growth: '+15%' }
    ]
  },
  "Electrical Engineering": {
    jobs: [
      { role: 'Embedded Systems Lead', salary: '$120k - $175k', company: 'Semiconductor', skills: ['Verilog', 'FPGA', 'C'], location: 'San Jose' },
      { role: 'Power Systems Engineer', salary: '$105k - $160k', company: 'Utility', skills: ['PSSE', 'Smart Grid', 'High Voltage'], location: 'Various' },
      { role: 'PCB Design Engineer', salary: '$95k - $145k', company: 'Electronics', skills: ['Altium', 'Signal Integrity', 'EMC'], location: 'Remote' }
    ],
    skills: [
      { name: 'FPGA/Verilog', demand: 79, growth: '+30%' },
      { name: 'Embedded C', demand: 84, growth: '+25%' },
      { name: 'Power Electronics', demand: 76, growth: '+35%' }
    ]
  },
  "Communication Engineering": {
    jobs: [
      { role: '5G Network Architect', salary: '$135k - $200k', company: 'Telecom', skills: ['5G', 'Network Design', 'Protocols'], location: 'Various' },
      { role: 'RF Engineer', salary: '$115k - $170k', company: 'Wireless', skills: ['RF Design', 'HFSS', 'Antennas'], location: 'San Diego' },
      { role: 'Optical Communications Engineer', salary: '$120k - $175k', company: 'Fiber Companies', skills: ['Fiber Optics', 'DWDM', 'DSP'], location: 'Remote' }
    ],
    skills: [
      { name: '5G Technology', demand: 87, growth: '+75%' },
      { name: 'RF Design', demand: 78, growth: '+20%' },
      { name: 'Fiber Optics', demand: 72, growth: '+25%' }
    ]
  }
};
