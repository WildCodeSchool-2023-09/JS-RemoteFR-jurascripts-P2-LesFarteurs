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
        <img id="cal" src="./src/assets/img/calendar.png" alt="calendrier" />
        <button type="button" className="calendar">
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
          <img id="lev" src="./src/assets/img/level.png" alt="niveau" />
          <div className="niveau">
            <button type="button" className="levelTitle">
              {" "}
              Niveau
              <select className="levelButton" onChange={handleSelectLev}>
                <option value="novice">Novice</option>
                <option value="inter">Intermédiaire</option>
                <option value="pro">Confirmé</option>
              </select>
            </button>

            <button
              type="button"
              className="infolevel"
              onClick={() => setButtonPopup(true)}
            >
              i
            </button>
          </div>
        </div>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="infoLevel">
            <h3>Mon niveau</h3>
            <br />
            <p>
              Novice = Prendre 2/3 cours avec un moniteur de surf. Savoir nager
              un minimum, jamais surfé, connait aucune règle dans l’eau et les
              dangers (regarde la rubrique "infos et définitions").
              <br />
              <br />
              intermédiaire = Savoir nager, comprend l’eau un minimum (courant,
              remou, la mousse, une vague), connait les règles (respect des
              autres, par où rentrer pour bien se placer et revenir sans
              gêner...) et les dangers (courant, ta position de planche et les
              autres surfeurs), tenir un minimum debout sur sa planche.
              <br />
              <br />
              Confirmé = gère tout ça ! 😉
              <br />
              <br />
              PS: Choisis bien ton équipement !
            </p>
          </div>
        </Popup>
      </div>

      <div className="localisation">
        <img
          id="loc"
          src="./src/assets/img/localisation.png"
          alt="localisation"
        />
        <button type="button" className="localisation">
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
}

export default Filters;

Filters.propTypes = {
  handleSelectDate: PropTypes.func.isRequired,
  handleSelectLoc: PropTypes.func.isRequired,
  handleSelectLev: PropTypes.func.isRequired,
};
