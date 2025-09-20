"use client";

import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Investissement Immobilier – Faites fructifier votre patrimoine avec Azalee Wealth",
    description: "Votre partenaire de confiance en stratégie immobilière depuis plus de 30 ans. Nous vous accompagnons pour valoriser votre patrimoine, sécuriser vos investissements, et bâtir des solutions d'investissement sur mesure, adaptées à vos objectifs.",
    ctaButton: "Demander une étude patrimoniale gratuite"
  },
  rightCard: {
    title: "Nos experts à votre service",
    floatingCardText: "0 € →\nAnalyse personnalisée gratuite",
    benefits: [
      "Analyse globale de votre situation patrimoniale",
      "Optimisation de vos investissements et rendements",
      "Accompagnement sur le financement et la fiscalité immobilière",
      "Stratégie d'acquisition, de gestion locative & transmission patrimoniale"
    ]
  },
  services: {
    title: "Une approche stratégique de votre investissement immobilier",
    cards: [
      {
        title: "Analyse personnalisée de votre situation patrimoniale",
        description: "Nous évaluons votre profil investisseur, vos objectifs de rendement et vos projets pour identifier les meilleures opportunités d'investissement immobilier.",
        backgroundColor: "#253F60",
        textColor: "white"
      },
      {
        title: "Optimisation fiscale de vos investissements immobiliers",
        description: "Nous structurons vos opérations immobilières afin d'optimiser la rentabilité et les avantages fiscaux, en intégrant dispositifs légaux et stratégies patrimoniales.",
        backgroundColor: "#EDEDED",
        textColor: "#1F2937"
      },
      {
        title: "Accompagnement global sur la gestion et la fiscalité",
        description: "Nos experts vous accompagnent dans la structuration, la gestion juridique et fiscale, ainsi que dans la déclaration de vos investissements, en toute conformité.",
        backgroundColor: "#EDEDED",
        textColor: "#1F2937"
      },
      {
        title: "Stratégie patrimoniale intégrée projets immobiliers",
        description: "Nous alignons vos investissements immobiliers avec votre stratégie globale de patrimoine pour sécuriser vos actifs, anticiper la transmission et optimiser la fiscalité successorale.",
        backgroundColor: "#EDEDED",
        textColor: "#1F2937"
      }
    ]
  },
  expertise: {
    title: "Nos domaines d'expertise en fiscalité immobilière et patrimoniale",
    cards: [
      {
        title: "Optimisation fiscale immobilière",
        description: "Nous optimisons votre fiscalité immobilière en utilisant les dispositifs légaux appropriés et en structurant vos investissements pour maximiser les avantages fiscaux.",
        backgroundColor: "#253F60",
        textColor: "white"
      },
      {
        title: "Gestion locative et optimisation des rendements",
        description: "Nous vous accompagnons dans la gestion de vos biens locatifs pour optimiser les rendements, réduire les charges et maximiser la rentabilité de vos investissements.",
        backgroundColor: "#EDEDED",
        textColor: "#1F2937"
      },
      {
        title: "Stratégie d'acquisition et de développement",
        description: "Nous vous conseillons sur les meilleures opportunités d'acquisition et vous accompagnons dans le développement de votre portefeuille immobilier selon vos objectifs.",
        backgroundColor: "#EDEDED",
        textColor: "#1F2937"
      },
      {
        title: "Transmission patrimoniale et succession",
        description: "Nous vous aidons à structurer la transmission de votre patrimoine immobilier en optimisant la fiscalité successorale et en préservant la valeur de vos actifs.",
        backgroundColor: "#EDEDED",
        textColor: "#1F2937"
      }
    ]
  },
  cta: {
    title: "Prêt à optimiser votre patrimoine immobilier ?",
    description: "Nos experts Azalee Wealth vous accompagnent pour valoriser votre patrimoine immobilier et optimiser vos investissements selon vos objectifs.",
    primaryButton: "Demander une étude patrimoniale gratuite",
    secondaryButton: "Prendre rendez-vous avec un expert"
  }
};

