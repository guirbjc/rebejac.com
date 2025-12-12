const audioMap = {
"35.png": "../assets/audios/en106-guigui_masterv1.wav",
"Vampire.png": "../assets/audios/Vampire.wav",
"Grain_de_beaute_2.png": "../assets/audios/Grain.wav",
"Diner_aux_Chandelles_2.png": "../assets/audios/Diner.mp3",
"Pokemine_v2.png": "../assets/audios/Pokemine.wav",
"retiens_la_nuit_singlecover.jpg": "../assets/audios/RetienslaNuit.mp3"
};

const descriptionSongMap = {
  "35.png": `
      <p><strong>Titre :</strong> En 106</p>
      <p><strong>Genre :</strong> Hip-Hop/Rap</p>
      <p><strong>Année :</strong> 2025</p>
      <br>
      <p><strong>Auteur :</strong> Guilhem Rebéjac</p>
      <p><strong>Compositeur :</strong> Guilhem Rebéjac</p>
      <p><strong>Interprète :</strong> Guilhem Rebéjac</p>
      <p><strong>Mixage :</strong> Laïn</p>
  `,
  "Vampire.png": `
      <p><strong>Titre :</strong> Vampire</p>
      <p><strong>Genre :</strong> Electro</p>
      <p><strong>Année :</strong> 2023</p>
      <br>
      <p><strong>Auteur :</strong> Guilhem Rebéjac</p>
      <p><strong>Compositeur :</strong> Guilhem Rebéjac</p>
      <p><strong>Interprète :</strong> Guilhem Rebéjac</p>
      <p><strong>Mixage :</strong> Guilhem Rebéjac</p>
  `,
  "Grain_de_beaute_2.png": `
      <p><strong>Titre :</strong> Grain de Beauté</p>
      <p><strong>Genre :</strong> Pop</p>
      <p><strong>Année :</strong> 2022</p>
      <br>
      <p><strong>Auteur :</strong> Guilhem Rebéjac</p>
      <p><strong>Compositeur :</strong> Luke Fleurence</p>
      <p><strong>Interprète :</strong> Guilhem Rebéjac</p>
      <p><strong>Mixage :</strong> Guilhem Rebéjac</p>
  `,
  "Diner_aux_Chandelles_2.png": `
      <p><strong>Titre :</strong> Dîner aux Chandelles</p>
      <p><strong>Genre :</strong> Parodie Rap</p>
      <p><strong>Année :</strong> 2019</p>
      <br>
      <p><strong>Auteur :</strong> Guilhem Rebéjac</p>
      <p><strong>Compositeur :</strong> Luke Fleurence</p>
      <p><strong>Interprète :</strong> Guilhem Rebéjac</p>
      <p><strong>Mixage :</strong> Guilhem Rebéjac</p>
  `,
  "Pokemine_v2.png": `
      <p><strong>Titre :</strong> Pokémine</p>
      <p><strong>Genre :</strong> Parodie</p>
      <p><strong>Année :</strong> 2022</p>
      <br>
      <p><strong>Interprète :</strong> Guilhem Rebéjac</p>
  `,
  "retiens_la_nuit_singlecover.jpg": `
      <p><strong>Titre :</strong> Retiens la Nuit</p>
      <p><strong>Genre :</strong> Cover</p>
      <p><strong>Année :</strong> 2021</p>
      <br>
      <p><strong>Auteur :</strong> Charles Aznavour</p>
      <p><strong>Compositeur :</strong> Charles Aznavour</p>
      <p><strong>Interprète original :</strong> Johnny Halliday</p>
      <p><strong>Interprète :</strong> Guilhem Rebéjac</p>
  `
};

