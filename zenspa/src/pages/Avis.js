import React, { useState } from 'react';
import Review from '../components/Review';
import './Avis.css';

const Avis = () => {
  const [newReview, setNewReview] = useState({ comment: "", rating: 0 });
  const [reviews, setReviews] = useState([
    { comment: "Très bon service!", rating: 5 },
    { comment: "Pas mal, mais peut être amélioré.", rating: 3 },
    { comment: "Mauvaise expérience.", rating: 1 },
    { comment: "Excellent! Très relaxant.", rating: 5 },
    { comment: "Je reviendrai certainement.", rating: 4 }
  ]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newReview.comment !== "" && newReview.rating > 0) {
      setReviews([...reviews, newReview]);
      setNewReview({ comment: "", rating: 0 });
    }
  };

  return (
    <div className="avis-container">
      <h1>Avis Reçus</h1>
      {reviews.map((review, index) => (
        <Review key={index} comment={review.comment} rating={review.rating} />
      ))}
      
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment"
          value={newReview.comment}
          placeholder="Entrez votre commentaire..."
          onChange={handleInputChange}
          required
        />
        <h3>Laissez un nombre d'étoiles</h3>
        <input
          type="number"
          name="rating"
          value={newReview.rating}
          placeholder="Note (1-5)"
          min="1" max="5"
          onChange={handleInputChange}
          required
        />
        <button type="submit">Laisser un avis</button>
      </form>
    </div>
  );
};

export default Avis;
