import React from 'react';
import './Footer.css';
import lemonIcon from '../assets/image 3.png';
const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="logo">
          <div className="lemon-icon">
            <img src={lemonIcon} alt="Lemon Icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
