"use client";

import React, { useState, useEffect } from 'react';
import CMSAuthWrapper from '../../components/cms/CMSAuthWrapper';



const defaultContent = {
  hero: {
    title: "Tout savoir sur la fiscalité patrimoniale et l'optimisation fiscale",
    paragraph: "Vous cherchez à optimiser votre fiscalité tout en sécurisant et valorisant votre patrimoine ? Les stratégies de fiscalité patrimoniale vous permettent de conjuguer rendement, sécurité et transmission, en toute conformité avec la législation fiscale. Accessible aussi bien aux particuliers qu'aux chefs d'entreprise, l'optimisation fiscale repose sur des solutions juridiques, financières et immobilières adaptées à votre situation et à vos projets.",
    pill: {
      bullets: [
        "Investissez dans l'immobilier neuf et profitez d'avantages fiscaux exclusifs :",
        "TVA réduite à 10 %",
        "Crédit d'impôt sur la taxe foncière"
      ],
      cta: "Je calcule mon avantage fiscal",
      portrait: "/images/fiscalite-hero-small-photo.png"
    },
    ctaPanel: {
      title: "Je télécharge mon guide de l'optimisation fiscale",
      tag: "Version numérique",
      placeholder: "Votre email",
      button: "Télécharger le guide"
    }
  },
  sommaire: {
    leftItems: [
      "Qu'est-ce que l'optimisation fiscale patrimoniale ?",
      "Pourquoi mettre en place une stratégie d'optimisation fiscale ?",
      "Quelles sont les règles à respecter pour bénéficier des avantages fiscaux ?",
      "Quels sont les meilleurs supports et placements pour optimiser sa fiscalité ?",
      "Exemple d'une stratégie d'optimisation fiscale réussie",
      "Quels pièges éviter et quelles bonnes pratiques adopter ?",
      "Questions fréquentes sur l'optimisation fiscale"
    ],
    boxes: [
      "Un prix d'acquisition avantageux grâce à une TVA réduite à 10 %",
      "Autre avantage fiscal ou information",
      "Encore un autre avantage ou info"
    ]
  },
  lli: {
    title: "Investissement Patrimonial & Fiscalité Optimisée : Le Dispositif LLI",
    html: "Le Logement Locatif Intermédiaire (LLI) est une solution d'investissement immobilier conçue pour les particuliers souhaitant optimiser leur fiscalité tout en développant leur patrimoine. Il s'adresse aux investisseurs recherchant une combinaison efficace entre performance financière, sécurité patrimoniale et avantages fiscaux.\n\n<b>Avec le dispositif LLI, vous bénéficiez :</b>\nD'un investissement dans un bien immobilier neuf, conforme aux dernières réglementations techniques et environnementales\nD'une TVA réduite à 10 % sur le prix d'acquisition, permettant d'alléger votre coût d'investissement\nD'un crédit d'impôt sur la taxe foncière, valable jusqu'à 20 ans, venant renforcer la rentabilité de votre opération patrimoniale",
    button: "Je réalise ma simulation"
  },
  benefits: {
    html: "Pourquoi choisir le dispositif LLI pour votre stratégie patrimoniale ?\n\nInvestir en LLI, c'est bénéficier d'une combinaison gagnante entre avantages fiscaux et acquisition d'un patrimoine immobilier neuf, tout en maîtrisant vos risques.\n\n✅ TVA réduite à 10 % sur l'acquisition, pour un prix d'achat optimisé\n✅ Crédit d'impôt sur la taxe foncière, valable jusqu'à 20 ans, permettant d'alléger vos charges\n✅ Frais de notaire réduits (2 à 3 %), bien plus avantageux que dans l'immobilier ancien\n✅ Exonération partielle de taxe foncière pendant les deux premières années\n✅ Conformité aux dernières normes énergétiques (RE2020), garantissant des performances optimales et évitant les passoires thermiques\n✅ Garantie décennale, garantie biennale et garantie de parfait achèvement sécurisant votre investissement\n✅ Possibilité de personnaliser les finitions en VEFA (Vente en l'état futur d'achèvement)\n✅ Pas de travaux à prévoir et des équipements modernes intégrés dès la livraison"
  },
  bottomCta: {
    textTitle: "Investissez avec le LLI : TVA réduite et avantages fiscaux durables",
    textBody: "Profitez d'un investissement sécurisé qui combine : TVA réduite à 10 % sur l'acquisition de biens immobiliers neufs, Crédit d'impôt sur la taxe foncière, vous garantissant des économies fiscales pendant jusqu'à 20",
    button: "Je réalise ma simulation"
  },
  whereInvest: {
    intro: "La réussite d'un investissement locatif repose sur le choix de la bonne localisation. Avec le Logement Locatif Intermédiaire (LLI), il est essentiel de privilégier des zones à fort potentiel locatif, proches des bassins d'emploi, des universités et bien connectées aux transports.",
    cities: [
      {
        name: "Toulouse – Un marché en pleine expansion",
        points: [
          "Ville universitaire et technologique, attractive pour les jeunes actifs.",
          "Dynamisme soutenu (aéronautique, spatial, services).",
          "✅ Quartiers recommandés : Compans-Caffarelli, Rangueil",
          "✅ 18 490 créations d'emplois au 1er trimestre 2024"
        ]
      },
      {
        name: "Paris – La sécurité d'un placement patrimonial",
        points: [
          "Marché solide, demande locative soutenue.",
          "✅ Quartiers recommandés : Marais, 15ème arrondissement",
          "✅ Rendements fiables et valorisation garantie"
        ]
      }
    ]
  },
  example: {
    title: "Exemple d'un investissement optimisé avec le dispositif LLI",
    lead: "En 2025, Clara, dirigeante d'entreprise à Bordeaux, décide de diversifier son patrimoine en investissant dans l'immobilier locatif via le dispositif LLI. Elle choisit un appartement neuf de 50 m², situé à quelques minutes de la gare Bordeaux Saint-Jean, un secteur à forte demande locative.",
    bulletsTitle: "Les avantages financiers pour Clara :",
    bullets: [
      "Exonération de taxe foncière : pendant 20 ans, elle économise environ 1 500 € par an, soit un total potentiel de 30 000 €.",
      "TVA réduite à 10 % : économie immédiate d'environ 20 000 € sur le prix d'achat.",
      "Frais de notaire réduits : grâce au neuf, les frais avoisinent 2,5 %, permettant une économie d'environ 10 000 € par rapport à un bien ancien."
    ]
  }
};

