'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FiscaliteCMS() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Fiscalité sections configuration
  const fiscaliteSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal et description de la page fiscalité',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'paragraph', label: 'Description', type: 'textarea' }
      ]
    },
    {
      id: 'sommaire',
      name: 'Sommaire',
      description: 'Liste des sujets fiscaux et services',
      fields: [
        { key: 'leftItems', label: 'Sujets fiscaux (JSON)', type: 'textarea' },
        { key: 'boxes', label: 'Services (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'lli',
      name: 'Section LLI',
      description: 'Contenu sur le dispositif LLI',
      fields: [
        { key: 'title', label: 'Titre', type: 'text' },
        { key: 'html', label: 'Contenu HTML', type: 'textarea' },
        { key: 'button', label: 'Texte du Bouton', type: 'text' },
        { key: 'image', label: 'Image', type: 'text' }
      ]
    },
    {
      id: 'benefits',
      name: 'Avantages LLI',
      description: 'Liste des avantages du dispositif LLI',
      fields: [
        { key: 'image', label: 'Image', type: 'text' },
        { key: 'html', label: 'Contenu HTML', type: 'textarea' }
      ]
    },
    {
      id: 'bottomCta',
      name: 'CTA Principal',
      description: 'Call-to-action principal',
      fields: [
        { key: 'textTitle', label: 'Titre', type: 'text' },
        { key: 'textBody', label: 'Description', type: 'textarea' },
        { key: 'button', label: 'Texte du Bouton', type: 'text' },
        { key: 'image', label: 'Image', type: 'text' }
      ]
    },
    {
      id: 'whereInvest',
      name: 'Où Investir',
      description: 'Conseils sur les zones d\'investissement',
      fields: [
        { key: 'image', label: 'Image', type: 'text' },
        { key: 'intro', label: 'Introduction', type: 'textarea' },
        { key: 'cities', label: 'Villes (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'example',
      name: 'Exemple Pratique',
      description: 'Cas d\'étude et exemple concret',
      fields: [
        { key: 'title', label: 'Titre', type: 'text' },
        { key: 'lead', label: 'Introduction', type: 'textarea' },
        { key: 'bulletsTitle', label: 'Titre des Avantages', type: 'text' },
        { key: 'bullets', label: 'Liste des Avantages (JSON)', type: 'textarea' }
      ]
    }
  ];

  useEffect(() => {
    loadSections();
  }, []);

  const loadSections = async () => {
    try {
      // Load CMS content first
      const cmsResponse = await fetch('/api/cms/content/fiscalite');
      let cmsSections = [];
      if (cmsResponse.ok) {
        cmsSections = await cmsResponse.json();
      }

      // Always use comprehensive default content that matches the fiscalité page
      console.log('CMS Fiscalité - Loading comprehensive default content');
      
      const currentContent = {
        hero: {
          title: "Maîtrisez votre fiscalité avec expertise",
          paragraph: "Optimisez votre situation fiscale grâce à notre expertise de plus de 30 ans. Nous vous accompagnons dans la compréhension et l'application des stratégies fiscales les plus avantageuses pour votre patrimoine. Découvrez comment réduire légalement vos impôts tout en sécurisant votre avenir financier."
  },
  sommaire: {
    leftItems: [
            "Impôt sur le revenu",
            "Déclaration d'impôts", 
            "Tranches, barèmes, plafonds",
            "Lois fiscales",
            "Réductions d'impôt/déficit foncier",
            "Fiscalité des placements financiers : ce qu'il faut absolument comprendre",
            "PFU ou Prélèvement Forfaitaire Unique : tout ce qu'un investisseur doit savoir",
            "Tranche Marginale d'Imposition (TMI) + Prélèvements sociaux : ce que tout investisseur doit comprendre",
            "Fiscalité de l'épargne salariale et retraite",
            "Fiscalité des donations et successions"
    ],
    boxes: [
            "Optimisation fiscale personnalisée",
            "Conseil en stratégie patrimoniale", 
            "Accompagnement dans vos démarches"
    ]
  },
  lli: {
    title: "Investissement Patrimonial & Fiscalité Optimisée : Le Dispositif LLI",
    html: "Le Logement Locatif Intermédiaire (LLI) est une solution d'investissement immobilier conçue pour les particuliers souhaitant optimiser leur fiscalité tout en développant leur patrimoine. Il s'adresse aux investisseurs recherchant une combinaison efficace entre performance financière, sécurité patrimoniale et avantages fiscaux.\n\n<b>Avec le dispositif LLI, vous bénéficiez :</b>\nD'un investissement dans un bien immobilier neuf, conforme aux dernières réglementations techniques et environnementales\nD'une TVA réduite à 10 % sur le prix d'acquisition, permettant d'alléger votre coût d'investissement\nD'un crédit d'impôt sur la taxe foncière, valable jusqu'à 20 ans, venant renforcer la rentabilité de votre opération patrimoniale",
          button: "Je réalise ma simulation",
          image: "/images/fisc2.webp"
  },
  benefits: {
          image: "/images/fiscalite-lli-benefits-66eac5.png",
    html: "Pourquoi choisir le dispositif LLI pour votre stratégie patrimoniale ?\n\nInvestir en LLI, c'est bénéficier d'une combinaison gagnante entre avantages fiscaux et acquisition d'un patrimoine immobilier neuf, tout en maîtrisant vos risques.\n\n✅ TVA réduite à 10 % sur l'acquisition, pour un prix d'achat optimisé\n✅ Crédit d'impôt sur la taxe foncière, valable jusqu'à 20 ans, permettant d'alléger vos charges\n✅ Frais de notaire réduits (2 à 3 %), bien plus avantageux que dans l'immobilier ancien\n✅ Exonération partielle de taxe foncière pendant les deux premières années\n✅ Conformité aux dernières normes énergétiques (RE2020), garantissant des performances optimales et évitant les passoires thermiques\n✅ Garantie décennale, garantie biennale et garantie de parfait achèvement sécurisant votre investissement\n✅ Possibilité de personnaliser les finitions en VEFA (Vente en l'état futur d'achèvement)\n✅ Pas de travaux à prévoir et des équipements modernes intégrés dès la livraison"
  },
  bottomCta: {
    textTitle: "Investissez avec le LLI : TVA réduite et avantages fiscaux durables",
    textBody: "Profitez d'un investissement sécurisé qui combine : TVA réduite à 10 % sur l'acquisition de biens immobiliers neufs, Crédit d'impôt sur la taxe foncière, vous garantissant des économies fiscales pendant jusqu'à 20",
          button: "Je réalise ma simulation",
          image: "/images/fiscalite-lli-section-bottom-1b4b7d.png"
  },
  whereInvest: {
          image: "/images/fiscalite-ou-investir-portrait.png",
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
            "Crédit d'impôt sur la taxe foncière : réduction d'impôt supplémentaire de 1 200 € par an pendant 20 ans.",
            "Rendement locatif net : environ 4,5 % par an, soit 1 800 € de revenus locatifs nets.",
            "Plus-value potentielle : valorisation estimée à 3 % par an grâce à la localisation stratégique."
          ]
        }
      };

      // Merge CMS sections with current content
      const mergedSections = fiscaliteSections.map(section => {
        const cmsSection = cmsSections.find(s => s.section_name === section.id);
        const currentSectionContent = currentContent[section.id] || {};
        
        console.log(`CMS Fiscalité - Section ${section.id}:`, {
          hasCmsData: !!cmsSection,
          hasCurrentData: Object.keys(currentSectionContent).length > 0,
          currentData: currentSectionContent
        });
        
        return {
          ...section,
          cmsData: cmsSection?.content_data ? JSON.parse(cmsSection.content_data) : {},
          currentData: currentSectionContent,
          hasCmsContent: !!cmsSection,
          hasCurrentContent: Object.keys(currentSectionContent).length > 0
        };
      });

      console.log('CMS Fiscalité - Loaded sections:', mergedSections.length);
      console.log('CMS Fiscalité - Current content keys:', Object.keys(currentContent));
      console.log('CMS Fiscalité - Sample content for hero:', currentContent.hero);
      console.log('CMS Fiscalité - Sample merged section:', mergedSections[0]);
      console.log('CMS Fiscalité - All sections with content:', mergedSections.filter(s => s.hasCurrentContent));
      setSections(mergedSections);
    } catch (error) {
      console.error('Error loading fiscalité sections:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (section) => {
    setEditingSection(section.id);
    // Use current data if available, otherwise use CMS data
    const dataToEdit = section.hasCurrentContent ? section.currentData : section.cmsData;
    setFormData(dataToEdit);
  };

    const handleSave = async () => {
    setSaving(true);
    try {
      console.log('Saving fiscalité content for section:', editingSection);
      console.log('Form data:', formData);
      
      const response = await fetch('/api/cms/content/fiscalite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section: editingSection,
          data: formData
        }),
      });

      const responseData = await response.json();
      console.log('Save response:', responseData);

      if (response.ok) {
        await loadSections();
        setEditingSection(null);
        setFormData({});
        
        // Trigger content update event for all clients
        window.dispatchEvent(new CustomEvent('contentUpdated'));
        
        // Also trigger a global event that can be caught by other tabs
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('cms_content_updated', Date.now().toString());
        }
        
        alert('Contenu fiscalité sauvegardé avec succès! Tous les visiteurs verront la mise à jour IMMÉDIATEMENT.');
        
        // Show visual feedback
        const saveButton = document.getElementById('save-button');
        if (saveButton) {
          saveButton.style.backgroundColor = '#10B981';
          saveButton.textContent = '✓ Sauvegardé!';
          setTimeout(() => {
            saveButton.style.backgroundColor = '';
            saveButton.textContent = 'Sauvegarder';
          }, 2000);
        }
        
        // Test if content is actually saved and force reload
        setTimeout(async () => {
          try {
            // Force reload from server
            const reloadResponse = await fetch('/api/pages/fiscalite/reload', {
              method: 'POST'
            });
            const reloadData = await reloadResponse.json();
            console.log('Force reload response:', reloadData);
            
            // Also test normal API
            const testResponse = await fetch('/api/pages/fiscalite');
            const testData = await testResponse.json();
            console.log('Fiscalité content after save:', testData);
            
            alert(`Contenu fiscalité sauvegardé!\n\nSections chargées: ${reloadData.sectionsCount}\nTimestamp: ${new Date(reloadData.timestamp).toLocaleTimeString()}`);
          } catch (error) {
            console.error('Error testing reload:', error);
          }
        }, 1000);
        
      } else {
        alert('Erreur lors de la sauvegarde: ' + (responseData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error saving fiscalité content:', error);
      alert('Erreur lors de la sauvegarde: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditingSection(null);
    setFormData({});
  };

  const handleInputChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (loading) {
  return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du CMS Fiscalité...</p>
              </div>
        </div>
    );
  }
              
  return (
    <div className="min-h-screen bg-gray-50">
              {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/cms/dashboard')}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Retour au Dashboard
              </button>
              <h1 className="text-2xl font-bold text-gray-900">CMS Fiscalité</h1>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={loadSections}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
              >
                Recharger CMS
              </button>
            <button 
                onClick={() => window.open('http://localhost:4028/fiscalite', '_blank')}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
            >
                Voir la Page
            </button>
            </div>
              </div>
            </div>
          </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-start mb-4">
              <div>
                  <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.description}</p>
              </div>
                <div className="flex space-x-2">
                  {!editingSection && (
                    <button
                      onClick={() => handleEdit(section)}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                    >
                      Modifier
                    </button>
                  )}
            </div>
          </div>

              {editingSection === section.id ? (
        <div className="space-y-4">
                  <div className="grid gap-4">
                    {section.fields.map((field) => (
                      <div key={field.key}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={formData[field.key] || ''}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={field.key.includes('html') || field.key.includes('JSON') ? 6 : 3}
                            placeholder={`Entrez ${field.label.toLowerCase()}...`}
                          />
                        ) : (
                <input 
                            type="text"
                            value={formData[field.key] || ''}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={`Entrez ${field.label.toLowerCase()}...`}
                          />
                        )}
              </div>
            ))}
            </div>
                  
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 text-sm"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      id="save-button"
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 text-sm"
                    >
                      {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                    </button>
              </div>
            </div>
              ) : (
          <div className="space-y-4">
                  {/* Status indicators */}
                  <div className="flex gap-2 text-xs">
                    {section.hasCurrentContent && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                        Contenu actuel affiché
                      </span>
                    )}
                    {section.hasCmsContent && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                        Sauvegardé dans CMS
                      </span>
                    )}
                    {!section.hasCurrentContent && !section.hasCmsContent && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">
                        Aucun contenu
                      </span>
                    )}
              </div>
              
                  {/* Current content display */}
                  {section.hasCurrentContent ? (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">Contenu actuellement affiché :</h4>
                      <div className="space-y-2">
                        {Object.entries(section.currentData).map(([key, value]) => (
                          <div key={key} className="text-sm">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <div className="text-gray-600 mt-1">
                              {typeof value === 'object' ? (
                                <pre className="whitespace-pre-wrap text-xs bg-white p-2 rounded border">
                                  {JSON.stringify(value, null, 2)}
                                </pre>
                              ) : (
                                <span>{String(value).substring(0, 200)}
                                {String(value).length > 200 && '...'}</span>
                              )}
          </div>
            </div>
            ))}
          </div>
        </div>
                  ) : (
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-yellow-800 text-sm">
                        ⚠️ Cette section utilise le contenu par défaut. Cliquez sur "Modifier" pour personnaliser le contenu.
                      </p>
      </div>
                  )}
              </div>
              )}
        </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
