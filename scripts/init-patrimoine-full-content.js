// Script to initialize COMPLETE patrimoine page content in MongoDB
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

// COMPLETE content structure for patrimoine page - ALL sections
const patrimoineContent = {
  // Hero Section - Two Cards
  hero: {
    cardLeft: {
      title: "Bien gérer son patrimoine en 2025, c'est anticiper, structurer et transmettre",
      paragraph1: "Une bonne gestion de patrimoine ne se résume pas à faire fructifier son épargne.",
      paragraph2: "Elle repose sur une approche globale et exclusive qui intègre la protection de la famille, la stratégie de transmission, l'optimisation fiscale, des placements performants, une structuration juridique et l'anticipation des risques.",
      paragraph3: "Notre équipe de conseillers en gestion de patrimoine indépendants vous accompagne pour bâtir une stratégie personnalisée et cohérente avec vos objectifs de vie.",
      paragraph4: "Que vous soyez chef d'entreprise, héritier, expatrié ou jeune investisseur, nous vous guidons avec clarté.",
      buttonText: "Faire mon bilan patrimonial",
      buttonUrl: "https://calendly.com/rdv-azalee-patrimoine/30min"
    },
    cardRight: {
      badge: {
        line1: "Votre 1er",
        line2: "Diagnostique",
        line3: "offert"
      },
      title: "Votre patrimoine mérite une stratégie claire et durable",
      description: "Chez Azalée Patrimoine, nous vous aidons à construire un avenir financier solide grâce à une approche personnalisée et des solutions adaptées à vos besoins spécifiques.",
      features: [
        "Optimisation fiscale",
        "Protection de la famille",
        "Transmission sereine"
      ]
    }
  },

  // Section: En quelques mots
  enQuelquesMots: {
    title: "En quelques mots : comprendre la gestion de patrimoine",
    paragraph1: "La gestion de patrimoine = structurer, valoriser et transmettre un ensemble de biens (immobilier, placements financiers, liquidités, entreprise, objets de valeur).",
    paragraph2: "Consulter un conseiller en gestion de patrimoine indépendant permet de prendre des décisions éclairées en intégrant les aspects fiscaux, juridiques, financiers et familiaux.",
    bilanPatrimonial: {
      title: "Le bilan patrimonial = point de départ pour une stratégie personnalisée :",
      items: [
        "Inventorier les actifs/passifs",
        "Analyser la situation financière et fiscale",
        "Identifier les leviers d'optimisation patrimoniale",
        "Proposer un plan d'action clair, chiffré et évolutif"
      ]
    },
    accompagnement: {
      title: "Chez Azalée Patrimoine, nous vous accompagnons pour :",
      items: [
        "Faire fructifier le patrimoine durablement avec des solutions sur mesure",
        "protéger votre famille grâce à des dispositifs juridiques adaptés",
        "réduire votre fiscalité et préparer la transmission dans les meilleures conditions"
      ]
    },
    conclusion: "Notre approche repose sur la clarté, la pédagogie et l'indépendance. L'objectif : transformer le patrimoine en levier de sérénité et de performance sur le long terme."
  },

  // Section: Définition
  definition: {
    title: "Définition de la gestion de patrimoine",
    intro: "La gestion de patrimoine est une discipline transversale qui consiste à analyser, organiser, valoriser et transmettre l'ensemble des actifs d'une personne ou d'une entreprise — qu'ils soient immobiliers, financiers, professionnels ou familiaux — en tenant compte de leurs objectifs personnels, fiscaux et successoraux.",
    paragraph1: "Contrairement à une idée reçue, le métier de conseiller en gestion de patrimoine (CGP) n'est pas réglementé en tant que tel, mais il regroupe plusieurs statuts professionnels encadrés par la loi, chacun répondant à des compétences spécifiques :",
    statuts: [
      {
        title: "IAS (Intermédiaire en Assurance)",
        description: "habilité à conseiller et distribuer des produits d'assurance-vie, de prévoyance ou de retraite."
      },
      {
        title: "IOBSP (Intermédiaire en Opérations de Banque et Services de Paiement)",
        description: "compétent pour accompagner le financement de projets (crédits immobiliers, crédits professionnels, refinancement...)."
      },
      {
        title: "CIF (Conseiller en Investissements Financiers)",
        description: "autorisé à proposer des placements financiers (OPCVM, SCPI, produits structurés, private equity...) dans le cadre d'un conseil indépendant."
      },
      {
        title: "CJA (Conseiller en Juridique Accessoire)",
        description: "peut apporter un conseil d'ordre juridique en lien direct avec la gestion de patrimoine (structuration, transmission, fiscalité patrimoniale)."
      }
    ],
    paragraph2: "En pratique, un CGP expérimenté combine souvent plusieurs de ces statuts pour offrir une vision globale et cohérente de la situation de ses clients.",
    paragraph3: "Son rôle est avant tout d'accompagner, de conseiller et d'anticiper, en s'appuyant sur une approche personnalisée qui intègre :",
    domaines: [
      "la fiscalité,",
      "la protection de la famille,",
      "la stratégie d'investissement,",
      "la préparation de la retraite,",
      "et la transmission du patrimoine"
    ],
    resume: {
      title: "En résumé :",
      text: "la gestion de patrimoine, c'est l'art de faire dialoguer le juridique, le fiscal et le financier pour créer de la valeur et de la sérénité sur le long terme."
    }
  },

  // Section: Pourquoi faire appel à un CGP
  pourquoiCGP: {
    title: "Pourquoi faire appel à un conseiller en gestion de patrimoine indépendant ?",
    intro: "Un CGP est votre copilote pour prendre les bonnes décisions patrimoniales. Il apporte une vision à 360° sur votre situation, en prenant en compte vos revenus, votre patrimoine immobilier et financier, votre environnement fiscal, familial et professionnel.",
    points: [
      "Structuration patrimoniale globale",
      "Optimisation fiscale et transmission",
      "Accès à des solutions haut de gamme et sur-mesure",
      "Suivi personnalisé et réactif dans le temps"
    ]
  },

  // Section: L'audit patrimonial
  auditPatrimonial: {
    title: "L'audit patrimonial : la base de toute stratégie",
    intro: "Notre accompagnement commence par un audit patrimonial gratuit. Ce diagnostic complet permet de dresser une cartographie de vos actifs et passifs, d'analyser votre situation juridique et fiscale, puis de construire un plan d'action réaliste et optimisé.",
    stepsTitle: "Étapes de l'audit patrimonial",
    steps: [
      "Inventaire des actifs et dettes",
      "Etablissement d'une lettre de mission",
      "Analyse des flux de revenus et dépenses",
      "Identification des risques (juridiques, fiscaux, successoraux)",
      "Propositions de stratégies (placements, transmission, structuration)",
      "Plan d'action chiffré et suivi annuel"
    ],
    buttonText: "Audit patrimonial gratuit",
    buttonUrl: "https://calendly.com/rdv-azalee-patrimoine/30min"
  },

  // Section: Nos expertises
  expertises: {
    title: "Nos expertises pour structurer et valoriser votre patrimoine",
    services: [
      {
        title: "Succession & héritage",
        description: "Préparez la transmission de votre patrimoine tout en limitant les droits de succession. Azalée Patrimoine vous accompagne pour anticiper, organiser et optimiser votre succession grâce à des outils juridiques et fiscaux éprouvés."
      },
      {
        title: "Donation à titre gratuit",
        description: "Profitez des abattements renouvelables tous les 15 ans pour transmettre sans fiscalité excessive. Nous vous aidons à choisir le bon moment, les bons bénéficiaires et le bon montage (pleine propriété, nue-propriété, démembrement)."
      },
      {
        title: "Donation à titre onéreux",
        description: "Rééquilibrez une succession, compensez des déséquilibres familiaux ou financez un projet avec des dispositifs fiscaux adaptés."
      },
      {
        title: "Transmission de patrimoine",
        description: "Nous mettons en œuvre les meilleures solutions (assurance-vie, SCI, pacte Dutreil, démembrement, holding patrimoniale) pour vous permettre de transmettre dans la sérénité et en toute sécurité."
      },
      {
        title: "Protection de la famille",
        description: "Anticipez les aléas de la vie : décès, divorce, incapacité. Nos solutions couvrent la clause bénéficiaire sur-mesure, le mandat de protection future, le choix du régime matrimonial."
      },
      {
        title: "Bilan patrimonial",
        description: "Un état des lieux personnalisé et confidentiel, base indispensable pour toute stratégie de croissance ou de transmission."
      },
      {
        title: "Conseils patrimoniaux sur-mesure",
        description: "Dirigeants, professions libérales, héritiers : chaque profil mérite une stratégie ajustée et évolutive. Nos conseils intègrent vos objectifs, vos contraintes et votre horizon."
      },
      {
        title: "Patrimoines complexes",
        description: "Indivision, expatriation, fiscalité internationale, résidences multiples : nos experts vous guident sur des montages adaptés et conformes à la réglementation."
      },
      {
        title: "Financement patrimonial",
        description: "Utilisez l'effet de levier du crédit pour développer votre patrimoine : crédit lombard, OBO, financement locatif ou refinancement."
      },
      {
        title: "Produits structurés & alternatifs",
        description: "Accédez à des placements sur-mesure : produits structurés, private equity, ETF, capital-investissement, énergies renouvelables."
      },
      {
        title: "Fiscalité et expatriation",
        description: "Nous accompagnons aussi les non-résidents dans leur structuration patrimoniale en tenant compte des conventions fiscales internationales."
      }
    ],
    buttonText: "Je prends rdv",
    buttonUrl: "https://calendly.com/rdv-azalee-patrimoine/30min"
  },

  // Section: Cas concrets
  casConcrets: {
    title: "Cas concrets de stratégies patrimoniales",
    intro: "La gestion de patrimoine et la transmission nécessitent des solutions sur-mesure, adaptées à vos objectifs, à l'âge de vos bénéficiaires et à vos contraintes fiscales. Voici trois profils représentatifs pour illustrer comment structurer efficacement une stratégie patrimoniale pour les familles françaises d'aujourd'hui.",
    cas: [
      {
        name: "Sophie, 45 ans, 2 enfants",
        situation: "Sophie souhaite protéger ses enfants en cas de décès.",
        miseEnOeuvre: [
          "Prévoyance décès pour générer un capital destiné aux droits de succession",
          "Assurance-vie",
          "Contrat de capitalisation démembré",
          "Testament",
          "Mandat de protection future"
        ],
        image: "/images/sophie.webp",
        resume: {
          title: "Sophie, 45 ans",
          subtitle: "Protection familiale et succession",
          points: [
            "2 enfants à protéger",
            "Optimisation fiscale",
            "Sécurisation du patrimoine"
          ]
        }
      },
      {
        name: "Jean, 60 ans, chef d'entreprise",
        situation: "Jean souhaite transmettre son entreprise.",
        miseEnOeuvre: [
          "Holding patrimoniale",
          "Donation-partage",
          "Pacte Dutreil",
          "Assurance-vie"
        ],
        image: "/images/jean.webp",
        resume: {
          title: "Jean, 60 ans",
          subtitle: "Transmission d'entreprise",
          points: [
            "Chef d'entreprise",
            "Continuité de l'activité",
            "Optimisation des droits"
          ]
        }
      },
      {
        name: "Marie et Paul, 70 ans",
        situation: "Marie et Paul souhaitent alléger leur IFI et préparer leur succession.",
        miseEnOeuvre: [
          "Démembrement croisé",
          "Contrat de capitalisation",
          "Donation transgénérationnelle"
        ],
        image: "/images/couple.webp",
        resume: {
          title: "Marie & Paul, 70 ans",
          subtitle: "Optimisation IFI et succession",
          points: [
            "Réduction fiscale",
            "Transmission intergénérationnelle",
            "Préservation du capital"
          ]
        }
      }
    ],
    conclusion1: "Ces trois situations illustrent parfaitement la diversité des approches patrimoniales selon les cycles de vie. Sophie, en pleine activité professionnelle, privilégie la protection et la sécurisation. Jean, approchant de la retraite, se concentre sur la transmission de son outil de travail. Enfin, Marie et Paul optimisent leur fiscalité tout en préparant l'avenir de leurs descendants.",
    conclusion2: "Chaque stratégie combine plusieurs outils juridiques et fiscaux pour maximiser l'efficacité de la transmission.",
    buttonText: "Je contacte un expert pour analyser ma situation",
    buttonUrl: "https://calendly.com/rdv-azalee-patrimoine/30min"
  },

  // Section: Simuler pour mieux décider
  simulateurs: {
    title: "Simuler pour mieux décider",
    intro: "Nos simulateurs patrimoniaux vous permettent de visualiser :",
    items: [
      "Vos droits de succession",
      "L'évolution de votre patrimoine sur 10 à 30 ans",
      "Les gains potentiels d'une optimisation fiscale ou successorale"
    ],
    note: "Bientôt disponible en ligne : simulateur succession, tableau de bord patrimonial, simulateur d'IFI, comparatif assurance-vie vs capitalisation."
  },

  // Section: Pourquoi choisir Azalée Patrimoine
  pourquoiAzalee: {
    title: "Pourquoi choisir Azalée Patrimoine ?",
    points: [
      "Approche sur-mesure, humaine, transparente",
      "Accompagnement à long terme, révisions annuelles",
      "Honoraires clairs, sans surprise, adaptés à votre profil",
      "Accès à des solutions d'investissement sélectionnées selon des critères ESG, performance et stabilité",
      "CGP diplômés, certifiés CIF/IAS, sous assurance RCP",
      "Un Family Office dédié à la gestion de vos investissements immobiliers, pour un suivi optimal"
    ]
  },

  // Section: Qui sont les autres professionnels
  autresProfessionnels: {
    title: "Qui sont les autres professionnels qui vous conseillent sur votre patrimoine ?",
    intro1: "La gestion de patrimoine ne se fait pas en vase clos.",
    intro2: "Pour vous offrir un accompagnement complet et cohérent, le conseiller en gestion de patrimoine collabore étroitement avec d'autres professionnels du droit, de la finance et de l'immobilier.",
    intro3: "Chacun joue un rôle spécifique dans la protection, la valorisation et la transmission de votre patrimoine.",
    professionnels: [
      {
        title: "Le notaire",
        description: "Le notaire intervient dans la rédaction des actes authentiques (ventes immobilières, donations, testaments, SCI). Il garantit la sécurité juridique des transactions et conseille sur la transmission successorale."
      },
      {
        title: "L'avocat fiscaliste",
        description: "L'avocat fiscaliste vous défend en cas de contrôle fiscal, optimise votre fiscalité et vous conseille sur les montages juridiques complexes."
      },
      {
        title: "Le comptable",
        description: "Le comptable gère votre comptabilité, établit vos déclarations fiscales et vous conseille sur l'optimisation fiscale de votre activité professionnelle."
      },
      {
        title: "Le banquier",
        description: "Le banquier vous propose des crédits, des placements bancaires et des services de gestion de compte. Le CGP peut vous aider à négocier les meilleures conditions."
      }
    ]
  },

  // Section: Notre approche
  notreApproche: {
    title: "Notre approche",
    sections: [
      {
        title: "Une approche personnalisée et humaine",
        content: "Notre processus démarre par un audit patrimonial approfondi pour comprendre vos besoins, vos horizons d'investissement et votre appétence au risque. Nos recommandations sont pédagogiques et adaptées à chaque profil : investisseur, dirigeant, couple ou retraité."
      },
      {
        title: "Des stratégies performantes et durables",
        content: "Nous combinons différents leviers (fiscal, financier (placements), juridique et immobilier) pour construire une stratégie globale axée sur : réduction d'impôt, diversification, épargne long terme, transmission et protection de la famille. Nos solutions privilégient la performance durable, la sécurité et la transparence."
      },
      {
        title: "Une relation de confiance sur le long terme",
        content: "La gestion de patrimoine est un parcours de vie. Nous vous accompagnons sur le long terme avec un suivi structuré annuel, une révision de vos investissements, une adaptation aux évolutions fiscales et réglementaires, et une mise à jour de votre stratégie en fonction de vos projets. Chaque client dispose d'un interlocuteur dédié et d'un tableau de bord patrimonial pour une gestion claire de ses actifs financiers. Notre Family Officer immobilier coordonne les relations avec les agences immobilières, notaires, comptables et services fiscaux pour la gestion administrative de votre patrimoine immobilier."
      },
      {
        title: "Un engagement éthique et responsable",
        content: "Azalée Patrimoine intègre dans sa démarche les critères ESG (Environnement, Social, Gouvernance). Nous privilégions des investissements responsables, transparents et alignés avec vos valeurs, sans compromis sur la performance."
      }
    ],
    resume: {
      title: "En résumé",
      points: [
        "Un cabinet indépendant et certifié",
        "Une vision 360° du patrimoine : fiscal, juridique, immobilier, financier",
        "Une stratégie sur-mesure pour chaque profil",
        "Un accompagnement durable et humain",
        "Des valeurs fortes : transparence, pédagogie, responsabilité"
      ],
      conclusion: "Faire appel à Azalée Patrimoine, c'est choisir la rigueur d'un expert et la proximité d'un partenaire de confiance."
    }
  },

  // Section: FAQ
  faq: {
    title: "FAQ Gestion de patrimoine",
    questions: [
      {
        question: "Quel est le bon moment pour faire un audit patrimonial ?",
        answer: "Dès que vous changez de situation familiale, professionnelle ou patrimoniale."
      },
      {
        question: "Quelle est la différence entre CGP et gestionnaire de fortune ?",
        answer: "Le CGP vous accompagne globalement. Le gestionnaire de fortune intervient à partir de 5-10 M€ de patrimoine."
      },
      {
        question: "Quel est la différence entre CGP et un Family Officer ?",
        answer: "Le CGP accompagne un client pour diagnostiquer sa situation, optimiser sa fiscalité et mettre en place des placements (assurance-vie, PER, SCPI...), retraite/succession, avec une rémunération en honoraires et/ou rétrocommissions sur un périmètre financier et immobilier. Le Family Officer est un chef d'orchestre global (gouvernance familiale, consolidation multi-banques/actifs, coordination banques-notaires-avocats, reporting), rémunéré principalement à l'honoraire, sans distribution de produits et avec un ticket d'entrée plus élevé."
      },
      {
        question: "L'accompagnement est-il payant ?",
        answer: "L'audit patrimonial est offert dès 25 000 € d'investissement. Nos frais sont toujours expliqués, chiffrés et validés avec vous."
      }
    ]
  },

  // Section: Expatriés
  expatries: {
    title: "Travaillez-vous avec des expatriés ?",
    content: "Oui, nous accompagnons les expatriés français et les non-résidents dans leur gestion de patrimoine. Nous prenons en compte les conventions fiscales internationales, les régimes de résidence fiscale et les spécificités de chaque pays pour vous proposer des solutions adaptées."
  },

  // Section: Où nous trouver
  localisation: {
    title: "Où nous trouver ?",
    villes: [
      "Paris",
      "Lille",
      "Nantes",
      "La Rochelle",
      "Salon de Provence",
      "Annemasse"
    ],
    buttonText: "Rencontrer un conseiller en gestion de patrimoine à {ville}",
    buttonUrl: "https://calendly.com/rdv-azalee-patrimoine/30min"
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

async function initContent() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Initialize patrimoine page
    const path = 'patrimoine';
    const existing = await PageContent.findOne({ path });

    if (existing) {
      console.log(`⚠️  Page ${path} already exists.`);
      console.log('   Merging with existing content (preserving your changes)...');
      
      // Merge existing content with new content (preserving existing values)
      const mergedContent = deepMerge(existing.content || {}, patrimoineContent);
      
      existing.content = mergedContent;
      existing.lastModified = new Date();
      await existing.save();
      console.log(`✅ Page ${path} merged successfully!`);
      console.log('   Your existing content has been preserved.\n');
    } else {
      const page = new PageContent({
        path,
        title: "Patrimoine – Protégez et transmettez votre héritage",
        content: patrimoineContent,
        published: true
      });
      await page.save();
      console.log(`✅ Page ${path} created successfully!\n`);
    }

    // List all pages
    const allPages = await PageContent.find({});
    console.log('📋 All pages in database:');
    allPages.forEach((page, index) => {
      console.log(`   ${index + 1}. ${page.path} - ${page.title} (${page.published ? 'Published' : 'Draft'})`);
    });

    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.error('\n💡 MongoDB is not running!');
      console.error('   Start MongoDB: net start MongoDB (PowerShell as Admin)');
    }
    
    await mongoose.disconnect();
    process.exit(1);
  }
}

initContent();

