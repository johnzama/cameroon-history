import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="welcome-message">
        <h1>Welcome to the History of Cameroon</h1>
        <p>Explore the rich culture, history, and geography of this beautiful nation.</p>
        <Link to="/history" className="explore-button">Explore History</Link>
      </div>
    </div>
  );
}

export default LandingPage;

