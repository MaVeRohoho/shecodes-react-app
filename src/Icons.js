import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
library.add(fal);
export default function Icons(props) {
  const codeMapping = {
    "01d": {
      prefix: "fal",
      icon: "sun",
    },
    "01n": {
      prefix: "fal",
      icon: "moon-stars",
    },
    "02d": {
      prefix: "fal",
      icon: "cloud-sun",
    },
    "02n": {
      prefix: "fal",
      icon: "moon-cloud",
    },
    "03d": {
      prefix: "fal",
      icon: "cloud",
    },
    "03n": {
      prefix: "fal",
      icon: "cloud",
    },
    "04d": {
      prefix: "fal",
      icon: "cloud-sun",
    },
    "04n": {
      prefix: "fal",
      icon: "clouds-moon",
    },
    "09d": {
      prefix: "fal",
      icon: "cloud-showers-heavy",
    },
    "09n": {
      prefix: "fal",
      icon: "cloud-moon-rain",
    },
    "10d": {
      prefix: "fal",
      icon: "cloud-moon-rain",
    },
    "10n": {
      prefix: "fal",
      icon: "cloud-moon-rain",
    },
    "11d": {
      prefix: "fal",
      icon: "thunderstorm-moon",
    },
    "11n": {
      prefix: "fal",
      icon: "thunderstorm-moon",
    },
    "13d": {
      prefix: "fal",
      icon: "snowflakes",
    },
    "13n": {
      prefix: "fal",
      icon: "snowflakes",
    },
    "50d": {
      prefix: "fal",
      icon: "fog",
    },
    "50n": {
      prefix: "fal",
      icon: "fog",
    },
  };
  return (
    <FontAwesomeIcon
      icon={[codeMapping[props.code].prefix, codeMapping[props.code].icon]}
    />
  );
}