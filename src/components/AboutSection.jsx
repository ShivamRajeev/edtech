import { coreValues } from "../data/siteData";

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-content reveal">
          <p className="eyebrow">Who We Are</p>
          <h2>Building Job-Ready Careers for Graduates and Early Professionals </h2>
          <p>
           CareerDekho is a career training and placement support company focused on helping graduates, final year students and early professionals become job-ready. Through practical training, career guidance, profile building, interview preparation and employer opportunities, we help learners move confidently from education to employment.
          </p>

          <div className="mission-vision">
                 <article>
              <h3>Our Approach</h3>
              <p>
             <b> Learn --> Prepare --> Get Opportunity --> Start your Career</b></p>
             <p> At CareerDekho, we don't simply send resumes. We prepare learners for the complete journey from Career planning to Joining.
              </p>
            </article>
            <article>
              <h3>Vision</h3>
              <p>
                To make India's talent job-ready, future-ready and globally employable.
              </p>
            </article>
            <article>
              <h3>Mission</h3>
              <p>
               To bridge the gap between education and employment by equipping graduates and early professionals with practical skills, career guidance, confidence and access to meaningful career opportunities.
              </p>
            </article>
              <article>
              <h3>Our Purpose</h3>
              <p>
               To Turn potential into employability.
               India has millions of ambitious graduates and young professionals with the potential to build successful careers. CareerDekho exists to help bridge the gap between what learners know and what employers need - building the skills, confidence and career readiness needed to move from learning to earning.
              </p>
            </article>
          </div>
        </div>

        <div className="values-card reveal">
          <h3>Core Values</h3>
          <ul>
            {coreValues.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
