import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Corrected module imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import styles for autoplay

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "Vishal and the team have been instrumental in resolving our Anthology Student and Canvas integration issues. Their quick response time and technical know-how ensured minimal disruption to our academic operations.",
      name: "Jacob Smith",
      title: "Integration Manager, PS Care College",
      //imgSrc: testimonials1,
    },
    {
      quote:
        "Thanks to Vishal's support, we successfully migrated our student enrollment process with Anthology Student and Salesforce. His attention to detail and commitment made a huge difference.",
      name: "Michael Perro",
      title: "IT Lead, Westshore Educational Group",
      //imgSrc: testimonials2,
    },
    {
      quote:
        "We encountered a complex authentication issue with our LMS, and Vishal helped us resolve it with a clear, structured approach. His expertise in REST APIs and backend systems stood out.",
      name: "Mel Michel",
      title: "Technical Consultant, NextGen EdTech",
      //imgSrc: testimonials3,
    },
    {
      quote:
        "Collaborating with Vishal on our Moodle and Finance CashNet integration was seamless. He was professional, knowledgeable, and always available when we needed assistance.",
      name: "Samantha Lee",
      title: "Project Manager, Global Learning Institute",
      //imgSrc: testimonials4,
    },
    {
      quote:
        "Vishal has consistently gone above and beyond in supporting our Anthology Student and BankMobile integration. His proactive approach, clear communication, and technical insight helped us meet tight deadlines with confidence.",
      name: "Amanda Reyes",
      title: "Systems Analyst, Bridgeview University",
      //imgSrc: testimonials5,
    },
  ];
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          What our valued clients say about the support and integration services
          provided.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 1 },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                {/* Avatar with initials */}
                <div className="testimonial-avatar">
                  {getInitials(testimonial.name)}
                </div>
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.title}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
