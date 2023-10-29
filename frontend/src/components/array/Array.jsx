/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import axios from "axios";
import { useState, useEffect } from "react";
import "./_array.scss";

const meteo = (weatherCode) => {
  if (weatherCode === 0) return "Ensoleillé";
  if (weatherCode >= 1 && weatherCode <= 3) return "Éclaircies";
  if (weatherCode >= 45 && weatherCode <= 48) return "Nuageux";
  if (weatherCode >= 51 && weatherCode <= 94) return "Pluvieux";
  if (weatherCode >= 95) return "Orage";
};

const wind = (windDirection) => {
  if (windDirection >= 0 && windDirection < 22.5) return "N";
  if (windDirection >= 22.5 && windDirection < 67.5) return "NNE";
  if (windDirection >= 67.5 && windDirection < 112.5) return "NE";
  if (windDirection >= 112.5 && windDirection < 157.5) return "ENE";
  if (windDirection >= 157.5 && windDirection < 202.5) return "E";
  if (windDirection >= 202.5 && windDirection < 247.5) return "ESE";
  if (windDirection >= 247.5 && windDirection < 292.5) return "SE";
  if (windDirection >= 292.5 && windDirection < 337.5) return "SSE";
  return windDirection;
};

function Array() {
  const [data, setData] = useState({
    temperature_2m: "",
    weathercode: "",
    wave_height: "",
    windspeed_10m: "",
    winddirection_10m: "",
  });

  const dataResponse = async () => {
    const marineResponse = await axios.get(
      "https://marine-api.open-meteo.com/v1/marine?latitude=44.9791&longitude=-1.0796&current=wave_height&timezone=Europe%2FBerlin"
    );

    const forecastResponse = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=44.9791&longitude=-1.0796&current=temperature_2m,weathercode,windspeed_10m,winddirection_10m&timezone=Europe%2FBerlin"
    );

    const { temperature_2m, weathercode, windspeed_10m, winddirection_10m } =
      forecastResponse.data.current;
    const { wave_height } = marineResponse.data.current;

    setData({
      temperature_2m,
      weathercode,
      wave_height,
      windspeed_10m,
      winddirection_10m,
    });
  };

  useEffect(() => {
    dataResponse();
  }, []);

  return (
    <div className="dataContainer">
      <span className="weather">
        <img src="./src/assets/img/ensoleillé.png" alt="logo1" />
        {meteo(data.weathercode)}
      </span>

      <span className="temp">
        <img src="./src/assets/img/temp.png" alt="logo2" />
        {data.temperature_2m}°C
      </span>

      <span className="waveHeight">
        <img src="./src/assets/img/waveHeight.png" alt="logo3" />
        {data.wave_height} m
      </span>

      <span className="windS">
        <img src="./src/assets/img/windSD.png" alt="logo4" />
        {data.windspeed_10m} km/h
      </span>
      <span className="windD">{wind(data.winddirection_10m)}</span>
    </div>
  );
}

export default Array;
