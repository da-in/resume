import {
  activities,
  awards,
  education,
  experience,
  profile,
  skills,
} from './data/resume';

function externalRel(href: string) {
  return href.startsWith('http')
    ? ({ target: '_blank', rel: 'noreferrer' } as const)
    : {};
}

export default function App() {
  return (
    <>
      <div className="toolbar no-print">
        <button type="button" onClick={() => window.print()}>
          인쇄 / PDF 저장
        </button>
      </div>
      <article className="resume">
        <header className="header">
          <p className="kicker">{profile.title}</p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <ul className="contacts">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.github} {...externalRel(profile.github)}>
                {profile.githubLabel}
              </a>
            </li>
          </ul>
        </header>

        <section>
          <h2>Skills</h2>
          {skills.map((group) => (
            <p key={group.title} className="skill-row">
              <strong>{group.title}</strong>
              <span>{group.items.join(' · ')}</span>
            </p>
          ))}
        </section>

        <section>
          <h2>Experience</h2>
          {experience.map((job) => (
            <div key={job.company} className="job">
              <div className="job-head">
                <h3>
                  {job.company} · {job.title}
                </h3>
                <p className="period">{job.period}</p>
              </div>
              {job.link ? (
                <p className="job-link">
                  <a href={job.link.href} {...externalRel(job.link.href)}>
                    {job.link.label}
                  </a>
                </p>
              ) : null}
              {job.intro ? <p className="intro">{job.intro}</p> : null}
              {job.roles.map((role) => (
                <div key={role.title} className="role">
                  <h4 className="role-head">
                    {role.title}
                    <span className="period">{role.period}</span>
                  </h4>
                  {role.bullets.length ? (
                    <ul>
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
              {job.bullets?.length ? (
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          <table>
            <thead>
              <tr>
                <th scope="col">시기</th>
                <th scope="col">내용</th>
              </tr>
            </thead>
            <tbody>
              {education.map((item) => (
                <tr key={item.school}>
                  <td className="period">{item.period}</td>
                  <td>
                    {item.school} · {item.degree}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Activities</h2>
          {activities.map((item) => (
            <div key={item.title} className="role">
              <h3 className="role-head">
                {item.title}
                <span className="period">{item.meta}</span>
              </h3>
              {item.link ? (
                <p className="job-link">
                  <a href={item.link.href} {...externalRel(item.link.href)}>
                    {item.link.label}
                  </a>
                </p>
              ) : null}
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Awards</h2>
          <table>
            <thead>
              <tr>
                <th scope="col">시기</th>
                <th scope="col">내용</th>
              </tr>
            </thead>
            <tbody>
              {awards.map((award) => (
                <tr key={award.period}>
                  <td className="period">{award.period}</td>
                  <td>{award.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </>
  );
}
