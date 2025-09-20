"use client";

import React, { useState, useEffect } from 'react';
import CMSAuthWrapper from '../../components/cms/CMSAuthWrapper';


  
const defaultContent = {
    hero: {
    title: "Gestion de Patrimoine – Optimisez votre patrimoine avec Azalee Wealth",
    paragraph: "Votre partenaire de confiance en gestion de patrimoine depuis plus de 30 ans. Nous vous accompagnons pour valoriser votre patrimoine, sécuriser vos investissements, et bâtir des solutions patrimoniales sur mesure, adaptées à vos objectifs.",
    ctaButton: "Demander une étude patrimoniale gratuite",
    rightCard: {
      title: "Nos experts à votre service",
      icon: "/images/placements-responsive-header-icon-56586a.png",
      floatingCard: {
        value: "0 €",
        label: "Analyse personnalisée gratuite"
      },
      services: [
        "Analyse globale de votre situation patrimoniale",
        "Optimisation de vos investissements et rendements",
        "Accompagnement sur le financement et la fiscalité",
        "Stratégie d'acquisition, de gestion & transmission patrimoniale"
      ]
    }
  },
  essential: {
    title: "L'essentiel",
    image: "/images/placements-responsive-content-image-94979.png",
    content: [
      "Le bilan patrimonial a pour vocation d'apporter une vision claire de votre situation financière et de vos objectifs à moyen et long terme.",
      "Grâce à cette analyse, vous identifiez les leviers pertinents pour :",
      "Faire grandir votre patrimoine,",
      "Protéger vos proches,",
      "Optimiser durablement votre fiscalité."
    ]
  },
  wealthManagement: {
    title: "Gestion de patrimoine : Définition",
    content: [
      "Le patrimoine peut inclure différents types d'actifs, notamment :",
      "Biens immobiliers",
      "Placements financiers",
      "Participations professionnelles",
      "Actifs mobiliers",
      "Droits d'usufruit",
      "Propriétés intellectuelles",
      "Droits à la retraite et rentes"
    ]
  },
  assetsTypes: {
    image: "/images/placements-responsive-assets-types-image-95080.png",
    content: [
      "Le patrimoine peut inclure différents types d'actifs, notamment :",
      "• Biens immobiliers",
      "• Placements financiers",
      "• Participations professionnelles",
      "• Actifs mobiliers",
      "• Droits d'usufruit",
      "• Propriétés intellectuelles",
      "• Droits à la retraite et rentes"
    ]
  },
  advisor: {
    title: "Pourquoi s'entourer d'un conseiller en gestion de patrimoine ?",
    content: [
      "Le conseiller en gestion de patrimoine est votre allié pour structurer, développer et sécuriser votre patrimoine.",
      "Son rôle commence par une analyse complète de votre situation financière — le bilan patrimonial — pour dresser l'inventaire de vos actifs existants.",
      "À partir de ce diagnostic, il définit avec vous une stratégie d'investissement alignée sur vos objectifs : accroître vos revenus, préparer votre retraite, protéger vos proches ou anticiper votre transmission.",
      "Au-delà du simple conseil, le gestionnaire de patrimoine vous accompagne dans le suivi de vos placements, l'optimisation fiscale et l'adaptation de votre stratégie aux évolutions de votre situation ou de la réglementation.",
      "Un partenaire de confiance, pour un accompagnement global et durable."
    ]
  },
  assessment: {
    title: "Réalisez un bilan complet de votre situation patrimoniale",
    intro: "Pour vous conseiller efficacement, votre conseiller en gestion de patrimoine (CGP) commence par établir un état précis de votre patrimoine.",
    steps: [
      {
        title: "L'inventaire",
        description: "Recensement détaillé de vos actifs : immobilier, placements financiers, épargne, mais aussi de vos revenus, dettes et charges futures. Cette étape constitue la base de toute stratégie patrimoniale solide."
      },
      {
        title: "Le diagnostic",
        description: "Analyse complète de votre situation financière et patrimoniale. Cette évaluation permet de définir votre profil d'investisseur et d'identifier les axes d'optimisation possibles."
      },
      {
        title: "Le plan d'action",
        description: "Mise en place d'une stratégie personnalisée d'investissement, ajustée à votre profil, vos objectifs et les conclusions du diagnostic. Votre conseiller vous oriente vers les placements les mieux adaptés."
      }
    ],
    ctaButton: "J'optimise mon patrimoine dès maintenant"
  },
  wealthBuilding: {
    title: "Construire et valoriser son patrimoine",
    content: [
      "Assurer votre avenir financier passe par une gestion active et réfléchie de votre patrimoine. Qu'il s'agisse d'investissements immobiliers, de placements financiers ou d'autres actifs, bâtir un patrimoine solide vous permet de générer des revenus complémentaires et d'améliorer votre qualité de vie, tout en sécurisant l'avenir de vos proches.",
      "Nos conseillers vous aident à comprendre les différentes composantes de votre patrimoine :",
      "• Investissements immobiliers ou financiers",
      "• Patrimoine professionnel",
      "• Biens mobiliers",
      "• Usufruit et démembrement de propriété",
      "• Propriétés intellectuelles",
      "• Droits à la retraite ou rentes viagères"
    ]
  },
  goodToKnow: {
    title: "Bon à savoir",
    content: [
      "Prendre conseil auprès de nos experts en gestion de patrimoine, c'est faire un pas décisif pour sécuriser votre avenir et celui de vos proches. Développer son patrimoine, c'est non seulement se garantir des revenus futurs, mais aussi offrir une véritable protection financière à sa famille.",
      "Savoir que vos enfants disposeront toujours d'un logement, ou que votre conjoint sera à l'abri du besoin en cas d'imprévu, procure une véritable sérénité face à l'avenir.",
      "➔ Évaluez dès maintenant si votre patrimoine est adapté à votre situation et à votre âge."
    ]
  },
  comprehensive: {
    title: "Un accompagnement sur-mesure pour développer votre patrimoine",
    content: [
      "Avec votre conseiller Azalee Wealth, différentes stratégies peuvent être étudiées pour bâtir un patrimoine solide et pérenne.",
      "➔ L'investissement immobilier reste une solution sûre et durable pour faire croître votre patrimoine et générer des revenus complémentaires.",
      "➔ Les placements financiers, quant à eux, offrent l'opportunité de faire fructifier votre capital tout en bénéficiant de leviers fiscaux avantageux.",
      "➔ L'assurance prévoyance complète cette approche en protégeant vos proches des aléas de la vie, tout en vous permettant d'optimiser votre fiscalité.",
      "Pour faire les meilleurs choix — rentables, sécurisés et adaptés à votre profil — un bilan patrimonial personnalisé est essentiel."
    ],
    ctaButton: "En savoir plus"
  },
  taxOptimization: {
    title: "Allégez votre fiscalité avec des solutions adaptées",
    content: "Avec une pression fiscale parmi les plus élevées d'Europe — près de 47,5 % du PIB —, il est naturel de chercher à optimiser son imposition."
  },
  taxQuote: {
    title: "Bon à savoir",
    content: "La gestion du patrimoine des dirigeants d'entreprise nécessite une attention particulière. Leur fiscalité varie selon le statut juridique de leur société et le mode de rémunération choisi. C'est pourquoi nos experts vous conseillent sur les meilleures options pour optimiser votre fiscalité personnelle et professionnelle, tout en protégeant vos intérêts patrimoniaux."
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

export default function PatrimoineCMSPage() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/patrimoine&type=cms');
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
          pagePath: '/patrimoine',
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
            <h1 className="text-2xl font-bold text-[#112033]">CMS Patrimoine</h1>
            <p className="text-[#686868]">Gérez le contenu de la page patrimoine</p>
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
            <h3 className="text-md font-medium text-[#112033] mb-3">Carte droite (Experts)</h3>
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

      {/* Essential Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section L'essentiel</h2>
              <div className="space-y-4">
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                  <input
              value={content.essential.title} 
              onChange={(e) => handleChange('essential', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
          
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Image</label>
            <ImageImporter
              value={content.essential.image}
              onChange={(value) => handleChange('essential', 'image', value)}
              placeholder="/images/placements-responsive-content-image-94979.png"
                  />
                </div>
                
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu</label>
            {content.essential.content.map((item, index) => (
              <div key={index} className="mb-2">
                <textarea
                  value={item} 
                  onChange={(e) => {
                    const newContent = [...content.essential.content];
                    newContent[index] = e.target.value;
                    handleChange('essential', 'content', newContent);
                  }}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wealth Management Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Gestion de Patrimoine</h2>
        <div className="space-y-4">
                          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                            <input
              value={content.wealthManagement.title} 
              onChange={(e) => handleChange('wealthManagement', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
          
                          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu</label>
            {content.wealthManagement.content.map((item, index) => (
              <div key={index} className="mb-2">
                            <input
                  value={item} 
                  onChange={(e) => {
                    const newContent = [...content.wealthManagement.content];
                    newContent[index] = e.target.value;
                    handleChange('wealthManagement', 'content', newContent);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
                      </div>
                    ))}
                </div>
              </div>
            </div>

      {/* Assets Types Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Types d'Actifs</h2>
              <div className="space-y-4">
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Image</label>
            <ImageImporter
              value={content.assetsTypes.image}
              onChange={(value) => handleChange('assetsTypes', 'image', value)}
              placeholder="/images/placements-responsive-assets-types-image-95080.png"
                  />
                </div>
          
                <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu</label>
            {content.assetsTypes.content.map((item, index) => (
              <div key={index} className="mb-2">
                  <input
                  value={item} 
                  onChange={(e) => {
                    const newContent = [...content.assetsTypes.content];
                    newContent[index] = e.target.value;
                    handleChange('assetsTypes', 'content', newContent);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisor Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Conseiller en Gestion de Patrimoine</h2>
        <div className="space-y-4">
                  <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                    <input
              value={content.advisor.title} 
              onChange={(e) => handleChange('advisor', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
          
                  <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu</label>
            {content.advisor.content.map((item, index) => (
              <div key={index} className="mb-2">
                <textarea
                  value={item} 
                  onChange={(e) => {
                    const newContent = [...content.advisor.content];
                    newContent[index] = e.target.value;
                    handleChange('advisor', 'content', newContent);
                  }}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
            ))}
                </div>
              </div>
            </div>

      {/* Assessment Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Bilan Patrimonial</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
            <input
              value={content.assessment.title} 
              onChange={(e) => handleChange('assessment', 'title', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
        </div>
          
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Introduction</label>
            <textarea
              value={content.assessment.intro} 
              onChange={(e) => handleChange('assessment', 'intro', e.target.value)} 
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
        </div>

          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Étapes</label>
            {content.assessment.steps.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-[#112033] mb-3">Étape {index + 1}</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-[#686868] mb-1">Titre</label>
                    <input
                      value={step.title} 
                      onChange={(e) => handleArrayChange('assessment', 'steps', index, 'title', e.target.value)} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#686868] mb-1">Description</label>
                    <textarea
                      value={step.description} 
                      onChange={(e) => handleArrayChange('assessment', 'steps', index, 'description', e.target.value)} 
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                </div>
                </div>
              </div>
            ))}
        </div>

          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton CTA</label>
            <input
              value={content.assessment.ctaButton} 
              onChange={(e) => handleChange('assessment', 'ctaButton', e.target.value)} 
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





