import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Filters from "../filters/Filters";
import Spots from "../spots/Spots";

function meteo(weatherCode) {
  if (weatherCode === 0) return "Ensoleillé";
  if (weatherCode >= 1 && weatherCode <= 3) return "Éclaircies";
  if (weatherCode >= 45 && weatherCode <= 48) return "Nuageux";
  if (weatherCode >= 51 && weatherCode <= 94) return "Pluvieux";
  if (weatherCode >= 95) return "Orage";
  return "";
}

function wind(windDirection) {
  if (windDirection >= 0 && windDirection < 22.5) return "N";
  if (windDirection >= 22.5 && windDirection < 67.5) return "NNE";
  if (windDirection >= 67.5 && windDirection < 112.5) return "NE";
  if (windDirection >= 112.5 && windDirection < 157.5) return "ENE";
  if (windDirection >= 157.5 && windDirection < 202.5) return "E";
  if (windDirection >= 202.5 && windDirection < 247.5) return "ESE";
  if (windDirection >= 247.5 && windDirection < 292.5) return "SE";
  if (windDirection >= 292.5 && windDirection < 337.5) return "SSE";
  return windDirection;
}

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
    console.info(localisation);
  }
  function handleSelectLev(event) {
    setUserLevel(event.target.value);
    console.info(userLevel);
  }
  function handleSelectDate(event) {
    setDate(event.target.value);
    console.info(date);
  }

  // Récupération des données API :

  const dataResponse = async () => {
    const marineResponse = await axios.get(
      "https://marine-api.open-meteo.com/v1/marine?latitude=44.9791&longitude=-1.0796&current=wave_height&timezone=Europe%2FBerlin"
    );

    const forecastResponse = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=44.9791&longitude=-1.0796&current=temperature_2m,weathercode,windspeed_10m,winddirection_10m&timezone=Europe%2FBerlin"
    );

    const { temperature, weatherCode, windSpeed, windDirection } =
      forecastResponse.data.current;
    const { waveHeight } = marineResponse.data.current;

    setData({
      temperature,
      weatherCode,
      waveHeight,
      windSpeed,
      windDirection,
    });
  };

  useEffect(() => {
    dataResponse();
  }, []);

  return (
    <>
      <Filters
        // eslint-disable-next-line react/jsx-no-bind
        handleSelectLoc={handleSelectLoc}
        // eslint-disable-next-line react/jsx-no-bind
        handleSelectDate={handleSelectDate}
        // eslint-disable-next-line react/jsx-no-bind
        handleSelectLev={handleSelectLev}
      />
      <Spots
        data={data}
        meteo={meteo}
        wind={wind}
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

Algo.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  handleSelectDate: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  handleSelectLoc: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  handleSelectLev: PropTypes.func.isRequired,
  data: PropTypes.shape({
    weatherCode: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    waveHeight: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    windDirection: PropTypes.string.isRequired,
  }).isRequired,
};
