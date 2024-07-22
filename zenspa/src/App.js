
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/Navbar';
import Routing from './components/Routing';
import { LanguageProvider } from './components/LanguageContext'; 

function App() {
  return (
    <Router> 
      <LanguageProvider>
        <Navbar/>
        <Routing/>
      </LanguageProvider>
    </Router>
  );
}

export default App;
