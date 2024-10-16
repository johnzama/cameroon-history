import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import History from './components/History';
import Culture from './components/Culture';
import Geography from './components/Geography';
import Food from './components/Food';
import ArtCraft from './components/ArtCraft';
import ModernCameroon from './components/ModernCameroon';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Map from './components/Map';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Navigation Bar */}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/food" element={<Food />} />
          <Route path="/art-craft" element={<ArtCraft />} />
          <Route path="/modern" element={<ModernCameroon />} />
          <Route path="/map" element={<Map />} /> {/* Map route */}
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;

