import React, { useContext, useState } from 'react';
import "./Quiz.css";
import LanguageContext from '../components/LanguageContext'; 
import { useNavigate } from 'react-router-dom';

const services = [
  "Massage Suédois",
  "Soin pour le visage Zen",
  "Enveloppement corporel",
  "Massage aux pierres chaudes"
];

const questions = [
  {
    question: {
      fr: "Préférez-vous les massages aux pierres chaudes?",
      en: "Do you prefer hot stone massages?"
    },
    answers: {
      fr: ["Oui", "Non"],
      en: ["Yes", "No"]
    }
  },
  {
    question: {
      fr: "Aimez-vous les soins du visage hydratants?",
      en: "Do you like hydrating facials?"
    },
    answers: {
      fr: ["Oui", "Non"],
      en: ["Yes", "No"]
    }
  },
  {
    question: {
      fr: "Préférez-vous les traitements corporels détox?",
      en: "Do you prefer detox body treatments?"
    },
    answers: {
      fr: ["Oui", "Non"],
      en: ["Yes", "No"]
    }
  },
  {
    question: {
      fr: "Aimez-vous les massages suédois?",
      en: "Do you like Swedish massages?"
    },
    answers: {
      fr: ["Oui", "Non"],
      en: ["Yes", "No"]
    }
  }
];

const Quiz = () => {
  const { language } = useContext(LanguageContext);
  const [answers, setAnswers] = useState(Array.from({ length: questions.length }, () => ""));
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (answers.includes("")) {
      alert(language === 'fr' ? "Veuillez répondre à toutes les questions avant de soumettre." : "Please answer all questions before submitting.");
      return;
    }

    const serviceRecommendations = {
      "Massage Suédois": ["Oui", "Non", "Non", "Oui"],
      "Soin pour le visage Zen": ["Non", "Oui", "Non", "Non"],
      "Enveloppement corporel": ["Non", "Non", "Oui", "Non"],
      "Massage aux pierres chaudes": ["Oui", "Non", "Non", "Non"]
    };

    let recommendedService = null;

    for (const [service, criteria] of Object.entries(serviceRecommendations)) {
      if (JSON.stringify(criteria) === JSON.stringify(answers)) {
        recommendedService = service;
        break;
      }
    }

    if (!recommendedService) {
      const randomIndex = Math.floor(Math.random() * services.length);
      recommendedService = services[randomIndex];
    }

    setSelectedService(recommendedService);
    setAnswers(Array.from({ length: questions.length }, () => ""));
  };

  const handleBooking = () => {
    navigate('/Reservation', { state: { service: selectedService } });
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>{language === 'fr' ? 'Quiz' : 'Quiz'}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div className="quiz-question" key={index}>
            <p>{question.question[language]}</p>
            <div className="answer-buttons">
              {question.answers[language].map((answer, answerIndex) => (
                <button
                  type="button"
                  key={answerIndex}
                  className={`answer-button ${answers[index] === answer ? 'selected' : ''}`}
                  onClick={() => handleAnswerChange(index, answer)}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="quiz-submit">
          {language === 'fr' ? 'Soumettre le quiz' : 'Submit the quiz'}
        </button>
      </form>
      {selectedService && (
        <div className="quiz-service">
          <p>{language === 'fr' ? `Le service idéal pour vous est : ${selectedService}` : `The ideal service for you is: ${selectedService}`}</p>
          <button onClick={handleBooking} className="booking-button">
            {language === 'fr' ? 'Réserver un service' : 'Book a Service'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
