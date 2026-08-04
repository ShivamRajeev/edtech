import { useState } from "react";
import { navLinks } from "../data/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="CareerSpring Home">
          <span className="logo-mark">CS</span>
          <span className="brand-text">
            <strong>CareerSpring</strong>
            <small>Training & Placement</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="siteNav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="siteNav" className={`site-nav ${open ? "open" : ""}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-small btn-primary hide-mobile" href="#contact">
          Apply Now
        </a>
      </div>
    </header>
  );
}
