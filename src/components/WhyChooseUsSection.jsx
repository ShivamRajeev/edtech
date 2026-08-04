import { useState } from "react";
import { whyChooseUs } from "../data/siteData";
import InteractiveCard from "../shared/InteractiveCard";

export default function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why-us" className="section why-us-section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Built for Career Outcomes, Not Just Course Completion</h2>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((item, index) => (
            <InteractiveCard
              key={item.title}
              className="why-card reveal"
              isActive={activeIndex === index}
              onActive={() => setActiveIndex(index)}
            >
              <div className="icon">{String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
