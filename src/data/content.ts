export interface Project {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  category: string;
  stack: string[];
  description: string;
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  highlightColor: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  organization: string;
  location?: string;
  details: string[];
  type: 'experience' | 'education';
  badge?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credential?: string;
}

export const PERSONAL = {
  name: "Divyatej Rallapalli",
  title: "Backend & AI Engineer | Software Engineering | Cybersecurity",
  roleHeadline: "Backend & AI Engineer",
  heroHeadlines: [
    "I build systems.",
    "I engineer intelligence."
  ],
  supportingText: "Turning complex ideas into reliable software, scalable backend systems, and intelligent applications.",
  introduction: "I build reliable backend systems and intelligent applications that combine software engineering with AI. I'm a Computer Science undergraduate specializing in Cybersecurity at SRM University–AP, with practical experience building APIs, full-stack applications, database-driven systems, and AI-powered workflows.",
  about: {
    heading: "Beyond the code.",
    description: "I'm a Computer Science student passionate about backend engineering, artificial intelligence, and building software that solves practical problems. I enjoy exploring new technologies, designing system architectures, and turning ideas into working applications.",
    paragraphs: [
      "My engineering foundation is rooted in cybersecurity, backend architectures, and AI integration. At SRM University–AP, I focus on understanding how modern distributed systems scale securely and how generative AI models can be woven into deterministic workflows.",
      "During my internship at FlyRank AI, I engineered a high-throughput usage metering engine and integrated AI workflows with Stripe webhooks and Docker. I treat software engineering as the discipline of eliminating bottlenecks, preventing security vulnerabilities, and ensuring zero data loss.",
      "When tackling a new problem, I start by designing clean database schemas, establishing clear API contracts, and structuring services around the principle of idempotency and failure-resilience."
    ],
    pillars: [
      {
        title: "Backend & Distributed Systems",
        description: "Designing high-throughput REST APIs, idempotent metering pipelines, relational schemas, and microservice containerization."
      },
      {
        title: "Applied AI & LLM Workflows",
        description: "Orchestrating Gemini APIs, context window management, automated multi-tier token pricing, and generative data pipelines."
      },
      {
        title: "Cybersecurity & Defenses",
        description: "Cryptographic signature validation, tamper prevention, JWT/RBAC security, rate-limiting, and defensive software patterns."
      },
      {
        title: "End-to-End Ownership",
        description: "From architecture diagrams and PostgreSQL migrations to automated background cron jobs and production Docker deployments."
      }
    ]
  },
  education: {
    institution: "SRM University–AP",
    degree: "B.Tech in Computer Science Engineering (Cybersecurity)",
    period: "2024–2028",
    cgpa: "7.5",
    preUniversity: {
      institution: "Sri Chaitanya, Hormavu, Bangalore",
      degree: "Intermediate (MPC)",
      period: "2022–2024"
    }
  },
  contact: {
    email: "rdivyatej@gmail.com",
    phone: "+91 7259175577",
    linkedin: "https://www.linkedin.com/in/divyatej2007/",
    github: "https://github.com/rdivyatej-cloud",
    location: "India",
    statusText: "Open to opportunities in Backend & AI Engineering"
  }
};

