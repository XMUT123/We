import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ image, title, onClick }) => {
  return (
    <div className="photo-card" onClick={onClick}>
      <img src={image} alt={title} className="photo-image" />
      <div className="photo-title">{title}</div>
    </div>
  );
};

export default PhotoCard;