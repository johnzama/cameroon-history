function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Navigation bar at the top */}

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

