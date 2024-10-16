import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import CSS

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/culture">Culture</Link></li>
        <li><Link to="/video">Video</Link></li>
        <li><Link to="/geography">Geography</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/art-craft">Art & Craft</Link></li>
        <li><Link to="/modern">Modern Cameroon</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

