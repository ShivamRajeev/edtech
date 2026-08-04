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
          <h2>Step-by-Step Career Support</h2>
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
          Interview opportunities depend on successful completion of the program, student performance, eligibility,
          and hiring partner requirements. Placement assistance does not mean guaranteed job placement unless
          explicitly mentioned in a written agreement.
        </p>
      </div>
    </section>
  );
}
