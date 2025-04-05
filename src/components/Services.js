import React from "react";

const Services = () => {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Delivering reliable, efficient, and scalable technology solutions in
          the EdTech space.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-diagram-3"></i>
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Custom LMS Integrations
                </a>
              </h4>
              <p className="description">
                Seamless integration services for platforms like Moodle, Canvas,
                Salesforce, and Anthology Student, ensuring smooth academic
                operations and data flow.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-braces"></i>
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Web API & REST API Development
                </a>
              </h4>
              <p className="description">
                Designing and developing secure, high-performance Web APIs and
                RESTful services to connect systems and enhance application
                functionality.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-cpu"></i>
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Backend Development
                </a>
              </h4>
              <p className="description">
                Robust and scalable backend solutions using C#, .NET Core, Java,
                and Spring Boot, tailored to meet the evolving needs of
                educational institutions.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-tools"></i>
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Technical Support & Troubleshooting
                </a>
              </h4>
              <p className="description">
                Hands-on experience in resolving complex issues, performance
                tuning, and providing production support for mission-critical
                applications.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-display"></i>
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Frontend Web Applications
                </a>
              </h4>
              <p className="description">
                Interactive, responsive web interfaces built with ReactJS,
                AngularJS, HTML5, and CSS3, aligned with user experience best
                practices.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-hdd-stack"></i>
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Database Management & Optimization
                </a>
              </h4>
              <p className="description">
                Skilled in managing SQL Server, MySQL, and MongoDB, with a focus
                on query optimization, data integrity, and performance.
              </p>
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
  );
};
export default Services;
