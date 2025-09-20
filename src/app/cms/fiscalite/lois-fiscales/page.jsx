"use client";
import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Lois fiscales",
    description: "Découvrez les principales lois fiscales qui peuvent vous permettre d'optimiser votre situation fiscale. Chaque dispositif a ses spécificités et conditions d'application."
  },
  categories: [
    { id: "immobilier", label: "Immobilier", icon: "🏠" },
    { id: "entreprise", label: "Entreprise", icon: "💼" },
    { id: "patrimoine", label: "Patrimoine", icon: "💰" },
    { id: "retraite", label: "Retraite", icon: "👴" }
  ],
  loisImmobilieres: [
    {
      id: "pinel",
      name: "Loi Pinel",
      shortName: "Pinel",
      description: "Réduction d'impôt pour investissement immobilier neuf",
      avantages: [
        "Réduction d'impôt jusqu'à 21%",
        "Investissement plafonné à 300 000€",
        "Engagement de location 6, 9 ou 12 ans",
        "TVA réduite à 5,5% ou 10%"
      ],
      conditions: [
        "Bien neuf ou en VEFA",
        "Location à usage d'habitation principale",
        "Respect des plafonds de loyer",
        "Respect des plafonds de ressources"
      ],
      taux: [
        { annees: "6 ans", reduction: "12%" },
        { annees: "9 ans", reduction: "18%" },
        { annees: "12 ans", reduction: "21%" }
      ],
      plafonds: {
        loyer: "Selon zone et surface",
        ressources: "Selon composition du foyer",
        investissement: "300 000€ max"
      }
    },
    {
      id: "girardin",
      name: "Loi Girardin",
      shortName: "Girardin",
      description: "Défiscalisation outre-mer pour investissement immobilier",
      avantages: [
        "Réduction d'impôt jusqu'à 40%",
        "Investissement plafonné à 300 000€",
        "Engagement de location 5 ans minimum",
        "Possibilité de location saisonnière"
      ],
      conditions: [
        "Bien situé en outre-mer",
        "Location à usage d'habitation",
        "Respect des plafonds de loyer",
        "Investissement en direct ou via SCPI"
      ],
      taux: [
        { annees: "5 ans", reduction: "40%" },
        { annees: "6 ans", reduction: "40%" },
        { annees: "7 ans", reduction: "40%" }
      ],
      plafonds: {
        loyer: "Selon zone et surface",
        ressources: "Non applicable",
        investissement: "300 000€ max"
      }
    }
  ],
  loisEntreprise: [
    {
      id: "madelin",
      name: "Loi Madelin",
      shortName: "Madelin",
      description: "Déduction des cotisations de retraite et prévoyance",
      avantages: [
        "Déduction des cotisations retraite",
        "Déduction des cotisations prévoyance",
        "Déduction des cotisations santé",
        "Plafonds annuels variables"
      ],
      conditions: [
        "Profession libérale ou artisan",
        "Cotisations versées à des organismes agréés",
        "Respect des plafonds annuels",
        "Justificatifs des versements"
      ]
    }
  ],
  loisPatrimoine: [
    {
      id: "pacte",
      name: "Loi PACTE",
      shortName: "PACTE",
      description: "Plan d'action pour la croissance et la transformation des entreprises",
      avantages: [
        "Épargne retraite collective",
        "Plan d'épargne entreprise",
        "Actions gratuites",
        "Incitations à l'investissement"
      ]
    }
  ],
  loisRetraite: [
    {
      id: "per",
      name: "Plan Épargne Retraite",
      shortName: "PER",
      description: "Épargne retraite avec avantages fiscaux",
      avantages: [
        "Déduction des versements",
        "Report d'imposition des plus-values",
        "Sortie en capital ou rente",
        "Transmission optimisée"
      ]
    }
  ],
  faq: [
    {
      question: "Puis-je cumuler plusieurs dispositifs ?",
      answer: "Oui, dans certains cas, vous pouvez cumuler plusieurs dispositifs fiscaux. Par exemple, la loi Pinel peut être combinée avec le prêt à taux zéro (PTZ) ou d'autres aides régionales."
    },
    {
      question: "Quand dois-je m'engager ?",
      answer: "L'engagement de location doit généralement être pris dès l'acquisition du bien. La durée varie selon le dispositif : 6, 9 ou 12 ans pour Pinel, 9 ans pour Malraux, etc."
    },
    {
      question: "Quels sont les risques ?",
      answer: "Les principaux risques sont la non-respect des conditions d'engagement, la baisse de la valeur du bien, et les évolutions législatives qui peuvent modifier les avantages fiscaux."
    },
    {
      question: "Quels documents fournir ?",
      answer: "Vous devrez fournir les justificatifs d'acquisition, les contrats de location, les attestations de loyer, et respecter les déclarations fiscales annuelles."
    }
  ],
  cta: {
    title: "Besoin d'optimiser votre fiscalité ?",
    description: "Nos experts analysent votre situation et vous proposent les dispositifs les plus adaptés pour réduire vos impôts en toute légalité.",
    primaryButton: "🎯 Audit fiscal gratuit",
    secondaryButton: "📚 Télécharger le guide"
  }
};

