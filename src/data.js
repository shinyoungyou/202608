// ============================================================
// SITE DATA — edit this file to update your portfolio content.
// Nothing in src/components/ should need to change for routine
// updates like adding a skill, job, or project.
// ============================================================

export const IDENTITY = {
  name: "SHINYOUNG YOU",
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
  // { id: "skills", label: "Skills" },
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
// export const CATEGORIES = [
//   "Application Security",
//   "DevOps",
//   "Cloud",
//   "Networking",
//   "IoT",
//   "Accessibility",
//   "Legacy",
// ]

export const CATEGORIES = [
  "Application Security",
  "Access Control",
  "Cloud",
  "DevOps",
  "Networking",
  "IoT",
  "Android/Mobile",
  "SaaS",
  "Accessibility",
  // "Legacy",
];

export const PROJECTS = [
  {
    id: "SmartIEC",
    slug: "smartiec",
    categories: ["IoT", "DevOps"],
    desc: "Smart home reliability optimization project. Implemented 500ms input debouncing and integrated IoT sensors to automate HVAC actuators, contributing to a team of 5.",
    tech: ["GitHub Actions", "Flask", "Python", "JavaScript", "IoT"],
    img: "img/smartiec/after-dashboard.png",
    repo: "https://github.com/khaiphan812/COMP3800-SmartIEC",
    demo: "https://www.youtube.com/embed/2No5rb0r7HA?si=25UPfMiD0ES9PUuV",
    videos: [
      {
        title: "Sprint 1 Individual Demo Video: Frontend UI & Core Logic",
        url: "https://www.youtube.com/embed/srlxAL-GA1k?si=GNvQaGfTzBlhz_AT",
      },
      {
        title:
          "Sprint 2 Individual Demo Video: Flask Backend & IoT Integration",
        url: "https://www.youtube.com/embed/2No5rb0r7HA?si=25UPfMiD0ES9PUuV",
      },
    ],
    images: [
      "img/smartiec/before-dashboard.png",
      "img/smartiec/after-dashboard.png",
      "img/smartiec/before-survey.png",
      "img/smartiec/after-survey.png",
    ],
    pdf: "https://docs.google.com/presentation/d/e/2PACX-1vR8TpsVquli2xf1nhVvD4HLsR1FvftMS351BCnSRjE2Ws8t35Z5JYyNkPSu9XnKXR0nEzTa30Qp_L7n/pubembed?start=false&loop=true&delayms=3000",
  },
  {
    id: "Wireshark Network Analysis",
    slug: "wireshark",
    categories: ["Networking"],
    desc: "Captured and analyzed live Wi-Fi traffic generated during a Google search using Wireshark to examine how web requests travel across Ethernet, IPv6, TCP, and TLS layers and how HTTPS protects client-server communication.",
    tech: ["Wireshark", "TCP/IP", "TLS", "HTTPS"],
    img: "img/wireshark/preview.png",
    repo: null,
    demo: null,
    pdf: "https://docs.google.com/presentation/d/e/2PACX-1vRtU4JS3VhV-TJXJP_IwneYMSXCx5dDf-JY1tdrrK4HC8ym6O0n0eXb3u-8gKrkxYK33ED2Rwp15O4k/pubembed?start=false&loop=true&delayms=3000",
    images: ["img/wireshark/preview.png"],
  },
  {
    id: "Certification Implementation",
    slug: "certimpl",
    categories: ["Application Security", "Networking"],
    desc: "Collection of network security tools including packet inspection via Wireshark and local HTTPS server implementations using OpenSSL/mkcert.",
    tech: ["Node.js", "OpenSSL", "TLS/HTTPS"],
    img: "img/certimpl/secure.png",
    repo: null,
    demo: null,
    images: ["img/certimpl/unsecure.png", "img/certimpl/secure.png"],
    pdf: "https://docs.google.com/presentation/d/e/2PACX-1vSme_Cx8yrgtP7Xmy20lH9FbFBw9fEu9GfvW3k1YtpyO1hMGEjOPW7Xodu2S6vnyBOl6BJEtV6OSp5L/pubembed?start=false&loop=true&delayms=3000",
  },
  {
    id: "TLS Certificate Chain Analysis",
    slug: "fortinet",
    categories: ["Networking"],
    desc: "Analyzed fortinet.com's TLS certificate chain using browser certificate viewer and OpenSSL, examining certificate hierarchy, RSA-2048 public key, SHA-256 signature algorithm, and revocation mechanisms to understand how TLS establishes trust and protects secure HTTPS communication.",
    tech: ["TLS/HTTPS", "RSA", "SHA-256", "OCSP", "CRL"],
    img: "img/fortinet/preview.png",
    repo: null,
    demo: null,
    pdf: "https://docs.google.com/presentation/d/e/2PACX-1vS4JKioqDGWl2pqfpjN8vHJCkB0XgLEiJ5DbbDPZjq3z4GPqg5WJtLFSmAyDavv3pjINAGVD2a8TJbu/pubembed?start=false&loop=true&delayms=3000",
    // images: ["img/fortinet/preview.png"],
  },
  {
    id: "Password Manager",
    slug: "passwordmngr",
    categories: ["Cloud", "Application Security", "DevOps", "Access Control"],
    desc: "Web app for secure password generation and health evaluation using the Have I Been Pwned API. Architected on AWS with Cognito, DynamoDB, and private VPC networking.",
    tech: ["AWS", "IAM", "Node.js", "API", "ALB", "VPC", "subnetting"],
    img: "img/passwordmngr/aws-complicated.png",
    repo: "https://github.com/Hazel-Jeong-dev/COMP3962_PasswordManager",
    demo: null,
    pdf: `${
      import.meta.env.BASE_URL
    }docs/COMP3962_Group3_PasswordManager_Report.pdf`,
    images: [
      // "img/passwordmngr/aws-complicated.png",
      "img/passwordmngr/aws-simple.png",
      "img/passwordmngr/pw-evaluate.png",
    ],
  },
  {
    id: "Android CVE Lookup",
    slug: "cvelookup",
    categories: ["Application Security", "Android/Mobile"],
    desc: "A Flutter-based Android app that queries the NVD API to search and track CVEs by severity, enabling on-call engineers to triage vulnerabilities on the go.",
    tech: ["Flutter", "Dart", "NIST NVD API"],
    img: "img/cvelookup/preview.png",
    repo: null,
    demo: null,
    videos: [
      {
        title:
          "This video explains the CVE Lookup app's functionality and how it queries the NVD API to retrieve vulnerability data.",
        url: "https://www.youtube.com/embed/PAJjz87JlwE?si=5pAbu_8D61Rdre3J",
      },
    ],
    images: [
      "img/cvelookup/bookmark.png",
      "img/cvelookup/detailpage.png",
      "img/cvelookup/develop.png",
      "img/cvelookup/searchpage.png",
    ],
  },
  {
    id: "Allergy Scanner",
    slug: "allergyscanner",
    categories: ["Android/Mobile", "Accessibility"],
    desc: "Healthcare-focused mobile tool to scan food barcodes and identify potential allergens, improving food-tech accessibility.",
    tech: ["Barcode API", "Mobile First"],
    img: "img/allergyscanner/preview.png",
    repo: "https://github.com/shinyoungyou/2800-202510-DTC11",
    demo: "https://two800-202510-dtc11.onrender.com/",
    images: [
      // "img/allergyscanner/scanning.png",
      "img/allergyscanner/scanning2.png",
      "img/allergyscanner/scan-result.png",
      "img/allergyscanner/alternatives.png",
      "img/allergyscanner/history.png",
      "img/allergyscanner/network-troubleshoot.png",
      "img/allergyscanner/linkedin-preview.png",
    ],
  },
  {
    id: "Slouchii",
    slug: "slouchii",
    categories: ["IoT"],
    desc: "Full-stack web application integrated with Arduino hardware built at nwHacks 2025 within 24 hours to improve posture. Developed React UI with a posture monitoring timer and real-time data flow via InfluxDB and Node.js.",
    tech: ["React", "Node.js", "InfluxDB", "Arduino"],
    img: "img/slouchii/preview.png",
    repo: "https://github.com/shinyoungyou/nwHacks2025",
    demo: "https://devpost.com/software/slouchii",
  },
  {
    id: "Study Buddy",
    slug: "studybuddy",
    categories: ["SaaS"],
    desc: "Study tracking app designed to help students log study hours and manage their time effectively. Implemented a custom stopwatch using asynchronous logic and a dynamic calendar for statistics.",
    tech: ["Bootstrap", "JavaScript", "Firebase", "HTML/CSS"],
    img: "img/studybuddy/Screenshot 2026-08-10 at 9.39.51 PM.png",
    repo: "https://github.com/shinyoungyou/1800_202430_DTC13",
    demo: "https://comp1800-202430-personal.web.app/",
  },

  {
    id: "Language Exchange",
    slug: "langex",
    categories: ["Cloud", "DevOps"],
    desc: "Web platform connecting language learners with partners. Implemented 16 RESTful APIs, Google Maps integration, and Azure-based CI/CD pipelines.",
    tech: ["Azure", "GitHub Actions", "C#", "ASP.NET Core", "React", "Docker"],
    img: "img/langex/Screenshot 2026-08-10 at 10.25.22 PM.png",
    repo: "https://github.com/shinyoungyou/v2-language-exchange",
    demo: "https://language-exchange-app.azurewebsites.net/",
  },
  {
    id: "Slack Message Archive",
    slug: "slackmsg",
    categories: ["SaaS"],
    desc: "Message archival system tracking real-time Slack updates. Implemented event-driven architecture using Slack Events API and MongoDB for permanent persistence.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "Slack Event API"],
    img: "img/slackmsg/Screenshot 2026-08-10 at 10.26.01 PM.png",
    repo: "https://github.com/shinyoungyou/slack-backup-proj",
    demo: null,
  },

  {
    id: "Education Dashboard",
    slug: "edudash",
    categories: ["Access Control"],
    desc: "Role-based system for admins, teachers, and students to manage courses and grades with full CRUD operations and secure RBAC.",
    tech: ["PHP", "MySQL", "RBAC"],
    img: "img/edudash/Screenshot 2026-08-10 at 10.26.24 PM.png",
    repo: null,
    demo: null,
  },
];

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