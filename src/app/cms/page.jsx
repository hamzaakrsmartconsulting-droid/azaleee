"use client";

import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const LOCAL_STORAGE_KEY = 'homepageContent';

const defaultContent = {
  // Hero Section
  heroTitle: "Votre partenaire de confiance en matière de gestion de patrimoine, de fiscalité et de conseil en investissement.",
  heroSubtitle: "Explorez des conseils personnalisés en matière de fiscalité, d'immobilier, d'investissements, de retraite et de gestion de patrimoine.",
  heroButton1: "Obtenez votre consultation personnalisée",
  heroButton2: "Commencez à explorer les sujets",
  // Introduction
  introTitle: "Gestion de patrimoine — Optimisation fiscale immobilière — Conseil financier",
  introParagraph: "Depuis 30 ans, nous façonnons l'avenir financier de clients exigeants. Notre mission : libérer le potentiel caché de votre patrimoine grâce à une approche humaine, experte et transparente. Nous construisons des relations de confiance basées sur la proximité, l'écoute active et l'engagement total de nos conseillers - à vos côtés à chaque étape de votre projet.",
  introButton: "Rencontrez-nous",
  // Experts Section
  expertsTitle: "Nos experts à votre service",
  expertsDescription: "Nous rassemblons un réseau d'experts reconnus, de professionnels certifiés dédiés à la protection et à la croissance de votre patrimoine. Ils vous aident dans l'optimisation fiscale, la création de richesse et la transmission à long terme.",
  experts: [
    { title: "Conseiller en gestion de patrimoine", desc: "Votre partenaire stratégique pour toutes vos décisions en matière de planification patrimoniale.", button: "Renseignez-vous davantage" },
    { title: "Avocat fiscal", desc: "Votre expert juridique en matière fiscale, garantissant la conformité et proposant des solutions avancées de planification fiscale.", button: "Renseignez-vous davantage sur l'avocat fiscaliste" },
    { title: "Courtier hypothécaire", desc: "Votre expert en financement sécurisant les meilleures conditions du marché pour vos projets immobiliers.", button: "En savoir plus sur notre courtier hypothécaire" },
    { title: "Notaire", desc: "Votre conseiller juridique pour les transactions immobilières et les questions de succession, garantissant la sécurité juridique.", button: "Renseignez-vous davantage sur le notaire" },
    { title: "Expert-comptable", desc: "Votre partenaire de confiance en comptabilité, fiscalité et affaires sociales - vous guidant pour prendre des décisions éclairées.", button: "Renseignez-vous davantage sur le comptable agréé" },
    { title: "Avocat d'affaires", desc: "Votre expert en droit des sociétés, vous aidant dans la création, le développement et les transactions de votre entreprise.", button: "Renseignez-vous davantage sur l'avocat d'affaires" },
  ],
  // Testimonials
  testimonialsTitle: "Témoignages",
  testimonialText: "Azalee Patrimoine nous a apporté une vraie tranquillité d'esprit. Notre conseiller nous a aidés à structurer notre patrimoine et nous a accompagnés dans l'achat d'un nouveau bien immobilier. Nous avons ensuite rencontré un consultant en investissement immobilier et un expert-comptable — des professionnels réactifs et compétents. Leurs conseils nous ont permis de revoir notre stratégie financière en toute confiance. Nous les recommandons vivement.",
  testimonialAuthor: "néon.",
  // Process Steps
  processSteps: [
    { label: 'STEP 1', desc: 'CONSTRUIRE VOTRE PATRIMOINE', contentTitle: 'Développer votre patrimoine', contentText: 'Investing in real estate remains a valuable choice today, appreciated for its security and return on investment. Whether it is to generate additional income, protect your financial future, or pass on an inheritance, building a solid heritage meets essential objectives, for you and your loved ones.', button: 'Découvrez Comment Nos Courtiers Travaillent Pour Vous', image: '/images/img_image_1221.png' },
    { label: 'STEP 3', desc: 'OPTIMISEZ LA PERFORMANCE DE VOS INVESTISSEMENTS' },
    { label: 'STEP 4', desc: 'SELECT THE SOLUTION THAT SUITS YOU BEST' },
    { label: 'STEP 5', desc: 'FINANCER VOTRE PROJET DANS LES MEILLEURES CONDITIONS' },
    { label: 'STEP 6', desc: 'DIVERSIFIEZ VOS INVESTISSEMENTS' },
    { label: 'STEP 7', desc: 'TO ACCOMPANY YOU IN THE LONG TERM' },
  ],
  // Statistics
  stats: [
    { value: '2006', label: 'Date de création' },
    { value: '7000', label: 'Clients' },
    { value: '92%', label: '93% de nos clients nous recommandent pour un investissement immobilier' },
    { value: '16 millions', label: "Le chiffre d'affaires" },
    { value: '+18 %', label: 'De croissance en 2019' },
    { value: '150', label: 'Collaborateurs partout en France' },
  ],
  // Investment Section
  investmentTitle: 'Valorisez votre avenir en construisant votre patrimoine',
  investmentText: "Investing, ce n'est pas seulement faire fructifier son argent, c'est poser les bases d'une sécurité financière durable. Que vous souhaitiez générer des revenus complémentaires, financer des projets futurs ou protéger votre famille, la constitution d'un patrimoine devient un choix stratégique. Immobilier, placements financiers ou solutions mixtes : chaque investissement doit être réfléchi et aligné avec vos objectifs. Chez Selexium, nos spécialistes sont là pour définir avec vous une stratégie sur mesure, pensée pour vous apporter performance et sérénité.",
  investmentButton: 'Explorez nos solutions pour faire croître votre patrimoine',
  investmentImage1: '/images/img_image_1222.png',
  investmentImage2: '/images/img_image_1220.png',
  // Tax Exemption Section
  taxTitle: 'Why choose real estate tax exemption?',
  taxText: "L'immobilier reste un investissement de référence pour les investisseurs français, surtout lorsqu'il est accompagné d'avantages fiscaux attractifs. En choisissant des biens éligibles à des dispositifs légaux de défiscalisation, vous pouvez réduire significativement votre imposition tout en développant votre patrimoine. Le gouvernement encourage ainsi l'investissement dans certains secteurs ou types de logements — anciens ou neufs, location longue durée ou saisonnière — grâce à des lois fiscales spécifiques. Ces mesures permettent non seulement de dynamiser l'offre immobilière mais aussi de soutenir les investisseurs en leur offrant des avantages concrets. Que vous souhaitiez constituer un patrimoine, optimiser vos revenus locatifs ou préparer votre avenir, nos solutions de défiscalisation s'adaptent à votre situation et à vos objectifs.",
  taxButton: 'Discover our tailor-made strategies for effective tax optimization.',
  taxCards: [
    { title: 'Le statut LMNP', image: '/images/img_image_1223.png', text: 'Louez-vous un bien meublé en tant que particulier ? Le statut LMNP vous permet de déclarer vos revenus locatifs sous le régime BIC, souvent plus avantageux que les revenus fonciers. Ce statut est accessible si vos revenus locatifs restent sous un certain seuil annuel, et il permet d\'amortir le bien et le mobilier, réduisant ainsi l\'imposition sur les loyers perçus.', link: 'En savoir plus sur le régime LMNP →' },
    { title: 'Le statut LMP', image: '/images/img_image_1224.png', text: 'Lorsque vos revenus issus de la location meublée dépassent la moitié des revenus globaux de votre foyer fiscal, vous pouvez accéder au statut de Loueur en Meublé Professionnel (LMP). Ce statut ouvre droit à des avantages fiscaux majeurs, tels que l\'exonération d\'impôt sur les plus-values après un certain délai de détention, ou encore la possibilité d\'imputer les déficits sur votre revenu global.', link: 'En savoir plus sur le régime LMP →' },
    { title: 'La loi Pinel', image: '/images/img_image_1225.png', text: 'Souhaitez-vous investir dans l\'immobilier neuf ou réhabilité tout en réduisant vos impôts ? Le dispositif Pinel vous offre une réduction d\'impôt proportionnelle à votre durée d\'engagement locatif (6, 9 ou 12 ans). Pour en bénéficier, vous devez respecter des plafonds de loyers et de ressources des locataires, fixés selon la localisation du bien.', link: 'En savoir plus sur la loi Pinel →' },
  ],
  // Partners
  partners: Array.from({ length: 12 }, (_, i) => `/images/partner_logo_${i + 1}.png`),
  // Final CTA
  finalCtaTitle: 'Faites croître votre patrimoine avec le soutien de nos experts',
  finalCtaText: "Choisir Selexium, c'est faire le choix d'un accompagnement sur-mesure par des spécialistes de la gestion patrimoniale, capables de vous guider à chaque étape de votre stratégie. Que vous souhaitiez investir, faire fructifier votre patrimoine, préparer votre retraite, anticiper votre transmission ou encore protéger votre famille, nos conseillers patrimoniaux élaborent des solutions adaptées à vos besoins et à vos ambitions. Si vous envisagez d'investir dans l'immobilier, nous vous assistons de la recherche d'opportunités à la finalisation de votre acquisition. Nous vous aidons à sélectionner le dispositif fiscal le plus avantageux, vous proposons des programmes immobiliers exclusifs, et vous accompagnons dans toutes vos démarches administratives, y compris fiscales. Nos experts sont également à vos côtés pour obtenir les meilleures conditions de financement et sécuriser votre prêt immobilier. Enfin, ils vous orientent vers des placements financiers pertinents, sélectionnés en fonction de votre profil d'investisseur et de vos objectifs. Avec Selexium, vous bénéficiez d'un partenaire de confiance, engagé à vos côtés pour valoriser, sécuriser et transmettre votre patrimoine.",
  finalCtaImage: '/images/img_image_1227.png',
  // Footer
  footerExpertise: ['Imposition fiscale', 'Investissement immobilier', 'Investissements financiers', 'Planification de la retraite', 'Conseil en gestion de patrimoine'],
  footerOutils: ['Blog', 'Simulateurs financiers', "Calculatrices d'impôts", 'Ressources', 'FAQs'],
  footerContact: {
    address: '123 Rue Financière',
    city: 'New York, NY 10001',
    country: 'États-Unis',
    phone: '+1 (555) 123-4567',
    email: 'info@wealthadvisors.com',
  },
  footerEntreprise: ['À propos de nous', 'Nos services', 'Notre équipe', 'Carrières', 'Contact'],
  footerCopyright: '© 2025 WealthAdvisors. Tous droits réservés.',
  footerLinks: ['Légal', 'Politique de confidentialité', "Conditions d'utilisation"],
  // Contact/Category Bar
  contactPhone: '+1 (555) 123-4567',
  contactEmail: 'contact@azaleewealth.com',
  categories: ['Fiscalité','Investissement immobilier','Placements','Retraite','Patrimoine','Outils financiers'],
  contactUsImage: '/images/img_image_1233.png',
};

