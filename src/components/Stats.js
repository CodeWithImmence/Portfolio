import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
//import "./Stats.css";

const statsData = [
  {
    icon: "bi-emoji-smile",
    value: 100,
    label: "Happy Clients - ",
    subLabel:
      "Ensured seamless LMS integrations and resolved critical issues for clients like PS Care, improving system performance and user satisfaction.",
  },
  {
    icon: "bi-journal-richtext",
    value: 521,
    label: "Projects - ",
    subLabel:
      "Worked on Moodle, Canvas, Salesforce, PCI Express, Finance CashNet, BankMobile, and Anthology Student integrations, enhancing automation and efficiency.",
  },
  {
    icon: "bi-headset",
    value: 1453,
    label: "Hours Of Support - ",
    subLabel:
      "Provided technical support, troubleshooting, and escalations, ensuring smooth platform operations and minimizing downtime.",
  },
  {
    icon: "bi-people",
    value: 200,
    label: "Hard Workers - ",
    subLabel:
      "Dedicated to problem-solving, development, and continuous learning, bridging the gap between support and software engineering.",
  },
];

const Stats = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {statsData.map((stat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stats-item">
                <i className={`bi ${stat.icon}`}></i>
                <span className="purecounter">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix="+"
                  />
                </span>
                <p>
                  <strong>{stat.label}</strong> <span>{stat.subLabel}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
