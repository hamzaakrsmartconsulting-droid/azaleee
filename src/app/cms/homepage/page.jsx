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
  ArrowDownIcon
} from '@heroicons/react/24/outline';

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
        { key: 'heroBackgrounds', label: 'Liste des Images', type: 'heroBackgrounds' }
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
        { key: 'figures', label: 'Chiffres', type: 'keyFigures' }
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
        { key: 'teamValues', label: 'Valeurs de l\'équipe', type: 'teamValues' }
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
        { key: 'steps', label: 'Étapes', type: 'processSteps' }
      ]
    },
    {
      id: 'stats',
      name: 'Statistiques',
      description: 'Statistiques et métriques',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'stats', label: 'Statistiques', type: 'stats' }
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
        { key: 'partners', label: 'Liste des Partenaires', type: 'partners' }
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
        { key: 'footerLinks', label: 'Liens Footer', type: 'footerLinks' },
        { key: 'contactPhone', label: 'Téléphone', type: 'text' },
        { key: 'contactEmail', label: 'Email', type: 'text' }
      ]
    }
  ];

  // Fonctions de rendu pour les différents types de contenu
  const renderHeroBackgrounds = (field, value) => {
    const backgrounds = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Images de Fond Hero
          </label>
          <button
            type="button"
            onClick={() => {
              const newBackgrounds = [...backgrounds, ''];
              handleInputChange(field.key, newBackgrounds);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter une image
          </button>
        </div>
        
        {backgrounds.map((bg, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <input
                type="text"
                value={bg}
                onChange={(e) => {
                  const newBackgrounds = [...backgrounds];
                  newBackgrounds[index] = e.target.value;
                  handleInputChange(field.key, newBackgrounds);
                }}
                placeholder="URL de l'image (ex: /images/hero1.jpg)"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  const newBackgrounds = [...backgrounds];
                  newBackgrounds.splice(index, 1);
                  handleInputChange(field.key, newBackgrounds);
                }}
                className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        
        {backgrounds.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucune image de fond définie
          </div>
        )}
      </div>
    );
  };

  const renderKeyFigures = (field, value) => {
    const figures = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Chiffres Clés
          </label>
          <button
            type="button"
            onClick={() => {
              const newFigures = [...figures, { number: '', label: '' }];
              handleInputChange(field.key, newFigures);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un chiffre
          </button>
        </div>
        
        {figures.map((figure, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={figure.number || ''}
                onChange={(e) => {
                  const newFigures = [...figures];
                  newFigures[index] = { ...newFigures[index], number: e.target.value };
                  handleInputChange(field.key, newFigures);
                }}
                placeholder="Chiffre (ex: 30+)"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={figure.label || ''}
                onChange={(e) => {
                  const newFigures = [...figures];
                  newFigures[index] = { ...newFigures[index], label: e.target.value };
                  handleInputChange(field.key, newFigures);
                }}
                placeholder="Label (ex: Années d'expérience)"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newFigures = [...figures];
                newFigures.splice(index, 1);
                handleInputChange(field.key, newFigures);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {figures.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun chiffre clé défini
          </div>
        )}
      </div>
    );
  };

  const renderTeamValues = (field, value) => {
    const values = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Valeurs de l'Équipe
          </label>
          <button
            type="button"
            onClick={() => {
              const newValues = [...values, { icon: '', title: '', desc: '' }];
              handleInputChange(field.key, newValues);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter une valeur
          </button>
        </div>
        
        {values.map((value, index) => (
          <div key={index} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-3 gap-3">
              <input
                type="text"
                value={value.icon || ''}
                onChange={(e) => {
                  const newValues = [...values];
                  newValues[index] = { ...newValues[index], icon: e.target.value };
                  handleInputChange(field.key, newValues);
                }}
                placeholder="Icône (ex: 🎯)"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={value.title || ''}
                onChange={(e) => {
                  const newValues = [...values];
                  newValues[index] = { ...newValues[index], title: e.target.value };
                  handleInputChange(field.key, newValues);
                }}
                placeholder="Titre (ex: Expertise)"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={value.desc || ''}
                onChange={(e) => {
                  const newValues = [...values];
                  newValues[index] = { ...newValues[index], desc: e.target.value };
                  handleInputChange(field.key, newValues);
                }}
                placeholder="Description"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newValues = [...values];
                newValues.splice(index, 1);
                handleInputChange(field.key, newValues);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {values.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucune valeur définie
          </div>
        )}
      </div>
    );
  };

  const renderProcessSteps = (field, value) => {
    const steps = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Étapes du Processus
          </label>
          <button
            type="button"
            onClick={() => {
              const newSteps = [...steps, { contentTitle: '', contentText: '', button: '', image: '' }];
              handleInputChange(field.key, newSteps);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter une étape
          </button>
        </div>
        
        {steps.map((step, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900">Étape {index + 1}</h4>
              <button
                type="button"
                onClick={() => {
                  const newSteps = [...steps];
                  newSteps.splice(index, 1);
                  handleInputChange(field.key, newSteps);
                }}
                className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={step.contentTitle || ''}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index] = { ...newSteps[index], contentTitle: e.target.value };
                  handleInputChange(field.key, newSteps);
                }}
                placeholder="Titre de l'étape"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={step.button || ''}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index] = { ...newSteps[index], button: e.target.value };
                  handleInputChange(field.key, newSteps);
                }}
                placeholder="Texte du bouton"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <textarea
              value={step.contentText || ''}
              onChange={(e) => {
                const newSteps = [...steps];
                newSteps[index] = { ...newSteps[index], contentText: e.target.value };
                handleInputChange(field.key, newSteps);
              }}
              placeholder="Description de l'étape"
              rows={3}
              className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              value={step.image || ''}
              onChange={(e) => {
                const newSteps = [...steps];
                newSteps[index] = { ...newSteps[index], image: e.target.value };
                handleInputChange(field.key, newSteps);
              }}
              placeholder="URL de l'image"
              className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        ))}
        
        {steps.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucune étape définie
          </div>
        )}
      </div>
    );
  };

  const renderStats = (field, value) => {
    const stats = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Statistiques
          </label>
          <button
            type="button"
            onClick={() => {
              const newStats = [...stats, { value: '', label: '' }];
              handleInputChange(field.key, newStats);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter une statistique
          </button>
        </div>
        
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={stat.value || ''}
                onChange={(e) => {
                  const newStats = [...stats];
                  newStats[index] = { ...newStats[index], value: e.target.value };
                  handleInputChange(field.key, newStats);
                }}
                placeholder="Valeur (ex: 30+)"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={stat.label || ''}
                onChange={(e) => {
                  const newStats = [...stats];
                  newStats[index] = { ...newStats[index], label: e.target.value };
                  handleInputChange(field.key, newStats);
                }}
                placeholder="Label (ex: Années d'expérience)"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newStats = [...stats];
                newStats.splice(index, 1);
                handleInputChange(field.key, newStats);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {stats.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucune statistique définie
          </div>
        )}
      </div>
    );
  };

  const renderPartners = (field, value) => {
    const partners = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Partenaires
          </label>
          <button
            type="button"
            onClick={() => {
              const newPartners = [...partners, ''];
              handleInputChange(field.key, newPartners);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un partenaire
          </button>
        </div>
        
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <input
                type="text"
                value={partner}
                onChange={(e) => {
                  const newPartners = [...partners];
                  newPartners[index] = e.target.value;
                  handleInputChange(field.key, newPartners);
                }}
                placeholder="Nom du partenaire"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newPartners = [...partners];
                newPartners.splice(index, 1);
                handleInputChange(field.key, newPartners);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {partners.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun partenaire défini
          </div>
        )}
      </div>
    );
  };

  const renderFooterLinks = (field, value) => {
    const links = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Liens Footer
          </label>
          <button
            type="button"
            onClick={() => {
              const newLinks = [...links, ''];
              handleInputChange(field.key, newLinks);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un lien
          </button>
        </div>
        
        {links.map((link, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <input
                type="text"
                value={link}
                onChange={(e) => {
                  const newLinks = [...links];
                  newLinks[index] = e.target.value;
                  handleInputChange(field.key, newLinks);
                }}
                placeholder="Nom du lien"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newLinks = [...links];
                newLinks.splice(index, 1);
                handleInputChange(field.key, newLinks);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {links.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun lien défini
          </div>
        )}
      </div>
    );
  };

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
      case 'heroBackgrounds':
        return renderHeroBackgrounds(field, value);
      case 'keyFigures':
        return renderKeyFigures(field, value);
      case 'teamValues':
        return renderTeamValues(field, value);
      case 'processSteps':
        return renderProcessSteps(field, value);
      case 'stats':
        return renderStats(field, value);
      case 'partners':
        return renderPartners(field, value);
      case 'footerLinks':
        return renderFooterLinks(field, value);
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
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                          <div className="flex items-center gap-2 mb-4">
                            <EyeIcon className="w-5 h-5 text-blue-600" />
                            <h4 className="font-semibold text-blue-900">Aperçu du contenu actuel</h4>
                          </div>
                          <div className="space-y-3">
                            {Object.entries(section.currentData).map(([key, value]) => (
                              <div key={key} className="bg-white p-3 rounded-lg border border-blue-100">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                    {key}
                                  </span>
                                </div>
                                <div className="text-gray-700">
                                  {typeof value === 'object' && value !== null ? (
                                    <div className="space-y-2">
                                      {Array.isArray(value) ? (
                                        <div>
                                          <p className="text-sm text-gray-600 mb-2">Liste ({value.length} éléments):</p>
                                          <div className="grid grid-cols-1 gap-2">
                                            {value.slice(0, 3).map((item, index) => (
                                              <div key={index} className="bg-gray-50 p-2 rounded text-xs">
                                                {typeof item === 'object' ? (
                                                  <div className="space-y-1">
                                                    {Object.entries(item).map(([subKey, subValue]) => (
                                                      <div key={subKey} className="flex gap-2">
                                                        <span className="font-medium text-gray-600">{subKey}:</span>
                                                        <span className="text-gray-700">{String(subValue).substring(0, 50)}...</span>
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span>{String(item).substring(0, 100)}...</span>
                                                )}
                                              </div>
                                            ))}
                                            {value.length > 3 && (
                                              <div className="text-xs text-gray-500 italic">
                                                ... et {value.length - 3} autres éléments
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="bg-gray-50 p-2 rounded text-xs">
                                          <pre className="whitespace-pre-wrap">
                                            {JSON.stringify(value, null, 2).substring(0, 200)}...
                                          </pre>
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <p className="text-sm">
                                      {String(value).substring(0, 150)}
                                      {String(value).length > 150 && '...'}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">!</span>
                            </div>
                            <h4 className="font-semibold text-amber-900">Contenu par défaut</h4>
                          </div>
                          <p className="text-amber-800 text-sm">
                            Cette section utilise le contenu par défaut. Cliquez sur "Modifier" pour personnaliser le contenu et le rendre unique à votre site.
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
