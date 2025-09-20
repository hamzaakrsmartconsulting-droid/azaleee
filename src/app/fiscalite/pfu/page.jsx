"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const STORAGE_KEY = "pfuContent";

const defaultContent = {
  hero: {
    title: "PFU ou Prélèvement Forfaitaire Unique",
    subtitle: "Tout ce qu'un investisseur doit savoir. Le Prélèvement Forfaitaire Unique (PFU), aussi appelé « flat tax », est une mécanique fiscale clé depuis 2018. Voici une note pédagogique pour tout comprendre.",
    button: "Calculer mon PFU",
    image: "/images/pfu.webp"
  },
  definition: {
    title: "🔄 Qu'est-ce que le PFU ?",
    description: "Il s'agit d'un prélèvement unique de 30% qui s'applique aux revenus du capital mobilier :",
    details: [
      "12,8% d'impôt sur le revenu",
      "17,2% de prélèvements sociaux (CSG/CRDS, etc.)",
      "Le PFU est appliqué automatiquement par les banques, compagnies d'assurance et plateformes d'investissement"
    ]
  },
  creation: {
    title: "🌐 Pourquoi a-t-il été créé ?",
    description: "Mis en place par la loi de finances 2018, le PFU avait deux objectifs :",
    objectifs: [
      "Simplifier la fiscalité du capital pour les contribuables",
      "Rendre la France plus attractive pour l'investissement (notamment international)"
    ],
    contexte: "Avant le PFU, les revenus du capital étaient intégrés au barème progressif de l'impôt sur le revenu, ce qui pouvait conduire à une imposition très élevée (> 45%)."
  },
  taux: {
    title: "Composition du taux de 30%",
    items: [
      { label: "Impôt sur le revenu", taux: "12.8%", description: "Part revenant à l'État" },
      { label: "CSG", taux: "9.2%", description: "Contribution Sociale Généralisée" },
      { label: "CRDS", taux: "0.5%", description: "Contribution au Remboursement de la Dette Sociale" },
      { label: "Prélèvement de solidarité", taux: "7.5%", description: "Contribution additionnelle" }
    ]
  },
  revenus: {
    title: "🔠 Sur quels revenus le PFU s'applique-t-il ?",
    description: "Le PFU s'applique aux revenus du capital mobilier suivants :",
    items: [
      {
        type: "Intérêts",
        description: "Livrets non réglementés, comptes à terme",
        exemples: ["Comptes rémunérés", "Livrets bancaires", "Comptes à terme"]
      },
      {
        type: "Dividendes",
        description: "Revenus distribués par les sociétés",
        exemples: ["Actions françaises", "Actions étrangères", "Parts de SCPI"]
      },
      {
        type: "Plus-values de valeurs mobilières",
        description: "Actions, obligations, OPCVM, ETF",
        exemples: ["Vente d'actions", "Cession de parts", "Rachat de parts"]
      },
      {
        type: "Assurance vie",
        description: "Uniquement les gains rachetés (hors abattement, selon durée de détention)",
        exemples: ["Rachats partiels", "Rachats totaux", "Gains réalisés"]
      }
    ],
    exclusions: "Le PFU ne s'applique pas aux livrets réglementés (Livret A, LDDS, LEP), ni aux plus-values immobilières."
  },
  avantages: {
    title: "🌟 Dans quels cas est-il préférable au barème progressif ?",
    description: "Le PFU est avantageux pour les contribuables ayant une TMI supérieure à 14%, soit la plupart des foyers imposés au taux moyen ou supérieur.",
    tableau: {
      headers: ["TMI du foyer", "Option PFU intéressante ?"],
      rows: [
        {
          tmi: "0% ou 11%",
          option: "Pas toujours : abattements IR peuvent être plus favorables"
        },
        {
          tmi: "30%, 41%, 45%",
          option: "Oui : PFU souvent plus léger que barème + PS"
        }
      ]
    }
  },
  renonciation: {
    title: "📅 Peut-on renoncer au PFU ?",
    description: "Oui, sur option expresse, vous pouvez demander l'intégration de vos revenus de capitaux mobiliers au barème progressif.",
    conditions: [
      "Cette option est globale et concerne tous les revenus du capital perçus l'année en question",
      "Elle est à formuler lors de la déclaration de revenus"
    ],
    attention: "Attention : en cas d'option, vous bénéficiez d'abattements (ex : 40% sur les dividendes), mais vous payez la CSG non déductible sur l'ensemble."
  },
  assuranceVie: {
    title: "✉ Assurance vie : PFU ou abattement ?",
    description: "Dans le cadre de l'assurance vie, les rachats sont fiscalisés uniquement sur la quote-part de gain.",
    regles: [
      {
        periode: "Avant 8 ans",
        fiscalite: "PFU 12,8% ou barème sur option"
      },
      {
        periode: "Après 8 ans",
        fiscalite: "Abattement annuel de 4 600€ (ou 9 200€ pour un couple) puis taux de 7,5% sur la fraction imposable ≤ 150 000€ de versements (sinon 12,8%)"
      }
    ],
    precision: "Le PFU ne supprime pas l'abattement de l'assurance vie. Il coexiste avec selon la durée de détention."
  },
  risques: {
    title: "⚠ Risques et évolutions possibles",
    description: "Le PFU pourrait être remis en question politiquement (accusé de favoriser les plus aisés)",
    evolutions: [
      "Un retour à l'imposition au barème ou une hausse du taux global (actuellement 30%) sont régulièrement débattus",
      "Toutefois, toute réforme impliquerait un impact sur l'attractivité fiscale de la France"
    ]
  },
  azaleeRecommendation: {
    title: "📈 Recommandation Azalée Patrimoine",
    description: "Nous vous accompagnons pour :",
    accompagnement: [
      "Choisir entre PFU et barème IR selon votre TMI et vos objectifs",
      "Arbitrer vos placements pour lisser la fiscalité dans le temps",
      "Structurer vos investissements avec assurance vie, contrat de capitalisation, PEA, CTO..."
    ]
  },
  choix: {
    title: "PFU vs Imposition classique",
    description: "Vous pouvez choisir chaque année entre le PFU et l'imposition au barème progressif",
    avantages: [
      "Simplicité : taux unique de 30%",
      "Prévisibilité : pas de surprise fiscale",
      "Rapidité : calcul immédiat",
      "Pas de déclaration détaillée"
    ],
    inconvenients: [
      "Taux fixe : pas d'adaptation à votre situation",
      "Pas de déduction des charges",
      "Pas de report des pertes",
      "Peut être plus élevé que votre TMI"
    ]
  },
  calcul: {
    title: "Calculateur PFU",
    description: "Estimez le montant de votre PFU",
    fields: [
      { id: "dividendes", label: "Dividendes reçus", placeholder: "5000" },
      { id: "interets", label: "Intérêts perçus", placeholder: "2000" },
      { id: "plusValues", label: "Plus-values réalisées", placeholder: "3000" }
    ]
  },
  exemples: {
    title: "Exemples concrets",
    items: [
      {
        scenario: "Dividendes de 8 000€",
        pfu: "8 000€ × 30% = 2 400€",
        tmi: "8 000€ × 41% = 3 280€",
        choix: "PFU plus avantageux (économie de 880€)"
      },
      {
        scenario: "Intérêts de 3 000€",
        pfu: "3 000€ × 30% = 900€",
        tmi: "3 000€ × 11% = 330€",
        choix: "TMI plus avantageux (économie de 570€)"
      }
    ]
  },
  cta: {
    title: "Vous souhaitez savoir quelle option est la plus avantageuse pour vous ?",
    subtitle: "Nos experts vous accompagnent pour choisir entre PFU et imposition classique",
    email: "contact@azalee-patrimoine.fr",
    primaryButton: "Prenez rendez-vous ici",
    secondaryButton: "Nous écrire"
  }
};

