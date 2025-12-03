const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const PageContentSchema = new mongoose.Schema({
  path: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: mongoose.Schema.Types.Mixed, default: {} },
  published: { type: Boolean, default: true },
  lastModified: { type: Date, default: Date.now },
  modifiedBy: { type: String }
}, { collection: 'pagecontents' });

const PageContent = mongoose.models.PageContent || mongoose.model('PageContent', PageContentSchema);

// Footer content structure
const footerContent = {
  contact: {
    title: "Contactez-nous",
    address: {
      street: "106 Rue de Richelieu",
      city: "75002 Paris"
    },
    email: "contact@azalee-patrimoine.fr",
    phone: "01 53 45 85 00",
    ctaButton: {
      text: "Prendre rendez-vous",
      url: "https://calendly.com/rdv-azalee-patrimoine/30min"
    }
  },
  services: {
    title: "Nos services",
    items: [
      "Conseil en gestion de patrimoine",
      "Optimisation fiscale",
      "Investissement immobilier",
      "Placements financiers",
      "Transmission de patrimoine"
    ]
  },
  outils: {
    title: "Outils",
    items: [
      { text: "Calculateur d'impôts", path: "/outils/calculatrice-impots" },
      { text: "Calculs financiers", path: "/outils/calculs-financiers" },
      { text: "Assurance-vie vs PER", path: "/outils-financiers/assurance-vie-vs-per" }
    ]
  },
  mentionsLegales: {
    title: "Mentions légales",
    companyName: "Azalée Patrimoine",
    legalInfo: {
      capital: "SASU au capital de 8 000 €",
      address: "106 rue de Richelieu, 75002 Paris",
      siren: "SIREN 790 419 949 – RCS Paris",
      tva: "TVA intracommunautaire : FR90790419949",
      orias: {
        text: "Inscrite à l'ORIAS n° 13001775",
        url: "https://www.orias.fr",
        description: "en qualité d'intermédiaire en assurance, banque et finance."
      },
      anacofi: "Adhérente à l'ANACOFI-CIF (92 rue d'Amsterdam, 75009 Paris) et à l'ANACOFI-Courtage (90 rue d'Amsterdam, 75009 Paris).",
      acpr: "Soumise au contrôle de l'ACPR (4 place de Budapest, 75436 Paris Cedex 09)."
    }
  },
  bottom: {
    copyright: "© 2025 AZALEE PATRIMOINE. Tous droits réservés.",
    links: [
      { text: "Politique de confidentialité", path: "#" },
      { text: "Conditions d'utilisation", path: "/conditions-generales" },
      { text: "Mentions légales", path: "/mentions-legales" }
    ]
  }
};

// Deep merge function
function mergeDeep(target, source) {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else if (Array.isArray(source[key])) {
        output[key] = source[key];
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

async function initFooterContent() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/azalee_db';
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    const existingPage = await PageContent.findOne({ path: 'footer' });

    if (existingPage) {
      // Merge with existing content
      const mergedContent = mergeDeep(existingPage.content || {}, footerContent);
      existingPage.content = mergedContent;
      existingPage.lastModified = new Date();
      await existingPage.save();
      console.log('✅ Footer content updated (merged with existing)');
    } else {
      // Create new page
      const newPage = new PageContent({
        path: 'footer',
        title: 'Footer',
        content: footerContent,
        published: true,
        lastModified: new Date()
      });
      await newPage.save();
      console.log('✅ Footer content created');
    }

    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

initFooterContent();



