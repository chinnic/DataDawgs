import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home.js';
import Splash from './components/splash.js';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Splash/ >} />
        </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
