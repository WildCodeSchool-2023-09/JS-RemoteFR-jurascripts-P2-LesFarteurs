import { Link } from "react-router-dom";
import "./_navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/infos">Infos et définitions</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
