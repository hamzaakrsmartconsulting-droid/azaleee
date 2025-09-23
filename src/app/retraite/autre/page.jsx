"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

// Default content
const defaultContent = {
    hero: {
      title: "Autres solutions retraite",
      subtitle: "En complément du PER et des dispositifs d'entreprise, découvrez les solutions alternatives pour préparer votre retraite."
    },
    chart: {
      data: [
        { label: "Solutions complémentaires", value: "4" },
        { label: "Immobilier locatif", value: "LMNP" },
        { label: "SCPI rendement", value: "5-7%" },
        { label: "Assurance-vie", value: "8 ans" },
        { label: "Produits financiers", value: "ETF" }
      ]
    },
    solutions: {
      title: "Solutions complémentaires",
      solutions: [
        {
          title: "Immobilier locatif",
          description: "Revenus complémentaires",
          icon: "🏠",
          details: "Investissement locatif avec avantages fiscaux (LMNP, Pinel, etc.)"
        },
        {
          title: "SCPI",
          description: "Rente mutualisée",
          icon: "🏢",
          details: "Sociétés Civiles de Placement Immobilier pour diversifier"
        },
        {
          title: "Assurance-vie",
          description: "Épargne à long terme",
          icon: "🛡️",
          details: "Contrats d'assurance-vie pour optimiser la transmission"
        },
        {
          title: "Produits financiers",
          description: "Diversification",
          icon: "📊",
          details: "ETF, fonds, actions pour équilibrer le portefeuille"
        }
      ]
    },
    objectif: {
      title: "Objectif",
      description: "👉 Objectif : créer une retraite sur-mesure, adaptée à vos besoins et à votre horizon."
    },
    cta: {
      title: "Prêt à diversifier votre épargne retraite ?",
      subtitle: "Nos experts vous accompagnent dans le choix des solutions complémentaires les plus adaptées à votre profil.",
      buttonText: "Demander un conseil personnalisé"
    }
  };

export default function AutreRetraitePage() {
  const content = defaultContent;

  return (
    <>
      <Header />
      
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              {content.hero?.title || "Autres solutions retraite"}
            </h1>
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              {content.hero?.subtitle || "En complément du PER et des dispositifs d'entreprise, découvrez les solutions alternatives pour préparer votre retraite."}
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {(content.solutions?.solutions || []).map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-[#112033] text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-[#686868] text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Panorama des solutions complémentaires
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Visualisez les caractéristiques des différentes solutions d'épargne retraite
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 sm:p-12">
            <PlacementChart data={content.chart?.data || defaultContent.chart.data} />
          </div>
        </div>
      </section>

      {/* Solutions détaillées Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.solutions?.title || "Solutions complémentaires"}
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Découvrez les alternatives pour diversifier votre épargne retraite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(content.solutions?.solutions || []).map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-3">{solution.title}</h3>
                    <p className="text-[#686868] text-lg mb-3">{solution.description}</p>
                    <p className="text-[#686868] text-sm">{solution.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectif Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#253F60] rounded-2xl p-8 text-center">
            <h2 className="text-white text-2xl font-cairo font-semibold mb-6">
              {content.objectif?.title || "Objectif"}
            </h2>
            <p className="text-white text-lg">
              {content.objectif?.description || "Objectif : créer une retraite sur-mesure, adaptée à vos besoins et à votre horizon."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-[#253F60] to-[#B99066] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            {content.cta?.title || "Prêt à diversifier votre épargne retraite ?"}
          </h2>
          <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {content.cta?.subtitle || "Nos experts vous accompagnent dans le choix des solutions complémentaires les plus adaptées à votre profil."}
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