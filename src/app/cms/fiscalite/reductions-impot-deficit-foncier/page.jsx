"use client";
import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Réductions d'impôt et déficit foncier",
    subtitle: "Optimisez votre fiscalité grâce aux réductions d'impôt et au déficit foncier. Découvrez comment transformer vos charges immobilières en avantages fiscaux.",
    button: "Calculer mes réductions",
    image: "/images/fiscalite-deficit-foncier-hero.jpg"
  },
  quickStats: {
    title: "Chiffres clés",
    stats: [
      { label: "Réduction max", value: "21%", description: "Loi Pinel" },
      { label: "Déficit foncier", value: "10 700€", description: "Plafond annuel" },
      { label: "Report", value: "10 ans", description: "Déficit foncier" }
    ]
  },
  calculator: {
    title: "Calculateur de réductions d'impôt",
    description: "Estimez vos réductions d'impôt et votre déficit foncier",
    fields: [
      { id: "revenus", label: "Revenus locatifs", placeholder: "15000" },
      { id: "charges", label: "Charges déductibles", placeholder: "8000" },
      { id: "interets", label: "Intérêts d'emprunt", placeholder: "5000" },
      { id: "amortissement", label: "Amortissement", placeholder: "3000" }
    ]
  },
  reductions: {
    title: "Types de réductions d'impôt",
    items: [
      {
        name: "Loi Pinel",
        reduction: "21%",
        description: "Investissement immobilier neuf",
        conditions: ["Bien neuf", "Location 12 ans", "Plafond 300k€"]
      },
      {
        name: "Loi Denormandie",
        reduction: "22%",
        description: "Rénovation de logements anciens",
        conditions: ["Bien ancien", "Rénovation", "Location 12 ans"]
      },
      {
        name: "Loi Malraux",
        reduction: "30%",
        description: "Rénovation monuments historiques",
        conditions: ["Bien classé", "Rénovation", "Location 9 ans"]
      }
    ]
  },
  deficitFoncier: {
    title: "Déficit foncier",
    description: "Le déficit foncier permet de déduire les charges immobilières de vos revenus globaux",
    avantages: [
      "Déduction des charges d'exploitation",
      "Déduction des intérêts d'emprunt",
      "Déduction des travaux d'amélioration",
      "Report sur 10 ans"
    ],
    plafonds: [
      { label: "Plafond annuel", value: "10 700€" },
      { label: "Report maximum", value: "10 ans" },
      { label: "Déduction charges", value: "100%" }
    ]
  },
  examples: {
    title: "Exemples concrets",
    items: [
      {
        scenario: "Investissement Pinel",
        revenus: "12 000€",
        charges: "8 000€",
        reduction: "2 520€",
        total: "2 520€ d'économie"
      },
      {
        scenario: "Déficit foncier",
        revenus: "15 000€",
        charges: "18 000€",
        deficit: "3 000€",
        total: "3 000€ de déficit reportable"
      }
    ]
  },
  cta: {
    title: "Prêt à optimiser votre fiscalité ?",
    subtitle: "Nos experts vous accompagnent pour maximiser vos réductions d'impôt",
    primaryButton: "Simulation gratuite",
    secondaryButton: "Consultation expert"
  }
};

export default function ReductionsImpotDeficitFoncierCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/fiscalite/reductions-impot-deficit-foncier&type=cms');
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
          pagePath: '/fiscalite/reductions-impot-deficit-foncier',
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
            <h1 className="text-2xl font-bold text-[#112033]">Page Réductions d'Impôt et Déficit Foncier</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page Réductions d'Impôt et Déficit Foncier</p>
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre</label>
            <textarea 
              value={content.hero.subtitle} 
              onChange={(e) => handleChange('hero', 'subtitle', e.target.value)} 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton</label>
            <input 
              value={content.hero.button} 
              onChange={(e) => handleChange('hero', 'button', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Image (URL)</label>
            <input 
              value={content.hero.image} 
              onChange={(e) => handleChange('hero', 'image', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              placeholder="/images/fiscalite-deficit-foncier-hero.jpg"
            />
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Chiffres Clés
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.quickStats.title} 
              onChange={(e) => handleChange('quickStats', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Statistiques</label>
            {content.quickStats.stats.map((stat, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Label</label>
                    <input 
                      value={stat.label} 
                      onChange={(e) => handleNestedArrayChange('quickStats', 'stats', index, { ...stat, label: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Valeur</label>
                    <input 
                      value={stat.value} 
                      onChange={(e) => handleNestedArrayChange('quickStats', 'stats', index, { ...stat, value: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <input 
                      value={stat.description} 
                      onChange={(e) => handleNestedArrayChange('quickStats', 'stats', index, { ...stat, description: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newStats = content.quickStats.stats.filter((_, i) => i !== index);
                    handleChange('quickStats', 'stats', newStats);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette statistique
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newStats = [...content.quickStats.stats, { label: "", value: "", description: "" }];
                handleChange('quickStats', 'stats', newStats);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une statistique
            </button>
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Description du calculateur</label>
            <textarea 
              value={content.calculator.description} 
              onChange={(e) => handleChange('calculator', 'description', e.target.value)} 
              rows={2} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Champs du calculateur</label>
            {content.calculator.fields.map((field, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">ID</label>
                    <input 
                      value={field.id} 
                      onChange={(e) => handleNestedArrayChange('calculator', 'fields', index, { ...field, id: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Label</label>
                    <input 
                      value={field.label} 
                      onChange={(e) => handleNestedArrayChange('calculator', 'fields', index, { ...field, label: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Placeholder</label>
                    <input 
                      value={field.placeholder} 
                      onChange={(e) => handleNestedArrayChange('calculator', 'fields', index, { ...field, placeholder: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newFields = content.calculator.fields.filter((_, i) => i !== index);
                    handleChange('calculator', 'fields', newFields);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer ce champ
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newFields = [...content.calculator.fields, { id: "", label: "", placeholder: "" }];
                handleChange('calculator', 'fields', newFields);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un champ
            </button>
          </div>
        </div>
      </div>

      {/* Reductions Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Types de Réductions
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.reductions.title} 
              onChange={(e) => handleChange('reductions', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Types de réductions</label>
            {content.reductions.items.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Nom</label>
                    <input 
                      value={item.name} 
                      onChange={(e) => handleNestedArrayChange('reductions', 'items', index, { ...item, name: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Réduction</label>
                    <input 
                      value={item.reduction} 
                      onChange={(e) => handleNestedArrayChange('reductions', 'items', index, { ...item, reduction: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <textarea 
                      value={item.description} 
                      onChange={(e) => handleNestedArrayChange('reductions', 'items', index, { ...item, description: e.target.value })} 
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                
                {/* Conditions */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-[#686868] mb-2">Conditions</label>
                  {item.conditions.map((condition, condIndex) => (
                    <div key={condIndex} className="flex gap-2 mb-2">
                      <input 
                        value={condition} 
                        onChange={(e) => {
                          const newConditions = [...item.conditions];
                          newConditions[condIndex] = e.target.value;
                          handleNestedArrayChange('reductions', 'items', index, { ...item, conditions: newConditions });
                        }} 
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                      <button 
                        onClick={() => {
                          const newConditions = item.conditions.filter((_, i) => i !== condIndex);
                          handleNestedArrayChange('reductions', 'items', index, { ...item, conditions: newConditions });
                        }}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Supprimer
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={() => {
                      const newConditions = [...item.conditions, ""];
                      handleNestedArrayChange('reductions', 'items', index, { ...item, conditions: newConditions });
                    }}
                    className="px-3 py-1 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA] text-sm"
                  >
                    Ajouter une condition
                  </button>
                </div>

                <button 
                  onClick={() => {
                    const newItems = content.reductions.items.filter((_, i) => i !== index);
                    handleChange('reductions', 'items', newItems);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette réduction
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newItems = [...content.reductions.items, {
                  name: "",
                  reduction: "",
                  description: "",
                  conditions: [""]
                }];
                handleChange('reductions', 'items', newItems);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une réduction
            </button>
          </div>
        </div>
      </div>

      {/* Déficit Foncier Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Déficit Foncier
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.deficitFoncier.title} 
              onChange={(e) => handleChange('deficitFoncier', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
            <textarea 
              value={content.deficitFoncier.description} 
              onChange={(e) => handleChange('deficitFoncier', 'description', e.target.value)} 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          {/* Avantages */}
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Avantages</label>
            {content.deficitFoncier.avantages.map((avantage, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input 
                  value={avantage} 
                  onChange={(e) => {
                    const newAvantages = [...content.deficitFoncier.avantages];
                    newAvantages[index] = e.target.value;
                    handleChange('deficitFoncier', 'avantages', newAvantages);
                  }} 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
                <button 
                  onClick={() => {
                    const newAvantages = content.deficitFoncier.avantages.filter((_, i) => i !== index);
                    handleChange('deficitFoncier', 'avantages', newAvantages);
                  }}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Supprimer
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newAvantages = [...content.deficitFoncier.avantages, ""];
                handleChange('deficitFoncier', 'avantages', newAvantages);
              }}
              className="px-3 py-1 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA] text-sm"
            >
              Ajouter un avantage
            </button>
          </div>

          {/* Plafonds */}
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Plafonds</label>
            {content.deficitFoncier.plafonds.map((plafond, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Label</label>
                    <input 
                      value={plafond.label} 
                      onChange={(e) => handleNestedArrayChange('deficitFoncier', 'plafonds', index, { ...plafond, label: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Valeur</label>
                    <input 
                      value={plafond.value} 
                      onChange={(e) => handleNestedArrayChange('deficitFoncier', 'plafonds', index, { ...plafond, value: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newPlafonds = content.deficitFoncier.plafonds.filter((_, i) => i !== index);
                    handleChange('deficitFoncier', 'plafonds', newPlafonds);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer ce plafond
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newPlafonds = [...content.deficitFoncier.plafonds, { label: "", value: "" }];
                handleChange('deficitFoncier', 'plafonds', newPlafonds);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un plafond
            </button>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Exemples Concrets
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              value={content.examples.title} 
              onChange={(e) => handleChange('examples', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Exemples</label>
            {content.examples.items.map((example, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Scénario</label>
                    <input 
                      value={example.scenario} 
                      onChange={(e) => handleNestedArrayChange('examples', 'items', index, { ...example, scenario: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Revenus</label>
                    <input 
                      value={example.revenus} 
                      onChange={(e) => handleNestedArrayChange('examples', 'items', index, { ...example, revenus: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Charges</label>
                    <input 
                      value={example.charges} 
                      onChange={(e) => handleNestedArrayChange('examples', 'items', index, { ...example, charges: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Réduction/Déficit</label>
                    <input 
                      value={example.reduction || example.deficit} 
                      onChange={(e) => {
                        if (example.reduction) {
                          handleNestedArrayChange('examples', 'items', index, { ...example, reduction: e.target.value });
                        } else {
                          handleNestedArrayChange('examples', 'items', index, { ...example, deficit: e.target.value });
                        }
                      }} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#686868] mb-1">Total</label>
                    <input 
                      value={example.total} 
                      onChange={(e) => handleNestedArrayChange('examples', 'items', index, { ...example, total: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newItems = content.examples.items.filter((_, i) => i !== index);
                    handleChange('examples', 'items', newItems);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cet exemple
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newItems = [...content.examples.items, {
                  scenario: "",
                  revenus: "",
                  charges: "",
                  reduction: "",
                  total: ""
                }];
                handleChange('examples', 'items', newItems);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un exemple
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre</label>
            <textarea 
              value={content.cta.subtitle} 
              onChange={(e) => handleChange('cta', 'subtitle', e.target.value)} 
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
