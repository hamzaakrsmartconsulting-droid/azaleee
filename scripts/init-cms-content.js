// Script to initialize CMS content in MongoDB
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

// Default content for assurance-vie page
const assuranceVieContent = {
  hero: {
    title: "Assurance-vie : l'enveloppe incontournable",
    subtitle: "L'assurance-vie est le placement préféré des Français, avec près de 1 900 milliards d'euros d'encours. Si elle est souvent présentée comme un simple produit d'épargne, elle est en réalité un véritable couteau suisse patrimonial.",
    description: "Son intérêt dépasse le rendement financier : il tient surtout à sa fiscalité avantageuse et à sa souplesse en matière de transmission.",
    button: "Demander une étude patrimoniale gratuite",
    image: "/images/assurance-vie-hero.jpg"
  },
  enveloppe: {
    title: "📌 L'assurance-vie comme enveloppe fiscale",
    description: "Une assurance-vie n'est pas un placement en soi mais une enveloppe qui peut contenir :",
    contenus: [
      "un fonds en euros sécurisé (capital garanti)",
      "des unités de compte (UC) : actions, ETF, SCPI, obligations, produits structurés…"
    ],
    particularite: "La particularité est que cette enveloppe bénéficie d'un régime fiscal spécifique, plus favorable que celui des autres placements financiers."
  },
  fiscalite: {
    title: "📊 La fiscalité des rachats (retraits)",
    description: "Lorsque vous retirez de l'argent de votre contrat, seule la part des gains (intérêts, plus-values) est imposée. La fiscalité dépend de deux critères :",
    criteres: [
      "La durée du contrat (moins ou plus de 8 ans)",
      "La date des versements (avant ou après le 27 septembre 2017, entrée en vigueur du PFU)"
    ],
    avant2017: {
      title: "Avant le 27/09/2017",
      options: [
        "Option pour le PFL (prélèvement forfaitaire libératoire) : 35% avant 4 ans, 15% entre 4 et 8 ans, 7,5% après 8 ans",
        "Ou imposition au barème de l'IR"
      ]
    },
    depuis2017: {
      title: "Depuis le 27/09/2017",
      options: [
        "Application du PFU (prélèvement forfaitaire unique, ou flat tax) de 30% (12,8% IR + 17,2% PS) pour les versements après cette date",
        "Après 8 ans, taux réduit de 7,5% (hors PS) dans la limite de 150 000€ de primes versées par assuré, puis 12,8% au-delà"
      ]
    },
    abattement: "Dans tous les cas : abattement annuel de 4 600€ (9 200€ pour un couple) sur les produits après 8 ans."
  },
  transmission: {
    title: "👵 Versements avant et après 70 ans : un impact majeur en transmission",
    description: "La fiscalité successorale de l'assurance-vie dépend de l'âge de l'assuré au moment des versements :",
    avant70: {
      title: "Versements avant 70 ans",
      description: "Abattement de 152 500€ par bénéficiaire, puis taxation à 20% jusqu'à 852 500€, puis 31,25% au-delà."
    },
    apres70: {
      title: "Versements après 70 ans",
      description: "Abattement réduit à 30 500€ par bénéficiaire, puis taxation à 20% jusqu'à 730 500€, puis 31,25% au-delà."
    }
  },
  cta: {
    title: "Besoin d'un conseil personnalisé ?",
    description: "Notre équipe d'experts est à votre disposition pour vous accompagner dans vos choix patrimoniaux.",
    primaryButton: "Demander une étude gratuite",
    secondaryButton: "Prendre rendez-vous"
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

    // Initialize assurance-vie page
    const path = 'placements/assurance-vie';
    const existing = await PageContent.findOne({ path });

    if (existing) {
      console.log(`⚠️  Page ${path} already exists.`);
      console.log('   Merging with existing content (preserving your changes)...');
      
      // Merge existing content with new content (preserving existing values)
      const mergedContent = deepMerge(existing.content || {}, assuranceVieContent);
      
      existing.content = mergedContent;
      existing.lastModified = new Date();
      await existing.save();
      console.log(`✅ Page ${path} merged successfully!`);
      console.log('   Your existing content has been preserved.\n');
    } else {
      const page = new PageContent({
        path,
        title: "Assurance-vie : l'enveloppe incontournable",
        content: assuranceVieContent,
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
