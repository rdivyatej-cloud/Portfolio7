export interface Project {
  id: string;
  title: string;
  category: string;
  stack: string[];
  description: string[];
  githubUrl: string;
  image: string;
  doorCategories: ('backend-engineering' | 'ai-llm-integration' | 'full-stack-apps' | 'cybersecurity')[];
  featured?: boolean;
}

export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
  tags?: string[];
  notes?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Door {
  id: 'backend-engineering' | 'ai-llm-integration' | 'full-stack-apps' | 'cybersecurity';
  title: string;
  subtitle: string;
  description: string;
  doorNumber: string;
  accent: string;
  highlightedStack: string[];
  keyStrengths: string[];
}

export const PERSONAL_INFO = {
  name: "Divyatej Rallapalli",
  firstName: "Divyatej",
  lastName: "Rallapalli",
  initials: "DR",
  profileImage: "./images/profile.jpg",
  resumePath: "./resume/Divyatej_Rallapalli_CV.pdf",
  roles: [
    "Backend Engineer",
    "AI Engineer",
    "Cybersecurity"
  ],
  roleTitle: "Backend & AI Engineer | Software Engineering | Cybersecurity",
  email: "rdivyatej@gmail.com",
  linkedin: "https://linkedin.com/in/divyatej2007",
  github: "https://github.com/rdivyatej-cloud",
  previousPortfolio: "https://rdivyatej-cloud.github.io/divyatejportfolio2/",
  repository: "https://github.com/rdivyatej-cloud/Portfolio7",
  location: "Based in India", // TODO: exact city
  availability: "Available for internships & entry-level roles",
  university: "SRM University-AP",
  summary:
    "Computer Science (Cybersecurity) undergraduate at SRM University-AP with experience from a Backend & AI Engineering internship at FlyRank AI and five end-to-end projects across backend systems, full-stack apps and AI/LLM integration. Skilled in Python, Node.js, REST APIs, PostgreSQL/SQL, JavaScript and Docker, with a strong foundation in data structures, OOP, database design and secure software development. Solved 100+ problems on LeetCode and HackerRank. Seeking backend or AI engineering roles building reliable, scalable systems.",
};

export const DOORS: Door[] = [
  {
    id: "backend-engineering",
    doorNumber: "01",
    title: "Backend Engineering",
    subtitle: "High-throughput APIs & Deterministic Engines",
    description: "Designing idempotent metering engines, robust MVC architectures, webhook processors, and relational database systems.",
    accent: "#ccff00",
    highlightedStack: ["Node.js", "Express", "PostgreSQL", "Docker", "Stripe API"],
    keyStrengths: ["Quota Limiting & Metering", "Idempotency & Deduplication", "Relational Modeling", "RESTful Architecture"]
  },
  {
    id: "ai-llm-integration",
    doorNumber: "02",
    title: "AI / LLM Integration",
    subtitle: "Generative AI Workflows & Token Economy",
    description: "Integrating LLMs (Gemini) into production workflows with cost-aware token pricing (cached, reasoning, output) and insight pipelines.",
    accent: "#38bdf8",
    highlightedStack: ["Google GenAI SDK", "Gemini", "Token Tier Metering", "Prompt Engineering"],
    keyStrengths: ["Multi-tier Token Pricing", "Automated Financial Analysis", "Context Optimization", "Prompt Chaining"]
  },
  {
    id: "full-stack-apps",
    doorNumber: "03",
    title: "Full-Stack Apps",
    subtitle: "Interactive Dashboards & Web Systems",
    description: "End-to-end applications with modern frontend frameworks (React, Vite, Next.js) backed by automated scheduled services and reporting.",
    accent: "#f59e0b",
    highlightedStack: ["React", "Next.js", "Vite", "Recharts", "Node.js", "MongoDB"],
    keyStrengths: ["Spend Analytics Dashboards", "Automated Cron Scheduling", "State Isolation", "PDF Generation"]
  },
  {
    id: "cybersecurity",
    doorNumber: "04",
    title: "Secure Software & Cybersecurity",
    subtitle: "Signature Verification & Defense-in-Depth",
    description: "Built-in security hygiene including Stripe cryptographic webhook verification, bcrypt hashing, JWT auth, and forged payload detection.",
    accent: "#10b981",
    highlightedStack: ["Cryptographic Signatures", "JWT", "Bcrypt", "RBAC", "Network Defense"],
    keyStrengths: ["Webhook Signature Verification", "Rate & Quota Limiting (429/402)", "Tamper Resistance", "Cisco Certified"]
  }
];

