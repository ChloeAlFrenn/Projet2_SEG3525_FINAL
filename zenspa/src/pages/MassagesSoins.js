import React, { useContext, useState } from "react";
import "./MassagesSoins.css";
import { engin, rosa } from "../assets/index";
import { useNavigate } from 'react-router-dom';
import LanguageContext from '../components/LanguageContext'; // Adjust the path as needed

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
  // Add more services here...
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
