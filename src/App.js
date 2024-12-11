import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />
        <p className="Footer">
        This page was coded by{" "}
        <a href="https://github.com/nombuso28" target="blank">
          Nombuso Melinda Ntsele
        </a>
        . It is available on{" "}
        <a
          href="https://https://github.com/Nombuso28/react-weather-app"
          target="blank"
        >
          GitHub{" "}
        </a>
        and is hosted by{" "}
        <a
          href="https://https://arenaya.netlify.app"
          target="blank"
        >
          Netlify
        </a>
        .
      </p>
      </div>
    </div>
  );
}