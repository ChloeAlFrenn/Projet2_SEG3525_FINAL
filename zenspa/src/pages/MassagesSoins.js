import React, { useContext, useState } from "react";
import "./MassagesSoins.css";
import { engin, rosa, ale, engin2, adrian, alan, antonika, taylor, toa, simon, jonathan} from "../assets/index";
import { useNavigate } from 'react-router-dom';
import LanguageContext from '../components/LanguageContext';

const services = [
  {
    type: "Massage",
    name: "Massage Suédois",
    description: {
      fr: "Découvrez les bienfaits relaxants du massage suédois, connu pour ses techniques fluides et profondes visant à détendre les muscles et améliorer la circulation. Offert à partir de 100$ pour une séance revitalisante.",
      en: "Discover the relaxing benefits of Swedish massage, known for its smooth and deep techniques aimed at relaxing muscles and improving circulation. Available from $100 for a revitalizing session."
    },
    image: engin,
    people: "Individuel"
  },
  {
    type: "Soin pour le visage",
    name: "Soin pour le visage Zen",
    description: {
      fr: "Détendez-vous avec notre soin pour le visage Zen, conçu pour apaiser et revitaliser la peau grâce à des techniques douces et des produits naturels. Profitez d'une expérience régénérante à partir de 60$.",
      en: "Relax with our Zen facial treatment, designed to soothe and revitalize the skin with gentle techniques and natural products. Enjoy a rejuvenating experience from $60."
    },
    image: rosa,
    people: "Individuel"
  },
  {
    type: "Soin pour le corps",
    name: "Enveloppement corporel",
    description: {
      fr: "Profitez de notre enveloppement corporel, qui combine des ingrédients naturels pour hydrater et revitaliser votre peau. Disponible à partir de 80$.",
      en: "Enjoy our body wrap, which combines natural ingredients to hydrate and revitalize your skin. Available from $80."
    },
    image: ale,
    people: "Individuel"
  },
  {
    type: "Massage",
    name: "Massage aux pierres chaudes",
    description: {
      fr: "Le massage aux pierres chaudes utilise des pierres chauffées pour détendre et apaiser les muscles tendus. Disponible à partir de 120$.",
      en: "Hot stone massage uses heated stones to relax and soothe tense muscles. Available from $120."
    },
    image: engin2,
    people: "Individuel"
  },
  {
    type: "Soin pour le visage",
    name: "Soin du visage anti-âge",
    description: {
      fr: "Ce soin anti-âge est conçu pour réduire les signes de vieillissement et améliorer l'élasticité de la peau. Disponible à partir de 90$.",
      en: "This anti-aging facial treatment is designed to reduce signs of aging and improve skin elasticity. Available from $90."
    },
    image: adrian,
    people: "Individuel"
  },
  {
    type: "Soin pour le corps",
    name: "Gommage corporel",
    description: {
      fr: "Notre gommage corporel exfolie et adoucit votre peau en utilisant des ingrédients naturels. Disponible à partir de 70$.",
      en: "Our body scrub exfoliates and softens your skin using natural ingredients. Available from $70."
    },
    image: alan,
    people: "Individuel"
  },
  {
    type: "Massage",
    name: "Massage en couple",
    description: {
      fr: "Partagez un moment de relaxation avec notre massage en couple, idéal pour deux personnes. Disponible à partir de 200$.",
      en: "Share a moment of relaxation with our couple's massage, ideal for two people. Available from $200."
    },
    image: toa,
    people: "Deux personnes"
  },
  {
    type: "Soin pour le visage",
    name: "Soin du visage hydratant",
    description: {
      fr: "Ce soin hydratant est parfait pour revitaliser et hydrater la peau sèche. Disponible à partir de 70$.",
      en: "This hydrating facial treatment is perfect for revitalizing and moisturizing dry skin. Available from $70."
    },
    image: antonika,
    people: "Individuel"
  },
  {
    type: "Soin pour le corps",
    name: "Détoxification corporelle",
    description: {
      fr: "Notre traitement de détoxification corporelle aide à éliminer les toxines et à revitaliser votre corps. Disponible à partir de 100$.",
      en: "Our body detox treatment helps to eliminate toxins and revitalize your body. Available from $100."
    },
    image: simon,
    people: "Individuel"
  },
  {
    type: "Soin pour le visage",
    name: "Soin du visage en duo",
    description: {
      fr: "Profitez de notre soin du visage en duo, idéal pour partager un moment de détente et de soin avec un proche. Disponible à partir de 150$.",
      en: "Enjoy our duo facial treatment, perfect for sharing a moment of relaxation and care with a loved one. Available from $150."
    },
    image: taylor,
    people: "Deux personnes"
  },
  {
    type: "Soin pour le corps",
    name: "Enveloppement corporel en duo",
    description: {
      fr: "Notre enveloppement corporel en duo combine des ingrédients naturels pour hydrater et revitaliser votre peau, parfait pour deux personnes. Disponible à partir de 160$.",
      en: "Our duo body wrap combines natural ingredients to hydrate and revitalize your skin, perfect for two people. Available from $160."
    },
    image: jonathan,
    people: "Deux personnes"
  }
];

function MassagesSoins() {
  const { language } = useContext(LanguageContext);
  const [filters, setFilters] = useState({
    type: [],
    people: []
  });
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate('/Quiz');
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter((item) => item !== value);
      } else {
        newFilters[filterType].push(value);
      }
      return newFilters;
    });
  };

  const filteredServices = services.filter((service) => {
    const typeMatch = filters.type.length === 0 || filters.type.includes(service.type);
    const peopleMatch = filters.people.length === 0 || filters.people.includes(service.people);
    return typeMatch && peopleMatch;
  });

  return (
    <div className="container">
      <div className="sidebar">
        <h2>{language === 'fr' ? 'Type de service' : 'Service Type'}</h2>
        <label>
          <input type="checkbox" onChange={() => handleFilterChange('type', 'Massage')} />
          {language === 'fr' ? 'Massage' : 'Massage'}
        </label>
        <label>
          <input type="checkbox" onChange={() => handleFilterChange('type', 'Soin pour le visage')} />
          {language === 'fr' ? 'Soin pour le visage' : 'Facial Treatment'}
        </label>
        <label>
          <input type="checkbox" onChange={() => handleFilterChange('type', 'Soin pour le corps')} />
          {language === 'fr' ? 'Soin pour le corps' : 'Body Treatment'}
        </label>
        <h2>{language === 'fr' ? 'Nombre de personnes' : 'Number of People'}</h2>
        <label>
          <input type="checkbox" onChange={() => handleFilterChange('people', 'Individuel')} />
          {language === 'fr' ? 'Individuel' : 'Individual'}
        </label>
        <label>
          <input type="checkbox" onChange={() => handleFilterChange('people', 'Deux personnes')} />
          {language === 'fr' ? 'Deux personnes' : 'Two People'}
        </label>
        <div className="quiz-section">
          <h2>{language === 'fr' ? 'Vous ne savez pas quel service choisir ?' : "Don't know which service to choose?"}</h2>
          <p>{language === 'fr' ? 'Faites notre quiz pour voir ce qui vous convient le mieux' : 'Take our quiz to see what suits you best'}</p>
          <button onClick={handleQuizClick}>{language === 'fr' ? 'Faire le quiz' : 'Take the Quiz'}</button>
        </div>
      </div>
      <div className="content">
        {filteredServices.map((service, index) => (
          <div className="service" key={index}>
            <h3>{service.name}</h3>
            <div className="img-container">
              <img className="image" src={service.image} alt={service.name} />
              <p className="description">
                {service.description[language]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MassagesSoins;
