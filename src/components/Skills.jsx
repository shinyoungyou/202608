import { SKILLS } from '../data.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-row">
        <div className="section-label">Skills</div>
        <div className="pill-row">
          {SKILLS.map((skill) => (
            <span className="pill" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
