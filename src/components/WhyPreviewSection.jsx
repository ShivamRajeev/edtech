import { useState } from "react";
import { whyPreview } from "../data/siteData";
import InteractiveCard from "../shared/InteractiveCard";

export default function WhyPreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section why-preview-section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Why Learners Trust Us</p>
          <h2>Outcome-Focused Career Training for Graduates</h2>
          <p>Get practical classroom + live online learning, expert mentoring, and placement readiness in one journey.</p>
        </div>
        <div className="mini-grid">
          {whyPreview.map((item, index) => (
            <InteractiveCard
              key={item.title}
              className="mini-card reveal"
              isActive={index === activeIndex}
              onActive={() => setActiveIndex(index)}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
