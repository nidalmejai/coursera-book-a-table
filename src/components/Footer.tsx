import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="logo">
          <div className="lemon-icon">
            <div className="lemon-shape"></div>
            <div className="leaf"></div>
          </div>
          <h2 className="logo-text">LITTLE LEMON</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
