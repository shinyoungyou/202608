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

export const PROJECT_NAV_ITEMS = [
  { id: "contributions", label: "Contributions" },
  { id: "docs", label: "Docs & Slides" },
  { id: "videos", label: "Video Demos" },
  { id: "gallery", label: "Gallery" },
];

export const SKILLS = [
  "Python",
  ".NET",
  "C#",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Django",
  "ASP.NET",
  "Figma",
  "Linux",
];

export const EXPERIENCE = [
  {
    title: "SOC Analyst Co-op, Security Operations",
    logo: "img/vancity.jpeg",
    company: "Vancity Credit Union",
    location: "Vancouver, BC",
    link: "https://www.vancity.com",
    link2: "https://www.vancity.com/privacy-security/report",
    period: "May 2025 – Dec 2025",
    summary: "Part of BCIT Co-op Education Workterm 1 & 2",

    bullets: [
      { isSubtitle: true, text: "Key Achievements" },
      "Investigated and managed 1,050+ ServiceNow security tickets, independently resolving ~70% and escalating the remaining ~30%; contributed 19% of annual SOC ticket volume while maintaining a low average MTTR of ~2 hours and adhering to NIST CSF principles.",
      "Validated security threats and determined response actions, with clear work notes, using MITRE ATT&CK and CVSS, correlating logs across SOAR/EDR platforms including MS Defender, Entra ID, Darktrace, Arctic Wolf, and Proofpoint.",

      {
        isSubtitle: true,
        text: "INCIDENT RESPONSE & INVESTIGATIONS",
      },
      "Identified and validated gaps in phishing and data leak playbooks (e.g., PCI DSS), and escalated findings to Incident Coordinators to improve incident response procedures and operational readiness.",
      "Mitigated a phishing campaign containing clipboard malware targeting senior management; escalated to senior analyst, in order to block malicious sender email addresses and domains, and presented findings to the team, contributing to a security awareness newsletter.",
      "Used advanced Excel function to convert security event timestamps from UTC to Pacific Time to support AUP investigations and enable actionable reporting to HR and management.",
      {
        isSubtitle: true,
        text: "Application Security",
      },
      "Reviewed public-facing and internal application security findings during Salt Security vendor sessions using the OWASP Top 10 framework, including SQL injection and XSS.",
      {
        isSubtitle: true,
        text: "Threat-Hunting Automation Project (Jun – Jul 2025)",
      },
      "Collaborated with a team of 5 to improve a manual threat hunting workflow; reviewed and synthesized teammates’ proof-of-concept on threat intelligence IoC/TTP collection and Splunk queries, then finalized a 9-page presentation to communicate the proposed workflow and findings.",
    ],
  },
  {
    title: "Web Developer Intern",
    logo: "img/cubedesign.jpeg",
    company: "Cube Design and Communication",
    location: "Markham, ON (Remote)",
    link: "https://cubedesign.ca",
    link2: "https://cubedesign.ca/contact",
    period: "Feb 2023 – May 2023",
    summary:
      "A digital marketing agency helping clients succeed. Delivered web solutions for three different customers.",

    bullets: [
      {
        isSubtitle: true,
        text: "in your daylight (Feb - Apr 2023)",
        link: "https://inyourdaylight.com/en/",
      },
      "Redesigned a digital marketing customer's website using Vue.js and Firebase, integrating multilingual support and a contact form with the Elastic Email API, which boosted user engagement by 19%.",
      {
        isSubtitle: true,
        text: "nancyjin CPA (Mar - Apr 2023)",
        link: "https://nancyjincga.com/",
      },
      "Customized a WordPress website for a CPA financial firm using CSS, fully aligning with client's needs.",
      {
        isSubtitle: true,
        text: "internal project (Apr - May 2023)",
        link: "https://cubedesign.ca/contact",
      },
      "Demonstrated website contact form SMTP configurations during a team Agile meeting, reducing internal redesign project implementation time by 25%.",
    ],
  },
  {
    title: "IT Support Intern",
    logo: "img/vancouver_fashion_week_logo.jpeg",
    company: "Vancouver Fashion Week",
    location: "Vancouver, BC",
    link: "https://www.vanfashionweek.com",
    link2:
      "https://www.vanfashionweek.com/event-details/designer-registration-4/form",
    period: "Jan 2023 – Feb 2023",
    summary: {
      textBefore:
        "Provided comprehensive IT support across the organization and ",
      linkText: "its subsidiary",
      linkUrl: "https://www.vancouverkidsfashionweek.com/",
      textAfter: " Wix-based websites during the FW 2023 season.",
    },
    bullets: [
      { isSubtitle: true, text: "Key Achievements" },
      "Troubleshooted and resolved software issues with designer registration forms on a Wix website for FW 2023, facilitating 20+ successful designer showcases.",
      "Collaborated with a team of 3 to develop dynamic pages using Wix databases, reducing static page maintenance by 75%.",
    ],
  },
];

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
    team: true,
    slug: "smartiec",
    context:
      "Team Project for Client — BCIT Building Science Graduate Faculty & Student",
    period: "May 2026",
    categories: ["IoT", "DevOps"],
    desc: "Smart IEC is a smart indoor environment control system. It provides a Flask web app for viewing dashboards, collecting feedback, sending device commands, storing sensor data, and integrating with Home Assistant. For local development, the repo also includes a custom Dockerized Home Assistant instance with mock devices.",
    tech: ["GitHub Actions", "Flask", "Python", "JavaScript", "IoT"],
    contributions: [
      "Optimized Flask-based smart home reliability with a 500ms input debounce, bundling rapid user clicks into single calls while contributing to a team of 5 using Python and JavaScript, to integrate IoT sensors and automate HVAC actuators.",
      "Scaled GitHub Actions testing workflow by refactoring 12 unit and 19 integration Pytest cases, running in 0.24s, to align with DB schema updates and validate incoming telemetry JSON payloads for continuous SDLC quality.",
    ],
    img: "img/smartiec/after-dashboard.png",
    repo: "https://github.com/khaiphan812/COMP3800-SmartIEC",
    repoStatus: "private",
    demo: "https://youtu.be/2No5rb0r7HA",
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
    pdf: `${import.meta.env.BASE_URL}docs/3800 presentation.pdf`,
  },
  {
    id: "Wireshark Network Analysis",
    slug: "wireshark",
    context: "Solo Presentation at KOTRA Vancouver Mentoring Program",
    period: "May 2026",
    categories: ["Networking"],
    desc: "Captured and analyzed live Wi-Fi traffic generated during a Google search using Wireshark to examine how web requests travel across Ethernet, IPv6, TCP, and TLS layers and how HTTPS protects client-server communication.",
    tech: ["Wireshark", "TCP/IP", "TLS", "HTTPS"],
    contributions: [
      "Utilized Wireshark to capture and inspect live Wi-Fi network traffic generated during a Google search to filter IPv6/TCP connections and examine how web requests travel over secure HTTPS client-server connections.",
      "Analyzed packet structure across Ethernet, IPv6, TCP, and TLS layers to examine how data is transported, connections are established, and communication is protected over HTTPS.",
    ],
    img: "img/wireshark/preview.png",
    repo: null,
    demo: null,
    pdf: `${
      import.meta.env.BASE_URL
    }docs/Wireshark_ Network Traffic Analysis.pdf`,
    images: ["img/wireshark/preview.png"],
  },
  {
    id: "Certification Implementation",
    slug: "certimpl",
    context: "Solo Presentation at KOTRA Vancouver Mentoring Program",
    period: "Apr 2026",
    categories: ["Application Security", "Networking"],
    desc: "Built a local HTTPS server using Node.js and OpenSSL, then troubleshot browser certificate validation failures by creating a trusted local CA with mkcert and configuring SANs to establish certificate trust.",
    tech: ["Node.js", "OpenSSL", "TLS/HTTPS"],
    contributions: [
      "Built a local HTTPS server using Node.js and OpenSSL to understand how TLS certificates establish trust and enable encrypted client-server communication.",
      "Investigated browser certificate validation failures caused by untrusted certificate authorities and resolved them by creating a trusted local CA with mkcert, including SAN configuration to support certificate validation.",
    ],
    img: "img/certimpl/secure.png",
    repo: null,
    demo: null,
    images: ["img/certimpl/unsecure.png", "img/certimpl/secure.png"],
    pdf: `${
      import.meta.env.BASE_URL
    }docs/self-signed certificate with openssl.pdf`,
  },
  {
    id: "TLS Certificate Chain Analysis",
    slug: "fortinet",
    context: "Solo Presentation at KOTRA Vancouver Mentoring Program",
    period: "Apr 2026",
    categories: ["Networking"],
    desc: "Analyzed fortinet.com's TLS certificate chain using browser certificate viewer and OpenSSL, examining certificate hierarchy, RSA-2048 public key, SHA-256 signature algorithm, and revocation mechanisms to understand how TLS establishes trust and protects secure HTTPS communication.",
    tech: ["TLS/HTTPS", "RSA", "SHA-256", "OCSP", "CRL"],
    contributions: [
      "Analyzed fortinet.com's TLS certificate chain using browser certificate viewer and OpenSSL to understand how certificate authorities establish trust for secure HTTPS communication.",
      "Investigated certificate metadata including RSA-2048 public key, SHA-256 signature algorithm, and revocation mechanisms, to evaluate how TLS helps prevent unauthorized impersonation and maintain secure connections.",
    ],
    img: "img/fortinet/preview.png",
    repo: null,
    demo: null,
    pdf: `${import.meta.env.BASE_URL}docs/Certificate Analysis.pdf`, // images: ["img/fortinet/preview.png"],
  },
  {
    id: "Password Manager",
    team: true,
    slug: "passwordmngr",
    context: "Team Project in BCIT Cloud Computing course",
    period: "Mar – Apr 2026",
    categories: ["Cloud", "Application Security", "DevOps", "Access Control"],
    desc: "Web app for secure password generation and health evaluation using the Have I Been Pwned API. Architected on AWS with Cognito, DynamoDB, and private VPC networking.",
    tech: ["AWS", "IAM", "Node.js", "API", "ALB", "VPC", "subnetting"],
    contributions: [
      "Worked in a group of 3 to develop a web app in Node.js, JavaScript, and Tailwind CSS to securely generate, manage, and evaluate passwords; detected compromised passwords via Have I Been Pwned API.",
      "Designed and deployed on AWS using Cognito, SES for 2FA, DynamoDB, Application Load Balancer, VPC Endpoint, and a Linux EC2 instance in a private subnet architecture.",
    ],
    img: "img/passwordmngr/aws-complicated.png",
    repo: "https://github.com/Hazel-Jeong-dev/COMP3962_PasswordManager",
    repoStatus: "private",
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
    context: "Solo Project in BCIT Mobile Dev with Android Tech course",
    period: "Mar 2026",
    categories: ["Application Security", "Android/Mobile"],
    desc: "A Flutter-based Android app that queries the NVD API to search and track CVEs by severity, enabling on-call engineers to triage vulnerabilities on the go.",
    tech: ["Flutter", "Dart", "NIST NVD API"],
    contributions: [
      "Built an Android app in Flutter that queries the NIST National Vulnerability Database (NVD) API to search and track CVEs by severity for security engineers to triage vulnerability during on-call incidents when laptops are unavailable.",
    ],
    img: "img/cvelookup/preview.png",
    repo: "https://github.com/shinyoungyou/cve_lookup",
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
    team: true,
    slug: "allergyscanner",
    context: "Team Project in BCIT Projects 2 course",
    period: "Apr – May 2025",
    categories: ["Android/Mobile", "Accessibility"],
    desc: "Healthcare-focused mobile tool to scan food barcodes and identify potential allergens, improving food-tech accessibility.",
    tech: ["Barcode API", "Mobile First"],
    contributions: [
      "Team Lead in the team of 5",
      "Developed an mobile-first web app to scan food's barcode to get to know potential allergic ingridients",
    ],
    img: "img/allergyscanner/preview.png",
    repo: "https://github.com/shinyoungyou/2800-202510-DTC11",
    repoStatus: "public",
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
    team: true,
    slug: "slouchii",
    context: "Team Project at nwHacks hosted by UBC",
    period: "Jan 2025",
    categories: ["IoT"],
    // desc: "Full-stack web application integrated with Arduino hardware built at nwHacks 2025 within 24 hours to improve posture. Developed React UI with a posture monitoring timer and real-time data flow via InfluxDB and Node.js.",
    desc: "A full-stack web app integrated with Arduino hardware to help students monitor and improve posture.",
    tech: ["React", "Node.js", "InfluxDB", "Arduino"],
    contributions: [
      "Frontend Developer",
      "Participated in a hackathon called nwHacks, working in a team of 4 to create a full-stack web application integrated with Arduino hardware to improve posture, within a 24-hour timeframe.",
      "Developed frontend UI with React, including a timer for posture monitoring sessions and built frontend APIs to get real-time posture feedback data flow from an InfluxDB time-series database via a Node.js backend.",
    ],
    img: "img/slouchii/preview.png",
    repo: "https://github.com/shinyoungyou/nwHacks2025",
    repoStatus: "public",
    demo: "https://devpost.com/software/slouchii",
  },
  {
    id: "Study Buddy",
    team: true,
    slug: "studybuddy",
    context: "Team Project in BCIT Projects 1 course",
    period: "Sep – Dec 2024",
    categories: ["SaaS"],
    // desc: "Study tracking app designed to help students log study hours and manage their time effectively. Implemented a custom stopwatch using asynchronous logic and a dynamic calendar for statistics.",
    desc: "Through our team’s survey, many students struggle with time management, finding it difficult to balance their studies with other responsibilities. To address this, we decided to create a study tracking app to help students log study hours and manage their time effectively. Study buddy is a mobile-friendly web app that provides tools to record study time and personalized insights based on performance.",
    tech: ["Bootstrap", "JavaScript", "Firebase", "HTML/CSS"],
    repoStatus: "public",
    contributions: [
      "Team Lead",
      "Worked in a 3-member team to develop a study tracking app designed to help students log study hours and manage their time effectively.",
      "Implemented a custom stopwatch using asynchronous logic to log study sessions and a dynamic calendar to display study statistics to improve students’ time management.",
      "Led the team as Project Manager by assigning tasks and mentoring team members in JavaScript and Firebase.",
    ],
    img: "img/studybuddy/Screenshot 2026-08-10 at 9.39.51 PM.png",
    pdf: `${import.meta.env.BASE_URL}docs/DTC_13.pdf`,
    repo: "https://github.com/shinyoungyou/1800_202430_DTC13",
    demo: "https://comp1800-202430-personal.web.app/",
  },

  {
    id: "Language Exchange",
    slug: "langex",
    context: "Personal Project",
    period: "Jun – Jul 2024",
    categories: ["Cloud", "DevOps"],
    desc: "Web platform connecting language learners with partners. Implemented 16 RESTful APIs, Google Maps integration, and Azure-based CI/CD pipelines.",
    tech: ["Azure", "GitHub Actions", "C#", "ASP.NET Core", "React", "Docker"],
    techs:
      "C#, ASP.NET Core, TypeScript, React, Mobx, MSSQL, Docker, Github Actions, Azure",
    contributions: [
      "Personal Project",
      "Developed a translation feature within the real-time SignalR chat environment using a Translation API to auto-detect and convert messages from the sender's language to the user's native language. ",
      "Facilitated efficient partner discovery with search features such as username, last activity, and location along with utilizing the Google Maps API and Geocoding API to enable finding nearby partners based on users' current locations. ",
      "Incorporated infinite scrolling and caching to Azure cache for Redis to enhance user experience as well as facilitated user profile picture cropping and storage in Azure Blob Storage.",
      "Deployed the application using Github Actions, Azure App Service, and migrated MS SQL database running on Docker to Azure SQL Service.",
    ],
    img: "img/langex/Screenshot 2026-08-10 at 10.25.22 PM.png",
    repo: "https://github.com/shinyoungyou/v2-language-exchange",
    repoStatus: "public",
    demo: "https://language-exchange-app.azurewebsites.net/",
  },
  {
    id: "Slack Message Archive",
    slug: "slackmsg",
    context: "Personal Project",
    period: "Aug – Sep 2023",
    categories: ["SaaS"],
    // desc: "Message archival system tracking real-time Slack updates. Implemented event-driven architecture using Slack Events API and MongoDB for permanent persistence.",
    desc: "My team used Slack to communicate. One day, I tried to find a message to troubleshoot an issue, but I couldn’t because we were on Slack’s Free Plan, which limits access to messages older than 90 days. This experience inspired me to create this app. Slack Message Archive is a web-based app that automatically stores messages and provides permanent access to them.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "Slack Event API"],
    contributions: [
      "Personal Project",
      "Developed a web application to store Slack messages and provide permanent access, implementing frontend with TypeScript, React, Redux, and MUI, and backend with Node.js, Express.js, and MongoDB.",
      "Managed real-time updates for new, edited, and deleted original messages using Slack Events API and ngrok.",
    ],
    img: "img/slackmsg/Screenshot 2026-08-10 at 10.26.01 PM.png",
    repo: "https://github.com/shinyoungyou/slack-backup-proj",
    repoStatus: "public",
    demo: null,
  },

  {
    id: "Education Dashboard",
    team: true,
    slug: "edudash",
    context: "Team Project at Tamwood Careers College",
    period: "Dec 2022 – Jan 2023",
    categories: ["Access Control"],
    desc: "Role-based system for admins, teachers, and students to manage courses and grades with full CRUD operations and secure RBAC.",
    tech: ["PHP", "MySQL", "RBAC"],
    techs: "HTML, CSS, JavaScript, React, PHP, SQL, MySQL, Bootstrap",
    contributions: [
      "Frontend Lead",
      "Worked in a 6-member team to develop a user role-based system (admin, teacher, and student) with CRUD operations, allowing admin to register new students, teachers, and courses.",
      "Implemented features for teachers to evaluate student grade and provide feedback, while students can access their marks and feedback.",
    ],
    img: "img/edudash/Screenshot 2026-08-10 at 10.26.24 PM.png",
    repo: null,
    demo: null,
  },
];

