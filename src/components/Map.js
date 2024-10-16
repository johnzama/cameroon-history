import React, { useEffect } from 'react';
import L from 'leaflet';

const Map = () => {
  useEffect(() => {
    // Initialize map only if not already initialized
    if (!document.getElementById('map')._leaflet_id) {
      const map = L.map('map').setView([3.8480, 11.5021], 8); // Coordinates of Cameroon
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
    }

    // Clean up on unmount
    return () => {
      const mapContainer = document.getElementById('map');
      if (mapContainer && mapContainer._leaflet_id) {
        mapContainer._leaflet_id = null; // Reset the map initialization flag
      }
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default Map;

