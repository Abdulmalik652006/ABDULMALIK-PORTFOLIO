export const personalInfo = {
  name: "Abdul Malik B J",
  title: "AI/ML Engineer & Data Engineer",
  subtitle: "Final Year B.Tech Artificial Intelligence & Data Science Student",
  status: "Available for Entry-Level Roles & Internships",
  location: "Chennai, India",
  phone: "+917550365320",
  email: "abdulmalikbj06@gmail.com",
  github: "https://github.com/abdulmalikbj",
  linkedin: "https://linkedin.com/in/abdulmalikbj",
  portfolio: "https://abdulmalikbj.vercel.app",
  resumePath: "/Abdul_Malik_Resume.pdf",
  photoPath: "/profile.jpg",
  summary: `Final year B.Tech Artificial Intelligence & Data Science student with hands-on skills in Python, SQL, data analysis, and data visualization, seeking an entry-level AI/ML Engineer / Data Engineer role. Experienced in building data cleaning, EDA, and ML model projects using Pandas, NumPy, Scikit-learn, Matplotlib, and Power BI/Tableau. Strong foundation in statistics, ETL concepts, and database querying. Quick learner eager to apply machine learning and data pipeline skills to solve real business problems.`,
  about: {
    bio: [
      "I am a final-year Artificial Intelligence and Data Science undergraduate at Aalim Muhammed Salegh College of Engineering (Affiliated to Anna University), Chennai, maintaining a CGPA of 8.20 through my 6th semester.",
      "My passion lies at the intersection of Machine Learning, scalable Data Engineering, and full-stack software development. From training predictive models and architecting ETL pipelines to containerizing infrastructure with Docker and Terraform, I build complete, end-to-end intelligent systems.",
      "I have proved these capabilities through practical engineering internships at HTGE Technologies (AWS cloud monitoring & Terraform IaC automation) and AdroIT Technologies (full-stack role-based project management system), alongside building complex flagship platforms like PrescientIQ and the C2X Web IDE."
    ],
    highlights: [
      { label: "Academic CGPA", value: "8.20 / 10", description: "Consistently strong academic performance" },
      { label: "Core Focus", value: "AI / ML & Data", description: "Predictive modeling, EDA, ETL pipelines" },
      { label: "Industry Experience", value: "2 Internships", description: "DevOps at HTGE & MERN at AdroIT" },
      { label: "Flagship Projects", value: "2 Systems", description: "PrescientIQ & C2X Desktop IDE" },
    ]
  }
};

