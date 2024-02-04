import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} />
            <div className="WeatherForecast-temperatures">
              <span className="max">{forecast[0].temp.max}°</span>
              <span className="min">{forecast[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "311f1f45fee82242ab4086372ab360f5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
