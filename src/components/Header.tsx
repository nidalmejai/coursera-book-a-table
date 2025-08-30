import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="logo">
          <div className="lemon-icon">
            <div className="lemon-shape"></div>
            <div className="leaf"></div>
          </div>
          <h1 className="logo-text">LITTLE LEMON</h1>
        </div>
      </div>
      <div className="header-divider"></div>
    </header>
  );
};

export default Header;