export default function PFUPage() {
  const [content, setContent] = useState(defaultContent);
  const [calculValues, setCalculValues] = useState({
    dividendes: "",
    interets: "",
    plusValues: ""
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setContent((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.error("Failed to load content", e);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setContent((prev) => ({ ...prev, ...JSON.parse(saved) }));
      } catch {}
    };
    window.addEventListener("contentUpdated", handler);
    return () => window.removeEventListener("contentUpdated", handler);
  }, []);

  const calculatePFU = () => {
    const dividendes = parseFloat(calculValues.dividendes) || 0;
    const interets = parseFloat(calculValues.interets) || 0;
    const plusValues = parseFloat(calculValues.plusValues) || 0;
    
    const totalRevenus = dividendes + interets + plusValues;
    const pfu = totalRevenus * 0.30;
    
    return { totalRevenus, pfu };
  };

  const { totalRevenus, pfu } = calculatePFU();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/pfu.webp')`,
            filter: 'brightness(0.3)'
          }}
        ></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Guide fiscal
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              {content.hero.title}
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              {content.hero.subtitle}
            </p>
            <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
              {content.hero.button}
            </button>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-8 shadow-lg">
            <h2 className="text-[#112033] text-2xl font-semibold mb-6 text-center">
              {content.definition.title}
            </h2>
            <p className="text-[#686868] text-lg mb-6 text-center max-w-3xl mx-auto">
              {content.definition.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.definition.details.map((detail, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-[#112033] font-medium">{detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Creation Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-[#112033] text-2xl font-semibold mb-6 text-center">
              {content.creation.title}
            </h2>
            <p className="text-[#686868] text-lg mb-6 text-center max-w-3xl mx-auto">
              {content.creation.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {content.creation.objectifs.map((objectif, index) => (
                <div key={index} className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white text-[#4EBBBD] rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium">{objectif}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#FAFFEF] rounded-lg p-6 text-center">
              <p className="text-[#112033] font-medium">{content.creation.contexte}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Taux Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.taux.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.taux.items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-[#4EBBBD] mb-2">{item.taux}</div>
                <div className="text-[#112033] font-semibold mb-2">{item.label}</div>
                <div className="text-[#686868] text-sm">{item.description}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-[#4EBBBD] to-[#008D78] rounded-xl p-6 text-white inline-block">
              <div className="text-sm mb-1">Total PFU</div>
              <div className="text-4xl font-bold">30%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenus Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.revenus.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.revenus.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {content.revenus.items.map((revenu, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 shadow-lg">
                <h3 className="text-[#112033] text-lg font-semibold mb-3">{revenu.type}</h3>
                <p className="text-[#686868] text-sm mb-4">{revenu.description}</p>
                <ul className="space-y-2">
                  {revenu.exemples.map((exemple, idx) => (
                    <li key={idx} className="text-[#112033] text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#4EBBBD] rounded-full"></span>
                      {exemple}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[#FFE4E1] to-[#FFCCCB] rounded-xl p-6 text-center">
            <h3 className="text-[#112033] text-lg font-semibold mb-2">⚠️ Exclusions</h3>
            <p className="text-[#112033] font-medium">{content.revenus.exclusions}</p>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.avantages.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.avantages.description}
          </p>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#4EBBBD] text-white">
                    {content.avantages.tableau.headers.map((header, index) => (
                      <th key={index} className="text-left py-4 px-6 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.avantages.tableau.rows.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-[#112033]">{row.tmi}</td>
                      <td className="py-4 px-6 text-[#686868]">{row.option}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Renonciation Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-8 shadow-lg">
            <h2 className="text-[#112033] text-2xl font-semibold mb-6 text-center">
              {content.renonciation.title}
            </h2>
            <p className="text-[#686868] text-lg mb-6 text-center max-w-3xl mx-auto">
              {content.renonciation.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {content.renonciation.conditions.map((condition, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-[#112033] font-medium">{condition}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-[#FFE4E1] to-[#FFCCCB] rounded-lg p-6 text-center">
              <p className="text-[#112033] font-medium">{content.renonciation.attention}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Assurance Vie Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.assuranceVie.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.assuranceVie.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {content.assuranceVie.regles.map((regle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-[#112033] text-lg font-semibold mb-3">{regle.periode}</h3>
                <p className="text-[#686868] text-sm">{regle.fiscalite}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white text-center">
            <p className="font-medium">{content.assuranceVie.precision}</p>
          </div>
        </div>
      </section>

      {/* Risques Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-8 shadow-lg">
            <h2 className="text-[#112033] text-2xl font-semibold mb-6 text-center">
              {content.risques.title}
            </h2>
            <p className="text-[#686868] text-lg mb-6 text-center max-w-3xl mx-auto">
              {content.risques.description}
            </p>
            <div className="space-y-4">
              {content.risques.evolutions.map((evolution, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#B99066] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-[#112033] font-medium">{evolution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Azalée Recommendation Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.azaleeRecommendation.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.azaleeRecommendation.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.azaleeRecommendation.accompagnement.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white text-[#4EBBBD] rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choix Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.choix.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.choix.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 text-green-600">✅ Avantages du PFU</h3>
              <ul className="space-y-3">
                {content.choix.avantages.map((avantage, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    {avantage}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 text-red-600">❌ Inconvénients du PFU</h3>
              <ul className="space-y-3">
                {content.choix.inconvenients.map((inconvenient, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    {inconvenient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6">
              <h2 className="text-[#112033] text-xl font-semibold mb-4">
                {content.calcul.title}
              </h2>
              <p className="text-[#686868] text-sm mb-6">
                {content.calcul.description}
              </p>
              <div className="space-y-4">
                {content.calcul.fields.map((field) => (
                  <div key={field.id}>
                    <label className="block text-[#686868] text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={calculValues[field.id]}
                        onChange={(e) => setCalculValues(prev => ({
                          ...prev,
                          [field.id]: e.target.value
                        }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        placeholder={field.placeholder}
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#686868]">€</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4">📊 Résultats du calcul</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#008D78] rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total des revenus</span>
                    <span className="text-2xl font-bold">{totalRevenus.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">PFU (30%)</span>
                    <span className="text-2xl font-bold">{pfu.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="bg-[#FAFFEF] rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#112033] text-sm">Revenu net</span>
                    <span className="text-[#112033] text-lg font-semibold">
                      {(totalRevenus - pfu).toLocaleString()}€
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.exemples.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.exemples.items.map((exemple, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-[#112033] text-lg font-semibold mb-4">{exemple.scenario}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#686868]">PFU (30%):</span>
                    <span className="text-[#4EBBBD] font-semibold">{exemple.pfu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#686868]">TMI:</span>
                    <span className="text-[#B99066] font-semibold">{exemple.tmi}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <span className="text-[#112033] font-bold text-lg">{exemple.choix}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F2F2F2] to-[#E5E5E5]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-[#112033] text-2xl lg:text-3xl font-semibold mb-4">
              {content.cta.title}
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              {content.cta.subtitle}
            </p>
            <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white mb-8">
              <h3 className="text-xl font-semibold mb-3">📧 {content.cta.email}</h3>
              <p className="text-sm opacity-90">Prenez rendez-vous pour optimiser votre fiscalité</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                🗓️ {content.cta.primaryButton}
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                📧 {content.cta.secondaryButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 