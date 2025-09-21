"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function LoiDenormandiePage() {
  const [content, setContent] = useState({});
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(false);
  const [contentSource, setContentSource] = useState('Default');
  const [pollingInterval, setPollingInterval] = useState(null);

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Loi Denormandie",
      subtitle: "Relancer la rénovation dans les centres-villes anciens",
      description: "La loi Denormandie offre la même réduction d'impôt que Pinel, mais pour de l'ancien avec travaux. Un dispositif fiscal attractif pour investisseurs actifs ou appuyés par un bon promoteur, fiscalement efficace mais technique.",
      button: "En savoir plus",
      image: "/images/loi-denormandie-hero.jpg"
    },
    overview: {
      title: "Présentation de la loi Denormandie",
      description: "La loi Denormandie est un dispositif de défiscalisation qui permet de réduire ses impôts en investissant dans la rénovation de logements anciens situés dans des zones de revitalisation urbaine. Elle vise à relancer la rénovation dans les centres-villes anciens.",
      keyPoints: [
        "Même réduction d'impôt que Pinel",
        "Mais pour de l'ancien avec travaux",
        "Travaux = ≥ 25% du coût total",
        "Location nue à loyer plafonné"
      ]
    },
    benefits: {
      title: "Avantages fiscaux",
      benefits: [
        {
          title: "Réduction d'impôt",
          description: "12% du montant investi par an pendant 9 ans",
          percentage: "12%"
        },
        {
          title: "Plafond d'investissement",
          description: "300 000€ par an",
          amount: "300k€"
        },
        {
          title: "Durée d'engagement",
          description: "9 ans minimum",
          duration: "9 ans"
        }
      ]
    },
    conditions: {
      title: "Conditions d'éligibilité",
      description: "Pour bénéficier de la Loi Denormandie, plusieurs conditions doivent être respectées :",
      points: [
        "Bien situé dans une zone de revitalisation urbaine",
        "Travaux représentant au moins 25% du coût total",
        "Location nue à loyer plafonné",
        "Engagement de location de 9 ans minimum"
      ]
    },
    cta: {
      title: "Besoin d'aide pour votre investissement ?",
      description: "Nos experts vous accompagnent dans votre projet d'investissement avec la Loi Denormandie.",
      buttonText: "Demander une consultation gratuite"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      setIsLoadingFromDatabase(true);
      const response = await fetch('/api/pages/loi-denormandie');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          setContent(data.content);
          setContentSource('Database');
          console.log('✅ Loi Denormandie content loaded from database');
        } else {
          setContent(defaultContent);
          setContentSource('Default');
          console.log('⚠️ No database content found, using default');
        }
      } else {
        setContent(defaultContent);
        setContentSource('Default');
        console.log('❌ Failed to load from database, using default');
      }
    } catch (error) {
      console.error('Error loading loi-denormandie content:', error);
      setContent(defaultContent);
      setContentSource('Default');
    } finally {
      setIsLoadingFromDatabase(false);
    }
  };

  useEffect(() => {
    // Set default content first
    setContent(defaultContent);
    
    // Load content from CMS
    loadContentFromCMS();
    
    // Start polling after initial load
    const interval = setInterval(() => {
      loadContentFromCMS();
    }, 30000); // Poll every 30 seconds
    
    setPollingInterval(interval);
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const handleManualReload = () => {
    loadContentFromCMS();
  };

  return (
    <>
      {/* Loading indicator */}
      {isLoadingFromDatabase && (
        <div className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-spin"></div>
          Loading from Database...
        </div>
      )}
      
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E8] via-[#D7E8FF] to-[#FFEFD5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {content.hero?.subtitle || defaultContent.hero.subtitle}
              </p>
              <p className="text-gray-600 mb-8">
                {content.hero?.description || defaultContent.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#4EBBBD] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors">
                  {content.hero?.button || defaultContent.hero.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.overview?.title || defaultContent.overview.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.overview?.description || defaultContent.overview.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(content.overview?.keyPoints || defaultContent.overview.keyPoints).map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-lg font-semibold text-gray-900">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.benefits?.title || defaultContent.benefits.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.benefits?.benefits || defaultContent.benefits.benefits).map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-[#4EBBBD] mb-4">
                  {benefit.percentage || benefit.amount || benefit.duration}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.conditions?.title || defaultContent.conditions.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.conditions?.description || defaultContent.conditions.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(content.conditions?.points || defaultContent.conditions.points).map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="text-[#4EBBBD] mr-3 mt-1">✓</div>
                  <div className="text-lg font-semibold text-gray-900">{point}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4EBBBD]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {content.cta?.title || defaultContent.cta.title}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            {content.cta?.description || defaultContent.cta.description}
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            {content.cta?.buttonText || defaultContent.cta.buttonText}
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}