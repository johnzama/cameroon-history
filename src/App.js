import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import History from './components/History';
import Culture from './components/Culture';
import Geography from './components/Geography';
import Food from './components/Food';
import ArtCraft from './components/ArtCraft';
import ModernCameroon from './components/ModernCameroon';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Cameroon History and Culture</h1>
          <nav>
            <ul>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/culture">Culture</Link></li>
              <li><Link to="/geography">Geography</Link></li>
              <li><Link to="/food">Food</Link></li>
              <li><Link to="/art-craft">Art & Craft</Link></li>
              <li><Link to="/modern">Modern Cameroon</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/history" element={<History />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/food" element={<Food />} />
          <Route path="/art-craft" element={<ArtCraft />} />
          <Route path="/modern" element={<ModernCameroon />} />
          <Route path="/" element={<History />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

