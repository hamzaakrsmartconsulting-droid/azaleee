"use client";

import React, { useState, useEffect } from 'react';
import CMSAuthWrapper from '../../components/cms/CMSAuthWrapper';



const defaultContent = {
    hero: {
      title: "Préparer sa retraite avec Azalee Wealth",
      subtitle: "PX2 - FR0003500008 - Euronext Paris",
    marketIndicator: "Cours CAC 40",
    backgroundImage: "/images/retraite-hero-image.png"
    },
    marketData: {
      date: "Données au 19/07/2025",
    cards: [
      {
        title: "Cours",
        value: "1244.6699"
      },
      {
        title: "Variation depuis le 1er janvier",
        value: "2.96 %",
        highlight: true
      },
      {
        title: "+ haut depuis le 1er janvier",
        value: "5767.8799"
      },
      {
        title: "+ bas depuis le 1er janvier",
        value: "6895663.7598"
      }
    ]
  },
  cac40: {
      title: "Le cours du cac 40",
    backgroundImage: "/images/cac40-chart-image-4f18b8.png"
  },
  retirementPlanning: {
    title: "Préparer sa retraite",
    content: [
      "Nos experts en gestion de patrimoine Selexium vous démontreront que bien préparer sa retraite quitté la vie active. Ce moment de la vie est important et beaucoup d'entre nous l'attendent avec impatience. Pouvoir profiter pleinement d'un temps de liberté, de repos, parfois synonyme de voyages ou de nouvelles expériences, c'est un idéal qui en fait rêver plus d'un ! Mais pour cela, il faut l'efficacement.",
      "En effet, tout ne tourne pas toujours comme on l'avait imaginé. Il arrive que le départ en retraite entraîne une diminution du confort de vie que vous pouviez avoir en travaillant, causé notamment par des revenus revus à la baisse. De plus, selon l'évolution de votre santé, vous pouvez être amené à générer des dépenses non prévues."
    ]
  },
  retirementQuote: {
    title: "À savoir",
    content: "Avec l'âge, la perte d'autonomie ou les frais de santé peuvent peser lourdement sur votre budget. Pour vivre votre retraite selon vos attentes, il est essentiel de prévoir dès aujourd'hui des solutions d'investissement adaptées.",
    image: "/images/placements-retirement-quote-image-56586a.png"
  },
  retirementContinuation: {
    content: [
      "pour assurer son niveau de vie après avoir l'anticiper",
      "Anticiper sa future retraite vous permettra de vous constituer des compléments de revenus le moment venu, tout en bénéficiant d'avantages fiscaux pendant que vous travaillez. Par ailleurs, ces capitaux épargnés pourront également être versés à vos proches en cas de décès : c'est le cas par exemple, de l'assurance-vie.",
      "D'autres dispositifs comme le plan d'épargne populaire (PERP, un produit d'épargne à long terme) ou la Loi Madelin, pour les travailleurs non-salariés, pourront, selon votre profil, vous permettre de générer des compléments de revenus ou de pallier les carences des régimes généraux. Pour pouvoir profiter de sa retraite de façon épanouie sans se soucier de ses fins de mois,",
      "nous vous proposons des solutions pour vous constituer, à long terme, un complément de retraite adéquat à vos besoins."
    ],
    ctaButton: "En savoir plus"
  },
  heritage: {
    title: "Transmettre son patrimoine",
    content: [
      "La transmission de patrimoine est une étape clé qu'il convient d'anticiper pour assurer la protection de vos proches et préserver l'harmonie familiale.",
      "Souvent perçue comme délicate, cette démarche permet pourtant de sécuriser l'avenir de vos enfants, de votre conjoint ou de vos héritiers, tout en limitant les risques de conflits liés à la succession.",
      "Nos experts vous accompagnent pour structurer la transmission de vos biens — qu'il s'agisse de donations, d'investissements immobiliers ou de dispositifs successoraux adaptés — afin d'alléger votre fiscalité et d'optimiser la gestion de votre héritage.",
      "Investir dans l'immobilier reste une solution efficace pour transmettre un patrimoine tangible, générer des revenus ou valoriser un bien à la revente.",
      "En complément, la prévoyance retraite s'intègre dans cette logique de transmission sécurisée, offrant des avantages fiscaux et une protection accrue pour votre entourage.",
      "Nous vous aidons à anticiper, organiser et formaliser votre transmission patrimoniale, pour garantir la pérennité de vos volontés et la sécurité de vos proches."
    ],
    ctaButton: "En savoir plus"
  },
  heritageQuote: {
    title: "Bon à savoir",
    content: [
      "Les solutions que nous vous recommandons — telles que l'investissement immobilier ou la préparation de la retraite — sont pensées pour vous aider à organiser efficacement la transmission de votre patrimoine.",
      "Notre objectif : construire avec vous une stratégie sur-mesure, cohérente avec votre situation personnelle et patrimoniale, afin de sécuriser vos biens et d'assurer une transmission optimisée et conforme à vos souhaits."
    ],
    image: "/images/placements-heritage-quote-image-56586a.png"
  },
  protectLoved: {
    title: "Protéger ses proches",
    content: [
      "Assurer la sécurité financière de vos proches face aux aléas de la vie est une démarche essentielle.",
      "Accidents, imprévus de santé ou événements exceptionnels peuvent survenir à tout moment, souvent sans préparation. Les dispositifs classiques de protection sociale restent insuffisants pour couvrir l'ensemble des besoins.",
      "Nous vous conseillons donc d'anticiper avec des solutions de prévoyance personnalisées qui garantissent à votre famille un soutien financier durable.",
      "L'assurance-vie, par exemple, combine protection, transmission de capital et avantages fiscaux attractifs.",
      "Optez pour une approche prévoyante afin de préserver la sérénité de votre entourage, quoi qu'il arrive."
    ]
  },
  finalCta: {
    button: "En savoir plus"
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

export default function RetraiteCMSPage() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/retraite&type=cms');
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
          pagePath: '/retraite',
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
            <h1 className="text-2xl font-bold text-[#112033]">CMS Retraite</h1>
            <p className="text-[#686868]">Gérez le contenu de la page retraite</p>
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
              <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre</label>
            <input
              value={content.hero.subtitle} 
              onChange={(e) => handleChange('hero', 'subtitle', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Indicateur de marché</label>
            <input
              value={content.hero.marketIndicator} 
              onChange={(e) => handleChange('hero', 'marketIndicator', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Image de fond</label>
            <ImageImporter
              value={content.hero.backgroundImage}
              onChange={(value) => handleChange('hero', 'backgroundImage', value)}
              placeholder="/images/retraite-hero-image.png"
            />
            </div>
          </div>
        </div>

        {/* Market Data Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Données de Marché</h2>
        <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Date des données</label>
            <input
              value={content.marketData.date} 
              onChange={(e) => handleChange('marketData', 'date', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
            </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Cartes de données</label>
            {content.marketData.cards.map((card, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-[#112033] mb-3">Carte {index + 1}</h4>
                <div className="space-y-3">
            <div>
                    <label className="block text-xs text-[#686868] mb-1">Titre</label>
                    <input
                      value={card.title} 
                      onChange={(e) => handleArrayChange('marketData', 'cards', index, 'title', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
            </div>
            <div>
                    <label className="block text-xs text-[#686868] mb-1">Valeur</label>
                    <input
                      value={card.value} 
                      onChange={(e) => handleArrayChange('marketData', 'cards', index, 'value', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
            </div>
            </div>
            ))}
            </div>
          </div>
        </div>

        {/* CAC 40 Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section CAC 40</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input
              value={content.cac40.title} 
              onChange={(e) => handleChange('cac40', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Image de fond</label>
            <ImageImporter
              value={content.cac40.backgroundImage}
              onChange={(value) => handleChange('cac40', 'backgroundImage', value)}
              placeholder="/images/cac40-chart-image-4f18b8.png"
            />
          </div>
        </div>
      </div>

      {/* Retirement Planning Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Planification de Retraite</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input
              value={content.retirementPlanning.title} 
              onChange={(e) => handleChange('retirementPlanning', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu</label>
            {content.retirementPlanning.content.map((item, index) => (
              <div key={index} className="mb-2">
                <textarea
                  value={item} 
                  onChange={(e) => {
                    const newContent = [...content.retirementPlanning.content];
                    newContent[index] = e.target.value;
                    handleChange('retirementPlanning', 'content', newContent);
                  }}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Retirement Quote Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Citation Retraite</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input
              value={content.retirementQuote.title} 
              onChange={(e) => handleChange('retirementQuote', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu</label>
            <textarea
              value={content.retirementQuote.content} 
              onChange={(e) => handleChange('retirementQuote', 'content', e.target.value)} 
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Image</label>
            <ImageImporter
              value={content.retirementQuote.image}
              onChange={(value) => handleChange('retirementQuote', 'image', value)}
              placeholder="/images/placements-retirement-quote-image-56586a.png"
            />
          </div>
        </div>
      </div>

      {/* Retirement Continuation Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Suite Retraite</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu</label>
            {content.retirementContinuation.content.map((item, index) => (
              <div key={index} className="mb-2">
                <textarea
                  value={item} 
                  onChange={(e) => {
                    const newContent = [...content.retirementContinuation.content];
                    newContent[index] = e.target.value;
                    handleChange('retirementContinuation', 'content', newContent);
                  }}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            ))}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton CTA</label>
            <input
              value={content.retirementContinuation.ctaButton} 
              onChange={(e) => handleChange('retirementContinuation', 'ctaButton', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Heritage Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Transmission Patrimoniale</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input
              value={content.heritage.title} 
              onChange={(e) => handleChange('heritage', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu</label>
            {content.heritage.content.map((item, index) => (
              <div key={index} className="mb-2">
                <textarea
                  value={item} 
                  onChange={(e) => {
                    const newContent = [...content.heritage.content];
                    newContent[index] = e.target.value;
                    handleChange('heritage', 'content', newContent);
                  }}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            ))}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton CTA</label>
            <input
              value={content.heritage.ctaButton} 
              onChange={(e) => handleChange('heritage', 'ctaButton', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Heritage Quote Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Citation Patrimoniale</h2>
        <div className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input
              value={content.heritageQuote.title} 
              onChange={(e) => handleChange('heritageQuote', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
            </div>
          
            <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu</label>
            {content.heritageQuote.content.map((item, index) => (
              <div key={index} className="mb-2">
                <textarea
                  value={item} 
                  onChange={(e) => {
                    const newContent = [...content.heritageQuote.content];
                    newContent[index] = e.target.value;
                    handleChange('heritageQuote', 'content', newContent);
                  }}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
            </div>
            ))}
            </div>
          
            <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Image</label>
            <ImageImporter
              value={content.heritageQuote.image}
              onChange={(value) => handleChange('heritageQuote', 'image', value)}
              placeholder="/images/placements-heritage-quote-image-56586a.png"
            />
            </div>
          </div>
        </div>

      {/* Protect Loved Ones Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Protection des Proches</h2>
        <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input
              value={content.protectLoved.title} 
              onChange={(e) => handleChange('protectLoved', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
            </div>
          
            <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu</label>
            {content.protectLoved.content.map((item, index) => (
              <div key={index} className="mb-2">
                <textarea
                  value={item} 
                  onChange={(e) => {
                    const newContent = [...content.protectLoved.content];
                    newContent[index] = e.target.value;
                    handleChange('protectLoved', 'content', newContent);
                  }}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
            </div>
            ))}
            </div>
          </div>
        </div>

      {/* Final CTA Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section CTA Final</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton</label>
            <input
              value={content.finalCta.button} 
              onChange={(e) => handleChange('finalCta', 'button', e.target.value)} 
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
