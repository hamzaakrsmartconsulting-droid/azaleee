"use client";
import React, { useState, useEffect, useMemo } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

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
        <div className="fixed top-4 right-4 z-50 bg-[#253F60] text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-spin"></div>
          Loading Patrimoine from Database...
        </div>
      )}
      
      

      <Header />
      
      {/* Hero Section - Deux cartes */}
      <section className="relative w-full min-h-[650px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-20 sm:py-24 lg:py-32">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Carte gauche */}
            <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
              <h1 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold leading-tight mb-8 tracking-tight">
                Bien gérer son patrimoine en 2025, c'est anticiper, structurer et transmettre
              </h1>
              
              <div className="space-y-5 mb-10">
                <p className="text-[#4B5563] text-base sm:text-lg lg:text-xl font-inter leading-relaxed">
                  Une bonne gestion de patrimoine ne se résume pas à faire fructifier son épargne.
                </p>
                
                <p className="text-[#4B5563] text-base sm:text-lg lg:text-xl font-inter leading-relaxed">
                  Elle repose sur une approche globale et exclusive qui intègre la <strong className="text-[#253F60] font-semibold">protection de la famille</strong>, la <strong className="text-[#253F60] font-semibold">stratégie de transmission</strong>, l'<strong className="text-[#253F60] font-semibold">optimisation fiscale</strong>, des <strong className="text-[#253F60] font-semibold">placements performants</strong>, une structuration juridique et l'anticipation des risques.
                </p>
                
                <p className="text-[#4B5563] text-base sm:text-lg lg:text-xl font-inter leading-relaxed">
                  Notre équipe de conseillers en gestion de patrimoine indépendants vous accompagne pour bâtir une stratégie personnalisée et cohérente avec vos objectifs de vie.
                </p>
                
                <p className="text-[#4B5563] text-base sm:text-lg lg:text-xl font-inter leading-relaxed">
                  Que vous soyez chef d'entreprise, héritier, expatrié ou jeune investisseur, nous vous guidons avec clarté.
                </p>
              </div>
              
              <div className="mt-10">
                <button 
                  onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                  className="bg-[#253F60] text-white px-10 py-4 rounded-lg shadow-lg font-inter font-semibold text-base lg:text-lg hover:bg-[#1a2d47] hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Faire mon bilan patrimonial
                </button>
              </div>
            </div>
            
            {/* Carte droite */}
            <div className="relative bg-white rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
              {/* Badge circulaire dans le coin */}
              <div className="absolute -top-8 -right-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-[#B99066] to-[#253F60] rounded-full shadow-lg flex flex-col items-center justify-center text-center z-10">
                <div className="text-white font-source-sans font-semibold text-xs sm:text-sm lg:text-base leading-tight px-2">
                  <span className="block">Votre 1er</span>
                  <span className="block mt-1">Diagnostique</span>
                  <span className="block mt-1 font-bold">offert</span>
                </div>
              </div>
              
              <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold leading-tight mb-8 tracking-tight">
                Votre patrimoine mérite une stratégie claire et durable
              </h2>
              
              <p className="text-[#4B5563] text-base sm:text-lg lg:text-xl font-inter leading-relaxed mb-8">
                Chez Azalée Patrimoine, nous vous aidons à construire un avenir financier solide grâce à une approche personnalisée et des solutions adaptées à vos besoins spécifiques.
              </p>
              
              {/* Liste à puces avec checkmarks */}
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    </div>
                  <span className="text-[#374151] text-base sm:text-lg font-inter font-medium">Optimisation fiscale</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    </div>
                  <span className="text-[#374151] text-base sm:text-lg font-inter font-medium">Protection de la famille</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#374151] text-base sm:text-lg font-inter font-medium">Transmission sereine</span>
                </li>
              </ul>
                </div>
              </div>
            </div>
      </section>

      {/* Section : En quelques mots - Comprendre la gestion de patrimoine */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-12 sm:mb-16 text-center tracking-tight">
            En quelques mots : comprendre la gestion de patrimoine
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8 text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed">
            <p className="text-xl sm:text-2xl">
              <strong className="text-[#253F60] font-bold">La gestion de patrimoine</strong> = structurer, valoriser et transmettre un ensemble de biens (<a href="/immobilier" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">immobilier</a>, <a href="/placements" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">placements financiers</a>, liquidités, entreprise, objets de valeur).
            </p>
            
            <p>
              Consulter un <strong className="text-[#253F60] font-semibold">conseiller en gestion de patrimoine indépendant</strong> permet de prendre des décisions éclairées en intégrant les aspects fiscaux, juridiques, financiers et familiaux.
            </p>
            
            <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-l-4 border-[#B99066] p-8 rounded-xl shadow-lg">
              <p className="mb-6 text-xl">
                <strong className="text-[#253F60]"><a href="#bilan-patrimonial" className="text-[#B99066] hover:text-[#A67A5A] underline font-semibold transition-colors">Le bilan patrimonial</a></strong> = point de départ pour une stratégie personnalisée :
              </p>
              <ul className="list-none space-y-3 ml-2 text-[#374151]">
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] font-bold mt-1">•</span>
                  <span>Inventorier les actifs/passifs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] font-bold mt-1">•</span>
                  <span>Analyser la situation financière et fiscale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] font-bold mt-1">•</span>
                  <span>Identifier les leviers d'optimisation patrimoniale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] font-bold mt-1">•</span>
                  <span>Proposer un <strong className="text-[#253F60]">plan d'action clair, chiffré et évolutif</strong></span>
                </li>
              </ul>
            </div>
            
            <p>
              <strong className="text-[#253F60] font-semibold">Chez Azalée Patrimoine</strong>, nous vous accompagnons pour :
            </p>
            <ul className="list-none space-y-4 ml-2">
              <li className="flex items-start gap-3">
                <span className="text-[#253F60] font-bold mt-1">•</span>
                <span>Faire fructifier le patrimoine durablement avec des solutions sur mesure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#253F60] font-bold mt-1">•</span>
                <span><strong className="text-[#253F60]"><a href="/patrimoine/protection-famille" className="text-[#B99066] hover:text-[#A67C52] underline transition-colors">protéger votre famille</a></strong> grâce à des dispositifs juridiques adaptés</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#253F60] font-bold mt-1">•</span>
                <span><strong className="text-[#253F60]"><a href="/fiscalite" className="text-[#B99066] hover:text-[#A67C52] underline transition-colors">réduire votre fiscalité</a></strong> et préparer la <strong className="text-[#253F60]"><a href="/patrimoine/transmission" className="text-[#B99066] hover:text-[#A67C52] underline transition-colors">transmission</a></strong> dans les meilleures conditions</span>
              </li>
            </ul>
            
            <p className="pt-6 text-xl sm:text-2xl font-medium">
              Notre approche repose sur la <strong className="text-[#253F60] font-bold">clarté</strong>, la <strong className="text-[#253F60] font-bold">pédagogie</strong> et l'<strong className="text-[#253F60] font-bold">indépendance</strong>. 
              L'objectif : transformer le patrimoine en <strong className="text-[#253F60] font-bold">levier de sérénité et de performance sur le long terme</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section : Définition de la gestion de patrimoine */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-12 sm:mb-16 text-center tracking-tight">
            Définition de la gestion de patrimoine
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8 text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed">
            <p className="text-xl sm:text-2xl">
              La gestion de patrimoine est une discipline transversale qui consiste à <strong className="text-[#253F60] font-bold">analyser, organiser, valoriser et transmettre</strong> l'ensemble des actifs d'une personne ou d'une entreprise — qu'ils soient immobiliers, financiers, professionnels ou familiaux — en tenant compte de leurs objectifs personnels, fiscaux et successoraux.
            </p>
            
            <p>
              Contrairement à une idée reçue, le métier de conseiller en gestion de patrimoine (CGP) n'est pas réglementé en tant que tel, mais il regroupe plusieurs statuts professionnels encadrés par la loi, chacun répondant à des compétences spécifiques :
            </p>
            
            <div className="space-y-8 mt-10">
              <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border-l-4 border-[#253F60] shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4">
                  IAS (Intermédiaire en Assurance)
            </h3>
                <p className="text-lg">
                  habilité à conseiller et distribuer des produits d'<strong className="text-[#253F60]"><a href="/placements/assurance-vie" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">assurance-vie</a>, de <a href="/retraite/prevoyance-protection" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">prévoyance</a> ou de <a href="/retraite" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">retraite</a></strong>.
                </p>
                </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border-l-4 border-[#253F60] shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4">
                  IOBSP (Intermédiaire en Opérations de Banque et Services de Paiement)
                </h3>
                <p className="text-lg">
                  compétent pour accompagner le financement de projets (crédits immobiliers, crédits professionnels, refinancement...).
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border-l-4 border-[#253F60] shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4">
                  CIF (Conseiller en Investissements Financiers)
                </h3>
                <p className="text-lg">
                  autorisé à proposer des placements financiers (<strong className="text-[#253F60]"><a href="/placements" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">OPCVM</a>, <a href="/placements/scpi-opci" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">SCPI</a>, produits structurés, private equity</strong>...) dans le cadre d'un conseil indépendant.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border-l-4 border-[#253F60] shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4">
                  CJA (Conseiller en Juridique Accessoire)
            </h3>
                <p className="text-lg">
                  peut apporter un conseil d'ordre juridique en lien direct avec la gestion de patrimoine (<strong className="text-[#253F60]"><a href="/patrimoine" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">structuration</a>, <a href="/patrimoine/transmission" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">transmission</a>, <a href="/fiscalite" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">fiscalité patrimoniale</a></strong>).
                </p>
              </div>
                </div>
            
            <p className="pt-6">
              En pratique, un CGP expérimenté combine souvent plusieurs de ces statuts pour offrir une vision globale et cohérente de la situation de ses clients.
            </p>
            
            <p>
              Son rôle est avant tout d'accompagner, de conseiller et d'anticiper, en s'appuyant sur une approche personnalisée qui intègre :
            </p>
            
            <ul className="list-none space-y-4 ml-2 mt-6">
              <li className="flex items-start gap-4">
                <span className="text-[#B99066] text-2xl font-bold mt-1">➤</span>
                <span className="text-lg">la <strong className="text-[#253F60]"><a href="/fiscalite" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">fiscalité</a></strong>,</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#B99066] text-2xl font-bold mt-1">➤</span>
                <span className="text-lg">la <strong className="text-[#253F60]"><a href="/patrimoine/protection-famille" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">protection de la famille</a></strong>,</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#B99066] text-2xl font-bold mt-1">➤</span>
                <span className="text-lg">la <strong className="text-[#253F60]"><a href="/placements" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">stratégie d'investissement</a></strong>,</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#B99066] text-2xl font-bold mt-1">➤</span>
                <span className="text-lg">la <strong className="text-[#253F60]"><a href="/retraite" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">préparation de la retraite</a></strong>,</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#B99066] text-2xl font-bold mt-1">➤</span>
                <span className="text-lg">et la <strong className="text-[#253F60]"><a href="/patrimoine/transmission" className="text-[#B99066] hover:text-[#A67C52] underline font-semibold transition-colors">transmission du patrimoine</a></strong></span>
              </li>
            </ul>
            
            {/* Boîte de résumé */}
            <div className="mt-12 bg-gradient-to-br from-[#253F60] to-[#1a2d47] text-white p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-cairo font-bold mb-6">
                En résumé :
              </h3>
              <p className="text-xl sm:text-2xl leading-relaxed font-light">
                la gestion de patrimoine, c'est l'art de faire dialoguer le juridique, le fiscal et le financier pour créer de la valeur et de la sérénité sur le long terme.
              </p>
            </div>
            </div>
          </div>
        </section>

      {/* Section : Pourquoi faire appel à un conseiller en gestion de patrimoine indépendant */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-12 sm:mb-16 text-center tracking-tight">
            Pourquoi faire appel à un conseiller en gestion de patrimoine indépendant ?
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-[#4B5563] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed mb-12 text-center">
              Un CGP est votre copilote pour prendre les bonnes décisions patrimoniales. Il apporte une <strong className="text-[#253F60] font-bold">vision à 360°</strong> sur votre situation, en prenant en compte vos revenus, votre patrimoine immobilier et financier, votre environnement fiscal, familial et professionnel.
            </p>
            
            {/* Diagramme circulaire avec les 4 points */}
            <div className="hidden lg:block relative w-full max-w-3xl mx-auto aspect-square mb-12">
              {/* Cercle central avec flèches circulaires */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 500 500">
                  {/* Définition de la pointe de flèche */}
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="10"
                      refX="8"
                      refY="5"
                      orient="auto"
                    >
                      <polygon
                        points="0 0, 10 5, 0 10"
                        fill="#253F60"
                      />
                    </marker>
                  </defs>
                  
                  {/* Cercle de flèches continu - 4 arcs avec flèches */}
                  {/* Arc 1: Top to Right */}
                  <path
                    d="M 250 80 A 170 170 0 0 1 420 250"
                    fill="none"
                    stroke="#253F60"
                    strokeWidth="6"
                    strokeLinecap="round"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* Arc 2: Right to Bottom */}
                  <path
                    d="M 420 250 A 170 170 0 0 1 250 420"
                    fill="none"
                    stroke="#253F60"
                    strokeWidth="6"
                    strokeLinecap="round"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* Arc 3: Bottom to Left */}
                  <path
                    d="M 250 420 A 170 170 0 0 1 80 250"
                    fill="none"
                    stroke="#253F60"
                    strokeWidth="6"
                    strokeLinecap="round"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* Arc 4: Left to Top */}
                  <path
                    d="M 80 250 A 170 170 0 0 1 250 80"
                    fill="none"
                    stroke="#253F60"
                    strokeWidth="6"
                    strokeLinecap="round"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* Icône centrale - Image lampe.png */}
                  <image
                    href="/images/lampe.png"
                    x="150"
                    y="150"
                    width="200"
                    height="200"
                    preserveAspectRatio="xMidYMid meet"
                  />
                </svg>
                  </div>
              
              {/* Point 1 - Top Left */}
              <div className="absolute top-8 left-8 w-72">
                <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-[#253F60] hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start gap-3">
                    <svg className="w-7 h-7 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#253F60] text-lg font-inter font-bold">
                      Structuration patrimoniale globale
                    </span>
                </div>
                  </div>
                </div>
              
              {/* Point 2 - Top Right */}
              <div className="absolute top-8 right-8 w-72">
                <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-[#253F60] hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start gap-3">
                    <svg className="w-7 h-7 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#253F60] text-lg font-inter font-bold">
                      Optimisation fiscale et transmission
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Point 3 - Bottom Right */}
              <div className="absolute bottom-8 right-8 w-72">
                <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-[#253F60] hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start gap-3">
                    <svg className="w-7 h-7 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#253F60] text-lg font-inter font-bold">
                      Accès à des solutions haut de gamme et sur-mesure
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Point 4 - Bottom Left */}
              <div className="absolute bottom-8 left-8 w-72">
                <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-[#253F60] hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start gap-3">
                    <svg className="w-7 h-7 text-[#B99066] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#253F60] text-lg font-inter font-bold">
                      Suivi personnalisé et réactif dans le temps
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Version mobile - liste verticale */}
            <div className="lg:hidden mt-12 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#253F60]">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#B99066] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#253F60] text-base font-inter font-semibold">
                    Structuration patrimoniale globale
                  </span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#253F60]">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#B99066] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#253F60] text-base font-inter font-semibold">
                    Optimisation fiscale et transmission
                  </span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#253F60]">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#B99066] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#253F60] text-base font-inter font-semibold">
                    Accès à des solutions haut de gamme et sur-mesure
                  </span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#253F60]">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#B99066] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#253F60] text-base font-inter font-semibold">
                    Suivi personnalisé et réactif dans le temps
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

      {/* Section : L'audit patrimonial */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-8 sm:mb-12 text-center tracking-tight">
            L'audit patrimonial : la base de toute stratégie
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-[#4B5563] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed mb-12 text-center">
              Notre accompagnement commence par un audit patrimonial gratuit. Ce diagnostic complet permet de dresser une cartographie de vos actifs et passifs, d'analyser votre situation juridique et fiscale, puis de construire un plan d'action réaliste et optimisé.
            </p>
            
            <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-8 text-center">
              Étapes de l'audit patrimonial
            </h3>
            
            {/* Stepper - 6 étapes */}
            <div className="w-full py-12 mb-12">
              <div className="relative max-w-6xl mx-auto px-4">
                {/* Ligne de connexion horizontale - Desktop uniquement */}
                <div className="hidden lg:block absolute top-8 left-12 right-12 h-0.5 bg-gray-300 z-0"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
                  {/* Étape 1 */}
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-4 hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">1</span>
                </div>
                    <div className="w-full bg-white rounded-lg shadow-lg p-4 border-2 border-gray-100 hover:border-[#B99066] transition-all duration-300">
                      <p className="text-sm font-inter font-semibold text-[#253F60] text-center leading-tight">
                        Inventaire des actifs et dettes
                      </p>
                    </div>
                  </div>
                  
                  {/* Étape 2 */}
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-4 hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg p-4 border-2 border-gray-100 hover:border-[#B99066] transition-all duration-300">
                      <p className="text-sm font-inter font-semibold text-[#253F60] text-center leading-tight">
                        Etablissement d'une lettre de mission
                      </p>
                    </div>
                  </div>
                  
                  {/* Étape 3 */}
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-4 hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg p-4 border-2 border-gray-100 hover:border-[#B99066] transition-all duration-300">
                      <p className="text-sm font-inter font-semibold text-[#253F60] text-center leading-tight">
                        Analyse des flux de revenus et dépenses
                      </p>
                    </div>
                  </div>
                  
                  {/* Étape 4 */}
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-4 hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg p-4 border-2 border-gray-100 hover:border-[#B99066] transition-all duration-300">
                      <p className="text-sm font-inter font-semibold text-[#253F60] text-center leading-tight">
                        Identification des risques (juridiques, fiscaux, successoraux)
                      </p>
                    </div>
                  </div>
                  
                  {/* Étape 5 */}
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-4 hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">5</span>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg p-4 border-2 border-gray-100 hover:border-[#B99066] transition-all duration-300">
                      <p className="text-sm font-inter font-semibold text-[#253F60] text-center leading-tight">
                        Propositions de stratégies (placements, transmission, structuration)
                      </p>
                    </div>
                  </div>
                  
                  {/* Étape 6 */}
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-4 hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">6</span>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg p-4 border-2 border-gray-100 hover:border-[#B99066] transition-all duration-300">
                      <p className="text-sm font-inter font-semibold text-[#253F60] text-center leading-tight">
                        Plan d'action chiffré et suivi annuel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bouton CTA */}
            <div className="text-center mt-12">
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-[#253F60] text-white px-10 py-4 rounded-lg shadow-lg font-inter font-bold text-lg hover:bg-[#1a2d47] hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
                Audit patrimonial gratuit
            </button>
            </div>
            </div>
          </div>
        </section>

      {/* Section : Nos expertises pour structurer et valoriser votre patrimoine */}
      <section className="w-full bg-[#253F60] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-12 sm:mb-16 text-center tracking-tight">
            Nos expertises pour structurer et valoriser votre patrimoine
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1: Succession & héritage */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16.5c-.8 0-1.54.5-1.85 1.26l-1.38 3.74H9.5c-.83 0-1.5.67-1.5 1.5S8.67 15 9.5 15h2.5v6h2v-6h2.5v6H20zm-5.5-6h-2v6h2v-6z"/>
                  <path d="M12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Succession & héritage
              </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Préparez la transmission de votre patrimoine tout en limitant les droits de succession. Azalée Patrimoine vous accompagne pour anticiper, organiser et optimiser votre succession grâce à des outils juridiques et fiscaux éprouvés.
              </p>
          </div>

            {/* Service 2: Donation à titre gratuit */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Donation à titre gratuit
              </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Profitez des abattements renouvelables tous les 15 ans pour transmettre sans fiscalité excessive. Nous vous aidons à choisir le bon moment, les bons bénéficiaires et le bon montage (pleine propriété, nue-propriété, démembrement).
              </p>
            </div>
            
            {/* Service 3: Donation à titre onéreux */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Donation à titre onéreux
              </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Rééquilibrez une succession, compensez des déséquilibres familiaux ou financez un projet avec des dispositifs fiscaux adaptés.
              </p>
            </div>
            
            {/* Service 4: Transmission de patrimoine */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16.5c-.8 0-1.54.5-1.85 1.26l-1.38 3.74H9.5c-.83 0-1.5.67-1.5 1.5S8.67 15 9.5 15h2.5v6h2v-6h2.5v6H20zm-5.5-6h-2v6h2v-6z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Transmission de patrimoine
              </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Nous mettons en œuvre les meilleures solutions (assurance-vie, SCI, pacte Dutreil, démembrement, holding patrimoniale) pour vous permettre de transmettre dans la sérénité et en toute sécurité.
              </p>
            </div>
            
            {/* Service 5: Protection de la famille */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 3.1l6 2.58v4.82c0 4.54-3.07 8.83-8 9.81-4.93-.98-8-5.27-8-9.81V6.68l8-3.58zm0 2.9l-4 1.73v3.26c0 2.86 1.93 5.57 4 6.27 2.07-.7 4-3.41 4-6.27V8.73L12 7z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Protection de la famille
              </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Anticipez les aléas de la vie : décès, divorce, incapacité. Nos solutions couvrent la clause bénéficiaire sur-mesure, le mandat de protection future, le choix du régime matrimonial.
              </p>
            </div>
            
            {/* Service 6: Bilan patrimonial */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Bilan patrimonial
              </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Un état des lieux personnalisé et confidentiel, base indispensable pour toute stratégie de croissance ou de transmission.
              </p>
            </div>
            
            {/* Service 7: Conseils patrimoniaux sur-mesure */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Conseils patrimoniaux sur-mesure
              </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Dirigeants, professions libérales, héritiers : chaque profil mérite une stratégie ajustée et évolutive. Nos conseils intègrent vos objectifs, vos contraintes et votre horizon.
              </p>
            </div>
            
            {/* Service 8: Patrimoines complexes */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Patrimoines complexes
              </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Indivision, expatriation, fiscalité internationale, résidences multiples : nos experts vous guident sur des montages adaptés et conformes à la réglementation.
              </p>
            </div>
            
            {/* Service 9: Financement patrimonial */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Financement patrimonial
              </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Utilisez l'effet de levier du crédit pour développer votre patrimoine : crédit lombard, OBO, financement locatif ou refinancement.
              </p>
            </div>
            
            {/* Service 10: Produits structurés & alternatifs */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Produits structurés & alternatifs
            </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Accédez à des placements sur-mesure : produits structurés, private equity, ETF, capital-investissement, énergies renouvelables.
              </p>
            </div>
            
            {/* Service 11: Fiscalité et expatriation */}
            <div className="bg-transparent border-2 border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
              <div className="w-14 h-14 mb-4 text-white flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                </div>
              <h3 className="text-white text-xl font-cairo font-bold mb-3">
                Fiscalité et expatriation
              </h3>
              <p className="text-white/90 text-sm font-inter leading-relaxed">
                Nous accompagnons aussi les non-résidents dans leur structuration patrimoniale en tenant compte des conventions fiscales internationales.
              </p>
            </div>
          </div>
          
          {/* Bouton CTA */}
          <div className="mt-12 flex justify-end">
            <button 
              onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
              className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-xl font-inter font-bold text-lg hover:bg-[#A67A5A] hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Je prends rdv
            </button>
            </div>
          </div>
        </section>

      {/* Section : Cas concrets de stratégies patrimoniales */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-8 sm:mb-12 text-center tracking-tight">
            Cas concrets de stratégies patrimoniales
                </h2>
                
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed text-center">
              La gestion de patrimoine et la transmission nécessitent des solutions sur-mesure, adaptées à vos objectifs, à l'âge de vos bénéficiaires et à vos contraintes fiscales. Voici trois profils représentatifs pour illustrer comment structurer efficacement une stratégie patrimoniale pour les familles françaises d'aujourd'hui.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Cas 1: Sophie */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#253F60] shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                  <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4">
                    Sophie, 45 ans, 2 enfants
                      </h3>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                    Sophie souhaite protéger ses enfants en cas de décès.
                  </p>
                  <div className="space-y-2">
                    <p className="text-[#253F60] font-semibold mb-3">Mise en œuvre :</p>
                    <ul className="list-none space-y-2 text-[#4B5563] text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Prévoyance décès pour générer un capital destiné aux droits de succession</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Assurance-vie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Contrat de capitalisation démembré</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Testament</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Mandat de protection future</span>
                      </li>
                    </ul>
                    </div>
                  </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#253F60] via-[#B99066] to-[#253F60] rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src="/images/sophie.webp" 
                      alt="Sophie, 45 ans, 2 enfants"
                      className="relative w-full h-80 object-cover object-center rounded-xl shadow-2xl border-4 border-white ring-4 ring-[#B99066] ring-opacity-50 group-hover:ring-opacity-100 transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                </div>
              </div>
              
            {/* Cas 2: Jean */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#253F60] shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 flex justify-center">
                  <div className="relative w-full max-w-md group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#253F60] via-[#B99066] to-[#253F60] rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src="/images/jean.webp" 
                      alt="Jean, 60 ans, chef d'entreprise"
                      className="relative w-full h-64 object-cover rounded-xl shadow-2xl border-4 border-white ring-4 ring-[#B99066] ring-opacity-50 group-hover:ring-opacity-100 transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4">
                    Jean, 60 ans, chef d'entreprise
                  </h3>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                    Jean souhaite transmettre son entreprise.
                  </p>
                  <div className="space-y-2">
                    <p className="text-[#253F60] font-semibold mb-3">Mise en œuvre :</p>
                    <ul className="list-none space-y-2 text-[#4B5563] text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Holding patrimoniale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Donation-partage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Pacte Dutreil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Assurance-vie</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cas 3: Marie et Paul */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#253F60] shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                  <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4">
                    Marie et Paul, 70 ans
                  </h3>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                    Marie et Paul souhaitent alléger leur IFI et préparer leur succession.
                  </p>
                  <div className="space-y-2">
                    <p className="text-[#253F60] font-semibold mb-3">Mise en œuvre :</p>
                    <ul className="list-none space-y-2 text-[#4B5563] text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Démembrement croisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Contrat de capitalisation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B99066] mt-1">•</span>
                        <span>Donation transgénérationnelle</span>
                      </li>
                  </ul>
                    </div>
                  </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#253F60] via-[#B99066] to-[#253F60] rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src="/images/couple.webp" 
                      alt="Marie et Paul, 70 ans"
                      className="relative w-full h-64 object-cover rounded-xl shadow-2xl border-4 border-white ring-4 ring-[#B99066] ring-opacity-50 group-hover:ring-opacity-100 transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                </div>
              </div>
              </div>
            </div>
          </div>
          
          {/* Résumé visuel - 3 boîtes */}
          <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Boîte 1: Sophie */}
            <div className="bg-[#253F60] rounded-xl p-6 shadow-xl border-2 border-[#1a2d47]">
              <h4 className="text-white text-xl font-cairo font-bold mb-4">
                Sophie, 45 ans
              </h4>
              <p className="text-[#B99066] font-semibold mb-4 text-lg">
                Protection familiale et succession
              </p>
              <ul className="list-none space-y-2 text-white/90 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span>2 enfants à protéger</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span>Optimisation fiscale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span>Sécurisation du patrimoine</span>
                </li>
              </ul>
            </div>
            
            {/* Boîte 2: Jean */}
            <div className="bg-[#253F60] rounded-xl p-6 shadow-xl border-2 border-[#1a2d47]">
              <h4 className="text-white text-xl font-cairo font-bold mb-4">
                Jean, 60 ans
              </h4>
              <p className="text-[#B99066] font-semibold mb-4 text-lg">
                Transmission d'entreprise
              </p>
              <ul className="list-none space-y-2 text-white/90 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span>Chef d'entreprise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span>Continuité de l'activité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span>Optimisation des droits</span>
                </li>
              </ul>
            </div>
            
            {/* Boîte 3: Marie et Paul */}
            <div className="bg-[#253F60] rounded-xl p-6 shadow-xl border-2 border-[#1a2d47]">
              <h4 className="text-white text-xl font-cairo font-bold mb-4">
                Marie & Paul, 70 ans
              </h4>
              <p className="text-[#B99066] font-semibold mb-4 text-lg">
                Optimisation IFI et succession
              </p>
              <ul className="list-none space-y-2 text-white/90 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span>Réduction fiscale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span>Transmission intergénérationnelle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span>Préservation du capital</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Résumé et CTA */}
          <div className="max-w-5xl mx-auto mt-16 space-y-6">
            <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed text-center">
              Ces trois situations illustrent parfaitement la diversité des approches patrimoniales selon les cycles de vie. Sophie, en pleine activité professionnelle, privilégie la protection et la sécurisation. Jean, approchant de la retraite, se concentre sur la transmission de son outil de travail. Enfin, Marie et Paul optimisent leur fiscalité tout en préparant l'avenir de leurs descendants.
            </p>
            
            <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed text-center">
              Chaque stratégie combine plusieurs outils juridiques et fiscaux pour maximiser l'efficacité de la transmission.
            </p>
            
            <div className="text-center mt-10">
                  <button 
                    onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-[#253F60] text-white px-10 py-4 rounded-lg shadow-xl font-inter font-bold text-lg hover:bg-[#1a2d47] hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                Je contacte un expert pour analyser ma situation
                  </button>
                </div>
              </div>
            </div>
      </section>

      {/* Section : Simuler pour mieux décider */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-8 sm:mb-12 text-center tracking-tight">
            Simuler pour mieux décider
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed text-center mb-8">
              <strong className="text-[#253F60] font-bold">Nos simulateurs patrimoniaux</strong> vous permettent de visualiser :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#B99066] transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-[#253F60] text-lg font-cairo font-bold mb-2">
                  Vos droits de succession
            </h3>
          </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#B99066] transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-[#253F60] text-lg font-cairo font-bold mb-2">
                  L'évolution de votre patrimoine sur 10 à 30 ans
                </h3>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#B99066] transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[#253F60] text-lg font-cairo font-bold mb-2">
                  Les gains potentiels d'une optimisation fiscale ou successorale
                </h3>
              </div>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-[#B99066] p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter">
                  <strong className="text-[#253F60]">Bientôt disponible en ligne :</strong> simulateur succession, tableau de bord patrimonial, simulateur d'IFI, comparatif assurance-vie vs capitalisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Pourquoi choisir Azalée Patrimoine ? */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-12 sm:mb-16 text-center tracking-tight">
            Pourquoi choisir Azalée Patrimoine ?
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <svg className="w-7 h-7 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed">
                  Approche sur-mesure, humaine, transparente
                </p>
              </div>
              
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <svg className="w-7 h-7 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed">
                  Accompagnement à long terme, révisions annuelles
                </p>
              </div>
              
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <svg className="w-7 h-7 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed">
                  Honoraires clairs, sans surprise, adaptés à votre profil
                </p>
              </div>
              
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <svg className="w-7 h-7 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed">
                  Accès à des solutions d'investissement sélectionnées selon des critères ESG, performance et stabilité
                </p>
              </div>
              
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <svg className="w-7 h-7 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed">
                  CGP diplômés, certifiés CIF/IAS, sous assurance RCP
                </p>
              </div>
              
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <svg className="w-7 h-7 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed">
                  Un <strong className="text-[#253F60] font-bold">Family Office</strong> dédié à la gestion de vos investissements immobiliers, pour un suivi optimal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Qui sont les autres professionnels qui vous conseillent sur votre patrimoine ? */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-8 sm:mb-12 text-center tracking-tight">
            Qui sont les autres professionnels qui vous conseillent sur votre patrimoine ?
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8 mb-12">
            <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed text-center">
              La gestion de patrimoine ne se fait pas en vase clos.
            </p>
            <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed text-center">
              Pour vous offrir un accompagnement complet et cohérent, le conseiller en gestion de patrimoine collabore étroitement avec d'autres professionnels du droit, de la finance et de l'immobilier.
            </p>
            <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed text-center">
              Chacun joue un rôle spécifique dans la protection, la valorisation et la transmission de votre patrimoine.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Le notaire */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#253F60] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4 flex items-center gap-3">
                    Le notaire
                    <svg className="w-6 h-6 text-[#B99066]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </h3>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                    Le notaire rédige, valide et authentifie les actes juridiques : achat immobilier, succession, donation, contrat de mariage, création de société civile. Il garantit la sécurité juridique des opérations et veille à l'application correcte du droit de la famille et des successions.
                  </p>
                </div>
              </div>
            </div>

            {/* L'expert-comptable */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#253F60] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4 flex items-center gap-3">
                    L'expert-comptable
                    <svg className="w-6 h-6 text-[#B99066]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </h3>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                    <strong className="text-[#253F60] font-semibold">Rôle principal :</strong> Il assure la tenue et la conformité de la comptabilité d'une entreprise.
                  </p>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                    <strong className="text-[#253F60] font-semibold">Expertise :</strong> Indispensable pour les dirigeants et les professions libérales, il aide à optimiser la rémunération, anticiper la fiscalité et préparer la cession ou la transmission d'entreprise.
                  </p>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                    <strong className="text-[#253F60] font-semibold">Collaboration :</strong> Il travaille en synergie avec le CGP pour élaborer des stratégies financières et patrimoniales cohérentes.
                  </p>
                </div>
              </div>
            </div>

            {/* L'avocat */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#253F60] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4">
                    L'avocat
                  </h3>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                    <strong className="text-[#253F60] font-semibold">Rôle principal :</strong> Il apporte un conseil juridique et fiscal sur des sujets complexes ou stratégiques.
                  </p>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                    <strong className="text-[#253F60] font-semibold">Spécialisations :</strong>
                  </p>
                  <ul className="list-none space-y-2 mb-4 ml-4">
                    <li className="flex items-start gap-2 text-[#4B5563] text-base sm:text-lg">
                      <span className="text-[#B99066] mt-1">•</span>
                      <span><strong className="text-[#253F60]">L'avocat fiscaliste</strong> : il se concentre sur l'optimisation et la sécurisation des opérations fiscales (donations, successions, plus-values, expatriation).</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#4B5563] text-base sm:text-lg">
                      <span className="text-[#B99066] mt-1">•</span>
                      <span><strong className="text-[#253F60]">L'avocat en droit des affaires</strong> : il intervient dans la structuration d'entreprises, la cession d'entreprise ou l'accompagnement de transmissions familiales.</span>
                    </li>
                  </ul>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                    <strong className="text-[#253F60] font-semibold">Collaboration :</strong> Son partenariat avec le CGP garantit la cohérence juridique et fiscale de la stratégie patrimoniale du client.
                  </p>
                </div>
              </div>
            </div>

            {/* Le courtier en crédit */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#253F60] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-4">
                    Le courtier en crédit
                  </h3>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                    <strong className="text-[#253F60] font-semibold">Rôle principal :</strong> Il accompagne les particuliers et les investisseurs dans la recherche et le financement de leurs biens immobiliers.
                  </p>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                    <strong className="text-[#253F60] font-semibold">Fonction :</strong> Il optimise les conditions de prêt (taux, durée, garanties) et aide à structurer des investissements immobiliers rentables et fiscalement intelligents.
                  </p>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                    <strong className="text-[#253F60] font-semibold">Collaboration :</strong> Son rôle complète celui du CGP en connectant les projets immobiliers à la stratégie patrimoniale globale.
                  </p>
                </div>
              </div>
            </div>

            {/* Synergie */}
            <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl shadow-2xl p-8 md:p-12 text-white">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-6 text-center">
                Une synergie au service de votre patrimoine
              </h3>
              <p className="text-white/90 text-lg sm:text-xl font-inter leading-relaxed text-center max-w-4xl mx-auto">
                Le <strong className="text-white font-bold">conseiller en gestion de patrimoine (CGP)</strong> joue le rôle de <strong className="text-white font-bold">"chef d'orchestre"</strong> en coordonnant ces différents experts. Il assure la cohérence globale, gère les interventions et garantit que chaque décision sert les intérêts du client sur le long terme.
              </p>
              <p className="text-white/90 text-lg sm:text-xl font-inter leading-relaxed text-center max-w-4xl mx-auto mt-6">
                Cette collaboration entre notaire, avocat, expert-comptable et courtier forme le socle d'une <strong className="text-white font-bold">stratégie patrimoniale complète et sécurisée</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Pourquoi faire appel à Azalée Patrimoine pour gérer votre patrimoine ? */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Diagramme circulaire : Le client au centre */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold text-center mb-12">
              Le client au centre
            </h3>
            <div className="hidden lg:block relative w-full max-w-3xl mx-auto">
              <img 
                src="/images/Gemini_Generated_Image_moj9n5moj9n5moj9.png" 
                alt="Le client au centre entouré des 5 partenaires : CGP, notaire, avocat, expert-comptable, courtier"
                className="w-full h-auto rounded-xl shadow-xl"
                style={{ filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))' }}
              />
            </div>
            
            {/* Version mobile - liste verticale améliorée */}
            <div className="lg:hidden space-y-6">
              <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] text-white rounded-xl p-8 text-center shadow-xl border-4 border-[#B99066]">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="font-bold text-xl mb-2">Le client</p>
                <p className="text-[#B99066] font-semibold text-sm">au centre</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-br from-[#B99066] to-[#A67A5A] text-white rounded-xl p-6 text-center shadow-lg border-2 border-[#253F60] hover:shadow-xl transition-all">
                  <p className="font-bold text-lg mb-1">CGP</p>
                  <p className="text-sm opacity-90">Chef d'orchestre</p>
                </div>
                <div className="bg-gradient-to-br from-[#B99066] to-[#A67A5A] text-white rounded-xl p-6 text-center shadow-lg border-2 border-[#253F60] hover:shadow-xl transition-all">
                  <p className="font-bold text-lg mb-1">Notaire</p>
                  <p className="text-sm opacity-90">Transmission</p>
                </div>
                <div className="bg-gradient-to-br from-[#B99066] to-[#A67A5A] text-white rounded-xl p-6 text-center shadow-lg border-2 border-[#253F60] hover:shadow-xl transition-all">
                  <p className="font-bold text-lg mb-1">Avocat</p>
                  <p className="text-sm opacity-90">Juridique</p>
                </div>
                <div className="bg-gradient-to-br from-[#B99066] to-[#A67A5A] text-white rounded-xl p-6 text-center shadow-lg border-2 border-[#253F60] hover:shadow-xl transition-all">
                  <p className="font-bold text-lg mb-1">Expert-comptable</p>
                  <p className="text-sm opacity-90">Fiscalité</p>
                </div>
                <div className="bg-gradient-to-br from-[#B99066] to-[#A67A5A] text-white rounded-xl p-6 text-center shadow-lg border-2 border-[#253F60] hover:shadow-xl transition-all">
                  <p className="font-bold text-lg mb-1">Courtier</p>
                  <p className="text-sm opacity-90">Financement</p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-8 sm:mb-12 text-center tracking-tight">
            Pourquoi faire appel à Azalée Patrimoine pour gérer votre patrimoine ?
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8 mb-12">
            <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed text-center">
              Choisir Azalée Patrimoine, c'est bénéficier d'un accompagnement global, indépendant et sur-mesure.
            </p>
            <p className="text-[#4B5563] text-lg sm:text-xl font-inter leading-relaxed text-center">
              Notre mission : vous aider à structurer, optimiser et transmettre votre patrimoine dans les meilleures conditions, en plaçant vos objectifs de vie au centre de nos décisions.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* H3: Une expertise indépendante et certifiée */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#253F60] shadow-lg">
              <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
                Une expertise indépendante et certifiée
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Nos conseillers en gestion de patrimoine détiennent plusieurs statuts réglementés (<strong className="text-[#253F60] font-bold">CIF, IAS, IOBSP</strong>) et sont inscrits à l'<strong className="text-[#253F60] font-bold">ORIAS</strong>. Cette indépendance leur permet de sélectionner les solutions du marché les plus pertinentes, sans biais commercial.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* H3: Une approche personnalisée et humaine */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#253F60] shadow-lg">
              <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
                Une approche personnalisée et humaine
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Notre processus démarre par un audit patrimonial approfondi pour comprendre vos besoins, vos horizons d'investissement et votre appétence au risque. Nos recommandations sont pédagogiques et adaptées à chaque profil : investisseur, dirigeant, couple ou retraité.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* H3: Des stratégies performantes et durables */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#253F60] shadow-lg">
              <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
                Des stratégies performantes et durables
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Nous combinons différents leviers (<strong className="text-[#253F60] font-bold">fiscal, financier</strong> (placements), <strong className="text-[#253F60] font-bold">juridique et immobilier</strong>) pour construire une stratégie globale axée sur : <strong className="text-[#253F60] font-bold">réduction d'impôt</strong>, diversification, épargne long terme, <strong className="text-[#253F60] font-bold">transmission</strong> et protection de la famille. Nos solutions privilégient la performance durable, la sécurité et la transparence.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* H3: Une relation de confiance sur le long terme */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#253F60] shadow-lg">
              <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
                Une relation de confiance sur le long terme
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                La gestion de patrimoine est un parcours de vie.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                Nous vous accompagnons sur le long terme avec un suivi structuré annuel, une révision de vos investissements, une adaptation aux évolutions fiscales et réglementaires, et une mise à jour de votre stratégie en fonction de vos projets.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                Chaque client dispose d'un interlocuteur dédié et d'un tableau de bord patrimonial pour une gestion claire de ses actifs financiers.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Notre <strong className="text-[#253F60] font-bold">Family Officer immobilier</strong> coordonne les relations avec les agences immobilières, notaires, comptables et services fiscaux pour la gestion administrative de votre patrimoine immobilier.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* H3: Un engagement éthique et responsable */}
          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#253F60] shadow-lg">
              <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
                Un engagement éthique et responsable
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Azalée Patrimoine intègre dans sa démarche les critères <strong className="text-[#253F60] font-bold">ESG (Environnement, Social, Gouvernance)</strong>. Nous privilégions des investissements responsables, transparents et alignés avec vos valeurs, sans compromis sur la performance.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* H3: En résumé */}
          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-white text-2xl sm:text-3xl font-cairo font-bold mb-8 text-center">
                En résumé
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <svg className="w-7 h-7 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/90 text-lg sm:text-xl font-inter leading-relaxed">
                    Un cabinet indépendant et certifié
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-7 h-7 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/90 text-lg sm:text-xl font-inter leading-relaxed">
                    Une vision 360° du patrimoine : fiscal, juridique, immobilier, financier
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-7 h-7 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/90 text-lg sm:text-xl font-inter leading-relaxed">
                    Une stratégie sur-mesure pour chaque profil
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-7 h-7 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/90 text-lg sm:text-xl font-inter leading-relaxed">
                    Un accompagnement durable et humain
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-7 h-7 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/90 text-lg sm:text-xl font-inter leading-relaxed">
                    Des valeurs fortes : transparence, pédagogie, responsabilité
                  </p>
                </div>
              </div>
              
              <p className="text-white text-xl sm:text-2xl font-inter leading-relaxed text-center font-light italic">
                Faire appel à Azalée Patrimoine, c'est choisir la rigueur d'un expert et la proximité d'un partenaire de confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section : FAQ Gestion de patrimoine */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-12 sm:mb-16 text-center tracking-tight">
            FAQ Gestion de patrimoine
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Question 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#253F60] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-4">
                Quel est le bon moment pour faire un audit patrimonial ?
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Dès que vous changez de situation familiale, professionnelle ou patrimoniale.
              </p>
            </div>
            
            {/* Question 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#253F60] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-4">
                Quelle est la différence entre CGP et gestionnaire de fortune ?
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Le CGP vous accompagne globalement. Le gestionnaire de fortune intervient à partir de 5-10 M€ de patrimoine.
              </p>
            </div>
            
            {/* Question 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#253F60] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-4">
                Quel est la différence entre CGP et un Family Officer ?
              </h3>
              <div className="space-y-4">
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                  <strong className="text-[#253F60] font-bold">Le CGP</strong> accompagne un client pour diagnostiquer sa situation, optimiser sa fiscalité et mettre en place des placements (assurance-vie, PER, SCPI...), retraite/succession, avec une rémunération en honoraires et/ou rétrocommissions sur un périmètre financier et immobilier.
                </p>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                  <strong className="text-[#253F60] font-bold">Le Family Officer</strong> est un chef d'orchestre global (gouvernance familiale, consolidation multi-banques/actifs, coordination banques-notaires-avocats, reporting), rémunéré principalement à l'honoraire, sans distribution de produits et avec un ticket d'entrée plus élevé.
                </p>
              </div>
            </div>
            
            {/* Question 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#253F60] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-4">
                L'accompagnement est-il payant ?
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                L'audit patrimonial est offert dès 25 000 € d'investissement. Nos frais sont toujours expliqués, chiffrés et validés avec vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Travaillez-vous avec des expatriés ? */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border-l-4 border-[#253F60] shadow-lg">
              <h3 className="text-[#253F60] text-2xl sm:text-3xl font-cairo font-bold mb-6">
                Travaillez-vous avec des expatriés ?
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Oui. Nous conseillons aussi les non-résidents et accompagnons les transmissions transfrontalières.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Aller plus loin avec Azalée Patrimoine */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-12 sm:mb-16 text-center tracking-tight">
            Aller plus loin avec Azalée Patrimoine
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/placements" className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#B99066] hover:border-[#A67C52] hover:shadow-xl transition-all duration-300 flex items-center gap-4 group">
                <svg className="w-8 h-8 text-[#B99066] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[#253F60] text-lg font-inter font-semibold group-hover:text-[#B99066] transition-colors">
                  Placements financiers
                </span>
              </a>
              
              <a href="/fiscalite" className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#B99066] hover:border-[#A67C52] hover:shadow-xl transition-all duration-300 flex items-center gap-4 group">
                <svg className="w-8 h-8 text-[#B99066] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-5m-6 5h.01M19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V21z" />
                </svg>
                <span className="text-[#253F60] text-lg font-inter font-semibold group-hover:text-[#B99066] transition-colors">
                  Fiscalité du patrimoine
                </span>
              </a>
              
              <a href="/immobilier" className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#B99066] hover:border-[#A67C52] hover:shadow-xl transition-all duration-300 flex items-center gap-4 group">
                <svg className="w-8 h-8 text-[#B99066] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-[#253F60] text-lg font-inter font-semibold group-hover:text-[#B99066] transition-colors">
                  Immobilier & SCPI
                </span>
              </a>
              
              <a href="/retraite" className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#B99066] hover:border-[#A67C52] hover:shadow-xl transition-all duration-300 flex items-center gap-4 group">
                <svg className="w-8 h-8 text-[#B99066] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#253F60] text-lg font-inter font-semibold group-hover:text-[#B99066] transition-colors">
                  Retraite
                </span>
              </a>
              
              <a href="/simulateurs" className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#B99066] hover:border-[#A67C52] hover:shadow-xl transition-all duration-300 flex items-center gap-4 group">
                <svg className="w-8 h-8 text-[#B99066] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-[#253F60] text-lg font-inter font-semibold group-hover:text-[#B99066] transition-colors">
                  Simulateurs
                </span>
              </a>
              
              <a href="/qui-sommes-nous" className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#B99066] hover:border-[#A67C52] hover:shadow-xl transition-all duration-300 flex items-center gap-4 group">
                <svg className="w-8 h-8 text-[#B99066] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.503-1.135-2.01M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.503 1.135-2.01m0 0A5.002 5.002 0 0112 13c1.242 0 2.4.402 3.332 1.09M9 9a3 3 0 116 0m-6 0a3 3 0 106 0m-6 0a3 3 0 106 0" />
                </svg>
                <span className="text-[#253F60] text-lg font-inter font-semibold group-hover:text-[#B99066] transition-colors">
                  Qui sommes-nous ?
                </span>
              </a>
                </div>
            </div>
          </div>
        </section>

      {/* Section : Rencontrer un conseiller - Carte de France */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold leading-tight mb-12 sm:mb-16 text-center tracking-tight">
            Rencontrer un conseiller en gestion de patrimoine
          </h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Carte de France avec les villes */}
            <div className="relative w-full max-w-4xl mx-auto mb-12">
              {/* Image SVG de la France */}
              <img 
                src="/images/france.svg" 
                alt="Carte de France" 
                className="w-full h-auto"
              />
              
              {/* Marqueurs de villes positionnés par-dessus */}
              <svg 
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 596.41547 584.5448"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Paris */}
                <g className="pointer-events-auto cursor-pointer">
                  <circle cx="300" cy="250" r="8" fill="#253F60" className="hover:fill-[#B99066] transition-colors"/>
                  <text x="300" y="240" textAnchor="middle" fill="#253F60" fontSize="12" fontWeight="bold" fontFamily="Inter, sans-serif">Paris</text>
                </g>
                
                {/* Lille */}
                <g className="pointer-events-auto cursor-pointer">
                  <circle cx="300" cy="100" r="7" fill="#253F60" className="hover:fill-[#B99066] transition-colors"/>
                  <text x="300" y="88" textAnchor="middle" fill="#253F60" fontSize="11" fontWeight="bold" fontFamily="Inter, sans-serif">Lille</text>
                </g>
                
                {/* Nantes */}
                <g className="pointer-events-auto cursor-pointer">
                  <circle cx="150" cy="350" r="7" fill="#253F60" className="hover:fill-[#B99066] transition-colors"/>
                  <text x="150" y="338" textAnchor="middle" fill="#253F60" fontSize="11" fontWeight="bold" fontFamily="Inter, sans-serif">Nantes</text>
                </g>
                
                {/* La Rochelle */}
                <g className="pointer-events-auto cursor-pointer">
                  <circle cx="200" cy="400" r="7" fill="#253F60" className="hover:fill-[#B99066] transition-colors"/>
                  <text x="200" y="388" textAnchor="middle" fill="#253F60" fontSize="11" fontWeight="bold" fontFamily="Inter, sans-serif">La Rochelle</text>
                </g>
                
                {/* Salon de Provence */}
                <g className="pointer-events-auto cursor-pointer">
                  <circle cx="450" cy="550" r="7" fill="#253F60" className="hover:fill-[#B99066] transition-colors"/>
                  <text x="450" y="538" textAnchor="middle" fill="#253F60" fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif">Salon de Provence</text>
                </g>
                
                {/* Annemasse */}
                <g className="pointer-events-auto cursor-pointer">
                  <circle cx="500" cy="400" r="7" fill="#253F60" className="hover:fill-[#B99066] transition-colors"/>
                  <text x="500" y="388" textAnchor="middle" fill="#253F60" fontSize="11" fontWeight="bold" fontFamily="Inter, sans-serif">Annemasse</text>
                </g>
              </svg>
            </div>
            
            {/* Boutons pour chaque ville */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <button 
                  onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white px-6 py-4 rounded-lg shadow-xl font-inter font-bold text-base hover:from-[#1a2d47] hover:to-[#253F60] hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Rencontrer un conseiller en gestion de patrimoine à Paris
              </button>
              
              <button
                onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white px-6 py-4 rounded-lg shadow-xl font-inter font-bold text-base hover:from-[#1a2d47] hover:to-[#253F60] hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Rencontrer un conseiller en gestion de patrimoine à Lille
              </button>
              
              <button
                onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white px-6 py-4 rounded-lg shadow-xl font-inter font-bold text-base hover:from-[#1a2d47] hover:to-[#253F60] hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Rencontrer un conseiller en gestion de patrimoine à Nantes
              </button>
              
              <button
                onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white px-6 py-4 rounded-lg shadow-xl font-inter font-bold text-base hover:from-[#1a2d47] hover:to-[#253F60] hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Rencontrer un conseiller en gestion de patrimoine à La Rochelle
              </button>
              
              <button
                onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white px-6 py-4 rounded-lg shadow-xl font-inter font-bold text-base hover:from-[#1a2d47] hover:to-[#253F60] hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Rencontrer un conseiller en gestion de patrimoine à Salon de Provence
              </button>
              
              <button
                onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white px-6 py-4 rounded-lg shadow-xl font-inter font-bold text-base hover:from-[#1a2d47] hover:to-[#253F60] hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Rencontrer un conseiller en gestion de patrimoine à Annemasse
                </button>
              </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
} 