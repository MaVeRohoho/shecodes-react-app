import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'

library.add(fal)

export default function Icons (props){
const codeMapping = {
"01d": "fal fa-sun",
"01n": "fal fa-moon-stars", 
"02d": "fal fa-cloud-sun", 
"02n": "fal fa-moon-cloud", 
"03d": "fal fa-cloud", 
"03n": "fal fa-cloud", 
"04d": "fal fa-clouds-sun", 
"04n": "fal fa-clouds-moon", 
"09d": "fal fa-cloud-showers-heavy", 
"09n": "fal fa-cloud-moon-rain", 
"10d": "fal fa-cloud-sun-rain", 
"10n": "fal fa-cloud-moon-rain", 
"11d": "fal fa-thunderstorm-sun", 
"11n": "fal fa-thunderstorm-moon", 
"13d": "fal fa-snowflake", 
"13n": "fal fa-snowflakes", 
"50d": "fal fa-fog", 
"50n": "fal fa-fog", 
};
return <FontAwesomeIcon icon={codeMapping[props.code]} />
}
