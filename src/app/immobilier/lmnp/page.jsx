"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";

const STORAGE_KEY = "lmnpPageContent";

const defaultContent = {
  hero: {
    title:
      "Investir avec le statut LMNP (location meublée non professionnelle) avec Azalee Wealth",
    subtitle:
      "L'investissement locatif est une stratégie d'épargne efficace. Ce système de défiscalisation immobilière permet de se constituer un patrimoine tout en percevant, mensuellement, un complément de salaire. Notre expertise de plus de 30 ans vous accompagne pour optimiser votre investissement LMNP.",
    button: "Simuler votre projet LMNP",
  },
  rightCard: {
    title: "Nos experts à votre service",
    benefits: [
      "Ne payez pas d'impôt sur vos revenus locatifs",
      "Meilleure rentabilité qu'avec une location nue",
      "Récupération de la TVA",
      "Accompagnement complet de votre projet",
    ],
    floatingText: "0 € →\nAnalyse personnalisée gratuite",
    icon: "/images/placements-responsive-header-icon-56586a.png",
  },
  sommaire: {
    items: [
      "Qu'est-ce que le statut LMNP (loueur meublé non professionnel) ?",
      "Quels sont les avantages du statut LMNP ?",
      "Quelles sont les conditions du statut LMNP ?",
      "Comment déclarer ses revenus en LMNP ?",
      "Comment obtenir le statut LMNP ?",
      "Quels sont les inconvénients de la location meublée non professionnelle ?",
      "Questions et réponses sur la LMNP",
    ],
  },
  imageBlock: {
    title: "Investissement LMNP en pratique",
    intro:
      "Découvrez comment l'investissement LMNP peut transformer votre approche de l'immobilier locatif. Nos experts vous accompagnent dans la sélection de biens optimisés pour la location meublée.",
    bullets: [
      "Biens sélectionnés pour la rentabilité LMNP",
      "Accompagnement personnalisé",
      "Optimisation fiscale garantie",
    ],
    image: "/images/imm1.jpg",
  },
  definition: {
    title: "1. Qu'est-ce que le statut LMNP (loueur meublé non professionnel) ?",
    paragraphs: [
      "Le statut de loueur meublé non professionnel (LMNP) est un statut attribué aux bailleurs non-professionnels qui louent des biens meublés. Cette activité ne constitue pas l'activité principale du bailleur. Il s'agit davantage d'un complément de revenus.",
      "Le statut LMNP est ouvert à tout contribuable français qui souhaite préparer sa retraite en investissant dans un bien meublé. Depuis 1949, le statut LMNP offre une optimisation fiscale intéressante à tout investisseur.",
      "Pour être considéré comme non professionnel, le propriétaire doit remplir certaines conditions :",
    ],
    bullets: [
      "Les recettes annuelles tirées de la location ne doivent pas dépasser 23 000 € pour l'ensemble du foyer fiscal.",
      "Ces recettes doivent également être inférieures au montant total des autres revenus d'activité du foyer fiscal (salaires, autres BIC, etc.).",
    ],
  },
  changes2025: {
    title: "Quels sont les changements du statut LMNP en 2025",
    paragraphs: [
      "L'adoption de la loi de finances 2025 par l'article 49.3 a renforcé les dispositions de la loi Le Meur relatives aux meublés de tourisme, impactant ainsi le statut LMNP. Désormais, l'amortissement, jusqu'à présent exclu du calcul de la plus-value lors de la revente, sera réintégré.",
      "Concrètement, si vous décidez de vendre votre bien, la somme totale des amortissements pratiqués pendant toute la durée de détention viendra diminuer votre prix d'achat initial. Résultat : la base taxable sur la plus-value augmente et, avec elle, l'impôt dû.",
    ],
  },
  avantages: {
    title: "2. Quels sont les avantages du statut LMNP ?",
    cards: [
      {
        title: "Optimisation fiscale",
        bullets: [
          "Amortissement du bien immobilier",
          "Déduction des charges et intérêts",
          "Réduction de l'impôt sur le revenu",
          "Possibilité de déficit foncier",
        ],
      },
      {
        title: "Rentabilité améliorée",
        bullets: [
          "Loyers plus élevés qu'en location nue",
          "Récupération de la TVA",
          "Complément de revenus mensuel",
          "Constitution d'un patrimoine",
        ],
      },
      {
        title: "Flexibilité",
        bullets: [
          "Baux courts renouvelables",
          "Adaptation aux besoins locatifs",
          "Gestion simplifiée",
          "Possibilité de résidence personnelle",
        ],
      },
    ],
  },
  conditions: {
    title: "3. Quelles sont les conditions du statut LMNP ?",
    cards: [
      {
        title: "Conditions de revenus",
        bullets: [
          "Recettes annuelles de location ≤ 23 000 €",
          "Revenus locatifs < autres revenus du foyer fiscal",
        ],
      },
      {
        title: "Conditions du bien",
        bullets: [
          "Logement meublé avec équipements de base",
          "Bail d'un an renouvelable (9 mois pour étudiants)",
          "Dépôt de garantie : 2 mois de loyer",
        ],
      },
    ],
  },
  declaration: {
    title: "4. Comment déclarer ses revenus en LMNP ?",
    cards: [
      {
        title: "Régime Micro-BIC",
        bullets: [
          "Recettes ≤ 72 600 € par an",
          "Abattement forfaitaire de 50%",
          "Pas de comptabilité obligatoire",
          "Déclaration simplifiée",
        ],
      },
      {
        title: "Régime Réel",
        bullets: [
          "Recettes > 72 600 € par an",
          "Comptabilité obligatoire",
          "Déduction des charges réelles",
          "Amortissement du bien",
        ],
      },
    ],
  },
  lmnpVsLmp: {
    title: "LMNP vs LMP : quelles différences ?",
    rows: [
      {
        critere: "Seuil de recettes",
        lmnp: "≤ 23 000 € et < autres revenus du foyer",
        lmp: "> 23 000 € ou > autres revenus du foyer",
      },
      { critere: "Statut", lmnp: "Non professionnel", lmp: "Professionnel" },
      {
        critere: "Régime fiscal",
        lmnp: "BIC (micro-BIC ou réel)",
        lmp: "BIC réel (cotisations sociales possibles)",
      },
      { critere: "Amortissements", lmnp: "Oui (impact plus-value en 2025)", lmp: "Oui" },
      {
        critere: "Plus-value à la revente",
        lmnp: "Régime des particuliers (avec réintégration des amortissements)",
        lmp: "Régime professionnel (selon situation)",
      },
    ],
    note:
      "Sources d'inspiration et synthèse basées sur des informations publiques du marché dont le dossier LMNP/LMP de Selexium.",
  },
  residences: {
    title: "Résidences éligibles au statut LMNP",
    items: [
      { title: "Étudiantes", text: "Proches des campus, adaptées aux besoins étudiants." },
      { title: "Senior", text: "Résidences services pour personnes âgées autonomes." },
      { title: "EHPAD", text: "Établissements d'hébergement pour dépendance." },
      { title: "Affaires", text: "Hébergement dédié aux déplacements professionnels." },
      { title: "Tourisme", text: "Résidences de vacances avec services." },
    ],
  },
  steps: {
    title: "5. Comment obtenir le statut LMNP ?",
    items: [
      { title: "Acquisition", text: "Achat d'un bien immobilier neuf ou ancien" },
      { title: "Aménagement", text: "Équipement du logement en meublé" },
      { title: "Location", text: "Mise en location avec bail meublé" },
      { title: "Déclaration", text: "Déclaration des revenus en BIC" },
    ],
  },
  inconvenients: {
    title:
      "6. Quels sont les inconvénients de la location meublée non professionnelle ?",
    cards: [
      {
        title: "Gestion locative",
        bullets: [
          "Rotation plus fréquente des locataires",
          "Entretien des meubles et équipements",
          "Gestion administrative plus complexe",
          "Risque de vacance locative",
        ],
      },
      {
        title: "Contraintes fiscales",
        bullets: [
          "Limitation des recettes à 23 000 €",
          "Obligation de respecter les conditions",
          "Risque de requalification en LMP",
          "Contrôles fiscaux possibles",
        ],
      },
      {
        title: "Investissement initial",
        bullets: [
          "Coût d'équipement du logement",
          "Amortissement sur plusieurs années",
          "Besoin de trésorerie initiale",
          "Délai de rentabilisation",
        ],
      },
    ],
  },
  faq: {
    title: "7. Questions et réponses sur la LMNP",
    items: [
      {
        q: "Quelles sont les différences entre la LMP et la LMNP ?",
        a: "Le statut de loueur en meublé professionnel implique de toucher des revenus locatifs suffisamment importants ... supérieurs à 23 000 € ou être plus importants que les revenus globaux du foyer fiscal soumis à l'impôt sur le revenu.",
      },
      {
        q: "Peut-on investir en LMNP dans l'ancien ?",
        a: "Il est tout à fait possible d'investir en LMNP dans l'ancien. Aussi connu sous le nom de LMNP d'occasion ... déjà équipé et parfois même occupé.",
      },
      {
        q: "Quelles résidences sont éligibles au statut LMNP ?",
        a: "Toutes les résidences donnent accès au statut LMNP : résidences étudiantes, senior, EHPAD, d'affaires et de tourisme.",
      },
      {
        q: "Comment revendre son bien LMNP ?",
        a: "La revente se fait comme une revente classique d'un bien immobilier. La plus-value est imposée à 19% + 17,2% de prélèvements sociaux, avec abattement selon la durée de détention.",
      },
    ],
  },
  finalCta: {
    title: "Prêt à investir en LMNP ?",
    subtitle:
      "Nos experts Azalee Wealth vous accompagnent pour construire votre stratégie d'investissement LMNP et optimiser votre défiscalisation immobilière.",
    primaryButton: "Simuler mon projet LMNP",
    secondaryButton: "Prendre rendez-vous",
  },
  sectionOrder: [
    "hero",
    "sommaire",
    "imageBlock",
    "definition",
    "changes2025",
    "avantages",
    "conditions",
    "declaration",
    "lmnpVsLmp",
    "residences",
    "steps",
    "inconvenients",
    "faq",
    "finalCta",
  ],
};

