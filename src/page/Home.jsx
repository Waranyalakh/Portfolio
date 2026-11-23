import ProfileCard from "../components/ProfileCard";
import SkillsCard from "../components/SkillsCard";
import ProjectsCard from "../components/ProjectsCard";
import ContactCard from "../components/ContactCard";

export default function Home() {
  return (
    <main className="shell page">
      <section id="home">
        <ProfileCard />
      </section>
      <section id="about">
        <h2 className="section-heading">About Me</h2>
        <div className="card padded">
          <p className="prose">
            My background in computer and robotics engineering led me to web application development
            and backend services. I've also worked with Arduino, load cells, and distance sensors.
            I'm interested in building practical software that meets users' needs, including
            applications that work with physical devices.
          </p>
        </div>
      </section>
      <section id="experience">
        <h2 className="section-heading">Work Experience</h2>
        <div className="two-columns">
          <article className="card padded role-card">
            <h3>Solution Developer</h3>
            <p className="meta">Intact Network Solution Ltd. · Since October 2025</p>
            <ul>
              <li>Developed backend reporting logic and API endpoints for Report Engine.</li>
              <li>Contributed to sensor and hardware integration for the MMT Measurement Device and Robotic Gait Measurement System.</li>
            </ul>
          </article>
          <article className="card padded role-card">
            <h3>Web Development Intern</h3>
            <p className="meta">Creative Era Ltd. · August 2024 – November 2024</p>
            <ul>
              <li>Built and tested Vue.js interfaces for an e-commerce website.</li>
              <li>Implemented SQL-backed data management in a CRUD web application lab.</li>
            </ul>
          </article>
        </div>
      </section>
      <section id="skill">
        <SkillsCard />
      </section>
      <section id="project">
        <ProjectsCard />
      </section>
      <section id="education">
        <h2 className="section-heading">Education</h2>
        <div className="card padded">
          <h3>Bangkok University</h3>
          <p className="meta">2021–2025 · CGPA 3.17</p>
          <p>Bachelor of Engineering in Computer and Robotics</p>
        </div>
      </section>
      <section id="contact">
        <ContactCard />
      </section>
    </main>
  );
}
