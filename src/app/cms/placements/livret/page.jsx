"use client";
import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Livret – Épargnez en toute sécurité avec Azalee Wealth",
    description: "Découvrez les avantages du livret pour sécuriser votre épargne et bénéficier d'une fiscalité avantageuse. Nos experts vous accompagnent pour optimiser votre épargne avec des solutions adaptées à vos objectifs.",
    ctaText: "Demander une étude patrimoniale gratuite"
  },
  rightCard: {
    title: "Nos experts à votre service",
    services: [
      "Analyse de votre situation d'épargne",
      "Optimisation fiscale et patrimoniale",
      "Conseil en placement sécurisé",
      "Accompagnement personnalisé et suivi"
    ]
  },
  essentiel: {
    title: "L'essentiel du Livret",
    blocks: [
      {
        title: "Épargne sécurisée",
        description: "Placement sécurisé avec un capital garanti et une disponibilité immédiate de vos fonds."
      },
      {
        title: "Fiscalité avantageuse",
        description: "Bénéficiez d'une fiscalité attractive avec des intérêts exonérés d'impôts et de prélèvements sociaux."
      },
      {
        title: "Flexibilité totale",
        description: "Versements et retraits libres selon vos besoins et vos objectifs d'épargne."
      }
    ]
  },
  pourquoiChoisir: {
    title: "Pourquoi choisir le Livret ?",
    reasons: [
      {
        number: "1",
        title: "Sécurité",
        description: "Capital garanti et placement sécurisé pour votre épargne."
      },
      {
        number: "2",
        title: "Liquidité",
        description: "Accès immédiat à vos fonds en cas de besoin."
      },
      {
        number: "3",
        title: "Fiscalité",
        description: "Intérêts exonérés d'impôts et de prélèvements sociaux."
      },
      {
        number: "4",
        title: "Simplicité",
        description: "Gestion simple et transparente de votre épargne."
      }
    ]
  },
  solutions: {
    title: "Nos Solutions de Livret",
    categories: [
      {
        title: "Livret A",
        features: [
          "Taux réglementé garanti",
          "Plafond de 22 950€",
          "Intérêts exonérés d'impôts",
          "Ouverture possible dès 16 ans"
        ]
      },
      {
        title: "LDDS (Livret de Développement Durable et Solidaire)",
        features: [
          "Taux identique au Livret A",
          "Plafond de 12 000€",
          "Financement de projets durables",
          "Intérêts exonérés d'impôts"
        ]
      }
    ]
  },
  avantages: {
    title: "Les Avantages du Livret",
    categories: [
      {
        title: "Avantages financiers",
        points: [
          "Capital garanti",
          "Taux réglementé stable",
          "Pas de frais de gestion",
          "Disponibilité immédiate"
        ]
      },
      {
        title: "Avantages fiscaux",
        points: [
          "Intérêts exonérés d'impôts",
          "Pas de prélèvements sociaux",
          "Fiscalité transparente",
          "Pas de déclaration fiscale"
        ]
      },
      {
        title: "Avantages pratiques",
        points: [
          "Ouverture simple",
          "Gestion en ligne",
          "Retraits immédiats",
          "Versements libres"
        ]
      }
    ]
  },
  accompagnement: {
    title: "Notre Accompagnement Personnalisé",
    steps: [
      {
        icon: "✓",
        title: "Diagnostic",
        description: "Analyse de votre situation d'épargne et de vos objectifs"
      },
      {
        icon: "📊",
        title: "Stratégie",
        description: "Élaboration d'une stratégie d'épargne adaptée à vos besoins"
      },
      {
        icon: "⚙️",
        title: "Mise en place",
        description: "Accompagnement dans l'ouverture et la configuration"
      },
      {
        icon: "📈",
        title: "Suivi",
        description: "Suivi régulier et conseils d'optimisation"
      }
    ]
  },
  faq: {
    title: "Questions Fréquentes",
    questions: [
      {
        question: "Quels sont les plafonds des livrets ?",
        answer: "Le Livret A a un plafond de 22 950€ et le LDDS de 12 000€. Ces montants peuvent être cumulés pour optimiser votre épargne."
      },
      {
        question: "Puis-je retirer mon argent à tout moment ?",
        answer: "Oui, les livrets offrent une disponibilité immédiate. Vous pouvez retirer vos fonds à tout moment sans pénalité."
      },
      {
        question: "Comment sont calculés les intérêts ?",
        answer: "Les intérêts sont calculés par quinzaine et capitalisés annuellement. Le taux est fixé par l'État et garanti."
      },
      {
        question: "Qui peut ouvrir un livret ?",
        answer: "Toute personne résidant fiscalement en France peut ouvrir un livret. Le Livret A est accessible dès 16 ans."
      }
    ]
  },
  cta: {
    title: "Prêt à sécuriser votre épargne ?",
    paragraph: "Nos experts Azalee Wealth vous accompagnent pour optimiser votre épargne avec les livrets adaptés à vos objectifs.",
    primaryButton: "Demander une étude gratuite",
    secondaryButton: "Prendre rendez-vous"
  }
};

