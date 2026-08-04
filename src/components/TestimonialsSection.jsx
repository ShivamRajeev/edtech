import { useState } from "react";
import { testimonials } from "../data/siteData";
import InteractiveCard from "../shared/InteractiveCard";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Student Success Stories</p>
          <h2>Real Progress. Real Confidence.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <InteractiveCard
              key={item.name}
              className="testimonial-card reveal"
              isActive={activeIndex === index}
              onActive={() => setActiveIndex(index)}
            >
              <p>"{item.quote}"</p>
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