export const skillsData = {
  programming: [
    { name: "Python", level: 90, category: "Core", icon: "Terminal" },
    { name: "SQL", level: 88, category: "Database & Querying", icon: "Database" },
    { name: "JavaScript", level: 85, category: "Web & Runtime", icon: "Code" },
    { name: "TypeScript", level: 80, category: "Typed Development", icon: "Code2" },
    { name: "HTML5", level: 92, category: "Markup", icon: "Globe" },
    { name: "CSS3", level: 90, category: "Styling", icon: "Palette" }
  ],
  mlAndData: [
    { name: "Pandas", category: "Data Manipulation" },
    { name: "NumPy", category: "Numerical Computing" },
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "Matplotlib", category: "Data Visualization" },
    { name: "Power BI", category: "Business Intelligence" },
    { name: "Tableau", category: "Visual Analytics" },
    { name: "Supervised Learning", category: "ML Concept" },
    { name: "Unsupervised Learning", category: "ML Concept" },
    { name: "Feature Engineering", category: "Data Prep" },
    { name: "Model Evaluation", category: "Validation" },
    { name: "Exploratory Data Analysis (EDA)", category: "Analysis" },
    { name: "Regression & Classification", category: "Predictive ML" }
  ],
  databases: [
    { name: "MySQL", type: "Relational RDBMS", highlight: "Complex queries & schema design" },
    { name: "MongoDB", type: "NoSQL Document", highlight: "MERN stack integration & aggregation" },
    { name: "SQLite", type: "Embedded DB", highlight: "Local storage & lightweight apps" },
    { name: "Oracle Database", type: "Enterprise RDBMS", highlight: "Enterprise query processing" }
  ],
  frameworksAndTools: [
    { name: "React.js", role: "Frontend UI Library" },
    { name: "Node.js", role: "JavaScript Runtime" },
    { name: "Express.js", role: "Backend Web Framework" },
    { name: "Tailwind CSS", role: "Modern Utility Styling" },
    { name: "Git", role: "Version Control" },
    { name: "GitHub", role: "Collaborative Code Hosting" },
    { name: "Jupyter Notebook", role: "Data Science & Experimentation" },
    { name: "VS Code", role: "Primary Development IDE" },
    { name: "Monaco Editor", role: "Browser Code Editing Engine" }
  ],
  devopsAndCloud: [
    { name: "AWS Cloud (EC2, S3)", desc: "Cloud infrastructure monitoring & resource optimization" },
    { name: "Docker", desc: "Application containerization & consistent runtime environments" },
    { name: "Terraform (IaC)", desc: "Infrastructure as Code automated cloud provisioning" },
    { name: "ETL Concepts", desc: "Data extraction, transformation, and automated loading pipelines" }
  ],
  coreConcepts: [
    "Data Structures & Algorithms (DSA)",
    "Database Management Systems (DBMS)",
    "Machine Learning & Predictive Modeling",
    "Object-Oriented Programming (OOP)",
    "Statistics & Probability for Data Science",
    "ETL Pipeline Concepts & Database Querying"
  ]
};

export const projectsData = [
  {
    id: "prescientiq",
    title: "PrescientIQ",
    subtitle: "AI-Powered Predictive Management System",
    badge: "Flagship AI Project",
    status: "Completed",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Python ML Models", "Pandas", "Scikit-learn"],
    overview: "An enterprise-grade, AI-powered predictive management platform architected using the MERN stack coupled with Python machine learning pipelines. Engineered to help organizations predict demand, assess financial/operational risks, detect operational anomalies, and dynamically optimize resource allocation.",
    bulletPoints: [
      "Developed an AI-powered management platform using React.js, Node.js, Express.js, MongoDB, and Python ML models to predict demand, assess risks, detect anomalies, and optimize resource allocation.",
      "Implemented interactive dashboards with real-time data visualization, automated report generation, historical trend analysis, and predictive insights to support data-driven business decisions.",
      "Engineered data pre-processing and feature pipelines integrating predictive classification and regression models.",
      "Built clean RESTful API endpoints bridging the MERN backend with Python inference scripts."
    ],
    features: [
      "Demand Forecasting & Risk Assessment",
      "Real-Time Anomaly Detection Engine",
      "Interactive Visualization Dashboards",
      "Automated Report Generation",
      "Historical Trend Analysis & KPI Monitoring"
    ],
    github: "https://github.com/abdulmalikbj",
    demo: "#"
  },
  {
    id: "c2x-ide",
    title: "C2X Desktop IDE & Platform",
    subtitle: "AI-Powered Browser Code Editor & Developer Suite",
    badge: "Advanced Web System",
    status: "Active Development",
    techStack: ["React.js", "TypeScript", "JavaScript", "Monaco Editor", "Tailwind CSS", "Git", "GitHub"],
    overview: "A sophisticated browser-based developer platform and code editor inspired by VS Code, tailored for modern software engineers. Combines the high-performance Monaco Editor with seamless multi-tab editing, workspace management, and planned AI developer assistance.",
    bulletPoints: [
      "Developing a browser-based code editor inspired by VS Code with syntax highlighting, multi-tab editing, and comprehensive file management.",
      "Implementing workspace management, developer productivity tools, and an integrated IDE interface.",
      "Integrated Monaco Editor for VS Code-grade code highlighting, intelligent auto-completion, and error diagnostics.",
      "Designed an extensible UI architecture supporting light/dark theme toggles, file tree navigation, and keyboard shortcuts."
    ],
    features: [
      "Monaco Editor Code Engine (VS Code core)",
      "Multi-tab Editor & Dynamic File Tree",
      "Syntax Highlighting & Code Linting",
      "Integrated Workspace State Management",
      "Developer Productivity Tooling"
    ],
    github: "https://github.com/abdulmalikbj",
    demo: "#"
  }
];

