import { CERTIFICATIONS } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Certifications() {
  return (
    <section id="certifications" className="mb-12">
      <SectionHeading>Certifications</SectionHeading>

      <div className="space-y-6 pt-4">
        {CERTIFICATIONS.map((cert, index) => (
          <div
            key={index}
            className="flex items-start gap-4 pb-6 last:border-b-0 last:pb-0"
          >
            {/* Issuer Logo / Icon */}
            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-[var(--line)] bg-white flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}${cert.img}`}
                alt={cert.issuer}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Certification Details */}
            <div className="flex-1 space-y-1">
              <h3 className="text-base font-bold text-[var(--navy)] leading-snug">
                {cert.name}
              </h3>

              <p className="text-sm text-[var(--navy)] font-medium">
                {cert.issuer}
              </p>

              <p className="text-xs text-ink-dim">
                {cert.issued} · {cert.expires}
              </p>

              {cert.credentialId && (
                <p className="text-xs text-ink-dim">
                  Candidate ID {cert.credentialId}
                </p>
              )}

              {/* Action Buttons Row */}
              {(cert.url || cert.credlyUrl) && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[var(--line)] text-xs font-semibold text-[var(--navy)] hover:border-[var(--navy)] transition-colors bg-white shadow-sm"
                    >
                      See certificate
                      <svg
                        className="w-3 h-3 text-ink-dim"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                  {cert.credlyUrl && (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Show on Credly"
                      aria-label="Show on Credly"
                      className="inline-flex items-center justify-center p-2 rounded-full border border-[var(--line)] hover:border-[var(--navy)] transition-colors bg-white shadow-sm"
                    >
                      {/* Credly Logo Icon Only */}
                      <img
                        src={`${import.meta.env.BASE_URL}img/credly.png`}
                        alt="Credly"
                        className="w-7 h-3.5 object-contain"
                      />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
