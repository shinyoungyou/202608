import Banner from './components/Banner.jsx'
import Identity from './components/Identity.jsx'
import { SideNav, TopNav } from './components/Nav.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Certifications from "./components/Certifications.jsx";
import About from "./components/About.jsx";
import Footer from './components/Footer.jsx'
import { useScrollSpy } from './hooks/useScrollSpy.js'
import { NAV_ITEMS } from './data.js'

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export default function App() {
  const activeId = useScrollSpy(SECTION_IDS)

  return (
    <>
      <Banner />
      <Identity />

      <TopNav activeId={activeId} />

      <div className="layout">
        <SideNav activeId={activeId} />

        <main>
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <About />
          <Skills />
        </main>
      </div>

      <Footer />
    </>
  );
}
