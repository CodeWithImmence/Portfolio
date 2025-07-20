// Skills.tsx or Skills.jsx

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

// Your skills data
const skillsCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "Angular", level: 90 },
      { name: "React", level: 70 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "C#", level: 95 },
      { name: ".NET Core", level: 95 },
      { name: "SQL Server", level: 90 },
      { name: "Web API", level: 90 },
      { name: "Azure Functions", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Azure DevOps", level: 85 },
      { name: "Git", level: 85 },
      { name: "Postman", level: 80 },
      { name: "Swagger", level: 85 },
    ],
  },
];

const Skills = () => {
  const [progress, setProgress] = useState(
    skillsCategories.map((category) => category.skills.map(() => 0))
  );

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (inView) {
      setProgress(
        skillsCategories.map((category) =>
          category.skills.map((skill) => skill.level)
        )
      );
    }
  }, [inView]);

  return (
    <section id="skills" className="skills section light-background" ref={ref}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          Turning complex challenges into clean, functional solutions through a
          mix of code, creativity, and problem-solving finesse.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {skillsCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category">
            <h3 className="category-title">{category.title}</h3>
            <div className="row skills-content skills-animation">
              {category.skills.map((skill, skillIndex) => (
                <div className="col-lg-6" key={skillIndex}>
                  <div className="progress">
                    <span className="skill">
                      <span>{skill.name}</span>{" "}
                      <i className="val">
                        {progress[categoryIndex][skillIndex]}%
                      </i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${progress[categoryIndex][skillIndex]}%`,
                          transition: "width 1.5s ease-in-out",
                        }}
                        aria-valuenow={progress[categoryIndex][skillIndex]}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
