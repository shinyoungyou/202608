import { EXPERIENCE } from '../data.js'
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>Work Experience</SectionHeading>
      {/* Container with a left border acting as the timeline */}
      <div className="pt-4 relative border-l-2 border-gray-200 ml-2">
        {EXPERIENCE.map((job, index) => (
          <div key={job.title + job.company} className="mb-10 ml-6 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full border-2 border-[var(--terracotta)] bg-white" />

            {/* Date */}
            <div className="text-sm font-semibold text-terracotta mb-1">
              {job.period}
            </div>

            {/* Role & Company */}
            <h3 className="text-lg font-bold text-ink">{job.title}</h3>
            <div className="text-sm font-medium text-ink-dim mb-4">
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                {job.company}
              </a>
              <span className="text-gray-400"> {job.location}</span>
            </div>

            {/* Bullet Points */}
            <ul className="list-disc list-outside ml-4 space-y-2 text-ink text-sm leading-relaxed mb-4">
              {job.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="pl-1 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: bullet }}
                />
              ))}
            </ul>

            {/* Tags */}
            {/* <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag} className="pill outline text-xs px-3 py-1">
                  {tag}
                </span>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}