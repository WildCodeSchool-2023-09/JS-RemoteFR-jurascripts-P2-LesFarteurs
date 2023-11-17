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
    if (weatherC === 0)
      return { label: "Ensoleillé", image: "/ensoleillé.png" };
    if (weatherC >= 1 && weatherC <= 3)
      return { label: "Éclaircies", image: "/eclaircies.png" };
    if (weatherC >= 45 && weatherC <= 48)
      return { label: "Nuageux", image: "/nuageux.png" };
    if (weatherC >= 51 && weatherC <= 94)
      return { label: "Pluvieux", image: "/pluvieux.png" };
    if (weatherC >= 95) return { label: "Orage", image: "/orage.png" };
    return { label: "", image: "" };
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
    if (windDir > 337.6) return "Nord";
    return windDir;
  };

  const weatherInfo = meteo(weatherCode);

  return (
    <div className="dataContainer">
      <span className="weather">
        <img src={weatherInfo.image} alt={weatherInfo.label} />
        {weatherInfo.label}
      </span>

      <span>
        <img src="./public/temp.png" alt="logo2" />
        {temperature}°C
      </span>

      <span>
        <img src="./public//waveHeight.png" alt="logo3" />
        {waveHeight} m
      </span>

      <span>
        <img src="./public/windSD.png" alt="logo4" />
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