const imageData = {
  "TCV": {
      src: "../assets/images/design/tcv-n.png",
      description: "<strong>Tennis Club Vailhauquès</strong>\n\nProposition de logo pour le Tennis Club de Vailhauquès, dans l'Hérault."
  },
  "MC2": {
      src: "../assets/images/design/mc2.png",
      description: "<strong>DJ MC2</strong>\n\nLogo créé pour DJ MC2.\nCe logo représente un disque vinyle stylisé.\n\nLogo utilisé sur les réseaux sociaux de l'artiste."
  },
  "Gala ESIEE 2025": {
      src: "../assets/images/design/gala-esiee.png",
      description: "<strong>Gala ESIEE 2025</strong>\n\nLogo créé pour le Gala de l'ESIEE Paris 2025 - Thème fantaisie/féérique.\n\nLogo utilisé pour la communication de l'événement sur les réseaux sociaux."
  },
  "Atlas": {
      src: "../assets/images/design/atlas.png",
      description: "<strong>Cover Atlas</strong>\n\nCover créée pour une chanson parodique."
  },
  "Template BDA": {
      src: "../assets/images/design/template-bda.png",
      description: "<strong>Template BDA</strong>\n\nTemplate réalisé pour habiller le feed instagram du Bureau Des Arts de l'ESIEE Paris."
  },
  "Logo BDA": {
      src: "../assets/images/design/logo-bda.png",
      description: "<strong>Logo BDA</strong>\n\nProposition de logo pour le Bureau Des Arts de l'ESIEE Paris.\n\nLe crayon est formé des lettres BDA, le A stylise la Tour Eiffel."
  },
  "Tete 2 Pirates": {
      src: "../assets/images/design/tete-2-pirates-d.jpg",
      description: "<strong>Tête 2 Pirates</strong>\n\nProposition de logo pour le Comité d'Intégration de l'ESIEE Paris."
  },
  "Logo CI": {
      src: "../assets/images/design/logo-ci.png",
      description: "<strong>Comité d'Intégration</strong>\n\nLogo créé pour le Comité d'Intégration de l'ESIEE Paris.\n\nCe logo a orné les t-shirts et goodies du Comité d'Intégration 2024-2025."
  },
  "ESIEE-1": {
      src: "../assets/images/design/esiee-3.png",
      description: "<strong>Merch ESIEE</strong>\n\nLogos créés pour le merchandising 2024-2025 de l'ESIEE Paris."
  },
  "ESIEE Sport": {
      src: "../assets/images/design/esiee-sport.png",
      description: "<strong>ESIEE Sport</strong>\n\nProposition de logo pour l'association sportive de l'ESIEE Paris.\n\nOn peut remarquer la forme du bâtiment de l'ESIEE vue du ciel sur le haut du logo."
  },
  "Patinoire": {
      src: "../assets/images/design/patinoire.png",
      description: "<strong>Club Patinoire</strong>\n\nLogo retravaillé pour le club patinoire de l'ESIEE Paris."
  },
  "Blason FAS": {
      src: "../assets/images/design/blason-fas.png",
      description: "<strong>Blason FAS</strong>\n\nProposition de logo pour le merchandising de la filière FAS de l'INSA Toulouse."
  },
  "FAS": {
      src: "../assets/images/design/fas-2.png",
      description: "<strong>Logo FAS</strong>\n\nLogo créé pour représentée la Filière Active en Sciences (FAS) durant la Semaine d'Accueil 2022-2023 de l'INSA Toulouse."
  },
  "Blason Rebéjac": {
      src: "../assets/images/design/blason-rebejac.png",
      description: "<strong>Blason Rebéjac</strong>\n\nBlason inventé des Rebéjac."
  },
  "Paparazzi": {
      src: "../assets/images/design/paparazzi.png",
      description: "<strong>Paparazzi</strong>\n\nProposition de cover d'album."
  },
  "IMAC": {
      src: "../assets/images/design/imac-1.png",
      description: "<strong>IMAC</strong>\n\nLogo créé pour le merchandising de la formation IMAC.\n\nOn peut deviner une Tour Eiffel à l'envers et les chevrons représente la programmation et le code, coeur de la formation.\n\nCe logo orne la veste de la promotion 2024-2025."
  },
  "Petit Kawa 1": {
      src: "../assets/images/design/petit-kawa-1.png",
      description: "<strong>Petit Kawa</strong>\n\nProposition de logo pour le bar de l'INSA Toulouse."
  },
  "Petit Kawa 2": {
      src: "../assets/images/design/petit-kawa-3.png",
      description: "<strong>Petit Kawa</strong>\n\nProposition de logo pour le bar de l'INSA Toulouse."
  },
  "INSA A": {
      src: "../assets/images/design/insa-A-2.png",
      description: "<strong>INSA Groupe A</strong>\n\nLogo créé pour la Semaine d'Accueil 2022-2023 de l'INSA Toulouse.\n\nOn peut lire INSA dans les poils du renard."
  },
  "Alibabar": {
      src: "../assets/images/design/alibabar.png",
      description: "<strong>Alibabar</strong>\n\nLogo créé pour le bar de l'INSA Toulouse\n\nUtilisé sur les réseaux sociaux du bar durant l'année 2022-2023."
  },
  "100 Tours": {
      src: "../assets/images/design/100-tours.png",
      description: "<strong>100 Tours</strong>\n\nProposition de logo pour les 100 Tours de l'INSA Toulouse, un événement sportif organisé chaque année. Renommé depuis 'Les 24h de l'INSA Toulouse'."
  },
  "La Raclette": {
      src: "../assets/images/design/la-raclette.png",
      description: "<strong>La Raclette</strong>\n\nLogo créé pour la boomteam (équipe en charge des soirées) de l'INSA Toulouse.\n\nLogo utilisé sur les réseaux sociaux et pour la communication des évènements festifs durant l'année 2022-2023."
  },
  "Promo 60": {
      src: "../assets/images/design/promo-60-1.png",
      description: "<strong>Promo 60</strong>\n\nLogo créé pour la Semaine d'Accueil 2022-2023 de l'INSA Toulouse."
  },
  "Promo 60 Start": {
      src: "../assets/images/design/promo-60-start.png",
      description: "<strong>Promo 60</strong>\n\nPhoto-montage créé pour la Semaine d'Accueil 2022-2023 de l'INSA Toulouse.\n\nL'image d'arrière-plan est une photo d'une rue de l'INSA Toulouse prise par mes soins."
  },
  "Lisbonne": {
      src: "../assets/images/design/dessin/lisbonne.jpg",
      description: "<strong>Lisbonne</strong>\n\nVue d'une rue de Lisbonne où passe la fameuse ligne de funiculaire 28 vers Baixa.\n\nPeinture à partir d'une carte postale."
  },
  "La Creation d'Adam": {
      src: "../assets/images/design/dessin/michelange.jpg",
      description: "<strong>La Création d'Adam</strong>\n\nReproduction d'une des oeuvres les plus célèbres de Michel-Ange, <em>la Création d'Adam</em>.\n\nDessin à la craie à partir d'une photo sur un smartphone."
  },
  "Pirate Corsaire": {
      src: "../assets/images/design/dessin/pirate-corsaire.jpg",
      description: "<strong>Pirate VS Corsaire</strong>\n\nProposition initiale pour le logo du Comité d'Intégration 2024-2025 de l'ESIEE Paris."
  },
  "American Nightboom": {
      src: "../assets/images/design/dessin/american-nightboom.jpg",
      description: "<strong>American Nightboom</strong>\n\nTenture réalisée pour une soirée à l'INSA Toulouse.\n\nDessin réalisé sans modèle, à main levée."
  },
  "Ange Dechu": {
      src: "../assets/images/design/dessin/ange-dechu-1.jpg",
      description: "<strong>Ange Déchu</strong>\n\nReproduction de <em>l'Ange Déchu</em> d'Alexandre Cabanel.\n\nDessin à la craie à partir d'une photo sur un smartphone."
  },
  "Diana": {
      src: "../assets/images/design/dessin/diana.JPG",
      description: "<strong>The Princess</strong>\n\nPortrait de Lady Diana.\n\nDessin réalisé à partir d'une photo."
  }

};

