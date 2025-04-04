import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsCategories = [
  {
    title: "Programming Languages & Frameworks",
    skills: [
      { name: "C#", level: 95 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "C, C++", level: 80 },
      { name: "ASP.NET, .NET Core", level: 85 },
      { name: "Spring Boot, Hibernate", level: 75 },
      { name: "ReactJS, AngularJS, VueJS", level: 80 },
      { name: "PHP, HTML5, CSS", level: 90 },
    ],
  },
  {
    title: "Databases & Cloud Technologies",
    skills: [
      { name: "SQL Server 2018", level: 85 },
      { name: "MySQL, MongoDB", level: 80 },
      { name: "Entity Framework, Mongoose", level: 75 },
      { name: "Cloud Development, Microservices", level: 70 },
    ],
  },
  {
    title: "Development & Integration",
    skills: [
      { name: "Web API, REST API, AJAX", level: 85 },
      { name: "Moodle, Canvas, Salesforce Integrations", level: 80 },
      { name: "OOP, Unit Testing, Debugging", level: 90 },
    ],
  },
];

const Skills = () => {
  const [progress, setProgress] = useState(
    skillsCategories.map((category) => category.skills.map(() => 0))
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Ensure animation triggers correctly
    const timer = setTimeout(() => {
      setProgress(
        skillsCategories.map((category) =>
          category.skills.map((skill) => skill.level)
        )
      );
    }, 500);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Enhancing efficiency through technology and innovation</p>
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
                          transition: "width 1.5s ease-in-out", // Smooth transition
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
