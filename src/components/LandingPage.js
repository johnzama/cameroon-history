import React from 'react';
import './LandingPage.css'; // Make sure your CSS file is linked properly

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Explore Cameroon’s Legacy: From Ancient Times to Today</h1>
        <p>Discover the untold story of Cameroon’s rich history, diverse cultures, and ancient roots.</p>
        <button className="cta-button">Discover More</button>
      </div>

      {/* Optionally, if you want to display the image as a normal img tag */}
      {/* <img src="/images/landscape.jpg" alt="Landscape of Cameroon" /> */}
    </div>
  );
};

export default LandingPage;

