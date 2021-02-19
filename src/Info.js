import React from "react";
import DateFormat from "./DateFormat";
import Icons from "./Icons";

export default function Info (props){
return (
<div className ="WeatherInfo" >   
 <div className="row">
                    <div className="col-5">
                        <h1 id="city">{props.data.city}</h1>
                    </div>
                    <div className="col-3">
                        <div className="float-left">
                          <Icons code = {props.data.icon}/>
                        </div>
                    </div>
                    <div className="col-1">
                        <h2 id="temperature">{Math.round(props.data.temperature)}°</h2>
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
                            <li id="description">{props.data.description}</li>
                            <li id="date"><DateFormat date = {props.data.date}/></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: <span id="humid">{Math.round(props.data.humidity)}</span> % </li>
                            <li>Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h </li>
                        </ul>
                    </div>
 </div>
</div>               
);
}