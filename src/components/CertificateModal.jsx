import { useEffect } from "react";

export default function CertificateModal({ isOpen, onClose }) {
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
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src="/images/IMG-20260821-WA0027.jpg"
          alt="DPIIT Certificate of Recognition"
          className="w-full"
        />
      </div>
    </div>
  );
}
