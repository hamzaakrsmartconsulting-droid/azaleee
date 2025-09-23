"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

// Default content
const defaultContent = {
    hero: {
      title: "Plan retraite (PER, PERP, PEE, PERCO…)",
      subtitle: "L'épargne retraite est un pilier essentiel de votre stratégie patrimoniale. Découvrez les solutions adaptées à votre statut et vos objectifs."
    },
    chart: {
      data: [
        { label: "PER - Enveloppe universelle", value: "100%" },
        { label: "Versements déductibles", value: "€10,000" },
        { label: "Sortie en rente/capital", value: "Mixte" },
        { label: "Sortie anticipée", value: "Possible" },
        { label: "Transfert anciennes enveloppes", value: "✓" }
      ]
    },
    per: {
      title: "PER (Plan Épargne Retraite – loi Pacte)",
      description: "L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83.",
      features: [
        "Avantage fiscal immédiat (versements déductibles)",
        "Sortie en rente, capital ou mixte",
        "Sortie anticipée possible (résidence principale, accident de la vie)"
      ]
    },
    percoPee: {
      title: "PERCO / PEE",
      description: "Dispositifs d'épargne entreprise alimentés par participation, intéressement, abondement.",
      info: "Anciennes enveloppes (PERP, Madelin, Art. 83) : transférables vers le PER."
    },
    conseil: {
      title: "Conseil Azalée Patrimoine",
      items: [
        "Analyse de votre situation (salarié, TNS, dirigeant)",
        "Optimisation fiscale selon votre statut",
        "Choix du meilleur véhicule d'épargne retraite",
        "Stratégie globale de préparation à la retraite"
      ]
    },
    cta: {
      title: "Prêt à optimiser votre épargne retraite ?",
      subtitle: "Nos conseillers vous accompagnent dans le choix des solutions les plus adaptées à votre situation.",
      buttonText: "Demander un conseil personnalisé"
    }
  };

export default function PlanRetraitePage() {
  const content = defaultContent;

  return (
    <>
      <Header />
      
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              {content.hero?.title || "Plan retraite (PER, PERP, PEE, PERCO…)"}
            </h1>
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              {content.hero?.subtitle || "L'épargne retraite est un pilier essentiel de votre stratégie patrimoniale. Découvrez les solutions adaptées à votre statut et vos objectifs."}
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-[#253F60] rounded-lg shadow-lg p-8 text-center relative hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="text-white text-2xl relative z-10">1</span>
              </div>
              <h3 className="text-white text-xl font-source-sans font-semibold mb-4">PER</h3>
              <p className="text-white text-sm opacity-90">
                Plan Épargne Retraite
              </p>
            </div>
            
            <div className="bg-[#253F60] rounded-lg shadow-lg p-8 text-center relative hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="text-white text-2xl relative z-10">2</span>
              </div>
              <h3 className="text-white text-xl font-source-sans font-semibold mb-4">PERCO</h3>
              <p className="text-white text-sm opacity-90">
                Plan Épargne Retraite Collectif
              </p>
            </div>
            
            <div className="bg-[#253F60] rounded-lg shadow-lg p-8 text-center relative hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="text-white text-2xl relative z-10">3</span>
              </div>
              <h3 className="text-white text-xl font-source-sans font-semibold mb-4">Immobilier</h3>
              <p className="text-white text-sm opacity-90">
                Investissement locatif
              </p>
            </div>
            
            <div className="bg-[#253F60] rounded-lg shadow-lg p-8 text-center relative hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="text-white text-2xl relative z-10">4</span>
              </div>
              <h3 className="text-white text-xl font-source-sans font-semibold mb-4">Assurance-vie</h3>
              <p className="text-white text-sm opacity-90">
                Épargne à long terme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions d'épargne retraite Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Solutions d'épargne retraite
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Les outils pour compléter vos revenus de retraite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#253F60] rounded-lg shadow-lg p-8 text-center relative hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="text-white text-2xl relative z-10">1</span>
              </div>
              <h3 className="text-white text-xl font-source-sans font-semibold mb-4">PER</h3>
              <p className="text-white text-sm opacity-90">
                Plan Épargne Retraite
              </p>
            </div>
            
            <div className="bg-[#253F60] rounded-lg shadow-lg p-8 text-center relative hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="text-white text-2xl relative z-10">2</span>
              </div>
              <h3 className="text-white text-xl font-source-sans font-semibold mb-4">PERCO</h3>
              <p className="text-white text-sm opacity-90">
                Plan Épargne Retraite Collectif
              </p>
            </div>
            
            <div className="bg-[#253F60] rounded-lg shadow-lg p-8 text-center relative hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="text-white text-2xl relative z-10">3</span>
              </div>
              <h3 className="text-white text-xl font-source-sans font-semibold mb-4">Immobilier</h3>
              <p className="text-white text-sm opacity-90">
                Investissement locatif
              </p>
            </div>
            
            <div className="bg-[#253F60] rounded-lg shadow-lg p-8 text-center relative hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="text-white text-2xl relative z-10">4</span>
              </div>
              <h3 className="text-white text-xl font-source-sans font-semibold mb-4">Assurance-vie</h3>
              <p className="text-white text-sm opacity-90">
                Épargne à long terme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PER Details Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.per?.title || "PER (Plan Épargne Retraite – loi Pacte)"}
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              {content.per?.description || "L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">Avantages du PER</h3>
              <ul className="space-y-4">
                {(content.per?.features || []).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#4EBBBD] mt-1">✓</span>
                    <span className="text-[#686868]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">Points clés</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="text-white text-sm relative z-10">1</span>
                  </div>
                  <span className="text-[#686868]">Enveloppe universelle depuis 2019</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="text-white text-sm relative z-10">2</span>
                  </div>
                  <span className="text-[#686868]">Flexibilité maximale</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="text-white text-sm relative z-10">3</span>
                  </div>
                  <span className="text-[#686868]">Transfert des anciens contrats</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseil Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.conseil?.title || "Conseil Azalée Patrimoine"}
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Notre expertise pour optimiser votre stratégie d'épargne retraite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.conseil?.items || []).map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#A67C52] transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="text-white text-2xl relative z-10">{index + 1}</span>
                </div>
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-[#253F60] to-[#B99066] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            {content.cta?.title || "Prêt à optimiser votre épargne retraite ?"}
          </h2>
          <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {content.cta?.subtitle || "Nos conseillers vous accompagnent dans le choix des solutions les plus adaptées à votre situation."}
          </p>
          <button 
            onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
            className="bg-[#B99066] text-white px-8 py-4 rounded-full font-source-sans font-semibold text-lg hover:bg-[#A67C52] transition-colors"
          >
            Prendre rendez-vous
          </button>
        </div>
      </section>
    </>
  );
}