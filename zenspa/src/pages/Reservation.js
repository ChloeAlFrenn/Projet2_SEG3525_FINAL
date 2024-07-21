import React, { useState } from "react";
import "./Reservation.css"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Reservation() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [service, setService] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accessType, setAccessType] = useState("");
  const [halfDayTime, setHalfDayTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
  };

  const handleBackClick = () => {
    setSelectedOption(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isServiceFormValid = () => {
    return service && date && time && name && email;
  };

  const isSpaFormValid = () => {
    return (
      accessType &&
      date &&
      ((accessType === "half-day" && halfDayTime) ||
        accessType === "full-day") &&
      name &&
      email
    );
  };

  return (
    <div className="reservation-container">
      {!selectedOption ? (
        <div className="option-selection">
          <h1>Choisir une option de Reservation</h1>
          <button onClick={() => handleOptionClick("service")}>
            Reserver un service
          </button>
          <button onClick={() => handleOptionClick("spa")}>
            Reserver un accès au spa
          </button>
        </div>
      ) : (
        <div className="reservation-form">
          {selectedOption === "service" && (
            <div className="form-service">
              <h1>Reservez un service</h1>
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h2>1. Sélectionnez un service</h2>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="Soin pour le visage Zen">
                        Soin pour le visage Zen
                      </option>
                      <option value="Massage Suédois">Massage Suédois</option>
                    </select>
                  </div>
                  <div className="form-section">
                    <h2>2. Sélectionnez une date</h2>
                    <DatePicker
                      selected={date}
                      onChange={(date) => setDate(date)}
                      required
                    />
                  </div>
                  <div className="form-section">
                    <h2>3. Sélectionnez une heure</h2>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    >
                      <option value="">Sélectionnez une heure</option>
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
                  </div>
                  <div className="form-section">
                    <h2>4. Inscrire vos informations</h2>
                    <input
                      type="text"
                      placeholder="Nom et prénom"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Adresse courriel"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit">Reserver</button>
                </form>
              ) : (
                <div className="confirmation-message">
                  <h2>Merci pour votre réservation!</h2>
                  <p>
                    Vous avez réservé un {service} le{" "}
                    {date.toLocaleDateString()} à {time}.
                  </p>
                  <button className="back-button" onClick={handleBackClick}>
                    Retour à la page de reservation
                  </button>
                </div>
              )}
              {!submitted && (
                <button className="back-button" onClick={handleBackClick}>
                  Retour en arrière
                </button>
              )}
            </div>
          )}
          {selectedOption === "spa" && (
            <div className="form-spa">
              <h1>Reservez un accès au spa</h1>
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h2>1. Sélectionnez un type d'accès</h2>
                    <select
                      value={accessType}
                      onChange={(e) => setAccessType(e.target.value)}
                      required
                    >
                      <option value="">Sélectionnez un type d'accès</option>
                      <option value="full-day">Journée complète</option>
                      <option value="half-day">Demi-journée</option>
                    </select>
                  </div>
                  {accessType === "half-day" && (
                    <div className="form-section">
                      <h2>2. Sélectionnez une période</h2>
                      <select
                        value={halfDayTime}
                        onChange={(e) => setHalfDayTime(e.target.value)}
                        required
                      >
                        <option value="">Sélectionnez une période</option>
                        <option value="morning">Matin</option>
                        <option value="afternoon">Après-midi</option>
                      </select>
                    </div>
                  )}
                  <div className="form-section">
                    <h2>
                      {accessType === "full-day" ? "2" : "3"}. Sélectionnez une
                      date
                    </h2>
                    <DatePicker
                      selected={date}
                      onChange={(date) => setDate(date)}
                      required
                    />
                  </div>
                  <div className="form-section">
                    <h2>
                      {accessType === "full-day" ? "3" : "4"}. Inscrire vos
                      informations
                    </h2>
                    <input
                      type="text"
                      placeholder="Nom et prénom"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Adresse courriel"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit">Reserver</button>
                </form>
              ) : (
                <div className="confirmation-message">
                  <h2>Merci pour votre réservation!</h2>
                  <p>
                    Vous avez réservé un accès au spa pour une{" "}
                    {accessType === "full-day"
                      ? "journée complète"
                      : `demi-journée (${
                          halfDayTime === "morning" ? "matin" : "après-midi"
                        })`}{" "}
                    le {date.toLocaleDateString()}.
                  </p>
                  <button className="back-button" onClick={handleBackClick}>
                    Retour à la page de reservation
                  </button>
                </div>
              )}
              {!submitted && (
                <button className="back-button" onClick={handleBackClick}>
                  Retour en arrière
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
