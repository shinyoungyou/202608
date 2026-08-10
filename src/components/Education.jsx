import { EDUCATION } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Education() {
  return (
    <section id="education">
      <SectionHeading>Education</SectionHeading>
      <div className="pt-4">
        {EDUCATION.map((item) => (
          <div className="edu-item" key={item.name}>
            <div className="name">{item.name}</div>
            <div className="meta">{item.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
