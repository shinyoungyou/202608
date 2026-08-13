// components/ProjectNav.jsx
import { PROJECT_NAV_ITEMS } from "../data.js";

function ProjectNavLinks({ activeId }) {
  return (
    <>
      {PROJECT_NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={item.id === activeId ? "active" : ""}
        >
          {item.label}
        </a>
      ))}
    </>
  );
}

export function ProjectSideNav({ activeId }) {
  return (
    <nav className="sidenav" aria-label="Project section navigation">
      <ProjectNavLinks activeId={activeId} />
    </nav>
  );
}

export function ProjectTopNav({ activeId }) {
  return (
    <nav className="topnav" aria-label="Project section navigation">
      <ProjectNavLinks activeId={activeId} />
    </nav>
  );
}
