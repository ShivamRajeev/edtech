import { motion } from "framer-motion";
import FallbackImage from "../shared/FallbackImage";

const founderBio = [
  "Mrs. Sarika founded CareerSpring with a clear purpose: bridge the gap between academic learning and the fast-evolving expectations of employers. After over 15 years in talent development and workforce strategy, she recognized that many learners had potential but lacked structured, industry-aligned mentorship.",
  "Before launching the institute, Mrs. Sarika led large-scale learning transformation programs for BFSI, technology, and service organizations. Her work focused on building practical capability frameworks that improved candidate confidence, communication, and role readiness from day one.",
  "At CareerSpring, she has architected a pedagogy that combines domain fundamentals, scenario-based simulations, interview preparation, and continuous mentoring. This integrated approach ensures students do not just complete courses, but develop measurable professional competence.",
  "She is also deeply committed to learner equity and employability. Through scholarship-linked initiatives and regional outreach, she has helped first-generation graduates and early professionals access high-quality career pathways in competitive job markets.",
  "Today, Mrs. Sarika continues to guide the academic board, faculty design standards, and placement strategy, ensuring every program reflects excellence, relevance, and student outcomes."
];

const founderAchievements = [
  "15+ Years in Learning & Development",
  "12,000+ Learners Mentored",
  "150+ Hiring Partnerships Supported",
  "National Speaker on Career Readiness"
];

const founderVisionCards = [
  {
    title: "Mission Statement",
    icon: "M",
    body: "To deliver rigorous, job-aligned education that transforms learners into confident, workplace-ready professionals through applied training and expert mentorship."
  },
  {
    title: "Vision Statement",
    icon: "V",
    body: "To become the most trusted career acceleration institute in India by setting benchmarks in training quality, student outcomes, and industry relevance."
  },
  {
    title: "From The Founder",
    icon: "Q",
    body: "\"When learners are coached with clarity, challenged with purpose, and supported with integrity, employability becomes inevitable.\""
  }
];

const faculty = [
  {
    name: "Prof. Rohan Verma",
    specialization: "Data Science & AI Expert",
    experience: "11+ Years",
    description:
      "Guides learners through ML workflows, model deployment, and real-world AI problem solving for business outcomes.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Ms. Kavya Nair",
    specialization: "Full Stack Development Mentor",
    experience: "10+ Years",
    description:
      "Mentors students in production-grade frontend and backend development with scalable architecture practices.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Mr. Nishant Rao",
    specialization: "Cloud Computing Specialist",
    experience: "12+ Years",
    description:
      "Builds cloud-first engineering capability across AWS fundamentals, secure architectures, and cost optimization.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Ms. Aditi Menon",
    specialization: "DevOps Engineer",
    experience: "9+ Years",
    description:
      "Trains on CI/CD, containerization, and release automation to help teams ship software faster and reliably.",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Mr. Imran Sheikh",
    specialization: "Cyber Security Expert",
    experience: "13+ Years",
    description:
      "Teaches threat modeling, defensive security techniques, and compliance-aware security operations.",
    image:
      "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Ms. Rhea Kapoor",
    specialization: "UI/UX Design Mentor",
    experience: "8+ Years",
    description:
      "Helps learners master user research, interaction design, and portfolio-ready digital product design.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Mr. Piyush Tandon",
    specialization: "Software Testing Expert",
    experience: "10+ Years",
    description:
      "Covers modern QA, automation frameworks, and quality engineering practices for enterprise projects.",
    image:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dr. Sneha Kulkarni",
    specialization: "Business Analytics Trainer",
    experience: "14+ Years",
    description:
      "Develops strategic analytics thinking with dashboards, storytelling, and insight-led decision frameworks.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04c-1.86 0-2.15 1.45-2.15 2.95v5.66H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14a2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.76 7.73L23.2 22h-6.22l-4.87-6.4L6.5 22H3.4l7.22-8.26L1 2h6.38l4.4 5.8L18.9 2zm-1.09 18h1.72L6.45 3.9H4.6L17.81 20z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5L4 8V6l8 5l8-5v2z"
      />
    </svg>
  );
}

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="section relative overflow-hidden bg-gradient-to-b from-white via-[#f6fbff] to-[#ebf3fb]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-16 h-60 w-60 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute -right-16 top-24 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid items-start gap-8 lg:grid-cols-[45%_55%] lg:gap-14"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="rounded-[30px] border border-slate-200/80 bg-white/90 p-6 shadow-card backdrop-blur-sm md:p-8"
          >
            <p className="mb-3 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
              Founder
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-academy-900 md:text-4xl">
              Mrs. Sarika
            </h2>
            <p className="mt-2 font-body text-base font-semibold text-teal-700">Founder &amp; CEO</p>

            <div className="mt-6 space-y-4">
              {founderBio.map((paragraph) => (
                <p key={paragraph} className="font-body text-[0.97rem] leading-7 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {founderAchievements.map((achievement) => (
                <div
                  key={achievement}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-academy-800"
                >
                  {achievement}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com"
                aria-label="Founder on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-academy-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com"
                aria-label="Founder on X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-academy-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600"
              >
                <XIcon />
              </a>
              <a
                href="mailto:founder@careerspring.in"
                aria-label="Email founder"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-academy-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600"
              >
                <MailIcon />
              </a>
            </div>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-[#0d9af2] to-[#0f9d83] px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Connect With Founder
            </a>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.65 }} className="relative self-start lg:pt-2">
            <div className="absolute -left-8 top-8 h-24 w-24 rounded-3xl bg-white/70 shadow-card" />
            <div className="absolute -bottom-8 right-8 h-28 w-28 rounded-full border border-white/70 bg-sky-100/60" />

            <div className="relative flex w-full items-start justify-center rounded-[36px] bg-gradient-to-br from-[#edf6ff] via-white to-[#e9f6f2] p-4 md:p-7">
              <div className="aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[30px] shadow-premium">
                <FallbackImage
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                  alt="Founder portrait"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-16"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="section-head mb-8">
            <p className="mb-3 inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              Founder Vision
            </p>
            <h2 className="font-display text-3xl font-semibold text-academy-900 md:text-4xl">
              Principles That Shape Our Learning Culture
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {founderVisionCards.map((card) => (
              <motion.article
                key={card.title}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-academy-800 text-sm font-bold text-white">
                  {card.icon}
                </span>
                <h3 className="font-display text-xl text-academy-900">{card.title}</h3>
                <p className="mt-3 font-body leading-7 text-slate-700">{card.body}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-16"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="section-head mb-10">
            <h2 className="font-display text-3xl font-semibold text-academy-900 md:text-4xl">
              Meet Our Expert Faculty
            </h2>
            <p className="mt-3 font-body text-base leading-7 text-slate-700">
              Our faculty brings deep industry experience across high-growth technology domains, combining practical mentorship with outcome-focused pedagogy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {faculty.map((member) => (
              <motion.article
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <FallbackImage
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg text-academy-900">{member.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-sky-700">{member.specialization}</p>
                    </div>
                    <a
                      href="https://www.linkedin.com"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 text-academy-800 transition hover:border-sky-300 hover:text-sky-600"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                  <p className="text-sm font-semibold text-teal-700">{member.experience} Experience</p>
                  <p className="font-body text-sm leading-6 text-slate-700">{member.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
