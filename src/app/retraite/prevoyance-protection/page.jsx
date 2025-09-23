"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

// Default content
const defaultContent = {
    hero: {
      title: "Prévoyance / Protection de la famille",
      subtitle: "La retraite ne se limite pas à l'épargne : il faut aussi protéger sa famille.",
      highlight: "Azalée Patrimoine propose une approche intégrée : anticiper les risques de la vie pour sécuriser la transmission et la stabilité financière de la famille.",
      buttons: [
        { text: "Évaluer mes besoins", type: "primary" },
        { text: "Comparer les offres", type: "secondary" }
      ]
    },
    chart: {
      data: [
        { label: "Couverture invalidité", value: "85%" },
        { label: "Maintien niveau de vie", value: "€2,800" },
        { label: "Couverture santé", value: "100%" },
        { label: "Protection famille", value: "Intégrée" },
        { label: "Approche globale", value: "✓" }
      ]
    },
    protectionTypes: {
      title: "Types de protection",
      types: [
        {
          title: "Contrats de prévoyance",
          description: "Invalidité, décès, dépendance",
          icon: "1"
        },
        {
          title: "Maintien du niveau de vie",
          description: "Revenus de remplacement",
          icon: "2"
        },
        {
          title: "Couverture santé",
          description: "Complémentaire santé",
          icon: "3"
        }
      ]
    },
    approcheAzalee: {
      title: "L'approche Azalée Patrimoine",
      pillars: [
        {
          title: "Analyse des risques",
          description: "Identification des vulnérabilités familiales",
          icon: "1"
        },
        {
          title: "Solutions sur-mesure",
          description: "Contrats adaptés à votre situation",
          icon: "2"
        },
        {
          title: "Suivi personnalisé",
          description: "Révision régulière de vos garanties",
          icon: "3"
        },
        {
          title: "Optimisation fiscale",
          description: "Avantages fiscaux et déductibilité",
          icon: "4"
        }
      ]
    },
    cta: {
      title: "Protégez votre famille dès aujourd'hui",
      subtitle: "Nos experts vous accompagnent dans le choix des solutions de protection les plus adaptées à votre situation familiale.",
      buttonText: "Demander une évaluation gratuite"
    }
  };

export default function PrevoyanceProtectionPage() {
  const content = defaultContent;

  return (
    <>
      <Header />
      
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
                {content.hero?.title || "Prévoyance / Protection de la famille"}
              </h1>
              <p className="text-white text-lg font-inter leading-relaxed mb-8">
                {content.hero?.subtitle || "La retraite ne se limite pas à l'épargne : il faut aussi protéger sa famille."}
              </p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-8">
                <p className="text-white text-sm">
                  {content.hero?.highlight || "Azalée Patrimoine propose une approche intégrée : anticiper les risques de la vie pour sécuriser la transmission et la stabilité financière de la famille."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {(content.hero?.buttons || []).map((button, index) => (
                  <button 
                    key={index}
                    className={`${
                      button.type === 'primary' 
                        ? 'bg-[#B99066] text-white hover:bg-[#A67A5A]' 
                        : 'bg-transparent border-2 border-[#B99066] text-[#B99066] hover:bg-[#B99066] hover:text-white'
                    } px-6 py-3 rounded-lg shadow-lg font-inter font-medium transition-colors duration-200`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right: Protection Cards */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(content.protectionTypes?.types || []).map((type, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="w-12 h-12 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl font-bold">{type.icon}</span>
                    </div>
                    <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-2">{type.title}</h3>
                    <p className="text-[#686868] text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              Couverture de protection optimale
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Visualisez les niveaux de protection recommandés pour sécuriser votre famille
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 sm:p-12">
            <PlacementChart data={content.chart?.data || defaultContent.chart.data} />
          </div>
        </div>
      </section>

      {/* Approche Azalée Section */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
              {content.approcheAzalee?.title || "L'approche Azalée Patrimoine"}
            </h2>
            <p className="text-[#686868] text-lg max-w-3xl mx-auto">
              Notre méthodologie pour vous accompagner dans la protection de votre famille
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.approcheAzalee?.pillars || []).map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{pillar.icon}</span>
                </div>
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">{pillar.title}</h3>
                <p className="text-[#686868] text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-[#253F60] to-[#B99066] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            {content.cta?.title || "Protégez votre famille dès aujourd'hui"}
          </h2>
          <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {content.cta?.subtitle || "Nos experts vous accompagnent dans le choix des solutions de protection les plus adaptées à votre situation familiale."}
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