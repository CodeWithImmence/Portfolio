import React from "react";
import myProfileLogo from "../assests/img/my-profile-img.png";
const About = () => {
  const birthYear = 1998;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear; // Dynamically calculate age
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Hi, I’m Vishal — an Associate Software Developer at Anthology with a
          Master’s degree in Information Technology and over three years of
          industry experience in designing, integrating, and supporting
          enterprise-scale educational technology solutions. My core expertise
          lies in full-stack development with a strong command of technologies
          including C#, Java, AngularJS, and ReactJS. Throughout my career, I’ve
          played a critical role in bridging support and engineering teams —
          ensuring seamless integration, maintenance, and optimization of
          complex systems like Moodle, Canvas, Salesforce, Anthology Student,
          BankMobile, and CashNet. My experience includes managing high-impact
          incidents, driving root-cause analysis, and implementing long-term
          fixes that enhance platform reliability and performance. As I
          transition further into development-focused roles, I am deeply
          invested in building robust, scalable, and user-centric applications.
          I bring a unique blend of backend system insight and frontend design
          sensibility, enabling me to develop solutions that are not only
          technically sound but also aligned with real-world user needs. Driven
          by curiosity, collaboration, and a commitment to quality, I
          continuously strive to evolve as a developer and contribute to
          impactful software that delivers measurable value.
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={myProfileLogo} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>Software Developer &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
              Passionate about building innovative and scalable software
              solutions, I specialize in C#, Java, AngularJS, and ReactJS. With
              over three years of experience in software development, system
              integration, and web technologies, I have worked extensively with
              Learning Management Systems (LMS) and enterprise platforms such as
              Moodle, Canvas, Salesforce, PCI Express, Finance CashNet,
              BankMobile, and Anthology Student. I thrive on problem-solving,
              optimizing system performance, and delivering seamless user
              experiences.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>27 Apr 1998</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong>{" "}
                    <span>www.codewithimmence.in</span>
                  </li>
                  {/*<li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>*/}
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Bangalore, Karnataka</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>{age}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Master</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong>{" "}
                    <span>rajaivishal.official@gmail.com</span>
                  </li>
                  {/*<li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>*/}
                </ul>
              </div>
            </div>
            <p className="py-3">
              Dedicated to continuous learning and growth, I am currently
              focusing on full-time development, working on cutting-edge web
              applications, backend services, and system integrations that drive
              efficiency and innovation in the edtech space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