export const EDUCATION = [
  {
    institution: "British Columbia Institute of Technology",
    img: "img/bcit_logo.jpeg",
    degree: "Computer Systems Technology Diploma — Cloud Computing Option",
    period: "Sep 2024 — Expected Dec 2026",
    location: "Vancouver, BC",
    cgpa: "CGPA: 92/100",
    status: "Final Semester in Progress",
    leader: true,
    courses: [
      "Cloud Computing Platforms (97/100)",
      "Object-Oriented Programming 2 (94/100)",
      "Intro to Data Communications (92/100)",
      "Computer Organization/Architecture (99/100)",
      "Relational Database Systems (91/100)",
      "Web Development 2 (100/100)",
      "Mobile Dev with Android Tech (97/100)",
      "Algorithm Analysis and Design (92/100)",
    ],
  },
  {
    institution: "Tamwood Careers College",
    img: "img/tamwood_careers_college_logo.jpeg",
    degree: "Web Development Certificate",
    period: "Aug 2022 — Jun 2023",
    location: "Vancouver, BC",
    cgpa: "CGPA: 97/100",
    status: "Graduated with Distinction",
    leader: false,
    courses: [
      "JavaScript for Web Developers 2 (97.81/100)",
      "Introduction to Back-End Web Development: PHP (95.58/100)",
      "Introduction to Content Management Systems with Wordpress (98.68/100)",
      "Fundamentals of Front End Web Development and HTML (99/100)",
      "Fundamentals of CSS, Preprocessors, Frameworks, & Version Control Systems (97/100)",
    ],
  },
];

