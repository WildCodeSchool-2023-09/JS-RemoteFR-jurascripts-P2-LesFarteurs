/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import PropTypes from "prop-types";
import Array from "../array/Array";
import "./_spots.scss";

function Spots({
  temperature,
  windSpeed,
  windDirection,
  waveHeight,
  weatherCode,
  dataSpot,
}) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  // ajout du Carrousel

  return (
    <>
      <div className="spotsContainer">
        <button id="btnImg" type="button" onClick={toggleDescription}>
          <img className="imgSpot" src={dataSpot.imgSrc} alt="spot" />
        </button>
        <div className="infoSpot">
          <h4 className="titleSpot">{dataSpot.name}</h4>
          <div className="introSpot">
            <p>{dataSpot.intro}</p>
          </div>
          <div
            role="button"
            aria-hidden="true"
            className={`descriptionSpot ${
              isDescriptionVisible ? "visible" : "hidden"
            }`}
            onClick={toggleDescription}
          >
            <button
              id="plusMoins"
              type="button"
              className="toggleButton"
              onClick={toggleDescription}
            >
              {isDescriptionVisible ? "- " : "+ "}Description
            </button>{" "}
            {isDescriptionVisible ? <p>{dataSpot.desc}</p> : null}
          </div>
          <Array
            weatherCode={weatherCode}
            temperature={temperature}
            waveHeight={waveHeight}
            windSpeed={windSpeed}
            windDirection={windDirection}
          />
        </div>
      </div>
      {}
    </>
  );
}

export default Spots;

Spots.propTypes = {
  dataSpot: PropTypes.shape.isRequired,
  weatherCode: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  waveHeight: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.number.isRequired,
};
