// components/ProjectNav.jsx

// Accept navItems as a prop
function ProjectNavLinks({ activeId, navItems }) {
  return (
    <>
      {navItems.map((item) => (
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

export function ProjectSideNav({ activeId, navItems }) {
  return (
    <nav className="sidenav" aria-label="Project section navigation">
      <ProjectNavLinks activeId={activeId} navItems={navItems} />
    </nav>
  );
}

export function ProjectTopNav({ activeId, navItems }) {
  return (
    <nav className="topnav" aria-label="Project section navigation">
      <ProjectNavLinks activeId={activeId} navItems={navItems} />
    </nav>
  );
}
