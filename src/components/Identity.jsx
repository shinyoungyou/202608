import { IDENTITY } from '../data.js'

export default function Identity() {
  const { name, role, photo, location, phone, email, github, linkedin } = IDENTITY

  return (
    <>
      <div className="avatar-wrap">
        <div className="avatar">
          <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      <div className="identity">
        <h1 className="name">{name}</h1>
        <div className="role">{role}</div>
        <div className="contact">
          <span>{location}</span><span className="sep">|</span>
          <span>{phone}</span><span className="sep">|</span>
          <a href={`mailto:${email}`}>{email}</a><span className="sep">|</span>
          <a href={github} target="_blank" rel="noopener noreferrer">
            {github.replace('https://', '')}
          </a><span className="sep">|</span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            {linkedin.replace('https://', '')}
          </a>
        </div>
      </div>
    </>
  )
}
