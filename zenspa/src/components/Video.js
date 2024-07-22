import React, { useContext } from 'react';
import './Video.css';
import LanguageContext from '../components/LanguageContext';

const Video = ({ title, description, videoUrl }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="video-container">
      <div className="video-text">
        <h2 className="video-title">{title}</h2>
        <p className="video-description">{description}</p>
      </div>
      {videoUrl && (
        <div className="video-iframe">
          <iframe 
            width="100%" 
            height="400px" 
            src={videoUrl} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      )}
    </div>
  );
};

export default Video;