export default function InvestissementImmobilierCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/immobilier/investissement-immobilier&type=cms');
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
        [field]: prev[section][field].map((item, i) => 
          i === index ? value : item
        )
      }
    }));
  };

  const handleObjectArrayChange = (section, field, index, subField, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].map((item, i) => 
          i === index ? { ...item, [subField]: value } : item
        )
      }
    }));
  };

    const handleSave = async () => {
    try {
      const response = await fetch('/api/pages/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagePath: '/immobilier/investissement-immobilier',
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

  const resetToDefaults = () => {
    setContent(defaultContent);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#112033]">Page Investissement Immobilier</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page principale Investissement Immobilier</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={resetToDefaults} 
              className="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              Réinitialiser
            </button>
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
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Hero
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre principal</label>
            <input
              type="text"
              value={content.hero.title}
              onChange={(e) => handleChange('hero', 'title', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={content.hero.description}
              onChange={(e) => handleChange('hero', 'description', e.target.value)}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bouton CTA</label>
            <input
              type="text"
              value={content.hero.ctaButton}
              onChange={(e) => handleChange('hero', 'ctaButton', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre de la carte</label>
            <input
              type="text"
              value={content.rightCard.title}
              onChange={(e) => handleChange('rightCard', 'title', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Texte de la carte flottante</label>
            <textarea
              value={content.rightCard.floatingCardText}
              onChange={(e) => handleChange('rightCard', 'floatingCardText', e.target.value)}
              rows={2}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Avantages (un par ligne)</label>
            {content.rightCard.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={benefit}
                  onChange={(e) => handleArrayChange('rightCard', 'benefits', index, e.target.value)}
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  placeholder={`Avantage ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Services
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre de la section</label>
            <input
              type="text"
              value={content.services.title}
              onChange={(e) => handleChange('services', 'title', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cartes de services</label>
            {content.services.cards.map((card, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Titre</label>
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => handleObjectArrayChange('services', 'cards', index, 'title', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Couleur de fond</label>
                    <input
                      type="text"
                      value={card.backgroundColor}
                      onChange={(e) => handleObjectArrayChange('services', 'cards', index, 'backgroundColor', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      placeholder="#253F60"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                  <textarea
                    value={card.description}
                    onChange={(e) => handleObjectArrayChange('services', 'cards', index, 'description', e.target.value)}
                    rows={2}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Expertise
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre de la section</label>
            <input
              type="text"
              value={content.expertise.title}
              onChange={(e) => handleChange('expertise', 'title', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cartes d'expertise</label>
            {content.expertise.cards.map((card, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Titre</label>
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => handleObjectArrayChange('expertise', 'cards', index, 'title', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Couleur de fond</label>
                    <input
                      type="text"
                      value={card.backgroundColor}
                      onChange={(e) => handleObjectArrayChange('expertise', 'cards', index, 'backgroundColor', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      placeholder="#253F60"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                  <textarea
                    value={card.description}
                    onChange={(e) => handleObjectArrayChange('expertise', 'cards', index, 'description', e.target.value)}
                    rows={2}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Call-to-Action
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre CTA</label>
            <input
              type="text"
              value={content.cta.title}
              onChange={(e) => handleChange('cta', 'title', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={content.cta.description}
              onChange={(e) => handleChange('cta', 'description', e.target.value)}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bouton principal</label>
              <input
                type="text"
                value={content.cta.primaryButton}
                onChange={(e) => handleChange('cta', 'primaryButton', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bouton secondaire</label>
              <input
                type="text"
                value={content.cta.secondaryButton}
                onChange={(e) => handleChange('cta', 'secondaryButton', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Aperçu des modifications
        </h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">
            <strong>Titre principal :</strong> {content.hero.title.substring(0, 80)}...
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Description :</strong> {content.hero.description.substring(0, 100)}...
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Services :</strong> {content.services.cards.length} cartes configurées
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Expertise :</strong> {content.expertise.cards.length} domaines configurés
          </p>
          <p className="text-sm text-gray-600">
            <strong>CTA :</strong> {content.cta.title}
          </p>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Contenu sauvegardé avec succès !
        </div>
      )}
    </div>
  );
}


