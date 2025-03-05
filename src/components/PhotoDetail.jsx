import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PhotoDetail.css';

const PhotoDetail = ({ photos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const photo = photos[parseInt(id)];
  const [selectedImage, setSelectedImage] = useState(null);

  if (!photo) {
    return <div>图片不存在</div>;
  }

  return (
    <div className='detail'>
    <div className="photo-detail">
      <button className="back-button" onClick={() => navigate('/')}>
        返回
      </button>
      <div className="detail-container">
        <img 
          src={photo.image} 
          alt={photo.title} 
          className="detail-image"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="detail-info">
          <h2>{photo.title}</h2>
          <div className="detail-description">
            <p>拍摄地：东河古镇</p>
            <p>门票：免费</p>
            <p>推荐指数：⭐⭐⭐⭐⭐</p>
            <p>最佳拍摄时间：清晨或黄昏</p>
            <p>交通方式：可乘坐公交车或自驾前往</p>
          </div>
        </div>
      </div>
      <div className="related-photos">
        <h3>更多照片</h3>
        <div className="photo-grid">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={photo.image}
              alt={`相关照片${index + 1}`}
              className="related-image"
              onClick={() => setSelectedImage(photo.image)}
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
          <img 
            src={selectedImage} 
            alt="全屏图片" 
            className="fullscreen-image"
            loading="eager"
            decoding="sync"
          />
        </div>
      )}
    </div>
    </div>
  );
};

export default PhotoDetail;