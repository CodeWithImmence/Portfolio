import React, { useEffect } from "react";
import AOS from "aos";
import Isotope from "isotope-layout";
import "./Projects.css";
import GLightbox from "glightbox";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.css";
import imagesLoaded from "imagesloaded";

import ChatBotWF from "../assests/img/portfolio/chatbot-wf.png";
import ContactWF from "../assests/img/portfolio/contact-wf.png";
import app3 from "../assests/img/portfolio/app-3.jpg";
import IntegrtionPCI from "../assests/img/portfolio/IntegrtionPCI.png";
import IntegrtionPCICred from "../assests/img/portfolio/IntegrtionPCICred.png";
import IntegrtionPCIPayment from "../assests/img/portfolio/IntegrtionPCIPayment.png";
import jobmonitoring from "../assests/img/portfolio/job-monitoring.png";
import jobmonitoring1 from "../assests/img/portfolio/job-monitoring-1.png";
import jobmonitoring2 from "../assests/img/portfolio/job-monitoring-2.png";
import jobmonitoring3 from "../assests/img/portfolio/job-monitoring-2.png";
import jobmonitoring4 from "../assests/img/portfolio/job-monitoring-1.png";
import jobmonitoring5 from "../assests/img/portfolio/job-monitoring-2.png";
import Canvas_STC from "../assests/img/portfolio/Canvas_STC.png";
import MoodleRooms_MRU from "../assests/img/portfolio/MoodleRooms_MRU.png";
import MoodleRooms_BC from "../assests/img/portfolio/MoodleRooms_BC.png";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timeout = setTimeout(() => {
      const grid = document.querySelector(".isotope-container");
      if (!grid) return;

      imagesLoaded(grid, () => {
        const iso = new Isotope(grid, {
          itemSelector: ".isotope-item",
          layoutMode: "fitRows", // ✅ change from masonry to fitRows
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
      img: ChatBotWF,
      title: "ChatBotWF",
      description:
        "Designed and automated chatbot workflows to streamline user interactions and system responses.",
    },
    {
      id: 2,
      category: "filter-app",
      img: ContactWF,
      title: "ContactWF",
      description:
        "Developed an automated contact management workflow for data collection, notifications, and tracking.",
    },
    {
      id: 3,
      category: "filter-app",
      img: app3,
      title: "App 3",
      description: "Improved performance and UI consistency across modules.",
    },
    {
      id: 4,
      category: "filter-product",
      img: IntegrtionPCI,
      title: "Integrtion PCI",
      description:
        "Implemented PCI-compliant integration between PCI-compliant systems and Anthology Student ledger card for secure data exchange.",
    },
    {
      id: 5,
      category: "filter-product",
      img: IntegrtionPCICred,
      title: "Integrtion PCI Creditcard",
      description:
        "Built a robust payment integration with role-based access and secure transaction handling.eveloped secure credit card processing workflows aligned with PCI standards.",
    },
    {
      id: 6,
      category: "filter-product",
      img: IntegrtionPCIPayment,
      title: "Integrtion PCI Payment",
      description: "Custom solution for role-based access control in a portal.",
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
      id: 8,
      category: "filter-branding",
      img: jobmonitoring1,
      title: "Scheduled Job Monitoring Service (In Progress)",
      description:
        "Service to monitor scheduled jobs with planned API logging and dashboard integration to improve visibility and issue detection.",
    },
    {
      id: 9,
      category: "filter-branding",
      img: jobmonitoring2,
      title: "Rasmussen – Automated Salesforce Job Monitoring Alerts",
      description:
        "Implemented a core service that monitors scheduled Salesforce jobs and sends real-time email alerts with detailed insights, minimizing downtime and preventing data loss.",
    },
    {
      id: 10,
      category: "filter-branding",
      img: jobmonitoring3,
      title: "Automated Job Alerts – Problem-Only Mode",
      description:
        "Configured job monitoring to trigger alerts only for issues, reducing noise and ensuring focused visibility through API logging and dashboards.",
    },
    {
      id: 11,
      category: "filter-branding",
      img: jobmonitoring4,
      title: "Rasmussen – Boomi API Job Monitoring and Alerts",
      description:
        "Built a monitoring solution for Boomi API workflows using customer-specific tables to track and alert on failures and missing executions.",
    },
    {
      id: 12,
      category: "filter-branding",
      img: jobmonitoring5,
      title: "Automated Service Monitoring and Alert System",
      description:
        "Integrated backend services with centralized API logging and a monitoring dashboard to ensure proactive alerting and visibility.",
    },
    {
      id: 13,
      category: "filter-books",
      img: Canvas_STC,
      title: "Canvas-STC",
      description: "Supported Canvas data mapping with Anthology sync.",
    },
    {
      id: 14,
      category: "filter-books",
      img: MoodleRooms_MRU,
      title: "MoodleRooms-MRU",
      description: "Troubleshot MoodleRooms enrollment and grade sync.",
    },
    {
      id: 15,
      category: "filter-books",
      img: MoodleRooms_BC,
      title: "MoodleRooms-BC",
      description: "User group customization for Moodle and BC requirements.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>
          A glimpse into the work I've done integrating and building impactful
          solutions in the EdTech space. From developing backend services and
          APIs to integrating complex platforms like Moodle, Canvas, Salesforce,
          and Anthology Student, each project reflects a focus on performance,
          security, and seamless user experience.
        </p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          {/* === FILTER BUTTONS === */}
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">AI Automation WF</li>
            <li data-filter=".filter-product">Integrations</li>
            <li data-filter=".filter-branding">Automation Alert</li>
            <li data-filter=".filter-books">LMS Support</li>
          </ul>

          {/* === PORTFOLIO GRID === */}
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 isotope-item ${item.category}`}
              >
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>

                  <div className="portfolio-links">
                    <a
                      href={item.img}
                      data-gallery="portfolio-gallery"
                      className="glightbox"
                      title={item.title}
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="#!"
                      className="details-link"
                      title="More Details"
                      onClick={(e) => e.preventDefault()}
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
