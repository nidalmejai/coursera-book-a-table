import React from 'react';
import './Header.css';
import lemonIcon from '../assets/image 3.png';

const Header: React.FC = () => {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="logo">
          <div className="lemon-icon">
            <img src={lemonIcon} alt="Lemon Icon" />
          </div>
        </div>
      </div>
      <div className="header-divider"></div>
    </header>
  );
};

export default Header;
