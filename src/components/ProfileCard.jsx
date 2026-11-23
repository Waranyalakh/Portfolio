import { Link } from "react-router-dom";

export default function ProfileCard() {
  return (
    <div className="card hero">
      <div>
        <p className="eyebrow">Software Development &amp; Robotics</p>
        <h1>Waranya Lakhom</h1>
        <p className="hero-role">Solution Developer</p>
        <p className="prose">
          I build full-stack web applications and contribute to healthcare prototypes for muscle-strength
          measurement and gait-speed assessment. My work includes React interfaces, backend services
          with Python, SQLAlchemy, and PostgreSQL, and sensor integration with Arduino Uno R4 WiFi.
        </p>
        <div className="actions">
          <Link className="button" to="/#project">View Projects</Link>
          <a className="button button-outline" href="/resume-waranya.pdf" type="application/pdf">View Resume</a>
        </div>
        <Link className="featured" to="/#report-engine">
          <strong>Featured Project — Report Engine</strong>
          <span>Python · SQLAlchemy · PostgreSQL</span>
        </Link>
      </div>
      <img className="portrait" src="/img1.png" alt="Portrait of Waranya Lakhom" fetchPriority="high" />
    </div>
  );
}
