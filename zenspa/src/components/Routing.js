import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Accueil from "../pages/Accueil";
import MassagesSoins from "../pages/MassagesSoins";
import Reservation from "../pages/Reservation";
import BienEtre from "../pages/BienEtre";
import Quiz from "../pages/Quiz";
import Avis from "../pages/Avis";

function Routing() {
  return (
    <Routes>
       <Route path="/Projet2_SEG3525" element={<Accueil />} /> 
      <Route path="/" element={<Accueil />} />
      <Route path="/MassagesSoins" element={<MassagesSoins />} />
      <Route path="/Reservation" element={<Reservation/>}/>
      <Route path="/BienEtre" element={<BienEtre/>}/>
      <Route path="/Quiz" element={<Quiz/>}/>
      <Route path="/Avis" element={<Avis/>}/>
    </Routes>
  );
}

export default Routing;
