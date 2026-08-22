import { useState } from "react";
import { whyChooseUs } from "../data/siteData";
import InteractiveCard from "../shared/InteractiveCard";
import CertificateModal from "./CertificateModal";

export default function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

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

        <div className="certificate-credential reveal">
          <button
            type="button"
            onClick={() => setIsCertificateModalOpen(true)}
            className="credential-image-button"
            aria-label="View DPIIT Certificate"
          >
            <img
              src="/images/IMG-20260821-WA0027.jpg"
              alt="DPIIT Certificate of Recognition"
              className="credential-image"
            />
          </button>
        </div>
      </div>
      <CertificateModal isOpen={isCertificateModalOpen} onClose={() => setIsCertificateModalOpen(false)} />
    </section>
  );
}
