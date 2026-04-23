import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/tanay-soni-59b990375"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Tanay Soni
              </a>
            </p>
            <p>
              <a href="mailto:tanay.227pgdm25@dypdpu.edu.in">
                tanay.227pgdm25@dypdpu.edu.in
              </a>
            </p>
            <h4>Education</h4>
            <p>
              PGDM Finance, Dr. D. Y. Patil B-School, Pune — 2025–2027
            </p>
            <p>
              B. Com Finance, IIC Indore — 2022–2025
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <p>
              Wakad, Pune
            </p>
            <a
              href="https://www.linkedin.com/in/tanay-soni-59b990375"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            {/* <a
              href="https://github.com/tanay-soni"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a> */}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Tanay Soni</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;