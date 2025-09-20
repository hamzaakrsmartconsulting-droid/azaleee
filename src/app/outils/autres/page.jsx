"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';

export default function AutresPage() {
  const [cmsContent, setCmsContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Load CMS content from database
  useEffect(() => {
    const loadCmsContent = async () => {
      try {
        const response = await fetch(`/api/pages/content?path=/outils/autres&type=cms`);
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.content) {
            setCmsContent(JSON.parse(data.content.content));
          }
        }
      } catch (error) {
        console.log('No CMS content found, using defaults');
      } finally {
        setIsLoading(false);
      }
    };

    loadCmsContent();
  }, []);

  // Default content if CMS content is not available
  const content = cmsContent || {
    hero: {
      title: "Autres Outils",
      subtitle: "Ressources complémentaires pour vos finances",
      description: "Découvrez notre collection d'outils spécialisés, ressources et services pour optimiser votre gestion patrimoniale."
    },
    categories: {
      all: "Tous les outils",
      calculatrices: "Calculatrices",
      simulateurs: "Simulateurs",
      ressources: "Ressources",
      services: "Services"
    },
    tools: [
      {
        id: 1,
        category: "calculatrices",
        title: "Calculateur de capacité d'emprunt",
        description: "Calculez votre capacité d'emprunt immobilier en fonction de vos revenus et charges.",
        icon: "🏠",
        features: ["Capacité d'emprunt", "Mensualités", "Taux d'endettement"],
        link: "/outils/calculatrice-capacite-emprunt"
      },
      {
        id: 2,
        category: "calculatrices",
        title: "Calculateur de rentabilité locative",
        description: "Évaluez la rentabilité d'un investissement immobilier locatif.",
        icon: "📊",
        features: ["Rentabilité brute", "Rentabilité nette", "Cash-flow"],
        link: "/outils/calculatrice-rentabilite-locative"
      },
      {
        id: 3,
        category: "simulateurs",
        title: "Simulateur de crédit immobilier",
        description: "Simulez différents scénarios de crédit immobilier avec tableaux d'amortissement.",
        icon: "💰",
        features: ["Tableau d'amortissement", "Coût total", "Comparaison"],
        link: "/outils/simulateur-credit-immobilier"
      },
      {
        id: 4,
        category: "simulateurs",
        title: "Simulateur de retraite",
        description: "Projetez vos revenus de retraite selon différents scénarios d'épargne.",
        icon: "👴",
        features: ["Revenus futurs", "Écart de pension", "Recommandations"],
        link: "/outils/simulateur-retraite"
      },
      {
        id: 5,
        category: "ressources",
        title: "Lexique financier",
        description: "Définitions et explications des termes financiers et fiscaux.",
        icon: "📚",
        features: ["Définitions", "Exemples", "Liens utiles"],
        link: "/ressources/lexique-financier"
      },
      {
        id: 6,
        category: "ressources",
        title: "Calendrier fiscal",
        description: "Dates importantes et échéances fiscales à retenir.",
        icon: "📅",
        features: ["Échéances", "Rappels", "Notifications"],
        link: "/ressources/calendrier-fiscal"
      },
      {
        id: 7,
        category: "services",
        title: "Conseil personnalisé",
        description: "Bénéficiez d'un conseil personnalisé avec nos experts financiers.",
        icon: "👨‍💼",
        features: ["Analyse personnalisée", "Recommandations", "Suivi"],
        link: "/services/conseil-personnalise"
      },
      {
        id: 8,
        category: "services",
        title: "Audit patrimonial",
        description: "Analyse complète de votre situation patrimoniale et fiscale.",
        icon: "🔍",
        features: ["Analyse complète", "Rapport détaillé", "Plan d'action"],
        link: "/services/audit-patrimonial"
      },
      {
        id: 9,
        category: "calculatrices",
        title: "Calculateur de plus-value immobilière",
        description: "Calculez les plus-values sur la vente d'un bien immobilier.",
        icon: "📈",
        features: ["Plus-value brute", "Plus-value nette", "Fiscalité"],
        link: "/outils/calculatrice-plus-value-immobiliere"
      },
      {
        id: 10,
        category: "simulateurs",
        title: "Simulateur d'assurance-vie",
        description: "Simulez la croissance de votre contrat d'assurance-vie.",
        icon: "🛡️",
        features: ["Projections", "Comparaisons", "Optimisations"],
        link: "/outils/simulateur-assurance-vie"
      },
      {
        id: 11,
        category: "ressources",
        title: "FAQ Financière",
        description: "Réponses aux questions les plus fréquentes sur la finance et la fiscalité.",
        icon: "❓",
        features: ["Questions fréquentes", "Réponses expertes", "Recherche"],
        link: "/ressources/faq-financiere"
      },
      {
        id: 12,
        category: "services",
        title: "Formation financière",
        description: "Formations en ligne pour améliorer vos connaissances financières.",
        icon: "🎓",
        features: ["Cours en ligne", "Certifications", "Suivi"],
        link: "/services/formation-financiere"
      }
    ],
    featured: {
      title: "Outil recommandé",
      tool: {
        title: "Calculateur de capacité d'emprunt",
        description: "L'outil le plus utilisé par nos clients pour évaluer leur capacité d'emprunt immobilier.",
        icon: "🏠",
        users: "15,000+ utilisateurs"
      }
    },
    stats: {
      title: "Nos outils en chiffres",
      stats: [
        { number: "50+", label: "Outils disponibles" },
        { number: "100K+", label: "Utilisateurs mensuels" },
        { number: "98%", label: "Satisfaction client" },
        { number: "24/7", label: "Disponibilité" }
      ]
    },
    newsletter: {
      title: "Restez informé",
      description: "Recevez les nouveautés et améliorations de nos outils",
      placeholder: "Votre adresse email"
    }
  };

  const filteredTools = selectedCategory === 'all' 
    ? content.tools 
    : content.tools.filter(tool => tool.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#4EBBBD] border-t-transparent mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Chargement des outils...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#112033] via-[#19515e] to-[#4EBBBD] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4EBBBD] rounded-full opacity-10 transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#b99066] rounded-full opacity-10 transform -translate-x-32 translate-y-32"></div>
        
        <div className="relative max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#4EBBBD] rounded-full mr-2"></span>
              Outils spécialisés
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-2xl font-light mb-8 text-gray-100">
              {content.hero.subtitle}
            </p>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {content.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tool */}
      <section className="py-16 -mt-10">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#3DA8AA] rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{content.featured.tool.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold">{content.featured.title}</h2>
                  <p className="text-sm opacity-90">{content.featured.tool.users}</p>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">{content.featured.tool.title}</h3>
            <p className="text-lg opacity-90 mb-6">{content.featured.tool.description}</p>
            <button className="px-8 py-3 bg-white text-[#4EBBBD] font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Utiliser l'outil →
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.stats.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#4EBBBD] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(content.categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === key
                    ? 'bg-[#4EBBBD] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{tool.icon}</div>
                    <span className="px-3 py-1 bg-[#4EBBBD] bg-opacity-10 text-[#4EBBBD] rounded-full text-sm font-medium">
                      {content.categories[tool.category]}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {tool.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Fonctionnalités :</h4>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#4EBBBD] to-[#3DA8AA] text-white font-semibold rounded-xl hover:from-[#3DA8AA] hover:to-[#2C9597] transition-all duration-200">
                    Accéder à l'outil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Accès rapide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Accédez rapidement aux outils les plus utilisés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.tools.slice(0, 8).map((tool) => (
              <div key={tool.id} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{tool.title}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-[#112033] to-[#19515e]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {content.newsletter.title}
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            {content.newsletter.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={content.newsletter.placeholder}
              className="flex-1 px-6 py-3 rounded-xl border-0 focus:ring-4 focus:ring-[#4EBBBD] focus:ring-opacity-20"
            />
            <button className="px-8 py-3 bg-[#4EBBBD] text-white font-bold rounded-xl hover:bg-[#3DA8AA] transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'aide ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre équipe d'experts est là pour vous accompagner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chat en direct</h3>
              <p className="text-gray-600 mb-6">Obtenez une réponse immédiate à vos questions</p>
              <button className="px-6 py-3 bg-[#4EBBBD] text-white font-semibold rounded-xl hover:bg-[#3DA8AA] transition-colors">
                Démarrer le chat
              </button>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Appel téléphonique</h3>
              <p className="text-gray-600 mb-6">Parlez directement avec un conseiller</p>
              <button className="px-6 py-3 bg-[#4EBBBD] text-white font-semibold rounded-xl hover:bg-[#3DA8AA] transition-colors">
                Appeler maintenant
              </button>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rendez-vous</h3>
              <p className="text-gray-600 mb-6">Planifiez un entretien personnalisé</p>
              <button className="px-6 py-3 bg-[#4EBBBD] text-white font-semibold rounded-xl hover:bg-[#3DA8AA] transition-colors">
                Prendre RDV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




