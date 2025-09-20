"use client";
import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Simulation de retraite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    primaryButton: "Lancer ma simulation",
    secondaryButton: "Voir les exemples"
  },
  quickResults: {
    cards: [
      {
        title: "Lorem ipsum",
        value: "€2,950",
        subtitle: "Dolor sit amet"
      },
      {
        title: "Consectetur",
        value: "78.5%",
        subtitle: "Adipiscing elit"
      },
      {
        title: "Sed eiusmod",
        value: "65",
        subtitle: "Tempor incididunt"
      },
      {
        title: "Ut labore",
        value: "€850K",
        subtitle: "Dolore magna"
      }
    ]
  },
  chart: {
    title: "Répartition de la pension de retraite",
    data: [
      { label: "Pension de base estimée", value: "€1,450" },
      { label: "Pension complémentaire", value: "€850" },
      { label: "Épargne retraite", value: "€650" },
      { label: "Total mensuel", value: "€2,950" },
      { label: "Taux de remplacement", value: "78.5%" }
    ]
  },
  advancedSimulation: {
    title: "Lorem ipsum dolor sit amet",
    form: {
      title: "Lorem ipsum dolor sit",
      fields: [
        { label: "Lorem ipsum", placeholder: "35" },
        { label: "Dolor sit amet", placeholder: "€45,000" },
        { label: "Consectetur elit", placeholder: "Lorem ipsum" },
        { label: "Sed eiusmod", placeholder: "42" },
        { label: "Ut labore et dolore", placeholder: "60 ans" }
      ],
      button: "Lorem ipsum dolor sit"
    },
    results: {
      title: "Lorem ipsum dolor sit amet",
      cards: [
        {
          title: "Lorem ipsum dolor",
          value: "€1,450",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
        },
        {
          title: "Consectetur adipiscing",
          value: "€850",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
        },
        {
          title: "Sed do eiusmod",
          value: "€650",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
        }
      ],
      total: {
        title: "Lorem ipsum dolor sit amet",
        value: "€2,950",
        subtitle: "Consectetur adipiscing elit"
      }
    }
  },
  scenarios: {
    title: "Lorem ipsum dolor sit amet",
    cards: [
      {
        icon: "📈",
        title: "Lorem ipsum",
        value: "€3,200",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        features: [
          "Lorem ipsum dolor sit",
          "Consectetur adipiscing",
          "Sed do eiusmod tempor"
        ]
      },
      {
        icon: "⚖️",
        title: "Dolor sit amet",
        value: "€2,950",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        features: [
          "Lorem ipsum dolor sit",
          "Consectetur adipiscing",
          "Sed do eiusmod tempor"
        ]
      },
      {
        icon: "📉",
        title: "Consectetur elit",
        value: "€2,400",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        features: [
          "Lorem ipsum dolor sit",
          "Consectetur adipiscing",
          "Sed do eiusmod tempor"
        ]
      }
    ]
  },
  tips: {
    title: "Lorem ipsum dolor sit amet",
    items: [
      {
        icon: "💡",
        title: "Lorem ipsum dolor sit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon: "📊",
        title: "Consectetur adipiscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon: "🎯",
        title: "Sed do eiusmod tempor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ],
    comparison: {
      title: "Lorem ipsum dolor sit",
      items: [
        { label: "Lorem ipsum", value: "85%" },
        { label: "Dolor sit amet", value: "72%" },
        { label: "Consectetur elit", value: "68%" }
      ]
    }
  },
  cta: {
    title: "Lorem ipsum dolor sit amet ?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "Commencer ma simulation"
  }
};

export default function RetraiteSimulationCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/retraite/simulation&type=cms');
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
          pagePath: '/retraite/simulation',
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
            <h1 className="text-2xl font-bold text-[#112033]">Page Simulation Retraite</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page Simulation Retraite</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton principal</label>
              <input 
                value={content.hero.primaryButton} 
                onChange={(e) => handleChange('hero', 'primaryButton', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton secondaire</label>
              <input 
                value={content.hero.secondaryButton} 
                onChange={(e) => handleChange('hero', 'secondaryButton', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Results Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Résultats Rapides
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Cartes de résultats</label>
            {content.quickResults.cards.map((card, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={card.title} 
                      onChange={(e) => handleNestedArrayChange('quickResults', 'cards', index, { ...card, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Valeur</label>
                    <input 
                      value={card.value} 
                      onChange={(e) => handleNestedArrayChange('quickResults', 'cards', index, { ...card, value: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Sous-titre</label>
                    <input 
                      value={card.subtitle} 
                      onChange={(e) => handleNestedArrayChange('quickResults', 'cards', index, { ...card, subtitle: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newCards = content.quickResults.cards.filter((_, i) => i !== index);
                    handleChange('quickResults', 'cards', newCards);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette carte
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newCards = [...content.quickResults.cards, { title: '', value: '', subtitle: '' }];
                handleChange('quickResults', 'cards', newCards);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une carte
            </button>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Graphique
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre du graphique</label>
            <input 
              value={content.chart.title} 
              onChange={(e) => handleChange('chart', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Données du graphique</label>
            {content.chart.data.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Label</label>
                    <input 
                      value={item.label} 
                      onChange={(e) => handleNestedArrayChange('chart', 'data', index, { ...item, label: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Valeur</label>
                    <input 
                      value={item.value} 
                      onChange={(e) => handleNestedArrayChange('chart', 'data', index, { ...item, value: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newData = content.chart.data.filter((_, i) => i !== index);
                    handleChange('chart', 'data', newData);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cet élément
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newData = [...content.chart.data, { label: '', value: '' }];
                handleChange('chart', 'data', newData);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un élément
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Simulation Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Simulation Avancée
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.advancedSimulation.title} 
              onChange={(e) => handleChange('advancedSimulation', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          {/* Form Section */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-md font-semibold text-[#112033] mb-3">Formulaire</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Titre du formulaire</label>
                <input 
                  value={content.advancedSimulation.form.title} 
                  onChange={(e) => handleNestedChange('advancedSimulation', 'form', 'title', e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Champs du formulaire</label>
                {content.advancedSimulation.form.fields.map((field, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input 
                      value={field.label} 
                      onChange={(e) => {
                        const newFields = [...content.advancedSimulation.form.fields];
                        newFields[index] = { ...field, label: e.target.value };
                        handleNestedChange('advancedSimulation', 'form', 'fields', newFields);
                      }} 
                      placeholder="Label"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                    <input 
                      value={field.placeholder} 
                      onChange={(e) => {
                        const newFields = [...content.advancedSimulation.form.fields];
                        newFields[index] = { ...field, placeholder: e.target.value };
                        handleNestedChange('advancedSimulation', 'form', 'fields', newFields);
                      }} 
                      placeholder="Placeholder"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                    <button 
                      onClick={() => {
                        const newFields = content.advancedSimulation.form.fields.filter((_, i) => i !== index);
                        handleNestedChange('advancedSimulation', 'form', 'fields', newFields);
                      }}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Supprimer
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => {
                    const newFields = [...content.advancedSimulation.form.fields, { label: '', placeholder: '' }];
                    handleNestedChange('advancedSimulation', 'form', 'fields', newFields);
                  }}
                  className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
                >
                  Ajouter un champ
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Bouton du formulaire</label>
                <input 
                  value={content.advancedSimulation.form.button} 
                  onChange={(e) => handleNestedChange('advancedSimulation', 'form', 'button', e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenarios Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Scénarios
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.scenarios.title} 
              onChange={(e) => handleChange('scenarios', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Cartes de scénarios</label>
            {content.scenarios.cards.map((card, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Icône</label>
                    <input 
                      value={card.icon} 
                      onChange={(e) => handleNestedArrayChange('scenarios', 'cards', index, { ...card, icon: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={card.title} 
                      onChange={(e) => handleNestedArrayChange('scenarios', 'cards', index, { ...card, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Valeur</label>
                    <input 
                      value={card.value} 
                      onChange={(e) => handleNestedArrayChange('scenarios', 'cards', index, { ...card, value: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <textarea 
                      value={card.description} 
                      onChange={(e) => handleNestedArrayChange('scenarios', 'cards', index, { ...card, description: e.target.value })} 
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-[#686868] mb-2">Fonctionnalités</label>
                  {card.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-2 mb-2">
                      <input 
                        value={feature} 
                        onChange={(e) => {
                          const newFeatures = [...card.features];
                          newFeatures[featureIndex] = e.target.value;
                          handleNestedArrayChange('scenarios', 'cards', index, { ...card, features: newFeatures });
                        }} 
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                      <button 
                        onClick={() => {
                          const newFeatures = card.features.filter((_, i) => i !== featureIndex);
                          handleNestedArrayChange('scenarios', 'cards', index, { ...card, features: newFeatures });
                        }}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Supprimer
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={() => {
                      const newFeatures = [...card.features, ''];
                      handleNestedArrayChange('scenarios', 'cards', index, { ...card, features: newFeatures });
                    }}
                    className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA] text-sm"
                  >
                    Ajouter une fonctionnalité
                  </button>
                </div>
                <button 
                  onClick={() => {
                    const newCards = content.scenarios.cards.filter((_, i) => i !== index);
                    handleChange('scenarios', 'cards', newCards);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette carte
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newCards = [...content.scenarios.cards, { icon: '', title: '', value: '', description: '', features: [] }];
                handleChange('scenarios', 'cards', newCards);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une carte
            </button>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Conseils
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.tips.title} 
              onChange={(e) => handleChange('tips', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Éléments de conseils</label>
            {content.tips.items.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Icône</label>
                    <input 
                      value={item.icon} 
                      onChange={(e) => handleNestedArrayChange('tips', 'items', index, { ...item, icon: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={item.title} 
                      onChange={(e) => handleNestedArrayChange('tips', 'items', index, { ...item, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <textarea 
                      value={item.description} 
                      onChange={(e) => handleNestedArrayChange('tips', 'items', index, { ...item, description: e.target.value })} 
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newItems = content.tips.items.filter((_, i) => i !== index);
                    handleChange('tips', 'items', newItems);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cet élément
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newItems = [...content.tips.items, { icon: '', title: '', description: '' }];
                handleChange('tips', 'items', newItems);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un élément
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
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton</label>
            <input 
              value={content.cta.button} 
              onChange={(e) => handleChange('cta', 'button', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
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
