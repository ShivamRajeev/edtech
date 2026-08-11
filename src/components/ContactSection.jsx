import ContactEnquiryForm from "./ContactEnquiryForm";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <p className="eyebrow">Contact Us</p>
          <h2>Connect with a Career Advisor</h2>
          <p>Have questions about eligibility, fee, or upcoming batches? Send an enquiry and our team will reach out.</p>

          <ul className="contact-list">
            <li>
              <strong>Office Address:</strong> CareerSpring Training Centre, Floor 3, Business Hub, Your City, State
              - 000000
            </li>
            <li>
              <strong>Phone:</strong> +91 90000 00000
            </li>
            <li>
              <strong>Email:</strong> admissions@careerspring.in
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
          <h3>Enquiry Form</h3>
          <p>Fill your details and our admissions team will contact you shortly.</p>
          <ContactEnquiryForm idPrefix="contact-page" className="contact-form-medium" />
        </div>
      </div>
    </section>
  );
}
