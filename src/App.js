import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import History from './components/History';
import Culture from './components/Culture';
import Geography from './components/Geography';
import Food from './components/Food';
import ArtCraft from './components/ArtCraft';
import ModernCameroon from './components/ModernCameroon';
import NavBar from './components/NavBar';  // Import NavBar
import Footer from './components/Footer';  // Import Footer

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Include NavBar at the top */}

        {/* Routes for different components */}
        <Routes>
          {/* Landing page as the default route */}
          <Route path="/" element={<LandingPage />} />

          {/* Other pages */}
          <Route path="/history" element={<History />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/food" element={<Food />} />
          <Route path="/art-craft" element={<ArtCraft />} />
          <Route path="/modern" element={<ModernCameroon />} />
        </Routes>

        <Footer /> {/* Add Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;