export default function LMNPPage() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setContent({ ...defaultContent, ...JSON.parse(saved) });
    } catch {}

    const handleContentUpdate = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setContent({ ...defaultContent, ...JSON.parse(saved) });
      } catch {}
    };
    window.addEventListener("contentUpdated", handleContentUpdate);
    return () => window.removeEventListener("contentUpdated", handleContentUpdate);
  }, []);

  // Merge with legacy flat keys if present (backward compatibility)
  const hero = {
    ...defaultContent.hero,
    ...(content.hero || {}),
    ...(content.heroTitle || content.heroSubtitle || content.heroButton
      ? {
          title: content.heroTitle || (content.hero || {}).title,
          subtitle: content.heroSubtitle || (content.hero || {}).subtitle,
          button: content.heroButton || (content.hero || {}).button,
        }
      : {}),
  };

  const rightCard = {
    ...defaultContent.rightCard,
    ...(content.rightCard || {}),
    ...(content.rightCardTitle || content.rightCardBenefits || content.floatingCardText || content.rightCardIcon
      ? {
          title: content.rightCardTitle || (content.rightCard || {}).title,
          benefits: content.rightCardBenefits || (content.rightCard || {}).benefits || [],
          floatingText: content.floatingCardText || (content.rightCard || {}).floatingText,
          icon: content.rightCardIcon || (content.rightCard || {}).icon,
        }
      : {}),
  };

  const imageBlock = {
    ...defaultContent.imageBlock,
    ...(content.imageBlock || {}),
    ...(content.imageBlockImage
      ? { image: content.imageBlockImage }
      : {}),
  };

  const sections = (content.sectionOrder && content.sectionOrder.length
    ? content.sectionOrder
    : defaultContent.sectionOrder);

  const renderSection = (key) => {
    switch (key) {
      case "hero":
        return (
          <section key="hero" className="relative w-full min-h-[543px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="w-full lg:w-[733px] bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
                  <h1 className="text-black text-xs sm:text-2xl lg:text-4xl font-cairo font-semibold leading-tight mb-6 sm:mb-8 text-center lg:text-left">
                    {hero.title}
                  </h1>
                  <p className="text-[#374151] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-8 sm:mb-10 text-center lg:text-left">
                    {hero.subtitle}
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                      {hero.button}
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-[467px] bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-6 sm:p-8 relative">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <img src={rightCard.icon} alt="Expert Icon" className="w-8 h-8 sm:w-9 sm:h-9" />
                    <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight">
                      {rightCard.title}
                    </h2>
                  </div>
                  <div className="absolute -top-16 -right-8 w-[51.3px] h-[51.3px] sm:w-[202px] sm:h-[202px] bg-gradient-to-r from-[#FFB263] to-[#79C3BD] rounded-full shadow-lg flex items-center justify-center">
                    <div className="text-center text-white font-source-sans font-semibold text-xs sm:text-base lg:text-xl leading-tight px-1 sm:px-0">
                      <span className="hidden sm:block">{(rightCard.floatingText || "").split("\n")[0]}<br /></span>
                      <span className="sm:hidden">0€</span>
                      <span className="hidden sm:block">{(rightCard.floatingText || "").split("\n")[1]}</span>
                    </div>
                  </div>
                  <div className="mt-8 sm:mt-12">
                    <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm font-source-sans font-semibold leading-relaxed">
                      {(rightCard.benefits || []).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-white mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case "sommaire":
        return (
          <section key="sommaire" className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">Sommaire</h2>
                <ol className="space-y-2 text-[#374151] font-inter">
                  {(content.sommaire?.items || []).map((item, idx) => (
                    <li className="flex items-start gap-2" key={idx}>
                      <span className="text-[#59E2E4] font-semibold">{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        );
      case "imageBlock":
        return (
          <section key="imageBlock" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-12">
                <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-[#005C69] text-lg sm:text-xl font-cairo font-semibold mb-4">
                        {imageBlock.title}
                      </h3>
                      <p className="text-[#374151] font-inter mb-4">{imageBlock.intro}</p>
                      <ul className="text-[#374151] font-inter space-y-2">
                        {(imageBlock.bullets || []).map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#59E2E4] mt-1">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <img
                        src={imageBlock.image}
                        alt="Investissement immobilier LMNP - Exemple"
                        className="w-full h-auto rounded-lg object-cover shadow-lg"
                        style={{ maxHeight: "300px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case "definition":
        return (
          <section key="definition" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
                  {content.definition?.title}
                </h2>
                <div className="space-y-6 text-[#374151] font-inter">
                  {(content.definition?.paragraphs || []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {(content.definition?.bullets || []).length > 0 && (
                    <ul className="list-disc pl-6 space-y-2">
                      {content.definition.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      case "changes2025":
        return (
          <section key="changes2025" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 border-l-4 border-[#B99066]">
                <h3 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-4">
                  {content.changes2025?.title}
                </h3>
                <div className="space-y-4 text-[#374151] font-inter">
                  {(content.changes2025?.paragraphs || []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "avantages":
        return (
          <section key="avantages" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
                  {content.avantages?.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(content.avantages?.cards || []).map((card, i) => (
                    <div key={i} className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">{card.title}</h3>
                      <ul className="text-[#374151] text-sm font-inter space-y-2">
                        {(card.bullets || []).map((b, j) => (
                          <li key={j}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "conditions":
        return (
          <section key="conditions" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
                  {content.conditions?.title}
                </h2>
                <div className="space-y-6 text-[#374151] font-inter">
                  {(content.conditions?.cards || []).map((card, i) => (
                    <div key={i} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] p-6 rounded-lg">
                      <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4">{card.title}</h3>
                      <ul className="space-y-2">
                        {(card.bullets || []).map((b, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-[#59E2E4] mt-1">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "declaration":
        return (
          <section key="declaration" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
                  {content.declaration?.title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {(content.declaration?.cards || []).map((card, i) => (
                    <div key={i} className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-[#005C69] font-cairo font-semibold text-xl mb-4">{card.title}</h3>
                      <ul className="space-y-3 text-[#374151] font-inter">
                        {(card.bullets || []).map((b, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className={i === 0 ? "text-[#59E2E4] mt-1" : "text-[#B99066] mt-1"}>•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "lmnpVsLmp":
        return (
          <section key="lmnpVsLmp" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
                  {content.lmnpVsLmp?.title}
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-[#F2F2F2]">
                      <tr>
                        <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">Critère</th>
                        <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">LMNP</th>
                        <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">LMP</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#374151] font-inter">
                      {(content.lmnpVsLmp?.rows || []).map((row, i) => (
                        <tr key={i} className={i % 2 === 1 ? "border-t bg-[#FAFAFA]" : "border-t"}>
                          <td className="px-4 py-3">{row.critere}</td>
                          <td className="px-4 py-3">{row.lmnp}</td>
                          <td className="px-4 py-3">{row.lmp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {content.lmnpVsLmp?.note && (
                  <p className="mt-4 text-[#686868] text-sm">{content.lmnpVsLmp.note}</p>
                )}
              </div>
            </div>
          </section>
        );
      case "residences":
        return (
          <section key="residences" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
                  {content.residences?.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {(content.residences?.items || []).map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center">
                      <h3 className="text-[#005C69] font-cairo font-semibold mb-2">{item.title}</h3>
                      <p className="text-[#374151] text-sm font-inter">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "steps":
        return (
          <section key="steps" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
                  {content.steps?.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(content.steps?.items || []).map((item, i) => (
                    <div key={i} className="text-center bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                      <div className={`w-12 h-12 ${i % 2 === 0 ? "bg-[#59E2E4]" : "bg-[#B99066]"} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <span className="text-white text-xl font-bold">{i + 1}</span>
                      </div>
                      <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-[#374151] text-sm font-inter">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "inconvenients":
        return (
          <section key="inconvenients" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
                  {content.inconvenients?.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(content.inconvenients?.cards || []).map((card, i) => (
                    <div key={i} className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">{card.title}</h3>
                      <ul className="text-[#374151] text-sm font-inter space-y-2">
                        {(card.bullets || []).map((b, j) => (
                          <li key={j}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "faq":
        return (
          <section key="faq" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
                <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
                  {content.faq?.title}
                </h2>
                <div className="space-y-6">
                  {(content.faq?.items || []).map((f, i) => (
                    <div key={i} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                      <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">{f.q}</h3>
                      <p className="text-[#374151] font-inter">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "finalCta":
        return (
          <section key="finalCta" className="w-full bg-white py-0">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-8 sm:p-10 lg:p-12 text-center">
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-4 sm:mb-6">
                  {content.finalCta?.title}
                </h2>
                <p className="text-white text-base sm:text-lg font-inter mb-6 sm:mb-8 max-w-2xl mx-auto">
                  {content.finalCta?.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#005C69] px-8 py-4 rounded-lg font-inter font-semibold hover:bg-gray-100 transition-colors duration-200">
                    {content.finalCta?.primaryButton}
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold hover:bg-white hover:text-[#005C69] transition-colors duration-200">
                    {content.finalCta?.secondaryButton}
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      {/* Map ordered sections */}
      {sections.map((s) => renderSection(s))}
    </>
  );
} 