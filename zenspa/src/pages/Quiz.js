import React, { useState } from 'react';
import "./Quiz.css";

const Quiz = () => {

  const questions = [
    "Question 1 : ",
    "Question 2 : ",
    "Question 3 : ",
    "Question 4 : ",
    "Question 5 : ",
    "Question 6 : "
  ];


  const services = [
    "Massage Suédois",
    "Soin pour le visage Zen",
  ];


const [answers, setAnswers] = useState(Array.from({ length: questions.length }, () => ""));


const [selectedService, setSelectedService] = useState(null);

const handleAnswerChange = (index, event) => {
  const newAnswers = [...answers];
  newAnswers[index] = event.target.value;
  setAnswers(newAnswers);
};


const handleSubmit = (event) => {
  event.preventDefault();
  const randomIndex = Math.floor(Math.random() * services.length);
  const service = services[randomIndex];
  setSelectedService(service);
  setAnswers(Array.from({ length: questions.length }, () => ""));
};

return (
  <div className="quiz-container">
    <div className="quiz-header">
      <h1>Quiz</h1>
    </div>
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div className="quiz-question" key={index}>
          <p>{question}</p>
          <input
            type="text"
            value={answers[index]}
            onChange={(event) => handleAnswerChange(index, event)}
            required
          />
        </div>
      ))}
      <button type="submit" className="quiz-submit">Soumettre</button>
    </form>
    {selectedService && (
      <div className="quiz-service">
        <p>Le service idéal pour vous est: {selectedService}</p>
      </div>
    )}
  </div>
);
};

export default Quiz;
