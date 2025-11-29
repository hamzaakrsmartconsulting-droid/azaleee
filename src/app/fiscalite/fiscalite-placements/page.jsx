"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function FiscalitePlacementsPage() {
  const [content, setContent] = useState({});

  // Default content structure
const defaultContent = {
  hero: {
    title: "Fiscalité des placements financiers",
    subtitle: "Ce qu'il faut absolument comprendre. La performance d'un placement ne se mesure pas uniquement à son rendement brut. En réalité, c'est le rendement net d'impôt qui détermine l'efficacité de votre stratégie patrimoniale.",
    button: "Simuler mes placements",
    image: "/images/fiscalite-placements-hero.jpg"
  },
  quickStats: {
    title: "Taux de prélèvement",
    stats: [
      { label: "PFU", value: "30%", description: "Prélèvement Forfaitaire Unique" },
      { label: "Prélèvements sociaux", value: "17.2%", description: "CSG, CRDS, etc." },
      { label: "TMI moyen", value: "14%", description: "Taux Marginal d'Imposition" }
    ]
  },
  regimesFiscaux: {
    title: "Les grands régimes fiscaux des placements",
    description: "Comprendre les différences entre les enveloppes fiscales",
    regimes: [
      {
        name: "CTO - Compte-titres ordinaire",
        description: "Support de gestion libre, mais non protégé fiscalement",
        fiscalite: "Flat tax (PFU) de 30% (12,8% IR + 17,2% prél. sociaux)",
        caracteristiques: [
          "Dividendes et coupons soumis à la flat tax",
          "Plus-values avec report des moins-values pendant 10 ans",
          "Fiscalité due chaque année, dès la réalisation",
          "Ouverture possible en personne morale (SCI, holding)"
        ],
        avantages: "Fiscalement neutre mais stratégiquement utile",
        inconvenients: "Arbitrages à court terme, titres non-éligibles au PEA, logique de transmission",
        icon: ""
      },
      {
        name: "PEA - Plan d'Épargne en Actions",
        description: "Enveloppe fiscale fermée, limitée aux actions européennes",
        fiscalite: "Exonération d'IR sur les plus-values après 5 ans",
        caracteristiques: [
          "Réservé aux personnes physiques majeures résidentes fiscales en France",
            "Plafond de versement : 150 000€",
            "Titres éligibles : actions européennes uniquement",
            "Durée de détention : 5 ans minimum"
          ],
          avantages: "Exonération d'IR sur les plus-values après 5 ans",
          inconvenients: "Limitation géographique, plafond de versement",
          icon: ""
        },
        {
          name: "PER - Plan d'Épargne Retraite",
          description: "Enveloppe fiscale pour la retraite",
          fiscalite: "Réduction d'impôt sur les versements",
        caracteristiques: [
            "Réduction d'impôt sur les versements",
            "Sortie en rente ou capital",
            "Plafond : 10% du revenu net imposable",
            "Engagement jusqu'à la retraite"
          ],
          avantages: "Réduction d'impôt immédiate",
          inconvenients: "Blocage des capitaux jusqu'à la retraite",
        icon: ""
      }
    ]
  },
  analysis: {
    title: "Ce qu'il faut absolument analyser avant de choisir",
    description: "Les critères essentiels pour optimiser votre stratégie de placement",
    criteria: [
      {
        title: "Durée de placement visée",
        description: "Fiscalité à court ou long terme ?",
        icon: ""
      },
      {
        title: "Objectif patrimonial",
        description: "Transmission, rente, capital ?",
        icon: ""
      },
      {
        title: "Tranche marginale d'imposition (TMI)",
        description: "L'enveloppe optimale varie selon le profil fiscal",
        icon: ""
      },
      {
        title: "Liquidité / disponibilité",
        description: "Certains supports bloquent les capitaux (PER)",
        icon: ""
      }
    ]
  },
  simulation: {
    title: "Simulation comparative",
    description: "Investissement 100 000€ sur 8 ans, performance brute 20 000€",
    note: "Avec des frais de gestion/fonctionnement moyens estimés à 0,5%/an sur la base du capital investi, soit -4 000€ sur 8 ans :",
    table: {
      headers: ["Enveloppe", "Fiscalité applicable", "Impôt", "Frais estimés", "Gain net final"],
      rows: [
        {
          enveloppe: "CTO",
          fiscalite: "PFU 30%",
          impot: "6 000€",
          frais: "4 000€",
          gain: "10 000€"
        },
        {
          enveloppe: "PEA (>5 ans)",
          fiscalite: "17,2% PS",
          impot: "3 440€",
          frais: "4 000€",
          gain: "12 560€"
        },
        {
            enveloppe: "PER",
            fiscalite: "Réduction IR",
            impot: "0€",
          frais: "4 000€",
            gain: "16 000€"
        }
      ]
    }
  },
  cta: {
      title: "Besoin d'aide pour optimiser vos placements ?",
      description: "Nos experts en fiscalité vous accompagnent pour choisir la meilleure stratégie de placement selon votre profil.",
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
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E8] via-[#D7E8FF] to-[#FFEFD5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {content.hero?.subtitle || defaultContent.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {content.quickStats?.title || defaultContent.quickStats.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.quickStats?.stats || defaultContent.quickStats.stats).map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-[#4EBBBD] mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Régimes Fiscaux Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.regimesFiscaux?.title || defaultContent.regimesFiscaux.title}
          </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.regimesFiscaux?.description || defaultContent.regimesFiscaux.description}
            </p>
                </div>
                
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {(content.regimesFiscaux?.regimes || defaultContent.regimesFiscaux.regimes).map((regime, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">{regime.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{regime.name}</h3>
                <p className="text-gray-600 mb-4">{regime.description}</p>
                <div className="bg-[#4EBBBD] text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {regime.fiscalite}
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Caractéristiques :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {regime.caracteristiques.map((carac, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#4EBBBD] mr-2">•</span>
                          {carac}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">Avantages :</h4>
                    <p className="text-sm text-gray-600">{regime.avantages}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-1">Inconvénients :</h4>
                    <p className="text-sm text-gray-600">{regime.inconvenients}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.analysis?.title || defaultContent.analysis.title}
          </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.analysis?.description || defaultContent.analysis.description}
          </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(content.analysis?.criteria || defaultContent.analysis.criteria).map((criterion, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{criterion.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{criterion.title}</h3>
                <p className="text-gray-600">{criterion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content.simulation?.title || defaultContent.simulation.title}
          </h2>
            <p className="text-lg text-gray-600 mb-4">
              {content.simulation?.description || defaultContent.simulation.description}
          </p>
            <p className="text-sm text-gray-500 italic">
              {content.simulation?.note || defaultContent.simulation.note}
          </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#4EBBBD] text-white">
                  <tr>
                    {(content.simulation?.table?.headers || defaultContent.simulation.table.headers).map((header, index) => (
                      <th key={index} className="px-6 py-4 text-left font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(content.simulation?.table?.rows || defaultContent.simulation.table.rows).map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.enveloppe}</td>
                      <td className="px-6 py-4 text-gray-600">{row.fiscalite}</td>
                      <td className="px-6 py-4 text-gray-600">{row.impot}</td>
                      <td className="px-6 py-4 text-gray-600">{row.frais}</td>
                      <td className="px-6 py-4 font-semibold text-green-600">{row.gain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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