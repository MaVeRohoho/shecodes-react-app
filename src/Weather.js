import 'bootstrap/dist/css/bootstrap.css';
import './Weather.css';
import React from "react";

export default function Weather() {
  return (
  <div className="Weather">
      <div className="weather-wrapper">
                <form className="search-form" id="search-form">
                    <div className="row">
                        <div className="col-6">
                            <input type="search" placeholder="Type a city.." autofocus="on" autocomplete="off"
                                id="city-input" className="form-control shadow-sm" /> 
                        </div>
                        <div className="col-3"> 
                            <input type="submit" value="Search" className="form-control btn btn-outline-dark shadow-sm" />
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-outline-dark w-100" id= "my-weather-button">My Weather</button>
                        </div>
                    </div>
                </form>
                <hr />
                <div className="row">
                    <div className="col-5">
                        <h1 id="city">Zurich</h1>
                    </div>
                    <div className="col-2">
                        <div className="iconSize">
                            <div id="mainIcon">
                                <img src="" alt="" id="iconOpenWeather" />
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <h2 id="temperature">2</h2>
                    </div>
                    <div className="col-1">
                        <h2>°</h2>
                    </div>
                    <div className="col-3">
                        <div className="units">
                            <a href="#" id="celcius" className="unit">C     </a>  🌡
                            <a href="#" id="fahrenheit" className="unit">     F</a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <div >Last Update: <li id="date"></li></div>
                            <li id="description">Cloudy</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: <span id="humid"></span> % </li>
                            <li>Wind: <span id="wind"></span> km/h </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row" id="forecast">
                </div>
    </div>
  </div>
  ); 
}
