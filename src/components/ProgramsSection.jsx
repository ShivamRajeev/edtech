import { useState } from "react";
import { flagshipOutcomes, flagshipPlacement, futurePrograms } from "../data/siteData";
import InteractiveCard from "../shared/InteractiveCard";

export default function ProgramsSection({ onApplyNow }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="programs" className="section programs-section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Programs</p>
          <h2>Career Training Programs Built for Job Readiness</h2>
          <p>Practical training designed to help graduates and early professionals build job-ready skills and prepare for career opportunities</p>
        </div>

        <article className="program-card flagship reveal">
          <div className="program-tag">Flagship Program</div>
          <div className="program-top">
            <h3>Banking Sales Career Accelerator Program</h3>
            <h4>Certificates of Compeletion from CareerDekho</h4>
            <div className="program-meta">
              <span>
                <strong>Duration:</strong> 21 Days
              </span>
              <span>
                <strong>Mode:</strong> Live Online
              </span>
              <span>
                <strong>Fee:</strong> Rs. 50,000
              </span>
            </div>
            <p>
              <strong>Eligibility:</strong> Graduates, final-year students, and early professionals interested in
              banking, finance, sales, and customer-facing roles.
            </p>
          </div>

          <div className="program-columns">
            <div>
              <h4>Key Learning Outcomes</h4>
              <ul>
                {flagshipOutcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            <h3>Who is this Program For?</h3>
            </div>
            <div>
              <h4>Career & Placement Support</h4>
              <ul>
                {flagshipPlacement.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={onApplyNow}>
            Apply Now
          </button>
        </article>

        <div className="program-grid">
          {futurePrograms.map((program, index) => (
            <InteractiveCard
              key={program.title}
              className="program-card reveal"
              isActive={activeIndex === index}
              onActive={() => setActiveIndex(index)}
            >
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <a className="text-link" href="/contact">
                Enquire Now
              </a>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
