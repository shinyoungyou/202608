import { SKILLS } from '../data.js'
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeading>Skills</SectionHeading>
      <div className="pt-4 pill-row">
        {SKILLS.map((skill) => (
          <span className="pill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
