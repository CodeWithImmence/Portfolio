import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Corrected module imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import styles for autoplay
import testimonials1 from "../assests/img/testimonials/testimonials-1.jpg";
import testimonials2 from "../assests/img/testimonials/testimonials-2.jpg";
import testimonials3 from "../assests/img/testimonials/testimonials-3.jpg";
import testimonials4 from "../assests/img/testimonials/testimonials-4.jpg";
import testimonials5 from "../assests/img/testimonials/testimonials-5.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
      name: "Saul Goodman",
      title: "CEO & Founder",
      imgSrc: testimonials1,
    },
    {
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis.",
      name: "Sara Wilsson",
      title: "Designer",
      imgSrc: testimonials2,
    },
    {
      quote:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis.",
      name: "Jena Karlis",
      title: "Store Owner",
      imgSrc: testimonials3,
    },
    {
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim.",
      name: "Matt Brandon",
      title: "Freelancer",
      imgSrc: testimonials4,
    },
    {
      quote:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa.",
      name: "John Larson",
      title: "Entrepreneur",
      imgSrc: testimonials5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
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
                <img
                  src={testimonial.imgSrc}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
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
