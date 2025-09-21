"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function SimulationPage() {
  const [content, setContent] = useState({});
  const [contentSource, setContentSource] = useState('default');
  const [loading, setLoading] = useState(true);

  // Default content
  const defaultContent = {
    hero: {
      title: "Simulation retraite",
      subtitle: "Anticipez vos revenus futurs et identifiez les solutions à mettre en place dès aujourd'hui pour préparer votre retraite en toute sérénité."
    },
    chart: {
      data: [
        { label: "État des lieux", value: "Droits acquis" },
        { label: "Projection", value: "Revenus futurs" },
        { label: "Comparaison", value: "Niveau souhaité" },
        { label: "Plan d'épargne", value: "Solutions" },
        { label: "Simulations", value: "Personnalisées" }
      ]
    },
    etapes: {
      title: "Étapes de simulation",
      steps: [
        {
          title: "État des lieux",
          description: "Droits acquis (base + complémentaires)",
          icon: "📋"
        },
        {
          title: "Projection",
          description: "Revenus à la retraite",
          icon: "📈"
        },
        {
          title: "Comparaison",
          description: "Niveau de vie souhaité",
          icon: "⚖️"
        },
        {
          title: "Plan d'épargne",
          description: "Solutions à mettre en place",
          icon: "💼"
        }
      ]
    },
    conseil: {
      title: "Conseil Azalée Patrimoine",
      pillars: [
        {
          title: "Analyse complète",
          description: "État des lieux de votre situation retraite",
          icon: "🔍"
        },
        {
          title: "Simulations personnalisées",
          description: "Projections selon vos objectifs",
          icon: "📊"
        },
        {
          title: "Solutions sur-mesure",
          description: "Plan d'épargne adapté à votre profil",
          icon: "🎯"
        },
        {
          title: "Suivi régulier",
          description: "Révision et ajustement de votre stratégie",
          icon: "📈"
        }
      ]
    },
    cta: {
      title: "Prêt à simuler votre retraite ?",
      subtitle: "Nos experts réalisent des simulations personnalisées pour visualiser vos revenus futurs et identifier les solutions optimales.",
      buttonText: "Demander une simulation gratuite"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      const response = await fetch('/api/pages/simulation');
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
        console.log('Simulation content loaded from CMS:', mergedContent);
      } else {
        setContent(defaultContent);
        setContentSource('default');
        console.log('Using default simulation content');
      }
    } catch (error) {
      console.error('Error loading simulation content from CMS:', error);
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
              {content.hero?.title || "Simulation retraite"}
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              {content.hero?.subtitle || "Anticipez vos revenus futurs et identifiez les solutions à mettre en place dès aujourd'hui pour préparer votre retraite en toute sérénité."}
            </p>
          </div>
          
          {/* Étapes de simulation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {(content.etapes?.steps || []).map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-[#112033] text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-[#686868] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Processus de simulation retraite
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Visualisez les étapes clés pour anticiper vos revenus futurs
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-2xl p-8 sm:p-12">
            <PlacementChart data={content.chart?.data || defaultContent.chart.data} />
          </div>
        </div>
      </section>

      {/* Étapes détaillées Section */}
      <section className="w-full bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Notre méthodologie de simulation
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Une approche structurée pour analyser votre situation retraite
            </p>
          </div>
          
          <div className="space-y-8">
            {(content.etapes?.steps || []).map((step, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">{step.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-3">{step.title}</h3>
                    <p className="text-[#686868] text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions d'épargne Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Solutions d'épargne retraite
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Les outils pour compléter vos revenus de retraite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-[#FFEFD5] to-[#D7E8FF] rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">PER</h3>
              <p className="text-[#686868] text-sm">Plan Épargne Retraite</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#FFEFD5] to-[#D7E8FF] rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">PERCO</h3>
              <p className="text-[#686868] text-sm">Plan Épargne Retraite Collectif</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#FFEFD5] to-[#D7E8FF] rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏘️</span>
              </div>
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">Immobilier</h3>
              <p className="text-[#686868] text-sm">Investissement locatif</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#FFEFD5] to-[#D7E8FF] rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">Assurance-vie</h3>
              <p className="text-[#686868] text-sm">Épargne à long terme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conseil Section */}
      <section className="w-full bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.conseil?.title || "Conseil Azalée Patrimoine"}
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Notre expertise pour vous accompagner dans la préparation de votre retraite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.conseil?.pillars || []).map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{pillar.icon}</span>
                </div>
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">{pillar.title}</h3>
                <p className="text-[#686868] text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#4EBBBD] to-[#3A9B9D] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            {content.cta?.title || "Prêt à simuler votre retraite ?"}
          </h2>
          <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {content.cta?.subtitle || "Nos experts réalisent des simulations personnalisées pour visualiser vos revenus futurs et identifier les solutions optimales."}
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-full font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors">
            {content.cta?.buttonText || "Demander une simulation gratuite"}
          </button>
        </div>
      </section>
    </>
  );
}