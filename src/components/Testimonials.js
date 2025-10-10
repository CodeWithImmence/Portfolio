import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "Vishal and the team have been instrumental in resolving our Anthology Student and Canvas integration issues. Their quick response time and technical know-how ensured minimal disruption to our academic operations.",
      name: "Jacob Smith",
      title: "Integration Manager, PS Care College",
    },
    {
      quote:
        "Thanks to Vishal's support, we successfully migrated our student enrollment process with Anthology Student and Salesforce. His attention to detail and commitment made a huge difference.",
      name: "Michael Perro",
      title: "IT Lead, Westshore Educational Group",
    },
    {
      quote:
        "We encountered a complex authentication issue with our LMS, and Vishal helped us resolve it with a clear, structured approach. His expertise in REST APIs and backend systems stood out.",
      name: "Mel Michel",
      title: "Technical Consultant, NextGen EdTech",
    },
    {
      quote:
        "Collaborating with Vishal on our Moodle and Finance CashNet integration was seamless. He was professional, knowledgeable, and always available when we needed assistance.",
      name: "Samantha Lee",
      title: "Project Manager, Global Learning Institute",
    },
    {
      quote:
        "Vishal has consistently gone above and beyond in supporting our Anthology Student and BankMobile integration. His proactive approach, clear communication, and technical insight helped us meet tight deadlines with confidence.",
      name: "Amanda Reyes",
      title: "Systems Analyst, Bridgeview University",
    },
  ];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Hear from our clients about their experience with our integration and
          support services.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          loop
          speed={700}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {testimonialsData.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card">
                <div className="quote-icon">“</div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <h3>{t.name}</h3>
                    <h4>{t.title}</h4>
                  </div>
                </div>
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
