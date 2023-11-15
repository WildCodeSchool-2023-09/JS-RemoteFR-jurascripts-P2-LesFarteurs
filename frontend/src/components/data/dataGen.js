const dataSpots = [
  {
    id: 100,
    depName: "Département",
  },
  {
    id: 64,
    depName: "Pyrénées-Atlantiques",
    latitude: 43.37667854866965,
    longitude: -1.7805677824278443,
    name: "Hendaye - Sokoburu - Pays Basque",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/19/12/11/surfer-1838958_1280.jpg",
    desc: "Idéal pour débuter dans le surf ou un autre sport de glisse, le beach break de Sokoburu tient son nom du casino éponyme. Tous les types de sports de glisse y sont pratiqués : kayak, SUP, bobyboard, longboard, surf,... A noter : le stationnement est payant.",
    intro:
      "Du fait de sa proximité avec le centre-ville de Hendaye, le spot est très fréquenté surtout l'été. ",
    dep: 64,
  },
  {
    id: 34,
    depName: "Hérault",
    latitude: 43.28516314116665,
    longitude: 3.529026975365399,
    name: "Cap d'Agde - Plade du Mole - Hérault",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/18/beach-1868672_1280.jpg",
    desc: "Point positif, le spot profite de nombreuses commodités à proximité (restaurants, bars, ...). Il n'y a pas de danger particulier sur ce spot qui s'adresse à tous les pratiquants, débutants à confirmés.",
    intro:
      "La plage du Mole offre un spot de surf idéal lorsque les conditions de houles sont propices à la formation de vagues.",
    dep: 34,
  },
  {
    id: 2,
    depName: "Corse",
    latitude: 41.93595848347769,
    longitude: 8.621024342983032,
    name: "Ajaccio - Capo di Feno - Corse",
    imgSrc:
      "https://cdn.pixabay.com/photo/2020/09/01/07/58/ocean-5534544_1280.jpg",
    desc: "Perdu dans un cadre sauvage au milieu du cap à l'ouest d'Ajaccio et surplombé pas sa tour en ruines, ce beach break à l'eau turquoise permet de surfer dans un environnement idyllique. Lorsque de belles houles sont au rendez-vous, les sessions peuvent être magiques, sinon pensez au Paddle ou au kayak.",
    intro:
      "Le Capo di Feno abrite un petit coin de paradis azur. Si les vagues ne sont pas toujours au rendez-vous, le spot de surf, ses petites paillottes et son surf club vous donneront envie de revenir.",
    dep: 2,
  },
  {
    id: 40,
    depName: "Landes",
    latitude: 43.70965724440656,
    longitude: -1.4392527381729847,
    name: "Seignosse - Le Penon - Landes",
    imgSrc:
      "https://images.pexels.com/photos/1654498/pexels-photo-1654498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Comme partout dans le coin, le surf y est omniprésent. Vous y trouverez tout ce qu'on est en droit d'attendre d'un spot de surf urbain. Écoles de surf, location de planches, bars et même un skatepark histoire de rouler un peu après votre session. La plage est surveillée, du moins pendant la saison touristique, l'été. Attention tout de même aux baïnes (courants) qui peuvent de temps à autres occasionner quelques frayeurs.",
    intro:
      "Le spot du Penon offre un joli cadre pour le surf. Située face à la petite ville de Seignosse, la plage est bordée de dunes préservées. ",
    dep: 40,
  },
  {
    id: 33,
    depName: "Gironde",
    latitude: 45.00263680291888,
    longitude: -1.2044503307609156,
    name: "Lacanau - La Centrale - Gironde",
    imgSrc:
      "https://cdn.pixabay.com/photo/2021/07/30/16/51/beach-6510275_1280.jpg",
    desc: "Le beach break de La Centrale offre pourtant un cadre de surf idéal avec sa situation urbaine, car précisons que le centre-ville de Lacanau a littéralement les pieds dans les vagues. Un spot de surf qui peut convenir à un débutant s'il n'y a pas trop de monde à l'eau. ",
    intro:
      "Situé en plein centre de Lacanau, cette plage est bondée en haute saison. Les surfeurs locaux préfèrent donc éviter cette plage surpeuplée pour se rabattre sur les spots de surf alentours.",
    dep: 33,
  },
  {
    id: 17,
    depName: "Charente-Maritime",
    latitude: 45.73916020259519,
    longitude: -1.2457990882763914,
    name: "La Tremblade - Côte Sauvage - Charente-Maritime",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/surfer-equitation-vague-lumiere-du-jour_23-2148823833.jpg?w=2000&t=st=1699996006~exp=1699996606~hmac=45de99ff1ef9c6a06c8a8885ba4577f9561c06946761b6ea1f08a350fafecd4d",
    intro:
      "Le spot de surf de la Côte Sauvage se trouve sur la presqu'île d'Arvert sur la bande de sable au nord-ouest du Zoo de La Palmyre.",
    desc: "C'est un long beach break qui propose de nombreux pics sur plusieurs kilomètres. Le spot conviendra aux surfeurs de tous niveaux. L'endroit est sauvage et compte de nombreux sentiers pour accéder aux plages de surf. Plusieurs parkings permettent d'accéder aux dunes qui bordent ce spot de glisse charentais.",
    dep: 17,
  },
  {
    id: 18,
    depName: "Charente-Maritime",
    latitude: 46.25519266044832,
    longitude: -1.5210299641023917,
    name: "Ile de Ré - Le Petit Bec - Charente-Maritime",
    imgSrc:
      "https://cdn.pixabay.com/photo/2022/09/15/09/05/man-7456044_1280.jpg",
    intro:
      "Le spot du Petit Bec est un spot de surf de qualité, qui offre de belles vagues pour les surfeurs de tous niveaux en fonction des périodes de l'année.",
    desc: "C'est un spot très apprécié des surfeurs de la région grâce à ses vagues régulières et puissantes, qui peuvent atteindre facilement 2 mètres de hauteur en période de bonne houle. La plage du Petit Bec se trouve à l'extrémité Nord de l'île, près du phare des Baleines, et est accessible en voiture, en vélo ou à pied depuis les Portes-en-Ré. Il y a plusieurs parkings dans les environs, ainsi qu'une aire de pique-nique et des toilettes publiques.",
    dep: 18,
  },
  {
    id: 85,
    depName: "Vendée",
    latitude: 46.489084205333576,
    longitude: -1.781196033078667,
    name: "Les Sables-d'Olonnes - Vendée",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/hommes-filles-surfent_1321-1092.jpg?w=1800&t=st=1699995878~exp=1699996478~hmac=f458e63084e3709f7258edc578571343f81bc49765ff62e9016ecec52e404792",
    intro:
      "Situé au niveau de la baie de la ville des Sables-d'Olonne, ce beach break propose un spot de repli orienté sud, voir sud-ouest à son extrémité.",
    desc: "Le surf y est facile pour les débutants, à condition seulement qu'il y ait des vagues car la configuration du spot nécessite de bien checker les prévisions de vagues ou notre surf report avant d'espérer se mettre à l'eau sur la plage des Sables-d'Olonne. La cité balnéaire offre tout le confort possible pour vos after sessions surf.",
    dep: 85,
  },
  {
    id: 56,
    depName: "Morbihan",
    latitude: 47.521385780277114,
    longitude: -3.1565533991256167,
    name: "Saint-Pierre-Quiberon - Port Blanc - Morbihan",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/hommes-filles-surfent_1321-1345.jpg?w=1800&t=st=1699995836~exp=1699996436~hmac=0afc195e57b2e54835958528f429ca0b3b2c4577fd26d380d247ee42fe972184",
    intro:
      "La commune de Saint-Pierre-Quiberon est une ville du Morbihan réputée pour ses spots de surf. Située à l'entrée de la presqu'île de Quiberon, on y trouve les trois principaux spots de surf de la côte sauvage : Port Blanc, Port Rhu et Port Bara.",
    desc: "Ceux-ci font partie de la Côte Sauvage qui est un haut lieu du surf en Bretagne. Lorsque le surf report prévoit de belles conditions de vagues il ne faut pas hésiter à y faire un tour, ne serait-ce que pour contempler le spectacle des vagues que peut offrir la Côte Sauvage.",
    dep: 56,
  },
  {
    id: 29,
    depName: "Finistère",
    latitude: 48.19843358347464,
    longitude: -4.5593149584212345,
    name: "Crozon - La Palue - Finistère",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/homme-surfeur-surfant-dans-mer-belles-vagues_181624-166.jpg?w=1800&t=st=1699995766~exp=1699996366~hmac=35ec9c52d5fe3584c96939e9dea7fb096a6e9dc6927a4afa5fad9d333f97666a",
    intro:
      "Un spot de surf réputé qui prend de plein fouet les houles venant du large de la pointe bretonne. ",
    desc: "Ce beach break est un coin sauvage où il fait bon surfer à marée basse ou mi-marée. On y surf tout au long de l'année avec une préférence pour l'automne, quand les forte houles donnent de bonnes prévisions de vagues et que l'eau n'est pas encore trop fraîche. Notez qu'en raison des courants, la baignade est interdite !",
    dep: 29,
  },
  {
    id: 50,
    depName: "Manche",
    latitude: 49.571055688498475,
    longitude: -1.8492953420046754,
    name: "Siouville - Plage de la Hague - Manche",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/femme-surfeur-planche-surf-ocean-au-coucher-du-soleil_1321-4264.jpg?w=826&t=st=1699995717~exp=1699996317~hmac=e3dec343589a936c937c6ec266ff04d10e87d00cb7b2c806797ebe336f11b7c5",
    desc: "Le spot de Siouville est le spot de surf le plus réputé de Normandie. C'est un beach break ouvert à la houle venant de l'ouest et donc de l'Atlantique. Il est praticable par les surfeurs de tous niveaux.",
    intro:
      "Autrefois surtout connu des véliplanchistes pour avoir accueilli les championnats de France de planche à voile Siouville a vu le surf s'imposer au fil des années.",
    dep: 50,
  },
  {
    id: 62,
    depName: "Pas-de-Calais",
    latitude: 50.889032279674524,
    longitude: 1.6612802462551723,
    name: "Wissant - Wissant plage - Pas-de-Calais",
    imgSrc:
      "https://cdn.pixabay.com/photo/2018/04/27/08/56/water-3354067_1280.jpg",
    intro:
      "Wissant offre un spot de surf situé à une vingtaine de kilomètres de Calais. Un spot surtout fréquenté par les windsurf ou les kitesurf du fait de son exposition au vent onshore.",
    desc: "Il est possible pour les surfeurs, si la météo se présente bien d'y voir quelques bonnes vagues. Il faut donc bien vérifier les surf report et la météo sur Surf Sentinel avant de s'y rendre pour être sûr que la houle soit au rendez-vous.",
    dep: 62,
  },
  {
    id: 6,
    depName: "Alpes-Maritimes",
    latitude: 43.69106669834545,
    longitude: 7.27919241979722,
    name: "Nice - Promenade des Anglais Est - Alpes-Maritimes",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    intro:
      "Une seule vague par décennie, de plus imprévisible, on peut y apercevoir un surfeur pas très matinal en t-shirt jaune quasiment tous les jours, impossible de le louper !",
    desc: "Vous pouvez attendre la vague en mangeant des glaces, je vous conseille à la framboise !",
    dep: 6,
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

export default { dataSpots, surfLevels };
