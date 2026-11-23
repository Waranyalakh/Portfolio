import { useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projects = [
  {
    id: "report-engine",
    name: "Report Engine",
    category: "Backend Development · Approximately 3 months",
    description: "A backend service that converts database records into report-ready data.",
    responsibilities: [
      "Built and maintained logic to retrieve, process, and transform PostgreSQL data.",
      "Implemented calculation formulas and business rules for report metrics.",
      "Developed API endpoints for processed report data and handled edge cases to keep results consistent.",
    ],
    technologies: ["Python", "SQLAlchemy", "PostgreSQL"],
  },
  {
    id: "mmt-device",
    name: "MMT Measurement Device",
    category: "Hardware & Embedded Systems",
    description: "A device for measuring muscle force during manual muscle testing.",
    responsibilities: [
      "Integrated a load cell and HX711 with an Arduino Uno R4 WiFi for force data acquisition.",
      "Extended existing Arduino firmware and tested the measurement components.",
    ],
    technologies: ["Arduino Uno R4 WiFi", "Load Cell", "HX711"],
  },
  {
    id: "gait-system",
    name: "Robotic Gait Measurement System",
    category: "Robotics & Hardware · Approximately 3 months",
    description: "A robotic system for measuring gait speed and assessing patient mobility.",
    responsibilities: [
      "Helped integrate the mechanical structure with an existing robotic platform.",
      "Integrated a 500 kg load cell for weight measurement and Arduino distance sensors for position detection.",
      "Considered sensor placement, system stability, and patient safety during integration.",
    ],
    technologies: ["Arduino", "Load Cell", "Distance Sensors"],
  },
  {
    id: "ecommerce",
    name: "E-Commerce Website",
    category: "Internship · Web Development",
    description: "An online store for browsing products and placing orders.",
    responsibilities: [
      "Built responsive frontend interfaces with Vue.js and CSS.",
      "Connected product and order screens to backend database functionality.",
      "Tested and debugged the application.",
    ],
    technologies: ["Vue.js", "CSS", "SQL"],
  },
  {
    id: "crud-application",
    name: "CRUD Web Application",
    category: "Internship · Web Development Lab",
    description: "A web application for managing records in a SQL database.",
    responsibilities: [
      "Designed and implemented data management interfaces using Vue.js.",
      "Implemented create, read, update, and delete operations with SQL-backed storage.",
    ],
    technologies: ["Vue.js", "CSS", "SQL"],
  },
];

const screenshots = [
  "Bakery storefront sign-in", "Product catalog", "Product listing and cart",
  "Customer order view", "Storefront dialog", "Administrative product list",
  "Order details", "Monthly sales chart", "Order status chart",
].map((alt, index) => ({ alt, src: `/project/project${index + 1}.png` }));

function ScreenshotGallery() {
  const [selected, setSelected] = useState(screenshots[0]);
  const [playing, setPlaying] = useState(false);
  const dialog = useRef(null);

  function openPreview(screenshot) {
    setPlaying(false);
    setSelected(screenshot);
    dialog.current.showModal();
  }

  return (
    <div className="card padded gallery">
      <div className="gallery-heading">
        <h3>E-Commerce Website Screenshots</h3>
        <button type="button" className="button button-outline" onClick={() => setPlaying(!playing)}>
          {playing ? "Pause Slideshow" : "Play Slideshow"}
        </button>
      </div>
      <Carousel
        ariaLabel="E-commerce website screenshots"
        infiniteLoop
        autoPlay={playing}
        stopOnHover={false}
        showThumbs={false}
        showStatus={false}
        emulateTouch
        swipeable
        transitionTime={0}
        renderItem={(item, { isSelected }) => (
          <div inert={!isSelected}>{item}</div>
        )}
        renderIndicator={(select, isSelected, index) => (
          <li key={index}>
            <button
              type="button"
              className="gallery-indicator"
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={isSelected ? "true" : undefined}
              onClick={select}
            />
          </li>
        )}
      >
        {screenshots.map((screenshot) => (
          <button key={screenshot.src} type="button" className="gallery-slide"
            onClick={() => openPreview(screenshot)} aria-label={`Open preview: ${screenshot.alt}`}>
            <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
          </button>
        ))}
      </Carousel>
      <dialog ref={dialog} className="preview-dialog" aria-labelledby="preview-title"
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close(); }}>
        <div className="preview-bar">
          <h3 id="preview-title">{selected.alt}</h3>
          <form method="dialog">
            <button type="submit" className="button button-outline">Close</button>
          </form>
        </div>
        <img src={selected.src} alt={selected.alt} loading="lazy" />
      </dialog>
    </div>
  );
}

export default function ProjectsCard() {
  return (
    <>
      <h2 className="section-heading">Featured Projects</h2>
      <div className="two-columns">
        {projects.map(({ id, name, category, description, responsibilities, technologies }) => (
          <article key={id} id={id} className={`card padded project${id === "report-engine" ? " project-featured" : ""}`}>
            <p className="eyebrow">{category}</p>
            <h3>{name}</h3>
            <p className="prose">{description}</p>
            <ul>
              {responsibilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <ul className="tags" aria-label="Technologies">
              {technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <ScreenshotGallery />
    </>
  );
}
