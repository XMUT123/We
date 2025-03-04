import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import PhotoCard from './components/PhotoCard';
import PhotoDetail from './components/PhotoDetail';
import './App.css';
import gufeng1 from './assets/古风1.png';
import gufeng2 from './assets/古风2.png';
import gufeng3 from './assets/蓝月诗.png';
import gufeng4 from './assets/桃花笑.png';

const photos = [
  { image: gufeng3, title: '蓝月诗' },
  { image: gufeng1, title: '桃花笑' },
  { image: gufeng2, title: '花间令' },
  { image: gufeng4, title: '月光琉璃' },
];

const MainContent = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={
          <div className="app">
            <h1 className="page-title">记录我们的故事</h1>
            <div className="photo-gallery">
              {photos.map((photo, index) => (
                <PhotoCard
                  key={index}
                  image={photo.image}
                  title={photo.title}
                  onClick={() => navigate(`/photo/${index}`)}
                />
              ))}
            </div>
          </div>
        } />
        <Route path="/photo/:id" element={<PhotoDetail photos={photos} />} />
      </Routes>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
