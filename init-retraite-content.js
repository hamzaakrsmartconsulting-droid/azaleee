// Script to initialize COMPLETE retraite page content in MongoDB
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

// COMPLETE content structure for retraite page - ALL sections
const retraiteContent = {
  hero: {
    h1: "Préparer sa retraite sereinement avec Azalée Patrimoine",
    description1: "Anticiper sa retraite, c'est protéger son niveau de vie futur tout en optimisant la gestion de son patrimoine. Dans un contexte de réformes successives et d'allongement des carrières, bien préparer sa retraite ne relève plus du confort, mais d'une véritable stratégie patrimoniale.",
    description2: "Chez <strong className=\"font-semibold\">Azalée Patrimoine</strong>, nous accompagnons nos clients — salariés, dirigeants, indépendants ou professions libérales — pour qu'ils puissent <strong className=\"font-semibold\">transformer leur épargne en revenus durables</strong>, tout en bénéficiant d'une <strong className=\"font-semibold\">optimisation fiscale</strong> et d'une <strong className=\"font-semibold\">vision globale</strong> de leur patrimoine.",
    ctaButton: "Demander un diagnostic gratuit",
    ctaLink: "https://calendly.com/rdv-azalee-patrimoine/30min"
  },
  section1: {
    h2: "Pourquoi anticiper sa retraite dès aujourd'hui ?",
    evolution: {
      h3: "L'évolution du système de retraite français",
      description: "Le système français, historiquement fondé sur la répartition, fait face à des défis majeurs : vieillissement de la population, déséquilibre entre actifs et retraités, et allongement de la durée de cotisation. La réforme de 2023, repoussant l'âge légal à 64 ans, n'a fait qu'accentuer le besoin d'anticipation. L'État assure un socle minimal ; à chacun désormais de <strong>bâtir ses revenus complémentaires</strong>."
    },
    stats: {
      pensionMoyenne: "1666€",
      pensionLabel: "net/mois",
      message: "N'attendez pas qu'il soit trop tard"
    },
    ctaSimulateur: {
      text: "SIMULER VOTRE PENSION RETRAITE",
      link: "https://calendly.com/rdv-azalee-patrimoine/30min"
    },
    liberteFinanciere: {
      h3: "Préparer la liberté financière en anticipant l'impact du taux de remplacement",
      salaire: "4 000 €",
      salaireLabel: "Net de salaire par mois",
      pension: "MOINS DE 2000 €",
      pensionLabel: "De pension de retraite",
      description1: "Le taux de remplacement correspond au rapport entre votre dernière rémunération et votre pension retraite. Le taux de remplacement se situe aujourd'hui entre 40% et 60% pour la plupart des cadres.",
      description2: "Anticiper, c'est combler cet écart dès aujourd'hui en constituant des revenus futurs de complément."
    },
    calcul: {
      h3: "Avec un capital initial de 1000 €, en plaçant 200€ par mois pendant 30 ans à un taux de rendement net de 6,01%.",
      epargneMensuelle: "200 €",
      capitalFinal: "208 336 €",
      versementsCumules: "72 000 €",
      interetsCumules: "135 336 €"
    },
    avantage: {
      h3: "L'avantage de la préparation progressive",
      paragraphs: [
        "Plus on commence tôt, plus l'effort d'épargne est faible.",
        "Grâce à l'effet de capitalisation, un effort régulier dès 35 ou 40 ans permet de sécuriser un capital solide pour l'avenir.",
        "Azalée Patrimoine vous aide à définir le bon rythme d'investissement, en fonction de votre horizon, de vos revenus et de vos objectifs de vie."
      ]
    },
    bonASavoir: {
      h3: "Bon à savoir",
      paragraphs: [
        "Un cadre salarié perd en moyenne 30 à 40% de ses revenus à la retraite pour maintenir le même niveau de vie.",
        "Prenons un exemple concret : si vous percevez 100 000 € de revenus annuels au moment de votre départ, votre pension représentera environ 60 000 € par an."
      ]
    },
    focusAzalee: {
      title: "Focus Azalée",
      h4: "Le choc de revenus à la retraite",
      leSaviezVous: {
        title: "Le saviez-vous ?",
        text: "Un cadre salarié perd en moyenne 30 à 40% de son revenu au moment du passage à la retraite."
      },
      exemple: {
        title: "Exemple concret",
        revenuAvant: "Revenu avant retraite : 100 000 €/an",
        pensionEstimee: "Pension estimée : 60 000 €/an",
        perteAnnuelle: "Perte annuelle : 40 000 €",
        details: [
          "Sur une espérance de vie moyenne de 25 ans, cela représente : près d'1 million d'euros de pouvoir d'achat en moins sur la durée de la retraite.",
          "Et en tenant compte d'une fiscalité à 30%, la perte réelle s'élève à environ 28 000 € nets par an."
        ]
      },
      pourquoiAnticiper: {
        title: "Pourquoi anticiper :",
        items: [
          "Travaux d'amélioration du logement",
          "Voyages, loisirs, activités associatives",
          "Séjours en famille ou avec les petits-enfants"
        ],
        conclusion: "Préparer votre indépendance financière, c'est vous assurer de conserver votre confort de vie et votre liberté de choix à la retraite."
      }
    },
    perteRevenus: {
      text: "Cela signifie une baisse de 40 000 € de revenus chaque année.",
      paragraphs: [
        "Sur une espérance de vie moyenne de 23 ans à la retraite, cette perte de pouvoir d'achat atteint près d'un million d'euros cumulés.",
        "Et si l'on tient compte d'une <span className=\"font-semibold text-pink-600\">tranche marginale d'imposition</span> à 30%, la perte réelle de revenu disponible s'élève encore à environ 28 000 € nets par an.",
        "Certes, la retraite s'accompagne souvent d'une réduction des charges courantes — moins de crédits ou d'enfants à charge —, mais de nouvelles dépenses apparaissent :"
      ],
      depenses: [
        "travaux d'amélioration du logement",
        "voyages, loisirs",
        "remplacement du véhicule de fonction",
        "séjours en famille ou avec les petits-enfants"
      ],
      conclusion: "Anticiper cette transition patrimoniale est donc essentiel pour préserver votre qualité de vie et transformer vos revenus d'activité en revenus de liberté."
    }
  },
  section2: {
    h2: "Évaluer vos besoins futurs",
    simuler: {
      h3: "Simuler sa pension de retraite",
      paragraphs: [
        "Avant toute stratégie, il est essentiel de connaître le montant prévisionnel de sa pension.",
        "Azalée Patrimoine accompagne ses clients dans la lecture de leurs relevés de carrière et la simulation personnalisée de leur retraite.",
        "Vous pouvez également consulter les portails officiels tels que info-retraite.fr."
      ],
      link: {
        text: "Pour aller plus loin : découvrez notre outil de simulation retraite pour estimer votre future pension.",
        url: "/retraite/simulation"
      }
    }
  },
  section3: {
    h2: "S'organiser pour partir à la retraite à 50 ans : un objectif atteignable avec une stratégie patrimoniale solide",
    intro: {
      title: "Partir à la retraite à 50 ans, c'est possible.",
      paragraphs: [
        "En construisant une stratégie patrimoniale bien structurée — placements, fiscalité, revenus passifs — il est envisageable d'atteindre la liberté financière avant l'âge légal.",
        "Prendre sa retraite à 50 ans : un rêve pour beaucoup, une réalité pour certains.",
        "Atteindre la liberté financière à mi-parcours de sa vie professionnelle nécessite plus qu'une simple épargne. C'est une stratégie globale, structurée, et adaptée à chaque étape de votre parcours.",
        "Chez Azalée Patrimoine, nous accompagnons depuis plus de 20 ans les dirigeants, professions libérales et cadres supérieurs dans la construction d'une indépendance financière durable."
      ]
    },
    comprendre: {
      h3: "Comprendre la différence entre retraite légale et indépendance financière",
      paragraphs: [
        "Partir à la retraite à 50 ans, c'est avant tout atteindre son indépendance financière : générer suffisamment de revenus pour maintenir son niveau de vie sans dépendre d'un emploi.",
        "Là où la retraite légale repose sur un âge et un nombre de trimestres, l'indépendance financière repose sur une stratégie patrimoniale intelligente et proactive.",
        "<span className=\"font-semibold text-[#253F60]\">Retirement gap</span> : l'écart entre 50 ans et l'âge légal de la retraite.",
        "Le combler, c'est l'enjeu central d'une stratégie de liberté financière."
      ]
    },
    pourquoi: {
      h3: "Pourquoi vouloir partir à 50 ans ?",
      paragraphs: [
        "Après 25 ou 30 ans d'activité, nombreux sont ceux qui ressentent le besoin de ralentir, transmettre, ou se réinventer.",
        "Partir à 50 ans ne signifie pas ne plus rien faire, mais choisir comment et avec qui on veut travailler.",
        "Chez Azalée Patrimoine, nous aidons nos clients à transformer leurs revenus en liberté — en construisant un patrimoine capable de soutenir leurs projets personnels et familiaux."
      ]
    },
    combien: {
      h3: "Combien faut-il pour partir à la retraite à 50 ans ?",
      intro: "Le montant nécessaire pour prendre sa retraite à 50 ans dépend de votre train de vie, de votre capacité d'épargne et du rendement de vos placements.",
      estimation: "Voici une estimation simple pour visualiser votre objectif, à 4% net de rendement :",
      tableau: [
        {
          niveau: "3 000 €/mois",
          capital: "900 000 €",
          rendement: "4%"
        },
        {
          niveau: "5 000 €/mois",
          capital: "1 500 000 €",
          rendement: "4%"
        },
        {
          niveau: "8 000 €/mois",
          capital: "2 400 000 €",
          rendement: "4%"
        }
      ],
      note: "Estimation indicative pour une retraite anticipée jusqu'à 67 ans, sans revenus d'activité.",
      cta: {
        text: "Simulez votre indépendance financière avec un conseiller Azalée Patrimoine",
        link: "https://calendly.com/rdv-azalee-patrimoine/30min"
      }
    },
    calculer: {
      h3: "Calculez votre plan d'indépendance financière",
      description: "Découvrez combien vous devez épargner et comment structurer vos placements pour atteindre la liberté financière à 50 ans.",
      cta: {
        text: "Prendre rendez-vous avec un conseiller Azalée",
        link: "https://calendly.com/rdv-azalee-patrimoine/30min"
      }
    },
    construire: {
      h3: "Construire son plan d'indépendance financière",
      intro: "Une stratégie de retraite anticipée s'appuie sur la structuration de ses revenus, la diversification des placements et l'optimisation fiscale.",
      description: "Une retraite anticipée se prépare comme un projet d'entreprise. Voici les étapes clés :",
      etapes: [
        {
          h4: "1. Optimiser la structure de revenus professionnels",
          text: "Passer en société (SELARL, SASU, holding...) permet de piloter la fiscalité et les revenus, tout en constituant un capital logé dans une structure patrimoniale."
        },
        {
          h4: "2. Créer des revenus passifs",
          text: "Immobilier locatif, SCPI, ou produits structurés à coupons permettent de stabiliser des revenus réguliers indépendants de l'activité professionnelle."
        },
        {
          h4: "3. Capitaliser dans des enveloppes fiscales adaptées",
          items: [
            "<strong className=\"text-[#253F60]\">PER Individuel</strong> : pour déduire ses versements et préparer le long terme.",
            "<strong className=\"text-[#253F60]\">Assurance Vie</strong> : pour diversifier et transmettre.",
            "<strong className=\"text-[#253F60]\">Contrat de capitalisation</strong> : pour capitaliser sans contrainte successorale."
          ]
        },
        {
          h4: "4. Planifier la fiscalité et la transmission",
          text: "L'arbitrage entre capitalisation et distribution, la protection du conjoint, et la transmission progressive sont des piliers d'une stratégie patrimoniale aboutie."
        },
        {
          h4: "5. Diversifier et sécuriser",
          text: "Une indépendance financière solide repose sur la diversification entre actifs financiers et immobiliers, entre revenus immédiats et croissance future."
        }
      ]
    }
  },
  section4: {
    h2: "Cas pratique : Philippe, kinésithérapeute accompagné par Azalée Patrimoine",
    intro: "Exemple concret : comment une stratégie patrimoniale bien construite permet à un professionnel libéral de ralentir à 50 ans tout en conservant son confort de vie.",
    contexte: "Philippe, kinésithérapeute libéral, a confié la gestion de sa stratégie patrimoniale à Azalée Patrimoine il y a 20 ans. Son objectif : se concentrer sur son métier, tout en construisant un patrimoine à long terme.",
    accompagnement: {
      h3: "Notre accompagnement :",
      items: [
        "Création d'une SELARL pour optimiser la fiscalité et la rémunération.",
        "Mise en place d'une SCI pour acquérir ses murs professionnels.",
        "Accompagnement dans l'achat des locaux de son cabinet.",
        "Suivi patrimonial continu sur ses placements financiers et immobiliers."
      ]
    },
    resultats: {
      h3: "Résultats 20 ans plus tard :",
      items: [
        "Cabinet valorisé à <strong>300 000 €</strong> (cession ou gestion déléguée possible).",
        "Local professionnel estimé à <strong>750 000 €</strong> (revenus locatifs potentiels).",
        "Deux investissements locatifs dédiés au financement des études des enfants.",
        "Un patrimoine net de plus d'<strong>1 M€</strong>, en plus de sa résidence principale."
      ],
      conclusion: "Aujourd'hui, Philippe peut ralentir son activité à 50 ans, tout en conservant son niveau de vie.",
      secret: "Son secret : une stratégie patrimoniale construite dans la durée."
    }
  },
  section5: {
    h2: "Les erreurs à éviter",
    errors: [
      "<strong className=\"text-[#253F60]\">Attendre trop longtemps</strong> avant de structurer son activité.",
      "<strong className=\"text-[#253F60]\">Négliger la fiscalité</strong> des plus-values lors de la cession.",
      "<strong className=\"text-[#253F60]\">Sous-estimer le besoin</strong> de revenus réguliers avant la retraite légale.",
      "<strong className=\"text-[#253F60]\">Ignorer la protection</strong> du conjoint et la transmission du patrimoine."
    ],
    conclusion: "Azalée Patrimoine vous aide à anticiper ces enjeux, pour que votre liberté ne soit pas compromise par un détail mal anticipé."
  },
  section6: {
    h2: "L'accompagnement Azalée Patrimoine",
    intro: "Azalée Patrimoine, cabinet indépendant de gestion de patrimoine, accompagne depuis plus de 20 ans les dirigeants et professions libérales dans leur stratégie de retraite et d'indépendance financière.",
    engagements: {
      h3: "Nos engagements",
      items: [
        {
          number: "1",
          title: "Vision globale",
          description: "Chaque décision patrimoniale s'inscrit dans une stratégie long terme."
        },
        {
          number: "2",
          title: "Approche sur mesure",
          description: "Adaptée à votre profil, vos objectifs et votre fiscalité."
        },
        {
          number: "3",
          title: "Suivi continu",
          description: "Car la réussite patrimoniale se mesure dans la durée."
        }
      ]
    },
    mission: {
      title: "Notre mission",
      text: "Transformer vos revenus en patrimoine, et votre patrimoine en liberté."
    },
    pret: {
      h2: "Prêt à planifier votre retraite à 50 ans ?",
      question: "Prêt à construire votre indépendance financière ?",
      link: {
        text: "Échangez avec un conseiller Azalée Patrimoine dès aujourd'hui.",
        url: "https://calendly.com/rdv-azalee-patrimoine/30min"
      },
      contact: {
        rendezVous: {
          label: "Prendre rendez-vous",
          url: "https://calendly.com/rdv-azalee-patrimoine/30min"
        },
        email: {
          label: "contact@azalee-patrimoine.fr",
          url: "mailto:contact@azalee-patrimoine.fr"
        }
      }
    }
  },
  section7: {
    h2: "Rachat de trimestres ou versement déductible dans le PER ?",
    intro: "Lorsqu'il s'agit de préparer sa retraite, deux leviers fiscaux majeurs se présentent :",
    leviers: [
      "le rachat de trimestres auprès du régime de base,",
      "et les versements déductibles dans un Plan d'Épargne Retraite (PER)."
    ],
    description: "Tous deux permettent de réduire son impôt sur le revenu tout en améliorant sa retraite future — mais leur impact financier n'est pas du même ordre.",
    rachatTrimestres: {
      h3: "Le rachat de trimestres : optimiser la retraite de base",
      description: "Le rachat de trimestres consiste à verser une somme à l'administration pour compléter des années incomplètes et atteindre le taux plein plus tôt.",
      permet: [
        "D'éviter une décote sur la pension de base.",
        "De potentiellement améliorer légèrement le montant de la pension perçue."
      ],
      important: "La pension de base du régime général reste plafonnée à 50% du plafond annuel de la Sécurité sociale (PASS). En 2025, le PASS est fixé à 47 100 €. La pension maximale de base est donc de 23 550 € par an, soit 1 962 € brut par mois.",
      exemple: {
        h4: "Exemple concret",
        contexte: "Un cadre ayant cotisé au plafond de la Sécurité sociale toute sa carrière, mais manquant de 8 trimestres (2 ans) pour atteindre le taux plein.",
        sansRachat: {
          title: "Sans rachat de trimestres",
          decote: "Décote d'environ 10%",
          montant: "1 766 €/mois brut"
        },
        avecRachat: {
          title: "Avec rachat de 8 trimestres",
          cout: "Coût estimé : 35 000 € (à 50 ans)",
          montant: "1 962 €/mois brut",
          gain: "Gain mensuel : +196 €"
        },
        calcul: {
          gainAnnuel: "Gain annuel : 2 352 €",
          amortissement: "Amortissement : ~15 ans (hors avantage fiscal)",
          profilFort: "Pour un profil à fort revenu (taux marginal 41%) : Gain fiscal immédiat de 14 000 €. Coût net réduit à 21 000 €. Rendement implicite d'environ 4 à 5% par an sur 15 ans."
        }
      },
      inconvenients: "Aucune flexibilité, aucun effet de levier patrimonial, aucun gain de capitalisation."
    },
    versementPER: {
      h3: "Le versement déductible dans le PER : capitaliser pour soi",
      description: "À l'inverse du rachat de trimestres, le PER individuel permet de déduire ses versements tout en investissant dans des supports dynamiques : fonds en euros, unités de compte, SCPI, produits structurés, etc.",
      exemple: {
        h4: "Exemple (même contribuable à 50 ans, imposé à 41%, versant 35 000 € en PER)",
        economie: {
          label: "Économie d'impôt immédiate",
          montant: "14 350 €",
          note: "Même effet fiscal que le rachat de trimestres"
        },
        capital: {
          label: "Capital investi",
          montant: "35 000 €",
          note: "Entièrement valorisable"
        },
        hypothese: {
          label: "Hypothèse de rendement : 4% net par an sur 15 ans",
          montant: "63 000 €",
          note: "À 65 ans, récupérable en rente ou en capital"
        }
      },
      avantages: [
        "Le PER permet de faire croître un patrimoine personnel.",
        "Les plus-values ne sont pas plafonnées.",
        "La transmission est avantageuse (bénéficiaires désignés, exonération partielle selon l'âge et le mode de sortie).",
        "Les revenus futurs peuvent être modulés selon les besoins."
      ]
    },
    strategie: {
      h3: "Quelle stratégie privilégier ?",
      points: [
        "Le rachat de trimestres vise à sécuriser la retraite légale ; son rendement est borné par le plafond du régime de base.",
        "Le PER, lui, permet de faire travailler l'épargne sur la durée tout en profitant d'un levier fiscal équivalent, mais avec un potentiel de capitalisation beaucoup plus fort."
      ],
      astuce: "Pour les profils patrimoniaux, il est souvent plus judicieux de maximiser d'abord les versements PER, puis de racheter seulement les trimestres manquants si cela permet un départ anticipé sans décote."
    },
    tableauComparatif: {
      h3: "En résumé",
      criteres: [
        {
          critere: "Objectif",
          rachat: "Taux plein sur retraite de base",
          per: "Constitution d'un capital retraite"
        },
        {
          critere: "Déductibilité",
          rachat: "Oui, intégrale",
          per: "Oui, dans la limite du plafond fiscal retraite"
        },
        {
          critere: "Rendement maximal",
          rachat: "50% du PASS (≈ 1 962 €/mois)",
          per: "Illimité selon performances"
        },
        {
          critere: "Liquidité",
          rachat: "Nulle",
          per: "Partielle (projets immobiliers, sortie en capital)"
        },
        {
          critere: "Transmission",
          rachat: "Aucune",
          per: "Avantageuse (bénéficiaires désignés)"
        },
        {
          critere: "Horizon",
          rachat: "Court/moyen terme",
          per: "Moyen/long terme"
        }
      ],
      liens: [
        {
          text: "Découvrir le PER individuel",
          url: "/placements/per"
        },
        {
          text: "Échanger avec un conseiller Azalée Patrimoine",
          url: "https://calendly.com/rdv-azalee-patrimoine/30min"
        }
      ]
    }
  },
  section8: {
    h2: "Racheter des trimestres : est-ce rentable ?",
    paragraphs: [
      "Le rachat de trimestres peut être avantageux pour réduire la décote appliquée en cas de carrière incomplète.",
      "Mais attention : il doit être évalué avec précision, car son intérêt dépend de votre âge, de votre taux marginal d'imposition et de votre durée d'activité restante.",
      "Nos conseillers vous aident à déterminer si un rachat de trimestres est fiscalement et financièrement pertinent."
    ],
    enSavoirPlus: {
      label: "En savoir plus",
      text: "Rachat de trimestres - optimiser sa fin de carrière",
      url: "/retraite/rachat-trimestres"
    },
    determiner: {
      h3: "Déterminer le capital nécessaire",
      paragraphs: [
        "Azalée Patrimoine vous aide à calculer le capital cible pour maintenir votre confort de vie : montant de pension, dépenses futures, voyages, projets ou aides aux enfants.",
        "C'est sur cette base que nous construisons votre stratégie d'épargne retraite personnalisée."
      ]
    }
  },
  section9: {
    h2: "Les solutions d'épargne retraite",
    cta: {
      text: "Simulez votre retraite avec un conseiller Azalée Patrimoine :",
      link: {
        text: "Réaliser mon diagnostic retraite personnalisé",
        url: "https://calendly.com/rdv-azalee-patrimoine/30min"
      }
    },
    per: {
      h3: "Le Plan Épargne Retraite (PER)",
      description: "Le PER individuel est aujourd'hui la solution la plus complète pour préparer sa retraite.",
      permet: [
        "de déduire fiscalement vos versements (jusqu'à 10% de vos revenus professionnels) ;",
        "d'investir sur des supports diversifiés (fonds euros, unités de compte, produits structurés) ;",
        "de choisir la sortie (rente ou capital) à la retraite."
      ],
      lien: {
        text: "À lire aussi : Fiscalité du PER - optimiser ses déductions d'impôt",
        url: "/fiscalite/per"
      }
    },
    assuranceVie: {
      h3: "L'assurance-vie à long terme",
      description: "Souple et accessible, l'assurance-vie permet d'allier capitalisation et transmission. Elle constitue un complément idéal du PER, notamment pour les épargnants souhaitant garder une certaine liquidité avant la retraite.",
      lien: {
        text: "En savoir plus sur l'assurance-vie dans une stratégie patrimoniale",
        url: "/placements/assurance-vie"
      }
    },
    immobilier: {
      h3: "L'investissement immobilier locatif",
      paragraphs: [
        "L'immobilier reste un pilier incontournable de la retraite.",
        "Investir en <strong className=\"text-pink-600\">SCPI</strong>, en <strong className=\"text-pink-600\">LMNP</strong> ou via un dispositif fiscal comme <strong className=\"text-pink-600\">Pinel</strong> permet de générer des revenus réguliers tout en profitant d'avantages fiscaux."
      ],
      lien: {
        text: "Consultez notre page Investissement immobilier pour découvrir nos stratégies locatives durables.",
        url: "/immobilier"
      }
    },
    placements: {
      h3: "Les placements financiers complémentaires",
      paragraphs: [
        "<strong className=\"text-yellow-600\">Produits structurés</strong>, obligations ou fonds thématiques peuvent compléter une stratégie d'épargne retraite diversifiée.",
        "Chez Azalée Patrimoine, nous sélectionnons des solutions adaptées à votre profil de risque et à votre horizon de placement.",
        "Découvrez nos <strong className=\"text-yellow-600\">placements financiers</strong> pour la retraite."
      ]
    }
  },
  section10: {
    h2: "Comment défiscaliser en préparant sa retraite",
    levierPER: {
      h3: "Le levier fiscal du PER",
      description: "Le PER permet une déduction fiscale immédiate des versements, souvent supérieure au rendement financier espéré.",
      exemple: "Par exemple, pour un taux marginal d'imposition de 41%, un versement de 10 000 € ne coûte réellement que <strong className=\"text-[#253F60]\">5 900 €</strong>.",
      conclusion: "Un avantage considérable pour les contribuables fortement imposés."
    },
    dispositifsImmo: {
      h3: "Les dispositifs immobiliers adaptés",
      description: "Certains investissements immobiliers permettent d'allier rendement et réduction d'impôt, tout en constituant un capital pour la retraite.",
      intro: "Les plus pertinents selon votre situation patrimoniale sont :",
      dispositifs: [
        {
          h4: "Le dispositif Pinel (ou Pinel +)",
          description: "Pour investir dans le neuf et obtenir une réduction d'impôt jusqu'à 21% du montant investi."
        },
        {
          h4: "Le déficit foncier",
          description: "Pour déduire les travaux réalisés dans un bien ancien de vos revenus fonciers imposables."
        },
        {
          h4: "Le statut LMNP (Loueur en Meublé Non Professionnel)",
          description: "Qui permet d'amortir fiscalement la valeur du bien et d'optimiser la rentabilité nette."
        }
      ],
      lien: {
        text: "Découvrez nos stratégies combinant immobilier et retraite sur la page Investissement immobilier.",
        url: "/immobilier"
      }
    },
    arbitrer: {
      h3: "Arbitrer entre économie d'impôt et liquidité",
      paragraphs: [
        "Réduire ses impôts ne doit pas se faire au détriment de la flexibilité.",
        "Azalée Patrimoine vous aide à trouver l'équilibre entre optimisation fiscale et disponibilité des capitaux, selon votre horizon de retraite."
      ],
      approche: "Notre approche vise à diversifier entre :",
      produits: [
        "produits de capitalisation (assurance-vie, contrat de capitalisation) ;",
        "produits de rente (PER, immobilier locatif) ;",
        "produits de performance (fonds structurés, actions à dividendes)."
      ],
      lien: {
        text: "Pour aller plus loin : découvrez notre pilier Fiscalité pour comprendre comment les solutions retraite s'intègrent à votre stratégie globale.",
        url: "/fiscalite"
      }
    }
  },
  section11: {
    h2: "Retraite, transmission et prévoyance : penser globalement",
    transmission: {
      h3: "Anticiper la transmission de son patrimoine retraite",
      paragraphs: [
        "La retraite ne marque pas la fin de la gestion patrimoniale, mais le début d'une phase nouvelle : la <strong className=\"text-[#253F60]\">transmission</strong>.",
        "Bien anticiper permet d'assurer la continuité financière de vos proches tout en optimisant la fiscalité successorale."
      ],
      intro: "Les contrats multi-détention (PER, assurance-vie) sont particulièrement adaptés pour :",
      items: [
        "transmettre un capital à vos héritiers dans un cadre fiscal privilégié ;",
        "répartir le patrimoine entre conjoint et enfants ;",
        "prévoir la protection du conjoint survivant grâce à des clauses bénéficiaires sur mesure."
      ],
      astuce: "Pensez à revoir régulièrement la rédaction de vos clauses bénéficiaires avec votre conseiller Azalée Patrimoine."
    },
    prevoyance: {
      h3: "Protéger sa famille avec la prévoyance",
      paragraphs: [
        "L'un des piliers essentiels d'une retraite réussie, c'est la <strong className=\"text-[#253F60]\">protection de la famille</strong> face aux aléas de la vie.",
        "Les contrats de prévoyance individuelle couvrent le décès, l'invalidité ou la perte de revenus, garantissant à vos proches une stabilité financière.",
        "Azalée Patrimoine vous accompagne dans la mise en place de solutions de prévoyance personnalisées selon votre statut (salarié, TNS, dirigeant)."
      ],
      lien: {
        text: "En savoir plus : Prévoyance et protection familiale.",
        url: "/retraite/prevoyance-protection"
      }
    },
    adapter: {
      h3: "Adapter sa stratégie au moment du départ",
      intro: "Le passage à la retraite nécessite des ajustements :",
      items: [
        "rééquilibrage du portefeuille vers des actifs plus sécurisés ;",
        "transformation du capital en rente ;",
        "ajustement fiscal pour limiter l'imposition des retraits."
      ],
      conclusion: "Nos conseillers vous aident à piloter cette transition sans rupture de revenus et à préserver votre capital sur le long terme."
    }
  },
  section12: {
    h2: "L'expertise Azalée Patrimoine",
    accompagnement: {
      h3: "Un accompagnement humain, pédagogique et durable",
      intro: "Préparer sa retraite avec Azalée Patrimoine, c'est bénéficier d'un accompagnement global :",
      items: [
        "diagnostic retraite complet (carrière, patrimoine, fiscalité) ;",
        "projection de revenus futurs et simulation de besoins ;",
        "stratégie sur mesure intégrant épargne, immobilier et placements financiers."
      ],
      conclusion: "Nous nous engageons à une approche indépendante, <strong className=\"text-[#253F60]\">pédagogique et durable</strong>, centrée sur vos objectifs de vie et la sécurité de vos proches."
    },
    diagnostic: {
      h3: "Un diagnostic retraite sur mesure",
      description: "Chaque client Azalée bénéficie d'un audit retraite personnalisé, combinant analyse fiscale, budgétaire et patrimoniale.",
      permet: [
        "visualiser votre future pension ;",
        "identifier les écarts à combler ;",
        "définir les solutions adaptées à votre profil et à votre horizon."
      ],
      cta: {
        text: "Réalisez votre audit retraite offert :",
        link: {
          text: "Prendre rendez-vous avec un conseiller Azalée Patrimoine",
          url: "https://calendly.com/rdv-azalee-patrimoine/30min"
        }
      }
    },
    strategies: {
      h3: "Des stratégies concrètes selon votre profil",
      salaries: {
        h4: "Pour les salariés",
        paragraphs: [
          "Misez sur le PER individuel et l'assurance-vie long terme, tout en profitant de la déduction fiscale annuelle.",
          "Les versements réguliers permettent de lisser l'effort d'épargne dans le temps."
        ]
      },
      independants: {
        h4: "Pour les indépendants et professions libérales",
        text: "Optimisez vos revenus grâce au <strong className=\"text-[#253F60]\">PERIN</strong>, au contrat <strong className=\"text-[#253F60]\">Madelin</strong> ou à des investissements immobiliers ciblés (LMNP, SCPI). Vous combinez ainsi rentabilité, fiscalité avantageuse et capital transmissible."
      },
      dirigeants: {
        h4: "Pour les dirigeants d'entreprise",
        text: "Profitez des dispositifs de retraite supplémentaire et de capitalisation en société pour transformer la trésorerie dormante en actifs productifs. Azalée Patrimoine vous accompagne dans la structuration juridique et patrimoniale de ces stratégies."
      }
    }
  },
  section13: {
    h2: "Questions fréquentes sur la retraite",
    questions: [
      {
        question: "À quel âge faut-il commencer à préparer sa retraite ?",
        answer: "Idéalement entre 35 et 45 ans pour profiter pleinement de l'effet de capitalisation. Mais il n'est jamais trop tard : chaque situation se planifie."
      },
      {
        question: "Comment fonctionne la déduction fiscale du PER ?",
        answer: "Les versements sur un PER individuel sont <strong className=\"text-[#253F60]\">déductibles du revenu imposable</strong>, dans la limite de 10 % des revenus professionnels nets. Le gain fiscal dépend de votre tranche marginale d'imposition."
      },
      {
        question: "Quelle différence entre PER individuel et PER d'entreprise ?",
        answer: "Le PER individuel est souscrit à titre personnel. Le PER d'entreprise collectif (<strong className=\"text-[#253F60]\">PERECO</strong>) ou obligatoire (<strong className=\"text-[#253F60]\">PERO</strong>) est proposé via votre employeur, avec des abondements possibles."
      },
      {
        question: "Comment optimiser sa retraite quand on est travailleur indépendant ?",
        answer: "Les indépendants peuvent combiner plusieurs dispositifs : PERIN, contrat Madelin, capitalisation en société ou immobilier professionnel. Chaque solution répond à un besoin spécifique de revenu, protection ou transmission."
      },
      {
        question: "Que faire si je pars vivre à l'étranger ?",
        answer: "Les expatriés peuvent continuer à détenir un PER en France, mais la fiscalité dépendra de la convention bilatérale. Azalée Patrimoine vous aide à adapter votre stratégie retraite à votre résidence fiscale."
      }
    ]
  },
  section14: {
    h2: "En résumé",
    intro: "Bien préparer sa retraite, c'est construire aujourd'hui les fondations de votre sérénité future. Avec Azalée Patrimoine, vous bénéficiez d'un accompagnement global :",
    points: [
      "une stratégie patrimoniale personnalisée,",
      "une expertise financière et fiscale reconnue,",
      "et un suivi humain, indépendant et durable."
    ],
    contact: {
      email: {
        label: "Être rappelé par un conseiller",
        email: "contact@azalee-patrimoine.fr",
        url: "mailto:contact@azalee-patrimoine.fr"
      },
      rendezVous: {
        label: "Prendre rendez-vous en ligne",
        url: "https://calendly.com/rdv-azalee-patrimoine/30min"
      }
    }
  },
  section15: {
    h2: "En savoir plus",
    categories: [
      {
        title: "Placements financiers",
        description: "Construire un portefeuille long terme",
        link: "/placements"
      },
      {
        title: "Investissement immobilier",
        description: "SCPI et immobilier retraite",
        link: "/immobilier"
      },
      {
        title: "Gestion de patrimoine",
        description: "Structurer son épargne pour la retraite",
        link: "/patrimoine"
      }
    ],
    articles: [
      {
        title: "Le rachat de trimestres en 2025",
        description: "Lien vers sous page Rachat de trimestres",
        link: "/retraite/rachat-trimestres"
      },
      {
        title: "Quelles différences entre le PERP, le PERCO, le PER ?",
        description: "Lien vers sous page : les produits retraite : PER/PERP...",
        link: "/retraite/plan-retraite"
      },
      {
        title: "Prévoyance et Protection Familiale",
        description: "Lien vers sous page",
        link: "/retraite/prevoyance-protection"
      },
      {
        title: "Autres solutions retraites",
        description: "Lien vers sous page",
        link: "/retraite/autre"
      },
      {
        title: "La retraite progressive",
        description: "Lien vers sous page",
        link: "/retraite/retraite-progressive"
      },
      {
        title: "Le cumul emploi-retraite",
        description: "Article"
      }
    ]
  },
  ctaFinal: {
    h2: "Prêt à préparer votre retraite sereinement ?",
    description: "Nos experts Azalée Patrimoine vous accompagnent dans la construction d'une stratégie retraite personnalisée, adaptée à votre situation et vos objectifs.",
    buttons: [
      {
        text: "Demander un diagnostic gratuit",
        link: "https://calendly.com/rdv-azalee-patrimoine/30min",
        style: "primary"
      },
      {
        text: "Nous contacter",
        link: "/contact",
        style: "secondary"
      }
    ]
  },
  chartData: {
    labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        label: 'Versements cumulés bruts',
        data: Array.from({ length: 30 }, (_, i) => (i + 1) * 2400)
      },
      {
        label: 'Intérêts cumulés',
        data: [
          0, 120, 360, 720, 1200, 1800, 2520, 3360, 4320, 5400,
          6600, 7920, 9360, 10920, 12600, 14400, 16320, 18360, 20520, 22800,
          25200, 27720, 30360, 33120, 36000, 39000, 42120, 45360, 48720, 52200
        ]
      }
    ]
  }
};

