import React, { useState } from "react";
import './contact.css'
const Contact = () => {
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
      const response = await fetch("http://localhost:5000/send-email", {
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
    <div  className="contact-container">
         <h4 className="text-center text-info fw-bold">Next Key Communications</h4>
        <p className="text-center fst-italic">
          Drop us a note, a query, or just a hello. We’re happy to hear from you!
        </p>
      <div className="col-md-4 text-center">
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
  );
};

export default Contact;
