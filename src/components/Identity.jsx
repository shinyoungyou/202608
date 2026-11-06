import { IDENTITY } from '../data.js'

export default function Identity() {
  const {
    name,
    pronouns,
    role,
    certifications,
    photo,
    location,
    phone,
    email,
    schoolEmail,
    schoolEmailExpiry,
    github,
    linkedin,
  } = IDENTITY;

  return (
    <>
      <div className="avatar-wrap">
        <div className="avatar">
          <img
            src={photo}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="identity md:relative">
        <div className="mt-1 md:absolute md:top-0 md:right-0 text-xs text-gray-400 md:pt-1 md:pr-16 px-2.5 py-1">
          Last updated: November 2026
        </div>
        <h1 className="name">{name}</h1>
        {/* <span className="text-sm font-normal text-gray-500">({pronouns})</span> */}
        <div className="role">{role}</div>
        <div className="text-sm font-medium text-emerald-600 mt-0.5 mb-2">
          {certifications}
        </div>
        <div className="contact flex flex-wrap justify-center items-center gap-y-1 leading-none mx-auto max-w-[1012px]">
          <span>{location}</span>
          <span className="sep">|</span>
          <span>{phone}</span>
          <span className="sep">|</span>
          <a href={`mailto:${email}`}>{email}</a>
          <span className="sep">|</span>
          <a href={github} target="_blank" rel="noopener noreferrer">
            {github.replace("https://", "")}
          </a>
          <span className="sep">|</span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            {linkedin.replace("https://", "")}
          </a>
          <span className="sep">|</span>
          <a href={`mailto:${schoolEmail}`} title={schoolEmailExpiry}>
            {schoolEmail} ({schoolEmailExpiry})
          </a>
        </div>
      </div>
    </>
  );
}
