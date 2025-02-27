import React, { useState, useEffect } from "react";
import "./header.css";
import nextkey from "../../assets/nextkeycommunications.png"; // Ensure this path is correct

function Header() {
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track menu state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Navbar on Mobile
  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDownload = () => {
    const pdfPath = "/assets/nk_broucher.pdf"; // Path to the PDF in the public folder
    const link = document.createElement("a");
    link.href = pdfPath;
    link.setAttribute("download", "nkcommunicationsbroucher.pdf"); // Download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`navbar navbar-expand-sm fixed-top ${isScrolled || isMobileMenuOpen ? "navbar-scrolled" : ""}`}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src={nextkey}
            alt="NK Communications Logo"
            className={`logo ${isScrolled ? "logo-small" : ""}`} 
          />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleMenu}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse justify-content-end ${isMobileMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutUs">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/clients">Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactus">Contact Us</a>
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
