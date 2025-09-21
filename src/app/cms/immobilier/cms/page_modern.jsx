"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  PlusIcon, 
  TrashIcon, 
  EyeIcon, 
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  PhotoIcon,
  LinkIcon,
  DocumentTextIcon,
  CogIcon
} from '@heroicons/react/24/outline';

// Composant pour les champs de texte modernes
const ModernTextField = ({ label, value, onChange, placeholder, required = false, help, icon }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      {icon && <icon className="w-4 h-4" />}
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="text"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
      placeholder={placeholder}
    />
    {help && <p className="text-xs text-gray-500">{help}</p>}
  </div>
);

// Composant pour les zones de texte modernes
const ModernTextareaField = ({ label, value, onChange, placeholder, rows = 3, required = false, help, icon }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      {icon && <icon className="w-4 h-4" />}
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none"
      placeholder={placeholder}
    />
    {help && <p className="text-xs text-gray-500">{help}</p>}
  </div>
);

// Composant pour les sélecteurs modernes
const ModernSelectField = ({ label, value, onChange, options, required = false, help, icon }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      {icon && <icon className="w-4 h-4" />}
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <select
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {help && <p className="text-xs text-gray-500">{help}</p>}
  </div>
);

// Composant pour les cartes d'éléments
const ItemCard = ({ title, onDelete, onMoveUp, onMoveDown, canMoveUp = true, canMoveDown = true, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
    <div className="flex items-center justify-between mb-4">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <div className="flex items-center gap-2">
        {canMoveUp && (
          <button
            onClick={onMoveUp}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Déplacer vers le haut"
          >
            <ArrowUpIcon className="w-4 h-4" />
          </button>
        )}
        {canMoveDown && (
          <button
            onClick={onMoveDown}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Déplacer vers le bas"
          >
            <ArrowDownIcon className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={onDelete}
          className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Supprimer"
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
    {children}
  </div>
);

// Composant pour les boutons d'ajout
const AddButton = ({ onClick, children, icon: Icon }) => (
  <button
    onClick={onClick}
    className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2"
  >
    {Icon && <Icon className="w-5 h-5" />}
    {children}
  </button>
);

// Composant pour les services
const ServiceEditor = ({ services, onChange }) => {
  const addService = () => {
    const newServices = [...services, { 
      title: '', 
      description: '', 
      image: '', 
      bgColor: '#EDEDED' 
    }];
    onChange(newServices);
  };

  const updateService = (index, field, value) => {
    const newServices = [...services];
    newServices[index] = { ...newServices[index], [field]: value };
    onChange(newServices);
  };

  const deleteService = (index) => {
    const newServices = services.filter((_, i) => i !== index);
    onChange(newServices);
  };

  const moveService = (index, direction) => {
    const newServices = [...services];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newServices.length) {
      [newServices[index], newServices[targetIndex]] = [newServices[targetIndex], newServices[index]];
      onChange(newServices);
    }
  };

  return (
    <div className="space-y-6">
      {services.map((service, index) => (
        <ItemCard
          key={index}
          title={`Service ${index + 1}`}
          onDelete={() => deleteService(index)}
          onMoveUp={() => moveService(index, 'up')}
          onMoveDown={() => moveService(index, 'down')}
          canMoveUp={index > 0}
          canMoveDown={index < services.length - 1}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ModernTextField
              label="Titre du service"
              value={service.title}
              onChange={(value) => updateService(index, 'title', value)}
              placeholder="Ex: Analyse personnalisée"
              required
              icon={DocumentTextIcon}
            />
            <ModernSelectField
              label="Couleur de fond"
              value={service.bgColor}
              onChange={(value) => updateService(index, 'bgColor', value)}
              options={[
                { value: '#253F60', label: 'Bleu foncé' },
                { value: '#EDEDED', label: 'Gris clair' }
              ]}
              icon={CogIcon}
            />
          </div>
          <div className="mt-4">
            <ModernTextareaField
              label="Description"
              value={service.description}
              onChange={(value) => updateService(index, 'description', value)}
              placeholder="Description détaillée du service..."
              rows={3}
              icon={DocumentTextIcon}
            />
          </div>
          <div className="mt-4">
            <ModernTextField
              label="Image"
              value={service.image}
              onChange={(value) => updateService(index, 'image', value)}
              placeholder="/images/service-image.png"
              icon={PhotoIcon}
            />
          </div>
        </ItemCard>
      ))}
      
      <AddButton onClick={addService} icon={PlusIcon}>
        Ajouter un service
      </AddButton>
    </div>
  );
};

// Composant pour les expertises
const ExpertiseEditor = ({ expertises, onChange }) => {
  const addExpertise = () => {
    const newExpertises = [...expertises, { 
      title: '', 
      description: '', 
      image: '', 
      bgColor: '#EDEDED' 
    }];
    onChange(newExpertises);
  };

  const updateExpertise = (index, field, value) => {
    const newExpertises = [...expertises];
    newExpertises[index] = { ...newExpertises[index], [field]: value };
    onChange(newExpertises);
  };

  const deleteExpertise = (index) => {
    const newExpertises = expertises.filter((_, i) => i !== index);
    onChange(newExpertises);
  };

  const moveExpertise = (index, direction) => {
    const newExpertises = [...expertises];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newExpertises.length) {
      [newExpertises[index], newExpertises[targetIndex]] = [newExpertises[targetIndex], newExpertises[index]];
      onChange(newExpertises);
    }
  };

  return (
    <div className="space-y-6">
      {expertises.map((expertise, index) => (
        <ItemCard
          key={index}
          title={`Expertise ${index + 1}`}
          onDelete={() => deleteExpertise(index)}
          onMoveUp={() => moveExpertise(index, 'up')}
          onMoveDown={() => moveExpertise(index, 'down')}
          canMoveUp={index > 0}
          canMoveDown={index < expertises.length - 1}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ModernTextField
              label="Titre de l'expertise"
              value={expertise.title}
              onChange={(value) => updateExpertise(index, 'title', value)}
              placeholder="Ex: Optimisation fiscale immobilière"
              required
              icon={DocumentTextIcon}
            />
            <ModernSelectField
              label="Couleur de fond"
              value={expertise.bgColor}
              onChange={(value) => updateExpertise(index, 'bgColor', value)}
              options={[
                { value: '#253F60', label: 'Bleu foncé' },
                { value: '#EDEDED', label: 'Gris clair' }
              ]}
              icon={CogIcon}
            />
          </div>
          <div className="mt-4">
            <ModernTextareaField
              label="Description"
              value={expertise.description}
              onChange={(value) => updateExpertise(index, 'description', value)}
              placeholder="Description détaillée de l'expertise..."
              rows={4}
              icon={DocumentTextIcon}
            />
          </div>
          <div className="mt-4">
            <ModernTextField
              label="Image"
              value={expertise.image}
              onChange={(value) => updateExpertise(index, 'image', value)}
              placeholder="/images/expertise-image.png"
              icon={PhotoIcon}
            />
          </div>
        </ItemCard>
      ))}
      
      <AddButton onClick={addExpertise} icon={PlusIcon}>
        Ajouter une expertise
      </AddButton>
    </div>
  );
};

// Composant pour les listes simples
const SimpleListEditor = ({ items, onChange, placeholder, addLabel }) => {
  const addItem = () => {
    const newItems = [...items, ''];
    onChange(newItems);
  };

  const updateItem = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    onChange(newItems);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    onChange(newItems);
  };

  const moveItem = (index, direction) => {
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newItems.length) {
      [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
      onChange(newItems);
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <input
              type="text"
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={placeholder}
            />
          </div>
          <div className="flex items-center gap-1">
            {index > 0 && (
              <button
                onClick={() => moveItem(index, 'up')}
                className="p-1 text-gray-400 hover:text-gray-600 rounded"
                title="Déplacer vers le haut"
              >
                <ArrowUpIcon className="w-4 h-4" />
              </button>
            )}
            {index < items.length - 1 && (
              <button
                onClick={() => moveItem(index, 'down')}
                className="p-1 text-gray-400 hover:text-gray-600 rounded"
                title="Déplacer vers le bas"
              >
                <ArrowDownIcon className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => deleteItem(index)}
              className="p-1 text-red-400 hover:text-red-600 rounded"
              title="Supprimer"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
      
      <AddButton onClick={addItem} icon={PlusIcon}>
        {addLabel}
      </AddButton>
    </div>
  );
};

// Composant principal du CMS moderne
export default function ModernCMSImmobilierPage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const router = useRouter();

  // Configuration moderne des sections
  const modernSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal et appel à l\'action',
      icon: '🏠',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text', required: true },
        { key: 'subtitle', label: 'Sous-titre', type: 'textarea', rows: 3 },
        { key: 'ctaButton', label: 'Texte du Bouton CTA', type: 'text' },
      ]
    },
    {
      id: 'services',
      name: 'Services Immobilier',
      description: 'Nos services d\'investissement immobilier',
      icon: '⚙️',
      fields: [
        { key: 'servicesTitle', label: 'Titre de la Section', type: 'text', required: true },
        { key: 'servicesList', label: 'Liste des Services', type: 'servicesList' }
      ]
    },
    {
      id: 'expertise',
      name: 'Domaines d\'Expertise',
      description: 'Nos expertises en fiscalité immobilière',
      icon: '🎯',
      fields: [
        { key: 'expertiseTitle', label: 'Titre de la Section', type: 'text', required: true },
        { key: 'expertiseList', label: 'Liste des Expertises', type: 'expertiseList' }
      ]
    },
    {
      id: 'wealthBuilding',
      name: 'Construction Patrimoine',
      description: 'Construire et valoriser son patrimoine',
      icon: '🏗️',
      fields: [
        { key: 'wealthTitle', label: 'Titre Principal', type: 'text', required: true },
        { key: 'wealthIntro', label: 'Introduction', type: 'textarea', rows: 4 },
        { key: 'patrimonialForms', label: 'Formes Patrimoniales', type: 'simpleList' },
        { key: 'wealthAdvisorTitle', label: 'Titre Conseiller Patrimoine', type: 'text' },
        { key: 'wealthAdvisorText', label: 'Texte Conseiller Patrimoine', type: 'textarea', rows: 4 },
        { key: 'wealthAssessmentTitle', label: 'Titre Bilan Patrimonial', type: 'text' },
        { key: 'wealthAssessmentText', label: 'Texte Bilan Patrimonial', type: 'textarea', rows: 4 },
        { key: 'administrativeSupport', label: 'Support Administratif', type: 'textarea', rows: 3 }
      ]
    }
  ];

  useEffect(() => {
    loadSections();
  }, []);

  const loadSections = async () => {
    try {
      const cmsResponse = await fetch('/api/cms/content/immobilier');
      let cmsSections = [];
      if (cmsResponse.ok) {
        cmsSections = await cmsResponse.json();
      }

      // Contenu par défaut moderne
      const defaultContent = {
        hero: {
          title: "Investissement Immobilier – Faites fructifier votre patrimoine avec Azalee Wealth",
          subtitle: "Votre partenaire de confiance en stratégie immobilière depuis plus de 30 ans. Nous vous accompagnons pour valoriser votre patrimoine, sécuriser vos investissements, et bâtir des solutions d'investissement sur mesure, adaptées à vos objectifs.",
          ctaButton: "Demander une étude patrimoniale gratuite"
        },
        services: {
          servicesTitle: "Une approche stratégique de votre investissement immobilier",
          servicesList: [
            {
              title: "Analyse personnalisée de votre situation patrimoniale",
              description: "Nous évaluons votre profil investisseur, vos objectifs de rendement et vos projets pour identifier les meilleures opportunités d'investissement immobilier.",
              image: "/images/investissement-immobilier-responsive-analysis-image-45db43.png",
              bgColor: "#253F60"
            },
            {
              title: "Optimisation fiscale de vos investissements immobiliers",
              description: "Nous structurons vos opérations immobilières afin d'optimiser la rentabilité et les avantages fiscaux, en intégrant dispositifs légaux et stratégies patrimoniales.",
              image: "/images/investissement-immobilier-responsive-tax-image-74349c.png",
              bgColor: "#EDEDED"
            }
          ]
        },
        expertise: {
          expertiseTitle: "Nos domaines d'expertise en fiscalité immobilière et patrimoniale",
          expertiseList: [
            {
              title: "Optimisation fiscale immobilière",
              description: "Nous vous accompagnons dans la gestion fiscale de vos investissements immobiliers pour maximiser vos revenus fonciers et valoriser votre patrimoine.",
              image: "/images/investissement-immobilier-responsive-expertise-tax-optimization.png",
              bgColor: "#253F60"
            }
          ]
        },
        wealthBuilding: {
          wealthTitle: "Construire et valoriser son patrimoine immobilier",
          wealthIntro: "Se constituer un patrimoine solide, c'est préparer l'avenir avec sérénité.",
          patrimonialForms: [
            "Investissements immobiliers ou financiers",
            "Biens professionnels",
            "Actifs mobiliers"
          ],
          wealthAdvisorTitle: "Pourquoi faire appel à un conseiller patrimonial ?",
          wealthAdvisorText: "Nos experts en gestion de patrimoine vous accompagnent pour bâtir une stratégie personnalisée.",
          wealthAssessmentTitle: "Votre bilan patrimonial personnalisé",
          wealthAssessmentText: "Grâce à un audit complet, nos conseillers vous orientent vers les solutions les plus adaptées.",
          administrativeSupport: "Nous vous accompagnons également dans toutes vos démarches administratives."
        }
      };

      // Fusionner les sections
      const mergedSections = modernSections.map(section => {
        const cmsSection = cmsSections.find(s => s.section_name === section.id);
        const currentSectionContent = defaultContent[section.id] || {};
        
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

      setSections(mergedSections);
    } catch (error) {
      console.error('Error loading sections:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (section) => {
    setEditingSection(section);
    setFormData(section.cmsData || section.currentData || {});
  };

  const handleSave = async () => {
    if (!editingSection) return;
    
    setSaving(true);
    try {
      const response = await fetch('/api/cms/content/immobilier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section: editingSection.id,
          data: formData
        }),
      });

      if (response.ok) {
        window.dispatchEvent(new CustomEvent('contentUpdated'));
        localStorage.setItem('cms_content_updated', Date.now().toString());
        
        setEditingSection(null);
        setFormData({});
        await loadSections();
      }
    } catch (error) {
      console.error('Error saving content:', error);
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

  const renderField = (field, value) => {
    switch (field.type) {
      case 'textarea':
        return (
          <ModernTextareaField
            label={field.label}
            value={value}
            onChange={(val) => handleInputChange(field.key, val)}
            placeholder={field.help || ''}
            rows={field.rows || 3}
            required={field.required}
            icon={DocumentTextIcon}
          />
        );
      case 'servicesList':
        return (
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <CogIcon className="w-4 h-4" />
              {field.label}
            </label>
            <ServiceEditor
              services={value || []}
              onChange={(services) => handleInputChange(field.key, services)}
            />
          </div>
        );
      case 'expertiseList':
        return (
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <CogIcon className="w-4 h-4" />
              {field.label}
            </label>
            <ExpertiseEditor
              expertises={value || []}
              onChange={(expertises) => handleInputChange(field.key, expertises)}
            />
          </div>
        );
      case 'simpleList':
        return (
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <DocumentTextIcon className="w-4 h-4" />
              {field.label}
            </label>
            <SimpleListEditor
              items={value || []}
              onChange={(items) => handleInputChange(field.key, items)}
              placeholder="Ajouter un élément..."
              addLabel={`Ajouter à ${field.label.toLowerCase()}`}
            />
          </div>
        );
      default:
        return (
          <ModernTextField
            label={field.label}
            value={value}
            onChange={(val) => handleInputChange(field.key, val)}
            placeholder={field.help || ''}
            required={field.required}
            icon={DocumentTextIcon}
          />
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Chargement du CMS moderne...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header moderne */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                CMS Immobilier Moderne
              </h1>
              <p className="text-gray-600 mt-1">Interface conviviale et intuitive pour gérer votre contenu</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  previewMode 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <EyeIcon className="w-4 h-4" />
                {previewMode ? 'Mode Édition' : 'Aperçu'}
              </button>
              <button
                onClick={() => router.push('/cms/dashboard')}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => window.open('/Investissement-immobilier', '_blank')}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                Voir la Page
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {editingSection ? (
          /* Mode édition moderne */
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{editingSection.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{editingSection.name}</h2>
                  <p className="text-gray-600">{editingSection.description}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <XMarkIcon className="w-4 h-4" />
                  Annuler
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 transition-all duration-200 flex items-center gap-2"
                >
                  {saving ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Sauvegarde...
                    </>
                  ) : (
                    <>
                      <CheckIcon className="w-4 h-4" />
                      Sauvegarder
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-8">
              {editingSection.fields.map((field) => (
                <div key={field.key}>
                  {renderField(field, formData[field.key])}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Mode liste moderne */
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{section.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
                      <p className="text-sm text-gray-600">{section.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {section.hasCmsContent && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Modifié
                        </span>
                      )}
                      {section.hasCurrentContent && !section.hasCmsContent && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Défaut
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Aperçu du contenu */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                      <EyeIcon className="w-4 h-4" />
                      Aperçu
                    </h4>
                    <div className="space-y-2 text-sm">
                      {(() => {
                        const dataToShow = section.hasCmsContent ? section.cmsData : section.currentData;
                        if (!dataToShow || typeof dataToShow !== 'object') {
                          return (
                            <div className="text-gray-500 italic">
                              Aucun contenu disponible
                            </div>
                          );
                        }
                        return Object.entries(dataToShow).slice(0, 3).map(([key, value]) => (
                          <div key={key} className="text-gray-600">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <div className="text-gray-500 mt-1">
                              {typeof value === 'object' && value !== null ? (
                                <span className="text-xs bg-white p-2 rounded border inline-block">
                                  {Array.isArray(value) ? `${value.length} éléments` : 'Objet complexe'}
                                </span>
                              ) : (
                                <span>{String(value || '').substring(0, 100)}
                                {String(value || '').length > 100 && '...'}</span>
                              )}
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>

                  {/* Dernière modification */}
                  {section.lastModified && (
                    <p className="text-xs text-gray-500 mb-4">
                      Modifié le {new Date(section.lastModified).toLocaleString('fr-FR')}
                    </p>
                  )}

                  {/* Bouton d'édition */}
                  <button
                    onClick={() => handleEdit(section)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <PencilIcon className="w-4 h-4" />
                    Modifier
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
