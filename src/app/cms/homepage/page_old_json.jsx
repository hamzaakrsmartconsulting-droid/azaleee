"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CmsHomepagePage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Homepage sections configuration - ALL sections from official homepage
  const homepageSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal, sous-titre et bouton CTA',
      fields: [
        { key: 'heroTitle', label: 'Titre Principal', type: 'text' },
        { key: 'heroSubtitle', label: 'Sous-titre', type: 'text' },
        { key: 'heroButton1', label: 'Texte du Bouton', type: 'text' }
      ]
    },
    {
      id: 'heroBackgrounds',
      name: 'Images de Fond Hero',
      description: 'Images du carrousel de fond',
      fields: [
        { key: 'heroBackgrounds', label: 'Liste des Images (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'intro',
      name: 'Section Introduction',
      description: 'Texte d\'introduction et présentation',
      fields: [
        { key: 'introTitle', label: 'Titre Principal', type: 'text' },
        { key: 'introParagraph', label: 'Description', type: 'textarea' },
        { key: 'introButton', label: 'Texte du Bouton', type: 'text' }
      ]
    },
    {
      id: 'keyFigures',
      name: 'Chiffres Clés',
      description: 'Statistiques et indicateurs',
      fields: [
        { key: 'title', label: 'Titre de la Section', type: 'text' },
        { key: 'figures', label: 'Chiffres (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'team',
      name: 'Équipe',
      description: 'Section équipe et vision',
      fields: [
        { key: 'teamTitle', label: 'Titre Principal', type: 'text' },
        { key: 'teamSubtitle', label: 'Sous-titre', type: 'text' },
        { key: 'teamDescription', label: 'Description', type: 'textarea' },
        { key: 'teamValues', label: 'Valeurs de l\'équipe (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'testimonials',
      name: 'Témoignages',
      description: 'Témoignages clients',
      fields: [
        { key: 'testimonialsTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'testimonialText', label: 'Texte du Témoignage', type: 'textarea' },
        { key: 'testimonialAuthor', label: 'Auteur du Témoignage', type: 'text' }
      ]
    },
    {
      id: 'processSteps',
      name: 'Étapes du Processus',
      description: 'Processus de travail et méthodologie',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'steps', label: 'Étapes (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'stats',
      name: 'Statistiques',
      description: 'Statistiques et métriques',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'stats', label: 'Statistiques (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'investment',
      name: 'Section Investissement',
      description: 'Contenu sur les investissements',
      fields: [
        { key: 'investmentTitle', label: 'Titre Principal', type: 'text' },
        { key: 'investmentText', label: 'Description', type: 'textarea' },
        { key: 'investmentButton', label: 'Texte du Bouton', type: 'text' }
      ]
    },
    {
      id: 'tax',
      name: 'Section Fiscalité',
      description: 'Contenu sur la fiscalité',
      fields: [
        { key: 'taxTitle', label: 'Titre Principal', type: 'text' },
        { key: 'taxText', label: 'Description', type: 'textarea' },
        { key: 'taxButton', label: 'Texte du Bouton', type: 'text' }
      ]
    },
    {
      id: 'partners',
      name: 'Partenaires',
      description: 'Logos des partenaires',
      fields: [
        { key: 'title', label: 'Titre de la Section', type: 'text' },
        { key: 'partners', label: 'Liste des Partenaires (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'finalCta',
      name: 'CTA Final',
      description: 'Appel à l\'action final',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'ctaText', label: 'Texte du Bouton', type: 'text' },
        { key: 'ctaLink', label: 'Lien du Bouton', type: 'text' }
      ]
    },
    {
      id: 'footer',
      name: 'Pied de Page',
      description: 'Informations du footer',
      fields: [
        { key: 'footerCopyright', label: 'Copyright', type: 'text' },
        { key: 'footerLinks', label: 'Liens Footer (JSON)', type: 'textarea' },
        { key: 'contactPhone', label: 'Téléphone', type: 'text' },
        { key: 'contactEmail', label: 'Email', type: 'text' }
      ]
    }
  ];

  useEffect(() => {
    loadSections();
  }, []);

  const loadSections = async () => {
    try {
      // Load CMS content first
      const cmsResponse = await fetch('/api/cms/content/homepage');
      let cmsSections = [];
      if (cmsResponse.ok) {
        cmsSections = await cmsResponse.json();
      }

      // Always use comprehensive default content that matches the homepage
      console.log('CMS - Loading comprehensive default content');
      
      const currentContent = {
            hero: {
              heroTitle: "Votre partenaire de confiance en matière de gestion de patrimoine, de fiscalité et de conseil en investissement.",
              heroSubtitle: "Explorez des conseils personnalisés en matière de fiscalité, d'immobilier, d'investissements, de retraite et de gestion de patrimoine.",
              heroButton1: "Obtenez votre consultation personnalisée"
            },
            heroBackgrounds: [
              "/images/home.webp",
              "/images/image2.webp", 
              "/images/image3.webp"
            ],
            intro: {
              introTitle: "Gestion de patrimoine — Optimisation fiscale immobilière — Conseil financier",
              introParagraph: "Depuis 30 ans, nous façonnons l'avenir financier de clients exigeants. Notre mission : libérer le potentiel caché de votre patrimoine grâce à une approche humaine, experte et transparente.",
              introButton: "Rencontrez-nous"
            },
            keyFigures: {
              title: "Nos chiffres clés",
              figures: [
                { number: "30+", label: "Années d'expérience" },
                { number: "500+", label: "Clients accompagnés" },
                { number: "95%", label: "Taux de satisfaction" }
              ]
            },
            team: {
              teamTitle: "Qui sommes-nous",
              teamSubtitle: "Chez Azalée Patrimoine, nous croyons que la réussite de votre stratégie patrimoniale repose sur la qualité humaine de l'accompagnement.",
              teamDescription: "Notre équipe d'experts vous accompagne dans la gestion de votre patrimoine avec une approche personnalisée et professionnelle.",
              teamValues: [
                { icon: "🎯", title: "Expertise", desc: "30 ans d'expérience en gestion patrimoniale" },
                { icon: "🤝", title: "Confiance", desc: "Relation de confiance avec nos clients" },
                { icon: "💡", title: "Innovation", desc: "Solutions adaptées à vos besoins" },
                { icon: "🛡️", title: "Sécurité", desc: "Protection et sécurisation de votre patrimoine" }
              ]
            },
            experts: {
              expertsTitle: "Nos experts à votre service",
              expertsDescription: "Une équipe de professionnels dédiés à votre réussite patrimoniale",
              experts: [
                { title: "Conseil en investissement", desc: "Optimisez vos placements avec nos experts", button: "En savoir plus" },
                { title: "Gestion patrimoniale", desc: "Stratégies personnalisées pour votre patrimoine", button: "Découvrir" },
                { title: "Conseil fiscal", desc: "Optimisez votre fiscalité avec nos spécialistes", button: "Consulter" }
              ]
            },
            testimonials: {
              testimonialsTitle: "Nos clients témoignent",
              testimonialText: "Azalée Patrimoine m'a accompagné dans la gestion de mon patrimoine avec une expertise remarquable.",
              testimonialAuthor: "Thomas M., 35 ans"
            },
            processSteps: [
              {
                contentTitle: "Étape 1: Analyse de votre situation",
                contentText: "Nous analysons votre situation financière actuelle et vos objectifs patrimoniaux.",
                button: "Commencer l'analyse",
                image: "/images/analysis.webp"
              }
            ],
            stats: [
              { value: "30+", label: "Années d'expérience" },
              { value: "500+", label: "Clients accompagnés" },
              { value: "95%", label: "Taux de satisfaction" },
              { value: "€50M+", label: "Patrimoine géré" },
              { value: "24/7", label: "Support client" },
              { value: "100%", label: "Confidentialité" }
            ],
            investment: {
              investmentTitle: "Optimisez vos investissements",
              investmentText: "Découvrez nos solutions d'investissement personnalisées pour faire fructifier votre patrimoine.",
              investmentButton: "Découvrir nos solutions",
              investmentImage2: "/images/investment.webp"
            },
            tax: {
              taxTitle: "Optimisation fiscale",
              taxText: "Réduisez votre charge fiscale avec nos stratégies d'optimisation personnalisées.",
              taxButton: "Optimiser ma fiscalité",
              taxCards: [
                { title: "Défiscalisation", text: "Réduisez vos impôts légalement", image: "/images/tax1.webp" },
                { title: "Optimisation", text: "Optimisez votre fiscalité", image: "/images/tax2.webp" },
                { title: "Conseil", text: "Conseils personnalisés", image: "/images/tax3.webp" }
              ]
            },
            finalCta: {
              finalCtaTitle: "Prêt à optimiser votre patrimoine ?",
              finalCtaText: "Contactez nos experts pour une consultation personnalisée et découvrez comment Azalée peut vous accompagner.",
              finalCtaImage: "/images/cta.webp"
            },
            footer: {
              footerCopyright: '© 2025 Azalée Patrimoine. Tous droits réservés.',
              footerLinks: ['Légal', 'Politique de confidentialité', "Conditions d'utilisation"],
              footerContact: {
                address: "123 Rue de la Finance",
                city: "Paris 75001",
                country: "France",
                phone: "+33 1 23 45 67 89",
                email: "contact@azalee-patrimoine.com"
              },
              footerExpertise: ["Gestion patrimoniale", "Conseil fiscal", "Investissement immobilier", "Planification successorale"],
              footerOutils: ["Calculatrice fiscale", "Simulateur d'investissement", "Guide patrimonial", "Analyse de risque"],
              footerEntreprise: ["À propos", "Notre équipe", "Carrières", "Actualités"]
            }
          };

      // Merge CMS sections with current content
      const mergedSections = homepageSections.map(section => {
        const cmsSection = cmsSections.find(s => s.section_name === section.id);
        const currentSectionContent = currentContent[section.id] || {};
        
        console.log(`CMS - Section ${section.id}:`, {
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

      console.log('CMS - Loaded sections:', mergedSections.length);
      console.log('CMS - Current content keys:', Object.keys(currentContent));
      console.log('CMS - Sample content for hero:', currentContent.hero);
      console.log('CMS - Sample merged section:', mergedSections[0]);
      console.log('CMS - All sections with content:', mergedSections.filter(s => s.hasCurrentContent));
      setSections(mergedSections);
    } catch (error) {
      console.error('Error loading sections:', error);
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
      console.log('Saving content for section:', editingSection);
      console.log('Form data:', formData);
      
      const response = await fetch('/api/cms/content/homepage', {
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
        
        alert('Contenu sauvegardé avec succès! Tous les visiteurs verront la mise à jour IMMÉDIATEMENT.');
        
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
            const reloadResponse = await fetch('/api/pages/homepage/reload', {
              method: 'POST'
            });
            const reloadData = await reloadResponse.json();
            console.log('Force reload response:', reloadData);
            
            // Also test normal API
            const testResponse = await fetch('/api/pages/homepage');
            const testData = await testResponse.json();
            console.log('Homepage content after save:', testData);
            
            alert(`Contenu sauvegardé!\n\nSections chargées: ${reloadData.sectionsCount}\nTimestamp: ${new Date(reloadData.timestamp).toLocaleTimeString()}`);
          } catch (error) {
            console.error('Error testing reload:', error);
          }
        }, 1000);
        
      } else {
        alert('Erreur lors de la sauvegarde: ' + (responseData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error saving:', error);
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

  const initializeSampleContent = async () => {
    try {
      const response = await fetch('/api/cms/content/homepage/init', {
        method: 'POST'
      });
      
      if (response.ok) {
        await loadSections();
        alert('Contenu d\'exemple initialisé avec succès!');
      } else {
        alert('Erreur lors de l\'initialisation du contenu');
      }
    } catch (error) {
      console.error('Error initializing content:', error);
      alert('Erreur lors de l\'initialisation du contenu');
    }
  };

  const testContentFlow = async () => {
    try {
      console.log('=== TESTING CONTENT FLOW ===');
      
      // 1. Test CMS content loading
      console.log('1. Testing CMS content loading...');
      const cmsResponse = await fetch('/api/cms/content/homepage');
      const cmsData = await cmsResponse.json();
      console.log('CMS content:', cmsData);
      
      // 2. Test public homepage API
      console.log('2. Testing public homepage API...');
      const publicResponse = await fetch('/api/pages/homepage');
      const publicData = await publicResponse.json();
      console.log('Public homepage content:', publicData);
      
      // 3. Test database connection
      console.log('3. Testing database connection...');
      const dbResponse = await fetch('/api/cms/test');
      const dbData = await dbResponse.json();
      console.log('Database status:', dbData);
      
      // 4. Show results
      alert(`Test terminé!\n\nCMS Sections: ${cmsData.length}\nPublic Sections: ${Object.keys(publicData).length}\nDB Status: ${dbData.status}\n\nVérifiez la console pour plus de détails.`);
      
    } catch (error) {
      console.error('Test error:', error);
      alert('Erreur lors du test: ' + error.message);
    }
  };

  const forceReloadHomepage = () => {
    // Trigger multiple events to ensure homepage reloads
    window.dispatchEvent(new CustomEvent('contentUpdated'));
    
    // Update localStorage to trigger cross-tab updates
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cms_content_updated', Date.now().toString());
    }
    
    // Open homepage in new tab to see changes
    const homepageWindow = window.open('/', '_blank');
    
    alert('Événements de rechargement déclenchés! La page d\'accueil devrait se mettre à jour automatiquement.');
  };

  const renderField = (field) => {
    const value = formData[field.key] || '';
    
    if (field.type === 'textarea') {
      return (
        <textarea
          value={value}
          onChange={(e) => handleInputChange(field.key, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD]"
          rows={4}
          placeholder={`Saisissez ${field.label.toLowerCase()}...`}
        />
      );
    }
    
    return (
      <input
        type={field.type}
        value={value}
        onChange={(e) => handleInputChange(field.key, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD]"
        placeholder={`Saisissez ${field.label.toLowerCase()}...`}
      />
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4EBBBD] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des sections...</p>
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
            <div className="flex items-center">
              <Image
                src="/images/azalee-logo.png"
                alt="Azalée Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold text-[#112033]">CMS Homepage</h1>
                <p className="text-gray-600">Gestion du contenu de la page d'accueil</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => router.push('/cms/dashboard')}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Retour Dashboard
              </button>
              <button
                onClick={() => window.open('/', '_blank')}
                className="px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9B9D]"
              >
                Voir Site
              </button>
              <button
                onClick={initializeSampleContent}
                className="px-4 py-2 bg-[#B99066] text-white rounded-md hover:bg-[#A67A5A]"
              >
                Initialiser Contenu
              </button>
              <button
                onClick={testContentFlow}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Test Flux
              </button>
              <button
                onClick={forceReloadHomepage}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Recharger Site
              </button>
              <button
                onClick={loadSections}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Recharger CMS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {sections.map((section) => {
            const isEditing = editingSection === section.id;
            
            return (
              <div key={section.id} className="bg-white rounded-lg shadow-sm border">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#112033]">{section.name}</h3>
                      <p className="text-gray-600 text-sm">{section.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      {!isEditing ? (
                        <button
                          onClick={() => handleEdit(section)}
                          className="px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9B9D] text-sm"
                        >
                          Modifier
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={handleSave}
                            disabled={saving}
                            id="save-button"
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 text-sm"
                          >
                            {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                          </button>
                          <button
                            onClick={handleCancel}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 text-sm"
                          >
                            Annuler
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {isEditing ? (
                    <div className="space-y-4">
                      {section.fields.map((field) => (
                        <div key={field.key}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {field.label}
                          </label>
                          {renderField(field)}
                        </div>
                      ))}
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
