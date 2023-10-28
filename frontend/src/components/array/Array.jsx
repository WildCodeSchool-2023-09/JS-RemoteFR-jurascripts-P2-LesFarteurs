/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/function-component-definition */
import axios from "axios";
import { useState } from "react";
import "./array.scss";

const GlobalArray = {
  swell_wave_height: "12",
  wave_direction: "",
  wave_period: "",
  windspeed_unit: "",
  winddirection_10m: "",
  temperature_unit: "",
  weathercode: "",
  precipation: "",
  sunrise: "",
  sunset: "",
};

const Array = () => {
  const [data, setData] = useState(GlobalArray);
  const [data2, setData2] = useState(GlobalArray);

  const getData = () => {
    axios
      .get(
        "https://marine-api.open-meteo.com/v1/marine?latitude=43.4806&longitude=-1.5568&hourly=wave_height,wave_direction,wave_period,swell_wave_height,swell_wave_direction&timezone=Europe%2FLondon"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=44.9791&longitude=-1.0796&current=precipitation&hourly=temperature_2m&daily=weathercode,sunrise,sunset"
      )
      .then((response) => {
        console.log(response.data2);
        setData2(response.data2);
      });
  };
  return (
    <div id="ArrayContainer">
      <p>
        {data2.swell_wave_height}
        {data2.wave_direction}
        {data.wave_period}
        {data.windspeed_unit}
        {data.winddirection_10m}
        {data.temperature_unit}
        {data.weathercode}
        {data.precipation}
        {data.sunrise}
        {data.sunset}
      </p>
      <button className="button" type="button" onClick={getData}>
        Get Data
      </button>
    </div>
  );
};

export default Array;
