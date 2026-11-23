const email = "waranyalakhom40@gmail.com";

export default function ContactCard() {
  return (
    <div className="card padded">
      <h2>Contact</h2>
      <div className="actions">
        <a className="button contact-email" href={`mailto:${email}`}>{email}</a>
        <a className="button button-outline" href="https://github.com/Waranyalakh">GitHub</a>
        <a className="button button-outline" href="/resume-waranya.pdf" download>Download Resume</a>
      </div>
    </div>
  );
}
