"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Enregistrer les composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function RetraitePage() {
  const [isSticky, setIsSticky] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Données pour le graphique
  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        label: 'Versements cumulés bruts',
        data: Array.from({ length: 30 }, (_, i) => (i + 1) * 2400),
        backgroundColor: 'rgba(37, 63, 96, 0.8)',
        borderColor: '#253F60',
        borderWidth: 2,
      },
      {
        label: 'Intérêts cumulés',
        data: [
          0, 120, 360, 720, 1200, 1800, 2520, 3360, 4320, 5400,
          6600, 7920, 9360, 10920, 12600, 14400, 16320, 18360, 20520, 22800,
          25200, 27720, 30360, 33120, 36000, 39000, 42120, 45360, 48720, 52200
        ],
        backgroundColor: 'rgba(185, 144, 102, 0.8)',
        borderColor: '#B99066',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Inter, sans-serif',
            size: 12,
          },
          color: '#253F60',
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 250000,
        ticks: {
          stepSize: 50000,
          callback: function(value) {
            return value.toLocaleString('fr-FR') + ' €';
          },
          font: {
            family: 'Inter, sans-serif',
            size: 11,
          },
          color: '#4B5563',
        },
        grid: {
          color: '#E5E7EB',
        },
      },
      x: {
        ticks: {
          font: {
            family: 'Inter, sans-serif',
            size: 11,
          },
          color: '#4B5563',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <Header />
      
      {/* Hero Section - Pilier Retraite */}
      <section className="relative w-full min-h-[650px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-20 sm:py-24 lg:py-32">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-10">
            {/* Carte gauche */}
            <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-300 max-w-4xl mx-auto">
              <h1 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold leading-tight mb-8 tracking-tight">
                Préparer sa retraite sereinement avec Azalée Patrimoine
              </h1>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Anticiper sa retraite, c'est protéger son niveau de vie futur tout en optimisant la gestion de son patrimoine. Dans un contexte de réformes successives et d'allongement des carrières, bien préparer sa retraite ne relève plus du confort, mais d'une véritable stratégie patrimoniale.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8">
                Chez <strong className="font-semibold">Azalée Patrimoine</strong>, nous accompagnons nos clients — salariés, dirigeants, indépendants ou professions libérales — pour qu'ils puissent <strong className="font-semibold">transformer leur épargne en revenus durables</strong>, tout en bénéficiant d'une <strong className="font-semibold">optimisation fiscale</strong> et d'une <strong className="font-semibold">vision globale</strong> de leur patrimoine.
              </p>
              <a
                href="https://calendly.com/rdv-azalee-patrimoine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#253F60] to-[#1a2d47] hover:from-[#1a2d47] hover:to-[#253F60] text-white px-8 py-4 rounded-lg shadow-xl font-inter font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Demander un diagnostic gratuit
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Section 1: Pourquoi anticiper sa retraite dès aujourd'hui ? */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Pourquoi anticiper sa retraite dès aujourd'hui ?
          </h2>

          {/* H3.1: L'évolution du système de retraite français */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="border-2 border-black rounded-lg p-6 mb-6">
                  <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-4">
                    L'évolution du système de retraite français
                  </h3>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                    Le système français, historiquement fondé sur la répartition, fait face à des défis majeurs : vieillissement de la population, déséquilibre entre actifs et retraités, et allongement de la durée de cotisation. La réforme de 2023, repoussant l'âge légal à 64 ans, n'a fait qu'accentuer le besoin d'anticipation. L'État assure un socle minimal ; à chacun désormais de <strong>bâtir ses revenus complémentaires</strong>.
                  </p>
                </div>
              </div>
              
              {/* Carte statistique rotée */}
              <div className="lg:col-span-1 flex justify-center lg:justify-end">
                <div className="relative w-72 h-56 sm:w-80 sm:h-64 group">
                  {/* Carte principale droite - rotée */}
                  <div className="relative w-full h-full bg-gradient-to-br from-[#253F60] via-[#1a2d47] to-[#253F60] rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden transform rotate-90 origin-center">
                    {/* Contenu roté */}
                    <div className="relative z-10 text-white text-center space-y-4 transform -rotate-90">
                      {/* Texte principal */}
                      <div className="space-y-2">
                        <p className="font-inter text-xs sm:text-sm text-white/90 leading-relaxed">
                          La pension de retraite moyenne des français est de
                        </p>
                        <div className="py-2">
                          <span className="font-cairo font-bold text-3xl sm:text-4xl text-[#B99066] drop-shadow-lg">
                            1666€
                          </span>
                          <span className="font-inter text-sm text-white/80 ml-1">net/mois</span>
                        </div>
                      </div>
                      
                      {/* Séparateur */}
                      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B99066] to-transparent mx-auto my-3"></div>
                      
                      {/* Message d'alerte */}
                      <p className="font-inter text-xs sm:text-sm italic text-white/80 leading-relaxed">
                        N'attendez pas qu'il soit trop tard
                      </p>
                    </div>
                    
                    {/* Bordure décorative au survol */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-[#B99066]/0 group-hover:border-[#B99066]/30 transition-all duration-500"></div>
                  </div>
                  
                  {/* Ombre portée améliorée */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#253F60]/20 to-transparent rounded-2xl blur-xl -z-10 transform translate-y-4 group-hover:translate-y-6 transition-transform duration-500"></div>
                </div>
              </div>
            </div>

            {/* CTA Simulateur */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="https://calendly.com/rdv-azalee-patrimoine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-[#B99066] to-[#A67C52] hover:from-[#A67C52] hover:to-[#B99066] text-white px-10 py-5 rounded-xl shadow-2xl font-cairo font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl uppercase overflow-hidden w-full lg:w-auto"
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center gap-3">
                  SIMULER VOTRE PENSION RETRAITE
                </span>
              </a>
            </div>
            </div>
            
          {/* H3.2: Préparer la liberté financière */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Boîte sombre avec chiffres */}
            <div className="bg-gradient-to-br from-[#1a2d47] to-[#253F60] rounded-xl shadow-2xl p-8 sm:p-10 text-white">
              <div className="text-center space-y-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-cairo font-bold mb-2">4 000 €</p>
                  <p className="text-lg font-inter uppercase">Net de salaire par mois</p>
                </div>
                <div className="w-16 h-1 bg-[#B99066] mx-auto my-6"></div>
                <div>
                  <p className="text-2xl sm:text-3xl font-cairo font-bold mb-2 text-red-300">MOINS DE 2000 €</p>
                  <p className="text-lg font-inter uppercase">De pension de retraite</p>
                </div>
              </div>
            </div>

            {/* Texte explicatif */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                Préparer la liberté financière en anticipant l'impact du taux de remplacement
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                Le taux de remplacement correspond au rapport entre votre dernière rémunération et votre pension retraite. Le taux de remplacement se situe aujourd'hui entre 40% et 60% pour la plupart des cadres.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Anticiper, c'est combler cet écart dès aujourd'hui en constituant des revenus futurs de complément.
              </p>
            </div>
          </div>

          {/* Calcul financier et graphique */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Colonne gauche - Calcul et texte */}
            <div className="lg:col-span-2 space-y-8">
              {/* Titre et données du calcul */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-[#253F60]/20">
                <h3 className="text-[#253F60] text-lg sm:text-xl font-cairo font-bold mb-6">
                  Avec un capital initial de 1000 €, en plaçant 200€ par mois pendant 30 ans à un taux de rendement net de 6,01%.
                </h3>
                
                {/* Tableau de données */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#F9FAFB] rounded-lg p-4 border border-[#E5E7EB]">
                    <p className="text-[#6B7280] text-sm font-inter mb-2">Épargne mensuelle</p>
                    <p className="text-[#253F60] text-xl font-cairo font-bold">200 €</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-4 border border-[#E5E7EB]">
                    <p className="text-[#6B7280] text-sm font-inter mb-2">Capital final</p>
                    <p className="text-[#B99066] text-xl font-cairo font-bold">208 336 €</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-4 border border-[#E5E7EB]">
                    <p className="text-[#6B7280] text-sm font-inter mb-2">Versements cumulés</p>
                    <p className="text-[#253F60] text-xl font-cairo font-bold">72 000 €</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-4 border border-[#E5E7EB]">
                    <p className="text-[#6B7280] text-sm font-inter mb-2">Intérêts cumulés</p>
                    <p className="text-[#B99066] text-xl font-cairo font-bold">135 336 €</p>
                  </div>
                </div>

                {/* Graphique */}
                <div className="h-64 sm:h-80">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              </div>

              {/* H3: L'avantage de la préparation progressive */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-[#253F60]/20">
                <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-4">
                  L'avantage de la préparation progressive
                </h3>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
                  Plus on commence tôt, plus l'effort d'épargne est faible.
                </p>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
                  Grâce à l'effet de capitalisation, un effort régulier dès 35 ou 40 ans permet de sécuriser un capital solide pour l'avenir.
                </p>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                  Azalée Patrimoine vous aide à définir le bon rythme d'investissement, en fonction de votre horizon, de vos revenus et de vos objectifs de vie.
                </p>
              </div>

              {/* H3: Bon à savoir */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-[#253F60]/20">
                <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-4">
                  Bon à savoir
                </h3>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
                  Un cadre salarié perd en moyenne 30 à 40% de ses revenus à la retraite pour maintenir le même niveau de vie.
                </p>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                  Prenons un exemple concret : si vous percevez 100 000 € de revenus annuels au moment de votre départ, votre pension représentera environ 60 000 € par an.
                </p>
              </div>
            </div>

            {/* Colonne droite - FOCUS AZALÉE (sticky) */}
            <div className={`lg:col-span-1 ${isSticky ? 'lg:sticky lg:top-24' : ''}`}>
              <div className="bg-gradient-to-br from-[#1a2d47] to-[#253F60] rounded-xl shadow-2xl p-6 sm:p-8 text-white">
                <h3 className="text-[#B99066] text-xl sm:text-2xl font-cairo font-bold mb-2 uppercase">
                  Focus Azalée
                </h3>
                <h4 className="text-white text-lg font-cairo font-semibold mb-6">
                  Le choc de revenus à la retraite
                </h4>

                {/* Le saviez-vous */}
                <div className="mb-6 pb-6 border-b border-white/20">
                  <h5 className="text-[#B99066] font-cairo font-bold mb-3 text-sm uppercase">
                    Le saviez-vous ?
                  </h5>
                  <p className="text-sm font-inter leading-relaxed">
                    Un cadre salarié perd en moyenne 30 à 40% de son revenu au moment du passage à la retraite.
                  </p>
                </div>

                {/* Exemple concret */}
                <div className="mb-6 pb-6 border-b border-white/20">
                  <h5 className="text-[#B99066] font-cairo font-bold mb-3 text-sm uppercase">
                    Exemple concret
                  </h5>
                  <div className="space-y-2 text-sm font-inter">
                    <div>
                      <span className="text-[#B99066] font-semibold">Revenu avant retraite :</span> 100 000 €/an
                    </div>
                    <div>
                      <span className="text-[#B99066] font-semibold">Pension estimée :</span> 60 000 €/an
                    </div>
                    <div>
                      <span className="text-red-300 font-semibold">Perte annuelle :</span> 40 000 €
                    </div>
                    <p className="mt-3 text-xs leading-relaxed">
                      Sur une espérance de vie moyenne de 25 ans, cela représente : près d'1 million d'euros de pouvoir d'achat en moins sur la durée de la retraite.
                    </p>
                    <p className="text-xs leading-relaxed">
                      Et en tenant compte d'une fiscalité à 30%, la perte réelle s'élève à environ 28 000 € nets par an.
                    </p>
                  </div>
                </div>

                {/* Pourquoi anticiper */}
                <div>
                  <h5 className="text-[#B99066] font-cairo font-bold mb-3 text-sm uppercase">
                    Pourquoi anticiper :
                  </h5>
                  <ul className="space-y-2 text-sm font-inter">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B99066] mt-1">•</span>
                      <span>Travaux d'amélioration du logement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B99066] mt-1">•</span>
                      <span>Voyages, loisirs, activités associatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B99066] mt-1">•</span>
                      <span>Séjours en famille ou avec les petits-enfants</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs italic leading-relaxed">
                    Préparer votre indépendance financière, c'est vous assurer de conserver votre confort de vie et votre liberté de choix à la retraite.
                  </p>
                </div>

                {/* Logo Azalée */}
                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <p className="text-xs font-cairo font-bold text-[#B99066]">AZALÉE PATRIMOINE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Suite Section 1 - Perte de revenus */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-[#253F60]/20 mb-8">
            <div className="flex items-start gap-4 mb-4">
              <svg className="w-6 h-6 text-[#253F60] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Cela signifie une baisse de 40 000 € de revenus chaque année.
              </p>
            </div>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4 ml-10">
              Sur une espérance de vie moyenne de 23 ans à la retraite, cette perte de pouvoir d'achat atteint près d'un million d'euros cumulés.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4 ml-10">
              Et si l'on tient compte d'une <span className="font-semibold text-pink-600">tranche marginale d'imposition</span> à 30%, la perte réelle de revenu disponible s'élève encore à environ 28 000 € nets par an.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4 ml-10">
              Certes, la retraite s'accompagne souvent d'une réduction des charges courantes — moins de crédits ou d'enfants à charge —, mais de nouvelles dépenses apparaissent :
            </p>
            <ul className="list-disc list-inside text-[#4B5563] text-base font-inter space-y-2 ml-10 mb-4">
              <li>travaux d'amélioration du logement</li>
              <li>voyages, loisirs</li>
              <li>remplacement du véhicule de fonction</li>
              <li>séjours en famille ou avec les petits-enfants</li>
            </ul>
            <div className="flex items-start gap-4 mt-6">
              <span className="text-2xl">👉</span>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed font-semibold">
                Anticiper cette transition patrimoniale est donc essentiel pour préserver votre qualité de vie et transformer vos revenus d'activité en revenus de liberté.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: Évaluer vos besoins futurs */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Évaluer vos besoins futurs
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Simuler sa pension de retraite
            </h3>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
              Avant toute stratégie, il est essentiel de connaître le montant prévisionnel de sa pension.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
              Azalée Patrimoine accompagne ses clients dans la lecture de leurs relevés de carrière et la simulation personnalisée de leur retraite.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              Vous pouvez également consulter les portails officiels tels que info-retraite.fr.
            </p>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-[#253F60] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Pour aller plus loin : découvrez notre outil de <Link href="/retraite/simulation" className="font-semibold text-[#B99066] hover:text-[#D4A574] underline">simulation retraite</Link> pour estimer votre future pension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: S'organiser pour partir à la retraite à 50 ans */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-8 text-center">
            S'organiser pour partir à la retraite à 50 ans : un objectif atteignable avec une stratégie patrimoniale solide
            </h2>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-xl shadow-lg p-8 sm:p-10 mb-12 text-white">
            <p className="text-xl sm:text-2xl font-cairo font-bold mb-6">
              Partir à la retraite à 50 ans, c'est possible.
            </p>
            <p className="text-base sm:text-lg font-inter leading-relaxed mb-4">
              En construisant une stratégie patrimoniale bien structurée — placements, fiscalité, revenus passifs — il est envisageable d'atteindre la liberté financière avant l'âge légal.
            </p>
            <p className="text-base sm:text-lg font-inter leading-relaxed mb-4">
              Prendre sa retraite à 50 ans : un rêve pour beaucoup, une réalité pour certains.
            </p>
            <p className="text-base sm:text-lg font-inter leading-relaxed mb-4">
              Atteindre la liberté financière à mi-parcours de sa vie professionnelle nécessite plus qu'une simple épargne. C'est une stratégie globale, structurée, et adaptée à chaque étape de votre parcours.
            </p>
            <p className="text-base sm:text-lg font-inter leading-relaxed">
              Chez Azalée Patrimoine, nous accompagnons depuis plus de 20 ans les dirigeants, professions libérales et cadres supérieurs dans la construction d'une indépendance financière durable.
            </p>
          </div>

          {/* H3.1: Comprendre la différence */}
          <div className="mb-12">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Comprendre la différence entre retraite légale et indépendance financière
            </h3>
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-[#253F60]/20">
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
                Partir à la retraite à 50 ans, c'est avant tout atteindre son indépendance financière : générer suffisamment de revenus pour maintenir son niveau de vie sans dépendre d'un emploi.
              </p>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
                Là où la retraite légale repose sur un âge et un nombre de trimestres, l'indépendance financière repose sur une stratégie patrimoniale intelligente et proactive.
              </p>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
                <span className="font-semibold text-[#253F60]">Retirement gap</span> : l'écart entre 50 ans et l'âge légal de la retraite.
              </p>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                Le combler, c'est l'enjeu central d'une stratégie de liberté financière.
              </p>
            </div>
          </div>

          {/* H3.2: Pourquoi vouloir partir à 50 ans */}
          <div className="mb-12">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Pourquoi vouloir partir à 50 ans ?
            </h3>
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-[#253F60]/20">
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
                Après 25 ou 30 ans d'activité, nombreux sont ceux qui ressentent le besoin de ralentir, transmettre, ou se réinventer.
              </p>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
                Partir à 50 ans ne signifie pas ne plus rien faire, mais choisir comment et avec qui on veut travailler.
              </p>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                Chez Azalée Patrimoine, nous aidons nos clients à transformer leurs revenus en liberté — en construisant un patrimoine capable de soutenir leurs projets personnels et familiaux.
              </p>
            </div>
          </div>

          {/* H3.3: Combien faut-il */}
          <div className="mb-12">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Combien faut-il pour partir à la retraite à 50 ans ?
            </h3>
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-[#253F60]/20 mb-6">
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
                Le montant nécessaire pour prendre sa retraite à 50 ans dépend de votre train de vie, de votre capacité d'épargne et du rendement de vos placements.
              </p>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
                Voici une estimation simple pour visualiser votre objectif, à 4% net de rendement :
              </p>

              {/* Tableau */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white">
                      <th className="border border-[#253F60] px-4 py-3 text-left font-cairo font-bold">Niveau de vie souhaité</th>
                      <th className="border border-[#253F60] px-4 py-3 text-left font-cairo font-bold">Capital estimé à 50 ans</th>
                      <th className="border border-[#253F60] px-4 py-3 text-left font-cairo font-bold">Rendement moyen net</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F9FAFB]">
                      <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">3 000 €/mois</td>
                      <td className="border border-[#E5E7EB] px-4 py-3 font-cairo font-bold text-[#253F60]">900 000 €</td>
                      <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">4%</td>
                    </tr>
                    <tr className="bg-[#F9FAFB] hover:bg-white">
                      <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">5 000 €/mois</td>
                      <td className="border border-[#E5E7EB] px-4 py-3 font-cairo font-bold text-[#253F60]">1 500 000 €</td>
                      <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">4%</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F9FAFB]">
                      <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">8 000 €/mois</td>
                      <td className="border border-[#E5E7EB] px-4 py-3 font-cairo font-bold text-[#253F60]">2 400 000 €</td>
                      <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">4%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[#6B7280] text-sm font-inter italic mt-4 mb-6">
                Estimation indicative pour une retraite anticipée jusqu'à 67 ans, sans revenus d'activité.
              </p>

              <a
                href="https://calendly.com/rdv-azalee-patrimoine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#253F60] to-[#1a2d47] hover:from-[#1a2d47] hover:to-[#253F60] text-white px-8 py-4 rounded-lg shadow-xl font-inter font-bold text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Simulez votre indépendance financière avec un conseiller Azalée Patrimoine
              </a>
            </div>

            {/* H3: Calculez votre plan */}
            <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl shadow-lg p-6 sm:p-8 mb-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B99066] font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-cairo font-bold mb-3">
                    Calculez votre plan d'indépendance financière
                  </h3>
                  <p className="text-base font-inter leading-relaxed mb-4">
                    Découvrez combien vous devez épargner et comment structurer vos placements pour atteindre la liberté financière à 50 ans.
                  </p>
                  <a
                    href="https://calendly.com/rdv-azalee-patrimoine/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#253F60] px-6 py-3 rounded-lg shadow-lg font-inter font-bold text-sm hover:bg-gray-100 transition-all duration-300"
                  >
                    Prendre rendez-vous avec un conseiller Azalée
                  </a>
                </div>
              </div>
            </div>

            {/* H3: Construire son plan */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-6">
                Construire son plan d'indépendance financière
              </h3>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
                Une stratégie de retraite anticipée s'appuie sur la structuration de ses revenus, la diversification des placements et l'optimisation fiscale.
              </p>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
                Une retraite anticipée se prépare comme un projet d'entreprise. Voici les étapes clés :
              </p>

              {/* H4.1 */}
              <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
                <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                  1. Optimiser la structure de revenus professionnels
                </h4>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                  Passer en société (SELARL, SASU, holding...) permet de piloter la fiscalité et les revenus, tout en constituant un capital logé dans une structure patrimoniale.
                </p>
              </div>

              {/* H4.2 */}
              <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
                <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                  2. Créer des revenus passifs
                </h4>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                  Immobilier locatif, SCPI, ou produits structurés à coupons permettent de stabiliser des revenus réguliers indépendants de l'activité professionnelle.
                </p>
              </div>

              {/* H4.3 */}
              <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
                <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                  3. Capitaliser dans des enveloppes fiscales adaptées
                </h4>
                <ul className="space-y-3 text-[#4B5563] text-base font-inter">
                  <li className="flex items-start gap-3">
                    <span className="text-[#B99066] mt-1 font-bold">•</span>
                    <span><strong className="text-[#253F60]">PER Individuel</strong> : pour déduire ses versements et préparer le long terme.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#B99066] mt-1 font-bold">•</span>
                    <span><strong className="text-[#253F60]">Assurance Vie</strong> : pour diversifier et transmettre.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#B99066] mt-1 font-bold">•</span>
                    <span><strong className="text-[#253F60]">Contrat de capitalisation</strong> : pour capitaliser sans contrainte successorale.</span>
                  </li>
                </ul>
              </div>

              {/* H4.4 */}
              <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
                <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                  4. Planifier la fiscalité et la transmission
                </h4>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                  L'arbitrage entre capitalisation et distribution, la protection du conjoint, et la transmission progressive sont des piliers d'une stratégie patrimoniale aboutie.
                </p>
              </div>

              {/* H4.5 */}
              <div>
                <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                  5. Diversifier et sécuriser
                </h4>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                  Une indépendance financière solide repose sur la diversification entre actifs financiers et immobiliers, entre revenus immédiats et croissance future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Cas pratique */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-green-600 text-3xl">★</span>
            Cas pratique : Philippe, kinésithérapeute accompagné par Azalée Patrimoine
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              Exemple concret : comment une stratégie patrimoniale bien construite permet à un professionnel libéral de ralentir à 50 ans tout en conservant son confort de vie.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8">
              Philippe, kinésithérapeute libéral, a confié la gestion de sa stratégie patrimoniale à Azalée Patrimoine il y a 20 ans. Son objectif : se concentrer sur son métier, tout en construisant un patrimoine à long terme.
            </p>

            {/* Notre accompagnement */}
            <div className="mb-8">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                Notre accompagnement :
              </h3>
              <ul className="space-y-4 text-[#4B5563] text-base font-inter">
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span>Création d'une SELARL pour optimiser la fiscalité et la rémunération.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span>Mise en place d'une SCI pour acquérir ses murs professionnels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span>Accompagnement dans l'achat des locaux de son cabinet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span>Suivi patrimonial continu sur ses placements financiers et immobiliers.</span>
                </li>
              </ul>
            </div>

            {/* Résultats */}
            <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-cairo font-bold mb-6 text-[#B99066]">
                Résultats 20 ans plus tard :
              </h3>
              <ul className="space-y-4 text-base font-inter">
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span>Cabinet valorisé à <strong>300 000 €</strong> (cession ou gestion déléguée possible).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span>Local professionnel estimé à <strong>750 000 €</strong> (revenus locatifs potentiels).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span>Deux investissements locatifs dédiés au financement des études des enfants.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span>Un patrimoine net de plus d'<strong>1 M€</strong>, en plus de sa résidence principale.</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-lg font-inter leading-relaxed mb-3">
                  Aujourd'hui, Philippe peut ralentir son activité à 50 ans, tout en conservant son niveau de vie.
                </p>
                <p className="text-base font-inter italic text-[#B99066]">
                  Son secret : une stratégie patrimoniale construite dans la durée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Les erreurs à éviter */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-red-600 text-3xl">⛔</span>
            Les erreurs à éviter
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-red-200">
            <ul className="space-y-6 text-[#4B5563] text-base sm:text-lg font-inter mb-8">
              <li className="flex items-start gap-4">
                <span className="text-red-600 mt-1 font-bold text-xl">•</span>
                <span><strong className="text-[#253F60]">Attendre trop longtemps</strong> avant de structurer son activité.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-600 mt-1 font-bold text-xl">•</span>
                <span><strong className="text-[#253F60]">Négliger la fiscalité</strong> des plus-values lors de la cession.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-600 mt-1 font-bold text-xl">•</span>
                <span><strong className="text-[#253F60]">Sous-estimer le besoin</strong> de revenus réguliers avant la retraite légale.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-600 mt-1 font-bold text-xl">•</span>
                <span><strong className="text-[#253F60]">Ignorer la protection</strong> du conjoint et la transmission du patrimoine.</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-lg p-6 text-white">
              <p className="text-base sm:text-lg font-inter leading-relaxed">
                Azalée Patrimoine vous aide à anticiper ces enjeux, pour que votre liberté ne soit pas compromise par un détail mal anticipé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: L'accompagnement Azalée Patrimoine */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-pink-600 text-3xl">💬</span>
            L'accompagnement Azalée Patrimoine
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8 text-center">
              Azalée Patrimoine, cabinet indépendant de gestion de patrimoine, accompagne depuis plus de 20 ans les dirigeants et professions libérales dans leur stratégie de retraite et d'indépendance financière.
            </p>

            {/* Nos engagements */}
            <div className="mb-8">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                Nos engagements
              </h3>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center flex-shrink-0 text-white font-cairo font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-[#253F60] font-cairo font-bold mb-2">Vision globale</h4>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      Chaque décision patrimoniale s'inscrit dans une stratégie long terme.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center flex-shrink-0 text-white font-cairo font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-[#253F60] font-cairo font-bold mb-2">Approche sur mesure</h4>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      Adaptée à votre profil, vos objectifs et votre fiscalité.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center flex-shrink-0 text-white font-cairo font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-[#253F60] font-cairo font-bold mb-2">Suivi continu</h4>
                    <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                      Car la réussite patrimoniale se mesure dans la durée.
                    </p>
                  </div>
                </div>
                </div>
              </div>
              
            {/* Mission */}
            <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl shadow-lg p-6 sm:p-8 text-white text-center">
              <p className="text-xl sm:text-2xl font-cairo font-bold mb-4">
                Notre mission
              </p>
              <p className="text-lg sm:text-xl font-inter leading-relaxed">
                Transformer vos revenus en patrimoine, et votre patrimoine en liberté.
              </p>
            </div>
          </div>

          {/* Prêt à planifier */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-6 h-6 bg-[#253F60] rounded flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <div>
                <h2 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-4">
                  Prêt à planifier votre retraite à 50 ans ?
                </h2>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                  Prêt à construire votre indépendance financière ?
                </p>
                <a
                  href="https://calendly.com/rdv-azalee-patrimoine/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#B99066] font-inter font-semibold text-base hover:text-[#A67C52] transition-colors underline decoration-wavy"
                >
                  Échangez avec un conseiller Azalée Patrimoine dès aujourd'hui.
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#253F60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <a
                  href="https://calendly.com/rdv-azalee-patrimoine/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B99066] font-inter font-semibold hover:text-[#A67C52] transition-colors"
                >
                  Prendre rendez-vous
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#253F60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:contact@azalee-patrimoine.fr"
                  className="text-[#B99066] font-inter font-semibold hover:text-[#A67C52] transition-colors"
                >
                  contact@azalee-patrimoine.fr
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 7: Rachat de trimestres ou versement déductible dans le PER */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-8 text-center">
            Rachat de trimestres ou versement déductible dans le PER ?
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              Lorsqu'il s'agit de préparer sa retraite, deux leviers fiscaux majeurs se présentent :
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-4">
                <span className="text-2xl">👉</span>
                <span className="text-[#4B5563] text-base sm:text-lg font-inter">le rachat de trimestres auprès du régime de base,</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">👉</span>
                <span className="text-[#4B5563] text-base sm:text-lg font-inter">et les versements déductibles dans un Plan d'Épargne Retraite (PER).</span>
              </li>
            </ul>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
              Tous deux permettent de réduire son impôt sur le revenu tout en améliorant sa retraite future — mais leur impact financier n'est pas du même ordre.
            </p>
          </div>

          {/* H3.1: Le rachat de trimestres */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center text-white font-cairo font-bold text-sm">
                ①
              </span>
              Le rachat de trimestres : optimiser la retraite de base
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Le rachat de trimestres consiste à verser une somme à l'administration pour compléter des années incomplètes et atteindre le taux plein plus tôt.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Cela permet :
            </p>
            <ul className="space-y-3 text-[#4B5563] text-base font-inter mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>D'éviter une décote sur la pension de base.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>De potentiellement améliorer légèrement le montant de la pension perçue.</span>
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-[#4B5563] text-sm font-inter leading-relaxed">
                <strong className="text-[#253F60]">Important :</strong> La pension de base du régime général reste plafonnée à 50% du plafond annuel de la Sécurité sociale (PASS). En 2025, le PASS est fixé à 47 100 €. La pension maximale de base est donc de 23 550 € par an, soit 1 962 € brut par mois.
              </p>
            </div>

            {/* Exemple concret */}
            <div className="bg-[#F9FAFB] rounded-lg p-6 border border-[#E5E7EB] mb-6">
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-4">
                Exemple concret
              </h4>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
                Un cadre ayant cotisé au plafond de la Sécurité sociale toute sa carrière, mais manquant de 8 trimestres (2 ans) pour atteindre le taux plein.
              </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border-2 border-red-200">
                  <h5 className="text-red-600 font-cairo font-bold mb-3">Sans rachat de trimestres</h5>
                  <p className="text-sm text-[#4B5563] mb-2">Décote d'environ 10%</p>
                  <p className="text-lg font-cairo font-bold text-[#253F60]">1 766 €/mois brut</p>
                    </div>
                <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                  <h5 className="text-green-600 font-cairo font-bold mb-3">Avec rachat de 8 trimestres</h5>
                  <p className="text-sm text-[#4B5563] mb-2">Coût estimé : 35 000 € (à 50 ans)</p>
                  <p className="text-lg font-cairo font-bold text-[#253F60]">1 962 €/mois brut</p>
                  <p className="text-sm text-green-600 font-semibold mt-2">Gain mensuel : +196 €</p>
                  </div>
                    </div>
              <div className="mt-4 p-4 bg-[#F5F0E8] rounded-lg">
                <p className="text-sm text-[#4B5563] font-inter">
                  <strong className="text-[#253F60]">Gain annuel :</strong> 2 352 € | <strong className="text-[#253F60]">Amortissement :</strong> ~15 ans (hors avantage fiscal)
                </p>
                <p className="text-sm text-[#4B5563] font-inter mt-2">
                  <strong className="text-[#253F60]">Pour un profil à fort revenu (taux marginal 41%) :</strong> Gain fiscal immédiat de 14 000 €. Coût net réduit à 21 000 €. Rendement implicite d'environ 4 à 5% par an sur 15 ans.
                </p>
                  </div>
                </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-sm text-[#4B5563] font-inter leading-relaxed">
                <strong className="text-[#253F60]">Inconvénients :</strong> Aucune flexibilité, aucun effet de levier patrimonial, aucun gain de capitalisation.
              </p>
              </div>
            </div>

          {/* H3.2: Le versement déductible dans le PER */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center text-white font-cairo font-bold text-sm">
                ②
              </span>
              Le versement déductible dans le PER : capitaliser pour soi
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              À l'inverse du rachat de trimestres, le PER individuel permet de déduire ses versements tout en investissant dans des supports dynamiques : fonds en euros, unités de compte, SCPI, produits structurés, etc.
            </p>

            {/* Exemple PER */}
            <div className="bg-[#F9FAFB] rounded-lg p-6 border border-[#E5E7EB] mb-6">
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-4">
                Exemple (même contribuable à 50 ans, imposé à 41%, versant 35 000 € en PER)
              </h4>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-2 border-[#253F60]">
                  <p className="text-sm text-[#6B7280] mb-1">Économie d'impôt immédiate</p>
                  <p className="text-2xl font-cairo font-bold text-[#253F60]">14 350 €</p>
                  <p className="text-xs text-[#6B7280] mt-1">Même effet fiscal que le rachat de trimestres</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-[#B99066]">
                  <p className="text-sm text-[#6B7280] mb-1">Capital investi</p>
                  <p className="text-2xl font-cairo font-bold text-[#B99066]">35 000 €</p>
                  <p className="text-xs text-[#6B7280] mt-1">Entièrement valorisable</p>
                </div>
                <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-lg p-4 text-white">
                  <p className="text-sm mb-1">Hypothèse de rendement : 4% net par an sur 15 ans</p>
                  <p className="text-2xl font-cairo font-bold">63 000 €</p>
                  <p className="text-xs mt-1 opacity-90">À 65 ans, récupérable en rente ou en capital</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="text-sm text-[#4B5563] font-inter leading-relaxed mb-3">
                <strong className="text-[#253F60]">Avantages par rapport au rachat de trimestres :</strong>
              </p>
              <ul className="space-y-2 text-sm text-[#4B5563] font-inter">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Le PER permet de faire croître un patrimoine personnel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Les plus-values ne sont pas plafonnées.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>La transmission est avantageuse (bénéficiaires désignés, exonération partielle selon l'âge et le mode de sortie).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Les revenus futurs peuvent être modulés selon les besoins.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quelle stratégie privilégier */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Quelle stratégie privilégier ?
            </h3>
            <ul className="space-y-4 text-[#4B5563] text-base font-inter mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>Le rachat de trimestres vise à sécuriser la retraite légale ; son rendement est borné par le plafond du régime de base.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>Le PER, lui, permet de faire travailler l'épargne sur la durée tout en profitant d'un levier fiscal équivalent, mais avec un potentiel de capitalisation beaucoup plus fort.</span>
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                <strong className="text-[#253F60]">Pour les profils patrimoniaux,</strong> il est souvent plus judicieux de maximiser d'abord les versements PER, puis de racheter seulement les trimestres manquants si cela permet un départ anticipé sans décote.
              </p>
            </div>
          </div>

          {/* Tableau comparatif */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              En résumé
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] text-white">
                    <th className="border border-[#253F60] px-4 py-3 text-left font-cairo font-bold">Critère</th>
                    <th className="border border-[#253F60] px-4 py-3 text-left font-cairo font-bold">Rachat de trimestres</th>
                    <th className="border border-[#253F60] px-4 py-3 text-left font-cairo font-bold">Versement PER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-[#F9FAFB]">
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter font-semibold text-[#253F60]">Objectif</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Taux plein sur retraite de base</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Constitution d'un capital retraite</td>
                  </tr>
                  <tr className="bg-[#F9FAFB] hover:bg-white">
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter font-semibold text-[#253F60]">Déductibilité</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Oui, intégrale</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Oui, dans la limite du plafond fiscal retraite</td>
                  </tr>
                  <tr className="bg-white hover:bg-[#F9FAFB]">
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter font-semibold text-[#253F60]">Rendement maximal</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">50% du PASS (≈ 1 962 €/mois)</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Illimité selon performances</td>
                  </tr>
                  <tr className="bg-[#F9FAFB] hover:bg-white">
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter font-semibold text-[#253F60]">Liquidité</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Nulle</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Partielle (projets immobiliers, sortie en capital)</td>
                  </tr>
                  <tr className="bg-white hover:bg-[#F9FAFB]">
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter font-semibold text-[#253F60]">Transmission</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Aucune</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Avantageuse (bénéficiaires désignés)</td>
                  </tr>
                  <tr className="bg-[#F9FAFB] hover:bg-white">
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter font-semibold text-[#253F60]">Horizon</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Court/moyen terme</td>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-inter text-[#4B5563]">Moyen/long terme</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="/placements/per"
                className="flex items-center gap-2 text-[#B99066] font-inter font-semibold hover:text-[#D4A574] transition-colors"
              >
                <span className="text-2xl">👉</span>
                Découvrir le PER individuel
              </a>
              <a
                href="https://calendly.com/rdv-azalee-patrimoine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#B99066] font-inter font-semibold hover:text-[#A67C52] transition-colors"
              >
                <span className="text-2xl">👉</span>
                Échanger avec un conseiller Azalée Patrimoine
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Racheter des trimestres : est-ce rentable ? */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-8 text-center">
            Racheter des trimestres : est-ce rentable ?
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
              Le rachat de trimestres peut être avantageux pour réduire la décote appliquée en cas de carrière incomplète.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
              Mais attention : il doit être évalué avec précision, car son intérêt dépend de votre âge, de votre taux marginal d'imposition et de votre durée d'activité restante.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              Nos conseillers vous aident à déterminer si un rachat de trimestres est fiscalement et financièrement pertinent.
            </p>
            <div className="flex items-start gap-4 bg-[#F5F0E8] border-l-4 border-[#B99066] p-4 rounded">
              <svg className="w-6 h-6 text-[#B99066] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-[#253F60] font-inter font-semibold mb-1">En savoir plus</p>
                <Link href="/retraite/rachat-trimestres" className="text-[#B99066] hover:text-[#D4A574] font-inter underline">
                  Rachat de trimestres - optimiser sa fin de carrière
                </Link>
              </div>
            </div>
          </div>

          {/* Déterminer le capital nécessaire */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Déterminer le capital nécessaire
              </h3>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
              Azalée Patrimoine vous aide à calculer le capital cible pour maintenir votre confort de vie : montant de pension, dépenses futures, voyages, projets ou aides aux enfants.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
              C'est sur cette base que nous construisons votre stratégie d'épargne retraite personnalisée.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Les solutions d'épargne retraite */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA en haut */}
          <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl shadow-lg p-6 mb-12 text-white text-center">
            <p className="text-base sm:text-lg font-inter mb-4">
              Simulez votre retraite avec un conseiller Azalée Patrimoine :
            </p>
            <a
              href="https://calendly.com/rdv-azalee-patrimoine/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#B99066] font-inter font-semibold hover:text-[#A67C52] transition-colors underline decoration-wavy"
            >
              <span className="text-green-400">✓</span>
              Réaliser mon diagnostic retraite personnalisé
            </a>
          </div>

          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Les solutions d'épargne retraite
          </h2>

          {/* H3: Le PER */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Le Plan Épargne Retraite (PER)
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Le PER individuel est aujourd'hui la solution la plus complète pour préparer sa retraite.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              Il permet :
            </p>
            <ul className="space-y-3 text-[#4B5563] text-base font-inter mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>de déduire fiscalement vos versements (jusqu'à 10% de vos revenus professionnels) ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>d'investir sur des supports diversifiés (fonds euros, unités de compte, produits structurés) ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>de choisir la sortie (rente ou capital) à la retraite.</span>
              </li>
              </ul>
            <p className="text-[#4B5563] text-base font-inter">
              À lire aussi : <Link href="/fiscalite/per" className="text-[#B99066] hover:text-[#D4A574] underline">Fiscalité du PER - optimiser ses déductions d'impôt</Link>.
            </p>
            </div>
            
          {/* H3: L'assurance-vie */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              L'assurance-vie à long terme
              </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              Souple et accessible, l'assurance-vie permet d'allier capitalisation et transmission. Elle constitue un complément idéal du PER, notamment pour les épargnants souhaitant garder une certaine liquidité avant la retraite.
            </p>
            <p className="text-[#4B5563] text-base font-inter">
              En savoir plus sur <Link href="/placements/assurance-vie" className="text-[#B99066] hover:text-[#D4A574] underline">l'assurance-vie dans une stratégie patrimoniale</Link>.
            </p>
          </div>

          {/* H3: L'investissement immobilier */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              L'investissement immobilier locatif
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              L'immobilier reste un pilier incontournable de la retraite.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Investir en <strong className="text-pink-600">SCPI</strong>, en <strong className="text-pink-600">LMNP</strong> ou via un dispositif fiscal comme <strong className="text-pink-600">Pinel</strong> permet de générer des revenus réguliers tout en profitant d'avantages fiscaux.
            </p>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#253F60] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <p className="text-[#4B5563] text-base font-inter">
                Consultez notre page <Link href="/immobilier" className="text-[#B99066] hover:text-[#D4A574] underline font-semibold">Investissement immobilier</Link> pour découvrir nos stratégies locatives durables.
                </p>
            </div>
          </div>
          
          {/* H3: Les placements financiers */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Les placements financiers complémentaires
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              <strong className="text-yellow-600">Produits structurés</strong>, obligations ou fonds thématiques peuvent compléter une stratégie d'épargne retraite diversifiée.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              Chez Azalée Patrimoine, nous sélectionnons des solutions adaptées à votre profil de risque et à votre horizon de placement.
            </p>
            <p className="text-[#4B5563] text-base font-inter">
              Découvrez nos <strong className="text-yellow-600">placements financiers</strong> pour la retraite.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Comment défiscaliser */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Comment défiscaliser en préparant sa retraite
          </h2>
          
          {/* H3: Le levier fiscal du PER */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Le levier fiscal du PER
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              Le PER permet une déduction fiscale immédiate des versements, souvent supérieure au rendement financier espéré.
            </p>
            <div className="bg-[#F5F0E8] border-l-4 border-[#B99066] p-4 rounded mb-4">
              <p className="text-[#4B5563] text-base font-inter">
                <strong className="text-[#253F60]">Par exemple,</strong> pour un taux marginal d'imposition de 41%, un versement de 10 000 € ne coûte réellement que <strong className="text-[#253F60]">5 900 €</strong>.
              </p>
              </div>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed">
              Un avantage considérable pour les contribuables fortement imposés.
            </p>
              </div>
              
          {/* H3: Les dispositifs immobiliers */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Les dispositifs immobiliers adaptés
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Certains investissements immobiliers permettent d'allier rendement et réduction d'impôt, tout en constituant un capital pour la retraite.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Les plus pertinents selon votre situation patrimoniale sont :
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                  Le dispositif Pinel (ou Pinel +)
                </h4>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                  Pour investir dans le neuf et obtenir une réduction d'impôt jusqu'à 21% du montant investi.
                </p>
              </div>
              <div>
                <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                  Le déficit foncier
                </h4>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                  Pour déduire les travaux réalisés dans un bien ancien de vos revenus fonciers imposables.
                </p>
              </div>
              <div>
                <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                  Le statut LMNP (Loueur en Meublé Non Professionnel)
                </h4>
                <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                  Qui permet d'amortir fiscalement la valeur du bien et d'optimiser la rentabilité nette.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/immobilier" className="text-[#B99066] hover:text-[#D4A574] font-inter underline">
                Découvrez nos stratégies combinant immobilier et retraite sur la page Investissement immobilier.
              </Link>
            </div>
          </div>

          {/* H3: Arbitrer entre économie d'impôt et liquidité */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Arbitrer entre économie d'impôt et liquidité
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              Réduire ses impôts ne doit pas se faire au détriment de la flexibilité.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Azalée Patrimoine vous aide à trouver l'équilibre entre optimisation fiscale et disponibilité des capitaux, selon votre horizon de retraite.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              Notre approche vise à diversifier entre :
            </p>
            <ul className="space-y-3 text-[#4B5563] text-base font-inter mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>produits de capitalisation (assurance-vie, contrat de capitalisation) ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>produits de rente (PER, immobilier locatif) ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>produits de performance (fonds structurés, actions à dividendes).</span>
              </li>
            </ul>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#253F60] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <p className="text-[#4B5563] text-base font-inter">
                Pour aller plus loin : découvrez notre pilier <Link href="/fiscalite" className="text-[#B99066] hover:text-[#D4A574] underline">Fiscalité</Link> pour comprendre comment les solutions retraite s'intègrent à votre stratégie globale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Retraite, transmission et prévoyance */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Retraite, transmission et prévoyance : penser globalement
          </h2>
          
          {/* H3: Anticiper la transmission */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Anticiper la transmission de son patrimoine retraite
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              La retraite ne marque pas la fin de la gestion patrimoniale, mais le début d'une phase nouvelle : la <strong className="text-[#253F60]">transmission</strong>.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Bien anticiper permet d'assurer la continuité financière de vos proches tout en optimisant la fiscalité successorale.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              Les contrats multi-détention (PER, assurance-vie) sont particulièrement adaptés pour :
            </p>
            <ul className="space-y-3 text-[#4B5563] text-base font-inter mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>transmettre un capital à vos héritiers dans un cadre fiscal privilégié ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>répartir le patrimoine entre conjoint et enfants ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>prévoir la protection du conjoint survivant grâce à des clauses bénéficiaires sur mesure.</span>
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-[#4B5563] text-sm font-inter italic">
                Pensez à revoir régulièrement la rédaction de vos clauses bénéficiaires avec votre conseiller Azalée Patrimoine.
              </p>
              </div>
              </div>
              
          {/* H3: Protéger sa famille */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Protéger sa famille avec la prévoyance
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              L'un des piliers essentiels d'une retraite réussie, c'est la <strong className="text-[#253F60]">protection de la famille</strong> face aux aléas de la vie.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              Les contrats de prévoyance individuelle couvrent le décès, l'invalidité ou la perte de revenus, garantissant à vos proches une stabilité financière.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Azalée Patrimoine vous accompagne dans la mise en place de solutions de prévoyance personnalisées selon votre statut (salarié, TNS, dirigeant).
            </p>
            <Link href="/retraite/prevoyance-protection" className="text-[#B99066] hover:text-[#D4A574] font-inter underline">
              En savoir plus : Prévoyance et protection familiale.
            </Link>
          </div>

          {/* H3: Adapter sa stratégie */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Adapter sa stratégie au moment du départ
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              Le passage à la retraite nécessite des ajustements :
            </p>
            <ul className="space-y-3 text-[#4B5563] text-base font-inter mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>rééquilibrage du portefeuille vers des actifs plus sécurisés ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>transformation du capital en rente ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>ajustement fiscal pour limiter l'imposition des retraits.</span>
              </li>
            </ul>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed">
              Nos conseillers vous aident à piloter cette transition sans rupture de revenus et à préserver votre capital sur le long terme.
            </p>
          </div>
        </div>
      </section>

      {/* Section 12: L'expertise Azalée Patrimoine */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            L'expertise Azalée Patrimoine
          </h2>
          
          {/* H3: Un accompagnement humain */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Un accompagnement humain, pédagogique et durable
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Préparer sa retraite avec Azalée Patrimoine, c'est bénéficier d'un accompagnement global :
            </p>
            <ul className="space-y-3 text-[#4B5563] text-base font-inter mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>diagnostic retraite complet (carrière, patrimoine, fiscalité) ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>projection de revenus futurs et simulation de besoins ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>stratégie sur mesure intégrant épargne, immobilier et placements financiers.</span>
              </li>
            </ul>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed">
              Nous nous engageons à une approche indépendante, <strong className="text-[#253F60]">pédagogique et durable</strong>, centrée sur vos objectifs de vie et la sécurité de vos proches.
            </p>
          </div>

          {/* H3: Un diagnostic retraite */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Un diagnostic retraite sur mesure
            </h3>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-6">
              Chaque client Azalée bénéficie d'un audit retraite personnalisé, combinant analyse fiscale, budgétaire et patrimoniale.
            </p>
            <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-4">
              Ce diagnostic permet de :
            </p>
            <ul className="space-y-3 text-[#4B5563] text-base font-inter mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>visualiser votre future pension ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>identifier les écarts à combler ;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold">•</span>
                <span>définir les solutions adaptées à votre profil et à votre horizon.</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-lg p-6 text-white">
              <p className="text-base font-inter mb-4">
                Réalisez votre audit retraite offert :
              </p>
              <a
                href="https://calendly.com/rdv-azalee-patrimoine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-inter font-semibold hover:text-[#B99066] transition-colors underline"
              >
                <span className="text-2xl">👉</span>
                <strong>Prendre rendez-vous avec un conseiller Azalée Patrimoine</strong>
              </a>
                </div>
                </div>

          {/* H3: Des stratégies concrètes */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
              Des stratégies concrètes selon votre profil
            </h3>

            {/* H4: Pour les salariés */}
            <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                Pour les salariés
              </h4>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed mb-3">
                Misez sur le PER individuel et l'assurance-vie long terme, tout en profitant de la déduction fiscale annuelle.
              </p>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                Les versements réguliers permettent de lisser l'effort d'épargne dans le temps.
              </p>
              </div>
              
            {/* H4: Pour les indépendants */}
            <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                Pour les indépendants et professions libérales
              </h4>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                Optimisez vos revenus grâce au <strong className="text-[#253F60]">PERIN</strong>, au contrat <strong className="text-[#253F60]">Madelin</strong> ou à des investissements immobiliers ciblés (LMNP, SCPI). Vous combinez ainsi rentabilité, fiscalité avantageuse et capital transmissible.
              </p>
            </div>

            {/* H4: Pour les dirigeants */}
            <div>
              <h4 className="text-[#253F60] text-lg font-cairo font-bold mb-3">
                Pour les dirigeants d'entreprise
              </h4>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                Profitez des dispositifs de retraite supplémentaire et de capitalisation en société pour transformer la trésorerie dormante en actifs productifs. Azalée Patrimoine vous accompagne dans la structuration juridique et patrimoniale de ces stratégies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Questions fréquentes */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Questions fréquentes sur la retraite
          </h2>
          
          <div className="space-y-4">
            {/* Question 1 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#253F60]/20 overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleQuestion(0)}
                className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-[#F9FAFB] transition-colors"
              >
                <h3 className="text-[#253F60] text-lg sm:text-xl font-cairo font-bold pr-4">
                  À quel âge faut-il commencer à préparer sa retraite ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#253F60] flex-shrink-0 transition-transform duration-300 ${openQuestion === 0 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Idéalement entre 35 et 45 ans pour profiter pleinement de l'effet de capitalisation. Mais il n'est jamais trop tard : chaque situation se planifie.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#253F60]/20 overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleQuestion(1)}
                className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-[#F9FAFB] transition-colors"
              >
                <h3 className="text-[#253F60] text-lg sm:text-xl font-cairo font-bold pr-4">
                  Comment fonctionne la déduction fiscale du PER ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#253F60] flex-shrink-0 transition-transform duration-300 ${openQuestion === 1 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Les versements sur un PER individuel sont <strong className="text-[#253F60]">déductibles du revenu imposable</strong>, dans la limite de 10 % des revenus professionnels nets. Le gain fiscal dépend de votre tranche marginale d'imposition.
                  </p>
                </div>
            </div>
          </div>

            {/* Question 3 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#253F60]/20 overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleQuestion(2)}
                className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-[#F9FAFB] transition-colors"
              >
                <h3 className="text-[#253F60] text-lg sm:text-xl font-cairo font-bold pr-4">
                  Quelle différence entre PER individuel et PER d'entreprise ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#253F60] flex-shrink-0 transition-transform duration-300 ${openQuestion === 2 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Le PER individuel est souscrit à titre personnel. Le PER d'entreprise collectif (<strong className="text-[#253F60]">PERECO</strong>) ou obligatoire (<strong className="text-[#253F60]">PERO</strong>) est proposé via votre employeur, avec des abondements possibles.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#253F60]/20 overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleQuestion(3)}
                className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-[#F9FAFB] transition-colors"
              >
                <h3 className="text-[#253F60] text-lg sm:text-xl font-cairo font-bold pr-4">
                  Comment optimiser sa retraite quand on est travailleur indépendant ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#253F60] flex-shrink-0 transition-transform duration-300 ${openQuestion === 3 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Les indépendants peuvent combiner plusieurs dispositifs : PERIN, contrat Madelin, capitalisation en société ou immobilier professionnel. Chaque solution répond à un besoin spécifique de revenu, protection ou transmission.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#253F60]/20 overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleQuestion(4)}
                className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-[#F9FAFB] transition-colors"
              >
                <h3 className="text-[#253F60] text-lg sm:text-xl font-cairo font-bold pr-4">
                  Que faire si je pars vivre à l'étranger ?
                </h3>
                <svg
                  className={`w-6 h-6 text-[#253F60] flex-shrink-0 transition-transform duration-300 ${openQuestion === 4 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                    Les expatriés peuvent continuer à détenir un PER en France, mais la fiscalité dépendra de la convention bilatérale. Azalée Patrimoine vous aide à adapter votre stratégie retraite à votre résidence fiscale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: En résumé */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            En résumé
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6 text-center">
              Bien préparer sa retraite, c'est construire aujourd'hui les fondations de votre sérénité future. Avec Azalée Patrimoine, vous bénéficiez d'un accompagnement global :
            </p>
            <ul className="space-y-4 text-[#4B5563] text-base font-inter mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span>une stratégie patrimoniale personnalisée,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span>une expertise financière et fiscale reconnue,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span>et un suivi humain, indépendant et durable.</span>
              </li>
            </ul>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#253F60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-[#253F60] font-inter font-semibold mb-1">Être rappelé par un conseiller</p>
                  <a href="mailto:contact@azalee-patrimoine.fr" className="text-[#B99066] font-inter hover:text-[#A67C52] transition-colors">
                    contact@azalee-patrimoine.fr
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#253F60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <a
                  href="https://calendly.com/rdv-azalee-patrimoine/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B99066] font-inter font-semibold hover:text-[#A67C52] transition-colors"
                >
                  Prendre rendez-vous en ligne
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 15: En savoir plus */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            En savoir plus
          </h2>

          {/* Liens vers catégories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/placements" className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#253F60]/20 hover:border-[#B99066] transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#253F60] group-hover:text-[#B99066] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-[#253F60] font-cairo font-bold group-hover:text-[#B99066] transition-colors">Placements financiers</h3>
              </div>
              <p className="text-[#4B5563] text-sm font-inter">Construire un portefeuille long terme</p>
            </Link>

            <Link href="/immobilier" className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#253F60]/20 hover:border-[#B99066] transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#253F60] group-hover:text-[#B99066] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-[#253F60] font-cairo font-bold group-hover:text-[#B99066] transition-colors">Investissement immobilier</h3>
              </div>
              <p className="text-[#4B5563] text-sm font-inter">SCPI et immobilier retraite</p>
            </Link>

            <Link href="/patrimoine" className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#253F60]/20 hover:border-[#B99066] transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#253F60] group-hover:text-[#B99066] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-[#253F60] font-cairo font-bold group-hover:text-[#B99066] transition-colors">Gestion de patrimoine</h3>
              </div>
              <p className="text-[#4B5563] text-sm font-inter">Structurer son épargne pour la retraite</p>
            </Link>
          </div>

          {/* Liens vers sous-pages */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-6">
              Articles et guides
            </h3>
            <div className="space-y-4">
              <Link href="/retraite/rachat-trimestres" className="block text-[#B99066] hover:text-[#D4A574] font-inter transition-colors">
                <h4 className="font-cairo font-bold mb-1">Le rachat de trimestres en 2025</h4>
                <p className="text-sm text-[#6B7280]">Lien vers sous page Rachat de trimestres</p>
              </Link>
              <Link href="/retraite/plan-retraite" className="block text-[#B99066] hover:text-[#D4A574] font-inter transition-colors">
                <h4 className="font-cairo font-bold mb-1">Quelles différences entre le PERP, le PERCO, le PER ?</h4>
                <p className="text-sm text-[#6B7280]">Lien vers sous page : les produits retraite : PER/PERP...</p>
              </Link>
              <Link href="/retraite/prevoyance-protection" className="block text-[#B99066] hover:text-[#D4A574] font-inter transition-colors">
                <h4 className="font-cairo font-bold mb-1">Prévoyance et Protection Familiale</h4>
                <p className="text-sm text-[#6B7280]">Lien vers sous page</p>
              </Link>
              <Link href="/retraite/autre" className="block text-[#B99066] hover:text-[#D4A574] font-inter transition-colors">
                <h4 className="font-cairo font-bold mb-1">Autres solutions retraites</h4>
                <p className="text-sm text-[#6B7280]">Lien vers sous page</p>
              </Link>
              <Link href="/retraite/retraite-progressive" className="block text-[#B99066] hover:text-[#D4A574] font-inter transition-colors">
                <h4 className="font-cairo font-bold mb-1">La retraite progressive</h4>
                <p className="text-sm text-[#6B7280]">Lien vers sous page</p>
              </Link>
              <div className="block text-[#253F60] font-inter">
                <h4 className="font-cairo font-bold mb-1">Le cumul emploi-retraite</h4>
                <p className="text-sm text-[#6B7280]">Article</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full bg-gradient-to-r from-[#253F60] via-[#1e3a5a] to-[#253F60] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-4 sm:mb-6">
              Prêt à préparer votre retraite sereinement ?
            </h2>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Nos experts Azalée Patrimoine vous accompagnent dans la construction d'une stratégie retraite personnalisée, adaptée à votre situation et vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/rdv-azalee-patrimoine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] hover:from-[#1a2d47] hover:to-[#253F60] text-white px-8 py-4 rounded-lg shadow-xl font-inter font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto"
              >
                Demander un diagnostic gratuit
              </a>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#B99066] to-[#A67C52] hover:from-[#A67C52] hover:to-[#B99066] text-white px-8 py-4 rounded-lg shadow-xl font-inter font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 
