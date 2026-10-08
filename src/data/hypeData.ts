export interface Athlete {
  id: string;
  name: string;
  role: string;
  club: string;
  country: string;
  category: 'attaquant' | 'defenseur' | 'ailier' | 'milieu';
  number?: string;
  image: string;
  statusTag: string;
  bio: string;
  quote: string;
  achievements: string[];
  keyPartnerships: string[];
  highlight: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  status: string;
  description: string;
  image?: string;
}

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/hypesportcom?stkn=MWhvbWIzcHI3dzcxeQ==',
  twitter: 'https://x.com/HypeSportCom',
  linkedin: 'https://www.linkedin.com/showcase/hypesportcommunication/',
  email: 'contact@hypesportcom.com'
};

export const ATHLETES: Athlete[] = [
  {
    id: 'cherif-ndiaye',
    name: 'Chérif Ndiaye',
    role: 'Attaquant',
    club: 'Samsunspor',
    country: 'Sénégal',
    category: 'attaquant',
    number: '12',
    image: '/src/assets/images/cherif_ndiaye_gold_1791472571368.jpg',
    statusTag: 'New Signing · Welcome',
    bio: 'Attaquant international sénégalais, champion d’Afrique (CAN) avec les Lions et buteur régulier en UEFA Champions League. Fer de lance offensif du Samsunspor en Süper Lig.',
    quote: "Avec Hype Sport, mon image a pris une dimension internationale. Sur le terrain je marque, en dehors Hype structure mon avenir.",
    achievements: [
      'Vainqueur & Médaillé d’Or Coupe d’Afrique des Nations (CAN)',
      'Buteur en phase de groupes UEFA Champions League',
      'Couverture Spéciale "Road to 2026"',
      'Titulaire en Süper Lig'
    ],
    keyPartnerships: ['Puma Football', 'Samsunspor', 'Hype Sport Communication'],
    highlight: 'Attaquant - Samsunspor · Lions du Sénégal'
  },
  {
    id: 'youssoupha-mbodj',
    name: 'Youssoupha Mbodj',
    role: 'Défenseur Central',
    club: 'SK Slavia Praha',
    country: 'Sénégal',
    category: 'defenseur',
    number: 'Slavia',
    image: '/src/assets/images/youssoupha_mbodj_slavia_1791472583572.jpg',
    statusTag: 'New Signing · Welcome',
    bio: 'Défenseur central gaucher de 22 ans, puissant et moderne. Titulaire sur la scène européenne avec le SK Slavia Prague, vainqueur de la Chance Liga et de la Coupe Nationale.',
    quote: "La transition vers l’Europe exigeait une communication millimétrée. Hype m’a positionné comme un pilier de club dès mon premier jour.",
    achievements: [
      'Vainqueur Chance Liga & Coupe avec le SK Slavia Praha',
      'Défenseur international sénégalais de 22 ans (Pied Gauche)',
      'Campagne de présentation européenne officielle',
      'Parcours en coupes d’Europe'
    ],
    keyPartnerships: ['Castore / Etoro Official Kit', 'SK Slavia Praha', 'Hype Sport'],
    highlight: 'Défenseur - SK Slavia Prague'
  },
  {
    id: 'samba-diallo',
    name: 'Samba Diallo',
    role: 'Ailier / Milieu Offensif',
    club: 'Dynamo Kiev',
    country: 'Sénégal',
    category: 'ailier',
    number: '10',
    image: '/src/assets/images/samba_diallo_shout_1791472593538.jpg',
    statusTag: 'New Signing · Welcome',
    bio: 'Capitaine emblématique des sélections jeunes du Sénégal et joueur percutant au Dynamo Kiev. Vitesse explosive et vision de jeu remarquable.',
    quote: "Hype sait comment mettre un joueur en lumière sans jamais dévier de la rigueur du terrain.",
    achievements: [
      'Capitaine et numéro 10 des sélections jeunes du Sénégal',
      'Joueur professionnel au Dynamo Kiev',
      'Campagne officielle de signature New Signing'
    ],
    keyPartnerships: ['Puma Football', 'Dynamo Kiev', 'Lions de la Teranga'],
    highlight: 'Ailier - Dynamo Kiev · Sénégal #10'
  },
  {
    id: 'iusuf-rassul',
    name: 'Iusuf Rassul',
    role: 'Attaquant',
    club: 'FC Barcelone',
    country: 'Sénégal',
    category: 'attaquant',
    number: '7',
    image: '/src/assets/images/iusuf_rassul_portrait_1791473770470.jpg',
    statusTag: 'New Signing · Welcome',
    bio: 'Attaquant athlétique et percutant évoluant au FC Barcelone, incarnant la nouvelle génération d’athlètes encadrés par HYPE SPORT COMMUNICATION.',
    quote: "Avoir Hype à ses côtés permet d’entrer sur le terrain avec l’esprit 100% libéré.",
    achievements: [
      'Signature officielle dans le roster Hype Sport',
      'Audit d’image et structuration de carrière professionnelle'
    ],
    keyPartnerships: ['Hype Sport Management'],
    highlight: 'Attaquant - FC Barcelone'
  },
  {
    id: 'mansour-gaye',
    name: 'Mansour Gaye',
    role: 'Joueur de Football',
    club: 'Ajel de Rufisque',
    country: 'Sénégal',
    category: 'attaquant',
    number: '99',
    image: '/src/assets/images/mansour_gaye_pose_1791472603443.jpg',
    statusTag: 'Signature · Welcome',
    bio: 'Talent explosif du football sénégalais, joueur décisif sous les couleurs de l’Ajel de Rufisque. Révélé par la campagne officielle "Ready to Shine".',
    quote: "Rejoindre Hype a transformé ma perception du métier. Ils nous apprennent que notre valeur dépasse les 90 minutes de jeu.",
    achievements: [
      'Signature majeure avec l’Ajel de Rufisque',
      'Campagne officielle "Ready To Shine"',
      'Personal branding et accompagnement de carrière'
    ],
    keyPartnerships: ['Ajel de Rufisque', 'Hype Sport Communication'],
    highlight: 'Joueur Polyvalent - Ajel de Rufisque'
  },
  {
    id: 'ibrahima-dione',
    name: 'Ibrahima Dione',
    role: 'Attaquant',
    club: 'Équipe Nationale du Sénégal',
    country: 'Sénégal',
    category: 'attaquant',
    number: '9',
    image: '/src/assets/images/ibrahima_dione_hand_1791472612993.jpg',
    statusTag: 'Signature · Welcome',
    bio: 'Porteur du numéro 9 des sélections nationales du Sénégal. Buteur d’instinct, puissance athlétique et ambassadeur Puma pour les maillots Home & Away.',
    quote: "Porter le maillot national avec le #9 impose une exigence absolue. Hype m'aide à canaliser cette ferveur en opportunités pérennes.",
    achievements: [
      'Numéro 9 de l’Équipe Nationale du Sénégal',
      'Égérie des maillots officiels Puma Football',
      'Signature officielle Hype Sport Communication'
    ],
    keyPartnerships: ['Puma Football', 'Fédération Sénégalaise de Football', 'Hype Sport'],
    highlight: 'Attaquant #9 - Lions du Sénégal'
  }
];

