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
              <article className="card" key={p.id}>
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
                {(p.repo || p.demo) && (
                  <div className="links">
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
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
