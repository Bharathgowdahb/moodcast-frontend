import React from "react";
import "./AnimatedWeatherBg.css";

const Sunny = () => (
  <div className="weather-anim sunny-anim">
    <div className="sun"></div>
  </div>
);

const Rainy = () => (
  <div className="weather-anim rainy-anim">
    <div className="cloud"></div>
    <div className="rain">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="drop" />
      ))}
    </div>
  </div>
);

const Cloudy = () => (
  <div className="weather-anim cloudy-anim">
    <div className="cloud cloud-1"></div>
    <div className="cloud cloud-2"></div>
  </div>
);

const Snowy = () => (
  <div className="weather-anim snowy-anim">
    <div className="cloud"></div>
    <div className="snow">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="snowflake" />
      ))}
    </div>
  </div>
);

const Windy = () => (
  <div className="weather-anim windy-anim">
    <div className="cloud"></div>
    <div className="wind">
      <div className="wind-line"></div>
      <div className="wind-line"></div>
    </div>
  </div>
);

export default function AnimatedWeatherBg({ weather }) {
  switch ((weather || "").toLowerCase()) {
    case "sunny":
      return <Sunny />;
    case "rainy":
      return <Rainy />;
    case "cloudy":
      return <Cloudy />;
    case "snowy":
      return <Snowy />;
    case "windy":
      return <Windy />;
    default:
      return null;
  }
}
