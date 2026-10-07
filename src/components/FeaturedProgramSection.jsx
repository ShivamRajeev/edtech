import FallbackImage from "../shared/FallbackImage";

export default function FeaturedProgramSection({ onApplyNow }) {
  return (
    <section className="section featured-program-section">
      <div className="container featured-wrap">
        <div className="featured-image reveal">
          <FallbackImage
            src="/images/featured_image.png"
            alt="Career advisor mentoring students for interview preparation"
          />
        </div>
        <div className="featured-content reveal">
          <p className="eyebrow">Featured Program</p>
          <h2>Certified Banking Sales Career Accelerator Program</h2>
          <p>
            A high-impact program built for aspirants targeting BFSI, sales, customer-facing, and corporate
            entry-level roles. This includes banking sales training, communication building, and job-oriented
            courses for freshers.
          </p>
          <ul>
            <li>Duration: 21 Days</li>
            <li>Mode: Classroom / Live Online</li>
            <li>Fee: Rs. 50,000</li>
          </ul>
          <button type="button" className="btn btn-primary" onClick={onApplyNow}>
            Start Your Career
          </button>
        </div>
      </div>
    </section>
  );
}
