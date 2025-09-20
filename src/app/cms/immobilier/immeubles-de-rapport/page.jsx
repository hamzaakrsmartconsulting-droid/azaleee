"use client";

import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Immeubles de rapport : Investissement immobilier",
    subtitle: "Investissez dans des immeubles de rapport pour générer des revenus locatifs stables.",
    primaryButton: "Nos immeubles",
    secondaryButton: "Calculer la rentabilité",
    category: "Investissement immobilier"
  },
  rightCard: {
    title: "Immeubles de rapport : revenus stables",
    subtitle: "Générez des revenus locatifs stables avec les immeubles de rapport.",
    benefits: [
      "Revenus stables",
      "Plus-value immobilière",
      "Gestion simplifiée",
      "Diversification"
    ],
    primaryButton: "Demander un devis",
    secondaryButton: "En savoir plus"
  },
  sidebar: {
    essentiel: {
      title: "L'essentiel",
      items: [
        "Informations essentielles sur immeubles de rapport",
        "Avantages et bénéfices",
        "Conditions et critères",
        "Démarches et procédures"
      ]
    },
    sommaire: {
      title: "Sommaire",
      items: [
        "1. Qu'est-ce que immeubles de rapport ?",
        "2. Avantages et bénéfices",
        "3. Conditions d'éligibilité",
        "4. Démarches et procédures",
        "5. Exemples concrets",
        "6. Questions-réponses"
      ]
    }
  },
  definition: {
    title: "Qu'est-ce que immeubles de rapport ?",
    text1: "Définition et explication de immeubles de rapport.",
    text2: "Présentation des avantages et des modalités.",
    savoir: {
      title: "À savoir",
      items: [
        "Points importants à retenir",
        "Conditions spécifiques",
        "Avantages clés",
        "Points d'attention"
      ]
    }
  },
  investmentBenefits: {
    title: "Pourquoi investir dans les immeubles de rapport ?",
    subtitle: "Découvrez les avantages de cette stratégie d'investissement",
    benefits: [
      {
        icon: "💰",
        title: "Revenus stables",
        description: "Générez des revenus locatifs mensuels réguliers"
      },
      {
        icon: "📈",
        title: "Plus-value",
        description: "Bénéficiez de l'appréciation immobilière à long terme"
      },
      {
        icon: "🛡️",
        title: "Sécurité",
        description: "Investissement tangible et diversifié"
      }
    ]
  },
  marketAnalysis: {
    title: "Analyse du marché",
    trends: {
      title: "Tendances actuelles",
      data: [
        { label: "Demande locative", value: "+15%", color: "text-[#28A745]" },
        { label: "Prix au m²", value: "+8%", color: "text-blue-600" },
        { label: "Rendement moyen", value: "4.2%", color: "text-[#4EBBBD]" }
      ]
    },
    opportunities: {
      title: "Zones d'opportunité",
      items: [
        "Centres-villes",
        "Zones en développement",
        "Proximité transports"
      ]
    }
  },
  cta: {
    title: "Prêt à investir ?",
    paragraph: "Nos experts vous accompagnent dans votre projet d'investissement",
    primaryButton: "Consultation gratuite",
    secondaryButton: "Télécharger le guide"
  }
};

