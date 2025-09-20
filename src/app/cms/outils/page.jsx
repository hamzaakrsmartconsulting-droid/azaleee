"use client";

import React, { useState, useEffect } from 'react';
import CMSAuthWrapper from '../../components/cms/CMSAuthWrapper';


  
const defaultContent = {
    hero: {
      title: "Outils financiers – Calculez et simulez vos investissements avec Azalee Wealth",
    paragraph: "Découvrez nos outils financiers pour calculer vos impôts, simuler vos investissements et optimiser votre patrimoine. Des calculateurs précis et des simulateurs interactifs pour vous aider dans vos décisions financières.",
    ctaButton: "Accéder aux outils gratuits",
    rightCard: {
      title: "Outils gratuits",
      icon: "/images/placements-responsive-header-icon-56586a.png",
      floatingCard: {
        value: "100%",
        label: "Gratuit"
      },
      services: [
        "Calculateur d'impôts précis et à jour",
        "Simulateur d'investissement interactif",
        "Calculs financiers divers et spécialisés",
        "Guides pratiques et conseils personnalisés"
      ]
    }
    },
    tools: {
      title: "Nos outils financiers",
          tools: [
            {
        title: "Calculateur d'impôts",
        description: "Calculez vos impôts en temps réel avec notre calculateur précis et à jour. Estimez vos droits d'impôt, optimisez votre fiscalité et planifiez vos investissements en toute sérénité."
      },
      {
        title: "Simulateur d'investissement",
        description: "Simulez vos investissements et projetez vos rendements futurs. Testez différents scénarios d'investissement et trouvez la stratégie qui correspond le mieux à vos objectifs."
      },
      {
        title: "Calculs financiers divers",
        description: "Accédez à une gamme complète d'outils de calcul financier : emprunts, épargne, retraite, assurance-vie et bien plus encore pour optimiser vos décisions financières."
      }
    ]
  },
  advantages: {
    title: "Avantages de nos outils",
    benefits: [
      "Calculs précis et à jour",
      "Interface intuitive",
      "Résultats instantanés",
      "100% gratuit"
    ],
    ctaButton: "Essayer maintenant"
  },
  toolsGrid: [
    {
      title: "Calculateur d'impôts",
      description: "Calculez vos impôts sur le revenu, optimisez votre fiscalité et planifiez vos investissements.",
      ctaButton: "Calculer maintenant →"
    },
    {
      title: "Simulateur d'investissement",
      description: "Simulez vos investissements et projetez vos rendements futurs avec différents scénarios.",
      ctaButton: "Simuler maintenant →"
    },
    {
      title: "Guides pratiques",
      description: "Accédez à nos guides pratiques et conseils pour optimiser vos décisions financières.",
      ctaButton: "Consulter les guides →"
    }
  ],
  additionalTools: {
    title: "Autres outils disponibles",
    tools: [
      {
        title: "Calculs financiers",
        description: "Emprunts, épargne, retraite"
      },
      {
        title: "Simulations générales",
        description: "Scénarios d'investissement"
      },
      {
        title: "Guides pratiques",
        description: "Conseils et astuces"
      },
      {
        title: "Autres outils",
        description: "Outils spécialisés"
      }
    ]
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
    </CMSAuthWrapper>
  );
};

