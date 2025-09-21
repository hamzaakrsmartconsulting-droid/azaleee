"use client";
import React, { useState, useEffect, useMemo } from "react";
import Header from "../../components/common/Header";

export default function PatrimoinePage() {
  const [content, setContent] = useState({});
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(true);
  const [contentSource, setContentSource] = useState('default');

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Patrimoine – Protégez et transmettez votre héritage avec Azalée Patrimoine",
      description: "Votre expert en transmission patrimoniale depuis plus de 30 ans. Nous vous accompagnons pour protéger votre famille, optimiser la transmission de votre patrimoine, et sécuriser l'avenir de vos proches avec des solutions personnalisées.",
      ctaText: "Demander un bilan patrimonial gratuit",
      image: "/images/pqtri;oine.webp"
    },
    essentiel: {
      title: "L'essentiel",
      content: "La gestion de patrimoine vise à optimiser la transmission de vos biens tout en minimisant les coûts fiscaux.\n\nNos experts vous accompagnent pour :\n• Protéger votre famille\n• Transmettre efficacement\n• Optimiser la fiscalité\n• Sécuriser l'avenir",
      image: "/images/patrimoine-responsive-content-image.png"
    },
    definition: {
      title: "Gestion de patrimoine : Définition",
      content: "Le patrimoine comprend tous vos biens et droits :\n• Biens immobiliers\n• Placements financiers\n• Entreprises et participations\n• Œuvres d'art et objets de valeur\n• Droits de propriété intellectuelle\n• Assurance vie et contrats\n• Droits à la retraite"
    },
    services: {
      title: "Nos Services Patrimoine",
      services: [
        { name: "Bilan Patrimonial", description: "Analyse complète de votre situation" },
        { name: "Transmission", description: "Optimisation de la transmission" },
        { name: "Protection Famille", description: "Sécurisation de vos proches" },
        { name: "Succession", description: "Gestion des successions" },
        { name: "Donation", description: "Stratégies de donation" },
        { name: "Assurance Vie", description: "Optimisation fiscale" }
      ]
    },
    advantages: {
      title: "Pourquoi choisir Azalée Patrimoine ?",
      advantages: [
        { title: "Expertise", description: "30 ans d'expérience en patrimoine" },
        { title: "Personnalisation", description: "Solutions sur mesure" },
        { title: "Transparence", description: "Conseils clairs et indépendants" },
        { title: "Suivi", description: "Accompagnement personnalisé" }
      ]
    },
    cta: {
      title: "Prêt à optimiser votre patrimoine ?",
      description: "Contactez nos experts pour une analyse personnalisée de votre situation patrimoniale et découvrez les meilleures stratégies de transmission.",
      buttonText: "Demander une consultation gratuite"
    },
    breadcrumb: {
      homeText: "Accueil",
      currentPage: "Patrimoine"
    },
    essentielDetail: {
      title: "L'essentiel du patrimoine",
      cards: [
        {
          title: "Succession et héritage",
          content: "Optimisez la transmission de votre patrimoine avec nos conseils en succession. Nous vous accompagnons pour minimiser les droits de succession et sécuriser l'avenir de vos proches."
        },
        {
          title: "Donation et transmission",
          content: "Anticipez la transmission de votre patrimoine grâce aux donations. Nos experts vous conseillent sur les meilleures stratégies de donation à titre gratuit ou onéreux."
        },
        {
          title: "Protection familiale",
          content: "Protégez votre famille avec des solutions adaptées. De l'assurance-vie aux contrats de prévoyance, nous vous proposons les meilleures options de protection."
        }
      ]
    },
    whyChoose: {
      title: "Pourquoi choisir Azalee Wealth ?",
      benefits: [
        "Plus de 30 ans d'expertise",
        "Conseils personnalisés",
        "Accompagnement complet",
        "Solutions sur mesure"
      ],
      buttonText: "Contactez-nous"
    },
    servicesGrid: {
      services: [
        {
          title: "Bilan patrimonial",
          description: "Analysez votre situation patrimoniale actuelle et identifiez les opportunités d'optimisation.",
          buttonText: "En savoir plus →"
        },
        {
          title: "Conseils patrimoniaux",
          description: "Bénéficiez de conseils personnalisés pour optimiser votre patrimoine et sa transmission.",
          buttonText: "En savoir plus →"
        },
        {
          title: "Transmission",
          description: "Préparez la transmission de votre patrimoine avec des stratégies adaptées à votre situation.",
          buttonText: "En savoir plus →"
        }
      ]
    }
  };

  // Load content from CMS database
  const loadContentFromCMS = async () => {
    try {
      console.log('Patrimoine - Loading content from CMS database...');
      const response = await fetch('/api/pages/patrimoine');
      
      if (response.ok) {
        const cmsContent = await response.json();
        console.log('Patrimoine - CMS content loaded:', cmsContent);
        console.log('Patrimoine - Number of CMS sections:', Object.keys(cmsContent).length);
        
        if (Object.keys(cmsContent).length > 0) {
          // Database has content - use it as primary source
          console.log('Patrimoine - Database sections found:', Object.keys(cmsContent));
          console.log('Patrimoine - Database content details:', cmsContent);
          
          const mergedContent = {
            ...defaultContent,
            ...cmsContent
          };
          
          console.log('Patrimoine - Using database content as primary source');
          console.log('Patrimoine - Merged content keys:', Object.keys(mergedContent));
          
          // Force a re-render by updating state
          setContent({});
          setTimeout(() => {
            setContent(mergedContent);
            setContentSource('database');
          }, 100);
        } else {
          // No database content - use default
          console.log('Patrimoine - No database content found, using default content');
          setContent(defaultContent);
          setContentSource('default');
        }
      } else {
        console.log('Patrimoine - CMS API error, using default content');
        setContent(defaultContent);
        setContentSource('default');
      }
    } catch (error) {
      console.error('Patrimoine - Error loading CMS content:', error);
      console.log('Patrimoine - Falling back to default content');
      setContent(defaultContent);
      setContentSource('default');
    } finally {
      setIsLoadingFromDatabase(false);
    }
  };

  useEffect(() => {
    // Always set default content first to prevent empty state
    setContent(defaultContent);
    setContentSource('default');
    
    // Then load from database and merge
    loadContentFromCMS();
    
    // Listen for content update events
    const handleContentUpdate = async () => {
      console.log('Patrimoine - Content update event received - reloading from CMS');
      await loadContentFromCMS();
    };

    // Use polling for real-time updates
    let pollingInterval = null;
    
    const startPolling = () => {
      console.log('Patrimoine - Starting polling for content updates');
      
      pollingInterval = setInterval(async () => {
        try {
          // Check if page is visible before polling
          if (document.visibilityState === 'visible') {
            console.log('Patrimoine - Polling for updates...');
            await loadContentFromCMS();
          }
        } catch (error) {
          console.error('Patrimoine - Polling error:', error);
        }
      }, 5000); // Poll every 5 seconds
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
        console.log('Patrimoine - localStorage change detected - reloading content');
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

  return (
    <>
      {/* Loading indicator */}
      {isLoadingFromDatabase && (
        <div className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-spin"></div>
          Loading Patrimoine from Database...
        </div>
      )}
      
      

      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[543px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="w-full lg:w-[733px] bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
              {/* Main Title */}
              <h1 className="text-black text-xs sm:text-2xl lg:text-4xl font-cairo font-semibold leading-tight mb-6 sm:mb-8 text-center lg:text-left">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              
              {/* Description */}
              <p className="text-[#374151] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-8 sm:mb-10 text-center lg:text-left">
                {content.hero?.description || defaultContent.hero.description}
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                  {content.hero?.ctaText || defaultContent.hero.ctaText}
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-[467px] flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#B99066]/20 to-[#4EBBBD]/20 rounded-2xl"></div>
                
                {/* Main image */}
                <img
                  src={content.hero?.image || defaultContent.hero.image}
                  alt="Expert en gestion de patrimoine consultant des documents financiers dans un bureau élégant"
                  className="relative z-10 w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover border-4 border-white"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => {
                    console.log('Patrimoine card image failed to load:', e.target.src);
                  }}
                  onLoad={() => console.log('Patrimoine card image loaded successfully')}
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div>
                      <p className="text-[#112033] font-semibold text-sm">0 €</p>
                      <p className="text-[#4A5568] text-xs">Bilan gratuit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {content.services && (
        <section className="w-full bg-gray-50 py-8 sm:py-12 lg:py-16">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight mb-8 sm:mb-12 text-center">
              {content.services.title || defaultContent.services.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(content.services.services || defaultContent.services.services).map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-[#005C69] text-lg font-semibold mb-3">{service.name}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Advantages Section */}
      {content.advantages && (
        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight mb-8 sm:mb-12 text-center">
              {content.advantages.title || defaultContent.advantages.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(content.advantages.advantages || defaultContent.advantages.advantages).map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-[#005C69] text-lg font-semibold mb-2">{advantage.title}</h4>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {content.cta && (
        <section className="w-full bg-[#005C69] py-8 sm:py-12 lg:py-16">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight mb-4">
              {content.cta.title || defaultContent.cta.title}
            </h3>
            <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
              {content.cta.description || defaultContent.cta.description}
            </p>
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              {content.cta.buttonText || defaultContent.cta.buttonText}
            </button>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <nav className="flex items-center text-xs sm:text-sm lg:text-base">
              <a href="#" className="text-[#005C69] font-source-sans font-semibold hover:underline">
                {content.breadcrumb?.homeText || defaultContent.breadcrumb.homeText}
              </a>
              <span className="text-[#686868] mx-2">{'>'}</span>
              <span className="text-[#4EBBBD] font-source-sans font-semibold">
                {content.breadcrumb?.currentPage || defaultContent.breadcrumb.currentPage}
              </span>
            </nav>
          </div>

          {/* L'essentiel Block */}
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-10 mb-8 sm:mb-12 relative">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="w-full lg:w-2/3">
                <h2 className="text-black text-lg sm:text-xl lg:text-2xl font-cairo font-semibold leading-tight mb-4 sm:mb-6">
                  {content.essentielDetail?.title || defaultContent.essentielDetail.title}
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {(content.essentielDetail?.cards || defaultContent.essentielDetail.cards).map((card, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6">
                      <h3 className="text-[#005C69] text-base sm:text-lg font-source-sans font-semibold mb-2 sm:mb-3">
                        {card.title}
                      </h3>
                      <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed">
                        {card.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Content */}
              <div className="w-full lg:w-1/3">
                <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-source-sans font-semibold mb-4 sm:mb-6">
                    {content.whyChoose?.title || defaultContent.whyChoose.title}
                  </h3>
                  
                  <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-source-sans">
                    {(content.whyChoose?.benefits || defaultContent.whyChoose.benefits).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-white mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-white text-[#005C69] mt-6 sm:mt-8 py-3 sm:py-4 rounded-lg font-source-sans font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200">
                    {content.whyChoose?.buttonText || defaultContent.whyChoose.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(content.servicesGrid?.services || defaultContent.servicesGrid.services).map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
                <h3 className="text-[#005C69] text-lg sm:text-xl font-source-sans font-semibold mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-[#374151] text-sm sm:text-base font-inter leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                <button className="text-[#4EBBBD] font-source-sans font-semibold text-sm sm:text-base hover:underline">
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 