import React, { useContext } from 'react';
import './Article.css';
import LanguageContext from '../components/LanguageContext';

const Article = ({ title, description, imageUrl, articleUrl }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="article-container">
      <div className="article-text">
        <h2 className="article-title">{title}</h2>
        <p className="article-description">{description}</p>
        {articleUrl && (
          <a href={articleUrl} className="article-link" target="_blank" rel="noopener noreferrer">
            {language === 'fr' ? "Lire l'article complet" : "Read the full article"}
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
