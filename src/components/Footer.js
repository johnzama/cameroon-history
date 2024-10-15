import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Dedicated to the People of Cameroon</p>
        <p>Website created by John Zama</p>
        <div className="footer-links">
          <a href="mailto:contact@cameroonhistory.com">Email: contact@cameroonhistory.com</a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

