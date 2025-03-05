import React, { useState } from 'react';
import './PhotoCard.css';

const PhotoCard = ({ image, title, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="photo-card" onClick={onClick}>
      <img
        src={image}
        alt={title}
        className={`photo-image ${isLoaded ? 'loaded' : ''}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
      <div className="photo-title">{title}</div>
    </div>
  );
};

export default PhotoCard;