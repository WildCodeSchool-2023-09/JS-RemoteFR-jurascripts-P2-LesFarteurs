/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
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
  selectedDepartmentId,
}) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isOthersVisible, setOthersVisible] = useState(false);
  const [carrouselSpot, setCarrouselSpot] = useState(window.innerWidth);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };
  const toggleOthers = () => {
    setOthersVisible(!isOthersVisible);
  };

  let filteredSpots = dataGen.dataSpots;

  if (selectedDepartmentId) {
    filteredSpots = dataGen.dataSpots.filter(
      (spot) => spot.id === parseInt(selectedDepartmentId, 10)
    );
  }

  // ajout du Carrousel
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
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        emulateTouch
      >
        {filteredSpots.map((dataSpot) => (
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
      </Carousel>
    );
  }

  return (
    <>
      {filteredSpots.map((dataSpot) => (
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
  selectedDepartmentId: PropTypes.number.isRequired,
};
