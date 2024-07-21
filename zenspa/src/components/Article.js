import React from 'react';
import './Article.css';

const Article = ({ title, description, imageUrl, articleUrl }) => {
  return (
    <div className="article-container">
      <div className="article-text">
        <h2 className="article-title">{title}</h2>
        <p className="article-description">{description}</p>
        {articleUrl && (
          <a href={articleUrl} className="article-link" target="_blank" rel="noopener noreferrer">
            Lire l'article complet
          </a>
        )}
      </div>
      {imageUrl && (
        <div className="article-image">
          <img src={imageUrl} alt="article" />
        </div>
      )}
    </div>
  );
};

export default Article;

