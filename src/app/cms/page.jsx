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
  taxText: "L'immobilier reste un investissement de référence pour les investisseurs français, surtout lorsqu'il est accompagné d'avantages fiscaux attractifs. En choisissant des biens éligibles à des dispositifs légaux de défiscalisation, vous pouvez réduire significativement votre imposition tout en développant votre patrimoine. Le gouvernement encourage ainsi l’investissement dans certains secteurs ou types de logements — anciens ou neufs, location longue durée ou saisonnière — grâce à des lois fiscales spécifiques. Ces mesures permettent non seulement de dynamiser l’offre immobilière mais aussi de soutenir les investisseurs en leur offrant des avantages concrets. Que vous souhaitiez constituer un patrimoine, optimiser vos revenus locatifs ou préparer votre avenir, nos solutions de défiscalisation s’adaptent à votre situation et à vos objectifs.",
  taxButton: 'Discover our tailor-made strategies for effective tax optimization.',
  taxCards: [
    { title: 'Le statut LMNP', image: '/images/img_image_1223.png', text: 'Louez-vous un bien meublé en tant que particulier ? Le statut LMNP vous permet de déclarer vos revenus locatifs sous le régime BIC, souvent plus avantageux que les revenus fonciers. Ce statut est accessible si vos revenus locatifs restent sous un certain seuil annuel, et il permet d’amortir le bien et le mobilier, réduisant ainsi l’imposition sur les loyers perçus.', link: 'En savoir plus sur le régime LMNP →' },
    { title: 'Le statut LMP', image: '/images/img_image_1224.png', text: 'Lorsque vos revenus issus de la location meublée dépassent la moitié des revenus globaux de votre foyer fiscal, vous pouvez accéder au statut de Loueur en Meublé Professionnel (LMP). Ce statut ouvre droit à des avantages fiscaux majeurs, tels que l’exonération d’impôt sur les plus-values après un certain délai de détention, ou encore la possibilité d’imputer les déficits sur votre revenu global.', link: 'En savoir plus sur le régime LMP →' },
    { title: 'La loi Pinel', image: '/images/img_image_1225.png', text: 'Souhaitez-vous investir dans l’immobilier neuf ou réhabilité tout en réduisant vos impôts ? Le dispositif Pinel vous offre une réduction d’impôt proportionnelle à votre durée d’engagement locatif (6, 9 ou 12 ans). Pour en bénéficier, vous devez respecter des plafonds de loyers et de ressources des locataires, fixés selon la localisation du bien.', link: 'En savoir plus sur la loi Pinel →' },
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
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setContent({ ...defaultContent, ...parsed });
      if (parsed.sectionOrder) setSectionOrder(parsed.sectionOrder);
    }
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

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...content, sectionOrder }));
    setStatus('Saved!');
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
    finalCta: 'Appel à l’action final',
    footer: 'Footer',
    contactBar: 'Barre Contact/Catégories',
  };

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 24, background: '#f9f9f9', borderRadius: 12, position: 'relative' }}>
      <h1 style={{ fontSize: 28, marginBottom: 24 }}>CMS - Edit Homepage Content</h1>
      {/* Drag & drop des sections principales */}
      <h2>Ordre des sections de la page</h2>
      <DragDropContext onDragEnd={onDragEndSections}>
        <Droppable droppableId="sections-droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 32 }}>
              {sectionOrder.map((section, idx) => (
                <Draggable key={section} draggableId={section} index={idx}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '18px 28px',
                        marginBottom: 18,
                        border: snapshot.isDragging ? '2.5px solid #4EBBBD' : '2px solid #253F60',
                        borderRadius: 10,
                        background: snapshot.isDragging ? '#e0f7fa' : '#fff',
                        fontWeight: 'bold',
                        cursor: snapshot.isDragging ? 'grabbing' : 'grab',
                        boxShadow: snapshot.isDragging ? '0 8px 24px #4EBBBD40' : '0 1px 4px #253F6010',
                        transition: 'box-shadow 0.2s, border 0.2s, background 0.2s, transform 0.15s',
                        transform: snapshot.isDragging ? 'scale(1.04)' : 'scale(1)',
                        userSelect: 'none',
                        ...provided.draggableProps.style,
                      }}
                    >
                      <span style={{fontWeight:'bold',fontSize:22,marginRight:10,color:'#4EBBBD',userSelect:'none'}}>#{idx+1}</span>
                      <span style={{fontWeight:'bold',fontSize:22,marginRight:10,color:'#253F60',userSelect:'none'}}>🟰</span>
                      <span style={{fontWeight:'bold',fontSize:18}}>{sectionLabels[section] || section}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* Toast de confirmation */}
      {showToast && (
        <div style={{
          position: 'fixed',
          left: '50%',
          bottom: 40,
          transform: 'translateX(-50%)',
          background: '#4EBBBD',
          color: 'white',
          padding: '16px 32px',
          borderRadius: 8,
          fontWeight: 'bold',
          fontSize: 18,
          boxShadow: '0 4px 24px #4EBBBD60',
          zIndex: 9999,
          letterSpacing: 1,
        }}>
          ✅ Ordre sauvegardé !
        </div>
      )}
      {/* Rendu dynamique des sections selon l'ordre choisi */}
      {sectionOrder.filter(section => knownSections.includes(section)).map((section) => {
        switch (section) {
          case 'hero':
            return (<React.Fragment key="hero">
              <h2>Hero Section</h2>
              <div style={{ marginBottom: 12 }}>
                <label>Title</label>
                <textarea name="heroTitle" value={content.heroTitle} onChange={handleChange} rows={2} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Subtitle</label>
                <textarea name="heroSubtitle" value={content.heroSubtitle} onChange={handleChange} rows={2} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Button 1</label>
                <input name="heroButton1" value={content.heroButton1} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Button 2</label>
                <input name="heroButton2" value={content.heroButton2} onChange={handleChange} style={{ width: '100%' }} />
              </div>
            </React.Fragment>);
          case 'intro':
            return (<React.Fragment key="intro">
              <h2>Introduction</h2>
              <div style={{ marginBottom: 12 }}>
                <label>Title</label>
                <input name="introTitle" value={content.introTitle} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Paragraph</label>
                <textarea name="introParagraph" value={content.introParagraph} onChange={handleChange} rows={3} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Button</label>
                <input name="introButton" value={content.introButton} onChange={handleChange} style={{ width: '100%' }} />
              </div>
            </React.Fragment>);
          case 'experts':
            return (<React.Fragment key="experts">
              <h2>Experts Section</h2>
              <div style={{ marginBottom: 12 }}>
                <label>Title</label>
                <input name="expertsTitle" value={content.expertsTitle} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Description</label>
                <textarea name="expertsDescription" value={content.expertsDescription} onChange={handleChange} rows={2} style={{ width: '100%' }} />
              </div>
              <DragDropContext onDragEnd={onDragEndExperts}>
                <Droppable droppableId="experts-droppable">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {content.experts.map((expert, idx) => (
                        <Draggable key={idx} draggableId={`expert-${idx}`} index={idx}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                border: '1px solid #ccc',
                                padding: 8,
                                marginBottom: 8,
                                background: snapshot.isDragging ? '#e6f7ff' : 'white',
                                ...provided.draggableProps.style
                              }}
                            >
                              <span style={{fontWeight:'bold',cursor:'grab',marginRight:8}}>≡</span>
                              <label>Expert {idx + 1} Title</label>
                              <input value={expert.title} onChange={e => handleArrayChange('experts', idx, 'title', e.target.value)} style={{ width: '100%' }} />
                              <label>Description</label>
                              <textarea value={expert.desc} onChange={e => handleArrayChange('experts', idx, 'desc', e.target.value)} rows={2} style={{ width: '100%' }} />
                              <label>Button</label>
                              <input value={expert.button} onChange={e => handleArrayChange('experts', idx, 'button', e.target.value)} style={{ width: '100%' }} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </React.Fragment>);
          case 'testimonials':
            return (<React.Fragment key="testimonials">
              <h2>Testimonials</h2>
              <div style={{ marginBottom: 12 }}>
                <label>Title</label>
                <input name="testimonialsTitle" value={content.testimonialsTitle} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Text</label>
                <textarea name="testimonialText" value={content.testimonialText} onChange={handleChange} rows={3} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Author</label>
                <input name="testimonialAuthor" value={content.testimonialAuthor} onChange={handleChange} style={{ width: '100%' }} />
              </div>
            </React.Fragment>);
          case 'processSteps':
            return (<React.Fragment key="processSteps">
              <h2>Process Steps</h2>
              {content.processSteps.map((step, idx) => (
                <div key={idx} style={{ border: '1px solid #ccc', padding: 8, marginBottom: 8 }}>
                  <label>Label</label>
                  <input value={step.label} onChange={e => handleArrayChange('processSteps', idx, 'label', e.target.value)} style={{ width: '100%' }} />
                  <label>Description</label>
                  <input value={step.desc} onChange={e => handleArrayChange('processSteps', idx, 'desc', e.target.value)} style={{ width: '100%' }} />
                  {idx === 0 && (
                    <>
                      <label>Content Title</label>
                      <input value={step.contentTitle} onChange={e => handleArrayChange('processSteps', idx, 'contentTitle', e.target.value)} style={{ width: '100%' }} />
                      <label>Content Text</label>
                      <textarea value={step.contentText} onChange={e => handleArrayChange('processSteps', idx, 'contentText', e.target.value)} rows={2} style={{ width: '100%' }} />
                      <label>Button</label>
                      <input value={step.button} onChange={e => handleArrayChange('processSteps', idx, 'button', e.target.value)} style={{ width: '100%' }} />
                      <label>Image URL</label>
                      <input value={step.image} onChange={e => handleArrayChange('processSteps', idx, 'image', e.target.value)} style={{ width: '100%' }} />
                    </>
                  )}
                </div>
              ))}
            </React.Fragment>);
          case 'stats':
            return (<React.Fragment key="stats">
              <h2>Statistics</h2>
              {content.stats.map((stat, idx) => (
                <div key={idx} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <input value={stat.value} onChange={e => handleArrayChange('stats', idx, 'value', e.target.value)} style={{ width: 100 }} />
                  <input value={stat.label} onChange={e => handleArrayChange('stats', idx, 'label', e.target.value)} style={{ flex: 1 }} />
                </div>
              ))}
            </React.Fragment>);
          case 'investment':
            return (<React.Fragment key="investment">
              <h2>Investment Section</h2>
              <div style={{ marginBottom: 12 }}>
                <label>Title</label>
                <input name="investmentTitle" value={content.investmentTitle} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Text</label>
                <textarea name="investmentText" value={content.investmentText} onChange={handleChange} rows={3} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Button</label>
                <input name="investmentButton" value={content.investmentButton} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Image 1 URL</label>
                <input name="investmentImage1" value={content.investmentImage1} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Image 2 URL</label>
                <input name="investmentImage2" value={content.investmentImage2} onChange={handleChange} style={{ width: '100%' }} />
              </div>
            </React.Fragment>);
          case 'tax':
            return (<React.Fragment key="tax">
              <h2>Tax Exemption Section</h2>
              <div style={{ marginBottom: 12 }}>
                <label>Title</label>
                <input name="taxTitle" value={content.taxTitle} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Text</label>
                <textarea name="taxText" value={content.taxText} onChange={handleChange} rows={3} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Button</label>
                <input name="taxButton" value={content.taxButton} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              {content.taxCards.map((card, idx) => (
                <div key={idx} style={{ border: '1px solid #ccc', padding: 8, marginBottom: 8 }}>
                  <label>Card Title</label>
                  <input value={card.title} onChange={e => handleArrayChange('taxCards', idx, 'title', e.target.value)} style={{ width: '100%' }} />
                  <label>Image URL</label>
                  <input value={card.image} onChange={e => handleArrayChange('taxCards', idx, 'image', e.target.value)} style={{ width: '100%' }} />
                  <label>Text</label>
                  <textarea value={card.text} onChange={e => handleArrayChange('taxCards', idx, 'text', e.target.value)} rows={2} style={{ width: '100%' }} />
                  <label>Link</label>
                  <input value={card.link} onChange={e => handleArrayChange('taxCards', idx, 'link', e.target.value)} style={{ width: '100%' }} />
                </div>
              ))}
            </React.Fragment>);
          case 'partners':
            return (<React.Fragment key="partners">
              <h2>Partners</h2>
              {content.partners.map((url, idx) => (
                <div key={idx} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <label>Logo {idx + 1} URL</label>
                  <input value={url} onChange={e => handleArrayStringChange('partners', idx, e.target.value)} style={{ flex: 1 }} />
                </div>
              ))}
            </React.Fragment>);
          case 'finalCta':
            return (<React.Fragment key="finalCta">
              <h2>Final CTA</h2>
              <div style={{ marginBottom: 12 }}>
                <label>Title</label>
                <input name="finalCtaTitle" value={content.finalCtaTitle} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Text</label>
                <textarea name="finalCtaText" value={content.finalCtaText} onChange={handleChange} rows={3} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Image URL</label>
                <input name="finalCtaImage" value={content.finalCtaImage} onChange={handleChange} style={{ width: '100%' }} />
              </div>
            </React.Fragment>);
          case 'footer':
            return (<React.Fragment key="footer">
              <h2>Footer</h2>
              <div style={{ marginBottom: 12 }}>
                <label>Expertise (comma separated)</label>
                <input name="footerExpertise" value={content.footerExpertise.join(', ')} onChange={e => setContent({ ...content, footerExpertise: e.target.value.split(',').map(s => s.trim()) })} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Outils (comma separated)</label>
                <input name="footerOutils" value={content.footerOutils.join(', ')} onChange={e => setContent({ ...content, footerOutils: e.target.value.split(',').map(s => s.trim()) })} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Entreprise (comma separated)</label>
                <input name="footerEntreprise" value={content.footerEntreprise.join(', ')} onChange={e => setContent({ ...content, footerEntreprise: e.target.value.split(',').map(s => s.trim()) })} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Contact Address</label>
                <input name="footerContact.address" value={content.footerContact.address} onChange={e => setContent({ ...content, footerContact: { ...content.footerContact, address: e.target.value } })} style={{ width: '100%' }} />
                <label>City</label>
                <input name="footerContact.city" value={content.footerContact.city} onChange={e => setContent({ ...content, footerContact: { ...content.footerContact, city: e.target.value } })} style={{ width: '100%' }} />
                <label>Country</label>
                <input name="footerContact.country" value={content.footerContact.country} onChange={e => setContent({ ...content, footerContact: { ...content.footerContact, country: e.target.value } })} style={{ width: '100%' }} />
                <label>Phone</label>
                <input name="footerContact.phone" value={content.footerContact.phone} onChange={e => setContent({ ...content, footerContact: { ...content.footerContact, phone: e.target.value } })} style={{ width: '100%' }} />
                <label>Email</label>
                <input name="footerContact.email" value={content.footerContact.email} onChange={e => setContent({ ...content, footerContact: { ...content.footerContact, email: e.target.value } })} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Copyright</label>
                <input name="footerCopyright" value={content.footerCopyright} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Footer Links (comma separated)</label>
                <input name="footerLinks" value={content.footerLinks.join(', ')} onChange={e => setContent({ ...content, footerLinks: e.target.value.split(',').map(s => s.trim()) })} style={{ width: '100%' }} />
              </div>
            </React.Fragment>);
          case 'contactBar':
            return (<React.Fragment key="contactBar">
              <h2>Contact/Category Bar</h2>
              <div style={{ marginBottom: 12 }}>
                <label>Phone</label>
                <input name="contactPhone" value={content.contactPhone} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Email</label>
                <input name="contactEmail" value={content.contactEmail} onChange={handleChange} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Categories (comma separated)</label>
                <input name="categories" value={content.categories.join(', ')} onChange={e => setContent({ ...content, categories: e.target.value.split(',').map(s => s.trim()) })} style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Contact Us Image URL</label>
                <input name="contactUsImage" value={content.contactUsImage} onChange={handleChange} style={{ width: '100%' }} />
              </div>
            </React.Fragment>);
          default:
            return <div key={section} style={{display:'none'}} />;
        }
      })}
      <button onClick={handleSave} style={{ background: '#253F60', color: 'white', padding: '10px 24px', border: 'none', borderRadius: 6, fontSize: 16, marginTop: 24 }}>
        Save All
      </button>
      {status && <span style={{ marginLeft: 16, color: 'green' }}>{status}</span>}
    </div>
  );
} 