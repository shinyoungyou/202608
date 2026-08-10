import { ABOUT } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="mb-12">
      <SectionHeading>{ABOUT.heading}</SectionHeading>
      <div className="pt-4 bg-white rounded-lg space-y-4 text-gray-700 leading-relaxed">
        {ABOUT.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        {ABOUT.signoff && (
          <p className="text-gray-500 italic text-sm pt-2">{ABOUT.signoff}</p>
        )}
      </div>
    </section>
  );
}
