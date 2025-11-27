"use client";
import React from "react";
import Link from "next/link";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

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
      <section className="relative w-full min-h-[400px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            {/* Breadcrumb */}
            <nav className="flex items-center text-white/80 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">{'>'}</span>
              <Link href="/retraite" className="hover:text-white transition-colors">Retraite</Link>
              <span className="mx-2">{'>'}</span>
              <span className="text-[#B99066]">Prévoyance et protection du patrimoine</span>
            </nav>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cairo font-bold mb-6 leading-tight">
              Prévoyance et protection du patrimoine : sécuriser votre avenir et celui de vos proches
              </h1>
            <p className="text-lg sm:text-xl font-inter text-white/90 max-w-3xl">
              Anticiper l'avenir, ce n'est pas seulement faire fructifier son patrimoine : c'est aussi le protéger face aux aléas de la vie.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne gauche : Texte principal */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                  Un accident, une maladie, un décès prématuré ou une perte temporaire de revenus peuvent fragiliser des années d'efforts et remettre en cause la stabilité financière de votre foyer ou de votre entreprise.
                </p>
                <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                  Chez <strong className="text-[#253F60]">Azalée Patrimoine</strong>, nous intégrons la prévoyance au cœur de chaque stratégie patrimoniale, pour garantir votre indépendance financière, celle de vos proches et la pérennité de vos projets.
                </p>
              </div>
            </div>

            {/* Colonne droite : Rectangle bleu avec texte */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl shadow-lg p-6 sm:p-8 h-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-cairo font-bold text-sm sm:text-base text-center transform -rotate-90 whitespace-nowrap">
                    Les dirigeants de TPE/PME n'ont aucune couverture prévoyance adaptée à leurs besoins professionnels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pourquoi la prévoyance est un pilier du patrimoine */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Pourquoi la prévoyance est un pilier du patrimoine
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              La prévoyance ne se limite pas à l'assurance : c'est une stratégie de continuité patrimoniale.
            </p>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
              Elle permet de :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Maintenir un revenu de remplacement en cas d'arrêt de travail,
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Protéger votre famille en cas de décès,
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Financer la dépendance ou les soins longue durée,
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Préserver la valeur de votre entreprise,
                </span>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Et éviter une vente précipitée d'actifs en cas d'imprévu.
                </span>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">💬</span>
                <p className="text-[#4B5563] text-sm font-inter">
                  Une bonne stratégie de prévoyance assure la cohérence entre votre épargne, vos investissements et votre niveau de protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cas concret */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Cas concret : quand la prévoyance protège le patrimoine du dirigeant
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20 mb-8">
            <div className="mb-8">
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                <strong className="text-[#253F60]">Marc, 45 ans</strong>, est chef d'entreprise d'une PME de 5 salariés dans le secteur du conseil.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-4">
                Il perçoit <strong className="text-[#253F60]">5 000 € de revenus mensuels</strong>, et son activité repose largement sur sa présence au quotidien auprès des clients.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Un jour, un accident de moto vient bouleverser son équilibre : <strong className="text-[#253F60]">immobilisé et alité pendant 8 mois</strong>, il doit interrompre totalement son activité.
              </p>
            </div>

            {/* Conséquences sans prévoyance */}
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-xl mb-8">
              <h3 className="text-[#253F60] font-cairo font-bold mb-4 text-lg">Conséquences en chaîne :</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">Trois salariés démissionnent faute de pilotage,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">Le chiffre d'affaires chute de 50%,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">Le dirigeant doit puiser dans sa trésorerie personnelle pour maintenir ses charges et subvenir aux besoins de sa famille.</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-8">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">►</span>
                <p className="text-[#4B5563] text-sm font-inter">
                  <strong className="text-[#253F60]">Sans contrat de prévoyance professionnelle</strong>, Marc subit une perte de revenus immédiate, aucun maintien de salaire et aucune ressource pour faire face à la désorganisation de l'entreprise.
                </p>
              </div>
            </div>

            {/* Avec prévoyance */}
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-xl">
              <h3 className="text-[#253F60] font-cairo font-bold mb-4 text-lg">
                Avec une prévoyance adaptée, il aurait pu :
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 font-bold">✓</span>
                  <span className="text-[#4B5563] text-base font-inter">Percevoir des indemnités journalières pour compenser ses revenus,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 font-bold">✓</span>
                  <span className="text-[#4B5563] text-base font-inter">Financer le remplacement temporaire par un consultant externe,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 font-bold">✓</span>
                  <span className="text-[#4B5563] text-base font-inter">Préserver la trésorerie de sa société et éviter le recours au crédit,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 font-bold">✓</span>
                  <span className="text-[#4B5563] text-base font-inter">Assurer la continuité de l'activité le temps de sa convalescence.</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded mt-8">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">💬</span>
                <p className="text-[#4B5563] text-sm font-inter">
                  Cet exemple illustre parfaitement le rôle de la prévoyance : protéger le revenu du dirigeant, la pérennité de son entreprise et, par extension, la sécurité financière de sa famille.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Focus Azalée Patrimoine */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold">
                Focus Azalée Patrimoine — La prévoyance, un réflexe encore trop rare chez les dirigeants
              </h3>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-[#4B5563] text-base font-inter leading-relaxed">
                  <strong className="text-[#253F60]">40 %</strong> des dirigeants de TPE/PME n'ont aucune couverture prévoyance adaptée à leurs besoins professionnels.
                </p>
              </div>

              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Et parmi ceux qui en ont une, <strong className="text-[#253F60]">près d'un sur deux</strong> ignore le montant exact de son indemnisation en cas d'accident, d'invalidité ou d'arrêt de travail prolongé.
              </p>

              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Ces chiffres traduisent une réalité :
              </p>

              <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                <p className="text-white text-base sm:text-lg font-inter leading-relaxed">
                  <strong className="text-[#B99066]">la plupart</strong> des entrepreneurs protègent mieux leur matériel ou leurs bureaux que <strong className="text-[#B99066]">leur propre revenu</strong>.
                </p>
              </div>

              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed">
                Chez Azalée Patrimoine, nous aidons les dirigeants à :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span className="text-[#4B5563] text-base font-inter">
                    Identifier leurs besoins spécifiques de prévoyance professionnelle,
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span className="text-[#4B5563] text-base font-inter">
                    Choisir les garanties adaptées à leur activité et leur profil,
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span className="text-[#4B5563] text-base font-inter">
                    Optimiser la fiscalité de leurs contrats de prévoyance,
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span className="text-[#4B5563] text-base font-inter">
                    Intégrer la prévoyance dans leur stratégie patrimoniale globale.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Mission et objectifs */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-6">
                  Nos objectifs
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#B99066] mt-1 font-bold">•</span>
                    <span className="text-[#4B5563] text-base font-inter">
                      Identifier les risques réels liés à leur activité,
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#B99066] mt-1 font-bold">•</span>
                    <span className="text-[#4B5563] text-base font-inter">
                      Évaluer l'impact d'une absence prolongée sur le chiffre d'affaires et le patrimoine personnel,
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#B99066] mt-1 font-bold">•</span>
                    <span className="text-[#4B5563] text-base font-inter">
                      Mettre en place une stratégie de prévoyance globale (revenus, associés, entreprise, famille).
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white flex items-center">
                <div>
                  <span className="text-2xl mb-4 block">🌸</span>
                  <p className="text-lg font-cairo font-bold italic">
                    Notre mission : faire de la prévoyance un pilier de la stratégie patrimoniale du chef d'entreprise, au même titre que la fiscalité ou l'investissement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Les solutions de prévoyance à connaître */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Les solutions de prévoyance à connaître
          </h2>

          <div className="space-y-12">
            {/* H3 - 1. Prévoyance chef d'entreprise */}
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                1. La prévoyance du chef d'entreprise et du travailleur indépendant
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
                <div className="lg:col-span-2">
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                    Les dirigeants et professions libérales (TNS, gérants, indépendants) disposent de régimes obligatoires souvent insuffisants. En cas d'arrêt de travail, d'invalidité ou de décès, les prestations sont limitées, voire inexistantes.
                  </p>
                  <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                    Les solutions personnalisées permettent de :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="text-[#4B5563] text-base font-inter">
                        Maintenir le revenu professionnel (indemnités journalières ou rente),
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="text-[#4B5563] text-base font-inter">
                        Protéger le conjoint et les enfants,
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="text-[#4B5563] text-base font-inter">
                        Couvrir le remboursement des emprunts professionnels,
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B99066] mt-1 font-bold">•</span>
                      <span className="text-[#4B5563] text-base font-inter">
                        Financer la transmission ou la continuité de l'entreprise.
                      </span>
                    </li>
                  </ul>
            </div>
            
                {/* Partenaires */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-center">
                    <h4 className="text-white font-cairo font-bold mb-6 text-sm uppercase">
                      Nos partenaires prévoyance
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <p className="text-white font-inter font-bold text-sm">ABEILLES VIE</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <p className="text-white font-inter font-bold text-sm">SWISSLIFE</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <p className="text-white font-inter font-bold text-sm">CARDIF</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <p className="text-white font-inter font-bold text-sm">MMA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <p className="text-[#4B5563] text-sm font-inter">
                    Les contrats de prévoyance Madelin permettent la déduction des cotisations du bénéfice imposable.
                  </p>
                </div>
              </div>
            </div>

            {/* H3 - 2. Prévoyance salarié */}
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                2. La prévoyance du salarié et du cadre dirigeant
              </h3>

              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Pour les salariés du privé, la prévoyance repose sur trois niveaux :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                  <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-cairo font-bold mb-3 text-lg">Régime obligatoire de base</h4>
                  <p className="font-inter text-sm text-white/90">Sécurité sociale</p>
                </div>

                <div className="bg-gradient-to-br from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-cairo font-bold mb-3 text-lg">Régime complémentaire d'entreprise</h4>
                  <p className="font-inter text-sm text-white/90">Accords de branche, Arrco-Agirc</p>
                </div>

                <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl p-6 text-white">
                  <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-cairo font-bold mb-3 text-lg">Complément individuel facultatif</h4>
                  <p className="font-inter text-sm text-white/90">Assurance décès, invalidité, rente éducation</p>
                </div>
              </div>

              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Chez Azalée Patrimoine, nous auditons vos garanties existantes pour identifier les manques :
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-xl mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1 font-bold">•</span>
                    <span className="text-[#4B5563] text-base font-inter">
                      Décalage entre revenu net et indemnité en cas d'arrêt,
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1 font-bold">•</span>
                    <span className="text-[#4B5563] text-base font-inter">
                      Absence de rente viagère pour le conjoint,
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1 font-bold">•</span>
                    <span className="text-[#4B5563] text-base font-inter">
                      Faible couverture en cas d'invalidité partielle.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">➡️</span>
                  <p className="text-[#4B5563] text-sm font-inter">
                    <strong className="text-[#253F60]">L'objectif :</strong> garantir la continuité de vos revenus et la protection durable de votre foyer.
                  </p>
                </div>
              </div>
            </div>

            {/* H3 - 3. Protection du conjoint et des héritiers */}
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                3. La protection du conjoint et des héritiers
              </h3>

              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Les conséquences financières peuvent être lourdes pour une famille en cas de décès.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Le rôle des <strong className="text-[#253F60]">clauses bénéficiaires</strong> dans les contrats (assurance-vie, capitalisation, PER) et le <strong className="text-[#253F60]">régime matrimonial</strong> sont essentiels.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span className="text-[#4B5563] text-base font-inter">
                    Optimisation des clauses bénéficiaires (standard, démembrées, optionnelles),
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span className="text-[#4B5563] text-base font-inter">
                    Mise en place de garanties décès temporaires ou viagères,
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span className="text-[#4B5563] text-base font-inter">
                    Transmission patrimoniale via <Link href="/placements/assurance-vie" className="text-[#253F60] hover:text-[#B99066] font-bold underline">assurance-vie</Link> et démembrement de propriété,
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                  <span className="text-[#4B5563] text-base font-inter">
                    Protection du conjoint survivant (quotité d'usufruit, donation entre époux).
                  </span>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl">💜</span>
                  <p className="text-[#4B5563] text-sm font-inter">
                    La protection du conjoint est l'une des premières formes de prévoyance patrimoniale.
                  </p>
                </div>
              </div>
            </div>

            {/* H3 - 4. Assurance emprunteur */}
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                4. Assurance emprunteur et couverture des dettes
              </h3>

              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                L'assurance emprunteur protège à la fois :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">L'emprunteur (en cas d'incapacité, d'invalidité ou de décès),</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">Les héritiers, en évitant la transmission des dettes.</span>
                </li>
              </ul>

              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Grâce à la <strong className="text-[#253F60]">Loi Lemoine</strong>, il est désormais possible de résilier l'assurance emprunteur à tout moment et de choisir une couverture plus performante à coût équivalent.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl">💜</span>
                  <p className="text-[#4B5563] text-sm font-inter">
                    <strong className="text-[#253F60]">Azalée Patrimoine</strong> vous aide à renégocier ou transférer votre assurance emprunteur pour réduire vos mensualités et renforcer vos garanties.
                  </p>
                </div>
              </div>
            </div>

            {/* H3 - 5. Dépendance */}
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
              <h3 className="text-[#253F60] text-xl sm:text-2xl font-cairo font-bold mb-6">
                5. La dépendance et la perte d'autonomie
              </h3>

              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Anticiper le risque de dépendance devient essentiel avec l'allongement de l'espérance de vie.
              </p>
              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Une couverture adaptée permet de préserver le patrimoine et d'éviter la charge financière pour les proches.
              </p>

              <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-6">
                Options possibles :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">Rente dépendance pour financer les soins ou l'aide à domicile,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">Garantie maintien à domicile,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1 font-bold">•</span>
                  <span className="text-[#4B5563] text-base font-inter">Assurance-vie avec option dépendance.</span>
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <p className="text-[#4B5563] text-sm font-inter">
                    Anticiper tôt permet de réduire le coût et de choisir des garanties plus souples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Intégrer la prévoyance dans votre stratégie patrimoniale */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Intégrer la prévoyance dans votre stratégie patrimoniale
            </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8 text-center">
              Une stratégie patrimoniale équilibrée repose sur trois piliers :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl p-8 text-white text-center">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-cairo font-bold mb-4 text-xl">Constituer</h3>
                <p className="font-inter text-white/90">Épargner et investir</p>
              </div>

              <div className="bg-gradient-to-br from-[#B99066] to-[#A67C52] rounded-xl p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-cairo font-bold mb-4 text-xl">Valoriser</h3>
                <p className="font-inter text-white/90">Faire fructifier son capital</p>
          </div>
          
              <div className="bg-gradient-to-br from-[#253F60] to-[#1a2d47] rounded-xl p-8 text-white text-center">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-cairo font-bold mb-4 text-xl">Protéger</h3>
                <p className="font-inter text-white/90">Sécuriser ses revenus, sa famille et son entreprise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Types de protection */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            Les solutions de prévoyance et protection
            </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#253F60]/20">
              <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-4 text-center">
                Contrats de prévoyance
              </h3>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed text-center">
                Invalidité, décès, dépendance
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#B99066]/20">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-4 text-center">
                Maintien du niveau de vie
              </h3>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed text-center">
                Revenus de remplacement
            </p>
          </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#253F60]/20">
              <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-[#253F60] text-xl font-cairo font-bold mb-4 text-center">
                Couverture santé
              </h3>
              <p className="text-[#4B5563] text-base font-inter leading-relaxed text-center">
                Complémentaire santé
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: L'accompagnement Azalée Patrimoine */}
      <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] rounded-xl p-8 sm:p-10 text-white mb-8">
            <p className="text-xl sm:text-2xl font-cairo font-bold text-center mb-8">
              Chez Azalée Patrimoine, la prévoyance n'est pas une option : c'est la garantie de continuité de votre indépendance financière.
            </p>
          </div>

          <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-12 text-center">
            L'accompagnement Azalée Patrimoine
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border-2 border-[#253F60]/20">
            <p className="text-[#4B5563] text-base sm:text-lg font-inter leading-relaxed mb-8">
              Notre cabinet vous accompagne dans :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Le bilan complet de vos protections actuelles,
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  L'analyse de vos <strong className="text-[#253F60]">risques professionnels et familiaux</strong>,
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  La mise en place de <strong className="text-[#253F60]">contrats adaptés</strong> à votre situation,
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1 font-bold text-xl">•</span>
                <span className="text-[#4B5563] text-base font-inter">
                  Le <strong className="text-[#253F60]">suivi dans la durée</strong> pour ajuster vos garanties à chaque étape de vie.
                </span>
              </div>
                </div>

            <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-xl p-6 text-white text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-2xl">🌸</span>
              </div>
              <p className="text-lg font-cairo font-bold italic">
                Notre mission : vous protéger, vous et vos proches, pour que votre patrimoine reste un levier de liberté, pas une source de vulnérabilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#253F60] via-[#1e3a5a] to-[#253F60] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-[#253F60] text-2xl sm:text-3xl lg:text-4xl font-cairo font-bold mb-4 sm:mb-6">
              Prendre rendez-vous avec un conseiller Azalée
          </h2>
            <p className="text-[#4B5563] text-base sm:text-lg font-inter mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              💬 Vous souhaitez évaluer votre couverture actuelle et identifier les zones de fragilité ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="https://calendly.com/rdv-azalee-patrimoine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#253F60] to-[#1a2d47] hover:from-[#1a2d47] hover:to-[#253F60] text-white px-8 py-4 rounded-lg shadow-xl font-inter font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto"
              >
                👉 Prenez rendez-vous avec un conseiller Azalée Patrimoine
              </a>
            </div>
            <div className="border-t border-gray-200 pt-6 mt-6">
              <a
                href="mailto:contact@azalee-patrimoine.fr"
                className="text-[#253F60] hover:text-[#B99066] font-inter font-semibold text-base sm:text-lg transition-colors"
              >
                📧 contact@azalee-patrimoine.fr
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/retraite"
                className="text-[#B99066] hover:text-[#D4A574] font-inter font-semibold text-base transition-colors"
              >
                Retour à la page Retraite
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}