export const PROJECTS: Project[] = [
  {
    number: "01",
    id: "flyrank-capstone",
    title: "FlyRank Capstone — Usage Metering & Billing Engine",
    subtitle: "High-Throughput Token Metering & Stripe Webhook Pipeline",
    category: "Backend & Cloud Systems",
    stack: ["Node.js", "Express", "PostgreSQL", "Stripe API", "Docker"],
    description: "A backend service that tracks billable API calls and AI token usage, enforces tenant-based quotas, and calculates usage costs.",
    features: [
      "Idempotency-based usage recording preventing double-billing on client retries.",
      "Per-tenant quota enforcement responding with deterministic 402/429 limits.",
      "Live usage and cost rollup API calculating tier-based pricing.",
      "Cryptographic Stripe webhook integration with signature validation.",
      "Event deduplication pipeline ensuring forged payloads are rejected.",
      "Multi-container deployment orchestrated via Docker Compose and seed scripts."
    ],
    githubUrl: "https://github.com/rdivyatej-cloud/flyrank-capstone-metering-billing",
    image: "./images/project-flyrank.png",
    highlightColor: "#00e5ff"
  },
  {
    number: "02",
    id: "smart-expense-tracker",
    title: "Smart Expense Tracker",
    subtitle: "AI-Powered Financial Insights & Report Generation",
    category: "Full-Stack & Generative AI",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT", "Gemini AI", "PDFKit", "Docker"],
    description: "A full-stack expense management application with secure authentication, expense tracking, financial dashboards, and AI-powered spending insights.",
    features: [
      "JWT authentication paired with bcrypt password hashing and protected endpoints.",
      "Comprehensive expense CRUD operations with category-based rollups.",
      "Gemini AI prompt pipeline providing monthly financial habit suggestions.",
      "Automated monthly summary generation scheduled via node-cron.",
      "Downloadable statement reports rendered server-side via PDFKit.",
      "Dockerized PostgreSQL instance with indexed relational schemas."
    ],
    githubUrl: "https://github.com/rdivyatej-cloud/10x-flyrank",
    image: "./images/project-expense-tracker.png",
    highlightColor: "#38bdf8"
  },
  {
    number: "03",
    id: "subscript",
    title: "SubScript — Subscription Optimization & Cost Analyzer",
    subtitle: "Recurring Expense Intelligence & Renewal Alerter",
    category: "Full-Stack Web Application",
    stack: ["React", "Vite", "Recharts", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    description: "A subscription management platform designed to help users understand, track, and optimize recurring expenses.",
    features: [
      "MERN stack architecture with JWT auth and user-isolated collection queries.",
      "Interactive spend analytics dashboard built with Recharts.",
      "Automated renewal reminders sent 1, 3, and 7 days prior via Nodemailer.",
      "Real-time budget-overrun detection and alert triggers.",
      "Smart duplicate subscription detection algorithm.",
      "One-click CSV financial export for personal accounting."
    ],
    githubUrl: "https://github.com/rdivyatej-cloud/SubScript",
    image: "./images/project-subscript.png",
    highlightColor: "#60a5fa"
  },
  {
    number: "04",
    id: "study-mate",
    title: "Study-Mate — AI-Powered Study Assistant",
    subtitle: "Contextual Academic Interaction Engine",
    category: "Applied AI & Frontend",
    stack: ["Next.js", "TypeScript", "React", "Gemini AI"],
    description: "An AI-powered study application that helps students process, summarize, and interact with learning materials.",
    features: [
      "Context-aware academic summarization powered by Google Gemini models.",
      "Interactive Q&A engine analyzing long-form lecture materials.",
      "Modular Next.js and TypeScript frontend with zero-latency streaming responses.",
      "Streamlined UI crafted for focused study sessions and review note generation."
    ],
    githubUrl: "https://github.com/rdivyatej-cloud/Study-Mate",
    image: "./images/project-studymate.png",
    highlightColor: "#818cf8"
  },
  {
    number: "05",
    id: "fitlife-pulse",
    title: "FitLife Pulse — Gym Membership & Progress Analytics",
    subtitle: "High-Performance Member Progression Engine",
    category: "Data Structures & Python Core",
    stack: ["Python", "NumPy", "Pandas", "OOP", "Data Structures"],
    description: "A Python-based gym management system covering member registration, trainer workload, workout planning, attendance tracking, and analytics.",
    features: [
      "Object-Oriented Architecture organizing members, trainers, and workout routines.",
      "Data structures tracking daily trainer workloads and scheduling constraints.",
      "Recursive calorie burn aggregation across custom fitness routines.",
      "Pandas & NumPy data analysis generating attendance and retention breakdowns."
    ],
    githubUrl: "https://github.com/rdivyatej-cloud/FitLifePulse",
    image: "./images/project-fitlife.png",
    highlightColor: "#34d399"
  }
];

export const TIMELINE: TimelineEntry[] = [
  {
    period: "2026",
    role: "Backend & AI Engineering Intern",
    organization: "FlyRank AI",
    type: "experience",
    badge: "Internship",
    details: [
      "Worked on backend and AI-integrated engineering projects using Python, Node.js, and REST APIs.",
      "Implemented structured input validation, defensive middleware, and robust API error handling.",
      "Integrated AI model and API capabilities into production application workflows.",
      "Designed and developed the Usage Metering & Billing Engine for SaaS multi-tenant billing.",
      "Collaborated using Git, GitHub workflows, Docker containerization, automated testing, and technical documentation."
    ]
  },
  {
    period: "2024 — 2028",
    role: "B.Tech in Computer Science Engineering (Cybersecurity)",
    organization: "SRM University–AP",
    type: "education",
    badge: "Undergraduate",
    details: [
      "Current CGPA: 7.5",
      "Specialization coursework in Cybersecurity, Network Security, and Defensive Architecture.",
      "Core CS foundations: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and System Design."
    ]
  },
  {
    period: "2022 — 2024",
    role: "Intermediate (MPC)",
    organization: "Sri Chaitanya, Hormavu, Bangalore",
    type: "education",
    badge: "Pre-University",
    details: [
      "Completed higher secondary studies in Mathematics, Physics, and Chemistry (MPC).",
      "Rigorous problem-solving curriculum building a strong mathematical and logical foundation."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    description: "Core programming and query languages used for systems, scripting, and web.",
    skills: ["Python", "JavaScript", "C++", "C", "SQL", "HTML", "CSS"]
  },
  {
    category: "Backend & APIs",
    description: "Architecting reliable, high-throughput, and clean RESTful microservices.",
    skills: ["Node.js", "Express.js", "REST APIs", "API Development", "MVC Architecture"]
  },
  {
    category: "Databases",
    description: "Relational and document storage design with schema optimization.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Design"]
  },
  {
    category: "AI & Engineering",
    description: "Deploying generative AI APIs, prompt workflows, and token economics.",
    skills: ["Artificial Intelligence", "Generative AI", "LLM Integration", "Prompt Engineering"]
  },
  {
    category: "Tools & DevOps",
    description: "Containerization, version control, build workflows, and modern toolchains.",
    skills: ["Docker", "Git", "GitHub", "Vite", "VS Code"]
  },
  {
    category: "Computer Science",
    description: "Theoretical and architectural foundations of robust software engineering.",
    skills: ["Data Structures & Algorithms", "OOP", "System Design", "Relational Algebra", "Cybersecurity"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Cybersecurity & Prompt Engineering",
    issuer: "Infosys Springboard",
    year: "2025"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2023"
  },
  {
    title: "Google Analytics",
    issuer: "Google",
    year: "2024"
  }
];

export const ACHIEVEMENTS = [
  "Solved 100+ programming problems across LeetCode and HackerRank.",
  "Active participant in university technical events, coding hackathons, and systems challenges.",
  "Designed and delivered production-grade Usage Metering & Billing Engine during FlyRank AI internship."
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];
