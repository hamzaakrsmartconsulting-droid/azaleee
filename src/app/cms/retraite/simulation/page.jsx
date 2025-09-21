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

export default function CmsSimulationPage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Simulation sections configuration
  const simulationSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal et introduction',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'textarea' },
        { key: 'steps', label: 'Étapes de Simulation', type: 'simulationSteps' },
        { key: 'ctaButtons', label: 'Boutons CTA', type: 'ctaButtons' }
      ]
    },
    {
      id: 'chart',
      name: 'Graphique',
      description: 'Étapes de la simulation retraite',
      fields: [
        { key: 'title', label: 'Titre du Graphique', type: 'text' },
        { key: 'chartImage', label: 'Image du Graphique', type: 'text' },
        { key: 'chartData', label: 'Données du Graphique', type: 'chartData' }
      ]
    },
    {
      id: 'etapes',
      name: 'Détail des Étapes',
      description: 'Les étapes de votre simulation retraite',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'steps', label: 'Étapes Détaillées', type: 'etapesDetaillees' },
        { key: 'solutions', label: 'Solutions d\'Épargne', type: 'solutionsEpargne' }
      ]
    },
    {
      id: 'conseil',
      name: 'Conseil Azalée',
      description: 'Chez Azalée Patrimoine',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'pillars', label: 'Piliers', type: 'conseilPillars' }
      ]
    },
    {
      id: 'cta',
      name: 'Call to Action',
      description: 'Appel à l\'action final',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'buttonText', label: 'Texte du Bouton', type: 'text' }
      ]
    }
  ];

  // Default content extracted from the real simulation page
  const defaultContent = {
    hero: {
      title: "Simulation retraite",
      subtitle: "Anticipez vos revenus futurs et identifiez les solutions à mettre en place dès aujourd'hui pour préparer votre retraite en toute sérénité.",
      steps: [
        {
          title: "État des lieux",
          description: "Droits acquis (base + complémentaires)",
          icon: "📋",
          color: "#4EBBBD"
        },
        {
          title: "Projection",
          description: "Revenus à la retraite",
          icon: "📈",
          color: "#B99066"
        },
        {
          title: "Comparaison",
          description: "Pension vs niveau souhaité",
          icon: "⚖️",
          color: "#59E2E4"
        },
        {
          title: "Plan d'épargne",
          description: "Solutions complémentaires",
          icon: "📊",
          color: "#4EBBBD"
        }
      ],
      ctaButtons: [
        {
          text: "Lancer ma simulation",
          type: "primary",
          color: "#B99066"
        },
        {
          text: "Voir les exemples",
          type: "secondary",
          color: "#B99066"
        }
      ]
    },
    chart: {
      title: "Étapes de la simulation retraite",
      chartImage: "/images/variation-chart-image-944f04.png",
      chartData: [
        { label: "État des lieux", value: "Droits acquis" },
        { label: "Projection", value: "Revenus futurs" },
        { label: "Comparaison", value: "Niveau souhaité" },
        { label: "Plan d'épargne", value: "Solutions" },
        { label: "Simulations", value: "Personnalisées" }
      ]
    },
    etapes: {
      title: "Les étapes de votre simulation retraite",
      steps: [
        {
          number: "1",
          title: "État des lieux de vos droits acquis",
          description: "Analyse de vos droits acquis (base + complémentaires). Nous recensons l'ensemble de vos trimestres validés et estimons vos droits futurs selon votre carrière actuelle.",
          color: "#4EBBBD"
        },
        {
          number: "2",
          title: "Projection de vos revenus à la retraite",
          description: "Calcul précis de vos revenus futurs selon différents scénarios d'âge de départ et d'évolution de carrière.",
          color: "#B99066"
        },
        {
          number: "3",
          title: "Comparaison entre pension attendue et niveau de vie souhaité",
          description: "Analyse de l'écart entre vos revenus futurs et le niveau de vie souhaité pour identifier les besoins de complément.",
          color: "#59E2E4"
        },
        {
          number: "4",
          title: "Mise en place d'un plan d'épargne complémentaire adapté",
          description: "Solutions personnalisées : PER, assurance-vie, immobilier, SCPI selon votre profil et vos objectifs.",
          color: "#4EBBBD"
        }
      ],
      solutions: [
        {
          name: "PER",
          description: "Déductible",
          color: "#4EBBBD"
        },
        {
          name: "Assurance-vie",
          description: "Flexible",
          color: "#B99066"
        },
        {
          name: "Immobilier",
          description: "Revenus locatifs",
          color: "#59E2E4"
        },
        {
          name: "SCPI",
          description: "Mutualisation",
          color: "#4EBBBD"
        }
      ]
    },
    conseil: {
      title: "👉 Chez Azalée Patrimoine",
      description: "Nous réalisons des simulations personnalisées permettant de visualiser vos revenus futurs et d'identifier les solutions à mettre en place dès aujourd'hui.",
      pillars: [
        {
          title: "📊 Analyse précise",
          description: "De vos droits acquis actuels"
        },
        {
          title: "🔮 Projection",
          description: "Revenus futurs selon scénarios"
        },
        {
          title: "🎯 Identification",
          description: "Des besoins de complément"
        },
        {
          title: "🛠️ Solutions",
          description: "Personnalisées et adaptées"
        }
      ]
    },
    cta: {
      title: "Prêt à simuler votre retraite ?",
      description: "Nos experts Azalée Patrimoine vous accompagnent pour réaliser une simulation personnalisée et identifier les meilleures solutions pour votre retraite.",
      buttonText: "Commencer ma simulation"
    }
  };

  // Load sections from CMS
  const loadSections = async () => {
    try {
      const response = await fetch('/api/cms/content/simulation');
      const data = await response.json();
      
      if (data.success && data.content) {
        const mergedSections = simulationSections.map(section => {
          const cmsData = data.content[section.id] || {};
          return {
            ...section,
            cmsData,
            hasCmsContent: Object.keys(cmsData).length > 0,
            currentData: { ...defaultContent[section.id], ...cmsData }
          };
        });
        setSections(mergedSections);
      } else {
        // No CMS content, use default
        const sectionsWithDefaults = simulationSections.map(section => ({
          ...section,
          cmsData: {},
          hasCmsContent: false,
          currentData: defaultContent[section.id] || {}
        }));
        setSections(sectionsWithDefaults);
      }
    } catch (error) {
      console.error('Error loading sections:', error);
      // Fallback to default content
        const sectionsWithDefaults = simulationSections.map(section => ({
        ...section,
        cmsData: {},
        hasCmsContent: false,
        currentData: defaultContent[section.id] || {}
      }));
      setSections(sectionsWithDefaults);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSections();
  }, []);

  const handleEditSection = (section) => {
    setEditingSection(section);
    setFormData(section.currentData || {});
  };

  const handleSaveSection = async () => {
    if (!editingSection) return;
    
    setSaving(true);
    try {
      const response = await fetch('/api/cms/content/simulation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sectionId: editingSection.id,
          content: formData
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Update the section with new content
        setSections(prev => prev.map(section => 
          section.id === editingSection.id 
            ? { 
                ...section, 
                cmsData: formData, 
                hasCmsContent: true,
                currentData: { ...defaultContent[section.id], ...formData }
              }
            : section
        ));
        setEditingSection(null);
        setFormData({});
        
        // Trigger page refresh
        window.dispatchEvent(new CustomEvent('cmsContentUpdated', { 
          detail: { pageSlug: 'simulation' } 
        }));
      }
    } catch (error) {
      console.error('Error saving section:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleInitializeDefaultContent = () => {
    if (!editingSection) return;
    setFormData(defaultContent[editingSection.id] || {});
  };

  const renderField = (field, value, onChange) => {
    if (!field) return null;
    
    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(field.key, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
            placeholder={field.label}
          />
        );
      
      case 'textarea':
        return (
          <textarea
            value={value || ''}
            onChange={(e) => onChange(field.key, e.target.value)}
            rows={field.rows || 3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
            placeholder={field.label}
          />
        );
      
      case 'ctaButtons':
        return renderCtaButtons(value || [], onChange, field.key);
      
      case 'protectionCards':
        return renderProtectionCards(value || [], onChange, field.key);
      
      case 'chartData':
        return renderChartData(value || [], onChange, field.key);
      
      case 'protectionTypes':
        return renderProtectionTypes(value || [], onChange, field.key);
      
      case 'approchePillars':
        return renderApprochePillars(value || [], onChange, field.key);
      
      default:
        return (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(field.key, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
            placeholder={field.label}
          />
        );
    }
  };

  const renderCtaButtons = (buttons, onChange, fieldKey) => {
    const addButton = () => {
      const newButtons = [...buttons, { text: '', type: 'primary', color: '' }];
      onChange(fieldKey, newButtons);
    };

    const removeButton = (index) => {
      const newButtons = buttons.filter((_, i) => i !== index);
      onChange(fieldKey, newButtons);
    };

    const updateButton = (index, field, value) => {
      const newButtons = [...buttons];
      newButtons[index] = { ...newButtons[index], [field]: value };
      onChange(fieldKey, newButtons);
    };

    return (
      <div className="space-y-4">
        {buttons.map((button, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <input
                type="text"
                value={button.text || ''}
                onChange={(e) => updateButton(index, 'text', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Texte du bouton"
              />
              <select
                value={button.type || 'primary'}
                onChange={(e) => updateButton(index, 'type', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
              </select>
              <input
                type="text"
                value={button.color || ''}
                onChange={(e) => updateButton(index, 'color', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Couleur (#hex)"
              />
            </div>
            <button
              type="button"
              onClick={() => removeButton(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addButton}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter un bouton
        </button>
      </div>
    );
  };

  const renderProtectionCards = (cards, onChange, fieldKey) => {
    const addCard = () => {
      const newCards = [...cards, { title: '', percentage: '', description: '', icon: '', color: '' }];
      onChange(fieldKey, newCards);
    };

    const removeCard = (index) => {
      const newCards = cards.filter((_, i) => i !== index);
      onChange(fieldKey, newCards);
    };

    const updateCard = (index, field, value) => {
      const newCards = [...cards];
      newCards[index] = { ...newCards[index], [field]: value };
      onChange(fieldKey, newCards);
    };

    return (
      <div className="space-y-4">
        {cards.map((card, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-3">
              <input
                type="text"
                value={card.title || ''}
                onChange={(e) => updateCard(index, 'title', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Titre"
              />
              <input
                type="text"
                value={card.percentage || ''}
                onChange={(e) => updateCard(index, 'percentage', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Pourcentage/Valeur"
              />
              <input
                type="text"
                value={card.description || ''}
                onChange={(e) => updateCard(index, 'description', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Description"
              />
              <input
                type="text"
                value={card.icon || ''}
                onChange={(e) => updateCard(index, 'icon', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Icône (emoji)"
              />
              <input
                type="text"
                value={card.color || ''}
                onChange={(e) => updateCard(index, 'color', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Couleur (#hex)"
              />
            </div>
            <button
              type="button"
              onClick={() => removeCard(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addCard}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter une carte
        </button>
      </div>
    );
  };

  const renderChartData = (data, onChange, fieldKey) => {
    const addData = () => {
      const newData = [...data, { label: '', value: '' }];
      onChange(fieldKey, newData);
    };

    const removeData = (index) => {
      const newData = data.filter((_, i) => i !== index);
      onChange(fieldKey, newData);
    };

    const updateData = (index, field, value) => {
      const newData = [...data];
      newData[index] = { ...newData[index], [field]: value };
      onChange(fieldKey, newData);
    };

    return (
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={item.label || ''}
              onChange={(e) => updateData(index, 'label', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              placeholder="Label"
            />
            <input
              type="text"
              value={item.value || ''}
              onChange={(e) => updateData(index, 'value', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              placeholder="Valeur"
            />
            <button
              type="button"
              onClick={() => removeData(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addData}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter une donnée
        </button>
      </div>
    );
  };

  const renderProtectionTypes = (types, onChange, fieldKey) => {
    const addType = () => {
      const newTypes = [...types, { title: '', description: '', icon: '', color: '' }];
      onChange(fieldKey, newTypes);
    };

    const removeType = (index) => {
      const newTypes = types.filter((_, i) => i !== index);
      onChange(fieldKey, newTypes);
    };

    const updateType = (index, field, value) => {
      const newTypes = [...types];
      newTypes[index] = { ...newTypes[index], [field]: value };
      onChange(fieldKey, newTypes);
    };

    return (
      <div className="space-y-4">
        {types.map((type, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
              <input
                type="text"
                value={type.title || ''}
                onChange={(e) => updateType(index, 'title', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Titre"
              />
              <input
                type="text"
                value={type.description || ''}
                onChange={(e) => updateType(index, 'description', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Description"
              />
              <input
                type="text"
                value={type.icon || ''}
                onChange={(e) => updateType(index, 'icon', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Icône (emoji)"
              />
              <input
                type="text"
                value={type.color || ''}
                onChange={(e) => updateType(index, 'color', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Couleur (#hex)"
              />
            </div>
            <button
              type="button"
              onClick={() => removeType(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addType}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter un type
        </button>
      </div>
    );
  };

  const renderApprochePillars = (pillars, onChange, fieldKey) => {
    const addPillar = () => {
      const newPillars = [...pillars, { title: '', description: '' }];
      onChange(fieldKey, newPillars);
    };

    const removePillar = (index) => {
      const newPillars = pillars.filter((_, i) => i !== index);
      onChange(fieldKey, newPillars);
    };

    const updatePillar = (index, field, value) => {
      const newPillars = [...pillars];
      newPillars[index] = { ...newPillars[index], [field]: value };
      onChange(fieldKey, newPillars);
    };

    return (
      <div className="space-y-3">
        {pillars.map((pillar, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={pillar.title || ''}
              onChange={(e) => updatePillar(index, 'title', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              placeholder="Titre"
            />
            <input
              type="text"
              value={pillar.description || ''}
              onChange={(e) => updatePillar(index, 'description', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              placeholder="Description"
            />
            <button
              type="button"
              onClick={() => removePillar(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addPillar}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter un pilier
        </button>
      </div>
    );
  };

  const handleFormChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
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
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/images/logo-azalee.png"
                alt="Azalee Wealth"
                width={40}
                height={40}
                className="mr-3"
              />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">CMS Simulation</h1>
                <p className="text-sm text-gray-500">Gestion du contenu de la page simulation retraite</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/cms/dashboard')}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => router.push('/retraite/simulation')}
                className="px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C] transition-colors"
              >
                Voir Page Simulation
              </button>
              <button
                onClick={handleInitializeDefaultContent}
                className="px-4 py-2 bg-[#B99066] text-white rounded-md hover:bg-[#A67A5A] transition-colors"
              >
                Initialiser Contenu
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Recharger Site
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Sections List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sections de Contenu</h2>
            
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
                    <p className="text-sm text-gray-500">{section.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {section.hasCmsContent && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckIcon className="w-3 h-3 mr-1" />
                        CMS
                      </span>
                    )}
                    <button
                      onClick={() => handleEditSection(section)}
                      className="p-2 text-gray-400 hover:text-[#4EBBBD] transition-colors"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Content Preview */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Aperçu du contenu :</h4>
                  <div className="space-y-2">
                    {Object.entries(section.currentData || {}).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <div className="text-gray-600 mt-1">
                          {Array.isArray(value) ? (
                            <ul className="list-disc list-inside space-y-1">
                              {value.map((item, index) => (
                                <li key={index}>
                                  {typeof item === 'object' ? (
                                    <span>{item.title || item.name || item.text || JSON.stringify(item)}</span>
                                  ) : (
                                    <span>{item}</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          ) : typeof value === 'object' ? (
                            <span>{value.title || value.name || value.text || JSON.stringify(value)}</span>
                          ) : (
                            <span>{value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Edit Form */}
          {editingSection && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Modifier : {editingSection.name}
                </h2>
                <button
                  onClick={() => setEditingSection(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleSaveSection(); }} className="space-y-6">
                {editingSection.fields.map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {renderField(field, formData[field.key], handleFormChange)}
                    {field.help && (
                      <p className="mt-1 text-sm text-gray-500">{field.help}</p>
                    )}
                  </div>
                ))}

                <div className="flex items-center justify-end space-x-4 pt-6 border-t">
                  <button
                    type="button"
                    onClick={() => setEditingSection(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C] transition-colors disabled:opacity-50"
                  >
                    {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
