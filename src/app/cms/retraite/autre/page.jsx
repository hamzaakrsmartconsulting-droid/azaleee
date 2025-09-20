"use client";
import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Autres solutions de retraite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    primaryButton: "Découvrir les solutions",
    secondaryButton: "Prendre rendez-vous"
  },
  alternativeSolutions: {
    cards: [
      {
        icon: "🏛️",
        title: "Lorem ipsum",
        subtitle: "Dolor sit amet"
      },
      {
        icon: "🌍",
        title: "Consectetur",
        subtitle: "Adipiscing elit"
      },
      {
        icon: "💼",
        title: "Sed eiusmod",
        subtitle: "Tempor incididunt"
      },
      {
        icon: "🎯",
        title: "Ut labore",
        subtitle: "Dolore magna"
      }
    ]
  },
  chart: {
    title: "Solutions alternatives de retraite",
    data: [
      { label: "Solutions alternatives", value: "15+" },
      { label: "Taux de satisfaction", value: "92.3%" },
      { label: "Économies moyennes", value: "€12,500" },
      { label: "Durée d'implémentation", value: "6 mois" },
      { label: "Rendement supplémentaire", value: "8.7%" }
    ]
  },
  solutionsOverview: {
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor sit amet",
    steps: [
      {
        number: "1",
        title: "Lorem ipsum dolor sit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      },
      {
        number: "2",
        title: "Consectetur adipiscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      },
      {
        number: "3",
        title: "Sed do eiusmod tempor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      }
    ],
    calculator: {
      title: "Lorem ipsum dolor sit",
      fields: [
        { label: "Lorem ipsum", placeholder: "Lorem ipsum dolor" },
        { label: "Dolor sit amet", placeholder: "€50,000" },
        { label: "Consectetur elit", placeholder: "40" }
      ],
      button: "Lorem ipsum dolor sit",
      result: {
        title: "Lorem ipsum :",
        value: "€12,500",
        subtitle: "d'économies"
      }
    }
  },
  solutionsComparison: {
    title: "Lorem ipsum dolor sit amet",
    cards: [
      {
        icon: "🏛️",
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
        icon: "🌍",
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
        icon: "💼",
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
  benefitsAnalysis: {
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
    chart: {
      title: "Lorem ipsum dolor sit",
      items: [
        { label: "Lorem ipsum", value: "92.3%" },
        { label: "Dolor sit amet", value: "87.5%" },
        { label: "Consectetur elit", value: "84.2%" }
      ]
    }
  },
  implementationProcess: {
    title: "Lorem ipsum dolor sit amet",
    steps: [
      {
        icon: "📋",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      },
      {
        icon: "🔍",
        title: "Dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      },
      {
        icon: "⚙️",
        title: "Consectetur elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      },
      {
        icon: "✅",
        title: "Sed eiusmod",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      }
    ]
  },
  expertConsultation: {
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
    form: {
      title: "Lorem ipsum dolor sit",
      fields: [
        { label: "Lorem ipsum", placeholder: "Lorem ipsum dolor" },
        { label: "Dolor sit amet", placeholder: "lorem@ipsum.com" },
        { label: "Consectetur elit", placeholder: "Lorem ipsum dolor sit amet..." }
      ],
      button: "Lorem ipsum dolor sit"
    }
  },
  cta: {
    title: "Lorem ipsum dolor sit amet ?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "Découvrir les solutions"
  }
};

export default function RetraiteAutreCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/retraite/autre&type=cms');
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
          pagePath: '/retraite/autre',
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
            <h1 className="text-2xl font-bold text-[#112033]">Page Autres Solutions de Retraite</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page Autres Solutions de Retraite</p>
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

      {/* Alternative Solutions Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Solutions Alternatives
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Cartes de solutions</label>
            {content.alternativeSolutions.cards.map((card, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Icône</label>
                    <input 
                      value={card.icon} 
                      onChange={(e) => handleNestedArrayChange('alternativeSolutions', 'cards', index, { ...card, icon: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={card.title} 
                      onChange={(e) => handleNestedArrayChange('alternativeSolutions', 'cards', index, { ...card, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Sous-titre</label>
                    <input 
                      value={card.subtitle} 
                      onChange={(e) => handleNestedArrayChange('alternativeSolutions', 'cards', index, { ...card, subtitle: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newCards = content.alternativeSolutions.cards.filter((_, i) => i !== index);
                    handleChange('alternativeSolutions', 'cards', newCards);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette carte
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newCards = [...content.alternativeSolutions.cards, { icon: '', title: '', subtitle: '' }];
                handleChange('alternativeSolutions', 'cards', newCards);
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

      {/* Solutions Overview Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Aperçu des Solutions
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.solutionsOverview.title} 
              onChange={(e) => handleChange('solutionsOverview', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre</label>
            <input 
              value={content.solutionsOverview.subtitle} 
              onChange={(e) => handleChange('solutionsOverview', 'subtitle', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          {/* Steps */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-md font-semibold text-[#112033] mb-3">Étapes</h3>
            <div className="space-y-3">
              {content.solutionsOverview.steps.map((step, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-1">Numéro</label>
                      <input 
                        value={step.number} 
                        onChange={(e) => {
                          const newSteps = [...content.solutionsOverview.steps];
                          newSteps[index] = { ...step, number: e.target.value };
                          handleChange('solutionsOverview', 'steps', newSteps);
                        }} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                      <input 
                        value={step.title} 
                        onChange={(e) => {
                          const newSteps = [...content.solutionsOverview.steps];
                          newSteps[index] = { ...step, title: e.target.value };
                          handleChange('solutionsOverview', 'steps', newSteps);
                        }} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                      <textarea 
                        value={step.description} 
                        onChange={(e) => {
                          const newSteps = [...content.solutionsOverview.steps];
                          newSteps[index] = { ...step, description: e.target.value };
                          handleChange('solutionsOverview', 'steps', newSteps);
                        }} 
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      const newSteps = content.solutionsOverview.steps.filter((_, i) => i !== index);
                      handleChange('solutionsOverview', 'steps', newSteps);
                    }}
                    className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                  >
                    Supprimer cette étape
                  </button>
                </div>
              ))}
              <button 
                onClick={() => {
                  const newSteps = [...content.solutionsOverview.steps, { number: '', title: '', description: '' }];
                  handleChange('solutionsOverview', 'steps', newSteps);
                }}
                className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
              >
                Ajouter une étape
              </button>
            </div>
          </div>

          {/* Calculator */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-md font-semibold text-[#112033] mb-3">Calculateur</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Titre du calculateur</label>
                <input 
                  value={content.solutionsOverview.calculator.title} 
                  onChange={(e) => handleNestedChange('solutionsOverview', 'calculator', 'title', e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Champs du calculateur</label>
                {content.solutionsOverview.calculator.fields.map((field, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input 
                      value={field.label} 
                      onChange={(e) => {
                        const newFields = [...content.solutionsOverview.calculator.fields];
                        newFields[index] = { ...field, label: e.target.value };
                        handleNestedChange('solutionsOverview', 'calculator', 'fields', newFields);
                      }} 
                      placeholder="Label"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                    <input 
                      value={field.placeholder} 
                      onChange={(e) => {
                        const newFields = [...content.solutionsOverview.calculator.fields];
                        newFields[index] = { ...field, placeholder: e.target.value };
                        handleNestedChange('solutionsOverview', 'calculator', 'fields', newFields);
                      }} 
                      placeholder="Placeholder"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                    <button 
                      onClick={() => {
                        const newFields = content.solutionsOverview.calculator.fields.filter((_, i) => i !== index);
                        handleNestedChange('solutionsOverview', 'calculator', 'fields', newFields);
                      }}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Supprimer
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => {
                    const newFields = [...content.solutionsOverview.calculator.fields, { label: '', placeholder: '' }];
                    handleNestedChange('solutionsOverview', 'calculator', 'fields', newFields);
                  }}
                  className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
                >
                  Ajouter un champ
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Bouton du calculateur</label>
                <input 
                  value={content.solutionsOverview.calculator.button} 
                  onChange={(e) => handleNestedChange('solutionsOverview', 'calculator', 'button', e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Titre du résultat</label>
                  <input 
                    value={content.solutionsOverview.calculator.result.title} 
                    onChange={(e) => handleNestedChange('solutionsOverview', 'calculator', 'result', { ...content.solutionsOverview.calculator.result, title: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Valeur du résultat</label>
                  <input 
                    value={content.solutionsOverview.calculator.result.value} 
                    onChange={(e) => handleNestedChange('solutionsOverview', 'calculator', 'result', { ...content.solutionsOverview.calculator.result, value: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre du résultat</label>
                  <input 
                    value={content.solutionsOverview.calculator.result.subtitle} 
                    onChange={(e) => handleNestedChange('solutionsOverview', 'calculator', 'result', { ...content.solutionsOverview.calculator.result, subtitle: e.target.value })} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
              </div>
            </div>
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
