export default function FloatingActions() {
  return (
    <>
      <a
        className="whatsapp-float"
        href="https://wa.me/919000000000?text=Hi%20CareerSpring%2C%20I%20want%20career%20guidance."
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        <span>WhatsApp</span>
      </a>

      <div className="mobile-action-bar" aria-label="Quick actions">
        <a href="#contact">Apply Now</a>
        <a href="#contact">Talk to Advisor</a>
        <a
          href="https://wa.me/919000000000?text=Hi%20CareerSpring%2C%20I%20want%20career%20guidance."
          target="_blank"
          rel="noopener"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
