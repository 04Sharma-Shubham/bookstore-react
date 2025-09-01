import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@bookhaven.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <label htmlFor="email" className="newsletter-label">Subscribe to our newsletter</label>
            <input type="email" id="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h4>Address</h4>
          <p>123 Book Street</p>
          <p>Novel City, Fictionland 45678</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#!" aria-label="Facebook" className="social-link">FB</a>
            <a href="#!" aria-label="Twitter" className="social-link">TW</a>
            <a href="#!" aria-label="Instagram" className="social-link">IG</a>
            <a href="#!" aria-label="LinkedIn" className="social-link">LI</a>
            <a href="#!" aria-label="YouTube" className="social-link">YT</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Book Haven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;