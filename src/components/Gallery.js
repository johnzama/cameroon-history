import React from 'react';
import './Gallery.css'; // You can create this file for styling

const images = [
  { src: 'image1.jpg', alt: 'Traditional Attire' },
  { src: 'image2.jpg', alt: 'Cameroon Landscape' },
  { src: 'image3.jpg', alt: 'Cultural Event' },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

