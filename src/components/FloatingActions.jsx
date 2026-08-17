export default function FloatingActions({ onApplyNow }) {
  return (
    <>
      <a
        className="whatsapp-float"
        href="https://wa.me/919000000000?text=Hi%20Career%20Dekho%2C%20I%20want%20career%20guidance."
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        <span>WhatsApp</span>
      </a>

      <div className="mobile-action-bar" aria-label="Quick actions">
        <button type="button" onClick={onApplyNow}>
          Apply Now
        </button>
        <button type="button" onClick={onApplyNow}>
          Talk to Advisor
        </button>
        <a
          href="https://wa.me/919000000000?text=Hi%20Career%20Dekho%2C%20I%20want%20career%20guidance."
          target="_blank"
          rel="noopener"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