const videoData = {
  "La Lune Ecarlate": {
      src: "../assets/videos/la-lune-ecarlate.mp4",
      description: "<strong>La Lune Écarlate</strong>\n\nTitle Sequence d'une série imaginaire\nsur des loups-garous à Toulouse à la fin du XIXe.\n\nCréation originale de Guilhem Rebéjac,\nsur une musique de Raymond Lefèvre."
  },
  "106 3D": {
      src: "../assets/videos/106-vroum-vroum.mp4",
      description: "<strong>106 dans un tunnel</strong>\n\nMon tout premier projet réalisé sur le logiciel Blender.\nUne 106 roule dans un tunnel."
  },
  "La Flamme": {
      src: "../assets/videos/supercut-laflamme.mov",
      description: "<strong>Supercut - La Flamme</strong>\n\nSynopsis : Deux amis sont à une soirée, l'un conseille à l'autre une technique vue dans un film pour donner son contact à la fille qui lui plait : écrire son numéro de téléphone sur un briquet puis lui donner, mais le fameux briquet disparait.\n\nCourt-métrage réalisé en 2024."
  },
  "Le 6 joueur": {
      src: "../assets/videos/supercut-le6joueur.mov",
      description: "<strong>Supercut - Le 6e joueur</strong>\n\nSynopsis : Un groupe d'amis joue à un jeu de société dans lequel il faut répondre à des questions, mais celles-ci deviennent étrangement de plus en plus personnelles et ciblées à mesure que la partie se déroule.\n\nCourt-métrage réalisé en 2023."
  },
  "Vampire Cartoon": {
      src: "../assets/videos/vampire-cartoon.mp4",
      description: "<strong>Trailer Vampire</strong>\n\nTrailer de mon deuxième single <em>Vampire</em>.\n\nRéalisé sur le logiciel After Effects."
  }
};

