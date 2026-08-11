import FallbackImage from "../shared/FallbackImage";
import { heroTrustItems, highlights } from "../data/siteData";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg"></div>
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <p className="eyebrow">Career Training For Graduates</p>
          <h1>Launch Your Career with Confidence</h1>
          <p className="hero-subtext">
            Industry-focused training, career mentoring, and placement assistance for graduates and early professionals.
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
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
            alt="Students attending a professional career training workshop"
          />
          <div className="floating-badge">Admissions Open for New Batch</div>
        </div>
      </div>
    </section>
  );
}
