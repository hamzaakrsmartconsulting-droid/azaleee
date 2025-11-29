// Script to initialize COMPLETE placements page content in MongoDB
// This includes ALL static content from the page
require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

// Connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/azalee_db';

// Define PageContent schema inline (CommonJS)
const PageContentSchema = new mongoose.Schema({
  path: {
    type: String,
    required: [true, 'Page path is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  title: {
    type: String,
    required: [true, 'Page title is required']
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  published: {
    type: Boolean,
    default: true
  },
  lastModified: {
    type: Date,
    default: Date.now
  },
  modifiedBy: {
    type: String,
    default: 'admin'
  }
}, {
  timestamps: true
});

const PageContent = mongoose.models.PageContent || mongoose.model('PageContent', PageContentSchema);

// COMPLETE content structure for placements page - ALL sections
const placementsContent = {
  // Hero Section
  hero: {
    h1: "Construire son patrimoine",
    introText: "Construire son patrimoine, c'est bien plus qu'investir. C'est donner du sens à son argent, structurer ses actifs avec méthode et préparer l'avenir de sa famille. Chez Azalée Patrimoine, nous vous accompagnons à chaque étape, en alliant performance, fiscalité optimisée et indépendance de conseil.",
    question: "Que souhaitez-vous faire ?",
    objectives: [
      "Faire fructifier votre épargne",
      "Financer un projet",
      "Optimiser ma transmission",
      "Revenus complémentaires",
      "Réduire ma fiscalité",
      "Préparer la retraite"
    ]
  },
  
  // Section 1: Comprendre les placements patrimoniaux
  section1: {
    h2: "Comprendre les placements patrimoniaux",
    introText: "Avant de parler de produits, parlons de stratégie. La réussite patrimoniale repose d'abord sur la bonne compréhension des outils disponibles et de leur articulation. Nous distinguons deux notions essentielles : les enveloppes et les supports d'investissement.",
    linkText: "Liens vers Section 8 : Les enveloppes - les Supports"
  },
  
  // Section 2: Les placements sans risques
  section2: {
    h2: "Les placements sans risques sont-ils vraiment les meilleurs placements ?",
    h3_inflation: {
      title: "Quel rôle joue l'inflation dans le choix d'un placement ?",
      content: "Les placements dits \"sans risque\", comme le Livret A, le LDDS ou les fonds euros, rassurent parce qu'ils garantissent le capital. Pourtant, leur rendement est souvent inférieur à l'inflation, ce qui signifie que votre argent perd de la valeur avec le temps.",
      inflation_explanation: "L'inflation, c'est l'augmentation générale des prix. Autrement dit, avec le même euro, vous pouvez acheter moins de choses qu'avant.",
      example: "Exemple : si une baguette coûtait 1 € il y a cinq ans et qu'elle coûte aujourd'hui 1,20 €, votre pouvoir d'achat a diminué de 20 %.",
      conclusion: "Ainsi, un placement \"sans risque\" peut cacher un risque invisible : celui de l'érosion du pouvoir d'achat.",
      strategy: "Pour faire fructifier votre épargne, l'objectif n'est pas d'éviter le risque, mais de le maîtriser intelligemment.",
      balanced_strategy: "Une stratégie équilibrée doit combiner liquidité, sécurité et rendement, selon votre horizon de placement et votre profil investisseur.",
      tip: "Astuce Azalée Patrimoine : conservez vos placements garantis pour votre épargne de précaution, et explorez des solutions plus performantes pour vos projets à moyen et long terme."
    },
    h3_risk_zero: {
      title: "Pourquoi le risque zéro n'existe pas en matière de placement ?",
      content: "Même un placement dit \"sûr\" comporte un risque : celui de ne pas atteindre vos objectifs financiers.",
      graph_explanation: "Le graphique ci-dessous illustre sept scénarios de rendement sur cinq ans : plus le rendement moyen augmente, plus la volatilité (les fluctuations à court terme) est forte.",
      compromise: "Ce compromis entre risque et performance est au cœur de toute stratégie d'investissement.",
      azalee_help: "Chez Azalée Patrimoine, nous vous aidons à déterminer le niveau de risque optimal pour que votre argent travaille sans compromettre votre sérénité."
    },
    h3_test: {
      title: "Testez vos connaissances et découvrez votre profil investisseur",
      content: "Avant d'investir, il est essentiel de comprendre votre relation au risque et votre niveau de connaissance financière.",
      help_list: [
        "votre taux de tolérance au risque",
        "vos objectifs patrimoniaux",
        "et les placements adaptés à votre horizon de temps."
      ],
      ctas: [
        { text: "Évaluer mes connaissances financières", link: "#" },
        { text: "Découvrir mon profil investisseur avec un conseiller Azalée", link: "https://calendly.com/contact-azalee-patrimoine" }
      ]
    }
  },
  
  // Section 3: Private equity
  section3: {
    intro: [
      "Parmi les placements les plus évoqués en 2025, le private equity — ou capital-investissement — attire de plus en plus d'épargnants en quête de sens et de performance.",
      "Après les placements dits \"sans risques\", ce type d'investissement promet une diversification vers l'économie réelle, avec des rendements potentiels bien supérieurs à ceux des marchés traditionnels.",
      "Mais attention : plus le potentiel est élevé, plus la compréhension et l'accompagnement sont indispensables."
    ],
    h2: "Private equity : effet de mode ou réelle opportunité ?",
    paragraphs: [
      "Le private equity séduit de plus en plus d'épargnants attirés par des rendements élevés et des histoires d'entreprises inspirantes.",
      "Mais derrière cette tendance, il est essentiel de rappeler une vérité : investir dans le non coté n'est pas anodin.",
      "Chaque projet est unique, et la réussite des uns ne garantit en rien celle des autres.",
      "En tant qu'ancien banquier, nous savons à quel point les entreprises peuvent être exposées à des risques d'endettement, de marché ou de gestion que le grand public mesure rarement dans leur globalité.",
      "Le private equity reste un univers réservé aux investisseurs capables d'en comprendre les rouages financiers, les horizons longs et les risques structurels."
    ],
    quote: {
      text: "Chez Azalée Patrimoine, nous ne cédons pas à l'effet de mode : nous privilégions la compréhension avant l'action.",
      conclusion: "Un bon investissement n'est pas celui que tout le monde fait, mais celui que vous comprenez vraiment."
    },
    more_paragraphs: [
      "Nous étudions avec attention les projets qui tiennent à cœur à nos clients.",
      "Notre rôle est d'en analyser la structure financière, le niveau de risque, la durée d'immobilisation et les perspectives de sortie.",
      "Nous mettons en lumière les avantages (diversification, potentiel de rendement, fiscalité avantageuse) autant que les inconvénients (illiquidité, risque de perte totale, complexité des valorisations).",
      "Le private equity peut être une opportunité réelle pour un patrimoine bien construit, mais il doit s'intégrer dans une stratégie globale et raisonnée.",
      "Comprendre avant d'investir, c'est déjà protéger son capital."
    ],
    questions: {
      title: "Les 4 questions à se poser avant d'investir dans le private equity",
      items: [
        {
          emoji: "🟢",
          number: "1",
          question: "Est-ce que je comprends réellement le modèle économique de l'entreprise ?",
          content: "Avant tout, il faut savoir comment l'entreprise gagne de l'argent, quels sont ses leviers de croissance et quels risques elle affronte.",
          conclusion: "Si vous ne pouvez pas expliquer son activité simplement, mieux vaut attendre avant d'investir."
        },
        {
          emoji: "🟡",
          number: "2",
          question: "Puis-je immobiliser mon argent plusieurs années ?",
          content: "Le private equity implique souvent une durée d'investissement longue (5 à 10 ans) sans possibilité de revente.",
          conclusion: "Il ne doit donc jamais concerner votre épargne de précaution."
        },
        {
          emoji: "🔵",
          number: "3",
          question: "Suis-je conscient du risque de perte en capital ?",
          content: "Investir dans le non coté, c'est accepter la possibilité de perdre tout ou partie du capital.",
          conclusion: "Ce risque doit être compensé par une diversification de vos placements."
        },
        {
          emoji: "🟣",
          number: "4",
          question: "Ai-je un conseil objectif pour m'accompagner ?",
          content: "Les intermédiaires en private equity ne sont pas tous indépendants.",
          conclusion: "Chez Azalée Patrimoine, nous analysons les projets sans parti pris commercial, en nous concentrant sur votre intérêt patrimonial."
        }
      ]
    },
    remember: {
      title: "À retenir :",
      points: [
        "Le private equity n'est ni un effet de mode, ni une solution miracle.",
        "C'est un investissement de conviction, réservé à ceux qui prennent le temps de comprendre ce dans quoi ils s'engagent.",
        "Azalée Patrimoine vous accompagne pour analyser la solidité des projets, mesurer le risque et bâtir une stratégie d'investissement cohérente avec vos objectifs."
      ]
    },
    ctas: [
      { text: "👉 Échanger sur un projet de private equity", link: "https://calendly.com/contact-azalee-patrimoine" },
      { text: "👉 Comprendre les risques avant d'investir", link: "https://calendly.com/contact-azalee-patrimoine" }
    ],
    conclusion: {
      paragraphs: [
        "Chaque investissement a son rôle, ses avantages et ses risques.",
        "Ce qui compte, ce n'est pas de suivre une tendance, mais de bâtir une stratégie cohérente avec votre profil, vos projets et votre horizon de vie.",
        "Chez Azalée Patrimoine, nous réalisons un diagnostic patrimonial complet pour identifier les forces et les zones d'amélioration de votre portefeuille.",
        "L'objectif : vous aider à faire les bons choix d'investissement, en toute transparence et avec une vision à long terme."
      ],
      quote: "Notre approche : comprendre avant d'agir, conseiller avant de placer.",
      ctas: [
        { text: "👉 Réaliser mon diagnostic patrimonial gratuit", link: "https://calendly.com/contact-azalee-patrimoine" },
        { text: "👉 Prendre rendez-vous avec un conseiller Azalée", link: "https://calendly.com/contact-azalee-patrimoine" }
      ]
    }
  },
  
  // Section 4: SCPI
  section4: {
    h2: "Peut-on enfin réinvestir en SCPI ou faut-il encore craindre une baisse des valorisations ?",
    intro: [
      "Les SCPI (Sociétés Civiles de Placement Immobilier) ont traversé une période mouvementée depuis 2022, marquée par la hausse brutale des taux d'intérêt et une revalorisation à la baisse de nombreuses parts.",
      "Mais faut-il pour autant s'en détourner ? Pas forcément. Comprendre le lien entre taux, immobilier et valorisation permet de replacer les choses dans leur contexte."
    ],
    h3_taux: {
      title: "Quand les taux montent, la valeur de l'immobilier baisse : pourquoi ?",
      explanation: "Le lien de cause à effet est simple :",
      points: [
        "Lorsque les taux d'intérêt augmentent, les crédits immobiliers coûtent plus cher.",
        "Les acheteurs (particuliers ou institutionnels) peuvent donc emprunter moins, ce qui réduit la demande.",
        "Or, moins de demande = baisse mécanique des prix pour rétablir l'équilibre du marché."
      ],
      paragraphs: [
        "Dans le cas des SCPI, dont la valeur dépend des expertises immobilières, cette correction des prix se traduit par une réévaluation à la baisse des parts.",
        "Certaines SCPI ont ainsi enregistré entre -5 % et -15 % de baisse depuis 2022, selon leur exposition (bureaux, commerces, logistique…)."
      ]
    },
    h3_reglementation: {
      title: "L'impact de la réglementation sur les valorisations depuis 2022",
      paragraphs: [
        "Depuis 2022, la réglementation de l'Autorité des Marchés Financiers (AMF) impose davantage de transparence et de réalisme dans l'évaluation des SCPI.",
        "Les sociétés de gestion doivent désormais :"
      ],
      points: [
        "se baser sur des valeurs d'expertise actualisées au moins une fois par an ;",
        "ajuster la valeur de retrait des parts si elle s'écarte trop de la valeur réelle du patrimoine ;",
        "et communiquer un rendement global (ou rendement interne) plutôt qu'un simple taux de distribution, jugé parfois trompeur."
      ],
      result: {
        title: "👉 Résultat :",
        text: "les baisses de 2023–2024 ne traduisent pas une crise du marché, mais une mise à niveau comptable et réglementaire.",
        conclusion: "Elles visent à rétablir la cohérence entre les prix affichés et la réalité économique."
      }
    },
    h3_revente: {
      title: "Revente de gré à gré : une solution alternative en période d'illiquidité",
      paragraphs: [
        "Depuis 2023, de nombreux épargnants se heurtent à un ralentissement du marché secondaire des SCPI, avec des délais de vente allongés.",
        "Dans ce contexte, la vente de gré à gré revient sur le devant de la scène.",
        "Ce mécanisme consiste à vendre directement ses parts à un autre investisseur, sans passer par le carnet d'ordres officiel de la société de gestion."
      ],
      advantages: {
        title: "Elle présente plusieurs avantages :",
        points: [
          "une plus grande flexibilité sur le prix de cession (souvent négocié à une légère décote, entre –5 % et –10 %),",
          "une rapidité d'exécution lorsqu'un acheteur est identifié,",
          "et une solution adaptée aux investisseurs souhaitant céder des parts anciennes ou moins liquides."
        ]
      },
      warning: "Mais cette pratique suppose de bien évaluer la valeur réelle des parts et de maîtriser les aspects fiscaux et administratifs de la transaction (agrément de la société de gestion, frais, droits d'enregistrement).",
      quote: "💬 Chez Azalée Patrimoine, nous accompagnons nos clients dans la revente de gré à gré pour garantir la sécurité juridique et financière de l'opération, tout en optimisant le prix de cession."
    },
    h3_reinvestir: {
      title: "Faut-il revenir sur les SCPI en 2025 ?",
      paragraphs: [
        "Après plusieurs trimestres d'ajustement, le marché montre des signes de stabilisation.",
        "Les taux semblent proches de leur pic, et certaines SCPI commencent déjà à retrouver des opportunités d'achat à prix décoté."
      ],
      strategy: {
        title: "C'est donc une période propice pour réinvestir avec discernement, en privilégiant :",
        points: [
          "les SCPI diversifiées (secteurs, zones géographiques, types d'actifs),",
          "les SCPI à capital variable réactives,",
          "et celles ayant anticipé la remontée des taux par une gestion prudente de la dette."
        ]
      }
    },
    cycle: {
      title: "Comprendre le cycle SCPI",
      remember: "À retenir :",
      points: [
        "Les SCPI ne sont pas des placements à court terme.",
        "Elles suivent un cycle immobilier de 7 à 10 ans, avec des phases d'expansion, de correction et de stabilisation.",
        "📉 Quand les taux montent → les valeurs baissent.",
        "📈 Quand les taux se stabilisent → les SCPI redeviennent attractives grâce à des rendements plus élevés sur les prix ajustés."
      ],
      criteria: {
        title: "Chez Azalée Patrimoine, nous analysons les SCPI selon trois critères :",
        points: [
          "Qualité du patrimoine (localisation, taux d'occupation, solidité des locataires)",
          "Politique de gestion (diversification, endettement, transparence)",
          "Potentiel de revalorisation à moyen terme"
        ]
      }
    },
    conclusion: {
      title: "Conclusion – Vers un réinvestissement raisonné",
      paragraphs: [
        "Les SCPI ne sont pas en déclin, elles se réinventent dans un nouveau cycle économique.",
        "Réinvestir aujourd'hui, c'est profiter de prix ajustés et de rendements potentiellement plus élevés, à condition d'être accompagné par un conseiller indépendant capable de décoder le marché."
      ],
      ctas: [
        { text: "👉 Faire le point sur mes SCPI actuelles", link: "https://calendly.com/contact-azalee-patrimoine" },
        { text: "👉 Identifier les opportunités 2025 avec un conseiller Azalée", link: "https://calendly.com/contact-azalee-patrimoine" }
      ]
    }
  },
  
  // Section 5: Assurance-vie luxembourgeoise
  section5: {
    h2: "Les contrats d'assurance-vie luxembourgeois : vers une démocratisation de l'exode ?",
    intro: [
      "Dans un contexte politique et fiscal incertain, de plus en plus de Français s'interrogent sur l'avenir de leur patrimoine.",
      "L'assurance-vie luxembourgeoise (AV Lux) attire ceux qui envisagent une expatriation, séduits par sa portabilité internationale et sa neutralité fiscale.",
      "Mais est-ce réellement une solution pour tous ? Ou seulement un outil réservé aux patrimoines internationaux ?"
    ],
    pourquoi: {
      title: "Pourquoi l'Assurance Vie Lux peut faire sens",
      items: [
        { title: "✅ Sécurité renforcée", text: "le triangle de sécurité et le super-privilège protègent mieux les souscripteurs en cas de faillite de l'assureur." },
        { title: "✅ Portabilité et neutralité fiscale", text: "idéale pour ceux qui changent de résidence fiscale." },
        { title: "✅ Large univers d'investissement", text: "supports multi-devises, fonds institutionnels, gestion sur mesure." }
      ]
    },
    limites: {
      title: "Les limites à connaître",
      items: [
        { title: "⚠️ Ticket d'entrée élevé", text: "(souvent > 250 000 €)" },
        { title: "⚠️ Frais plus importants", text: "pour les patrimoines inférieurs à 1 M€" },
        { title: "⚠️ Arbitrages complexes", text: "à distance en cas d'expatriation" },
        { title: "⚠️ Fonds en euros", text: "peu accessibles ou moins performants" },
        { title: "⚠️ Liquidité réduite", text: "et gestion sous mandat fréquente" }
      ]
    },
    regard: {
      title: "Le regard Azalée :",
      paragraphs: [
        "Le contrat luxembourgeois est une belle invention patrimoniale — mais surtout pour les bi-nationaux, expatriés ou familles à patrimoine supérieur à 1 M€.",
        "Pour un résident français, il faut se demander si l'on ne paie pas des fonctions dont on ne profitera jamais."
      ]
    },
    retenir: {
      title: "💡 À retenir",
      intro: "L'assurance-vie luxembourgeoise est un outil stratégique si :",
      points: [
        "vous préparez une expatriation,",
        "vous disposez d'un capital important,",
        "vous avez besoin d'une gestion sur mesure et internationale."
      ],
      conclusion: "Mais elle reste peu adaptée aux épargnants français cherchant un contrat souple, réactif et rentable à moindre coût."
    },
    ctas: [
      { text: "👉 Évaluer la pertinence d'un contrat luxembourgeois", link: "https://calendly.com/contact-azalee-patrimoine" },
      { text: "👉 Comparer avec un contrat français haut de gamme", link: "https://calendly.com/contact-azalee-patrimoine" }
    ]
  },
  
  // Section 6: Or et métaux précieux
  section6: {
    h2: "L'or et les métaux précieux : après +50 % en 2025, est-il trop tard pour investir ?",
    intro: [
      "L'année 2025 a confirmé le retour en force de l'or et des métaux précieux.",
      "Entre inflation persistante, tensions géopolitiques et ralentissement économique mondial, l'or a progressé de plus de 50 % sur un an, atteignant de nouveaux sommets historiques.",
      "Mais cette performance spectaculaire pose une question cruciale : est-il encore temps d'acheter, ou le train est-il déjà passé ?"
    ],
    pourquoi_flambe: {
      title: "Pourquoi l'or a flambé en 2025",
      intro: "L'or reste avant tout une valeur refuge. Sa flambée récente s'explique par plusieurs facteurs conjoints :",
      points: [
        { emoji: "📈", text: "L'inflation durable : même si elle ralentit, elle continue d'éroder le pouvoir d'achat des monnaies fiduciaires." },
        { emoji: "💸", text: "Les politiques monétaires expansionnistes : la baisse anticipée des taux d'intérêt réels a dopé l'attrait des actifs non rémunérés comme l'or." },
        { emoji: "🌍", text: "Les tensions géopolitiques (Europe de l'Est, Asie) : elles alimentent la recherche de sécurité." },
        { emoji: "🏦", text: "Les achats massifs des banques centrales, notamment asiatiques, qui renforcent la demande structurelle." }
      ],
      conclusion: "L'or a ainsi joué pleinement son rôle de bouclier contre la perte de confiance et la dépréciation monétaire."
    },
    trop_tard: {
      title: "Trop tard pour investir ? Pas forcément. Mais autrement.",
      paragraphs: [
        "Historiquement, acheter de l'or au plus haut n'a jamais été catastrophique… à condition de savoir pourquoi on le détient.",
        "L'or n'est pas un placement spéculatif, c'est un outil de diversification et de préservation de valeur."
      ],
      quote: "💬 En d'autres termes : on n'achète pas l'or \"pour gagner\", on l'achète \"pour ne pas perdre\".",
      strategy: {
        intro: "Aujourd'hui, il serait risqué d'augmenter fortement son exposition après une telle hausse, mais il reste pertinent de :",
        points: [
          "détenir une part stratégique (5 à 10 % du patrimoine) en or ou métaux précieux,",
          "privilégier les supports indirects (ETF adossés, certificats, fonds matières premières) pour la liquidité,",
          "échelonner ses achats dans le temps (DCA) plutôt que d'entrer d'un bloc."
        ]
      }
    },
    autres_metaux: {
      title: "Et les autres métaux précieux ?",
      paragraphs: [
        "L'argent a souvent un effet de levier sur l'or, mais il reste plus volatil et dépend davantage de la demande industrielle.",
        "Le platine et le palladium sont liés au secteur automobile (catalyseurs), donc plus cycliques.",
        "Le cuivre, considéré comme le \"métal de la transition énergétique\", attire aussi les investisseurs thématiques.",
        "👉 Ces métaux peuvent compléter une stratégie de diversification, mais ils n'ont pas le même rôle que l'or : ce sont des actifs de croissance, pas de protection."
      ]
    },
    strategie: {
      title: "L'or dans une stratégie patrimoniale équilibrée",
      remember: "À retenir :",
      points: [
        "L'or ne rapporte rien, mais il protège en cas de crise.",
        "Il agit comme assurance contre la perte de confiance dans les marchés financiers.",
        "Une exposition raisonnable (5 à 10 %) suffit à réduire la volatilité d'un portefeuille.",
        "Mieux vaut acheter progressivement que spéculer sur le point d'entrée parfait.",
        "Chez Azalée Patrimoine, nous intégrons l'or dans une logique d'équilibre : ni peur, ni euphorie — juste du bon sens."
      ]
    },
    conclusion: {
      title: "Conclusion – L'or, toujours d'actualité, mais plus pour la sérénité que pour le profit",
      paragraphs: [
        "Après +50 % de performance, l'or n'est plus une opportunité de rendement, mais reste un outil de stabilité patrimoniale.",
        "Investir aujourd'hui, c'est accepter de payer la tranquillité : la certitude que, quelle que soit la conjoncture, une partie du patrimoine reste à l'abri."
      ],
      ctas: [
        { text: "👉 Faire le point sur ma stratégie de diversification", link: "https://calendly.com/contact-azalee-patrimoine" },
        { text: "👉 Déterminer la part optimale d'or dans mon portefeuille", link: "https://calendly.com/contact-azalee-patrimoine" }
      ]
    }
  },
  
  // Section 7: Produits structurés
  section7: {
    h2: "Les produits structurés : pourquoi tout le monde s'accorde enfin sur ces placements ?",
    intro: [
      "Longtemps perçus comme techniques, les produits structurés se sont imposés comme une solution d'équilibre dans les portefeuilles patrimoniaux.",
      "Aujourd'hui, assureurs, brokers, conseillers et clients y trouvent chacun leur compte, un consensus rare dans l'univers de l'investissement.",
      "Mais pourquoi cet engouement ? Et comment expliquer que ces produits séduisent aussi bien les investisseurs prudents que les profils dynamiques ?"
    ],
    mi_chemin: {
      title: "Un placement à mi-chemin entre prudence et rendement",
      intro: "Les produits structurés sont des instruments hybrides :",
      points: [
        "une partie obligataire pour la protection du capital,",
        "une partie dérivée liée à un indice ou un panier d'actions, pour capter de la performance."
      ],
      result: "👉 Résultat : des contrats capables d'offrir un rendement cible défini à l'avance, tout en limitant les pertes grâce à des mécanismes de protection.",
      conclusion: "C'est cette visibilité qui rassure les épargnants, surtout après les chocs boursiers récents : ils savent dans quelles conditions ils gagnent ou perdent."
    },
    assureurs: {
      title: "Pourquoi les assureurs aiment les produits structurés",
      intro: "Pour les assureurs, ces produits répondent à un double enjeu :",
      points: [
        "Remplacer progressivement les fonds euros (dont les rendements sont sous pression),",
        "tout en maîtrisant leur risque global de bilan grâce à une ingénierie financière encadrée."
      ],
      conclusion: "Ils permettent donc de maintenir un rendement attractif sans déséquilibrer la gestion financière du contrat d'assurance-vie.",
      quote: "💬 \"Les produits structurés, c'est le chaînon manquant entre le fonds euro et les marchés actions.\""
    },
    brokers: {
      title: "Pourquoi les brokers et les banques les plébiscitent",
      intro: "Les brokers spécialisés conçoivent aujourd'hui des structures sur mesure avec :",
      points: [
        "des sous-jacents variés (indices, paniers sectoriels, ESG…),",
        "des barrières de protection élevées (souvent 50 à 60 % de baisse avant perte en capital),",
        "et une transparence accrue sur les frais et les scénarios."
      ],
      paragraphs: [
        "Le marché s'est professionnalisé : les émissions sont mieux calibrées et les distributeurs mieux formés.",
        "Résultat : une offre lisible, standardisée et encadrée par l'AMF."
      ]
    },
    cgp: {
      title: "Pourquoi les CGP s'y retrouvent",
      intro: "Les conseillers en gestion de patrimoine apprécient les produits structurés pour leur souplesse :",
      points: [
        "Ils s'intègrent dans l'assurance-vie, le PER, ou un compte-titres,",
        "Ils permettent d'adapter le profil rendement/risque au client,",
        "Ils offrent une communication claire sur les conditions de gain et de protection."
      ],
      paragraphs: [
        "En période d'incertitude, ils servent d'outil d'allocation intelligente : ni trop risqué, ni trop défensif.",
        "Et ils valorisent la valeur ajoutée du conseil, car leur compréhension nécessite un accompagnement professionnel."
      ]
    },
    clients: {
      title: "Pourquoi les clients en redemandent",
      intro: "Côté clients, trois éléments clés expliquent l'adhésion :",
      points: [
        { title: "Lisibilité", text: " : le scénario est connu dès le départ (ex. +9 %/an si l'indice ne baisse pas de plus de 40 %)." },
        { title: "Protection", text: " : un filet de sécurité en cas de baisse des marchés." },
        { title: "Souplesse", text: " : possibilité d'investir dans un produit calibré pour son horizon (3 à 8 ans) et son profil." }
      ],
      conclusion: "Résultat : les performances réelles observées entre 2016 et 2024 sont souvent supérieures à celles des fonds euros, avec une volatilité contenue."
    },
    resume: {
      title: "Les produits structurés en 3 phrases",
      remember: "À retenir :",
      points: [
        "Un produit structuré, c'est un rendement cible + une protection définie à l'avance.",
        "Il est particulièrement adapté aux marchés incertains, où la volatilité devient une opportunité.",
        "Il ne faut pas chercher à \"battre le marché\", mais à sécuriser une performance maîtrisée dans le temps."
      ],
      azalee: {
        intro: "Chez Azalée Patrimoine, nous analysons chaque structure selon trois critères :",
        points: [
          "La qualité de l'émetteur,",
          "Le niveau de protection du capital,",
          "Le scénario de marché réaliste sur lequel repose le rendement."
        ]
      }
    },
    consensus: {
      title: "Pourquoi ce consensus n'est pas un hasard",
      table: [
        { acteur: "Assureur", gain: "Un rendement attractif sans déséquilibrer son bilan" },
        { acteur: "Broker", gain: "Une ingénierie rentable et transparente" },
        { acteur: "CGP", gain: "Un produit lisible et différenciant pour ses clients" },
        { acteur: "Client final", gain: "Un couple rendement / risque cohérent et encadré" }
      ],
      conclusion: "Ce cercle vertueux explique leur succès : tout le monde y trouve son équilibre — à condition de les comprendre et de les choisir avec discernement."
    },
    conclusion: {
      title: "Conclusion – La clé, c'est la structuration",
      paragraphs: [
        "Les produits structurés ne sont pas des placements miracles, mais des instruments d'ingénierie patrimoniale.",
        "Leur succès repose sur la pédagogie et la qualité du conseil.",
        "Bien construits, ils permettent de réconcilier performance et prudence, et de rassurer les clients sans brider leur rendement."
      ],
      ctas: [
        { text: "👉 Découvrir les meilleures opportunités structurées du moment", link: "/placements/produits-structures" },
        { text: "👉 Faire le point sur vos placements sécurisés avec un conseiller Azalée", link: "https://calendly.com/contact-azalee-patrimoine" }
      ]
    },
    produits: {
      title: "La sélection de produits structurés d'Azalée pour 2025/2026",
      items: [
        {
          name: "ATHENA DÉGRESSIF LUXE – JUILLET 2025",
          code: "(FR001400ZAJ7)",
          rendement: "+15%",
          thematique: "Luxe & consommation mondiale",
          emetteur: "Natixis Structured Issuance SA",
          garant: "Natixis (Notation A / A1 / A+)",
          duree: "10 ans (échéance 2035)",
          rendement_detail: "+1,25 % par mois écoulé, soit jusqu'à +15 % par an",
          link: "/placements/produits-structures/athena-luxe-2025"
        },
        {
          name: "ATHENA DÉGRESSIF IA & ROBOTIQUE – JUILLET 2025",
          code: "(FR001400ZAJ8)",
          rendement: "+15%",
          thematique: "Intelligence artificielle & robotique",
          emetteur: "Natixis Structured Issuance SA",
          duree: "10 ans (échéance 2035)",
          rendement_detail: "+1,25 % par mois écoulé, soit jusqu'à +15 % par an",
          link: "/placements/produits-structures/athena-ia-robotique-2025"
        },
        {
          name: "ÉNERGIE DÉGRESSIVE AVRIL 2025",
          code: "(FR001400WTQ9)",
          rendement: "9%",
          thematique: "Énergie & transition énergétique",
          emetteur: "BNP Paribas Issuance B.V.",
          duree: "10 ans (échéance 2035)",
          rendement_detail: "9 % par an",
          link: "/placements/produits-structures/energie-degressive-2025"
        },
        {
          name: "AUTO-CALL CRÉDIT AGRICOLE – JUIN 2025",
          code: "(FR001459AB6990)",
          rendement: "+15%",
          thematique: "Secteur bancaire / action unique",
          emetteur: "Société Générale",
          duree: "5 ans (échéance 2030)",
          rendement_detail: "+15 % déjà réalisés depuis le lancement",
          link: "/placements/produits-structures/autocall-credit-agricole-2025"
        },
        {
          name: "AMBITION PHARMA JANVIER 2026",
          code: "(EI21918ACD)",
          rendement: "10%",
          thematique: "Santé & biotechnologies",
          emetteur: "Crédit Agricole CIB",
          duree: "8 ans (échéance 2034)",
          rendement_detail: "10 % par an",
          link: "/placements/produits-structures/ambition-pharma-2026"
        },
        {
          name: "Phoenix Bearish EURIBOR 12M Novembre 2025",
          rendement: "7%",
          thematique: "Taux d'intérêt",
          sous_jacent: "Euribor 12 mois",
          rendement_detail: "7 % par an",
          link: "/placements/produits-structures"
        }
      ],
      disclaimer: "🔒 Disclaimer global : Les produits présentés sont destinés à des investisseurs avertis ayant une bonne compréhension des mécanismes et des risques associés aux produits structurés. Ils ne constituent pas un conseil en investissement personnalisé. Avant toute souscription, il est impératif de vérifier l'adéquation du produit avec le profil de risque et les objectifs d'investissement de chaque investisseur."
    }
  },
  
  // Section 8: Enveloppes et supports
  section8: {
    enveloppes: {
      h2: "Les enveloppes d'investissement",
      intro: "Les enveloppes constituent le cadre juridique et fiscal de vos placements. Elles déterminent la fiscalité applicable, la souplesse de gestion et la transmission du capital.",
      items: [
        {
          title: "L'assurance-vie",
          description: "Outil central de la gestion de patrimoine, l'assurance-vie permet de diversifier ses placements, de bénéficier d'une fiscalité avantageuse et de préparer la transmission de son patrimoine.",
          link: "/placements/assurance-vie",
          button: "Nos assureurs partenaires"
        },
        {
          title: "Le Plan Épargne Retraite (PER)",
          description: "Le PER combine avantage fiscal immédiat et épargne long terme. Il permet de préparer sa retraite tout en réduisant son impôt sur le revenu.",
          link: "/placements/pea-per",
          button: "Simuler votre versement idéal"
        },
        {
          title: "Le PEA et le compte-titres",
          description: "Le PEA favorise l'investissement en actions européennes dans un cadre fiscal attractif, tandis que le compte-titres permet une plus grande liberté d'investissement. Ces enveloppes favorisent l'investissement à risque fort. Ce qui peut engendrer des phases de moins values. Saviez-vous qu'elles sont reportables.",
          link: "/placements/compte-titres",
          button: "Faites analyser vos contrats et vérifier vos déclarations de revenus"
        },
        {
          title: "Le contrat de capitalisation",
          description: "Peu connu, le contrat de capitalisation reprend les atouts de l'assurance-vie, mais offre des avantages civils spécifiques en matière de transmission."
        },
        {
          title: "Les livrets réglementés et placements court terme",
          description: "Utiles pour sécuriser une épargne de précaution, les livrets (A, LDDS, LEP) offrent sécurité et liquidité, mais leur rendement reste limité."
        }
      ]
    },
    supports: {
      h2: "Les supports d'investissement",
      intro: "Les supports représentent les actifs dans lesquels vous investissez à l'intérieur de vos enveloppes. Ils permettent d'adapter votre stratégie à votre profil de risque et à vos objectifs de rendement.",
      items: [
        {
          title: "Les fonds en euros et unités de compte",
          description: "Les fonds en euros garantissent le capital, tandis que les unités de compte (actions/obligations…) offrent un potentiel de performance supérieur, au prix d'une volatilité plus forte."
        },
        {
          title: "Les produits structurés",
          description: "Les produits structurés allient protection partielle du capital et rendement conditionnel. Chez Azalée, nous sélectionnons les meilleurs émetteurs et suivons les performances réelles de nos produits maison.",
          link: "/placements/produits-structures"
        },
        {
          title: "Les SCPI et OPCI",
          description: "Les SCPI et OPCI permettent d'investir dans l'immobilier sans contrainte de gestion. Nos experts sélectionnent des fonds solides, performants et diversifiés pour générer un revenu régulier.",
          link: "/placements/scpi-opci"
        },
        {
          title: "Les fonds thématiques et ESG",
          description: "Les fonds thématiques (santé, climat, technologie, infrastructures) et les fonds labellisés ESG offrent une nouvelle façon d'investir durablement tout en participant à la transition économique."
        },
        {
          title: "Les placements alternatifs et non cotés",
          description: "Pour diversifier un patrimoine et en accroître le potentiel de rendement, les placements alternatifs occupent une place privilégiée dans nos allocations."
        },
        {
          title: "Le Private Equity",
          description: "Le Private Equity (capital-investissement) permet d'investir dans des entreprises non cotées. C'est un levier puissant de création de valeur à long terme, avec des rendements potentiels élevés.",
          link: "#section3"
        },
        {
          title: "Les GFA et GFV",
          description: "Les groupements fonciers agricoles ou viticoles offrent la possibilité de détenir une part du patrimoine rural français tout en bénéficiant d'avantages fiscaux attractifs."
        },
        {
          title: "Les placements atypiques",
          description: "Forêts, vins, art ou métaux précieux : ces actifs réels offrent une diversification tangible et parfois passionnelle. Ils complètent une allocation patrimoniale équilibrée."
        }
      ]
    },
    expertise: {
      h2: "L'expertise Azalée Patrimoine",
      intro: "Au-delà des produits, c'est la méthode Azalée qui fait la différence : une vision globale, un accompagnement humain et une exigence de transparence à chaque étape.",
      items: [
        {
          title: "Une méthodologie éprouvée",
          description: "Audit patrimonial, allocation stratégique, suivi annuel : notre approche repose sur la rigueur et la pédagogie."
        },
        {
          title: "Des performances mesurées et partagées",
          description: "Nous publions régulièrement les résultats de nos allocations et produits structurés, dans une logique de transparence totale."
        },
        {
          title: "Une approche responsable",
          description: "Nos conseils intègrent systématiquement les critères ESG pour concilier performance, durabilité et éthique."
        }
      ]
    },
    pourquoi: {
      h2: "Pourquoi investir avec Azalée Patrimoine ?",
      intro: "Faire confiance à Azalée Patrimoine, c'est choisir un cabinet indépendant, transparent et engagé. Nos experts accompagnent chaque client avec méthode, écoute et responsabilité.",
      points: [
        "Accompagnement personnalisé et humain",
        "Stratégies sur-mesure et indépendantes",
        "Accès à des produits réservés aux investisseurs avertis",
        "Suivi digital et tableau de bord patrimonial",
        "Engagement éthique et durable"
      ]
    }
  },
  
  // FAQ Section
  faq: {
    h2: "FAQ - Construire son patrimoine",
    items: [
      {
        question: "Quelle différence entre support et enveloppe d'investissement ?",
        answer: "Les enveloppes (assurance-vie, PEA, PER...) sont le cadre juridique et fiscal de vos placements. Les supports (actions, obligations, SCPI...) sont les actifs dans lesquels vous investissez à l'intérieur de ces enveloppes. Pour en savoir plus, consultez la Section 1 et la Section 8.",
        link: "#section8"
      },
      {
        question: "Quels placements offrent le meilleur rendement net en 2025 ?",
        answer: "Le rendement dépend de votre profil de risque et de votre horizon. Les ETF crypto dans l'assurance-vie peuvent offrir des rendements élevés mais avec un risque important. Consultez un conseiller Azalée pour une analyse personnalisée.",
        link: "#"
      },
      {
        question: "Comment investir dans le Private Equity ?",
        answer: "Le Private Equity nécessite une compréhension approfondie des risques et des mécanismes. Consultez la Section 3 pour comprendre les 4 questions essentielles à se poser avant d'investir.",
        link: "#section3"
      },
      {
        question: "Quels sont les placements adaptés à mon profil fiscal ?",
        answer: "Cela dépend de votre situation personnelle (revenus, patrimoine, objectifs). Un diagnostic patrimonial gratuit avec un conseiller Azalée vous permettra d'identifier les meilleures opportunités.",
        link: "https://calendly.com/contact-azalee-patrimoine"
      },
      {
        question: "Quels sont les risques des produits structurés ?",
        answer: "Les produits structurés offrent une protection du capital mais comportent des risques (perte en capital, risque de l'émetteur, liquidité). Consultez la page dédiée aux produits structurés pour plus d'informations.",
        link: "/placements/produits-structures"
      },
      {
        question: "Quel est le placement préféré des français ?",
        answer: "L'assurance-vie reste le placement préféré des Français pour sa fiscalité avantageuse et sa flexibilité. Découvrez notre page dédiée à l'assurance-vie.",
        link: "/placements/assurance-vie"
      },
      {
        question: "Le fond Défense vaut-il vraiment le coût ?",
        answer: "Consultez l'article de blog de Medhy sur le fond Défense pour une analyse détaillée.",
        link: "#"
      },
      {
        question: "Le livret A va-t-il baisser en 2026 ?",
        answer: "Le taux du livret A est corrélé à la baisse des taux directeurs. Consultez notre article sur la baisse du taux du livret A.",
        link: "#"
      },
      {
        question: "Que peut-on attendre d'un placement ESG ?",
        answer: "Les placements ESG (Environnement, Social, Gouvernance) permettent d'allier performance financière et impact positif. Ils participent à la transition économique tout en offrant des opportunités de rendement.",
        link: "#"
      },
      {
        question: "C'est quoi la loi industrie verte ?",
        answer: "La loi industrie verte est une mesure fiscale visant à encourager les investissements dans la transition écologique. Consultez un conseiller Azalée pour comprendre comment en bénéficier.",
        link: "https://calendly.com/contact-azalee-patrimoine"
      },
      {
        question: "Comment décrypter les frais de votre contrat d'assurance vie ?",
        answer: "Les frais d'assurance-vie peuvent être complexes (frais d'entrée, de gestion, d'arbitrage...). Un conseiller Azalée peut vous aider à comprendre et optimiser ces frais.",
        link: "https://calendly.com/contact-azalee-patrimoine"
      }
    ]
  }
};

// Deep merge function to merge objects without overwriting existing content
function deepMerge(target, source) {
  const output = { ...target };
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else if (Array.isArray(source[key])) {
        if (!target[key] || target[key].length === 0) {
          output[key] = [...source[key]];
        } else {
          output[key] = [...target[key]];
        }
      } else {
        if (!target[key] || target[key] === '') {
          output[key] = source[key];
        }
      }
    });
  }
  
  return output;
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

