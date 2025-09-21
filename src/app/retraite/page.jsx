"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import StockTicker from "../../components/common/StockTicker";

export default function RetraitePage() {
  const [content, setContent] = useState({});
  const [contentSource, setContentSource] = useState('default');
  const [loading, setLoading] = useState(true);

  // Default content
  const defaultContent = {
    hero: {
      title: "Préparer sa retraite avec Azalee Wealth",
      subtitle: "PX2 - FR0003500008 - Euronext Paris",
      backgroundImage: "/images/retraite.webp"
    },
    intro: {
      title: "Retraite – Préparez vos revenus futurs avec sérénité",
      introText: "La retraite est un moment clé de la vie patrimoniale : passage d'un revenu d'activité à un revenu de remplacement.",
      introHighlight: "👉 Anticiper, c'est éviter la baisse de niveau de vie et protéger sa famille.",
      accompanimentTitle: "Azalée Patrimoine accompagne ses clients dans une vision globale de la retraite :",
      accompanimentList: [
        "Épargne retraite (PER, PERCO, PEE…)",
        "Optimisation via le rachat de trimestres",
        "Simulations personnalisées pour anticiper ses revenus futurs",
        "Mise en place de solutions de prévoyance et de protection familiale",
        "Diversification avec d'autres solutions retraite (immobilier locatif, SCPI, assurance-vie)"
      ]
    },
    planRetraite: {
      title: "1. Plan retraite (PER, PERP, PEE, PERCO…)",
      perTitle: "PER (Plan Épargne Retraite – loi Pacte)",
      perDescription: "L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83.",
      perFeatures: [
        "Avantage fiscal immédiat (versements déductibles)",
        "Sortie en rente, capital ou mixte",
        "Sortie anticipée possible (résidence principale, accident de la vie)"
      ],
      percoTitle: "PERCO / PEE",
      percoDescription: "Dispositifs d'épargne entreprise alimentés par participation, intéressement, abondement.",
      oldEnvelopes: "Anciennes enveloppes (PERP, Madelin, Art. 83) : transférables vers le PER.",
      conclusion: "👉 Azalée Patrimoine analyse chaque situation pour choisir le meilleur véhicule d'épargne retraite, en tenant compte de la fiscalité, du statut (salarié, TNS, dirigeant) et des objectifs."
    },
    rachatTrimestres: {
      title: "2. Rachat de trimestres retraite",
      benefits: [
        "Validation d'années",
        "Intérêt",
        "Fiscalement"
      ],
      example: "👉 Exemple : un cadre de 50 ans qui rachète 4 trimestres peut gagner jusqu'à 200 € de pension mensuelle supplémentaire."
    },
    simulation: {
      title: "3. Simulation retraite",
      steps: [
        "État des lieux",
        "Projection",
        "Comparaison",
        "Plan d'épargne"
      ],
      conclusion: "👉 Chez Azalée Patrimoine, nous réalisons des simulations personnalisées permettant de visualiser vos revenus futurs et d'identifier les solutions à mettre en place dès aujourd'hui."
    },
    prevoyance: {
      title: "4. Prévoyance / Protection de la famille",
      introText: "La retraite ne se limite pas à l'épargne : il faut aussi protéger sa famille.",
      protectionTypes: [
        "Contrats de prévoyance",
        "Maintien du niveau de vie",
        "Couverture santé"
      ],
      conclusion: "👉 Azalée Patrimoine propose une approche intégrée : anticiper les risques de la vie pour sécuriser la transmission et la stabilité financière de la famille."
    },
    autresSolutions: {
      title: "5. Autres solutions retraite",
      introText: "En complément du PER et des dispositifs d'entreprise :",
      solutions: [
        "Immobilier locatif",
        "SCPI de rendement",
        "Assurance-vie",
        "Produits financiers"
      ],
      objective: "👉 Objectif : créer une retraite sur-mesure, adaptée à vos besoins et à votre horizon."
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      const response = await fetch('/api/pages/retraite');
      const data = await response.json();
      
      if (data.success && data.content) {
        // Merge CMS content with default content
        const mergedContent = { ...defaultContent };
        Object.keys(data.content).forEach(sectionId => {
          if (mergedContent[sectionId]) {
            mergedContent[sectionId] = { ...mergedContent[sectionId], ...data.content[sectionId] };
          }
        });
        
        setContent(mergedContent);
        setContentSource('database');
        console.log('Retraite content loaded from CMS:', mergedContent);
      } else {
        setContent(defaultContent);
        setContentSource('default');
        console.log('Using default retraite content');
      }
    } catch (error) {
      console.error('Error loading retraite content from CMS:', error);
      setContent(defaultContent);
      setContentSource('default');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContentFromCMS();
    
    // Set up polling for real-time updates
    const interval = setInterval(loadContentFromCMS, 3000);
    
    // Listen for custom events from CMS
    const handleContentUpdate = () => {
      loadContentFromCMS();
    };
    
    window.addEventListener('cmsContentUpdated', handleContentUpdate);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('cmsContentUpdated', handleContentUpdate);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4EBBBD] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du contenu...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      
      {/* Content Source Indicator */}
      {contentSource === 'database' && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          Content: CMS Database
        </div>
      )}
      
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[228px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={content.hero?.backgroundImage || "/images/retraite.webp"}
            alt="Couple senior consultant un plan de retraite dans un bureau moderne"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log('Retraite hero image failed to load:', e.target.src);
            }}
            onLoad={() => console.log('Retraite hero image loaded successfully')}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#243E5F] via-[#243E5F]/80 to-transparent"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="w-full lg:w-[792px]">
            {/* Breadcrumb Navigation */}
            <div className="mb-4 sm:mb-6">
              <nav className="flex items-center text-white text-xs sm:text-sm">
                <span className="hover:text-[#4EBBBD] transition-colors cursor-pointer">Accueil</span>
                <span className="mx-2">{'>'}</span>
                <span className="text-[#4EBBBD]">Retraite {'>'} Préparer sa retraite</span>
              </nav>
            </div>
            
            {/* Main Title */}
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal uppercase leading-tight mb-2 sm:mb-4 max-w-[580px]">
              {content.hero?.title || "Préparer sa retraite avec Azalee Wealth"}
            </h1>
            
            {/* Subtitle */}
            <p className="text-white text-xs sm:text-sm opacity-80 uppercase mb-4 sm:mb-6">
              {content.hero?.subtitle || "PX2 - FR0003500008 - Euronext Paris"}
            </p>
            
            {/* Market Indicator */}
            <div className="text-[#4EBBBD] text-xs sm:text-sm font-medium">
              Cours CAC 40
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Data Section */}
      <StockTicker />

      {/* Introduction Retraite Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              {content.intro?.title || "Retraite – Préparez vos revenus futurs avec sérénité"}
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4">Introduction</h3>
                <p className="text-[#374151] text-sm font-inter mb-4">
                  {content.intro?.introText || "La retraite est un moment clé de la vie patrimoniale : passage d'un revenu d'activité à un revenu de remplacement."}
                </p>
                <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-4 text-white">
                  <p className="text-sm">
                    {content.intro?.introHighlight || "👉 Anticiper, c'est éviter la baisse de niveau de vie et protéger sa famille."}
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4">
                  {content.intro?.accompanimentTitle || "Azalée Patrimoine accompagne ses clients dans une vision globale de la retraite :"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {(content.intro?.accompanimentList || []).slice(0, 2).map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-[#59E2E4] mt-1">•</span>
                        <span className="text-[#374151] text-sm font-inter">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {(content.intro?.accompanimentList || []).slice(2).map((item, index) => (
                      <div key={index + 2} className="flex items-start gap-3">
                        <span className={`${index === 0 ? 'text-[#B99066]' : index === 1 ? 'text-[#B99066]' : 'text-[#4EBBBD]'} mt-1`}>•</span>
                        <span className="text-[#374151] text-sm font-inter">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan retraite Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
            {content.planRetraite?.title || "1. Plan retraite (PER, PERP, PEE, PERCO…)"}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* PER */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4 text-center">
                {content.planRetraite?.perTitle || "PER (Plan Épargne Retraite – loi Pacte)"}
              </h3>
              <p className="text-[#374151] text-sm font-inter mb-4">
                {content.planRetraite?.perDescription || "L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83."}
              </p>
              <ul className="text-[#374151] text-sm font-inter space-y-2">
                {(content.planRetraite?.perFeatures || []).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
            
            {/* PERCO / PEE */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4 text-center">
                {content.planRetraite?.percoTitle || "PERCO / PEE"}
              </h3>
              <p className="text-[#374151] text-sm font-inter mb-4">
                {content.planRetraite?.percoDescription || "Dispositifs d'épargne entreprise alimentés par participation, intéressement, abondement."}
              </p>
              <p className="text-[#374151] text-sm font-inter">
                {content.planRetraite?.oldEnvelopes || "Anciennes enveloppes (PERP, Madelin, Art. 83) : transférables vers le PER."}
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-6 text-white text-center">
            <p className="text-sm">
              {content.planRetraite?.conclusion || "👉 Azalée Patrimoine analyse chaque situation pour choisir le meilleur véhicule d'épargne retraite, en tenant compte de la fiscalité, du statut (salarié, TNS, dirigeant) et des objectifs."}
            </p>
          </div>
        </div>
      </section>

      {/* Rachat de Trimestres Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
            {content.rachatTrimestres?.title || "2. Rachat de trimestres retraite"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {(content.rachatTrimestres?.benefits || []).map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{index === 0 ? '📅' : index === 1 ? '💰' : '📊'}</span>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg">{benefit}</h3>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-lg p-6 text-white text-center">
            <p className="text-sm">
              {content.rachatTrimestres?.example || "👉 Exemple : un cadre de 50 ans qui rachète 4 trimestres peut gagner jusqu'à 200 € de pension mensuelle supplémentaire."}
            </p>
          </div>
        </div>
      </section>

      {/* Simulation Retraite Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
            {content.simulation?.title || "3. Simulation retraite"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {(content.simulation?.steps || []).map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg">{step}</h3>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-6 text-white text-center">
            <p className="text-sm">
              {content.simulation?.conclusion || "👉 Chez Azalée Patrimoine, nous réalisons des simulations personnalisées permettant de visualiser vos revenus futurs et d'identifier les solutions à mettre en place dès aujourd'hui."}
            </p>
          </div>
        </div>
      </section>

      {/* Prévoyance Protection Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
            {content.prevoyance?.title || "4. Prévoyance / Protection de la famille"}
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
            <p className="text-[#374151] text-sm font-inter mb-6 text-center">
              {content.prevoyance?.introText || "La retraite ne se limite pas à l'épargne : il faut aussi protéger sa famille."}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(content.prevoyance?.protectionTypes || []).map((type, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">{index === 0 ? '🛡️' : index === 1 ? '🏠' : '🏥'}</span>
                  </div>
                  <h3 className="text-[#005C69] font-cairo font-semibold text-lg">{type}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-lg p-6 text-white text-center">
            <p className="text-sm">
              {content.prevoyance?.conclusion || "👉 Azalée Patrimoine propose une approche intégrée : anticiper les risques de la vie pour sécuriser la transmission et la stabilité financière de la famille."}
            </p>
          </div>
        </div>
      </section>

      {/* Autres Solutions Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
            {content.autresSolutions?.title || "5. Autres solutions retraite"}
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
            <p className="text-[#374151] text-sm font-inter mb-6 text-center">
              {content.autresSolutions?.introText || "En complément du PER et des dispositifs d'entreprise :"}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(content.autresSolutions?.solutions || []).map((solution, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">{index === 0 ? '🏘️' : index === 1 ? '📈' : index === 2 ? '💼' : '📊'}</span>
                  </div>
                  <h3 className="text-[#005C69] font-cairo font-semibold text-lg">{solution}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#3A9B9D] rounded-lg p-6 text-white text-center">
            <p className="text-sm">
              {content.autresSolutions?.objective || "👉 Objectif : créer une retraite sur-mesure, adaptée à vos besoins et à votre horizon."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}