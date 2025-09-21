"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function AutreFiscalitePage() {
  const [content, setContent] = useState({});
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(false);
  const [contentSource, setContentSource] = useState('Default');
  const [pollingInterval, setPollingInterval] = useState(null);

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Autres sujets fiscaux",
      subtitle: "Découvrez d'autres aspects de la fiscalité française : ISF, taxe foncière, droits de succession, et bien plus encore.",
      button: "Explorer la fiscalité",
      image: "/images/fiscalite-autres-sujets-hero.jpg"
    },
    sujets: {
      title: "Sujets fiscaux divers",
      items: [
        {
          nom: "Impôt sur la Fortune Immobilière (IFI)",
          description: "Taxe sur le patrimoine immobilier net",
          details: ["Seuil : 1,3 million d'euros", "Taux progressif de 0,5% à 1,5%", "Déclaration annuelle obligatoire"]
        },
        {
          nom: "Taxe foncière",
          description: "Taxe annuelle sur les propriétés bâties et non bâties",
          details: ["Calcul basé sur la valeur locative", "Paiement en octobre", "Possibilité de déduction"]
        },
        {
          nom: "Droits de succession",
          description: "Taxe sur la transmission du patrimoine",
          details: ["Abrattements selon le lien familial", "Taux progressifs", "Optimisation possible"]
        },
        {
          nom: "Taxe d'habitation",
          description: "Taxe résidentielle (supprimée pour la résidence principale)",
          details: ["Maintien pour résidences secondaires", "Calcul selon la valeur locative", "Exonérations possibles"]
        }
      ]
    },
    optimisations: {
      title: "Optimisations fiscales",
      items: [
        {
          strategie: "Donation",
          description: "Transmission anticipée du patrimoine",
          avantages: ["Abrattements renouvelables", "Réduction des droits", "Transmission progressive"]
        },
        {
          strategie: "Assurance-vie",
          description: "Transmission optimisée du capital",
          avantages: ["Exonération partielle", "Plafond 152 500€", "Transmission hors succession"]
        },
        {
          strategie: "SCPI",
          description: "Investissement immobilier indirect",
          avantages: ["Diversification", "Gestion déléguée", "Liquidité"]
        }
      ]
    },
    cta: {
      title: "Besoin d'informations sur d'autres sujets fiscaux ?",
      subtitle: "Nos experts vous accompagnent sur tous les aspects de la fiscalité française",
      primaryButton: "Consultation gratuite",
      secondaryButton: "Guide complet"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      setIsLoadingFromDatabase(true);
      const response = await fetch('/api/pages/autre-fiscalite');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          setContent(data.content);
          setContentSource('Database');
          console.log('✅ Autre-fiscalite content loaded from database');
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
      console.error('Error loading autre-fiscalite content:', error);
      setContent(defaultContent);
      setContentSource('Default');
    } finally {
      setIsLoadingFromDatabase(false);
    }
  };

  // Reload content manually
  const reloadContent = async () => {
    await loadContentFromCMS();
  };

          {isLoadingFromDatabase && (
            <div className="flex items-center gap-1 text-blue-600">
              <div className="animate-spin w-3 h-3 border border-blue-600 border-t-transparent rounded-full"></div>
              <span>Loading...</span>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={reloadContent}
            className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
          >
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E8] via-[#D7E8FF] to-[#FFEFD5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Fiscalité diversifiée
              </span>
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-[#686868] text-lg leading-relaxed mb-8">
                {content.hero?.subtitle || defaultContent.hero.subtitle}
              </p>
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                lien manquant
              </button>
            </div>
            <div className="relative">
              <img 
                src={content.hero?.image || defaultContent.hero.image} 
                alt="Autres sujets fiscaux" 
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sujets Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.sujets?.title || defaultContent.sujets.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(content.sujets?.items || defaultContent.sujets.items).map((sujet, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 shadow-lg">
                <h3 className="text-[#112033] text-lg font-semibold mb-3">{sujet.nom}</h3>
                <p className="text-[#686868] text-sm mb-4">{sujet.description}</p>
                <ul className="space-y-2">
                  {(sujet.details || []).map((detail, idx) => (
                    <li key={idx} className="text-[#112033] text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#4EBBBD] rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimisations Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.optimisations?.title || defaultContent.optimisations.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(content.optimisations?.items || defaultContent.optimisations.items).map((optimisation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-[#112033] text-lg font-semibold mb-3">{optimisation.strategie}</h3>
                <p className="text-[#686868] text-sm mb-4">{optimisation.description}</p>
                <ul className="space-y-2">
                  {(optimisation.avantages || []).map((avantage, idx) => (
                    <li key={idx} className="text-[#112033] text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#4EBBBD] rounded-full"></span>
                      {avantage}
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
                lien manquant
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                lien manquant
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 