import "./_infos.scss";
import { useEffect } from "react";
import Coolitude from "../../components/coolitude/Coolitude";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Surfeur4 from "../../assets/Surfeur4.jpg";
import tableausurf from "../../assets/tableausurf.png";

function Infos() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <Coolitude />
      <Navbar />
      <div className="infos">
        {" "}
        <section className="condition">
          <h1>Infos et définitions</h1>
          <h2>Tout comprendre sur le surf et ses dangers</h2>
          <p>
            <br />
            Les planches sont sur le toit, les combinaisons dans le coffre, et
            après 30 min de route ou 6h pour certains, vous êtes enfin sur la
            plage. Mais les conditions vous permettront-elles de surfer ?
            <br />
            <br />
            Pour vous assurer de belles sessions, mieux vaut anticiper plutôt
            que de s'en remettre au hasard !
          </p>
        </section>
        <section className="previsions">
          <div className="prev">
            <h2> Les prévisions de conditions de surf :</h2>
            <p>
              Ce site web choisit le spot idéal en fonction des conditions météo
              en mer et sur terre.
            </p>
            <h3>Tout d'abord, comment se créée une vague ?</h3>
            <p>
              Le vent est l'unique paramètre de la formation de la houle en mer,
              il peut aussi bien la renforcer que la réduire. Trois éléments
              peuvent alors agir pour construire la puissance de la houle :{" "}
              <br />• La force avec laquelle le vent souffle sur l'eau,
              <br />• La durée de l'évènement météo, de quelques heures à
              plusieurs jours,
              <br />• La surface sur laquelle s'exprime l'évènement météo (de
              quelques Kms² à la moitié de l'atlantique nord par exemple).
              <br />
              Une fois générée, la houle chemine indéfiniment tant qu'elle ne
              trouve pas d'obstacle (vents contraires, hauts fonds, îles et
              continents).
            </p>

            <h4>Parlons maintenant de la fameuse vague que tu vas surfer !</h4>
            <p>
              Un vent « Offshore » est un vent qui vient de la terre et va en
              direction de l'océan. Il va creuser la houle permettant de former
              une vague, lui donner une forme harmonieuse et sera le vent idéal
              pour une bonne session. Les fameux « tubes » se forment par
              exemples dans des conditions de vent offshore.
            </p>
            <p>
              À l'inverse, le vent « Onshore » souffle de l'océan vers la terre,
              il désordonne et couche les vagues, dégradant ainsi la qualité
              d'une session mais reste quand même cool pour débutant et
              intermédiaire.
              <br />
              Plus tu surfes, plus tu progresses, c'est comme tout.
              <br />
              L'Océan reste quelques fois imprévisible, il t'offrira un jour le
              meilleur et inversement, ça reste la nature !
            </p>
          </div>
          <img className="imgSurfeur" src={Surfeur4} alt="surfeur4" />
        </section>
        <section className="definition">
          <h2>Choisir son niveau de surf & définitions :</h2>
          <section className="imgtableau">
            <img className="tableausurf" src={tableausurf} alt="Tableau Surf" />
          </section>
          <h4>Niveaux</h4>
          <p>
            Novice &#x2794; Savoir nager un minimum, avoir jamais ou peu surfer,
            ne connaître aucune règle dans l'eau et les dangers.
            <br />
            <br />
            Intermédiaire &#x2794; Savoir nager, comprendre l’eau un minimum
            (courant, remou, la mousse, une vague), connaître les règles
            (respect des autres, par où rentrer pour bien se placer et revenir
            sans gêner...) et les dangers (courant, ta position de planche et
            les autres surfeurs), tenir un minimum debout sur sa planche.
            <br />
            <br />
            Confirmé &#x2794; Gérer tout ça ! 😉
          </p>
          <br />

          <p>
            Champion &#x2794; Tu fais de la compétition, les grosses vagues ne
            te font pas peur !
          </p>
          <h3>Définitions</h3>
          <p>
            On parle de houle en mer et de vagues lorsque celle-ci est déformée
            en touchant la côte.
          </p>
          <br />
          <p>
            Hauteur / Swell :
            <br />
            La hauteur de la vague décide la difficulté et le choix de sa
            planche (Longboard = grande planche pourr vague mole, Shortboard =
            petite planche pour vague rapide et figure).
          </p>
          <br />
          <p>
            Vent :
            <br /> - Peu ou pas de vent permet un bon swell, la vague se forme
            parfaitement.
            <br /> - En vent Offshore & Onshore : un vent moyen voir rapide va
            venir augmenter ou écraser le swell.
            <br /> - Autres vents : plan d'eau perturbé.
          </p>
          <br />
          <p>Direction : </p>
          <p>
            Vent Offshore = vent de terre - qui vient de l'opposé de l'océan
            permettant de lever la houle pour former LE fameux Tube (barel).
            <br />
            Vent Onshore = vent de l'eau - vient applatir la houle permettant de
            surfer une vague tranquille de qualité aussi.
            <br />
            Vent Cross = tourbillon - te permet de faire la grasse matinée avec
            des pancakes.
            <br />
            Vent Glass = très calme.
            <br />
            <br />
          </p>
        </section>
        <section className="consignes">
          <h2>Choix de l'équipement</h2>
          <p>
            Température chaude : short + icra (tee-shirt néopène) ou combinaison
            shorty.
            <br />
            Température froide : combinaison intégrale voir cagoule + chausson.
            <br />
            Crème visage toutes les saisons même sans soleil, les UV traversent
            quand même les nuages !
            <br />
            <br />
            La planche de surf :
            <br />
            En mousse pour les colisions avec toi-même et autrui. Position plus
            stable pour faciliter la pratique.
            <br /> En epoxy (mousse entourée de fibres collées) pour les
            confirmés, tu gagnes en vitesse et virage.
          </p>

          <h4>Conseils entretien équipements</h4>
          <p>
            Après chaque session, pense à laver tous les équipements à l'eau
            légèrement savonneuse, leur durée de vie mais aussi leur odeur n'en
            seront que meilleures ! Pour les petits impacts sur ta board, va
            voir le shaper du coin ! Bon surf !
          </p>
        </section>
        <section className="danger">
          <div className="titleDanger">
            <img src="/danger.png" alt="logo_danger" />
            <h2 id="dangerous">Les Dangers du Surf </h2>
          </div>
          <br />
          <p>Si c'est votre première sortie, prenez des cours de surf !</p>
          <p>
            La baïne : courant en forme de cercle pouvant te tirer vers le
            large. <br />
            Se cogner à sa planche : apprendre la technique de base obligatoire.
            <br /> Accident entre surfeurs : savoir où se placer.
            <br />
            Bien observer le plan d'eau permet d'assurer une sécurité à soi-même
            mais aussi celle des autres surfeurs.
            <br />
            Choisir la bonne « porte » pour rentrer dans l'eau évite de
            t'exposer aux courants, aux autres surfeurs et à des efforts
            inutiles.
            <br />
            Si tu es en difficulté les autres surfeurs sont là, n'hésite pas !
            Il existe une grande solidarité à l'eau mais c'est comme la marée,
            ça dépend de la Lune !
            <br />
            Danger imminent, s'il n'y a pas de sauveteur (MNS) appelle le 112 !
          </p>
          <br />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Infos;
