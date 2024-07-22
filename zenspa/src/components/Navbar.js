import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import LanguageContext from '../components/LanguageContext'; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className='left_section'>
        <Link to="/" className='links'> ZenSpa </Link>
      </div>
      <div className='right_section'>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className='links'>{language === 'fr' ? 'Accueil' : 'Home'}</Link>
          <Link to="/MassagesSoins" className='links'>{language === 'fr' ? 'Massages et Soins' : 'Massages and Treatments'}</Link>
          <Link to="/Reservation" className='links'>{language === 'fr' ? 'Réservation' : 'Booking'}</Link>
          <Link to="/BienEtre" className='links'>{language === 'fr' ? 'Bien-être' : 'Wellness'}</Link>
          <Link to="/Avis" className='links'>{language === 'fr' ? 'Avis' : 'Reviews'}</Link>
        </div>
        <button className='language-btn' onClick={toggleLanguage}>
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
        <button className='hamburger' onClick={handleToggleMenu}>
          ☰
        </button>
      </div>
    </div>
  );
}

export default Navbar;
