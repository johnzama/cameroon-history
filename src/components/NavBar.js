import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Cameroon History</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/history">History</Link></li>
        <li><Link to="/culture">Culture</Link></li>
        <li><Link to="/languages">Languages</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/religion">Religion</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

