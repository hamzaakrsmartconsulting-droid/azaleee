"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function DefiscalisationCasSpecifiquesPage() {
  const [content, setContent] = useState({});

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Défiscalisation - Cas spéciaux",
      subtitle: "Découvrez les dispositifs de défiscalisation spécifiques et les situations particulières qui peuvent vous permettre d'optimiser votre fiscalité.",
      button: "Étudier mon cas",
      image: "/images/fiscalite-cas-specifiques-hero.jpg"
    },
    casSpecifiques: {
      title: "Cas spéciaux de défiscalisation",
      items: [
        {
          nom: "Défiscalisation outre-mer",
          description: "Dispositifs spécifiques pour les investissements en outre-mer",
          avantages: ["Réduction jusqu'à 40%", "Investissement plafonné à 300k€", "Engagement 5 ans minimum"],
          conditions: ["Bien situé en outre-mer", "Location à usage d'habitation", "Investissement direct ou SCPI"]
        },
        {
          nom: "Défiscalisation monuments historiques",
          description: "Réduction d'impôt pour la rénovation de monuments classés",
          avantages: ["Réduction jusqu'à 30%", "Plafond 400k€", "Engagement 9 ans minimum"],
          conditions: ["Bien classé ou inscrit", "Rénovation aux normes", "Location 9 ans minimum"]
        },
        {
          nom: "Défiscalisation rénovation énergétique",
          description: "Réduction d'impôt pour les travaux de rénovation énergétique",
          avantages: ["Réduction jusqu'à 30%", "Plafond 8k€", "Engagement 3 ans"],
          conditions: ["Résidence principale", "Travaux énergétiques", "Engagement 3 ans"]
        }
      ]
    },
    situationsParticulieres: {
      title: "Situations particulières",
      items: [
        {
          situation: "Investisseur étranger",
          description: "Fiscalité spécifique pour les non-résidents",
          points: ["Imposition différente", "Conventions fiscales", "Obligations déclaratives"]
        },
        {
          situation: "Expatrié",
          description: "Optimisation fiscale pour les expatriés",
          points: ["Résidence fiscale", "Imposition des revenus", "Défiscalisation à distance"]
        },
        {
          situation: "Retraité",
          description: "Stratégies fiscales pour les retraités",
          points: ["TMI réduit", "Défiscalisation adaptée", "Transmission optimisée"]
        }
      ]
    },
    cta: {
      title: "Votre cas est-il éligible ?",
      subtitle: "Nos experts analysent votre situation pour identifier les dispositifs applicables",
      primaryButton: "Analyse gratuite",
      secondaryButton: "Consultation spécialisée"
    }
  };

  useEffect(() => {
    // Set static content
    setContent(defaultContent);
  }, []);

  return (
    <>

      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#FAFFEF] via-[#E8F5E8] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-[#686868] text-lg leading-relaxed mb-8">
                {content.hero?.subtitle || defaultContent.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cas Spéciaux Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.casSpecifiques?.title || defaultContent.casSpecifiques.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(content.casSpecifiques?.items || defaultContent.casSpecifiques.items).map((cas, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 shadow-lg">
                <h3 className="text-[#112033] text-lg font-semibold mb-3">{cas.nom}</h3>
                <p className="text-[#686868] text-sm mb-4">{cas.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-[#112033] font-medium mb-2 text-green-600">✅ Avantages</h4>
                  <ul className="space-y-1">
                    {(cas.avantages || []).map((avantage, idx) => (
                      <li key={idx} className="text-[#112033] text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {avantage}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[#112033] font-medium mb-2 text-blue-600">📋 Conditions</h4>
                  <ul className="space-y-1">
                    {(cas.conditions || []).map((condition, idx) => (
                      <li key={idx} className="text-[#112033] text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations Particulières Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.situationsParticulieres?.title || defaultContent.situationsParticulieres.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(content.situationsParticulieres?.items || defaultContent.situationsParticulieres.items).map((situation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-[#112033] text-lg font-semibold mb-3">{situation.situation}</h3>
                <p className="text-[#686868] text-sm mb-4">{situation.description}</p>
                <ul className="space-y-2">
                  {(situation.points || []).map((point, idx) => (
                    <li key={idx} className="text-[#112033] text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#4EBBBD] rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F2F2F2] to-[#E5E5E5]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-[#112033] text-2xl lg:text-3xl font-semibold mb-4">
              {content.cta?.title || defaultContent.cta.title}
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              {content.cta?.subtitle || defaultContent.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                {content.cta?.primaryButton || defaultContent.cta.primaryButton}
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                {content.cta?.secondaryButton || defaultContent.cta.secondaryButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 