// Dynamic Content Templates for CMS
export const contentTemplates = {
  // Hero Section Templates
  hero: {
    standard: {
      name: 'Hero Standard',
      description: 'Template hero classique avec titre, sous-titre et CTA',
      data: {
        title: 'Titre Principal',
        subtitle: 'Sous-titre descriptif',
        description: 'Description détaillée de votre offre',
        ctaButton: 'Découvrir',
        ctaColor: '#B99066'
      }
    },
    premium: {
      name: 'Hero Premium',
      description: 'Template hero premium avec style moderne',
      data: {
        title: 'Solution Premium',
        subtitle: 'Excellence et innovation',
        description: 'Découvrez nos solutions haut de gamme',
        ctaButton: 'En savoir plus',
        ctaColor: '#4EBBBD'
      }
    },
    minimal: {
      name: 'Hero Minimal',
      description: 'Template hero épuré et moderne',
      data: {
        title: 'Simplicité',
        subtitle: 'Efficacité',
        description: 'Une approche simple et efficace',
        ctaButton: 'Commencer',
        ctaColor: '#6B7280'
      }
    }
  },

  // Services Section Templates
  services: {
    standard: {
      name: 'Services Standard',
      description: 'Liste de services avec icônes',
      data: {
        servicesTitle: 'Nos Services',
        servicesList: [
          { name: 'Service 1', description: 'Description du service', icon: '🔧' },
          { name: 'Service 2', description: 'Description du service', icon: '⚙️' },
          { name: 'Service 3', description: 'Description du service', icon: '🛠️' },
          { name: 'Service 4', description: 'Description du service', icon: '🔨' }
        ]
      }
    },
    premium: {
      name: 'Services Premium',
      description: 'Services haut de gamme',
      data: {
        servicesTitle: 'Services d\'Excellence',
        servicesList: [
          { name: 'Conseil Expert', description: 'Accompagnement personnalisé', icon: '👨‍💼' },
          { name: 'Solutions Avancées', description: 'Technologies de pointe', icon: '🚀' },
          { name: 'Support Premium', description: 'Assistance dédiée', icon: '⭐' },
          { name: 'Formation', description: 'Formation complète', icon: '🎓' }
        ]
      }
    }
  },

  // Advantages Section Templates
  advantages: {
    standard: {
      name: 'Avantages Standard',
      description: 'Liste d\'avantages classique',
      data: {
        advantagesTitle: 'Nos Avantages',
        advantagesList: [
          { title: 'Qualité', description: 'Produits de haute qualité' },
          { title: 'Rapidité', description: 'Livraison rapide' },
          { title: 'Prix', description: 'Tarifs compétitifs' },
          { title: 'Service', description: 'Service client excellent' }
        ],
        advantagesStyle: 'grid'
      }
    },
    detailed: {
      name: 'Avantages Détaillés',
      description: 'Avantages avec descriptions complètes',
      data: {
        advantagesTitle: 'Pourquoi Nous Choisir ?',
        advantagesList: [
          { title: 'Expertise Reconnue', description: 'Plus de 10 ans d\'expérience dans le domaine' },
          { title: 'Innovation Continue', description: 'Recherche et développement permanents' },
          { title: 'Satisfaction Client', description: '98% de clients satisfaits' },
          { title: 'Support 24/7', description: 'Assistance disponible à tout moment' }
        ],
        advantagesStyle: 'cards'
      }
    }
  },

  // Process Section Templates
  process: {
    standard: {
      name: 'Processus Standard',
      description: 'Processus en 4 étapes',
      data: {
        processTitle: 'Notre Processus',
        processSteps: [
          { step: '1', title: 'Analyse', description: 'Étude de vos besoins' },
          { step: '2', title: 'Conception', description: 'Développement de la solution' },
          { step: '3', title: 'Réalisation', description: 'Mise en œuvre' },
          { step: '4', title: 'Suivi', description: 'Accompagnement continu' }
        ],
        processTimeline: '2-4 semaines'
      }
    },
    detailed: {
      name: 'Processus Détaillé',
      description: 'Processus complet en 6 étapes',
      data: {
        processTitle: 'Méthodologie Complète',
        processSteps: [
          { step: '1', title: 'Consultation', description: 'Rencontre et analyse des besoins' },
          { step: '2', title: 'Étude', description: 'Analyse approfondie de votre situation' },
          { step: '3', title: 'Proposition', description: 'Présentation de la solution' },
          { step: '4', title: 'Validation', description: 'Approbation et ajustements' },
          { step: '5', title: 'Réalisation', description: 'Mise en œuvre du projet' },
          { step: '6', title: 'Suivi', description: 'Accompagnement et optimisation' }
        ],
        processTimeline: '4-8 semaines'
      }
    }
  },

  // Testimonials Section Templates
  testimonials: {
    standard: {
      name: 'Témoignages Standard',
      description: 'Témoignages clients classiques',
      data: {
        testimonialsTitle: 'Nos Clients Témoignent',
        testimonialsList: [
          { name: 'Client A', text: 'Service excellent, je recommande vivement !', rating: 5 },
          { name: 'Client B', text: 'Très satisfait de la qualité et du suivi.', rating: 5 }
        ],
        testimonialsCount: '2'
      }
    },
    detailed: {
      name: 'Témoignages Détaillés',
      description: 'Témoignages avec plus de détails',
      data: {
        testimonialsTitle: 'Retours de nos Clients',
        testimonialsList: [
          { name: 'Marie L.', text: 'Un accompagnement personnalisé qui a fait toute la différence dans mon projet.', rating: 5 },
          { name: 'Pierre M.', text: 'Professionnalisme et expertise au rendez-vous. Je recommande sans hésitation.', rating: 5 },
          { name: 'Sophie D.', text: 'Une équipe à l\'écoute qui a su comprendre mes besoins spécifiques.', rating: 5 }
        ],
        testimonialsCount: '3'
      }
    }
  },

  // CTA Section Templates
  cta: {
    standard: {
      name: 'CTA Standard',
      description: 'Appel à l\'action classique',
      data: {
        ctaTitle: 'Prêt à Commencer ?',
        ctaText: 'Contactez-nous pour une consultation personnalisée.',
        ctaButton: 'Nous Contacter',
        ctaLink: '/contact',
        ctaStyle: 'gradient'
      }
    },
    urgent: {
      name: 'CTA Urgent',
      description: 'Appel à l\'action avec urgence',
      data: {
        ctaTitle: 'Offre Limitée !',
        ctaText: 'Profitez de notre offre spéciale avant la fin du mois.',
        ctaButton: 'Profiter de l\'Offre',
        ctaLink: '/offre-speciale',
        ctaStyle: 'solid'
      }
    },
    premium: {
      name: 'CTA Premium',
      description: 'Appel à l\'action haut de gamme',
      data: {
        ctaTitle: 'Découvrez l\'Excellence',
        ctaText: 'Rejoignez nos clients satisfaits et bénéficiez de notre expertise.',
        ctaButton: 'Découvrir',
        ctaLink: '/premium',
        ctaStyle: 'gradient'
      }
    }
  }
};

// Helper function to get template by section and type
export const getTemplate = (sectionId, templateType) => {
  return contentTemplates[sectionId]?.[templateType] || null;
};

// Helper function to get all templates for a section
export const getSectionTemplates = (sectionId) => {
  return contentTemplates[sectionId] || {};
};

// Helper function to apply template to form data
export const applyTemplate = (template, currentData = {}) => {
  return {
    ...currentData,
    ...template.data
  };
};
