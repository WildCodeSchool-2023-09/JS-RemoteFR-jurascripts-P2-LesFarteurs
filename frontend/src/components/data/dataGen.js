const dataSpots = [
  // {
  //   id: 100,
  //   depName: "Département",
  // },
  {
    id: 64,
    depName: "Pyrénées-Atlantiques",
    latitude: 43.37667854866965,
    longitude: -1.7805677824278443,
    name: "Hendaye - Plage Sokoburu - Pays Basque",
    intro:
      "Du fait de sa proximité avec le centre-ville de Hendaye, le spot est très fréquenté surtout l'été. ",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/19/12/11/surfer-1838958_1280.jpg",
    desc: "Idéal pour débuter dans le surf ou un autre sport de glisse, le beach break de Sokoburu tient son nom du casino éponyme. Tous les types de sports de glisse y sont pratiqués : kayak, SUP, bobyboard, longboard, surf,... A noter : le stationnement est payant.",
    dep: 64,
  },
  {
    id: 65,
    depName: "Pyrénées-Atlantiques",
    latitude: 43.41489464501376,
    longitude: -1.6303522734640663,
    name: "Saint-Jean-de-Luz - Plage Lafiténia - Pays Basque",
    desc: "Situé proche du centre ville, le spot bénéficie de toutes les infrastructures de confort possibles (douches, toilettes, restaurants, ...) Fer de lance du surf français depuis des décennies, ce beach break au panorama époustouflant a accueilli de nombreuses compétitions de surf nationales et internationales. Attention aux quelques rochers qui peuvent être gênants à la sortie de l'eau lorsque la marée est haute.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/08/27/15/20/surfing-2686393_640.jpg",
    intro:
      "Idéal pour débuter dans le surf ou un autre sport de glisse, le beach break de Sokoburu tient son nom du casino éponyme. Tous les types de sports de glisse y sont pratiqués : kayak, SUP, bobyboard, longboard, surf,... A noter : le stationnement est payant.",
    dep: 64,
  },
  {
    id: 66,
    depName: "Pyrénées-Atlantiques",
    latitude: 43.478823722688155,
    longitude: -1.568552175804201,
    name: "Biarritz - Plage La Côte des Basques - Pays Basque",
    intro:
      "C'est un spot de surf emblématique de la ville de Biarritz. Avec une vue sur la Villa Belza au nord, autant vous dire que le cadre est exceptionnel !",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/07/07/09/26/sea-2480836_1280.jpg",
    desc: "Situé proche du centre ville, le spot bénéficie de toutes les infrastructures de confort possibles (douches, toilettes, restaurants, ...) Fer de lance du surf français depuis des décennies, ce beach break au panorama époustouflant a accueilli de nombreuses compétitions de surf nationales et internationales. Attention aux quelques rochers qui peuvent être gênants à la sortie de l'eau lorsque la marée est haute.",
    dep: 64,
  },
  {
    id: 65,
    depName: "Pyrénées-Atlantiques",
    latitude: 43.41489464501376,
    longitude: -1.6303522734640663,
    name: "Saint-Jean-de-Luz - Lafiténia - Pays Basque",
    intro:
      "Fer de lance du surf français depuis des décennies, ce beach break au panorama époustouflant a accueilli de nombreuses compétitions de surf nationales et internationales.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/08/27/15/20/surfing-2686393_640.jpg",
    desc: "Attention aux quelques rochers qui peuvent être gênants à la sortie de l'eau lorsque la marée est haute. Idéal pour débuter dans le surf ou un autre sport de glisse, le beach break de Sokoburu tient son nom du casino éponyme. Tous les types de sports de glisse y sont pratiqués : kayak, SUP, bobyboard, longboard, surf,... A noter : le stationnement est payant.",
    dep: 64,
  },
  {
    id: 66,
    depName: "Pyrénées-Atlantiques",
    latitude: 43.478823722688155,
    longitude: -1.568552175804201,
    name: "Biarritz - La Côte des Basques - Pays Basque",
    intro:
      "C'est un spot de surf emblématique de la ville de Biarritz. Avec une vue sur la Villa Belza au nord, autant vous dire que le cadre est exceptionnel !",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/07/07/09/26/sea-2480836_1280.jpg",
    desc: "Situé proche du centre ville, le spot bénéficie de toutes les infrastructures de confort possibles (douches, toilettes, restaurants, ...) Fer de lance du surf français depuis des décennies, ce beach break au panorama époustouflant a accueilli de nombreuses compétitions de surf nationales et internationales. Attention aux quelques rochers qui peuvent être gênants à la sortie de l'eau lorsque la marée est haute.",
    dep: 64,
  },
  {
    id: 34,
    depName: "Hérault",
    latitude: 43.28516314116665,
    longitude: 3.529026975365399,
    name: "Cap d'Agde - Plade du Mole - Hérault",
    intro:
      "La plage du Mole offre un spot de surf idéal lorsque les conditions de houles sont propices à la formation de vagues.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/18/beach-1868672_1280.jpg",
    desc: "Point positif, le spot profite de nombreuses commodités à proximité (restaurants, bars, ...). Il n'y a pas de danger particulier sur ce spot qui s'adresse à tous les pratiquants, débutants à confirmés.",
    dep: 34,
  },
  {
    id: 35,
    depName: "Hérault",
    latitude: 43.527838787216886,
    longitude: 3.9384545509533764,
    name: "Palavas-les-Flots - Plage Sarrail - Hérault",
    intro: "Le spot de surf de Sarrail est réputé pour ses vagues puissantes.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2018/05/22/11/05/wave-3421128_640.jpg",
    desc: "Les vagues ici sont connues pour leur puissance et leur constance, attirant les surfeurs toute l'année. Les vagues de taille modérée à grande conviennent aux surfeurs expérimentés. Avec une orientation principale vers le sud, Palavas-les-Flots offre des opportunités de ride excitantes.",
    dep: 34,
  },
  {
    id: 36,
    depName: "Hérault",
    latitude: 43.098782966686684,
    longitude: 3.1180456278923874,
    name: "Gruissant - Plage des Chalets - Hérault",
    intro: "La hauteur de houle à Gruissan Plage est en océan ouvert.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2022/09/17/19/38/ocean-7461681_640.jpg",
    desc: "Les vagues déferlantes seront souvent plus petites sur ce spot moins exposé.",
    dep: 34,
  },
  {
    id: 35,
    depName: "Hérault",
    latitude: 43.527838787216886,
    longitude: 3.9384545509533764,
    name: "Palavas-les-Flots - Plage Sarrail - Hérault",
    intro: "Le spot de surf de Sarrail est réputé pour ses vagues puissantes.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2018/05/22/11/05/wave-3421128_640.jpg",
    desc: "Les vagues ici sont connues pour leur puissance et leur constance, attirant les surfeurs toute l'année. Les vagues de taille modérée à grande conviennent aux surfeurs expérimentés. Avec une orientation principale vers le sud, Palavas-les-Flots offre des opportunités de ride excitantes.",
    dep: 34,
  },
  {
    id: 2,
    depName: "Corse",
    latitude: 41.93595848347769,
    longitude: 8.621024342983032,
    name: "Ajaccio - Plage Capo di Feno - Corse",
    intro:
      "Le Capo di Feno abrite un petit coin de paradis azur. Si les vagues ne sont pas toujours au rendez-vous, le spot de surf, ses petites paillottes et son surf club vous donneront envie de revenir.",
    imgSrc:
      "https://img.freepik.com/photos-premium/surfeurs-assis-planche-surf-dans-eau-se-tenant-main_232070-20250.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "Perdu dans un cadre sauvage au milieu du cap à l'ouest d'Ajaccio et surplombé pas sa tour en ruines, ce beach break à l'eau turquoise permet de surfer dans un environnement idyllique. Lorsque de belles houles sont au rendez-vous, les sessions peuvent être magiques, sinon pensez au Paddle ou au kayak.",
    dep: 2,
  },
  {
    id: 3,
    depName: "Corse",
    latitude: 41.99064893022141,
    longitude: 8.667446235987107,
    name: "Appietto - Plage de Lava - Corse",
    intro:
      "Le spot de surf Plage de Lava est situé à Appietto, en Corse-du-Sud, et offre des vagues puissantes.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/gens-surfant-cotes-varkala-pres-trivandrum_181624-42837.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "Les vagues ici sont connues pour leur force et leur régularité, attirant les surfeurs tout au long de l'année. Avec des vagues de taille modérée à grande, cet endroit convient aux surfeurs expérimentés en quête d'action. La beauté naturelle de la Corse-du-Sud ajoute à l'attrait de ce spot, offrant une expérience de surf mémorable.",
    dep: 2,
  },
  {
    id: 4,
    depName: "Corse",
    latitude: 42.73581181988351,
    longitude: 9.343601501222288,
    name: "Farinole- Plage de Farinole - Corse",
    intro:
      "Ce spot corse est très peu connu, il convient au surf comme au bodyboard.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2018/08/20/22/16/coast-3620146_1280.jpg",
    desc: "Perdu aussi dans un cadre sauvage, ce beach break à l'eau turquoise permet de surfer dans un environnement idyllique. Lorsque de belles houles sont au rendez-vous, les sessions peuvent être magiques, sinon pensez au Paddle ou au kayak.",
    dep: 2,
  },
  {
    id: 3,
    depName: "Corse",
    latitude: 41.99064893022141,
    longitude: 8.667446235987107,
    name: "Appietto - Plage de Lava - Corse",
    intro:
      "Le spot de surf Plage de Lava est situé à Appietto, en Corse-du-Sud, et offre des vagues puissantes.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/04/01/15/05/big-waves-2193828_640.jpg",
    desc: "Les vagues ici sont connues pour leur force et leur régularité, attirant les surfeurs tout au long de l'année. Avec des vagues de taille modérée à grande, cet endroit convient aux surfeurs expérimentés en quête d'action. La beauté naturelle de la Corse-du-Sud ajoute à l'attrait de ce spot, offrant une expérience de surf mémorable.",
    dep: 2,
  },
  {
    id: 4,
    depName: "Corse",
    latitude: 42.73581181988351,
    longitude: 9.343601501222288,
    name: "Farinole- Plage de Farinole - Corse",
    intro:
      "Ce spot corse est très peu connu, il convient au surf comme au bodyboard.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2018/08/20/22/16/coast-3620146_1280.jpg",
    desc: "Perdu aussi dans un cadre sauvage, ce beach break à l'eau turquoise permet de surfer dans un environnement idyllique. Lorsque de belles houles sont au rendez-vous, les sessions peuvent être magiques, sinon pensez au Paddle ou au kayak.",
    dep: 2,
  },
  {
    id: 40,
    depName: "Landes",
    latitude: 43.67278452242004,
    longitude: -1.445829133350911,
    name: "Hossegor - Plage La Gravière - Landes",
    intro:
      "Le spot de surf de la Gravière est l'endroit idéal pour un surfeur confirmé, il se situe en plein dans le site naturel protégé de la Côte Sauvage, à deux pas de la station balnéaire de Soorts-Hossegor.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2015/09/06/01/00/surfing-926822_640.jpg",
    desc: "Le spot est une bonne alternative à La Centrale qui elle est en plein centre-ville, plus au sud. L'accès au spot est un peu plus difficile, il est donc moins fréquenté ce qui ne l'empêche pas d'être surveillée pendant l'été. Un parking gratuit se situe non loin du spot.",
    dep: 40,
  },
  {
    id: 41,
    depName: "Landes",
    latitude: 43.85375912638572,
    longitude: -1.3965414968071865,
    name: "Moliets-et-Maa - Plage La Centrale - Landes",
    intro:
      "Spot de surf typique du Sud-Ouest, à savoir un beach break sur une longue plage de sable exposée aux houles de l'Atlantique.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/05/01/beach-1867436_640.jpg",
    desc: "Le spot de surf de la Centrale à Moliets possède l'avantage et l'inconvénient d'être en ville : un spot avec toutes les commodités mais assez fréquenté, surtout en haute saison.",
    dep: 40,
  },
  {
    id: 42,
    depName: "Landes",
    latitude: 44.09515463906485,
    longitude: -1.3300492219877058,
    name: "Contis - Plage de Contis - Landes",
    intro:
      "En face du phare de Contis, c'est un beach break de bonne qualité qui conviendra à la plupart des surfeurs.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2019/04/27/23/09/beach-4161593_640.jpg",
    desc: "Le spot se trouve à l'embouchure du courant de Contis. La présence de plusieurs écoles, surfshops, bars et restos en font un spot très sympa. On peut également loger au camping Lous Seurrots en vue d'un surf trip sur la côte landaise.",
    dep: 40,
  },
  {
    id: 33,
    depName: "Gironde",
    latitude: 44.71463468370028,
    longitude: -1.2543618816677538,
    name: "Lège-Cap-Ferret - Plage Le Truc Vert - Gironde",
    intro:
      "Situé au Sud de la Gironde, c'est un spot apprécié pour ses vagues puissantes.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/horizon-dore-eaux-tranquilles-aucun-peuple-genere-par-ia_188544-41994.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "Les vagues de taille modérée offrent un terrain de jeu idéal pour les amateurs de surf. La beauté naturelle de la région et l'ambiance paisible en font un endroit idéal pour les surfeurs en quête de tranquillité.",
    dep: 33,
  },
  {
    id: 34,
    depName: "Gironde",
    latitude: 45.00263680291888,
    longitude: -1.2044503307609156,
    name: "Lacanau - Plage La Centrale - Gironde",
    intro:
      "Situé en plein centre de Lacanau, cette plage est bondée en haute saison. Les surfeurs locaux préfèrent donc éviter cette plage surpeuplée pour se rabattre sur les spots de surf alentours.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2018/04/29/20/28/waves-3361029_640.jpg",
    desc: "Le beach break de La Centrale offre pourtant un cadre de surf idéal avec sa situation urbaine, car précisons que le centre-ville de Lacanau a littéralement les pieds dans les vagues. Un spot de surf qui peut convenir à un débutant s'il n'y a pas trop de monde à l'eau. ",
    dep: 33,
  },
  {
    id: 35,
    depName: "Gironde",
    latitude: 45.223275380409675,
    longitude: -1.1749051568950741,
    name: "Hourtin - Hourtin plage - Gironde",
    intro:
      "Hourtin plage fait partie de ces spots de surf que l'on trouve le long de la grande bande de sable qui court entre l'estuaire de la Gironde et le bassin d'Arcachon.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2021/07/30/16/51/beach-6510275_1280.jpg",
    desc: "Ce spot est un beau beach break girondin accessible aux surfers de tous niveaux. Surveillez bien les prévisions surf report car c'est un spot recommandé lorsqu'il y a du surf dans la région. Avec son parking et ses commerces : club de surf, bars et restaurants, il offre un grand niveau de confort.",
    dep: 33,
  },
  {
    id: 17,
    depName: "Charente-Maritime",
    latitude: 45.73916020259519,
    longitude: -1.2457990882763914,
    name: "La Tremblade - Plage Côte Sauvage - Charente-Maritime",
    intro:
      "Le spot de surf de la Côte Sauvage se trouve sur la presqu'île d'Arvert sur la bande de sable au nord-ouest du Zoo de La Palmyre.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/surfer-equitation-vague-lumiere-du-jour_23-2148823833.jpg?w=2000&t=st=1699996006~exp=1699996606~hmac=45de99ff1ef9c6a06c8a8885ba4577f9561c06946761b6ea1f08a350fafecd4d",
    desc: "C'est un long beach break qui propose de nombreux pics sur plusieurs kilomètres. Le spot conviendra aux surfeurs de tous niveaux. L'endroit est sauvage et compte de nombreux sentiers pour accéder aux plages de surf. Plusieurs parkings permettent d'accéder aux dunes qui bordent ce spot de glisse charentais.",
    dep: 17,
  },
  {
    id: 18,
    depName: "Charente-Maritime",
    latitude: 45.914471860237505,
    longitude: -1.3335601714725076,
    name: "Ile d'Oléron - Plage La Cotinière - Charente-Maritime",
    intro:
      "Ce beach break idéalement orienté ouest / sud-ouest constitue un bon spot de surf qui convient aux surfeurs débutants comme aux surfeurs confirmés.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/hommes-filles-surfent_1321-1093.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "La Cotinière est un village de l'île d'Oléron au bord de laquelle se trouve une plage où l'on peut pratiquer le surf. Attention aux rochers qui tapissent le fond.",
    dep: 17,
  },
  {
    id: 19,
    depName: "Charente-Maritime",
    latitude: 46.25519266044832,
    longitude: -1.5210299641023917,
    name: "Ile de Ré - Plage Le Petit Bec - Charente-Maritime",
    intro:
      "Le spot du Petit Bec est un spot de surf de qualité, qui offre de belles vagues pour les surfeurs de tous niveaux en fonction des périodes de l'année.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/vue-grand-angle-cote-tropicale-idyllique-generee-par-ia_188544-35204.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "Spot très apprécié des surfeurs de la région grâce à ses vagues régulières et puissantes, qui peuvent atteindre facilement 2 mètres de hauteur en période de bonne houle. La plage du Petit Bec se trouve à l'extrémité Nord de l'île, près du phare des Baleines, et est accessible en voiture, en vélo ou à pied depuis les Portes-en-Ré. Il y a plusieurs parkings dans les environs, ainsi qu'une aire de pique-nique et des toilettes publiques.",
    dep: 17,
  },
  {
    id: 85,
    depName: "Vendée",
    latitude: 46.489084205333576,
    longitude: -1.781196033078667,
    name: "Les Sables-d'Olonne - La Grande Plage - Vendée",
    intro:
      "Situé au niveau de la baie de la ville des Sables-d'Olonne, ce beach break propose un spot de repli orienté sud, voir sud-ouest à son extrémité.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/surfeur-blue-ocean-wave_654080-562.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "Le surf y est facile pour les débutants, à condition seulement qu'il y ait des vagues car la configuration du spot nécessite de bien checker les prévisions de vagues ou notre surf report avant d'espérer se mettre à l'eau sur la plage des Sables-d'Olonne. La cité balnéaire offre tout le confort possible pour vos after sessions surf.",
    dep: 85,
  },
  {
    id: 86,
    depName: "Vendée",
    latitude: 46.384210382359846,
    longitude: -1.494356099460894,
    name: "Longeville-sur-Mer - Plage Bud Bud - Vendée",
    intro:
      "Situé sur une longue plage de plusieurs kilomètres, c'est l'un des spots les plus réputés de la côte vendéenne, on le compare même aux plus grands noms des côtes basques et landaises.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/hommes-filles-surfent_1321-1092.jpg?w=1800&t=st=1699995878~exp=1699996478~hmac=f458e63084e3709f7258edc578571343f81bc49765ff62e9016ecec52e404792",
    desc: "Le surf se pratique sur cette plage de Vendée à marée basse ou mi-marée. Les débutants comme les surfeurs confirmés pourront passer de bonnes sessions ici. La proximité avec la ville donne au spot un bon niveau de confort avec des bars et restaurants à proximité.",
    dep: 85,
  },
  {
    id: 87,
    depName: "Vendée",
    latitude: 46.684897965873986,
    longitude: -1.9388668463745073,
    name: "Saint-Gilles-Croix-de-Vie - La Grande Plage - Vendée",
    intro:
      "La Grande Plage de Saint-Gilles-Croix-de-Vie offre un superbe cadre pour vos sessions de surf Vendéennes.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/surfeurs-chevauchent-tonneau-majestueux-maui-genere-par-ia_188544-17784.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: " Citadin au nord, l'ambiance est plus sauvage au sud avec cette longue bande de sable longée par les dunes. Un très beau coin pour surfeurs débutants et confirmés, attention néanmoins aux courants qui peuvent être relativement forts. L'orientation du spot lui permet de prendre les grosses comme les petites houles en toutes saisons.",
    dep: 85,
  },
  {
    id: 56,
    depName: "Morbihan",
    latitude: 47.521385780277114,
    longitude: -3.1565533991256167,
    name: "Saint-Pierre-Quiberon - Plage Port Blanc - Morbihan",
    intro:
      "La commune de Saint-Pierre-Quiberon est une ville du Morbihan réputée pour ses spots de surf. ",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/jeune-homme-surfe-vagues-ocean_23-2148823821.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "Située à l'entrée de la presqu'île de Quiberon, on y trouve les trois principaux spots de surf de la Côte sauvage (haut lieu de surf de Bretagne) : Port Blanc, Port Rhu et Port Bara. Lorsque le surf report prévoit de belles conditions de vagues il ne faut pas hésiter à y faire un tour, ne serait-ce que pour contempler le spectacle des vagues.",
    dep: 56,
  },
  {
    id: 57,
    depName: "Morbihan",
    latitude: 47.597432537939895,
    longitude: -3.1592159398807884,
    name: "Plouharnel - Plage Sainte Barbe - Morbihan",
    intro:
      "Bien exposé aux houle d'ouest / nord-ouest, Sainte-Barbe est un spot de surf accessible aux surfeurs de tous niveaux, débutants comme confirmés.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/surfeur-ocean-coucher-soleil-couper-souffle-dans-ciel-arriere-plan_181624-6844.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: " Il est courant de voir pas mal de monde tant cette destination surf est prisée au niveau local. On y accède en voiture en passant par le lieu dit de Sainte-Barbe (Plouharnel), il est possible de se garer sur le parking près de la plage.",
    dep: 56,
  },
  {
    id: 58,
    depName: "Morbihan",
    latitude: 47.7440442990754,
    longitude: -3.5098370595588735,
    name: "Guidel - Plage Pen Er Malo - Morbihan",
    intro:
      "Ce spot est un beach break sympathique qui convient aux surfeurs de tout niveau.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/hommes-filles-surfent_1321-1345.jpg?w=1800&t=st=1699995836~exp=1699996436~hmac=0afc195e57b2e54835958528f429ca0b3b2c4577fd26d380d247ee42fe972184",
    desc: "La plage de Pen Er Malo (Fort Bloqué) est autant prisée des surfeurs que des kitesurf. La vue sur le fort maritime, l'exposition à la houle d'ouest et la qualité des vagues en fait un spot de surf majeur des environs de Lorient.",
    dep: 56,
  },
  {
    id: 29,
    depName: "Finistère",
    latitude: 47.84093184728526,
    longitude: -4.350634422646358,
    name: "Plomeur - Plage La Torche - Finistère",
    intro:
      "Cette plage, collée à la pointe de La Torche a su se faire un nom dans le surf breton grâce à ses belles vagues dans un cadre magnifique.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/homme-surfeur-surfant-dans-mer-belles-vagues_181624-166.jpg?w=1800&t=st=1699995766~exp=1699996366~hmac=35ec9c52d5fe3584c96939e9dea7fb096a6e9dc6927a4afa5fad9d333f97666a",
    desc: "Cette grande étendue de sable qui prend la houle plein ouest toute l'année offre régulièrement des vagues tubulaires lors des grosses houles d'automne ou d'hiver. Pas de restrictions de niveau même s'il faut faire attention aux courants qui peuvent être assez forts.",
    dep: 29,
  },
  {
    id: 30,
    depName: "Finistère",
    latitude: 48.19843358347464,
    longitude: -4.5593149584212345,
    name: "Crozon - La Palue - Finistère",
    intro:
      "Un spot de surf réputé qui prend de plein fouet les houles venant du large de la pointe bretonne. ",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/08/06/19/33/sea-2595550_1280.jpg",
    desc: "Ce beach break est un coin sauvage où il fait bon surfer à marée basse ou mi-marée. On y surf tout au long de l'année avec une préférence pour l'automne, quand les forte houles donnent de bonnes prévisions de vagues et que l'eau n'est pas encore trop fraîche. Notez qu'en raison des courants, la baignade est interdite !",
    dep: 29,
  },
  {
    id: 31,
    depName: "Finistère",
    latitude: 48.693836131743744,
    longitude: -3.665076996015393,
    name: "Locquirec - Plage Les Sables Blancs - Finistère",
    intro: "Les vagues ici sont connues pour leur qualité et leur constance.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/jeune-homme-surfe-vagues-ocean_23-2148823821.jpg?w=826&t=st=1700159070~exp=1700159670~hmac=4be6550f00a87fade605da1c95169fa521aae5a363bf673496b9be708c09fabb",
    desc: "Avec des vagues de taille modérée à grande, cet endroit convient aux surfeurs de différents niveaux. La beauté de la côte bretonne ajoute à l'attrait de cet endroit pour les amateurs de surf.",
    dep: 29,
  },
  {
    id: 50,
    depName: "Manche",
    latitude: 48.762416246494325,
    longitude: -1.575605695606217,
    name: "Carolles - Carolles-Plage - Manche",
    intro:
      "Au nord de la pointe de Carolles se situe ce petit beach break qui peut offrir quelques bonnes vagues à marée basse ou mi-marée",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/vue-dessus-personne-planche-surf-nageant-varkala-beach_181624-30033.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "Le spot est assez sympa étant donné que les bars et restaurants de la plage vous proposeront de bons moment après votre session de surf.",
    dep: 50,
  },
  {
    id: 51,
    depName: "Manche",
    latitude: 49.03985932804693,
    longitude: -1.6056561209721765,
    name: "Coutainville - Plage de l'Ecole de Voile' - Manche",
    intro:
      "L'été l'absence de grosses houles en fait un spot avec peu de surfeurs. Surveillez donc bien les surf reports pour éviter les mauvaises surfprises au niveau des prévisions de vagues.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/amelioration-competences_1098-1521.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "En revanche les belles vagues d'automne et d'hiver peuvent attirer pas mal de surfeurs. Ce beach break possède un bon niveau de confort car la station balnéaire accueille pas mal de restaurants et bars.",
    dep: 50,
  },
  {
    id: 52,
    depName: "Manche",
    latitude: 49.571055688498475,
    longitude: -1.8492953420046754,
    name: "Siouville - Plage de la Hague - Manche",
    intro:
      "Autrefois surtout connu des véliplanchistes pour avoir accueilli les championnats de France de planche à voile Siouville a vu le surf s'imposer au fil des années.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/jeune-homme-pret-naviguer_23-2147647168.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "Le spot de Siouville est le spot de surf le plus réputé de Normandie. C'est un beach break ouvert à la houle venant de l'ouest et donc de l'Atlantique. Il est praticable par les surfeurs de tous niveaux.",
    dep: 50,
  },
  {
    id: 61,
    depName: "Pas-de-Calais",
    latitude: 50.525055097855514,
    longitude: 1.5780268446828627,
    name: "Le Touquet - Le Touquet-Paris-Plage - Pas-de-Calais",
    intro:
      "À la fin de l'été, les houles de la deuxième partie de l'année peuvent donner lieu à de belles sessions de surf.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2018/04/27/08/56/water-3354067_1280.jpg",
    desc: "Qui dit station balnéaire, dit confort optimal, donc si vous avez la chance d'y croiser des vagues correctes, vous êtes sûr de passer un bon after session grâce aux bars, restaurants et autres commodités de la ville.",
    dep: 62,
  },
  {
    id: 62,
    depName: "Pas-de-Calais",
    latitude: 50.783167118485046,
    longitude: 1.6033299294494308,
    name: "Wimereux - La Pointe aux Oies - Pas-de-Calais",
    intro:
      "Il n'est pas spécialement prisé de surfeurs car sa configuration ne lui permet pas souvent de proposer de belles vagues à surfer.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/homme-tenant-sa-planche-surf_23-2148823807.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "À noter aussi la présence de rochers qui peuvent rapidement rendre toute session surf périlleuse voir dangereuse selon la marée. Il est généralement conseillé d'y surfer à mi-marée ou marée haute par vent faible. Il est conseillé de bien vérifier la webcam ou le report Surf Sentinel pour être sûr qu'il y ait suffisamment de vagues.",
    dep: 62,
  },
  {
    id: 63,
    depName: "Pas-de-Calais",
    latitude: 50.889032279674524,
    longitude: 1.6612802462551723,
    name: "Wissant - Wissant plage - Pas-de-Calais",
    intro:
      "Wissant offre un spot de surf situé à une vingtaine de kilomètres de Calais. Un spot surtout fréquenté par les windsurf ou les kitesurf du fait de son exposition au vent onshore.",
    imgSrc:
      "https://img.freepik.com/photos-premium/homme-surfer-vague-bleue-journee-ensoleillee_397933-51.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "Il est possible pour les surfeurs, si la météo se présente bien d'y voir quelques bonnes vagues. Il faut donc bien vérifier les surf report et la météo sur Surf Sentinel avant de s'y rendre pour être sûr que la houle soit au rendez-vous.",
    dep: 62,
  },
  {
    id: 6,
    depName: "Alpes-Maritimes",
    latitude: 43.5377486512969,
    longitude: 7.040275556189344,
    name: "Cannes - Plage Gazaniaire - Alpes-Maritimes",
    intro:
      "A privilégier en hiver ou à l'automne, les bonnes vagues y sont occasionnelles mais pourront de temps en temps offrir de bonnes sessions aux surfeurs débutants.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/femme-surfeur-planche-surf-ocean-au-coucher-du-soleil_1321-4264.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: " Situé à proximité de la Croisette, le spot a l'avantage d'offrir de nombreuses commodités : bars, restaurants, école de surf, etc.",
    dep: 6,
  },
  {
    id: 7,
    depName: "Alpes-Maritimes",
    latitude: 43.69106669834545,
    longitude: 7.27919241979722,
    name: "Nice - Promenade des Anglais Est - Alpes-Maritimes",
    intro:
      "Une seule vague par décennie, de plus imprévisible, on peut y apercevoir un surfeur pas très matinal en t-shirt jaune quasiment tous les jours, impossible de le louper !",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/05/06/10/32/dog-2289451_640.jpg",
    desc: "Vous pouvez attendre la vague en mangeant des glaces, je vous conseille à la framboise !",
    dep: 6,
  },
  {
    id: 8,
    depName: "Alpes-Maritimes",
    latitude: 43.65618439404589,
    longitude: 7.195942607388197,
    name: "Saint-Laurent-du-Var - Plage Cousteau - Alpes-Maritimes",
    intro:
      "Spot de surf élégant avec une orientation principale vers le sud-sud-est. Les vagues ici sont de taille modérée, adaptées aux surfeurs de tous niveaux.",
    imgSrc:
      "https://img.freepik.com/photos-gratuite/paysage-du-rivage-entoure-par-mer-navires-surfeurs-sous-ciel-nuageux_181624-10350.jpg?size=626&ext=jpg&ga=GA1.1.1625749900.1700054888&semt=sph",
    desc: "En plus du surf, les visiteurs peuvent profiter de la plage, des cafés en bord de mer et des activités culturelles. Saint-Laurent-du-Var est un lieu de rendez-vous pour les surfeurs qui cherchent à combiner le surf avec une expérience urbaine et une touche de glamour.",
    dep: 6,
  },
];

const surfLevels = [
  {
    level: 1,
    levelName: "novice",
    minWaveHeight: 0.3,
    maxWaveHeight: 0.6,
    maxWindSpeed: 15,
  },
  {
    level: 2,
    levelName: "inter",
    minWaveHeight: 0.4,
    maxWaveHeight: 1,
    maxWindSpeed: 30,
  },
  {
    level: 3,
    levelName: "conf",
    minWaveHeight: 0.6,
    maxWaveHeight: 2,
    maxWindSpeed: 30,
  },
  {
    level: 4,
    levelName: "champ",
    minWaveHeight: 1,
    maxWaveHeight: 7,
    maxWindSpeed: 50,
  },
  {
    level: 5,
    levelName: "storm",
    minWaveHeight: 7.1,
    minWindSpeed: 51,
  },
];

export default { dataSpots, surfLevels };
