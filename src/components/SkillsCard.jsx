const skillGroups = [
  ["Programming Languages", ["Python", "JavaScript", "C", "C#", "Java"]],
  ["Frontend Development", ["React.js", "Vue.js", "HTML", "CSS"]],
  ["Backend & Database", ["Python Backend Development", "SQLAlchemy", "PostgreSQL", "SQL Server"]],
  ["Hardware & Embedded Systems", ["Arduino", "Arduino Uno R4 WiFi", "Load Cell", "HX711", "Sensor Integration"]],
];

export default function SkillsCard({ standalone = false }) {
  const Heading = standalone ? "h1" : "h2";

  return (
    <>
      <Heading className="section-heading">Technical Skills</Heading>
      <div className="two-columns">
        {skillGroups.map(([group, skills]) => (
          <article className="card padded" key={group}>
            <h3>{group}</h3>
            <ul className="tags">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
