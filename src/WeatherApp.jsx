import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
export default function WeatherApp(){
    const [weatherInfo, setweatherInfo]=useState({
        city:"Jamshedpur",
        feelsLike: 26.36,
        humidity: 22,
        temp: 27.34,
        tempMax: 27.34,
        tempMin: 27.34,
        weather: "clear sky",
    });

    let updateInfo = (result) => {
        setweatherInfo(result);
    }

    return (<div style={{textAlign:"center"}}>
        <h1>Weather Made Simple </h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    );
}