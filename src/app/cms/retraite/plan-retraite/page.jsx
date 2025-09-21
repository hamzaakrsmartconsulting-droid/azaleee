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

export default function CmsPlanRetraitePage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Plan Retraite sections configuration
  const planRetraiteSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal et introduction',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'textarea' },
        { key: 'solutions', label: 'Solutions', type: 'solutions' },
        { key: 'ctaButtons', label: 'Boutons CTA', type: 'ctaButtons' }
      ]
    },
    {
      id: 'chart',
      name: 'Graphique',
      description: 'Caractéristiques des plans retraite',
      fields: [
        { key: 'title', label: 'Titre du Graphique', type: 'text' },
        { key: 'chartImage', label: 'Image du Graphique', type: 'text' },
        { key: 'chartData', label: 'Données du Graphique', type: 'chartData' }
      ]
    },
    {
      id: 'per',
      name: 'Section PER',
      description: 'Plan Épargne Retraite - loi Pacte',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'features', label: 'Caractéristiques', type: 'perFeatures' }
      ]
    },
    {
      id: 'perco',
      name: 'Section PERCO/PEE',
      description: 'Dispositifs d\'épargne entreprise',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'benefits', label: 'Avantages', type: 'percoBenefits' },
        { key: 'oldEnvelopes', label: 'Anciennes Enveloppes', type: 'oldEnvelopes' }
      ]
    },
    {
      id: 'conseil',
      name: 'Conseil Azalée',
      description: 'Conseil et accompagnement',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'analysis', label: 'Analyse', type: 'analysis' }
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

  // Default content extracted from the real plan-retraite page
  const defaultContent = {
    hero: {
      title: "Plan retraite (PER, PERP, PEE, PERCO…)",
      subtitle: "L'épargne retraite est un pilier essentiel de votre stratégie patrimoniale. Découvrez les solutions adaptées à votre statut et vos objectifs.",
      solutions: [
        {
          title: "PER",
          description: "L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83",
          icon: "📊",
          color: "#4EBBBD"
        },
        {
          title: "PERCO / PEE",
          description: "Dispositifs d'épargne entreprise alimentés par participation, intéressement, abondement",
          icon: "🏢",
          color: "#B99066"
        },
        {
          title: "Anciennes enveloppes",
          description: "PERP, Madelin, Art. 83 : transférables vers le PER",
          icon: "🔄",
          color: "#59E2E4"
        }
      ],
      ctaButtons: [
        {
          text: "Analyser ma situation",
          type: "primary",
          color: "#B99066"
        },
        {
          text: "Comparer les solutions",
          type: "secondary",
          color: "#B99066"
        }
      ]
    },
    chart: {
      title: "Caractéristiques des plans retraite",
      chartImage: "/images/variation-chart-image-944f04.png",
      chartData: [
        { label: "PER - Enveloppe universelle", value: "100%" },
        { label: "Versements déductibles", value: "€10,000" },
        { label: "Sortie en rente/capital", value: "Mixte" },
        { label: "Sortie anticipée", value: "Possible" },
        { label: "Transfert anciennes enveloppes", value: "✓" }
      ]
    },
    per: {
      title: "PER (Plan Épargne Retraite – loi Pacte)",
      description: "L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83",
      features: [
        {
          title: "Avantage fiscal immédiat",
          description: "Versements déductibles du revenu imposable",
          icon: "💰",
          color: "#4EBBBD"
        },
        {
          title: "Sortie flexible",
          description: "Sortie en rente, capital ou mixte",
          icon: "🔄",
          color: "#B99066"
        },
        {
          title: "Sortie anticipée",
          description: "Possible (résidence principale, accident de la vie)",
          icon: "🏠",
          color: "#59E2E4"
        }
      ]
    },
    perco: {
      title: "PERCO / PEE",
      description: "Dispositifs d'épargne entreprise alimentés par participation, intéressement, abondement",
      benefits: [
        {
          title: "Dispositifs d'épargne entreprise",
          description: "Alimentés par participation, intéressement, abondement",
          icon: "✓"
        },
        {
          title: "Abondement employeur",
          description: "Complément de versement de l'entreprise sur vos cotisations",
          icon: "✓"
        },
        {
          title: "Transfert vers PER",
          description: "Possibilité de transférer vers un PER individuel",
          icon: "✓"
        }
      ],
      oldEnvelopes: [
        { name: "PERP", status: "Transférable" },
        { name: "Madelin", status: "Transférable" },
        { name: "Article 83", status: "Transférable" },
        { name: "PERCO", status: "Transférable" }
      ]
    },
    conseil: {
      title: "👉 Conseil Azalée Patrimoine",
      description: "Azalée Patrimoine analyse chaque situation pour choisir le meilleur véhicule d'épargne retraite, en tenant compte de la fiscalité, du statut (salarié, TNS, dirigeant) et des objectifs.",
      analysis: [
        {
          title: "📊 Analyse fiscale",
          description: "Optimisation selon votre tranche d'imposition"
        },
        {
          title: "👔 Statut professionnel",
          description: "Salarié, TNS, dirigeant : solutions adaptées"
        },
        {
          title: "🎯 Objectifs personnels",
          description: "Horizon, montant, flexibilité"
        }
      ]
    },
    cta: {
      title: "Prêt à optimiser votre épargne retraite ?",
      description: "Nos experts Azalée Patrimoine vous accompagnent pour choisir la meilleure solution d'épargne retraite adaptée à votre situation.",
      buttonText: "Analyser ma situation"
    }
  };

  // Load sections from CMS
  const loadSections = async () => {
    try {
      const response = await fetch('/api/cms/content/plan-retraite');
      const data = await response.json();
      
      if (data.success && data.content) {
        const mergedSections = planRetraiteSections.map(section => {
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
        const sectionsWithDefaults = planRetraiteSections.map(section => ({
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
      const sectionsWithDefaults = planRetraiteSections.map(section => ({
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
      const response = await fetch('/api/cms/content/plan-retraite', {
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
          detail: { pageSlug: 'plan-retraite' } 
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
      
      case 'solutions':
        return renderSolutions(value || [], onChange, field.key);
      
      case 'ctaButtons':
        return renderCtaButtons(value || [], onChange, field.key);
      
      case 'chartData':
        return renderChartData(value || [], onChange, field.key);
      
      case 'perFeatures':
        return renderPerFeatures(value || [], onChange, field.key);
      
      case 'percoBenefits':
        return renderPercoBenefits(value || [], onChange, field.key);
      
      case 'oldEnvelopes':
        return renderOldEnvelopes(value || [], onChange, field.key);
      
      case 'analysis':
        return renderAnalysis(value || [], onChange, field.key);
      
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

  const renderSolutions = (solutions, onChange, fieldKey) => {
    const addSolution = () => {
      const newSolutions = [...solutions, { title: '', description: '', icon: '', color: '' }];
      onChange(fieldKey, newSolutions);
    };

    const removeSolution = (index) => {
      const newSolutions = solutions.filter((_, i) => i !== index);
      onChange(fieldKey, newSolutions);
    };

    const updateSolution = (index, field, value) => {
      const newSolutions = [...solutions];
      newSolutions[index] = { ...newSolutions[index], [field]: value };
      onChange(fieldKey, newSolutions);
    };

    return (
      <div className="space-y-4">
        {solutions.map((solution, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
              <input
                type="text"
                value={solution.title || ''}
                onChange={(e) => updateSolution(index, 'title', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Titre"
              />
              <input
                type="text"
                value={solution.description || ''}
                onChange={(e) => updateSolution(index, 'description', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Description"
              />
              <input
                type="text"
                value={solution.icon || ''}
                onChange={(e) => updateSolution(index, 'icon', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Icône (emoji)"
              />
              <input
                type="text"
                value={solution.color || ''}
                onChange={(e) => updateSolution(index, 'color', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Couleur (#hex)"
              />
            </div>
            <button
              type="button"
              onClick={() => removeSolution(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSolution}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter une solution
        </button>
      </div>
    );
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

  const renderPerFeatures = (features, onChange, fieldKey) => {
    const addFeature = () => {
      const newFeatures = [...features, { title: '', description: '', icon: '', color: '' }];
      onChange(fieldKey, newFeatures);
    };

    const removeFeature = (index) => {
      const newFeatures = features.filter((_, i) => i !== index);
      onChange(fieldKey, newFeatures);
    };

    const updateFeature = (index, field, value) => {
      const newFeatures = [...features];
      newFeatures[index] = { ...newFeatures[index], [field]: value };
      onChange(fieldKey, newFeatures);
    };

    return (
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
              <input
                type="text"
                value={feature.title || ''}
                onChange={(e) => updateFeature(index, 'title', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Titre"
              />
              <input
                type="text"
                value={feature.description || ''}
                onChange={(e) => updateFeature(index, 'description', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Description"
              />
              <input
                type="text"
                value={feature.icon || ''}
                onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Icône (emoji)"
              />
              <input
                type="text"
                value={feature.color || ''}
                onChange={(e) => updateFeature(index, 'color', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Couleur (#hex)"
              />
            </div>
            <button
              type="button"
              onClick={() => removeFeature(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addFeature}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter une caractéristique
        </button>
      </div>
    );
  };

  const renderPercoBenefits = (benefits, onChange, fieldKey) => {
    const addBenefit = () => {
      const newBenefits = [...benefits, { title: '', description: '', icon: '' }];
      onChange(fieldKey, newBenefits);
    };

    const removeBenefit = (index) => {
      const newBenefits = benefits.filter((_, i) => i !== index);
      onChange(fieldKey, newBenefits);
    };

    const updateBenefit = (index, field, value) => {
      const newBenefits = [...benefits];
      newBenefits[index] = { ...newBenefits[index], [field]: value };
      onChange(fieldKey, newBenefits);
    };

    return (
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <input
                type="text"
                value={benefit.title || ''}
                onChange={(e) => updateBenefit(index, 'title', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Titre"
              />
              <input
                type="text"
                value={benefit.description || ''}
                onChange={(e) => updateBenefit(index, 'description', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Description"
              />
              <input
                type="text"
                value={benefit.icon || ''}
                onChange={(e) => updateBenefit(index, 'icon', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Icône (emoji)"
              />
            </div>
            <button
              type="button"
              onClick={() => removeBenefit(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addBenefit}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter un avantage
        </button>
      </div>
    );
  };

  const renderOldEnvelopes = (envelopes, onChange, fieldKey) => {
    const addEnvelope = () => {
      const newEnvelopes = [...envelopes, { name: '', status: '' }];
      onChange(fieldKey, newEnvelopes);
    };

    const removeEnvelope = (index) => {
      const newEnvelopes = envelopes.filter((_, i) => i !== index);
      onChange(fieldKey, newEnvelopes);
    };

    const updateEnvelope = (index, field, value) => {
      const newEnvelopes = [...envelopes];
      newEnvelopes[index] = { ...newEnvelopes[index], [field]: value };
      onChange(fieldKey, newEnvelopes);
    };

    return (
      <div className="space-y-3">
        {envelopes.map((envelope, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={envelope.name || ''}
              onChange={(e) => updateEnvelope(index, 'name', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              placeholder="Nom de l'enveloppe"
            />
            <input
              type="text"
              value={envelope.status || ''}
              onChange={(e) => updateEnvelope(index, 'status', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              placeholder="Statut"
            />
            <button
              type="button"
              onClick={() => removeEnvelope(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addEnvelope}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter une enveloppe
        </button>
      </div>
    );
  };

  const renderAnalysis = (analysis, onChange, fieldKey) => {
    const addAnalysis = () => {
      const newAnalysis = [...analysis, { title: '', description: '' }];
      onChange(fieldKey, newAnalysis);
    };

    const removeAnalysis = (index) => {
      const newAnalysis = analysis.filter((_, i) => i !== index);
      onChange(fieldKey, newAnalysis);
    };

    const updateAnalysis = (index, field, value) => {
      const newAnalysis = [...analysis];
      newAnalysis[index] = { ...newAnalysis[index], [field]: value };
      onChange(fieldKey, newAnalysis);
    };

    return (
      <div className="space-y-3">
        {analysis.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={item.title || ''}
              onChange={(e) => updateAnalysis(index, 'title', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              placeholder="Titre"
            />
            <input
              type="text"
              value={item.description || ''}
              onChange={(e) => updateAnalysis(index, 'description', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              placeholder="Description"
            />
            <button
              type="button"
              onClick={() => removeAnalysis(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addAnalysis}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter une analyse
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
                <h1 className="text-xl font-semibold text-gray-900">CMS Plan Retraite</h1>
                <p className="text-sm text-gray-500">Gestion du contenu de la page plan retraite</p>
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
                onClick={() => router.push('/retraite/plan-retraite')}
                className="px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C] transition-colors"
              >
                Voir Page Plan Retraite
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
