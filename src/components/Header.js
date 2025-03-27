import React from "react";
import logo from "../assests/img/my-profile-img.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>
      <div className="profile-img">
        <img src={logo} alt="" className="img-fluid rounded-circle" />
      </div>
      <a
        href="index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        {/*<img src="./public/assets/img/logo.png" alt=""></img>*/}
        <h1 className="sitename">Alex Smith</h1>
      </a>

      <div className="social-links text-center">
        <a href="https://x.com/" className="twitter">
          <i className="bi bi-twitter-x"></i>
        </a>
        <a href="https://www.facebook.com/" className="facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/" className="instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://in.linkedin.com/" className="linkedin">
          <i className="bi bi-linkedin"></i>
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
