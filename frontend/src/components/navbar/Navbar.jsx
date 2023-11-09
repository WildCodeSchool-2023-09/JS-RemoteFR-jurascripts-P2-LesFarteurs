import "./_navbar.scss";

function Navbar() {
  return (
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
  );
}

export default Navbar;
