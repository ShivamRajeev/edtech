import { hiringPartners } from "../data/siteData";

export default function PartnerStrip() {
  return (
    <section className="partner-strip" aria-label="Hiring partners">
      <div className="partner-marquee">
        <div className="partner-marquee-track">
          {[...hiringPartners, ...hiringPartners].map((partner, index) => (
            <span className="partner-logo" key={`${partner}-${index}`}>
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
