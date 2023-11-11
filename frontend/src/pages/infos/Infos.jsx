import "./_infos.scss";

function Infos() {
  return (
    <div className="infos">
      {" "}
      Infos et consignes;
      <section className="condition">
        <h1>
          Comprendre les conditions météos et le choix de ton niveau de surf
        </h1>
        <h2> Les prévisions de conditions de surf</h2>
        <p>
          Ce site web choisi le spot idéal en fonction de la houle et des
          conditions météo(Vent, direction du vent, soleil). Pour comprendre ces
          données, une explication vous est proposé ci-dessous.
        </p>
        <p>
          Aujourd'hui, de nombreux sites internet offrent des prévisions fiables
          de houle et de vagues. Mais savez-vous les exploiter ? Voici les clés
          de compréhension qui vous aideront à décoder facilement les
          informations utiles pour optimiser vos sessions de surf.
        </p>
        <p>
          Les planches sont sur le toit, les combinaisons sont dans le coffre,
          et après 6h de route ou 30min voir moins pour les plus chanceux, vous
          êtes enfin sur la plage. Mais les conditions vous permettront-elles de
          surfer ? Pour vous assurer de belles sessions, mieux vaut anticiper
          plutôt que de s'en remettre au hasard !
        </p>
        <p>
          En préambule, notez bien que l'on parlera de houle en mer et de vagues
          lorsque celle-ci est déformée en touchant la côte.
        </p>
        <h3>Tout d'abord, comment se créer une vague ?</h3>
        <p>
          Le vent est l'unique paramètre de la formation de la houle en mer, il
          peut aussi bien la renforcer que la réduire. 3 éléments peuvent alors
          agir pour construire la puissance de la houle.• La force avec laquelle
          le vent souffle sur l'eau • La durée de l'évènement météo, de quelques
          heures à plusieurs jours • La surface sur laquelle s'exprime
          l'évènement météo (de quelques Kms² à la moitié de l'atlantique nord
          par exemple). Une fois générée, la houle chemine indéfiniment tant
          qu'elle ne trouve pas d'obstacle (vents contraires, haut fonds, îles
          et continents).
        </p>
        <h3>Parlons maintenant de la fameuse vague que tu vas surfer :</h3>
        <p>
          Un vent « Offshore » est un vent qui vient de la terre et va en
          direction de l'océan. Il va creuser la houle permettant de former une
          vague, lui donner une forme harmonieuse et sera le vent idéal pour une
          bonne session. Les fameux « tubes » se forment par exemples dans des
          conditions de vent offshore.
        </p>
        <p>
          À l'inverse, le vent « Onshore » souffle de l'océan vers la terre, il
          désordonne et couche les vagues, dégradant ainsi la qualité d'une
          session mais reste reste cool pour un débutant.
        </p>
      </section>
      <section className="definition">
        <p>image tableau</p>

        <h3>Le choix du niveau de surf :</h3>
        <p>image tableau</p>
        <p>
          Niveau : Novice = Savoir nager un minimum, jamais surfer, connait
          aucune règle ds l'eau et les dangers
          <br />
          Bon = Savoir nager, comprends l'eau un minimum(courant, remou, la
          mousse, une vague), connait les règles(respect des autres, bien se
          placer et revenir sans gêner..) et les dangers(secouer, courant,
          planches et humains..), tiens un minimum en équilibre.
          <br />
          Maîtrise = Gères tout ça ! ^^
        </p>
        <p>
          Hauteur / Swell : La hauteur de la vague décide la difficulté et le
          choix de sa planche (Longboard = Grande planche pr vague mole,
          Shortboard= petite planche pr vague rapide et figure)
        </p>
        <p>
          Vent : Le vent vient frotter l'eau donc : - Peu ou pas de vent permet
          un bon swell, la vague se forme parfaitement. - En vent Offshore &
          Onshore : Un vent moyen voir rapide va venir augmenter ou écraser le
          swell. - Autres vent: Plan d'eau perturbé.
        </p>
        <p>
          Direction : Vent Offshore = vent de terre - qui vient de l'opposé de
          l'océan permettant de lever la houle pr former LE fameux Tube(barel).
          Vent Onshore = vent de l'eau - vient applatir la houle permettant de
          surfer une vague tranquille de qualité aussi. Vent Cross = Tourbillon
          - te permet de faire la grasse matinée avec des pancakes. Glass = très
          calme.
        </p>
        <p>
          Equipements : - Corps : Eté : Short ; Short + icra(tee-shirt néopène)
          ; Combinaison shorty Printemps Automne : à ta sauce Hiver :
          Combinaison intégrale ; Combi intég + Cagoule + Chausson Crème visage
          all season. - Matériel : Planche en mousse pr les colisions avec
          toi-même et autrui & plus stable pr l'équilibre. Planche en epoxy,
          bois... pour les confirmés, tu gagnes en vitesse et virage.
        </p>
      </section>
      <section className="consignes">
        <h3>Consignes de sécurité </h3>
        <p>
          Prévention : Un bon petit-déjeuner, être déter, bien s'échauffer et
          bien s'équiper + crème visage. Jamais se trouver seul sur un spot,
          l'observer (courant, baîne, shorebreak), choisit la bonne « porte »
          pour rentrer dans l'eau. Danger - Call 112 & Let's Go !
        </p>
        <h3>Conseils entretien équipements:</h3>
        <p>
          Pour ta board, va voir un shaper du coin Ta combi est à laver apres
          chaque sortie pour une bonne durée de vie.
        </p>
      </section>
    </div>
  );
}

export default Infos;
