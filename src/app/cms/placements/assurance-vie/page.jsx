"use client";
import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Assurance Vie – Optimisez votre épargne et préparez votre avenir avec Azalee Wealth",
    description: "Votre partenaire de confiance en assurance vie depuis plus de 30 ans. Nous vous accompagnons pour optimiser votre épargne, bénéficier d'avantages fiscaux et préparer votre transmission patrimoniale avec des solutions adaptées à vos objectifs.",
    ctaText: "Demander une étude patrimoniale gratuite"
  },
  rightCard: {
    title: "Nos experts à votre service",
    services: [
      "Analyse de votre situation fiscale et patrimoniale",
      "Optimisation fiscale et transmission patrimoniale",
      "Conseil en placement et gestion de portefeuille",
      "Accompagnement personnalisé et suivi régulier"
    ]
  },
  essentiel: {
    title: "L'essentiel de l'Assurance Vie",
    blocks: [
      {
        title: "Fiscalité avantageuse",
        description: "Bénéficiez d'une fiscalité attractive après 8 ans de détention avec des prélèvements sociaux réduits."
      },
      {
        title: "Transmission optimisée",
        description: "Préparez votre transmission avec des abattements fiscaux avantageux pour vos bénéficiaires."
      },
      {
        title: "Flexibilité totale",
        description: "Versements libres, rachats partiels possibles et gestion adaptée à vos besoins."
      }
    ]
  },
  pourquoiChoisir: {
    title: "Pourquoi choisir l'Assurance Vie ?",
    reasons: [
      {
        number: "1",
        title: "Épargne sécurisée",
        description: "Placement sécurisé avec un capital garanti et des rendements attractifs."
      },
      {
        number: "2",
        title: "Avantages fiscaux",
        description: "Fiscalité avantageuse après 8 ans et transmission optimisée."
      },
      {
        number: "3",
        title: "Flexibilité",
        description: "Versements libres et rachats partiels selon vos besoins."
      },
      {
        number: "4",
        title: "Transmission",
        description: "Préparation optimale de votre transmission patrimoniale."
      }
    ]
  },
  solutions: {
    title: "Nos Solutions d'Assurance Vie",
    categories: [
      {
        title: "Assurance Vie Classique",
        features: [
          "Fonds en euros garantis",
          "Unités de compte pour plus de performance",
          "Gestion pilotée ou libre",
          "Versements programmés ou ponctuels"
        ]
      },
      {
        title: "Assurance Vie Multi-Supports",
        features: [
          "Diversification maximale",
          "Accès aux marchés financiers",
          "Gestion professionnelle",
          "Potentiel de performance élevé"
        ]
      }
    ]
  },
  avantagesFiscaux: {
    title: "Les Avantages Fiscaux de l'Assurance Vie",
    periods: [
      {
        title: "Avant 8 ans",
        points: [
          "Prélèvements sociaux : 17,2%",
          "Impôt sur le revenu : barème progressif",
          "Abattement annuel : 4 600€ (célibataire)"
        ]
      },
      {
        title: "Après 8 ans",
        points: [
          "Prélèvements sociaux : 17,2%",
          "Impôt sur le revenu : 7,5%",
          "Abattement annuel : 9 200€ (célibataire)"
        ]
      },
      {
        title: "Transmission",
        points: [
          "Abattement : 152 500€ par bénéficiaire",
          "Taux réduit : 20% à 31,25%",
          "Hors succession : avantage majeur"
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
        description: "Analyse complète de votre situation financière et fiscale"
      },
      {
        icon: "📊",
        title: "Stratégie",
        description: "Élaboration d'une stratégie d'épargne adaptée à vos objectifs"
      },
      {
        icon: "⚙️",
        title: "Mise en place",
        description: "Accompagnement dans la souscription et la configuration"
      },
      {
        icon: "📈",
        title: "Suivi",
        description: "Suivi régulier et ajustements selon l'évolution de vos besoins"
      }
    ]
  },
  faq: {
    title: "Questions Fréquentes",
    questions: [
      {
        question: "Quels sont les montants minimum pour souscrire une assurance vie ?",
        answer: "Les montants minimum varient selon les contrats. Chez Azalee Wealth, nous proposons des solutions adaptées à tous les budgets, à partir de 50€ par versement."
      },
      {
        question: "Puis-je retirer de l'argent avant 8 ans ?",
        answer: "Oui, les rachats sont possibles à tout moment. Cependant, la fiscalité sera moins avantageuse avant 8 ans de détention."
      },
      {
        question: "Comment fonctionne la transmission en assurance vie ?",
        answer: "L'assurance vie permet de transmettre un capital hors succession avec des abattements fiscaux avantageux (152 500€ par bénéficiaire)."
      },
      {
        question: "Quelle est la différence entre fonds en euros et unités de compte ?",
        answer: "Les fonds en euros garantissent le capital et offrent un rendement sécurisé, tandis que les unités de compte offrent un potentiel de performance plus élevé mais avec un risque de perte."
      }
    ]
  },
  cta: {
    title: "Prêt à optimiser votre épargne ?",
    paragraph: "Nos experts Azalee Wealth vous accompagnent pour construire une stratégie d'assurance vie adaptée à vos objectifs et à votre situation.",
    primaryButton: "Demander une étude gratuite",
    secondaryButton: "Prendre rendez-vous"
  }
};

export default function AssuranceVieCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/placements/assurance-vie&type=cms');
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
          pagePath: '/placements/assurance-vie',
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
            <h1 className="text-2xl font-bold text-[#112033]">Page Assurance Vie</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page Assurance Vie</p>
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

      {/* Avantages Fiscaux Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Avantages Fiscaux
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input 
              value={content.avantagesFiscaux.title} 
              onChange={(e) => handleChange('avantagesFiscaux', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Périodes</label>
            {content.avantagesFiscaux.periods.map((period, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={period.title} 
                      onChange={(e) => handleNestedArrayChange('avantagesFiscaux', 'periods', index, { ...period, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Points</label>
                    {period.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex gap-2 mb-2">
                        <input 
                          value={point} 
                          onChange={(e) => {
                            const newPoints = period.points.map((p, i) => i === pointIndex ? e.target.value : p);
                            handleNestedArrayChange('avantagesFiscaux', 'periods', index, { ...period, points: newPoints });
                          }} 
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                        <button 
                          onClick={() => {
                            const newPoints = period.points.filter((_, i) => i !== pointIndex);
                            handleNestedArrayChange('avantagesFiscaux', 'periods', index, { ...period, points: newPoints });
                          }}
                          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Supprimer
                        </button>
                      </div>
                    ))}
                    <button 
                      onClick={() => {
                        const newPoints = [...period.points, ''];
                        handleNestedArrayChange('avantagesFiscaux', 'periods', index, { ...period, points: newPoints });
                      }}
                      className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
                    >
                      Ajouter un point
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newPeriods = content.avantagesFiscaux.periods.filter((_, i) => i !== index);
                    handleChange('avantagesFiscaux', 'periods', newPeriods);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette période
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newPeriods = [...content.avantagesFiscaux.periods, { title: '', points: [] }];
                handleChange('avantagesFiscaux', 'periods', newPeriods);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une période
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
