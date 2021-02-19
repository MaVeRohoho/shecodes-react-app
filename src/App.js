import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
     <div className="container">
       <h1>React Weather App</h1>
       <Weather defaultCity ="Zürich" />
      <p className="App-header"> 
        <a 
          className="App-link"
          href="https://github.com/MaVeRohoho/shecodes-react-app"
          target="_blank"
          rel="noopener noreferrer"
        > Open-source code by: 
          Margot Rohner
        </a>
      🌹 </p>
    </div>
    </div> 
  );
}

