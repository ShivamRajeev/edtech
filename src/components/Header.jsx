import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/siteData";

export default function Header({ onApplyNow }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="CareerSpring Home">
          <span className="logo-mark">CS</span>
          <span className="brand-text">
            <strong>CareerSpring</strong>
            <small>Training & Placement</small>
          </span>
        </Link>

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
            <NavLink key={link.href} to={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="btn btn-small btn-primary hide-mobile"
          onClick={onApplyNow}
        >
          Apply Now
        </button>
      </div>
    </header>
  );
}
