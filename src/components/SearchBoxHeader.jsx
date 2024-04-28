import React, { useState } from "react";
import logo from "../assets/weather_logo.png";

function SearchBoxHeader({ onSearchClick, isLoading }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickAction = (event) => {
    if (event.key === "Enter") {
      onSearchClick(inputValue);
      setInputValue("");
    }
  };

  const onCheckWeather = () => {
    onSearchClick(inputValue);
    setInputValue("");
  };

  return (
    <header className="main-header">
      <div className="title-view">
        <img className="header-logo" src={logo} alt="logo" />
        <h1>Weather Forecast</h1>
      </div>
      <div className="input-view">
        <div className="search-view">
          <input
            type="text"
            placeholder="Enter City Name"
            className="search-bar"
            onChange={(event) => handleChange(event)}
            value={inputValue}
            onKeyDown={(event) => handleClickAction(event)}
          />
          <button className="search-button" onClick={onCheckWeather}>
            {isLoading ? "Fetching..." : "Check Weather"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default SearchBoxHeader;
