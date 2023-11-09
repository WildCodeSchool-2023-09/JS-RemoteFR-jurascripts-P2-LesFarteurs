/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/function-component-definition */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */

import { useState } from "react";
import Array from "../array/Array";
import dataGen from "../data/dataGen";
import "./_spots.scss";

const Spots = ({
  data,
  meteo,
  wind,
  temperature_2m,
  windspeed_10m,
  winddirection_10m,
  wave_height,
  weathercode,
}) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isOthersVisible, setOthersVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };
  const toggleOthers = () => {
    setOthersVisible(!isOthersVisible);
  };

  console.log(weathercode, temperature_2m, wave_height, windspeed_10m);
  return (
    <>
      <div className="spotsContainer">
        <img className="imgSpot" onClick={toggleDescription} />
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
            weathercode={weathercode}
            temperature_2m={temperature_2m}
            wave_height={wave_height}
            windspeed_10m={windspeed_10m}
            winddirection_10m={winddirection_10m}
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
              weathercode={weathercode}
              temperature_2m={temperature_2m}
              wave_height={wave_height}
              windspeed_10m={windspeed_10m}
              winddirection_10m={winddirection_10m}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Spots;
