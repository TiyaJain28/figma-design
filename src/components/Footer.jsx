import React from 'react';
import './Footer.css';

const footerLinks = {
  Company: ['Home', 'Studio', 'Service', 'Blog'],
  'Terms & Policies': ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  'Follow Us': ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  Contact: ['1070 Fulton ste, STE 1', 'Chicago, IL 63867', '+12 sambhavjain111', 'info@elementum.com'],
};

const Footer = () => (
  <footer className="footer" id="contact">
    <hr className="footer__divider" />
    <div className="container footer__inner">
      {Object.entries(footerLinks).map(([col, links]) => (
        <div key={col} className="footer__col">
          <h4 className="footer__col-title">{col}</h4>
          <ul className="footer__links">
            {links.map(l => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="container footer__bottom">
      <p className="footer__copy">©2023 Elementum. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;