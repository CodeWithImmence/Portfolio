import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
//import heroLogo from "../assests/img/hero-bg.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "50%", // Adjust width as needed (e.g., 40%–60%)
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
            objectFit: "contain", // or "cover" based on visual preference
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
  );
};

export default Hero;
