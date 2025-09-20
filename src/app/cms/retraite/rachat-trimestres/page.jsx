"use client";
import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Rachat de trimestres",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    primaryButton: "Simuler mon rachat",
    secondaryButton: "En savoir plus"
  },
  calculator: {
    title: "Calculateur rapide",
    fields: [
      { label: "Nombre de trimestres", placeholder: "4" },
      { label: "Âge actuel", placeholder: "45" }
    ],
    button: "Calculer le coût",
    result: {
      title: "Coût estimé :",
      value: "€5,000"
    }
  },
  chart: {
    title: "Économies de rachat de trimestres",
    data: [
      { label: "Coût moyen par trimestre", value: "€1,250" },
      { label: "Trimestres rachetables", value: "12 max" },
      { label: "Économie moyenne", value: "€8,500" },
      { label: "Durée de versement", value: "3 ans" },
      { label: "Rendement estimé", value: "15.2%" }
    ]
  },
  benefits: {
    title: "Avantages du rachat",
    cards: [
      {
        icon: "⏰",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        features: [
          "Lorem ipsum dolor sit",
          "Consectetur adipiscing",
          "Sed do eiusmod tempor",
          "Ut labore et dolore"
        ]
      },
      {
        icon: "💰",
        title: "Dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        features: [
          "Lorem ipsum dolor sit",
          "Consectetur adipiscing",
          "Sed do eiusmod tempor",
          "Ut labore et dolore"
        ]
      },
      {
        icon: "📊",
        title: "Consectetur elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        features: [
          "Lorem ipsum dolor sit",
          "Consectetur adipiscing",
          "Sed do eiusmod tempor",
          "Ut labore et dolore"
        ]
      }
    ]
  },
  eligibility: {
    title: "Lorem ipsum dolor sit amet",
    items: [
      {
        icon: "✓",
        title: "Lorem ipsum dolor sit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon: "✓",
        title: "Consectetur adipiscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon: "✓",
        title: "Sed do eiusmod tempor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ],
    costBreakdown: {
      title: "Lorem ipsum dolor sit",
      items: [
        { label: "Lorem ipsum", value: "€1,250" },
        { label: "Dolor sit amet", value: "€2,100" },
        { label: "Consectetur elit", value: "€3,200" }
      ]
    }
  },
  process: {
    title: "Lorem ipsum dolor sit amet",
    steps: [
      {
        number: "1",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      },
      {
        number: "2",
        title: "Dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      },
      {
        number: "3",
        title: "Consectetur elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      },
      {
        number: "4",
        title: "Sed eiusmod",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      }
    ]
  },
  cta: {
    title: "Lorem ipsum dolor sit amet ?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "Simuler maintenant"
  }
};

export default function RetraiteRachatTrimestresCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/retraite/rachat-trimestres&type=cms');
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
          pagePath: '/retraite/rachat-trimestres',
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
            <h1 className="text-2xl font-bold text-[#112033]">Page Rachat de Trimestres</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page Rachat de Trimestres</p>
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

      {/* Calculator Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Calculateur
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre du calculateur</label>
            <input 
              value={content.calculator.title} 
              onChange={(e) => handleChange('calculator', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Champs du calculateur</label>
            {content.calculator.fields.map((field, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input 
                  value={field.label} 
                  onChange={(e) => {
                    const newFields = [...content.calculator.fields];
                    newFields[index] = { ...field, label: e.target.value };
                    handleChange('calculator', 'fields', newFields);
                  }} 
                  placeholder="Label"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
                <input 
                  value={field.placeholder} 
                  onChange={(e) => {
                    const newFields = [...content.calculator.fields];
                    newFields[index] = { ...field, placeholder: e.target.value };
                    handleChange('calculator', 'fields', newFields);
                  }} 
                  placeholder="Placeholder"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
                <button 
                  onClick={() => {
                    const newFields = content.calculator.fields.filter((_, i) => i !== index);
                    handleChange('calculator', 'fields', newFields);
                  }}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Supprimer
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newFields = [...content.calculator.fields, { label: '', placeholder: '' }];
                handleChange('calculator', 'fields', newFields);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un champ
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton du calculateur</label>
            <input 
              value={content.calculator.button} 
              onChange={(e) => handleChange('calculator', 'button', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre du résultat</label>
              <input 
                value={content.calculator.result.title} 
                onChange={(e) => handleChange('calculator', 'result', { ...content.calculator.result, title: e.target.value })} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Valeur du résultat</label>
              <input 
                value={content.calculator.result.value} 
                onChange={(e) => handleChange('calculator', 'result', { ...content.calculator.result, value: e.target.value })} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
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

      {/* Benefits Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Avantages
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.benefits.title} 
              onChange={(e) => handleChange('benefits', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Cartes d'avantages</label>
            {content.benefits.cards.map((card, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Icône</label>
                    <input 
                      value={card.icon} 
                      onChange={(e) => handleNestedArrayChange('benefits', 'cards', index, { ...card, icon: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={card.title} 
                      onChange={(e) => handleNestedArrayChange('benefits', 'cards', index, { ...card, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <textarea 
                      value={card.description} 
                      onChange={(e) => handleNestedArrayChange('benefits', 'cards', index, { ...card, description: e.target.value })} 
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
                          handleNestedArrayChange('benefits', 'cards', index, { ...card, features: newFeatures });
                        }} 
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                      <button 
                        onClick={() => {
                          const newFeatures = card.features.filter((_, i) => i !== featureIndex);
                          handleNestedArrayChange('benefits', 'cards', index, { ...card, features: newFeatures });
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
                      handleNestedArrayChange('benefits', 'cards', index, { ...card, features: newFeatures });
                    }}
                    className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA] text-sm"
                  >
                    Ajouter une fonctionnalité
                  </button>
                </div>
                <button 
                  onClick={() => {
                    const newCards = content.benefits.cards.filter((_, i) => i !== index);
                    handleChange('benefits', 'cards', newCards);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette carte
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newCards = [...content.benefits.cards, { icon: '', title: '', description: '', features: [] }];
                handleChange('benefits', 'cards', newCards);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une carte
            </button>
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Éligibilité
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.eligibility.title} 
              onChange={(e) => handleChange('eligibility', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Éléments d'éligibilité</label>
            {content.eligibility.items.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Icône</label>
                    <input 
                      value={item.icon} 
                      onChange={(e) => handleNestedArrayChange('eligibility', 'items', index, { ...item, icon: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={item.title} 
                      onChange={(e) => handleNestedArrayChange('eligibility', 'items', index, { ...item, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <textarea 
                      value={item.description} 
                      onChange={(e) => handleNestedArrayChange('eligibility', 'items', index, { ...item, description: e.target.value })} 
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newItems = content.eligibility.items.filter((_, i) => i !== index);
                    handleChange('eligibility', 'items', newItems);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cet élément
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newItems = [...content.eligibility.items, { icon: '', title: '', description: '' }];
                handleChange('eligibility', 'items', newItems);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un élément
            </button>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Processus
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.process.title} 
              onChange={(e) => handleChange('process', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Étapes du processus</label>
            {content.process.steps.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Numéro</label>
                    <input 
                      value={step.number} 
                      onChange={(e) => handleNestedArrayChange('process', 'steps', index, { ...step, number: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={step.title} 
                      onChange={(e) => handleNestedArrayChange('process', 'steps', index, { ...step, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <textarea 
                      value={step.description} 
                      onChange={(e) => handleNestedArrayChange('process', 'steps', index, { ...step, description: e.target.value })} 
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newSteps = content.process.steps.filter((_, i) => i !== index);
                    handleChange('process', 'steps', newSteps);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette étape
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newSteps = [...content.process.steps, { number: '', title: '', description: '' }];
                handleChange('process', 'steps', newSteps);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une étape
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
