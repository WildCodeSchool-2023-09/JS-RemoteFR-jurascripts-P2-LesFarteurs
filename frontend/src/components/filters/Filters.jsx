import { useState } from "react";
import PropTypes from "prop-types";
import dataGen from "../data/dataGen";
import "./_filters.scss";
import Popup from "../popup/Popup";

function Filters({ handleSelectDate, handleSelectLev, handleSelectLoc }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <section className="filtersContainer">
      <div className="calendar">
        <img id="cal" src="./public/pictos/Date.png" alt="calendrier" />
        <button type="button" className="calendar">
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

      <div className="levelButtonContainer">
        <div className="levelButtonContainer">
          <button type="button" onClick={() => setButtonPopup(true)}>
            <img id="lev" src="./public/pictos/Niveau.png" alt="niveau" />
          </button>
          <div className="niveau">
            <button type="button" className="levelTitle">
              {" "}
              <select className="levelButton" onChange={handleSelectLev}>
                <option value="" disabled selected hidden>
                  Choisis ton niveau
                </option>
                <option value="novice">Novice</option>
                <option value="inter">Intermédiaire</option>
                <option value="pro">Confirmé</option>
              </select>
            </button>
          </div>
        </div>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="infoLevel">
            <h3>Mon niveau</h3>
            <br />
            <p>
              <strong>Novice</strong> Prendre 2/3 cours avec un moniteur de
              surf. Savoir nager un minimum, jamais surfé, ne connaît aucune
              règle dans l’eau ni les dangers (regarde la rubrique "Infos et
              définitions").
              <br />
              <br />
              <strong>Intermédiaire</strong> Savoir nager, comprend l’eau un
              minimum (courant, remou, la mousse, une vague), connait les règles
              (respect des autres, par où rentrer pour bien se placer et revenir
              sans gêner...) et les dangers (courant, ta position de planche et
              les autres surfeurs), tenir un minimum debout sur sa planche.
              <br />
              <br />
              <strong>Confirmé</strong> Gère tout ça ! 😉
              <br />
              <br />
              PS : Choisis bien ton équipement !
            </p>
          </div>
        </Popup>
      </div>

      <div className="localisation">
        <img
          id="loc"
          src="./public/pictos/Localisation.png"
          alt="localisation"
        />
        <button type="button" className="localisation">
          <select
            className="localisationButton"
            onChange={(event) => handleSelectLoc(event)}
          >
            {dataGen.dataSpots.map((dataSpot) => (
              <option key={dataSpot.id} id={dataSpot.id} value={dataSpot.id}>
                {dataSpot.depName}
              </option>
            ))}
          </select>
        </button>
      </div>
    </section>
  );
}

export default Filters;

Filters.propTypes = {
  handleSelectDate: PropTypes.func.isRequired,
  handleSelectLoc: PropTypes.func.isRequired,
  handleSelectLev: PropTypes.func.isRequired,
};
