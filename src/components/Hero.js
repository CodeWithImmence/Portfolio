import React, { useEffect, useRef } from "react";
import "./Hero.css";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SEO from "./SEO";
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
    <>
      {/* 🧠 SEO Meta Tags */}
      <SEO pageTitle="Technical Consultant II" />

      {/* 🌟 Hero Section */}
      <section id="hero" className="hero section dark-background">
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "50%",
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <DotLottieReact
            src="https://lottie.host/5cd66bf3-da75-469b-9cec-e378533b9eb1/ZDgm5APTil.lottie"
            autoplay
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              opacity: 0.4,
            }}
          />
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h2>Rajai Vishal</h2>
          <p>
            I'm <span ref={typedRef} className="typed"></span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
