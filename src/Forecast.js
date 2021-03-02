import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import ForecastPreview from "./ForecastPreview";


export default function Forecast (props) {
const [loaded, setLoaded] = useState (false); 
const [forecast, setForecast] = useState (null);

function handleForecast(response){
    setForecast (response.data);
    setLoaded (true);
}

if (loaded) {
    return (
    <div className ="WeatherForecast row">
        {forecast.list.slice(0,6).map(function (forecastItem){
            return <ForecastPreview data={forecastItem}/>;
        })}
        </div>
    );
}else{
let apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleForecast);                           


return null;
}
}