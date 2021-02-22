import React from "react";

export default function Temperature (props){
const [unit, setUnit] = useState("celcius");
if (unit === "celcius") {

}
return (
<div className="units">
    <h2 id="temperature">{Math.round(props.data.temperature)}°</h2>
    <a href="#" id="celcius" className="unit">C  </a>  🌡
    <a href="#" id="fahrenheit" className="unit">   F</a>
</div>
) ;   
}else{
    return 
} 
}

