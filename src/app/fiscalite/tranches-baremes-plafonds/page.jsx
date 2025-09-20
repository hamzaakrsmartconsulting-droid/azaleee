"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const STORAGE_KEY = "tranchesBaremesPlafondsContent";

export default function TranchesBaremesPlafondsPage() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedSituation, setSelectedSituation] = useState("celibataire");
  const [content, setContent] = useState({});

  const years = ["2025", "2024", "2023"];
  const situations = [
    { id: "celibataire", label: "Célibataire", parts: 1 },
    { id: "marie", label: "Marié(e)/Pacsé(e)", parts: 2 },
    { id: "avec-enfants", label: "Avec enfants", parts: 2.5 }
  ];

  // Load content from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setContent(parsed);
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
        if (saved) setContent(JSON.parse(saved));
      } catch {}
    };
    window.addEventListener("contentUpdated", handler);
    return () => window.removeEventListener("contentUpdated", handler);
  }, []);

  // Use CMS data or fallback to default data
  const heroTitle = content.hero?.title || "Tranches, barèmes, plafond";
  const heroSubtitle = content.hero?.subtitle || "L'impôt sur le revenu est calculé selon un barème progressif par tranches. Plus le revenu est élevé, plus le taux d'imposition marginal augmente. Le <strong>taux marginal d'imposition</strong> (TMI) est le taux d'imposition qui s'applique à la <strong>tranche la plus élevée</strong> de vos revenus. Le <strong>taux moyen d'imposition</strong> est le taux moyen auquel vos revenus sont taxés.";
  const heroImage = content.hero?.image || "";

  // Use CMS barème data or fallback to default
  const getBaremeFromCMS = () => {
    if (content.bareme2024 && content.bareme2024.length > 0) {
      return content.bareme2024;
    }
    // Fallback to default data
    return [
      { seuil: 0, taux: 0, montant: 0, description: "Jusqu'à" },
      { seuil: 11294, taux: 11, montant: 0, description: "De" },
      { seuil: 28797, taux: 30, montant: 1930, description: "De" },
      { seuil: 82341, taux: 41, montant: 16072, description: "De" },
      { seuil: 177106, taux: 45, montant: 38845, description: "Au-delà de" }
    ];
  };

  const getPlafondsFromCMS = () => {
    if (content.plafonds && content.plafonds.length > 0) {
      return content.plafonds;
    }
    // Fallback to default data
    return [
      {
        nom: "Plafonnement quotient familial",
        montant: 1759,
        description: "Limite de réduction d'impôt par demi-part supplémentaire en 2025."
      },
      {
        nom: "Plafonnement niches fiscales",
        montant: 10000,
        description: "Plafond global des réductions et crédits d'impôt par foyer fiscal."
      },
      {
        nom: "Plafonnement niches fiscales (spécial)",
        montant: 18000,
        description: "Plafond pour certains dispositifs (Girardin, Sofica)."
      },
      {
        nom: "Pension alimentaire",
        montant: 6674,
        description: "Plafond déductible pour pension alimentaire versée à un enfant majeur."
      },
      {
        nom: "PER - Limite revenus",
        montant: 35194,
        description: "Plafond annuel pour les versements déductibles au PER."
      }
    ];
  };

  // Render markdown content from WYSIWYG
  const renderMarkdown = (text) => {
    if (!text) return "";
    
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank">$1</a>')
      .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-gray-300 pl-4 italic">$1</blockquote>')
      .replace(/^(\d+)\. (.*$)/gm, '<div class="ml-4">$1. $2</div>')
      .replace(/^- (.*$)/gm, '<div class="ml-4">• $1</div>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>');
  };

  const bareme2025 = [
    { seuil: 0, taux: 0, montant: 0, description: "Jusqu'à" },
    { seuil: 11497, taux: 11, montant: 0, description: "De" },
    { seuil: 29315, taux: 30, montant: 1964, description: "De" },
    { seuil: 83823, taux: 41, montant: 16425, description: "De" },
    { seuil: 180294, taux: 45, montant: 39560, description: "Au-delà de" }
  ];
  const bareme2024 = getBaremeFromCMS();
  const bareme2023 = [
    { seuil: 0, taux: 0, montant: 0, description: "Jusqu'à" },
    { seuil: 11294, taux: 11, montant: 0, description: "De" },
    { seuil: 28797, taux: 30, montant: 1930, description: "De" },
    { seuil: 82341, taux: 41, montant: 16072, description: "De" },
    { seuil: 177106, taux: 45, montant: 38845, description: "Au-delà de" }
  ];

  const bareme2022 = [
    { seuil: 0, taux: 0, montant: 0, description: "Jusqu'à" },
    { seuil: 10225, taux: 11, montant: 0, description: "De" },
    { seuil: 26070, taux: 30, montant: 1809, description: "De" },
    { seuil: 74545, taux: 41, montant: 14552, description: "De" },
    { seuil: 160336, taux: 45, montant: 35151, description: "Au-delà de" }
  ];

  const getBareme = () => {
    switch(selectedYear) {
      case "2025": return bareme2025;
      case "2024": return bareme2024;
      case "2023": return bareme2023;
      case "2022": return bareme2022;
      default: return bareme2025;
    }
  };

  const calculateImpots = (revenu) => {
    const bareme = getBareme();
    let impots = 0;
    
    for (let i = 1; i < bareme.length; i++) {
      const seuilPrecedent = bareme[i-1].seuil;
      const seuilActuel = bareme[i].seuil;
      
      if (revenu > seuilPrecedent) {
        const baseImposable = Math.min(revenu, seuilActuel) - seuilPrecedent;
        impots += (baseImposable * bareme[i-1].taux) / 100;
      }
    }
    
    // Dernière tranche
    if (revenu > bareme[bareme.length - 1].seuil) {
      const baseImposable = revenu - bareme[bareme.length - 1].seuil;
      impots += (baseImposable * bareme[bareme.length - 1].taux) / 100;
    }
    
    return Math.round(impots);
  };

  const [revenuInput, setRevenuInput] = useState("50000");
  const revenu = parseInt(revenuInput) || 0;
  const impotsBruts = calculateImpots(revenu);
  const impotsNets = Math.round(impotsBruts / selectedSituation === "celibataire" ? 1 : 
                                selectedSituation === "marie" ? 2 : 2.5);

  return (
    <>
      <Header />

      {/* Hero Section with Timeline Visual */}
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E8] via-[#D7E8FF] to-[#FFEFD5] py-16 sm:py-20 lg:py-24 overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <img src={heroImage} alt="Hero background" className="w-full h-full object-cover opacity-20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4EBBBD]/10 to-[#B99066]/10"></div>
        <div className="relative max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Barème fiscal
            </span>
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              {heroTitle}
            </h1>
            <div 
              className="max-w-4xl mx-auto text-[#686868] text-base sm:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(heroSubtitle) }}
            />
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#4EBBBD] transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-0">
              {getBareme().map((tranche, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-4 text-center relative z-10">
                    <div className="w-8 h-8 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                      {tranche.taux}%
                    </div>
                    <p className="text-[#112033] text-sm font-medium">
                      {tranche.seuil.toLocaleString()}€
                    </p>
                    <p className="text-[#686868] text-xs mt-1">
                      {tranche.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Year and Situation Selector */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[#112033] font-medium">Année fiscale :</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedYear === year
                        ? "bg-[#4EBBBD] text-white"
                        : "text-[#686868] hover:bg-gray-200"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-[#112033] font-medium">Situation :</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                {situations.map((situation) => (
                  <button
                    key={situation.id}
                    onClick={() => setSelectedSituation(situation.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedSituation === situation.id
                        ? "bg-[#4EBBBD] text-white"
                        : "text-[#686868] hover:bg-gray-200"
                    }`}
                  >
                    {situation.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-[#112033] text-xl font-semibold mb-4">🧮 Simulateur d'impôts</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Revenu net imposable
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={revenuInput}
                      onChange={(e) => setRevenuInput(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      placeholder="50000"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#686868]">€</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#686868] text-sm font-medium mb-2">Parts fiscales</label>
                    <div className="bg-[#FAFFEF] rounded-lg p-3 text-center">
                      <span className="text-[#112033] text-lg font-semibold">
                        {situations.find(s => s.id === selectedSituation)?.parts}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#686868] text-sm font-medium mb-2">Quotient familial</label>
                    <div className="bg-[#FAFFEF] rounded-lg p-3 text-center">
                      <span className="text-[#112033] text-lg font-semibold">
                        {revenu > 0 ? Math.round(revenu / (situations.find(s => s.id === selectedSituation)?.parts || 1)).toLocaleString() : 0}€
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4">📊 Résultats du calcul</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#008D78] rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Impôt brut</span>
                    <span className="text-2xl font-bold">{impotsBruts.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Impôt net</span>
                    <span className="text-2xl font-bold">{impotsNets.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="bg-[#FAFFEF] rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#112033] text-sm">Taux moyen</span>
                    <span className="text-[#112033] text-lg font-semibold">
                      {revenu > 0 ? Math.round((impotsBruts / revenu) * 100 * 100) / 100 : 0}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Barème Table */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            Barème détaillé {selectedYear}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-[#4EBBBD] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Tranche</th>
                  <th className="px-6 py-4 text-left font-semibold">Seuil</th>
                  <th className="px-6 py-4 text-left font-semibold">Taux</th>
                  <th className="px-6 py-4 text-left font-semibold">Montant dû</th>
                  <th className="px-6 py-4 text-left font-semibold">Exemple</th>
                </tr>
              </thead>
              <tbody>
                {getBareme().map((tranche, index) => {
                  const nextSeuil = getBareme()[index + 1]?.seuil || "∞";
                  const baseImposable = index === 0 ? 0 : tranche.seuil - getBareme()[index - 1].seuil;
                  const montantDu = (baseImposable * tranche.taux) / 100;
                  
                  return (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4">
                        <span className="inline-block w-8 h-8 bg-[#4EBBBD] text-white rounded-full text-center text-sm font-bold">
                          {index + 1}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#112033] font-medium">
                        {tranche.seuil.toLocaleString()}€
                        {nextSeuil !== "∞" && (
                          <span className="text-[#686868] text-sm block">
                            à {nextSeuil.toLocaleString()}€
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-[#B99066] text-white px-3 py-1 rounded-full text-sm font-bold">
                          {tranche.taux}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#112033] font-medium">
                        {montantDu.toLocaleString()}€
                      </td>
                      <td className="px-6 py-4 text-[#686868] text-sm">
                        {index === 0 ? (
                          "Pas d'impôt"
                        ) : (
                          `${baseImposable.toLocaleString()}€ × ${tranche.taux}% = ${montantDu.toLocaleString()}€`
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Plafonds and Limits */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            Plafonds et limites importantes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getPlafondsFromCMS().map((plafond, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#4EBBBD]">
                <h3 className="text-[#112033] text-lg font-semibold mb-3">💰 {plafond.nom}</h3>
                <div className="text-center mb-3">
                  <span className="text-3xl font-bold text-[#4EBBBD]">{plafond.montant.toLocaleString()}€</span>
                  <p className="text-[#686868] text-sm">Par an</p>
                </div>
                <p className="text-[#686868] text-sm">
                  {plafond.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notions importantes */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            Trois notions essentielles à maîtriser
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-xl p-6 shadow-lg">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                <span>👨‍👩‍👧‍👦</span> Quotient familial
              </h3>
              <p className="text-[#374151] text-sm mb-4">
                Ajuste le calcul de l'impôt selon la composition du foyer. Plus le foyer a de parts, plus l'économie d'impôt est importante.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-[#686868] text-xs mb-2"><strong>Calcul des parts :</strong></p>
                <ul className="text-[#686868] text-xs space-y-1">
                  <li>• Un adulte = 1 part</li>
                  <li>• 2 premiers enfants = 0,5 part chacun</li>
                  <li>• Enfants suivants = 1 part chacun</li>
                  <li>• Famille (2+3 enfants) = 4 parts</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFEFD5] to-[#FFE4B5] rounded-xl p-6 shadow-lg">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Plafonnement
              </h3>
              <p className="text-[#374151] text-sm mb-4">
                Limite l'utilisation des avantages fiscaux. Le plafonnement global des niches fiscales est fixé à 10 000 € par an.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-[#686868] text-xs mb-2"><strong>Plafonds 2025 :</strong></p>
                <ul className="text-[#686868] text-xs space-y-1">
                  <li>• Niches fiscales : 10 000 €</li>
                  <li>• Dispositifs spéciaux : 18 000 €</li>
                  <li>• Quotient familial : 1 759 €/demi-part</li>
                  <li>• PER : 10% des revenus</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-xl p-6 shadow-lg">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                <span>📈</span> Effet de tranche
              </h3>
              <p className="text-[#374151] text-sm mb-4">
                Peut être optimisé par des arbitrages patrimoniaux : assurance-vie, rachats programmés, versements PER.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-[#686868] text-xs mb-2"><strong>Optimisations possibles :</strong></p>
                <ul className="text-[#686868] text-xs space-y-1">
                  <li>• Assurance-vie</li>
                  <li>• Rachats programmés</li>
                  <li>• Versements PER</li>
                  <li>• Déficit foncier</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-semibold mb-3">💡 Conseil Azalée Patrimoine</h3>
            <p className="text-base opacity-90">
              La compréhension de ces mécanismes permet d'identifier des marges de manœuvre pour réduire la fiscalité 
              de manière légale et sécurisée. Nos experts vous accompagnent dans cette optimisation.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution over years */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            Évolution des seuils par année
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-[#4EBBBD] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Tranche</th>
                  <th className="px-6 py-4 text-center font-semibold">2022</th>
                  <th className="px-6 py-4 text-center font-semibold">2023</th>
                  <th className="px-6 py-4 text-center font-semibold">2024</th>
                  <th className="px-6 py-4 text-center font-semibold">Évolution</th>
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2, 3, 4].map((index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4">
                      <span className="inline-block w-8 h-8 bg-[#4EBBBD] text-white rounded-full text-center text-sm font-bold">
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-[#112033] font-medium">
                      {bareme2022[index]?.seuil.toLocaleString()}€
                    </td>
                    <td className="px-6 py-4 text-center text-[#112033] font-medium">
                      {bareme2023[index]?.seuil.toLocaleString()}€
                    </td>
                    <td className="px-6 py-4 text-center text-[#112033] font-medium">
                      {bareme2024[index]?.seuil.toLocaleString()}€
                    </td>
                    <td className="px-6 py-4 text-center">
                      {(() => {
                        const evolution = bareme2024[index]?.seuil - bareme2022[index]?.seuil;
                        const color = evolution > 0 ? "text-green-600" : evolution < 0 ? "text-red-600" : "text-[#686868]";
                        const sign = evolution > 0 ? "+" : "";
                        return (
                          <span className={`font-medium ${color}`}>
                            {sign}{evolution.toLocaleString()}€
                          </span>
                        );
                      })()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quotient familial et plafonnement */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            Quotient familial et plafonnement
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-xl font-semibold mb-4">Calcul du quotient familial</h3>
              <p className="text-[#374151] text-base leading-relaxed mb-4">
                Le quotient familial permet de diviser le revenu imposable du foyer par le nombre de parts fiscales 
                (adultes et enfants à charges, et éventuellement parents au delà de 75 ans), ce qui réduit l'impôt dû.
              </p>
              <div className="bg-gradient-to-r from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-4 mb-4">
                <p className="text-[#112033] font-semibold mb-2">Règle des parts :</p>
                <ul className="text-[#374151] text-sm space-y-1">
                  <li>• Un adulte vaut 1 part</li>
                  <li>• Les 2 premiers enfants valent 1/2 part</li>
                  <li>• Les enfants suivants valent 1 part</li>
                  <li>• Ainsi, une famille (2 parents + 3 enfants) équivaut à 4 parts</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-[#FFE4E1] to-[#FFCCCB] rounded-lg p-4">
                <p className="text-[#112033] font-semibold mb-2">⚠️ Plafonnement 2025 :</p>
                <p className="text-[#374151] text-sm">
                  L'avantage procuré par chaque part ou demi-part supplémentaire est plafonné à <strong>1 759 € par demi-part</strong>. 
                  Dans les foyers à hauts revenus, l'économie d'impôt liée aux enfants est limitée.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-xl font-semibold mb-4">Rattacher ou détacher un enfant majeur</h3>
              <p className="text-[#374151] text-base leading-relaxed mb-4">
                À partir de 18 ans, un enfant peut choisir d'être rattaché au foyer fiscal de ses parents ou de faire sa propre déclaration.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] rounded-lg p-4">
                  <h4 className="text-[#112033] font-semibold mb-2">Cas où il est plus avantageux de sortir l'enfant :</h4>
                  <ul className="text-[#374151] text-sm space-y-1">
                    <li>• Étudiant avec abattements spécifiques</li>
                    <li>• Faibles revenus (non imposable)</li>
                    <li>• Pension alimentaire déductible (plafonnée à 6 674 € en 2025)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-4 text-white">
                  <h4 className="font-semibold mb-2">👉 Conseil Azalée Patrimoine</h4>
                  <p className="text-sm opacity-90">
                    L'arbitrage entre rattachement et détachement doit être étudié au cas par cas. 
                    Un conseiller en gestion de patrimoine peut réaliser des simulations pour comparer les deux options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plafonnement des niches fiscales */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            Le plafonnement des niches fiscales
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-[#112033] text-xl font-semibold mb-4">Mécanisme du plafonnement global</h3>
            <p className="text-[#374151] text-base leading-relaxed mb-6">
              Le système fiscal français limite l'utilisation des avantages fiscaux grâce au mécanisme du plafonnement global des niches fiscales. 
              Celui-ci vise à éviter que l'accumulation de réductions et crédits d'impôt ne réduise trop fortement l'impôt dû.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-6">
                <h4 className="text-[#112033] font-semibold mb-3">Plafond général : 10 000 €</h4>
                <p className="text-[#374151] text-sm mb-3">Pour la plupart des réductions et crédits d'impôt :</p>
                <ul className="text-[#374151] text-sm space-y-1">
                  <li>• Emploi à domicile</li>
                  <li>• Loi Pinel</li>
                  <li>• Dons</li>
                  <li>• Investissements PME</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-[#FFEFD5] to-[#FFE4B5] rounded-lg p-6">
                <h4 className="text-[#112033] font-semibold mb-3">Plafond spécial : 18 000 €</h4>
                <p className="text-[#374151] text-sm mb-3">Pour certains dispositifs spécifiques :</p>
                <ul className="text-[#374151] text-sm space-y-1">
                  <li>• Investissements outre-mer (loi Girardin)</li>
                  <li>• Sofica</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] rounded-xl p-6 mb-8">
            <h3 className="text-[#112033] text-lg font-semibold mb-3">Cas particuliers : Le PER</h3>
            <p className="text-[#374151] text-base leading-relaxed">
              Le PER échappe au plafonnement global mais possède ses propres règles : les versements déductibles sont limités à 
              10 % des revenus professionnels (dans la limite de 35 194 € en 2025) ou à 10 % du plafond annuel de la Sécurité sociale (PASS) 
              si ce montant est plus avantageux.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-3">👉 Chez Azalée Patrimoine</h3>
            <p className="text-base opacity-90 mb-4">
              Nous réalisons des simulations personnalisées pour optimiser l'utilisation de vos niches fiscales et hiérarchiser 
              les dispositifs les plus pertinents selon vos revenus et vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#005C69] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Simulation personnalisée
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#005C69] transition-colors duration-200">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Content Sections */}
      {content.notes && (
        <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
              Notes importantes
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(content.notes) }}
              />
            </div>
          </div>
        </section>
      )}

      {content.evolutions && (
        <section className="py-12 bg-white">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
              Évolutions prévues
            </h2>
            <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-xl shadow-lg p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(content.evolutions) }}
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F2F2F2] to-[#E5E5E5]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-[#112033] text-2xl lg:text-3xl font-semibold mb-4">
              Besoin d'optimiser votre fiscalité ?
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              Nos experts vous accompagnent pour identifier les meilleures stratégies 
              d'optimisation fiscale adaptées à votre situation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                📊 Simulation personnalisée
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                🎯 Consultation gratuite
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 