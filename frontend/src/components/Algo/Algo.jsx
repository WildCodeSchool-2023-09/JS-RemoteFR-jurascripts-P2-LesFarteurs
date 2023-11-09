/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-no-bind */

import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../filters/Filters";
import Spots from "../spots/Spots";

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

function Algo() {
  const [localisation, setLocalisation] = useState("100");
  const [userLevel, setUserLevel] = useState("novice");
  const [date, setDate] = useState("today");

  const [data, setData] = useState({
    temperature_2m: "",
    weathercode: "",
    wave_height: "",
    windspeed_10m: "",
    winddirection_10m: "",
  });

  // Fontion pour récupérer : localisation, userLevel, data dans Filters
  function handleSelectLoc(event) {
    setLocalisation(event.target.value);
    console.log(localisation);
  }
  function handleSelectLev(event) {
    setUserLevel(event.target.value);
    console.log(userLevel);
  }
  function handleSelectDate(event) {
    setDate(event.target.value);
    console.log(date);
  }

  // Récupération des données API :

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
    <>
      <Filters
        handleSelectLoc={handleSelectLoc}
        handleSelectDate={handleSelectDate}
        handleSelectLev={handleSelectLev}
      />
      <Spots
        data={data}
        meteo={meteo}
        wind={wind}
        weathercode={data.weathercode}
        temperature_2m={data.temperature_2m}
        wave_height={data.wave_height}
        windspeed_10m={data.windspeed_10m}
        winddirection_10m={data.winddirection_10m}
      />
    </>
  );
}

export default Algo;
