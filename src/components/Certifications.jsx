import { CERTIFICATIONS } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Certifications() {
  return (
    <section id="certifications" className="mb-12">
      <SectionHeading>Certifications</SectionHeading>
      <div className="space-y-3 pt-4">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.name}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div>
              <div className="font-semibold text-gray-900">{cert.name}</div>
              <div className="text-sm text-gray-500">{cert.issuer}</div>
            </div>
            <span className="text-xs text-gray-400 mt-1 sm:mt-0">
              {cert.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
