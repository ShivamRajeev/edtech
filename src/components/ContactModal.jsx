import { useEffect } from "react";
import ContactEnquiryForm from "./ContactEnquiryForm";

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-slate-950/55 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="contact-modal-card w-full max-w-[680px] overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-2x5"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="max-h-[88vh] overflow-y-auto p-4 md:p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <h3 id="contact-modal-title" className="font-display text-2xl text-[#0b1f3b]">
                Start Your Career
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Fill your details and our admissions team will contact you shortly.
              </p>
            </div>
            <button
              type="button"
              aria-label="Close contact form"
              onClick={onClose}
              className="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Close
            </button>
          </div>

          <ContactEnquiryForm idPrefix="modal-contact" className="contact-form-compact" />
        </div>
      </div>
    </div>
  );
}
