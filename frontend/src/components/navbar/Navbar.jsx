/* eslint-disable react/self-closing-comp */
import "./navbar.scss";

function Navbar() {
  return (
    <section>
      <nav className="navbar">
        <ul className="links">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="infos">Infos et définitions</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="mask">
        <img
          className="bandeau"
          src="./src/assets/Bandeau-men-surfing2.jpg"
          alt="bandeau"
        />
      </div>
    </section>
  );
}

export default Navbar;
