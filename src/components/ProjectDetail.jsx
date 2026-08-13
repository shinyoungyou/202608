import { useParams, Link } from "react-router-dom";
import { PROJECTS, PROJECT_NAV_ITEMS } from "../data.js";
import { useScrollSpy } from "../hooks/useScrollSpy.js";
import { ProjectTopNav, ProjectSideNav } from "./ProjectNav.jsx"; // Assuming you created this file

const SECTION_IDS = PROJECT_NAV_ITEMS.map((item) => item.id);

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  const activeId = useScrollSpy(SECTION_IDS);


  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
        <p className="text-ink-dim mb-4">
          The project you are looking for doesn't exist or was moved.
        </p>
        <Link
          to="/"
          className="bg-[var(--terracotta)] text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="layout max-w-4xl mx-auto px-4 py-12">
      {/* Side Navigation for Projects */}
      <ProjectTopNav activeId={activeId} />
      <ProjectSideNav activeId={activeId} />

      <main>
        {/* Top Navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-semibold text-[var(--terracotta)] hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>
        {/* Header Info */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.categories?.map((cat) => (
              <span
                key={cat}
                className="pill text-xs font-semibold tracking-wider"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Format: Title | Context Date */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--navy)]">
            {project.id}
          </h1>

          <div className="flex flex-wrap items-baseline gap-2 mb-4 mt-1">
            <span className="text-base text-ink-dim font-medium">
              {project.context}
            </span>
            <span className="text-sm text-gray-400 font-medium ml-auto">
              {project.period}
            </span>
          </div>

          <p className="text-lg text-ink-dim leading-relaxed mb-4">
            {project.desc}
          </p>

          {/* Action Links (Repo / Demo) */}
          {(project.repo || project.demo) && (
            <div className="flex flex-wrap gap-3 items-center text-sm">
              {project.repo && (
                <span className="flex items-center">
                  <span className="font-semibold text-[var(--navy)] mr-1">
                    Repo:
                  </span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--terracotta)] underline truncate"
                  >
                    {project.repo.replace(/^https?:\/\//, "")}
                  </a>
                </span>
              )}

              {project.repo && project.demo && (
                <span className="text-gray-300 hidden md:inline">|</span>
              )}

              {project.demo && (
                <span className="flex items-center">
                  <span className="font-semibold text-[var(--navy)] mr-1">
                    Demo:
                  </span>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--terracotta)] underline truncate"
                  >
                    {project.demo.replace(/^https?:\/\//, "")}
                  </a>
                </span>
              )}
            </div>
          )}

          {project.repoStatus === "private" && (
            <span className="text-xs text-gray-500 ">
              Repo is currently <i>private</i> due to NDA and/or team project
              restrictions
            </span>
          )}
        </header>

        {/* Tech Stack Pills */}
        {project.tech && project.tech.length > 0 && (
          <section>
            <h3 className="text-lg font-bold  tracking-wider text-ink-dim border-b border-[var(--line)] pb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t, index) => (
                <span key={t}>
                  {t}
                  {index < project.tech.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Contribution Section */}
        {project.contributions && (
          <section id="contributions">
            <h3 className="text-lg font-bold text-[var(--navy)] mb-4 border-b border-[var(--line)] pb-2">
              What I contributed to the project
            </h3>
            <ul className="space-y-3 pt-2">
              {project.contributions.map((contribution, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-sm text-ink leading-relaxed"
                >
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--terracotta)] flex-shrink-0" />
                  {contribution}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Media Showcase Section (Videos, Slides, or Images) */}
        <section className="space-y-20">
          {/* Main Preview Image */}
          {project.img && (
            <div className="overflow-hidden border border-[var(--line)] shadow-md bg-white">
              <img
                src={`${import.meta.env.BASE_URL}${project.img}`}
                alt={project.id}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Embedded PDF / Presentation Support */}
          {project.pdf && (
            <div id="docs" className="bg-white">
              <div className="flex justify-between items-center mb-4 border-b border-[var(--line)] pb-2">
                <h3 className="text-lg font-bold text-[var(--navy)]">
                  Project Documentation & Slides
                </h3>
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[var(--terracotta)] hover:underline"
                >
                  Open PDF in New Tab →
                </a>
              </div>

              {/* Clarification Note */}
             {project.team && <p className="text-xs text-gray-500 italic mb-4">
                Note: This documentation reflects the collective team effort.
                Please see{" "}
                <a
                  href="#contributions"
                  className="text-[var(--terracotta)] underline"
                >
                  What I contributed to the project
                </a>{" "}
                above for my specific ownership and tasks.
              </p>}

              <div className="w-full h-[500px]  overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
                <iframe
                  src={project.pdf}
                  title={`${project.id} Document`}
                  className="w-full h-full"
                />
              </div>
            </div>
          )}

          {/* Sprint / Versioned YouTube Videos Support (if project.videos is provided in data) */}
          {project.videos && project.videos.length > 0 && (
            <div id="videos" className="bg-white ">
              <h3 className="text-lg font-bold mb-4 text-[var(--navy)] border-b border-[var(--line)] pb-2">
                Development Sprints & Video Demos
              </h3>
              <div className="space-y-6 pt-2">
                {project.videos.map((vid, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-sm font-semibold text-[var(--terracotta)]">
                      {vid.title}
                    </h4>
                    <div className="relative w-full aspect-video  overflow-hidden bg-black">
                      <iframe
                        src={vid.url}
                        title={vid.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Multi-Image Gallery (Handles arrays like SmartIEC before/after screenshots) */}
          {project.images && project.images.length > 0 && (
            <div id="gallery" className="bg-white">
              <h3 className="text-lg font-bold mb-4 text-[var(--navy)] border-b border-[var(--line)] pb-2">
                Project Gallery & Screenshots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {project.images.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className=" overflow-hidden border border-[var(--line)] shadow-sm bg-[var(--surface)]"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${imgSrc}`}
                      alt={`${project.id} screenshot ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
        {/* Footer Navigation */}
        <div className="border-t border-[var(--line)] pt-6 flex justify-between items-center">
          <Link
            to="/"
            className="text-sm font-semibold text-[var(--navy)] hover:text-[var(--terracotta)]"
          >
            ← Back to Portfolio Home
          </Link>
        </div>
      </main>
    </div>
  );
}