const textData = {
  "Sete": {
    title: "Sète",
    content: `
      <p>En arrivant d'étranger<br>
      Tous les navires virent de bord<br>
      L'équipage se tînt prêt<br>
      Car la vigie cria terre<br>
      Et les marins virent d'abord<br>
      Sète, cette ville sur la mer<br>
      Merveille, cité de trésor</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Toulouse": {
    title: "Toulouse",
    content: `
      <p>Toulouse est belle ce soir<br>
      Orangé de bleu le ciel<br>
      Un air d'été dans le vent<br>
      Le Capitole s'illumine<br>
      Où se retrouve les gens<br>
      Une foule ici s'anime<br>
      Se hâte mais ne voit pas<br>
      Et n'admire la ville rose</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Olympe": {
    title: "Olympe",
    content: `
      <p>Dans un regard censure et de beaux cheveux blonds,<br>
      Surtout ses yeux azur, se perdrait Apollon<br>
      Et nymphe de beauté appelée callipyge,<br>
      Qui ferait chavirer n'importe quel aurige<br>
      Calligraphie des dieux, muse des artistes<br>
      Sa bouche un seul vœu ferait Arès pacifiste<br>
      Cette Déesse dans son plus bel appareil<br>
      Eros lui-même l'appellerait merveille<br>
      Et de ses paroles charmantes d'inattention<br>
      Tous demanderaient flèche à Cupidon</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Les Artistes": {
    title: "Les Artistes",
    content: `
      <p>Un artiste se doit toujours au possible<br>
      D'entretenir quelques amours impossibles<br>
      Cela rend triste mais il voit dans son chagrin<br>
      L'inspiration que lui procure le béguin<br>
      Tout spiritueux n'est pas aussi enivrant<br>
      Et douloureux que la valse des sentiments<br>
      Il se mets à peindre, à écrire, à rêver<br>
      D'enfin tenir la beauté d'une vérité<br>
      Et par l'esprit il se confie et s'amuse<br>
      Ses œuvres se créent dans l'ombre de sa muse<br>
      Et ce secret il le confie si lui le veut<br>
      Que les artistes adorent être amoureux</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Saisons": {
    title: "Saisons",
    content: `
      <p>Le printemps lui était paré de toutes fleurs<br>
      L'été empruntant des airs de torrides chaleurs<br>
      L'automne aux feuilles éparses d'arbres divers<br>
      Aussi monotone que la froideur de l'hiver</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Aux Fleurs": {
    title: "Aux Fleurs",
    content: `
      <p>Les roses pâlissent à ton passage<br>
      Jalouses de la beauté de ton visage<br>
      Les jonquilles ne peuvent que rougir<br>
      Du superbe éclat de ton sourire<br>
      Les camélias tombent sous le charme<br>
      De ton rire et même de tes larmes<br>
      Les pissenlits tous en admirateurs<br>
      Enchantés par tes beaux yeux rieurs<br>
      Et les pensées ne savent que penser<br>
      De tes belles lèvres, de ton joli nez<br>
      Les tulipes aussi aimeraient encore<br>
      Égaler la beauté des courbes de ton corps<br>
      Les muguets eux ne font pas de soucis<br>
      Car ils savent plus génial est ton esprit<br>
      Admirent les floraisons de ta pensée<br>
      Comme moi pour la femme que tu es<br>
      Et les pivoines seront certaines toujours<br>
      Pourquoi pour toi je ressens tant d'amour</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "La Fougue": {
    title: "La Fougue",
    content: `
      <p>Dans le bruissement d'une nuit d'été<br>
      Deux amoureux étaient là, enlacés<br>
      Et dans leurs nudités d'adolescents<br>
      Se découvraient avec empressement<br>
      Leurs corps en une danse merveilleuse<br>
      Se mélangeaient d'une fougue furieuse<br>
      Et alors qu'ils s'amusaient à loisir<br>
      Savouraient là les prémices du plaisir</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Pensees pansees": {
    title: "Pensées pansées",
    content: `
      <p>Un instant je me suis enlisé dans mes pensées en lisant,<br>
      à mes dépens celles-ci ont pansées mes plaies pour me faire sentir réellement vivant.</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Phallucephale": {
    title: "Phallucéphale",
    content: `
      <p>Aujourd’hui partout, dans les villes, les rues et on fait comme si c’était normal.<br>
      Il y a malheureusement trop de cons qui utilisent leurs phallus comme encéphale.</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Seulement Toi": {
    title: "Seulement Toi",
    content: `
      <p>C'est bien toi, seulement toi que j'aime. La perfection imparfaite qui m'a fait vaciller dès les premiers
      instants où je t'ai vu, tu étais différente, plus inspirante, plus incroyable que toutes les autres, et je l'ai su
      dès cette vision fugace et merveilleuse que ce serait toi, et seulement toi.
      Maintenant que j'apprends à te connaitre, à découvrir tes failles, tes peurs, tes désirs les plus secrets et
      tes plus belles envies, je ressens ce sentiment intense de vouloir faire partie de ta vie, de toi, de devenir
      une pièce indispensable à ton bonheur. Je souffre d'envie de te rendre heureuse, de balayer tes
      angoisses, de sublimer tes désirs et de réaliser avec toi tes plus grands rêves, car je le sais et je le ressens
      au plus profond de mon âme, c'est bien toi, et seulement toi que j'aime. La vie est belle, mais toi seule la
      rend merveilleuse..</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Apaisant Sable": {
    title: "Apaisant Sable",
    content: `
      <p>Allongé dans les dunes, le ciel de cette nuit douce et bleutée s'offre à moi dans la contemplation
      émerveillée de cet envoûtant firmament constellé d'éparses nuages. À la faible lueur d'un croissant
      de lune se reflétant de mille éclats dans les eaux sombres de la Méditerranée, je distingue fébrilement
      l'écume légère laissée à chaque venue des vagues sur la plage, ce clapotis régulier mêlé aux
      sifflements du mistral et des cigales soufflant jusqu'à mes oreilles, les mélodies calmes et reposantes
      du Lido endormi. Je ressens sur ma peau la caresse du vent nocturne, et frissonne à son contact baigné
      de l'air iodé du littoral, le sable doux et encore chaud d'où pointent quelques rares herbes folles se fait
      un écrin délicat et confortable dans lequel s'assoupir, et mes paupières avant de se refermer me laissent
      apercevoir au loin Sète et ses lumières scintillantes me rappelant un instant l'existence d'autres êtres tels
      que moi dans ce monde pourtant imparfait.</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Amanges": {
    title: "Amanges",
    content: `
      <p>Dans le silence apparent de clarté, au coin de pénombre assourdissant,
      les amants se retrouvent là où commence le royaume des anges.</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Art Veritable": {
    title: "Art Véritable",
    content: `
      <p>L'art est à la beauté ce que la beauté est à l'amour, une tentative de vérité</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Un Air du Midi": {
    title: "Un Air du Midi",
    content: `
      <p>Un petit air du Sud et puis l'on oublie tout<br>
      On se sent bien, chez soi, malgré vents et marées<br>
      La mer, l'écume, les embruns, le sable doux<br>
      Ou encore la Comédie et Montpellier<br>
      Ce n'est pas la où je suis né, où j'ai grandi<br>
      Mais quand je suis dans l'Hérault, là dans le Midi<br>
      Je me sens bien, chez moi, et heureux tout à fait</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Hein": {
    title: "Hein ?",
    content: `
      <p>Des heures paisibles au temps serein<br>
      Aucune labeur l'on serait enclin<br>
      Penses donc à ceux qui dans le besoin<br>
      Agissent en mal de sombres desseins<br>
      Vas à la rencontre de ce prochain<br>
      Et non à l'encontre de son chemin<br>
      Car beaucoup avant ont pensé en vain<br>
      Que plus vert serait-ce chez le voisin</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Les poemes": {
    title: "Les poèmes",
    content: `
      <p>De quoi pourrait-on parler finalement<br>
      À écrire quelques mots, réfléchissons-en<br>
      Un poème.. se doit-il d'être léger ?<br>
      Plein de joie ou de bonheur, plein de gaieté ?<br>
      Sinon inspirant, et tout de sentiments ?<br>
      De tendresse, de charme.. passionnément<br>
      Ou encore profond et plein de vérités<br>
      Sur l'instant, les larmes, le dégoût, l'amour<br>
      Un poème qui décrit la vie, sans détour<br>
      Aux mots puissants, et aux plus belles phrasées<br>
      À la syntaxe stylée de beaux atours<br>
      Comme ceux des écrivains, des grands poètes<br>
      Qui moralisateurs et nostalgiques<br>
      Nous font sentir seul et mélancolique<br>
      Ou au contraire, faisant de la vie fête<br>
      Nous permettent de grandir et d'espérer<br>
      De ressentir et finalement d'être<br>
      Et sur soi-même, de se reconcentrer<br>
      Ivre de ce que l'on souhaite vraiment<br>
      Un poème, c'est toutes ces choses là<br>
      Léger, profond, court et long, vrai ou pas<br>
      Un poème je pense est dans chaque instant<br>
      Un poème nous rends vivant, et cela..<br>
      Et cela je crois est le plus important</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Souvenirs": {
    title: "Les poèmes",
    content: `
      <p>A l'aube des nuits là où les vents se lèvent<br>
      Je marchais dans le froid, très loin sur la grève<br>
      La couleur des embruns se mêlant au brouillard<br>
      Je songeais aux tourments de ne plus te revoir<br>
      Et dans l'air salé de cette plaine immense<br>
      Je me souvenais nos débuts de romance<br>
      En ces instants bénis où nous étions heureux<br>
      Où nous conjuguions tout au futur de nous deux<br>
      Mais les odeurs du sable encore un peu ternies<br>
      Me rappelaient au deuil de cette ancienne vie<br>
      Et pour ne pas laisser aux nuits ces goûts amers<br>
      Déversais tout chagrin, ma tristesse à la mer<br>
      Alors de ce lointain je rebroussais chemin<br>
      Ramassais un coquillage au repos marin<br>
      Et pensant à toi là-haut dans les nuages<br>
      Le déposais au pied de ton ermitage</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },
  "Les Roses du Paradis": {
    title: "Les Roses du Paradis",
    content: `
      <p>Un jour viendra où même les roses ne fleuriront plus<br>
      À ces instants s'envoleront alors les anges déchus<br>
      Et tous s'élanceront à l'assaut des cieux immenses<br>
      Et le monde brûlant sera laissé sans pénitence<br>
      Les archanges de cette ère partiront en croisade<br>
      Et cette guerre meurtrira jusqu'au confins des Pléiades<br>
      Car même au paradis, si roses en feu leurs pétales<br>
      Alors seules resteront en fin, les épines du mal</p>
      <p><em>Guilhem Rebéjac</em></p>
    `
  },



  "Lune": {
    title: "La Lune Écarlate",
    content: `
      <p>A venir</p>
    `
  }
};

window.addEventListener('scroll', () => console.log("scroll global"));

document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener("load", function() {
      const loader = document.getElementById("loader");
      loader.style.opacity = "0";
      setTimeout(() => {
          loader.style.display = "none";
      }, 1000); // Correspond au fade-out CSS
  });

  const header = document.querySelector('.site-header');
  const logoDesktop = document.getElementById('site-logo-desktop');

  // Ne rien faire si pas en desktop
  const isDesktop = () => window.innerWidth > 768;

  if (!header || !logoDesktop) {
    console.error('Erreur : header ou logo introuvable !');
    return;
  }

  // Changement de logo uniquement en desktop
  let hideTimer = null;
  if (isDesktop()) {
    header.addEventListener('mouseenter', () => {
      logoDesktop.src = '../assets/images/RBJC_logo_noir_plein.png';
      header.classList.remove('transparent');
      header.classList.add('white');
      clearTimeout(hideTimer);
    });
    header.addEventListener('mouseleave', () => {
      logoDesktop.src = '../assets/images/RBJC_logo_blanc.png';
      header.classList.remove('white');
      // Réinitialiser le timer si il existe
      if (hideTimer !== null) {
        clearTimeout(hideTimer);
      }
      // Redémarrer un nouveau timer de 10 secondes
      hideTimer = setTimeout(() => {
        logoDesktop.src = '../assets/images/RBJC_logo_blanc.png';
        header.classList.remove('white');
        header.classList.add('transparent');
        console.log("Timer écoulé, logo et header réinitialisés");
      }, 3000);
    });
  }
  hideTimer = setTimeout(() => {
    logoDesktop.src = '../assets/images/RBJC_logo_blanc.png';
    header.classList.remove('white');
    header.classList.add('transparent');
    console.log("Timer écoulé, logo et header réinitialisés");
  }, 4400);


  // Récupérer le nom de la page actuelle
  const currentPage = window.location.pathname.split("/").pop();
  // Exécuter le code uniquement si ce n'est pas "contacts.html"
  if (currentPage !== "contacts.html") {
    // Flèche de scroll qui disparaît après 6 secondes
    const arrowContainer = document.querySelector(".scroll-arrow-container");
    const arrow = arrowContainer?.querySelector(".scroll-arrow");
    if (arrowContainer && arrow) {
      setTimeout(() => {
        // Déclencher l'animation de disparition
        arrow.style.animation = "disappearZoom 1s ease-out forwards";

        // À la fin de l'animation, masquer complètement le conteneur
        arrow.addEventListener("animationend", () => {
          arrowContainer.classList.add("hidden");
        });
      }, 3950); // 6 secondes avant le début de la disparition
    }
  }

  // Burger menu
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const placeholder = document.querySelector('#menu-placeholder');

  burger.addEventListener('click', () => {
    const isActive = menu.classList.toggle('active');
    burger.classList.toggle('active');
    burger.setAttribute('aria-expanded', isActive);

    if (isActive) {
      const menuHeight = menu.scrollHeight;
      placeholder.style.display = 'block';
      const adjustedHeight = menuHeight * 0.93; // 90% de la hauteur réelle
      placeholder.style.height = adjustedHeight + 'px';
    } else {
      placeholder.style.height = '0';
      setTimeout(() => {
        placeholder.style.display = 'none';
      }, 300);
    }
  });

  // 4. Activer le lien de navigation courant
  document.querySelectorAll('.menu a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });


  /** ---------------------
   * MODALE AUDIO
   * --------------------- */
  // Récupération des éléments système audio
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalAudio = document.getElementById('modal-audio');
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const progressBar = document.getElementById('progress-bar');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');
  const volumeSlider = document.getElementById('volume');
  const visualizer = document.getElementById('visualizer');
  const closeBtn = document.querySelector('.close-btn');
  const modalOverlay = document.querySelector('.modal-overlay');

  // Utilitaire pour formater le temps
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  // Ouvrir la modale audio
  function openModal() {
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
      modal.classList.add('visible');
    });
    document.body.style.overflow = 'hidden';
  }

  // Fermer la modale audio
  function closeModal() {
    modal.classList.remove('visible');
    modalAudio.pause();
    modalAudio.currentTime = 0;
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    visualizer.classList.add("paused");

    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 400);
  }

  // Contrôles audio
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (modalAudio.paused) {
        modalAudio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        visualizer.classList.remove("paused");
      } else {
        modalAudio.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        visualizer.classList.add("paused");
      }
    });
  }

  if (modalAudio && durationEl && progressBar) {
    modalAudio.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(modalAudio.duration);
      progressBar.max = modalAudio.duration;
    });
  }

  if (modalAudio && currentTimeEl && progressBar) {
    modalAudio.addEventListener('timeupdate', () => {
      progressBar.value = modalAudio.currentTime;
      currentTimeEl.textContent = formatTime(modalAudio.currentTime);
    });
  }

  if(progressBar) {
    progressBar.addEventListener('input', () => {
      modalAudio.currentTime = progressBar.value;
    });
  }

  if(volumeSlider) {
    volumeSlider.addEventListener('input', () => {
      modalAudio.volume = volumeSlider.value;
    });
  }

  if(closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
  }


  /** ---------------------
   * MODALE IMAGE
   * --------------------- */
  const imageModal = document.getElementById("modal-image");
  const imageView = document.getElementById("modal-image-view");
  const imageDescription = document.querySelector(".modal-image-description");
  const imageCloseBtn = document.querySelector(".modal-image-close");
  const imageOverlay = document.querySelector(".modal-image-overlay");

  function openImageModal(altText) {
    // Ferme modale audio si ouverte
    const audioModal = document.getElementById('modal');
    if (audioModal && !audioModal.classList.contains('hidden')) closeModal();

    // Ferme modale vidéo si ouverte
    const videoModal = document.getElementById('modal-video');
    if (videoModal && !videoModal.classList.contains('hidden')) closeVideoModal();

    const data = imageData[altText];
    if (!data) return;

    imageView.src = data.src;
    imageView.alt = altText;

    imageDescription.innerHTML = data.description
      ? data.description.replace(/\n/g, "<br>")
      : "";

    imageModal.classList.remove("hidden");

    // Animation avec classe "visible"
    requestAnimationFrame(() => {
      imageModal.classList.add("visible");
    });

    document.body.style.overflow = "hidden";
  }

  function closeImageModal() {
    imageModal.classList.remove("visible");

    setTimeout(() => {
      imageModal.classList.add("hidden");
      document.body.style.overflow = "";

      imageView.src = "";
      imageView.alt = "";
      imageDescription.innerHTML = "";

    }, 400);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !imageModal.classList.contains("hidden")) {
      closeImageModal();
    }
  });

  imageCloseBtn?.addEventListener("click", closeImageModal);
  imageOverlay?.addEventListener("click", closeImageModal);


  /** ---------------------
   * MODALE VIDÉO
   * --------------------- */
  const videoModal = document.getElementById("modal-video");
  const videoPlayer = document.getElementById("modal-video-player");
  const videoSource = videoPlayer?.querySelector("source");
  const videoDescription = document.querySelector(".modal-video-description");
  const videoCloseBtn = document.querySelector(".modal-video-close");
  const videoOverlay = document.querySelector(".modal-video-overlay");

  function openVideoModal(altText) {
    console.log({
      videoSource,
      videoDescription,
      videoPlayer,
      videoModal
    });
    // Ferme modale audio si ouverte
    const audioModal = document.getElementById('modal');
    if (audioModal && !audioModal.classList.contains('hidden')) closeModal();

    const data = videoData[altText];
    console.log("Données vidéo :", data);
    if (!data || !videoSource) return;

    videoSource.src = data.src;
    videoDescription.textContent = data.description; // → gardera les sauts de ligne (\n)
    videoDescription.innerHTML = data.description.replace(/\n/g, "<br>");

    videoPlayer.load();
    videoPlayer.play().catch(err => {
      console.warn("Autoplay refusé :", err);
    });

    videoModal.classList.remove("hidden");

    // Animation avec classe visible
    requestAnimationFrame(() => {
      videoModal.classList.add("visible");
    });

    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    videoModal.classList.remove("visible");
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoSource.src = "";

    // Laisse le temps à l'animation de se terminer avant de masquer
    setTimeout(() => {
      videoModal.classList.add("hidden");
      document.body.style.overflow = '';
    }, 400); // doit correspondre au `transition: opacity 0.4s` dans ton CSS
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !videoModal.classList.contains("hidden")) {
      closeVideoModal();
    }
  });

  videoCloseBtn?.addEventListener("click", closeVideoModal);
  videoOverlay?.addEventListener("click", closeVideoModal);

  /** ---------------------
   * MODALE TEXTE / LITTÉRATURE
   * --------------------- */
  const textModal = document.getElementById("modal-text");
  const textTitle = document.querySelector(".modal-text-title");
  const textBody = document.querySelector(".modal-text-body");
  const textCloseBtn = document.querySelector(".modal-text-close");
  const textOverlay = document.querySelector(".modal-text-overlay");

  function openTextModal(altText) {
    const data = textData[altText];
    if (!data) return;

    textTitle.textContent = data.title;
    textBody.innerHTML = data.content;

    textModal.classList.remove("hidden");
    requestAnimationFrame(() => {
      textModal.classList.add("visible");
    });
    document.body.style.overflow = "hidden";
  }

  function closeTextModal() {
    textModal.classList.remove("visible");
    setTimeout(() => {
      textModal.classList.add("hidden");
      document.body.style.overflow = "";
    }, 400);
  }

  textCloseBtn?.addEventListener("click", closeTextModal);
  textOverlay?.addEventListener("click", closeTextModal);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !textModal.classList.contains("hidden")) {
      closeTextModal();
    }
  });


  /** ---------------------
   * GESTION DES CARTES (Audio ou Vidéo)
   * --------------------- */
  document.querySelectorAll(".card, .text-card").forEach(card => {
    card.addEventListener("click", e => {
      // Vérifie si on est sur musique.html ou cinema.html
      const currentPage = window.location.pathname;
      if (currentPage.endsWith("musique.html") || currentPage.endsWith("audiovisuel.html") || currentPage.endsWith("design.html") || currentPage.endsWith("poesie.html") || currentPage.endsWith("roman.html")) {
        e.preventDefault();

        const img = card.querySelector("img");
        const filename = img?.src.split("/").pop();
        const altText = img?.alt;

        if (filename && audioMap[filename]) {
          const descriptionEl = document.querySelector('.modal-description');
          modalImage.src = img.src;
          modalAudio.src = audioMap[filename];
          descriptionEl.innerHTML = descriptionSongMap[filename] || "";
          openModal();
        } else if (altText && imageData[altText]) {
          openImageModal(altText);
        } else if (altText && videoData[altText]) {
          openVideoModal(altText);
        } else if (altText && textData[altText]) {
          openTextModal(altText);
        }
      }
    });
  });
});