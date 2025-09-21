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

export default function CmsPatrimoineAutrePage() {
  const router = useRouter();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);

  // Default content extracted from the public page
  const defaultContent = {
    hero: {
      title: "Autres solutions patrimoniales",
      subtitle: "En dehors des placements classiques (immobilier, assurance-vie, produits financiers), il existe des solutions patrimoniales originales permettant de :",
      benefits: [
        {
          title: "Diversifier son patrimoine",
          description: "Solutions originales et méconnues",
          icon: "🔄"
        },
        {
          title: "Bénéficier d'avantages fiscaux",
          description: "IFI, IR, transmission",
          icon: "💰"
        },
        {
          title: "S'impliquer dans l'économie réelle",
          description: "Agriculture, forêt, vigne",
          icon: "🌱"
        }
      ],
      highlight: "👉 Ces véhicules collectifs sont souvent méconnus, mais peuvent jouer un rôle stratégique dans une gestion patrimoniale équilibrée.",
      buttons: [
        { text: "Découvrir les solutions", type: "primary" },
        { text: "Prendre rendez-vous", type: "secondary" }
      ]
    },
    chart: {
      title: "Indicateurs de solutions alternatives",
      data: [
        { label: "Solutions alternatives", value: "3" },
        { label: "Exonération IFI", value: "75%" },
        { label: "Ticket minimum", value: "€5,000" },
        { label: "Rendement moyen", value: "1-3%" },
        { label: "Avantages fiscaux", value: "Multiples" }
      ],
      chartImage: "/images/variation-chart-image-944f04.png"
    },
    solutions: {
      title: "Les solutions patrimoniales originales",
      solutions: [
        {
          id: "gfa",
          title: "1. GFA",
          subtitle: "Groupement Foncier Agricole",
          icon: "🌾",
          color: "from-[#4EBBBD] to-[#59E2E4]",
          definition: "Société civile permettant de détenir collectivement des terres agricoles, louées à des exploitants.",
          advantages: [
            "Exonération partielle d'IFI (jusqu'à 75%)",
            "Transmission facilitée",
            "Soutien à l'agriculture française"
          ],
          disadvantages: [
            "Rendement faible (1-2%/an)",
            "Liquidité limitée",
            "Dépendance à l'exploitant"
          ],
          ticketMinimum: "À partir de 5 000 à 15 000 € selon les groupements."
        },
        {
          id: "gfi",
          title: "2. GFI",
          subtitle: "Groupement Forestier d'Investissement",
          icon: "🌲",
          color: "from-[#B99066] to-[#D4A574]",
          definition: "Permet d'investir dans des forêts françaises (plantation, exploitation, entretien).",
          advantages: [
            "Exonération d'IFI (jusqu'à 75%)",
            "Rendement potentiel (2-4%/an)",
            "Impact environnemental positif"
          ],
          disadvantages: [
            "Investissement long terme (15-20 ans)",
            "Risque climatique",
            "Gestion forestière complexe"
          ],
          ticketMinimum: "À partir de 10 000 à 25 000 € selon les projets."
        },
        {
          id: "gff",
          title: "3. GFF",
          subtitle: "Groupement Foncier Viticole",
          icon: "🍷",
          color: "from-[#59E2E4] to-[#4EBBBD]",
          definition: "Investissement dans des vignobles français (achat, exploitation, commercialisation).",
          advantages: [
            "Exonération d'IFI (jusqu'à 75%)",
            "Rendement attractif (3-6%/an)",
            "Prestige et passion"
          ],
          disadvantages: [
            "Investissement élevé (50 000 € minimum)",
            "Risque climatique et commercial",
            "Gestion viticole spécialisée"
          ],
          ticketMinimum: "À partir de 50 000 € pour les grands crus."
        }
      ]
    },
    cta: {
      title: "Prêt à découvrir ces solutions ?",
      subtitle: "Nos experts vous accompagnent dans le choix des solutions patrimoniales les plus adaptées à votre profil et vos objectifs.",
      buttonText: "Demander un conseil personnalisé"
    }
  };

  // Sections configuration
  const patrimoineAutreSections = [
    {
      id: 'hero',
      title: 'Section Hero',
      description: 'Titre principal, sous-titre et navigation',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text', required: true },
        { key: 'subtitle', label: 'Sous-titre', type: 'textarea', rows: 3 },
        { key: 'benefits', label: 'Avantages', type: 'benefitsList', help: 'Liste des avantages principaux' },
        { key: 'highlight', label: 'Texte de mise en avant', type: 'textarea', rows: 2 },
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
      id: 'solutions',
      title: 'Solutions Patrimoniales',
      description: 'Les 3 solutions principales',
      fields: [
        { key: 'title', label: 'Titre de la section', type: 'text' },
        { key: 'solutions', label: 'Solutions', type: 'solutionsList', help: 'Liste des solutions patrimoniales' }
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
      const response = await fetch('/api/cms/content/patrimoine-autre');
      const data = await response.json();
      
      if (data.success && data.content) {
        const mergedSections = patrimoineAutreSections.map(section => ({
          ...section,
          cmsData: data.content[section.id] || {},
          hasCmsContent: !!data.content[section.id]
        }));
        setSections(mergedSections);
      } else {
        const defaultSections = patrimoineAutreSections.map(section => ({
          ...section,
          cmsData: {},
          hasCmsContent: false
        }));
        setSections(defaultSections);
      }
    } catch (error) {
      console.error('Error loading sections:', error);
      const defaultSections = patrimoineAutreSections.map(section => ({
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
      const response = await fetch('/api/cms/content/patrimoine-autre', {
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
                  placeholder="🔄"
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
                  placeholder="Diversifier son patrimoine"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input
                  type="text"
                  value={benefit.description || ''}
                  onChange={(e) => {
                    const newBenefits = [...benefits];
                    newBenefits[index] = { ...benefit, description: e.target.value };
                    onChange(newBenefits);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Solutions originales et méconnues"
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
                  placeholder="Découvrir les solutions"
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
                  placeholder="Solutions alternatives"
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
                  placeholder="3"
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

  const renderSolutionsList = (field, value, onChange) => {
    const solutions = value || [];
    
    return (
      <div className="space-y-6">
        {solutions.map((solution, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                <input
                  type="text"
                  value={solution.title || ''}
                  onChange={(e) => {
                    const newSolutions = [...solutions];
                    newSolutions[index] = { ...solution, title: e.target.value };
                    onChange(newSolutions);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1. GFA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sous-titre</label>
                <input
                  type="text"
                  value={solution.subtitle || ''}
                  onChange={(e) => {
                    const newSolutions = [...solutions];
                    newSolutions[index] = { ...solution, subtitle: e.target.value };
                    onChange(newSolutions);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Groupement Foncier Agricole"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Icône</label>
                <input
                  type="text"
                  value={solution.icon || ''}
                  onChange={(e) => {
                    const newSolutions = [...solutions];
                    newSolutions[index] = { ...solution, icon: e.target.value };
                    onChange(newSolutions);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="🌾"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Couleur</label>
                <input
                  type="text"
                  value={solution.color || ''}
                  onChange={(e) => {
                    const newSolutions = [...solutions];
                    newSolutions[index] = { ...solution, color: e.target.value };
                    onChange(newSolutions);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="from-[#4EBBBD] to-[#59E2E4]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ticket minimum</label>
                <input
                  type="text"
                  value={solution.ticketMinimum || ''}
                  onChange={(e) => {
                    const newSolutions = [...solutions];
                    newSolutions[index] = { ...solution, ticketMinimum: e.target.value };
                    onChange(newSolutions);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="À partir de 5 000 à 15 000 €"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Définition</label>
              <textarea
                value={solution.definition || ''}
                onChange={(e) => {
                  const newSolutions = [...solutions];
                  newSolutions[index] = { ...solution, definition: e.target.value };
                  onChange(newSolutions);
                }}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Société civile permettant de détenir collectivement des terres agricoles..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Avantages</label>
                <textarea
                  value={(solution.advantages || []).join('\n')}
                  onChange={(e) => {
                    const newSolutions = [...solutions];
                    newSolutions[index] = { ...solution, advantages: e.target.value.split('\n').filter(item => item.trim()) };
                    onChange(newSolutions);
                  }}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Exonération partielle d'IFI&#10;Transmission facilitée&#10;Soutien à l'agriculture française"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Inconvénients</label>
                <textarea
                  value={(solution.disadvantages || []).join('\n')}
                  onChange={(e) => {
                    const newSolutions = [...solutions];
                    newSolutions[index] = { ...solution, disadvantages: e.target.value.split('\n').filter(item => item.trim()) };
                    onChange(newSolutions);
                  }}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Rendement faible (1-2%/an)&#10;Liquidité limitée&#10;Dépendance à l'exploitant"
                />
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => {
                const newSolutions = solutions.filter((_, i) => i !== index);
                onChange(newSolutions);
              }}
              className="mt-4 text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
            >
              <TrashIcon className="w-4 h-4" />
              Supprimer cette solution
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...solutions, { 
            title: '', 
            subtitle: '', 
            icon: '', 
            color: '', 
            definition: '', 
            advantages: [], 
            disadvantages: [], 
            ticketMinimum: '' 
          }])}
          className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-gray-400 hover:text-gray-800 flex items-center justify-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Ajouter une solution
        </button>
      </div>
    );
  };

  // Render field based on type
  const renderField = (field, value, onChange) => {
    switch (field.type) {
      case 'benefitsList':
        return renderBenefitsList(field, value, onChange);
      case 'ctaButtons':
        return renderCtaButtons(field, value, onChange);
      case 'chartData':
        return renderChartData(field, value, onChange);
      case 'solutionsList':
        return renderSolutionsList(field, value, onChange);
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
                <h1 className="text-2xl font-bold text-gray-900">CMS Patrimoine Autre</h1>
                <p className="text-sm text-gray-600">Gestion du contenu de la page autres solutions patrimoniales</p>
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
                onClick={() => window.open('/patrimoine/autre', '_blank')}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <EyeIcon className="w-5 h-5 mr-2" />
                Voir Page Patrimoine Autre
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
