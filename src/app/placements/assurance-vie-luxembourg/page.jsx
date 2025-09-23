"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const STORAGE_KEY = "assuranceVieLuxembourgContent";

const defaultContent = {
  hero: {
    title: "Assurance-vie luxembourgeoise : la version haut de gamme",
    subtitle: "Souvent perçue comme une \"assurance-vie haut de gamme\", l'assurance-vie luxembourgeoise est en réalité un outil patrimonial transfrontalier qui répond parfaitement aux besoins des investisseurs fortunés et des personnes susceptibles de s'expatrier.",
    description: "Si le discours marketing autour du triangle de sécurité est bien connu, il ne reflète pas toujours la réalité de la protection offerte selon les contrats. Le véritable atout de l'assurance-vie luxembourgeoise réside dans sa neutralité fiscale et sa souplesse en matière d'investissement et de mobilité internationale.",
    button: "Demander une étude patrimoniale gratuite",
    image: "/images/assurance-vie-luxembourg-hero.jpg"
  },
  fonctionnement: {
    title: "📌 Fonctionnement et spécificités",
    description: "L'assurance-vie luxembourgeoise est proche de l'assurance-vie française :",
    points: [
      "Elle permet d'investir sur des fonds en euros (capital garanti) et des unités de compte (actions, obligations, ETF, SCPI, private equity, produits structurés…)",
      "Elle est souscrite auprès d'un assureur luxembourgeois, mais peut être distribuée par des courtiers et CGP en France",
      "Elle est ouverte aussi bien aux résidents français qu'aux non-résidents"
    ],
    difference: "La grande différence tient à son régime fiscal et juridique : elle est conçue pour s'adapter à la résidence fiscale du souscripteur, même en cas de mobilité internationale."
  },
  neutralite: {
    title: "🌍 L'atout majeur : la neutralité fiscale pour les expatriés",
    description: "Contrairement à l'assurance-vie française, dont la fiscalité est liée au droit français, l'assurance-vie luxembourgeoise s'adapte au pays de résidence fiscale du souscripteur.",
    points: [
      "Tant que vous êtes résident fiscal français, elle suit les règles fiscales françaises (PFU, abattements après 8 ans)",
      "Si vous devenez résident fiscal étranger, le contrat bascule automatiquement sous le régime fiscal de votre pays d'accueil",
      "En cas de retour en France, l'antériorité fiscale du contrat est conservée"
    ],
    exemple: {
      titre: "Exemple :",
      description: "Monsieur B souscrit une assurance-vie luxembourgeoise en France en 2025. En 2030, il part travailler au Canada : son contrat est reconnu fiscalement au Canada. Dix ans plus tard, il revient en France : il conserve son antériorité fiscale (plus de 8 ans).",
      conclusion: "C'est ce caractère \"portable\" qui en fait un produit unique pour les expatriés ou les personnes ayant un profil international."
    }
  },
  souplesse: {
    title: "💶 Souplesse d'investissement : multi-devises et fonds dédiés",
    description: "Autre atout majeur : la souplesse des supports disponibles.",
    avantages: [
      "Multi-devises : possibilité d'investir en euros, dollars, francs suisses, livres sterling… Un avantage clé pour les personnes ayant des revenus ou des projets dans plusieurs zones monétaires",
      "Fonds internes dédiés (FID) : à partir d'un certain montant (souvent 250 000 €), il est possible de créer une gestion financière sur mesure, adaptée à votre profil",
      "Large univers d'investissement : private equity, hedge funds, fonds alternatifs, produits structurés… L'éventail est beaucoup plus large qu'en assurance-vie française"
    ],
    exemple: "Exemple : un expatrié au Qatar percevant ses revenus en dollars peut loger ses placements en USD pour éviter le risque de change, tout en gardant une gestion financière personnalisée."
  },
  avantages: {
    title: "✅ Les avantages de l'assurance-vie luxembourgeoise",
    points: [
      "Neutralité fiscale : le contrat s'adapte à votre pays de résidence fiscale actuel",
      "Souplesse d'investissement : accès à une gamme d'actifs bien plus large, avec une gestion sur mesure possible",
      "Multi-devises : protection contre les fluctuations de change",
      "Transmission internationale : possibilité de désigner des bénéficiaires situés dans différents pays, avec adaptation aux conventions fiscales",
      "Protection renforcée : en cas de faillite de l'assureur, vos avoirs sont logés dans une banque dépositaire, séparés des fonds propres"
    ]
  },
  inconvenients: {
    title: "⚠️ Les inconvénients et points de vigilance",
    points: [
      "Ticket d'entrée élevé : la plupart des assureurs exigent un investissement minimum de 250 000 €, parfois 500 000 €",
      "Complexité administrative : gestion plus lourde en raison des réglementations transfrontalières",
      "Coûts de gestion : souvent supérieurs à ceux des contrats français classiques, surtout pour les fonds dédiés",
      "Triangle de sécurité à relativiser : même si le Luxembourg impose une ségrégation stricte des actifs, la protection réelle varie selon le contrat et la banque dépositaire choisie"
    ]
  },
  transmission: {
    title: "⚖️ Assurance-vie luxembourgeoise et transmission",
    description: "Comme en France, le contrat permet de désigner librement des bénéficiaires. L'intérêt est renforcé pour les familles vivant à l'étranger ou ayant des héritiers non-résidents.",
    points: [
      "La fiscalité applicable dépendra de la résidence fiscale du défunt et des bénéficiaires",
      "La clause bénéficiaire peut être adaptée aux particularités de chaque pays"
    ],
    exemple: "Exemple : un résident français désigne ses enfants installés aux États-Unis et en Espagne comme bénéficiaires. À son décès, la fiscalité appliquée sera analysée au regard des conventions fiscales internationales."
  },
  exemple: {
    title: "💡 Exemple concret",
    description: "Madame X, cadre dirigeante, souscrit une assurance-vie luxembourgeoise en 2025 avec 500 000 €. En 2030, elle est expatriée à Singapour pour son travail.",
    points: [
      "Son contrat continue sans rupture, fiscalisé selon la législation singapourienne",
      "Elle conserve son antériorité fiscale en France",
      "En 2040, elle revient en France : son contrat a plus de 15 ans, elle bénéficie donc des abattements fiscaux maximaux pour ses rachats"
    ]
  },
  conseil: {
    title: "🎯 Conseil Azalée Patrimoine",
    description: "L'assurance-vie luxembourgeoise est un produit d'exception, mais elle ne convient pas à tout le monde. Elle s'adresse principalement aux :",
    cibles: [
      "Expatriés ou futurs expatriés, qui bénéficient de sa neutralité fiscale",
      "Investisseurs fortunés, capables d'apporter un ticket d'entrée conséquent",
      "Familles ayant des enjeux internationaux (héritiers dans plusieurs pays, projets d'installation à l'étranger)"
    ],
    accompagnement: "Chez Azalée Patrimoine, nous accompagnons nos clients dans :",
    services: [
      "La sélection du bon contrat luxembourgeois en fonction de leur mobilité internationale",
      "Le choix des supports (multi-devises, fonds dédiés, SCPI, private equity)",
      "L'optimisation fiscale et successorale, en coordination avec leur situation personnelle et leurs projets de vie"
    ],
    conclusion: "L'assurance-vie luxembourgeoise n'est pas seulement un produit \"sécurisé\", c'est surtout un outil patrimonial international, pensé pour ceux dont la vie ne se limite pas à un seul pays."
  },
  cta: {
    title: "📩 Contactez un conseiller Azalée Patrimoine",
    subtitle: "pour savoir si l'assurance-vie luxembourgeoise peut s'intégrer à votre stratégie patrimoniale et anticiper vos projets d'expatriation",
    email: "contact@azalee-patrimoine.fr",
    primaryButton: "Demander une étude gratuite",
    secondaryButton: "Prendre rendez-vous"
  }
};

