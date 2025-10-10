import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assests/img/my-profile-img.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link as ScrollLink } from "react-scroll";
const Header = () => {
  useEffect(() => {
    const headerToggleBtn = document.querySelector(".header-toggle");
    const header = document.querySelector("#header");

    const toggleHeader = () => {
      header.classList.toggle("header-show");
      headerToggleBtn.classList.toggle("bi-list");
      headerToggleBtn.classList.toggle("bi-x");
    };

    const handleNavClick = () => {
      if (header.classList.contains("header-show")) {
        toggleHeader();
      }
    };

    const handleDropdownToggle = (e) => {
      e.preventDefault();
      const parent = e.currentTarget.parentNode;
      parent.classList.toggle("active");

      const dropdown = parent.nextElementSibling;
      if (dropdown) dropdown.classList.toggle("dropdown-active");

      e.stopPropagation();
    };

    if (headerToggleBtn) {
      headerToggleBtn.addEventListener("click", toggleHeader);
    }

    const navLinks = document.querySelectorAll("#navmenu a");
    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

    const dropdownToggles = document.querySelectorAll(
      ".navmenu .toggle-dropdown"
    );
    dropdownToggles.forEach((toggle) =>
      toggle.addEventListener("click", handleDropdownToggle)
    );

    return () => {
      if (headerToggleBtn) {
        headerToggleBtn.removeEventListener("click", toggleHeader);
      }

      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavClick)
      );

      dropdownToggles.forEach((toggle) =>
        toggle.removeEventListener("click", handleDropdownToggle)
      );
    };
  }, []);
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
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="active navlink"
            >
              <i className="bi bi-house navicon"></i>Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="navlink"
            >
              <i className="bi bi-person navicon"></i> About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="navlink"
            >
              <i className="bi bi-lightning-charge navicon"></i> Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="resume"
              smooth={true}
              duration={500}
              className="navlink"
            >
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={500}
              className="navlink"
            >
              <i className="bi bi-images navicon"></i> Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="navlink"
            >
              <i className="bi bi-hdd-stack navicon"></i> Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              className="navlink"
            >
              <i className="bi bi-chat-quote navicon"></i> Professional review
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="navlink"
            >
              <i className="bi bi-envelope navicon"></i> Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
