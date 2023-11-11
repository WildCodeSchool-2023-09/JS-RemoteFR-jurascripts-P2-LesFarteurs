/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../filters/Filters";
import Spots from "../spots/Spots";

function Algo() {
  // useState pour récupérer les choix de l'utilisateur dans Filters
  const [localisation, setLocalisation] = useState("100");
  const [userLevel, setUserLevel] = useState("novice");
  const [date, setDate] = useState("today");

  // useState pour récupérer les data des deux API
  const [data, setData] = useState({
    temperature_2m: "",
    weathercode: "",
    wave_height: "",
    windspeed_10m: "",
    winddirection_10m: "",
  });

  // Fontion pour récupérer : localisation, userLevel, depuis Filters
  const handleSelectLoc = (event) => {
    setLocalisation(event.target.value);
    console.info(localisation);
  };
  const handleSelectLev = (event) => {
    setUserLevel(event.target.value);
    console.info(userLevel);
  };
  const handleSelectDate = (event) => {
    setDate(event.target.value);
    console.info(date);
  };

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
        weatherCode={data.weathercode}
        temperature={data.temperature_2m}
        waveHeight={data.wave_height}
        windSpeed={data.windspeed_10m}
        windDirection={data.winddirection_10m}
      />
    </>
  );
}

export default Algo;
