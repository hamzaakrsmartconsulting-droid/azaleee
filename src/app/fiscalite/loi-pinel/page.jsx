"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';

export default function LoiPinelPage() {
  const [cmsContent, setCmsContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Load CMS content from database
  useEffect(() => {
    const loadCmsContent = async () => {
      try {
        const response = await fetch(`/api/pages/content?path=/fiscalite/loi-pinel&type=cms`);
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.content) {
            setCmsContent(JSON.parse(data.content.content));
          }
        }
      } catch (error) {
        console.log('No CMS content found, using defaults');
      } finally {
        setIsLoading(false);
      }
    };

    loadCmsContent();
  }, []);

  // Default content if CMS content is not available
  const content = cmsContent || {
    hero: {
      title: "Loi Pinel",
      subtitle: "Soutenir l'investissement locatif dans le neuf, tout en encadrant les loyers",
      description: "La loi Pinel offre une réduction d'impôt de 10,5% à 17,5% du prix d'acquisition selon la durée de location (6, 9 ou 12 ans). Un dispositif fiscal puissant pour investir dans l'immobilier neuf en zone tendue."
    },
    overview: {
      title: "Présentation de la loi Pinel",
      description: "La loi Pinel est un dispositif de défiscalisation immobilière qui permet de bénéficier d'une réduction d'impôt en investissant dans un logement neuf destiné à la location. Elle vise à soutenir l'investissement locatif dans le neuf tout en encadrant les loyers.",
      keyPoints: [
        "Réduction d'impôt de 10,5% à 17,5%",
        "Engagement de location de 6 à 12 ans",
        "Investissement dans du neuf uniquement",
        "Zones tendues (A bis, A, B1)"
      ]
    },
    benefits: {
      title: "Avantages fiscaux",
      benefits: [
        {
          title: "Réduction d'impôt",
          description: "10,5% du prix d'acquisition sur 6 ans, 13,5% sur 9 ans, 17,5% sur 12 ans",
          amount: "Jusqu'à 52 500 €",
          icon: "💰"
        },
        {
          title: "Revenus locatifs",
          description: "Génération de revenus locatifs réguliers",
          amount: "Rendement locatif",
          icon: "🏠"
        },
        {
          title: "Plus-value",
          description: "Possibilité de réaliser une plus-value à la revente",
          amount: "Selon marché",
          icon: "📈"
        },
        {
          title: "Diversification",
          description: "Diversification de votre patrimoine immobilier",
          amount: "Patrimoine",
          icon: "🎯"
        }
      ]
    },
    conditions: {
      title: "Conditions d'éligibilité",
      conditions: [
        {
          category: "Logement",
          items: [
            "Bien neuf ou rénové à neuf",
            "Surface habitable entre 9 et 150 m²",
            "Performance énergétique BBC ou RT 2012",
            "Zone tendue (A bis, A, B1)"
          ]
        },
        {
          category: "Investisseur",
          items: [
            "Personne physique ou SCI à l'IS",
            "Pas de lien de parenté avec le promoteur",
            "Respect des plafonds de ressources locataires",
            "Engagement de location nue non meublée"
          ]
        },
        {
          category: "Location",
          items: [
            "Location nue uniquement",
            "Durée minimale de 6 ans",
            "Respect des plafonds de loyer",
            "Logement principal du locataire"
          ]
        }
      ]
    },
    zones: {
      title: "Zones éligibles",
      zones: [
        {
          name: "Zone A bis",
          description: "Paris et communes limitrophes",
          plafondLoyer: "17,17 €/m²",
          plafondRessources: "38 377 €"
        },
        {
          name: "Zone A",
          description: "Grandes métropoles",
          plafondLoyer: "12,75 €/m²",
          plafondRessources: "38 377 €"
        },
        {
          name: "Zone B1",
          description: "Villes moyennes",
          plafondLoyer: "10,28 €/m²",
          plafondRessources: "31 165 €"
        }
      ]
    },
    plafonds: {
      title: "Plafonds applicables",
      plafonds: [
        {
          nom: "Investissement maximum",
          montant: "300 000 €",
          description: "Plafond par an et par contribuable"
        },
        {
          nom: "Prix au m²",
          montant: "5 500 €/m²",
          description: "Plafond de prix au mètre carré"
        },
        {
          nom: "Surface habitable",
          montant: "150 m² max",
          description: "Surface habitable maximale éligible"
        },
        {
          nom: "Surface minimale",
          montant: "9 m² min",
          description: "Surface habitable minimale éligible"
        }
      ]
    },
    calculation: {
      title: "Calcul de la réduction d'impôt",
      examples: [
        {
          prix: "270 000 €",
          duree: "6 ans",
          reduction: "28 350 €",
          annuel: "4 725 €/an",
          taux: "10,5%"
        },
        {
          prix: "270 000 €",
          duree: "9 ans",
          reduction: "36 450 €",
          annuel: "4 050 €/an",
          taux: "13,5%"
        },
        {
          prix: "270 000 €",
          duree: "12 ans",
          reduction: "47 250 €",
          annuel: "3 938 €/an",
          taux: "17,5%"
        }
      ],
      cas_pratique: {
        titre: "Cas pratique Azalée Patrimoine",
        description: "Un contribuable à 40% IR investit 270 000€ sur 9 ans",
        details: [
          "Réduction d'impôt totale : 13,5% soit 36 450€",
          "Effort d'épargne à modérer avec un bon montage",
          "Rendement locatif net à analyser finement"
        ]
      }
    },
    steps: {
      title: "Étapes d'investissement",
      steps: [
        {
          step: 1,
          title: "Étude de faisabilité",
          description: "Analyse de votre situation fiscale et capacité d'investissement"
        },
        {
          step: 2,
          title: "Recherche du bien",
          description: "Sélection d'un logement neuf éligible en zone Pinel"
        },
        {
          step: 3,
          title: "Signature du contrat",
          description: "Signature du contrat de réservation ou de vente"
        },
        {
          step: 4,
          title: "Livraison et location",
          description: "Livraison du bien et mise en location"
        },
        {
          step: 5,
          title: "Déclaration fiscale",
          description: "Déclaration de la réduction d'impôt dans votre déclaration"
        }
      ]
    },
    risks: {
      title: "Points d'attention",
      risks: [
        "Surcote du neuf : le prix au m² est souvent plus élevé que dans l'ancien",
        "Faible rendement net (souvent <3%)",
        "Exigence de location stricte et respect des plafonds",
        "Engagement de location ferme et définitif",
        "Risque de vacance locative si l'emplacement est mal choisi",
        "Évolution du marché immobilier et modifications réglementaires possibles"
      ]
    },
    tips: {
      title: "Recommandation Azalée Patrimoine",
      tips: [
        "Pertinent en zone urbaine tendue, avec gestion sécurisée",
        "Attention à l'emplacement et à l'analyse fine du rendement locatif net",
        "Choisissez une zone avec une forte demande locative",
        "Vérifiez la qualité du promoteur et du constructeur",
        "Négociez les frais de notaire et de garantie",
        "Prévoyez un fonds de roulement pour les charges",
        "Consultez un conseiller fiscal spécialisé"
      ]
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#4EBBBD] border-t-transparent mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Chargement de la loi Pinel...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#FAFFEF] via-[#E8F5E8] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Défiscalisation immobilière
            </span>
          </div>
          <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            {content.hero.title}
          </h1>
          <p className="max-w-4xl mx-auto text-[#686868] text-base sm:text-lg leading-relaxed mb-8">
            {content.hero.description}
          </p>
          
          {/* Law Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                P
              </div>
              <p className="text-[#112033] text-sm font-medium">Pinel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { key: 'overview', label: 'Présentation', icon: '📋' },
              { key: 'benefits', label: 'Avantages', icon: '💰' },
              { key: 'conditions', label: 'Conditions', icon: '📝' },
              { key: 'zones', label: 'Zones', icon: '🗺️' },
              { key: 'plafonds', label: 'Plafonds', icon: '📊' },
              { key: 'calculation', label: 'Calcul', icon: '🧮' },
              { key: 'steps', label: 'Étapes', icon: '📈' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-[#4EBBBD] text-white shadow-lg"
                    : "bg-gray-100 text-[#686868] hover:bg-gray-200"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            {/* Tab Content */}
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.overview.title}
                  </h2>
                  <p className="text-[#686868] text-lg max-w-3xl mx-auto">
                    {content.overview.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {content.overview.keyPoints.map((point, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-6 text-center">
                      <div className="text-2xl mb-3">💰</div>
                      <p className="font-semibold text-[#112033]">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.benefits.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.benefits.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{benefit.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#112033]">{benefit.title}</h3>
                          <p className="text-lg font-semibold text-[#4EBBBD]">{benefit.amount}</p>
                        </div>
                      </div>
                      <p className="text-[#112033] text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conditions Tab */}
            {activeTab === 'conditions' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.conditions.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {content.conditions.conditions.map((condition, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#FFEFD5] to-[#FFE4B5] rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#112033] mb-4 text-center">
                        📋 {condition.category}
                      </h3>
                      <ul className="space-y-2">
                        {condition.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#B99066] rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-[#112033] text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Zones Tab */}
            {activeTab === 'zones' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.zones.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.zones.zones.map((zone, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#112033] mb-3">{zone.name}</h3>
                      <p className="text-[#686868] text-sm mb-4">{zone.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#FAFFEF] rounded-lg p-4">
                          <div className="text-[#686868] text-xs uppercase mb-1">Plafond de loyer</div>
                          <div className="font-bold text-[#4EBBBD]">{zone.plafondLoyer}</div>
                        </div>
                        <div className="bg-[#FAFFEF] rounded-lg p-4">
                          <div className="text-[#686868] text-xs uppercase mb-1">Plafond ressources</div>
                          <div className="font-bold text-[#4EBBBD]">{zone.plafondRessources}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Plafonds Tab */}
            {activeTab === 'plafonds' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.plafonds.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.plafonds.plafonds.map((plafond, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#112033] mb-3">{plafond.nom}</h3>
                      <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-4 text-white text-center mb-3">
                        <div className="text-2xl font-bold">{plafond.montant}</div>
                      </div>
                      <p className="text-[#686868] text-sm">{plafond.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Calculation Tab */}
            {activeTab === 'calculation' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.calculation.title}
                  </h2>
                </div>

                <div className="mb-8">
                  <h3 className="text-[#112033] text-lg font-semibold mb-4">📊 Exemples de calcul</h3>
                  <p className="text-[#686868] text-sm mb-6">Pour un logement de 270 000 €</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {content.calculation.examples.map((example, index) => (
                      <div key={index} className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-[#4EBBBD] mb-1">{example.reduction}</div>
                        <div className="text-[#112033] text-sm font-medium">{example.duree}</div>
                        <div className="text-[#686868] text-xs mt-2">{example.annuel}</div>
                        <div className="text-[#4EBBBD] text-xs font-semibold mt-1">({example.taux})</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cas pratique Azalée */}
                {content.calculation.cas_pratique && (
                  <div className="mb-8">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4">💡 {content.calculation.cas_pratique.titre}</h3>
                    <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-6 text-white">
                      <p className="text-sm font-semibold mb-3">{content.calculation.cas_pratique.description}</p>
                      <ul className="space-y-2">
                        {content.calculation.cas_pratique.details.map((detail, index) => (
                          <li key={index} className="text-sm opacity-90 flex items-start gap-2">
                            <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Steps Tab */}
            {activeTab === 'steps' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.steps.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {content.steps.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-200">
                      <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#112033] mb-1">{step.title}</h3>
                        <p className="text-[#686868] text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Risks and Tips Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Risks */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                <span>⚠️</span> {content.risks.title}
              </h3>
              <ul className="space-y-2">
                {content.risks.risks.map((risk, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#B99066] rounded-full mt-2 flex-shrink-0"></span>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                <span>💡</span> {content.tips.title}
              </h3>
              <ul className="space-y-2">
                {content.tips.tips.map((tip, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#4EBBBD] rounded-full mt-2 flex-shrink-0"></span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F2F2F2] to-[#E5E5E5]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-[#112033] text-2xl lg:text-3xl font-semibold mb-4">
              Prêt à investir avec la loi Pinel ?
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              Nos experts vous accompagnent dans votre projet d'investissement Pinel
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                🎯 Demander un conseil
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                🧮 Calculer ma réduction
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}