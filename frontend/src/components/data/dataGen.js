const departements = [
  {
    id: 100,
    depName: "Département",
  },
  {
    id: 6,
    depName: "Alpes-Maritimes",
    latNord: 44.361051257141,
    latSud: 43.480065494401,
  },
  {
    id: 14,
    depName: "Calvados",
    latNord: 49.429859840723,
    latSud: 48.752223582274,
    longEst: 0.44627431224134,
    longOuest: -1.1595014604014,
  },
  {
    id: 17,
    depName: "Charente-Maritime",
    latNord: 46.371051399922,
    latSud: 45.088810634907,
    longEst: 0.005823224821197,
    longOuest: -1.5614800452621,
  },
  {
    id: 2,
    depName: "Corse",
    latNord: 50.069271974234,
    latSud: 48.837795469902,
  },
  {
    id: 22,
    depName: "Côtes-d'Armor",
    latNord: 48.867411825697,
    latSud: 48.035478415172,
    longEst: -1.9089921410274,
    longOuest: -3.663669588163,
  },
  {
    id: 29,
    depName: "Finistère",
    latNord: 48.75230874743,
    latSud: 47.762638930067,
    longEst: -3.3880788564101,
    longOuest: -5.138001239929,
  },
  {
    id: 33,
    depName: "Gironde",
    latNord: 45.574691325999,
    latSud: 44.193811119459,
    longEst: 0.31506020240148,
    longOuest: -1.2617334302552,
  },
  {
    id: 34,
    depName: "Hérault",
    latNord: 43.969527164685,
    latSud: 43.212804132866,
  },
  {
    id: 35,
    depName: "Ille-et-Vilaine",
    latNord: 48.704854504824,
    latSud: 47.631356309182,
    longEst: -1.0168893967587,
    longOuest: -2.289084836122,
  },
  {
    id: 40,
    depName: "Landes",
    latNord: 44.532195517275,
    latSud: 43.487949116697,
    longEst: 0.13672631290526,
    longOuest: -1.524870110434,
  },
  {
    id: 50,
    depName: "Manche",
    latNord: 49.725557927402,
    latSud: 48.458282754255,
    longEst: -0.73732101904671,
    longOuest: -1.9472733176655,
  },
  {
    id: 56,
    depName: "Morbihan",
    latNord: 48.210884763611,
    latSud: 47.283069445657,
    longEst: -2.0357552590146,
    longOuest: -3.7321436369252,
  },
  {
    id: 59,
    depName: "Nord",
    latNord: 51.08854370897,
    latSud: 49.969186662527,
    longEst: 4.2279959931456,
    longOuest: 2.0677049871716,
  },
  {
    id: 62,
    depName: "Pas-de-Calais",
    latNord: 50.020975633738,
    latSud: 48.996158010558,
    longEst: 3.1883563131291,
    longOuest: 1.5577948179294,
  },
  {
    id: 64,
    depName: "Pyrénées-Atlantiques",
    latNord: 43.596401195938,
    latSud: 42.777515930774,
    longEst: 0.02629551293813,
    longOuest: -1.7908870919282,
  },

  {
    id: 85,
    depName: "Vendée",
    latNord: 47.083893903306,
    latSud: 46.266566974958,
    longEst: -0.53779518169029,
    longOuest: -2.3987614706025,
  },

  {
    id: 76,
    depName: "Seine-Maritime",
    latNord: 50.070851596042,
    latSud: 49.252262168305,
    longEst: 1.79022549105,
    longOuest: 0.065609431053556,
  },
  {
    id: 80,
    depName: "Somme",
    latNord: 50.366290636763,
    latSud: 49.571762327,
    longEst: 3.2030417908111,
    longOuest: 1.3796981484469,
  },
];

