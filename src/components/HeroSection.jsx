export default function HeroSection({ onApplyNow }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg"></div>
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <h1>
            UPSKILL TODAY,
            <br />
            CRACK THE WORLD
            <br />
            TOMORROW
          </h1>
          <p className="hero-subtext">Learn. Prepare. Get Hired. Upgrade Your Career.</p>
          <div className="cta-group">
            <button type="button" className="btn btn-primary" onClick={onApplyNow}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
