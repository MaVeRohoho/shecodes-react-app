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
      <div className="units">
        <h2 id="temperature">
          {Math.round(props.celcius)}
          <span>
            °C |{" "}
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
      <div className="units">
        <h2 id="temperature">
          {Math.round(fahrenheit)}
          <span>
            <a href="/" onClick={convertCelcius}>
              °C {" "}
            </a>
            | °F
          </span>
        </h2>
      </div>
    );
  }
}