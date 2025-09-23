"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';

export default function GuidesPratiquesPage() {
  const [cmsContent, setCmsContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Load CMS content from database
  useEffect(() => {
    const loadCmsContent = async () => {
      try {
        const response = await fetch(`/api/pages/content?path=/outils/guides-pratiques&type=cms`);
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
      title: "Guides pratiques partenaires",
      subtitle: "Supports pédagogiques de nos partenaires",
      description: "Nous mettons à disposition les guides pédagogiques de nos partenaires assureurs et sociétés de gestion pour vous accompagner dans vos choix d'investissement."
    },
    partners: [
      {
        id: "selencia",
        name: "Selencia",
        description: "Guide complet sur les produits d'assurance-vie et de capitalisation",
        logo: "/images/selencia.svg",
        logoType: "svg",
        category: "assurance",
        products: ["Assurance-vie", "Capitalisation", "Épargne retraite"],
        features: ["Caractéristiques détaillées", "Tableau des frais", "Avantages fiscaux", "Modalités de souscription"]
      },
      {
        id: "cardif",
        name: "Cardif",
        description: "Supports pédagogiques sur les contrats d'assurance et d'épargne",
        logo: "/images/cardif-logo.svg",
        logoType: "svg",
        category: "assurance",
        products: ["Assurance-vie", "PER", "Contrats de capitalisation"],
        features: ["Fonctionnement des produits", "Fiscalité applicable", "Risques et garanties", "Conseils d'utilisation"]
      },
      {
        id: "swisslife",
        name: "SwissLife",
        description: "Guides spécialisés en gestion de patrimoine et assurance",
        logo: "/images/SL-Logo-svg.svg",
        logoType: "svg",
        category: "patrimoine",
        products: ["Assurance-vie", "Gestion de patrimoine", "Transmission", "Retraite"],
        features: ["Stratégies patrimoniales", "Optimisation fiscale", "Transmission intergénérationnelle", "Planification retraite"]
      },
      {
        id: "vieplus",
        name: "Vie Plus",
        description: "Documentation sur les produits d'assurance-vie et d'épargne",
        logo: "/images/vieplus.svg",
        logoType: "svg",
        category: "assurance",
        products: ["Assurance-vie", "Épargne", "Capitalisation"],
        features: ["Présentation des contrats", "Avantages concurrentiels", "Fiscalité", "Flexibilité des versements"]
      },
      {
        id: "uaflife",
        name: "UAF Life",
        description: "Guides pratiques sur l'assurance-vie et les placements",
        logo: "🎯",
        logoType: "emoji",
        category: "assurance",
        products: ["Assurance-vie", "Placements", "Épargne"],
        features: ["Comparaison des supports", "Rendements historiques", "Frais et charges", "Conseils d'allocation"]
      },
      {
        id: "intencial",
        name: "Intencial",
        description: "Supports pédagogiques sur la gestion d'actifs et l'assurance",
        logo: "/images/intencial-1.png",
        logoType: "svg",
        category: "gestion",
        products: ["Gestion d'actifs", "Assurance-vie", "OPCVM"],
        features: ["Philosophie d'investissement", "Gestion active", "Performance", "Transparence des frais"]
      }
    ],
    categories: {
      all: "Tous les partenaires",
      assurance: "Assurance",
      patrimoine: "Patrimoine",
      gestion: "Gestion d'actifs"
    },
    featured: {
      title: "Guide du mois",
      guide: {
        title: "Assurance-vie 2024 : les nouveautés réglementaires",
        description: "Découvrez les dernières évolutions réglementaires et leurs impacts sur vos contrats d'assurance-vie.",
        readTime: "25 min",
        difficulty: "Intermédiaire"
      }
    },
    benefits: {
      title: "Pourquoi consulter nos guides partenaires ?",
      benefits: [
        "Informations officielles et actualisées des émetteurs",
        "Comparaison objective des caractéristiques et frais",
        "Présentation claire des avantages et inconvénients",
        "Conseils pratiques pour optimiser vos investissements"
      ]
    }
  };

  const filteredPartners = selectedCategory === 'all' 
    ? content.partners 
    : content.partners.filter(partner => partner.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#4EBBBD] border-t-transparent mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Chargement des guides...</p>
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B99066] rounded-full opacity-10 transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#b99066] rounded-full opacity-10 transform -translate-x-32 translate-y-32"></div>
        
        <div className="relative max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#B99066] rounded-full mr-2"></span>
              Guides pratiques
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

      {/* Featured Guide */}
      <section className="py-16 -mt-10">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#3DA8AA] rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{content.featured.title}</h2>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                  {content.featured.guide.readTime}
                </span>
                <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                  {content.featured.guide.difficulty}
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">{content.featured.guide.title}</h3>
            <p className="text-lg opacity-90 mb-6">{content.featured.guide.description}</p>
            <button className="px-8 py-3 bg-white text-[#4EBBBD] font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Lire le guide →
            </button>
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
                    ? 'bg-[#B99066] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos partenaires
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              👉 Ces supports présentent de façon claire les caractéristiques, frais et avantages des produits disponibles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      partner.logoType === 'svg' 
                        ? 'bg-white border-2 border-gray-200 shadow-sm' 
                        : 'bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4]'
                    }`}>
                      {partner.logoType === 'svg' ? (
                        <img 
                          src={partner.logo} 
                          alt={`Logo ${partner.name}`}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <span className="text-white text-2xl">{partner.logo}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {partner.name}
                      </h3>
                      <span className="px-3 py-1 bg-[#B99066] bg-opacity-10 text-[#4EBBBD] rounded-full text-sm font-medium">
                        {content.categories[partner.category]}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {partner.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Produits disponibles :</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {partner.products.map((product, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Contenu des guides :</h4>
                    <ul className="space-y-1">
                      {partner.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#B99066] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#4EBBBD] to-[#3DA8AA] text-white font-semibold rounded-xl hover:from-[#3DA8AA] hover:to-[#2C9597] transition-all duration-200">
                    Consulter les guides
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.benefits.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez pourquoi nos guides partenaires sont essentiels pour vos décisions d'investissement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.benefits.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-[#112033] to-[#19515e]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Restez informé des nouveaux guides partenaires
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Recevez les dernières documentations de nos partenaires et nos analyses comparatives directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 rounded-xl border-0 focus:ring-4 focus:ring-[#4EBBBD] focus:ring-opacity-20"
            />
            <button className="px-8 py-3 bg-[#B99066] text-white font-bold rounded-xl hover:bg-[#A67A5A] transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}




