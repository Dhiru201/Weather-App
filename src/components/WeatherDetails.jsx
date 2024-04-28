import React from "react";
import currentDate from "../helper/dateFormatter.js";

function WeatherDetails({ weatherInfo }) {
  return (
    <>
      {weatherInfo && weatherInfo.sys && (
        <div className="weather-card">
          <p>{currentDate}</p>
          <h1 className="main-temp">
            <span>
              {(weatherInfo.main ? weatherInfo.main.temp - 273.15 : 0).toFixed(
                1
              ) + "°C"}
            </span>
          </h1>
          <h2 className="location">
            {weatherInfo.name}, {weatherInfo.sys.country}
          </h2>
          <p>Humidity: {weatherInfo.main.humidity} g/kg</p>
          <p>Wind Speed: {weatherInfo.wind.speed} m/s</p>
        </div>
      )}
    </>
  );
}

export default WeatherDetails;
