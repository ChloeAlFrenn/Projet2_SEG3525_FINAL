import React, { useState, useContext } from "react";
import "./Reservation.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LanguageContext from '../components/LanguageContext';

function Reservation() {
  const { language } = useContext(LanguageContext);

  const services = [
    "Massage Suédois",
    "Soin pour le visage Zen",
    "Enveloppement corporel",
    "Massage aux pierres chaudes",
    "Soin du visage anti-âge",
    "Gommage corporel",
    "Massage en couple",
    "Soin du visage hydratant",
    "Détoxification corporelle",
    "Soin du visage en duo",
    "Enveloppement corporel en duo"
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accessType, setAccessType] = useState("");
  const [halfDayTime, setHalfDayTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = "";

    if (selectedOption === "service") {
      if (!service) errorMessage = language === "fr" ? "Vous devez sélectionner un service" : "You must select a service";
      if (!date) errorMessage = language === "fr" ? "Vous devez sélectionner une date" : "You must select a date";
      if (!time) errorMessage = language === "fr" ? "Vous devez sélectionner une heure" : "You must select a time";
      if (!name) errorMessage = language === "fr" ? "Vous devez entrer votre nom" : "You must enter your name";
      if (!email) errorMessage = language === "fr" ? "Vous devez entrer votre adresse courriel" : "You must enter your email";
    } else if (selectedOption === "spa") {
      if (!accessType) errorMessage = language === "fr" ? "Vous devez sélectionner un type d'accès" : "You must select an access type";
      if (!date) errorMessage = language === "fr" ? "Vous devez sélectionner une date" : "You must select a date";
      if (accessType === "half-day" && !halfDayTime) errorMessage = language === "fr" ? "Vous devez sélectionner une période" : "You must select a period";
      if (!name) errorMessage = language === "fr" ? "Vous devez entrer votre nom" : "You must enter your name";
      if (!email) errorMessage = language === "fr" ? "Vous devez entrer votre adresse courriel" : "You must enter your email";
    }

    if (errorMessage) {
      alert(errorMessage);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="reservation-container">
      <h1 style={{ color: "#6B9080" }}>{language === "fr" ? "Faire une Réservation" : "Make a Reservation"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="option-selection form-section">
          <h2>{language === "fr" ? "1. Choisissez une option de reservation" : "1. Choose a reservation option"}</h2>
          <div className="options">
            <label>
              <input
                type="radio"
                value="service"
                checked={selectedOption === "service"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {language === "fr" ? "Service" : "Service"}
            </label>
            <label>
              <input
                type="radio"
                value="spa"
                checked={selectedOption === "spa"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {language === "fr" ? "Spa" : "Spa"}
            </label>
          </div>
        </div>

        {selectedOption === "service" && (
          <div className="form-service">
            <div className="form-section">
              <h2>{language === "fr" ? "2. Sélectionnez un service" : "2. Select a Service"}</h2>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">{language === "fr" ? "Sélectionnez un service" : "Select a service"}</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div className="form-section">
              <h2>{language === "fr" ? "3. Sélectionnez une date" : "3. Select a Date"}</h2>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                required
              />
            </div>
            <div className="form-section">
              <h2>{language === "fr" ? "4. Sélectionnez une heure" : "4. Select a Time"}</h2>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">{language === "fr" ? "Sélectionnez une heure" : "Select a time"}</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </select>
            </div>
            <div className="form-section">
              <h2>{language === "fr" ? "5. Entrez vos informations" : "5. Enter Your Information"}</h2>
              <input
                type="text"
                placeholder={language === "fr" ? "Nom" : "Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder={language === "fr" ? "Courriel" : "Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        {selectedOption === "spa" && (
          <div className="form-spa">
            <div className="form-section">
              <h2>{language === "fr" ? "2. Sélectionnez un type d'accès" : "2. Select an Access Type"}</h2>
              <select
                value={accessType}
                onChange={(e) => setAccessType(e.target.value)}
                required
              >
                <option value="">{language === "fr" ? "Sélectionnez un type d'accès" : "Select an access type"}</option>
                <option value="full-day">{language === "fr" ? "Journée complète" : "Full day"}</option>
                <option value="half-day">{language === "fr" ? "Demi-journée" : "Half day"}</option>
              </select>
            </div>
            {accessType === "half-day" && (
              <div className="form-section">
                <h2>{language === "fr" ? "3. Sélectionnez une période" : "3. Select a Period"}</h2>
                <select
                  value={halfDayTime}
                  onChange={(e) => setHalfDayTime(e.target.value)}
                  required
                >
                  <option value="">{language === "fr" ? "Sélectionnez une période" : "Select a period"}</option>
                  <option value="morning">{language === "fr" ? "Matin" : "Morning"}</option>
                  <option value="afternoon">{language === "fr" ? "Après-midi" : "Afternoon"}</option>
                </select>
              </div>
            )}
            <div className="form-section">
              <h2>{language === "fr" ? "4. Sélectionnez une date" : "4. Select a Date"}</h2>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                required
              />
            </div>
            <div className="form-section">
              <h2>{language === "fr" ? "5. Entrez vos informations" : "5. Enter Your Information"}</h2>
              <input
                type="text"
                placeholder={language === "fr" ? "Nom" : "Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input    type="email"
            placeholder={language === "fr" ? "Courriel" : "Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
    )}

    {selectedOption && (
      <button type="submit">
        {language === "fr" ? "Réserver" : "Reserve"}
      </button>
    )}
  </form>
  {submitted && (
    <div className="confirmation-message">
      {language === "fr"
        ? "Votre réservation a été soumise avec succès!"
        : "Your reservation has been successfully submitted!"}
    </div>
  )}
</div>
);
}

export default Reservation;
