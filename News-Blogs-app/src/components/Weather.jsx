import axios from "axios";
import "./Weather.css";
import { useState } from "react";

function Weather() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("Casablanca");

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=923f8161dd4aa267d7d3f2fab7808987&units=metric`;

    const response = await axios.get(url);

    setData(response.data);
    console.log(response.data);
    setLocation("");
  };

  const getWeatherIcon = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return "bx bxs-sun";
      case "Clouds":
        return "bx bxs-cloud";
      case "Rain":
        return "bx bxs-cloud-rain";
      case "Snow":
        return "bx bxs-cloud-snow";
      case "Thumbderstorm":
        return "bx bxs-cloud-lightning";
      case "Haze":
      case "Mist":
        return "bx bxs-cloud";
      default:
        return "bx bxs-cloud";
    }
  };

  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">{data.name}</div>
        </div>

        <div className="search-location">
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
        </div>
      </div>
      <div className="weather-data">
        {/* {getWeatherIcon(data.weather ? data.weather[0].main : "")} */}
        <i
          className={getWeatherIcon(data.weather ? data.weather[0].main : "")}
        ></i>
        <div className="weather-type">
          {data.weather ? data.weather[0].main : null}
        </div>
        <div className="temp">
          {data.main ? Math.floor(data.main.temp) : null}°
        </div>
      </div>
    </div>
  );
}

export default Weather;
