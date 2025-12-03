// Script to initialize COMPLETE fiscalite page content in MongoDB
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

// COMPLETE content structure for fiscalite page - ALL sections
const fiscaliteContent = {
  hero: {
    leftCard: {
      h1: "Optimiser votre fiscalité en 2025 pour mieux valoriser votre patrimoine",
      description1: "La fiscalité influence directement la rentabilité de vos investissements et la transmission de votre patrimoine. Comprendre les mécanismes de l'impôt, maîtriser les déductions et utiliser les bons dispositifs vous permet de transformer la fiscalité en levier de croissance.",
      description2: "<strong className=\"text-[#253F60] font-semibold\">Azalée Patrimoine</strong> vous accompagne pour bâtir une stratégie fiscale cohérente, durable et adaptée à votre profil.",
      ctaButton: "Je prends ma fiscalité en main maintenant",
      ctaLink: "https://calendly.com/rdv-azalee-patrimoine/30min"
    },
    rightCard: {
      h2: ["Je choisis", "La meilleure stratégie", "Pour réduire mes impôts"],
      benefits: [
        "Optimisations immobilières, financières et déclaratives",
        "Jusqu'à 10 700 € de déficit foncier imputable/an",
        "Jusqu'à 45 % de mon investissement déductible de ma base imposable atteignant presque 67 000€ de baisse d'impôt",
        "Approche 100 % personnalisée"
      ],
      bubble: {
        amount: "66 768€",
        text: "d'économie d'impôts"
      }
    }
  },
  essentiel: {
    items: [
      {
        text: "L'impôt sur le revenu est calculé selon un <strong>barème progressif</strong> : plus vos revenus sont élevés, plus le taux d'imposition augmente. Comprendre ce mécanisme est essentiel pour optimiser votre situation."
      },
      {
        text: "Les <strong>dispositifs de défiscalisation</strong> (Pinel, Girardin, Malraux, Monuments Historiques...) permettent de réduire votre impôt tout en investissant dans des actifs porteurs. Chaque dispositif répond à des objectifs spécifiques.",
        subItems: [
          "Pinel/Denormandie : réduction d'impôt sur investissement locatif neuf",
          "Girardin : réduction ponctuelle sur investissement outre-mer",
          "Malraux/MH : réduction sur rénovation patrimoniale"
        ]
      },
      {
        text: "La <strong>déclaration de revenus</strong> doit être rigoureuse : erreurs ou omissions peuvent entraîner des redressements fiscaux. Un accompagnement professionnel vous garantit une déclaration optimale."
      },
      {
        text: "L'<strong>optimisation fiscale</strong> ne se limite pas à la réduction d'impôt : elle s'intègre dans une stratégie patrimoniale globale incluant placements, retraite et transmission."
      },
      {
        text: "Chaque profil a ses leviers d'optimisation : <strong>investisseur immobilier</strong>, <strong>retraité</strong>, <strong>profession libérale</strong> ou <strong>héritier</strong> bénéficient de dispositifs adaptés à leur situation."
      }
    ],
    note: "Note : Les dispositifs fiscaux évoluent régulièrement. Un conseil professionnel vous permet de rester à jour et d'anticiper les changements législatifs."
  },
  comprendreIR: {
    h2: "Comprendre l'impôt sur le revenu",
    h3: "Comment fonctionne l'impôt en France",
    paragraphs: [
      "En France, l'impôt sur le revenu est prélevé sur l'ensemble des revenus perçus par un foyer fiscal au cours de l'année civile. Il s'applique de façon progressive : plus vos revenus sont élevés, plus le taux d'imposition applicable à chaque \"tranche\" de revenus augmente. Ce système vise l'équité fiscale, tout en incitant à la structuration de votre stratégie patrimoniale.",
      "L'impôt sur le revenu joue un rôle déterminant dans la gestion et la valorisation de votre patrimoine. Avant même de songer à l'optimisation fiscale, il est essentiel de bien comprendre son fonctionnement pour faire les bons choix et saisir toutes les opportunités offertes par la législation."
    ]
  },
  categoriesRevenus: {
    h3: "Les différentes catégories de revenus",
    intro: "Vos revenus sont classés en plusieurs catégories, chacune répondant à des règles spécifiques.",
    categories: [
      {
        title: "Revenus d'activité",
        items: [
          "Salaires, traitements, pensions",
          "Bénéfices industriels et commerciaux (BIC)",
          "Bénéfices non commerciaux (BNC)",
          "Bénéfices agricoles (BA)"
        ]
      },
      {
        title: "Revenus du patrimoine",
        items: [
          "Revenus fonciers (location immobilière)",
          "Revenus mobiliers (dividendes, intérêts)",
          "Plus-values de cession"
        ]
      }
    ],
    conclusion: "Chaque catégorie de revenus a ses spécificités fiscales. Une bonne compréhension de ces règles permet d'optimiser votre déclaration et de réduire votre impôt."
  },
  bareme: {
    h3: "Barème, tranches, décote et quotient familial",
    paragraphs: [
      "L'imposition repose sur un <strong className=\"text-[#253F60] font-semibold\">barème progressif</strong> comportant plusieurs tranches : à chaque \"part\" du foyer fiscal, un taux s'applique selon le revenu déclaré. Plus vous avez de parts (enfants, conjoint), plus votre revenu imposable par part diminue, grâce au <strong className=\"text-[#253F60] font-semibold\">quotient familial</strong>.",
      "La <strong className=\"text-[#253F60] font-semibold\">décote</strong> vient réduire l'impôt des foyers faiblement imposés. À l'inverse, pour les revenus les plus élevés, des contributions additionnelles peuvent s'appliquer, renforçant l'importance de bien organiser la déclaration et le choix des dispositifs fiscaux adaptés à votre profil.",
      "Bien comprendre ces fondamentaux permet de saisir le potentiel d'optimisation offert par le système français, de la réduction d'impôt via l'<strong className=\"text-[#253F60] font-semibold\">investissement immobilier (Pinel, Girardin...)</strong> à l'ajustement des frais réels ou à la mise en place de <strong className=\"text-[#253F60] font-semibold\">donations stratégiques</strong>."
    ],
    infographie: {
      title: "Impôt sur le revenu",
      subtitle: "Tranches et taux d'imposition 2025",
      description: [
        "L'impôt sur vos revenus de 2024, déclarés en 2025, est calculé par tranches, en fonction du montant de vos revenus. Chaque tranche correspond à un taux d'imposition (de 0 à 45 %).",
        "Si votre revenu annuel dépasse celui de la tranche 1 (11 497 €), il sera concerné par plusieurs tranches successives, comme expliqué dans l'exemple."
      ],
      image: "/images/I6644.jpg",
      imageAlt: "Barème de l'impôt sur le revenu 2025 - Tranches et taux d'imposition"
    }
  },
  declarer: {
    h2: "Déclarer efficacement ses revenus",
    intro: "Déclarer ses revenus de manière rigoureuse est une étape clé pour éviter tout redressement fiscal et optimiser le montant de son impôt.",
    h3: "Quand et comment déclarer ?",
    boxes: [
      {
        title: "Période de déclaration"
      },
      {
        title: "www.impots.gouv.fr"
      }
    ],
    lienExterne: {
      label: "Lien externe vers le site des impôts :",
      text: "Quelle est la date limite pour faire sa déclaration de revenus pour les impôts ? | Service Public",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F359"
    }
  },
  bareme: {
    h3: "Barème, tranches, décote et quotient familial",
    paragraphs: [
      "L'imposition repose sur un <strong className=\"text-[#253F60] font-semibold\">barème progressif</strong> comportant plusieurs tranches : à chaque \"part\" du foyer fiscal, un taux s'applique selon le revenu déclaré. Plus vous avez de parts (enfants, conjoint), plus votre revenu imposable par part diminue, grâce au <strong className=\"text-[#253F60] font-semibold\">quotient familial</strong>.",
      "La <strong className=\"text-[#253F60] font-semibold\">décote</strong> vient réduire l'impôt des foyers faiblement imposés. À l'inverse, pour les revenus les plus élevés, des contributions additionnelles peuvent s'appliquer, renforçant l'importance de bien organiser la déclaration et le choix des dispositifs fiscaux adaptés à votre profil.",
      "Bien comprendre ces fondamentaux permet de saisir le potentiel d'optimisation offert par le système français, de la réduction d'impôt via l'<strong className=\"text-[#253F60] font-semibold\">investissement immobilier (Pinel, Girardin...)</strong> à l'ajustement des frais réels ou à la mise en place de <strong className=\"text-[#253F60] font-semibold\">donations stratégiques</strong>."
    ],
    infographie: {
      title: "Impôt sur le revenu",
      subtitle: "Tranches et taux d'imposition 2025",
      description: [
        "L'impôt sur vos revenus de 2024, déclarés en 2025, est calculé par tranches, en fonction du montant de vos revenus. Chaque tranche correspond à un taux d'imposition (de 0 à 45 %).",
        "Si votre revenu annuel dépasse celui de la tranche 1 (11 497 €), il sera concerné par plusieurs tranches successives, comme expliqué dans l'exemple."
      ],
      image: "/images/I6644.jpg",
      imageAlt: "Barème de l'impôt sur le revenu 2025 - Tranches et taux d'imposition"
    }
  },
  declarer: {
    h2: "Déclarer efficacement ses revenus",
    intro: "Déclarer ses revenus de manière rigoureuse est une étape clé pour éviter tout redressement fiscal et optimiser le montant de son impôt.",
    h3: "Quand et comment déclarer ?",
    boxes: [
      {
        title: "Période de déclaration"
      },
      {
        title: "www.impots.gouv.fr"
      }
    ],
    lienExterne: {
      label: "Lien externe vers le site des impôts :",
      text: "Quelle est la date limite pour faire sa déclaration de revenus pour les impôts ? | Service Public",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F359"
    }
  },
  dispositifs: {
    h2: "Profiter des dispositifs fiscaux",
    intro: "La fiscalité française regorge de \"niches\" permettant de réduire son impôt tout en investissant dans des actifs porteurs.",
    ctaButton: "Découvrir les dispositifs adaptés à mon profil",
    ctaLink: "https://calendly.com/rdv-azalee-patrimoine/30min"
  },
  defiscalisation: {
    h2: "Les dispositifs de défiscalisation immobilière",
    dispositifs: [
      {
        name: "Pinel",
        description: "Réduction d'impôt sur investissement locatif neuf (jusqu'à 21% du prix d'acquisition)",
        link: "/fiscalite/loi-pinel"
      },
      {
        name: "Denormandie",
        description: "Réduction d'impôt sur rénovation de logements anciens dans certaines zones",
        link: "/fiscalite/loi-denormandie"
      },
      {
        name: "Girardin",
        description: "Réduction d'impôt sur investissement outre-mer (jusqu'à 25% du montant investi)",
        link: "/fiscalite/loi-girardin"
      },
      {
        name: "Malraux",
        description: "Réduction d'impôt sur rénovation de biens en secteur sauvegardé (jusqu'à 30%)",
        link: "/fiscalite/loi-malraux"
      },
      {
        name: "Monuments Historiques",
        description: "Réduction d'impôt sur restauration de monuments classés (jusqu'à 50%)",
        link: "/fiscalite/monument-historique"
      },
      {
        name: "Déficit foncier",
        description: "Imputation des charges et travaux sur les revenus fonciers (jusqu'à 10 700€/an)",
        link: "/fiscalite/reductions-impot-deficit-foncier"
      }
    ],
    ctas: [
      {
        text: "Simuler mon économie d'impôt",
        link: "#"
      },
      {
        text: "Voir tous les dispositifs",
        link: "/fiscalite/lois-fiscales"
      }
    ]
  },
  erreurs: {
    h2: "Les erreurs fréquentes à éviter",
    errors: [
      "Sous-estimer l'importance d'une déclaration rigoureuse : erreurs ou omissions peuvent entraîner des redressements fiscaux.",
      "Choisir un dispositif de défiscalisation sans analyser sa cohérence avec vos objectifs patrimoniaux.",
      "Négliger l'optimisation des revenus fonciers : le régime réel peut être plus avantageux que le régime micro-foncier.",
      "Oublier de déclarer certains revenus (revenus étrangers, plus-values...) : cela peut entraîner des pénalités.",
      "Ne pas anticiper les évolutions législatives : les dispositifs fiscaux changent régulièrement."
    ],
    astuce: {
      title: "Astuce Azalée Patrimoine :",
      text: "Un audit fiscal annuel permet d'identifier les erreurs et opportunités d'optimisation. Notre équipe vous accompagne pour une déclaration optimale et sécurisée."
    }
  },
  profils: {
    h2: "Optimiser sa fiscalité selon son profil",
    intro: "Adopter les bons réflexes et dispositifs en fonction de votre situation permet de transformer l'impôt en véritable levier patrimonial.",
    conclusion: "Chaque profil a ses leviers d'optimisation : s'informer, se faire accompagner et ajuster régulièrement sa stratégie restent la clé pour valoriser durablement son patrimoine.",
    profils: [
      {
        type: "investisseur",
        title: "Investisseur immobilier",
        points: [
          "Priorisez les dispositifs adaptés à vos objectifs : Pinel et Denormandie si vous ciblez la réduction d'impôt ; Malraux ou Monuments Historiques pour les amateurs de rénovation de prestige.",
          "Optimisez vos revenus fonciers : analysez l'intérêt du régime réel pour déduire au maximum vos charges."
        ]
      },
      {
        type: "retraite",
        title: "Retraité avec revenus passifs",
        points: [
          "Choisissez le bon mode d'imposition de vos rentes, revenus locatifs et placements : arbitrage entre flat tax et barème progressif, adaptation de votre portefeuille pour réduire la fiscalité sur les dividendes.",
          "Pensez à la transmission : donations graduelles, souscription de contrats d'assurance-vie optimisés pour la succession."
        ]
      },
      {
        type: "professionnel",
        title: "Profession libérale / chef d'entreprise",
        points: [
          "Profitez des dispositifs de retraite complémentaire (PER, Madelin) pour déduire des versements tout en capitalisant pour l'avenir.",
          "Valorisez la cession progressive de votre entreprise pour bénéficier d'abattements spécifiques, ou réorganisez la détention de vos actifs via des sociétés civiles."
        ]
      },
      {
        type: "heritier",
        title: "Héritier d'un patrimoine",
        points: [
          "Anticipez les droits de succession : donations échelonnées, démembrement de propriété, utilisation des abattements familiaux, investissement dans des actifs défiscalisés.",
          "Optimisez la gestion des biens transmis : Favorisez les outils juridiques permettant d'adapter la détention du patrimoine à votre situation personnelle et fiscale."
        ]
      }
    ]
  },
  conseilsExpert: {
    h2: "Conseils de l'expert Azalée Patrimoine",
    h3: "Pourquoi travailler avec un Conseiller en Gestion de Patrimoine (CGP) ?",
    paragraphs: [
      "Faire appel à un CGP permet de transformer la complexité fiscale et patrimoniale en véritables leviers pour atteindre vos objectifs de vie.",
      "Un CGP ne se limite pas à vous vendre des solutions : il vous accompagne dans la durée, en toute indépendance, avec une vue globale sur votre situation et en tenant compte de l'évolution permanente des dispositifs fiscaux."
    ],
    avantages: {
      title: "Les avantages d'un accompagnement par un CGP :",
      items: [
        "Diagnostic précis de votre situation fiscale et patrimoniale ;",
        "Accès à des stratégies sur-mesure, souvent inaccessibles au grand public ;",
        "Veille réglementaire et anticipation des évolutions fiscales ;",
        "Vision transversale : immobilier, placements, retraite, succession, transmission."
      ]
    },
    inconvenients: {
      title: "Inconvénients à considérer",
      items: [
        "Trouver le bon profil : privilégier un professionnel pluridisciplinaire et équilibré (pas \"mono-produit\"), transparent sur son univers d'investissement.",
        "Coût de l'accompagnement : honoraires de conseil et/ou intégration de la rémunération dans les rétro-commissions si un investissement est mis en place ; demander une lettre de mission claire.",
        "Transparence & conflits d'intérêts : exiger le détail des frais (entrée, gestion, arbitrages) et un rapport d'adéquation justifiant chaque recommandation.",
        "Suivi dans le temps : sans revue annuelle et reporting, la stratégie peut devenir obsolète (évolutions de vie, fiscalité, marchés)."
      ]
    },
    astuce: {
      title: "Astuce :",
      items: [
        "Comparez au moins 2 CGP",
        "Vérifiez statuts et agréments (CIF, IAS...)",
        "L'assurance RCP",
        "Demandez des références."
      ]
    },
    auditFiscal: {
      title: "Audit fiscal personnalisé",
      description: "Un audit fiscal est la première étape pour optimiser votre impôt et structurer votre patrimoine de façon cohérente."
    },
    diagnostic: {
      h2: "Le CGP réalise un diagnostic complet :",
      items: [
        "Une analyse approfondie de vos revenus, investissements, dettes et charges ;",
        "L'identification des dispositifs fiscaux réellement adaptés à votre profil (optimisation Pinel, Girardin, Denormandie, PER, etc.) ;",
        "Un calcul précis des économies potentielles ou des risques de surimposition ;",
        "Un rapport de synthèse clair, accompagné de préconisations concrètes et chiffrées."
      ]
    },
    accompagnement: {
      title: "Accompagnement sur mesure",
      intro: "Votre situation patrimoniale évolue : revenus, famille, projets, fiscalité... Un accompagnement sur mesure avec Azalée Patrimoine vous offre :",
      items: [
        "Des solutions choisies et ajustées chaque année en fonction des évolutions législatives et de vos priorités.",
        "Un interlocuteur unique pour piloter vos déclarations, investissements, donations, successions.",
        "Le suivi opérationnel : la mise en place de solutions, l'aide à la collecte des pièces, la prise en charge administrative.",
        "Une réactivité pour saisir les opportunités (nouveaux dispositifs, arbitrages...) ou anticiper les contraintes (réformes, transmission, expatriation)."
      ],
      conclusion: "En résumé, s'entourer d'un CGP Azalée Patrimoine, c'est s'assurer la tranquillité et l'efficacité d'une gestion patrimoniale et fiscale sur-mesure, tournée vers la valorisation durable de votre patrimoine et la réalisation de vos objectifs personnels."
    }
  },
  expertise: {
    h2: "L'expertise Azalée Patrimoine à votre service",
    intro: "Faire appel à un Conseiller en Gestion de Patrimoine (CGP) indépendant représente un investissement stratégique pour optimiser durablement votre situation fiscale et patrimoniale. Notre approche holistique dépasse la simple recherche de réduction d'impôt pour construire une véritable stratégie patrimoniale cohérente.",
    diagramme: {
      segments: [
        {
          name: "diagnostic",
          title: "Diagnostic complet",
          description: "Analyse approfondie de votre situation fiscale, patrimoniale, professionnelle et familiale pour identifier tous les leviers d'optimisation disponibles."
        },
        {
          name: "strategie",
          title: "Stratégie personnalisée",
          description: "Élaboration d'un plan d'action sur-mesure intégrant vos objectifs, contraintes et aversion au risque, avec priorisation des actions selon leur impact."
        },
        {
          name: "mise-en-oeuvre",
          title: "Mise en œuvre",
          description: "Accompagnement opérationnel pour la concrétisation des recommandations : sélection des investissements, formalités administratives, suivi des échéances."
        },
        {
          name: "suivi",
          title: "Suivi et ajustement",
          description: "Veille réglementaire continue, adaptation de la stratégie aux évolutions législatives, optimisation permanente selon l'évolution de votre situation."
        }
      ]
    },
    services: [
      {
        title: "Audit fiscal personnalisé",
        paragraphs: [
          "Notre audit fiscal approfondi examine l'ensemble de vos revenus, placements et charges pour identifier les optimisations possibles. Cette analyse produit un rapport chiffré détaillant les économies potentielles et les risques associés à chaque préconisation.",
          "Nous analysons votre déclaration fiscale sur les 3 dernières années, identifions les erreurs ou omissions, et proposons des rectificatives si nécessaire. L'audit intègre également une projection sur 5 à 10 ans pour anticiper l'évolution de votre situation."
        ]
      },
      {
        title: "Accompagnement sur-mesure",
        paragraphs: [
          "Au-delà du conseil, nous assurons le pilotage opérationnel de vos déclarations et investissements. Notre équipe vous accompagne dans tous les arbitrages patrimoniaux, la gestion des échéances fiscales et le suivi de la performance de vos placements.",
          "Notre réactivité face aux évolutions législatives et aux opportunités de marché vous garantit une optimisation continue de votre stratégie patrimoniale."
        ]
      }
    ]
  },
  banniere: {
    text: "Bilan fiscal offert pour toute souscription d'un placement de 25 000€ avec Azalée Patrimoine"
  },
  faq: {
    h2: "FAQ Fiscalité",
    questions: [
      {
        question: "Quelle est la meilleure loi de défiscalisation en 2025 ?",
        answer: "Selon votre profil : <Link href=\"/fiscalite/loi-pinel\" className=\"text-[#B99066] hover:text-[#A67C52] font-semibold underline\">Pinel/Denormandie</Link> (neuf/ancien), <Link href=\"/fiscalite/loi-girardin\" className=\"text-[#B99066] hover:text-[#A67C52] font-semibold underline\">Girardin</Link> (réduction ponctuelle), <Link href=\"/fiscalite/loi-malraux\" className=\"text-[#B99066] hover:text-[#A67C52] font-semibold underline\">Malraux/MH</Link> (rénovation patrimoniale)."
      },
      {
        question: "Comment réduire son impôt sans risque ?",
        answer: "En combinant dispositifs légaux, <span className=\"text-[#253F60] font-semibold\">diversification</span> des placements et accompagnement par un conseiller agréé."
      },
      {
        question: "Pourquoi confier sa fiscalité à un CGP ?",
        answer: "Pour bénéficier d'une <span className=\"text-[#253F60] font-semibold\">approche globale</span> (fiscalité, placements, retraite, transmission) intégrée dans une stratégie cohérente et évolutive."
      }
    ]
  },
  enSavoirPlus: {
    h2: "En savoir plus sur Azalée Patrimoine",
    links: [
      {
        text: "Qui sommes-nous ?",
        link: "/patrimoine"
      },
      {
        text: "Gestion de patrimoine",
        link: "/patrimoine"
      },
      {
        text: "Placement financier",
        link: "/placements"
      },
      {
        text: "Investissement immobilier",
        link: "/immobilier"
      },
      {
        text: "Retraite",
        link: "/retraite"
      },
      {
        text: "Simulateurs",
        link: "/retraite/simulation"
      }
    ]
  }
};

async function initFiscaliteContent() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const path = 'fiscalite';
    
    // Check if content already exists
    const existing = await PageContent.findOne({ path });
    if (existing) {
      console.log(`⚠️  Content for path "${path}" already exists.`);
      console.log('   Merging with existing content (preserving your changes)...');
      
      // Merge existing content with new content (preserving existing values)
      const mergedContent = deepMerge(existing.content || {}, fiscaliteContent);
      
      existing.content = mergedContent;
      existing.lastModified = new Date();
      await existing.save();
      console.log(`✅ Content for "${path}" merged successfully!`);
      console.log('   Your existing content has been preserved.\n');
    } else {
      const pageContent = new PageContent({
        path,
        title: 'Fiscalité - Optimiser votre impôt',
        content: fiscaliteContent,
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
    console.error('❌ Error initializing fiscalite content:', error.message);
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
initFiscaliteContent();
