import React from "react";
import "./Weather.css";
import { useEffect, useState } from "react";
import { getWeatherInfo } from "../services/apiService";
import SearchBoxHeader from "./SearchBoxHeader";
import WeatherDetails from "./WeatherDetails";
import Error from "./Error";

function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    function getUserGeoLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        const coordinates = position.coords;
        getWeatherDetails({ coordinates });
      });
    }
    getUserGeoLocation();
  }, []);

  async function getWeatherDetails({ city, coordinates }) {
    try {
      const weatherInfo = await getWeatherInfo({ city, coordinates });
      setIsLoading(false);
      setWeatherInfo(weatherInfo);
      setError("");
    } catch (error) {
      setWeatherInfo({});
      setError(
        error.message || "could not fetch details, please try again later."
      );
      setIsLoading(false);
    }
  }

  const handleSearchClick = (city) => {
    if (city != "") {
      setIsLoading(true);
      getWeatherDetails({ city });
    }
  };
  return (
    <>
      <SearchBoxHeader
        onSearchClick={handleSearchClick}
        isLoading={isLoading}
      />
      {!isLoading && error === "" && (
        <WeatherDetails weatherInfo={weatherInfo} />
      )}
      {!isLoading && error && (
        <Error title="An error occurred!" message={error} />
      )}
    </>
  );
}

export default Weather;