async function initPlacementsContent() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const existingContent = await PageContent.findOne({ path: 'placements' });
    
    if (existingContent) {
      console.log('⚠️  Content for "placements" already exists.');
      console.log('   Merging with existing content (preserving your changes)...\n');
      
      // Merge existing content with new content (preserving existing values)
      const mergedContent = deepMerge(existingContent.content || {}, placementsContent);
      
      existingContent.content = mergedContent;
      existingContent.title = 'Placements - Construire son patrimoine';
      existingContent.lastModified = new Date();
      await existingContent.save();
      console.log('✅ Content merged successfully!');
      console.log('   Your existing content has been preserved.');
    } else {
      const newContent = new PageContent({
        path: 'placements',
        title: 'Placements - Construire son patrimoine',
        content: placementsContent,
        published: true
      });
      await newContent.save();
      console.log('✅ Content created successfully!');
    }

    console.log('\n📋 Content structure:');
    console.log('   - Hero section');
    console.log('   - Section 1: Comprendre les placements patrimoniaux');
    console.log('   - Section 2: Les placements sans risques');
    console.log('   - Section 3: Private equity');
    console.log('   - Section 4: SCPI');
    console.log('   - Section 5: Assurance-vie luxembourgeoise');
    console.log('   - Section 6: Or et métaux précieux');
    console.log('   - Section 7: Produits structurés');
    console.log('   - Section 8: Enveloppes et supports');
    console.log('   - FAQ section');

  } catch (error) {
    console.error('❌ Error initializing content:', error.message);
    if (error.message.includes('ECONNREFUSED')) {
      console.error('\n💡 MongoDB is not running!');
      console.error('   Start MongoDB: net start MongoDB (PowerShell as Admin)');
    }
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
}

initPlacementsContent();

