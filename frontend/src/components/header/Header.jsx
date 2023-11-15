import "./_header.scss";

function Header() {
  return (
    <header>
      <div className="mask">
        <img
          className="bandeau"
          src="/Bandeau-men-surfing3.jpg"
          alt="bandeau"
        />
      </div>
      <div>
        <h1 className="title">Surf au bon endroit !</h1>
      </div>
      <br />
      <div className="subtitle">
        <p>
          Simple : Choisis la date, ton niveau de surf et le département où tu
          veux surfer. Si les condtions météos sont réunies, un ou plusieurs
          spots te sont proposés en suivant !
        </p>
      </div>
    </header>
  );
}

export default Header;
