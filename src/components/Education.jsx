import SectionHeading from "./SectionHeading.jsx";
import { EDUCATION, LEADERSHIP_EXPERIENCE } from "../data.js";

export default function Education() {
  return (
    <section id="education">
      <SectionHeading>Education</SectionHeading>

      <div className="pt-4 space-y-8">
        {/* Main Degree Block */}
        {EDUCATION.map((edu, index) => (
          <div key={index}>
            {/* School Header with Image Logo */}
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 rounded-md overflow-hidden shrink-0 shadow-sm border border-[var(--line)] bg-white flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${edu.img}`}
                  alt={edu.institution}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-xl font-bold text-[var(--navy)]">
                    {edu.institution}
                  </h3>
                  <div className="text-sm font-semibold text-[var(--terracotta)]">
                    {edu.degree}
                  </div>
                </div>
                <span className="text-sm font-medium text-ink-dim shrink-0">
                  {edu.period}
                </span>
              </div>
            </div>

            <div className="pl-16">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-dim mb-4">
                <span>{edu.location}</span>
                <span>•</span>
                <span>{edu.cgpa}</span>
                <span>•</span>
                <span className="font-semibold text-[var(--navy)]">
                  {edu.status}
                </span>
              </div>

              {/* Relevant Courses */}
              <div className="text-xs text-ink-dim leading-relaxed">
                <span className="font-semibold uppercase tracking-wider text-[var(--navy)] block mb-1.5">
                  Relevant Courses
                </span>
                <p className="text-[var(--navy)]">{edu.courses.join(", ")}</p>
              </div>
              {/* Leadership & Club Experience (LinkedIn Grouped Style) */}
              {edu.leader && LEADERSHIP_EXPERIENCE.length > 0 && (
                <div className="pt-6 ">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--navy)] mb-6">
                    Leadership & Club Experience
                  </h4>

                  {LEADERSHIP_EXPERIENCE.map((org, orgIdx) => (
                    <div key={orgIdx} className="space-y-6">
                      <div className="flex items-start gap-4">
                        {/* Organization Logo Image */}
                        <div className="w-12 h-12 rounded-md overflow-hidden shrink-0 shadow-sm border border-[var(--line)] bg-white flex items-center justify-center">
                          <img
                            src={`${import.meta.env.BASE_URL}${org.img}`}
                            alt={org.organization}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-[var(--navy)]">
                            {org.organization}
                          </h5>
                          <p className="text-xs font-medium text-ink-dim">
                            {org.totalDuration}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Tree Section */}
                      <div className="pl-6 ml-6 border-l-2 border-[var(--line)] space-y-8 relative">
                        {org.roles.map((role, roleIdx) => (
                          <div key={roleIdx} className="relative">
                            {/* Timeline Node Dot */}
                            <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-400 border-2 border-white ring-2 ring-[var(--line)]" />

                            <div className="mb-2">
                              <h6 className="font-bold text-[var(--navy)] text-base">
                                {role.title}{" "}
                                {role.subtitle && (
                                  <span className="text-xs font-normal text-ink-dim">
                                    {role.subtitle}
                                  </span>
                                )}
                              </h6>
                              <p className="text-xs font-medium text-ink-dim">
                                {role.period}
                              </p>
                              {role.location && (
                                <p className="text-xs text-ink-dim mt-0.5">
                                  {role.location}
                                </p>
                              )}
                            </div>

                            <ul className="list-disc list-inside space-y-1.5 text-sm text-ink-dim mt-2">
                              {role.details.map((item, dIdx) => (
                                <li key={dIdx}>
                                  <span>
                                    {typeof item === "string"
                                      ? item
                                      : item.text}
                                  </span>
                                  {typeof item === "object" && item.url && (
                                    <a
                                      href={item.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="ml-2 text-xs font-semibold text-[var(--terracotta)] hover:underline inline-flex items-center gap-1"
                                    >
                                      {item.linkText || "Link"}
                                    </a>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
