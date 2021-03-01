import React, {useState} from "react";
import axios from "axios";


export default function Forecast (props) {
const [loaded,setLoaded] = useState (false); 
const [forecast,setForecast] = useState (null);

function handleForecast(response){
    setForecast (response.date);
    setLoaded (true);
}

if (loaded) {
    return (
    <div className ="WeatherForecast">
    10:00
    <WeatherIcon code = {forecast.list[0].weather[0].icon}/>
   {Math.round(forecast.list[0].main.temp)}°C
   </div>
    );
}else{
let apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleForecast);                           


return null;
}
}