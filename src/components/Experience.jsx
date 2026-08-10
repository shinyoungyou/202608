import { EXPERIENCE } from '../data.js'
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>Work Experience</SectionHeading>
      <div className="pt-4">
        {EXPERIENCE.map((job) => (
          <div className="job" key={job.title + job.company}>
            <div className="job-head">
              <div className="job-icon">{"</>"}</div>
              <div className="job-title">{job.title}</div>
            </div>
            <div className="job-meta">
              {job.company} · {job.period}
            </div>
            <ul>
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="pill-row">
              {job.tags.map((tag) => (
                <span className="pill outline" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
