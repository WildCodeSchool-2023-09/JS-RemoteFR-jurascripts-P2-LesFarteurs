import { useState } from "react";
import PropTypes from "prop-types";
import dataGen from "../data/dataGen";
import "./_filters.scss";
import Popup from "../popup/Popup";
import { niveau } from "../../assets/P_Niveau.png";

function Filters({ handleSelectLev, handleSelectLoc }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const removeDuplicates = (array, property) => {
    const uniqueValues = new Set();
    return array.filter((item) => {
      const value = item[property];
      if (!uniqueValues.has(value)) {
        uniqueValues.add(value);
        return true;
      }
      return false;
    });
  };
  return (
    <section className="filtersContainer">
      <div className="calendar">
        <img id="cal" src="/P_Date.png" alt="calendrier" />
        <button type="button" className="calendar">
          <select className="levelButton">
            <option value="" disabled selected hidden>
              Choisis la date
            </option>
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
            <img id="lev" src={niveau} alt="niveau" />
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
                <option value="conf">Confirmé</option>
                <option value="champ">Champion</option>
              </select>
            </button>
          </div>
        </div>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="infoLevel">
            <h3>Mon niveau</h3>
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
              <strong>Champion</strong> Tu fais de la compétition, les grosses
              vagues ne te font pas peur !
              <br />
              <br />
              <br />
              PS : Choisis bien ton équipement !
            </p>
          </div>
        </Popup>
      </div>
      <div className="localisation">
        <img id="loc" src="/P_Localisation.png" alt="localisation" />
        <button type="button" className="localisation">
          <select
            className="localisationButton"
            onChange={(event) => handleSelectLoc(event)}
          >
            <option value="" disabled selected hidden>
              Choisis ton département
            </option>
            {removeDuplicates(dataGen.dataSpots, "depName").map((dataSpot) => (
              <option key={dataSpot.dep} value={dataSpot.dep}>
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
  handleSelectLoc: PropTypes.func.isRequired,
  handleSelectLev: PropTypes.func.isRequired,
};
