"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

const LOCAL_STORAGE_KEY = 'immeubles-de-rapportPageContent';

const defaultContent = {
  heroTitle: "Immeubles de rapport : Investissement immobilier",
  heroSubtitle: "Investissez dans des immeubles de rapport pour générer des revenus locatifs stables.",
  heroButton1: "Nos immeubles",
  heroButton2: "Calculer la rentabilité",
  rightCardTitle: "Immeubles de rapport : revenus stables",
  rightCardSubtitle: "Générez des revenus locatifs stables avec les immeubles de rapport.",
  rightCardBenefits: [
    "Revenus stables",
    "Plus-value immobilière",
    "Gestion simplifiée",
    "Diversification"
  ],
  rightCardButton1: "Demander un devis",
  rightCardButton2: "En savoir plus",
  essentielTitle: "L'essentiel",
  essentielItems: [
    "Informations essentielles sur immeubles de rapport",
    "Avantages et bénéfices",
    "Conditions et critères",
    "Démarches et procédures"
  ],
  sommaireTitle: "Sommaire",
  sommaireItems: [
    "1. Qu'est-ce que immeubles de rapport ?",
    "2. Avantages et bénéfices",
    "3. Conditions d'éligibilité",
    "4. Démarches et procédures",
    "5. Exemples concrets",
    "6. Questions-réponses"
  ],
  definitionTitle: "Qu'est-ce que immeubles de rapport ?",
  definitionText1: "Définition et explication de immeubles de rapport.",
  definitionText2: "Présentation des avantages et des modalités.",
  definitionSavoirTitle: "À savoir",
  definitionSavoirItems: [
    "Points importants à retenir",
    "Conditions spécifiques",
    "Avantages clés",
    "Points d'attention"
  ]
};

