import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          Coded by {""}{" "}
          <a href="https://github.com/mimi-netizen">Celyne Kydd</a>,
          open-sourced on {""}
          <a href="https://github.com/mimi-netizen/react-weather-app">
            Github
          </a>{" "}
          and hosted on {""}{" "}
          <a href="https://react-weather-project-codemom.netlify.app/">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