export default function LoisFiscalesCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/fiscalite/lois-fiscales&type=cms');
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
          pagePath: '/fiscalite/lois-fiscales',
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
            <h1 className="text-2xl font-bold text-[#112033]">Page Lois Fiscales</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page Lois Fiscales</p>
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
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Catégories
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Catégories de lois</label>
            {content.categories.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">ID</label>
                    <input 
                      value={category.id} 
                      onChange={(e) => handleNestedArrayChange('categories', 'categories', index, { ...category, id: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Label</label>
                    <input 
                      value={category.label} 
                      onChange={(e) => handleNestedArrayChange('categories', 'categories', index, { ...category, label: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Icône</label>
                    <input 
                      value={category.icon} 
                      onChange={(e) => handleNestedArrayChange('categories', 'categories', index, { ...category, icon: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newCategories = content.categories.filter((_, i) => i !== index);
                    handleChange('categories', 'categories', newCategories);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette catégorie
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newCategories = [...content.categories, { id: "", label: "", icon: "" }];
                handleChange('categories', 'categories', newCategories);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une catégorie
            </button>
          </div>
        </div>
      </div>

      {/* Lois Immobilières Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Lois Immobilières
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Lois immobilières</label>
            {content.loisImmobilieres.map((loi, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">ID</label>
                    <input 
                      value={loi.id} 
                      onChange={(e) => handleNestedArrayChange('loisImmobilieres', 'loisImmobilieres', index, { ...loi, id: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Nom</label>
                    <input 
                      value={loi.name} 
                      onChange={(e) => handleNestedArrayChange('loisImmobilieres', 'loisImmobilieres', index, { ...loi, name: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Nom court</label>
                    <input 
                      value={loi.shortName} 
                      onChange={(e) => handleNestedArrayChange('loisImmobilieres', 'loisImmobilieres', index, { ...loi, shortName: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <textarea 
                      value={loi.description} 
                      onChange={(e) => handleNestedArrayChange('loisImmobilieres', 'loisImmobilieres', index, { ...loi, description: e.target.value })} 
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                
                {/* Avantages */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-[#686868] mb-2">Avantages</label>
                  {loi.avantages.map((avantage, avIndex) => (
                    <div key={avIndex} className="flex gap-2 mb-2">
                      <input 
                        value={avantage} 
                        onChange={(e) => {
                          const newAvantages = [...loi.avantages];
                          newAvantages[avIndex] = e.target.value;
                          handleNestedArrayChange('loisImmobilieres', 'loisImmobilieres', index, { ...loi, avantages: newAvantages });
                        }} 
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                      <button 
                        onClick={() => {
                          const newAvantages = loi.avantages.filter((_, i) => i !== avIndex);
                          handleNestedArrayChange('loisImmobilieres', 'loisImmobilieres', index, { ...loi, avantages: newAvantages });
                        }}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Supprimer
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={() => {
                      const newAvantages = [...loi.avantages, ""];
                      handleNestedArrayChange('loisImmobilieres', 'loisImmobilieres', index, { ...loi, avantages: newAvantages });
                    }}
                    className="px-3 py-1 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA] text-sm"
                  >
                    Ajouter un avantage
                  </button>
                </div>

                {/* Conditions */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-[#686868] mb-2">Conditions</label>
                  {loi.conditions.map((condition, condIndex) => (
                    <div key={condIndex} className="flex gap-2 mb-2">
                      <input 
                        value={condition} 
                        onChange={(e) => {
                          const newConditions = [...loi.conditions];
                          newConditions[condIndex] = e.target.value;
                          handleNestedArrayChange('loisImmobilieres', 'loisImmobilieres', index, { ...loi, conditions: newConditions });
                        }} 
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                      <button 
                        onClick={() => {
                          const newConditions = loi.conditions.filter((_, i) => i !== condIndex);
                          handleNestedArrayChange('loisImmobilieres', 'loisImmobilieres', index, { ...loi, conditions: newConditions });
                        }}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Supprimer
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={() => {
                      const newConditions = [...loi.conditions, ""];
                      handleNestedArrayChange('loisImmobilieres', 'loisImmobilieres', index, { ...loi, conditions: newConditions });
                    }}
                    className="px-3 py-1 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA] text-sm"
                  >
                    Ajouter une condition
                  </button>
                </div>

                <button 
                  onClick={() => {
                    const newLois = content.loisImmobilieres.filter((_, i) => i !== index);
                    handleChange('loisImmobilieres', 'loisImmobilieres', newLois);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette loi
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newLois = [...content.loisImmobilieres, {
                  id: "",
                  name: "",
                  shortName: "",
                  description: "",
                  avantages: [""],
                  conditions: [""]
                }];
                handleChange('loisImmobilieres', 'loisImmobilieres', newLois);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une loi immobilière
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Questions fréquentes</label>
            {content.faq.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Question</label>
                    <input 
                      value={item.question} 
                      onChange={(e) => handleNestedArrayChange('faq', 'faq', index, { ...item, question: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Réponse</label>
                    <textarea 
                      value={item.answer} 
                      onChange={(e) => handleNestedArrayChange('faq', 'faq', index, { ...item, answer: e.target.value })} 
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newFaq = content.faq.filter((_, i) => i !== index);
                    handleChange('faq', 'faq', newFaq);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette FAQ
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newFaq = [...content.faq, { question: "", answer: "" }];
                handleChange('faq', 'faq', newFaq);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une FAQ
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
            <textarea 
              value={content.cta.description} 
              onChange={(e) => handleChange('cta', 'description', e.target.value)} 
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
