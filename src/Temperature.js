import "./Weather.css";
import React, { useState } from "react";
export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className= "tempnumber">
        <h2>
          {Math.round(props.celcius)}
          <span className ="unit">
            {" "}{" "}°C {" "}|{" "}
            <a href="/" onClick={convertFahrenheit}>
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="tempnumber">
        <h2>
          {Math.round(fahrenheit)}
          <span className ="unit">
            <a href="/" onClick={convertCelcius}>
             {" "}{" "} °C {" "}
            </a>
            |{" "} °F
          </span>
        </h2>
      </div>
    );
  }
}