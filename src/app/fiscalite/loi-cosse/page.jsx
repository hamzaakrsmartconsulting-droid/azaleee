"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function LoiCossePage() {
  const [content, setContent] = useState({});

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Loi Cosse",
      subtitle: "Dispositif de défiscalisation pour l'investissement immobilier locatif dans les zones tendues",
      button: "En savoir plus",
      image: "/images/loi-cosse-hero.jpg"
    },
    definition: {
      title: "Qu'est-ce que la Loi Cosse ?",
      description: "La Loi Cosse est un dispositif de défiscalisation qui permet de réduire son impôt sur le revenu en investissant dans l'immobilier locatif dans les zones tendues.",
      details: [
        "Réduction d'impôt de 12% du montant investi",
        "Plafond de 300 000€ par an",
        "Engagement de location de 9 ans minimum",
        "Bien situé dans une zone tendue"
      ]
    },
    conditions: {
      title: "Conditions d'éligibilité",
      description: "Pour bénéficier de la Loi Cosse, plusieurs conditions doivent être respectées :",
      points: [
        "Investissement dans un bien neuf ou en VEFA",
        "Location à usage d'habitation principale",
        "Engagement de location de 9 ans minimum",
        "Bien situé dans une zone tendue"
      ]
    },
    avantages: {
      title: "Avantages du dispositif",
      description: "Les principaux avantages de la Loi Cosse :",
      points: [
        "Réduction d'impôt immédiate",
        "Plafond élevé (300 000€)",
        "Pas de condition de ressources",
        "Compatible avec d'autres dispositifs"
      ]
    },
    cta: {
      title: "Besoin d'aide pour votre investissement ?",
      description: "Nos experts vous accompagnent dans votre projet d'investissement immobilier avec la Loi Cosse.",
      buttonText: "Demander une consultation gratuite"
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
      <section className="relative w-full bg-gradient-to-r from-[#253F60] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white mb-6 sm:mb-8 leading-relaxed">
                {content.hero?.subtitle || defaultContent.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                  className="bg-[#B99066] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-[#A67A5A] transition-colors text-sm sm:text-base"
                >
                  Prendre rendez-vous
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={content.hero?.image || defaultContent.hero.image} 
                  alt="Loi Cosse"
                  className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#253F60] mb-3 sm:mb-4">
              {content.definition?.title || defaultContent.definition.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#686868] max-w-3xl mx-auto mb-6 sm:mb-8">
              {content.definition?.description || defaultContent.definition.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {(content.definition?.details || defaultContent.definition.details).map((detail, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl text-center border border-[#253F60]">
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#253F60]">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#253F60] mb-3 sm:mb-4">
              {content.conditions?.title || defaultContent.conditions.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#686868] max-w-3xl mx-auto mb-6 sm:mb-8">
              {content.conditions?.description || defaultContent.conditions.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {(content.conditions?.points || defaultContent.conditions.points).map((point, index) => (
              <div key={index} className="bg-[#253F60] p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#253F60] mb-3 sm:mb-4">
              {content.avantages?.title || defaultContent.avantages.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#686868] max-w-3xl mx-auto mb-6 sm:mb-8">
              {content.avantages?.description || defaultContent.avantages.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {(content.avantages?.points || defaultContent.avantages.points).map((point, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl text-center border border-[#B99066]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white text-sm sm:text-lg font-bold">{index + 1}</span>
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#253F60]">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#253F60] to-[#B99066]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            {content.cta?.title || defaultContent.cta.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
            {content.cta?.description || defaultContent.cta.description}
          </p>
          <button 
            onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
            className="bg-[#B99066] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-[#A67A5A] transition-colors text-sm sm:text-base"
          >
            Prendre rendez-vous
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}