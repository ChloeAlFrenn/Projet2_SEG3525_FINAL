import React from "react";
import "./MassagesSoins.css";
import { engin, rosa } from "../assets/index";
import { useNavigate } from 'react-router-dom';

function MassagesSoins() {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate('/Quiz');
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Type de service</h2>
        <label>
          <input type="checkbox" /> Massage
        </label>
        <label>
          <input type="checkbox" /> Soin pour le visage
        </label>
        <label>
          <input type="checkbox" /> Soin pour le corps
        </label>
        <h2>Nombre de personnes</h2>
        <label>
          <input type="checkbox" /> Individuel
        </label>
        <label>
          <input type="checkbox" /> Deux personnes
        </label>
        <div className="quiz-section">
          <h2>Vous ne savez pas quel service choisir ?</h2>
          <p>Faites notre quiz pour voir ce qui vous convient le mieux</p>
          <button onClick={handleQuizClick}>Faire le quiz</button>
        </div>
      </div>
      <div className="content">
        <div className="service">
          <h3>Massage Suédois</h3>
          <div className="img-container">
            <img className="image" src={engin} alt="Massage suédois" />
            <p className="description">
              Découvrez les bienfaits relaxants du massage suédois, connu pour ses
              techniques fluides et profondes visant à détendre les muscles et
              améliorer la circulation. Offert à partir de 100$ pour une séance
              revitalisante.
            </p>
          </div>
        </div>
        <div className="service">
          <h3>Soin pour le visage Zen</h3>
          <div className="img-container">
            <img className="image" src={rosa} alt="Massage suédois" />
            <p className="description">
              Détendez-vous avec notre soin pour le visage Zen, conçu pour apaiser
              et revitaliser la peau grâce à des techniques douces et des produits
              naturels. Profitez d'une expérience régénérante à partir de 60$.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MassagesSoins;
