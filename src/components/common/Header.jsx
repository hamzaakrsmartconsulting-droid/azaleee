'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import dynamic from "next/dynamic";
const LanguageSwitcher = dynamic(() => import("./LanguageSwitcher"), { ssr: false });
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fiscaliteDropdownOpen, setFiscaliteDropdownOpen] = useState(false);
  const [fiscaliteTimeoutId, setFiscaliteTimeoutId] = useState(null);
  const [immobilierDropdownOpen, setImmobilierDropdownOpen] = useState(false);
  const [placementsDropdownOpen, setPlacementsDropdownOpen] = useState(false);
  const [retraiteDropdownOpen, setRetraiteDropdownOpen] = useState(false);
  const [patrimoineDropdownOpen, setPatrimoineDropdownOpen] = useState(false);
  const [outilsDropdownOpen, setOutilsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [immobilierTimeoutId, setImmobilierTimeoutId] = useState(null);
  const [placementsTimeoutId, setPlacementsTimeoutId] = useState(null);
  const [retraiteTimeoutId, setRetraiteTimeoutId] = useState(null);
  const [patrimoineTimeoutId, setPatrimoineTimeoutId] = useState(null);
  const [outilsTimeoutId, setOutilsTimeoutId] = useState(null);

  const fiscaliteMenuItems = [
    {
      title: "Impôt sur le revenu",
      path: "/fiscalite/impot-sur-le-revenu",
      subItems: [
        { title: "Déclaration d'impôts", path: "/fiscalite/declaration-impots" },
        { title: "Tranches, barèmes, plafonds", path: "/fiscalite/tranches-baremes-plafonds" },
        { title: "Lois fiscales", path: "/fiscalite/lois-fiscales", 
          subItems: [
            { title: "Loi Pinel", path: "/fiscalite/loi-pinel" },
            { title: "Loi Girardin", path: "/fiscalite/loi-girardin" },
            { title: "Loi Denormandie", path: "/fiscalite/loi-denormandie" },
            { title: "Loi Malraux", path: "/fiscalite/loi-malraux" },
            { title: "Loi Cosse", path: "/fiscalite/loi-cosse" },
            { title: "Monument historique", path: "/fiscalite/monument-historique" }
          ]
        }
      ]
    },
    {
      title: "Réductions d'impôt / déficit foncier",
      path: "/fiscalite/reductions-impot-deficit-foncier"
    },
    {
      title: "Fiscalité des placements",
      path: "/fiscalite/fiscalite-placements",
      subItems: [
        { title: "PFU", path: "/fiscalite/pfu" },
        { title: "TMI et prélèvements sociaux", path: "/fiscalite/tmi-prelevements-sociaux" }
      ]
    },
    {
      title: "Défiscalisation & cas spécifiques",
      path: "/fiscalite/defiscalisation-cas-specifiques",
      subItems: [
        { title: "Autre fiscalité", path: "/fiscalite/autre-fiscalite" }
      ]
    }
  ];

  const immobilierMenuItems = [
    { title: "Immobilier neuf", path: "/immobilier/immobilier-neuf" },
    { title: "VEFA", path: "/immobilier/vefa" },
    { title: "Scellier", path: "/immobilier/scellier" },
    { title: "Robien", path: "/immobilier/robien" },
    { title: "Faire construire (terrain + constr.)", path: "/immobilier/faire-construire" },
    { title: "Investissement locatif", path: "/immobilier/investissement-locatif" },
    { title: "SCI", path: "/immobilier/sci" },
    { title: "Crédit immobilier / PTZ", path: "/immobilier/credit-immobilier-ptz" },
    { title: "Plus-value immobilière", path: "/immobilier/plus-value-immobiliere" },
    { title: "LMNP", path: "/immobilier/lmnp" },
    { title: "Immeubles de rapport", path: "/immobilier/immeubles-de-rapport" }
  ];

  const placementsMenuItems = [
    { title: "Assurance-vie", path: "/placements/assurance-vie" },
    { title: "Assurance-vie luxembourgeoise", path: "/placements/assurance-vie-luxembourg" },
    { title: "Compte titres ordinaires", path: "/placements/compte-titres" },
    { title: "Contrat de capitalisation", path: "/placements/contrat-capitalisation" },
    { title: "Livrets (A, LDDS, etc.)", path: "/placements/livret" },
    { title: "Bourse, actions et indices", path: "/placements/bourse-actions" },
    { title: "SCPI / OPCI", path: "/placements/scpi-opci" },
    { title: "PEA / PER", path: "/placements/pea-per" },
    { title: "Taux, intérêts", path: "/placements/taux-interets" },
    { title: "ETF, produits financiers", path: "/placements/etf-produits-financiers" },
    { title: "Autres placements", path: "/placements/autres" }
  ];

  const retraiteMenuItems = [
    { title: "Plans retraite PER/PERP/PEE etc.", path: "/retraite/plan-retraite" },
    { title: "Rachat de trimestres", path: "/retraite/rachat-trimestres" },
    { title: "Simulation retraite", path: "/retraite/simulation" },
    { title: "Prévoyance / protection famille", path: "/retraite/prevoyance-protection" },
    { title: "Autre retraite", path: "/retraite/autre" }
  ];

  const patrimoineMenuItems = [
    { title: "Succession, héritage", path: "/patrimoine/succession-heritage" },
    { title: "Donation à titre gratuit", path: "/patrimoine/donation-gratuite" },
    { title: "Donation à titre onéreux", path: "/patrimoine/donation-onereuse" },
    { title: "Transmission de patrimoine", path: "/patrimoine/transmission" },
    { title: "Protection famille", path: "/patrimoine/protection-famille" },
    { title: "Bilan patrimonial", path: "/patrimoine/bilan" },
    { title: "Conseils patrimoniaux", path: "/patrimoine/conseils" },
    { title: "Autre patrimoine", path: "/patrimoine/autre" }
  ];

  const outilsMenuItems = [
    { title: "Guide de défiscalisation", path: "/outils-financiers/guide-defiscalisation" },
    { title: "Calculatrice d'impôts", path: "/outils/calculatrice-impots" },
    { title: "Calculs financiers divers", path: "/outils/calculs-financiers" },
    { 
      title: "Simulateur d'investissement", 
      path: "/outils/simulateur-investissement",
      subItems: [
        { 
          title: "Simulations générales", 
          path: "/outils/simulations-generales",
          subItems: [
            { title: "Guides pratiques", path: "/outils/guides-pratiques" },
            { title: "Autres outils", path: "/outils/autres" }
          ]
        }
      ]
    }
  ];

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setFiscaliteDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setFiscaliteDropdownOpen(false);
    }, 100);
    setTimeoutId(id);
  };

  const handleImmobilierMouseEnter = () => {
    if (immobilierTimeoutId) {
      clearTimeout(immobilierTimeoutId);
      setImmobilierTimeoutId(null);
    }
    setImmobilierDropdownOpen(true);
  };

  const handleImmobilierMouseLeave = () => {
    const id = setTimeout(() => {
      setImmobilierDropdownOpen(false);
    }, 100);
    setImmobilierTimeoutId(id);
  };

  const handlePlacementsMouseEnter = () => {
    if (placementsTimeoutId) {
      clearTimeout(placementsTimeoutId);
      setPlacementsTimeoutId(null);
    }
    setPlacementsDropdownOpen(true);
  };

  const handlePlacementsMouseLeave = () => {
    const id = setTimeout(() => {
      setPlacementsDropdownOpen(false);
    }, 100);
    setPlacementsTimeoutId(id);
  };

  const handleFiscaliteMouseEnter = () => {
    if (fiscaliteTimeoutId) {
      clearTimeout(fiscaliteTimeoutId);
      setFiscaliteTimeoutId(null);
    }
    setFiscaliteDropdownOpen(true);
  };

  const handleFiscaliteMouseLeave = () => {
    const id = setTimeout(() => {
      setFiscaliteDropdownOpen(false);
    }, 100);
    setFiscaliteTimeoutId(id);
  };

  const handleRetraiteMouseEnter = () => {
    if (retraiteTimeoutId) {
      clearTimeout(retraiteTimeoutId);
      setRetraiteTimeoutId(null);
    }
    setRetraiteDropdownOpen(true);
  };

  const handleRetraiteMouseLeave = () => {
    const id = setTimeout(() => {
      setRetraiteDropdownOpen(false);
    }, 100);
    setRetraiteTimeoutId(id);
  };

  const handlePatrimoineMouseEnter = () => {
    if (patrimoineTimeoutId) {
      clearTimeout(patrimoineTimeoutId);
      setPatrimoineTimeoutId(null);
    }
    setPatrimoineDropdownOpen(true);
  };

  const handlePatrimoineMouseLeave = () => {
    const id = setTimeout(() => {
      setPatrimoineDropdownOpen(false);
    }, 100);
    setPatrimoineTimeoutId(id);
  };

  const handleOutilsMouseEnter = () => {
    if (outilsTimeoutId) {
      clearTimeout(outilsTimeoutId);
      setOutilsTimeoutId(null);
    }
    setOutilsDropdownOpen(true);
  };

  const handleOutilsMouseLeave = () => {
    const id = setTimeout(() => {
      setOutilsDropdownOpen(false);
    }, 100);
    setOutilsTimeoutId(id);
  };

  return (
    <header className="w-full bg-[#253F60] lg:bg-gradient-to-r lg:from-[#253F60] lg:to-[#B99066] px-4 sm:px-6 lg:px-[100px] py-2 lg:py-0">
      {/* Top Header Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 lg:gap-8 py-2">
        {/* Contact Info */}
        <div className="hidden lg:flex flex-col sm:flex-row gap-4 sm:gap-8 w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded">
            <img src="/images/img_component_1.svg" className="w-4 h-4" alt="phone" />
            </div>
            <a href="tel:+33153458500" className="text-sm font-segoe text-white hover:text-gray-300 transition-colors duration-200">
              01 53 45 85 00
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded">
            <img src="/images/img_component_1_light_green_400.svg" className="w-4 h-4" alt="email" />
            </div>
            <a href="mailto:contact@azalee-patrimoine.fr" className="text-sm font-inter text-white hover:text-gray-300 transition-colors duration-200">
              contact@azalee-patrimoine.fr
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full lg:w-auto">
          {/* Espace Client */}
          <div className="ml-2">
            <Link href="/espace-client" className="bg-[#B99066] lg:bg-[#253F60] text-white px-3 py-1 rounded text-sm font-medium hover:bg-[#A67C52] lg:hover:bg-[#1A2A4A] transition-colors duration-200">
              Espace client
            </Link>
          </div>
          {/* Language Switcher */}
          <div className="ml-auto sm:ml-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="relative flex items-center justify-between py-4 lg:py-6 lg:border-t-0">
        {/* Left: Search Icon (mobile only) */}
        <div className="flex-1 flex items-center lg:hidden">
          <button className="p-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
        {/* Center: Logo (mobile only) */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 block lg:hidden flex-shrink-0">
          <Link href="/">
            <img 
                src="/images/azalee-patrimoine3.png" 
                className="w-[120px] h-[118px] sm:w-[130px] sm:h-[128px] mx-auto cursor-pointer hover:opacity-80 transition-opacity relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000" 
              alt="Azalee Wealth Logo" 
            />
          </Link>
        </div>
        {/* Left: Logo (desktop only) */}
        <div className="hidden lg:flex flex-shrink-0">
          <Link href="/">
            <img 
                src="/images/azalee-patrimoine3.png" 
                className="w-[140px] h-[138px] cursor-pointer hover:opacity-80 transition-opacity relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000" 
              alt="Azalee Wealth Logo" 
            />
          </Link>
        </div>
        {/* Right: Hamburger/Menu (mobile only) */}
        <div className="flex-1 flex justify-end items-center lg:hidden">
          <button 
            className="p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
        {/* Navigation Menu */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full left-0 w-full lg:w-auto bg-transparent lg:bg-transparent shadow-lg lg:shadow-none z-50`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 p-4 lg:p-0">
            {/* Patrimoine Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handlePatrimoineMouseEnter}
              onMouseLeave={handlePatrimoineMouseLeave}
            >
              <Link href="/patrimoine" className="text-lg font-inter text-white hover:text-gray-300 transition-colors flex items-center gap-1">
                Gestion de patrimoine
                <svg className={`w-4 h-4 transition-transform ${patrimoineDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Desktop Dropdown */}
              <div className={`${patrimoineDropdownOpen ? 'block' : 'hidden'} absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-300 z-50`}>
                <div className="p-4">
                  {patrimoineMenuItems.map((item, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <Link 
                        href={item.path}
                        className="block text-sm font-medium text-[#253F60] hover:text-[#B99066] transition-colors mb-2"
                      >
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              <Link 
                                href={subItem.path}
                                className="block text-xs text-[#374151] hover:text-[#253F60] transition-colors py-1"
                              >
                                {subItem.title}
                              </Link>
                              {subItem.subItems && (
                                <div className="ml-4 space-y-1">
                                  {subItem.subItems.map((subSubItem, subSubIndex) => (
                                    <Link 
                                      key={subSubIndex}
                                      href={subSubItem.path}
                                      className="block text-xs text-[#686868] hover:text-[#253F60] transition-colors py-0.5"
                                    >
                                      {subSubItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Placements Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handlePlacementsMouseEnter}
              onMouseLeave={handlePlacementsMouseLeave}
            >
              <button className="text-lg font-inter text-white hover:text-gray-300 transition-colors flex items-center gap-1">
                Placements
                <svg className={`w-4 h-4 transition-transform ${placementsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Desktop Dropdown */}
              <div className={`${placementsDropdownOpen ? 'block' : 'hidden'} absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-300 z-50`}>
                <div className="p-4">
                  {placementsMenuItems.map((item, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <Link 
                        href={item.path}
                        className="block text-sm font-medium text-[#253F60] hover:text-[#B99066] transition-colors mb-2"
                      >
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              <Link 
                                href={subItem.path}
                                className="block text-xs text-[#374151] hover:text-[#253F60] transition-colors py-1"
                              >
                                {subItem.title}
                              </Link>
                              {subItem.subItems && (
                                <div className="ml-4 space-y-1">
                                  {subItem.subItems.map((subSubItem, subSubIndex) => (
                                    <Link 
                                      key={subSubIndex}
                                      href={subSubItem.path}
                                      className="block text-xs text-[#686868] hover:text-[#253F60] transition-colors py-0.5"
                                    >
                                      {subSubItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Investissement Immobilier Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleImmobilierMouseEnter}
              onMouseLeave={handleImmobilierMouseLeave}
            >
              <Link href="/Investissement-immobilier" className="text-lg font-inter text-white hover:text-gray-300 transition-colors flex items-center gap-1">
                Investissement immobilier
                <svg className={`w-4 h-4 transition-transform ${immobilierDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Desktop Dropdown */}
              <div className={`${immobilierDropdownOpen ? 'block' : 'hidden'} absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-300 z-50`}>
                <div className="p-4">
                  {immobilierMenuItems.map((item, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <Link 
                        href={item.path}
                        className="block text-sm font-medium text-[#253F60] hover:text-[#B99066] transition-colors mb-2"
                      >
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              <Link 
                                href={subItem.path}
                                className="block text-xs text-[#374151] hover:text-[#253F60] transition-colors py-1"
                              >
                                {subItem.title}
                              </Link>
                              {subItem.subItems && (
                                <div className="ml-4 space-y-1">
                                  {subItem.subItems.map((subSubItem, subSubIndex) => (
                                    <Link 
                                      key={subSubIndex}
                                      href={subSubItem.path}
                                      className="block text-xs text-[#686868] hover:text-[#253F60] transition-colors py-0.5"
                                    >
                                      {subSubItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fiscalité Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleFiscaliteMouseEnter}
              onMouseLeave={handleFiscaliteMouseLeave}
            >
              <Link href="/placements" className="text-lg font-inter text-white hover:text-gray-300 transition-colors flex items-center gap-1">
                Fiscalité
                <svg className={`w-4 h-4 transition-transform ${fiscaliteDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Desktop Dropdown */}
              <div className={`${fiscaliteDropdownOpen ? 'block' : 'hidden'} absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-300 z-50`}>
                <div className="p-4">
                  {fiscaliteMenuItems.map((item, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <Link 
                        href={item.path}
                        className="block text-sm font-medium text-[#253F60] hover:text-[#B99066] transition-colors mb-2"
                      >
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              <Link 
                                href={subItem.path}
                                className="block text-xs text-[#374151] hover:text-[#253F60] transition-colors py-1"
                              >
                                {subItem.title}
                              </Link>
                              {subItem.subItems && (
                                <div className="ml-4 space-y-1">
                                  {subItem.subItems.map((subSubItem, subSubIndex) => (
                                    <Link 
                                      key={subSubIndex}
                                      href={subSubItem.path}
                                      className="block text-xs text-[#686868] hover:text-[#253F60] transition-colors py-0.5"
                                    >
                                      {subSubItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Retraite Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleRetraiteMouseEnter}
              onMouseLeave={handleRetraiteMouseLeave}
            >
              <Link href="/retraite" className="text-lg font-inter text-white hover:text-gray-300 transition-colors flex items-center gap-1">
                Retraite
                <svg className={`w-4 h-4 transition-transform ${retraiteDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Desktop Dropdown */}
              <div className={`${retraiteDropdownOpen ? 'block' : 'hidden'} absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-300 z-50`}>
                <div className="p-4">
                  {retraiteMenuItems.map((item, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <Link 
                        href={item.path}
                        className="block text-sm font-medium text-[#253F60] hover:text-[#B99066] transition-colors mb-2"
                      >
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              <Link 
                                href={subItem.path}
                                className="block text-xs text-[#374151] hover:text-[#253F60] transition-colors py-1"
                              >
                                {subItem.title}
                              </Link>
                              {subItem.subItems && (
                                <div className="ml-4 space-y-1">
                                  {subItem.subItems.map((subSubItem, subSubIndex) => (
                                    <Link 
                                      key={subSubIndex}
                                      href={subSubItem.path}
                                      className="block text-xs text-[#686868] hover:text-[#253F60] transition-colors py-0.5"
                                    >
                                      {subSubItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Outils financiers Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleOutilsMouseEnter}
              onMouseLeave={handleOutilsMouseLeave}
            >
              <Link href="/outils-financiers" className="text-lg font-inter text-white hover:text-gray-300 transition-colors flex items-center gap-1">
                Outils financiers
                <svg className={`w-4 h-4 transition-transform ${outilsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Desktop Dropdown */}
              <div className={`${outilsDropdownOpen ? 'block' : 'hidden'} absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-300 z-50`}>
                <div className="p-4">
                  {outilsMenuItems.map((item, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <Link 
                        href={item.path}
                        className="block text-sm font-medium text-[#253F60] hover:text-[#B99066] transition-colors mb-2"
                      >
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              <Link 
                                href={subItem.path}
                                className="block text-xs text-[#374151] hover:text-[#253F60] transition-colors py-1"
                              >
                                {subItem.title}
                              </Link>
                              {subItem.subItems && (
                                <div className="ml-4 space-y-1">
                                  {subItem.subItems.map((subSubItem, subSubIndex) => (
                                    <Link 
                                      key={subSubIndex}
                                      href={subSubItem.path}
                                      className="block text-xs text-[#686868] hover:text-[#253F60] transition-colors py-0.5"
                                    >
                                      {subSubItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;