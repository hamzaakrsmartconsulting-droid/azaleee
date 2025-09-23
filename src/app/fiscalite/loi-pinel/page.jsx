"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function LoiPinelPage() {
  const [content, setContent] = useState({});
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(false);
  const [contentSource, setContentSource] = useState('Default');
  const [pollingInterval, setPollingInterval] = useState(null);

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Loi Pinel",
      subtitle: "Investir dans le neuf pour réduire ses impôts",
      description: "La loi Pinel est un dispositif de défiscalisation qui permet de réduire ses impôts en investissant dans l'immobilier neuf locatif. Elle offre une réduction d'impôt de 12% du montant investi par an pendant 9 ans.",
      button: "En savoir plus",
      image: "/images/loi-pinel-hero.jpg"
    },
    overview: {
      title: "Présentation de la loi Pinel",
      description: "La loi Pinel est un dispositif de défiscalisation qui permet de réduire ses impôts en investissant dans l'immobilier neuf locatif. Elle vise à stimuler la construction de logements neufs et à favoriser l'investissement locatif.",
      keyPoints: [
        "Réduction d'impôt de 12% par an",
        "Investissement dans le neuf uniquement",
        "Engagement de location de 9 ans",
        "Plafond de 300 000€ par an"
      ]
    },
    benefits: {
      title: "Avantages fiscaux",
      benefits: [
        {
          title: "Réduction d'impôt",
          description: "12% du montant investi par an",
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
      description: "Pour bénéficier de la Loi Pinel, plusieurs conditions doivent être respectées :",
      points: [
        "Investissement dans un bien neuf",
        "Location à usage d'habitation principale",
        "Engagement de location de 9 ans minimum",
        "Respect des plafonds de loyer"
      ]
    },
    cta: {
      title: "Besoin d'aide pour votre investissement ?",
      description: "Nos experts vous accompagnent dans votre projet d'investissement avec la Loi Pinel.",
      buttonText: "Demander une consultation gratuite"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      setIsLoadingFromDatabase(true);
      const response = await fetch('/api/pages/loi-pinel');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          setContent(data.content);
          setContentSource('Database');
          console.log('✅ Loi Pinel content loaded from database');
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
      console.error('Error loading loi-pinel content:', error);
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
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E8] via-[#D7E8FF] to-[#FFEFD5] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                {content.hero?.subtitle || defaultContent.hero.subtitle}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                {content.hero?.description || defaultContent.hero.description}
              </p>
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
            lien manquant
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}