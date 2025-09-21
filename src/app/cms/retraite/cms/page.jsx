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

export default function CmsRetraitePage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Retraite sections configuration - ALL sections from official retraite page
  const retraiteSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal, sous-titre et navigation',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'text' },
        { key: 'backgroundImage', label: 'Image de Fond', type: 'text' }
      ]
    },
    {
      id: 'intro',
      name: 'Introduction Retraite',
      description: 'Introduction générale à la retraite',
      fields: [
        { key: 'introTitle', label: 'Titre Principal', type: 'text' },
        { key: 'introText', label: 'Texte d\'Introduction', type: 'textarea' },
        { key: 'introHighlight', label: 'Texte en Surbrillance', type: 'text' },
        { key: 'accompanimentTitle', label: 'Titre Accompagnement', type: 'text' },
        { key: 'accompanimentList', label: 'Liste d\'Accompagnement', type: 'accompanimentList' }
      ]
    },
    {
      id: 'planRetraite',
      name: 'Plan Retraite',
      description: 'Section plan retraite (PER, PERP, PEE, PERCO)',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'perTitle', label: 'Titre PER', type: 'text' },
        { key: 'perDescription', label: 'Description PER', type: 'textarea' },
        { key: 'perFeatures', label: 'Caractéristiques PER', type: 'perFeatures' },
        { key: 'percoTitle', label: 'Titre PERCO/PEE', type: 'text' },
        { key: 'percoDescription', label: 'Description PERCO/PEE', type: 'textarea' },
        { key: 'oldEnvelopes', label: 'Anciennes Enveloppes', type: 'text' },
        { key: 'conclusion', label: 'Conclusion', type: 'text' }
      ]
    },
    {
      id: 'rachatTrimestres',
      name: 'Rachat de Trimestres',
      description: 'Section rachat de trimestres retraite',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'benefits', label: 'Avantages', type: 'rachatBenefits' },
        { key: 'example', label: 'Exemple', type: 'text' }
      ]
    },
    {
      id: 'simulation',
      name: 'Simulation Retraite',
      description: 'Section simulation retraite',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'steps', label: 'Étapes de Simulation', type: 'simulationSteps' },
        { key: 'conclusion', label: 'Conclusion', type: 'text' }
      ]
    },
    {
      id: 'prevoyance',
      name: 'Prévoyance Protection',
      description: 'Section prévoyance et protection familiale',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'introText', label: 'Texte d\'Introduction', type: 'textarea' },
        { key: 'protectionTypes', label: 'Types de Protection', type: 'protectionTypes' },
        { key: 'conclusion', label: 'Conclusion', type: 'text' }
      ]
    },
    {
      id: 'autresSolutions',
      name: 'Autres Solutions Retraite',
      description: 'Autres solutions complémentaires',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'introText', label: 'Texte d\'Introduction', type: 'textarea' },
        { key: 'solutions', label: 'Solutions', type: 'autresSolutions' },
        { key: 'objective', label: 'Objectif', type: 'text' }
      ]
    }
  ];

  // Default content extracted from the real retraite page
  const defaultContent = {
    hero: {
      title: "Préparer sa retraite avec Azalee Wealth",
      subtitle: "PX2 - FR0003500008 - Euronext Paris",
      backgroundImage: "/images/retraite.webp"
    },
    intro: {
      introTitle: "Retraite – Préparez vos revenus futurs avec sérénité",
      introText: "La retraite est un moment clé de la vie patrimoniale : passage d'un revenu d'activité à un revenu de remplacement.",
      introHighlight: "👉 Anticiper, c'est éviter la baisse de niveau de vie et protéger sa famille.",
      accompanimentTitle: "Azalée Patrimoine accompagne ses clients dans une vision globale de la retraite :",
      accompanimentList: [
        "Épargne retraite (PER, PERCO, PEE…)",
        "Optimisation via le rachat de trimestres",
        "Simulations personnalisées pour anticiper ses revenus futurs",
        "Mise en place de solutions de prévoyance et de protection familiale",
        "Diversification avec d'autres solutions retraite (immobilier locatif, SCPI, assurance-vie)"
      ]
    },
    planRetraite: {
      title: "1. Plan retraite (PER, PERP, PEE, PERCO…)",
      perTitle: "PER (Plan Épargne Retraite – loi Pacte)",
      perDescription: "L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83.",
      perFeatures: [
        "Avantage fiscal immédiat (versements déductibles)",
        "Sortie en rente, capital ou mixte",
        "Sortie anticipée possible (résidence principale, accident de la vie)"
      ],
      percoTitle: "PERCO / PEE",
      percoDescription: "Dispositifs d'épargne entreprise alimentés par participation, intéressement, abondement.",
      oldEnvelopes: "Anciennes enveloppes (PERP, Madelin, Art. 83) : transférables vers le PER.",
      conclusion: "👉 Azalée Patrimoine analyse chaque situation pour choisir le meilleur véhicule d'épargne retraite, en tenant compte de la fiscalité, du statut (salarié, TNS, dirigeant) et des objectifs."
    },
    rachatTrimestres: {
      title: "2. Rachat de trimestres retraite",
      benefits: [
        {
          title: "Validation d'années",
          description: "Permet de valider des années incomplètes ou des périodes d'études",
          icon: "✅"
        },
        {
          title: "Intérêt",
          description: "Améliorer sa pension de base ou partir plus tôt à taux plein",
          icon: "🎯"
        },
        {
          title: "Fiscalement",
          description: "Le coût du rachat est déductible du revenu imposable",
          icon: "💰"
        }
      ],
      example: "👉 Exemple : un cadre de 50 ans qui rachète 4 trimestres peut gagner jusqu'à 200 € de pension mensuelle supplémentaire."
    },
    simulation: {
      title: "3. Simulation retraite",
      steps: [
        {
          title: "État des lieux",
          description: "De vos droits acquis (base + complémentaires)",
          icon: "📋"
        },
        {
          title: "Projection",
          description: "De vos revenus à la retraite",
          icon: "📈"
        },
        {
          title: "Comparaison",
          description: "Entre pension attendue et niveau de vie souhaité",
          icon: "⚖️"
        },
        {
          title: "Plan d'épargne",
          description: "Complémentaire adapté : PER, assurance-vie, immobilier, SCPI",
          icon: "📊"
        }
      ],
      conclusion: "👉 Chez Azalée Patrimoine, nous réalisons des simulations personnalisées permettant de visualiser vos revenus futurs et d'identifier les solutions à mettre en place dès aujourd'hui."
    },
    prevoyance: {
      title: "4. Prévoyance / Protection de la famille",
      introText: "La retraite ne se limite pas à l'épargne : il faut aussi protéger sa famille.",
      protectionTypes: [
        {
          title: "Contrats de prévoyance",
          description: "Pour maintenir un revenu en cas d'invalidité ou décès prématuré",
          icon: "🛡️"
        },
        {
          title: "Maintien du niveau de vie",
          description: "Du conjoint et des enfants",
          icon: "👨‍👩‍👧‍👦"
        },
        {
          title: "Couverture santé",
          description: "Complémentaire santé adaptée à la retraite",
          icon: "🏥"
        }
      ],
      conclusion: "👉 Azalée Patrimoine propose une approche intégrée : anticiper les risques de la vie pour sécuriser la transmission et la stabilité financière de la famille."
    },
    autresSolutions: {
      title: "5. Autres solutions retraite",
      introText: "En complément du PER et des dispositifs d'entreprise :",
      solutions: [
        {
          title: "Immobilier locatif",
          description: "(classique, LMNP, nue-propriété) pour générer des revenus complémentaires",
          icon: "🏠"
        },
        {
          title: "SCPI de rendement",
          description: "Pour une rente régulière et mutualisée",
          icon: "🏢"
        },
        {
          title: "Assurance-vie",
          description: "Flexibilité, fiscalité douce après 8 ans, transmission optimisée",
          icon: "🛡️"
        },
        {
          title: "Produits financiers",
          description: "Diversifiés (ETF, UCS, obligations)",
          icon: "📊"
        }
      ],
      objective: "👉 Objectif : créer une retraite sur-mesure, adaptée à vos besoins et à votre horizon."
    }
  };

  // Load sections from CMS
  const loadSections = async () => {
    try {
      const response = await fetch('/api/cms/content/retraite');
      const data = await response.json();
      
      if (data.success && data.content) {
        const mergedSections = retraiteSections.map(section => {
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
        const sectionsWithDefaults = retraiteSections.map(section => ({
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
      const sectionsWithDefaults = retraiteSections.map(section => ({
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
      const response = await fetch('/api/cms/content/retraite', {
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
          detail: { pageSlug: 'retraite' } 
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
      
      case 'accompanimentList':
        return renderAccompanimentList(value || [], onChange, field.key);
      
      case 'perFeatures':
        return renderPerFeatures(value || [], onChange, field.key);
      
      case 'rachatBenefits':
        return renderRachatBenefits(value || [], onChange, field.key);
      
      case 'simulationSteps':
        return renderSimulationSteps(value || [], onChange, field.key);
      
      case 'protectionTypes':
        return renderProtectionTypes(value || [], onChange, field.key);
      
      case 'autresSolutions':
        return renderAutresSolutions(value || [], onChange, field.key);
      
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

  const renderAccompanimentList = (items, onChange, fieldKey) => {
    const addItem = () => {
      const newItems = [...items, ''];
      onChange(fieldKey, newItems);
    };

    const removeItem = (index) => {
      const newItems = items.filter((_, i) => i !== index);
      onChange(fieldKey, newItems);
    };

    const updateItem = (index, value) => {
      const newItems = [...items];
      newItems[index] = value;
      onChange(fieldKey, newItems);
    };

    return (
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              placeholder={`Élément ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter un élément
        </button>
      </div>
    );
  };

  const renderPerFeatures = (features, onChange, fieldKey) => {
    const addFeature = () => {
      const newFeatures = [...features, ''];
      onChange(fieldKey, newFeatures);
    };

    const removeFeature = (index) => {
      const newFeatures = features.filter((_, i) => i !== index);
      onChange(fieldKey, newFeatures);
    };

    const updateFeature = (index, value) => {
      const newFeatures = [...features];
      newFeatures[index] = value;
      onChange(fieldKey, newFeatures);
    };

    return (
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={feature}
              onChange={(e) => updateFeature(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
              placeholder={`Caractéristique ${index + 1}`}
            />
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

  const renderRachatBenefits = (benefits, onChange, fieldKey) => {
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

  const renderSimulationSteps = (steps, onChange, fieldKey) => {
    const addStep = () => {
      const newSteps = [...steps, { title: '', description: '', icon: '' }];
      onChange(fieldKey, newSteps);
    };

    const removeStep = (index) => {
      const newSteps = steps.filter((_, i) => i !== index);
      onChange(fieldKey, newSteps);
    };

    const updateStep = (index, field, value) => {
      const newSteps = [...steps];
      newSteps[index] = { ...newSteps[index], [field]: value };
      onChange(fieldKey, newSteps);
    };

    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <input
                type="text"
                value={step.title || ''}
                onChange={(e) => updateStep(index, 'title', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Titre"
              />
              <input
                type="text"
                value={step.description || ''}
                onChange={(e) => updateStep(index, 'description', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Description"
              />
              <input
                type="text"
                value={step.icon || ''}
                onChange={(e) => updateStep(index, 'icon', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD]"
                placeholder="Icône (emoji)"
              />
            </div>
            <button
              type="button"
              onClick={() => removeStep(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addStep}
          className="flex items-center gap-2 px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C]"
        >
          <PlusIcon className="w-4 h-4" />
          Ajouter une étape
        </button>
      </div>
    );
  };

  const renderProtectionTypes = (types, onChange, fieldKey) => {
    const addType = () => {
      const newTypes = [...types, { title: '', description: '', icon: '' }];
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
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

  const renderAutresSolutions = (solutions, onChange, fieldKey) => {
    const addSolution = () => {
      const newSolutions = [...solutions, { title: '', description: '', icon: '' }];
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
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
                <h1 className="text-xl font-semibold text-gray-900">CMS Retraite</h1>
                <p className="text-sm text-gray-500">Gestion du contenu de la page retraite</p>
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
                onClick={() => router.push('/retraite')}
                className="px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C] transition-colors"
              >
                Voir Page Retraite
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
                                    <span>{item.title || item.name || JSON.stringify(item)}</span>
                                  ) : (
                                    <span>{item}</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          ) : typeof value === 'object' ? (
                            <span>{value.title || value.name || JSON.stringify(value)}</span>
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
