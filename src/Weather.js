import 'bootstrap/dist/css/bootstrap.css';
import DateFormat from "./DateFormat";
import './Weather.css';
import React, {useState} from "react";
import axios from "axios"; 

export default function Weather(props) {
const [weather, setWeather] = useState({ready: false});
const [city, setCity] =  useState (props.defaultCity);
 
function handleResponse (response){
  setWeather({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt *1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
}
function search (){
const apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
  

}


function handleSubmit (event){
  event.preventDefault() ;
  search();
}
function handleCity (event){
setCity (event.target.value);
}

if (weather.ready){
  return (
  <div className="Weather">
      <div className="weather-wrapper">
                <form onSubmit = {handleSubmit} className="search-form" id="search-form">
                    <div className="row">
                        <div className="col-6">
                            <input type="search" placeholder="Type a city.." autofocus="on" autocomplete="off"
                                id="city-input" className="form-control shadow-sm"  onChange = {handleCity}/> 
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
                    <div className="col-4">
                        <h1 id="city">{weather.city}</h1>
                    </div>
                    <div className="col-3">
                        <div className="iconSize">
                            <div id="mainIcon">
                                <img src= {weather.icon} alt="" id="iconOpenWeather" />
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <h2 id="temperature">{Math.round(weather.temperature)}</h2>
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
                            <li id="date"><DateFormat date = {weather.date}/></li>
                            <li id="description">{weather.description}</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: <span id="humid">{Math.round(weather.humidity)}</span> % </li>
                            <li>Wind: <span id="wind">{Math.round(weather.wind)}</span> km/h </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row" id="forecast">
                </div>
    </div>
  </div>
  ); 
}else{

return "Loading..."
} 

}
