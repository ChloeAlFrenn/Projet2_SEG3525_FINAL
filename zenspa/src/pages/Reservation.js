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

  const [selectedOption, setSelectedOption] = useState(null);
  const [service, setService] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accessType, setAccessType] = useState("");
  const [halfDayTime, setHalfDayTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setService("");
    setDate(null);
    setTime("");
    setName("");
    setEmail("");
    setAccessType("");
    setHalfDayTime("");
    setSubmitted(false);
    setErrors({});
  };

  const handleBackClick = () => {
    setSelectedOption(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (selectedOption === "service") {
      if (!service) newErrors.service = language === "fr" ? "Vous devez sélectionner un service" : "You must select a service";
      if (!date) newErrors.date = language === "fr" ? "Vous devez sélectionner une date" : "You must select a date";
      if (!time) newErrors.time = language === "fr" ? "Vous devez sélectionner une heure" : "You must select a time";
      if (!name) newErrors.name = language === "fr" ? "Vous devez entrer votre nom" : "You must enter your name";
      if (!email) newErrors.email = language === "fr" ? "Vous devez entrer votre adresse courriel" : "You must enter your email";
    } else if (selectedOption === "spa") {
      if (!accessType) newErrors.accessType = language === "fr" ? "Vous devez sélectionner un type d'accès" : "You must select an access type";
      if (!date) newErrors.date = language === "fr" ? "Vous devez sélectionner une date" : "You must select a date";
      if (accessType === "half-day" && !halfDayTime) newErrors.halfDayTime = language === "fr" ? "Vous devez sélectionner une période" : "You must select a period";
      if (!name) newErrors.name = language === "fr" ? "Vous devez entrer votre nom" : "You must enter your name";
      if (!email) newErrors.email = language === "fr" ? "Vous devez entrer votre adresse courriel" : "You must enter your email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="reservation-container">
      {!selectedOption ? (
        <div className="option-selection">
          <h1>{language === "fr" ? "Choisir une option de Réservation" : "Choose a Reservation Option"}</h1>
          <button onClick={() => handleOptionClick("service")}>
            {language === "fr" ? "Réserver un service" : "Book a Service"}
          </button>
          <button onClick={() => handleOptionClick("spa")}>
            {language === "fr" ? "Réserver un accès au spa" : "Book Spa Access"}
          </button>
        </div>
      ) : (
        <div className="reservation-form">
          {selectedOption === "service" && (
            <div className="form-service">
              <h1>{language === "fr" ? "Réservez un service" : "Book a Service"}</h1>
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h2>{language === "fr" ? "1. Sélectionnez un service" : "1. Select a Service"}</h2>
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
                    {errors.service && <div className="error-message">{errors.service}</div>}
                  </div>
                  <div className="form-section">
                    <h2>{language === "fr" ? "2. Sélectionnez une date" : "2. Select a Date"}</h2>
                    <DatePicker
                      selected={date}
                      onChange={(date) => setDate(date)}
                      required
                    />
                    {errors.date && <div className="error-message">{errors.date}</div>}
                  </div>
                  <div className="form-section">
                    <h2>{language === "fr" ? "3. Sélectionnez une heure" : "3. Select a Time"}</h2>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    >
                      <option value="">{language === "fr" ? "Sélectionnez une heure" : "Select a time"}</option>
                      {[...Array(10)].map((_, i) => {
                        const hour = 9 + i;
                        const formattedHour = `${hour}:00`;
                        return (
                          <option key={hour} value={`${hour}:00`}>
                            {formattedHour}
                          </option>
                        );
                      })}
                    </select>
                    {errors.time && <div className="error-message">{errors.time}</div>}
                  </div>
                  <div className="form-section">
                    <h2>{language === "fr" ? "4. Inscrire vos informations" : "4. Enter Your Information"}</h2>
                    <input
                      type="text"
                      placeholder={language === "fr" ? "Nom et prénom" : "Name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                    <input
                      type="email"
                      placeholder={language === "fr" ? "Adresse courriel" : "Email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  <button type="submit">{language === "fr" ? "Réserver" : "Book"}</button>
                </form>
              ) : (
                <div className="confirmation-message">
                  <h2>{language === "fr" ? "Merci pour votre réservation!" : "Thank you for your reservation!"}</h2>
                  <p>
                    {language === "fr" ? "Vous avez réservé un" : "You have booked a"} {service}{" "}
                    {language === "fr" ? "le" : "on"} {date.toLocaleDateString()} {language === "fr" ? "à" : "at"} {time}.
                  </p>
                  <button className="back-button" onClick={handleBackClick}>
                    {language === "fr" ? "Retour à la page de réservation" : "Back to reservation page"}
                  </button>
                </div>
              )}
              {!submitted && (
                <button className="back-button" onClick={handleBackClick}>
                  {language === "fr" ? "Retour en arrière" : "Go back"}
                </button>
              )}
            </div>
          )}
          {selectedOption === "spa" && (
            <div className="form-spa">
              <h1>{language === "fr" ? "Réservez un accès au spa" : "Book Spa Access"}</h1>
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h2>{language === "fr" ? "1. Sélectionnez un type d'accès" : "1. Select an Access Type"}</h2>
                    <select
                      value={accessType}
                      onChange={(e) => setAccessType(e.target.value)}
                      required
                    >
                      <option value="">{language === "fr" ? "Sélectionnez un type d'accès" : "Select an access type"}</option>
                      <option value="full-day">{language === "fr" ? "Journée complète" : "Full day"}</option>
                      <option value="half-day">{language === "fr" ? "Demi-journée" : "Half day"}</option>
                </select>
                {errors.accessType && <div className="error-message">{errors.accessType}</div>}
              </div>
              {accessType === "half-day" && (
                <div className="form-section">
                  <h2>{language === "fr" ? "2. Sélectionnez une période" : "2. Select a Period"}</h2>
                  <select
                    value={halfDayTime}
                    onChange={(e) => setHalfDayTime(e.target.value)}
                    required
                  >
                    <option value="">{language === "fr" ? "Sélectionnez une période" : "Select a period"}</option>
                    <option value="morning">{language === "fr" ? "Matin" : "Morning"}</option>
                    <option value="afternoon">{language === "fr" ? "Après-midi" : "Afternoon"}</option>
                  </select>
                  {errors.halfDayTime && <div className="error-message">{errors.halfDayTime}</div>}
                </div>
              )}
              <div className="form-section">
                <h2>
                  {accessType === "full-day" ? (language === "fr" ? "2" : "2") : (language === "fr" ? "3" : "3")}. {language === "fr" ? "Sélectionnez une date" : "Select a Date"}
                </h2>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  required
                />
                {errors.date && <div className="error-message">{errors.date}</div>}
              </div>
              <div className="form-section">
                <h2>
                  {accessType === "full-day" ? (language === "fr" ? "3" : "3") : (language === "fr" ? "4" : "4")}. {language === "fr" ? "Inscrire vos informations" : "Enter Your Information"}
                </h2>
                <input
                  type="text"
                  placeholder={language === "fr" ? "Nom et prénom" : "Name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
                <input
                  type="email"
                  placeholder={language === "fr" ? "Adresse courriel" : "Email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              <button type="submit">{language === "fr" ? "Réserver" : "Book"}</button>
            </form>
          ) : (
            <div className="confirmation-message">
              <h2>{language === "fr" ? "Merci pour votre réservation!" : "Thank you for your reservation!"}</h2>
              <p>
                {language === "fr" ? "Vous avez réservé un accès au spa pour une" : "You have booked spa access for a"}{" "}
                {accessType === "full-day"
                  ? language === "fr" ? "journée complète" : "full day"
                  : `${language === "fr" ? "demi-journée" : "half day"} (${halfDayTime === "morning" ? language === "fr" ? "matin" : "morning" : language === "fr" ? "après-midi" : "afternoon"})`}{" "}
                {language === "fr" ? "le" : "on"} {date.toLocaleDateString()}.
              </p>
              <button className="back-button" onClick={handleBackClick}>
                {language === "fr" ? "Retour à la page de réservation" : "Back to reservation page"}
              </button>
            </div>
          )}
          {!submitted && (
            <button className="back-button" onClick={handleBackClick}>
              {language === "fr" ? "Retour en arrière" : "Go back"}
            </button>
          )}
        </div>
      )}
    </div>
  )}
</div>
);
}

export default Reservation;