import React from "react";
import "./About.css";
import myProfileLogo from "../assests/img/my-profile-img.png";

const About = () => {
  return (
    <section id="about" className="about section">
      {/* === About Intro Section === */}
      <div className="container section-title" data-aos="fade-up">
        <h2>👨‍💻 About Me</h2>

        <p className="intro-text">
          Hi, I’m <strong>Vishal</strong> — a Technical Consultant II at
          Anthology with a Master’s degree in Information Technology and over
          three years of industry experience in designing, integrating, and
          supporting enterprise-scale educational technology solutions. My core
          expertise lies in full-stack development with a strong command of
          technologies including <strong>C#, Java, Angular, and ReactJS</strong>
          . Throughout my career, I’ve played a critical role in bridging
          support and engineering teams — ensuring seamless integration,
          maintenance, and optimization of complex systems like Moodle, Canvas,
          Salesforce, Anthology Student, BankMobile, and CashNet.
        </p>

        <p className="intro-text">
          My experience includes managing high-impact incidents, driving
          root-cause analysis, and implementing long-term fixes that enhance
          platform reliability and performance. As I transition further into
          development-focused roles, I am deeply invested in building robust,
          scalable, and user-centric applications. I bring a unique blend of
          backend system insight and frontend design sensibility, enabling me to
          develop solutions that are not only technically sound but also aligned
          with real-world user needs. Driven by curiosity, collaboration, and a
          commitment to quality, I continuously strive to evolve as a developer
          and contribute to impactful software that delivers measurable value.
        </p>
      </div>

      {/* === About Details Section === */}
      <div
        className="container about-wrapper"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row gy-4 align-items-center justify-content-center">
          {/* === Profile Image Card === */}
          <div className="col-lg-4">
            <div className="about-card about-photo-card">
              <img
                src={myProfileLogo}
                className="img-fluid"
                alt="Vishal profile"
              />
            </div>
          </div>

          {/* === About Info Card === */}
          <div className="col-lg-8 content">
            <div className="about-card about-info-card">
              <h3>Software Developer & Web Developer</h3>
              <p className="intro-text">
                Passionate about building innovative and scalable software
                solutions, I specialize in C#, Java, AngularJS, and ReactJS.
                With over three years of experience in software development,
                system integration, and web technologies, I have worked
                extensively with Learning Management Systems (LMS) and
                enterprise platforms such as Moodle, Canvas, Salesforce, PCI
                Express, Finance CashNet, BankMobile, and Anthology Student. I
                thrive on problem-solving, optimizing system performance, and
                delivering seamless user experiences.
              </p>

              <ul className="about-details">
                <li>
                  <i className="bi bi-geo-alt"></i>
                  <strong> City:</strong> <span>Bangalore, Karnataka</span>
                </li>

                <li>
                  <i className="bi bi-globe"></i>
                  <strong> Website:</strong>{" "}
                  <a
                    href="https://www.codewithimmence.in"
                    className="about-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.codewithimmence.in
                  </a>
                </li>

                <li>
                  <i className="bi bi-mortarboard"></i>
                  <strong> Degree:</strong>{" "}
                  <span>Master of Computer Applications</span>
                </li>

                <li>
                  <i className="bi bi-envelope"></i>
                  <strong> Email:</strong>{" "}
                  <a
                    href="mailto:rajaivishal.official@gmail.com"
                    className="about-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    rajaivishal.official@gmail.com
                  </a>
                </li>
              </ul>

              <p className="about-desc">
                Dedicated to continuous learning and growth, I am currently
                focusing on full-time development, working on cutting-edge web
                applications, backend services, and system integrations that
                drive efficiency and innovation in the EdTech space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
