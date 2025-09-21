'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import Slider from '../components/ui/Slider';
import PagerIndicator from '../components/ui/PagerIndicator';
import ExpandableList from '../components/ui/ExpandableList';

const LOCAL_STORAGE_KEY = 'homepageContent';

// Dynamic Hero Background Carousel Component
const HeroCarousel = ({ content }) => {
  const [currentBgIndex, setCurrentBgIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  
  // Auto-play functionality for hero backgrounds
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % (content.heroBackgrounds?.length || 1));
    }, 6000); // Change every 6 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, content.heroBackgrounds?.length]);
  
  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentBgIndex(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  return (
    <section className="relative w-full min-h-[600px] py-12 sm:py-20">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {(content.heroBackgrounds || []).map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={bg}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log('Hero background failed to load:', bg);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('Hero background loaded successfully:', bg)}
            />
          </div>
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#253F60]/80 via-[#253F60]/60 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center lg:items-start justify-center text-center lg:text-left min-h-[600px]">
        <div className="max-w-2xl">
          <h1 className="text-white text-[12px] sm:text-lg md:text-xl lg:text-4xl font-cairo font-semibold uppercase mb-4 leading-snug">
            {content.heroTitle}
          </h1>
          <p className="text-white text-[10px] sm:text-base md:text-lg lg:text-xl mb-8 font-inter">
            {content.heroSubtitle}
          </p>
          <button className="bg-[#B99066] text-white px-8 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase shadow-lg mb-8 hover:bg-[#A67A5A] transition-colors duration-200">
            {content.heroButton1}
          </button>
          
          {/* Dynamic Navigation Dots */}
          <div className="flex justify-center lg:justify-start items-center gap-2 mb-4">
            {(content.heroBackgrounds || []).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
                  i === currentBgIndex ? 'bg-[#B99066] scale-125' : 'bg-transparent hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Dynamic Partners Carousel Component
const PartnersCarousel = ({ content }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  
  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // Fixed to 6 partners
      }
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning]);
  
  // Handle manual navigation
  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setTimeout(() => setIsAutoPlaying(true), 3000); // Resume auto-play after 3 seconds
    }, 500);
  };
  
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? 5 : currentIndex - 1; // Fixed to 6 partners (0-5)
    goToSlide(newIndex);
  };
  
  const goToNext = () => {
    const newIndex = (currentIndex + 1) % 6; // Fixed to 6 partners
    goToSlide(newIndex);
  };
  
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#F8FAFB] to-[#F1F5F9]">
      <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#B99066] to-[#4EBBBD] mb-4 rounded-full mx-auto"></div>
          <h2 className="text-2xl lg:text-3xl font-cairo font-semibold text-[#112033] mb-2">Nos partenaires de confiance</h2>
          <p className="text-[#4A5568] font-inter">Des partenaires reconnus pour vous accompagner dans vos projets</p>
        </div>
        
        {/* Dynamic Carousel */}
        <div className="relative">
          {/* Top Separator */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#4EBBBD] to-transparent mb-8"></div>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm p-8">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 disabled:opacity-50"
              disabled={isTransitioning}
            >
              <svg className="w-5 h-5 text-[#4EBBBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 disabled:opacity-50"
              disabled={isTransitioning}
            >
              <svg className="w-5 h-5 text-[#4EBBBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Single Partner Display */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {(Array.isArray(content.partners) ? content.partners : []).map((src, idx) => (
                  <div 
                    key={idx} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="flex justify-center">
                      <div className="group">
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-[120px] w-[200px] flex items-center justify-center border border-gray-100 hover:border-[#4EBBBD] hover:scale-105">
                          <img 
                            src={src} 
                            alt={`Partenaire ${idx + 1}`} 
                            className="max-h-[60px] max-w-[160px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                            onError={(e) => {
                              console.log('Image failed to load:', src);
                              e.target.style.display = 'none';
                              // Show fallback text
                              const fallback = document.createElement('div');
                              fallback.className = 'text-xs text-gray-500 text-center';
                              fallback.textContent = `Partner ${idx + 1}`;
                              e.target.parentNode.appendChild(fallback);
                            }}
                            onLoad={() => console.log('Image loaded successfully:', src)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex-1 max-w-xs">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#4EBBBD] to-[#B99066] rounded-full transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / 6) * 100}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm text-[#4A5568] font-inter font-medium">
              {currentIndex + 1} / 6
            </span>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-3 mt-6">
            {(Array.isArray(content.partners) ? content.partners : []).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-[#4EBBBD] scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>
          
          {/* Bottom Separator */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#4EBBBD] to-transparent mt-8"></div>
        </div>
        
        {/* Partner Categories */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-lg">🏢</span>
            </div>
            <h3 className="font-cairo font-semibold text-[#112033] mb-2">Assurance</h3>
            <p className="text-sm text-[#4A5568] font-inter">Solutions d'assurance-vie et de capitalisation</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-lg">💼</span>
            </div>
            <h3 className="font-cairo font-semibold text-[#112033] mb-2">Gestion d'actifs</h3>
            <p className="text-sm text-[#4A5568] font-inter">Expertise en gestion patrimoniale</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-lg">🏦</span>
            </div>
            <h3 className="font-cairo font-semibold text-[#112033] mb-2">Services financiers</h3>
            <p className="text-sm text-[#4A5568] font-inter">Conseil et accompagnement personnalisé</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultContent = {
  heroTitle: "Votre partenaire de confiance en matière de gestion de patrimoine, de fiscalité et de conseil en investissement.",
  heroSubtitle: "Explorez des conseils personnalisés en matière de fiscalité, d'immobilier, d'investissements, de retraite et de gestion de patrimoine.",
  heroButton1: "Obtenez votre consultation personnalisée",
  heroButton2: "Commencez à explorer les sujets",
  heroBackgrounds: [
    "/images/home.webp",
    "/images/image2.webp",
    "/images/image3.webp"
  ],
  introTitle: "Gestion de patrimoine — Optimisation fiscale immobilière — Conseil financier",
  introParagraph: "Depuis 30 ans, nous façonnons l'avenir financier de clients exigeants. Notre mission : libérer le potentiel caché de votre patrimoine grâce à une approche humaine, experte et transparente. Nous construisons des relations de confiance basées sur la proximité, l'écoute active et l'engagement total de nos conseillers - à vos côtés à chaque étape de votre projet.",
  introButton: "Rencontrez-nous",
  teamTitle: "Qui sommes-nous",
  teamSubtitle: "Une équipe passionnée à votre service",
  teamDescription: "Chez Azalée Patrimoine, nous croyons que la réussite de votre stratégie patrimoniale repose sur la qualité humaine de l'accompagnement. Notre équipe pluridisciplinaire combine expertise technique et approche personnalisée pour vous offrir des solutions sur-mesure.",
  teamValues: [
    { title: "Expertise", desc: "30 ans d'expérience dans le conseil patrimonial", icon: "🎯" },
    { title: "Proximité", desc: "Un accompagnement humain et personnalisé", icon: "🤝" },
    { title: "Transparence", desc: "Des conseils clairs et indépendants", icon: "💎" },
    { title: "Excellence", desc: "La recherche constante de la meilleure solution", icon: "⭐" }
  ],
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
  testimonialsTitle: "Témoignages",
  testimonialText: "Azalee Patrimoine nous a apporté une vraie tranquillité d'esprit. Notre conseiller nous a aidés à structurer notre patrimoine et nous a accompagnés dans l'achat d'un nouveau bien immobilier. Nous avons ensuite rencontré un consultant en investissement immobilier et un expert-comptable — des professionnels réactifs et compétents. Leurs conseils nous ont permis de revoir notre stratégie financière en toute confiance. Nous les recommandons vivement.",
  testimonialAuthor: "néon.",
  processSteps: [
    { label: 'STEP 1', desc: 'CONSTRUIRE VOTRE PATRIMOINE', contentTitle: 'Développer votre patrimoine', contentText: 'Investing in real estate remains a valuable choice today, appreciated for its security and return on investment. Whether it is to generate additional income, protect your financial future, or pass on an inheritance, building a solid heritage meets essential objectives, for you and your loved ones.', button: 'Découvrez Comment Nos Courtiers Travaillent Pour Vous', image: '/images/img_image_1221.png' },
    { label: 'STEP 3', desc: 'OPTIMISEZ LA PERFORMANCE DE VOS INVESTISSEMENTS' },
    { label: 'STEP 4', desc: 'SELECT THE SOLUTION THAT SUITS YOU BEST' },
    { label: 'STEP 5', desc: 'FINANCER VOTRE PROJET DANS LES MEILLEURES CONDITIONS' },
    { label: 'STEP 6', desc: 'DIVERSIFIEZ VOS INVESTISSEMENTS' },
    { label: 'STEP 7', desc: 'TO ACCOMPANY YOU IN THE LONG TERM' },
  ],
  stats: [
    { value: '2006', label: 'Date de création' },
    { value: '7000', label: 'Clients' },
    { value: '92%', label: '93% de nos clients nous recommandent pour un investissement immobilier' },
    { value: '16 millions', label: "Le chiffre d'affaires" },
    { value: '+18 %', label: 'De croissance en 2019' },
    { value: '150', label: 'Collaborateurs partout en France' },
  ],
  investmentTitle: 'Valorisez votre avenir en construisant votre patrimoine',
  investmentText: "Investing, ce n'est pas seulement faire fructifier son argent, c'est poser les bases d'une sécurité financière durable. Que vous souhaitiez générer des revenus complémentaires, financer des projets futurs ou protéger votre famille, la constitution d'un patrimoine devient un choix stratégique. Immobilier, placements financiers ou solutions mixtes : chaque investissement doit être réfléchi et aligné avec vos objectifs. Chez Selexium, nos spécialistes sont là pour définir avec vous une stratégie sur mesure, pensée pour vous apporter performance et sérénité.",
  investmentButton: 'Explorez nos solutions pour faire croître votre patrimoine',
  investmentImage1: '/images/img_image_1222.png',
  investmentImage2: '/images/img_image_1220.png',
  taxTitle: 'Why choose real estate tax exemption?',
  taxText: "L'immobilier reste un investissement de référence pour les investisseurs français, surtout lorsqu'il est accompagné d'avantages fiscaux attractifs. En choisissant des biens éligibles à des dispositifs légaux de défiscalisation, vous pouvez réduire significativement votre imposition tout en développant votre patrimoine. Le gouvernement encourage ainsi l’investissement dans certains secteurs ou types de logements — anciens ou neufs, location longue durée ou saisonnière — grâce à des lois fiscales spécifiques. Ces mesures permettent non seulement de dynamiser l’offre immobilière mais aussi de soutenir les investisseurs en leur offrant des avantages concrets. Que vous souhaitiez constituer un patrimoine, optimiser vos revenus locatifs ou préparer votre avenir, nos solutions de défiscalisation s’adaptent à votre situation et à vos objectifs.",
  taxButton: 'Discover our tailor-made strategies for effective tax optimization.',
  taxCards: [
    { title: 'Le statut LMNP', image: '/images/img_image_1223.png', text: 'Louez-vous un bien meublé en tant que particulier ? Le statut LMNP vous permet de déclarer vos revenus locatifs sous le régime BIC, souvent plus avantageux que les revenus fonciers. Ce statut est accessible si vos revenus locatifs restent sous un certain seuil annuel, et il permet d’amortir le bien et le mobilier, réduisant ainsi l’imposition sur les loyers perçus.', link: 'En savoir plus sur le régime LMNP →' },
    { title: 'Le statut LMP', image: '/images/img_image_1224.png', text: 'Lorsque vos revenus issus de la location meublée dépassent la moitié des revenus globaux de votre foyer fiscal, vous pouvez accéder au statut de Loueur en Meublé Professionnel (LMP). Ce statut ouvre droit à des avantages fiscaux majeurs, tels que l’exonération d’impôt sur les plus-values après un certain délai de détention, ou encore la possibilité d’imputer les déficits sur votre revenu global.', link: 'En savoir plus sur le régime LMP →' },
    { title: 'La loi Pinel', image: '/images/img_image_1225.png', text: 'Souhaitez-vous investir dans l’immobilier neuf ou réhabilité tout en réduisant vos impôts ? Le dispositif Pinel vous offre une réduction d’impôt proportionnelle à votre durée d’engagement locatif (6, 9 ou 12 ans). Pour en bénéficier, vous devez respecter des plafonds de loyers et de ressources des locataires, fixés selon la localisation du bien.', link: 'En savoir plus sur la loi Pinel →' },
  ],
  partners: [
    '/images/selencia.svg',
    '/images/cardif-logo.svg', 
    '/images/SL-Logo-svg.svg',
    '/images/vieplus.svg',
    '/images/intencial-1.png',
    '/images/img_header_logo.png'
  ],
  finalCtaTitle: 'Faites croître votre patrimoine avec le soutien de nos experts',
  finalCtaText: "Choisir Azalée, c'est faire le choix d'un accompagnement sur-mesure par des spécialistes de la gestion patrimoniale, capables de vous guider à chaque étape de votre stratégie. Que vous souhaitiez investir, faire fructifier votre patrimoine, préparer votre retraite, anticiper votre transmission ou encore protéger votre famille, nos conseillers patrimoniaux élaborent des solutions adaptées à vos besoins et à vos ambitions. Si vous envisagez d'investir dans l'immobilier, nous vous assistons de la recherche d'opportunités à la finalisation de votre acquisition. Nous vous aidons à sélectionner le dispositif fiscal le plus avantageux, vous proposons des programmes immobiliers exclusifs, et vous accompagnons dans toutes vos démarches administratives, y compris fiscales. Nos experts sont également à vos côtés pour obtenir les meilleures conditions de financement et sécuriser votre prêt immobilier. Enfin, ils vous orientent vers des placements financiers pertinents, sélectionnés en fonction de votre profil d'investisseur et de vos objectifs. Avec Azalée, vous bénéficiez d'un partenaire de confiance, engagé à vos côtés pour valoriser, sécuriser et transmettre votre patrimoine.",
  finalCtaImage: '/images/img_image_1227.png',
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
  contactPhone: '+1 (555) 123-4567',
  contactEmail: 'contact@azaleewealth.com',
  categories: ['Fiscalité','Investissement immobilier','Placements','Retraite','Patrimoine','Outils financiers'],
  contactUsImage: '/images/img_image_1233.png',
};

const defaultSectionOrder = [
  'hero',
  'intro',
  'team',
  'testimonials',
  'processSteps',
  'stats',
  'investment',
  'tax',
  'partners',
  'finalCta',
  'footer',
];

export default function HomePage() {
  const [content, setContent] = useState(defaultContent);
  const [sectionOrder, setSectionOrder] = useState(defaultSectionOrder);
  const [isConnectedToUpdates, setIsConnectedToUpdates] = useState(false);
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(true);
  const [contentSource, setContentSource] = useState('default');

  // Load content from CMS database
  const loadContentFromCMS = async () => {
    try {
      console.log('Homepage - Loading content from CMS database...');
      const response = await fetch('/api/pages/homepage');
      
      if (response.ok) {
        const cmsContent = await response.json();
        console.log('Homepage - CMS content loaded:', cmsContent);
        console.log('Homepage - Number of CMS sections:', Object.keys(cmsContent).length);
        
        if (Object.keys(cmsContent).length > 0) {
          // Database has content - use it as primary source
          console.log('Homepage - Database sections found:', Object.keys(cmsContent));
          console.log('Homepage - Database content details:', cmsContent);
          
          const mergedContent = {
            ...defaultContent,
            ...cmsContent
          };
          
          console.log('Homepage - Using database content as primary source');
          console.log('Homepage - Merged content keys:', Object.keys(mergedContent));
          console.log('Homepage - Sample merged content:', {
            hero: mergedContent.hero,
            partners: mergedContent.partners,
            testimonials: mergedContent.testimonials
          });
          
          // Force a re-render by updating state
          setContent({});
          setTimeout(() => {
            setContent(mergedContent);
            setSectionOrder(defaultSectionOrder);
            setContentSource('database');
          }, 100);
        } else {
          // No database content - use default
          console.log('Homepage - No database content found, using default content');
          setContent(defaultContent);
          setSectionOrder(defaultSectionOrder);
          setContentSource('default');
        }
      } else {
        console.log('Homepage - CMS API error, using default content');
        setContent(defaultContent);
        setSectionOrder(defaultSectionOrder);
        setContentSource('default');
      }
    } catch (error) {
      console.error('Homepage - Error loading CMS content:', error);
      console.log('Homepage - Falling back to default content');
      setContent(defaultContent);
      setSectionOrder(defaultSectionOrder);
      setContentSource('default');
    } finally {
      setIsLoadingFromDatabase(false);
    }
  };

  useEffect(() => {
    // Load from database first, then fallback to default content
    loadContentFromCMS();
    
    // Listen for content update events
    const handleContentUpdate = async () => {
      console.log('Homepage - Content update event received - reloading from CMS');
      await loadContentFromCMS();
    };

    // Use polling instead of SSE for real-time updates
    let pollingInterval = null;
    
    const startPolling = () => {
      console.log('Homepage - Starting polling for content updates');
      setIsConnectedToUpdates(true);
      
      pollingInterval = setInterval(async () => {
        try {
          // Check if page is visible before polling
          if (document.visibilityState === 'visible') {
            console.log('Homepage - Polling for updates...');
            await loadContentFromCMS();
          }
        } catch (error) {
          console.error('Homepage - Polling error:', error);
        }
      }, 5000); // Poll every 5 seconds (less frequent to avoid conflicts)
    };
    
    // Start polling after initial load is complete
    setTimeout(() => {
      if (!isLoadingFromDatabase) {
        startPolling();
      }
    }, 2000);
    
    // Also keep the old event listeners as backup
    window.addEventListener('contentUpdated', handleContentUpdate);
    
    // Listen for localStorage changes (cross-tab communication)
    const handleStorageChange = (e) => {
      if (e.key === 'cms_content_updated') {
        console.log('Homepage - localStorage change detected - reloading content');
        loadContentFromCMS();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
      window.removeEventListener('contentUpdated', handleContentUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Mapping des sections à afficher dynamiquement
  const renderSection = (section) => {
    switch (section) {
      case 'hero':
        return <HeroCarousel key="hero" content={content} />;
      case 'intro':
        return (
          <section key="intro" className="w-full px-4 sm:px-6 lg:px-[100px] py-16 lg:py-28">
            <div className="max-w-[1368px] mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                <div className="w-full lg:w-[58%]">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3.5">
                      <div className="w-[60px] h-0.5 bg-global-5"></div>
                      <h2 className="text-xl sm:text-2xl lg:text-2xl font-cairo font-medium uppercase text-global-2 leading-10">{content.introTitle}</h2>
                    </div>
                    <p className="text-lg sm:text-xl font-source-sans text-global-1 leading-7">{content.introParagraph}</p>
                  </div>
                </div>
              </div>
              {/* Responsive 2x2 grid for mobile/tablet, hidden on desktop */}
              <div className="block lg:hidden">
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {/* Card 1 */}
                  <div className="bg-[#253F60] p-4 rounded-lg shadow text-white flex flex-col justify-between">
                    <h3 className="text-base font-bold mb-2">Optimisation fiscale de l'immobilier</h3>
                    <p className="text-xs mb-4">Construisez votre richesse tout en réduisant vos impôts avec des solutions d'investissement légales et personnalisées.</p>
                    <button className="bg-white text-[#253F60] px-2 py-1 rounded font-semibold text-xs w-fit">Découvrez Comment Réduire Vos Impôts</button>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-[#F2F2F2] p-4 rounded-lg shadow flex flex-col justify-between">
                    <h3 className="text-base font-bold mb-2 text-black">Gestion de patrimoine</h3>
                    <p className="text-xs mb-4 text-black">Optimisez votre richesse avec des stratégies personnalisées et des solutions conçues pour vos objectifs financiers.</p>
                    <button className="bg-[#B99066] text-white px-2 py-1 rounded font-semibold text-xs w-fit">Toutes Les Clés Pour Faire Croître Votre Richesse</button>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-[#F2F2F2] p-4 rounded-lg shadow flex flex-col justify-between">
                    <h3 className="text-base font-bold mb-2 text-black">Financement immobilier</h3>
                    <p className="text-xs mb-4 text-black">Accédez aux meilleures offres de prêts hypothécaires pour vos projets, négociées par nos courtiers experts.</p>
                    <button className="bg-[#B99066] text-white px-2 py-1 rounded font-semibold text-xs w-fit">Trouvez Les Meilleurs Taux Hypothécaires</button>
                  </div>
                  {/* Card 4 */}
                  <div className="bg-[#F2F2F2] p-4 rounded-lg shadow flex flex-col justify-between">
                    <h3 className="text-base font-bold mb-2 text-black">Investissements financiers</h3>
                    <p className="text-xs mb-4 text-black">Sélectionnez les bonnes options d'investissement en fonction de votre profil et de vos objectifs.</p>
                    <button className="bg-[#B99066] text-white px-2 py-1 rounded font-semibold text-xs w-fit">Nos Meilleures Solutions D’Investissement</button>
                  </div>
                </div>
                {/* Centered button below grid */}
                <div className="flex justify-center mt-6">
                  <button className="bg-[#B99066] text-white px-6 py-2 rounded font-semibold text-xs">{content.introButton}</button>
                </div>
              </div>
            </div>
          </section>
        );
      case 'team':
        return (
          <section key="team" className="relative w-full py-20 lg:py-28 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/images/image4.webp"
                alt="Équipe Azalée Patrimoine - Vision d'ensemble équipe diversifiée (4 personnes)"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('Team image failed to load:', e.target.src);
                  console.log('Trying fallback to vision.webp');
                  e.target.src = "/images/vision.webp";
                }}
                onLoad={() => console.log('Team image loaded successfully:', '/images/image4.webp')}
                style={{ 
                  minHeight: '400px',
                  backgroundColor: '#f0f0f0' // Temporary background to see if container is there
                }}
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#112033]/85 via-[#112033]/60 to-[#112033]/85"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-16">
                <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#B99066] to-[#4EBBBD] mb-6 rounded-full mx-auto"></div>
                <h2 className="text-white text-[32px] lg:text-[42px] font-cairo font-semibold mb-6 tracking-wide leading-[1.2]">
                  {content.teamTitle}
                </h2>
                <p className="text-white/90 text-[20px] lg:text-[24px] font-inter font-medium mb-8 max-w-2xl mx-auto">
                  {content.teamSubtitle}
                </p>
                <p className="text-white/80 text-[16px] lg:text-[18px] font-inter leading-[1.6] max-w-4xl mx-auto">
                  {content.teamDescription}
                </p>
              </div>
              
              {/* Team Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {(content.teamValues || []).map((value, index) => (
                  <div key={index} className="bg-white/95 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#B99066] to-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-2xl">{value.icon}</span>
                    </div>
                    <h3 className="text-[#112033] font-cairo font-semibold text-lg mb-3">{value.title}</h3>
                    <p className="text-[#4A5568] font-inter text-sm leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-[#B99066] to-[#A67A5A] text-white px-10 py-4 rounded-lg font-inter font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Découvrir notre approche
                </button>
              </div>
            </div>
          </section>
        );
      case 'experts':
        return (
          <section key="experts" className="w-full bg-gradient-to-br from-[#F8FAFB] to-[#F1F5F9] px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
            <div className="max-w-[1368px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                {/* Left: Content */}
                <div className="order-2 lg:order-1">
                  <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#B99066] to-[#4EBBBD] mb-6 rounded-full"></div>
                  <h2 className="text-[28px] lg:text-[36px] font-cairo font-semibold text-[#112033] mb-6 tracking-wide leading-[1.2]">{content.expertsTitle}</h2>
                  <p className="text-[18px] lg:text-[20px] font-inter text-[#4A5568] leading-[1.6] mb-8">{content.expertsDescription}</p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#4EBBBD] rounded-full"></div>
                      <span className="text-[#112033] font-medium text-sm">Expertise reconnue</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#B99066] rounded-full"></div>
                      <span className="text-[#112033] font-medium text-sm">Accompagnement personnalisé</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#59E2E4] rounded-full"></div>
                      <span className="text-[#112033] font-medium text-sm">Réseau de professionnels</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#4EBBBD] rounded-full"></div>
                      <span className="text-[#112033] font-medium text-sm">Solutions sur-mesure</span>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-[#B99066] to-[#A67A5A] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Rencontrer nos experts
                  </button>
                </div>
                
                {/* Right: Image with enhanced styling */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Decorative background */}
                    <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#B99066]/20 to-[#4EBBBD]/20 rounded-2xl"></div>
                    
                    {/* Main image */}
                    <img
                      src="/images/expertise.webp"
                      alt="Conseiller Azalée en discussion avec un couple dans un bureau élégant"
                      className="relative z-10 w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover border-4 border-white"
                      style={{ aspectRatio: '3/2' }}
                    />
                    
                    {/* Floating badge */}
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">✓</span>
                        </div>
                        <div>
                          <p className="text-[#112033] font-semibold text-sm">30+ ans</p>
                          <p className="text-[#4A5568] text-xs">d'expertise</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile/tablet: vertical stack, desktop: original grid */}
              <div className="block lg:hidden">
                <div className="flex flex-col gap-4">
                  {(content.experts || []).map((expert, index) => (
                    <div key={index} className="bg-global-8 rounded-[24px] shadow-[0_0_8px_0_rgba(0,0,0,0.25)] p-6 flex flex-col justify-between min-h-[220px] h-full">
                      <h3 className="text-lg font-cairo text-global-4 mb-2 leading-tight">{expert.title}</h3>
                      <p className="text-sm font-inter text-global-1 mb-4 leading-snug">{expert.desc}</p>
                      <Button variant="primary" size="sm" className="w-fit self-start text-xs font-inter font-bold min-h-0 py-2 px-4">{expert.button}</Button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Desktop: original grid layout */}
              <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {(content.experts || []).map((expert, index) => (
                  <div key={index} className="bg-global-8 rounded-[24px] shadow-[0_0_8px_0_rgba(0,0,0,0.25)] p-10 flex flex-col justify-between min-h-[320px] h-full">
                    <h3 className="text-[21px] font-cairo text-global-4 mb-2 leading-tight">{expert.title}</h3>
                    <p className="text-[16px] font-inter text-global-1 mb-6 leading-snug">{expert.desc}</p>
                    <Button variant="primary" size="sm" className="w-fit self-start text-[12px] font-inter font-bold min-h-0 py-2 px-6">{expert.button}</Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case 'separator':
        return (
          <section key="separator" className="relative w-full h-[300px] lg:h-[400px] overflow-hidden bg-gray-200">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/images/separwebp.webp"
                alt="Jardin sophistiqué avec azalées blanches et roses en premier-plan - Jardin à la française avec allée de graviers et perspective élégante"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('Separator image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                  // Show fallback content
                  const fallback = document.getElementById('separator-fallback');
                  if (fallback) {
                    fallback.classList.remove('hidden');
                  }
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
            </div>
            
            {/* Fallback content if image doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFB] via-[#E2E8F0] to-[#F8FAFB] flex items-center justify-center hidden" id="separator-fallback">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#B99066] to-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🌸</span>
                </div>
                <h3 className="text-[#112033] font-cairo font-semibold text-xl">Azalée Patrimoine</h3>
                <p className="text-[#4A5568] font-inter text-sm">Excellence & Confiance</p>
              </div>
            </div>
            
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>
            
            {/* Centered branding element */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <span className="text-[#B99066] text-3xl">🌸</span>
                    <div className="text-left">
                      <h3 className="text-[#112033] font-cairo font-semibold text-lg">Azalée Patrimoine</h3>
                      <p className="text-[#4A5568] font-inter text-sm">Excellence & Confiance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'testimonials':
        return (
          <section key="testimonials" className="w-full px-4 sm:px-8 lg:px-24 py-16 lg:py-32">
          <div className="max-w-[1368px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left - Testimonial */}
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                <div className="bg-slider-1 p-8 rounded-2xl shadow-lg w-full flex flex-col items-center">
                  <img src="/images/img_svg.svg" className="w-8 h-6 mb-6" alt="quote" />
                  <h2 className="text-2xl sm:text-3xl font-cairo font-semibold uppercase text-global-2 text-center leading-tight mb-4 tracking-wide">
                      {content.testimonialsTitle}
                    </h2>
                  <p className="text-base sm:text-lg font-source-sans text-global-4 text-center leading-7 mb-6 max-w-xl">
                      {content.testimonialText}
                        </p>
                  <span className="text-sm font-source-sans font-semibold uppercase text-global-4 text-right mb-4">
                      {content.testimonialAuthor}
                        </span>
                  <div className="flex justify-center items-center gap-2 mt-2">
                      {[...Array(5)].map((_, index) => (
                        <div 
                          key={index}
                        className="w-3 h-3 bg-global-8 border border-global-7 rounded-full shadow-sm"
                        ></div>
                      ))}
                  </div>
                </div>
              </div>
              {/* Right - Statistics */}
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                <div className="bg-global-4 p-12 lg:p-20 rounded-2xl shadow-lg flex flex-col items-center w-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className="bg-global-8 rounded-full p-2 w-[140px] h-[140px] border-2 border-global-2 flex items-center justify-center">
                      <span className="text-4xl sm:text-5xl font-source-sans text-global-2 text-center font-bold">90%*</span>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg font-source-sans text-global-7 text-center leading-7 mb-2 max-w-xs">
                      95% de nos clients nous recommandent à leurs proches pour un investissement patrimonial.
                    </p>
                  <span className="text-xs font-source-sans text-global-6 leading-3 mt-1 text-center">
                      Enquête de satisfaction — 2019
                    </span>
                </div>
              </div>
            </div>
            
            {/* Client Testimonial Images Section */}
            <div className="mt-16">
              {/* Section Title */}
              <div className="text-center mb-12">
                <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#B99066] to-[#4EBBBD] mb-4 rounded-full mx-auto"></div>
                <h3 className="text-2xl font-cairo font-semibold text-[#112033] mb-2">Nos clients témoignent</h3>
                <p className="text-[#4A5568] font-inter">Des parcours authentiques, des résultats concrets</p>
              </div>
              
              {/* Client Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Thomas - Young Professional */}
                <div className="relative">
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/client1.webp" 
                      alt="Thomas - Client témoignage authentique" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay with testimonial text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-[#4EBBBD] rounded-full"></div>
                        <span className="text-sm font-semibold">Témoignage authentique</span>
                      </div>
                      <h3 className="text-lg font-cairo font-semibold mb-2">Thomas, 35 ans</h3>
                      <p className="text-sm font-inter leading-relaxed">
                        "Azalée Patrimoine m'a accompagné dans mon premier investissement immobilier. 
                        Leur expertise et leur proximité ont fait toute la différence."
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">💼</span>
                  </div>
                </div>

                {/* Marie-Claire - Professional Woman */}
                <div className="relative">
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/client2.webp" 
                      alt="Marie-Claire - Client témoignage authentique" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay with testimonial text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-[#B99066] rounded-full"></div>
                        <span className="text-sm font-semibold">Étude de cas</span>
                      </div>
                      <h3 className="text-lg font-cairo font-semibold mb-2">Marie-Claire, 48 ans</h3>
                      <p className="text-sm font-inter leading-relaxed">
                        "Grâce à Azalée Patrimoine, j'ai optimisé ma stratégie de transmission. 
                        Un accompagnement professionnel qui a transformé ma vision du patrimoine."
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">⭐</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🏆</span>
                  </div>
                </div>
              </div>
              
              {/* Bottom CTA */}
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-[#B99066] to-[#A67A5A] text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Rejoignez nos clients satisfaits
                </button>
              </div>
            </div>
          </div>
        </section>
        );
      case 'processSteps':
        return (
          <section key="processSteps" className="w-full bg-[#F5F5F5] py-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Title & Divider */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-1 bg-[#4EBBBD] mb-2 rounded-full"></div>
              <h2 className="text-3xl font-cairo font-normal uppercase text-[#1A2530] text-center tracking-wide">
                  Azalee Patrimoine vous accompagne à chaque étape
                </h2>
              </div>
            {/* Stepper Tabs */}
            <div className="flex flex-row justify-center items-end gap-0 mb-8">
                {(content.processSteps || []).map((step, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col px-10 py-6 border-b-2 ${idx === 0 ? 'bg-white shadow font-bold border-[#4EBBBD] text-[#1A2530]' : 'bg-[#F5F5F5] border-[#E0E0E0] text-[#1A2530]'} transition-all`}
                  style={{ minWidth: 200, alignItems: 'flex-start', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <span className={`text-lg font-bold mb-1 ${idx === 0 ? 'text-[#1A2530]' : 'text-[#1A2530]'}`}>{step.label}</span>
                  <span className="text-sm font-normal uppercase tracking-wide text-[#757575]">{step.desc}</span>
                </div>
              ))}
              </div>
            {/* Content Area */}
            <div className="flex flex-row justify-between items-center bg-white rounded shadow p-12 mt-2">
              {/* Left: Text */}
              <div className="flex-1 pr-12">
                  <h3 className="text-2xl font-normal text-[#1A2530] mb-6">
                    {content.processSteps?.[0]?.contentTitle || 'Titre par défaut'}
                  </h3>
                <p className="text-base text-[#757575] mb-8 max-w-xl">
                    {content.processSteps?.[0]?.contentText || 'Texte par défaut'}
                      </p>
                <button className="bg-[#B99066] text-white px-8 py-3 rounded shadow font-semibold text-base">
                    {content.processSteps?.[0]?.button || 'Bouton par défaut'}
                </button>
                    </div>
              {/* Right: Circular Image */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-[320px] h-[320px] bg-[#E3F1F6] rounded-full flex items-center justify-center shadow">
                    <img src={content.processSteps?.[0]?.image || '/images/placeholder.webp'} alt="Step illustration" className="w-[220px] h-[220px] object-contain" />
                  </div>
              </div>
            </div>
          </div>
        </section>
        );
      case 'stats':
        return (
          <section key="stats" className="w-full bg-white py-16">
          <div className="max-w-[1440px] mx-auto px-4">
            {/* Divider and Title */}
            <div className="flex flex-col items-center mb-10">
              <div className="w-[46.7px] h-[1.56px] bg-[#4EBBBD] mb-3 rounded-full"></div>
              <h2 className="text-[25.7px] font-cairo font-normal uppercase text-[#112033] text-center tracking-wide mb-2" style={{ letterSpacing: '0.02em' }}>
                  Dans les chiffres clés établis
                </h2>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                {(content.stats || []).map((stat, index) => (
                  <div key={index}>
                    <div className="text-[40px] font-source-sans font-normal text-[#B99066] leading-[58px]">{stat.value}</div>
                    <div className="text-[11.7px] font-source-sans font-semibold text-[#000] leading-[18px] mt-2">{stat.label}</div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        );
      case 'investment':
        return (
          <section key="investment" className="w-full py-16 lg:py-24">
          <div className="max-w-[1368px] mx-auto">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* Left Content - Dark Blue Background */}
              <div className="w-full lg:w-[50%] bg-[#253F60] p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <div className="mb-6">
                    <div className="w-[60px] h-[2px] bg-white mb-4"></div>
                    <h2 className="text-white text-xl lg:text-2xl font-cairo font-semibold uppercase leading-tight">
                      {content.investmentTitle}
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white text-base lg:text-lg font-inter leading-relaxed mb-8">
                    {content.investmentText}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="mb-8">
                    <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base hover:bg-[#A67A5A] transition-colors duration-200 shadow-lg">
                      {content.investmentButton}
                    </button>
                  </div>
                  
                  {/* Expandable Accordion */}
                  <div className="space-y-4">
                    {/* Expanded Item */}
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white font-cairo font-semibold text-lg">Investir efficacement</h3>
                        <svg className="w-5 h-5 text-white transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <p className="text-white/90 text-sm font-inter">
                        Découvrez les meilleures stratégies d'investissement adaptées à votre profil et vos objectifs financiers.
                      </p>
                    </div>
                    
                    {/* Collapsed Items */}
                    {[
                      "Organiser la transmission de vos biens",
                      "Alléger votre fiscalité", 
                      "Prévoir sa retraite",
                      "Construire votre patrimoine",
                      "Protéger vos proches"
                    ].map((item, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-200">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-cairo font-medium text-base">{item}</h3>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Benefits Section */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#4EBBBD] rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">🏠</span>
                    </div>
                    <h3 className="text-white font-cairo font-bold text-lg uppercase">BENEFITS</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["#protection", "#confidence", "#life", "#help", "#safety"].map((tag, index) => (
                      <span key={index} className="text-white/80 text-sm font-inter bg-white/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="w-full lg:w-[50%] relative">
                <img 
                  src={content.investmentImage2} 
                  className="w-full h-full object-cover" 
                  alt="Financial planning consultation" 
                />
                {/* Optional overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
        );
      case 'tax':
        return (
          <section key="tax" className="w-full py-16 bg-[#F5F5F5]">
          <div className="max-w-[1368px] mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left Card - Figma node 183-12701 */}
            <div className="w-full lg:w-[28%] bg-[#253F60] rounded-2xl p-10 flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-[40.28px] h-[1.34px] bg-[#4EBBBD] mb-4 rounded-full"></div>
                <h2 className="text-[22.15px] font-cairo font-normal uppercase text-white mb-6 leading-[1.2] tracking-wide text-left">
                    {content.taxTitle}
                    </h2>
                <p className="text-[12.08px] font-source-sans text-white mb-8 text-left">
                    {content.taxText}
                </p>
              </div>
              <button className="bg-[#B99066] text-white px-8 py-3 rounded shadow font-inter font-medium text-[12px] w-full mt-2">
                  {content.taxButton}
              </button>
                        </div>
            {/* Right: Tax Solution Cards (unchanged) */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {(content.taxCards || []).map((card, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg flex flex-col h-full">
                      <img src={card.image} alt={card.title} className="w-full h-[120px] object-cover rounded-t-2xl" />
                  <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-cairo font-semibold uppercase text-[#253F60] mb-2">{card.title}</h3>
                        <p className="text-sm text-[#1A2530] mb-4 flex-1">{card.text}</p>
                        <a href="#" className="text-[#4EBBBD] text-sm font-semibold hover:underline mt-auto">{card.link}</a>
                          </div>
                        </div>
                  ))}
              </div>
              {/* Navigation Arrows */}
              <div className="flex justify-end gap-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4EBBBD] bg-white shadow hover:bg-[#4EBBBD] hover:text-white transition">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4EBBBD] bg-white shadow hover:bg-[#4EBBBD] hover:text-white transition">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        );
      case 'partners':
        return <PartnersCarousel key="partners" content={content} />;
      case 'finalCta':
        return (
          <section key="finalCta" className="w-full px-4 sm:px-6 lg:px-14 py-16 lg:py-32">
          <div className="max-w-[1368px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-8">
              <div className="flex flex-col justify-start items-start flex-1">
                <div className="w-[60px] h-0.5 bg-global-5 ml-2"></div>
                <h2 className="text-2xl sm:text-3xl font-cairo font-normal uppercase text-global-2 leading-10 mt-4 w-[96%]">
                    {content.finalCtaTitle}
                </h2>
                <p className="text-lg sm:text-xl font-source-sans text-global-1 leading-6.5 mt-1.5 mb-3 w-[98%]">
                    {content.finalCtaText}
                </p>
              </div>
              <img 
                  src={content.finalCtaImage} 
                className="w-full lg:w-[34%] h-[490px] object-cover" 
                alt="Expert consultation" 
              />
            </div>
          </div>
        </section>
        );
      case 'footer':
        return (
          <footer key="footer" className="w-full relative pt-16 pb-6 text-white" style={{background: 'linear-gradient(90deg, #253F60 0%, #B99066 100%)'}}>
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
        <div className="relative max-w-[1368px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Expertise */}
          <div>
            <h3 className="text-lg font-inter font-semibold mb-4 text-[#FFFFFF]">Expertise</h3>
            <ul className="space-y-2 text-[#D1D5DB] text-base">
                  {(content.footerExpertise || []).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
            </ul>
          </div>
          {/* Outils */}
          <div>
            <h3 className="text-lg font-inter font-semibold mb-4 text-[#FFFFFF]">Outils</h3>
            <ul className="space-y-2 text-[#D1D5DB] text-base">
                  {(content.footerOutils || []).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
            </ul>
          </div>
          {/* Contactez */}
          <div>
            <h3 className="text-lg font-inter font-semibold mb-4 text-[#FFFFFF]">Contactez</h3>
            <ul className="space-y-2 text-[#D1D5DB] text-base">
                  <li>{content.footerContact?.address || 'Adresse par défaut'}</li>
                  <li>{content.footerContact?.city || 'Ville par défaut'}</li>
                  <li>{content.footerContact?.country || 'Pays par défaut'}</li>
                  <li>Téléphone : {content.footerContact?.phone || 'Téléphone par défaut'}</li>
                  <li>Courriel : <span className="underline">{content.footerContact?.email || 'email@exemple.com'}</span></li>
            </ul>
          </div>
          {/* Entreprise */}
          <div>
            <h3 className="text-lg font-inter font-semibold mb-4 text-[#FFFFFF]">Entreprise</h3>
            <ul className="space-y-2 text-[#D1D5DB] text-base">
                  {(content.footerEntreprise || []).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="relative max-w-[1368px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-t border-[#1F2937] pt-6 text-[#D1D5DB] text-sm gap-2">
              <span>{content.footerCopyright}</span>
          <div className="flex gap-6">
                {(content.footerLinks || []).map((link, index) => (
                  <a key={index} href="#" className="hover:underline text-[#0C2C5D]">{link}</a>
                ))}
          </div>
        </div>
      </footer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-global-8">
      <Header />
      
      {/* Loading indicator */}
      {isLoadingFromDatabase && (
        <div className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-spin"></div>
          Loading from Database...
        </div>
      )}
      
      {/* Real-time connection indicator */}
      {!isLoadingFromDatabase && isConnectedToUpdates && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          Auto-Refresh
        </div>
      )}
      
      
      
      {sectionOrder.map(renderSection)}
      {/* Add real Figma hero photo below hero section, responsive only on mobile */}
      <div className="w-full flex justify-center items-center my-6 block lg:hidden">
        <img
          src="/images/real-hero-photo-7881b2.png"
          alt="Hero section real photo"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-lg object-cover mx-auto"
        />
      </div>
    </div>
  );
}