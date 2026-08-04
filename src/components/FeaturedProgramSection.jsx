import FallbackImage from "../shared/FallbackImage";

export default function FeaturedProgramSection() {
  return (
    <section className="section featured-program-section">
      <div className="container featured-wrap">
        <div className="featured-image reveal">
          <FallbackImage
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
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
          <a className="btn btn-primary" href="#contact">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
