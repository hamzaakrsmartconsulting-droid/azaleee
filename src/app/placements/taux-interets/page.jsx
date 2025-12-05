"use client";
import React, { useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import PlacementChart from "../../../components/PlacementChart";

export default function TauxInteretsPage() {
  const [activeTab, setActiveTab] = useState("introduction");
  
  const chartData = [
    { label: "Taux directeur BCE", value: "4.50%" },
    { label: "Taux Livret A", value: "3.00%" },
    { label: "Taux crédit immobilier", value: "4.20%" },
    { label: "Inflation actuelle", value: "2.10%" },
    { label: "Capacité emprunt 1%", value: "210 000 €" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
                Taux & Intérêts : comprendre leur impact sur votre patrimoine
            </h1>
              <p className="text-white text-lg font-inter leading-relaxed mb-8">
                Les <strong>taux d'intérêt</strong> influencent directement la vie des épargnants et des investisseurs : ils déterminent le <strong>coût d'un crédit</strong>, le <strong>rendement d'un placement sécurisé</strong>, ou encore la <strong>valorisation de l'immobilier et des marchés financiers</strong>.
              </p>
              <div className="bg-white/20 border-l-4 border-white p-4 rounded-r-lg mb-8">
                <p className="text-white text-sm font-inter">
                  Comprendre les taux, c'est anticiper l'évolution de son patrimoine.
            </p>
          </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Analyser mes placements
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-white hover:text-[#253F60] transition-colors duration-200">
                  En savoir plus
                </button>
              </div>
            </div>
            
            {/* Right: Current Rates Cards */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#1A2F4A] transition-colors duration-300">
                    <span className="text-white text-2xl font-bold">BCE</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">BCE</h3>
                  <p className="text-[#686868] text-sm mb-2">Taux directeur</p>
                  <p className="text-[#B99066] text-xl font-bold">4.50%</p>
                  <p className="text-[#686868] text-xs">Influence toute l'économie</p>
                </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#A67A5A] transition-colors duration-300">
                    <span className="text-white text-2xl font-bold">€</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Livret A</h3>
                  <p className="text-[#686868] text-sm mb-2">Taux réglementé</p>
                  <p className="text-[#B99066] text-xl font-bold">3.00%</p>
                  <p className="text-[#686868] text-xs">Rémunération épargne</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4 hover:from-[#1A2F4A] hover:to-[#A67A5A] transition-colors duration-300">
                    <span className="text-white text-2xl font-bold">H</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Crédit immobilier</h3>
                  <p className="text-[#686868] text-sm mb-2">Taux moyen</p>
                  <p className="text-[#B99066] text-xl font-bold">4.20%</p>
                  <p className="text-[#686868] text-xs">Coût du crédit</p>
                </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#1A2F4A] transition-colors duration-300">
                    <span className="text-white text-2xl font-bold">%</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Inflation</h3>
                  <p className="text-[#686868] text-sm mb-2">Taux actuel</p>
                  <p className="text-[#B99066] text-xl font-bold">2.10%</p>
                  <p className="text-[#686868] text-xs">Érosion pouvoir d'achat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Évolution des taux d'intérêts"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Navigation Tabs */}
      <section className="w-full bg-white py-8">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveTab("introduction")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "introduction" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Introduction
            </button>
            <button 
              onClick={() => setActiveTab("definition")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "definition" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Définition
            </button>
            <button 
              onClick={() => setActiveTab("economie")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "economie" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Taux et économie
            </button>
            <button 
              onClick={() => setActiveTab("epargnant")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "epargnant" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Impact épargnant
            </button>
            <button 
              onClick={() => setActiveTab("placements")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "placements" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Placements
            </button>
            <button 
              onClick={() => setActiveTab("faq")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "faq" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              FAQ
            </button>
            <button 
              onClick={() => setActiveTab("azalee")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "azalee" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Azalée Patrimoine
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "introduction" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  Introduction
                </h2>
                <p className="text-[#686868] text-lg max-w-4xl mx-auto">
                  Les <strong>taux d'intérêt</strong> influencent directement la vie des épargnants et des investisseurs : ils déterminent le <strong>coût d'un crédit</strong>, le <strong>rendement d'un placement sécurisé</strong>, ou encore la <strong>valorisation de l'immobilier et des marchés financiers</strong>.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Pourquoi comprendre les taux ?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Coût du crédit</h4>
                    <p className="text-sm">Immobilier, consommation, entreprise</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Rendement des placements</h4>
                    <p className="text-sm">Livrets, fonds euros, obligations</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Valorisation des actifs</h4>
                    <p className="text-sm">Immobilier et marchés financiers</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm font-semibold">
 Comprendre les taux, c'est anticiper l'évolution de son patrimoine.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "definition" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  Qu'est-ce qu'un taux d'intérêt ?
                </h2>
                <p className="text-[#686868] text-lg max-w-4xl mx-auto">
                  Un taux d'intérêt représente le <strong>prix de l'argent dans le temps</strong>.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-[#112033] text-xl font-semibold mb-6">Pour un emprunteur</h3>
                  <p className="text-[#686868] mb-4">
                    C'est le <strong>coût du crédit</strong> (immobilier, consommation, entreprise).
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">H</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Crédit immobilier</h4>
                        <p className="text-[#686868] text-sm">Coût du financement d'un bien</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">💳</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Crédit consommation</h4>
                        <p className="text-[#686868] text-sm">Financement de biens et services</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#59E2E4] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Crédit entreprise</h4>
                        <p className="text-[#686868] text-sm">Financement de l'activité</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-[#112033] text-xl font-semibold mb-6">Pour un épargnant</h3>
                  <p className="text-[#686868] mb-4">
                    C'est la <strong>rémunération de son épargne</strong> (livrets, fonds euros, obligations).
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Livrets réglementés</h4>
                        <p className="text-[#686868] text-sm">Livret A, LDDS, LEP</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Fonds euros</h4>
                        <p className="text-[#686868] text-sm">Assurance-vie sécurisée</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#59E2E4] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Obligations</h4>
                        <p className="text-[#686868] text-sm">Emprunts d'État et d'entreprise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-lg p-8">
                <h3 className="text-[#112033] text-xl font-semibold mb-6">Types de taux</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Taux directeurs</h4>
                    <p className="text-sm text-[#686868]">Fixés par la BCE ou la Fed</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Taux créditeurs</h4>
                    <p className="text-sm text-[#686868]">Rémunération des dépôts</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">💳</span>
                    </div>
                    <h4 className="font-semibold mb-2">Taux débiteurs</h4>
                    <p className="text-sm text-[#686868]">Coût du crédit</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">📊</span>
                    </div>
                    <h4 className="font-semibold mb-2">Taux obligataires</h4>
                    <p className="text-sm text-[#686868]">Rendement des emprunts</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "economie" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  Taux et économie : un lien étroit
                </h2>
                <p className="text-[#686868] text-lg max-w-4xl mx-auto">
                  Les taux agissent comme un <strong>thermomètre économique</strong>.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
                  <h3 className="text-xl font-semibold mb-6">Quand les taux montent</h3>
                  <div className="space-y-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Crédit plus cher</h4>
                      <p className="text-sm">→ ralentissement de l'immobilier et de la consommation</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Obligations plus attractives</h4>
                      <p className="text-sm">→ baisse de valorisation des anciennes obligations</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Pression sur la Bourse</h4>
                      <p className="text-sm">Financement des entreprises plus coûteux, valorisation ajustée</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
                  <h3 className="text-xl font-semibold mb-6">Quand les taux baissent</h3>
                  <div className="space-y-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Crédit moins cher</h4>
                      <p className="text-sm">→ dynamisme de l'immobilier et des investissements</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Rendement faible de l'épargne</h4>
                      <p className="text-sm">Fonds euros, livrets</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Bourse favorisée</h4>
                      <p className="text-sm">Les investisseurs cherchent du rendement ailleurs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "epargnant" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  Impact pour l'épargnant
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#253F60] font-bold text-xl">1</span>
                </div>
                    <h3 className="text-2xl font-semibold mb-2">Épargne de précaution</h3>
              </div>
              <p className="text-sm mb-4">
                    Livret A, LDDS, LEP → rémunération directement liée aux taux.
                  </p>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="text-sm">
                      Exemple : à 3 %, un livret A couvre à peine une inflation à 4 %, le pouvoir d'achat s'érode.
                    </p>
                  </div>
            </div>

            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#B99066] font-bold text-xl">H</span>
                </div>
                    <h3 className="text-2xl font-semibold mb-2">Immobilier</h3>
              </div>
              <p className="text-sm mb-4">
                    Un crédit à 1 % vs 4 % change totalement la rentabilité d'un projet.
                  </p>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="text-sm">
                      Exemple : sur 20 ans, un emprunt de 200 000 € coûte 21 000 € d'intérêts à 1 %, mais 89 000 € à 4 %.
                    </p>
                  </div>
            </div>

            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#B99066] font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Marchés financiers</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <h4 className="font-semibold mb-1">Obligations</h4>
                      <p className="text-xs">Plus les taux montent, plus les obligations anciennes perdent en valeur</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <h4 className="font-semibold mb-1">Actions</h4>
                      <p className="text-xs">Hausses de taux pèsent sur la valorisation, mais peuvent favoriser certains secteurs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "placements" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  Les taux et vos placements
            </h2>
          </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg">
                  <thead>
                    <tr className="bg-[#4EBBBD] text-white">
                      <th className="px-6 py-4 text-left font-semibold">Placement</th>
                      <th className="px-6 py-4 text-center font-semibold">Sensibilité aux taux</th>
                      <th className="px-6 py-4 text-center font-semibold">Conséquence pour l'investisseur</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">Livrets réglementés</td>
                      <td className="px-6 py-4 text-center">Directe</td>
                      <td className="px-6 py-4 text-center">Rendement faible, souvent &lt; inflation</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Immobilier</td>
                      <td className="px-6 py-4 text-center">Très forte</td>
                      <td className="px-6 py-4 text-center">Hausse des taux = baisse de solvabilité, correction des prix</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Obligations</td>
                      <td className="px-6 py-4 text-center">Inversement corrélées</td>
                      <td className="px-6 py-4 text-center">Hausse des taux = baisse de valeur des obligations anciennes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Actions</td>
                      <td className="px-6 py-4 text-center">Indirecte</td>
                      <td className="px-6 py-4 text-center">Hausse des taux = pression à court terme, opportunités sectorielles</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Produits structurés</td>
                      <td className="px-6 py-4 text-center">Indexés sur actions + taux</td>
                      <td className="px-6 py-4 text-center">Hausse des taux permet des coupons plus attractifs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[#112033] text-xl font-semibold mb-6">✅ Avantages d'une bonne lecture des taux</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Anticiper les cycles économiques</h4>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Adapter ses arbitrages</h4>
                        <p className="text-[#686868] text-sm">Plus d'obligations quand les taux sont hauts, plus d'actions quand ils baissent</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#59E2E4] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Optimiser son crédit immobilier</h4>
                        <p className="text-[#686868] text-sm">Renégociation, opportunités de financement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Arbitrer ses supports d'épargne</h4>
                        <p className="text-[#686868] text-sm">Fonds euros vs livrets vs monétaire</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#112033] text-xl font-semibold mb-6">Limites et risques</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Taux volatils</h4>
                        <p className="text-[#686868] text-sm">Dépendent de la politique monétaire, de l'inflation et de la conjoncture mondiale</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Mauvais timing</h4>
                        <p className="text-[#686868] text-sm">Peut coûter cher (emprunter en haut de cycle, investir en obligations juste avant une hausse)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">!</span>
                      </div>
            <div>
                        <h4 className="text-[#112033] font-semibold mb-1">Vision globale nécessaire</h4>
                        <p className="text-[#686868] text-sm">Patrimoine immobilier, financier et fiscal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "faq" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  FAQ – Taux & Intérêts
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#4EBBBD]">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">1. Pourquoi les taux d'intérêt influencent-ils l'immobilier ?</h3>
                  <p className="text-[#686868] mb-2">
                    Les taux d'intérêt déterminent le <strong>coût du crédit immobilier</strong>.
                  </p>
                  <p className="text-[#686868] text-sm mb-2">
                    • Quand les taux sont bas, les ménages peuvent emprunter davantage → la demande augmente → les prix de l'immobilier montent.
                  </p>
                  <p className="text-[#686868] text-sm mb-2">
                    • Quand les taux montent, la capacité d'emprunt baisse → la demande ralentit → les prix peuvent se stabiliser ou corriger.
                  </p>
                  <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-3 rounded-r-lg mt-3">
                    <p className="text-sm text-[#112033]">
 Exemple : à 1 %, un ménage peut emprunter 250 000 € pour une mensualité donnée. À 4 %, ce même ménage ne peut plus emprunter que 180 000 €.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#B99066]">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">2. Quelle différence entre taux fixe et taux variable ?</h3>
                  <p className="text-[#686868] mb-2">
                    • <strong>Taux fixe</strong> : le taux ne bouge pas pendant toute la durée du prêt. Sécurité et visibilité.
                  </p>
                  <p className="text-[#686868] mb-2">
                    • <strong>Taux variable</strong> : il évolue selon un indice (ex. Euribor). Il peut baisser (avantage) mais aussi monter (risque).
                  </p>
                  <div className="bg-[#FFF8E1] border-l-4 border-[#B99066] p-3 rounded-r-lg mt-3">
                    <p className="text-sm text-[#112033]">
 En France, le taux fixe domine (90 % des crédits), car il protège contre la volatilité des marchés.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#59E2E4]">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">3. Faut-il investir quand les taux montent ?</h3>
                  <p className="text-[#686868] mb-2">
                    Oui, mais pas n'importe comment.
                  </p>
                  <p className="text-[#686868] text-sm mb-2">
                    • <strong>Immobilier</strong> : moins intéressant à crédit, sauf si les prix corrigent.
                  </p>
                  <p className="text-[#686868] text-sm mb-2">
                    • <strong>Obligations</strong> : nouvelle génération d'obligations plus attractives (rendement plus élevé).
                  </p>
                  <p className="text-[#686868] text-sm mb-2">
                    • <strong>Actions</strong> : valorisations ajustées → opportunités d'achat à long terme.
                  </p>
                  <div className="bg-[#E8F4F8] border-l-4 border-[#59E2E4] p-3 rounded-r-lg mt-3">
                    <p className="text-sm text-[#112033]">
 Une hausse des taux redistribue les cartes, elle ne doit pas paralyser l'investisseur.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#4EBBBD]">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">4. Pourquoi la Banque centrale augmente-t-elle les taux ?</h3>
                  <p className="text-[#686868] mb-2">
                    La <strong>Banque centrale européenne (BCE)</strong> ou la <strong>Fed</strong> augmentent les taux pour :
                  </p>
                  <p className="text-[#686868] text-sm mb-2">
                    • Lutter contre l'inflation (ralentir la consommation et le crédit).
                  </p>
                  <p className="text-[#686868] text-sm mb-2">
                    • Rétablir la stabilité monétaire.
                  </p>
                  <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-3 rounded-r-lg mt-3">
                    <p className="text-sm text-[#112033]">
 Inversement, elles baissent les taux pour soutenir la croissance en période de crise.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#B99066]">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">5. Comment les taux d'intérêt influencent-ils mon épargne ?</h3>
                  <p className="text-[#686868] mb-2">
                    • <strong>Livrets réglementés</strong> (Livret A, LDDS, LEP) : indexés sur l'inflation et les taux.
                  </p>
                  <p className="text-[#686868] mb-2">
                    • <strong>Assurance-vie en fonds euros</strong> : rendement lié aux obligations d'État → meilleur quand les taux montent.
                  </p>
                  <p className="text-[#686868] mb-2">
                    • <strong>SCPI</strong> : valorisation des immeubles ajustée par les taux de financement.
                  </p>
                  <div className="bg-[#FFF8E1] border-l-4 border-[#B99066] p-3 rounded-r-lg mt-3">
                    <p className="text-sm text-[#112033]">
 En période de taux hauts, les placements sécurisés redeviennent compétitifs, mais attention à l'inflation.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#59E2E4]">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">6. Quels sont les taux directeurs de la BCE ?</h3>
                  <p className="text-[#686868] mb-2">
                    Les principaux taux directeurs sont :
                  </p>
                  <p className="text-[#686868] text-sm mb-2">
                    • <strong>Taux de refinancement</strong> : le taux auquel les banques empruntent à la BCE.
                  </p>
                  <p className="text-[#686868] text-sm mb-2">
                    • <strong>Taux de dépôt</strong> : rémunération des liquidités placées par les banques à la BCE.
                  </p>
                  <p className="text-[#686868] text-sm mb-2">
                    • <strong>Taux de prêt marginal</strong> : taux d'urgence appliqué aux banques.
                  </p>
                  <div className="bg-[#E8F4F8] border-l-4 border-[#59E2E4] p-3 rounded-r-lg mt-3">
                    <p className="text-sm text-[#112033]">
 Ces taux influencent directement le crédit, l'épargne et l'économie européenne.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white text-center">
                <p className="text-lg font-semibold">
 Chez <strong>Azalée Patrimoine</strong>, nous surveillons l'évolution des taux pour adapter nos recommandations : <strong>immobilier, Bourse, produits financiers, épargne retraite</strong>.
                </p>
              </div>
            </div>
          )}

          {activeTab === "azalee" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  🔑 La vision Azalée Patrimoine
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Chez Azalée Patrimoine, nous suivons de près :</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Les cycles de taux</h4>
                    <p className="text-sm">BCE, Fed, Banque d'Angleterre</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">L'impact sur vos crédits</h4>
                    <p className="text-sm">Immobilier, entreprise</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">L'effet sur vos placements</h4>
                    <p className="text-sm">Fonds euros, obligations, SCPI, produits financiers</p>
                  </div>
                </div>
                </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-[#112033] text-xl font-semibold mb-6">Notre rôle :</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">📊</span>
                    </div>
                    <h4 className="font-semibold mb-2">Mettre en perspective</h4>
                    <p className="text-sm text-[#686868]">Vos projets avec l'évolution des taux</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">🧮</span>
                    </div>
                    <h4 className="font-semibold mb-2">Simuler l'impact</h4>
                    <p className="text-sm text-[#686868]">Sur vos revenus futurs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Optimiser vos choix</h4>
                    <p className="text-sm text-[#686868]">D'investissement et de financement</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-[#112033]">
 Pour préserver la valeur réelle de votre patrimoine.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Graphique pédagogique */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Graphique pédagogique : effet des taux sur la capacité d'emprunt
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Voici un graphique pédagogique qui illustre <strong>l'effet des taux d'intérêt sur la capacité d'emprunt immobilier</strong> :
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1%</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-2">Taux à 1%</h3>
                <p className="text-[#B99066] text-2xl font-bold mb-2">210 000 €</p>
                <p className="text-[#686868] text-sm">Capacité d'emprunt</p>
                <p className="text-[#686868] text-xs mt-2">Mensualité : 1 000 € sur 20 ans</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3%</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-2">Taux à 3%</h3>
                <p className="text-[#B99066] text-2xl font-bold mb-2">167 000 €</p>
                <p className="text-[#686868] text-sm">Capacité d'emprunt</p>
                <p className="text-[#686868] text-xs mt-2">Mensualité : 1 000 € sur 20 ans</p>
            </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">5%</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-2">Taux à 5%</h3>
                <p className="text-[#B99066] text-2xl font-bold mb-2">135 000 €</p>
                <p className="text-[#686868] text-sm">Capacité d'emprunt</p>
                <p className="text-[#686868] text-xs mt-2">Mensualité : 1 000 € sur 20 ans</p>
              </div>
            </div>

            <div className="mt-8 bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-6 rounded-r-lg">
              <p className="text-[#112033] text-lg font-semibold mb-2">
 Impact dramatique des taux sur le pouvoir d'achat immobilier
              </p>
              <p className="text-[#686868] text-sm">
                Avec une mensualité fixe de <strong>1 000 € sur 20 ans</strong>, un emprunteur peut financer environ <strong>210 000 € à 1 %</strong>, mais seulement <strong>167 000 € à 3 %</strong>, et à peine <strong>135 000 € à 5 %</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* En résumé Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              En résumé
          </h2>
            <div className="text-[#686868] text-lg max-w-4xl mx-auto space-y-4">
              <p>
                Les <strong>taux d'intérêt</strong> conditionnent l'épargne, le crédit, l'immobilier et la Bourse.
              </p>
              <p>
                Ils sont un facteur clé pour comprendre les cycles économiques et bâtir une stratégie patrimoniale.
              </p>
              <p className="text-xl font-semibold">
                Chez <strong>Azalée Patrimoine</strong>, nous aidons nos clients à <strong>tirer parti des taux</strong> :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">H</span>
                  </div>
                  <h4 className="font-semibold mb-2">Crédit optimisé</h4>
                  <p className="text-sm text-[#686868]">Renégociation et opportunités de financement</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">5</span>
                  </div>
                  <h4 className="font-semibold mb-2">Arbitrages financiers</h4>
                  <p className="text-sm text-[#686868]">Adaptation selon les cycles de taux</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Sécurisation des revenus</h4>
                  <p className="text-sm text-[#686868]">Préservation de la valeur réelle du patrimoine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Prêt à optimiser vos placements selon les taux ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts analysent l'évolution des taux pour vous proposer 
            les meilleures stratégies d'investissement adaptées au contexte économique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Analyser mes placements
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-[#4EBBBD] transition-colors duration-200">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 