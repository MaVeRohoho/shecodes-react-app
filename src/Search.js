
import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(" ");
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState({});

  function displaySearch(response) {
    setLoad(true);
    setSearch({
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
    axios.get(apiUrl).then(displaySearch);
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
      <div className="Search">
        {form}
        <ul>
          <li>Description: {search.description}</li>
          <li>Temperature: {Math.round(search.temperature)}°C</li>
          <li>Wind: {Math.round(search.wind)}km/h</li>
          <li>Humidity: {Math.round(search.humidity)}%</li>
          <li>
            {" "}
            <img src={search.icon} alt="Search Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
