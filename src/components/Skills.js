import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

const skillsCategories = [
  {
    title: "Frontend Technologies",
    color: "#00b4db",
    skills: [
      { name: "Angular", level: 90 },
      { name: "React", level: 80 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    title: "Backend Technologies",
    color: "#8a2be2",
    skills: [
      { name: "C#", level: 95 },
      { name: "Java", level: 95 },
      { name: ".NET Core", level: 90 },
      { name: "SQL Server", level: 90 },
      { name: "Web API", level: 88 },
      { name: "Azure Functions", level: 75 },
    ],
  },
  {
    title: "Tools & Cloud",
    color: "#00c97c",
    skills: [
      { name: "Azure DevOps", level: 85 },
      { name: "Azure Cloud", level: 85 },
      { name: "AWS Cloud", level: 85 },
      { name: "Git", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Swagger", level: 85 },
    ],
  },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ✅ Animated percentage counter logic
  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // total animation time (2s)
      const steps = 60; // number of frames
      const intervalTime = duration / steps;

      const interval = setInterval(() => {
        start += 1; // increase each step
        setProgress((prev) =>
          skillsCategories.map((cat, catIndex) =>
            cat.skills.map((skill) => {
              const target = skill.level;
              return Math.min(Math.floor((start / steps) * target), target);
            })
          )
        );

        if (start >= steps) clearInterval(interval);
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container section-title" data-aos="fade-up">
        <h2>⚙️ Skills</h2>
        <p>
          A blend of technology and creativity — crafting robust, scalable, and
          visually elegant solutions.
        </p>
      </div>

      <div
        className="container skills-wrapper"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row gy-4">
          {skillsCategories.map((category, catIndex) => (
            <div key={catIndex} className="col-lg-4 col-md-6">
              <div
                className="skills-card"
                style={{ "--accent-color": category.color }}
              >
                <h3>{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div
                        className="circle-progress"
                        style={{
                          background: `conic-gradient(var(--accent-color) ${
                            progress[catIndex]?.[skillIndex] || 0
                          }%, rgba(200,200,200,0.2) ${
                            progress[catIndex]?.[skillIndex] || 0
                          }%)`,
                        }}
                      >
                        <div className="circle-inner">
                          <span className="skill-percent">
                            {progress[catIndex]?.[skillIndex] || 0}%
                          </span>
                        </div>
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
