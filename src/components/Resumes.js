import React from "react";

const Resumes = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Innovative and solutions-driven Software Developer with a strong track
          record of delivering high-impact applications in the EdTech domain.
          Known for a meticulous approach to software quality, cross-functional
          collaboration, and proactive problem-solving. Experienced in turning
          complex business requirements into robust, scalable solutions that
          enhance operational efficiency and user experience. Committed to
          continuous learning and delivering measurable value through clean
          architecture, performance tuning, and secure coding practices.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Automation Alerting</h3>

            <div className="resume-item pb-0">
              <p>
                <em>
                  Scheduled Job Monitoring & Alerting Systems. Automated SQL
                  Server Agent Job Automation. Modular & Configurable .NET
                  Service Architecture. Angular-based Admin Dashboards. Service
                  Health & Queue Monitoring.Secure Email Integration (SendGrid,
                  Graph API)
                </em>
              </p>
              <ul>
                {/*<li>Bangalore,Karnataka, IN</li>
                <li>(123) 456-7891</li>
                <li>rajaivishal.official@gmail.com</li>*/}
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Computer applications</h4>
              <h5>2019 - 2021</h5>
              <p>
                <em>Brindavan College, Karnataka, IN</em>
              </p>
              {/*<p>
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend
              </p>*/}
            </div>

            <div className="resume-item">
              <h4>Bachelor of Computer applications</h4>
              <h5>2016 - 2019</h5>
              <p>
                <em>
                  Shree Swaminarayan College of Computer Science, Gujarat, IN
                </em>
              </p>
              {/*<p>
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                reiciendis et quis Eius vel ratione eius unde vitae rerum
                voluptates asperiores voluptatem Earum molestiae consequatur
                neque etlon sader mart dila
              </p>*/}
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Associate Software Developer - L1 (B)</h4>
              <h5>2021 - Present</h5>
              <p>
                <em>Bangalore, Karnataka, IN </em>
              </p>
              <ul>
                <li>
                  Lead in the design, development, and implementation of the
                  graphic, layout, and production communication materials
                </li>
                <li>
                  Developed and supported integrations between Anthology
                  Student, Moodle, Canvas, and Salesforce to ensure smooth LMS
                  operations.{" "}
                </li>
                <li>
                  Troubleshot complex issues related to API integrations,
                  authentication, and system performance.
                </li>
                <li>
                  Worked on C#, .NET, Java, and SQL-based applications,
                  enhancing efficiency and scalability.
                </li>
                <li>
                  Provided technical support, debugging, and troubleshooting for
                  enterprise clients.
                </li>
                <li>
                  Assisted in backend system enhancements and frontend
                  improvements using ReactJS, AngularJS, and JavaScript.
                </li>
                <li>
                  Managed API integrations, database optimizations, and issue
                  resolution for software solutions.
                </li>
                <li>
                  Troubleshot complex issues related to API integrations
                  including Web API and REST API, authentication, and system
                  performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resumes;
