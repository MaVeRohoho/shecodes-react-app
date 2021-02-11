import logo from './logo.svg';
import './App.css';
import React from "react";



function App() {
  return (
    <div className="App">
      <p className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://fervent-carson-13aa9a.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code by: Margot Rohner
        </a>
      </p>
    </div>
  );
}

export default App;
