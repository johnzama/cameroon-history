import React, { useEffect } from 'react';
import L from 'leaflet';
import './Map.css';

const Map = () => {
  useEffect(() => {
    // Initialize the map and set its view to Cameroon with zoom level 6
    const map = L.map('map').setView([7.3697, 12.3547], 6);

    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Optional: Add a marker at a specific location (e.g., Yaoundé)
    L.marker([3.8480, 11.5021]).addTo(map)
      .bindPopup("Yaoundé, Capital of Cameroon")
      .openPopup();
  }, []);

  return (
    <div id="map" className="map-container"></div>
  );
}

export default Map;

