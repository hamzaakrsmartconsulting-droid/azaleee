"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function TransmissionPage() {
  const chartData = [
    { label: "Patrimoine moyen transmis", value: "€2,000,000" },
    { label: "Réduction des droits", value: "50%" },
    { label: "Économies fiscales", value: "€300,000" },
    { label: "Durée de planification", value: "10-15 ans" },
    { label: "Exonération AV", value: "€152,500" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
              Transmission de patrimoine
            </h1>
            <p className="text-[#686868] text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              La <strong>transmission de patrimoine</strong> consiste à organiser le passage de ses biens à ses héritiers ou à des tiers, de son vivant ou après son décès.
            </p>
            <p className="text-[#686868] text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              Elle englobe les aspects :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">⚖️</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Juridiques</h3>
                <p className="text-[#686868] text-sm">Notaire, régime matrimonial, clauses bénéficiaires</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">💰</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Fiscaux</h3>
                <p className="text-[#686868] text-sm">Droits de donation et succession, abattements, pactes fiscaux</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Stratégiques</h3>
                <p className="text-[#686868] text-sm">Protection de la famille, continuité du patrimoine, valorisation d'entreprise</p>
              </div>
            </div>
            <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg max-w-4xl mx-auto mb-8">
              <p className="text-[#112033] text-sm font-inter">
                👉 Anticiper, c'est transmettre <strong>plus et mieux</strong>, en évitant les blocages et les coûts inutiles.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Planifier ma transmission
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Consulter un expert
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Indicateurs de transmission patrimoniale"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Pourquoi anticiper sa transmission Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Pourquoi anticiper sa transmission ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-[#4EBBBD]">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Réduire les droits de succession
              </h3>
              <p className="text-[#686868] text-sm">
                Grâce aux abattements renouvelables tous les 15 ans.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-[#B99066]">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Sécuriser les proches
              </h3>
              <p className="text-[#686868] text-sm">
                Protéger le conjoint, éviter les conflits familiaux.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-[#59E2E4]">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Pérennité d'entreprise
              </h3>
              <p className="text-[#686868] text-sm">
                Assurer la continuité d'une entreprise familiale.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-[#4EBBBD]">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Éviter les blocages
              </h3>
              <p className="text-[#686868] text-sm">
                Empêcher la vente forcée de biens "dans l'urgence" pour payer les droits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les outils de la transmission Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Les outils de la transmission
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Assurance-vie */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">1. L'assurance-vie : un incontournable</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="text-sm mb-2">
                    <strong>Avant 70 ans :</strong> exonération jusqu'à <strong>152 500 € par bénéficiaire</strong>.
                  </p>
                  <p className="text-sm">
                    <strong>Après 70 ans :</strong> exonération limitée (30 500 € au total), mais capital garanti hors succession.
                  </p>
                </div>
                <div className="bg-[#E8F4F8] bg-opacity-30 rounded-lg p-3">
                  <p className="text-xs text-center">
                    👉 L'assurance-vie est un <strong>outil majeur</strong> pour transmettre avec souplesse et avantage fiscal.
                  </p>
                </div>
              </div>
            </div>

            {/* Démembrement de propriété */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">2. Le démembrement de propriété</h3>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Transmettre la <strong>nue-propriété</strong> d'un bien tout en conservant l'<strong>usufruit</strong> (loyers, usage).</li>
                  <li>• Permet de réduire la base taxable selon l'âge (ex. à 70 ans : 60 % de la valeur seulement).</li>
                  <li>• Au décès, l'héritier récupère la pleine propriété <strong>sans droits supplémentaires</strong>.</li>
                </ul>
              </div>
            </div>

            {/* Pacte Dutreil */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">3. Le pacte Dutreil (transmission d'entreprise)</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="text-sm mb-2">
                    Réduction de <strong>75 % de la base taxable</strong> sur les titres d'une entreprise transmise.
                  </p>
                  <p className="text-sm">
                    <strong>Conditions :</strong> engagement de conservation des titres par les héritiers.
                  </p>
                </div>
                <div className="bg-[#E8F4F8] bg-opacity-30 rounded-lg p-3">
                  <p className="text-xs text-center">
                    👉 Indispensable pour éviter la vente forcée d'une société familiale à cause de la fiscalité.
                  </p>
                </div>
              </div>
            </div>

            {/* Donations échelonnées */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#B99066] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">4. Les donations échelonnées</h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm mb-4">
                  Tous les 15 ans, un parent peut donner :
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>100 000 €</strong> à chaque enfant,</li>
                  <li>• <strong>31 865 €</strong> en don familial d'argent (sous conditions),</li>
                  <li>• Exonération cumulée importante avec le temps.</li>
                </ul>
                <div className="bg-[#E8F4F8] bg-opacity-30 rounded-lg p-3">
                  <p className="text-xs text-center">
                    👉 Donner tôt et de manière progressive permet de transmettre davantage <strong>en franchise d'impôt</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le rôle des experts Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Le rôle des experts : un travail d'équipe
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              La transmission réussie repose sur une <strong>coordination entre trois acteurs clés</strong> :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-[#4EBBBD]">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Le notaire
              </h3>
              <p className="text-[#686868] text-sm">
                Sécurise juridiquement les actes et veille au respect des règles de succession.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-[#B99066]">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                L'expert-comptable
              </h3>
              <p className="text-[#686868] text-sm">
                Valorise l'entreprise, structure les opérations complexes (pacte Dutreil, holding).
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-[#59E2E4]">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Le conseiller patrimonial
              </h3>
              <p className="text-[#686868] text-sm">
                Propose une <strong>vision globale</strong>, choisit les outils fiscaux et financiers adaptés (assurance-vie, capitalisation, SCPI, prévoyance).
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              👉 <strong>Azalée Patrimoine</strong> agit comme <strong>chef d'orchestre</strong>, en travaillant en synergie avec vos notaires et experts-comptables.
            </h3>
          </div>
        </div>
      </section>

      {/* Exemple pratique Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Exemple pratique
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Un couple de 65 ans, patrimoine de <strong>2 M€</strong> :
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Patrimoine détaillé */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                Composition du patrimoine
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-[#E8F4F8] rounded-lg">
                  <span className="text-[#112033] font-medium">Immobilier locatif</span>
                  <span className="text-[#4EBBBD] font-bold text-lg">1,2 M€</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#FFF8E1] rounded-lg">
                  <span className="text-[#112033] font-medium">Assurance-vie</span>
                  <span className="text-[#B99066] font-bold text-lg">500 000 €</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#E8F4F8] rounded-lg">
                  <span className="text-[#112033] font-medium">Parts de société familiale</span>
                  <span className="text-[#59E2E4] font-bold text-lg">300 000 €</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] text-white rounded-lg">
                  <span className="font-medium">Total patrimoine</span>
                  <span className="font-bold text-xl">2 M€</span>
                </div>
              </div>
            </div>

            {/* Comparaison Sans/Avec anticipation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                Comparaison des droits de succession
              </h3>
              
              <div className="space-y-6">
                {/* Sans anticipation */}
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <h4 className="text-red-800 font-semibold mb-2">❌ Sans anticipation :</h4>
                  <p className="text-red-700 text-sm mb-2">
                    Droits de succession ≈ <strong>600 000 €</strong> (selon barème, hors abattements).
                  </p>
                  <p className="text-red-700 text-sm">
                    Risque de vente forcée de biens pour payer les droits.
                  </p>
                </div>

                {/* Avec anticipation */}
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <h4 className="text-green-800 font-semibold mb-2">✅ Avec anticipation (plan sur 10 ans) :</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Donations échelonnées : <strong>400 000 €</strong> exonérés (2 enfants)</li>
                    <li>• Assurance-vie : exonération de <strong>305 000 €</strong> (152 500 € × 2)</li>
                    <li>• Pacte Dutreil : <strong>225 000 €</strong> d'abattement sur l'entreprise</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-4 text-white text-center">
                  <p className="font-semibold">
                    👉 Droits réduits de près de <strong>50 %</strong> et transmission fluidifiée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La vision Azalée Patrimoine Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6 flex items-center justify-center gap-3">
              <span className="text-[#4EBBBD] text-3xl">🚀</span>
              La vision Azalée Patrimoine
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto mb-8">
              Transmettre son patrimoine n'est pas qu'une affaire de fiscalité : c'est aussi protéger sa famille et donner du sens à son héritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">Anticiper et organiser</h3>
              <p className="text-[#686868] text-sm">
                Nous anticipons et organisons votre transmission pour éviter les blocages et réduire les coûts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">Travail en synergie</h3>
              <p className="text-[#686868] text-sm">
                Nous travaillons en synergie avec vos notaires et experts-comptables pour une approche coordonnée.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">Solutions concrètes</h3>
              <p className="text-[#686868] text-sm">
                Nous vous proposons des solutions concrètes pour réduire vos droits de succession et protéger vos proches.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              👉 Chez <strong>Azalée Patrimoine</strong> :
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  Nous <strong>anticipons et organisons</strong> votre transmission
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  Nous travaillons en synergie avec vos <strong>notaires et experts-comptables</strong>
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  Nous vous proposons des solutions concrètes pour <strong>réduire vos droits de succession</strong> et protéger vos proches
                </p>
              </div>
            </div>
            
            <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-6 rounded-r-lg">
              <p className="text-[#112033] text-center font-semibold">
                📅 <strong>Contactez Azalée Patrimoine</strong> dès aujourd'hui pour organiser une transmission fluide, optimisée et la moins coûteuse possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Prêt à organiser votre transmission patrimoniale ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Nos experts vous accompagnent pour mettre en place une stratégie de transmission optimisée, fluide et la moins coûteuse possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Planifier ma transmission
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-[#4EBBBD] transition-colors duration-200">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>
    </>
  );
} 