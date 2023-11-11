import { useState } from "react";
import PropTypes from "prop-types";
import Array from "../array/Array";
import dataGen from "../data/dataGen";
import "./_spots.scss";

function Spots({
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
        <button type="button" onClick={toggleDescription}>
          <img className="imgSpot" alt="" />
        </button>
        <div className="infoSpot">
          <h4 className="titleSpot">Titre du spot</h4>
          <div className="introSpot">
            <p>
              Intro : Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis sed recusandae id
            </p>
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
              type="button"
              className="toggleButton"
              onClick={toggleDescription}
            >
              {isDescriptionVisible ? "- " : "+ "}Description
            </button>{" "}
            {isDescriptionVisible ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                sed recusandae id, eaque nisi perferendis earum eius error
                doloribus ut.
              </p>
            ) : null}
          </div>
          <div
            role="button"
            aria-hidden="true"
            className={`others ${isOthersVisible ? "visible" : "hidden"}`}
            onClick={toggleOthers}
          >
            <button
              type="button"
              className="toggleButton"
              onClick={toggleOthers}
            >
              {isOthersVisible ? "- " : "+ "}
              Autres infos
            </button>
            {isOthersVisible ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                ipsum soluta. Quod facere, sapiente earum laborum dignissimos
                blanditiis perspiciatis corporis!
              </p>
            ) : null}
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

      {dataGen.dataSpots.map((dataSpot) => (
        <div key={dataSpot.id} className="spotsContainer">
          <button type="button" onClick={toggleDescription}>
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
                type="button"
                className="toggleButton"
                onClick={toggleDescription}
              >
                {isDescriptionVisible ? "- " : "+ "}Description
              </button>{" "}
              {isDescriptionVisible ? <p>{dataSpot.desc}</p> : null}
            </div>
            <div
              role="button"
              aria-hidden="true"
              className={`others ${isOthersVisible ? "visible" : "hidden"}`}
              onClick={toggleOthers}
            >
              <button
                type="button"
                className="toggleButton"
                onClick={toggleOthers}
              >
                {isOthersVisible ? "- " : "+ "}
                Autres infos
              </button>
              {isOthersVisible ? (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, ipsum soluta. Quod facere, sapiente earum laborum
                  dignissimos blanditiis perspiciatis corporis!
                </p>
              ) : null}
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
      ))}
    </>
  );
}

export default Spots;

Spots.propTypes = {
  weatherCode: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  waveHeight: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.number.isRequired,
};