// Composant d'import d'image en base64
const ImageImporter = ({ value, onChange, placeholder, label }) => {
  const [showImporter, setShowImporter] = useState(false);
  const [base64Input, setBase64Input] = useState('');

  const handleBase64Import = () => {
    if (base64Input.trim()) {
      // Vérifier si c'est déjà un format base64 valide
      if (base64Input.startsWith('data:image/')) {
        onChange(base64Input);
        setShowImporter(false);
        setBase64Input('');
      } else {
        // Essayer de convertir en base64
        try {
          // Si c'est juste le nom de fichier, on peut l'essayer
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

      {/* Modal d'import */}
      {showImporter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-[#112033] mb-4">Importer une image</h3>
            
            {/* Upload de fichier */}
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

            {/* Coller base64 */}
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

            {/* Boutons */}
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
          
            {/* Instructions */}
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

export default function FiscaliteCMSPage() {
  const [content, setContent] = useState(defaultContent);
  const [showToast, setShowToast] = useState(false);

    useEffect(() => {
    // Charger le contenu depuis la base de données
    const loadContentFromDatabase = async () => {
      try {
        const response = await fetch('/api/pages/content?path=/fiscalite&type=cms');
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
          pagePath: '/fiscalite',
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

  // Vérifier que le contenu est initialisé
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
              <h1 className="text-2xl font-bold text-[#112033]">CMS Fiscalité</h1>
              <p className="text-[#686868]">Gérez le contenu de la page fiscalité</p>
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
              
            {/* Gestion des images */}
            <div className="border-t pt-4">
              <h3 className="text-md font-medium text-[#112033] mb-3">Images</h3>
              <div className="space-y-3">
              <div>
                  <label className="block text-xs text-[#686868] mb-1">Image portrait (Pill droite)</label>
                  <ImageImporter
                    value={content.hero.pill.portrait}
                    onChange={(value) => handleChange('hero', 'pill', { ...content.hero.pill, portrait: value })}
                    placeholder="/images/fiscalite-hero-small-photo.png"
                  />
                  <p className="text-xs text-gray-500 mt-1">Chemin vers l'image ou image base64</p>
              </div>
              </div>
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
            
          <div className="border-t pt-4">
            <h3 className="text-md font-medium text-[#112033] mb-3">Pill (Encadré droit)</h3>
            <div className="space-y-3">
              {content.hero?.pill?.bullets?.map((bullet, index) => (
                <div key={index}>
                  <label className="block text-xs text-[#686868] mb-1">Point {index + 1}</label>
        <input
                    value={bullet} 
            onChange={(e) => {
                      const newBullets = [...content.hero.pill.bullets];
                      newBullets[index] = e.target.value;
                      handleChange('hero', 'pill', { ...content.hero.pill, bullets: newBullets });
            }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
          />
      </div>
              ))}
              <div>
                <label className="block text-xs text-[#686868] mb-1">Bouton CTA</label>
                  <input
                  value={content.hero.pill.cta} 
                  onChange={(e) => handleChange('hero', 'pill', { ...content.hero.pill, cta: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-md font-medium text-[#112033] mb-3">Panel CTA (Encadré vert)</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-[#686868] mb-1">Titre</label>
      <input
                  value={content.hero.ctaPanel.title} 
                  onChange={(e) => handleChange('hero', 'ctaPanel', { ...content.hero.ctaPanel, title: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-[#686868] mb-1">Tag</label>
                <input 
                  value={content.hero.ctaPanel.tag} 
                  onChange={(e) => handleChange('hero', 'ctaPanel', { ...content.hero.ctaPanel, tag: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-[#686868] mb-1">Placeholder email</label>
                <input 
                  value={content.hero.ctaPanel.placeholder} 
                  onChange={(e) => handleChange('hero', 'ctaPanel', { ...content.hero.ctaPanel, placeholder: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-[#686868] mb-1">Bouton</label>
                <input 
                  value={content.hero.ctaPanel.button} 
                  onChange={(e) => handleChange('hero', 'ctaPanel', { ...content.hero.ctaPanel, button: e.target.value })} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            </div>
              </div>
            </div>
          </div>

      {/* Sommaire Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Sommaire</h2>
        <div className="space-y-4">
              <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Liste des questions (gauche)</label>
            {content.sommaire?.leftItems?.map((item, index) => (
              <div key={index} className="mb-2">
                <label className="block text-xs text-[#686868] mb-1">Question {index + 1}</label>
                <input 
                  value={item} 
                  onChange={(e) => {
                    const newItems = [...content.sommaire.leftItems];
                    newItems[index] = e.target.value;
                    handleChange('sommaire', 'leftItems', newItems);
                  }} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            ))}
          </div>
              <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Boîtes d'avantages (droite)</label>
            {content.sommaire?.boxes?.map((box, index) => (
              <div key={index} className="mb-2">
                <label className="block text-xs text-[#686868] mb-1">Boîte {index + 1}</label>
                <input 
                  value={box} 
                  onChange={(e) => {
                    const newBoxes = [...content.sommaire.boxes];
                    newBoxes[index] = e.target.value;
                    handleChange('sommaire', 'boxes', newBoxes);
                  }} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            ))}
            </div>
              </div>
            </div>

              {/* LLI Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-[#112033] mb-4">Section LLI</h2>
          <div className="space-y-4">
              <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              <input 
                value={content.lli.title} 
                onChange={(e) => handleChange('lli', 'title', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              
            {/* Image LLI */}
              <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Image de la section</label>
              <ImageImporter
                value={content.lli.image}
                onChange={(value) => handleChange('lli', 'image', value)}
                placeholder="/images/fiscalite-lli-image-aeac3b.png"
              />
              <p className="text-xs text-gray-500 mt-1">Chemin vers l'image ou image base64</p>
              </div>
              <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Contenu HTML</label>
            <textarea 
              value={content.lli.html} 
              onChange={(e) => handleChange('lli', 'html', e.target.value)} 
              rows={8} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent font-mono text-sm"
              placeholder="Utilisez <b> pour le gras et \n pour les sauts de ligne"
                />
            </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton</label>
            <input 
              value={content.lli.button} 
              onChange={(e) => handleChange('lli', 'button', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            </div>
          </div>

              {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Avantages</h2>
          <div className="space-y-4">
            {/* Image Benefits */}
              <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Image de la section</label>
              <ImageImporter
                value={content.benefits.image}
                onChange={(value) => handleChange('benefits', 'image', value)}
                placeholder="/images/fiscalite-lli-benefits-66eac5.png"
              />
              <p className="text-xs text-gray-500 mt-1">Chemin vers l'image ou image base64</p>
              </div>
              
              <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Contenu HTML des avantages</label>
              <textarea 
                value={content.benefits.html} 
                onChange={(e) => handleChange('benefits', 'html', e.target.value)} 
                rows={10} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent font-mono text-sm"
                placeholder="Utilisez ✅ pour les puces et \n pour les sauts de ligne"
              />
            </div>
              </div>
            </div>
            
              {/* Bottom CTA Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-[#112033] mb-4">Section CTA Bas</h2>
          <div className="space-y-4">
            {/* Image Bottom CTA */}
            <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Image de la section</label>
              <ImageImporter
                value={content.bottomCta.image}
                onChange={(value) => handleChange('bottomCta', 'image', value)}
                placeholder="/images/fiscalite-lli-section-bottom-1b4b7d.png"
              />
              <p className="text-xs text-gray-500 mt-1">Chemin vers l'image ou image base64</p>
              </div>
            
              <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              <input 
                value={content.bottomCta.textTitle} 
                onChange={(e) => handleChange('bottomCta', 'textTitle', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Texte</label>
            <textarea 
              value={content.bottomCta.textBody} 
              onChange={(e) => handleChange('bottomCta', 'textBody', e.target.value)} 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Bouton</label>
            <input 
              value={content.bottomCta.button} 
              onChange={(e) => handleChange('bottomCta', 'button', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
            </div>
          </div>

              {/* Where Invest Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Où Investir</h2>
          <div className="space-y-4">
            {/* Image Where Invest */}
              <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Image de la section</label>
              <ImageImporter
                value={content.whereInvest.image}
                onChange={(value) => handleChange('whereInvest', 'image', value)}
                placeholder="/images/fiscalite-ou-investir-portrait.png"
              />
              <p className="text-xs text-gray-500 mt-1">Chemin vers l'image ou image base64</p>
              </div>
              
              <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Introduction</label>
              <textarea 
                value={content.whereInvest.intro} 
                onChange={(e) => handleChange('whereInvest', 'intro', e.target.value)} 
                rows={3} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
              />
            </div>
            
              <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Villes</label>
            {content.whereInvest?.cities?.map((city, cityIndex) => (
              <div key={cityIndex} className="border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-[#112033] mb-3">Ville {cityIndex + 1}</h4>
                <div className="space-y-3">
              <div>
                    <label className="block text-xs text-[#686868] mb-1">Nom de la ville</label>
                    <input 
                      value={city.name} 
                      onChange={(e) => {
                        const newCities = [...content.whereInvest.cities];
                        newCities[cityIndex] = { ...city, name: e.target.value };
                        handleChange('whereInvest', 'cities', newCities);
                      }} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
                    <label className="block text-xs text-[#686868] mb-1">Points clés</label>
                    {city.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="mb-2">
                        <input 
                          value={point} 
                          onChange={(e) => {
                            const newCities = [...content.whereInvest.cities];
                            const newPoints = [...city.points];
                            newPoints[pointIndex] = e.target.value;
                            newCities[cityIndex] = { ...city, points: newPoints };
                            handleChange('whereInvest', 'cities', newCities);
                          }} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
                    ))}
            </div>
          </div>
            </div>
            ))}
          </div>
        </div>
      </div>

              {/* Example Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Exemple</h2>
          <div className="space-y-4">
            {/* Image Example */}
              <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Image de la section</label>
              <ImageImporter
                value={content.example.image}
                onChange={(value) => handleChange('example', 'image', value)}
                placeholder="/images/fiscalite-exemple-illustration.png"
              />
              <p className="text-xs text-gray-500 mt-1">Chemin vers l'image ou image base64</p>
              </div>
              
              <div>
              <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
              <input 
                value={content.example.title} 
                onChange={(e) => handleChange('example', 'title', e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
              <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Introduction</label>
            <textarea 
              value={content.example.lead} 
              onChange={(e) => handleChange('example', 'lead', e.target.value)} 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
            </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Titre des avantages</label>
            <input 
              value={content.example.bulletsTitle} 
              onChange={(e) => handleChange('example', 'bulletsTitle', e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
              </div>
          <div>
            <label className="block text-sm font-medium text-[#686868] mb-2">Avantages financiers</label>
            {content.example?.bullets?.map((bullet, index) => (
              <div key={index} className="mb-2">
                <label className="block text-xs text-[#686868] mb-1">Avantage {index + 1}</label>
                <textarea 
                  value={bullet} 
                  onChange={(e) => {
                    const newBullets = [...content.example.bullets];
                    newBullets[index] = e.target.value;
                    handleChange('example', 'bullets', newBullets);
                  }} 
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                />
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
