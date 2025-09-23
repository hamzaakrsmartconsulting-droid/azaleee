"use client";

import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function SimulationsGeneralesPage() {
  const [cmsContent, setCmsContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load CMS content from database
  useEffect(() => {
    const loadCmsContent = async () => {
      try {
        const response = await fetch(`/api/pages/content?path=/outils/simulations-generales&type=cms`);
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.content) {
            console.log('CMS Content loaded:', data.content);
            const parsedContent = JSON.parse(data.content.content);
            console.log('Parsed CMS Content:', parsedContent);
            setCmsContent(parsedContent);
          } else {
            console.log('No CMS content found in response:', data);
          }
        } else {
          console.log('CMS API response not ok:', response.status);
        }
      } catch (error) {
        console.log('Error loading CMS content:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCmsContent();
  }, []);

  // Default content if CMS content is not available
  const content = cmsContent || {
    hero: {
      title: "Simulations générales",
      subtitle: "Outils de simulation financière et patrimoniale",
      description: "Découvrez nos simulateurs professionnels pour planifier vos investissements, optimiser votre fiscalité et construire votre patrimoine. Des outils précis et adaptés à vos besoins.",
      ctaPrimary: "Commencer une simulation",
      ctaSecondary: "Découvrir nos outils"
    },
    tools: {
      title: "Nos outils de simulation",
      description: "Choisissez l'outil adapté à votre situation",
      items: [
        {
          id: "investissement",
          title: "Simulation d'investissement",
          description: "Calculez la rentabilité de vos placements et optimisez votre stratégie d'investissement",
          icon: "📈",
          features: ["Capitalisation composée", "Comparaison de supports", "Impact fiscal", "Projections long terme"]
        },
        {
          id: "patrimoine",
          title: "Simulation patrimoniale",
          description: "Planifiez la transmission de votre patrimoine et optimisez votre fiscalité",
          icon: "🏛️",
          features: ["Transmission successorale", "Optimisation fiscale", "Stratégies patrimoniales", "Conseils personnalisés"]
        },
        {
          id: "retraite",
          title: "Simulation retraite",
          description: "Préparez votre retraite avec nos outils de projection et d'optimisation",
          icon: "🎯",
          features: ["Projections de retraite", "Optimisation des versements", "Comparaison des produits", "Planification long terme"]
        },
        {
          id: "immobilier",
          title: "Simulation immobilière",
          description: "Évaluez vos investissements immobiliers et optimisez votre rendement",
          icon: "🏠",
          features: ["Rentabilité locative", "Défiscalisation", "Plus-values", "Optimisation fiscale"]
        }
      ]
    },
    methodology: {
      title: "Méthodologie",
      description: "Nos simulations sont basées sur des calculs précis et des données actualisées",
      content: [
        "Tous nos calculs respectent la réglementation française en vigueur",
        "Les taux et barèmes sont mis à jour régulièrement",
        "Les simulations tiennent compte de la fiscalité applicable",
        "Les résultats sont fournis à titre indicatif et ne constituent pas des conseils personnalisés"
      ]
    },
    faq: {
      title: "Questions fréquentes",
      questions: [
        {
          question: "Les simulations sont-elles gratuites ?",
          answer: "Oui, tous nos outils de simulation sont entièrement gratuits et accessibles sans inscription."
        },
        {
          question: "Les résultats sont-ils fiables ?",
          answer: "Nos simulations sont basées sur des calculs précis et des données actualisées, mais restent indicatives."
        },
        {
          question: "Puis-je obtenir des conseils personnalisés ?",
          answer: "Nos simulations vous donnent une base de réflexion. Pour des conseils personnalisés, nous vous recommandons de consulter un professionnel."
        }
      ]
    }
  };

  // Ensure content structure is complete with fallbacks
  const safeContent = {
    hero: {
      title: content.hero?.title || "Simulations générales",
      subtitle: content.hero?.subtitle || "Outils de simulation financière et patrimoniale",
      description: content.hero?.description || "Découvrez nos simulateurs professionnels pour planifier vos investissements et optimiser votre patrimoine.",
      ctaPrimary: content.hero?.ctaPrimary || "Commencer une simulation",
      ctaSecondary: content.hero?.ctaSecondary || "Découvrir nos outils"
    },
    tools: {
      title: content.tools?.title || "Nos outils de simulation",
      description: content.tools?.description || "Choisissez l'outil adapté à votre situation",
      items: content.tools?.items || []
    },
    methodology: {
      title: content.methodology?.title || "Méthodologie",
      description: content.methodology?.description || "Nos simulations sont basées sur des calculs précis",
      content: content.methodology?.content || []
    },
    faq: {
      title: content.faq?.title || "Questions fréquentes",
      questions: content.faq?.questions || []
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4EBBBD] mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement du contenu...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-4">
            {safeContent.hero.title}
          </h1>
          <p className="max-w-3xl mx-auto text-white text-base sm:text-lg font-inter leading-relaxed mb-6">
            {safeContent.hero.description}
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="#outils" className="inline-flex items-center justify-center bg-[#B99066] text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
              {safeContent.hero.ctaPrimary}
            </a>
            <a href="#methodologie" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-white hover:text-[#253F60] transition-colors duration-200">
              {safeContent.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="outils" className="w-full py-12 lg:py-16 bg-[#F2F2F2]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-4">
              {safeContent.tools.title}
            </h2>
            <p className="text-[#686868] text-lg max-w-2xl mx-auto">
              {safeContent.tools.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {safeContent.tools.items.map((tool, index) => (
              <div key={tool.id || index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">{tool.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] text-xl font-source-sans font-semibold">
                      {tool.title}
                    </h3>
                    <p className="text-[#686868] text-sm">
                      {tool.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {tool.features && tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#B99066] rounded-full"></div>
                      <span className="text-[#686868] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Accéder à l'outil
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology and FAQ Section */}
      <section id="methodologie" className="w-full py-12 lg:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-[#F9FAFB] rounded-xl p-6 lg:col-span-2">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">
                {safeContent.methodology.title}
              </h3>
              <p className="text-[#686868] text-sm leading-relaxed mb-4">
                {safeContent.methodology.description}
              </p>
              <ul className="list-disc list-inside text-[#686868] text-sm space-y-2">
                {safeContent.methodology.content.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#F9FAFB] rounded-xl p-6">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">
                {safeContent.faq.title}
              </h3>
              <div className="space-y-4 text-sm">
                {safeContent.faq.questions.map((item, index) => (
                  <div key={index}>
                    <p className="text-[#112033] font-medium mb-1">{item.question}</p>
                    <p className="text-[#686868]">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 lg:py-16 bg-gradient-to-r from-[#112033] to-[#253F60]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white text-2xl sm:text-3xl font-cairo font-semibold mb-4">
            Prêt à optimiser votre patrimoine ?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Utilisez nos outils professionnels pour prendre les meilleures décisions financières et patrimoniales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#A67A5A] transition-colors">
              Découvrir tous nos outils
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#112033] transition-colors">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
