import "./_array.scss";
import PropTypes from "prop-types";

function Array({
  temperature,
  waveHeight,
  windSpeed,
  weatherCode,
  windDirection,
}) {
  // fonction pour transformer les weathercode en strings
  const meteo = (weatherC) => {
    if (weatherC === 0) return "Ensoleillé";
    if (weatherC >= 1 && weatherC <= 3) return "Éclaircies";
    if (weatherC >= 45 && weatherC <= 48) return "Nuageux";
    if (weatherC >= 51 && weatherC <= 94) return "Pluvieux";
    if (weatherC >= 95) return "Orage";
    return "";
  };

  // fonction pour transformer les windDirection en strings
  const wind = (windDir) => {
    if (windDir >= 0 && windDir < 22.5) return "Nord";
    if (windDir >= 22.5 && windDir < 67.5) return "Nord Nord Est";
    if (windDir >= 67.5 && windDir < 112.5) return "Nord Est";
    if (windDir >= 112.5 && windDir < 157.5) return "Est Nord Est";
    if (windDir >= 157.5 && windDir < 202.5) return "Est";
    if (windDir >= 202.5 && windDir < 247.5) return "Est Sud Est";
    if (windDir >= 247.5 && windDir < 292.5) return "Sud Est";
    if (windDir >= 292.5 && windDir < 337.5) return "Sud Sud Est";
    return windDir;
  };

  return (
    <div className="dataContainer">
      <span className="weather">
        <img src="./src/assets/img/ensoleillé.png" alt="logo1" />
        {meteo(weatherCode)}
      </span>

      <span className="temp">
        <img src="./src/assets/img/temp.png" alt="logo2" />
        {temperature}°C
      </span>

      <span className="waveHeight">
        <img src="./src/assets/img/waveHeight.png" alt="logo3" />
        {waveHeight} m
      </span>

      <span className="windS">
        <img src="./src/assets/img/windSD.png" alt="logo4" />
        {windSpeed} km/h
      </span>
      <span className="windD">{wind(windDirection)}</span>
    </div>
  );
}

export default Array;

Array.propTypes = {
  weatherCode: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  waveHeight: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.number.isRequired,
};
