import heroTrainingImage from "../assets/hero-training.jpg";
import { heroTrustItems, highlights } from "../data/siteData";
import FallbackImage from "../shared/FallbackImage";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg"></div>
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <p className="eyebrow">Career Training For Graduates</p>
          <h2>Learn. Prepare. Get Hired.</h2>
          <p className="hero-subtext">
            Industry-relevant career training, practical learning, and placement support for graduates and early-career professionals.
          </p>
          <div className="highlight-tags">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="hero-trust">
            {heroTrustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-media reveal">
          <FallbackImage
            src={heroTrainingImage}
            alt="Students attending a professional career training workshop"
          />
          <div className="floating-badge">Admissions Open for New Batch</div>
        </div>
      </div>
    </section>
  );
}
