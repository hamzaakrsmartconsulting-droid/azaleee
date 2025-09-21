"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeftIcon, 
  HomeIcon, 
  EyeIcon, 
  ArrowPathIcon, 
  CheckCircleIcon,
  XMarkIcon,
  PlusIcon,
  TrashIcon,
  PencilIcon
} from '@heroicons/react/24/outline';

export default function CmsPatrimoineBilanPage() {
  const router = useRouter();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);

  // Default content extracted from the public page
  const defaultContent = {
    hero: {
      title: "Bilan patrimonial",
      subtitle: "Un bilan patrimonial est l'équivalent d'une radiographie complète de votre situation financière, fiscale et familiale.",
      highlight: "👉 C'est le point de départ indispensable pour construire une stratégie patrimoniale sur mesure.",
      statistics: [
        { label: "Actifs analysés", value: "€1.25M", description: "Patrimoine moyen" },
        { label: "Optimisations", value: "8-12", description: "Solutions identifiées" },
        { label: "Économies", value: "€85K", description: "Potentielles" },
        { label: "Satisfaction", value: "94.7%", description: "Clients satisfaits" }
      ],
      buttons: [
        { text: "Réaliser mon bilan", type: "primary" },
        { text: "Télécharger l'exemple", type: "secondary" }
      ]
    },
    chart: {
      title: "Indicateurs de bilan patrimonial",
      data: [
        { label: "Patrimoine moyen analysé", value: "€1,250,000" },
        { label: "Optimisations identifiées", value: "8-12" },
        { label: "Économies potentielles", value: "€85,000" },
        { label: "Durée d'analyse", value: "2-3 semaines" },
        { label: "Taux de satisfaction", value: "94.7%" }
      ],
      chartImage: "/images/variation-chart-image-944f04.png"
    },
    pourquoi: {
      title: "Pourquoi réaliser un bilan patrimonial ?",
      subtitle: "Un bilan patrimonial est l'équivalent d'une radiographie complète de votre situation financière, fiscale et familiale.",
      benefits: [
        {
          icon: "📊",
          title: "Faire un état des lieux de vos actifs",
          description: "Immobilier, placements financiers, épargne professionnelle, parts sociales…"
        },
        {
          icon: "📋",
          title: "Identifier vos passifs",
          description: "Emprunts, dettes fiscales, engagements"
        },
        {
          icon: "💰",
          title: "Évaluer votre fiscalité actuelle et ses optimisations possibles",
          description: "Identifier les leviers d'optimisation fiscale disponibles"
        },
        {
          icon: "🎯",
          title: "Mettre en cohérence vos objectifs de vie",
          description: "Retraite, transmission, projets personnels"
        }
      ]
    },
    processus: {
      title: "Notre processus de bilan patrimonial",
      steps: [
        {
          step: "1",
          title: "Collecte d'informations",
          description: "Analyse de vos documents et situation actuelle"
        },
        {
          step: "2",
          title: "Analyse approfondie",
          description: "Étude de votre patrimoine et identification des optimisations"
        },
        {
          step: "3",
          title: "Recommandations personnalisées",
          description: "Présentation de solutions adaptées à vos objectifs"
        },
        {
          step: "4",
          title: "Suivi et ajustements",
          description: "Accompagnement dans la mise en œuvre des solutions"
        }
      ]
    },
    cta: {
      title: "Prêt à réaliser votre bilan patrimonial ?",
      subtitle: "Nos experts vous accompagnent dans l'analyse complète de votre situation patrimoniale pour identifier les meilleures opportunités d'optimisation.",
      buttonText: "Demander un bilan personnalisé"
    }
  };

  // Sections configuration
  const patrimoineBilanSections = [
    {
      id: 'hero',
      title: 'Section Hero',
      description: 'Titre principal, statistiques et navigation',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text', required: true },
        { key: 'subtitle', label: 'Sous-titre', type: 'textarea', rows: 3 },
        { key: 'highlight', label: 'Texte de mise en avant', type: 'textarea', rows: 2 },
        { key: 'statistics', label: 'Statistiques', type: 'statisticsList', help: 'Statistiques principales' },
        { key: 'buttons', label: 'Boutons CTA', type: 'ctaButtons', help: 'Boutons d\'action' }
      ]
    },
    {
      id: 'chart',
      title: 'Section Graphique',
      description: 'Indicateurs et données visuelles',
      fields: [
        { key: 'title', label: 'Titre du graphique', type: 'text' },
        { key: 'data', label: 'Données du graphique', type: 'chartData', help: 'Données à afficher' },
        { key: 'chartImage', label: 'Image du graphique', type: 'text' }
      ]
    },
    {
      id: 'pourquoi',
      title: 'Pourquoi faire un bilan',
      description: 'Avantages et bénéfices',
      fields: [
        { key: 'title', label: 'Titre de la section', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'textarea', rows: 2 },
        { key: 'benefits', label: 'Avantages', type: 'benefitsList', help: 'Liste des avantages' }
      ]
    },
    {
      id: 'processus',
      title: 'Processus de bilan',
      description: 'Étapes du processus',
      fields: [
        { key: 'title', label: 'Titre de la section', type: 'text' },
        { key: 'steps', label: 'Étapes', type: 'stepsList', help: 'Liste des étapes du processus' }
      ]
    },
    {
      id: 'cta',
      title: 'Section CTA',
      description: 'Appel à l\'action final',
      fields: [
        { key: 'title', label: 'Titre CTA', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre CTA', type: 'textarea', rows: 2 },
        { key: 'buttonText', label: 'Texte du bouton', type: 'text' }
      ]
    }
  ];

  // Load sections from CMS
  const loadSections = async () => {
    try {
      const response = await fetch('/api/cms/content/patrimoine-bilan');
      const data = await response.json();
      
      if (data.success && data.content) {
        const mergedSections = patrimoineBilanSections.map(section => ({
          ...section,
          cmsData: data.content[section.id] || {},
          hasCmsContent: !!data.content[section.id]
        }));
        setSections(mergedSections);
      } else {
        const defaultSections = patrimoineBilanSections.map(section => ({
          ...section,
          cmsData: {},
          hasCmsContent: false
        }));
        setSections(defaultSections);
      }
    } catch (error) {
      console.error('Error loading sections:', error);
      const defaultSections = patrimoineBilanSections.map(section => ({
        ...section,
        cmsData: {},
        hasCmsContent: false
      }));
      setSections(defaultSections);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit section
  const handleEditSection = (section) => {
    setEditingSection(section);
    const currentData = section.hasCmsContent ? section.cmsData : defaultContent[section.id] || {};
    setFormData(currentData);
  };

  // Handle save section
  const handleSaveSection = async () => {
    if (!editingSection) return;
    
    setSaving(true);
    try {
      const response = await fetch('/api/cms/content/patrimoine-bilan', {
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
        // Update local state
        setSections(prev => prev.map(section => 
          section.id === editingSection.id 
            ? { ...section, cmsData: formData, hasCmsContent: true }
            : section
        ));
        
        setEditingSection(null);
        setFormData({});
        
        // Trigger real-time update
        window.dispatchEvent(new CustomEvent('cmsContentUpdated'));
        
        alert('Contenu sauvegardé avec succès !');
      } else {
        alert('Erreur lors de la sauvegarde');
      }
    } catch (error) {
      console.error('Error saving section:', error);
      alert('Erreur lors de la sauvegarde');
    } finally {
      setSaving(false);
    }
  };

  // Handle initialize default content
  const handleInitializeDefaultContent = () => {
    if (!editingSection) return;
    const defaultData = defaultContent[editingSection.id] || {};
    setFormData(defaultData);
  };

  // Custom renderers
  const renderStatisticsList = (field, value, onChange) => {
    const statistics = value || [];
    
    return (
      <div className="space-y-4">
        {statistics.map((stat, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                <input
                  type="text"
                  value={stat.label || ''}
                  onChange={(e) => {
                    const newStats = [...statistics];
                    newStats[index] = { ...stat, label: e.target.value };
                    onChange(newStats);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Actifs analysés"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Valeur</label>
                <input
                  type="text"
                  value={stat.value || ''}
                  onChange={(e) => {
                    const newStats = [...statistics];
                    newStats[index] = { ...stat, value: e.target.value };
                    onChange(newStats);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="€1.25M"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input
                  type="text"
                  value={stat.description || ''}
                  onChange={(e) => {
                    const newStats = [...statistics];
                    newStats[index] = { ...stat, description: e.target.value };
                    onChange(newStats);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Patrimoine moyen"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                const newStats = statistics.filter((_, i) => i !== index);
                onChange(newStats);
              }}
              className="mt-2 text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
            >
              <TrashIcon className="w-4 h-4" />
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...statistics, { label: '', value: '', description: '' }])}
          className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-gray-400 hover:text-gray-800 flex items-center justify-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Ajouter une statistique
        </button>
      </div>
    );
  };

  const renderBenefitsList = (field, value, onChange) => {
    const benefits = value || [];
    
    return (
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Icône</label>
                <input
                  type="text"
                  value={benefit.icon || ''}
                  onChange={(e) => {
                    const newBenefits = [...benefits];
                    newBenefits[index] = { ...benefit, icon: e.target.value };
                    onChange(newBenefits);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="📊"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                <input
                  type="text"
                  value={benefit.title || ''}
                  onChange={(e) => {
                    const newBenefits = [...benefits];
                    newBenefits[index] = { ...benefit, title: e.target.value };
                    onChange(newBenefits);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Faire un état des lieux de vos actifs"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={benefit.description || ''}
                  onChange={(e) => {
                    const newBenefits = [...benefits];
                    newBenefits[index] = { ...benefit, description: e.target.value };
                    onChange(newBenefits);
                  }}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Immobilier, placements financiers..."
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                const newBenefits = benefits.filter((_, i) => i !== index);
                onChange(newBenefits);
              }}
              className="mt-2 text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
            >
              <TrashIcon className="w-4 h-4" />
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...benefits, { icon: '', title: '', description: '' }])}
          className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-gray-400 hover:text-gray-800 flex items-center justify-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Ajouter un avantage
        </button>
      </div>
    );
  };

  const renderStepsList = (field, value, onChange) => {
    const steps = value || [];
    
    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Étape</label>
                <input
                  type="text"
                  value={step.step || ''}
                  onChange={(e) => {
                    const newSteps = [...steps];
                    newSteps[index] = { ...step, step: e.target.value };
                    onChange(newSteps);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                <input
                  type="text"
                  value={step.title || ''}
                  onChange={(e) => {
                    const newSteps = [...steps];
                    newSteps[index] = { ...step, title: e.target.value };
                    onChange(newSteps);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Collecte d'informations"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={step.description || ''}
                  onChange={(e) => {
                    const newSteps = [...steps];
                    newSteps[index] = { ...step, description: e.target.value };
                    onChange(newSteps);
                  }}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Analyse de vos documents..."
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                const newSteps = steps.filter((_, i) => i !== index);
                onChange(newSteps);
              }}
              className="mt-2 text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
            >
              <TrashIcon className="w-4 h-4" />
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...steps, { step: '', title: '', description: '' }])}
          className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-gray-400 hover:text-gray-800 flex items-center justify-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Ajouter une étape
        </button>
      </div>
    );
  };

  const renderCtaButtons = (field, value, onChange) => {
    const buttons = value || [];
    
    return (
      <div className="space-y-4">
        {buttons.map((button, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Texte du bouton</label>
                <input
                  type="text"
                  value={button.text || ''}
                  onChange={(e) => {
                    const newButtons = [...buttons];
                    newButtons[index] = { ...button, text: e.target.value };
                    onChange(newButtons);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Réaliser mon bilan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={button.type || 'primary'}
                  onChange={(e) => {
                    const newButtons = [...buttons];
                    newButtons[index] = { ...button, type: e.target.value };
                    onChange(newButtons);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="primary">Principal</option>
                  <option value="secondary">Secondaire</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                const newButtons = buttons.filter((_, i) => i !== index);
                onChange(newButtons);
              }}
              className="mt-2 text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
            >
              <TrashIcon className="w-4 h-4" />
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...buttons, { text: '', type: 'primary' }])}
          className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-gray-400 hover:text-gray-800 flex items-center justify-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Ajouter un bouton
        </button>
      </div>
    );
  };

  const renderChartData = (field, value, onChange) => {
    const data = value || [];
    
    return (
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                <input
                  type="text"
                  value={item.label || ''}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[index] = { ...item, label: e.target.value };
                    onChange(newData);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Patrimoine moyen analysé"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Valeur</label>
                <input
                  type="text"
                  value={item.value || ''}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[index] = { ...item, value: e.target.value };
                    onChange(newData);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="€1,250,000"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                const newData = data.filter((_, i) => i !== index);
                onChange(newData);
              }}
              className="mt-2 text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
            >
              <TrashIcon className="w-4 h-4" />
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...data, { label: '', value: '' }])}
          className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-gray-400 hover:text-gray-800 flex items-center justify-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Ajouter une donnée
        </button>
      </div>
    );
  };

  // Render field based on type
  const renderField = (field, value, onChange) => {
    switch (field.type) {
      case 'statisticsList':
        return renderStatisticsList(field, value, onChange);
      case 'benefitsList':
        return renderBenefitsList(field, value, onChange);
      case 'stepsList':
        return renderStepsList(field, value, onChange);
      case 'ctaButtons':
        return renderCtaButtons(field, value, onChange);
      case 'chartData':
        return renderChartData(field, value, onChange);
      case 'textarea':
        return (
          <textarea
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            rows={field.rows || 3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={field.placeholder}
          />
        );
      default:
        return (
          <input
            type={field.type || 'text'}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={field.placeholder}
            required={field.required}
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
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CMS Patrimoine Bilan</h1>
                <p className="text-sm text-gray-600">Gestion du contenu de la page bilan patrimonial</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/cms/dashboard')}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Dashboard
              </button>
              <button
                onClick={() => window.open('/patrimoine/bilan', '_blank')}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <EyeIcon className="w-5 h-5 mr-2" />
                Voir Page Patrimoine Bilan
              </button>
              <button
                onClick={handleInitializeDefaultContent}
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ArrowPathIcon className="w-5 h-5 mr-2" />
                Initialiser Contenu
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowPathIcon className="w-5 h-5 mr-2" />
                Recharger Site
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sections List */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Sections de Contenu</h2>
            
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                    <p className="text-sm text-gray-600">{section.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {section.hasCmsContent && (
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    )}
                    <button
                      onClick={() => handleEditSection(section)}
                      className="flex items-center px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      <PencilIcon className="w-4 h-4 mr-1" />
                      Modifier
                    </button>
                  </div>
                </div>
                
                {/* Content Preview */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Aperçu du contenu :</h4>
                  <div className="space-y-2">
                    {Object.entries(section.hasCmsContent ? section.cmsData : defaultContent[section.id] || {}).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <div className="text-gray-600 mt-1">
                          {Array.isArray(value) ? (
                            <div className="space-y-1">
                              {value.map((item, index) => (
                                <div key={index} className="pl-4">
                                  {typeof item === 'object' ? (
                                    <div className="space-y-1">
                                      {Object.entries(item).map(([subKey, subValue]) => (
                                        <div key={subKey} className="text-xs">
                                          <span className="font-medium">{subKey}:</span> {String(subValue || '')}
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    String(item || '')
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : typeof value === 'object' ? (
                            <div className="space-y-1">
                              {Object.entries(value).map(([subKey, subValue]) => (
                                <div key={subKey} className="text-xs">
                                  <span className="font-medium">{subKey}:</span> {String(subValue || '')}
                                </div>
                              ))}
                            </div>
                          ) : (
                            String(value || '')
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Edit Form */}
          {editingSection && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Modifier : {editingSection.title}
                </h3>
                <button
                  onClick={() => setEditingSection(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <form className="space-y-6">
                {editingSection.fields.map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {field.help && (
                      <p className="text-xs text-gray-500 mb-2">{field.help}</p>
                    )}
                    {renderField(field, formData[field.key], (value) => {
                      setFormData(prev => ({ ...prev, [field.key]: value }));
                    })}
                  </div>
                ))}

                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setEditingSection(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveSection}
                    disabled={saving}
                    className="px-6 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3A9B9D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}