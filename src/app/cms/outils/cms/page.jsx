"use client";
import React from 'react';
import GenericCMSPage from '../../../../components/cms/GenericCMSPage';

export default function CMSOutilsPage() {
  const pageSlug = 'outils';
  const pageTitle = 'Outils';
  
  // Configuration des sections pour la page Outils
  const sections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal et introduction aux outils',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'backgroundImage', label: 'Image de Fond', type: 'text' },
        { key: 'ctaButton', label: 'Texte du Bouton CTA', type: 'text' }
      ]
    },
    {
      id: 'intro',
      name: 'Section Introduction',
      description: 'Introduction aux outils financiers',
      fields: [
        { key: 'introTitle', label: 'Titre d\'Introduction', type: 'text' },
        { key: 'introText', label: 'Texte d\'Introduction', type: 'textarea' },
        { key: 'introImage', label: 'Image d\'Introduction', type: 'text' }
      ]
    },
    {
      id: 'calculators',
      name: 'Calculateurs',
      description: 'Calculateurs financiers disponibles',
      fields: [
        { key: 'calculatorsTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'calculatorsList', label: 'Liste des Calculateurs (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'simulators',
      name: 'Simulateurs',
      description: 'Simulateurs d\'investissement',
      fields: [
        { key: 'simulatorsTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'simulatorsList', label: 'Liste des Simulateurs (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'guides',
      name: 'Guides',
      description: 'Guides pratiques et ressources',
      fields: [
        { key: 'guidesTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'guidesList', label: 'Liste des Guides (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'resources',
      name: 'Ressources',
      description: 'Ressources et documents utiles',
      fields: [
        { key: 'resourcesTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'resourcesList', label: 'Liste des Ressources (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'features',
      name: 'Fonctionnalités',
      description: 'Fonctionnalités des outils',
      fields: [
        { key: 'featuresTitle', label: 'Titre des Fonctionnalités', type: 'text' },
        { key: 'featuresList', label: 'Liste des Fonctionnalités (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'cta',
      name: 'Call to Action',
      description: 'Appel à l\'action final',
      fields: [
        { key: 'ctaTitle', label: 'Titre CTA', type: 'text' },
        { key: 'ctaText', label: 'Texte CTA', type: 'textarea' },
        { key: 'ctaButton', label: 'Texte du Bouton', type: 'text' }
      ]
    }
  ];

  // Contenu par défaut pour la page Outils
  const defaultContent = {
    hero: {
      title: "Outils Financiers",
      subtitle: "Calculez, simulez et optimisez vos finances",
      description: "Découvrez nos outils pratiques pour calculer vos impôts, simuler vos investissements et optimiser votre gestion financière.",
      backgroundImage: "/images/outils-hero.webp",
      ctaButton: "Découvrir nos outils"
    },
    intro: {
      introTitle: "Des outils pour vous accompagner",
      introText: "Nos outils financiers vous permettent de mieux comprendre votre situation et d'optimiser vos décisions financières.",
      introImage: "/images/outils-intro.webp"
    },
    calculators: {
      calculatorsTitle: "Nos Calculateurs",
      calculatorsList: [
        { name: "Calculateur d'Impôts", description: "Calculez vos impôts sur le revenu", icon: "🧮", link: "/outils/calculatrice-impots" },
        { name: "Calculateur de Plus-value", description: "Calculez vos plus-values immobilières", icon: "📈", link: "/outils/calculs-financiers" },
        { name: "Calculateur de Capacité d'Emprunt", description: "Évaluez votre capacité d'emprunt", icon: "🏠", link: "/outils/simulations-generales" },
        { name: "Calculateur de Rente", description: "Calculez votre rente de retraite", icon: "💰", link: "/outils/simulations-generales" }
      ]
    },
    simulators: {
      simulatorsTitle: "Nos Simulateurs",
      simulatorsList: [
        { name: "Simulateur d'Investissement", description: "Simulez vos investissements", icon: "📊", link: "/outils/simulateur-investissement" },
        { name: "Simulateur de Retraite", description: "Projetez votre retraite", icon: "👴", link: "/outils/simulations-generales" },
        { name: "Simulateur de Défiscalisation", description: "Calculez vos économies d'impôts", icon: "💸", link: "/outils/simulations-generales" },
        { name: "Simulateur de Transmission", description: "Optimisez votre transmission", icon: "👨‍👩‍👧‍👦", link: "/outils/simulations-generales" }
      ]
    },
    guides: {
      guidesTitle: "Guides Pratiques",
      guidesList: [
        { name: "Guide de l'Investissement", description: "Tout savoir sur l'investissement", icon: "📖", type: "PDF" },
        { name: "Guide Fiscal", description: "Optimisez votre fiscalité", icon: "📋", type: "PDF" },
        { name: "Guide Patrimoine", description: "Gérez votre patrimoine", icon: "🏛️", type: "PDF" },
        { name: "Guide Retraite", description: "Préparez votre retraite", icon: "🎯", type: "PDF" }
      ]
    },
    resources: {
      resourcesTitle: "Ressources Utiles",
      resourcesList: [
        { name: "Lexique Financier", description: "Définitions des termes financiers", icon: "📚" },
        { name: "FAQ", description: "Questions fréquemment posées", icon: "❓" },
        { name: "Actualités", description: "Dernières actualités financières", icon: "📰" },
        { name: "Formulaires", description: "Formulaires administratifs", icon: "📝" }
      ]
    },
    features: {
      featuresTitle: "Fonctionnalités de nos Outils",
      featuresList: [
        { feature: "Gratuit", description: "Tous nos outils sont gratuits" },
        { feature: "Sécurisé", description: "Vos données sont protégées" },
        { feature: "Précis", description: "Calculs basés sur la réglementation" },
        { feature: "Mis à jour", description: "Outils régulièrement mis à jour" },
        { feature: "Personnalisé", description: "Résultats adaptés à votre situation" },
        { feature: "Exportable", description: "Exportez vos résultats" }
      ]
    },
    cta: {
      ctaTitle: "Prêt à Utiliser nos Outils ?",
      ctaText: "Explorez nos outils financiers pour mieux comprendre votre situation et optimiser vos décisions.",
      ctaButton: "Accéder aux outils"
    }
  };

  return (
    <GenericCMSPage
      pageSlug={pageSlug}
      pageTitle={pageTitle}
      sections={sections}
      defaultContent={defaultContent}
    />
  );
}
