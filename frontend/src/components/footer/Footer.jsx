import "./footer.scss";

function Footer() {
  return (
    <footer className="footerContainer">
      <p>&copy; Les Farteurs</p>
      <ul className="socialNetwork">
        <li>
          <a href="Facebook">Facebook</a>
        </li>
        <li>
          <a href="Instagram">Instagram</a>
        </li>
        <li>
          <a href="Twitter">Twitter</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
