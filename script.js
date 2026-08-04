const GOOGLE_SHEET_WEB_APP_URL = "REPLACE_WITH_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const faqQuestions = document.querySelectorAll(".faq-question");
const enquiryForm = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");
const year = document.getElementById("year");
const fallbackSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1400' height='900' viewBox='0 0 1400 900'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%230f2c52'/%3E%3Cstop offset='100%25' stop-color='%2313a07e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1400' height='900' fill='url(%23bg)'/%3E%3Ccircle cx='1080' cy='170' r='220' fill='rgba(255,255,255,0.10)'/%3E%3Ccircle cx='220' cy='760' r='260' fill='rgba(255,255,255,0.08)'/%3E%3Ctext x='700' y='430' text-anchor='middle' fill='white' font-family='Arial,sans-serif' font-size='54' font-weight='700'%3ECareerSpring Training%3C/text%3E%3Ctext x='700' y='500' text-anchor='middle' fill='white' font-family='Arial,sans-serif' font-size='28'%3EProfessional Development and Placement Support%3C/text%3E%3C/svg%3E";
const interactiveCards = document.querySelectorAll(
  ".stat-card, .process-step, .mini-card, .program-card, .why-card, .placement-card, .testimonial-card"
);

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    img.src = fallbackSvg;
  }, { once: true });
});

interactiveCards.forEach((card) => {
  card.classList.add("interactive-card");
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");

  card.addEventListener("click", () => {
    const parent = card.parentElement;
    if (!parent) {
      return;
    }

    parent.querySelectorAll(".interactive-card.is-active").forEach((activeCard) => {
      activeCard.classList.remove("is-active");
    });

    card.classList.add("is-active");
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
});

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1120 && siteNav.classList.contains("open")) {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.closest(".faq-item");
    const isActive = parent.classList.contains("active");

    faqQuestions.forEach((q) => {
      q.closest(".faq-item").classList.remove("active");
      q.setAttribute("aria-expanded", "false");
    });

    if (!isActive) {
      parent.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

function validateMobile(mobileNumber) {
  return /^[0-9]{10}$/.test(mobileNumber.trim());
}

function setStatus(message, type) {
  formStatus.textContent = message;
  formStatus.classList.remove("success", "error");

  if (type) {
    formStatus.classList.add(type);
  }
}

async function submitToGoogleSheet(payload) {
  if (GOOGLE_SHEET_WEB_APP_URL.includes("REPLACE_WITH")) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { simulated: true };
  }

  const response = await fetch(GOOGLE_SHEET_WEB_APP_URL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Unable to submit enquiry.");
  }

  return response.json().catch(() => ({ ok: true }));
}

if (enquiryForm) {
  enquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(enquiryForm);
    const mobileNumber = String(formData.get("mobileNumber") || "");

    if (!validateMobile(mobileNumber)) {
      setStatus("Please enter a valid 10-digit mobile number.", "error");
      return;
    }

    if (!enquiryForm.checkValidity()) {
      setStatus("Please complete all required fields.", "error");
      return;
    }

    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      mobileNumber: mobileNumber.trim(),
      emailAddress: String(formData.get("emailAddress") || "").trim(),
      qualification: String(formData.get("qualification") || "").trim(),
      interestedProgram: String(formData.get("interestedProgram") || "").trim(),
      preferredMode: String(formData.get("preferredMode") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      leadSource: String(formData.get("leadSource") || "Website Enquiry"),
      submittedAt: new Date().toISOString(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent
    };

    const submittedAtInput = document.getElementById("submittedAt");
    if (submittedAtInput) {
      submittedAtInput.value = payload.submittedAt;
    }

    const submitButton = enquiryForm.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";
    setStatus("", "");

    try {
      await submitToGoogleSheet(payload);
      enquiryForm.reset();
      setStatus("Thank you. Your enquiry has been submitted successfully.", "success");
    } catch (error) {
      setStatus("Submission failed. Please try again or contact our advisor directly.", "error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
    observer.observe(el);
  });
} else {
  revealElements.forEach((el) => el.classList.add("visible"));
}
