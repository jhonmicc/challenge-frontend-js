import React from 'react';
import logo from '../../Images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#our_services">
                Our Services
              </a>
              <a className="nav-link" href="#why_us">
                Why Us
              </a>
              <a className="nav-link" href="#testimonial">
                Testimonial
              </a>
              <a className="nav-link" href="#faq">
                FAQ
              </a>
              <a className="nav-link tombol" href="#">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
