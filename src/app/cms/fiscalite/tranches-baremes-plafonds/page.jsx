"use client";
import React, { useState, useEffect } from 'react';



const defaultContent = {
  hero: {
    title: "Tranches, barèmes et plafonds",
    subtitle: "Comprenez le fonctionnement du barème progressif de l'impôt sur le revenu. Découvrez les seuils, taux et calculs pour optimiser votre fiscalité.",
    image: ""
  },
  bareme2024: [
    { seuil: 0, taux: 0, montant: 0, description: "Jusqu'à" },
    { seuil: 11294, taux: 11, montant: 0, description: "De" },
    { seuil: 28797, taux: 30, montant: 1930, description: "De" },
    { seuil: 82341, taux: 41, montant: 16072, description: "De" },
    { seuil: 177106, taux: 45, montant: 38845, description: "Au-delà de" }
  ],
  plafonds: [
    {
      nom: "Plafond du quotient familial",
      montant: 1592,
      description: "Limite de réduction d'impôt pour les enfants à charge et autres personnes à charge."
    },
    {
      nom: "Plafond Pinel",
      montant: 300000,
      description: "Montant maximum d'investissement pour bénéficier de la réduction d'impôt Pinel."
    },
    {
      nom: "Plafond CSE",
      montant: 3000,
      description: "Plafond annuel pour les avantages en nature et chèques cadeaux du CSE."
    }
  ],
  notes: "**Notes importantes :**\n\n- Les seuils sont revalorisés chaque année selon l'inflation\n- Le quotient familial permet de réduire l'impôt pour les familles\n- Certains plafonds peuvent être modifiés par la loi de finances\n\n> **Conseil :** Consultez un expert pour optimiser votre situation fiscale.",
  evolutions: "**Évolutions prévues :**\n\n- Revalorisation des seuils en 2025\n- Possible modification du plafond du quotient familial\n- Nouvelles mesures pour les familles monoparentales\n\n### Mesures annoncées :\n\n1. **Revalorisation automatique** des seuils selon l'inflation\n2. **Simplification** du calcul de l'impôt\n3. **Nouvelles déductions** pour la transition écologique",
  cta: {
    title: "Besoin d'optimiser votre fiscalité ?",
    description: "Nos experts vous accompagnent pour identifier les meilleures stratégies d'optimisation fiscale adaptées à votre situation.",
    primaryButton: "📊 Simulation personnalisée",
    secondaryButton: "🎯 Consultation gratuite"
  }
};

export default function TranchesBaremesPlafondsCMS() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/fiscalite/tranches-baremes-plafonds&type=cms');
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
          pagePath: '/fiscalite/tranches-baremes-plafonds',
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
            <h1 className="text-2xl font-bold text-[#112033]">Page Tranches, Barèmes et Plafonds</h1>
            <p className="text-[#686868]">Modifiez le contenu de la page Tranches, Barèmes et Plafonds</p>
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Image de fond (URL)</label>
            <input 
              value={content.hero.image} 
              onChange={(e) => handleChange('hero', 'image', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>
      </div>

      {/* Barème 2024 Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Barème 2024
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Tranches du barème</label>
            {content.bareme2024.map((tranche, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Seuil (€)</label>
                    <input 
                      type="number"
                      value={tranche.seuil} 
                      onChange={(e) => handleNestedArrayChange('bareme2024', 'bareme2024', index, { ...tranche, seuil: parseInt(e.target.value) || 0 })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Taux (%)</label>
                    <input 
                      type="number"
                      value={tranche.taux} 
                      onChange={(e) => handleNestedArrayChange('bareme2024', 'bareme2024', index, { ...tranche, taux: parseInt(e.target.value) || 0 })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Montant dû (€)</label>
                    <input 
                      type="number"
                      value={tranche.montant} 
                      onChange={(e) => handleNestedArrayChange('bareme2024', 'bareme2024', index, { ...tranche, montant: parseInt(e.target.value) || 0 })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <input 
                      value={tranche.description} 
                      onChange={(e) => handleNestedArrayChange('bareme2024', 'bareme2024', index, { ...tranche, description: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newBareme = content.bareme2024.filter((_, i) => i !== index);
                    handleChange('bareme2024', 'bareme2024', newBareme);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer cette tranche
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newBareme = [...content.bareme2024, { seuil: 0, taux: 0, montant: 0, description: "" }];
                handleChange('bareme2024', 'bareme2024', newBareme);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter une tranche
            </button>
          </div>
        </div>
      </div>

      {/* Plafonds Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Plafonds
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Plafonds et limites</label>
            {content.plafonds.map((plafond, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Nom du plafond</label>
                    <input 
                      value={plafond.nom} 
                      onChange={(e) => handleNestedArrayChange('plafonds', 'plafonds', index, { ...plafond, nom: e.target.value })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Montant (€)</label>
                    <input 
                      type="number"
                      value={plafond.montant} 
                      onChange={(e) => handleNestedArrayChange('plafonds', 'plafonds', index, { ...plafond, montant: parseInt(e.target.value) || 0 })} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#686868] mb-1">Description</label>
                    <textarea 
                      value={plafond.description} 
                      onChange={(e) => handleNestedArrayChange('plafonds', 'plafonds', index, { ...plafond, description: e.target.value })} 
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const newPlafonds = content.plafonds.filter((_, i) => i !== index);
                    handleChange('plafonds', 'plafonds', newPlafonds);
                  }}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Supprimer ce plafond
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                const newPlafonds = [...content.plafonds, { nom: "", montant: 0, description: "" }];
                handleChange('plafonds', 'plafonds', newPlafonds);
              }}
              className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
            >
              Ajouter un plafond
            </button>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Notes Importantes
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Notes importantes (Markdown supporté)</label>
            <textarea 
              value={content.notes} 
              onChange={(e) => handleChange('notes', 'notes', e.target.value)} 
              rows={8} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent font-mono text-sm"
              placeholder="**Gras** *italique* [lien](url) &gt; citation - liste"
            />
            <p className="text-xs text-[#686868] mt-1">
              Support Markdown : **gras**, *italique*, [lien](url), &gt; citation, - liste, `code`
            </p>
          </div>
        </div>
      </div>

      {/* Evolutions Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
          Section Évolutions Prévues
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Évolutions prévues (Markdown supporté)</label>
            <textarea 
              value={content.evolutions} 
              onChange={(e) => handleChange('evolutions', 'evolutions', e.target.value)} 
              rows={8} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent font-mono text-sm"
              placeholder="**Gras** *italique* [lien](url) &gt; citation - liste"
            />
            <p className="text-xs text-[#686868] mt-1">
              Support Markdown : **gras**, *italique*, [lien](url), &gt; citation, - liste, `code`
            </p>
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
