import React from "react";
import heroLogo from "../assests/img/hero-bg.jpg";
const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroLogo} alt="" data-aos="fade-in" class="" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Alex Smith</h2>
        <p>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          >
            Designer
          </span>
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
