import React from "react";
import "./header.css";
import nextkey from "../../assets/nextkey.png"; // Ensure this path is correct

function Header() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top">
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
              <a className="nav-link text-white fw-bold px-3" href="/">Home</a>
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
              <a className="nav-link text-warning fw-bold px-3" href="/contactus">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
