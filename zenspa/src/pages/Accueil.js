import React from "react";
import { alex } from '../assets/index';
import './Accueil.css'; 

function Accueil() {
  return (
    <div className="accueil">
      <div>
        <h1>ZenSpa: Redécouvrez le bien-être, un massage à la fois</h1>
      </div>
      <div className="image-container">
        <img className='accueilimg' src={alex} alt="image d'accueil" />
        <p className="spa-description">
          Chez ZenSpa, nous croyons fermement en l'importance de prendre soin de soi tant physiquement que mentalement. Nous offrons une gamme complète de massages relaxants et thérapeutiques, ainsi que des soins spécialisés pour revitaliser votre corps et apaiser votre esprit. 
        </p>
      </div>
      <div className="contact-section">
        <h2>Contactez-nous</h2>
        <p><strong>Email:</strong> contact@zenspa.com</p>
        <p><strong>Adresse:</strong> 123 Rue du Spa, Ottawa, Canada</p>
        <p><strong>Téléphone:</strong> +1 (123) 456-7890</p>
        <div className="opening-hours">
          <p><strong>Heures d'ouverture:</strong></p>
          <ul>
            <li>Lundi - Vendredi: 9h00 - 18h00</li>
            <li>Samedi: 10h00 - 16h00</li>
            <li>Dimanche: Fermé</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
