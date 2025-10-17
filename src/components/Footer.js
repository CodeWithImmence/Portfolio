import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get dynamic year

  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Vishal Rajai</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <p>{currentYear}</p> {/* Dynamic Year */}
        </div>

        <div className="credits">
          Designed with ❤️ by{" "}
          <a
            href="https://www.codewithimmence.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-color)", textDecoration: "none" }}
          >
            Vishal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
