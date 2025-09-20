"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';

export default function LoiGirardinPage() {
  const [cmsContent, setCmsContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Load CMS content from database
  useEffect(() => {
    const loadCmsContent = async () => {
      try {
        const response = await fetch(`/api/pages/content?path=/fiscalite/loi-girardin&type=cms`);
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
      title: "Loi Girardin industriel",
      subtitle: "Financer l'économie ultramarine via des investissements productifs",
      description: "La loi Girardin industriel offre une réduction d'impôt \"one shot\" supérieure à l'investissement (jusqu'à 110% du montant investi). Un dispositif fiscal puissant pour contribuables très fortement imposés acceptant un placement à fonds perdus mais sûr juridiquement."
    },
    overview: {
      title: "Présentation de la loi Girardin",
      description: "La loi Girardin est un dispositif de défiscalisation qui permet de réduire ses impôts en investissant dans les départements et collectivités d'outre-mer français (DOM-TOM).",
      keyPoints: [
        "Réduction d'impôt jusqu'à 25%",
        "Investissement dans l'outre-mer français",
        "Durée d'engagement de 5 ans",
        "Contribution au développement local"
      ]
    },
    benefits: {
      title: "Avantages fiscaux",
      benefits: [
        {
          title: "Réduction d'impôt",
          description: "25% du montant investi en réduction d'impôt",
          amount: "Jusqu'à 25%",
          icon: "💰"
        },
        {
          title: "Diversification géographique",
          description: "Diversification de votre patrimoine géographiquement",
          amount: "Outre-mer",
          icon: "🌴"
        },
        {
          title: "Impact social",
          description: "Contribution au développement économique local",
          amount: "Social",
          icon: "🤝"
        },
        {
          title: "Rendement potentiel",
          description: "Possibilité de générer des revenus locatifs",
          amount: "Rendement",
          icon: "📈"
        }
      ]
    },
    zones: {
      title: "Zones éligibles",
      zones: [
        {
          name: "Guadeloupe",
          description: "Département d'outre-mer dans les Antilles",
          avantages: "Réduction 25%",
          secteur: "Immobilier, hôtellerie"
        },
        {
          name: "Martinique",
          description: "Département d'outre-mer dans les Antilles",
          avantages: "Réduction 25%",
          secteur: "Immobilier, tourisme"
        },
        {
          name: "Guyane",
          description: "Département d'outre-mer en Amérique du Sud",
          avantages: "Réduction 25%",
          secteur: "Immobilier, services"
        },
        {
          name: "Réunion",
          description: "Département d'outre-mer dans l'océan Indien",
          avantages: "Réduction 25%",
          secteur: "Immobilier, hôtellerie"
        },
        {
          name: "Mayotte",
          description: "Département d'outre-mer dans l'océan Indien",
          avantages: "Réduction 25%",
          secteur: "Immobilier, services"
        },
        {
          name: "Nouvelle-Calédonie",
          description: "Collectivité d'outre-mer dans le Pacifique",
          avantages: "Réduction 25%",
          secteur: "Immobilier, tourisme"
        }
      ]
    },
    sectors: {
      title: "Secteurs d'investissement",
      sectors: [
        {
          name: "Immobilier résidentiel",
          description: "Logements neufs ou anciens rénovés",
          avantages: "Réduction d'impôt + revenus locatifs",
          icon: "🏠"
        },
        {
          name: "Immobilier commercial",
          description: "Bureaux, commerces, entrepôts",
          avantages: "Réduction d'impôt + loyers commerciaux",
          icon: "🏢"
        },
        {
          name: "Hôtellerie",
          description: "Hôtels, résidences de tourisme",
          avantages: "Réduction d'impôt + revenus touristiques",
          icon: "🏨"
        },
        {
          name: "Équipements publics",
          description: "Infrastructures, équipements collectifs",
          avantages: "Réduction d'impôt + impact social",
          icon: "🏛️"
        }
      ]
    },
    conditions: {
      title: "Conditions d'éligibilité",
      conditions: [
        {
          category: "Investisseur",
          items: [
            "Personne physique domiciliée en France",
            "Personne morale soumise à l'IS en France",
            "Respect des plafonds d'investissement",
            "Pas de lien avec le promoteur"
          ]
        },
        {
          category: "Investissement",
          items: [
            "Montant minimum selon le secteur",
            "Localisation en zone éligible",
            "Respect des normes techniques",
            "Engagement de conservation"
          ]
        },
        {
          category: "Durée",
          items: [
            "Engagement de conservation de 5 ans",
            "Pas de cession avant terme",
            "Respect des conditions d'usage",
            "Maintien de l'activité"
          ]
        }
      ]
    },
    calculation: {
      title: "Calcul de la réduction d'impôt",
      examples: [
        {
          montant: "100 000 €",
          reduction: "25 000 €",
          net: "75 000 €",
          description: "Investissement immobilier résidentiel"
        },
        {
          montant: "200 000 €",
          reduction: "50 000 €",
          net: "150 000 €",
          description: "Investissement hôtelier"
        },
        {
          montant: "500 000 €",
          reduction: "125 000 €",
          net: "375 000 €",
          description: "Investissement commercial"
        }
      ]
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
          title: "Choix de la zone",
          description: "Sélection de la zone d'outre-mer et du secteur d'activité"
        },
        {
          step: 3,
          title: "Recherche du projet",
          description: "Identification d'un projet éligible Girardin"
        },
        {
          step: 4,
          title: "Signature du contrat",
          description: "Signature du contrat d'investissement"
        },
        {
          step: 5,
          title: "Réalisation de l'investissement",
          description: "Versement des fonds et réalisation du projet"
        },
        {
          step: 6,
          title: "Déclaration fiscale",
          description: "Déclaration de la réduction d'impôt"
        }
      ]
    },
    risks: {
      title: "Points d'attention",
      risks: [
        "Engagement de conservation de 5 ans minimum",
        "Risque géographique et économique local",
        "Évolution réglementaire possible",
        "Liquidité limitée pendant la période d'engagement",
        "Complexité administrative et fiscale"
      ]
    },
    tips: {
      title: "Conseils pratiques",
      tips: [
        "Choisissez des zones avec une forte demande",
        "Vérifiez la qualité du promoteur local",
        "Analysez les perspectives économiques locales",
        "Prévoyez les frais de gestion et maintenance",
        "Consultez un expert spécialisé en outre-mer"
      ]
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#4EBBBD] border-t-transparent mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Chargement de la loi Girardin...</p>
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
              Défiscalisation outre-mer
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
                G
              </div>
              <p className="text-[#112033] text-sm font-medium">Girardin</p>
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
              { key: 'zones', label: 'Zones', icon: '🗺️' },
              { key: 'sectors', label: 'Secteurs', icon: '🏢' },
              { key: 'conditions', label: 'Conditions', icon: '📝' },
              { key: 'calculation', label: 'Calcul', icon: '🧮' }
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
                      <div className="text-2xl mb-3">🌴</div>
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

            {/* Zones Tab */}
            {activeTab === 'zones' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.zones.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {content.zones.zones.map((zone, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#112033] mb-3">{zone.name}</h3>
                      <p className="text-[#686868] text-sm mb-4">{zone.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-[#686868]">Avantages:</span>
                          <span className="font-bold text-[#4EBBBD]">{zone.avantages}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#686868]">Secteur:</span>
                          <span className="font-bold text-[#112033]">{zone.secteur}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sectors Tab */}
            {activeTab === 'sectors' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                    {content.sectors.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.sectors.sectors.map((sector, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{sector.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#112033]">{sector.name}</h3>
                          <p className="text-lg font-semibold text-[#4EBBBD]">{sector.avantages}</p>
                        </div>
                      </div>
                      <p className="text-[#112033] text-sm">{sector.description}</p>
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
                  <p className="text-[#686868] text-sm mb-6">Réduction d'impôt de 25% du montant investi</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {content.calculation.examples.map((example, index) => (
                      <div key={index} className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-[#4EBBBD] mb-1">{example.reduction}</div>
                        <div className="text-[#112033] text-sm font-medium">{example.montant}</div>
                        <div className="text-[#686868] text-xs mt-2">{example.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
      </section>

      {/* Risks and Tips Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
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
              Investir dans l'outre-mer avec la loi Girardin ?
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              Nos experts vous accompagnent dans votre projet d'investissement outre-mer
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