async function initRetraiteContent() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const path = 'retraite';
    
    // Check if content already exists
    const existing = await PageContent.findOne({ path });
    if (existing) {
      console.log(`⚠️  Content for path "${path}" already exists.`);
      console.log('   Merging with existing content (preserving your changes)...');
      
      // Merge existing content with new content (preserving existing values)
      const mergedContent = deepMerge(existing.content || {}, retraiteContent);
      
      existing.content = mergedContent;
      existing.lastModified = new Date();
      await existing.save();
      console.log(`✅ Content for "${path}" merged successfully!`);
      console.log('   Your existing content has been preserved.\n');
    } else {
      const pageContent = new PageContent({
        path,
        title: 'Retraite - Préparer sa retraite sereinement',
        content: retraiteContent,
        published: true,
        modifiedBy: 'admin'
      });
      
      await pageContent.save();
      console.log(`✅ Content for "${path}" created successfully!\n`);
    }

    // List all pages
    const allPages = await PageContent.find({});
    console.log('📋 All pages in database:');
    allPages.forEach((page, index) => {
      console.log(`   ${index + 1}. ${page.path} - ${page.title}`);
    });

  } catch (error) {
    console.error('❌ Error initializing retraite content:', error.message);
    if (error.message.includes('ECONNREFUSED')) {
      console.error('\n💡 MongoDB is not running!');
      console.error('   Start MongoDB: net start MongoDB (PowerShell as Admin)');
    }
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
}

// Run the initialization
initRetraiteContent();

