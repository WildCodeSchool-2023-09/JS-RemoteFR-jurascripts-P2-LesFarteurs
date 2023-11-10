/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import PropTypes from "prop-types";
import Array from "../array/Array";
import dataGen from "../data/dataGen";
import "./_spots.scss";

function Spots({
  data,
  meteo,
  wind,
  temperature,
  windSpeed,
  windDirection,
  waveHeight,
  weatherCode,
}) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isOthersVisible, setOthersVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };
  const toggleOthers = () => {
    setOthersVisible(!isOthersVisible);
  };

  return (
    <>
      <div className="spotsContainer">
        <img className="imgSpot" onClick={toggleDescription} alt="" />
        <div className="infoSpot">
          <h4 className="titleSpot">Titre du spot</h4>
          <div className="introSpot">
            <p>
              Intro : Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis sed recusandae id
            </p>
          </div>
          <div
            className={`descriptionSpot ${
              isDescriptionVisible ? "visible" : "hidden"
            }`}
            onClick={toggleDescription}
          >
            <p className="toggleButton" onClick={toggleDescription}>
              {isDescriptionVisible ? "- " : "+ "}Description
            </p>{" "}
            {isDescriptionVisible ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                sed recusandae id, eaque nisi perferendis earum eius error
                doloribus ut.
              </p>
            ) : null}
          </div>
          <div
            className={`others ${isOthersVisible ? "visible" : "hidden"}`}
            onClick={toggleOthers}
          >
            <p className="toggleButton" onClick={toggleOthers}>
              {isOthersVisible ? "- " : "+ "}
              Autres infos
            </p>
            {isOthersVisible ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                ipsum soluta. Quod facere, sapiente earum laborum dignissimos
                blanditiis perspiciatis corporis!
              </p>
            ) : null}
          </div>
          <Array
            data={data}
            meteo={meteo}
            wind={wind}
            weathercode={weatherCode}
            temperature_2m={temperature}
            wave_height={waveHeight}
            windspeed_10m={windSpeed}
            winddirection_10m={windDirection}
          />
        </div>
      </div>

      {dataGen.dataSpots.map((dataSpot) => (
        <div className="spotsContainer">
          <img
            key={dataSpot.id}
            className="imgSpot"
            src={dataSpot.imgSrc}
            onClick={toggleDescription}
          />
          <div className="infoSpot">
            <h4 className="titleSpot">{dataSpot.name}</h4>
            <div className="introSpot">
              <p>{dataSpot.intro}</p>
            </div>
            <div
              className={`descriptionSpot ${
                isDescriptionVisible ? "visible" : "hidden"
              }`}
              onClick={toggleDescription}
            >
              <p className="toggleButton" onClick={toggleDescription}>
                {isDescriptionVisible ? "- " : "+ "}Description
              </p>{" "}
              {isDescriptionVisible ? <p>{dataSpot.desc}</p> : null}
            </div>
            <div
              className={`others ${isOthersVisible ? "visible" : "hidden"}`}
              onClick={toggleOthers}
            >
              <p className="toggleButton" onClick={toggleOthers}>
                {isOthersVisible ? "- " : "+ "}
                Autres infos
              </p>
              {isOthersVisible ? (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, ipsum soluta. Quod facere, sapiente earum laborum
                  dignissimos blanditiis perspiciatis corporis!
                </p>
              ) : null}
            </div>
            <Array
              data={data}
              meteo={meteo}
              wind={wind}
              weatherCode={weatherCode}
              temperature={temperature}
              waveHeight={waveHeight}
              windSpeed={windSpeed}
              windDirection={windDirection}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Spots;

Spots.propTypes = {
  meteo: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  weatherCode: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  waveHeight: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.string.isRequired,
  data: PropTypes.shape.isRequired,
};
