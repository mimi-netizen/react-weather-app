import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
