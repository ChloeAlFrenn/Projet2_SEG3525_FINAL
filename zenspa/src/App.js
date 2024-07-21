
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Routing from './components/Routing';

function App() {
  return (
    <Router> 
    <Navbar/>
    <Routing/>
  </Router>
  );
}

export default App;