export const internshipsData = [
  {
    role: "DevOps Intern",
    company: "HTGE Technologies Pvt. Ltd.",
    type: "On-site / Hybrid Internship",
    period: "Jul 2025 – Aug 2025",
    accentColor: "purple",
    points: [
      "Monitored AWS cloud infrastructure metrics (EC2, S3), identifying usage patterns to optimize resource allocation and cost efficiency.",
      "Containerized applications using Docker and automated provisioning with Terraform (IaC), improving deployment consistency across staging and production."
    ],
    skills: ["AWS (EC2, S3)", "Docker", "Terraform (IaC)", "Cloud Monitoring", "Cost Optimization"]
  },
  {
    role: "Virtual Internship",
    company: "AdroIT Technologies Innovative Solutions Pvt. Ltd.",
    type: "Virtual Engineering Internship (6 Weeks)",
    period: "Dec 2025 – Feb 2026",
    accentColor: "cyan",
    points: [
      "Built a Project Management Tool as the core internship deliverable with high code quality and responsive design.",
      "Developed using Express.js, React.js, Tailwind CSS, and Node.js, implementing secure role-based access control (RBAC)."
    ],
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Role-Based Access Control", "MERN Stack"]
  }
];

export const educationData = [
  {
    degree: "B. Tech – Artificial Intelligence & Data Science",
    institution: "Aalim Muhammed Salegh College of Engineering, Avadi",
    affiliation: "Affiliated to Anna University",
    duration: "2023 – 2027",
    score: "CGPA: 8.20",
    scoreDetail: "Up to 6th semester",
    status: "Final Year Student",
    highlights: [
      "Specialized in Artificial Intelligence, Machine Learning algorithms, and scalable Data Science pipelines.",
      "Relevant coursework: Data Structures & Algorithms, DBMS, Object-Oriented Programming, Machine Learning, Statistics & Probability, Operating Systems, Web Technologies."
    ]
  },
  {
    degree: "Higher Secondary Certificate (Class XII)",
    institution: "The National Matriculation Higher Secondary School, Kanchipuram",
    affiliation: "Tamil Nadu State Board",
    duration: "2022",
    score: "77.5%",
    scoreDetail: "Board Examination",
    status: "Completed",
    highlights: [
      "Strong foundational coursework in Mathematics, Physics, Chemistry, and Computer Science."
    ]
  }
];

export const certificationsData = [
  {
    title: "AI FUNDAMENTALS",
    issuer: "IBM SkillsBuild",
    date: "October 2026",
    icon: "Cpu",
    badge: "IBM Certified",
    description: "Comprehensive credential covering core Artificial Intelligence concepts, ML paradigms, neural networks, ethics in AI, and real-world enterprise use cases."
  },
  {
    title: "Generation AI",
    issuer: "Google Cloud",
    date: "January 2026",
    icon: "Cloud",
    badge: "Google Cloud",
    description: "Certified by Google Cloud on generative AI models, foundation model architectures, prompt design, and deploying intelligent AI solutions on Google Cloud infrastructure."
  }
];

export const languagesData = [
  { language: "English", proficiency: "Professional Working Proficiency", flag: "EN" },
  { language: "Tamil", proficiency: "Native / Mother Tongue", flag: "TA" },
  { language: "Arabic", proficiency: "Reading Proficiency", flag: "AR" }
];
