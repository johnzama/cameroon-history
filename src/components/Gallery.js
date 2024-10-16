import React from 'react';
import './Gallery.css';

const images = [
  { src: '/path/to/image1.jpg', alt: 'Image 1' },
  { src: '/path/to/image2.jpg', alt: 'Image 2' },
  { src: '/path/to/image3.jpg', alt: 'Image 3' },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

