import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import heroLogo from "../assests/img/hero-bg.png";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const typed = new Typed(typedRef.current, {
      strings: ["Designer", "Developer", "Freelancer", "YouTuber"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroLogo} alt="Hero Background" data-aos="fade-in" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Rajai Vishal</h2>
        <p>
          I'm <span ref={typedRef} className="typed"></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