export const PARTNERS: Partner[] = [
  {
    id: 'puma',
    name: 'PUMA Football',
    category: 'Équipementier Mondial',
    status: 'Collaboration Actée',
    description: 'Partenariat officiel pour le Challenge Détection Puma Football et équipement des athlètes de l’agence.',
    image: '/src/assets/images/puma_collaboration_official_1791473743165.jpg'
  },
  {
    id: 'slavia',
    name: 'SK Slavia Praha',
    category: 'Club Partenaire Européen',
    status: 'Champion République Tchèque',
    description: 'Club UEFA de Youssoupha Mbodj, détenteur de la Chance Liga et participant aux compétitions européennes.'
  },
  {
    id: 'samsunspor',
    name: 'Samsunspor',
    category: 'Club Süper Lig',
    status: 'Süper Lig Turquie',
    description: 'Club de Chérif Ndiaye, un des clubs historiques et ambitieux du championnat turc.'
  },
  {
    id: 'ajel',
    name: 'Ajel de Rufisque',
    category: 'Club Professionnel Sénégal',
    status: 'Ligue Pro Sénégal',
    description: 'Club formateur et compétiteur d’élite au Sénégal accompagnant l’ascension de Mansour Gaye.'
  },
  {
    id: 'barca',
    name: 'FC Barcelone',
    category: 'Club d’Élite Mondial',
    status: 'LaLiga / Europe',
    description: 'Institution mondiale où évolue Iusuf Rassoul dans la formation et l’élite du football.'
  },
  {
    id: 'dynamo',
    name: 'Dynamo Kiev',
    category: 'Club UEFA Champions League',
    status: 'Championnat d’Ukraine / Europe',
    description: 'Club européen de Samba Diallo sur la scène continentale.'
  }
];

