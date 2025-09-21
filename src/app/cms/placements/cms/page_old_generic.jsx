"use client";
import React from 'react';
import GenericCMSPage from '../../../../components/cms/GenericCMSPage';

export default function CMSPlacementsPage() {
  const pageSlug = 'placements';
  const pageTitle = 'Placements';
  
  // Configuration des sections pour la page Placements
  const sections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal et introduction aux placements',
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
      description: 'Introduction aux placements financiers',
      fields: [
        { key: 'introTitle', label: 'Titre d\'Introduction', type: 'text' },
        { key: 'introText', label: 'Texte d\'Introduction', type: 'textarea' },
        { key: 'introImage', label: 'Image d\'Introduction', type: 'text' }
      ]
    },
    {
      id: 'products',
      name: 'Produits Financiers',
      description: 'Liste des produits de placement',
      fields: [
        { key: 'productsTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'productsList', label: 'Liste des Produits (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'strategies',
      name: 'Stratégies',
      description: 'Stratégies d\'investissement',
      fields: [
        { key: 'strategiesTitle', label: 'Titre des Stratégies', type: 'text' },
        { key: 'strategiesList', label: 'Liste des Stratégies (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'benefits',
      name: 'Avantages',
      description: 'Avantages des placements financiers',
      fields: [
        { key: 'benefitsTitle', label: 'Titre des Avantages', type: 'text' },
        { key: 'benefitsList', label: 'Liste des Avantages (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'risk',
      name: 'Gestion des Risques',
      description: 'Information sur la gestion des risques',
      fields: [
        { key: 'riskTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'riskText', label: 'Texte sur les Risques', type: 'textarea' },
        { key: 'riskLevels', label: 'Niveaux de Risque (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'performance',
      name: 'Performance',
      description: 'Indicateurs de performance',
      fields: [
        { key: 'performanceTitle', label: 'Titre de la Section', type: 'text' },
        { key: 'performanceStats', label: 'Statistiques (JSON)', type: 'textarea' }
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

  // Contenu par défaut pour la page Placements
  const defaultContent = {
    hero: {
      title: "Placements Financiers",
      subtitle: "Optimisez vos investissements financiers",
      description: "Découvrez nos solutions de placement pour diversifier votre patrimoine et faire fructifier vos économies.",
      backgroundImage: "/images/placements-hero.webp",
      ctaButton: "Découvrir nos placements"
    },
    intro: {
      introTitle: "Pourquoi diversifier vos placements ?",
      introText: "La diversification est la clé d'un portefeuille équilibré. Nos experts vous accompagnent dans le choix des meilleurs placements.",
      introImage: "/images/placements-intro.webp"
    },
    products: {
      productsTitle: "Nos Produits de Placement",
      productsList: [
        { name: "Assurance Vie", description: "Placement sécurisé avec avantages fiscaux", icon: "🛡️" },
        { name: "SCPI", description: "Investissement immobilier indirect", icon: "🏢" },
        { name: "Actions", description: "Participation au capital des entreprises", icon: "📈" },
        { name: "Obligations", description: "Placement à revenu fixe", icon: "📊" },
        { name: "ETF", description: "Fonds indiciels diversifiés", icon: "🌍" },
        { name: "PEA", description: "Plan d'épargne en actions", icon: "💼" }
      ]
    },
    strategies: {
      strategiesTitle: "Nos Stratégies d'Investissement",
      strategiesList: [
        { name: "Conservatrice", description: "Préservation du capital", risk: "Faible" },
        { name: "Équilibrée", description: "Équilibre rendement/risque", risk: "Modéré" },
        { name: "Dynamique", description: "Recherche de performance", risk: "Élevé" }
      ]
    },
    benefits: {
      benefitsTitle: "Les Avantages des Placements Financiers",
      benefitsList: [
        { title: "Liquidité", description: "Accès rapide à vos fonds" },
        { title: "Diversification", description: "Répartition des risques" },
        { title: "Performance", description: "Potentiel de rendement" },
        { title: "Fiscalité", description: "Optimisation fiscale" }
      ]
    },
    risk: {
      riskTitle: "Gestion des Risques",
      riskText: "Chaque investissement comporte des risques. Notre approche consiste à les identifier, les mesurer et les maîtriser.",
      riskLevels: [
        { level: "Faible", description: "Placements sécurisés", color: "green" },
        { level: "Modéré", description: "Équilibre risque/rendement", color: "yellow" },
        { level: "Élevé", description: "Potentiel de performance", color: "red" }
      ]
    },
    performance: {
      performanceTitle: "Performance de nos Portefeuilles",
      performanceStats: [
        { period: "1 an", return: "+5.2%" },
        { period: "3 ans", return: "+12.8%" },
        { period: "5 ans", return: "+28.4%" }
      ]
    },
    cta: {
      ctaTitle: "Prêt à Optimiser vos Placements ?",
      ctaText: "Contactez nos conseillers pour une analyse personnalisée de votre portefeuille et découvrez nos solutions d'investissement.",
      ctaButton: "Analyser mon portefeuille"
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
