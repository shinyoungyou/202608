import { useState } from "react";
import { CATEGORIES, PROJECTS } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

const ALL = "ALL";

function countFor(category) {
  return category === ALL
    ? PROJECTS.length
    : PROJECTS.filter((p) => p.categories.includes(category)).length;
}

export default function Projects() {
  const [active, setActive] = useState(ALL);
  const categories = [ALL, ...CATEGORIES];

  const visible =
    active === ALL
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(active));

  return (
    <section id="projects">
      <SectionHeading>Projects</SectionHeading>

      <div className="pt-4">
        <div
          className="filter-row"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              className="filter-chip"
              aria-pressed={cat === active}
              onClick={() => setActive(cat)}
            >
              {cat}
              <span className="count">{countFor(cat)}</span>
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.length === 0 ? (
            <div className="empty-state">
              No projects logged under "{active}" yet.
            </div>
          ) : (
            visible.map((p) => (
              <article className="card overflow-hidden p-0" key={p.id}>
                {/* Project Preview Image */}
                {p.img && (
                  <div className="w-full h-48 bg-gray-100 overflow-hidden border-b border-[var(--line)]">
                    <img
                      src={p.img}
                      alt={`${p.id} preview`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}

                {/* Card Content Wrapper (restoring padding since card p-0 removed it) */}
                <div className="p-5 flex flex-col flex-grow gap-3">
                  <h3>{p.id}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="pill-row">
                    {p.categories.map((c) => (
                      <span className="pill outline small" key={c}>
                        {c}
                      </span>
                    ))}
                    {p.tech.map((t) => (
                      <span className="pill small" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="links mt-auto pt-2 flex items-center justify-between">
                    <div className="flex gap-4">
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Repo →
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live →
                        </a>
                      )}
                    </div>

                    {/* Link to detail page (ready for routing) */}
                    <a
                      href={`/projects/${p.slug}`}
                      className="text-[var(--terracotta)] font-semibold hover:underline"
                    >
                      Details →
                    </a>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