export const WHY_SIGN_PILLARS = [
  {
    number: '01',
    title: "L'image n'est pas un détail, c'est un pouvoir",
    summary: 'Le talent ouvre les portes, mais la marque personnelle négocie les salaires et attire les sponsors.',
    description: "Deux joueurs ayant les mêmes statistiques sur le terrain ne signeront jamais les mêmes contrats de sponsoring. Chez Hype, nous transformons votre aura en levier de négociation contractuelle auprès des clubs et des annonceurs."
  },
  {
    number: '02',
    title: 'Performance sur le terrain. Crédibilité en dehors.',
    summary: 'Vous vous concentrez sur vos 90 minutes. Nous pilotons votre stratégie de marque.',
    description: "Finies les sollicitations désordonnées et les publications impulsives. Notre équipe filtre les opportunités et produit vos annonces officielles pour préserver votre énergie et votre concentration sportive."
  },
  {
    number: '03',
    title: 'Des partenariats directs avec les géants de l’équipement',
    summary: 'Accédez à des marques de renommée mondiale comme Puma sans intermédiaire parasite.',
    description: "Nous structurons des dossiers de sponsoring irréprochables, appuyés par des chiffres réels et une crédibilité forte auprès des directeurs marketing des plus grands équipementiers."
  },
  {
    number: '04',
    title: 'Sécuriser et bâtir l’après-carrière dès aujourd’hui',
    summary: 'Une carrière sur le terrain dure 15 ans. Une marque personnelle forte dure toute une vie.',
    description: "En développant votre communauté et vos valeurs dès vos meilleures années, vous posez les fondations d'investissements et d'une influence durable bien après les crampons."
  }
];

export const EXPERTISES = [
  {
    id: 'personal-branding',
    number: '01',
    title: "Gestion d'image & Personal Branding",
    subtitle: 'Structurer votre identité pour transformer votre talent en marque forte',
    description: "Nous construisons une identité visuelle et éditoriale fidèle à votre personnalité, vos ambitions et vos valeurs. Du reveal de signature aux visuels de matchday, chaque détail est maîtrisé.",
    deliverables: [
      'Audit d’image & positionnement stratégique',
      'Direction artistique des annonces officielles (New Signing)',
      'Storytelling et charte d’expression personnelle',
      'Valorisation auprès des clubs et sponsors'
    ],
    impact: 'Transformation immédiate en marque sportive attractive pour les marques mondiales.'
  },
  {
    id: 'strategie-digitale',
    number: '02',
    title: 'Stratégie Digitale & Contenus Réseaux Sociaux',
    subtitle: 'Créer de l’engagement authentique et maîtriser votre empreinte en ligne',
    description: "Les réseaux sociaux sont votre première chaîne média. Nous concevons des contenus percutants (matchdays, victoires, sélections) pour fédérer vos supporters sans perturber votre calendrier sportif.",
    deliverables: [
      'Calendrier et gestion de vos réseaux sociaux',
      'Création d’affiches officielles de match',
      'Animation de communauté et contenus exclusifs',
      'Modération et protection de votre image'
    ],
    impact: 'Multiplication moyenne par 4 de l’engagement organique en 3 mois.'
  },
  {
    id: 'partenariats-sponsoring',
    number: '03',
    title: 'Partenariats & Sponsoring',
    subtitle: 'Connecter les athlètes aux équipementiers et marques de référence',
    description: "Grâce à notre collaboration actée avec Puma et notre réseau de marques sportswear et lifestyle, nous négocions des contrats d’équipement et de sponsoring avantageux.",
    deliverables: [
      'Négociation de contrats de sponsoring & équipementier',
      'Gestion des droits d’image et clauses d’exclusivité',
      'Activations de marque (Challenge Détection Puma, etc.)',
      'Suivi des dotations matérielles'
    ],
    impact: 'Revenus extra-sportifs sécurisés et valorisation commerciale maximale.'
  },
  {
    id: 'relations-medias',
    number: '04',
    title: 'Relations Médias & E-Réputation',
    subtitle: 'Protéger votre nom, anticiper les crises et rayonner dans la presse',
    description: "Nous préparons nos athlètes avec un média training rigoureux, gérons les sollicitations des journalistes et assurons une veille permanente pour préserver leur réputation.",
    deliverables: [
      'Média training & préparation aux interviews d’après-match',
      'Relations presse nationale et internationale',
      'Veille e-réputation 24/7 et gestion des prises de parole',
      'Communiqués de presse et déclarations officielles'
    ],
    impact: 'Crédibilité institutionnelle auprès des clubs acquéreurs et directeurs sportifs.'
  }
];
