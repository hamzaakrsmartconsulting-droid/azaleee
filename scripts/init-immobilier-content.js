// Script to initialize COMPLETE immobilier page content in MongoDB
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

// COMPLETE content structure for immobilier page - ALL sections
const immobilierContent = {
  hero: {
    h1: "Investir dans l'immobilier avec Azalée Patrimoine",
    description: "L'immobilier, pilier de votre indépendance financière et de la transmission familiale. Chez Azalée Patrimoine, nous considérons l'immobilier comme un socle fondamental d'un patrimoine équilibré : tangible, résilient et porteur de sens. Notre rôle est de transformer vos projets immobiliers — qu'ils soient locatifs, neufs ou patrimoniaux — en véritables stratégies d'enrichissement à long terme, intégrant rendement, fiscalité et transmission.",
    ctaButton1: "Demandez votre audit patrimonial personnalisé",
    ctaButton1Link: "https://calendly.com/rdv-azalee-patrimoine/30min",
    ctaButton2: "Découvrir nos solutions",
    ctaButton2Link: "#pourquoi-investir",
    rightCard: {
      percentage: "61,2%",
      text: "des français",
      description: "61.2% des français possèdent un ou plusieurs biens immobiliers.",
      buttonText: "Téléchargez le guide complet pour bâtir et optimiser votre patrimoine"
    }
  },
  section2: {
    h2: "Pourquoi investir dans l'immobilier aujourd'hui ?",
    intro: "L'immobilier reste l'actif préféré des Français, et ce n'est pas un hasard :",
    statistic: {
      value: "61,2%",
      text: "des ménages possèdent un bien immobilier",
      source: "INSEE 2024"
    },
    keyPoints: [
      {
        title: "Rendement locatif brut moyen",
        description: "5 à 6 %, voire plus selon la localisation."
      },
      {
        title: "Plus-value patrimoniale",
        description: "Appréciation de la valeur du bien dans le temps."
      },
      {
        title: "Effet de levier du crédit immobilier",
        description: "Investir sans mobiliser tout son capital."
      },
      {
        title: "Fiscalité avantageuse",
        description: "Via des dispositifs spécifiques (LMNP, Pinel, déficit foncier…)."
      },
      {
        title: "Protection et transmission",
        description: "Protection contre l'inflation et création d'un actif transmissible."
      }
    ],
    scpiMention: "\"Mais il n'est pas toujours nécessaire d'acheter un bien en direct pour profiter du dynamisme immobilier : les SCPI permettent d'accéder à la pierre autrement.\"",
    azaleeMessage: "💬 Chez Azalée Patrimoine, nous intégrons chaque actif immobilier dans une vision globale — financière, fiscale et humaine — pour bâtir la liberté patrimoniale de demain.",
    ctaTitle: "Découvrez quelle stratégie immobilière correspond à votre profil",
    ctaButton: "Faire le test de profil",
    ctaLink: "https://tally.so"
  },
  section3: {
    h2: "Investir dans les SCPI : la pierre sans les contraintes",
    intro: [
      "Les SCPI (Sociétés Civiles de Placement Immobilier) offrent la possibilité d'investir dans un portefeuille d'immeubles géré par des professionnels, sans contrainte de gestion locative.",
      "Elles constituent une porte d'entrée idéale pour diversifier son patrimoine et générer des revenus réguliers."
    ],
    advantages: [
      {
        title: "Accessibilité",
        description: "Ticket d'entrée dès quelques centaines d'euros."
      },
      {
        title: "Diversification",
        description: "Bureaux, commerces, santé, logistique."
      },
      {
        title: "Rendement attractif",
        description: "Entre 4 % et 6 % net selon les SCPI en 2024."
      },
      {
        title: "Gestion déléguée",
        description: "Vous percevez les loyers sans gérer les locataires."
      }
    ],
    scpiExamples: {
      title: "Exemples de SCPI performantes",
      scpis: ["Amundi Immobilier", "Corum Origin", "Épargne Pierre", "Primovie"],
      note: "(liens vers la bibliothèque de partenaires où l'on pourrait avoir 1 fiche par partenaire)"
    },
    quote: "💬 \"Avec les SCPI, vous profitez du potentiel de l'immobilier professionnel, sans les soucis de la location.\"",
    chartTitle: "Rendement moyen des SCPI vs immobilier locatif direct",
    chartNote: "Note Azalée : Les rendements varient selon le type de SCPI, la localisation du bien locatif et la fiscalité appliquée. L'effet de levier du crédit peut significativement améliorer la rentabilité de l'immobilier direct.",
    ctaButton: "👉 Comparez les meilleures SCPI du moment avec un conseiller Azalée",
    ctaLink: "https://calendly.com/rdv-azalee-patrimoine/30min"
  },
  section5: {
    h2: "Rendement immobilier : ce que rapportent vraiment vos placements",
    h3: "Pour bâtir une stratégie équilibrée, il faut comparer le rendement brut, net de charges et net d'impôts.",
    table: {
      headers: ["Type d'investissement", "Rendement brut moyen", "Rendement net estimé", "Fiscalité principale"],
      rows: [
        {
          type: "Immobilier locatif",
          rendementBrut: "5,5 %",
          rendementNet: "3,5 %",
          fiscalite: "Revenus fonciers"
        },
        {
          type: "SCPI",
          rendementBrut: "4,6 %",
          rendementNet: "3,8 %",
          fiscalite: "Revenus fonciers / IR"
        },
        {
          type: "Assurance vie (fonds euros)",
          rendementBrut: "2,5 %",
          rendementNet: "2 %",
          fiscalite: "Flat tax"
        },
        {
          type: "ETF immobilier",
          rendementBrut: "3,2 %",
          rendementNet: "2,8 %",
          fiscalite: "Flat tax"
        }
      ]
    }
  },
  section6: {
    h2: "SCPI, LMNP, Pinel… quelle stratégie pour quel profil ?",
    intro: "L'immobilier est l'un des rares actifs que l'on peut financer à crédit.",
    leverageExplanation: "Cet effet de levier permet de se constituer un patrimoine sans immobiliser tout son capital.",
    example: {
      title: "Exemple concret :",
      points: [
        "Un investissement de 200 000 € financé à 90 % par emprunt",
        "Avec un rendement locatif de 5 %",
        "Permet de générer plus de 60 000 € de capital net après 20 ans",
        "Tout en profitant de la déductibilité des intérêts d'emprunt"
      ]
    },
    quote: "💬 \"L'argent de la banque travaille pour vous : c'est la magie du levier patrimonial.\"",
    ctaButton: "👉 Simuler mon financement immobilier",
    ctaLink: "https://calendly.com/rdv-azalee-patrimoine/30min"
  },
  section8: {
    h2: "Marché immobilier 2025 : opportunités et mutations",
    intro: "L'année 2024 marque un tournant : baisse des prix dans certaines zones, remontée des taux, mais forte tension locative dans les métropoles régionales.",
    trends: [
      {
        title: "Paris et grandes métropoles",
        description: "Correction modérée (-3 à -5 %)"
      },
      {
        title: "Villes moyennes",
        description: "Attractivité accrue (Rennes, Bordeaux, Annecy…)"
      },
      {
        title: "Immobilier locatif",
        description: "Rendement moyen de 5,8 %"
      },
      {
        title: "Investissement \"pierre papier\"",
        description: "Stabilité des revenus et diversification européenne"
      }
    ],
    source: "Source : PAPERS.immo, Notaires de France, INSEE 2024.",
    perspective2026: {
      title: "🔮 Perspective 2026",
      paragraph1: "Sur 2025, on observe une légère reprise grâce à l'inflexion des taux d'intérêt, mais la prochaine loi de finance (2026) risque de mettre un coup d'arrêt à la dynamique d'investissement qui s'était relancée.",
      paragraph2: "En effet, la suppression de l'amortissement sur les meublés va impacter à nouveau le choix des investisseurs. L'objectif est de redonner un peu de souffle à la location nue qui devrait bénéficier d'un meilleur abattement."
    }
  },
  section9: {
    h2: "L'immobilier papier : SCPI, OPCI, REITs",
    description: "Description de l'immobilier papier..."
  },
  section10: {
    h2: "Avis et retours d'expérience",
    testimonials: [
      {
        name: "Isabelle L.",
        role: "Cadre supérieure à Paris",
        text: "J'étais hésitante à cause des frais d'entrée, mais l'équipe m'a montré la rentabilité réelle nette d'impôt : convaincue !",
        rating: 5
      }
    ],
    averageRating: {
      value: "4,9",
      max: "5",
      label: "Note moyenne",
      source: "(avis clients Azalée)"
    },
    ctaButton: "👉 Demandez un comparatif SCPI personnalisé",
    ctaLink: "https://calendly.com/rdv-azalee-patrimoine/30min"
  },
  section11: {
    h2: "Guides et simulateurs",
    subtitle: "🎁 Téléchargez gratuitement nos ressources exclusives",
    intro: "Tous nos outils sont conçus pour vous aider à prendre des décisions éclairées, fondées sur des données réelles.",
    resources: [
      {
        title: "Guide SCPI 2025",
        description: "Comprendre, comparer, investir intelligemment",
        buttonText: "Télécharger",
        link: "#"
      },
      {
        title: "Simulateur de rentabilité immobilière",
        description: "Calculez votre rendement locatif en quelques clics",
        buttonText: "Utiliser le simulateur",
        link: "/outils"
      },
      {
        title: "Quiz personnalisé",
        description: "Quel type d'investissement immobilier est fait pour vous ?",
        buttonText: "Faire le quiz",
        link: "https://tally.so"
      }
    ],
    ctaButton: "👉 Accéder à nos outils immobiliers",
    ctaLink: "/outils"
  },
  section12: {
    h2: "Les prix de l'immobilier en temps réel dans votre région",
    description: "Suivez l'évolution du marché immobilier en direct grâce à nos données partenaires PAPERS.immo.",
    placeholder: "Ex: Lyon, 69001, Paris..."
  },
  section13: {
    h2: "Les trois leviers de la stratégie immobilière Azalée",
    levers: [
      {
        title: "Rentabiliser et optimiser fiscalement",
        description: "LMNP, Pinel, déficit foncier, SCI",
        link: "/immobilier/lmnp"
      },
      {
        title: "Diversifier avec la pierre papier",
        description: "SCPI, OPCI, assurance vie immobilière",
        link: "/placements/scpi-opci"
      },
      {
        title: "Structurer et transmettre durablement",
        description: "SCI, immeubles de rapport, financement, PTZ",
        link: "/immobilier/sci"
      }
    ]
  },
  section14: {
    h2: "La méthode Azalée : une approche patrimoniale globale",
    subtitle: "Nous ne proposons pas de \"produits\", mais une stratégie complète, sur mesure et durable.",
    steps: [
      {
        number: "1",
        title: "Diagnostic patrimonial",
        description: "Analyse de votre situation et de vos objectifs"
      },
      {
        number: "2",
        title: "Élaboration d'une stratégie sur mesure",
        description: "Rendement, fiscalité, transmission"
      },
      {
        number: "3",
        title: "Sélection des supports adaptés",
        description: "Immobilier direct, LMNP, SCI, SCPI, assurance vie…"
      },
      {
        number: "4",
        title: "Accompagnement juridique et fiscal",
        description: "Démembrement, SCI, clauses bénéficiaires"
      },
      {
        number: "5",
        title: "Suivi continu et reporting",
        description: "Réajustement annuel de la stratégie"
      }
    ],
    difference: {
      title: "La différence Azalée",
      text: "Une vision d'ensemble qui marie finance, fiscalité et sérénité."
    }
  },
  section15: {
    h2: "Témoignages et cas concrets",
    testimonials: [
      {
        name: "Laurent D.",
        role: "Chef d'entreprise à Lyon",
        text: "« Grâce à Azalée, j'ai optimisé mon investissement locatif tout en réduisant mon impôt sur le revenu. Leur accompagnement va bien au-delà du simple achat. »",
        rating: 5
      },
      {
        name: "Sophie B.",
        role: "Cadre supérieure à Paris",
        text: "« J'avais un projet LMNP, ils m'ont aidée à le rendre rentable, sécurisé et transmissible. »",
        rating: 5
      }
    ]
  },
  section16: {
    h2: "Nos expertises immobilières",
    expertises: [
      {
        title: "Investissement locatif",
        description: "LMNP, Pinel, location nue, défiscalisation",
        link: "/immobilier/lmnp"
      },
      {
        title: "Immobilier neuf",
        description: "VEFA, loi Pinel, PTZ, défiscalisation",
        link: "/immobilier/immobilier-neuf"
      },
      {
        title: "Faire construire",
        description: "Construction neuve, terrains, financement",
        link: "/immobilier/faire-construire"
      },
      {
        title: "SCI et transmission",
        description: "Création de SCI, démembrement, transmission",
        link: "/immobilier/sci"
      }
    ]
  },
  section17: {
    h2: "Ressources gratuites pour aller plus loin",
    resources: [
      {
        title: "Guide complet de l'investissement immobilier",
        description: "Téléchargez notre guide PDF de 50 pages",
        buttonText: "Télécharger",
        link: "#"
      },
      {
        title: "Calculatrice de rentabilité locative",
        description: "Calculez votre rendement net d'impôt",
        buttonText: "Utiliser",
        link: "/outils"
      }
    ]
  },
  section18: {
    h2: "Faites confiance à un partenaire indépendant",
    description: "Azalée Patrimoine est un cabinet indépendant, sans conflit d'intérêts. Nous sélectionnons les meilleurs produits pour vos objectifs, pas pour nos commissions."
  },
  section19: {
    h2: "FAQ – Investir dans l'immobilier",
    faqs: [
      {
        question: "Qu'est-ce qu'une SCPI ?",
        answer: "Une SCPI (Société Civile de Placement Immobilier) est un placement collectif permettant d'investir dans un portefeuille immobilier géré par une société de gestion. Vous percevez des revenus locatifs réguliers, proportionnels à votre part dans la SCPI, sans avoir à gérer de biens."
      },
      {
        question: "Quel rendement peut-on espérer d'une SCPI ?",
        answer: "Le rendement moyen des SCPI de rendement se situe entre 4 % et 6 % par an (source AMF 2024). Certaines SCPI thématiques comme Corum Origin ou Épargne Pierre affichent de meilleures performances grâce à une diversification européenne ou sectorielle."
      },
      {
        question: "Quels sont les risques d'un investissement en SCPI ?",
        answer: "Comme tout placement, les SCPI comportent des risques : la valeur des parts peut fluctuer, les loyers ne sont pas garantis, et la liquidité peut être limitée en cas de forte demande de revente. 👉 C'est pourquoi Azalée Patrimoine sélectionne des SCPI solides, diversifiées et bien capitalisées."
      },
      {
        question: "SCPI, LMNP, Pinel… que choisir ?",
        answer: "Tout dépend de vos objectifs : • Réduire vos impôts 👉 LMNP ou Pinel • Générer un revenu complémentaire 👉 SCPI de rendement • Transmettre un bien 👉 SCI ou démembrement. Nos conseillers peuvent modéliser votre situation et définir la stratégie la plus pertinente."
      },
      {
        question: "Peut-on financer un investissement en SCPI à crédit ?",
        answer: "Oui. Certaines banques acceptent le crédit SCPI, souvent avec des durées plus courtes (10-15 ans). L'avantage : les intérêts d'emprunt sont déductibles de vos revenus fonciers, ce qui améliore la rentabilité nette."
      },
      {
        question: "Quelle différence entre SCPI et OPCI ?",
        answer: "Une OPCI (Organisme de Placement Collectif Immobilier) investit à la fois dans la pierre et les marchés financiers. Elle offre une meilleure liquidité mais un rendement généralement plus faible que les SCPI."
      },
      {
        question: "Les revenus d'une SCPI sont-ils imposables ?",
        answer: "Oui. Ils sont considérés comme des revenus fonciers et imposés selon votre TMI. Il existe toutefois des stratégies de SCPI européennes ou logées dans l'assurance vie pour réduire la fiscalité."
      },
      {
        question: "Est-ce le bon moment pour investir dans l'immobilier ?",
        answer: "En 2025, les taux de crédit se stabilisent et les prix s'ajustent à la baisse : une opportunité pour investir à long terme. Les actifs bien situés et les SCPI résilientes conservent de très bonnes perspectives de rendement."
      }
    ],
    ctaText: "Vous avez d'autres questions ?",
    ctaButton: "Prenez rendez-vous avec un conseiller Azalée Patrimoine pour un audit personnalisé",
    ctaLink: "https://calendly.com/rdv-azalee-patrimoine/30min"
  },
  section20: {
    h2: "Articles et guides immobiliers",
    description: "Découvrez nos articles détaillés pour approfondir vos connaissances sur l'investissement immobilier",
    articles: [
      {
        title: "Investissement immobilier rentable : comment bâtir une stratégie durable",
        description: "Découvrez comment construire un investissement immobilier rentable avec Azalée Patrimoine : SCPI, LMNP, crédit, fiscalité, rendement net et stratégies durables pour bâtir votre indépendance financière.",
        link: "/immobilier/investissement-immobilier-rentable",
        badge: "Guide complet"
      },
      {
        title: "LMNP 2025 : le meublé reste-t-il un bon investissement après la réforme ?",
        description: "La réforme 2025 change la donne pour le LMNP : les amortissements sont désormais réintégrés à la revente. Découvrez comment investir intelligemment en location meublée non professionnelle malgré la nouvelle fiscalité.",
        link: "/immobilier/lmnp-2025",
        badge: "Analyse 2025"
      }
    ]
  },
  cta: {
    ctaTitle: "Prêt à Investir dans l'Immobilier ?",
    ctaText: "Contactez nos experts pour une consultation personnalisée et découvrez comment optimiser votre patrimoine immobilier.",
    ctaButton: "Demander une consultation",
    ctaLink: "https://calendly.com/rdv-azalee-patrimoine/30min"
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
        // For arrays, only add if the key doesn't exist or is empty
        if (!target[key] || target[key].length === 0) {
          output[key] = [...source[key]];
        } else {
          // Keep existing array, but merge objects within arrays if they exist
          output[key] = [...target[key]];
        }
      } else {
        // For primitive values, only set if the key doesn't exist or is empty
        if (!target[key] || target[key] === '') {
          output[key] = source[key];
        }
        // Otherwise keep existing value
      }
    });
  }
  
  return output;
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

async function initImmobilierContent() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const path = 'immobilier';
    
    // Check if content already exists
    const existing = await PageContent.findOne({ path });
    if (existing) {
      console.log(`⚠️  Content for path "${path}" already exists.`);
      console.log('   Merging with existing content (preserving your changes)...');
      
      // Merge existing content with new content (preserving existing values)
      const mergedContent = deepMerge(existing.content || {}, immobilierContent);
      
      existing.content = mergedContent;
      existing.lastModified = new Date();
      await existing.save();
      console.log(`✅ Content for "${path}" merged successfully!`);
      console.log('   Your existing content has been preserved.\n');
    } else {
      const pageContent = new PageContent({
        path,
        title: 'Investissement Immobilier',
        content: immobilierContent,
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
    console.error('❌ Error initializing immobilier content:', error.message);
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
initImmobilierContent();

