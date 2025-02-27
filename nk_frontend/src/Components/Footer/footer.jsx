import React, { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        {/* Heading */}
        <h4 className="text-center text-info fw-bold">
          Next Key Communications & Consulting P Ltd
        </h4>
        <p className="text-center fst-italic">
          Drop us a note, a query, or just a hello. We’re happy to hear from
          you!
        </p>

        <div className="row mt-4">
          {/* Location Section */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="text-primary">OUR LOCATION</h5>
            <p>
              1-7-1022/8/8/1, Harinagar, Zamistanpur <br />
              Hyderabad - 500020, India
            </p>
          </div>

          {/* Google Map */}
          <div className="col-md-4">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=17.410141981491524,78.50404046787123&hl=en&z=15&output=embed"
              width="100%"
              height="300"
              style={{ borderRadius: "10px", border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="col-md-4">
            <h5 className="text-primary">CONNECT WITH US</h5>
            {status && <p className="alert alert-info p-2">{status}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control bg-secondary text-white"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control bg-secondary text-white"
                  placeholder="E-Mail Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="tel"
                  className="form-control bg-secondary text-white"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <textarea
                  className="form-control bg-secondary text-white"
                  placeholder="Message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <hr className="border-light" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-center text-md-start mb-3 mb-md-0">
            <button className="btn btn-link text-info">
              nkcommunications18@gmail.com
            </button>
            <button className="btn btn-link text-info">
              +91-9848343882, +91-6303093338
            </button>
          </div>
          <div className="social-icons">
            <a href="#" className="btn btn-outline-primary me-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/nkcommunications18?igsh=MWx3Z3BjMGdvcGpuaA%3D%3D&utm_source=qr"
              className="btn btn-outline-danger me-2"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/next-key-communications/"
              className="btn btn-outline-info"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
