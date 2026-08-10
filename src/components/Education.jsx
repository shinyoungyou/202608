import { EDUCATION } from '../data.js'

export default function Education() {
  return (
    <section id="education">
      <div className="section-row">
        <div className="section-label">Education</div>
        <div>
          {EDUCATION.map((item) => (
            <div className="edu-item" key={item.name}>
              <div className="name">{item.name}</div>
              <div className="meta">{item.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
