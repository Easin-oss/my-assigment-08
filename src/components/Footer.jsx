import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-logo">Hero IO</h3>
          <p>
            Your new favorite app store. Discover and install the best apps, 
            curated for you.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/apps">All Apps</Link></li>
            <li><Link to="/installation">My Installation</Link></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Hero IO. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;