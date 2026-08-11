import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
        <p className="text-ink-dim mb-4">The project you are looking for doesn't exist or was moved.</p>
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
    <div className="max-w-4xl mx-auto px-4 py-12">
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
              className="pill text-xs font-semibold uppercase tracking-wider"
            >
              {cat}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--navy)]">
          {project.id}
        </h1>

        <p className="text-lg text-ink-dim leading-relaxed mb-6">
          {project.desc}
        </p>

        {/* Action Links (Repo / Demo) */}
        <div className="flex flex-wrap gap-4 items-center">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--navy)] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              View Repository →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--terracotta)] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              Live Demo →
            </a>
          )}
        </div>
      </header>

      {/* Tech Stack Pills */}
      {project.tech && project.tech.length > 0 && (
        <section className="mb-10 bg-white p-6 rounded-2xl border border-[var(--line)] shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink-dim mb-3">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="pill bg-[var(--surface)] text-[var(--navy)] border border-[var(--line)]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Media Showcase Section (Videos, Slides, or Images) */}
      <section className="space-y-8 mb-12">
        {/* Main Preview Image */}
        {/* {project.img && (
          <div className="rounded-2xl overflow-hidden border border-[var(--line)] shadow-md bg-white">
            <img
              src={`${import.meta.env.BASE_URL}${project.img}`}
              alt={project.id}
              className="w-full h-auto object-cover"
            />
          </div>
        )} */}

        {/* Embedded PDF / Presentation Support */}
        {project.pdf && (
          <div className="bg-white p-6 rounded-2xl border border-[var(--line)] shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold text-[var(--navy)]">
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
            <div className="w-full h-[500px] rounded-xl overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
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
          <div className="bg-white p-6 rounded-2xl border border-[var(--line)] shadow-sm">
            <h3 className="text-base font-bold mb-4 text-[var(--navy)]">
              Development Sprints & Video Demos
            </h3>
            <div className="space-y-6">
              {project.videos.map((vid, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-sm font-semibold text-[var(--terracotta)]">
                    {vid.title}
                  </h4>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
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
          <div className="bg-white p-6 rounded-2xl border border-[var(--line)] shadow-sm">
            <h3 className="text-base font-bold mb-4 text-[var(--navy)]">
              Project Gallery & Screenshots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-[var(--line)] shadow-sm bg-[var(--surface)]"
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
    </div>
  );
}