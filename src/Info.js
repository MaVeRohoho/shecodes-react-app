import React from "react";
import DateFormat from "./DateFormat";
import Icons from "./Icons";
import Temperature from "./Temperature";

export default function Info (props){
return (
<div className ="Info" >   
 <div className="row">
                    <div className="col-5">
                        <h1 id="city">{props.data.city}</h1>
                    </div>
                    <div className="col-2" id= "topIcon">
                          <Icons code = {props.data.icon}/>
                    </div>
                     <div className="col-4">
                    <Temperature celcius={props.data.temperature} />
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