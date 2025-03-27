import React, { useEffect } from "react";
import AOS from "aos";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.css";
import app1 from "../assests/img/portfolio/app-1.jpg";
import app2 from "../assests/img/portfolio/app-2.jpg";
import app3 from "../assests/img/portfolio/app-3.jpg";
import product1 from "../assests/img/portfolio/product-1.jpg";
import product2 from "../assests/img/portfolio/product-2.jpg";
import product3 from "../assests/img/portfolio/product-3.jpg";
import branding1 from "../assests/img/portfolio/branding-1.jpg";
import branding2 from "../assests/img/portfolio/branding-2.jpg";
import branding3 from "../assests/img/portfolio/branding-3.jpg";
import books1 from "../assests/img/portfolio/books-1.jpg";
import books2 from "../assests/img/portfolio/books-2.jpg";
import books3 from "../assests/img/portfolio/books-3.jpg";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Initialize Isotope
    const isotope = new Isotope(".isotope-container", {
      itemSelector: ".isotope-item",
      layoutMode: "masonry",
    });

    // Portfolio filter event
    const filters = document.querySelectorAll(".portfolio-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        filters.forEach((f) => f.classList.remove("filter-active"));
        this.classList.add("filter-active");
        const filterValue = this.getAttribute("data-filter");
        isotope.arrange({ filter: filterValue });
      });
    });

    // Initialize GLightbox
    GLightbox({ selector: ".glightbox" });

    return () => {
      isotope.destroy();
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem.
        </p>
      </div>

      <div className="container">
        <div className="isotope-layout isotope-container" data-layout="masonry">
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>

          <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
            {[
              { category: "filter-app", img: app1, title: "App 1" },
              { category: "filter-app", img: app2, title: "App 2" },
              { category: "filter-app", img: app3, title: "App 3" },
              {
                category: "filter-product",
                img: product1,
                title: "Product 1",
              },
              {
                category: "filter-product",
                img: product2,
                title: "Product 2",
              },
              {
                category: "filter-product",
                img: product3,
                title: "Product 3",
              },
              {
                category: "filter-branding",
                img: branding1,
                title: "Branding 1",
              },
              {
                category: "filter-branding",
                img: branding2,
                title: "Branding 2",
              },
              {
                category: "filter-branding",
                img: branding3,
                title: "Branding 3",
              },
              {
                category: "filter-books",
                img: books1,
                title: "Books 1",
              },
              {
                category: "filter-books",
                img: books2,
                title: "Books 2",
              },
              {
                category: "filter-books",
                img: books3,
                title: "Books 3",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}
              >
                <div className="portfolio-content h-100">
                  <img src={item.img} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                    <a
                      href={item.img}
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
