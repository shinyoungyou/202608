import { useState } from "react";

export default function ProjectGallery({ images, projectName }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!images || images.length === 0) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section id="gallery" className="bg-white">
        <h3 className="text-lg font-bold mb-4 text-[var(--navy)] border-b border-[var(--line)] pb-2">
          Project Gallery & Screenshots
        </h3>

        {/* 3-Column Grid (Square format) */}
        <div className="grid grid-cols-3 gap-1 md:gap-2 pt-4">
          {images.map((imgSrc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className="aspect-square relative cursor-pointer group overflow-hidden bg-[var(--surface)]"
            >
              <img
                src={`${import.meta.env.BASE_URL}${imgSrc}`}
                alt={`${projectName} screenshot ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INSTAGRAM-STYLE LIGHTBOX MODAL --- */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 md:p-4"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2 cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Content Container */}
          <div
            className="relative w-full max-w-7xl max-h-[95vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Image Button */}
            {images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors cursor-pointer z-10"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Current Displayed Image */}
            <img
              src={`${import.meta.env.BASE_URL}${images[selectedIndex]}`}
              alt="Expanded view"
              className="max-w-full max-h-[95vh] object-contain select-none"
            />

            {/* Next Image Button */}
            {images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors cursor-pointer z-10"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white/90 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