export default function OutilsCMSPage() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/outils&type=cms');
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
          pagePath: '/outils',
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
    
  const handleLogout = () => {
    localStorage.removeItem('cms_token');
    sessionStorage.removeItem('cms_token');
    window.location.href = '/cms/login';
  };

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
    <CMSAuthWrapper>
      <div className="space-y-6 p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
            <div>
            <h1 className="text-2xl font-bold text-[#112033]">CMS Outils</h1>
            <p className="text-[#686868]">Gérez le contenu de la page outils financiers</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="bg-[#4EBBBD] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#3DA8AA]"
            >
              Sauvegarder
            </button>
            <button 
              onClick={handleLogout} 
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Déconnexion
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
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton CTA</label>
                    <input
              value={content.hero.ctaButton} 
              onChange={(e) => handleChange('hero', 'ctaButton', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>

          <div className="border-t pt-4">
            <h3 className="text-md font-medium text-[#112033] mb-3">Carte droite (Outils gratuits)</h3>
            <div className="space-y-3">
                  <div>
                <label className="block text-xs text-[#686868] mb-1">Titre</label>
                    <input
                  value={content.hero.rightCard.title} 
                  onChange={(e) => handleChange('hero', 'rightCard', { ...content.hero.rightCard, title: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
            </div>

            <div>
                <label className="block text-xs text-[#686868] mb-1">Icône</label>
                <ImageImporter
                  value={content.hero.rightCard.icon}
                  onChange={(value) => handleChange('hero', 'rightCard', { ...content.hero.rightCard, icon: value })}
                  placeholder="/images/placements-responsive-header-icon-56586a.png"
                  />
                </div>
              
                <div>
                <label className="block text-xs text-[#686868] mb-1">Carte flottante - Valeur</label>
                  <input
                  value={content.hero.rightCard.floatingCard.value} 
                  onChange={(e) => handleChange('hero', 'rightCard', { 
                    ...content.hero.rightCard, 
                    floatingCard: { ...content.hero.rightCard.floatingCard, value: e.target.value }
                  })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
              
                  <div>
                <label className="block text-xs text-[#686868] mb-1">Carte flottante - Label</label>
                    <input
                  value={content.hero.rightCard.floatingCard.label} 
                  onChange={(e) => handleChange('hero', 'rightCard', { 
                    ...content.hero.rightCard, 
                    floatingCard: { ...content.hero.rightCard.floatingCard, label: e.target.value }
                  })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
              
                  <div>
                <label className="block text-xs text-[#686868] mb-1">Services</label>
                {content.hero.rightCard.services.map((service, index) => (
                  <div key={index} className="mb-2">
                    <input
                      value={service} 
                      onChange={(e) => {
                        const newServices = [...content.hero.rightCard.services];
                        newServices[index] = e.target.value;
                        handleChange('hero', 'rightCard', { ...content.hero.rightCard, services: newServices });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                ))}
                      </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Outils</h2>
              <div className="space-y-4">
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
                  <input
                    value={content.tools.title}
              onChange={(e) => handleChange('tools', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Outils</label>
            {content.tools.tools.map((tool, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-[#112033] mb-3">Outil {index + 1}</h4>
                <div className="space-y-3">
                          <div>
                    <label className="block text-xs text-[#686868] mb-1">Titre</label>
                            <input
                      value={tool.title} 
                      onChange={(e) => handleArrayChange('tools', 'tools', index, 'title', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                          <div>
                    <label className="block text-xs text-[#686868] mb-1">Description</label>
                    <textarea
                      value={tool.description} 
                      onChange={(e) => handleArrayChange('tools', 'tools', index, 'description', e.target.value)} 
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

      {/* Advantages Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Avantages</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                                  <input
              value={content.advantages.title} 
              onChange={(e) => handleChange('advantages', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                                  />
                                </div>
          
                                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Avantages</label>
            {content.advantages.benefits.map((benefit, index) => (
              <div key={index} className="mb-2">
                                        <input
                  value={benefit} 
                  onChange={(e) => {
                    const newBenefits = [...content.advantages.benefits];
                    newBenefits[index] = e.target.value;
                    handleChange('advantages', 'benefits', newBenefits);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
                              </div>
                            ))}
                        </div>
                        
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton CTA</label>
            <input
              value={content.advantages.ctaButton} 
              onChange={(e) => handleChange('advantages', 'ctaButton', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
                </div>
              </div>
            </div>

      {/* Tools Grid Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Grille d'Outils</h2>
              <div className="space-y-4">
          {content.toolsGrid.map((tool, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-medium text-[#112033] mb-3">Outil {index + 1}</h4>
                  <div className="space-y-3">
                          <div>
                  <label className="block text-xs text-[#686868] mb-1">Titre</label>
                            <input
                    value={tool.title} 
                    onChange={(e) => {
                      const newToolsGrid = [...content.toolsGrid];
                      newToolsGrid[index] = { ...tool, title: e.target.value };
                      setContent(prev => ({ ...prev, toolsGrid: newToolsGrid }));
                    }} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                          <div>
                  <label className="block text-xs text-[#686868] mb-1">Description</label>
                  <textarea
                    value={tool.description} 
                    onChange={(e) => {
                      const newToolsGrid = [...content.toolsGrid];
                      newToolsGrid[index] = { ...tool, description: e.target.value };
                      setContent(prev => ({ ...prev, toolsGrid: newToolsGrid }));
                    }} 
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                          <div>
                  <label className="block text-xs text-[#686868] mb-1">Bouton CTA</label>
                            <input
                    value={tool.ctaButton} 
                    onChange={(e) => {
                      const newToolsGrid = [...content.toolsGrid];
                      newToolsGrid[index] = { ...tool, ctaButton: e.target.value };
                      setContent(prev => ({ ...prev, toolsGrid: newToolsGrid }));
                    }} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>

      {/* Additional Tools Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Outils Supplémentaires</h2>
              <div className="space-y-4">
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
                  <input
              value={content.additionalTools.title} 
              onChange={(e) => handleChange('additionalTools', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
          
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Outils</label>
            {content.additionalTools.tools.map((tool, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-[#112033] mb-3">Outil {index + 1}</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-[#686868] mb-1">Titre</label>
                    <input
                      value={tool.title} 
                      onChange={(e) => handleArrayChange('additionalTools', 'tools', index, 'title', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#686868] mb-1">Description</label>
                    <input
                      value={tool.description} 
                      onChange={(e) => handleArrayChange('additionalTools', 'tools', index, 'description', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                      </div>
                    </div>
                  ))}
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





