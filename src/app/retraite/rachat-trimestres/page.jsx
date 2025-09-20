"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function RachatTrimestresPage() {
  const chartData = [
    { label: "Coût moyen par trimestre", value: "€4,000" },
    { label: "Trimestres rachetables", value: "12 max" },
    { label: "Gain pension mensuel", value: "€200" },
    { label: "Âge légal départ", value: "64 ans" },
    { label: "Déductibilité fiscale", value: "100%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
                Optimiser sa retraite par le rachat de trimestres
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                Le <strong>rachat de trimestres</strong> est un dispositif qui permet à un assuré de <strong>compléter ses périodes manquantes de cotisation</strong> (années d'études, années incomplètes…) afin de partir plus tôt à taux plein ou améliorer le montant de sa pension de retraite.
              </p>
              <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg mb-8">
                <p className="text-[#112033] text-sm">
                  👉 Mais attention : ce mécanisme doit s'analyser <strong>au cas par cas</strong>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Simuler mon rachat
                </button>
                <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200">
                  En savoir plus
                </button>
              </div>
            </div>
            
            {/* Right: Quick Calculator */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                  Qu'est-ce que le rachat de trimestres ?
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-4 text-white text-center">
                    <h4 className="font-semibold mb-2">2 objectifs principaux</h4>
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div>• Partir plus tôt à taux plein</div>
                      <div>• Améliorer le montant de sa pension</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Indicateurs de rachat de trimestres"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Départ à taux plein Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Départ à taux plein : l'enjeu des 64 ans
            </h2>
          </div>

          <div className="bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4">📅 Âge légal de départ</h3>
                <p className="text-[#374151] text-sm font-inter">
                  Depuis la réforme des retraites, l'<strong>âge légal de départ est fixé à 64 ans</strong> (selon la génération).
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4">⚖️ Taux plein</h3>
                <p className="text-[#374151] text-sm font-inter">
                  Pour partir à <strong>taux plein</strong>, il faut justifier d'un certain <strong>nombre de trimestres cotisés</strong>. Si ce nombre n'est pas atteint, la pension est <strong>décotée</strong> (réduction définitive du montant).
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-6 text-white text-center">
              <p className="text-sm">
                👉 Le rachat de trimestres peut permettre d'<strong>éviter cette décote</strong>, à condition d'avoir atteint l'âge légal.
              </p>
            </div>
            
            <div className="mt-4 bg-gradient-to-r from-[#B99066] to-[#D4A574] rounded-lg p-6 text-white text-center">
              <p className="text-sm">
                ⚠️ <strong>Important :</strong> un rachat n'a <strong>aucun effet</strong> si l'âge légal de 64 ans n'est pas atteint → il ne permet pas de partir plus tôt que la loi ne l'autorise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les cas où le rachat est utile Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Les cas où le rachat est utile
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cas 1 */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Atteindre le taux plein dès 64 ans</h3>
              </div>
              <p className="text-sm mb-4">
                Exemple : un assuré a 168 trimestres validés mais il lui en manque 4 pour éviter une décote.
              </p>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <p className="text-sm">
                  Le rachat de ces 4 trimestres peut augmenter sa pension de plusieurs centaines d'euros par an.
                </p>
              </div>
            </div>

            {/* Cas 2 */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">📚</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Réduire l'impact d'une carrière incomplète</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p>• Années d'études non validées</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p>• Périodes de chômage non indemnisées</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p>• Travail à l'étranger</p>
                </div>
              </div>
            </div>

            {/* Cas 3 */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Optimiser fiscalement</h3>
              </div>
              <p className="text-sm mb-4">
                Le coût du rachat est <strong>déductible du revenu imposable</strong>, ce qui peut générer un <strong>gain fiscal immédiat</strong> pour les contribuables fortement imposés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les alternatives Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Les alternatives au rachat de trimestres
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Le rachat n'est pas la seule option pour améliorer sa retraite.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Retraite progressive */}
            <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-8">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔹</span>
              </div>
              <h3 className="text-[#005C69] font-cairo font-semibold text-xl mb-4 text-center">La retraite progressive</h3>
              <ul className="text-[#374151] text-sm font-inter space-y-3">
                <li>• Permet de <strong>réduire son temps de travail</strong> à partir de 60 ans tout en commençant à percevoir une partie de sa pension</li>
                <li>• Les cotisations continuent, ce qui augmente les droits pour la retraite définitive</li>
              </ul>
            </div>
            
            {/* Cumul emploi-retraite */}
            <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-8">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔹</span>
              </div>
              <h3 className="text-[#005C69] font-cairo font-semibold text-xl mb-4 text-center">Le cumul emploi-retraite</h3>
              <ul className="text-[#374151] text-sm font-inter space-y-3">
                <li>• Après liquidation de ses droits, il est possible de reprendre une activité et de <strong>cumuler pension + revenus professionnels</strong></li>
                <li>• Le cumul peut être <strong>plafonné</strong> (si la retraite est partielle) ou <strong>illimité</strong> (si la retraite est liquidée à taux plein)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-6 text-white text-center">
            <p className="text-sm">
              👉 Ces dispositifs offrent parfois une meilleure optimisation que le rachat, notamment pour ceux qui veulent <strong>maintenir un revenu élevé quelques années de plus</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Les limites Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Les limites du rachat de trimestres
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💸</span>
              </div>
              <h3 className="text-[#B99066] font-source-sans font-semibold mb-2">
                Coût élevé
              </h3>
              <p className="text-[#686868] text-sm">
                Entre 3 000 et 7 000 € par trimestre selon l'âge et le revenu
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h3 className="text-[#B99066] font-source-sans font-semibold mb-2">
                Intérêt limité
              </h3>
              <p className="text-[#686868] text-sm">
                Si l'assuré n'a pas atteint l'âge légal de 64 ans
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-[#B99066] font-source-sans font-semibold mb-2">
                Analyse au cas par cas
              </h3>
              <p className="text-[#686868] text-sm">
                Parfois, travailler quelques mois supplémentaires ou opter pour le cumul emploi-retraite est plus rentable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemple chiffré Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Exemple chiffré : racheter ou pas ?
            </h2>
          </div>

          <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">👤 Profil</h3>
                  <p className="text-sm">Cadre de 55 ans avec un revenu annuel brut de 60 000 €</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">📊 Situation</h3>
                  <p className="text-sm">Il lui manque <strong>4 trimestres</strong> pour partir à taux plein à 64 ans</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">💰 Coût du rachat</h3>
                  <p className="text-sm">Environ <strong>4 000 € par trimestre</strong>, soit <strong>16 000 €</strong> (variable selon âge et revenu)</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">📉 Sans rachat</h3>
                  <p className="text-sm">Pension estimée à <strong>2 500 €/mois</strong>, mais avec <strong>décote de -5%</strong> (soit -125 €/mois à vie)</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">📈 Avec rachat</h3>
                  <p className="text-sm">Pension à taux plein, soit <strong>+125 €/mois</strong> (1 500 €/an)</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">🧮 Résultat</h3>
                  <p className="text-sm">Le rachat s'amortit en <strong>environ 10-11 ans</strong> de retraite. Il est donc intéressant <strong>si l'assuré vit au-delà de 75 ans</strong>.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <p className="text-sm">
                Sinon, le rachat peut être un mauvais calcul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              FAQ – Rachat de trimestres et préparation de la retraite
            </h2>
          </div>

          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">
                1. Où puis-je simuler ma retraite et mes options de départ ?
              </h3>
              <p className="text-[#374151] text-sm font-inter mb-4">
                Vous pouvez effectuer une <strong>simulation gratuite et officielle</strong> sur le site <a href="http://www.inforetraite.fr" className="text-[#4EBBBD] underline">www.inforetraite.fr</a>
              </p>
              <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-4 text-white">
                <p className="text-sm">
                  👉 Ce portail public vous permet de tester différents âges de départ (62 ans, 64 ans, 67 ans…), d'évaluer le montant de votre future pension et de visualiser l'impact d'un rachat de trimestres.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">
                2. Combien de temps faut-il pour percevoir sa retraite après la demande ?
              </h3>
              <p className="text-[#374151] text-sm font-inter mb-4">
                Le délai peut aller jusqu'à <strong>6 mois</strong> entre le dépôt du dossier et le premier versement de pension.
              </p>
              <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-4 text-white">
                <p className="text-sm">
                  👉 Il est donc essentiel d'anticiper et de <strong>déposer son dossier dès que possible</strong>, idéalement <strong>6 à 12 mois avant la date de départ choisie</strong>, pour éviter toute rupture de revenus.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">
                3. Le rachat de trimestres est-il toujours intéressant ?
              </h3>
              <p className="text-[#374151] text-sm font-inter mb-4">
                Pas forcément. Le rachat est utile pour :
              </p>
              <ul className="text-[#374151] text-sm font-inter space-y-2 mb-4">
                <li>• éviter une <strong>décote définitive</strong> si vous n'avez pas assez de trimestres validés à l'âge légal (64 ans)</li>
                <li>• ou améliorer le montant de votre pension</li>
              </ul>
              <div className="bg-gradient-to-r from-[#B99066] to-[#D4A574] rounded-lg p-4 text-white">
                <p className="text-sm">
                  👉 Mais il n'a <strong>aucun effet</strong> si vous n'avez pas encore atteint l'âge légal de départ. Dans certains cas, <strong>travailler quelques mois de plus</strong> ou opter pour la <strong>retraite progressive</strong> est plus rentable que racheter.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">
                4. Puis-je améliorer ma retraite autrement que par un rachat de trimestres ?
              </h3>
              <p className="text-[#374151] text-sm font-inter mb-4">
                Oui, plusieurs dispositifs existent :
              </p>
              <ul className="text-[#374151] text-sm font-inter space-y-2">
                <li>• <strong>Retraite progressive</strong> : travailler à temps partiel dès 60 ans tout en percevant une partie de sa pension</li>
                <li>• <strong>Cumul emploi-retraite</strong> : cumuler pension + revenus professionnels après liquidation des droits</li>
                <li>• <strong>Épargne retraite (PER, assurance-vie, immobilier)</strong> : compléter sa pension par des revenus privés</li>
              </ul>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">
                5. Comment être sûr que mon dossier retraite est complet ?
              </h3>
              <p className="text-[#374151] text-sm font-inter mb-4">
                Avant de déposer votre demande, connectez-vous sur inforetraite.fr pour :
              </p>
              <ul className="text-[#374151] text-sm font-inter space-y-2 mb-4">
                <li>• vérifier l'ensemble de vos <strong>trimestres validés</strong></li>
                <li>• signaler les éventuelles <strong>anomalies</strong> (périodes manquantes, erreurs)</li>
                <li>• télécharger vos relevés et constituer un <strong>dossier complet</strong></li>
              </ul>
              <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-4 text-white">
                <p className="text-sm">
                  👉 Plus votre dossier est à jour, plus vous percevrez vos droits rapidement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseil Azalée Patrimoine Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              🚀 La vision Azalée Patrimoine
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8">
                Chez <strong>Azalée Patrimoine</strong>, nous accompagnons nos clients dans une <strong>analyse personnalisée</strong> :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">📊 Simulation</h3>
                  <p className="text-sm">Du montant de pension avec ou sans rachat</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">⚖️ Comparaison</h3>
                  <p className="text-sm">Avec d'autres options (prolongation d'activité, retraite progressive, cumul emploi-retraite)</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">💰 Optimisation fiscale</h3>
                  <p className="text-sm">Du coût du rachat</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🎯 Intégration</h3>
                  <p className="text-sm">Du choix dans une stratégie globale retraite (PER, assurance-vie, immobilier, prévoyance)</p>
                </div>
              </div>
              
              <div className="mt-8 bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  ⚠️ <strong>Conseil Azalée Patrimoine :</strong> Le rachat de trimestres est une décision stratégique. Il doit être comparé avec les alternatives (rachat, prolongation d'activité, cumul emploi-retraite). L'accompagnement d'un conseiller permet de <strong>mesurer le vrai retour sur investissement</strong> selon l'âge, la carrière et les objectifs personnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* En résumé Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              En résumé
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <ul className="text-[#374151] text-sm font-inter space-y-4 max-w-4xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-[#59E2E4] mt-1">•</span>
                <span>Le <strong>rachat de trimestres</strong> est un outil d'optimisation de la retraite, mais il n'est <strong>pas automatique</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B99066] mt-1">•</span>
                <span>Il permet de sécuriser un départ à <strong>taux plein à 64 ans</strong>, mais n'a aucun effet avant l'âge légal.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4EBBBD] mt-1">•</span>
                <span>D'autres solutions existent : <strong>retraite progressive</strong> et <strong>cumul emploi-retraite</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#59E2E4] mt-1">•</span>
                <span>👉 Seule une <strong>simulation personnalisée</strong> permet de savoir si le rachat est pertinent.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Prêt à optimiser votre retraite ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts Azalée Patrimoine vous accompagnent pour analyser votre situation et choisir la meilleure stratégie de rachat de trimestres.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Simuler maintenant
          </button>
        </div>
      </section>
    </>
  );
}