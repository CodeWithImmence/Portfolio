import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/img/my-profile-img.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Header = () => {
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>
      <div className="profile-img">
        <img src={logo} alt="" className="img-fluid rounded-circle" />
      </div>
      <Link
        to="/"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">Rajai Vishal</h1>
      </Link>

      <div className="social-links text-center">
        <a href="rajaivishal.official@gmail.com" className="Gmail">
          <DotLottieReact
            src="https://lottie.host/ea26d1b0-5e8c-4ba3-b365-1c4686f1dd76/FGsHa6uUoY.lottie"
            autoplay
            loop
          />
        </a>
        <a href="https://github.com/CodeWithImmence" className="facebook">
          <DotLottieReact
            src="https://lottie.host/026202ab-4b08-4dc9-969a-2c6e6f032033/bZdzSghtBV.lottie"
            autoplay
            loop
          />
        </a>
        <a
          href="https://www.instagram.com/rajaivishalofficial/"
          className="instagram"
        >
          <DotLottieReact
            src="https://lottie.host/18cda1fe-918b-42a5-9e62-cb07bc01226b/3qMpdkRX3X.lottie"
            autoplay
            loop
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vishalrajai41/"
          className="linkedin"
        >
          <DotLottieReact
            src="https://lottie.host/17e45bf3-f454-466f-b635-f195b973d684/ANguwq1pLy.lottie"
            autoplay
            loop
          />
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="#hero" className="active">
              <i className="bi bi-house navicon"></i>Home
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
            <a href="#resume">
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="bi bi-images navicon"></i> Portfolio
            </a>
          </li>
          <li>
            <a href="#services">
              <i className="bi bi-hdd-stack navicon"></i> Services
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
