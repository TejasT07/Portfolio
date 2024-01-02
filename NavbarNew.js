import React from 'react';
import './Navbar.css';

const NavbarNew = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="brand">PORTFOLIO</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>

  );
};

export default NavbarNew;


























