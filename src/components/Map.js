import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
  useEffect(() => {
    // Initialize the map centered on Cameroon
    const map = L.map('map').setView([7.3697, 12.3547], 6);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker for Yaoundé
    L.marker([3.8480, 11.5021]).addTo(map)
      .bindPopup('Yaoundé, Capital of Cameroon')
      .openPopup();
  }, []);

  return (
    <div id="map" className="map-container"></div>
  );
};

export default Map;

