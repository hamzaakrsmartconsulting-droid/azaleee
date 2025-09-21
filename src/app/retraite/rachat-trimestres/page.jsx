"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function RachatTrimestresPage() {
  const [content, setContent] = useState({});
  const [contentSource, setContentSource] = useState('default');
  const [loading, setLoading] = useState(true);

  // Default content
  const defaultContent = {
    hero: {
      title: "Optimiser sa retraite par le rachat de trimestres",
      subtitle: "Le rachat de trimestres est un dispositif qui permet à un assuré de compléter ses périodes manquantes de cotisation (années d'études, années incomplètes…) afin de partir plus tôt à taux plein ou améliorer le montant de sa pension de retraite.",
      highlight: "👉 Mais attention : ce mécanisme doit s'analyser au cas par cas.",
      buttons: [
        { text: "Simuler mon rachat", type: "primary" },
        { text: "En savoir plus", type: "secondary" }
      ]
    },
    chart: {
      data: [
        { label: "Coût moyen par trimestre", value: "€4,000" },
        { label: "Trimestres rachetables", value: "12 max" },
        { label: "Gain pension mensuel", value: "€200" },
        { label: "Âge légal départ", value: "64 ans" },
        { label: "Déductibilité fiscale", value: "100%" }
      ]
    },
    departTauxPlein: {
      title: "Départ à taux plein",
      description: "Le rachat permet de partir à taux plein sans décote, même avant l'âge légal de départ à la retraite."
    },
    casUtiles: {
      title: "Cas où le rachat est utile",
      cases: [
        "Années d'études supérieures",
        "Années incomplètes de cotisation",
        "Périodes de chômage",
        "Années à l'étranger"
      ]
    },
    alternatives: {
      title: "Alternatives au rachat",
      alternatives: [
        "Continuer à travailler",
        "Optimiser les autres revenus",
        "Solutions d'épargne retraite"
      ]
    },
    limites: {
      title: "Limites du rachat",
      limites: [
        "Coût élevé",
        "Rentabilité à évaluer",
        "Conditions d'âge"
      ]
    },
    exempleChiffre: {
      title: "Exemple chiffré",
      example: "👉 Exemple : un cadre de 50 ans qui rachète 4 trimestres peut gagner jusqu'à 200 € de pension mensuelle supplémentaire."
    },
    faq: {
      title: "Questions fréquentes",
      questions: [
        {
          question: "Quel est le coût du rachat ?",
          answer: "Le coût varie selon l'âge et le salaire. Il faut calculer la rentabilité."
        },
        {
          question: "Combien de trimestres peut-on racheter ?",
          answer: "Maximum 12 trimestres, sous certaines conditions."
        }
      ]
    },
    conseil: {
      title: "Conseil Azalée Patrimoine",
      pillars: [
        {
          title: "Analyse personnalisée",
          description: "Étude de votre situation spécifique",
          icon: "🔍"
        },
        {
          title: "Calcul de rentabilité",
          description: "Simulation des gains potentiels",
          icon: "📊"
        },
        {
          title: "Optimisation globale",
          description: "Intégration dans votre stratégie retraite",
          icon: "🎯"
        }
      ]
    },
    resume: {
      title: "En résumé",
      points: [
        "Le rachat de trimestres peut être intéressant",
        "Mais il faut calculer la rentabilité",
        "Azalée Patrimoine vous accompagne dans cette analyse"
      ]
    },
    cta: {
      title: "Prêt à analyser votre situation ?",
      subtitle: "Nos experts calculent la rentabilité du rachat de trimestres pour votre situation spécifique.",
      buttonText: "Demander une analyse personnalisée"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      const response = await fetch('/api/pages/rachat-trimestres');
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
        console.log('Rachat-trimestres content loaded from CMS:', mergedContent);
      } else {
        setContent(defaultContent);
        setContentSource('default');
        console.log('Using default rachat-trimestres content');
      }
    } catch (error) {
      console.error('Error loading rachat-trimestres content from CMS:', error);
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
                {content.hero?.title || "Optimiser sa retraite par le rachat de trimestres"}
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                {content.hero?.subtitle || "Le rachat de trimestres est un dispositif qui permet à un assuré de compléter ses périodes manquantes de cotisation (années d'études, années incomplètes…) afin de partir plus tôt à taux plein ou améliorer le montant de sa pension de retraite."}
              </p>
              <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg mb-8">
                <p className="text-[#112033] text-sm">
                  {content.hero?.highlight || "👉 Mais attention : ce mécanisme doit s'analyser au cas par cas."}
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
            
            {/* Right: Quick Calculator */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                  Qu'est-ce que le rachat de trimestres ?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <span className="text-[#686868] text-sm">Compléter ses périodes manquantes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <span className="text-[#686868] text-sm">Partir plus tôt à taux plein</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <span className="text-[#686868] text-sm">Améliorer le montant de sa pension</span>
                  </div>
                </div>
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
              Indicateurs clés du rachat de trimestres
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Visualisez les paramètres importants pour évaluer l'intérêt du rachat
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-2xl p-8 sm:p-12">
            <PlacementChart data={content.chart?.data || defaultContent.chart.data} />
          </div>
        </div>
      </section>

      {/* Départ à taux plein Section */}
      <section className="w-full bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.departTauxPlein?.title || "Départ à taux plein"}
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              {content.departTauxPlein?.description || "Le rachat permet de partir à taux plein sans décote, même avant l'âge légal de départ à la retraite."}
            </p>
          </div>
        </div>
      </section>

      {/* Cas utiles Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.casUtiles?.title || "Cas où le rachat est utile"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.casUtiles?.cases || []).map((cas, index) => (
              <div key={index} className="bg-gradient-to-br from-[#FFEFD5] to-[#D7E8FF] rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{index === 0 ? '🎓' : index === 1 ? '📚' : index === 2 ? '💼' : '🌍'}</span>
                </div>
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold">{cas}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternatives Section */}
      <section className="w-full bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.alternatives?.title || "Alternatives au rachat"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.alternatives?.alternatives || []).map((alternative, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{index === 0 ? '💼' : index === 1 ? '💰' : '📈'}</span>
                </div>
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold">{alternative}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limites Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.limites?.title || "Limites du rachat"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.limites?.limites || []).map((limite, index) => (
              <div key={index} className="bg-gradient-to-br from-[#FFE5E5] to-[#FFCCCC] rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{index === 0 ? '💰' : index === 1 ? '📊' : '⏰'}</span>
                </div>
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold">{limite}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemple chiffré Section */}
      <section className="w-full bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#3A9B9D] rounded-2xl p-8 text-center">
            <h2 className="text-white text-2xl font-cairo font-semibold mb-6">
              {content.exempleChiffre?.title || "Exemple chiffré"}
            </h2>
            <p className="text-white text-lg">
              {content.exempleChiffre?.example || "👉 Exemple : un cadre de 50 ans qui rachète 4 trimestres peut gagner jusqu'à 200 € de pension mensuelle supplémentaire."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.faq?.title || "Questions fréquentes"}
            </h2>
          </div>
          
          <div className="space-y-6">
            {(content.faq?.questions || []).map((faq, index) => (
              <div key={index} className="bg-[#F8F9FA] rounded-2xl p-6">
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">{faq.question}</h3>
                <p className="text-[#686868]">{faq.answer}</p>
              </div>
            ))}
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
              Notre expertise pour analyser l'intérêt du rachat de trimestres
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Résumé Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.resume?.title || "En résumé"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.resume?.points || []).map((point, index) => (
              <div key={index} className="bg-gradient-to-br from-[#FFEFD5] to-[#D7E8FF] rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <p className="text-[#112033] text-lg font-source-sans font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#4EBBBD] to-[#3A9B9D] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            {content.cta?.title || "Prêt à analyser votre situation ?"}
          </h2>
          <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {content.cta?.subtitle || "Nos experts calculent la rentabilité du rachat de trimestres pour votre situation spécifique."}
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-full font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors">
            {content.cta?.buttonText || "Demander une analyse personnalisée"}
          </button>
        </div>
      </section>
    </>
  );
}