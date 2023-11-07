eslint-disable react/function-component-definition
import React, { useState } from 'react';
import './BurgerMenu.scss';
import Home from "./pages/home/Home";



const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? 'open' : 'closed'}`}>
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

export default BurgerMenu;

/




// /* eslint-disable react/function-component-definition */
// import "./_burger.scss";

// const Burger = () => {
//   return (
//     <div className="burgerContainer">
//       <h1>Burger</h1>

//       <p>Burger Page</p>
//     </div>
//   );
// };

// export default Burger;
