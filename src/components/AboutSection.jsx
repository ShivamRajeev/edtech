import { useState } from "react";
import { coreValues } from "../data/siteData";

function splitCoreValue(value) {
  const separatorIndex = value.indexOf(":");

  if (separatorIndex === -1) {
    return {
      title: value.split(" ").slice(0, 2).join(" "),
      detail: value.split(" ").slice(2).join(" ")
    };
  }

  return {
    title: value.slice(0, separatorIndex).trim(),
    detail: value.slice(separatorIndex + 1).trim()
  };
}

export default function AboutSection() {
  const [activeValueIndex, setActiveValueIndex] = useState(null);

  return (
    <section id="about" className="section about-section">
      <div className="about-orbit about-orbit-one" aria-hidden="true" />
      <div className="about-orbit about-orbit-two" aria-hidden="true" />
      <div className="container about-grid">
        <div className="about-content reveal">
          <div className="about-intro">
            <p className="eyebrow">Who We Are</p>
            <p className="about-kicker">From learning to earning</p>
            <h2>Building job-ready careers for graduates and early professionals.</h2>
            <p className="about-lead">
              CareerDekho helps ambitious learners turn potential into progress through practical training,
              thoughtful guidance, and real access to career opportunities.
            </p>
          </div>

          <div className="approach-card">
            <div className="approach-heading">
              <div>
                <p className="card-label">Our approach</p>
                <h3>A clear path into the workplace</h3>
              </div>
            </div>
            <div className="approach-path" aria-label="Learn, prepare, get opportunity, start your career">
              <span>Learn</span>
              <i aria-hidden="true">→</i>
              <span>Prepare</span>
              <i aria-hidden="true">→</i>
              <span>Get opportunity</span>
              <i aria-hidden="true">→</i>
              <span>Start your career</span>
            </div>
            <p>
              We prepare learners for every step, from career planning and skill-building to interviews and joining.
            </p>
          </div>

          <div className="mission-vision">
            <article className="about-card about-card-vision">
              <h3>Vision</h3>
              <p>To make India&apos;s talent job-ready, future-ready, and globally employable.</p>
            </article>
            <article className="about-card about-card-mission">
              <h3>Mission</h3>
              <p>
                To bridge the gap between education and employment with practical skills, career guidance, confidence, and access to meaningful opportunities.
              </p>
            </article>
            <article className="about-card about-card-purpose">
              <h3>Our purpose</h3>
              <p>
                India has millions of ambitious graduates with the potential to build successful careers. We help close the gap between what learners know and what employers need, moving them from learning to earning.
              </p>
            </article>
          </div>
        </div>

        <aside className="values-card reveal">
          <div className="values-card-topline">
            <span className="card-label">What guides us</span>
          </div>
          <h3>Core values</h3>
          <p className="values-intro">The standards behind every learner experience.</p>
          <ul>
            {coreValues.map((value, index) => (
              <li key={value}>
                <div>
                  <button
                    type="button"
                    className="value-link"
                    aria-expanded={activeValueIndex === index}
                    onClick={() => setActiveValueIndex(activeValueIndex === index ? null : index)}
                  >
                    {splitCoreValue(value).title}
                    <span aria-hidden="true">{activeValueIndex === index ? "−" : "+"}</span>
                  </button>
                  {activeValueIndex === index && <p className="value-detail">{splitCoreValue(value).detail}</p>}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
