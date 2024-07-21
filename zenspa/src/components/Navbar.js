import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
    <div className='left_section'>
        <Link to="/" className='links'> ZenSpa </Link>
    </div>
    <div className='right_section'>
        <Link to="/" className='links'> Accueil </Link>
        <Link to="/MassagesSoins" className='links'> Massages et Soins </Link>
        <Link to="/Reservation" className='links'> Reservation </Link>
        <Link to="/BienEtre" className='links'> Bien-etre </Link>
        <Link to="/Avis" className='links'> Avis </Link>
    </div>
</div>
  )
}

export default Navbar