import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PGDM Finance</h4>
                <h5>Dr. D. Y. Patil B-School</h5>
              </div>
              <h4>NOW</h4>
            </div>
            <p>
              Currently pursuing a PGDM in Finance (Batch of 2027). Serving as the Club Editor 
              on the Board of Directors for the Rotaract Club and actively participating in 
              the Finance and Music Clubs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Accounts Executive</h4>
                <h5>Tax Consultancy · Anuppur </h5>
              </div>
              <h4>2023</h4>
            </div>
            <p>
              Jun 2023 – Aug 2023. Processed 100+ daily journal entries and invoices using Tally ERP. 
              Performed bank reconciliations for 5 accounts, assisted in GST filing for 10+ clients, 
              and maintained 10 ledgers with zero audit issues.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Com Finance</h4>
                <h5>IIC Indore</h5>
              </div>
              <h4>2022–25</h4>
            </div>
            <p>
              Completed Bachelor of Commerce specializing in Finance with a score of 75%. 
              Developed foundational technical skills in MS Excel, SQL, and basic Power BI 
              alongside professional certifications in NISM and Business Analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Schooling</h4>
                <h5>D.A.V Burhar Public School</h5>
              </div>
              <h4>2019–21</h4>
            </div>
            <p>
              Achieved 80% in XII (Commerce) in 2021 and 70% in X in 2019. 
              Excelled in sports as a Gold Medallist in Inter-School Volleyball and 
              represented the district team in Kabaddi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;