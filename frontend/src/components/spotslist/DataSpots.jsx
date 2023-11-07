/* eslint-disable react/self-closing-comp */
import Spots from './assets/Spots'

const dataSpots = [
  {
    id: "SS1",
    gps: "Lat:43.69106669834545 , Long:7.27919241979722",
    name: "Nice - Promenade des Anglais Est - Alpes-Maritimes",
    imgSrc:
      "dog-2289451_1280.jpg",
    intro:
      "Une seule vague par décennies, de plus imprévisible, on peut y apercevoir un surfeur pas très matinal en tee shirt jaune quasiment tous les jours, vous pouvez pas le louper !",
    desc: "Vous pouvez attendre la vague en mangeant des glaces, je vous conseille à la framboise !",
  },
  {
    id: "SS2",
    gps: "Lat:43.28516314116665 , Long:3.529026975365399",
    name: "Cap d'Agde - Plade du Mole - Hérault",
    imgSrc: "",
    desc: "La plage du Mole offre un spot de surf idéal lorsque les conditions de houles sont propices à la formation de vagues. Agde étant une station balnéaire reconnue, attention à la fréquentation en saison.",
    intro:
      "Point positif, le spot profite de nombreuses commodités à proximité (restaurants, bars, ...). Il n'y a pas de danger particulier sur ce spot qui s'adresse à tous les pratiquants, débutants à confirmés.",
  },
  {
    id: "SS3",
    gps: "Lat:41.93595848347769 , Long:8.621024342983032",
    name: "Ajaccio - Capo di Feno - Corse",
    imgSrc: "",
    desc: "Le Capo di Feno abrite un petit coin de paradis azur. Si les vagues ne sont pas toujours au rendez-vous, le spot de surf, ses petites paillottes et son surf club vous donneront envie de revenir.",
    intro:
      "Perdu dans un cadre sauvage au milieu du cap à l'ouest d'Ajaccio et surplombé pas sa tour en ruines, ce beach break à l'eau turquoise permet de surfer dans un environnement idyllique. Lorsque de belles houles sont au rendez-vous, les sessions peuvent être magiques, sinon pensez au Paddle ou au kayak.",
  },
  {
    id: "SSO1",
    gps: "Lat:43.37667854866965 , Long:-1.7805677824278443",
    name: "Hendaye - Sokoburu - Pays Basque",
    imgSrc: "",
    desc: "Idéal pour débuter dans le surf ou un autre sport de glisse, le beach break de Sokoburu tient son nom du casino éponyme. Tous types de sports de glisse y sont pratiqués : kayak, SUP, bobyboard, longboard, surf, ...",
    intro:
      "Du fait de sa proximité avec le centre ville de Hendaye, le spot est très fréquenté surtout l'été. Le stationnement est payant.",
  },
  {
    id: "SSO2",
    gps: "Lat:43.70965724440656 , Long:-1.4392527381729847",
    name: "Seignosse - Le Penon - Landes",
    imgSrc: "",
    desc: "Le spot du Penon offre un joli cadre pour le surf. Située face à la petite ville de Seignosse, la plage est bordée de dunes préservées. Comme partout dans le coin, le surf y est omniprésent. Vous y trouverez tout ce qu'on est en droit d'attendre d'un spot de surf urbain.",
    intro:
      "Écoles de surf, location de planches, bars et même un skatepark histoire de rouler un peu après votre session. La plage est surveillée, du moins pendant la saison touristique, l'été. Attention tout de même aux baïnes (courants) qui peuvent de temps à autres occasionner quelques frayeurs.",
  },
  {
    id: "SSO3",
    gps: "Lat:45.00263680291888 , Long:-1.2044503307609156",
    name: "Lacanau - La Centrale - Gironde",
    imgSrc: "",
    desc: "Situé en plein centre de Lacanau, cette plage est bondée en haute saison. Les surfeurs locaux préfèrent donc éviter cette plage surpeuplée pour se rabattre sur les spots de surf alentours : La Sud et La Nord. ",
    intro:
      "Le beach break de La Centrale offre pourtant un cadre de surf idéal avec sa situation urbaine, car précisons que le centre-ville de Lacanau a littéralement les pieds dans les vagues. Un spot de surf qui peut convenir à un débutant s'il n'y a pas trop de monde à l'eau.",
  },
  {
    id: "SO1",
    gps: "Lat:45.73916020259519 , Long:-1.2457990882763914",
    name: "La Tremblade - Côte Sauvage - Charente-Maritime",
    imgSrc: "",
    desc: "Le spot de surf de la Côte Sauvage se trouve sur la presqu'île d'Arvert sur la bande de sable au nord-ouest du Zoo de La Palmyre.",
    intro:
      "C'est un long beach break qui propose de nombreux pics sur plusieurs kilomètres. Le spot conviendra aux surfeurs de tous niveaux. L'endroit est sauvage et compte de nombreux sentiers pour accéder aux plages de surf. Plusieurs parkings permettent d'accéder aux dunes qui bordent ce spot de glisse charentais.",
  },
  {
    id: "SO2",
    gps: "Lat:46.25519266044832 , Long:-1.5210299641023917",
    name: "Ile de Ré - Le Petit Bec - Charente-Maritime",
    imgSrc: "",
    desc: "Le spot du Petit Bec est un spot de surf de qualité, qui offre de belles vagues pour les surfeurs ayant de tous niveaux en fonction des périodes de l'année.",
    intro:
      "C'est un spot très apprécié des surfeurs de la région grâce à ses vagues régulières et puissantes, qui peuvent atteindre facilement 2 mètres de hauteur en période de bonne houle. La plage du Petit Bec se trouve à l'extrémité nord de l'île, près du phare des Baleines, et est accessible en voiture, en vélo ou à pied depuis les Portes-en-Ré. Il y a plusieurs parkings dans les environs, ainsi qu'une aire de pique-nique et des toilettes publiques.",
  },
  {
    id: "SO3",
    gps: "Lat:46.489084205333576 , Long:-1.781196033078667",
    name: "Les Sables-d'Olonnes - Vendée",
    imgSrc: "",
    desc: "Situé au niveau de la baie de la ville des Sables-d'Olonne, ce beach break propose un spot de repli orienté sud, voir sud-ouest à son extremité. La cité balnéaire offre tout le confort possible pour vos after sessions surf.",
    intro:
      "Le surf y est facile pour les débutants, à condition seulement qu'il y ait des vagues car la configuration du spot nécessite de bien checker les prévisions de vagues ou notre surf report avant d'espérer se mettre à l'eau sur la plage des Sables-d'Olonne.",
  },
  {
    id: "NO1",
    gps: "Lat:47.521385780277114 , Long:-3.1565533991256167",
    name: "Saint-Pierre-Quiberon - Port Blanc - Morbihan",
    imgSrc: "",
    desc: "La commune de Saint-Pierre-Quiberon est une ville du Morbihan réputée pour ses spots de surf. Située à l'entrée de la presqu'île de Quiberon, on y trouve les trois principaux spots de surf de la côte sauvage : Port Blanc, Port Rhu et Port Bara.",
    intro:
      "Ceux-ci font partie de la Côte Sauvage qui est un haut lieu du surf en Bretagne. Lorsque le surf report prévoit de belles conditions de vagues il ne faut pas hésiter à y faire un tour, ne serait-ce que pour contempler le spectacle des vagues que peut offrir la Côte Sauvage.",
  },
  {
    id: "NO2",
    gps: "Lat:48.19843358347464 , Long:-4.5593149584212345",
    name: "Crozon - La Palue - Finistère",
    imgSrc: "",
    desc: "Un spot de surf réputé qui prend de plein fouet les houles venant du large de la pointe bretonne. Ce beach break est un coin sauvage où il fait bon surfer à marée basse ou mi-marée.",
    intro:
      "On y surf tout au long de l'année avec une préférence pour l'automne, quand les forte houles donnent de bonnes prévisions de vagues et que l'eau n'est pas encore trop fraîche. Notez qu'en raison des courants, la baignade est interdite !",
  },
  {
    id: "N1",
    gps: "Lat:49.571055688498475 , Long:-1.8492953420046754",
    name: "Siouville - Plage de la Hague - Manche",
    imgSrc: "",
    desc: "Le spot de Siouville est le spot de surf le plus réputé de Normandie. C'est un beach break ouvert à la houle venant de l'ouest et donc de l'Atlantique. Il est praticable par les surfeurs de tous niveaux.",
    intro:
      "Autrefois surtout connu des véliplanchistes pour avoir accueilli les championnats de France de planche à voile Siouville a vu le surf s'imposer au fil des années.",
  },
  {
    id: "N2",
    gps: "Lat:50.889032279674524 , Long:1.6612802462551723",
    name: "Wissant - Wissant plage - Pas-de-Calais",
    imgSrc: "",
    desc: "Wissant offre un spot de surf situé à une vingtaine de kilomètres de Calais. Un spot surtout fréquenté par les windsurf ou les kitesurf du fait de son exposition au vent onshore.",
    intro:
      "Il est possible pour les surfeurs, si la météo se présente bien d'y voir quelques bonnes vagues. Il faut donc bien vérifier les surf report et la météo sur Surf Sentinel avant de s'y rendre pour être sûr que la houle soit au rendez-vous.",
  },
];

export default dataSpots;
