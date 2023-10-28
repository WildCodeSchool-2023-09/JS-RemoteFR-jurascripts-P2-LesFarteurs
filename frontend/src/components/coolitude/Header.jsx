/* eslint-disable react/self-closing-comp */
import "./header.scss";

function Header() {
  return (
    <header>
      <div className="intro">
        <h1>Surf sur ton spot !</h1>
        <br />
        <div className="subtitle">
          <h2> Sous-titre </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            voluptatibus possimus placeat? Ullam, iusto neque! Illo maiores
            incidunt vitae provident.æ
          </p>
        </div>
        <br />
        <div className="alert">
          <h3>Alerte</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
            alias!
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
