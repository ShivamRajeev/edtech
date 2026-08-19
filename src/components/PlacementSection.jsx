import { useState } from "react";
import { placementSteps } from "../data/siteData";
import InteractiveCard from "../shared/InteractiveCard";

export default function PlacementSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="placement" className="section placement-section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Placement Assistance</p>
          <h2>CAREER & PLACEMENT SUPPORT</h2>
        </div>

        <div className="placement-steps">
          {placementSteps.map((step, index) => (
            <InteractiveCard
              key={step.title}
              className="placement-card reveal"
              isActive={index === activeIndex}
              onActive={() => setActiveIndex(index)}
            >
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </InteractiveCard>
          ))}
        </div>

        <p className="disclaimer reveal">
          Interview and Job opportunities are subject to program completion, candidate performance, eligibility,
          and employer requirements and available openings. CarrerDekho provides career and placement assistance and does not guaranteed employment unless
          explicitly stated in a written agreement.
        </p>
      </div>
    </section>
  );
}
