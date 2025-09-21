"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function PrevoyanceProtectionPage() {
  const [content, setContent] = useState({});
  const [contentSource, setContentSource] = useState('default');
  const [loading, setLoading] = useState(true);

  // Default content
  const defaultContent = {
    hero: {
      title: "Prévoyance / Protection de la famille",
      subtitle: "La retraite ne se limite pas à l'épargne : il faut aussi protéger sa famille.",
      highlight: "👉 Azalée Patrimoine propose une approche intégrée : anticiper les risques de la vie pour sécuriser la transmission et la stabilité financière de la famille.",
      buttons: [
        { text: "Évaluer mes besoins", type: "primary" },
        { text: "Comparer les offres", type: "secondary" }
      ]
    },
    chart: {
      data: [
        { label: "Couverture invalidité", value: "85%" },
        { label: "Maintien niveau de vie", value: "€2,800" },
        { label: "Couverture santé", value: "100%" },
        { label: "Protection famille", value: "Intégrée" },
        { label: "Approche globale", value: "✓" }
      ]
    },
    protectionTypes: {
      title: "Types de protection",
      types: [
        {
          title: "Contrats de prévoyance",
          description: "Invalidité, décès, dépendance",
          icon: "🛡️"
        },
        {
          title: "Maintien du niveau de vie",
          description: "Revenus de remplacement",
          icon: "🏠"
        },
        {
          title: "Couverture santé",
          description: "Complémentaire santé",
          icon: "🏥"
        }
      ]
    },
    approcheAzalee: {
      title: "L'approche Azalée Patrimoine",
      pillars: [
        {
          title: "Analyse des risques",
          description: "Identification des vulnérabilités familiales",
          icon: "🔍"
        },
        {
          title: "Solutions sur-mesure",
          description: "Contrats adaptés à votre situation",
          icon: "⚙️"
        },
        {
          title: "Suivi personnalisé",
          description: "Révision régulière de vos garanties",
          icon: "📊"
        },
        {
          title: "Optimisation fiscale",
          description: "Avantages fiscaux et déductibilité",
          icon: "💰"
        }
      ]
    },
    cta: {
      title: "Protégez votre famille dès aujourd'hui",
      subtitle: "Nos experts vous accompagnent dans le choix des solutions de protection les plus adaptées à votre situation familiale.",
      buttonText: "Demander une évaluation gratuite"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      const response = await fetch('/api/pages/prevoyance-protection');
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
        console.log('Prevoyance-protection content loaded from CMS:', mergedContent);
      } else {
        setContent(defaultContent);
        setContentSource('default');
        console.log('Using default prevoyance-protection content');
      }
    } catch (error) {
      console.error('Error loading prevoyance-protection content from CMS:', error);
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
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
                {content.hero?.title || "Prévoyance / Protection de la famille"}
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                {content.hero?.subtitle || "La retraite ne se limite pas à l'épargne : il faut aussi protéger sa famille."}
              </p>
              <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg mb-8">
                <p className="text-[#112033] text-sm">
                  {content.hero?.highlight || "👉 Azalée Patrimoine propose une approche intégrée : anticiper les risques de la vie pour sécuriser la transmission et la stabilité financière de la famille."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {(content.hero?.buttons || []).map((button, index) => (
                  <button 
                    key={index}
                    className={`${
                      button.type === 'primary' 
                        ? 'bg-[#B99066] text-white hover:bg-[#A67A5A]' 
                        : 'bg-transparent border-2 border-[#B99066] text-[#B99066] hover:bg-[#B99066] hover:text-white'
                    } px-6 py-3 rounded-lg shadow-lg font-inter font-medium transition-colors duration-200`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right: Protection Cards */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(content.protectionTypes?.types || []).map((type, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">{type.icon}</span>
                    </div>
                    <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-2">{type.title}</h3>
                    <p className="text-[#686868] text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Couverture de protection optimale
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Visualisez les niveaux de protection recommandés pour sécuriser votre famille
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-2xl p-8 sm:p-12">
            <PlacementChart data={content.chart?.data || defaultContent.chart.data} />
          </div>
        </div>
      </section>

      {/* Approche Azalée Section */}
      <section className="w-full bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.approcheAzalee?.title || "L'approche Azalée Patrimoine"}
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Notre méthodologie pour vous accompagner dans la protection de votre famille
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.approcheAzalee?.pillars || []).map((pillar, index) => (
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
            {content.cta?.title || "Protégez votre famille dès aujourd'hui"}
          </h2>
          <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {content.cta?.subtitle || "Nos experts vous accompagnent dans le choix des solutions de protection les plus adaptées à votre situation familiale."}
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-full font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors">
            {content.cta?.buttonText || "Demander une évaluation gratuite"}
          </button>
        </div>
      </section>
    </>
  );
}