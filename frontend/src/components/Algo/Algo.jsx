/* eslint-disable camelcase */
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Spots from "../spots/Spots";
import dataGen from "../data/dataGen";
import Filters from "../filters/Filters";
import "./_algo.scss";

function Algo() {
  const datas = useLoaderData();
  // useState pour récupérer les choix de l'utilisateur dans Filters
  const [carrouselSpot, setCarrouselSpot] = useState(window.innerWidth);
  const [userLevel, setUserLevel] = useState("");
  const [selectedDepartmentCoords, setSelectedDepartmentCoords] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

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
  };

  // les filtres de département ET de niveaux
  let filteredSpots = datas;

  if (selectedDepartmentId) {
    filteredSpots = datas.filter(
      (spot) => spot.dep === parseInt(selectedDepartmentId, 10)
    );

    if (selectedDepartmentId && userLevel === "novice") {
      filteredSpots = datas.filter(
        (spot) =>
          spot.dep === parseInt(selectedDepartmentId, 10) &&
          spot.wave_height <= dataGen.surfLevels[0].maxWaveHeight &&
          spot.windspeed_10m <= dataGen.surfLevels[0].maxWindSpeed
      );
    }
    if (userLevel === "inter") {
      filteredSpots = datas.filter(
        (spot) =>
          spot.dep === parseInt(selectedDepartmentId, 10) &&
          spot.wave_height <= dataGen.surfLevels[1].maxWaveHeight &&
          spot.windspeed_10m <= dataGen.surfLevels[1].maxWindSpeed
      );
    }
    if (userLevel === "conf") {
      filteredSpots = datas.filter(
        (spot) =>
          spot.dep === parseInt(selectedDepartmentId, 10) &&
          spot.wave_height <= dataGen.surfLevels[2].maxWaveHeight &&
          spot.windspeed_10m <= dataGen.surfLevels[2].maxWindSpeed
      );
    }
    if (filteredSpots.length === 0) {
      // eslint-disable-next-line no-alert
      alert("Désolé, il n'y a pas de spot au lieu recherché pour ton niveau !");
      setSelectedDepartmentId(null);
    }
  }
  if (userLevel) {
    if (userLevel === "novice") {
      filteredSpots = datas.filter(
        (spot) =>
          spot.dep === parseInt(selectedDepartmentId, 10) ||
          (spot.wave_height <= dataGen.surfLevels[0].maxWaveHeight &&
            spot.windspeed_10m <= dataGen.surfLevels[0].maxWindSpeed)
      );
    }
    if (userLevel === "inter") {
      filteredSpots = datas.filter(
        (spot) =>
          // spot.dep === parseInt(selectedDepartmentId, 10) ||
          spot.wave_height <= dataGen.surfLevels[1].maxWaveHeight &&
          spot.windspeed_10m <= dataGen.surfLevels[1].maxWindSpeed
      );
    }
    if (userLevel === "conf") {
      filteredSpots = datas.filter(
        (spot) =>
          spot.dep === parseInt(selectedDepartmentId, 10) &&
          spot.wave_height <= dataGen.surfLevels[2].maxWaveHeight &&
          spot.windspeed_10m <= dataGen.surfLevels[2].maxWindSpeed
      );
    }
    if (userLevel === "champ") {
      filteredSpots = datas.filter(
        (spot) =>
          spot.dep === parseInt(selectedDepartmentId, 10) &&
          spot.wave_height <= dataGen.surfLevels[3].maxWaveHeight &&
          spot.windspeed_10m <= dataGen.surfLevels[3].maxWindSpeed
      );
    }
    if (filteredSpots.length === 0) {
      // eslint-disable-next-line no-alert
      alert("Désolé, il n'y a pas de spot au lieu recherché pour ton niveau !");
      setSelectedDepartmentId(null);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setCarrouselSpot(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (carrouselSpot <= 768) {
    return (
      <>
        <Filters
          handleSelectLoc={handleSelectLoc}
          handleSelectLev={handleSelectLev}
        />
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showStatus={false}
          emulateTouch
        >
          {filteredSpots.map((spot) => (
            <Spots
              dataSpot={spot}
              selectedDepartmentCoords={selectedDepartmentCoords}
              weatherCode={spot.weathercode}
              temperature={spot.temperature_2m}
              waveHeight={spot.wave_height}
              windSpeed={spot.windspeed_10m}
              windDirection={spot.winddirection_10m}
              selectedDepartmentId={selectedDepartmentId}
              key={spot.dep}
            />
          ))}
        </Carousel>
      </>
    );
  }
  return (
    <>
      <Filters
        handleSelectLoc={handleSelectLoc}
        handleSelectLev={handleSelectLev}
      />
      {filteredSpots.map((spot) => (
        <Spots
          dataSpot={spot}
          selectedDepartmentCoords={selectedDepartmentCoords}
          weatherCode={spot.weathercode}
          temperature={spot.temperature_2m}
          waveHeight={spot.wave_height}
          windSpeed={spot.windspeed_10m}
          windDirection={spot.winddirection_10m}
          selectedDepartmentId={selectedDepartmentId}
          key={spot.dep}
        />
      ))}
    </>
  );
}

Algo.loader = () => {
  let newDatas = [];
  dataGen.dataSpots.forEach(async (dataSpot) => {
    const newArray = newDatas;

    const marineResponse = await axios.get(
      `https://marine-api.open-meteo.com/v1/marine?latitude=${dataSpot.latitude}&longitude=${dataSpot.longitude}&current=wave_height&timezone=Europe%2FBerlin`
    );

    const forecastResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${dataSpot.latitude}&longitude=${dataSpot.longitude}&current=temperature_2m,weathercode,windspeed_10m,winddirection_10m&timezone=Europe%2FBerlin`
    );

    const { temperature_2m, weathercode, windspeed_10m, winddirection_10m } =
      forecastResponse.data.current;
    const { wave_height } = marineResponse.data.current;

    newArray.push({
      ...dataSpot,
      temperature_2m,
      weathercode,
      wave_height,
      windspeed_10m,
      winddirection_10m,
    });

    newDatas = newArray;
  });
  return newDatas;
};

export default Algo;
