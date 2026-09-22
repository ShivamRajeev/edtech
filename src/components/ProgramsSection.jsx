 import { useState } from "react";
import { flagshipOutcomes, flagshipPlacement } from "../data/siteData";

export default function ProgramsSection({ onApplyNow }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const brochurePath = "/images/businessBrocher.jpeg";
  const customerBrochurePath = "/images/customerSupport.jpeg";
    const ManagementBrocher = "/images/management.jpg";

  const handleBrochureDownload = async (event, downloadPath, fileName) => {
    event.preventDefault();

    try {
      const response = await fetch(downloadPath);
      if (!response.ok) {
        throw new Error("Unable to fetch brochure");
      }

      const brochureBlob = await response.blob();
      const downloadUrl = URL.createObjectURL(brochureBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = downloadUrl;
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      URL.revokeObjectURL(downloadUrl);
    } catch {
      window.location.href = downloadPath;
    }
  };

  return (
    <section id="programs" className="section programs-section">
      <div className="programs-bg"></div>
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Programs</p>
          <h2>Career Training Programs Built for Job Readiness</h2>
          <p>Practical training designed to help graduates and early professionals build job-ready skills and prepare for career opportunities</p>
        </div>
    <article className="program-card flagship reveal">
          <div className="program-tag">Flagship Program</div>
          <div className="program-top">
            <h3>Management Trainee</h3>
            <h4>Certificates of Compeletion from CareerDekho</h4>
            <p className="batch-start-highlight">
              <strong>Batch Starts:</strong> 5th October 2026
            </p>
            <div className="program-meta">
              <span>
                <strong>Duration:</strong> 1 Month
              </span>
              <span>
                <strong>Mode:</strong> Classroom Training
              </span>
              {/* <span>
                <strong>Fee:</strong> Rs. 70,000
              </span> */}
            </div>
             <div className="program-meta">
             <span>
                <strong>Eligibility:</strong> Male/Female
              </span>
              <span>
                <strong>Age Limit:</strong> 32 years
              </span>
              <span>
                <strong>Qualification:</strong>Graduates
              </span>
             </div>
            {/* <p>
              <strong>Eligibility:</strong> Male &Female both can apply
            </p> */}
               <div className="program-meta">
             <span>
                <strong>CTC:</strong> 3 LPA
              </span>
              <span>
                <strong>ON Job Training (OJT):</strong> 2 Months
              </span>
              <span>
                <strong>Stipend:</strong> Rs. 10,000 per month (During OJT)
              </span>
             </div>
              <p>
              <strong>CTC:</strong>3 LPA
            </p>
              {/* <p>
              <strong>Age Limit:</strong>  28 years
            </p> */}
              {/* <p>
              <strong>Qualification:</strong>  Graduates
            </p> */}
              <p>
              <strong>Designation:</strong>Management Trainee (EducationCounsellor)      </p>
          </div>

          <div className="program-columns">
            <div>
              <h4>Key Learning Outcomes</h4>
              <ul>
                {flagshipOutcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {/* <h3 className="program-audience-heading">Who is this Program For?</h3>
              <ul className="check-list">
                {whoThisProgramFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul> */}
            </div>
            <div>
              <h4>Career & Placement Support</h4>
              <ul>
                {flagshipPlacement.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={onApplyNow}>
            Start Your Career
          </button>
          <a
            className="btn btn-outline program-brochure-link"
            href={ManagementBrocher}
            download="Management-banner.jpeg"
            onClick={(event) =>
              handleBrochureDownload(event, ManagementBrocher, "Management-banner.jpeg")
            }
          >
            Download Brochure
          </a>
        </article>
        <article className="program-card flagship reveal">
          <div className="program-tag">Flagship Program</div>
          <div className="program-top">
            <h3>Banking & Financial Services Sales</h3>
            <h4>Certificates of Compeletion from CareerDekho</h4>
            <div className="program-meta">
              <span>
                <strong>Duration:</strong> 21 Days
              </span>
              <span>
                <strong>Mode:</strong> Live Online
              </span>
              <span>
                <strong>Fee:</strong> Rs. 50,000
              </span>
            </div>
             <div className="program-meta">
             <span>
                <strong>Eligibility:</strong> Male/Female
              </span>
              <span>
                <strong>Age Limit:</strong> 28 years
              </span>
              <span>
                <strong>Qualification:</strong>Graduates
              </span>
             </div>
            {/* <p>
              <strong>Eligibility:</strong> Male &Female both can apply
            </p> */}
              <p>
              <strong>CTC:</strong> 2.5 LPA to 3 LPA 
            </p>
              {/* <p>
              <strong>Age Limit:</strong>  28 years
            </p> */}
              {/* <p>
              <strong>Qualification:</strong>  Graduates
            </p> */}
              <p>
              <strong>Designation:</strong> Sales Officer/ Sales Executive            </p>
          </div>

          <div className="program-columns">
            <div>
              <h4>Key Learning Outcomes</h4>
              <ul>
                {flagshipOutcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {/* <h3 className="program-audience-heading">Who is this Program For?</h3>
              <ul className="check-list">
                {whoThisProgramFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul> */}
            </div>
            <div>
              <h4>Career & Placement Support</h4>
              <ul>
                {flagshipPlacement.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={onApplyNow}>
            Start Your Career
          </button>
          <a
            className="btn btn-outline program-brochure-link"
            href={brochurePath}
            download="business-brochure.jpeg"
            onClick={(event) => handleBrochureDownload(event, brochurePath, "business-brochure.jpeg")}
          >
            Download Brochure
          </a>
        </article>
         <article className="program-card flagship reveal">
          <div className="program-tag">Flagship Program</div>
          <div className="program-top">
            <h3>CustomerSupport</h3>
            <h4>Certificates of Compeletion from CareerDekho</h4>
            <div className="program-meta">
              <span>
                <strong>Duration:</strong> 21 Days
              </span>
              <span>
                <strong>Mode:</strong> Live Online
              </span>
              <span>
                <strong>Fee:</strong> Rs. 70,000
              </span>
            </div>
             <div className="program-meta">
             <span>
                <strong>Eligibility:</strong> Male/Female
              </span>
              <span>
                <strong>Age Limit:</strong> 28 years
              </span>
              <span>
                <strong>Qualification:</strong>Graduates
              </span>
             </div>
            {/* <p>
              <strong>Eligibility:</strong> Male &Female both can apply
            </p> */}
              <p>
              <strong>CTC:</strong> 2.5 LPA to 3.5 LPA
            </p>
              {/* <p>
              <strong>Age Limit:</strong>  28 years
            </p> */}
              {/* <p>
              <strong>Qualification:</strong>  Graduates
            </p> */}
              <p>
              <strong>Designation:</strong> CustomerSupport Executive/ Support Coordinator          </p>
          </div>

          <div className="program-columns">
            <div>
              <h4>Key Learning Outcomes</h4>
              <ul>
                {flagshipOutcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {/* <h3 className="program-audience-heading">Who is this Program For?</h3>
              <ul className="check-list">
                {whoThisProgramFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul> */}
            </div>
            <div>
              <h4>Career & Placement Support</h4>
              <ul>
                {flagshipPlacement.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={onApplyNow}>
            Start Your Career
          </button>
          <a
            className="btn btn-outline program-brochure-link"
            href={customerBrochurePath}
            download="customer-support-brochure.jpeg"
            onClick={(event) =>
              handleBrochureDownload(event, customerBrochurePath, "customer-support-brochure.jpeg")
            }
          >
            Download Brochure
          </a>
        </article>
        

        {/* <div className="program-grid">
          {futurePrograms.map((program, index) => (
            <InteractiveCard
              key={program.title}
              className="program-card reveal"
              isActive={activeIndex === index}
              onActive={() => setActiveIndex(index)}
            >
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <button type="button" className="text-link" onClick={onApplyNow}>
                Enquire Now
              </button>
            </InteractiveCard>
          ))}
        </div> */}
      </div>
    </section>
  );
}
