/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import data from "../data/data";
import "./_filters.scss";

const Filters = () => {
  const [localisation, setLocalisation] = useState("1");
  const [userLevel, setUserLevel] = useState("novice");
  const [date, setDate] = useState("today");

  function handleSelectLoc(event) {
    setLocalisation(event.target.value);
  }
  function handleSelectLev(event) {
    setUserLevel(event.target.value);
  }
  function handleSelectDate(event) {
    setDate(event.target.value);
  }

  return (
    <section className="filtersContainer">
      <div className="calendar">
        <img
          id="cal"
          src="./src/assets/img/calendar.png"
          alt="calendrier"
        ></img>
        <button className="calendar" onChange={handleSelectDate}>
          Calendrier
          <select className="levelButton">
            <option value="today">Aujourd'hui</option>
            <option value="tomorrow">Demain</option>
            <option value="dayAfterTmw">Après-demain</option>
          </select>
        </button>
      </div>
      <div className="levels">
        <div className="levelButtonContainer">
          <img id="lev" src="./src/assets/img/level.png" alt="niveau"></img>
          <button className="levels">
            Niveau
            <select className="levelButton" onChange={handleSelectLev}>
              <option value="novice">Novice</option>
              <option value="inter">Intermédiaire</option>
              <option value="pro">Confirmé</option>
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
          <select className="localisationButton" onChange={handleSelectLoc}>
            {data.departements.map((departement) => (
              <option key={departement.depName} value={departement.id}>
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
