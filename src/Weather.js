import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Nairobi</h1>
      <ul>
        <li>Wednesday 07:00am</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 0%</li>
            <li>Humidity 76%</li>
            <li>Wind 11km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}