"use client";

import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'sciPageContent';

const defaultContent = {
  heroTitle: "Découvrir la Société Civile Immobilière (SCI)",
  heroSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. La SCI permet de gérer et transmettre un patrimoine immobilier à plusieurs avec une grande souplesse statutaire et fiscale.",
  heroButton1: "L'essentiel",
  heroButton2: "Sommaire",
  rightCardTitle: "SCI : gérez et transmettez",
  rightCardSubtitle: "Optimisez la gestion, facilitez la transmission, choisissez votre fiscalité.",
  rightCardBenefits: [
    "Gestion mutualisée du patrimoine",
    "Transmission familiale allégée",
    "Choix IR / IS"
  ],
  rightCardButton1: "Prendre rendez-vous",
  rightCardButton2: "Fiscalité",
  essentielTitle: "L'essentiel",
  essentielItems: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#1)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#2)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#3)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#4)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#5)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#6)"
  ],
  sommaireTitle: "Sommaire",
  sommaireItems: [
    "1. Qu'est-ce qu'une SCI ?",
    "2. Comment fonctionne une SCI ?",
    "3. Caractéristiques principales",
    "4. Pourquoi créer une SCI ?",
    "5. Les différentes formes",
    "6. Fiscalité : IR ou IS",
    "7. Questions-réponses"
  ],
  definitionTitle: "Qu'est-ce qu'une SCI ?",
  definitionText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. La SCI est une société civile destinée à la détention et à la gestion de biens immobiliers par plusieurs associés.",
  definitionText2: "Elle dissocie le patrimoine immobilier du patrimoine privé des associés et offre une grande liberté statutaire.",
  definitionSavoirTitle: "À savoir",
  definitionSavoirItems: [
    "Au moins deux associés",
    "Objet civil (pas d'activité commerciale)",
    "Durée jusqu'à 99 ans"
  ]
};

export default function SCICMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setContent({ ...defaultContent, ...parsed });
    }
  }, []);

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(content));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('contentUpdated'));
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#112033]">Page SCI</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page SCI</p>
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
              name="heroTitle" 
              value={content.heroTitle} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre</label>
            <textarea 
              name="heroSubtitle" 
              value={content.heroSubtitle} 
              onChange={handleChange} 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton 1</label>
              <input 
                name="heroButton1" 
                value={content.heroButton1} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton 2</label>
              <input 
                name="heroButton2" 
                value={content.heroButton2} 
                onChange={handleChange} 
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
              name="rightCardTitle" 
              value={content.rightCardTitle} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre de la carte</label>
            <input 
              name="rightCardSubtitle" 
              value={content.rightCardSubtitle} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Avantages (séparés par des virgules)</label>
            <textarea 
              name="rightCardBenefits" 
              value={content.rightCardBenefits.join(', ')} 
              onChange={e => setContent({ ...content, rightCardBenefits: e.target.value.split(',').map(s => s.trim()) })} 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton 1</label>
              <input 
                name="rightCardButton1" 
                value={content.rightCardButton1} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Bouton 2</label>
              <input 
                name="rightCardButton2" 
                value={content.rightCardButton2} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              name="essentielTitle" 
              value={content.essentielTitle} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Éléments (séparés par des virgules)</label>
            <textarea 
              name="essentielItems" 
              value={content.essentielItems.join('\n')} 
              onChange={e => setContent({ ...content, essentielItems: e.target.value.split('\n').map(s => s.trim()).filter(s => s) })} 
              rows={6} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Sommaire Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Sommaire
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input 
              name="sommaireTitle" 
              value={content.sommaireTitle} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Éléments du sommaire (séparés par des virgules)</label>
            <textarea 
              name="sommaireItems" 
              value={content.sommaireItems.join('\n')} 
              onChange={e => setContent({ ...content, sommaireItems: e.target.value.split('\n').map(s => s.trim()).filter(s => s) })} 
              rows={7} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Définition Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Définition
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la définition</label>
            <input 
              name="definitionTitle" 
              value={content.definitionTitle} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Texte 1</label>
            <textarea 
              name="definitionText1" 
              value={content.definitionText1} 
              onChange={handleChange} 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Texte 2</label>
            <textarea 
              name="definitionText2" 
              value={content.definitionText2} 
              onChange={handleChange} 
              rows={2} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre "À savoir"</label>
            <input 
              name="definitionSavoirTitle" 
              value={content.definitionSavoirTitle} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Éléments "À savoir" (séparés par des virgules)</label>
            <textarea 
              name="definitionSavoirItems" 
              value={content.definitionSavoirItems.join('\n')} 
              onChange={e => setContent({ ...content, definitionSavoirItems: e.target.value.split('\n').map(s => s.trim()).filter(s => s) })} 
              rows={3} 
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