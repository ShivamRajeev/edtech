import { trackDomains } from "../data/siteData";

export default function PartnerStrip() {
  return (
    <section className="partner-strip" aria-label="Career domains and hiring readiness tracks">
      <div className="container partner-strip-inner">
        <p>Career tracks aligned with current hiring demand:</p>
        <ul>
          {trackDomains.map((domain) => (
            <li key={domain}>{domain}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
