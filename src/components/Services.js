import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

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
        <div className="row gx-4 gy-4">
          {" "}
          {/* ✅ Adds space between cards */}
          {/* Service Item 1 */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div
              className="service-item d-flex flex-column flex-grow-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-diagram-3"></i>
              </div>
              <h4 className="title">
                <Link to="/service-details" className="stretched-link">
                  Custom LMS Integrations
                </Link>
              </h4>
              <p className="description">
                Seamless integration services for platforms like Moodle, Canvas,
                Salesforce, and Anthology Student, ensuring smooth academic
                operations and data flow.
              </p>
            </div>
          </div>
          {/* Service Item 2 */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div
              className="service-item d-flex flex-column flex-grow-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-braces"></i>
              </div>
              <h4 className="title">
                <Link to="/service-details" className="stretched-link">
                  Web API & REST API Development
                </Link>
              </h4>
              <p className="description">
                Designing and developing secure, high-performance Web APIs and
                RESTful services to connect systems and enhance application
                functionality.
              </p>
            </div>
          </div>
          {/* Service Item 3 */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div
              className="service-item d-flex flex-column flex-grow-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-cpu"></i>
              </div>
              <h4 className="title">
                <Link to="/service-details" className="stretched-link">
                  Backend Development
                </Link>
              </h4>
              <p className="description">
                Robust and scalable backend solutions using C#, .NET Core, Java,
                and Spring Boot, tailored to meet the evolving needs of
                educational institutions.
              </p>
            </div>
          </div>
          {/* Service Item 4 */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div
              className="service-item d-flex flex-column flex-grow-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-tools"></i>
              </div>
              <h4 className="title">
                <Link to="/service-details" className="stretched-link">
                  Technical Support & Troubleshooting
                </Link>
              </h4>
              <p className="description">
                Hands-on experience in resolving complex issues, performance
                tuning, and providing production support for mission-critical
                applications.
              </p>
            </div>
          </div>
          {/* Service Item 5 */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div
              className="service-item d-flex flex-column flex-grow-1"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-display"></i>
              </div>
              <h4 className="title">
                <Link to="/service-details" className="stretched-link">
                  Frontend Web Applications
                </Link>
              </h4>
              <p className="description">
                Interactive, responsive web interfaces built with ReactJS,
                AngularJS, HTML5, and CSS3, aligned with user experience best
                practices.
              </p>
            </div>
          </div>
          {/* Service Item 6 */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div
              className="service-item d-flex flex-column flex-grow-1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-hdd-stack"></i>
              </div>
              <h4 className="title">
                <Link to="/service-details" className="stretched-link">
                  Database Management & Optimization
                </Link>
              </h4>
              <p className="description">
                Skilled in managing SQL Server, MySQL, and MongoDB, with a focus
                on query optimization, data integrity, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
