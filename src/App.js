import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from "react";
import Search from "./Search";
import Weather from "./Weather";



export default function App() {
  return (
    <div className="App">
     <div className="container">
       <h1>React Weather App</h1>
       <Search />
       <Weather />
      <p className="App-header"> 
        <a 
          className="App-link"
          href="https://fervent-carson-13aa9a.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        > Open-source code by: 
          Margot Rohner
        </a>
      </p>
    </div>
    </div> 
  );
}