export default function LivretCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/placements/livret&type=cms');
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.content) {
            const parsed = result.content.content;
            setContent({ ...defaultContent, ...parsed });
            return;
          }
        }
        
        // Si pas de contenu en base, utiliser le contenu par défaut
        console.log('Aucun contenu trouvé en base de données, utilisation du contenu par défaut');
      } catch (error) {
        console.error('Erreur lors du chargement depuis la base de données:', error);
        // En cas d'erreur, utiliser le contenu par défaut
      }
    };

    loadContentFromDatabase();
  }, []);

  const handleChange = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section, field, index, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].map((item, i) => i === index ? value : item)
      }
    }));
  };

  const handleNestedChange = (section, subsection, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: {
          ...prev[section][subsection],
          [field]: value
        }
      }
    }));
  };

  const handleNestedArrayChange = (section, subsection, field, index, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: {
          ...prev[section][subsection],
          [field]: prev[section][subsection][field].map((item, i) => i === index ? value : item)
        }
      }
    }));
  };

    const handleSave = async () => {
    try {
      const response = await fetch('/api/pages/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagePath: '/placements/livret',
          pageType: 'cms',
          content: content,
          metadata: {
            lastModified: new Date().toISOString(),
            modifiedBy: 'admin',
            pageType: 'cms'
          }
        })
      });

      if (response.ok) {
        console.log('Sauvegardé en base de données');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la sauvegarde');
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde: ' + error.message);
    }
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('contentUpdated'));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#112033]">Page Livret</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page Livret</p>
          </div>
          <button 
            onClick={handleSave} 
            className="bg-[#4EBBBD] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Sauvegarder
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Hero
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre principal</label>
            <input 
              value={content.hero.title} 
              onChange={(e) => handleChange('hero', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
            <textarea 
              value={content.hero.description} 
              onChange={(e) => handleChange('hero', 'description', e.target.value)} 
              rows={4} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Texte du bouton CTA</label>
            <input 
              value={content.hero.ctaText} 
              onChange={(e) => handleChange('hero', 'ctaText', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Right Card Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Carte de droite
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input 
              value={content.rightCard.title} 
              onChange={(e) => handleChange('rightCard', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Services</label>
            {content.rightCard.services.map((service, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input 
                  value={service} 
                  onChange={(e) => handleArrayChange('rightCard', 'services', index, e.target.value)} 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
                <button 
                  onClick={() => {
                    const newServices = content.rightCard.services.filter((_, i) => i !== index);
                    handleChange('rightCard', 'services', newServices);
                  }}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Supprimer
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newServices = [...content.rightCard.services, ''];
                handleChange('rightCard', 'services', newServices);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un service
            </button>
          </div>
        </div>
      </div>

      {/* L'essentiel Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section L'essentiel
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input 
              value={content.essentiel.title} 
              onChange={(e) => handleChange('essentiel', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Blocs</label>
            {content.essentiel.blocks.map((block, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={block.title} 
                      onChange={(e) => handleNestedArrayChange('essentiel', 'blocks', index, { ...block, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <input 
                      value={block.description} 
                      onChange={(e) => handleNestedArrayChange('essentiel', 'blocks', index, { ...block, description: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newBlocks = content.essentiel.blocks.filter((_, i) => i !== index);
                    handleChange('essentiel', 'blocks', newBlocks);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer ce bloc
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newBlocks = [...content.essentiel.blocks, { title: '', description: '' }];
                handleChange('essentiel', 'blocks', newBlocks);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un bloc
            </button>
          </div>
        </div>
      </div>

      {/* Pourquoi Choisir Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Pourquoi Choisir
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input 
              value={content.pourquoiChoisir.title} 
              onChange={(e) => handleChange('pourquoiChoisir', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Raisons</label>
            {content.pourquoiChoisir.reasons.map((reason, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Numéro</label>
                    <input 
                      value={reason.number} 
                      onChange={(e) => handleNestedArrayChange('pourquoiChoisir', 'reasons', index, { ...reason, number: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={reason.title} 
                      onChange={(e) => handleNestedArrayChange('pourquoiChoisir', 'reasons', index, { ...reason, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <input 
                      value={reason.description} 
                      onChange={(e) => handleNestedArrayChange('pourquoiChoisir', 'reasons', index, { ...reason, description: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newReasons = content.pourquoiChoisir.reasons.filter((_, i) => i !== index);
                    handleChange('pourquoiChoisir', 'reasons', newReasons);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette raison
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newReasons = [...content.pourquoiChoisir.reasons, { number: '', title: '', description: '' }];
                handleChange('pourquoiChoisir', 'reasons', newReasons);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une raison
            </button>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Solutions
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input 
              value={content.solutions.title} 
              onChange={(e) => handleChange('solutions', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Catégories</label>
            {content.solutions.categories.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={category.title} 
                      onChange={(e) => handleNestedArrayChange('solutions', 'categories', index, { ...category, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Fonctionnalités</label>
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-2 mb-2">
                        <input 
                          value={feature} 
                          onChange={(e) => {
                            const newFeatures = category.features.map((f, i) => i === featureIndex ? e.target.value : f);
                            handleNestedArrayChange('solutions', 'categories', index, { ...category, features: newFeatures });
                          }} 
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                        <button 
                          onClick={() => {
                            const newFeatures = category.features.filter((_, i) => i !== featureIndex);
                            handleNestedArrayChange('solutions', 'categories', index, { ...category, features: newFeatures });
                          }}
                          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Supprimer
                        </button>
                      </div>
                    ))}
                    <button 
                      onClick={() => {
                        const newFeatures = [...category.features, ''];
                        handleNestedArrayChange('solutions', 'categories', index, { ...category, features: newFeatures });
                      }}
                      className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
                    >
                      Ajouter une fonctionnalité
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newCategories = content.solutions.categories.filter((_, i) => i !== index);
                    handleChange('solutions', 'categories', newCategories);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette catégorie
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newCategories = [...content.solutions.categories, { title: '', features: [] }];
                handleChange('solutions', 'categories', newCategories);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une catégorie
            </button>
          </div>
        </div>
      </div>

      {/* Avantages Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Avantages
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input 
              value={content.avantages.title} 
              onChange={(e) => handleChange('avantages', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Catégories</label>
            {content.avantages.categories.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={category.title} 
                      onChange={(e) => handleNestedArrayChange('avantages', 'categories', index, { ...category, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Points</label>
                    {category.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex gap-2 mb-2">
                        <input 
                          value={point} 
                          onChange={(e) => {
                            const newPoints = category.points.map((p, i) => i === pointIndex ? e.target.value : p);
                            handleNestedArrayChange('avantages', 'categories', index, { ...category, points: newPoints });
                          }} 
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                        <button 
                          onClick={() => {
                            const newPoints = category.points.filter((_, i) => i !== pointIndex);
                            handleNestedArrayChange('avantages', 'categories', index, { ...category, points: newPoints });
                          }}
                          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Supprimer
                        </button>
                      </div>
                    ))}
                    <button 
                      onClick={() => {
                        const newPoints = [...category.points, ''];
                        handleNestedArrayChange('avantages', 'categories', index, { ...category, points: newPoints });
                      }}
                      className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
                    >
                      Ajouter un point
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newCategories = content.avantages.categories.filter((_, i) => i !== index);
                    handleChange('avantages', 'categories', newCategories);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette catégorie
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newCategories = [...content.avantages.categories, { title: '', points: [] }];
                handleChange('avantages', 'categories', newCategories);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une catégorie
            </button>
          </div>
        </div>
      </div>

      {/* Accompagnement Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Accompagnement
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input 
              value={content.accompagnement.title} 
              onChange={(e) => handleChange('accompagnement', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Étapes</label>
            {content.accompagnement.steps.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Icône</label>
                    <input 
                      value={step.icon} 
                      onChange={(e) => handleNestedArrayChange('accompagnement', 'steps', index, { ...step, icon: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={step.title} 
                      onChange={(e) => handleNestedArrayChange('accompagnement', 'steps', index, { ...step, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <input 
                      value={step.description} 
                      onChange={(e) => handleNestedArrayChange('accompagnement', 'steps', index, { ...step, description: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newSteps = content.accompagnement.steps.filter((_, i) => i !== index);
                    handleChange('accompagnement', 'steps', newSteps);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette étape
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newSteps = [...content.accompagnement.steps, { icon: '', title: '', description: '' }];
                handleChange('accompagnement', 'steps', newSteps);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une étape
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section FAQ
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input 
              value={content.faq.title} 
              onChange={(e) => handleChange('faq', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Questions</label>
            {content.faq.questions.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Question</label>
                    <input 
                      value={faq.question} 
                      onChange={(e) => handleNestedArrayChange('faq', 'questions', index, { ...faq, question: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Réponse</label>
                    <textarea 
                      value={faq.answer} 
                      onChange={(e) => handleNestedArrayChange('faq', 'questions', index, { ...faq, answer: e.target.value })} 
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newQuestions = content.faq.questions.filter((_, i) => i !== index);
                    handleChange('faq', 'questions', newQuestions);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette question
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newQuestions = [...content.faq.questions, { question: '', answer: '' }];
                handleChange('faq', 'questions', newQuestions);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une question
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section CTA
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input 
              value={content.cta.title} 
              onChange={(e) => handleChange('cta', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Paragraphe</label>
            <textarea 
              value={content.cta.paragraph} 
              onChange={(e) => handleChange('cta', 'paragraph', e.target.value)} 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton principal</label>
              <input 
                value={content.cta.primaryButton} 
                onChange={(e) => handleChange('cta', 'primaryButton', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton secondaire</label>
              <input 
                value={content.cta.secondaryButton} 
                onChange={(e) => handleChange('cta', 'secondaryButton', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-[#4EBBBD] text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">Contenu sauvegardé avec succès !</span>
        </div>
      )}
    </div>
  );
}
