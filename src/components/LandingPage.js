import React from 'react';
import './LandingPage.css'; // This imports the CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="welcome-message">
        <h1>Welcome to Cameroon</h1>
        <p>Explore the rich history, culture, and beauty of this remarkable country.</p>
        <a href="#history-section" className="explore-button">Explore Now</a>
      </div>
    </div>
  );
};

export default LandingPage;

