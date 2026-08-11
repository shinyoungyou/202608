// ============================================================
// SITE DATA — edit this file to update your portfolio content.
// Nothing in src/components/ should need to change for routine
// updates like adding a skill, job, or project.
// ============================================================

export const IDENTITY = {
  name: "Shinyoung You",
  pronouns: "she/her",
  role: "Security Operations, Cloud Engineering & Application Security",
  certifications: "CompTIA Security+ & ISC2 CC Certified",
  photo: "img/profile1.jpeg",
  location: "Vancouver, BC",
  phone: "+1 778 992 1553",
  email: "shinyoungyou2@gmail.com",
  schoolEmail: "syou17@my.bcit.ca",
  schoolEmailExpiry: "Active until Dec 2028",
  github: "https://github.com/shinyoungyou",
  linkedin: "https://linkedin.com/in/shinyoungyou",
};

export const NAV_ITEMS = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Work Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
];

export const SKILLS = [
  "Python", ".NET", "C#", "JavaScript", "HTML", "CSS",
  "React", "Django", "ASP.NET", "Figma", "Linux",
]

export const EXPERIENCE = [
  {
    title: "SOC Analyst Co-op, Security Operations",
    company: "Vancity Credit Union",
    location: "Vancouver, BC",
    link: "https://www.vancity.com",
    link2: "https://www.vancity.com/privacy-security/report",
    period: "May 2025 – Dec 2025",
    bullets: [
      "Investigated and managed 1,050+ ServiceNow security tickets, independently resolving ~70% and escalating the remaining ~30%; contributed 19% of annual SOC ticket volume while maintaining a low average MTTR of ~2 hours and adhering to NIST CSF principles.",
      "Reviewed public-facing and internal application security findings during Salt Security vendor sessions using the OWASP Top 10 framework, including SQL injection and XSS.",
      "Identified and validated gaps in phishing and data leak playbooks (e.g., PCI DSS), escalating findings to Incident Coordinators to improve incident response procedures and operational readiness.",
      "Validated security threats and determined response actions using MITRE ATT&CK and CVSS, correlating logs across SOAR/EDR platforms including MS Defender, Entra ID, Darktrace, Arctic Wolf, and Proofpoint.",
      "Mitigated a phishing campaign containing clipboard malware targeting senior management; escalated to senior analyst, blocked malicious domains, and presented findings to the team, contributing to a security awareness newsletter.",
      "<strong>Collaborated with a team of 5 on a Threat-Hunting Automation Project (Jun–Jul 2025)</strong>: to improve manual workflows; synthesized proof-of-concept IoC/TTP collection and Splunk queries into a 9-page presentation for management.",
      "Used Excel to convert security event timestamps from UTC to Pacific Time to support AUP investigations and enable actionable reporting to HR and management.",
    ],
    tags: ["SOC", "NIST CSF", "OWASP", "Splunk", "SOAR/EDR", "Threat Hunting"],
  },
  {
    title: "Web Developer Intern",
    company: "Cube Design and Communication",
    location: "Markham, ON (Remote)",
    link: "https://cubedesign.ca",
    link2: "https://cubedesign.ca/contact",
    period: "Feb 2023 – May 2023",
    bullets: [
      "Redesigned a digital marketing customer's website using Vue.js and Firebase, integrating multilingual support and a contact form with the Elastic Email API, which boosted user engagement by 19%.",
      "Demonstrated website contact form SMTP configurations during a team Agile meeting, reducing internal redesign project implementation time by 25%.",
    ],
    tags: ["Vue.js", "Firebase", "API Integration", "Agile"],
  },
  {
    title: "IT Support Intern",
    company: "Vancouver Fashion Week",
    location: "Vancouver, BC",
    link: "https://www.vanfashionweek.com",
    link2:
      "https://www.vanfashionweek.com/event-details/designer-registration-4/form",
    period: "Jan 2023 – Feb 2023",
    bullets: [
      "Troubleshooted and resolved software issues with designer registration forms on a Wix website for FW 2023, facilitating 20+ successful designer showcases.",
      "Collaborated with a team of 3 to develop dynamic pages using Wix databases, reducing static page maintenance by 75%.",
    ],
    tags: ["Wix", "Database Management", "IT Support"],
  },
];

// A project can list more than one category (e.g. Project A below
// spans both Application Security and Networking).
export const CATEGORIES = [
  "Application Security",
  "DevOps",
  "Cloud",
  "Networking",
  "IoT",
  "Accessibility",
  "Legacy",
]

export const PROJECTS = [
  {
    id: "Project A",
    categories: ["Application Security", "Networking"],
    desc: "Traffic-inspecting reverse proxy that flags anomalous request patterns in real time.",
    tech: ["Go", "eBPF", "Redis"],
    repo: "https://github.com/example/project-a",
    demo: null,
  },
  {
    id: "Project B",
    categories: ["Application Security"],
    desc: "Static analysis rule set for catching auth-bypass patterns before code review.",
    tech: ["Python", "Semgrep"],
    repo: "https://github.com/example/project-b",
    demo: null,
  },
  {
    id: "Project C",
    categories: ["DevOps"],
    desc: "Zero-downtime deployment pipeline with automatic rollback on health-check failure.",
    tech: ["GitHub Actions", "Terraform", "AWS"],
    repo: "https://github.com/example/project-c",
    demo: null,
  },
  {
    id: "Project D",
    categories: ["Networking"],
    desc: "Lightweight VPN mesh for connecting distributed home-lab nodes over WireGuard.",
    tech: ["WireGuard", "Bash"],
    repo: "https://github.com/example/project-d",
    demo: null,
  },
  // Add more here, e.g.:
  // { id: "Project E", categories: ["Cloud"], desc: "...", tech: ["..."], repo: "...", demo: "..." },
]

export const EDUCATION = [
  {
    name: "B.Sc. Computer Science",
    meta: "University of British Columbia · 2019 — 2023",
  },
  {
    name: "AWS Certified Solutions Architect",
    meta: "2023",
  },
]

export const CERTIFICATIONS = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    status: "Certified",
  },
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    status: "Certified",
  },
];

export const ABOUT = {
  heading: "A Little Bit About Me..",
  paragraphs: [
    "Hello, it’s Shinyoung You. Thanks for visiting! On my website, you can check all my work in cybersecurity and secure web/mobile application development, which I’m really into and have been building over the past 3 years through school projects and independent initiatives.",
    "I have a software development educational background dating back to 2022. After completing my SOC Analyst Co-op at Vancity Credit Union in December 2025, I expanded my focus into networking and cybersecurity. As a result, I earned my CompTIA Security+ (July 2026) and ISC2 CC (December 2025) certifications. Currently, I am in my final semester of the Computer Systems Technology program (specialized in Cloud Computing) at BCIT.",
  ],
  signoff: "Hope you find it interesting :)",
};