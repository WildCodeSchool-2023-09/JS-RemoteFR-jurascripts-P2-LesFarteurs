import "./_infos.scss";
import { useEffect } from "react";
import Coolitude from "../../components/coolitude/Coolitude";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "../../styles/index.css";

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
          <h2>Tout comprendre sur le Surf et ses dangers</h2>
          <p>
            La première chose à se dire, c'est est-ce que je suis dans le bon
            état d'esprit aujourd'hui pour surfer ? Ta réponse est "oui" ?!
            Alors let's go !
            <br />
            <br />
            Les planches sont sur le toit, les combinaisons sont dans le coffre,
            et après 30 min de route ou 6h pour certains, vous êtes enfin sur la
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
            <h4>Tout d'abord, comment se créer une vague ?</h4>
            <p>
              Le vent est l'unique paramètre de la formation de la houle en mer,
              il peut aussi bien la renforcer que la réduire. Trois éléments
              peuvent alors agir pour construire la puissance de la houle : • La
              force avec laquelle le vent souffle sur l'eau, • La durée de
              l'évènement météo, de quelques heures à plusieurs jours, • La
              surface sur laquelle s'exprime l'évènement météo (de quelques Kms²
              à la moitié de l'atlantique nord par exemple). Une fois générée,
              la houle chemine indéfiniment tant qu'elle ne trouve pas
              d'obstacle (vents contraires, haut fonds, îles et continents).
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
              intermédiaire. Plus tu surfes plus tu progresses, c'est comme
              tout. L'Océan reste quelques fois imprévisible, il t'offrira un
              jour le meilleur et inversement, ça reste la nature !
            </p>
          </div>
          <img
            className="imgSurfeur"
            src="/public/surfeur4.jpg"
            alt="surfeur4"
          />
        </section>
        <section className="definition">
          <h2>Choisir son niveau de Surf & définitions :</h2>
          <section className="imgtableau">
            <img
              className="tableausurf"
              src="/public/tableausurf.png"
              alt="Tableau Surf"
            />
          </section>
          <h4>Niveaux</h4>
          <p>
            Novice = Savoir nager un minimum, avoir jamais ou peu surfer,
            connait aucune règle ds l'eau et les dangers.
            <br />
            <br />
            Intermédiaire = Savoir nager, comprend l’eau un minimum (courant,
            remou, la mousse, une vague), connait les règles (respect des
            autres, par où rentrer pour bien se placer et revenir sans gêner...)
            et les dangers (courant, ta position de planche et les autres
            surfeurs), tenir un minimum debout sur sa planche.
            <br />
            <br />
            <br />
            Confirmé = Gères tout ça ! 😉
          </p>
          <br />
          <br />
          <p>
            Champion = Tu fais de la compétition, les grosses vagues ne te font
            pas peur !
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
            planche (Longboard = Grande planche pr vague mole, Shortboard=
            petite planche pr vague rapide et figure)
          </p>
          <br />
          <p>
            Vent :
            <br />
            Le vent vient frotter l'eau donc : - Peu ou pas de vent permet un
            bon swell, la vague se forme parfaitement. - En vent Offshore &
            Onshore : Un vent moyen voir rapide va venir augmenter ou écraser le
            swell. - Autres vent: Plan d'eau perturbé.
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
            Vent Cross = Tourbillon - te permet de faire la grasse matinée avec
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
            Température chaude : Short + icra (tee-shirt néopène) ou combinaison
            shorty.
            <br />
            Température froide : Combinaison intégrale voir cagoule + chausson.
            <br />
            Crème visage toutes les saisons même sans soleil, les UV traversent
            quand même les nuages ! La planche de surf : En mousse pr les
            colisions avec toi-même et autrui. Position plus stable pour
            faciliter la pratique. En epoxy (mousse entouré de fibres collées)
            pour les confirmés, tu gagnes en vitesse et virage.
          </p>

          <h4>Conseils entretien équipements</h4>
          <p>
            Après chaque session, penses à laver tous les équipements à l'eau
            légèrement savonneuse, leur durée de vie mais aussi leur odeur n'en
            seront que meilleures ! Pour les petits impacts sur ta board, va
            voir un shaper du coin ! Bon surf !
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
            large. Se cogner à sa planche : apprendre la technique de base
            obligatoire. Accident entre surfeurs : savoir où se placer
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
            Danger imminent, s'il n'y a pas de Sauveteur (MNS) appelle le 112.
          </p>
          <br />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Infos;
