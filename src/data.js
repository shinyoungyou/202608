// ============================================================
// SITE DATA — edit this file to update your portfolio content.
// Nothing in src/components/ should need to change for routine
// updates like adding a skill, job, or project.
// ============================================================

export const IDENTITY = {
  name: "Shinyoung You",
  role: "Security Operations, Cloud Engineering, & Application Security",
  photo: "public/img/profile1.jpeg",
  location: "Vancouver, BC",
  phone: "+1 778 992 1553",
  email: "shinyoungyou2@gmail.com",
  github: "https://github.com/shinyoungyou",
  linkedin: "https://linkedin.com/in/shinyoungyou",
}

export const NAV_ITEMS = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
]

export const SKILLS = [
  "Python", ".NET", "C#", "JavaScript", "HTML", "CSS",
  "React", "Django", "ASP.NET", "Figma", "Linux",
]

export const EXPERIENCE = [
  {
    title: "Security Operations (SOC) Analyst Co-op",
    company: "Vancity Credit Union",
    period: "May 2025 — Dec 2025",
    bullets: [
      "Investigated and managed 1,050+ ServiceNow security tickets, independently resolving ~70% and escalating the remaining ~30%; contributed 19% of annual SOC ticket volume while maintaining a low average MTTR of ~2 hours.",
      "Cut average API response time by 35% through query and caching improvements.",
    ],
    tags: ["VB.NET / Python / C#", "ASP.NET", "Full-stack development", "Data wrangling", "MySQL"],
  },
  {
    title: "Front-End Intern",
    company: "Northline Systems",
    period: "May 2022 — Aug 2022",
    bullets: [
      "Shipped a component library adopted across four internal dashboards.",
      "Partnered with design to translate Figma files into accessible React UI.",
    ],
    tags: ["React", "TypeScript", "Figma"],
  },
]

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
