/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./_navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="nav" className={isOpen ? "menu-open" : ""}>
      <ul className="links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/infos">Infos et définitions</Link>
        </li>
        <li>
          <Link to="/contact">Contacts</Link>
        </li>
      </ul>
      <div
        id="icons"
        className={`burger-menu ${isOpen ? "open" : "closed"}`}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
      >
        <span className="icon">{isOpen ? "\u2715" : "\u2630"}</span>
      </div>
    </nav>
  );
}

export default Navbar;
