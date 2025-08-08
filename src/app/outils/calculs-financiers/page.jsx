"use client";

import React, { useMemo, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

function formatCurrency(amount) {
  try {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(
      isFinite(amount) ? amount : 0
    );
  } catch (e) {
    return `${amount.toFixed ? amount.toFixed(0) : amount} €`;
  }
}

function clampNumber(value, min = 0, max = Number.POSITIVE_INFINITY) {
  if (Number.isNaN(value)) return min;
  return Math.max(min, Math.min(max, value));
}

function getCompoundingLabel(periods) {
  switch (periods) {
    case 1:
      return "annuelle";
    case 4:
      return "trimestrielle";
    case 12:
      return "mensuelle";
    default:
      return `${periods}x/an`;
  }
}

function computeFutureValue({ principal, annualRatePct, years, periodsPerYear, contributionPerPeriod }) {
  const n = Math.max(0, Math.round(periodsPerYear * years));
  const r = Math.max(0, annualRatePct) / 100;
  const i = periodsPerYear > 0 ? r / periodsPerYear : 0;

  if (n === 0) {
    const totalContrib = contributionPerPeriod * n;
    const fv = principal + totalContrib; // no growth
    return { futureValue: fv, interestEarned: 0, periods: n, totalContrib };
  }

  if (i === 0) {
    const totalContrib = contributionPerPeriod * n;
    const fv = principal + totalContrib;
    const interest = 0;
    return { futureValue: fv, interestEarned: interest, periods: n, totalContrib };
  }

  const growth = Math.pow(1 + i, n);
  const fvPrincipal = principal * growth;
  const fvContrib = contributionPerPeriod * ((growth - 1) / i);
  const futureValue = fvPrincipal + fvContrib;
  const totalContrib = contributionPerPeriod * n;
  const interestEarned = futureValue - (principal + totalContrib);

  return { futureValue, interestEarned, periods: n, totalContrib };
}

export default function CalculsFinanciersPage() {
  const [activeTab, setActiveTab] = useState("capitalisation"); // capitalisation | amortissement | roi

  const [principal, setPrincipal] = useState(10000);
  const [annualRatePct, setAnnualRatePct] = useState(3);
  const [years, setYears] = useState(5);
  const [periodsPerYear, setPeriodsPerYear] = useState(12);
  const [contributionPerPeriod, setContributionPerPeriod] = useState(0);

  const { futureValue, interestEarned, cagr, totalContrib } = useMemo(() => {
    const p = clampNumber(Number(principal) || 0);
    const r = clampNumber(Number(annualRatePct) || 0, 0, 100);
    const y = clampNumber(Number(years) || 0, 0, 100);
    const m = clampNumber(Number(periodsPerYear) || 1, 1, 365);
    const c = clampNumber(Number(contributionPerPeriod) || 0, 0, 1_000_000_000);

    const { futureValue, interestEarned, totalContrib } = computeFutureValue({
      principal: p,
      annualRatePct: r,
      years: y,
      periodsPerYear: m,
      contributionPerPeriod: c
    });

    // CAGR meaningful only without contributions and with time > 0
    let cagr = 0;
    if (c === 0 && y > 0 && p > 0) {
      cagr = Math.pow(futureValue / p, 1 / y) - 1;
    }

    return { futureValue, interestEarned, cagr, totalContrib };
  }, [principal, annualRatePct, years, periodsPerYear, contributionPerPeriod]);

  function resetInputs() {
    setPrincipal(10000);
    setAnnualRatePct(3);
    setYears(5);
    setPeriodsPerYear(12);
    setContributionPerPeriod(0);
  }

  return (
    <>
      <Header />

      {/* Distinct dark hero */}
      <section className="relative w-full bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-4">
            Calculs financiers divers
          </h1>
          <p className="max-w-3xl mx-auto text-[#686868] text-base sm:text-lg font-inter leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius, nunc ut dictum luctus, justo risus posuere sapien.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="#calcul" className="inline-flex items-center justify-center bg-[#4EBBBD] text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#3DA8AA] transition-colors duration-200">Commencer la simulation</a>
            <a href="#details" className="inline-flex items-center justify-center bg-transparent border-2 border-[#4EBBBD] text-[#4EBBBD] px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200">En savoir plus</a>
          </div>
        </div>
      </section>

      {/* Floating stats */}
      <div className="relative -mt-10 sm:-mt-12 lg:-mt-14">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <p className="text-[#686868] text-xs uppercase tracking-wide mb-1">Lorem ipsum</p>
              <p className="text-[#112033] text-2xl font-cairo font-semibold">{formatCurrency(futureValue)}</p>
              <p className="text-[#686868] text-xs mt-1">Dolor sit amet</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <p className="text-[#686868] text-xs uppercase tracking-wide mb-1">Consectetur</p>
              <p className="text-[#112033] text-2xl font-cairo font-semibold">{formatCurrency(interestEarned)}</p>
              <p className="text-[#686868] text-xs mt-1">Adipiscing elit</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <p className="text-[#686868] text-xs uppercase tracking-wide mb-1">Sed do</p>
              <p className="text-[#112033] text-2xl font-cairo font-semibold">{formatCurrency(totalContrib)}</p>
              <p className="text-[#686868] text-xs mt-1">Eiusmod tempor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed calculator card */}
      <section id="calcul" className="w-full py-12 lg:py-16 bg-[#F2F2F2]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Tabs */}
            <div className="flex items-center gap-2 p-2 bg-[#F2F2F2]">
              {[
                { id: "capitalisation", label: "Capitalisation composée" },
                { id: "amortissement", label: "Amortissement de prêt" },
                { id: "roi", label: "Analyse ROI" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-white text-[#112033] shadow-sm border border-[#E5E7EB]"
                      : "text-[#686868] hover:text-[#112033]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            {activeTab === "capitalisation" && (
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Parameters */}
                  <div>
                    <h2 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Paramètres</h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-[#686868] text-sm font-medium mb-2">Montant initial</label>
                        <p className="text-[#686868] text-xs mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <input
                          type="number"
                          inputMode="decimal"
                          value={principal}
                          onChange={(e) => setPrincipal(Number(e.target.value))}
                          placeholder="€10,000"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#686868] text-sm font-medium mb-2">Taux annuel (%)</label>
                          <p className="text-[#686868] text-xs mb-2">Sed do eiusmod tempor incididunt ut labore.</p>
                          <input
                            type="number"
                            inputMode="decimal"
                            step="0.01"
                            value={annualRatePct}
                            onChange={(e) => setAnnualRatePct(Number(e.target.value))}
                            placeholder="3.00"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-[#686868] text-sm font-medium mb-2">Durée (années)</label>
                          <p className="text-[#686868] text-xs mb-2">Ut enim ad minim veniam, quis nostrud exercitation.</p>
                          <input
                            type="number"
                            inputMode="decimal"
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            placeholder="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#686868] text-sm font-medium mb-2">Capitalisation</label>
                          <p className="text-[#686868] text-xs mb-2">Duis aute irure dolor in reprehenderit in voluptate.</p>
                          <select
                            value={periodsPerYear}
                            onChange={(e) => setPeriodsPerYear(Number(e.target.value))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                          >
                            <option value={1}>Annuelle</option>
                            <option value={4}>Trimestrielle</option>
                            <option value={12}>Mensuelle</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[#686868] text-sm font-medium mb-2">Versement périodique</label>
                          <p className="text-[#686868] text-xs mb-2">Excepteur sint occaecat cupidatat non proident.</p>
                          <input
                            type="number"
                            inputMode="decimal"
                            value={contributionPerPeriod}
                            onChange={(e) => setContributionPerPeriod(Number(e.target.value))}
                            placeholder="€200"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          onClick={resetInputs}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-transparent border-2 border-[#B99066] text-[#B99066] text-sm font-medium hover:bg-[#B99066] hover:text-white"
                        >
                          Réinitialiser
                        </button>
                        <a
                          href="#"
                          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#4EBBBD] text-white text-sm font-medium hover:bg-[#3DA8AA]"
                        >
                          Exporter (PDF)
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h2 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Résultats</h2>
                    <div className="rounded-xl border border-gray-200 p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-[#6B7280] text-xs uppercase tracking-wide mb-1">Montant final</p>
                          <p className="text-[#112033] text-3xl font-cairo font-semibold">{formatCurrency(futureValue)}</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] text-xs uppercase tracking-wide mb-1">Intérêts générés</p>
                          <p className="text-[#112033] text-3xl font-cairo font-semibold">{formatCurrency(interestEarned)}</p>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-[#F9FAFB] rounded-lg p-4">
                          <p className="text-[#6B7280] text-xs uppercase tracking-wide mb-1">Capital initial</p>
                          <p className="text-[#112033] font-source-sans font-semibold">{formatCurrency(principal)}</p>
                        </div>
                        <div className="bg-[#F9FAFB] rounded-lg p-4">
                          <p className="text-[#6B7280] text-xs uppercase tracking-wide mb-1">Versements</p>
                          <p className="text-[#112033] font-source-sans font-semibold">{formatCurrency(totalContrib)}</p>
                        </div>
                        <div className="bg-[#F9FAFB] rounded-lg p-4">
                          <p className="text-[#6B7280] text-xs uppercase tracking-wide mb-1">CAGR</p>
                          <p className="text-[#112033] font-source-sans font-semibold">{isFinite(cagr) && cagr > 0 ? `${(cagr * 100).toFixed(2)}%` : "—"}</p>
                        </div>
                      </div>

                      <p className="text-[#686868] text-xs mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "amortissement" && (
              <div className="p-10 text-center">
                <h2 className="text-[#0F172A] text-2xl font-source-sans font-semibold mb-3">Amortissement de prêt</h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <div className="mt-6 inline-flex items-center gap-3">
                  <a href="#" className="px-4 py-2 rounded-lg bg-[#4EBBBD] text-white text-sm font-medium hover:bg-[#3DA8AA]">Commencer</a>
                  <a href="#" className="px-4 py-2 rounded-lg bg-[#F3F4F6] text-[#111827] text-sm font-medium hover:bg-[#E5E7EB]">En savoir plus</a>
                </div>
              </div>
            )}

            {activeTab === "roi" && (
              <div className="p-10 text-center">
                <h2 className="text-[#0F172A] text-2xl font-source-sans font-semibold mb-3">Analyse ROI</h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <div className="mt-6 inline-flex items-center gap-3">
                  <a href="#" className="px-4 py-2 rounded-lg bg-[#4EBBBD] text-white text-sm font-medium hover:bg-[#3DA8AA]">Commencer</a>
                  <a href="#" className="px-4 py-2 rounded-lg bg-[#F3F4F6] text-[#111827] text-sm font-medium hover:bg-[#E5E7EB]">En savoir plus</a>
                </div>
              </div>
            )}
          </div>

          {/* Methodology / details */}
          <div id="details" className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-2">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-3">Détails et méthodologie</h3>
              <p className="text-[#686868] text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
                dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
              </p>
              <ul className="mt-4 list-disc list-inside text-[#686868] text-sm space-y-1">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-3">FAQ</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[#112033] font-medium">Lorem ipsum dolor sit amet?</p>
                  <p className="text-[#686868]">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div>
                  <p className="text-[#112033] font-medium">Duis aute irure dolor in reprehenderit?</p>
                  <p className="text-[#686868]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 