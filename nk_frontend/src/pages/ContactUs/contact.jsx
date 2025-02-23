import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with the Google Form action URL
    const formActionUrl = "https://docs.google.com/forms/d/e/18p6jhZ7fmfZpRZMMOqmkVO3bQezuHmH9vcNyg-3rLtE/formResponse";

    const data = new URLSearchParams();
    data.append('entry.name', formData.name);  // Replace 'entry.name' with the actual field name from the form
    data.append('entry.email', formData.email);  // Replace 'entry.email' with the actual field name
    data.append('entry.message', formData.message);  // Replace 'entry.message' with the actual field name

    try {
      const response = await fetch(formActionUrl, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        mode: 'no-cors'  // Adding this to bypass CORS restrictions

      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });  // Clear the form fields
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div>
      <div className="contact-form" style={{margin: "100px"}}>
        <h2>Contact Us</h2>
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    
    </div>
  );
};

export default Contact;
