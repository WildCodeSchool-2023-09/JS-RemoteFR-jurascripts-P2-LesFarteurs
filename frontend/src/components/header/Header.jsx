/* eslint-disable react/self-closing-comp */
import "./_header.scss";

function Header() {
  return (
    <header>
      <div className="title">
        <h1>Surf au bon endroit !</h1>
      </div>
      <br />
      <div className="subtitle">
        <p>
          Simple : choisis la date, ton niveau de surf et la ville la plus
          proche de chez toi. LE spot idéal est choisi en suivant !
        </p>
      </div>
    </header>
  );
}

export default Header;
