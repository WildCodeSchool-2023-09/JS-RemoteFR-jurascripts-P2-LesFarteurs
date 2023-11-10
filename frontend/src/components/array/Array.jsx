import "./_array.scss";
import PropTypes from "prop-types";

function Array({ data, meteo, wind }) {
  return (
    <div className="dataContainer">
      <span className="weather">
        <img src="./src/assets/img/ensoleillé.png" alt="logo1" />
        {meteo(data.weatherCode)}
      </span>

      <span className="temp">
        <img src="./src/assets/img/temp.png" alt="logo2" />
        {data.temperature}°C
      </span>

      <span className="waveHeight">
        <img src="./src/assets/img/waveHeight.png" alt="logo3" />
        {data.waveHeight} m
      </span>

      <span className="windS">
        <img src="./src/assets/img/windSD.png" alt="logo4" />
        {data.windSpeed} km/h
      </span>
      <span className="windD">{wind(data.windDirection)}</span>
    </div>
  );
}

export default Array;

Array.propTypes = {
  meteo: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  data: PropTypes.shape({
    weatherCode: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    waveHeight: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    windDirection: PropTypes.string.isRequired,
  }).isRequired,
};
