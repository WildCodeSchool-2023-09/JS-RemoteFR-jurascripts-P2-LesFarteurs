/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import "./_burger.scss";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : "closed"}`}>
      <button onClick={toggleMenu} className="burger-button">
        <div className="burger-icon"></div>
      </button>
      <div className="menu-items">
        <a href="#">Home</a>
        <a href="#">Infos sur le Surf</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Burger;
