"use client";
import React, { useState, useEffect } from "react";

export default function CalculsFinanciersCMS() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  
  const [content, setContent] = useState({
    pageTitle: "Calculs Financiers",
    metaDescription: "Outils de calcul financier pour capitalisation, amortissement et analyse ROI",
    hero: {
      title: "Calculs financiers divers",
      subtitle: "Simulez vos investissements et prêts avec nos outils financiers",
      description: "Utilisez nos calculateurs pour planifier vos investissements, évaluer vos prêts et analyser la rentabilité de vos projets.",
      ctaPrimary: "Commencer la simulation",
      ctaSecondary: "En savoir plus"
    },
    calculator: {
      title: "Calculateur financier",
      tabs: [
        { id: "capitalisation", label: "Capitalisation composée", description: "Calculez la valeur future de vos investissements" },
        { id: "amortissement", label: "Amortissement de prêt", description: "Simulez le remboursement de vos emprunts" },
        { id: "roi", label: "Analyse ROI", description: "Évaluez la rentabilité de vos investissements" }
      ]
    },
    capitalisation: {
      title: "Capitalisation composée",
      parameters: {
        montantInitial: { label: "Montant initial", description: "Capital de départ", placeholder: "10000", unite: "€" },
        tauxAnnuel: { label: "Taux annuel (%)", description: "Rendement annuel", placeholder: "3.00", unite: "%" },
        duree: { label: "Durée (années)", description: "Horizon de placement", placeholder: "5", unite: "ans" },
        capitalisation: { label: "Capitalisation", description: "Périodicité des intérêts composés", placeholder: "12", unite: "x/an" },
        versementPeriodique: { label: "Versement périodique", description: "Apport régulier", placeholder: "200", unite: "€" }
      },
      results: {
        title: "Résultats de votre simulation",
        sections: {
          montantFinal: "Montant final",
          interetsGeneres: "Intérêts générés",
          capitalInitial: "Capital initial",
          versements: "Versements totaux",
          cagr: "CAGR"
        }
      }
    },
    methodology: {
      title: "Détails et méthodologie",
      description: "Comprendre les calculs et formules utilisées",
      content: [
        "La capitalisation composée utilise la formule : VF = VP × (1 + r)^n + PMT × [(1 + r)^n - 1] / r",
        "L'amortissement de prêt calcule les échéances selon le système français",
        "Le ROI se calcule comme : (Gains - Coûts) / Coûts × 100"
      ]
    },
    faq: {
      title: "Questions fréquentes",
      questions: [
        {
          question: "Comment fonctionne la capitalisation composée ?",
          answer: "La capitalisation composée permet à vos intérêts de générer à leur tour des intérêts."
        },
        {
          question: "Quelle est la différence entre taux nominal et taux effectif ?",
          answer: "Le taux nominal est le taux annuel affiché, le taux effectif prend en compte la fréquence de capitalisation."
        }
      ]
    },
    actions: {
      reset: "Réinitialiser",
      export: "Exporter (PDF)",
      start: "Commencer",
      learnMore: "En savoir plus"
    }
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch(`/api/pages/content?path=/outils/calculs-financiers&type=cms`);
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.content) {
          setContent(JSON.parse(data.content.content));
        }
      }
    } catch (error) {
      console.log('No existing content found, using defaults');
    }
  };

  const saveContent = async () => {
    setIsSaving(true);
    setSaveMessage("");
    
    try {
      const response = await fetch('/api/pages/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagePath: '/outils/calculs-financiers',
          pageType: 'cms',
          content: JSON.stringify(content),
          metadata: {
            title: content.pageTitle,
            description: content.metaDescription,
            lastModified: new Date().toISOString()
          }
        })
      });

      if (response.ok) {
        setSaveMessage("Contenu sauvegardé avec succès !");
        setIsEditing(false);
        setTimeout(() => setSaveMessage(""), 3000);
      } else {
        setSaveMessage("Erreur lors de la sauvegarde");
      }
    } catch (error) {
      setSaveMessage("Erreur de connexion");
      console.error('Save error:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const updateContent = (path, value) => {
    const keys = path.split('.');
    const newContent = { ...content };
    let current = newContent;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    
    setContent(newContent);
  };

  const updateArrayItem = (path, index, field, value) => {
    const keys = path.split('.');
    const newContent = { ...content };
    let current = newContent;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[index][field] = value;
    
    setContent(newContent);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{content.pageTitle}</h1>
            <p className="mt-2 text-lg text-gray-600">Gérez la configuration de vos outils de calcul financier</p>
          </div>
          <div className="flex gap-3">
            {isEditing ? (
              <>
                <button
                  onClick={saveContent}
                  disabled={isSaving}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                >
                  {isSaving ? "Sauvegarde..." : "Sauvegarder"}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                >
                  Annuler
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Modifier le contenu
              </button>
            )}
          </div>
        </div>
        {saveMessage && (
          <div className={`mt-4 p-3 rounded-lg ${
            saveMessage.includes('succès') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {saveMessage}
          </div>
        )}
      </div>

      {/* Content Editor */}
      {isEditing && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Éditeur de contenu</h2>
          
          {/* Page Settings */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Paramètres de la page</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Titre de la page</label>
                  <input
                    type="text"
                    value={content.pageTitle}
                    onChange={(e) => updateContent('pageTitle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description meta</label>
                  <input
                    type="text"
                    value={content.metaDescription}
                    onChange={(e) => updateContent('metaDescription', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Section Hero</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Titre principal</label>
                  <input
                    type="text"
                    value={content.hero.title}
                    onChange={(e) => updateContent('hero.title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sous-titre</label>
                  <input
                    type="text"
                    value={content.hero.subtitle}
                    onChange={(e) => updateContent('hero.subtitle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={content.hero.description}
                    onChange={(e) => updateContent('hero.description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Calculator Tabs */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Onglets du calculateur</h3>
              <div className="space-y-4">
                {content.calculator.tabs.map((tab, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Label</label>
                        <input
                          type="text"
                          value={tab.label}
                          onChange={(e) => updateArrayItem('calculator.tabs', index, 'label', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Description</label>
                        <input
                          type="text"
                          value={tab.description}
                          onChange={(e) => updateArrayItem('calculator.tabs', index, 'description', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capitalisation Parameters */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Paramètres - Capitalisation</h3>
              <div className="space-y-4">
                {Object.entries(content.capitalisation.parameters).map(([key, param]) => (
                  <div key={key} className="p-3 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Label</label>
                        <input
                          type="text"
                          value={param.label}
                          onChange={(e) => updateContent(`capitalisation.parameters.${key}.label`, e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Description</label>
                        <input
                          type="text"
                          value={param.description}
                          onChange={(e) => updateContent(`capitalisation.parameters.${key}.description`, e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Aperçu du contenu</h2>
        
        {/* Hero Preview */}
        <div className="mb-6 p-4 bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] rounded-lg">
          <h3 className="text-2xl font-bold text-[#112033] mb-2">{content.hero.title}</h3>
          <p className="text-lg text-[#686868] mb-2">{content.hero.subtitle}</p>
          <p className="text-[#686868] mb-4">{content.hero.description}</p>
        </div>

        {/* Calculator Tabs Preview */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">{content.calculator.title}</h3>
          <div className="flex gap-2 p-2 bg-[#F2F2F2] rounded-lg">
            {content.calculator.tabs.map((tab, index) => (
              <div key={index} className="px-4 py-2 bg-white text-[#112033] rounded-lg text-sm shadow-sm border border-[#E5E7EB]">
                {tab.label}
              </div>
            ))}
          </div>
        </div>

        {/* Parameters Preview */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Paramètres - Capitalisation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(content.capitalisation.parameters).map(([key, param]) => (
              <div key={key} className="p-3 bg-gray-50 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">{param.label}</label>
                <p className="text-xs text-gray-500 mb-2">{param.description}</p>
                <input
                  type="text"
                  placeholder={param.placeholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  disabled
                />
                {param.unite && <span className="text-sm text-gray-500 ml-2">{param.unite}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