export const LEADERSHIP_EXPERIENCE = [
  {
    organization: "BCIT Women in Computing (WiC)",
    img: "img/bcit_women_in_computing_logo.jpeg",
    totalDuration: "Mar 2025 - Present",
    roles: [
      {
        title: "President",
        period: "Sep 2025 – Present",
        location: "",
        details: [
          {
            text: "Hosted the 2026 Winter SAP Vancouver company tour & panel.",
            linkText: "View Post →",
            url: "https://www.instagram.com/p/DV_4VFTksmC/",
          },
          {
            text: "Hosted the 2026 Winter Skybox Labs company tour & panel.",
            linkText: "View Post →",
            url: "https://www.instagram.com/p/DVhXDkzD5gw",
          },
          {
            text: "Guided managing Gmail Inbox and Google Drive to new executives.",
          },
          { text: "Onboarded new executives to their responsibilities." },
          { text: "Recruited 2026 winter executives." },
          {
            text: "Hosted the 2026 Winter Meet and Greet.",
            linkText: "View Post →",
            url: "https://www.instagram.com/p/DUGin5Cj4MU",
          },
        ],
      },
      {
        title: "VP Treasurer",
        // subtitle: "(VP Treasurer)",
        period: "Mar 2025 – Sep 2025",
        // location: "Vancouver, British Columbia, Canada",
        details: ["Hosted the 2025 Fall Meet and Greet."],
      },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    img: "img/comptia_logo.jpeg",
    issued: "Issued Jul 2026",
    expires: "Expires Jul 2029",
    credentialId: "COMP001022930277",
    url: `${import.meta.env.BASE_URL}docs/CompTIA-Security.pdf`,
    credlyUrl:
      "https://www.credly.com/badges/085bcc5f-9e53-435a-83d2-f130fb4432c0/public_url",
  },
  {
    name: "ISC2 CC Certified in Cybersecurity",
    issuer: "ISC2",
    img: "img/isc2-logo.jpeg",
    issued: "Issued Dec 2025",
    expires: "Expires Dec 2028",
    credentialId: "3106380",
    url: `${import.meta.env.BASE_URL}docs/isc2cc.pdf`,
    credlyUrl:
      "https://www.credly.com/badges/0cf2ef6b-4072-402e-b9bf-79c602ec7d16/public_url",
  },
];

export const ABOUT = {
  heading: "A Little Bit About Me..",
  // img: "img/me.png",
  paragraphs: [
    "Hello, it’s Shinyoung You. Thanks for visiting! On my website, you can check all my work in cybersecurity, networking, cloud engineering, and secure web/mobile application development, which I’m really into and have been building over the past 3 years through school projects and independent initiatives.",
    "I have a software development educational background dating back to 2022. After completing my SOC Analyst Co-op at Vancity Credit Union in December 2025, I expanded my focus into networking and cybersecurity. As a result, I earned my CompTIA Security+ (July 2026) and ISC2 CC (December 2025) certifications. Currently, I am in my final semester of the Computer Systems Technology program (specialized in Cloud Computing) at BCIT.",
    "Hobby-wise, I’m a big fan of listening to house music while I work. Here is a playlist I really like: https://www.youtube.com/watch?v=xpvjPsme8_k",
  ],
  signoff: "Hope you find it interesting :)",
};
