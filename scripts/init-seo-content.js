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

// SEO content for each page
const seoContent = {
  immobilier: {
    title: "Investissement Immobilier | Azalée Patrimoine - LMNP, SCI, SCPI, Crédit",
    description: "Découvrez comment Azalée Patrimoine transforme vos projets immobiliers en véritables stratégies patrimoniales : immobilier neuf, LMNP, SCI, SCPI, crédit et transmission.",
    keywords: "investissement immobilier, LMNP, SCI, SCPI, crédit immobilier, défiscalisation, immobilier neuf, VEFA, location meublée, Azalée Patrimoine, gestion de patrimoine",
    openGraph: {
      title: "Investissement Immobilier | Azalée Patrimoine",
      description: "Découvrez comment Azalée Patrimoine transforme vos projets immobiliers en véritables stratégies patrimoniales : immobilier neuf, LMNP, SCI, SCPI, crédit et transmission.",
      url: "https://azalee-patrimoine.fr/immobilier"
    },
    twitter: {
      title: "Investissement Immobilier | Azalée Patrimoine",
      description: "Découvrez comment Azalée Patrimoine transforme vos projets immobiliers en véritables stratégies patrimoniales : immobilier neuf, LMNP, SCI, SCPI, crédit et transmission."
    }
  },
  fiscalite: {
    title: "Fiscalité et Optimisation Fiscale | Azalée Patrimoine",
    description: "Optimisez votre fiscalité avec Azalée Patrimoine : défiscalisation immobilière, réduction d'impôts, dispositifs Pinel, Malraux, Girardin, et conseil fiscal personnalisé.",
    keywords: "fiscalité, défiscalisation, réduction d'impôts, loi Pinel, loi Malraux, loi Girardin, optimisation fiscale, Azalée Patrimoine",
    openGraph: {
      title: "Fiscalité et Optimisation Fiscale | Azalée Patrimoine",
      description: "Optimisez votre fiscalité avec Azalée Patrimoine : défiscalisation immobilière, réduction d'impôts, dispositifs Pinel, Malraux, Girardin, et conseil fiscal personnalisé.",
      url: "https://azalee-patrimoine.fr/fiscalite"
    },
    twitter: {
      title: "Fiscalité et Optimisation Fiscale | Azalée Patrimoine",
      description: "Optimisez votre fiscalité avec Azalée Patrimoine : défiscalisation immobilière, réduction d'impôts, dispositifs Pinel, Malraux, Girardin, et conseil fiscal personnalisé."
    }
  },
  placements: {
    title: "Placements Financiers et Épargne | Azalée Patrimoine",
    description: "Placements financiers et épargne avec Azalée Patrimoine : assurance-vie, SCPI, PEA, PER, contrats de capitalisation. Optimisez votre épargne et préparez votre retraite.",
    keywords: "placements financiers, assurance-vie, SCPI, PEA, PER, épargne, investissement, Azalée Patrimoine",
    openGraph: {
      title: "Placements Financiers et Épargne | Azalée Patrimoine",
      description: "Placements financiers et épargne avec Azalée Patrimoine : assurance-vie, SCPI, PEA, PER, contrats de capitalisation. Optimisez votre épargne et préparez votre retraite.",
      url: "https://azalee-patrimoine.fr/placements"
    },
    twitter: {
      title: "Placements Financiers et Épargne | Azalée Patrimoine",
      description: "Placements financiers et épargne avec Azalée Patrimoine : assurance-vie, SCPI, PEA, PER, contrats de capitalisation. Optimisez votre épargne et préparez votre retraite."
    }
  },
  retraite: {
    title: "Retraite et Préparation de l'Avenir | Azalée Patrimoine",
    description: "Préparez votre retraite avec Azalée Patrimoine : PER, PERP, rachat de trimestres, simulation retraite, prévoyance et protection familiale. Anticipez sereinement votre avenir.",
    keywords: "retraite, PER, PERP, rachat de trimestres, simulation retraite, prévoyance, Azalée Patrimoine",
    openGraph: {
      title: "Retraite et Préparation de l'Avenir | Azalée Patrimoine",
      description: "Préparez votre retraite avec Azalée Patrimoine : PER, PERP, rachat de trimestres, simulation retraite, prévoyance et protection familiale. Anticipez sereinement votre avenir.",
      url: "https://azalee-patrimoine.fr/retraite"
    },
    twitter: {
      title: "Retraite et Préparation de l'Avenir | Azalée Patrimoine",
      description: "Préparez votre retraite avec Azalée Patrimoine : PER, PERP, rachat de trimestres, simulation retraite, prévoyance et protection familiale. Anticipez sereinement votre avenir."
    }
  },
  patrimoine: {
    title: "Gestion de Patrimoine et Transmission | Azalée Patrimoine",
    description: "Gestion de patrimoine et transmission avec Azalée Patrimoine : succession, héritage, donation, bilan patrimonial, protection famille. Protégez et transmettez votre patrimoine.",
    keywords: "gestion de patrimoine, transmission, succession, héritage, donation, bilan patrimonial, Azalée Patrimoine",
    openGraph: {
      title: "Gestion de Patrimoine et Transmission | Azalée Patrimoine",
      description: "Gestion de patrimoine et transmission avec Azalée Patrimoine : succession, héritage, donation, bilan patrimonial, protection famille. Protégez et transmettez votre patrimoine.",
      url: "https://azalee-patrimoine.fr/patrimoine"
    },
    twitter: {
      title: "Gestion de Patrimoine et Transmission | Azalée Patrimoine",
      description: "Gestion de patrimoine et transmission avec Azalée Patrimoine : succession, héritage, donation, bilan patrimonial, protection famille. Protégez et transmettez votre patrimoine."
    }
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

async function initSEOContent() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/azalee_db';
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    for (const [path, seoData] of Object.entries(seoContent)) {
      const existingPage = await PageContent.findOne({ path });

      if (existingPage) {
        // Merge SEO data with existing content
        const existingContent = existingPage.content || {};
        const mergedContent = {
          ...existingContent,
          seo: mergeDeep(existingContent.seo || {}, seoData)
        };
        existingPage.content = mergedContent;
        existingPage.lastModified = new Date();
        await existingPage.save();
        console.log(`✅ SEO content updated for ${path} (merged with existing)`);
      } else {
        // Create new page with SEO data
        const newPage = new PageContent({
          path,
          title: path.charAt(0).toUpperCase() + path.slice(1),
          content: {
            seo: seoData
          },
          published: true,
          lastModified: new Date()
        });
        await newPage.save();
        console.log(`✅ SEO content created for ${path}`);
      }
    }

    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

initSEOContent();



