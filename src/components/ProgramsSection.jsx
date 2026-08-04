import { useState } from "react";
import { flagshipOutcomes, flagshipPlacement, futurePrograms } from "../data/siteData";
import InteractiveCard from "../shared/InteractiveCard";

export default function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="programs" className="section programs-section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Programs</p>
          <h2>Placement Assistance Program with Job-Oriented Learning</h2>
          <p>Explore practical training tracks designed for freshers and early professionals.</p>
        </div>

        <article className="program-card flagship reveal">
          <div className="program-tag">Flagship Program</div>
          <div className="program-top">
            <h3>Certified Banking Sales Career Accelerator Program</h3>
            <div className="program-meta">
              <span>
                <strong>Duration:</strong> 21 Days
              </span>
              <span>
                <strong>Mode:</strong> Classroom / Live Online
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
            </div>
            <div>
              <h4>Placement Assistance Includes</h4>
              <ul>
                {flagshipPlacement.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <a className="btn btn-primary" href="#contact">
            Apply Now
          </a>
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
              <a className="text-link" href="#contact">
                Enquire Now
              </a>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
