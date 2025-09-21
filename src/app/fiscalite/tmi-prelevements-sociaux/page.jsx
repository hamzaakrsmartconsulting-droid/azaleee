"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function TmiPrelevementsSociauxPage() {
  const [content, setContent] = useState({});
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(false);
  const [contentSource, setContentSource] = useState('Default');
  const [pollingInterval, setPollingInterval] = useState(null);

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Tranche Marginale d'Imposition (TMI) + Prélèvements sociaux",
      subtitle: "Ce que tout investisseur doit comprendre",
      description: "La fiscalité des placements dépend en grande partie de votre Tranche Marginale d'Imposition (TMI). Couplée aux prélèvements sociaux (17,2%), elle conditionne le rendement net de vos investissements.",
      button: "Calculer ma TMI",
      image: "/images/fiscalite-tmi-hero.jpg"
    },
    definition: {
      title: "Qu'est-ce que la TMI ?",
      description: "La TMI correspond au taux d'imposition marginal auquel sont soumis vos derniers euros de revenu imposable.",
      tableau: {
        headers: ["Revenu imposable (2024)", "Taux TMI"],
        rows: [
          { revenu: "Jusqu'à 11 294 €", taux: "0 %" },
          { revenu: "De 11 295 à 28 797 €", taux: "11 %" },
          { revenu: "De 28 798 à 82 341 €", taux: "30 %" },
          { revenu: "De 82 342 à 177 106 €", taux: "41 %" },
          { revenu: "Au-delà de 177 106 €", taux: "45 %" }
        ]
      },
      precision: "Il s'agit d'un taux marginal, et non global : seule la fraction de revenu correspondante est taxée à ce taux."
    },
    prelevementsSociaux: {
      title: "Prélèvements sociaux (17,2%)",
      description: "Les prélèvements sociaux s'ajoutent à l'impôt sur le revenu pour certains placements",
      details: [
        "CSG (Contribution Sociale Généralisée) : 9,2%",
        "CRDS (Contribution au Remboursement de la Dette Sociale) : 0,5%",
        "Prélèvement social : 7,5%",
        "Total : 17,2%"
      ]
    },
    impact: {
      title: "Impact sur vos investissements",
      description: "La TMI et les prélèvements sociaux déterminent le rendement net de vos placements",
      examples: [
        {
          title: "Placement à 4% avec TMI 30%",
          description: "Rendement net : 4% - (4% × 30%) - (4% × 17,2%) = 2,11%"
        },
        {
          title: "Placement à 4% avec TMI 41%",
          description: "Rendement net : 4% - (4% × 41%) - (4% × 17,2%) = 1,67%"
        }
      ]
    },
    cta: {
      title: "Besoin d'aide pour optimiser votre fiscalité ?",
      description: "Nos experts vous accompagnent pour comprendre et optimiser votre situation fiscale.",
      buttonText: "Demander une consultation gratuite"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      setIsLoadingFromDatabase(true);
      const response = await fetch('/api/pages/tmi-prelevements-sociaux');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          setContent(data.content);
          setContentSource('Database');
          console.log('✅ TMI & Prélèvements Sociaux content loaded from database');
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
      console.error('Error loading tmi-prelevements-sociaux content:', error);
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
          Debug
        </button>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E8] via-[#D7E8FF] to-[#FFEFD5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                TMI & Prélèvements Sociaux
              </span>
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
                  lien manquant
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={content.hero?.image || defaultContent.hero.image} 
                  alt="TMI & Prélèvements Sociaux"
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
          </div>
          
          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  {(content.definition?.tableau?.headers || defaultContent.definition.tableau.headers).map((header, index) => (
                    <th key={index} className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(content.definition?.tableau?.rows || defaultContent.definition.tableau.rows).map((row, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.revenu}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.taux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 italic">
              {content.definition?.precision || defaultContent.definition.precision}
            </p>
          </div>
        </div>
      </section>

      {/* Prélèvements Sociaux Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.prelevementsSociaux?.title || defaultContent.prelevementsSociaux.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.prelevementsSociaux?.description || defaultContent.prelevementsSociaux.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(content.prelevementsSociaux?.details || defaultContent.prelevementsSociaux.details).map((detail, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-lg font-semibold text-gray-900">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.impact?.title || defaultContent.impact.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.impact?.description || defaultContent.impact.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(content.impact?.examples || defaultContent.impact.examples).map((example, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{example.title}</h3>
                <p className="text-gray-600">{example.description}</p>
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