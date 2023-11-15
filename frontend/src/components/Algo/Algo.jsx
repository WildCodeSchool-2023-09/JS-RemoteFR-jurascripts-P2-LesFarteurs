/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import axios from "axios";
import Spots from "../spots/Spots";
import dataGen from "../data/dataGen";
import Filters from "../filters/Filters";

function Algo() {
  // useState pour récupérer les choix de l'utilisateur dans Filters

  const [userLevel, setUserLevel] = useState("novice");
  const [date, setDate] = useState("today");
  const [selectedDepartmentCoords, setSelectedDepartmentCoords] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  // useState pour récupérer les data des deux API
  const [data, setData] = useState({
    temperature_2m: 0,
    weathercode: 0,
    wave_height: 0,
    windspeed_10m: 0,
    winddirection_10m: 0,
  });

  // Fontion pour récupérer : localisation, userLevel, depuis Filters
  const handleSelectLoc = (event) => {
    const selectedDept = event.target.value;
    setSelectedDepartmentId(selectedDept);

    const selectedDepartment = dataGen.dataSpots.find(
      (dep) => dep.id === parseInt(selectedDept, 10)
    );

    if (selectedDepartment) {
      setSelectedDepartmentCoords({
        latitude: selectedDepartment.latitude,
        longitude: selectedDepartment.longitude,
      });
    }
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
      `https://marine-api.open-meteo.com/v1/marine?latitude=${selectedDepartmentCoords.latitude}&longitude=${selectedDepartmentCoords.longitude}&current=wave_height&timezone=Europe%2FBerlin`
    );

    const forecastResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${selectedDepartmentCoords.latitude}&longitude=${selectedDepartmentCoords.longitude}&current=temperature_2m,weathercode,windspeed_10m,winddirection_10m&timezone=Europe%2FBerlin`
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
  }, [selectedDepartmentCoords]);

  return (
    <>
      <Filters
        handleSelectLoc={handleSelectLoc}
        handleSelectDate={handleSelectDate}
        handleSelectLev={handleSelectLev}
      />
      <Spots
        selectedDepartmentCoords={selectedDepartmentCoords}
        weatherCode={data.weathercode}
        temperature={data.temperature_2m}
        waveHeight={data.wave_height}
        windSpeed={data.windspeed_10m}
        windDirection={data.winddirection_10m}
        selectedDepartmentId={selectedDepartmentId}
      />
    </>
  );
}

export default Algo;
