import { useState } from "react";
import { stats } from "../data/siteData";
import InteractiveCard from "../shared/InteractiveCard";

export default function StatsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((item, index) => (
          <InteractiveCard
            key={item.title}
            className="stat-card reveal"
            isActive={activeIndex === index}
            onActive={() => setActiveIndex(index)}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}
