import React from "react";
import "./style.scss";
import logoImage from "../../assets/images/Logo.jpg";
function Footer() {
  return (
    <footer id="Footer">
      <div className="logo-column">
        <img src={logoImage} alt="logoImage" />
        <p>
          Discover the world's wonders and let us be your trusted guide to
          extraordinary destinations.
        </p>
        <p>© Copyright 2023 Tourista Ltd. All Rights Reserved.</p>
      </div>
      <div className="menu-column">
        <h5>Menu</h5>
        <div className="menu-links">
          <a href="#">Destinations</a>
          <a href="#">Private trips</a>
          <a href="#">Blog</a>
          <a href="#">About us</a>
        </div>
      </div>
      <div className="support-column">
        <h5>Support</h5>
        <div className="support-links">
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>    
        </div>
      </div>
      <div className="follow-us-column">
        <h5>Follow us</h5>
        <div className="follow-us-links">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Linkedin</a>
        <a href="#">Tiktok</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