export default function AssuranceVieLuxembourgPage() {
  const [content, setContent] = useState(defaultContent);
  const [activeTab, setActiveTab] = useState("fonctionnement");

  // Load content from localStorage
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

  // Live update on CustomEvent from CMS
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

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[543px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="w-full lg:w-[733px] bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
              {/* Main Title */}
              <h1 className="text-black text-xs sm:text-2xl lg:text-4xl font-cairo font-semibold leading-tight mb-6 sm:mb-8 text-center lg:text-left">
                {content.hero.title}
              </h1>
              
              {/* Description */}
              <p className="text-[#374151] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-8 sm:mb-10 text-center lg:text-left">
                {content.hero.subtitle}
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                  {content.hero.button}
                </button>
              </div>
            </div>
            
            {/* Right Card */}
            <div className="w-full lg:w-[467px] bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-6 sm:p-8 relative">
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <img
                  src="/images/placements-responsive-header-icon-56586a.png"
                  alt="Expert Icon"
                  className="w-8 h-8 sm:w-9 sm:h-9"
                />
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight">
                  Version haut de gamme
                </h2>
              </div>
              
              {/* Floating Price Card */}
              <div className="absolute -top-16 -right-8 w-[51.3px] h-[51.3px] sm:w-[202px] sm:h-[202px] bg-gradient-to-r from-[#FFB263] to-[#79C3BD] rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center text-white font-source-sans font-semibold text-xs sm:text-base lg:text-xl leading-tight px-1 sm:px-0">
                  <span className="hidden sm:block">250k€ →<br /></span>
                  <span className="sm:hidden">250k€</span>
                  <span className="hidden sm:block">Ticket d'entrée</span>
                </div>
              </div>
              
              {/* Services List */}
              <div className="mt-8 sm:mt-12">
                <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm font-source-sans font-semibold leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Neutralité fiscale internationale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Multi-devises et fonds dédiés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Transmission internationale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Protection renforcée</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("fonctionnement")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "fonctionnement"
                  ? "bg-[#253F60] text-white"
                  : "bg-gray-100 text-[#253F60] hover:bg-gray-200"
              }`}
            >
              Fonctionnement
            </button>
            <button
              onClick={() => setActiveTab("neutralite")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "neutralite"
                  ? "bg-[#253F60] text-white"
                  : "bg-gray-100 text-[#253F60] hover:bg-gray-200"
              }`}
            >
              Neutralité fiscale
            </button>
            <button
              onClick={() => setActiveTab("souplesse")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "souplesse"
                  ? "bg-[#253F60] text-white"
                  : "bg-gray-100 text-[#253F60] hover:bg-gray-200"
              }`}
            >
              Souplesse
            </button>
            <button
              onClick={() => setActiveTab("avantages")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "avantages"
                  ? "bg-[#253F60] text-white"
                  : "bg-gray-100 text-[#253F60] hover:bg-gray-200"
              }`}
            >
              Avantages
            </button>
            <button
              onClick={() => setActiveTab("conseil")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "conseil"
                  ? "bg-[#253F60] text-white"
                  : "bg-gray-100 text-[#253F60] hover:bg-gray-200"
              }`}
            >
              Conseil
            </button>
          </div>
          </div>
      </section>

      {/* Fonctionnement Section */}
      {activeTab === "fonctionnement" && (
        <div className="space-y-12">
          <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#005C69] text-2xl font-semibold text-center mb-8">
                {content.fonctionnement.title}
            </h2>
              <p className="text-[#374151] text-lg text-center mb-8 max-w-3xl mx-auto">
                {content.fonctionnement.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {content.fonctionnement.points.map((point, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#253F60] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
              </div>
                      <p className="text-[#374151] text-sm font-medium">{point}</p>
              </div>
            </div>
                ))}
          </div>

              <div className="bg-gradient-to-r from-[#253F60] to-[#3A5A7A] rounded-xl p-8 text-white text-center">
                <p className="text-lg font-medium">👉 {content.fonctionnement.difference}</p>
              </div>
            </div>
          </section>

          {/* Inconvénients Section */}
          <section className="py-12 bg-white">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#005C69] text-2xl font-semibold text-center mb-8">
                {content.inconvenients.title}
            </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.inconvenients.points.map((point, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-xl shadow-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B99066] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-[#374151] text-sm font-medium">{point}</p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
          </section>
                </div>
      )}

      {/* Neutralité Section */}
      {activeTab === "neutralite" && (
        <div className="space-y-12">
          <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#005C69] text-2xl font-semibold text-center mb-8">
                {content.neutralite.title}
              </h2>
              <p className="text-[#374151] text-lg text-center mb-8 max-w-3xl mx-auto">
                {content.neutralite.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {content.neutralite.points.map((point, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#253F60] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
              </div>
                      <p className="text-[#374151] text-sm font-medium">{point}</p>
                </div>
              </div>
                ))}
                </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-[#005C69] text-lg font-semibold mb-4">{content.neutralite.exemple.titre}</h3>
                <p className="text-[#374151] text-sm mb-4">{content.neutralite.exemple.description}</p>
                <div className="bg-gradient-to-r from-[#253F60] to-[#3A5A7A] rounded-lg p-4 text-white">
                  <p className="text-sm font-medium">👉 {content.neutralite.exemple.conclusion}</p>
              </div>
            </div>
          </div>
          </section>

          {/* Transmission Section */}
          <section className="py-12 bg-white">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#005C69] text-2xl font-semibold text-center mb-8">
                {content.transmission.title}
            </h2>
              <p className="text-[#374151] text-lg text-center mb-8 max-w-3xl mx-auto">
                {content.transmission.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {content.transmission.points.map((point, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-xl shadow-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#253F60] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
              </div>
                      <p className="text-[#374151] text-sm font-medium">{point}</p>
              </div>
            </div>
                ))}
          </div>

              <div className="bg-gradient-to-r from-[#253F60] to-[#3A5A7A] rounded-xl p-8 text-white text-center">
                <p className="text-lg font-medium">👉 {content.transmission.exemple}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Souplesse Section */}
      {activeTab === "souplesse" && (
        <div className="space-y-12">
          <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#005C69] text-2xl font-semibold text-center mb-8">
                {content.souplesse.title}
            </h2>
              <p className="text-[#374151] text-lg text-center mb-8 max-w-3xl mx-auto">
                {content.souplesse.description}
              </p>
              
              <div className="space-y-6 mb-8">
                {content.souplesse.avantages.map((avantage, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#253F60] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
              </div>
                      <p className="text-[#374151] text-sm font-medium">{avantage}</p>
              </div>
            </div>
                ))}
          </div>

              <div className="bg-gradient-to-r from-[#253F60] to-[#3A5A7A] rounded-xl p-8 text-white text-center">
                <p className="text-lg font-medium">👉 {content.souplesse.exemple}</p>
              </div>
            </div>
          </section>

          {/* Exemple Section */}
          <section className="py-12 bg-white">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#005C69] text-2xl font-semibold text-center mb-8">
                {content.exemple.title}
            </h2>
              <p className="text-[#374151] text-lg text-center mb-8 max-w-3xl mx-auto">
                {content.exemple.description}
              </p>
              
              <div className="space-y-6">
                {content.exemple.points.map((point, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-xl shadow-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#253F60] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                </div>
                      <p className="text-[#374151] text-sm font-medium">{point}</p>
              </div>
                </div>
                ))}
              </div>
                </div>
          </section>
              </div>
      )}

      {/* Avantages Section */}
      {activeTab === "avantages" && (
        <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#005C69] text-2xl font-semibold text-center mb-8">
              {content.avantages.title}
            </h2>
            
            <div className="space-y-6">
              {content.avantages.points.map((point, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#59E2E4] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                </div>
                    <p className="text-[#374151] text-sm font-medium">{point}</p>
              </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conseil Section */}
      {activeTab === "conseil" && (
        <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#005C69] text-2xl font-semibold text-center mb-8">
              {content.conseil.title}
            </h2>
            <p className="text-[#374151] text-lg text-center mb-8 max-w-3xl mx-auto">
              {content.conseil.description}
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-[#005C69] text-lg font-semibold mb-6 text-center">
                Elle s'adresse principalement aux :
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.conseil.cibles.map((cible, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#253F60] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-[#374151] text-sm font-medium">{cible}</p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-[#005C69] text-lg font-semibold mb-6 text-center">
                {content.conseil.accompagnement}
              </h3>
              <div className="space-y-4">
                {content.conseil.services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B99066] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
              </div>
                      <p className="text-[#374151] text-sm font-medium">{service}</p>
              </div>
                  </div>
                ))}
            </div>
          </div>

            <div className="bg-gradient-to-r from-[#253F60] to-[#3A5A7A] rounded-xl p-8 text-white text-center">
              <p className="text-lg font-medium">👉 {content.conseil.conclusion}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F2F2F2] to-[#E5E5E5]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-[#005C69] text-2xl lg:text-3xl font-semibold mb-4">
              {content.cta.title}
            </h2>
            <p className="text-[#374151] text-lg mb-8 max-w-3xl mx-auto">
              {content.cta.subtitle}
            </p>
            <div className="bg-gradient-to-r from-[#253F60] to-[#3A5A7A] rounded-xl p-6 text-white mb-8">
              <h3 className="text-xl font-semibold mb-3">📧 {content.cta.email}</h3>
              <p className="text-sm opacity-90">Stratégie patrimoniale internationale</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#A67A5A] transition-colors duration-200 text-lg">
                🗓️ {content.cta.primaryButton}
              </button>
              <button className="border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200 text-lg">
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