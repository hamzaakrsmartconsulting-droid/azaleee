"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function LoiMalrauxPage() {
  const [content, setContent] = useState({});

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Loi Malraux",
      subtitle: "Restaurer des biens immobiliers situés dans des secteurs historiques",
      description: "La loi Malraux offre une réduction d'impôt sur le montant des travaux engagés (22 à 30%). Un dispositif fiscal d'excellence pour investisseurs hauts revenus amateurs de pierre de caractère, avec une stratégie de conservation long terme.",
      button: "En savoir plus",
      image: "/images/loi-malraux-hero.jpg"
    },
    overview: {
      title: "Présentation de la loi Malraux",
      description: "La loi Malraux est un dispositif de défiscalisation qui permet de réduire ses impôts en investissant dans la rénovation de monuments historiques classés ou inscrits. Elle vise à restaurer des biens immobiliers situés dans des secteurs historiques.",
      keyPoints: [
        "Réduction d'impôt de 22 à 30%",
        "Sur le montant des travaux engagés",
        "Immeuble situé en SPR, PSMV ou QAD",
        "Travaux encadrés par architecte des Bâtiments de France"
      ]
    },
    benefits: {
      title: "Avantages fiscaux",
      benefits: [
        {
          title: "Réduction d'impôt",
          description: "22 à 30% du montant des travaux",
          percentage: "22-30%"
        },
        {
          title: "Plafond de travaux",
          description: "400 000€ par période de 4 ans",
          amount: "400k€"
        },
        {
          title: "Durée d'engagement",
          description: "9 ans minimum",
          duration: "9 ans"
        }
      ]
    },
    conditions: {
      title: "Conditions d'éligibilité",
      description: "Pour bénéficier de la Loi Malraux, plusieurs conditions doivent être respectées :",
      points: [
        "Immeuble situé en SPR, PSMV ou QAD",
        "Travaux encadrés par architecte des Bâtiments de France",
        "Engagement de location de 9 ans minimum",
        "Respect des normes patrimoniales"
      ]
    },
    cta: {
      title: "Besoin d'aide pour votre investissement ?",
      description: "Nos experts vous accompagnent dans votre projet d'investissement avec la Loi Malraux.",
      buttonText: "Demander une consultation gratuite"
    }
  };

  // Load content from CMS
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
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4 leading-relaxed">
                {content.hero?.subtitle || defaultContent.hero.subtitle}
              </p>
              <p className="text-sm sm:text-base text-white mb-6 sm:mb-8">
                {content.hero?.description || defaultContent.hero.description}
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
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#253F60] mb-3 sm:mb-4">
              {content.overview?.title || defaultContent.overview.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#686868] max-w-3xl mx-auto mb-6 sm:mb-8">
              {content.overview?.description || defaultContent.overview.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {(content.overview?.keyPoints || defaultContent.overview.keyPoints).map((point, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl text-center border border-[#253F60]">
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#253F60]">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#253F60] mb-3 sm:mb-4">
              {content.benefits?.title || defaultContent.benefits.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {(content.benefits?.benefits || defaultContent.benefits.benefits).map((benefit, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#B99066] mb-3 sm:mb-4">
                  {benefit.percentage || benefit.amount || benefit.duration}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#253F60] mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-[#686868]">{benefit.description}</p>
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
              <div key={index} className="bg-[#253F60] p-4 sm:p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="text-white mr-3 mt-1">✓</div>
                  <div className="text-sm sm:text-base lg:text-lg font-semibold text-white">{point}</div>
                </div>
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