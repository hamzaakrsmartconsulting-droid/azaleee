"use client";
import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Investissement Locatif – Construisez votre patrimoine avec Azalee Wealth",
    description: "L'investissement locatif est une stratégie éprouvée pour constituer un patrimoine immobilier et générer des revenus complémentaires. Notre expertise vous accompagne pour optimiser vos rendements et maximiser votre plus-value. Découvrez nos solutions d'investissement locatif adaptées à vos objectifs.",
    primaryButton: "Calculer ma rentabilité"
  },
  rightCard: {
    title: "Nos experts à votre service",
    benefits: [
      "Rendement locatif optimisé",
      "Plus-value immobilière",
      "Gestion locative déléguée",
      "Optimisation fiscale"
    ],
    floatingCard: {
      percentage: "6-8%",
      text: "Rendement locatif"
    }
  },
  avantages: {
    title: "Pourquoi investir en locatif ?",
    cards: [
      {
        icon: "💰",
        title: "Revenus",
        description: "Revenus locatifs mensuels"
      },
      {
        icon: "📈",
        title: "Plus-value",
        description: "Appréciation du bien"
      },
      {
        icon: "🛡️",
        title: "Sécurité",
        description: "Investissement tangible"
      },
      {
        icon: "⚡",
        title: "Leverage",
        description: "Effet de levier bancaire"
      }
    ]
  },
  calculRentabilite: {
    title: "Calculez votre rentabilité locative",
    sections: [
      {
        title: "Exemple d'investissement",
        items: [
          { label: "Prix d'achat", value: "200 000€" },
          { label: "Apport", value: "40 000€" },
          { label: "Emprunt", value: "160 000€" },
          { label: "Loyer mensuel", value: "1 200€", highlight: true }
        ]
      },
      {
        title: "Charges annuelles",
        items: [
          { label: "Intérêts", value: "-4 800€" },
          { label: "Taxes foncières", value: "-1 200€" },
          { label: "Assurance", value: "-600€" },
          { label: "Gestion", value: "-1 440€" }
        ]
      },
      {
        title: "Rentabilité",
        items: [
          { label: "Revenus bruts", value: "14 400€" },
          { label: "Charges", value: "-8 040€" },
          { label: "Cash-flow", value: "+6 360€", highlight: true },
          { label: "Rendement", value: "3,18%", highlight: true }
        ]
      }
    ]
  },
  cta: {
    title: "Prêt à investir en locatif ?",
    paragraph: "Nos experts Azalee Wealth vous accompagnent pour optimiser votre investissement locatif et maximiser votre rentabilité.",
    primaryButton: "Calculer ma rentabilité",
    secondaryButton: "Prendre rendez-vous"
  }
};

export default function InvestissementLocatifCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/immobilier/investissement-locatif&type=cms');
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
          pagePath: '/immobilier/investissement-locatif',
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
            <h1 className="text-2xl font-bold text-[#112033]">Page Investissement Locatif</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page Investissement Locatif</p>
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton principal</label>
            <input 
              value={content.hero.primaryButton} 
              onChange={(e) => handleChange('hero', 'primaryButton', e.target.value)} 
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
              <label className="block text-sm font-medium text-[#686868] mb-2">Pourcentage carte flottante</label>
              <input 
                value={content.rightCard.floatingCard.percentage} 
                onChange={(e) => handleNestedChange('rightCard', 'floatingCard', 'percentage', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Texte carte flottante</label>
              <input 
                value={content.rightCard.floatingCard.text} 
                onChange={(e) => handleNestedChange('rightCard', 'floatingCard', 'text', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Cartes d'avantages</label>
            {content.avantages.cards.map((card, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Icône</label>
                    <input 
                      value={card.icon} 
                      onChange={(e) => handleNestedArrayChange('avantages', 'cards', index, { ...card, icon: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre</label>
                    <input 
                      value={card.title} 
                      onChange={(e) => handleNestedArrayChange('avantages', 'cards', index, { ...card, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <input 
                      value={card.description} 
                      onChange={(e) => handleNestedArrayChange('avantages', 'cards', index, { ...card, description: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newCards = content.avantages.cards.filter((_, i) => i !== index);
                    handleChange('avantages', 'cards', newCards);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette carte
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newCards = [...content.avantages.cards, { icon: '', title: '', description: '' }];
                handleChange('avantages', 'cards', newCards);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une carte
            </button>
          </div>
        </div>
      </div>

      {/* Calcul de Rentabilité Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Calcul de Rentabilité
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input 
              value={content.calculRentabilite.title} 
              onChange={(e) => handleChange('calculRentabilite', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Sections de calcul</label>
            {content.calculRentabilite.sections.map((section, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Titre de la section</label>
                    <input 
                      value={section.title} 
                      onChange={(e) => handleNestedArrayChange('calculRentabilite', 'sections', index, { ...section, title: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Éléments</label>
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                        <input 
                          value={item.label} 
                          onChange={(e) => {
                            const newItems = section.items.map((i, idx) => idx === itemIndex ? { ...i, label: e.target.value } : i);
                            handleNestedArrayChange('calculRentabilite', 'sections', index, { ...section, items: newItems });
                          }} 
                          placeholder="Label"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                        <div className="flex gap-2">
                          <input 
                            value={item.value} 
                            onChange={(e) => {
                              const newItems = section.items.map((i, idx) => idx === itemIndex ? { ...i, value: e.target.value } : i);
                              handleNestedArrayChange('calculRentabilite', 'sections', index, { ...section, items: newItems });
                            }} 
                            placeholder="Valeur"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                          />
                          <button 
                            onClick={() => {
                              const newItems = section.items.filter((_, i) => i !== itemIndex);
                              handleNestedArrayChange('calculRentabilite', 'sections', index, { ...section, items: newItems });
                            }}
                            className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    ))}
                    <button 
                      onClick={() => {
                        const newItems = [...section.items, { label: '', value: '', highlight: false }];
                        handleNestedArrayChange('calculRentabilite', 'sections', index, { ...section, items: newItems });
                      }}
                      className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
                    >
                      Ajouter un élément
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newSections = content.calculRentabilite.sections.filter((_, i) => i !== index);
                    handleChange('calculRentabilite', 'sections', newSections);
                  }}
                  className="mt-3 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette section
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newSections = [...content.calculRentabilite.sections, { title: '', items: [{ label: '', value: '', highlight: false }] }];
                handleChange('calculRentabilite', 'sections', newSections);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une section
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