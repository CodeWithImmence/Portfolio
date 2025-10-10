import React from "react";
import "./Resume.css";

const Resumes = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="emoji-title">📄 Resume</h2>
        <p className="intro-text">
          💡 Innovative and solutions-driven Software Developer with a strong
          track record of delivering high-impact applications in the EdTech
          domain. Known for a meticulous approach to software quality,
          cross-functional collaboration, and proactive problem-solving.
          Experienced in turning complex business requirements into robust,
          scalable solutions that enhance operational efficiency and user
          experience. Committed to continuous learning and delivering measurable
          value through clean architecture, performance tuning, and secure
          coding practices.
        </p>
      </div>

      <div className="container">
        <div className="row d-flex align-items-start">
          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">🤖 Chatbot Automation</h3>
            <div className="resume-item pb-0">
              <p>
                <em>
                  Designed intelligent chatbot and portfolio automation using
                  n8n, OpenAI, React, and AWS services. Built scalable
                  workflows, integrated APIs, and automated deployment pipelines
                  to improve user interaction, operational efficiency, and
                  system reliability.
                </em>
              </p>
              <ul className="list-unstyled">
                <li>
                  🧠 Built custom chatbot using n8n integrated with OpenAI API.
                </li>
                <li>
                  🌐 Deployed backend using AWS Lambda & EC2 with React UI.
                </li>
                <li>
                  ♻️ Designed reusable nodes to manage AI conversation flow.
                </li>
                <li>
                  🛡️ Implemented error handling and rate-limit protection.
                </li>
                <li>
                  ⚡ Automated portfolio builds and React deployments via n8n.
                </li>
                <li>
                  ☁️ Integrated AWS S3, CloudFront, and Route 53 for hosting.
                </li>
                <li>🔁 Set up CI/CD pipelines using GitHub Actions and AWS.</li>
                <li>📧 Automated notifications and reports with SendGrid.</li>
              </ul>
            </div>

            <h3 className="resume-title">⚙️ Automation Alerting</h3>
            <div className="resume-item pb-0">
              <p>
                <em>
                  Scheduled Job Monitoring & Alerting Systems. Automated SQL
                  Server Agent Job Automation. Modular & Configurable .NET
                  Service Architecture. Angular-based Admin Dashboards. Service
                  Health & Queue Monitoring. Secure Email Integration (SendGrid,
                  Graph API).
                </em>
              </p>
            </div>

            <h3 className="resume-title">🎓 Education</h3>
            <div className="resume-item">
              <h4>Master of Computer Applications</h4>
              <h5>2019 - 2021</h5>
              <p>
                <em>🏛️ Brindavan College, Karnataka, IN</em>
              </p>
            </div>

            <div className="resume-item">
              <h4>Bachelor of Computer Applications</h4>
              <h5>2016 - 2019</h5>
              <p>
                <em>
                  🏫 Shree Swaminarayan College of Computer Science, Gujarat, IN
                </em>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">💼 Professional Experience</h3>

            {/* Combined Anthology Experience */}
            <div className="resume-item">
              <h4>Anthology Inc.</h4>
              <h5>2019 - Present</h5>
              <p>
                <em>🏢 Bangalore, Karnataka, IN</em>
              </p>

              {/* L2 Role */}
              <div className="sub-role">
                <h5>🚀 Technical Consultant II – L2 (B)</h5>
                <p className="role-period">2021 - Present</p>
                <ul>
                  <li>
                    🧩 Led integrations between Anthology Student, Moodle,
                    Canvas, and Salesforce to enhance interoperability.
                  </li>
                  <li>
                    ⚙️ Designed and deployed automation workflows using .NET
                    Core, Azure Functions, and SendGrid for scalable solutions.
                  </li>
                  <li>
                    ☁️ Supported cloud migration initiatives and modernized
                    on-prem services to Azure infrastructure.
                  </li>
                  <li>
                    📊 Conducted system benchmarking, performance tuning, and
                    proactive monitoring implementation.
                  </li>
                  <li>
                    👨‍🏫 Mentored junior developers and optimized CI/CD pipelines
                    to improve deployment efficiency.
                  </li>
                  <li>
                    🧾 Authored detailed deployment and workflow documentation
                    for internal knowledge sharing.
                  </li>
                </ul>
              </div>

              {/* Promotion Arrow Divider */}
              <div className="promotion-divider">
                <span className="arrow">⬆️</span>
                <span className="promotion-text">Promoted from L1 → L2</span>
              </div>

              {/* L1 Role */}
              <div className="sub-role">
                <h5>💻 Associate Software Developer – L1 (B)</h5>
                <p className="role-period">2021 - Present</p>
                <ul>
                  <li>
                    🧠 Developed LMS integrations between Anthology Student and
                    Canvas to streamline education workflows.
                  </li>
                  <li>
                    🔍 Troubleshot API performance issues and implemented
                    optimization strategies.
                  </li>
                  <li>
                    🧰 Worked on C#, .NET, Java, and SQL applications to enhance
                    backend scalability.
                  </li>
                  <li>
                    🎨 Improved frontend modules using ReactJS and AngularJS.
                  </li>
                  <li>
                    🗄️ Managed API design, database optimization, and monitoring
                    systems for reliability.
                  </li>
                  <li>
                    📚 Created internal documentation and trained users on
                    deployments and workflows.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resumes;
