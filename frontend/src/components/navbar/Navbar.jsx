/* eslint-disable react/self-closing-comp */
import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="links">
        <li>
          <a href="home">Accueil</a>
        </li>
        <li>
          <a href="infos">Infos</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
        <li>
          <a href="login">Login</a>
        </li>
      </ul>
      <div className="logo" alt="logo"></div>
    </nav>
  );
}

export default Navbar;
