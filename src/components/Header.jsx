import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/siteData";
import logo from "/images/logo.webp";

export default function Header({ onApplyNow }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="Career Dekho Home">
          <img className="brand-logo" src={logo} alt="Career Dekho - Learn. Prepare. Get Hired" style={{ width: "60px", height: "auto" }} />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "-2px" }}>
            <span style={{ fontSize: "17px", fontWeight: "800", color: "#1577d8", lineHeight: "0.9", margin: "0" }}>CAREER</span>
            <span style={{ fontSize: "21px", fontWeight: "800", color: "#f97316", lineHeight: "0.9", margin: "0" }}>DEKHO</span>
            <span style={{ fontSize: "7px", fontWeight: "500", color: "#ffffff", lineHeight: "0.9", marginTop: "5px", margin: "2" }}>-Upgrade Your Career-</span>
          </div>
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
