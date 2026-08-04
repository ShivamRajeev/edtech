export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>CareerSpring</h3>
          <p>
            Career training for graduates with practical programs, interview preparation, and professional placement
            assistance.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#programs">Programs</a>
            </li>
            <li>
              <a href="#contact">Apply Now</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>+91 90000 00000</li>
            <li>admissions@careerspring.in</li>
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
        <p>© {new Date().getFullYear()} CareerSpring Training & Placement. All rights reserved.</p>
      </div>
    </footer>
  );
}