export default function ImmeublesDeRapportCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/immobilier/immeubles-de-rapport&type=cms');
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
          pagePath: '/immobilier/immeubles-de-rapport',
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
            <h1 className="text-2xl font-bold text-[#112033]">Page Immeubles de rapport</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page Immeubles de rapport</p>
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Catégorie</label>
            <input 
              value={content.hero.category} 
              onChange={(e) => handleChange('hero', 'category', e.target.value)} 
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

      {/* Right Card Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Carte de droite
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la carte</label>
            <input 
              value={content.rightCard.title} 
              onChange={(e) => handleChange('rightCard', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre de la carte</label>
            <textarea 
              value={content.rightCard.subtitle} 
              onChange={(e) => handleChange('rightCard', 'subtitle', e.target.value)} 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Avantages</label>
            {content.rightCard.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input 
                  value={benefit} 
                  onChange={(e) => handleArrayChange('rightCard', 'benefits', index, e.target.value)} 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
                <button 
                  onClick={() => {
                    const newBenefits = content.rightCard.benefits.filter((_, i) => i !== index);
                    handleChange('rightCard', 'benefits', newBenefits);
                  }}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Supprimer
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newBenefits = [...content.rightCard.benefits, ''];
                handleChange('rightCard', 'benefits', newBenefits);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un avantage
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton principal</label>
              <input 
                value={content.rightCard.primaryButton} 
                onChange={(e) => handleChange('rightCard', 'primaryButton', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton secondaire</label>
              <input 
                value={content.rightCard.secondaryButton} 
                onChange={(e) => handleChange('rightCard', 'secondaryButton', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Barre latérale
        </h2>
        
        {/* L'essentiel */}
        <div className="mb-6">
          <h3 className="text-md font-semibold text-[#112033] mb-3">L'essentiel</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              <input 
                value={content.sidebar.essentiel.title} 
                onChange={(e) => handleNestedChange('sidebar', 'essentiel', 'title', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Éléments</label>
              {content.sidebar.essentiel.items.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input 
                    value={item} 
                    onChange={(e) => handleNestedArrayChange('sidebar', 'essentiel', 'items', index, e.target.value)} 
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                  <button 
                    onClick={() => {
                      const newItems = content.sidebar.essentiel.items.filter((_, i) => i !== index);
                      handleNestedChange('sidebar', 'essentiel', 'items', newItems);
                    }}
                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
              <button 
                onClick={() => {
                  const newItems = [...content.sidebar.essentiel.items, ''];
                  handleNestedChange('sidebar', 'essentiel', 'items', newItems);
                }}
                className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
              >
                Ajouter un élément
              </button>
            </div>
          </div>
        </div>

        {/* Sommaire */}
        <div>
          <h3 className="text-md font-semibold text-[#112033] mb-3">Sommaire</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              <input 
                value={content.sidebar.sommaire.title} 
                onChange={(e) => handleNestedChange('sidebar', 'sommaire', 'title', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Éléments</label>
              {content.sidebar.sommaire.items.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input 
                    value={item} 
                    onChange={(e) => handleNestedArrayChange('sidebar', 'sommaire', 'items', index, e.target.value)} 
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                  <button 
                    onClick={() => {
                      const newItems = content.sidebar.sommaire.items.filter((_, i) => i !== index);
                      handleNestedChange('sidebar', 'sommaire', 'items', newItems);
                    }}
                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
              <button 
                onClick={() => {
                  const newItems = [...content.sidebar.sommaire.items, ''];
                  handleNestedChange('sidebar', 'sommaire', 'items', newItems);
                }}
                className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
              >
                Ajouter un élément
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Definition Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Définition
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la définition</label>
            <input 
              value={content.definition.title} 
              onChange={(e) => handleChange('definition', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Texte 1</label>
            <textarea 
              value={content.definition.text1} 
              onChange={(e) => handleChange('definition', 'text1', e.target.value)} 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Texte 2</label>
            <textarea 
              value={content.definition.text2} 
              onChange={(e) => handleChange('definition', 'text2', e.target.value)} 
              rows={2} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          {/* À savoir subsection */}
          <div className="border-t pt-4">
            <h3 className="text-md font-semibold text-[#112033] mb-3">À savoir</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                <input 
                  value={content.definition.savoir.title} 
                  onChange={(e) => handleNestedChange('definition', 'savoir', 'title', e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Éléments</label>
                {content.definition.savoir.items.map((item, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input 
                      value={item} 
                      onChange={(e) => handleNestedArrayChange('definition', 'savoir', 'items', index, e.target.value)} 
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                    <button 
                      onClick={() => {
                        const newItems = content.definition.savoir.items.filter((_, i) => i !== index);
                        handleNestedChange('definition', 'savoir', 'items', newItems);
                      }}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Supprimer
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => {
                    const newItems = [...content.definition.savoir.items, ''];
                    handleNestedChange('definition', 'savoir', 'items', newItems);
                  }}
                  className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
                >
                  Ajouter un élément
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Benefits Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Avantages de l'investissement
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre principal</label>
            <input 
              value={content.investmentBenefits.title} 
              onChange={(e) => handleChange('investmentBenefits', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre</label>
            <input 
              value={content.investmentBenefits.subtitle} 
              onChange={(e) => handleChange('investmentBenefits', 'subtitle', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Avantages</label>
            {content.investmentBenefits.benefits.map((benefit, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Icône</label>
                    <input 
                      value={benefit.icon} 
                      onChange={(e) => handleNestedArrayChange('investmentBenefits', 'benefits', index, { ...benefit, icon: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={benefit.title} 
                      onChange={(e) => handleNestedArrayChange('investmentBenefits', 'benefits', index, { ...benefit, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <input 
                      value={benefit.description} 
                      onChange={(e) => handleNestedArrayChange('investmentBenefits', 'benefits', index, { ...benefit, description: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newBenefits = content.investmentBenefits.benefits.filter((_, i) => i !== index);
                    handleChange('investmentBenefits', 'benefits', newBenefits);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cet avantage
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newBenefits = [...content.investmentBenefits.benefits, { icon: '💰', title: '', description: '' }];
                handleChange('investmentBenefits', 'benefits', newBenefits);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un avantage
            </button>
          </div>
        </div>
      </div>

      {/* Market Analysis Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Analyse du marché
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre principal</label>
            <input 
              value={content.marketAnalysis.title} 
              onChange={(e) => handleChange('marketAnalysis', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          {/* Tendances actuelles */}
          <div className="border-t pt-4">
            <h3 className="text-md font-semibold text-[#112033] mb-3">Tendances actuelles</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                <input 
                  value={content.marketAnalysis.trends.title} 
                  onChange={(e) => handleNestedChange('marketAnalysis', 'trends', 'title', e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Données</label>
                {content.marketAnalysis.trends.data.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 mb-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-[#686868] mb-1">Label</label>
                        <input 
                          value={item.label} 
                          onChange={(e) => handleNestedArrayChange('marketAnalysis', 'trends', 'data', index, { ...item, label: e.target.value })} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#686868] mb-1">Valeur</label>
                        <input 
                          value={item.value} 
                          onChange={(e) => handleNestedArrayChange('marketAnalysis', 'trends', 'data', index, { ...item, value: e.target.value })} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#686868] mb-1">Couleur</label>
                        <input 
                          value={item.color} 
                          onChange={(e) => handleNestedArrayChange('marketAnalysis', 'trends', 'data', index, { ...item, color: e.target.value })} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        const newData = content.marketAnalysis.trends.data.filter((_, i) => i !== index);
                        handleNestedChange('marketAnalysis', 'trends', 'data', newData);
                      }}
                      className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                    >
                      Supprimer
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => {
                    const newData = [...content.marketAnalysis.trends.data, { label: '', value: '', color: 'text-[#4EBBBD]' }];
                    handleNestedChange('marketAnalysis', 'trends', 'data', newData);
                  }}
                  className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
                >
                  Ajouter une donnée
                </button>
              </div>
            </div>
          </div>
          
          {/* Zones d'opportunité */}
          <div className="border-t pt-4">
            <h3 className="text-md font-semibold text-[#112033] mb-3">Zones d'opportunité</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                <input 
                  value={content.marketAnalysis.opportunities.title} 
                  onChange={(e) => handleNestedChange('marketAnalysis', 'opportunities', 'title', e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#686868] mb-2">Zones</label>
                {content.marketAnalysis.opportunities.items.map((item, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input 
                      value={item} 
                      onChange={(e) => handleNestedArrayChange('marketAnalysis', 'opportunities', 'items', index, e.target.value)} 
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                    <button 
                      onClick={() => {
                        const newItems = content.marketAnalysis.opportunities.items.filter((_, i) => i !== index);
                        handleNestedChange('marketAnalysis', 'opportunities', 'items', newItems);
                      }}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Supprimer
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => {
                    const newItems = [...content.marketAnalysis.opportunities.items, ''];
                    handleNestedChange('marketAnalysis', 'opportunities', 'items', newItems);
                  }}
                  className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
                >
                  Ajouter une zone
                </button>
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