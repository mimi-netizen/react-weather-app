import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props?.data?.temp?.max || 0);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props?.data?.temp?.min || 0);
    return `${temperature}°`;
  }

  function day() {
    let date = props?.data ? new Date(props.data.dt * 1000) : new Date();
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day] || "";
  }

  if (!props?.data || !props.data.weather) {
    return null; // Return null or some fallback UI if data is not available
  }

  return (
    <div>
      <div className="WeatherForecast">{day()}</div>
      <WeatherIcon code={props.data.weather[0]?.icon} />
      <div className="WeatherForecast-temperatures">
        <span className="max">{maxTemperature()}</span>
        <span className="min">{minTemperature()}</span>
      </div>
    </div>
  );
}
