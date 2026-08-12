import { EXPERIENCE } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>Work Experience</SectionHeading>
      <div className="pt-4 space-y-8">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="flex gap-4">
            {/* Company Logo */}
            {job.logo && (
              <div className="flex-shrink-0">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-12 h-12 object-cover rounded-md border border-gray-100 shadow-sm"
                />
              </div>
            )}

            {/* Main Content Area */}
            <div className="flex-grow">
              {/* Top Row: Title & Period */}
              <div className="flex justify-between items-start">
                <h3 className="text-base font-bold text-ink">{job.title}</h3>
                <span className="text-sm font-medium text-ink-dim whitespace-nowrap ml-4">
                  {job.period}
                </span>
              </div>

              {/* Company & Location Info */}
              <div className="text-sm font-medium text-ink-dim mb-3">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-link hover:underline"
                >
                  {job.company}
                </a>
                <span className="text-gray-400 font-light">
                  {" "}
                  · {job.location}
                </span>
                {job.employmentType && (
                  <span className="text-gray-400 font-light">
                    {" "}
                    · {job.employmentType}
                  </span>
                )}
              </div>

              {/* Short Summary / Context */}
              {job.summary && (
                <p className="text-sm text-gray-600 font-poppins mb-3 leading-relaxed">
                  {job.summary.textBefore || job.summary}
                  <a
                    href={job.summary.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-terracotta transition-colors"
                  >
                    {job.summary.linkText}
                  </a>
                  {job.summary.textAfter}
                </p>
              )}

              {/* Bullets & Subtitles */}
              <ul className="space-y-2 text-ink text-sm leading-relaxed">
                {job.bullets.map((item, i) => {
                  // If the item is designated as a subtitle (e.g., all-caps, no bullet)
                  if (typeof item === "object" && item.isSubtitle) {
                    return (
                      <li
                        key={i}
                        className="font-semibold text-xs tracking-wider uppercase text-gray-500 mt-4 mb-1 list-none"
                      >
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 underline hover:text-terracotta transition-colors"
                          >
                            {item.text}
                          </a>
                        ) : (
                          item.text
                        )}
                      </li>
                    );
                  }

                  // Standard Bullet Point
                  return (
                    <li
                      key={i}
                      className="list-disc list-outside ml-4 text-gray-700 pl-1"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
