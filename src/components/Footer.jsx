import { useState } from "react";
import { Link } from "react-router-dom";
import CertificateModal from "./CertificateModal";

export default function Footer({ onApplyNow }) {
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Career Dekho</h3>
          <p>
            Career training for graduates with practical programs, interview preparation, and professional placement
            assistance.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <button type="button" className="footer-link-button" onClick={onApplyNow}>
                Apply Now
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-link-button blink"
                onClick={() => setIsCertificateModalOpen(true)}
              >
                Government Recognition
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>+91 98100 60396</li>
            <li>admissions@careerdekho.in</li>
            <li>Your City, India</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          Placement assistance is subject to successful course completion, student performance, eligibility criteria,
          and hiring partner requirements.
        </p>
        <p>© {new Date().getFullYear()} Career Dekho. All rights reserved.</p>
      </div>
      <CertificateModal isOpen={isCertificateModalOpen} onClose={() => setIsCertificateModalOpen(false)} />
    </footer>
  );
}
