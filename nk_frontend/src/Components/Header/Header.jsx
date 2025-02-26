import React, { useState, useEffect } from "react";
import "./header.css";
import nextkey from "../../assets/nextkey.png"; // Ensure this path is correct

function Header() {
  const [navbarBg, setNavbarBg] = useState("transparent"); // Initial transparent background

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("#f8f9fa"); // Light background when scrolling
      } else {
        setNavbarBg("transparent"); // Default transparent background
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const pdfPath = "/assets/services.pdf"; // Path to the PDF in the public folder
    const link = document.createElement("a");
    link.href = pdfPath;
    link.setAttribute("download", "services.pdf"); // Download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className="navbar navbar-expand-sm fixed-top"
      style={{ backgroundColor: navbarBg, transition: "0.3s ease-in-out" }}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src={nextkey}
            alt="NK Communications Logo"
            className="img-fluid"
            style={{ width: "140px", height: "auto", borderRadius: "10px" }}
          />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-black fw-bold px-3" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black fw-bold px-3" href="/aboutUs">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black fw-bold px-3" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black fw-bold px-3" href="/clients">Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary fw-bold px-3" href="/contactus">Contact Us</a>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-primary fw-bold px-3" onClick={handleDownload}>
                Download Brochure
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
