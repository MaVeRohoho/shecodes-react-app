import React from "react";
import Icons from "./Icons";


export default function ForecastPreview (props){
    return (
        <div className = "col">
            {new Date (props.data.dt * 1000).getHours()}:00
    <Icons code = {props.data.weather[0].icon}/>
   {Math.round(props.data.main.temp)}°C
   </div>
   );
   }