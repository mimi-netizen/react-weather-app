import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherDay from "./WeatherDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    let apiKey = "311f1f45fee82242ab4086372ab360f5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coordinates]);

  if (loaded && forecast) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherDay data={forecast[1]} />
          </div>
          <div className="col">
            <WeatherDay data={forecast[2]} />
          </div>
          <div className="col">
            <WeatherDay data={forecast[3]} />
          </div>
          <div className="col">
            <WeatherDay data={forecast[4]} />
          </div>
          <div className="col">
            <WeatherDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
