import "./_footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footerContainer">
      <p>&copy; Les Farteurs</p>
      <ul className="socialNetwork">
        <li>
          <Link to="/error">Facebook</Link>
        </li>
        <li>
          <Link to="/error">Instagram</Link>
        </li>
        <li>
          <Link to="/error">Twitter</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
