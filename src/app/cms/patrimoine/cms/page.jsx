"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  PencilIcon, 
  EyeIcon, 
  CheckIcon, 
  XMarkIcon,
  PlusIcon,
  TrashIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function CmsPatrimoinePage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Patrimoine sections configuration - ALL sections from official patrimoine page
  const patrimoineSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal, description et bouton CTA',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'ctaText', label: 'Texte du Bouton', type: 'text' },
        { key: 'image', label: 'Image', type: 'text' }
      ]
    },
    {
      id: 'essentiel',
      name: 'Section Essentiel',
      description: 'Contenu principal et image',
      fields: [
        { key: 'title', label: 'Titre', type: 'text' },
        { key: 'content', label: 'Contenu', type: 'textarea' },
        { key: 'image', label: 'Image', type: 'text' }
      ]
    },
    {
      id: 'definition',
      name: 'Définition',
      description: 'Définition de la gestion de patrimoine',
      fields: [
        { key: 'title', label: 'Titre', type: 'text' },
        { key: 'content', label: 'Contenu', type: 'textarea' }
      ]
    },
    {
      id: 'services',
      name: 'Services Patrimoine',
      description: 'Liste des services patrimoniaux',
      fields: [
        { key: 'title', label: 'Titre de la Section', type: 'text' },
        { key: 'services', label: 'Services', type: 'servicesList' }
      ]
    },
    {
      id: 'advantages',
      name: 'Avantages',
      description: 'Pourquoi choisir Azalée Patrimoine',
      fields: [
        { key: 'title', label: 'Titre de la Section', type: 'text' },
        { key: 'advantages', label: 'Avantages', type: 'advantagesList' }
      ]
    },
    {
      id: 'cta',
      name: 'Call to Action',
      description: 'Section d\'appel à l\'action',
      fields: [
        { key: 'title', label: 'Titre', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'buttonText', label: 'Texte du Bouton', type: 'text' }
      ]
    },
    {
      id: 'breadcrumb',
      name: 'Breadcrumb',
      description: 'Navigation de fil d\'Ariane',
      fields: [
        { key: 'homeText', label: 'Texte Accueil', type: 'text' },
        { key: 'currentPage', label: 'Page Actuelle', type: 'text' }
      ]
    },
    {
      id: 'essentielDetail',
      name: 'Essentiel Détaillé',
      description: 'Section détaillée sur l\'essentiel du patrimoine',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'cards', label: 'Cartes d\'Information', type: 'infoCards' }
      ]
    },
    {
      id: 'whyChoose',
      name: 'Pourquoi Nous Choisir',
      description: 'Section avec les avantages détaillés',
      fields: [
        { key: 'title', label: 'Titre', type: 'text' },
        { key: 'benefits', label: 'Avantages', type: 'benefitsList' },
        { key: 'buttonText', label: 'Texte du Bouton', type: 'text' }
      ]
    },
    {
      id: 'servicesGrid',
      name: 'Grille de Services',
      description: 'Services détaillés en grille',
      fields: [
        { key: 'services', label: 'Services Détaillés', type: 'detailedServices' }
      ]
    }
  ];

  // Default content that matches EXACTLY the real page content
  const defaultContent = {
    hero: {
      title: "Patrimoine – Protégez et transmettez votre héritage avec Azalée Patrimoine",
      description: "Votre expert en transmission patrimoniale depuis plus de 30 ans. Nous vous accompagnons pour protéger votre famille, optimiser la transmission de votre patrimoine, et sécuriser l'avenir de vos proches avec des solutions personnalisées.",
      ctaText: "Demander un bilan patrimonial gratuit",
      image: "/images/pqtri;oine.webp"
    },
    essentiel: {
      title: "L'essentiel",
      content: "La gestion de patrimoine vise à optimiser la transmission de vos biens tout en minimisant les coûts fiscaux.\n\nNos experts vous accompagnent pour :\n• Protéger votre famille\n• Transmettre efficacement\n• Optimiser la fiscalité\n• Sécuriser l'avenir",
      image: "/images/patrimoine-responsive-content-image.png"
    },
    definition: {
      title: "Gestion de patrimoine : Définition",
      content: "Le patrimoine comprend tous vos biens et droits :\n• Biens immobiliers\n• Placements financiers\n• Entreprises et participations\n• Œuvres d'art et objets de valeur\n• Droits de propriété intellectuelle\n• Assurance vie et contrats\n• Droits à la retraite"
    },
    services: {
      title: "Nos Services Patrimoine",
      services: [
        { name: "Bilan Patrimonial", description: "Analyse complète de votre situation" },
        { name: "Transmission", description: "Optimisation de la transmission" },
        { name: "Protection Famille", description: "Sécurisation de vos proches" },
        { name: "Succession", description: "Gestion des successions" },
        { name: "Donation", description: "Stratégies de donation" },
        { name: "Assurance Vie", description: "Optimisation fiscale" }
      ]
    },
    advantages: {
      title: "Pourquoi choisir Azalée Patrimoine ?",
      advantages: [
        { title: "Expertise", description: "30 ans d'expérience en patrimoine" },
        { title: "Personnalisation", description: "Solutions sur mesure" },
        { title: "Transparence", description: "Conseils clairs et indépendants" },
        { title: "Suivi", description: "Accompagnement personnalisé" }
      ]
    },
    cta: {
      title: "Prêt à optimiser votre patrimoine ?",
      description: "Contactez nos experts pour une analyse personnalisée de votre situation patrimoniale et découvrez les meilleures stratégies de transmission.",
      buttonText: "Demander une consultation gratuite"
    },
    breadcrumb: {
      homeText: "Accueil",
      currentPage: "Patrimoine"
    },
    essentielDetail: {
      title: "L'essentiel du patrimoine",
      cards: [
        {
          title: "Succession et héritage",
          content: "Optimisez la transmission de votre patrimoine avec nos conseils en succession. Nous vous accompagnons pour minimiser les droits de succession et sécuriser l'avenir de vos proches."
        },
        {
          title: "Donation et transmission",
          content: "Anticipez la transmission de votre patrimoine grâce aux donations. Nos experts vous conseillent sur les meilleures stratégies de donation à titre gratuit ou onéreux."
        },
        {
          title: "Protection familiale",
          content: "Protégez votre famille avec des solutions adaptées. De l'assurance-vie aux contrats de prévoyance, nous vous proposons les meilleures options de protection."
        }
      ]
    },
    whyChoose: {
      title: "Pourquoi choisir Azalee Wealth ?",
      benefits: [
        "Plus de 30 ans d'expertise",
        "Conseils personnalisés",
        "Accompagnement complet",
        "Solutions sur mesure"
      ],
      buttonText: "Contactez-nous"
    },
    servicesGrid: {
      services: [
        {
          title: "Bilan patrimonial",
          description: "Analysez votre situation patrimoniale actuelle et identifiez les opportunités d'optimisation.",
          buttonText: "En savoir plus →"
        },
        {
          title: "Conseils patrimoniaux",
          description: "Bénéficiez de conseils personnalisés pour optimiser votre patrimoine et sa transmission.",
          buttonText: "En savoir plus →"
        },
        {
          title: "Transmission",
          description: "Préparez la transmission de votre patrimoine avec des stratégies adaptées à votre situation.",
          buttonText: "En savoir plus →"
        }
      ]
    }
  };

  // Custom renderers for different field types
  const renderServicesList = (field, value) => {
    const services = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Services Patrimoine
          </label>
          <button
            type="button"
            onClick={() => {
              const newServices = [...services, { name: '', description: '' }];
              handleInputChange(field.key, newServices);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un service
          </button>
        </div>
        
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={service.name || ''}
                onChange={(e) => {
                  const newServices = [...services];
                  newServices[index] = { ...newServices[index], name: e.target.value };
                  handleInputChange(field.key, newServices);
                }}
                placeholder="Nom du service"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={service.description || ''}
                onChange={(e) => {
                  const newServices = [...services];
                  newServices[index] = { ...newServices[index], description: e.target.value };
                  handleInputChange(field.key, newServices);
                }}
                placeholder="Description du service"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newServices = [...services];
                newServices.splice(index, 1);
                handleInputChange(field.key, newServices);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {services.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun service défini
          </div>
        )}
      </div>
    );
  };

  const renderAdvantagesList = (field, value) => {
    const advantages = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Avantages
          </label>
          <button
            type="button"
            onClick={() => {
              const newAdvantages = [...advantages, { title: '', description: '' }];
              handleInputChange(field.key, newAdvantages);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un avantage
          </button>
        </div>
        
        {advantages.map((advantage, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={advantage.title || ''}
                onChange={(e) => {
                  const newAdvantages = [...advantages];
                  newAdvantages[index] = { ...newAdvantages[index], title: e.target.value };
                  handleInputChange(field.key, newAdvantages);
                }}
                placeholder="Titre de l'avantage"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={advantage.description || ''}
                onChange={(e) => {
                  const newAdvantages = [...advantages];
                  newAdvantages[index] = { ...newAdvantages[index], description: e.target.value };
                  handleInputChange(field.key, newAdvantages);
                }}
                placeholder="Description de l'avantage"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newAdvantages = [...advantages];
                newAdvantages.splice(index, 1);
                handleInputChange(field.key, newAdvantages);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {advantages.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun avantage défini
          </div>
        )}
      </div>
    );
  };

  const renderInfoCards = (field, value) => {
    const cards = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Cartes d'Information
          </label>
          <button
            type="button"
            onClick={() => {
              const newCards = [...cards, { title: '', content: '' }];
              handleInputChange(field.key, newCards);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter une carte
          </button>
        </div>
        
        {cards.map((card, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-1 gap-3">
              <input
                type="text"
                value={card.title || ''}
                onChange={(e) => {
                  const newCards = [...cards];
                  newCards[index] = { ...newCards[index], title: e.target.value };
                  handleInputChange(field.key, newCards);
                }}
                placeholder="Titre de la carte"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                value={card.content || ''}
                onChange={(e) => {
                  const newCards = [...cards];
                  newCards[index] = { ...newCards[index], content: e.target.value };
                  handleInputChange(field.key, newCards);
                }}
                placeholder="Contenu de la carte"
                rows={3}
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newCards = [...cards];
                newCards.splice(index, 1);
                handleInputChange(field.key, newCards);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {cards.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucune carte définie
          </div>
        )}
      </div>
    );
  };

  const renderBenefitsList = (field, value) => {
    const benefits = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Avantages
          </label>
          <button
            type="button"
            onClick={() => {
              const newBenefits = [...benefits, ''];
              handleInputChange(field.key, newBenefits);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un avantage
          </button>
        </div>
        
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <input
              type="text"
              value={benefit || ''}
              onChange={(e) => {
                const newBenefits = [...benefits];
                newBenefits[index] = e.target.value;
                handleInputChange(field.key, newBenefits);
              }}
              placeholder="Avantage"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => {
                const newBenefits = [...benefits];
                newBenefits.splice(index, 1);
                handleInputChange(field.key, newBenefits);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {benefits.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun avantage défini
          </div>
        )}
      </div>
    );
  };

  const renderDetailedServices = (field, value) => {
    const services = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Services Détaillés
          </label>
          <button
            type="button"
            onClick={() => {
              const newServices = [...services, { title: '', description: '', buttonText: '' }];
              handleInputChange(field.key, newServices);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un service
          </button>
        </div>
        
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-1 gap-3">
              <input
                type="text"
                value={service.title || ''}
                onChange={(e) => {
                  const newServices = [...services];
                  newServices[index] = { ...newServices[index], title: e.target.value };
                  handleInputChange(field.key, newServices);
                }}
                placeholder="Titre du service"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                value={service.description || ''}
                onChange={(e) => {
                  const newServices = [...services];
                  newServices[index] = { ...newServices[index], description: e.target.value };
                  handleInputChange(field.key, newServices);
                }}
                placeholder="Description du service"
                rows={2}
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={service.buttonText || ''}
                onChange={(e) => {
                  const newServices = [...services];
                  newServices[index] = { ...newServices[index], buttonText: e.target.value };
                  handleInputChange(field.key, newServices);
                }}
                placeholder="Texte du bouton"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newServices = [...services];
                newServices.splice(index, 1);
                handleInputChange(field.key, newServices);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {services.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun service défini
          </div>
        )}
      </div>
    );
  };

  const loadSections = async () => {
    try {
      setLoading(true);
      
      // Load CMS content
      const cmsResponse = await fetch('/api/cms/content/patrimoine');
      let cmsSections = [];
      if (cmsResponse.ok) {
        cmsSections = await cmsResponse.json();
      }

      // Merge CMS sections with default content
      const mergedSections = patrimoineSections.map(section => {
        const cmsSection = cmsSections.find(s => s.section_name === section.id);
        const currentSectionContent = defaultContent[section.id] || {};
        
        console.log(`Loading section ${section.id}:`, {
          cmsSection: cmsSection,
          currentSectionContent: currentSectionContent,
          defaultContent: defaultContent[section.id]
        });
        
        // Ensure cmsData is always a valid object
        let cmsData = {};
        if (cmsSection?.content_data) {
          try {
            cmsData = JSON.parse(cmsSection.content_data);
            if (typeof cmsData !== 'object' || cmsData === null) {
              cmsData = {};
            }
          } catch (error) {
            console.error(`Error parsing CMS data for section ${section.id}:`, error);
            cmsData = {};
          }
        }
        
        return {
          ...section,
          cmsData: cmsData,
          currentData: currentSectionContent,
          hasCmsContent: !!cmsSection && Object.keys(cmsData).length > 0,
          hasCurrentContent: Object.keys(currentSectionContent).length > 0,
          lastModified: cmsSection?.updated_at || null
        };
      });

      console.log('CMS - Loaded sections:', mergedSections.length);
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
      
      const response = await fetch('/api/cms/content/patrimoine', {
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
      // Initialize all sections with default content
      for (const section of patrimoineSections) {
        const response = await fetch('/api/cms/content/patrimoine', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            section: section.id,
            data: defaultContent[section.id] || {}
          }),
        });
        
        if (!response.ok) {
          console.error(`Failed to initialize section ${section.id}`);
        }
      }
      
      await loadSections();
      alert('Contenu d\'exemple initialisé avec succès!');
    } catch (error) {
      console.error('Error initializing content:', error);
      alert('Erreur lors de l\'initialisation du contenu');
    }
  };

  const testContentFlow = async () => {
    try {
      console.log('=== TESTING PATRIMOINE CONTENT FLOW ===');
      
      // 1. Test CMS content loading
      console.log('1. Testing CMS content loading...');
      const cmsResponse = await fetch('/api/cms/content/patrimoine');
      const cmsData = await cmsResponse.json();
      console.log('CMS content:', cmsData);
      
      // 2. Test public patrimoine API
      console.log('2. Testing public patrimoine API...');
      const publicResponse = await fetch('/api/pages/patrimoine');
      const publicData = await publicResponse.json();
      console.log('Public patrimoine content:', publicData);
      
      // 3. Show results
      alert(`Test terminé!\n\nCMS Sections: ${cmsData.length}\nPublic Sections: ${Object.keys(publicData).length}\n\nVérifiez la console pour plus de détails.`);
      
    } catch (error) {
      console.error('Test error:', error);
      alert('Erreur lors du test: ' + error.message);
    }
  };

  const forceReloadPatrimoine = () => {
    // Trigger multiple events to ensure patrimoine page reloads
    window.dispatchEvent(new CustomEvent('contentUpdated'));
    
    // Update localStorage to trigger cross-tab updates
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cms_content_updated', Date.now().toString());
    }
    
    // Open patrimoine page in new tab to see changes
    const patrimoineWindow = window.open('/patrimoine', '_blank');
    
    alert('Événements de rechargement déclenchés! La page patrimoine devrait se mettre à jour automatiquement.');
  };

  const renderField = (field) => {
    const value = formData[field.key] || '';
    
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD]"
            rows={4}
            placeholder={`Saisissez ${field.label.toLowerCase()}...`}
          />
        );
      case 'servicesList':
        return renderServicesList(field, value);
      case 'advantagesList':
        return renderAdvantagesList(field, value);
      case 'infoCards':
        return renderInfoCards(field, value);
      case 'benefitsList':
        return renderBenefitsList(field, value);
      case 'detailedServices':
        return renderDetailedServices(field, value);
      default:
        return (
          <input
            type={field.type}
            value={value}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#4EBBBD] focus:border-[#4EBBBD]"
            placeholder={`Saisissez ${field.label.toLowerCase()}...`}
          />
        );
    }
  };

  useEffect(() => {
    loadSections();
  }, []);

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
                <h1 className="text-2xl font-bold text-[#112033]">CMS Patrimoine</h1>
                <p className="text-gray-600">Gestion du contenu de la page patrimoine</p>
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
                onClick={() => window.open('/patrimoine', '_blank')}
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
                onClick={forceReloadPatrimoine}
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
                      {section.hasCmsContent && (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-green-600 font-medium">Contenu CMS actif</span>
                          {section.lastModified && (
                            <span className="text-xs text-gray-500">
                              (Modifié: {new Date(section.lastModified).toLocaleDateString()})
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      {!isEditing ? (
                        <>
                          <button
                            onClick={() => handleEdit(section)}
                            className="flex items-center gap-2 px-3 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9B9D] transition-colors"
                          >
                            <PencilIcon className="w-4 h-4" />
                            Modifier
                          </button>
                          <button
                            onClick={() => window.open('/patrimoine', '_blank')}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                          >
                            <EyeIcon className="w-4 h-4" />
                            Voir
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={handleCancel}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                          >
                            <XMarkIcon className="w-4 h-4" />
                            Annuler
                          </button>
                          <button
                            id="save-button"
                            onClick={handleSave}
                            disabled={saving}
                            className="flex items-center gap-2 px-3 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9B9D] transition-colors disabled:opacity-50"
                          >
                            {saving ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Sauvegarde...
                              </>
                            ) : (
                              <>
                                <CheckIcon className="w-4 h-4" />
                                Sauvegarder
                              </>
                            )}
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Content Preview */}
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">Aperçu du contenu :</h4>
                    <div className="space-y-2">
                      {(() => {
                        const dataToShow = section.hasCmsContent ? section.cmsData : section.currentData;
                        if (!dataToShow || Object.keys(dataToShow).length === 0) {
                          return (
                            <div className="text-sm text-gray-500 italic">
                              Aucun contenu disponible
                            </div>
                          );
                        }
                        return Object.entries(dataToShow).map(([key, value]) => (
                          <div key={key} className="text-sm">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <div className="text-gray-600 mt-1">
                              {typeof value === 'object' && value !== null ? (
                                <div className="text-xs bg-white p-2 rounded border">
                                  {Array.isArray(value) ? (
                                    <div>
                                      <span className="font-medium">Liste ({value.length} éléments):</span>
                                      <ul className="mt-1 ml-4">
                                        {value.slice(0, 3).map((item, idx) => (
                                          <li key={idx} className="text-gray-500">
                                            {typeof item === 'object' ? 
                                              (item.title || item.name || `Élément ${idx + 1}`) : 
                                              String(item).substring(0, 50)
                                            }
                                            {String(item).length > 50 && '...'}
                                          </li>
                                        ))}
                                        {value.length > 3 && <li className="text-gray-400">... et {value.length - 3} autres</li>}
                                      </ul>
                                    </div>
                                  ) : (
                                    <div>
                                      <span className="font-medium">Objet:</span>
                                      <div className="mt-1 text-gray-500">
                                        {Object.keys(value).slice(0, 3).map(key => (
                                          <div key={key}>
                                            {key}: {String(value[key]).substring(0, 30)}
                                            {String(value[key]).length > 30 && '...'}
                                          </div>
                                        ))}
                                        {Object.keys(value).length > 3 && <div>... et {Object.keys(value).length - 3} autres champs</div>}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <span>{String(value || '').substring(0, 200)}
                                {String(value || '').length > 200 && '...'}</span>
                              )}
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>

                  {/* Edit Form */}
                  {isEditing && (
                    <div className="mt-6 p-4 border border-[#4EBBBD] rounded-lg bg-blue-50">
                      <h4 className="font-medium text-[#112033] mb-4">Modifier le contenu :</h4>
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