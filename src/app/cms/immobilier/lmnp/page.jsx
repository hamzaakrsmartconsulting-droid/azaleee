"use client";

import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'lmnpPageContent';

const defaultContent = {
  heroTitle: "Investir avec le statut LMNP (location meublée non professionnelle) avec Azalee Wealth",
  heroSubtitle: "L'investissement locatif est une stratégie d'épargne efficace. Ce système de défiscalisation immobilière permet de se constituer un patrimoine tout en percevant, mensuellement, un complément de salaire. Notre expertise de plus de 30 ans vous accompagne pour optimiser votre investissement LMNP.",
  heroButton: "Simuler votre projet LMNP",
  rightCardTitle: "Nos experts à votre service",
  rightCardBenefits: [
    "Ne payez pas d'impôt sur vos revenus locatifs",
    "Meilleure rentabilité qu'avec une location nue",
    "Récupération de la TVA",
    "Accompagnement complet de votre projet"
  ],
  floatingCardText: "0 € →\nAnalyse personnalisée gratuite"
};

export default function LMNPCMS() {
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
            <h1 className="text-2xl font-bold text-[#112033]">Page LMNP</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page LMNP</p>
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
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton</label>
            <input 
              name="heroButton" 
              value={content.heroButton} 
              onChange={handleChange} 
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la carte</label>
            <input 
              name="rightCardTitle" 
              value={content.rightCardTitle} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Avantages (séparés par des virgules)</label>
            <textarea 
              name="rightCardBenefits" 
              value={content.rightCardBenefits.join('\n')} 
              onChange={e => setContent({ ...content, rightCardBenefits: e.target.value.split('\n').map(s => s.trim()).filter(s => s) })} 
              rows={4} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Texte de la carte flottante (utilisez \n pour les sauts de ligne)</label>
            <textarea 
              name="floatingCardText" 
              value={content.floatingCardText} 
              onChange={handleChange} 
              rows={2} 
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