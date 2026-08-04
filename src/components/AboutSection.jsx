import { coreValues } from "../data/siteData";

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-content reveal">
          <p className="eyebrow">Who We Are</p>
          <h2>Career Training & Placement Company for Ambitious Learners</h2>
          <p>
            We are a Career Training & Placement Company committed to helping graduates and early professionals build
            successful careers through practical learning, professional development, and placement assistance.
          </p>

          <div className="mission-vision">
            <article>
              <h3>Vision</h3>
              <p>
                To become a trusted career development platform that bridges the gap between academic learning and
                industry expectations.
              </p>
            </article>
            <article>
              <h3>Mission</h3>
              <p>
                To equip students and early professionals with practical skills, confidence, career guidance, and
                placement support to help them enter the workforce successfully.
              </p>
            </article>
          </div>
        </div>

        <div className="values-card reveal">
          <h3>Core Values</h3>
          <ul>
            {coreValues.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
