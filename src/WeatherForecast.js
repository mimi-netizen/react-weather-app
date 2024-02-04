import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "311f1f45fee82242ab4086372ab360f5";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast">Thur</div>
          <WeatherIcon code="01d" />
          <div className="WeatherForecast-temperatures">
            <span className="max">19°</span>
            <span className="min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
