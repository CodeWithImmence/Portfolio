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
import jobmonitoring from "../assests/img/portfolio/job-monitoring.png";
import product3 from "../assests/img/portfolio/product-3.jpg";
import jobmonitoring2 from "../assests/img/portfolio/job-monitoring-2.png";
import jobmonitoring1 from "../assests/img/portfolio/job-monitoring-1.png";
import books1 from "../assests/img/portfolio/Canvas_STC.png";
import books2 from "../assests/img/portfolio/MoodleRooms_MRU.png";
import books3 from "../assests/img/portfolio/MoodleRooms_BC.png";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const imagesLoaded = require("imagesloaded");

    const timeout = setTimeout(() => {
      const grid = document.querySelector(".isotope-container");

      if (!grid) return;

      // Wait for images to fully load
      imagesLoaded(grid, () => {
        const iso = new Isotope(grid, {
          itemSelector: ".isotope-item",
          layoutMode: "masonry",
        });

        const filters = document.querySelectorAll(".portfolio-filters li");
        filters.forEach((filter) => {
          filter.addEventListener("click", function () {
            filters.forEach((f) => f.classList.remove("filter-active"));
            this.classList.add("filter-active");
            const filterValue = this.getAttribute("data-filter");
            iso.arrange({ filter: filterValue });
          });
        });

        GLightbox({ selector: ".glightbox" });
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      category: "filter-app",
      img: app1,
      title: "Canvas - STC",
      description: "Canvas integration setup and sync troubleshooting for STC.",
    },
    {
      id: 5,
      category: "filter-app",
      img: app2,
      title: "App 2",
      description: "Built a dynamic frontend dashboard with React & Bootstrap.",
    },
    {
      id: 9,
      category: "filter-app",
      img: app3,
      title: "App 3",
      description: "Improved performance and UI consistency across modules.",
    },
    {
      id: 2,
      category: "filter-product",
      img: product1,
      title: "Product 1",
      description: "Integrated Salesforce with Anthology Student using APIs.",
    },
    {
      id: 6,
      category: "filter-product",
      img: product2,
      title: "Product 2",
      description: "Worked on secure data sync between third-party apps.",
    },
    {
      id: 10,
      category: "filter-product",
      img: product3,
      title: "Product 3",
      description: "Custom solution for role-based access control in a portal.",
    },
    {
      id: 3,
      category: "filter-branding",
      img: jobmonitoring2,
      title: "Rasmussen - Scheduled Job Monitoring Alert",
      description:
        "Built a core-service job monitoring alerts are sent via email with detailed job insights, minimizing downtime and data loss.",
    },

    {
      id: 11,
      category: "filter-branding",
      img: jobmonitoring1,
      title: "Branding 3",
      description: "API logging and monitoring dashboard integration.",
    },
    {
      id: 4,
      category: "filter-books",
      img: books1,
      title: "Canvas-STC",
      description: "Supported Canvas data mapping with Anthology sync.",
    },
    {
      id: 8,
      category: "filter-books",
      img: books2,
      title: "MoodleRooms-MRU",
      description: "Troubleshot MoodleRooms enrollment and grade sync.",
    },
    {
      id: 12,
      category: "filter-books",
      img: books3,
      title: "MoodleRooms-BC",
      description: "User group customization for Moodle and BC requirements.",
    },
    {
      id: 7,
      category: "filter-branding",
      img: jobmonitoring, // Replace with a relevant image if available
      title: "Scheduled Job Monitoring Service",
      description:
        "Developed a resilient background service to monitor scheduled jobs, detect anomalies, and send automated email alerts across tenants and environments.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio section light-background">
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
            {portfolioItems.map((item) => (
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
