/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import dataGen from "../data/dataGen";
import "./_filters.scss";

const Filters = ({ handleSelectDate, handleSelectLev, handleSelectLoc }) => {
  return (
    <section className="filtersContainer">
      <div className="calendar">
        <img
          id="cal"
          src="./src/assets/img/calendar.png"
          alt="calendrier"
        ></img>
        <button className="calendar">
          Date
          <select
            className="levelButton"
            onChange={(event) => handleSelectDate(event)}
          >
            <option name="today" value="today">
              Aujourd'hui
            </option>
            <option name="tomorrow" value="tomorrow">
              Demain
            </option>
            <option name="dayAfterTmw" value="dayAfterTmw">
              Après-demain
            </option>
          </select>
        </button>
      </div>
      <div className="levels">
        <div className="levelButtonContainer">
          <img id="lev" src="./src/assets/img/level.png" alt="niveau"></img>
          <button className="levels">
            Niveau
            <select
              className="levelButton"
              onChange={(event) => handleSelectLev(event)}
            >
              <option id="level1" name="novice" value="novice">
                Novice
              </option>
              <option id="level2" name="inter" value="inter">
                Intermédiaire
              </option>
              <option id="level3" name="pro" value="pro">
                Confirmé
              </option>
            </select>
          </button>
        </div>
      </div>
      <div className="localisation">
        <img
          id="loc"
          src="./src/assets/img/localisation.png"
          alt="localisation"
        ></img>
        <button className="localisation">
          Localisation
          <select
            className="localisationButton"
            onChange={(event) => handleSelectLoc(event)}
          >
            {dataGen.departements.map((departement) => (
              <option
                key={departement.depName}
                id={departement.id}
                value={departement.id}
              >
                {departement.depName}
              </option>
            ))}
          </select>
        </button>
      </div>
    </section>
  );
};

export default Filters;
