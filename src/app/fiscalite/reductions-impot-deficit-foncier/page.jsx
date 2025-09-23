"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function ReductionsImpotDeficitFoncierPage() {
  const [content, setContent] = useState({});
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(false);
  const [contentSource, setContentSource] = useState('Default');
  const [pollingInterval, setPollingInterval] = useState(null);

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Déficit foncier et réductions d'impôt",
      subtitle: "Un levier fiscal puissant pour investisseurs avertis",
      description: "Pour les investisseurs disposant de revenus fonciers imposables ou d'une tranche marginale d'imposition (TMI) élevée, le déficit foncier permet une double optimisation : réduction de l'impôt sur le revenu et diminution des prélèvements sociaux (CSG/CRDS à 17,2%) sur les revenus fonciers.",
      button: "Calculer mon déficit foncier",
      image: "/images/fiscalite-deficit-foncier-hero.jpg"
    },
    quickStats: {
      title: "Chiffres clés",
      stats: [
        { label: "Déficit foncier", value: "10 700€", description: "Plafond annuel déductible" },
        { label: "Report", value: "10 ans", description: "Sur revenus fonciers" },
        { label: "Rendement fiscal", value: "58%", description: "TMI 41% + CSG/CRDS" }
      ]
    },
    comparison: {
      title: "Réduction d'impôt ou déduction du revenu ?",
      description: "Comprendre la différence entre les deux mécanismes fiscaux",
      table: {
        headers: ["Mécanisme", "Effet fiscal", "Bénéfice"],
        rows: [
          {
            mecanisme: "Réduction d'impôt",
            effet: "Soustraction directe de l'impôt à payer",
            benefice: "1 000 € réduits = 1 000 € gagnés"
          },
          {
            mecanisme: "Déficit foncier",
            effet: "Diminution de la base imposable",
            benefice: "Effet amplifié selon la TMI + économie de CSG/CRDS"
          }
        ]
      }
    },
    investorProfile: {
      title: "Qui peut en profiter ?",
      description: "Le déficit foncier s'adresse à des investisseurs spécifiques",
      profiles: [
        "Propriétaires de biens locatifs déjà imposables au régime réel (hors micro-foncier)",
        "Contribuables avec une TMI élevée (30% ou plus)",
        "Investisseurs souhaitant valoriser des biens anciens avec travaux"
      ]
    },
    conditions: {
      title: "Conditions pour créer un déficit foncier",
      description: "Les conditions spécifiques à respecter pour bénéficier du déficit foncier",
      conditions: [
        "Bien en location nue (non meublée), soumis au régime réel",
        "Travaux éligibles : entretien, réparation, amélioration",
        "Pas d'agrandissement ni de construction neuve",
        "Travaux réellement payés et effectués avant d'être mis en location"
      ]
    },
    cta: {
      title: "Besoin d'aide pour optimiser votre fiscalité ?",
      description: "Nos experts vous accompagnent dans votre stratégie de déficit foncier et réductions d'impôt.",
      buttonText: "Demander une consultation gratuite"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      setIsLoadingFromDatabase(true);
      const response = await fetch('/api/pages/reductions-impot-deficit-foncier');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          setContent(data.content);
          setContentSource('Database');
          console.log('✅ Réductions d\'impôt content loaded from database');
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
      console.error('Error loading reductions-impot-deficit-foncier content:', error);
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
      <section className="relative w-full bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-lg text-white mb-4 leading-relaxed">
                {content.hero?.subtitle || defaultContent.hero.subtitle}
              </p>
              <p className="text-white mb-8">
                {content.hero?.description || defaultContent.hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#253F60] mb-4">
              {content.quickStats?.title || defaultContent.quickStats.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.quickStats?.stats || defaultContent.quickStats.stats).map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center border border-[#B99066]">
                <div className="text-4xl font-bold text-[#B99066] mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-[#253F60] mb-2">{stat.label}</div>
                <div className="text-[#686868]">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#253F60] mb-4">
              {content.comparison?.title || defaultContent.comparison.title}
            </h2>
            <p className="text-lg text-[#686868] max-w-3xl mx-auto mb-8">
              {content.comparison?.description || defaultContent.comparison.description}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#253F60]">
                <tr>
                  {(content.comparison?.table?.headers || defaultContent.comparison.table.headers).map((header, index) => (
                    <th key={index} className="px-6 py-4 text-left text-sm font-semibold text-white">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(content.comparison?.table?.rows || defaultContent.comparison.table.rows).map((row, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4 text-sm font-medium text-[#253F60]">{row.mecanisme}</td>
                    <td className="px-6 py-4 text-sm text-[#686868]">{row.effet}</td>
                    <td className="px-6 py-4 text-sm text-[#686868]">{row.benefice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Investor Profile Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#253F60] mb-4">
              {content.investorProfile?.title || defaultContent.investorProfile.title}
            </h2>
            <p className="text-lg text-[#686868] max-w-3xl mx-auto mb-8">
              {content.investorProfile?.description || defaultContent.investorProfile.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.investorProfile?.profiles || defaultContent.investorProfile.profiles).map((profile, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-[#253F60]">
                <div className="flex items-start">
                  <div className="text-[#B99066] mr-3 mt-1">✓</div>
                  <div className="text-lg font-semibold text-[#253F60]">{profile}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#253F60] mb-4">
              {content.conditions?.title || defaultContent.conditions.title}
            </h2>
            <p className="text-lg text-[#686868] max-w-3xl mx-auto mb-8">
              {content.conditions?.description || defaultContent.conditions.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(content.conditions?.conditions || defaultContent.conditions.conditions).map((condition, index) => (
              <div key={index} className="bg-[#253F60] p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="text-white mr-3 mt-1">✓</div>
                  <div className="text-lg font-semibold text-white">{condition}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#253F60] to-[#B99066]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {content.cta?.title || defaultContent.cta.title}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            {content.cta?.description || defaultContent.cta.description}
          </p>
          <button 
            onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
            className="bg-[#B99066] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#A67A5A] transition-colors"
          >
            Prendre rendez-vous
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}