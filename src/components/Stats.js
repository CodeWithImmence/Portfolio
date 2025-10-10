import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Stats.css";

const statsData = [
  {
    icon: "bi-emoji-smile",
    value: 100,
    label: "Happy Clients",
    subLabel:
      "Ensured seamless LMS integrations and resolved critical issues for clients like PS Care, improving system performance and user satisfaction.",
  },
  {
    icon: "bi-journal-richtext",
    value: 521,
    label: "Projects",
    subLabel:
      "Worked on Moodle, Canvas, Salesforce, PCI Express, Finance CashNet, BankMobile, and Anthology Student integrations, enhancing automation and efficiency.",
  },
  {
    icon: "bi-headset",
    value: 1453,
    label: "Hours Of Support",
    subLabel:
      "Provided technical support, troubleshooting, and escalations, ensuring smooth platform operations and minimizing downtime.",
  },
  {
    icon: "bi-people",
    value: 200,
    label: "Hard Workers",
    subLabel:
      "Dedicated to problem-solving, development, and continuous learning, bridging the gap between support and software engineering.",
  },
];

const Stats = () => {
  const [inView, setInView] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // ✅ Store ref in local variable to avoid ESLint warning
    const currentRef = statsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="stats" className="stats section">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
        ref={statsRef}
      >
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stats-card" key={index}>
              <div className="stats-icon">
                <i className={`bi ${stat.icon}`}></i>
              </div>
              <div className="stats-content">
                <h3>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      suffix="+"
                    />
                  ) : (
                    "0+"
                  )}
                </h3>
                <h5>{stat.label}</h5>
                <p>{stat.subLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
