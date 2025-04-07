import React, { useEffect } from "react";
import AOS from "aos";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.css";
import app1 from "../assests/img/portfolio/Canvas_STC.png";
import app2 from "../assests/img/portfolio/app-2.jpg";
import app3 from "../assests/img/portfolio/app-3.jpg";
import product1 from "../assests/img/portfolio/product-1.jpg";
import product2 from "../assests/img/portfolio/product-2.jpg";
import product3 from "../assests/img/portfolio/product-3.jpg";
import branding1 from "../assests/img/portfolio/branding-1.jpg";
import branding2 from "../assests/img/portfolio/branding-2.jpg";
import branding3 from "../assests/img/portfolio/branding-3.jpg";
import books1 from "../assests/img/portfolio/Canvas_STC.png";
import books2 from "../assests/img/portfolio/MoodleRooms_MRU.png";
import books3 from "../assests/img/portfolio/MoodleRooms_BC.png";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Wait a short delay to ensure DOM is fully rendered
    const timeout = setTimeout(() => {
      // Initialize Isotope
      const iso = new Isotope(".isotope-container", {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
      });

      // Get all filter buttons
      const filters = document.querySelectorAll(".portfolio-filters li");

      filters.forEach((filter) => {
        filter.addEventListener("click", function () {
          // Remove existing active class
          filters.forEach((f) => f.classList.remove("filter-active"));
          // Add active class to selected filter
          this.classList.add("filter-active");

          // Get filter value and apply it
          const filterValue = this.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });
        });
      });

      // Init GLightbox
      GLightbox({ selector: ".glightbox" });
    }, 100); // Delay to let DOM render

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          A glimpse into the work I've done integrating and building impactful
          solutions in the EdTech space. From developing backend services and
          APIs to integrating complex platforms like Moodle, Canvas, Salesforce,
          and Anthology Student, each project reflects a focus on performance,
          security, and seamless user experience. Below are some highlights of
          my contributions to both support and development initiatives.
        </p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">Web Applications</li>
            <li data-filter=".filter-product">Integrations</li>
            <li data-filter=".filter-branding">API Development</li>
            <li data-filter=".filter-books">LMS Support</li>
          </ul>

          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[
              {
                id: 1,
                category: "filter-app",
                img: app1,
                title: "Canvas - STC",
                description:
                  "Canvas integration setup and sync troubleshooting for STC.",
              },
              {
                id: 5,
                category: "filter-app",
                img: app2,
                title: "App 2",
                description:
                  "Built a dynamic frontend dashboard with React & Bootstrap.",
              },
              {
                id: 9,
                category: "filter-app",
                img: app3,
                title: "App 3",
                description:
                  "Improved performance and UI consistency across modules.",
              },
              {
                id: 2,
                category: "filter-product",
                img: product1,
                title: "Product 1",
                description:
                  "Integrated Salesforce with Anthology Student using APIs.",
              },
              {
                id: 6,
                category: "filter-product",
                img: product2,
                title: "Product 2",
                description:
                  "Worked on secure data sync between third-party apps.",
              },
              {
                id: 10,
                category: "filter-product",
                img: product3,
                title: "Product 3",
                description:
                  "Custom solution for role-based access control in a portal.",
              },
              {
                id: 3,
                category: "filter-branding",
                img: branding1,
                title: "Branding 1",
                description:
                  "Developed REST APIs for user registration and login.",
              },
              {
                id: 7,
                category: "filter-branding",
                img: branding2,
                title: "Branding 2",
                description:
                  "Refactored legacy APIs to improve maintainability.",
              },
              {
                id: 11,
                category: "filter-branding",
                img: branding3,
                title: "Branding 3",
                description:
                  "API logging and monitoring dashboard integration.",
              },
              {
                id: 4,
                category: "filter-books",
                img: books1,
                title: "Canvas-STC",
                description:
                  "Supported Canvas data mapping with Anthology sync.",
              },
              {
                id: 8,
                category: "filter-books",
                img: books2,
                title: "MoodleRooms-MRU",
                description:
                  "Troubleshot MoodleRooms enrollment and grade sync.",
              },
              {
                id: 12,
                category: "filter-books",
                img: books3,
                title: "MoodleRooms-BC",
                description:
                  "User group customization for Moodle and BC requirements.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}
              >
                <div className="portfolio-content h-100">
                  <img src={item.img} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a
                      href={item.img}
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                      title={item.title}
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
