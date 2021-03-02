import React from "react";
import Icons from "./Icons";

export default function ForecastPreview (props){
    function hours (){
        let date = new Date (props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`
    }
    return (
        <div className = "col">
            {hours ()}
    <Icons code = {props.data.weather[0].icon}/>
   {Math.round(props.data.main.temp)}°C
   </div>
   );
   }