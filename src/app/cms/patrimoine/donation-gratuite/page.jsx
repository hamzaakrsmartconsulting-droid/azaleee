"use client";

import React, { useState, useEffect } from 'react';



const defaultContent = {
    hero: {
    title: "Donation gratuite",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    primaryButton: "Simuler ma donation",
    secondaryButton: "Consulter un notaire",
    benefits: [
      {
        title: "Lorem ipsum",
        icon: "🎁",
        value: "€100K",
        description: "Dolor sit amet"
      },
      {
        title: "Consectetur",
        icon: "💰",
        value: "35%",
        description: "Adipiscing elit"
      },
      {
        title: "Sed eiusmod",
        icon: "⏰",
        value: "15 ans",
        description: "Tempor incididunt"
      }
    ]
  },
  chart: {
    title: "Indicateurs de donation gratuite",
    data: [
      { label: "Abattement disponible", value: "€100,000" },
      { label: "Taux d'imposition", value: "5-45%" },
      { label: "Économies moyennes", value: "€35,000" },
      { label: "Durée de conservation", value: "15 ans" },
      { label: "Fréquence autorisée", value: "Tous les 15 ans" }
    ],
    chartImage: "/images/variation-chart-image-944f04.png"
  },
  donationTypes: {
    title: "Lorem ipsum dolor sit amet",
    process: {
      title: "Lorem ipsum dolor sit amet",
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
      ]
    },
    calculator: {
      title: "Lorem ipsum dolor sit",
      fields: [
        { label: "Lorem ipsum", placeholder: "€100,000" },
        { label: "Dolor sit amet", options: ["Lorem ipsum dolor", "Consectetur adipiscing", "Sed do eiusmod", "Ut labore et dolore"] },
        { label: "Consectetur elit", placeholder: "25" }
      ],
      button: "Lorem ipsum dolor sit",
      result: {
        label: "Lorem ipsum :",
        value: "€35,000",
        suffix: "d'économies"
      }
    }
  },
  taxBenefits: {
    title: "Lorem ipsum dolor sit amet",
    benefits: [
      {
        title: "Lorem ipsum",
        icon: "🎁",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      },
      {
        title: "Dolor sit amet",
        icon: "💰",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      },
      {
        title: "Consectetur elit",
        icon: "⏰",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      },
      {
        title: "Sed eiusmod",
        icon: "📋",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
      }
    ]
  },
  legalRequirements: {
    title: "Lorem ipsum dolor sit amet",
    requirements: [
      {
        title: "Lorem ipsum dolor sit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title: "Consectetur adipiscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title: "Sed do eiusmod tempor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ],
    checklist: {
      title: "Lorem ipsum dolor sit",
      items: [
        { label: "Lorem ipsum", status: "Obligatoire", percentage: 100 },
        { label: "Dolor sit amet", status: "Recommandé", percentage: 85 },
        { label: "Consectetur elit", status: "Optionnel", percentage: 60 }
      ]
    }
    },
    cta: {
    title: "Lorem ipsum dolor sit amet ?",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "Simuler ma donation"
  }
};

// Composant d'import d'image en base64
const ImageImporter = ({ value, onChange, placeholder, label }) => {
  const [showImporter, setShowImporter] = useState(false);
  const [base64Input, setBase64Input] = useState('');

  const handleBase64Import = () => {
    if (base64Input.trim()) {
      if (base64Input.startsWith('data:image/')) {
        onChange(base64Input);
        setShowImporter(false);
        setBase64Input('');
      } else {
        try {
          onChange(base64Input);
          setShowImporter(false);
          setBase64Input('');
        } catch (error) {
          alert('Format d\'image invalide. Utilisez un chemin d\'image ou une image base64.');
        }
      }
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange(e.target.result);
        setShowImporter(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={() => setShowImporter(!showImporter)}
          className="px-3 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors"
        >
          📁 Importer
        </button>
      </div>
      
      {value && (
        <img 
          src={value} 
          alt="Aperçu" 
          className="w-16 h-16 object-cover rounded border"
          onError={(e) => e.target.style.display = 'none'}
        />
      )}

      {showImporter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Importer une image</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#686868] mb-2">
                📁 Choisir un fichier
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-[#686868] mb-2">
                📋 Coller une image base64
              </label>
              <textarea
                value={base64Input}
                onChange={(e) => setBase64Input(e.target.value)}
                placeholder="Collez ici le code base64 de votre image..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono text-xs"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleBase64Import}
                className="flex-1 px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA]"
              >
                Importer
              </button>
              <button
                onClick={() => setShowImporter(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Annuler
              </button>
            </div>
            
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600">
                <strong>💡 Comment obtenir une image base64 :</strong><br/>
                1. Ouvrez votre image dans un éditeur<br/>
                2. Copiez le code base64 généré<br/>
                3. Collez-le dans le champ ci-dessus
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function DonationGratuiteCMSPage() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/patrimoine/donation-gratuite&type=cms');
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

  const handleArrayChange = (section, arrayField, idx, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayField]: prev[section][arrayField].map((item, index) => 
          index === idx ? { ...item, [field]: value } : item
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
          pagePath: '/patrimoine/donation-gratuite',
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

  if (!content || !content.hero) {
  return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4EBBBD] mx-auto mb-4"></div>
          <p className="text-[#686868]">Chargement du CMS...</p>
        </div>
      </div>
    );
  }
              
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#112033]">CMS Donation Gratuite</h1>
            <p className="text-[#686868]">Gérez le contenu de la page donation gratuite</p>
          </div>
          <div className="flex items-center gap-3">
                <button
              onClick={handleSave}
              className="bg-[#4EBBBD] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#3DA8AA]"
                >
              Sauvegarder
                </button>
                </div>
      </div>

        {/* Guide des images */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <h3 className="text-sm font-medium text-blue-800 mb-2">📸 Guide de gestion des images</h3>
          <div className="text-xs text-blue-700 space-y-1">
            <p>• <strong>Format recommandé :</strong> JPG, PNG, WebP (max 2MB)</p>
            <p>• <strong>Dossier :</strong> Placez vos images dans <code className="bg-blue-100 px-1 rounded">/public/images/</code></p>
            <p>• <strong>Exemple :</strong> <code className="bg-blue-100 px-1 rounded">/images/ma-photo.jpg</code></p>
            <p>• <strong>Optimisation :</strong> Utilisez des images de 800x600px pour de meilleures performances</p>
            <p>• <strong>Nouveau :</strong> Cliquez sur "📁 Importer" pour uploader des fichiers ou coller du base64</p>
                </div>
              </div>
            </div>

            {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Hero</h2>
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Paragraphe principal</label>
                  <textarea
              value={content.hero.paragraph} 
              onChange={(e) => handleChange('hero', 'paragraph', e.target.value)} 
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
          
                  <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton secondaire</label>
                    <input
              value={content.hero.secondaryButton} 
              onChange={(e) => handleChange('hero', 'secondaryButton', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
            </div>

          <div className="border-t pt-4">
            <h3 className="text-md font-medium text-[#112033] mb-3">Cartes d'avantages</h3>
            {content.hero.benefits.map((benefit, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-[#112033] mb-3">Avantage {index + 1}</h4>
                <div className="space-y-3">
            <div>
                    <label className="block text-xs text-[#686868] mb-1">Titre</label>
                  <input
                      value={benefit.title} 
                      onChange={(e) => handleArrayChange('hero', 'benefits', index, 'title', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                <div>
                    <label className="block text-xs text-[#686868] mb-1">Icône</label>
                  <input
                      value={benefit.icon} 
                      onChange={(e) => handleArrayChange('hero', 'benefits', index, 'icon', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                <div>
                    <label className="block text-xs text-[#686868] mb-1">Valeur</label>
                            <input
                      value={benefit.value} 
                      onChange={(e) => handleArrayChange('hero', 'benefits', index, 'value', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                          <div>
                    <label className="block text-xs text-[#686868] mb-1">Description</label>
                            <input
                      value={benefit.description} 
                      onChange={(e) => handleArrayChange('hero', 'benefits', index, 'description', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                        </div>
                              </div>
                            ))}
                </div>
              </div>
            </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Graphique</h2>
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Image du graphique</label>
            <ImageImporter
              value={content.chart.chartImage}
              onChange={(value) => handleChange('chart', 'chartImage', value)}
              placeholder="/images/variation-chart-image-944f04.png"
                  />
                </div>
                
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Données du graphique</label>
            {content.chart.data.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3 mb-3">
                <h4 className="text-sm font-medium text-[#112033] mb-2">Donnée {index + 1}</h4>
                <div className="space-y-2">
                          <div>
                    <label className="block text-xs text-[#686868] mb-1">Label</label>
                            <input
                      value={item.label} 
                      onChange={(e) => handleArrayChange('chart', 'data', index, 'label', e.target.value)} 
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                          <div>
                    <label className="block text-xs text-[#686868] mb-1">Valeur</label>
                            <input
                      value={item.value} 
                      onChange={(e) => handleArrayChange('chart', 'data', index, 'value', e.target.value)} 
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                          </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

      {/* Donation Types Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Types de Donation</h2>
              <div className="space-y-4">
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
                  <input
              value={content.donationTypes.title} 
              onChange={(e) => handleChange('donationTypes', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
          
          <div className="border-t pt-4">
            <h3 className="text-md font-medium text-[#112033] mb-3">Processus</h3>
            <div className="space-y-3">
                <div>
                <label className="block text-xs text-[#686868] mb-1">Titre du processus</label>
                  <input
                  value={content.donationTypes.process.title} 
                  onChange={(e) => handleChange('donationTypes', 'process', { ...content.donationTypes.process, title: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                
                <div>
                <label className="block text-xs text-[#686868] mb-1">Étapes du processus</label>
                {content.donationTypes.process.steps.map((step, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 mb-3">
                    <h4 className="text-sm font-medium text-[#112033] mb-2">Étape {index + 1}</h4>
                    <div className="space-y-2">
                          <div>
                        <label className="block text-xs text-[#686868] mb-1">Numéro</label>
                            <input
                              value={step.number}
                          onChange={(e) => handleArrayChange('donationTypes', 'process', 'steps', index, 'number', e.target.value)} 
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                          <div>
                        <label className="block text-xs text-[#686868] mb-1">Titre</label>
                            <input
                            value={step.title}
                          onChange={(e) => handleArrayChange('donationTypes', 'process', 'steps', index, 'title', e.target.value)} 
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                          />
                        </div>
                      <div>
                        <label className="block text-xs text-[#686868] mb-1">Description</label>
                        <textarea
                            value={step.description}
                          onChange={(e) => handleArrayChange('donationTypes', 'process', 'steps', index, 'description', e.target.value)} 
                          rows={3}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                          />
                        </div>
                    </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

          <div className="border-t pt-4">
            <h3 className="text-md font-medium text-[#112033] mb-3">Calculateur</h3>
            <div className="space-y-3">
            <div>
                <label className="block text-xs text-[#686868] mb-1">Titre du calculateur</label>
                  <input
                  value={content.donationTypes.calculator.title} 
                  onChange={(e) => handleChange('donationTypes', 'calculator', { ...content.donationTypes.calculator, title: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
              
                <div>
                <label className="block text-xs text-[#686868] mb-1">Champs du calculateur</label>
                {content.donationTypes.calculator.fields.map((field, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 mb-3">
                    <h4 className="text-sm font-medium text-[#112033] mb-2">Champ {index + 1}</h4>
                    <div className="space-y-2">
                      <div>
                        <label className="block text-xs text-[#686868] mb-1">Label</label>
                  <input
                          value={field.label} 
                          onChange={(e) => handleArrayChange('donationTypes', 'calculator', 'fields', index, 'label', e.target.value)} 
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                <div>
                        <label className="block text-xs text-[#686868] mb-1">Placeholder</label>
                        <input
                          value={field.placeholder} 
                          onChange={(e) => handleArrayChange('donationTypes', 'calculator', 'fields', index, 'placeholder', e.target.value)} 
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                      </div>
                  </div>
                </div>
                ))}
              </div>
              
              <div>
                <label className="block text-xs text-[#686868] mb-1">Bouton du calculateur</label>
                <input
                  value={content.donationTypes.calculator.button} 
                  onChange={(e) => handleChange('donationTypes', 'calculator', { ...content.donationTypes.calculator, button: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
            </div>

            <div>
                <label className="block text-xs text-[#686868] mb-1">Résultat du calculateur</label>
                <div className="space-y-2">
                <div>
                    <label className="block text-xs text-[#686868] mb-1">Label du résultat</label>
                  <input
                      value={content.donationTypes.calculator.result.label} 
                      onChange={(e) => handleChange('donationTypes', 'calculator', { 
                        ...content.donationTypes.calculator, 
                        result: { ...content.donationTypes.calculator.result, label: e.target.value }
                      })} 
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                <div>
                    <label className="block text-xs text-[#686868] mb-1">Valeur du résultat</label>
                  <input
                      value={content.donationTypes.calculator.result.value} 
                      onChange={(e) => handleChange('donationTypes', 'calculator', { 
                        ...content.donationTypes.calculator, 
                        result: { ...content.donationTypes.calculator.result, value: e.target.value }
                      })} 
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                <div>
                    <label className="block text-xs text-[#686868] mb-1">Suffixe du résultat</label>
                        <input
                      value={content.donationTypes.calculator.result.suffix} 
                      onChange={(e) => handleChange('donationTypes', 'calculator', { 
                        ...content.donationTypes.calculator, 
                        result: { ...content.donationTypes.calculator.result, suffix: e.target.value }
                      })} 
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                      </div>
                </div>
              </div>
                  </div>
                </div>
              </div>
            </div>

      {/* Tax Benefits Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Avantages Fiscaux</h2>
              <div className="space-y-4">
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
                  <input
              value={content.taxBenefits.title} 
              onChange={(e) => handleChange('taxBenefits', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
          
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Avantages fiscaux</label>
            {content.taxBenefits.benefits.map((benefit, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-[#112033] mb-3">Avantage {index + 1}</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-[#686868] mb-1">Titre</label>
                  <input
                      value={benefit.title} 
                      onChange={(e) => handleArrayChange('taxBenefits', 'benefits', index, 'title', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                  <div>
                    <label className="block text-xs text-[#686868] mb-1">Icône</label>
                    <input
                      value={benefit.icon} 
                      onChange={(e) => handleArrayChange('taxBenefits', 'benefits', index, 'icon', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#686868] mb-1">Description</label>
                    <textarea
                      value={benefit.description} 
                      onChange={(e) => handleArrayChange('taxBenefits', 'benefits', index, 'description', e.target.value)} 
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

      {/* Legal Requirements Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Exigences Légales</h2>
          <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
            <input
              value={content.legalRequirements.title} 
              onChange={(e) => handleChange('legalRequirements', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
                </div>
          
                  <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Exigences légales</label>
            {content.legalRequirements.requirements.map((requirement, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-[#112033] mb-3">Exigence {index + 1}</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-[#686868] mb-1">Titre</label>
                    <input
                      value={requirement.title} 
                      onChange={(e) => handleArrayChange('legalRequirements', 'requirements', index, 'title', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#686868] mb-1">Description</label>
                    <textarea
                      value={requirement.description} 
                      onChange={(e) => handleArrayChange('legalRequirements', 'requirements', index, 'description', e.target.value)} 
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <h3 className="text-md font-medium text-[#112033] mb-3">Liste de vérification</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-[#686868] mb-1">Titre de la liste</label>
                <input
                  value={content.legalRequirements.checklist.title} 
                  onChange={(e) => handleChange('legalRequirements', 'checklist', { ...content.legalRequirements.checklist, title: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
        </div>

              <div>
                <label className="block text-xs text-[#686868] mb-1">Éléments de la liste</label>
                {content.legalRequirements.checklist.items.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 mb-3">
                    <h4 className="text-sm font-medium text-[#112033] mb-2">Élément {index + 1}</h4>
                    <div className="space-y-2">
                      <div>
                        <label className="block text-xs text-[#686868] mb-1">Label</label>
                        <input
                          value={item.label} 
                          onChange={(e) => handleArrayChange('legalRequirements', 'checklist', 'items', index, 'label', e.target.value)} 
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
              </div>
                      <div>
                        <label className="block text-xs text-[#686868] mb-1">Statut</label>
                        <input
                          value={item.status} 
                          onChange={(e) => handleArrayChange('legalRequirements', 'checklist', 'items', index, 'status', e.target.value)} 
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
          </div>
                  <div>
                        <label className="block text-xs text-[#686868] mb-1">Pourcentage</label>
                        <input
                          value={item.percentage} 
                          onChange={(e) => handleArrayChange('legalRequirements', 'checklist', 'items', index, 'percentage', e.target.value)} 
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                  </div>
                </div>
              </div>
            ))}
              </div>
            </div>
          </div>
          </div>
        </div>

      {/* CTA Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Call-to-Action</h2>
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
        <div className="fixed bottom-6 right-6 bg-[#4EBBBD] text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Contenu sauvegardé avec succès !
        </div>
      )}
    </div>
  );
}





