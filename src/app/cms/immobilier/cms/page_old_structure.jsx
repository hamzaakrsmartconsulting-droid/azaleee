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
      id: 'fiscalSolutions',
      name: 'Solutions Fiscales',
      description: 'Nos solutions fiscales pour investissements immobiliers',
      icon: '💰',
      fields: [
        { key: 'fiscalTitle', label: 'Titre de la Section', type: 'text', required: true },
        { key: 'fiscalSolutions', label: 'Solutions Fiscales', type: 'servicesList' }
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
    },
    {
      id: 'retirementPlanning',
      name: 'Planification Retraite',
      description: 'Anticiper votre retraite en toute sérénité',
      icon: '👴',
      fields: [
        { key: 'retirementTitle', label: 'Titre Principal', type: 'text', required: true },
        { key: 'retirementIntro', label: 'Introduction', type: 'textarea', rows: 3 },
        { key: 'retirementContent', label: 'Contenu Principal', type: 'textarea', rows: 4 },
        { key: 'investmentBenefits', label: 'Avantages Investissement', type: 'simpleList' },
        { key: 'retirementConclusion', label: 'Conclusion', type: 'textarea', rows: 3 }
      ]
    },
    {
      id: 'retirementContinuation',
      name: 'Suite Planification Retraite',
      description: 'Préparer votre retraite, c\'est sécuriser votre avenir',
      icon: '🔒',
      fields: [
        { key: 'continuationTitle', label: 'Titre Principal', type: 'text', required: true },
        { key: 'continuationIntro', label: 'Introduction', type: 'textarea', rows: 3 },
        { key: 'insuranceLife', label: 'Assurance Vie', type: 'textarea', rows: 3 },
        { key: 'otherSolutions', label: 'Autres Solutions', type: 'textarea', rows: 4 },
        { key: 'continuationConclusion', label: 'Conclusion', type: 'textarea', rows: 3 }
      ]
    },
    {
      id: 'heritageTransmission',
      name: 'Transmission Patrimoine',
      description: 'Transmettre votre patrimoine en toute sérénité',
      icon: '👨‍👩‍👧‍👦',
      fields: [
        { key: 'transmissionTitle', label: 'Titre Principal', type: 'text', required: true },
        { key: 'transmissionIntro', label: 'Introduction', type: 'textarea', rows: 3 },
        { key: 'delicateSubject', label: 'Sujet Délicat', type: 'textarea', rows: 3 },
        { key: 'familyProtection', label: 'Protection Familiale', type: 'textarea', rows: 3 },
        { key: 'realEstateInvestment', label: 'Investissement Immobilier', type: 'textarea', rows: 3 },
        { key: 'propertyTypes', label: 'Types de Biens', type: 'textarea', rows: 3 },
        { key: 'additionalStrategies', label: 'Stratégies Supplémentaires', type: 'textarea', rows: 3 },
        { key: 'expertAdvice', label: 'Conseil Expert', type: 'textarea', rows: 3 }
      ]
    },
    {
      id: 'familyProtection',
      name: 'Protection Familiale',
      description: 'Protéger ses proches et anticiper l\'imprévu',
      icon: '🛡️',
      fields: [
        { key: 'protectionTitle', label: 'Titre Principal', type: 'text', required: true },
        { key: 'protectionIntro', label: 'Introduction', type: 'textarea', rows: 3 },
        { key: 'riskAnticipation', label: 'Anticipation des Risques', type: 'textarea', rows: 3 },
        { key: 'expertSupport', label: 'Support Expert', type: 'textarea', rows: 3 },
        { key: 'solutionsList', label: 'Liste des Solutions', type: 'servicesList' }
      ]
    },
    {
      id: 'whyChooseAzalee',
      name: 'Pourquoi Choisir Azalee',
      description: 'Pourquoi choisir Azalee Wealth',
      icon: '⭐',
      fields: [
        { key: 'whyChooseTitle', label: 'Titre Principal', type: 'text', required: true },
        { key: 'stepsList', label: 'Liste des Étapes', type: 'servicesList' }
      ]
    },
    {
      id: 'professionals',
      name: 'Professionnels',
      description: 'Quels sont les autres professionnels qui interviennent',
      icon: '👥',
      fields: [
        { key: 'professionalsTitle', label: 'Titre Principal', type: 'text', required: true },
        { key: 'professionalsIntro', label: 'Introduction', type: 'textarea', rows: 4 },
        { key: 'professionalsList', label: 'Liste des Professionnels', type: 'servicesList' }
      ]
    },
    {
      id: 'news',
      name: 'Actualités',
      description: 'Latest news',
      icon: '📰',
      fields: [
        { key: 'newsTitle', label: 'Titre Principal', type: 'text', required: true },
        { key: 'newsArticles', label: 'Articles d\'Actualité', type: 'servicesList' },
        { key: 'featuredArticles', label: 'Articles en Vedette', type: 'servicesList' }
      ]
    },
    {
      id: 'agencies',
      name: 'Agences',
      description: 'Discover our agencies',
      icon: '🏢',
      fields: [
        { key: 'agenciesTitle', label: 'Titre Principal', type: 'text', required: true },
        { key: 'agenciesList', label: 'Liste des Agences', type: 'simpleList' }
      ]
    },
    {
      id: 'cta',
      name: 'Call to Action',
      description: 'Boutons d\'appel à l\'action',
      icon: '📞',
      fields: [
        { key: 'ctaButtons', label: 'Boutons CTA', type: 'servicesList' }
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
            },
            {
              title: "Accompagnement global sur la gestion et la fiscalité",
              description: "Nos experts vous accompagnent dans la structuration, la gestion juridique et fiscale, ainsi que dans la déclaration de vos investissements, en toute conformité.",
              image: "/images/investissement-immobilier-responsive-management-image-67c728.png",
              bgColor: "#EDEDED"
            },
            {
              title: "Stratégie patrimoniale intégrée projets immobiliers",
              description: "Nous alignons vos investissements immobiliers avec votre stratégie globale de patrimoine pour sécuriser vos actifs, anticiper la transmission et optimiser la fiscalité successorale.",
              image: "/images/investissement-immobilier-responsive-strategy-image-6274ef.png",
              bgColor: "#EDEDED"
            }
          ]
        },
        expertise: {
          expertiseTitle: "Nos domaines d'expertise en fiscalité immobilière et patrimoniale",
          expertiseList: [
            {
              title: "Optimisation fiscale immobilière",
              description: "Nous vous accompagnons dans la gestion fiscale de vos investissements immobiliers pour maximiser vos revenus fonciers et valoriser votre patrimoine. Nos solutions : structuration en SCI, LMNP/LMP, déficit foncier, démembrement, investissements en immobilier locatif.",
              image: "/images/investissement-immobilier-responsive-expertise-tax-optimization.png",
              bgColor: "#253F60"
            },
            {
              title: "Stratégies de défiscalisation patrimoniale",
              description: "Profitez des dispositifs légaux pour réduire votre pression fiscale et pérenniser vos actifs. Nous intervenons sur : défiscalisation immobilière, investissements loi Girardin, Malraux, PER, holding patrimoniale.",
              image: "/images/investissement-immobilier-responsive-expertise-defiscalization.png",
              bgColor: "#EDEDED"
            },
            {
              title: "Fiscalité professionnelle & investissement",
              description: "Conseil sur-mesure pour chefs d'entreprise, dirigeants et professions libérales souhaitant développer ou sécuriser leur patrimoine professionnel et personnel.",
              image: "/images/investissement-immobilier-responsive-expertise-professional.png",
              bgColor: "#EDEDED"
            },
            {
              title: "Transmission, donation & gestion successorale",
              description: "Nous vous aidons à anticiper la transmission de vos biens avec des solutions fiscales adaptées pour optimiser les donations et protéger vos héritiers.",
              image: "/images/investissement-immobilier-responsive-expertise-transmission.png",
              bgColor: "#EDEDED"
            }
          ]
        },
        fiscalSolutions: {
          fiscalTitle: "Nos solutions fiscales pour vos investissements immobiliers",
          fiscalSolutions: [
            {
              title: "Investissement locatif neuf (Loi Pinel)",
              description: "Bénéficiez d'une réduction d'impôt en investissant dans l'immobilier neuf destiné à la location, sous conditions de durée et de plafonds de loyers.",
              image: "/images/investissement-immobilier-responsive-fiscal-pinel-bg-8b82a6.png",
              icon: "/images/investissement-immobilier-responsive-fiscal-pinel-icon.png",
              bgColor: "#253F60"
            },
            {
              title: "Location meublée (Statut LMNP / LMP)",
              description: "Optimisez votre fiscalité grâce à la location meublée, avec amortissement des biens et régime fiscal allégé sur les revenus locatifs.",
              image: "/images/investissement-immobilier-responsive-fiscal-lmnp-bg-51a138.png",
              icon: "/images/investissement-immobilier-responsive-fiscal-lmnp-icon.png",
              bgColor: "#EDEDED"
            },
            {
              title: "Déficit foncier sur vos revenus",
              description: "Réduisez votre imposition en déduisant le montant des travaux de rénovation ou d'entretien de vos revenus fonciers.",
              image: "/images/investissement-immobilier-responsive-fiscal-deficit-bg-1b3fc2.png",
              icon: "/images/investissement-immobilier-responsive-fiscal-deficit-icon.png",
              bgColor: "#EDEDED"
            },
            {
              title: "Valorisation de l'immobilier ancien",
              description: "Profitez d'avantages fiscaux attractifs en rénovant des biens classés ou situés dans des secteurs sauvegardés, tout en valorisant votre patrimoine.",
              image: "/images/investissement-immobilier-responsive-fiscal-valorisation-bg-1b3fc2.png",
              icon: "/images/investissement-immobilier-responsive-fiscal-valorisation-icon.png",
              bgColor: "#EDEDED"
            }
          ]
        },
        wealthBuilding: {
          wealthTitle: "Construire et valoriser son patrimoine immobilier",
          wealthIntro: "Se constituer un patrimoine solide, c'est préparer l'avenir avec sérénité. Qu'il s'agisse d'investissements immobiliers ou de placements financiers, développer son patrimoine offre des revenus complémentaires, améliore son confort de vie, et sécurise l'avenir de ses proches.",
          patrimonialForms: [
            "Investissements immobiliers ou financiers",
            "Biens professionnels",
            "Actifs mobiliers",
            "Droits d'usufruit",
            "Droits de propriété intellectuelle",
            "Droits à la retraite et rentes"
          ],
          wealthAdvisorTitle: "Pourquoi faire appel à un conseiller patrimonial ?",
          wealthAdvisorText: "Nos experts en gestion de patrimoine vous accompagnent pour bâtir une stratégie personnalisée qui sécurise votre avenir et celui de vos proches. Vous vous assurez : Un patrimoine durable et transmissible, La protection financière de votre conjoint et de vos héritiers, La certitude que vos proches disposeront d'un patrimoine solide en cas de coup dur.",
          wealthAssessmentTitle: "Votre bilan patrimonial personnalisé",
          wealthAssessmentText: "Grâce à un audit complet, nos conseillers vous orientent vers les solutions les plus adaptées à vos objectifs : Investissement immobilier : Sécuriser et faire fructifier votre patrimoine dans la durée, Placements financiers : Générer des revenus et profiter d'avantages fiscaux, Solutions de prévoyance : Protéger vos proches avec des dispositifs avantageux.",
          administrativeSupport: "Nous vous accompagnons également dans toutes vos démarches administratives pour simplifier la gestion et la constitution de votre patrimoine."
        },
        retirementPlanning: {
          retirementTitle: "Anticiper votre retraite en toute sérénité",
          retirementIntro: "Assurez votre avenir financier avec des solutions d'investissement immobilier adaptées.",
          retirementContent: "Nos conseillers en gestion de patrimoine vous accompagnent pour préparer sereinement votre retraite et maintenir votre niveau de vie une fois la vie professionnelle terminée.",
          investmentBenefits: [
            "Garantir des revenus complémentaires stables",
            "Préserver votre pouvoir d'achat à long terme",
            "Anticiper les aléas de santé et les dépenses imprévues"
          ],
          retirementConclusion: "Parce que la retraite se prépare bien avant le dernier jour travaillé, nous mettons en place des stratégies patrimoniales solides, afin que vous puissiez profiter pleinement de cette nouvelle étape de vie."
        },
        retirementContinuation: {
          continuationTitle: "Préparer votre retraite, c'est sécuriser votre avenir financier",
          continuationIntro: "Anticiper votre retraite, c'est vous garantir des revenus complémentaires au moment voulu, tout en profitant d'avantages fiscaux pendant votre activité professionnelle.",
          insuranceLife: "Certains placements, comme l'assurance-vie, permettent aussi de protéger vos proches en cas de décès.",
          otherSolutions: "D'autres solutions — comme le Plan d'Épargne Retraite (PER) ou les dispositifs dédiés aux indépendants comme la Loi Madelin — peuvent, selon votre situation, compenser les limites des régimes obligatoires et renforcer vos revenus futurs.",
          continuationConclusion: "Pour vivre sereinement votre retraite, il est essentiel de définir une stratégie d'investissement adaptée à vos projets et à votre profil."
        },
        heritageTransmission: {
          transmissionTitle: "Transmettre votre patrimoine en toute sérénité",
          transmissionIntro: "Anticiper la transmission de son patrimoine est une démarche essentielle pour protéger ses proches et garantir la pérennité de vos biens.",
          delicateSubject: "Bien souvent, ce sujet délicat est repoussé, alors qu'il permet pourtant d'éviter de lourdes charges fiscales et des conflits familiaux lors de la succession.",
          familyProtection: "Que ce soit pour assurer la protection de votre conjoint, de vos enfants ou de vos héritiers dans le cadre d'une famille recomposée, la transmission planifiée offre des solutions adaptées à chaque situation.",
          realEstateInvestment: "Investir dans l'immobilier s'avère un excellent levier pour transmettre un patrimoine durable, avec la possibilité de bénéficier d'avantages fiscaux sur les donations ou successions.",
          propertyTypes: "Qu'il s'agisse de votre résidence principale ou d'un bien locatif générant des revenus, vous valorisez ainsi votre capital tout en préparant l'avenir de vos héritiers.",
          additionalStrategies: "La prévoyance retraite et certaines solutions d'épargne patrimoniale complètent ces stratégies, en renforçant la sécurité financière de votre entourage.",
          expertAdvice: "Notre conseil : anticipez et organisez votre transmission pour préserver votre patrimoine, optimiser votre fiscalité successorale et assurer la sérénité de vos proches."
        },
        familyProtection: {
          protectionTitle: "Protéger ses proches et anticiper l'imprévu",
          protectionIntro: "Assurer la sécurité financière de ses proches face aux aléas de la vie fait partie des priorités patrimoniales essentielles.",
          riskAnticipation: "Anticiper les risques — qu'il s'agisse d'un accident, d'une perte de revenus ou d'un événement imprévu — permet d'éviter que vos proches ne soient confrontés à des difficultés financières.",
          expertSupport: "Nos experts vous accompagnent pour mettre en place des solutions adaptées :",
          solutionsList: [
            {
              title: "Assurances prévoyance",
              description: "pour garantir un capital ou des revenus en cas d'accident ou de décès."
            },
            {
              title: "Assurance-vie",
              description: "pour sécuriser votre patrimoine et protéger financièrement votre famille, tout en bénéficiant d'un cadre fiscal avantageux."
            },
            {
              title: "Solutions de retraite et d'investissement",
              description: "pensées pour assurer votre avenir et celui de vos proches."
            },
            {
              title: "Un accompagnement sur-mesure",
              description: "pour anticiper, sécuriser et transmettre."
            }
          ]
        },
        whyChooseAzalee: {
          whyChooseTitle: "Pourquoi choisir Azalee Wealth",
          stepsList: [
            {
              title: "Analyse personnalisée",
              description: "Des recommandations claires et objectives, basées sur une étude approfondie de votre situation patrimoniale et fiscale.",
              image: "/images/investissement-immobilier-responsive-why-choose-step1-icon.png",
              bgColor: "#253F60"
            },
            {
              title: "Solutions sur-mesure",
              description: "Des stratégies d'investissement et de structuration adaptées à vos objectifs, votre horizon de placement et votre profil d'investisseur.",
              image: "/images/investissement-immobilier-why-choose-step2-icon.png",
              bgColor: "#EDEDED"
            },
            {
              title: "Accès à notre réseau d'experts",
              description: "Un accompagnement complet grâce à nos partenaires : notaires, avocats spécialisés, experts-comptables et conseillers en gestion de patrimoine.",
              image: "/images/investissement-immobilier-responsive-why-choose-step3-icon.png",
              bgColor: "#EDEDED"
            },
            {
              title: "Suivi et ajustement régulier",
              description: "Un suivi patrimonial annuel pour anticiper les évolutions fiscales, ajuster votre stratégie et sécuriser votre projet sur le long terme.",
              image: "/images/investissement-immobilier-responsive-why-choose-step4-icon.png",
              bgColor: "#EDEDED"
            }
          ]
        },
        professionals: {
          professionalsTitle: "Quels sont les autres professionnels qui interviennent dans la gestion de patrimoine ?",
          professionalsIntro: "Si le conseiller en gestion de patrimoine reste votre interlocuteur privilégié pour piloter votre stratégie patrimoniale, d'autres professionnels peuvent être mobilisés en fonction de vos projets et besoins spécifiques :",
          professionalsList: [
            {
              title: "Notaires",
              description: "Pour sécuriser vos actes juridiques, successions, donations, ou acquisitions immobilières."
            },
            {
              title: "Avocats spécialisés",
              description: "Pour les montages juridiques complexes, l'optimisation fiscale ou la transmission d'entreprise."
            },
            {
              title: "Experts-comptables",
              description: "Pour la gestion comptable de vos investissements, de vos SCI ou de votre patrimoine professionnel."
            },
            {
              title: "Banquiers privés",
              description: "Pour le financement de vos projets et la gestion de vos avoirs bancaires."
            },
            {
              title: "Assureurs",
              description: "Pour la prévoyance, la gestion des risques et les solutions d'assurance-vie ou de retraite."
            }
          ]
        },
        news: {
          newsTitle: "Latest news",
          newsArticles: [
            {
              title: "Budget 2026 : a financial plan contested by the French",
              date: "16 Juillet 2025",
              category: "Taxes",
              image: "/images/investissement-immobilier-news-article-1-48ed7d.png"
            },
            {
              title: "Livret A : une nouvelle baisse de rendement à 1,7 %",
              date: "15 Juillet 2025",
              category: "News",
              image: "/images/investissement-immobilier-news-article-2-92e27a.png"
            },
            {
              title: "PEA : Éric Ciotti wants to revive investment in stocks",
              date: "01 Juillet 2025",
              category: "Finance"
            },
            {
              title: "Statut du bailleur privé : un nouveau souffle grâce au Parlement",
              date: "30 juin 2025",
              category: "Real estate"
            }
          ],
          featuredArticles: [
            {
              title: "Pension reform: the bill for 65 years old divides opinion",
              description: "Une mesure qui continue d'alimenter les tensions sociales."
            },
            {
              title: "Budget proposal 2026: French people facing new tax measures",
              description: "A budget law that sparks debates and concerns."
            },
            {
              title: "Diminution du taux du Livret A : nouvelle baisse à 1,7 %",
              description: "Un impact direct sur l'épargne des ménages."
            },
            {
              title: "Retraite progressive at 60 ans : green light from the Senate",
              description: "Un vote attendu par de nombreux actifs."
            },
            {
              title: "MaPrimeRénov' : freeze of energy renovation grants starting in July 2025",
              description: "Changes that worry the owners."
            },
            {
              title: "François Bayrou : un gouvernement sous le feu des critiques pour sa richesse déclarée",
              description: "La HATVP révèle un patrimoine record pour l'exécutif 2025."
            }
          ]
        },
        agencies: {
          agenciesTitle: "Discover our agencies",
          agenciesList: [
            "Aix-en-Provence-Marseille", "Biarritz", "Bordeaux", "Caen", "Chambéry", "Clermont-Ferrand",
            "Moutarde", "Lille", "Lyon", "Metz", "Montpellier", "Nantes", "Agréable", "Orléans",
            "Paris", "Reims", "Rennes", "Rouen", "Strasbourg", "Toulouse", "Visites guidées", "Vannes"
          ]
        },
        cta: {
          ctaButtons: [
            { text: "En savoir plus", link: "#" },
            { text: "Demander une étude patrimoniale gratuite", link: "#" }
          ]
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
