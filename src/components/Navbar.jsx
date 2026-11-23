import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const items = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skill"],
  ["Projects", "#project"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const { hash, pathname } = useLocation();
  const active = hash === "#report-engine" ? "#project" : hash || (pathname === "/skill" ? "#skill" : "#home");

  function handleEscape(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggle.current?.focus();
    }
  }

  return (
    <header className="site-header">
      <nav className="shell navbar" aria-label="Main navigation" onKeyDown={handleEscape}>
        <Link className="brand" to="/#home" onClick={() => setOpen(false)}>Waranya Lakhom</Link>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close menu" : "Menu"}
        </button>
        <div className="nav-items" id="main-navigation" data-open={open}>
          {items.map(([label, id]) => (
            <Link key={id} to={`/${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
