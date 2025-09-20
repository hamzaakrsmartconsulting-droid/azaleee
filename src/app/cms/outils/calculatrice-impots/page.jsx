"use client";
import React, { useState, useEffect } from "react";

export default function CalculatriceImpotsCMS() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  
  // Default content structure for the tax calculator
  const [content, setContent] = useState({
    pageTitle: "Calculatrice d'Impôts",
    metaDescription: "Calculez vos impôts en ligne avec notre simulateur fiscal gratuit et précis",
    hero: {
      title: "Calculatrice d'Impôts 2024",
      subtitle: "Calculez vos impôts en quelques clics",
      description: "Simulez votre imposition sur le revenu avec notre outil gratuit. Prenez en compte vos abattements et optimisez votre fiscalité."
    },
    interface: {
      titrePrincipal: "Calculatrice d'Impôts 2024",
      sousTitre: "Calculez vos impôts en quelques clics",
      boutonCalculer: "Calculer mes impôts",
      boutonReset: "Réinitialiser",
      resultatTitre: "Résultat de votre simulation"
    },
    parametresFiscaux: {
      tranches: [
        { seuil: 0, taux: 0, couleur: "#E5F3FF", description: "Revenus jusqu'à 11 294 €" },
        { seuil: 11294, taux: 11, couleur: "#B3E0FF", description: "Revenus de 11 295 € à 28 797 €" },
        { seuil: 28797, taux: 30, couleur: "#80CCFF", description: "Revenus de 28 798 € à 82 341 €" },
        { seuil: 82341, taux: 41, couleur: "#4DB8FF", description: "Revenus de 82 342 € à 177 106 €" },
        { seuil: 177106, taux: 45, couleur: "#1A94FF", description: "Revenus au-delà de 177 106 €" }
      ],
      abattements: {
        base: 10,
        personnesCharge: 1510,
        description: "Abattement de base et par personne à charge"
      }
    },
    champsSaisie: [
      {
        id: "revenusBruts",
        label: "Revenus bruts annuels",
        type: "number",
        placeholder: "50000",
        unite: "€",
        description: "Salaire, pensions, revenus fonciers, etc.",
        obligatoire: true,
        validation: { min: 0, max: 1000000 }
      },
      {
        id: "revenusFonciers",
        label: "Revenus fonciers",
        type: "number",
        placeholder: "0",
        unite: "€",
        description: "Loyers perçus (après charges)",
        obligatoire: false,
        validation: { min: 0, max: 500000 }
      },
      {
        id: "personnesCharge",
        label: "Personnes à charge",
        type: "number",
        placeholder: "0",
        unite: "",
        description: "Enfants, parents invalides, etc.",
        obligatoire: false,
        validation: { min: 0, max: 10 }
      }
    ],
    resultats: {
      titre: "Résultats de votre simulation",
      description: "Voici le détail de votre imposition calculée selon les barèmes 2024",
      sections: {
        revenus: "Revenus imposables",
        abattements: "Abattements appliqués",
        impots: "Impôts à payer",
        tauxEffectif: "Taux effectif d'imposition"
      }
    },
    informations: {
      titre: "Informations importantes",
      contenu: [
        "Cette calculatrice utilise les barèmes d'imposition 2024",
        "Les abattements sont calculés automatiquement selon votre situation",
        "Les résultats sont donnés à titre indicatif",
        "Consultez un professionnel pour des conseils personnalisés"
      ]
    }
  });

  const [formData, setFormData] = useState({});
  const [calculResult, setCalculResult] = useState(null);

  // Initialize form data
  useEffect(() => {
    const init = {};
    content.champsSaisie.forEach(c => {
      init[c.id] = c.type === 'checkbox' ? false : '';
    });
    setFormData(init);
  }, [content.champsSaisie]);

  // Load existing content from database
  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch(`/api/pages/content?path=/outils/calculatrice-impots&type=cms`);
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pagePath: '/outils/calculatrice-impots',
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

  const calculerImpots = () => {
    const revenusBruts = parseFloat(formData.revenusBruts) || 0;
    const revenusFonciers = parseFloat(formData.revenusFonciers) || 0;
    const personnesCharge = parseInt(formData.personnesCharge) || 0;
    
    const revenusImposables = revenusBruts + revenusFonciers;
    let abattements = content.parametresFiscaux.abattements.base + 
                     personnesCharge * content.parametresFiscaux.abattements.personnesCharge;
    
    const revenusNet = Math.max(0, revenusImposables - abattements);
    let impots = 0;
    const details = [];

    for (let i = 0; i < content.parametresFiscaux.tranches.length; i++) {
      const t = content.parametresFiscaux.tranches[i];
      const next = content.parametresFiscaux.tranches[i + 1];
      
      if (revenusNet > t.seuil) {
        const max = next ? next.seuil : revenusNet;
        const montant = Math.min(max - t.seuil, revenusNet - t.seuil);
        
        if (montant > 0) {
          const imp = (montant * t.taux) / 100;
          impots += imp;
          details.push({
            tranche: `${t.taux}%`,
            montant,
            impots: imp,
            couleur: t.couleur,
            description: t.description
          });
        }
      }
    }

    setCalculResult({
      revenusImposables,
      abattements,
      revenusApresAbattements: revenusNet,
      impots: Math.round(impots),
      detailsTranches: details,
      tauxEffectif: revenusNet > 0 ? Math.round((impots / revenusNet) * 10000) / 100 : 0
    });
  };

  const resetForm = () => {
    const init = {};
    content.champsSaisie.forEach(c => {
      init[c.id] = c.type === 'checkbox' ? false : '';
    });
    setFormData(init);
    setCalculResult(null);
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
            <p className="mt-2 text-lg text-gray-600">Gérez la configuration et le contenu de votre calculatrice fiscale</p>
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

            {/* Tax Parameters */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Paramètres fiscaux</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-2">Tranches d'imposition</h4>
                  <div className="space-y-3">
                    {content.parametresFiscaux.tranches.map((tranche, index) => (
                      <div key={index} className="grid grid-cols-4 gap-3 p-3 bg-gray-50 rounded-lg">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Seuil (€)</label>
                          <input
                            type="number"
                            value={tranche.seuil}
                            onChange={(e) => updateArrayItem('parametresFiscaux.tranches', index, 'seuil', parseInt(e.target.value))}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Taux (%)</label>
                          <input
                            type="number"
                            value={tranche.taux}
                            onChange={(e) => updateArrayItem('parametresFiscaux.tranches', index, 'taux', parseInt(e.target.value))}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Couleur</label>
                          <input
                            type="color"
                            value={tranche.couleur}
                            onChange={(e) => updateArrayItem('parametresFiscaux.tranches', index, 'couleur', e.target.value)}
                            className="w-full h-8 border border-gray-300 rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Description</label>
                          <input
                            type="text"
                            value={tranche.description}
                            onChange={(e) => updateArrayItem('parametresFiscaux.tranches', index, 'description', e.target.value)}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-2">Abattements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Abattement de base (€)</label>
                      <input
                        type="number"
                        value={content.parametresFiscaux.abattements.base}
                        onChange={(e) => updateContent('parametresFiscaux.abattements.base', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Par personne à charge (€)</label>
                      <input
                        type="number"
                        value={content.parametresFiscaux.abattements.personnesCharge}
                        onChange={(e) => updateContent('parametresFiscaux.abattements.personnesCharge', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Fields */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Champs de saisie</h3>
              <div className="space-y-4">
                {content.champsSaisie.map((champ, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                        <input
                          type="text"
                          value={champ.label}
                          onChange={(e) => updateArrayItem('champsSaisie', index, 'label', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <select
                          value={champ.type}
                          onChange={(e) => updateArrayItem('champsSaisie', index, 'type', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        >
                          <option value="number">Nombre</option>
                          <option value="text">Texte</option>
                          <option value="checkbox">Case à cocher</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Placeholder</label>
                        <input
                          type="text"
                          value={champ.placeholder}
                          onChange={(e) => updateArrayItem('champsSaisie', index, 'placeholder', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Unité</label>
                        <input
                          type="text"
                          value={champ.unite}
                          onChange={(e) => updateArrayItem('champsSaisie', index, 'unite', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                          type="text"
                          value={champ.description}
                          onChange={(e) => updateArrayItem('champsSaisie', index, 'description', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
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

      {/* Calculator Interface */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interface de la calculatrice</h2>
        
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {content.champsSaisie.map(champ => (
            <div key={champ.id} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {champ.label}
                {champ.obligatoire && <span className="text-red-500 ml-1">*</span>}
              </label>
              <div className="relative">
                <input
                  type={champ.type}
                  value={formData[champ.id] || ''}
                  onChange={(e) => setFormData({...formData, [champ.id]: e.target.value})}
                  placeholder={champ.placeholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg pr-12"
                />
                {champ.unite && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    {champ.unite}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{champ.description}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={calculerImpots}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {content.interface.boutonCalculer}
          </button>
          <button
            onClick={resetForm}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            {content.interface.boutonReset}
          </button>
        </div>
      </div>

      {/* Results */}
      {calculResult && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{content.interface.resultatTitre}</h2>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {calculResult.revenusImposables.toLocaleString()} €
              </div>
              <div className="text-sm text-gray-600">{content.resultats.sections.revenus}</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {calculResult.abattements.toLocaleString()} €
              </div>
              <div className="text-sm text-gray-600">{content.resultats.sections.abattements}</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">
                {calculResult.impots.toLocaleString()} €
              </div>
              <div className="text-sm text-gray-600">{content.resultats.sections.impots}</div>
            </div>
          </div>

          {/* Tax Brackets Details */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Détail par tranches</h3>
            {calculResult.detailsTranches.map((t, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{backgroundColor: t.couleur}}
                  ></div>
                  <span className="font-medium">{t.tranche}</span>
                  <span className="text-sm text-gray-600">({t.description})</span>
                </div>
                <div className="text-right">
                  <div className="font-medium">{t.montant.toLocaleString()} €</div>
                  <div className="text-sm text-gray-600">{t.impots.toLocaleString()} €</div>
                </div>
              </div>
            ))}
          </div>

          {/* Effective Tax Rate */}
          <div className="text-center p-4 bg-gray-50 rounded-lg mt-6">
            <div className="text-lg font-medium text-gray-900">
              {content.resultats.sections.tauxEffectif}
            </div>
            <div className="text-3xl font-bold text-blue-600">
              {calculResult.tauxEffectif}%
            </div>
          </div>
        </div>
      )}

      {/* Information Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{content.informations.titre}</h2>
        <ul className="space-y-2">
          {content.informations.contenu.map((info, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-gray-700">{info}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


