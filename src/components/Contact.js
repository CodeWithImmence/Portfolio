import React, { useState } from "react";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submit

    setStatusMessage("Sending..."); // show sending status

    try {
      // Replace with your local n8n webhook URL
      const response = await fetch(
        "https://n8n-portfolio-production.up.railway.app//webhook/portfolio-contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData), // send your form data to n8n
        }
      );

      if (response.ok) {
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
      } else {
        setStatusMessage("❌ Failed to send message.");
      }
    } catch (err) {
      setStatusMessage("⚠️ Error: " + err.message);
    }

    // Clear message after a few seconds
    setTimeout(() => setStatusMessage(""), 5000);
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Let’s connect — whether it's collaboration, freelance opportunities,
          or just to talk tech.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Bangalore, Kanataka, IN</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-instagram flex-shrink-0"></i>
                <div>
                  <h3>Instagram</h3>
                  <p>
                    <a
                      href="https://www.instagram.com/rajaivishalofficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rajai Vishal Official
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>rajaivishal.official@gmail.com</p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <iframe
                title="Bangalore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.73275708457!2d77.58387373120956!3d12.971598690801033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c3eac32d%3A0x5594ebd3fae4e088!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712222872423!5m2!1sen!2sin"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <form
              className="php-email-form"
              onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email-field"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject-field"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message-field"
                    className="form-control"
                    rows="10"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {statusMessage && (
                    <div className="sent-message">{statusMessage}</div>
                  )}
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
