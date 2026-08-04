import { useState } from "react";
import { contactPrograms } from "../data/siteData";

const GOOGLE_SHEET_WEB_APP_URL =
  import.meta.env.VITE_GOOGLE_SHEET_WEB_APP_URL || "REPLACE_WITH_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

function validateMobile(mobileNumber) {
  return /^[0-9]{10}$/.test(mobileNumber.trim());
}

async function submitToGoogleSheet(payload) {
  if (GOOGLE_SHEET_WEB_APP_URL.includes("REPLACE_WITH")) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { simulated: true };
  }

  const response = await fetch(GOOGLE_SHEET_WEB_APP_URL, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Unable to submit enquiry.");
  }

  return response.json().catch(() => ({ ok: true }));
}

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    qualification: "",
    interestedProgram: "",
    preferredMode: "",
    message: ""
  });
  const [status, setStatus] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateMobile(form.mobileNumber)) {
      setStatus({ text: "Please enter a valid 10-digit mobile number.", type: "error" });
      return;
    }

    if (
      !form.fullName ||
      !form.mobileNumber ||
      !form.emailAddress ||
      !form.qualification ||
      !form.interestedProgram ||
      !form.preferredMode
    ) {
      setStatus({ text: "Please complete all required fields.", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ text: "", type: "" });

    const payload = {
      ...form,
      leadSource: "Website Enquiry",
      submittedAt: new Date().toISOString(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent
    };

    try {
      await submitToGoogleSheet(payload);
      setForm({
        fullName: "",
        mobileNumber: "",
        emailAddress: "",
        qualification: "",
        interestedProgram: "",
        preferredMode: "",
        message: ""
      });
      setStatus({ text: "Thank you. Your enquiry has been submitted successfully.", type: "success" });
    } catch (error) {
      setStatus({ text: "Submission failed. Please try again or contact our advisor directly.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <p>Fill your details to apply, download brochure, or request counselling support.</p>

          <form onSubmit={onSubmit} noValidate>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={onChange}
            />

            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              id="mobileNumber"
              name="mobileNumber"
              type="tel"
              required
              pattern="[0-9]{10}"
              placeholder="10-digit mobile number"
              value={form.mobileNumber}
              onChange={onChange}
            />

            <label htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              required
              placeholder="Enter your email address"
              value={form.emailAddress}
              onChange={onChange}
            />

            <label htmlFor="qualification">Highest Qualification</label>
            <input
              id="qualification"
              name="qualification"
              type="text"
              required
              placeholder="Example: B.Com, B.Tech, MBA"
              value={form.qualification}
              onChange={onChange}
            />

            <label htmlFor="interestedProgram">Interested Program</label>
            <select
              id="interestedProgram"
              name="interestedProgram"
              required
              value={form.interestedProgram}
              onChange={onChange}
            >
              <option value="">Select Program</option>
              {contactPrograms.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>

            <label htmlFor="preferredMode">Preferred Mode</label>
            <select id="preferredMode" name="preferredMode" required value={form.preferredMode} onChange={onChange}>
              <option value="">Select Mode</option>
              <option value="Classroom">Classroom</option>
              <option value="Live Online">Live Online</option>
            </select>

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us your career goals or questions"
              value={form.message}
              onChange={onChange}
            ></textarea>

            <button className="btn btn-primary full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <p className="form-note">By submitting this form, you agree to be contacted by our admissions team.</p>
            <p className={`form-status ${status.type}`.trim()} aria-live="polite">
              {status.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
