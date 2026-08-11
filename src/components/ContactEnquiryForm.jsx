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

export default function ContactEnquiryForm({ idPrefix = "contact", onSuccess, className = "" }) {
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
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setStatus({ text: "Submission failed. Please try again or contact our advisor directly.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className={className}>
      <label htmlFor={`${idPrefix}-fullName`}>Full Name</label>
      <input
        id={`${idPrefix}-fullName`}
        name="fullName"
        type="text"
        required
        placeholder="Enter your full name"
        value={form.fullName}
        onChange={onChange}
      />

      <label htmlFor={`${idPrefix}-mobileNumber`}>Mobile Number</label>
      <input
        id={`${idPrefix}-mobileNumber`}
        name="mobileNumber"
        type="tel"
        required
        pattern="[0-9]{10}"
        placeholder="10-digit mobile number"
        value={form.mobileNumber}
        onChange={onChange}
      />

      <label htmlFor={`${idPrefix}-emailAddress`}>Email Address</label>
      <input
        id={`${idPrefix}-emailAddress`}
        name="emailAddress"
        type="email"
        required
        placeholder="Enter your email address"
        value={form.emailAddress}
        onChange={onChange}
      />

      <label htmlFor={`${idPrefix}-qualification`}>Highest Qualification</label>
      <input
        id={`${idPrefix}-qualification`}
        name="qualification"
        type="text"
        required
        placeholder="Example: B.Com, B.Tech, MBA"
        value={form.qualification}
        onChange={onChange}
      />

      <label htmlFor={`${idPrefix}-interestedProgram`}>Interested Program</label>
      <select
        id={`${idPrefix}-interestedProgram`}
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

      <label htmlFor={`${idPrefix}-preferredMode`}>Preferred Mode</label>
      <select
        id={`${idPrefix}-preferredMode`}
        name="preferredMode"
        required
        value={form.preferredMode}
        onChange={onChange}
      >
        <option value="">Select Mode</option>
        <option value="Classroom">Classroom</option>
        <option value="Live Online">Live Online</option>
      </select>

      <label htmlFor={`${idPrefix}-message`}>Message</label>
      <textarea
        id={`${idPrefix}-message`}
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
  );
}
