"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function AutrePatrimoinePage() {
  const [content, setContent] = useState({});
  const [contentSource, setContentSource] = useState('default');
  const [loading, setLoading] = useState(true);

  // Default content
  const defaultContent = {
    hero: {
      title: "Autres solutions patrimoniales",
      subtitle: "En dehors des placements classiques (immobilier, assurance-vie, produits financiers), il existe des solutions patrimoniales originales permettant de :",
      benefits: [
        {
          title: "Diversifier son patrimoine",
          description: "Solutions originales et méconnues",
          icon: "🔄"
        },
        {
          title: "Bénéficier d'avantages fiscaux",
          description: "IFI, IR, transmission",
          icon: "💰"
        },
        {
          title: "S'impliquer dans l'économie réelle",
          description: "Agriculture, forêt, vigne",
          icon: "🌱"
        }
      ],
      highlight: "👉 Ces véhicules collectifs sont souvent méconnus, mais peuvent jouer un rôle stratégique dans une gestion patrimoniale équilibrée.",
      buttons: [
        { text: "Découvrir les solutions", type: "primary" },
        { text: "Prendre rendez-vous", type: "secondary" }
      ]
    },
    chart: {
      title: "Indicateurs de solutions alternatives",
      data: [
    { label: "Solutions alternatives", value: "3" },
    { label: "Exonération IFI", value: "75%" },
    { label: "Ticket minimum", value: "€5,000" },
    { label: "Rendement moyen", value: "1-3%" },
    { label: "Avantages fiscaux", value: "Multiples" }
      ],
      chartImage: "/images/variation-chart-image-944f04.png"
    },
    solutions: {
      title: "Les solutions patrimoniales originales",
      solutions: [
        {
          id: "gfa",
          title: "1. GFA",
          subtitle: "Groupement Foncier Agricole",
          icon: "🌾",
          color: "from-[#4EBBBD] to-[#59E2E4]",
          definition: "Société civile permettant de détenir collectivement des terres agricoles, louées à des exploitants.",
          advantages: [
            "Exonération partielle d'IFI (jusqu'à 75%)",
            "Transmission facilitée",
            "Soutien à l'agriculture française"
          ],
          disadvantages: [
            "Rendement faible (1-2%/an)",
            "Liquidité limitée",
            "Dépendance à l'exploitant"
          ],
          ticketMinimum: "À partir de 5 000 à 15 000 € selon les groupements."
        },
        {
          id: "gfi",
          title: "2. GFI",
          subtitle: "Groupement Forestier d'Investissement",
          icon: "🌲",
          color: "from-[#B99066] to-[#D4A574]",
          definition: "Permet d'investir dans des forêts françaises (plantation, exploitation, entretien).",
          advantages: [
            "Exonération d'IFI (jusqu'à 75%)",
            "Rendement potentiel (2-4%/an)",
            "Impact environnemental positif"
          ],
          disadvantages: [
            "Investissement long terme (15-20 ans)",
            "Risque climatique",
            "Gestion forestière complexe"
          ],
          ticketMinimum: "À partir de 10 000 à 25 000 € selon les projets."
        },
        {
          id: "gff",
          title: "3. GFF",
          subtitle: "Groupement Foncier Viticole",
          icon: "🍷",
          color: "from-[#59E2E4] to-[#4EBBBD]",
          definition: "Investissement dans des vignobles français (achat, exploitation, commercialisation).",
          advantages: [
            "Exonération d'IFI (jusqu'à 75%)",
            "Rendement attractif (3-6%/an)",
            "Prestige et passion"
          ],
          disadvantages: [
            "Investissement élevé (50 000 € minimum)",
            "Risque climatique et commercial",
            "Gestion viticole spécialisée"
          ],
          ticketMinimum: "À partir de 50 000 € pour les grands crus."
        }
      ]
    },
    cta: {
      title: "Prêt à découvrir ces solutions ?",
      subtitle: "Nos experts vous accompagnent dans le choix des solutions patrimoniales les plus adaptées à votre profil et vos objectifs.",
      buttonText: "Demander un conseil personnalisé"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      const response = await fetch('/api/pages/patrimoine-autre');
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
        console.log('Patrimoine-autre content loaded from CMS:', mergedContent);
      } else {
        setContent(defaultContent);
        setContentSource('default');
        console.log('Using default patrimoine-autre content');
      }
    } catch (error) {
      console.error('Error loading patrimoine-autre content from CMS:', error);
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
            <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
              {content.hero?.title || "Autres solutions patrimoniales"}
            </h1>
            <p className="text-[#686868] text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              {content.hero?.subtitle || "En dehors des placements classiques (immobilier, assurance-vie, produits financiers), il existe des solutions patrimoniales originales permettant de :"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {(content.hero?.benefits || []).map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">{benefit.icon}</span>
                </div>
                  <h3 className="text-[#112033] font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-[#686868] text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg max-w-4xl mx-auto mb-8">
              <p className="text-[#112033] text-sm font-inter">
                {content.hero?.highlight || "👉 Ces véhicules collectifs sont souvent méconnus, mais peuvent jouer un rôle stratégique dans une gestion patrimoniale équilibrée."}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {(content.hero?.buttons || []).map((button, index) => (
              <button 
                key={index}
                className={`${
                  button.type === 'primary' 
                    ? 'bg-[#B99066] text-white hover:bg-[#A67A5A]' 
                    : 'bg-transparent border-2 border-[#B99066] text-[#B99066] hover:bg-[#B99066] hover:text-white'
                } px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg transition-colors duration-200`}
              >
                {button.text}
            </button>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title={content.chart?.title || "Indicateurs de solutions alternatives"}
        data={content.chart?.data || defaultContent.chart.data}
        chartImage={content.chart?.chartImage || "/images/variation-chart-image-944f04.png"}
      />

      {/* Les 3 solutions patrimoniales Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              {content.solutions?.title || "Les solutions patrimoniales originales"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {(content.solutions?.solutions || []).map((solution, index) => (
              <div key={index} className={`bg-gradient-to-br ${solution.color} rounded-lg shadow-lg p-8 text-white`}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className={`text-2xl ${solution.color.includes('#4EBBBD') ? 'text-[#4EBBBD]' : solution.color.includes('#B99066') ? 'text-[#B99066]' : 'text-[#59E2E4]'}`}>{solution.icon}</span>
                </div>
                  <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-sm font-medium">{solution.subtitle}</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📋 Définition</h4>
                  <p className="text-xs">
                      {solution.definition}
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Avantages</h4>
                  <ul className="text-xs space-y-1">
                      {(solution.advantages || []).map((advantage, advIndex) => (
                        <li key={advIndex}>• {advantage}</li>
                      ))}
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">⚠️ Inconvénients</h4>
                  <ul className="text-xs space-y-1">
                      {(solution.disadvantages || []).map((disadvantage, disIndex) => (
                        <li key={disIndex}>• {disadvantage}</li>
                      ))}
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💰 Ticket minimum</h4>
                  <p className="text-xs">
                      {solution.ticketMinimum}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#4EBBBD] to-[#3A9B9D] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            {content.cta?.title || "Prêt à découvrir ces solutions ?"}
          </h2>
          <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {content.cta?.subtitle || "Nos experts vous accompagnent dans le choix des solutions patrimoniales les plus adaptées à votre profil et vos objectifs."}
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-full font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors">
            {content.cta?.buttonText || "Demander un conseil personnalisé"}
            </button>
        </div>
      </section>
    </>
  );
} 