export default function ImmeublesDeRapportPage() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setContent({ ...defaultContent, ...parsed });
    }

    // Listen for content updates from CMS
    const handleContentUpdate = () => {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setContent({ ...defaultContent, ...parsed });
      }
    };

    window.addEventListener('contentUpdated', handleContentUpdate);
    return () => window.removeEventListener('contentUpdated', handleContentUpdate);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Different Layout */}
      <section className="relative bg-[#243E5F] text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Investissement immobilier
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Immeubles de rapport : le placement à haut rendement, mais exigeant
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Acheter un <strong>immeuble de rapport</strong> consiste à acquérir un immeuble entier, composé de plusieurs appartements, pour le louer. C'est l'une des stratégies les plus rentables… mais aussi l'une des plus exigeantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#A67A5A] transition-all duration-200 shadow-lg hover:shadow-xl">
                  Calculer la rentabilité
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#243E5F] transition-all duration-200">
                  Consulter un expert
                </button>
              </div>
            </div>
            
            {/* Right Card - Different Position */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">{content.rightCardTitle}</h3>
              <p className="text-white/90 mb-6">{content.rightCardSubtitle}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {content.rightCardBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-3">
                <button className="w-full bg-[#B99066] text-white py-3 rounded-lg font-semibold hover:bg-[#A67A5A] transition-colors">
                  {content.rightCardButton1}
                </button>
                <button className="w-full border border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-[#243E5F] transition-colors">
                  {content.rightCardButton2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Different Layout Structure */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Sidebar - New Layout Element */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* L'essentiel Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-[#112033] mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#4EBBBD]"></div>
                  {content.essentielTitle}
                </h2>
                <ul className="space-y-3">
                  {content.essentielItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#686868]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4EBBBD] mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sommaire Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-[#112033] mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#4EBBBD]"></div>
                  {content.sommaireTitle}
                </h2>
                <nav className="space-y-2">
                  {content.sommaireItems.map((item, index) => (
                    <a key={index} href={`#section-${index + 1}`} className="block text-sm text-[#4EBBBD] hover:text-[#3A9A9C] transition-colors py-1">
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content Area - Different Structure */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Les avantages des immeubles de rapport Section */}
            <section id="section-1" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">✅</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#112033]">Les avantages des immeubles de rapport</h2>
                  <div className="w-16 h-1 bg-[#4EBBBD] rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="space-y-8">
                {/* Rentabilité supérieure */}
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">💰 Rentabilité supérieure</h3>
                  <p className="text-lg mb-4">
                    Souvent entre <strong>7 et 10 % brut</strong>, contre 4 à 5 % pour un appartement isolé.
                  </p>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="text-sm">
                      👉 <strong>Exemple :</strong> un immeuble de 6 appartements acheté 400 000 €, loués 500 € chacun = 36 000 €/an de loyers, soit <strong>9 % brut</strong>.
                    </p>
                  </div>
                </div>

                {/* Autres avantages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#F2F2F2] rounded-xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🛡️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#112033] mb-3">Mutualisation des risques</h3>
                    <p className="text-[#686868] text-sm">
                      Un locataire part ? Les 5 autres continuent à payer leur loyer.
                    </p>
                  </div>

                  <div className="bg-[#F2F2F2] rounded-xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🔧</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#112033] mb-3">Travaux optimisés</h3>
                    <p className="text-[#686868] text-sm">
                      Rénover la toiture, la façade ou le chauffage profite à tout l'immeuble, avec une économie d'échelle.
                    </p>
                  </div>

                  <div className="bg-[#F2F2F2] rounded-xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">👑</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#112033] mb-3">Maîtrise totale</h3>
                    <p className="text-[#686868] text-sm">
                      Vous êtes le seul propriétaire, donc pas de syndic de copropriété. Vous décidez des travaux, des loyers et de la stratégie de valorisation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Les risques et contraintes Section */}
            <section className="bg-[#F2F2F2] rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#B99066] rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">⚠️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#112033]">Les risques et contraintes à ne pas sous-estimer</h2>
                  <div className="w-16 h-1 bg-[#B99066] rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="space-y-8">
                {/* Concentration du risque technique */}
                <div className="bg-gradient-to-r from-[#B99066] to-[#D4A574] rounded-xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">🔧 Concentration du risque technique</h3>
                  <p className="text-lg">
                    Si le chauffage collectif tombe en panne, ce sont <strong>tous les locataires</strong> qui sont impactés, et les réparations peuvent coûter cher.
                  </p>
                </div>

                {/* Gestion chronophage */}
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-[#112033] mb-4">⏰ Gestion chronophage</h3>
                  <p className="text-[#686868] mb-4">
                    Pour obtenir une rentabilité supérieure à 8 %, il faut <strong>gérer soi-même</strong> les entrées, sorties, relances de loyers et petits travaux.
                  </p>
                  <div className="bg-[#FFF4E6] border-l-4 border-[#B99066] p-4 rounded-r-lg">
                    <p className="text-[#112033] text-sm">
                      👉 Au début, c'est l'euphorie : vous touchez 6 loyers par mois. Mais rapidement, si vous avez un travail à côté, les appels de locataires pour une fuite, un dégât des eaux ou un impayé peuvent transformer ce qui semblait être une "machine à cash" en une <strong>seconde activité stressante</strong>.
                    </p>
                  </div>
                </div>

                {/* Autres contraintes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🏠</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#112033] mb-3">Vacance locative multipliée</h3>
                    <p className="text-[#686868] text-sm">
                      Un appartement vide = une partie de vos loyers disparaît, mais vos charges (assurances, taxe foncière, travaux) restent pleines.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🏦</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#112033] mb-3">Banques plus exigeantes</h3>
                    <p className="text-[#686868] text-sm">
                      Un financement d'immeuble de rapport est parfois vu comme plus risqué qu'un simple appartement. Cela peut nécessiter un apport plus important ou des garanties solides.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Exemple concret Section */}
            <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#112033]">Exemple concret</h2>
                  <div className="w-16 h-1 bg-[#59E2E4] rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">
                  Un investisseur achète un immeuble de <strong>5 appartements à 300 000 €</strong>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">📊 Données de base</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Loyers mensuels :</span>
                          <span className="font-bold">2 000 €</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rentabilité brute :</span>
                          <span className="font-bold">8 %</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">⚠️ Gestion à prévoir</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>5 baux différents</span>
                          <span className="text-yellow-300">✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Charges chauffage collectif :</span>
                          <span className="font-bold">6 000 €/an</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Vacance locative :</span>
                          <span className="font-bold">2 mois/an</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                    <h4 className="font-semibold mb-4">📈 Résultat réel</h4>
                    <p className="text-sm mb-4">
                      La rentabilité <strong>nette</strong> réelle tombe autour de
                    </p>
                    <div className="text-3xl font-bold text-yellow-300 mb-2">5,5 %</div>
                    <p className="text-xs">
                      après déduction des frais de gestion, charges et aléas
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conseil Azalée Patrimoine Section */}
            <section className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                  <span className="text-3xl">👉</span>
                  Notre conseil Azalée Patrimoine
                </h2>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-8">
                <p className="text-lg mb-6">
                  Les immeubles de rapport sont une excellente stratégie pour les investisseurs <strong>aguerris</strong>, qui ont :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-[#4EBBBD] text-xl">⏰</span>
                    </div>
                    <h3 className="font-semibold mb-2">Du temps</h3>
                    <p className="text-sm">Pour gérer eux-mêmes</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-[#4EBBBD] text-xl">🏢</span>
                    </div>
                    <h3 className="font-semibold mb-2">La capacité de déléguer</h3>
                    <p className="text-sm">À une agence de gestion locative, en acceptant une rentabilité légèrement réduite</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#243E5F] rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Prêt à investir dans un immeuble de rapport ?</h2>
              <p className="text-xl text-white/80 mb-8">Nos experts vous accompagnent pour évaluer la faisabilité et la rentabilité de votre projet</p>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">
                  👉 Chez <strong>Azalée Patrimoine</strong>, nous vous apportons :
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="text-white">
                      Une <strong>analyse de rentabilité</strong> précise
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="text-white">
                      Un <strong>accompagnement dans la gestion</strong>
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="text-white">
                      Des <strong>solutions de financement</strong> adaptées
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#A67A5A] transition-colors shadow-lg">
                  Calculer la rentabilité
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#243E5F] transition-colors">
                  Consulter un expert
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
