import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/culture">Culture</Link></li>
        <li><Link to="/languages">Languages</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/religion">Religion</Link></li>
        <li><Link to="/map">Map</Link></li> {/* Link to the Map */}
        <li><Link to="/contact">Contact</Link></li> {/* Link to Contact */}
      </ul>
    </nav>
  );
}

export default NavBar;

