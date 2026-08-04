import { useState } from "react";
import { processSteps } from "../data/siteData";
import InteractiveCard from "../shared/InteractiveCard";

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Our Process</p>
          <h2>A Clear Path from Learning to Placement</h2>
        </div>
        <div className="process-track">
          {processSteps.map((step, index) => (
            <InteractiveCard
              key={step.step}
              className="process-step reveal"
              isActive={activeIndex === index}
              onActive={() => setActiveIndex(index)}
            >
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
