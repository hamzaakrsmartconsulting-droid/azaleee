"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function PFUPage() {
  const [content, setContent] = useState({});

  // Default content structure
  const defaultContent = {
    hero: {
      title: "PFU ou Prélèvement Forfaitaire Unique",
      subtitle: "Tout ce qu'un investisseur doit savoir. Le Prélèvement Forfaitaire Unique (PFU), aussi appelé « flat tax », est une mécanique fiscale clé depuis 2018. Voici une note pédagogique pour tout comprendre.",
      button: "Calculer mon PFU",
      image: "/images/pfu.webp"
    },
    definition: {
      title: "Qu'est-ce que le PFU ?",
      description: "Il s'agit d'un prélèvement unique de 30% qui s'applique aux revenus du capital mobilier :",
      details: [
        "12,8% d'impôt sur le revenu",
        "17,2% de prélèvements sociaux (CSG/CRDS, etc.)",
        "Le PFU est appliqué automatiquement par les banques, compagnies d'assurance et plateformes d'investissement"
      ]
    },
    creation: {
      title: "Pourquoi a-t-il été créé ?",
      description: "Mis en place par la loi de finances 2018, le PFU avait deux objectifs :",
      objectifs: [
        "Simplifier la fiscalité du capital pour les contribuables",
        "Rendre la France plus attractive pour l'investissement (notamment international)"
      ]
    },
    application: {
      title: "À quoi s'applique le PFU ?",
      description: "Le PFU s'applique aux revenus du capital mobilier :",
      revenus: [
        "Dividendes d'actions",
        "Coupons d'obligations",
        "Plus-values de cession de valeurs mobilières",
        "Intérêts de comptes sur livret",
        "Revenus de placements financiers"
      ]
    },
    avantages: {
      title: "Avantages du PFU",
      description: "Pourquoi choisir le PFU ?",
      points: [
        "Simplicité : un seul taux de 30%",
        "Prévisibilité : pas de surprise fiscale",
        "Automatique : prélevé à la source",
        "Compétitif : souvent plus avantageux que le barème progressif"
      ]
    },
    inconvenients: {
      title: "Inconvénients du PFU",
      description: "Les limites à connaître :",
      points: [
        "Pas de déduction des frais",
        "Pas de report des moins-values",
        "Taux fixe : pas d'optimisation possible",
        "Obligatoire : pas de choix pour certains revenus"
      ]
    },
    simulation: {
      title: "Simulation PFU vs Barème progressif",
      description: "Comparaison pour un revenu de 10 000€",
      scenarios: [
        {
          revenu: "10 000€",
          pfu: "3 000€ (30%)",
          barème: "Variable selon TMI",
          conseil: "Le PFU est souvent plus avantageux pour les TMI élevés"
        }
      ]
    },
    cta: {
      title: "Besoin d'aide pour optimiser votre fiscalité ?",
      description: "Nos experts vous accompagnent pour choisir entre PFU et barème progressif selon votre situation.",
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
      <section className="relative w-full bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-lg text-white mb-8 leading-relaxed">
                {content.hero?.subtitle || defaultContent.hero.subtitle}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={content.hero?.image || defaultContent.hero.image} 
                  alt="PFU - Prélèvement Forfaitaire Unique"
                  className="w-full h-full object-cover"
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
            <div className="bg-[#B99066] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl inline-block">
              <div className="text-xl sm:text-2xl font-bold">30%</div>
              <div className="text-xs sm:text-sm">Taux unique</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(content.definition?.details || defaultContent.definition.details).map((detail, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl text-center border border-[#253F60]">
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#253F60]">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creation Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#253F60] mb-3 sm:mb-4">
              {content.creation?.title || defaultContent.creation.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#686868] max-w-3xl mx-auto mb-6 sm:mb-8">
              {content.creation?.description || defaultContent.creation.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {(content.creation?.objectifs || defaultContent.creation.objectifs).map((objectif, index) => (
              <div key={index} className="bg-[#253F60] p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2">{objectif}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#253F60] mb-3 sm:mb-4">
              {content.application?.title || defaultContent.application.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#686868] max-w-3xl mx-auto mb-6 sm:mb-8">
              {content.application?.description || defaultContent.application.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(content.application?.revenus || defaultContent.application.revenus).map((revenu, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl text-center border border-[#B99066]">
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#253F60]">{revenu}</div>
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
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center border border-[#B99066]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white text-sm sm:text-lg font-bold">{index + 1}</span>
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#253F60]">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inconvénients Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#253F60] mb-3 sm:mb-4">
              {content.inconvenients?.title || defaultContent.inconvenients.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#686868] max-w-3xl mx-auto mb-6 sm:mb-8">
              {content.inconvenients?.description || defaultContent.inconvenients.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {(content.inconvenients?.points || defaultContent.inconvenients.points).map((point, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl text-center border border-[#253F60]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white text-sm sm:text-lg font-bold">{index + 1}</span>
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#253F60]">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#253F60] mb-3 sm:mb-4">
              {content.simulation?.title || defaultContent.simulation.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#686868] max-w-3xl mx-auto mb-6 sm:mb-8">
              {content.simulation?.description || defaultContent.simulation.description}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            {(content.simulation?.scenarios || defaultContent.simulation.scenarios).map((scenario, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
                <div className="bg-[#B99066] text-white p-3 sm:p-4 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium mb-1">Revenu</div>
                  <div className="text-lg sm:text-xl font-bold">{scenario.revenu}</div>
                </div>
                <div className="bg-white border border-[#253F60] p-3 sm:p-4 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium mb-1">PFU</div>
                  <div className="text-lg sm:text-xl font-bold text-[#253F60]">{scenario.pfu}</div>
                </div>
                <div className="bg-white border border-[#253F60] p-3 sm:p-4 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium mb-1">Barème</div>
                  <div className="text-lg sm:text-xl font-bold text-[#253F60]">{scenario.barème}</div>
                </div>
                <div className="bg-white border border-[#B99066] p-3 sm:p-4 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium mb-1">Conseil</div>
                  <div className="text-xs sm:text-sm text-[#686868]">{scenario.conseil}</div>
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