const dataSpots = [
  {
    id: "SS1",
    latitude: 43.69106669834545,
    longitude: 7.27919241979722,
    name: "Nice - Promenade des Anglais Est - Alpes-Maritimes",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    intro:
      "Une seule vague par décennies, de plus imprévisible, on peut y apercevoir un surfeur pas très matinal en tee shirt jaune quasiment tous les jours, vous pouvez pas le louper !",
    desc: "Vous pouvez attendre la vague en mangeant des glaces, je vous conseille à la framboise !",
    dep: 6,
  },
  {
    id: "SS2",
    latitude: 43.28516314116665,
    longitude: 3.529026975365399,
    name: "Cap d'Agde - Plade du Mole - Hérault",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "La plage du Mole offre un spot de surf idéal lorsque les conditions de houles sont propices à la formation de vagues.",
    intro:
      "Point positif, le spot profite de nombreuses commodités à proximité (restaurants, bars, ...). Il n'y a pas de danger particulier sur ce spot qui s'adresse à tous les pratiquants, débutants à confirmés.",
    dep: 34,
  },
  {
    id: "SS3",
    latitude: 41.93595848347769,
    longitude: 8.621024342983032,
    name: "Ajaccio - Capo di Feno - Corse",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Le Capo di Feno abrite un petit coin de paradis azur. Si les vagues ne sont pas toujours au rendez-vous, le spot de surf, ses petites paillottes et son surf club vous donneront envie de revenir.",
    intro:
      "Perdu dans un cadre sauvage au milieu du cap à l'ouest d'Ajaccio et surplombé pas sa tour en ruines, ce beach break à l'eau turquoise permet de surfer dans un environnement idyllique. Lorsque de belles houles sont au rendez-vous, les sessions peuvent être magiques, sinon pensez au Paddle ou au kayak.",
    dep: 2,
  },
  {
    id: "SSO1",
    latitude: 43.37667854866965,
    longitude: -1.7805677824278443,
    name: "Hendaye - Sokoburu - Pays Basque",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Idéal pour débuter dans le surf ou un autre sport de glisse, le beach break de Sokoburu tient son nom du casino éponyme. Tous types de sports de glisse y sont pratiqués : kayak, SUP, bobyboard, longboard, surf, ...",
    intro:
      "Du fait de sa proximité avec le centre ville de Hendaye, le spot est très fréquenté surtout l'été. Le stationnement est payant.",
    dep: 64,
  },
  {
    id: "SSO2",
    latitude: 43.70965724440656,
    longitude: -1.4392527381729847,
    name: "Seignosse - Le Penon - Landes",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Le spot du Penon offre un joli cadre pour le surf. Située face à la petite ville de Seignosse, la plage est bordée de dunes préservées. Comme partout dans le coin, le surf y est omniprésent. Vous y trouverez tout ce qu'on est en droit d'attendre d'un spot de surf urbain.",
    intro:
      "Écoles de surf, location de planches, bars et même un skatepark histoire de rouler un peu après votre session. La plage est surveillée, du moins pendant la saison touristique, l'été. Attention tout de même aux baïnes (courants) qui peuvent de temps à autres occasionner quelques frayeurs.",
    dep: 40,
  },
  {
    id: "SSO3",
    latitude: 45.00263680291888,
    longitude: -1.2044503307609156,
    name: "Lacanau - La Centrale - Gironde",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Situé en plein centre de Lacanau, cette plage est bondée en haute saison. Les surfeurs locaux préfèrent donc éviter cette plage surpeuplée pour se rabattre sur les spots de surf alentours : La Sud et La Nord. ",
    intro:
      "Le beach break de La Centrale offre pourtant un cadre de surf idéal avec sa situation urbaine, car précisons que le centre-ville de Lacanau a littéralement les pieds dans les vagues. Un spot de surf qui peut convenir à un débutant s'il n'y a pas trop de monde à l'eau.",
    dep: 33,
  },
  {
    id: "SO1",
    latitude: 45.73916020259519,
    longitude: -1.2457990882763914,
    name: "La Tremblade - Côte Sauvage - Charente-Maritime",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Le spot de surf de la Côte Sauvage se trouve sur la presqu'île d'Arvert sur la bande de sable au nord-ouest du Zoo de La Palmyre.",
    intro:
      "C'est un long beach break qui propose de nombreux pics sur plusieurs kilomètres. Le spot conviendra aux surfeurs de tous niveaux. L'endroit est sauvage et compte de nombreux sentiers pour accéder aux plages de surf. Plusieurs parkings permettent d'accéder aux dunes qui bordent ce spot de glisse charentais.",
    dep: 17,
  },
  {
    id: "SO2",
    latitude: 46.25519266044832,
    longitude: -1.5210299641023917,
    name: "Ile de Ré - Le Petit Bec - Charente-Maritime",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Le spot du Petit Bec est un spot de surf de qualité, qui offre de belles vagues pour les surfeurs ayant de tous niveaux en fonction des périodes de l'année.",
    intro:
      "C'est un spot très apprécié des surfeurs de la région grâce à ses vagues régulières et puissantes, qui peuvent atteindre facilement 2 mètres de hauteur en période de bonne houle. La plage du Petit Bec se trouve à l'extrémité nord de l'île, près du phare des Baleines, et est accessible en voiture, en vélo ou à pied depuis les Portes-en-Ré. Il y a plusieurs parkings dans les environs, ainsi qu'une aire de pique-nique et des toilettes publiques.",
    dep: 17,
  },
  {
    id: "SO3",
    latitude: 46.489084205333576,
    longitude: -1.781196033078667,
    name: "Les Sables-d'Olonnes - Vendée",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Situé au niveau de la baie de la ville des Sables-d'Olonne, ce beach break propose un spot de repli orienté sud, voir sud-ouest à son extrémité. La cité balnéaire offre tout le confort possible pour vos after sessions surf.",
    intro:
      "Le surf y est facile pour les débutants, à condition seulement qu'il y ait des vagues car la configuration du spot nécessite de bien checker les prévisions de vagues ou notre surf report avant d'espérer se mettre à l'eau sur la plage des Sables-d'Olonne.",
    dep: 85,
  },
  {
    id: "N01",
    latitude: 47.521385780277114,
    longitude: -3.1565533991256167,
    name: "Saint-Pierre-Quiberon - Port Blanc - Morbihan",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "La commune de Saint-Pierre-Quiberon est une ville du Morbihan réputée pour ses spots de surf. Située à l'entrée de la presqu'île de Quiberon, on y trouve les trois principaux spots de surf de la côte sauvage : Port Blanc, Port Rhu et Port Bara.",
    intro:
      "Ceux-ci font partie de la Côte Sauvage qui est un haut lieu du surf en Bretagne. Lorsque le surf report prévoit de belles conditions de vagues il ne faut pas hésiter à y faire un tour, ne serait-ce que pour contempler le spectacle des vagues que peut offrir la Côte Sauvage.",
    dep: 56,
  },
  {
    id: "N02",
    latitude: 48.19843358347464,
    longitude: -4.5593149584212345,
    name: "Crozon - La Palue - Finistère",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Un spot de surf réputé qui prend de plein fouet les houles venant du large de la pointe bretonne. Ce beach break est un coin sauvage où il fait bon surfer à marée basse ou mi-marée.",
    intro:
      "On y surf tout au long de l'année avec une préférence pour l'automne, quand les forte houles donnent de bonnes prévisions de vagues et que l'eau n'est pas encore trop fraîche. Notez qu'en raison des courants, la baignade est interdite !",
    dep: 29,
  },
  {
    id: "N1",
    latitude: 49.571055688498475,
    longitude: -1.8492953420046754,
    name: "Siouville - Plage de la Hague - Manche",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Le spot de Siouville est le spot de surf le plus réputé de Normandie. C'est un beach break ouvert à la houle venant de l'ouest et donc de l'Atlantique. Il est praticable par les surfeurs de tous niveaux.",
    intro:
      "Autrefois surtout connu des véliplanchistes pour avoir accueilli les championnats de France de planche à voile Siouville a vu le surf s'imposer au fil des années.",
    dep: 50,
  },
  {
    id: "N2",
    latitude: 50.889032279674524,
    longitude: 1.6612802462551723,
    name: "Wissant - Wissant plage - Pas-de-Calais",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Wissant offre un spot de surf situé à une vingtaine de kilomètres de Calais. Un spot surtout fréquenté par les windsurf ou les kitesurf du fait de son exposition au vent onshore.",
    intro:
      "Il est possible pour les surfeurs, si la météo se présente bien d'y voir quelques bonnes vagues. Il faut donc bien vérifier les surf report et la météo sur Surf Sentinel avant de s'y rendre pour être sûr que la houle soit au rendez-vous.",
    dep: 62,
  },
];

const surfLevels = [
  {
    level: 1,
    levelName: "novice",
    maxWaveHeight: 0.6,
    maxWindSpeed: 15,
    minWaveFreq: 7,
    maxWaveFreq: 14,
  },
  {
    level: 2,
    levelName: "inter",
    maxWaveHeightt: 1,
    maxWindSpeed: 30,
    bestMaxWindSpeed: 12,
    minWaveFreq: 7,
    maxWaveFreq: 15,
  },
  {
    level: 3,
    levelName: "pro",
    maxWaveHeightt: 1,
    minWindSpeed: 30,
    bestMaxWindSpeed: 12,
    minWaveFreq: 6,
    maxWaveFreq: 18,
  },
];

export default { departements, dataSpots, surfLevels };
