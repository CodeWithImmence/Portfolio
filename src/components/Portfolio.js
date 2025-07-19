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
import jobmonitoring3 from "../assests/img/portfolio/job-monitoring-2.png";
import jobmonitoring4 from "../assests/img/portfolio/job-monitoring-1.png";
import jobmonitoring5 from "../assests/img/portfolio/job-monitoring-2.png";
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
      title: "Rasmussen – Automated Salesforce Job Monitoring Alerts",
      description:
        "Implemented a core service that monitors scheduled Salesforce jobs and sends real-time email alerts with detailed insights, helping to minimize downtime and prevent data loss.",
    },
    {
      id: 11,
      category: "filter-branding",
      img: jobmonitoring1,
      title: "Scheduled Job Monitoring Service (In Progress)",
      description:
        "Currently working on a service to monitor scheduled jobs with planned API logging and dashboard integration to improve visibility and issue detection.",
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
      img: jobmonitoring,
      title: "Automated Monitoring for Scheduled Background Jobs",
      description:
        "Designed and implemented a robust background service to monitor scheduled jobs across multiple tenants and environments. Detects anomalies and triggers automated email alerts for timely issue resolution.",
    },
    {
      id: 13,
      category: "filter-branding",
      img: jobmonitoring3,
      title: "Automated Job Alerts – Problem-Only Mode",
      description:
        "Configured job monitoring to trigger alerts only for issues, reducing noise and ensuring focused visibility through API logging and dashboards.",
    },
    {
      id: 14,
      category: "filter-branding",
      img: jobmonitoring4,
      title: "Rasmussen – Boomi API Job Monitoring and Alerts",
      description:
        "Built a monitoring solution for Boomi API workflows using customer-specific tables to track and alert on failures and missing executions.",
    },
    {
      id: 15,
      category: "filter-branding",
      img: jobmonitoring5,
      title: "Automated Service Monitoring and Alert System",
      description:
        "Integrated backend services with centralized API logging and a monitoring dashboard to ensure proactive alerting and visibility.",
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
            <li data-filter=".filter-branding">Automation Alert</li>
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
