import { ABOUT } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="mb-12">
      <SectionHeading>{ABOUT.heading}</SectionHeading>

      <div className="pt-4 flex flex-col md:flex-row items-center md:items-start gap-6 bg-white rounded-lg">
        {/* Profile Photo */}
        {ABOUT.img && (
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-[var(--line)] bg-[var(--surface)]">
            <img
              src={`${import.meta.env.BASE_URL}${ABOUT.img}`}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Text Content */}
        <div className="space-y-4 text-gray-700 leading-relaxed flex-1">
          {ABOUT.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          {ABOUT.signoff && (
            <p className="text-gray-500 italic text-sm pt-2">{ABOUT.signoff}</p>
          )}
        </div>
      </div>
    </section>
  );
}
