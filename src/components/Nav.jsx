import { NAV_ITEMS } from '../data.js'

function NavLinks({ activeId }) {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={item.id === activeId ? 'active' : ''}
        >
          {item.label}
        </a>
      ))}
    </>
  )
}

export function SideNav({ activeId }) {
  return (
    <nav className="sidenav" aria-label="Section navigation">
      <NavLinks activeId={activeId} />
    </nav>
  )
}

export function TopNav({ activeId }) {
  return (
    <nav className="topnav" aria-label="Section navigation">
      <NavLinks activeId={activeId} />
    </nav>
  )
}
