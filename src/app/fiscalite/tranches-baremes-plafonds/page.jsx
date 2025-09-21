"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function TranchesBaremesPlafondsPage() {
  const [content, setContent] = useState({});
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(false);
  const [contentSource, setContentSource] = useState('Default');
  const [pollingInterval, setPollingInterval] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedSituation, setSelectedSituation] = useState("celibataire");

  const years = ["2025", "2024", "2023"];
  const situations = [
    { id: "celibataire", label: "Célibataire", parts: 1 },
    { id: "marie", label: "Marié(e)/Pacsé(e)", parts: 2 },
    { id: "avec-enfants", label: "Avec enfants", parts: 2.5 }
  ];

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Tranches, Barèmes et Plafonds",
      subtitle: "Comprendre la fiscalité française",
      description: "Les tranches d'imposition, barèmes et plafonds sont les éléments fondamentaux du système fiscal français. Ils déterminent le montant de vos impôts et influencent vos stratégies d'investissement.",
      button: "Calculer mes impôts",
      image: "/images/fiscalite-tranches-hero.jpg"
    },
    tranches: {
      title: "Tranches d'imposition 2025",
      description: "Les tranches d'imposition déterminent le taux appliqué à chaque partie de vos revenus",
      tableau: {
        headers: ["Revenu imposable", "Taux d'imposition"],
        rows: [
          { revenu: "Jusqu'à 11 294 €", taux: "0 %" },
          { revenu: "De 11 295 à 28 797 €", taux: "11 %" },
          { revenu: "De 28 798 à 82 341 €", taux: "30 %" },
          { revenu: "De 82 342 à 177 106 €", taux: "41 %" },
          { revenu: "Au-delà de 177 106 €", taux: "45 %" }
        ]
      }
    },
    plafonds: {
      title: "Plafonds fiscaux 2025",
      description: "Les plafonds limitent les avantages fiscaux de certains dispositifs",
      items: [
        {
          name: "Loi Pinel",
          plafond: "300 000€",
          description: "Plafond annuel d'investissement"
        },
        {
          name: "PER",
          plafond: "10% du revenu",
          description: "Plafond de versement annuel"
        },
        {
          name: "Déficit foncier",
          plafond: "10 700€",
          description: "Plafond annuel déductible"
        }
      ]
    },
    calculatrice: {
      title: "Calculateur d'impôts",
      description: "Estimez le montant de vos impôts selon votre situation",
      fields: [
        { id: "revenus", label: "Revenus annuels", placeholder: "50000" },
        { id: "parts", label: "Nombre de parts", placeholder: "1" }
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
      const response = await fetch('/api/pages/tranches-baremes-plafonds');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          setContent(data.content);
          setContentSource('Database');
          console.log('✅ Tranches & Barèmes content loaded from database');
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
      console.error('Error loading tranches-baremes-plafonds content:', error);
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
        <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
          Source: {contentSource}
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E8] via-[#D7E8FF] to-[#FFEFD5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Tranches & Barèmes
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
                  alt="Tranches & Barèmes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tranches Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.tranches?.title || defaultContent.tranches.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.tranches?.description || defaultContent.tranches.description}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  {(content.tranches?.tableau?.headers || defaultContent.tranches.tableau.headers).map((header, index) => (
                    <th key={index} className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(content.tranches?.tableau?.rows || defaultContent.tranches.tableau.rows).map((row, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.revenu}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.taux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Plafonds Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.plafonds?.title || defaultContent.plafonds.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.plafonds?.description || defaultContent.plafonds.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.plafonds?.items || defaultContent.plafonds.items).map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-[#4EBBBD] mb-3">{item.plafond}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculateur Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.calculatrice?.title || defaultContent.calculatrice.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {content.calculatrice?.description || defaultContent.calculatrice.description}
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {(content.calculatrice?.fields || defaultContent.calculatrice.fields).map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type="number"
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
              ))}
            </div>
            <button className="w-full bg-[#4EBBBD] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors">
              Calculer mes impôts
            </button>
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