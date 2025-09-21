"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function PFUPage() {
  const [content, setContent] = useState({});
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(false);
  const [contentSource, setContentSource] = useState('Default');
  const [pollingInterval, setPollingInterval] = useState(null);

  // Default content structure
  const defaultContent = {
    hero: {
      title: "PFU ou Prélèvement Forfaitaire Unique",
      subtitle: "Tout ce qu'un investisseur doit savoir. Le Prélèvement Forfaitaire Unique (PFU), aussi appelé « flat tax », est une mécanique fiscale clé depuis 2018. Voici une note pédagogique pour tout comprendre.",
      button: "Calculer mon PFU",
      image: "/images/pfu.webp"
    },
    definition: {
      title: "🔄 Qu'est-ce que le PFU ?",
      description: "Il s'agit d'un prélèvement unique de 30% qui s'applique aux revenus du capital mobilier :",
      details: [
        "12,8% d'impôt sur le revenu",
        "17,2% de prélèvements sociaux (CSG/CRDS, etc.)",
        "Le PFU est appliqué automatiquement par les banques, compagnies d'assurance et plateformes d'investissement"
      ]
    },
    creation: {
      title: "🌐 Pourquoi a-t-il été créé ?",
      description: "Mis en place par la loi de finances 2018, le PFU avait deux objectifs :",
      objectifs: [
        "Simplifier la fiscalité du capital pour les contribuables",
        "Rendre la France plus attractive pour l'investissement (notamment international)"
      ]
    },
    application: {
      title: "📋 À quoi s'applique le PFU ?",
      description: "Le PFU s'applique aux revenus du capital mobilier :",
      revenus: [
        "Dividendes d'actions",
        "Coupons d'obligations",
        "Plus-values de cession de valeurs mobilières",
        "Intérêts de comptes sur livret",
        "Revenus de placements financiers"
      ]
    },
    avantages: {
      title: "✅ Avantages du PFU",
      description: "Pourquoi choisir le PFU ?",
      points: [
        "Simplicité : un seul taux de 30%",
        "Prévisibilité : pas de surprise fiscale",
        "Automatique : prélevé à la source",
        "Compétitif : souvent plus avantageux que le barème progressif"
      ]
    },
    inconvenients: {
      title: "❌ Inconvénients du PFU",
      description: "Les limites à connaître :",
      points: [
        "Pas de déduction des frais",
        "Pas de report des moins-values",
        "Taux fixe : pas d'optimisation possible",
        "Obligatoire : pas de choix pour certains revenus"
      ]
    },
    simulation: {
      title: "🧮 Simulation PFU vs Barème progressif",
      description: "Comparaison pour un revenu de 10 000€",
      scenarios: [
        {
          revenu: "10 000€",
          pfu: "3 000€ (30%)",
          barème: "Variable selon TMI",
          conseil: "Le PFU est souvent plus avantageux pour les TMI élevés"
        }
      ]
    },
    cta: {
      title: "Besoin d'aide pour optimiser votre fiscalité ?",
      description: "Nos experts vous accompagnent pour choisir entre PFU et barème progressif selon votre situation.",
      buttonText: "Demander une consultation gratuite"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      setIsLoadingFromDatabase(true);
      const response = await fetch('/api/pages/pfu');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          setContent(data.content);
          setContentSource('Database');
          console.log('✅ PFU content loaded from database');
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
      console.error('Error loading pfu content:', error);
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
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <button
          onClick={handleManualReload}
          className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
        >
          Reload
        </button>
        <button
          onClick={() => {
            console.log('Current content:', content);
            console.log('Content source:', contentSource);
          }}
          className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600"
        >

      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E8] via-[#D7E8FF] to-[#FFEFD5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Prélèvement Forfaitaire Unique
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {content.hero?.subtitle || defaultContent.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#4EBBBD] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors">
                  {content.hero?.button || defaultContent.hero.button}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={content.hero?.image || defaultContent.hero.image} 
                  alt="PFU - Prélèvement Forfaitaire Unique"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.definition?.title || defaultContent.definition.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.definition?.description || defaultContent.definition.description}
            </p>
            <div className="bg-[#4EBBBD] text-white px-6 py-4 rounded-xl inline-block">
              <div className="text-2xl font-bold">30%</div>
              <div className="text-sm">Taux unique</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(content.definition?.details || defaultContent.definition.details).map((detail, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-lg font-semibold text-gray-900">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.creation?.title || defaultContent.creation.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.creation?.description || defaultContent.creation.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(content.creation?.objectifs || defaultContent.creation.objectifs).map((objectif, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-lg font-semibold text-gray-900 mb-2">{objectif}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.application?.title || defaultContent.application.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.application?.description || defaultContent.application.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(content.application?.revenus || defaultContent.application.revenus).map((revenu, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-lg font-semibold text-gray-900">{revenu}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.avantages?.title || defaultContent.avantages.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.avantages?.description || defaultContent.avantages.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(content.avantages?.points || defaultContent.avantages.points).map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">✅</div>
                <div className="text-lg font-semibold text-gray-900">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inconvénients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.inconvenients?.title || defaultContent.inconvenients.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.inconvenients?.description || defaultContent.inconvenients.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(content.inconvenients?.points || defaultContent.inconvenients.points).map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">❌</div>
                <div className="text-lg font-semibold text-gray-900">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.simulation?.title || defaultContent.simulation.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.simulation?.description || defaultContent.simulation.description}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            {(content.simulation?.scenarios || defaultContent.simulation.scenarios).map((scenario, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="bg-[#4EBBBD] text-white p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">Revenu</div>
                  <div className="text-xl font-bold">{scenario.revenu}</div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">PFU</div>
                  <div className="text-xl font-bold text-gray-900">{scenario.pfu}</div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">Barème</div>
                  <div className="text-xl font-bold text-gray-900">{scenario.barème}</div>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">Conseil</div>
                  <div className="text-sm text-gray-700">{scenario.conseil}</div>
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