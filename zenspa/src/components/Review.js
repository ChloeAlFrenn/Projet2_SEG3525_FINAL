import React from 'react';
import './Review.css';

const Review = ({ comment, rating }) => {
  return (
    <div className="review-container">
      <p className="review-comment">{comment}</p>
      <div className="review-rating">
        {Array.from({ length: 5 }, (v, i) => (
          <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
        ))}
      </div>
    </div>
  );
};

export default Review;
