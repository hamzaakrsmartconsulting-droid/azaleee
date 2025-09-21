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

export default function CmsRachatTrimestresPage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Rachat Trimestres sections configuration
  const rachatTrimestresSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal et introduction',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'textarea' },
        { key: 'highlight', label: 'Texte en Surbrillance', type: 'text' },
        { key: 'ctaButtons', label: 'Boutons CTA', type: 'ctaButtons' },
        { key: 'quickCalculator', label: 'Calculateur Rapide', type: 'quickCalculator' }
      ]
    },
    {
      id: 'chart',
      name: 'Graphique',
      description: 'Indicateurs de rachat de trimestres',
      fields: [
        { key: 'title', label: 'Titre du Graphique', type: 'text' },
        { key: 'chartImage', label: 'Image du Graphique', type: 'text' },
        { key: 'chartData', label: 'Données du Graphique', type: 'chartData' }
      ]
    },
    {
      id: 'departTauxPlein',
      name: 'Départ à Taux Plein',
      description: 'L\'enjeu des 64 ans',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'ageLegal', label: 'Âge Légal', type: 'text' },
        { key: 'tauxPlein', label: 'Taux Plein', type: 'text' },
        { key: 'highlight1', label: 'Surbrillance 1', type: 'text' },
        { key: 'highlight2', label: 'Surbrillance 2', type: 'text' }
      ]
    },
    {
      id: 'casUtiles',
      name: 'Cas où le Rachat est Utile',
      description: 'Les situations où le rachat est pertinent',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'cas', label: 'Cas d\'Usage', type: 'rachatCas' }
      ]
    },
    {
      id: 'alternatives',
      name: 'Alternatives au Rachat',
      description: 'Autres options pour améliorer sa retraite',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'text' },
        { key: 'alternatives', label: 'Alternatives', type: 'alternatives' },
        { key: 'highlight', label: 'Surbrillance', type: 'text' }
      ]
    },
    {
      id: 'limites',
      name: 'Limites du Rachat',
      description: 'Les limites du rachat de trimestres',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'limites', label: 'Limites', type: 'limites' }
      ]
    },
    {
      id: 'exempleChiffre',
      name: 'Exemple Chiffré',
      description: 'Exemple concret de rachat',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'exemple', label: 'Exemple', type: 'exempleChiffre' }
      ]
    },
    {
      id: 'faq',
      name: 'FAQ',
      description: 'Questions fréquentes',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'questions', label: 'Questions', type: 'faq' }
      ]
    },
    {
      id: 'conseil',
      name: 'Conseil Azalée',
      description: 'Vision Azalée Patrimoine',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'pillars', label: 'Piliers', type: 'conseilPillars' },
        { key: 'highlight', label: 'Surbrillance', type: 'text' }
      ]
    },
    {
      id: 'resume',
      name: 'En Résumé',
      description: 'Résumé des points clés',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'points', label: 'Points Clés', type: 'resumePoints' }
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

  // Default content extracted from the real rachat-trimestres page
  const defaultContent = {
    hero: {
      title: "Optimiser sa retraite par le rachat de trimestres",
      subtitle: "Le rachat de trimestres est un dispositif qui permet à un assuré de compléter ses périodes manquantes de cotisation (années d'études, années incomplètes…) afin de partir plus tôt à taux plein ou améliorer le montant de sa pension de retraite.",
      highlight: "👉 Mais attention : ce mécanisme doit s'analyser au cas par cas.",
      ctaButtons: [
        {
          text: "Simuler mon rachat",
          type: "primary",
          color: "#B99066"
        },
        {
          text: "En savoir plus",
          type: "secondary",
          color: "#B99066"
        }
      ],
      quickCalculator: {
        title: "Qu'est-ce que le rachat de trimestres ?",
        objectives: [
          "Partir plus tôt à taux plein",
          "Améliorer le montant de sa pension"
        ]
      }
    },
    chart: {
      title: "Indicateurs de rachat de trimestres",
      chartImage: "/images/variation-chart-image-944f04.png",
      chartData: [
        { label: "Coût moyen par trimestre", value: "€4,000" },
        { label: "Trimestres rachetables", value: "12 max" },
        { label: "Gain pension mensuel", value: "€200" },
        { label: "Âge légal départ", value: "64 ans" },
        { label: "Déductibilité fiscale", value: "100%" }
      ]
    },
    departTauxPlein: {
      title: "Départ à taux plein : l'enjeu des 64 ans",
      ageLegal: "Depuis la réforme des retraites, l'âge légal de départ est fixé à 64 ans (selon la génération).",
      tauxPlein: "Pour partir à taux plein, il faut justifier d'un certain nombre de trimestres cotisés. Si ce nombre n'est pas atteint, la pension est décotée (réduction définitive du montant).",
      highlight1: "👉 Le rachat de trimestres peut permettre d'éviter cette décote, à condition d'avoir atteint l'âge légal.",
      highlight2: "⚠️ Important : un rachat n'a aucun effet si l'âge légal de 64 ans n'est pas atteint → il ne permet pas de partir plus tôt que la loi ne l'autorise."
    },
    casUtiles: {
      title: "Les cas où le rachat est utile",
      cas: [
        {
          title: "Atteindre le taux plein dès 64 ans",
          description: "Exemple : un assuré a 168 trimestres validés mais il lui en manque 4 pour éviter une décote.",
          detail: "Le rachat de ces 4 trimestres peut augmenter sa pension de plusieurs centaines d'euros par an.",
          icon: "🎯",
          color: "#4EBBBD"
        },
        {
          title: "Réduire l'impact d'une carrière incomplète",
          description: "Années d'études non validées, Périodes de chômage non indemnisées, Travail à l'étranger",
          icon: "📚",
          color: "#B99066"
        },
        {
          title: "Optimiser fiscalement",
          description: "Le coût du rachat est déductible du revenu imposable, ce qui peut générer un gain fiscal immédiat pour les contribuables fortement imposés.",
          icon: "💰",
          color: "#59E2E4"
        }
      ]
    },
    alternatives: {
      title: "Les alternatives au rachat de trimestres",
      subtitle: "Le rachat n'est pas la seule option pour améliorer sa retraite.",
      alternatives: [
        {
          title: "La retraite progressive",
          description: "Permet de réduire son temps de travail à partir de 60 ans tout en commençant à percevoir une partie de sa pension. Les cotisations continuent, ce qui augmente les droits pour la retraite définitive.",
          icon: "🔹",
          color: "#4EBBBD"
        },
        {
          title: "Le cumul emploi-retraite",
          description: "Après liquidation de ses droits, il est possible de reprendre une activité et de cumuler pension + revenus professionnels. Le cumul peut être plafonné (si la retraite est partielle) ou illimité (si la retraite est liquidée à taux plein).",
          icon: "🔹",
          color: "#B99066"
        }
      ],
      highlight: "👉 Ces dispositifs offrent parfois une meilleure optimisation que le rachat, notamment pour ceux qui veulent maintenir un revenu élevé quelques années de plus."
    },
    limites: {
      title: "Les limites du rachat de trimestres",
      limites: [
        {
          title: "Coût élevé",
          description: "Entre 3 000 et 7 000 € par trimestre selon l'âge et le revenu",
          icon: "💸",
          color: "#B99066"
        },
        {
          title: "Intérêt limité",
          description: "Si l'assuré n'a pas atteint l'âge légal de 64 ans",
          icon: "⏰",
          color: "#B99066"
        },
        {
          title: "Analyse au cas par cas",
          description: "Parfois, travailler quelques mois supplémentaires ou opter pour le cumul emploi-retraite est plus rentable",
          icon: "🔍",
          color: "#B99066"
        }
      ]
    },
    exempleChiffre: {
      title: "Exemple chiffré : racheter ou pas ?",
      exemple: {
        profil: "Cadre de 55 ans avec un revenu annuel brut de 60 000 €",
        situation: "Il lui manque 4 trimestres pour partir à taux plein à 64 ans",
        cout: "Environ 4 000 € par trimestre, soit 16 000 € (variable selon âge et revenu)",
        sansRachat: "Pension estimée à 2 500 €/mois, mais avec décote de -5% (soit -125 €/mois à vie)",
        avecRachat: "Pension à taux plein, soit +125 €/mois (1 500 €/an)",
        resultat: "Le rachat s'amortit en environ 10-11 ans de retraite. Il est donc intéressant si l'assuré vit au-delà de 75 ans."
      }
    },
    faq: {
      title: "FAQ – Rachat de trimestres et préparation de la retraite",
      questions: [
        {
          question: "Où puis-je simuler ma retraite et mes options de départ ?",
          answer: "Vous pouvez effectuer une simulation gratuite et officielle sur le site www.inforetraite.fr",
          highlight: "👉 Ce portail public vous permet de tester différents âges de départ (62 ans, 64 ans, 67 ans…), d'évaluer le montant de votre future pension et de visualiser l'impact d'un rachat de trimestres."
        },
        {
          question: "Combien de temps faut-il pour percevoir sa retraite après la demande ?",
          answer: "Le délai peut aller jusqu'à 6 mois entre le dépôt du dossier et le premier versement de pension.",
          highlight: "👉 Il est donc essentiel d'anticiper et de déposer son dossier dès que possible, idéalement 6 à 12 mois avant la date de départ choisie, pour éviter toute rupture de revenus."
        },
        {
          question: "Le rachat de trimestres est-il toujours intéressant ?",
          answer: "Pas forcément. Le rachat est utile pour éviter une décote définitive si vous n'avez pas assez de trimestres validés à l'âge légal (64 ans) ou améliorer le montant de votre pension.",
          highlight: "👉 Mais il n'a aucun effet si vous n'avez pas encore atteint l'âge légal de départ. Dans certains cas, travailler quelques mois de plus ou opter pour la retraite progressive est plus rentable que racheter."
        }
      ]
    },
    conseil: {
      title: "🚀 La vision Azalée Patrimoine",
      description: "Chez Azalée Patrimoine, nous accompagnons nos clients dans une analyse personnalisée :",
      pillars: [
        {
          title: "📊 Simulation",
          description: "Du montant de pension avec ou sans rachat"
        },
        {
          title: "⚖️ Comparaison",
          description: "Avec d'autres options (prolongation d'activité, retraite progressive, cumul emploi-retraite)"
        },
        {
          title: "💰 Optimisation fiscale",
          description: "Du coût du rachat"
        },
        {
          title: "🎯 Intégration",
          description: "Du choix dans une stratégie globale retraite (PER, assurance-vie, immobilier, prévoyance)"
        }
      ],
      highlight: "⚠️ Conseil Azalée Patrimoine : Le rachat de trimestres est une décision stratégique. Il doit être comparé avec les alternatives (rachat, prolongation d'activité, cumul emploi-retraite). L'accompagnement d'un conseiller permet de mesurer le vrai retour sur investissement selon l'âge, la carrière et les objectifs personnels."
    },
    resume: {
      title: "En résumé",
      points: [
        "Le rachat de trimestres est un outil d'optimisation de la retraite, mais il n'est pas automatique.",
        "Il permet de sécuriser un départ à taux plein à 64 ans, mais n'a aucun effet avant l'âge légal.",
        "D'autres solutions existent : retraite progressive et cumul emploi-retraite.",
        "👉 Seule une simulation personnalisée permet de savoir si le rachat est pertinent."
      ]
    },
    cta: {
      title: "Prêt à optimiser votre retraite ?",
      description: "Nos experts Azalée Patrimoine vous accompagnent pour analyser votre situation et choisir la meilleure stratégie de rachat de trimestres.",
      buttonText: "Simuler maintenant"
    }
  };

  // Load sections from CMS
  const loadSections = async () => {
    try {
      const response = await fetch('/api/cms/content/rachat-trimestres');
      const data = await response.json();
      
      if (data.success && data.content) {
        const mergedSections = rachatTrimestresSections.map(section => {
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
        const sectionsWithDefaults = rachatTrimestresSections.map(section => ({
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
        const sectionsWithDefaults = rachatTrimestresSections.map(section => ({
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
      const response = await fetch('/api/cms/content/rachat-trimestres', {
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
          detail: { pageSlug: 'rachat-trimestres' } 
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
                <h1 className="text-xl font-semibold text-gray-900">CMS Rachat Trimestres</h1>
                <p className="text-sm text-gray-500">Gestion du contenu de la page rachat trimestres</p>
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
                onClick={() => router.push('/retraite/rachat-trimestres')}
                className="px-4 py-2 bg-[#4EBBBD] text-white rounded-md hover:bg-[#3A9A9C] transition-colors"
              >
                Voir Page Rachat Trimestres
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
