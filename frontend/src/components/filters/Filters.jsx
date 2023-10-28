/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
import { useState } from "react";
import "./filters.scss";

const Filters = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isLevelVisible, setLevelVisible] = useState(false);
  const [isLocationVisible, setLocationVisible] = useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };
  const toggleLevel = () => {
    setLevelVisible(!isLevelVisible);
  };
  const toggleLocalisation = () => {
    setLocationVisible(!isLocationVisible);
  };

  return (
    <section className="filtersContainer">
      <div className="calendar">
        <img src="./src/assets/img/calendar.png" alt="calendrier"></img>
        <button className="calendarButton" onClick={toggleCalendar}>
          Calendrier {isCalendarVisible ? "-" : "+"}
        </button>
      </div>
      <div className="levels">
        <div className="levelButtonContainer">
          <img
            src="./src/assets/img/level.png"
            alt="niveau"
            onClick={toggleLevel}
          ></img>
          <button className="levelButton" onClick={toggleLevel}>
            Niveau {isLevelVisible ? "-" : "+"}
          </button>
        </div>
        <ul className={isLevelVisible ? "visible" : "hidden"}>
          <li>
            <a href="noob">Novice</a>
          </li>
          <li>
            <a href="inter">Intermédiaire</a>
          </li>
          <li>
            <a href="pro">Confirmé</a>
          </li>
        </ul>
      </div>
      <div className="localisation">
        <img src="./src/assets/img/localisation.png" alt="localisation"></img>
        <button className="localisationButton" onClick={toggleLocalisation}>
          Localisation {isLocationVisible ? "-" : "+"}
        </button>
      </div>
    </section>
  );
};

export default Filters;
