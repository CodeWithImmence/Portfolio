import React from "react";

const Resumes = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Sumary</h3>

            <div className="resume-item pb-0">
              <h4>Vishal Rajai</h4>
              <p>
                <em>
                  Innovative and detail-oriented Software Developer & Web
                  Developer with a Master’s in Information Technology and 3+
                  years of experience in software development, system
                  integrations, and technical support. Proficient in C#, Java,
                  JavaScript, AngularJS, ReactJS, and SQL, with expertise in LMS
                  platforms (Moodle, Canvas, Salesforce, Anthology Student,
                  etc.). Passionate about building scalable, efficient, and
                  high-performance applications.
                </em>
              </p>
              <ul>
                <li>Bangalore,Karnataka, IN</li>
                {/*<li>(123) 456-7891</li>*/}
                <li>rajaivishal.official@gmail.com</li>
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