export const TIMELINE: TimelineEntry[] = [
  {
    period: "2026",
    title: "Backend & AI Engineering Intern",
    organization: "FlyRank AI",
    badge: "Internship",
    description:
      "Built backend and AI-integrated features in Python, Node.js and REST APIs; input validation and API error handling; worked with Git/GitHub workflows, testing, documentation and Docker environments; delivered the Usage Metering & Billing Engine capstone.",
    tags: ["Python", "Node.js", "REST APIs", "Docker", "Stripe API", "AI Metering"],
    notes: "TODO: exact dates"
  },
  {
    period: "2022 — 2024",
    title: "Intermediate (MPC)",
    organization: "Sri Chaitanya, Hormavu, Bangalore",
    badge: "Pre-University",
    description:
      "Mathematics, Physics, and Chemistry (MPC) preparatory curriculum with focused foundation in higher mathematical analytical thinking and scientific problem-solving.",
    tags: ["Mathematics", "Physics", "Chemistry", "Analytical Problem Solving"]
  },
  {
    period: "2024 — 2028",
    title: "B.Tech in Computer Science Engineering (Cybersecurity)",
    organization: "SRM University-AP",
    badge: "Education",
    description:
      "Undergraduate coursework with specialization in Cybersecurity, Computer Science foundations, Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems.",
    tags: ["Data Structures", "OOP", "Database Design", "Cybersecurity", "Operating Systems"]
  },
  {
    period: "2023 — 2025",
    title: "Professional Certifications",
    organization: "Cisco, Google & Infosys",
    badge: "Certifications",
    description:
      "Intro to Cybersecurity (Cisco, 2023); Google Analytics (Google, 2024); Cybersecurity & Prompt Engineering (Infosys Springboard, 2025).",
    tags: ["Intro to Cybersecurity (Cisco)", "Google Analytics (Google)", "Cybersecurity & Prompt Eng (Infosys)"]
  },
  {
    period: "Ongoing",
    title: "Competitive Problem Solving & Hackathons",
    organization: "LeetCode, HackerRank & Technical Events",
    badge: "Milestones",
    description:
      "100+ programming problems solved on LeetCode and HackerRank; actively participating in college technical events and hackathons.",
    tags: ["100+ Problems", "LeetCode", "HackerRank", "Algorithms", "Hackathons"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "flyrank-capstone",
    title: "FlyRank Capstone: Usage Metering & Billing Engine",
    category: "Backend & AI Systems",
    stack: ["Node.js", "Express", "PostgreSQL", "Stripe API", "Docker"],
    image: "./images/project-flyrank.png",
    description: [
      "Meters billable actions (API calls and AI tokens) and enforces per-tenant quota limits, pricing usage across cached, reasoning and output token types.",
      "Idempotency-key-based usage recording so retried requests return the original result instead of double-billing; /usage rollup endpoint returns live usage, limit and cost.",
      "Stripe webhooks (test mode) with signature verification and event deduplication to auto-provision plan upgrades; forged payloads rejected with a 400.",
      "Quota limits enforced with 402/429 responses; containerized with Docker Compose and a seed script for demo data."
    ],
    githubUrl: "https://github.com/rdivyatej-cloud/flyrank-capstone-metering-billing",
    doorCategories: ["backend-engineering", "ai-llm-integration", "cybersecurity"],
    featured: true
  },
  {
    id: "smart-expense-tracker",
    title: "Smart Expense Tracker",
    category: "AI Backend & Analytics",
    stack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Google GenAI SDK (Gemini)",
      "pdfkit",
      "node-cron",
      "Docker"
    ],
    image: "./images/project-expense-tracker.png",
    description: [
      "JWT authentication with bcrypt-hashed passwords and protected REST endpoints for expenses with category-based summaries.",
      "AI-powered spending insights from monthly transaction data using Gemini.",
      "Monthly summary generation via node-cron and downloadable PDF reports via pdfkit.",
      "MVC-inspired backend structure (routes, controllers, services, database, jobs) on a Dockerized PostgreSQL instance."
    ],
    githubUrl: "https://github.com/rdivyatej-cloud/10x-flyrank",
    doorCategories: ["backend-engineering", "ai-llm-integration", "cybersecurity", "full-stack-apps"],
    featured: true
  },
  {
    id: "subscript",
    title: "SubScript: Subscription Optimization & Cost Analyzer",
    category: "Full-Stack MERN",
    stack: [
      "React",
      "Vite",
      "Recharts",
      "Node.js",
      "Express",
      "MongoDB (Mongoose)",
      "JWT",
      "node-cron",
      "Nodemailer"
    ],
    image: "./images/project-subscript.png",
    description: [
      "MERN app for tracking recurring subscriptions with JWT auth and user-isolated data.",
      "Recharts dashboard of costs by category and monthly-vs-yearly spend.",
      "node-cron renewal reminders at 1/3/7 days via in-app and email alerts.",
      "Budget-overrun alerts, duplicate-category detection and CSV export."
    ],
    githubUrl: "https://github.com/rdivyatej-cloud/SubScript",
    doorCategories: ["full-stack-apps", "cybersecurity"],
    featured: true
  },
  {
    id: "study-mate",
    title: "Study-Mate: AI-Powered Study Assistant",
    category: "AI Web Application",
    stack: ["Next.js", "TypeScript", "React", "Gemini AI"],
    image: "./images/project-studymate.png",
    description: [
      "Web app integrating Google Gemini to help students process and interact with study material; modular front-end architecture with documented build process."
    ],
    githubUrl: "https://github.com/rdivyatej-cloud/Study-Mate",
    doorCategories: ["ai-llm-integration", "full-stack-apps"],
    featured: false
  },
  {
    id: "fitlife-pulse",
    title: "FitLife Pulse: Gym Membership & Progress Analytics",
    category: "Python Analytics & OOP",
    stack: ["Python", "NumPy", "Pandas", "OOP", "Data Structures"],
    image: "./images/project-fitlife.png",
    description: [
      "Management system for member registration, trainer workload, workout plans and attendance; recursive calorie aggregation and attendance-based member classification with analytics reports."
    ],
    githubUrl: "https://github.com/rdivyatej-cloud/FitLifePulse",
    doorCategories: ["backend-engineering"],
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C++", "C", "SQL", "HTML", "CSS"]
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "API Development", "MVC Architecture"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQL", "MySQL", "MongoDB", "Database Design"]
  },
  {
    title: "AI & Engineering",
    skills: ["Generative AI", "LLM Integration", "Prompt Engineering"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker", "Git", "GitHub", "Vite", "VS Code"]
  },
  {
    title: "CS Foundations",
    skills: ["Data Structures & Algorithms", "OOP", "System Design", "Cybersecurity"]
  }
];

export const CONTACT_REASONS = [
  { id: "role", label: "Internship / full-time role", subjectPrefix: "[Opportunity]" },
  { id: "freelance", label: "Freelance project", subjectPrefix: "[Project]" },
  { id: "collab", label: "Collaboration", subjectPrefix: "[Collab]" },
  { id: "hi", label: "Just saying hi", subjectPrefix: "[Hello]" }
];

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Work", href: "#doors" },
  { name: "Projects", href: "#projects" },
  { name: "My story", href: "#story" },
  { name: "Contact", href: "#contact" }
];
