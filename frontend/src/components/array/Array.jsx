/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./_array.scss";

function Array({
  data,
  meteo,
  wind,
  weathercode,
  temperature_2m,
  wave_height,
  windspeed_10m,
  winddirection_10m,
}) {
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
