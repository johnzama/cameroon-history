import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Import the CSS file

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([3.848, 11.5021], 6); // Cameroon coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Clean up on unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map"></div>;
};

export default Map;

