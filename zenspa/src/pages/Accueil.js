import React, { useContext } from "react";
import { alex } from '../assets/index';
import './Accueil.css'; 
import LanguageContext from '../components/LanguageContext'; 

function Accueil() {
  const { language } = useContext(LanguageContext);

  return (
    <main className="accueil">
      <header>
        <h1>{language === 'fr' ? 'ZenSpa: Redécouvrez le bien-être, un massage à la fois' : 'ZenSpa: Rediscover Well-being, One Massage at a Time'}</h1>
      </header>
      <section className="image-container" role="img" aria-label={language === 'fr' ? 'image d\'accueil' : 'home image'}>
        <img className='accueilimg' src={alex} alt={language === 'fr' ? 'image d\'accueil de quelqu\'un dans un spa' : 'home image of someone in a spa'} />
        <p className="spa-description">
          {language === 'fr' 
            ? 'Chez ZenSpa, nous croyons fermement en l\'importance de prendre soin de soi tant physiquement que mentalement. Nous offrons une gamme complète de massages relaxants et thérapeutiques, ainsi que des soins spécialisés pour revitaliser votre corps et apaiser votre esprit.' 
            : 'At ZenSpa, we firmly believe in the importance of self-care, both physically and mentally. We offer a full range of relaxing and therapeutic massages, as well as specialized treatments to revitalize your body and soothe your mind.'
          }
        </p>
      </section>
      <section className="contact-section">
        <h2>{language === 'fr' ? 'Contactez-nous' : 'Contact Us'}</h2>
        <p><strong>Email:</strong> contact@zenspa.com</p>
        <p><strong>{language === 'fr' ? 'Adresse' : 'Address'}:</strong> 123 Rue du Spa, Ottawa, Canada</p>
        <p><strong>{language === 'fr' ? 'Téléphone' : 'Phone'}:</strong> +1 (123) 456-7890</p>
        <div className="opening-hours">
          <p><strong>{language === 'fr' ? 'Heures d\'ouverture' : 'Opening Hours'}:</strong></p>
          <ul>
            <li>{language === 'fr' ? 'Lundi - Vendredi: 9h00 - 18h00' : 'Monday - Friday: 9:00 AM - 6:00 PM'}</li>
            <li>{language === 'fr' ? 'Samedi: 10h00 - 16h00' : 'Saturday: 10:00 AM - 4:00 PM'}</li>
            <li>{language === 'fr' ? 'Dimanche: Fermé' : 'Sunday: Closed'}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Accueil;
