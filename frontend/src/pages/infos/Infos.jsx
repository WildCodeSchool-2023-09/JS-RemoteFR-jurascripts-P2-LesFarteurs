import "./_infos.scss";
import Coolitude from "../../components/coolitude/Coolitude";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Infos() {
  return (
    <>
      <Coolitude />
      <Navbar />
      <div className="infos">
        {" "}
        Infos et consignes;
        <section className="def">
          <h2> Définitions</h2>
          <h5>Baïne</h5>
          <p>bvgeohagpihbohefsgbsdfhnboesbomhesnthlb</p>
          <h5>Swell</h5>
          <p>dflmnjhpdfjshsfedmhbdsfmhhgf</p>
        </section>
        <section className="consigne">
          <h2>Consignes</h2>
          <h5>Les priorités à droite</h5>
          <p>srjhterjdtjrfdjdfkjf</p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Infos;
