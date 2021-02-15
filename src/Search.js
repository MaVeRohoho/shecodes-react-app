
import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoad(true);
    setWeather({
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="Search"
        placeholder="Enter a City..."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
    </form>
  );

  if (load) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li>Description: {weather.description}</li>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>Humidity: {Math.round(weather.humidity)}%</li>
          <li>
            {" "}
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
