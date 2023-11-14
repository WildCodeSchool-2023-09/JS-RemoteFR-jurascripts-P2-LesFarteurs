import React, { useState } from "react";
import "./_burger.scss";

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : "closed"}`}>
      <button type="button" onClick={toggleMenu} className="burger-button">
        <div className="burger-icon" />
      </button>
      <div className="menu-items">
        <a href="home">Accueil</a>
        <a href="info">Infos et définitions</a>
        <a href="contact">Contact</a>
      </div>
    </div>
  );
}

export default Burger;
