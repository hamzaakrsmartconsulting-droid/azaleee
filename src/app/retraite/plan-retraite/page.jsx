"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function PlanRetraitePage() {
  const [content, setContent] = useState({});
  const [contentSource, setContentSource] = useState('default');
  const [loading, setLoading] = useState(true);

  // Default content
  const defaultContent = {
    hero: {
      title: "Plan retraite (PER, PERP, PEE, PERCO…)",
      subtitle: "L'épargne retraite est un pilier essentiel de votre stratégie patrimoniale. Découvrez les solutions adaptées à votre statut et vos objectifs."
    },
    chart: {
      data: [
        { label: "PER - Enveloppe universelle", value: "100%" },
        { label: "Versements déductibles", value: "€10,000" },
        { label: "Sortie en rente/capital", value: "Mixte" },
        { label: "Sortie anticipée", value: "Possible" },
        { label: "Transfert anciennes enveloppes", value: "✓" }
      ]
    },
    per: {
      title: "PER (Plan Épargne Retraite – loi Pacte)",
      description: "L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83.",
      features: [
        "Avantage fiscal immédiat (versements déductibles)",
        "Sortie en rente, capital ou mixte",
        "Sortie anticipée possible (résidence principale, accident de la vie)"
      ]
    },
    percoPee: {
      title: "PERCO / PEE",
      description: "Dispositifs d'épargne entreprise alimentés par participation, intéressement, abondement.",
      info: "Anciennes enveloppes (PERP, Madelin, Art. 83) : transférables vers le PER."
    },
    conseil: {
      title: "Conseil Azalée Patrimoine",
      items: [
        "Analyse de votre situation (salarié, TNS, dirigeant)",
        "Optimisation fiscale selon votre statut",
        "Choix du meilleur véhicule d'épargne retraite",
        "Stratégie globale de préparation à la retraite"
      ]
    },
    cta: {
      title: "Prêt à optimiser votre épargne retraite ?",
      subtitle: "Nos conseillers vous accompagnent dans le choix des solutions les plus adaptées à votre situation.",
      buttonText: "Demander un conseil personnalisé"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      const response = await fetch('/api/pages/plan-retraite');
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
        console.log('Plan-retraite content loaded from CMS:', mergedContent);
      } else {
        setContent(defaultContent);
        setContentSource('default');
        console.log('Using default plan-retraite content');
      }
    } catch (error) {
      console.error('Error loading plan-retraite content from CMS:', error);
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
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              {content.hero?.title || "Plan retraite (PER, PERP, PEE, PERCO…)"}
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              {content.hero?.subtitle || "L'épargne retraite est un pilier essentiel de votre stratégie patrimoniale. Découvrez les solutions adaptées à votre statut et vos objectifs."}
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">PER</h3>
              <p className="text-[#686868] text-sm">
                {content.per?.description || "L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83"}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">PERCO / PEE</h3>
              <p className="text-[#686868] text-sm">
                {content.percoPee?.description || "Dispositifs d'épargne entreprise alimentés par participation, intéressement, abondement"}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Transfert</h3>
              <p className="text-[#686868] text-sm">
                {content.percoPee?.info || "Anciennes enveloppes (PERP, Madelin, Art. 83) : transférables vers le PER"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Comparatif des solutions d'épargne retraite
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Visualisez les caractéristiques principales de chaque dispositif pour faire le meilleur choix
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-2xl p-8 sm:p-12">
            <PlacementChart data={content.chart?.data || defaultContent.chart.data} />
          </div>
        </div>
      </section>

      {/* PER Details Section */}
      <section className="w-full bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.per?.title || "PER (Plan Épargne Retraite – loi Pacte)"}
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              {content.per?.description || "L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">Avantages du PER</h3>
              <ul className="space-y-4">
                {(content.per?.features || []).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#4EBBBD] mt-1">✓</span>
                    <span className="text-[#686868]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">Points clés</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <span className="text-[#686868]">Enveloppe universelle depuis 2019</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <span className="text-[#686868]">Flexibilité maximale</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <span className="text-[#686868]">Transfert des anciens contrats</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseil Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.conseil?.title || "Conseil Azalée Patrimoine"}
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Notre expertise pour optimiser votre stratégie d'épargne retraite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.conseil?.items || []).map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#FFEFD5] to-[#D7E8FF] rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{index === 0 ? '📊' : index === 1 ? '💰' : index === 2 ? '🎯' : '📈'}</span>
                </div>
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#4EBBBD] to-[#3A9B9D] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            {content.cta?.title || "Prêt à optimiser votre épargne retraite ?"}
          </h2>
          <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {content.cta?.subtitle || "Nos conseillers vous accompagnent dans le choix des solutions les plus adaptées à votre situation."}
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-full font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors">
            {content.cta?.buttonText || "Demander un conseil personnalisé"}
          </button>
        </div>
      </section>
    </>
  );
}