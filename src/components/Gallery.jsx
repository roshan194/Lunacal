import React, { useState, useRef } from 'react';
import './Gallery.css';
import image1 from '../assets/image1.jpeg'; 
import image2 from '../assets/image1.jpeg'; 
import image3 from '../assets/image1.jpeg'; 

function Gallery() {
  // Initialize with 3 images
  const [images, setImages] = useState([
    image1,
    image2,
    image3,
  ]);

  const galleryRef = useRef(null);

  const addImage = () => {
    // For simplicity, using the same image here. Replace with different images as needed.
    setImages([...images, image1]);
  };

  const scroll = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll amount as needed
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>Gallery</h2>
        <div className="controls">
          <button className="add-image-btn" onClick={addImage}>
            Add Image
          </button>
          <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
          <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
        </div>
      </div>
      <div className="gallery-content" ref={galleryRef}>
        <div className="image-slider">
          {images.map((img, index) => (
            <div key={index} className="image-wrapper">
              <img src={img} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;