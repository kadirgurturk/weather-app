import { WiCloudy,WiSnow,WiRain,WiDaySunny,WiFog } from "react-icons/wi";

const retrunIcon = (data) =>{
    if(data.includes("Rain")) return <WiRain color="white" size="4em" />
    if(data.includes("Sun") || data.includes("Clear")) return <WiDaySunny color="white" size="4em"/>
    if(data.includes("Snow")) return <WiSnow color="white" size="4em"/>
    if(data.includes("Clou")) return <WiCloudy color="white" size="4em"/>
    if(data.includes("Fog")) return <WiFog color="white" size="4em"/>

} 

export default retrunIcon;