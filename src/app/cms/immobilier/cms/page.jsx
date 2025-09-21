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

export default function CmsImmobilierPage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Immobilier sections configuration - ALL sections from official immobilier page
  const immobilierSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal et appel à l\'action',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'textarea' },
        { key: 'ctaButton', label: 'Texte du Bouton CTA', type: 'text' }
      ]
    },
    {
      id: 'services',
      name: 'Services Immobilier',
      description: 'Services d\'investissement immobilier',
      fields: [
        { key: 'servicesTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'servicesList', label: 'Liste des Services', type: 'servicesList' }
      ]
    },
    {
      id: 'expertise',
      name: 'Domaines d\'Expertise',
      description: 'Expertise en fiscalité immobilière',
      fields: [
        { key: 'expertiseTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'expertiseList', label: 'Liste des Expertises', type: 'expertiseList' }
      ]
    },
    {
      id: 'fiscalSolutions',
      name: 'Solutions Fiscales',
      description: 'Solutions fiscales pour investissements immobiliers',
      fields: [
        { key: 'fiscalTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'fiscalSolutions', label: 'Solutions Fiscales', type: 'fiscalSolutions' }
      ]
    },
    {
      id: 'wealthBuilding',
      name: 'Construction Patrimoine',
      description: 'Construire et valoriser son patrimoine',
      fields: [
        { key: 'wealthTitle', label: 'Titre Principal', type: 'text' },
        { key: 'wealthIntro', label: 'Introduction', type: 'textarea' },
        { key: 'patrimonialForms', label: 'Formes Patrimoniales', type: 'simpleList' },
        { key: 'wealthAdvisorTitle', label: 'Titre Conseiller', type: 'text' },
        { key: 'wealthAdvisorText', label: 'Texte Conseiller', type: 'textarea' },
        { key: 'wealthAssessmentTitle', label: 'Titre Bilan', type: 'text' },
        { key: 'wealthAssessmentText', label: 'Texte Bilan', type: 'textarea' },
        { key: 'administrativeSupport', label: 'Support Administratif', type: 'textarea' }
      ]
    },
    {
      id: 'retirementPlanning',
      name: 'Planification Retraite',
      description: 'Anticiper votre retraite',
      fields: [
        { key: 'retirementTitle', label: 'Titre Principal', type: 'text' },
        { key: 'retirementIntro', label: 'Introduction', type: 'textarea' },
        { key: 'retirementContent', label: 'Contenu Principal', type: 'textarea' },
        { key: 'investmentBenefits', label: 'Avantages Investissement', type: 'simpleList' },
        { key: 'retirementConclusion', label: 'Conclusion', type: 'textarea' }
      ]
    },
    {
      id: 'retirementContinuation',
      name: 'Suite Planification Retraite',
      description: 'Préparer votre retraite',
      fields: [
        { key: 'continuationTitle', label: 'Titre Principal', type: 'text' },
        { key: 'continuationIntro', label: 'Introduction', type: 'textarea' },
        { key: 'insuranceLife', label: 'Assurance Vie', type: 'textarea' },
        { key: 'otherSolutions', label: 'Autres Solutions', type: 'textarea' },
        { key: 'continuationConclusion', label: 'Conclusion', type: 'textarea' }
      ]
    },
    {
      id: 'heritageTransmission',
      name: 'Transmission Patrimoine',
      description: 'Transmettre votre patrimoine',
      fields: [
        { key: 'transmissionTitle', label: 'Titre Principal', type: 'text' },
        { key: 'transmissionIntro', label: 'Introduction', type: 'textarea' },
        { key: 'delicateSubject', label: 'Sujet Délicat', type: 'textarea' },
        { key: 'familyProtection', label: 'Protection Familiale', type: 'textarea' },
        { key: 'realEstateInvestment', label: 'Investissement Immobilier', type: 'textarea' },
        { key: 'propertyTypes', label: 'Types de Biens', type: 'textarea' },
        { key: 'additionalStrategies', label: 'Stratégies Supplémentaires', type: 'textarea' },
        { key: 'expertAdvice', label: 'Conseil Expert', type: 'textarea' }
      ]
    },
    {
      id: 'familyProtection',
      name: 'Protection Familiale',
      description: 'Protéger ses proches',
      fields: [
        { key: 'protectionTitle', label: 'Titre Principal', type: 'text' },
        { key: 'protectionIntro', label: 'Introduction', type: 'textarea' },
        { key: 'riskAnticipation', label: 'Anticipation Risques', type: 'textarea' },
        { key: 'expertSupport', label: 'Support Expert', type: 'textarea' },
        { key: 'solutionsList', label: 'Liste des Solutions', type: 'solutionsList' }
      ]
    },
    {
      id: 'whyChooseAzalee',
      name: 'Pourquoi Choisir Azalee',
      description: 'Pourquoi choisir Azalee Wealth',
      fields: [
        { key: 'whyChooseTitle', label: 'Titre Principal', type: 'text' },
        { key: 'stepsList', label: 'Liste des Étapes', type: 'stepsList' }
      ]
    },
    {
      id: 'professionals',
      name: 'Professionnels',
      description: 'Professionnels intervenant dans la gestion',
      fields: [
        { key: 'professionalsTitle', label: 'Titre Principal', type: 'text' },
        { key: 'professionalsIntro', label: 'Introduction', type: 'textarea' },
        { key: 'professionalsList', label: 'Liste des Professionnels', type: 'professionalsList' }
      ]
    },
    {
      id: 'news',
      name: 'Actualités',
      description: 'Dernières actualités',
      fields: [
        { key: 'newsTitle', label: 'Titre Principal', type: 'text' },
        { key: 'newsArticles', label: 'Articles Actualités', type: 'newsArticles' },
        { key: 'featuredArticles', label: 'Articles en Vedette', type: 'featuredArticles' }
      ]
    },
    {
      id: 'agencies',
      name: 'Agences',
      description: 'Découvrir nos agences',
      fields: [
        { key: 'agenciesTitle', label: 'Titre Principal', type: 'text' },
        { key: 'agenciesList', label: 'Liste des Agences', type: 'simpleList' }
      ]
    },
    {
      id: 'cta',
      name: 'Call to Action',
      description: 'Section d\'appel à l\'action',
      fields: [
        { key: 'ctaButtons', label: 'Boutons CTA', type: 'ctaButtons' }
      ]
    }
  ];

  // Default content that matches EXACTLY the real page content
  const defaultContent = {
    hero: {
      title: "Investissement Immobilier – Faites fructifier votre patrimoine avec Azalee Wealth",
      subtitle: "Votre partenaire de confiance en stratégie immobilière depuis plus de 30 ans. Nous vous accompagnons pour valoriser votre patrimoine, sécuriser vos investissements, et bâtir des solutions d'investissement sur mesure, adaptées à vos objectifs.",
      ctaButton: "Demander une étude patrimoniale gratuite"
    },
    essentiel: {
      title: "L'essentiel",
      content: "Le bilan patrimonial a pour vocation d'apporter une vision claire de votre situation financière et de vos objectifs à moyen et long terme.\n\nGrâce à cette analyse, vous identifiez les leviers pertinents pour :\n• Faire grandir votre patrimoine\n• Protéger vos proches\n• Optimiser durablement votre fiscalité",
      image: "/images/placements-responsive-content-image-94979.png"
    },
    definition: {
      title: "Gestion de patrimoine : Définition",
      content: "Le patrimoine peut inclure différents types d'actifs, notamment :\n• Biens immobiliers\n• Placements financiers\n• Participations professionnelles\n• Actifs mobiliers\n• Droits d'usufruit\n• Propriétés intellectuelles\n• Droits à la retraite et rentes"
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
    advantages: {
      title: "Pourquoi choisir Azalée Patrimoine ?",
      advantages: [
        { title: "Expertise", description: "30 ans d'expérience en gestion patrimoniale" },
        { title: "Personnalisation", description: "Solutions adaptées à votre profil" },
        { title: "Transparence", description: "Conseils clairs et indépendants" },
        { title: "Suivi", description: "Accompagnement personnalisé" }
      ]
    },
    cta: {
      title: "Prêt à optimiser vos placements ?",
      description: "Contactez nos experts pour une analyse personnalisée de votre situation patrimoniale et découvrez les meilleures opportunités d'investissement.",
      buttonText: "Demander une consultation gratuite"
    }
  };

  // Custom renderers for different field types
  const renderServicesList = (field, value) => {
    const services = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Services Immobilier
          </label>
          <button
            type="button"
            onClick={() => {
              const newServices = [...services, { title: '', description: '', image: '', bgColor: '#EDEDED' }];
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
                value={service.title || ''}
                onChange={(e) => {
                  const newServices = [...services];
                  newServices[index] = { ...newServices[index], title: e.target.value };
                  handleInputChange(field.key, newServices);
                }}
                placeholder="Titre du service"
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
              <input
                type="text"
                value={service.image || ''}
                onChange={(e) => {
                  const newServices = [...services];
                  newServices[index] = { ...newServices[index], image: e.target.value };
                  handleInputChange(field.key, newServices);
                }}
                placeholder="URL de l'image"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={service.bgColor || ''}
                onChange={(e) => {
                  const newServices = [...services];
                  newServices[index] = { ...newServices[index], bgColor: e.target.value };
                  handleInputChange(field.key, newServices);
                }}
                placeholder="Couleur de fond"
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

  const renderExpertiseList = (field, value) => {
    const expertises = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Domaines d'Expertise
          </label>
          <button
            type="button"
            onClick={() => {
              const newExpertises = [...expertises, { title: '', description: '', image: '', bgColor: '#EDEDED' }];
              handleInputChange(field.key, newExpertises);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter une expertise
          </button>
        </div>
        
        {expertises.map((expertise, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={expertise.title || ''}
                onChange={(e) => {
                  const newExpertises = [...expertises];
                  newExpertises[index] = { ...newExpertises[index], title: e.target.value };
                  handleInputChange(field.key, newExpertises);
                }}
                placeholder="Titre de l'expertise"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                value={expertise.description || ''}
                onChange={(e) => {
                  const newExpertises = [...expertises];
                  newExpertises[index] = { ...newExpertises[index], description: e.target.value };
                  handleInputChange(field.key, newExpertises);
                }}
                placeholder="Description de l'expertise"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
              />
              <input
                type="text"
                value={expertise.image || ''}
                onChange={(e) => {
                  const newExpertises = [...expertises];
                  newExpertises[index] = { ...newExpertises[index], image: e.target.value };
                  handleInputChange(field.key, newExpertises);
                }}
                placeholder="URL de l'image"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={expertise.bgColor || ''}
                onChange={(e) => {
                  const newExpertises = [...expertises];
                  newExpertises[index] = { ...newExpertises[index], bgColor: e.target.value };
                  handleInputChange(field.key, newExpertises);
                }}
                placeholder="Couleur de fond"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newExpertises = [...expertises];
                newExpertises.splice(index, 1);
                handleInputChange(field.key, newExpertises);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {expertises.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucune expertise définie
          </div>
        )}
      </div>
    );
  };

  const renderSimpleList = (field, value) => {
    const items = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Liste Simple
          </label>
          <button
            type="button"
            onClick={() => {
              const newItems = [...items, ''];
              handleInputChange(field.key, newItems);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un élément
          </button>
        </div>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <input
              type="text"
              value={item || ''}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index] = e.target.value;
                handleInputChange(field.key, newItems);
              }}
              placeholder="Élément de la liste"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => {
                const newItems = [...items];
                newItems.splice(index, 1);
                handleInputChange(field.key, newItems);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {items.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun élément défini
          </div>
        )}
      </div>
    );
  };

  const renderFiscalSolutions = (field, value) => {
    const solutions = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Solutions Fiscales
          </label>
          <button
            type="button"
            onClick={() => {
              const newSolutions = [...solutions, { title: '', description: '', image: '', icon: '', bgColor: '#EDEDED' }];
              handleInputChange(field.key, newSolutions);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter une solution
          </button>
        </div>
        
        {solutions.map((solution, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={solution.title || ''}
                onChange={(e) => {
                  const newSolutions = [...solutions];
                  newSolutions[index] = { ...newSolutions[index], title: e.target.value };
                  handleInputChange(field.key, newSolutions);
                }}
                placeholder="Titre de la solution"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                value={solution.description || ''}
                onChange={(e) => {
                  const newSolutions = [...solutions];
                  newSolutions[index] = { ...newSolutions[index], description: e.target.value };
                  handleInputChange(field.key, newSolutions);
                }}
                placeholder="Description de la solution"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
              />
              <input
                type="text"
                value={solution.image || ''}
                onChange={(e) => {
                  const newSolutions = [...solutions];
                  newSolutions[index] = { ...newSolutions[index], image: e.target.value };
                  handleInputChange(field.key, newSolutions);
                }}
                placeholder="URL de l'image"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={solution.icon || ''}
                onChange={(e) => {
                  const newSolutions = [...solutions];
                  newSolutions[index] = { ...newSolutions[index], icon: e.target.value };
                  handleInputChange(field.key, newSolutions);
                }}
                placeholder="URL de l'icône"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={solution.bgColor || ''}
                onChange={(e) => {
                  const newSolutions = [...solutions];
                  newSolutions[index] = { ...newSolutions[index], bgColor: e.target.value };
                  handleInputChange(field.key, newSolutions);
                }}
                placeholder="Couleur de fond"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newSolutions = [...solutions];
                newSolutions.splice(index, 1);
                handleInputChange(field.key, newSolutions);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {solutions.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucune solution définie
          </div>
        )}
      </div>
    );
  };

  const renderSolutionsList = (field, value) => {
    const solutions = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Liste des Solutions
          </label>
          <button
            type="button"
            onClick={() => {
              const newSolutions = [...solutions, { title: '', description: '' }];
              handleInputChange(field.key, newSolutions);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter une solution
          </button>
        </div>
        
        {solutions.map((solution, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={solution.title || ''}
                onChange={(e) => {
                  const newSolutions = [...solutions];
                  newSolutions[index] = { ...newSolutions[index], title: e.target.value };
                  handleInputChange(field.key, newSolutions);
                }}
                placeholder="Titre de la solution"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={solution.description || ''}
                onChange={(e) => {
                  const newSolutions = [...solutions];
                  newSolutions[index] = { ...newSolutions[index], description: e.target.value };
                  handleInputChange(field.key, newSolutions);
                }}
                placeholder="Description de la solution"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newSolutions = [...solutions];
                newSolutions.splice(index, 1);
                handleInputChange(field.key, newSolutions);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {solutions.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucune solution définie
          </div>
        )}
      </div>
    );
  };

  const renderStepsList = (field, value) => {
    const steps = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Liste des Étapes
          </label>
          <button
            type="button"
            onClick={() => {
              const newSteps = [...steps, { step: '', title: '', description: '', image: '', bgColor: '#EDEDED' }];
              handleInputChange(field.key, newSteps);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter une étape
          </button>
        </div>
        
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={step.step || ''}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index] = { ...newSteps[index], step: e.target.value };
                  handleInputChange(field.key, newSteps);
                }}
                placeholder="Numéro d'étape"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={step.title || ''}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index] = { ...newSteps[index], title: e.target.value };
                  handleInputChange(field.key, newSteps);
                }}
                placeholder="Titre de l'étape"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                value={step.description || ''}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index] = { ...newSteps[index], description: e.target.value };
                  handleInputChange(field.key, newSteps);
                }}
                placeholder="Description de l'étape"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
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
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={step.bgColor || ''}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index] = { ...newSteps[index], bgColor: e.target.value };
                  handleInputChange(field.key, newSteps);
                }}
                placeholder="Couleur de fond"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
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
        ))}
        
        {steps.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucune étape définie
          </div>
        )}
      </div>
    );
  };

  const renderProfessionalsList = (field, value) => {
    const professionals = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Liste des Professionnels
          </label>
          <button
            type="button"
            onClick={() => {
              const newProfessionals = [...professionals, { title: '', description: '' }];
              handleInputChange(field.key, newProfessionals);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un professionnel
          </button>
        </div>
        
        {professionals.map((professional, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={professional.title || ''}
                onChange={(e) => {
                  const newProfessionals = [...professionals];
                  newProfessionals[index] = { ...newProfessionals[index], title: e.target.value };
                  handleInputChange(field.key, newProfessionals);
                }}
                placeholder="Titre du professionnel"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={professional.description || ''}
                onChange={(e) => {
                  const newProfessionals = [...professionals];
                  newProfessionals[index] = { ...newProfessionals[index], description: e.target.value };
                  handleInputChange(field.key, newProfessionals);
                }}
                placeholder="Description du professionnel"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newProfessionals = [...professionals];
                newProfessionals.splice(index, 1);
                handleInputChange(field.key, newProfessionals);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {professionals.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun professionnel défini
          </div>
        )}
      </div>
    );
  };

  const renderNewsArticles = (field, value) => {
    const articles = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Articles Actualités
          </label>
          <button
            type="button"
            onClick={() => {
              const newArticles = [...articles, { title: '', date: '', category: '', image: '' }];
              handleInputChange(field.key, newArticles);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un article
          </button>
        </div>
        
        {articles.map((article, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={article.title || ''}
                onChange={(e) => {
                  const newArticles = [...articles];
                  newArticles[index] = { ...newArticles[index], title: e.target.value };
                  handleInputChange(field.key, newArticles);
                }}
                placeholder="Titre de l'article"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={article.date || ''}
                onChange={(e) => {
                  const newArticles = [...articles];
                  newArticles[index] = { ...newArticles[index], date: e.target.value };
                  handleInputChange(field.key, newArticles);
                }}
                placeholder="Date de l'article"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={article.category || ''}
                onChange={(e) => {
                  const newArticles = [...articles];
                  newArticles[index] = { ...newArticles[index], category: e.target.value };
                  handleInputChange(field.key, newArticles);
                }}
                placeholder="Catégorie de l'article"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={article.image || ''}
                onChange={(e) => {
                  const newArticles = [...articles];
                  newArticles[index] = { ...newArticles[index], image: e.target.value };
                  handleInputChange(field.key, newArticles);
                }}
                placeholder="URL de l'image"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newArticles = [...articles];
                newArticles.splice(index, 1);
                handleInputChange(field.key, newArticles);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {articles.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun article défini
          </div>
        )}
      </div>
    );
  };

  const renderFeaturedArticles = (field, value) => {
    const articles = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Articles en Vedette
          </label>
          <button
            type="button"
            onClick={() => {
              const newArticles = [...articles, { title: '', description: '' }];
              handleInputChange(field.key, newArticles);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un article
          </button>
        </div>
        
        {articles.map((article, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={article.title || ''}
                onChange={(e) => {
                  const newArticles = [...articles];
                  newArticles[index] = { ...newArticles[index], title: e.target.value };
                  handleInputChange(field.key, newArticles);
                }}
                placeholder="Titre de l'article"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={article.description || ''}
                onChange={(e) => {
                  const newArticles = [...articles];
                  newArticles[index] = { ...newArticles[index], description: e.target.value };
                  handleInputChange(field.key, newArticles);
                }}
                placeholder="Description de l'article"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newArticles = [...articles];
                newArticles.splice(index, 1);
                handleInputChange(field.key, newArticles);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {articles.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun article défini
          </div>
        )}
      </div>
    );
  };

  const renderCtaButtons = (field, value) => {
    const buttons = Array.isArray(value) ? value : [];
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Boutons CTA
          </label>
          <button
            type="button"
            onClick={() => {
              const newButtons = [...buttons, { text: '', link: '#' }];
              handleInputChange(field.key, newButtons);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            Ajouter un bouton
          </button>
        </div>
        
        {buttons.map((button, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={button.text || ''}
                onChange={(e) => {
                  const newButtons = [...buttons];
                  newButtons[index] = { ...newButtons[index], text: e.target.value };
                  handleInputChange(field.key, newButtons);
                }}
                placeholder="Texte du bouton"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={button.link || ''}
                onChange={(e) => {
                  const newButtons = [...buttons];
                  newButtons[index] = { ...newButtons[index], link: e.target.value };
                  handleInputChange(field.key, newButtons);
                }}
                placeholder="Lien du bouton"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const newButtons = [...buttons];
                newButtons.splice(index, 1);
                handleInputChange(field.key, newButtons);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {buttons.length === 0 && (
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            Aucun bouton défini
          </div>
        )}
      </div>
    );
  };

  const loadSections = async () => {
    try {
      setLoading(true);
      
      // Load CMS content
      const cmsResponse = await fetch('/api/cms/content/immobilier');
      let cmsSections = [];
      if (cmsResponse.ok) {
        cmsSections = await cmsResponse.json();
      }

      // Merge CMS sections with default content
      const mergedSections = immobilierSections.map(section => {
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
      
      const response = await fetch('/api/cms/content/immobilier', {
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
      for (const section of immobilierSections) {
        const response = await fetch('/api/cms/content/immobilier', {
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
      console.log('=== TESTING IMMOBILIER CONTENT FLOW ===');
      
      // 1. Test CMS content loading
      console.log('1. Testing CMS content loading...');
      const cmsResponse = await fetch('/api/cms/content/immobilier');
      const cmsData = await cmsResponse.json();
      console.log('CMS content:', cmsData);
      
      // 2. Test public immobilier API
      console.log('2. Testing public immobilier API...');
      const publicResponse = await fetch('/api/pages/immobilier');
      const publicData = await publicResponse.json();
      console.log('Public immobilier content:', publicData);
      
      // 3. Show results
      alert(`Test terminé!\n\nCMS Sections: ${cmsData.length}\nPublic Sections: ${Object.keys(publicData).length}\n\nVérifiez la console pour plus de détails.`);
      
    } catch (error) {
      console.error('Test error:', error);
      alert('Erreur lors du test: ' + error.message);
    }
  };

  const forceReloadImmobilier = () => {
    // Trigger multiple events to ensure immobilier page reloads
    window.dispatchEvent(new CustomEvent('contentUpdated'));
    
    // Update localStorage to trigger cross-tab updates
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cms_content_updated', Date.now().toString());
    }
    
    // Open immobilier page in new tab to see changes
    const immobilierWindow = window.open('/Investissement-immobilier', '_blank');
    
    alert('Événements de rechargement déclenchés! La page immobilier devrait se mettre à jour automatiquement.');
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
      case 'expertiseList':
        return renderExpertiseList(field, value);
      case 'simpleList':
        return renderSimpleList(field, value);
      case 'fiscalSolutions':
        return renderFiscalSolutions(field, value);
      case 'solutionsList':
        return renderSolutionsList(field, value);
      case 'stepsList':
        return renderStepsList(field, value);
      case 'professionalsList':
        return renderProfessionalsList(field, value);
      case 'newsArticles':
        return renderNewsArticles(field, value);
      case 'featuredArticles':
        return renderFeaturedArticles(field, value);
      case 'ctaButtons':
        return renderCtaButtons(field, value);
      case 'advantagesList':
        return renderAdvantagesList(field, value);
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
                <h1 className="text-2xl font-bold text-[#112033]">CMS Immobilier</h1>
                <p className="text-gray-600">Gestion du contenu de la page immobilier</p>
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
                onClick={() => window.open('/Investissement-immobilier', '_blank')}
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
                onClick={forceReloadImmobilier}
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
                            onClick={() => window.open('/Investissement-immobilier', '_blank')}
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
                                <pre className="whitespace-pre-wrap text-xs bg-white p-2 rounded border">
                                  {JSON.stringify(value, null, 2)}
                                </pre>
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