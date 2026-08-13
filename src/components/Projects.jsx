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

        <p className="text-xs font-semibold tracking-wider uppercase text-ink-dim/80 mb-3">
          Click anywhere on any project preview to view details.
        </p>
        <div className="project-grid">
          {visible.length === 0 ? (
            <div className="empty-state">
              No projects logged under "{active}" yet.
            </div>
          ) : (
            visible.map((p) => (
              <article
                className="project-overlay-card"
                key={p.id}
                onClick={() => {
                  window.location.href = `${import.meta.env.BASE_URL}projects/${
                    p.slug
                  }`;
                }}
              >
                {/* Background Image */}
                {p.img && (
                  <img
                    src={p.img}
                    alt={`${p.id} preview`}
                    className="project-bg-img"
                  />
                )}

                {/* Dark Gradient Overlay */}
                <div className="project-gradient-overlay" />

                {/* Content Container Overlaid on Image */}
                <div className="project-content-layer">
                  <h3>{p.id}</h3>
                  {/* <p className="desc">{p.desc}</p> */}
                  <p className="project-click-hint">Click to see detail</p>

                  <div className="text-xs text-gray-100 font-medium">
                    {p.tech.map((t, idx) => (
                      <span key={t} className="inline-flex items-center">
                        {t}
                        {idx < p.tech.length - 1 && (
                          <span className="text-gray-100 mr-1">,</span>
                        )}
                      </span>
                    ))}
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
