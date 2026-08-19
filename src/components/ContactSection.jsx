import ContactEnquiryForm from "./ContactEnquiryForm";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <p className="eyebrow">Contact Us</p>
          <h2>Let's Talk About Your Career</h2>
          <p>Have questions about eligibility, fees, upcoming batches or career oppurtunities? Our career advisiors are here to help. </p>

          <ul className="contact-list">
            <li>
              <strong>Office Address:</strong> Career Dekho Training Centre, Floor 3, Business Hub, Your City, State
              - 000000
            </li>
            <li>
              <strong>Phone:</strong> +91 90000 00000
            </li>
            <li>
              <strong>Email:</strong> admissions@careerdekho.in
            </li>
          </ul>

          <div className="map-wrap" aria-label="Google Map Placeholder">
            <iframe
              title="Office location map"
              src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="form-card reveal">
          <h3>Request a Career Consultation</h3>
          <p>Share your details and our CareerDekho team will get in touch to understand your goals and guide you on the right.</p>
          <ContactEnquiryForm idPrefix="contact-page" className="contact-form-medium" />
        </div>
      </div>
    </section>
  );
}