// Ajoute cette fonction utilitaire pour réordonner un tableau
function reorder(list, startIndex, endIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

const defaultSectionOrder = [
  'hero',
  'intro',
  'experts',
  'testimonials',
  'processSteps',
  'stats',
  'investment',
  'tax',
  'partners',
  'finalCta',
  'footer',
  'contactBar',
];

const knownSections = [
  'hero', 'intro', 'experts', 'testimonials', 'processSteps', 'stats',
  'investment', 'tax', 'partners', 'finalCta', 'footer', 'contactBar'
];

export default function CMSPage() {
  const [content, setContent] = useState(defaultContent);
  const [status, setStatus] = useState('');
  const [sectionOrder, setSectionOrder] = useState(defaultSectionOrder);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Charger le contenu depuis la base de données ou localStorage
    const loadContentFromDatabase = async () => {
      try {
        // Essayer d'abord la base de données
        const response = await fetch('/api/pages/content?path=/&type=cms');
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.content) {
            const parsed = result.content.content;
            setContent({ ...defaultContent, ...parsed });
            if (parsed.sectionOrder) setSectionOrder(parsed.sectionOrder);
            return;
          }
        }
      } catch (error) {
        console.log('Base de données non disponible, utilisation du localStorage');
      }

      // Fallback vers localStorage
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setContent({ ...defaultContent, ...parsed });
        if (parsed.sectionOrder) setSectionOrder(parsed.sectionOrder);
      }
    };

    loadContentFromDatabase();
  }, []);

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  // For array fields (like experts, stats, etc.)
  const handleArrayChange = (section, idx, field, value) => {
    setContent({
      ...content,
      [section]: content[section].map((item, i) => i === idx ? { ...item, [field]: value } : item)
    });
  };

  // For array of strings (like partners)
  const handleArrayStringChange = (section, idx, value) => {
    setContent({
      ...content,
      [section]: content[section].map((item, i) => i === idx ? value : item)
    });
  };

  // Ajoute la gestion du drag & drop pour les experts
  const onDragEndExperts = (result) => {
    if (!result.destination) return;
    const newExperts = reorder(content.experts, result.source.index, result.destination.index);
    setContent({ ...content, experts: newExperts });
  };

  // Drag & drop pour l'ordre des sections principales
  const onDragEndSections = (result) => {
    if (!result.destination) return;
    const newOrder = reorder(sectionOrder, result.source.index, result.destination.index);
    setSectionOrder(newOrder);
  };

  const handleSave = async () => {
    const dataToSave = { ...content, sectionOrder };
    
    try {
      // Essayer d'abord la base de données
      const response = await fetch('/api/pages/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagePath: '/',
          pageType: 'cms',
          content: dataToSave,
          metadata: {
            lastModified: new Date().toISOString(),
            modifiedBy: 'admin',
            pageType: 'homepage'
          }
        })
      });

      if (response.ok) {
        console.log('Sauvegardé en base de données');
        setStatus('Saved to Database!');
      } else {
        throw new Error('Erreur base de données');
      }
    } catch (error) {
      console.log('Base de données non disponible, utilisation du localStorage');
      // Fallback vers localStorage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
      setStatus('Saved to LocalStorage!');
    }
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('contentUpdated'));
    
    setShowToast(true);
    setTimeout(() => {
      setStatus('');
      setShowToast(false);
    }, 1800);
  };

  // Mapping des noms lisibles pour l'UI
  const sectionLabels = {
    hero: 'Hero',
    intro: 'Introduction',
    experts: 'Experts',
    testimonials: 'Témoignages',
    processSteps: 'Étapes',
    stats: 'Statistiques',
    investment: 'Investissement',
    tax: 'Fiscalité/Exonération',
    partners: 'Partenaires',
    finalCta: 'Appel à l\'action final',
    footer: 'Footer',
    contactBar: 'Barre Contact/Catégories',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#112033]">Page d'accueil</h1>
            <p className="text-[#686868]">Modifiez le contenu et l'ordre des sections de votre page d'accueil</p>
          </div>
          <button 
            onClick={handleSave} 
            className="bg-[#4EBBBD] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Sauvegarder
          </button>
        </div>
      </div>

      {/* Section Order */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Ordre des sections</h2>
      <DragDropContext onDragEnd={onDragEndSections}>
        <Droppable droppableId="sections-droppable">
          {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2">
              {sectionOrder.map((section, idx) => (
                <Draggable key={section} draggableId={section} index={idx}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                        className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                          snapshot.isDragging 
                            ? 'border-[#4EBBBD] bg-[#EAF7F7] shadow-lg scale-105' 
                            : 'border-gray-200 bg-white hover:border-[#4EBBBD] hover:bg-[#F8F9FA]'
                        }`}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4EBBBD] text-white flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div className="flex-shrink-0 text-[#4EBBBD] text-xl">⋮⋮</div>
                        <span className="font-medium text-[#112033]">{sectionLabels[section] || section}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
        </div>

      {/* Content Sections */}
      <div className="space-y-6">
      {sectionOrder.filter(section => knownSections.includes(section)).map((section) => {
        switch (section) {
          case 'hero':
              return (
                <div key="hero" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Hero
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Titre principal</label>
                      <textarea 
                        name="heroTitle" 
                        value={content.heroTitle} 
                        onChange={handleChange} 
                        rows={3} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre</label>
                      <textarea 
                        name="heroSubtitle" 
                        value={content.heroSubtitle} 
                        onChange={handleChange} 
                        rows={3} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Bouton principal</label>
                      <input 
                        name="heroButton1" 
                        value={content.heroButton1} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Bouton secondaire</label>
                      <input 
                        name="heroButton2" 
                        value={content.heroButton2} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
              </div>
              </div>
              );
          case 'intro':
              return (
                <div key="intro" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Introduction
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                      <input 
                        name="introTitle" 
                        value={content.introTitle} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Paragraphe</label>
                      <textarea 
                        name="introParagraph" 
                        value={content.introParagraph} 
                        onChange={handleChange} 
                        rows={4} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Bouton</label>
                      <input 
                        name="introButton" 
                        value={content.introButton} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
              </div>
              </div>
              );
          case 'experts':
              return (
                <div key="experts" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Experts
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Titre de la section</label>
                      <input 
                        name="expertsTitle" 
                        value={content.expertsTitle} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Description</label>
                      <textarea 
                        name="expertsDescription" 
                        value={content.expertsDescription} 
                        onChange={handleChange} 
                        rows={3} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Liste des experts</label>
              <DragDropContext onDragEnd={onDragEndExperts}>
                <Droppable droppableId="experts-droppable">
                  {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-3">
                      {content.experts.map((expert, idx) => (
                        <Draggable key={idx} draggableId={`expert-${idx}`} index={idx}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                                      className={`p-4 border rounded-lg ${
                                        snapshot.isDragging ? 'border-[#4EBBBD] bg-[#EAF7F7]' : 'border-gray-200 bg-gray-50'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2 mb-3">
                                        <span className="text-[#4EBBBD] text-lg">⋮⋮</span>
                                        <span className="font-medium text-[#112033]">Expert {idx + 1}</span>
                                      </div>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                          <label className="block text-xs font-medium text-[#686868] mb-1">Titre</label>
                                          <input 
                                            value={expert.title} 
                                            onChange={e => handleArrayChange('experts', idx, 'title', e.target.value)} 
                                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-xs font-medium text-[#686868] mb-1">Bouton</label>
                                          <input 
                                            value={expert.button} 
                                            onChange={e => handleArrayChange('experts', idx, 'button', e.target.value)} 
                                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-xs font-medium text-[#686868] mb-1">Description</label>
                                          <textarea 
                                            value={expert.desc} 
                                            onChange={e => handleArrayChange('experts', idx, 'desc', e.target.value)} 
                                            rows={2} 
                                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                                          />
                                        </div>
                                      </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
                    </div>
                  </div>
                </div>
              );
          case 'testimonials':
              return (
                <div key="testimonials" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Témoignages
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                      <input 
                        name="testimonialsTitle" 
                        value={content.testimonialsTitle} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Texte</label>
                      <textarea 
                        name="testimonialText" 
                        value={content.testimonialText} 
                        onChange={handleChange} 
                        rows={4} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Auteur</label>
                      <input 
                        name="testimonialAuthor" 
                        value={content.testimonialAuthor} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
              </div>
              </div>
              );
          case 'processSteps':
              return (
                <div key="processSteps" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Étapes
                  </h2>
                  <div className="space-y-4">
              {content.processSteps.map((step, idx) => (
                      <div key={idx} className="p-4 border rounded-lg border-gray-200 bg-gray-50">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[#4EBBBD] text-lg">⋮⋮</span>
                          <span className="font-medium text-[#112033]">Étape {idx + 1}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-[#686868] mb-1">Label</label>
                            <input 
                              value={step.label} 
                              onChange={e => handleArrayChange('processSteps', idx, 'label', e.target.value)} 
                              className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-[#686868] mb-1">Description</label>
                            <input 
                              value={step.desc} 
                              onChange={e => handleArrayChange('processSteps', idx, 'desc', e.target.value)} 
                              className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                            />
                          </div>
                  {idx === 0 && (
                    <>
                              <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-[#686868] mb-1">Titre du contenu</label>
                                <input 
                                  value={step.contentTitle} 
                                  onChange={e => handleArrayChange('processSteps', idx, 'contentTitle', e.target.value)} 
                                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-[#686868] mb-1">Texte du contenu</label>
                                <textarea 
                                  value={step.contentText} 
                                  onChange={e => handleArrayChange('processSteps', idx, 'contentText', e.target.value)} 
                                  rows={2} 
                                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-[#686868] mb-1">Bouton</label>
                                <input 
                                  value={step.button} 
                                  onChange={e => handleArrayChange('processSteps', idx, 'button', e.target.value)} 
                                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-[#686868] mb-1">Image URL</label>
                                <input 
                                  value={step.image} 
                                  onChange={e => handleArrayChange('processSteps', idx, 'image', e.target.value)} 
                                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                                />
                              </div>
                    </>
                  )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
          case 'stats':
              return (
                <div key="stats" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Statistiques
                  </h2>
                  <div className="space-y-4">
              {content.stats.map((stat, idx) => (
                      <div key={idx} className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-[#686868] mb-1">Valeur</label>
                          <input 
                            value={stat.value} 
                            onChange={e => handleArrayChange('stats', idx, 'value', e.target.value)} 
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-[#686868] mb-1">Label</label>
                          <input 
                            value={stat.label} 
                            onChange={e => handleArrayChange('stats', idx, 'label', e.target.value)} 
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
          case 'investment':
              return (
                <div key="investment" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Investissement
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                      <input 
                        name="investmentTitle" 
                        value={content.investmentTitle} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Texte</label>
                      <textarea 
                        name="investmentText" 
                        value={content.investmentText} 
                        onChange={handleChange} 
                        rows={4} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Bouton</label>
                      <input 
                        name="investmentButton" 
                        value={content.investmentButton} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#686868] mb-2">Image 1 URL</label>
                        <input 
                          name="investmentImage1" 
                          value={content.investmentImage1} 
                          onChange={handleChange} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
              </div>
                      <div>
                        <label className="block text-sm font-medium text-[#686868] mb-2">Image 2 URL</label>
                        <input 
                          name="investmentImage2" 
                          value={content.investmentImage2} 
                          onChange={handleChange} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
              </div>
              </div>
              </div>
              </div>
              );
          case 'tax':
              return (
                <div key="tax" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Fiscalité/Exonération
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                      <input 
                        name="taxTitle" 
                        value={content.taxTitle} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Texte</label>
                      <textarea 
                        name="taxText" 
                        value={content.taxText} 
                        onChange={handleChange} 
                        rows={4} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Bouton</label>
                      <input 
                        name="taxButton" 
                        value={content.taxButton} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
                    <div className="space-y-4">
              {content.taxCards.map((card, idx) => (
                        <div key={idx} className="p-4 border rounded-lg border-gray-200 bg-gray-50">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[#4EBBBD] text-lg">⋮⋮</span>
                            <span className="font-medium text-[#112033]">Carte {idx + 1}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs font-medium text-[#686868] mb-1">Titre</label>
                              <input 
                                value={card.title} 
                                onChange={e => handleArrayChange('taxCards', idx, 'title', e.target.value)} 
                                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-[#686868] mb-1">Image URL</label>
                              <input 
                                value={card.image} 
                                onChange={e => handleArrayChange('taxCards', idx, 'image', e.target.value)} 
                                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-xs font-medium text-[#686868] mb-1">Texte</label>
                              <textarea 
                                value={card.text} 
                                onChange={e => handleArrayChange('taxCards', idx, 'text', e.target.value)} 
                                rows={2} 
                                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-xs font-medium text-[#686868] mb-1">Lien</label>
                              <input 
                                value={card.link} 
                                onChange={e => handleArrayChange('taxCards', idx, 'link', e.target.value)} 
                                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
          case 'partners':
              return (
                <div key="partners" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Partenaires
                  </h2>
                  <div className="space-y-4">
              {content.partners.map((url, idx) => (
                      <div key={idx} className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-[#686868] mb-1">Logo {idx + 1} URL</label>
                          <input 
                            value={url} 
                            onChange={e => handleArrayStringChange('partners', idx, e.target.value)} 
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#4EBBBD] focus:border-transparent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
          case 'finalCta':
              return (
                <div key="finalCta" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Appel à l'action final
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                      <input 
                        name="finalCtaTitle" 
                        value={content.finalCtaTitle} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Texte</label>
                      <textarea 
                        name="finalCtaText" 
                        value={content.finalCtaText} 
                        onChange={handleChange} 
                        rows={4} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Image URL</label>
                      <input 
                        name="finalCtaImage" 
                        value={content.finalCtaImage} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
              </div>
              </div>
              );
          case 'footer':
              return (
                <div key="footer" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Footer
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Expertise (séparées par une virgule)</label>
                      <input 
                        name="footerExpertise" 
                        value={content.footerExpertise.join(', ')} 
                        onChange={e => setContent({ ...content, footerExpertise: e.target.value.split(',').map(s => s.trim()) })} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Outils (séparés par une virgule)</label>
                      <input 
                        name="footerOutils" 
                        value={content.footerOutils.join(', ')} 
                        onChange={e => setContent({ ...content, footerOutils: e.target.value.split(',').map(s => s.trim()) })} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Entreprise (séparées par une virgule)</label>
                      <input 
                        name="footerEntreprise" 
                        value={content.footerEntreprise.join(', ')} 
                        onChange={e => setContent({ ...content, footerEntreprise: e.target.value.split(',').map(s => s.trim()) })} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#686868] mb-2">Adresse</label>
                        <input 
                          name="footerContact.address" 
                          value={content.footerContact.address} 
                          onChange={e => setContent({ ...content, footerContact: { ...content.footerContact, address: e.target.value } })} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#686868] mb-2">Ville</label>
                        <input 
                          name="footerContact.city" 
                          value={content.footerContact.city} 
                          onChange={e => setContent({ ...content, footerContact: { ...content.footerContact, city: e.target.value } })} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#686868] mb-2">Pays</label>
                        <input 
                          name="footerContact.country" 
                          value={content.footerContact.country} 
                          onChange={e => setContent({ ...content, footerContact: { ...content.footerContact, country: e.target.value } })} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#686868] mb-2">Téléphone</label>
                        <input 
                          name="footerContact.phone" 
                          value={content.footerContact.phone} 
                          onChange={e => setContent({ ...content, footerContact: { ...content.footerContact, phone: e.target.value } })} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#686868] mb-2">Email</label>
                        <input 
                          name="footerContact.email" 
                          value={content.footerContact.email} 
                          onChange={e => setContent({ ...content, footerContact: { ...content.footerContact, email: e.target.value } })} 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
              </div>
              </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Copyright</label>
                      <input 
                        name="footerCopyright" 
                        value={content.footerCopyright} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Liens (séparés par une virgule)</label>
                      <input 
                        name="footerLinks" 
                        value={content.footerLinks.join(', ')} 
                        onChange={e => setContent({ ...content, footerLinks: e.target.value.split(',').map(s => s.trim()) })} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
              </div>
              </div>
              );
          case 'contactBar':
              return (
                <div key="contactBar" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-[#112033] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4EBBBD]"></div>
                    Section Barre Contact/Catégories
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Téléphone</label>
                      <input 
                        name="contactPhone" 
                        value={content.contactPhone} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Email</label>
                      <input 
                        name="contactEmail" 
                        value={content.contactEmail} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Catégories (séparées par une virgule)</label>
                      <input 
                        name="categories" 
                        value={content.categories.join(', ')} 
                        onChange={e => setContent({ ...content, categories: e.target.value.split(',').map(s => s.trim()) })} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
                    <div>
                      <label className="block text-sm font-medium text-[#686868] mb-2">Image URL</label>
                      <input 
                        name="contactUsImage" 
                        value={content.contactUsImage} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
              </div>
              </div>
              </div>
              );
          default:
              return <div key={section} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-[#112033] mb-4">{sectionLabels[section] || section}</h2>
                <p className="text-[#686868]">Section en cours de développement...</p>
              </div>;
          }
        })}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-[#4EBBBD] text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">Contenu sauvegardé avec succès !</span>
        </div>
      )}
    </div>
  );
} 