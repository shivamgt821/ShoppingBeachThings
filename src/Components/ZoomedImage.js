// ZoomedImage.jsx
import React, { useState } from 'react';
import './ZoomedImage.css';

const ZoomedImage = ({ src, title, description, buttonLabel }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="image-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt="Zoomable Image"
        className="zoomable-image"
      />
      <div className={`image-overlay ${isHovered ? 'show' : ''}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="shop-button">{buttonLabel}</button>
      </div>
    </div>
  );
};

export default ZoomedImage;
