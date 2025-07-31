"use client";
import React from "react";
import Header from "../../components/common/Header";

export default function RetraitePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[228px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/retraite-hero-image.png"
            alt="Retraite Hero"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#243E5F] via-[#243E5F]/80 to-transparent"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="w-full lg:w-[792px]">
            {/* Breadcrumb Navigation */}
            <div className="mb-4 sm:mb-6">
              <nav className="flex items-center text-white text-xs sm:text-sm">
                <span className="hover:text-[#4EBBBD] transition-colors cursor-pointer">Accueil</span>
                <span className="mx-2">{'>'}</span>
                <span className="text-[#4EBBBD]">Retraite {'>'} Préparer sa retraite</span>
              </nav>
            </div>
            
            {/* Main Title */}
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal uppercase leading-tight mb-2 sm:mb-4 max-w-[580px]">
              Préparer sa retraite avec Azalee Wealth
            </h1>
            
            {/* Subtitle */}
            <p className="text-white text-xs sm:text-sm opacity-80 uppercase mb-4 sm:mb-6">
              PX2 - FR0003500008 - Euronext Paris
            </p>
            
            {/* Market Indicator */}
            <div className="text-[#4EBBBD] text-xs sm:text-sm font-medium">
              Cours CAC 40
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Data Section */}
      <section className="w-full bg-[#112033] py-2 sm:py-3">
        <div className="max-w-[1368px] mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 overflow-x-auto">
            {/* CAC 40 */}
            <div className="flex items-center bg-white/10 rounded px-2 sm:px-3 py-1 sm:py-2 min-w-[180px]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-white text-xs sm:text-sm font-semibold text-center sm:text-left">Cac 40</span>
                <span className="text-white text-xs sm:text-sm font-semibold">7822.6699</span>
              </div>
              <div className="flex items-center ml-2 sm:ml-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#28A745]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
                <span className="text-[#28A745] text-xs sm:text-sm font-semibold ml-1">0.07</span>
              </div>
            </div>
            
            {/* Nasdaq 100 */}
            <div className="flex items-center bg-white/10 rounded px-2 sm:px-3 py-1 sm:py-2 min-w-[216px]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-white text-xs sm:text-sm font-semibold text-center sm:text-left">Nasdaq 100</span>
                <span className="text-white text-xs sm:text-sm font-semibold">23054.2383</span>
              </div>
              <div className="flex items-center ml-2 sm:ml-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#28A745]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
                <span className="text-[#28A745] text-xs sm:text-sm font-semibold ml-1">0.23</span>
              </div>
            </div>
            
            {/* Dow Jones */}
            <div className="flex items-center bg-white/10 rounded px-2 sm:px-3 py-1 sm:py-2 min-w-[202px]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-white text-xs sm:text-sm font-semibold text-center sm:text-left">Dow Jones</span>
                <span className="text-white text-xs sm:text-sm font-semibold">44245.15</span>
              </div>
              <div className="flex items-center ml-2 sm:ml-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#EB5E4F] rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
                <span className="text-[#EB5E4F] text-xs sm:text-sm font-semibold ml-1">-0.51</span>
              </div>
            </div>
            
            {/* EUR/USD */}
            <div className="flex items-center bg-white/10 rounded px-2 sm:px-3 py-1 sm:py-2 min-w-[100px]">
              <span className="text-white text-xs sm:text-sm font-semibold">EUR/USD : 1.1595</span>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data Overview Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Date Header */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <p className="text-[#686868] text-sm sm:text-base font-normal">
              Données au 19/07/2025
            </p>
          </div>

          {/* Data Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Cours Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <div className="flex flex-col h-full">
                <h3 className="text-[#112033] text-sm sm:text-base font-semibold uppercase mb-3 sm:mb-4">
                  Cours
                </h3>
                <div className="flex-1 flex items-end">
                  <span className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-normal">
                    1244.6699
                  </span>
                </div>
              </div>
            </div>

            {/* Variation Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <div className="flex flex-col h-full">
                <h3 className="text-[#112033] text-sm sm:text-base font-semibold uppercase mb-3 sm:mb-4">
                  Variation depuis le 1er janvier
                </h3>
                <div className="flex-1 flex items-end">
                  <span className="text-[#28A745] text-xl sm:text-2xl lg:text-3xl font-semibold">
                    2.96 %
                  </span>
                </div>
              </div>
            </div>

            {/* + haut Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <div className="flex flex-col h-full">
                <h3 className="text-[#112033] text-sm sm:text-base font-semibold uppercase mb-3 sm:mb-4">
                  + haut depuis le 1er janvier
                </h3>
                <div className="flex-1 flex items-end">
                  <span className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-normal">
                    5767.8799
                  </span>
                </div>
              </div>
            </div>

            {/* + bas Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <div className="flex flex-col h-full">
                <h3 className="text-[#112033] text-sm sm:text-base font-semibold uppercase mb-3 sm:mb-4">
                  + bas depuis le 1er janvier
                </h3>
                <div className="flex-1 flex items-end">
                  <span className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-normal">
                    6895663.7598
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAC 40 Investment Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="w-[45px] h-[1.5px] bg-[#4EBBBD] rounded-full"></div>
              <h2 className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-normal uppercase leading-tight">
                Le cours du cac 40
              </h2>
            </div>
          </div>

          {/* Investment CTA Card */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
              <img
                src="/images/cac40-chart-image-4f18b8.png"
                alt="CAC 40 Chart"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="max-w-2xl">
                {/* Main Question */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-[#112033] text-lg sm:text-xl lg:text-2xl font-normal leading-tight mb-2">
                    Envie d'
                    <span className="text-[#4EBBBD] font-semibold uppercase ml-1">
                      Investir en bourse
                    </span>
                    ?
                  </h3>
                </div>

                {/* Description */}
                <div className="mb-8 sm:mb-10">
                  <p className="text-[#686868] text-sm sm:text-base lg:text-lg font-semibold leading-relaxed">
                    Commencez par un bilan gratuit ! Évaluez votre patrimoine et définissez votre stratégie d'investissement personnalisée grâce à notre diagnostic offert.
                  </p>
                </div>

                {/* CTA Button */}
                <div>
                  <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-semibold text-sm sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                    Je profite de mon bilan gratuit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variation History Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Chart Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="/images/variation-chart-image-944f04.png"
                alt="Variation Chart"
                className="w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Data Table */}
            <div className="w-full lg:w-1/2">
              {/* Section Title */}
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="w-[45px] h-[1.5px] bg-[#4EBBBD] rounded-full"></div>
                  <h2 className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-normal uppercase leading-tight">
                    Historique des variations
                  </h2>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Table Header */}
                <div className="bg-[#B99066] px-4 py-3">
                  <div className="grid grid-cols-4 gap-4 text-white text-xs sm:text-sm font-semibold uppercase">
                    <div>Période</div>
                    <div className="text-center">Variation</div>
                    <div className="text-center">+ Haut</div>
                    <div className="text-center">+ Bas</div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-[#DEE2E6]">
                  {/* 5 days */}
                  <div className="px-4 py-3 grid grid-cols-4 gap-4 items-center">
                    <div className="text-[#112033] text-xs sm:text-sm">Variation sur 5 jours</div>
                    <div className="text-[#28A745] text-xs sm:text-sm font-semibold text-center">0.63%</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">7 873,30</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">7 722,09</div>
                  </div>

                  {/* 1 month */}
                  <div className="px-4 py-3 grid grid-cols-4 gap-4 items-center">
                    <div className="text-[#112033] text-xs sm:text-sm">Variation sur 1 mois</div>
                    <div className="text-[#28A745] text-xs sm:text-sm font-semibold text-center">2.85%</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">7 940,62</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">7 505,27</div>
                  </div>

                  {/* 3 months */}
                  <div className="px-4 py-3 grid grid-cols-4 gap-4 items-center">
                    <div className="text-[#112033] text-xs sm:text-sm">Variation sur 3 mois</div>
                    <div className="text-[#28A745] text-xs sm:text-sm font-semibold text-center">7.38%</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">7 955,53</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">7 218,30</div>
                  </div>

                  {/* 6 months */}
                  <div className="px-4 py-3 grid grid-cols-4 gap-4 items-center">
                    <div className="text-[#112033] text-xs sm:text-sm">Variation sur 6 mois</div>
                    <div className="text-[#28A745] text-xs sm:text-sm font-semibold text-center">1.3%</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">8 257,88</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">6 763,76</div>
                  </div>

                  {/* 1 year */}
                  <div className="px-4 py-3 grid grid-cols-4 gap-4 items-center">
                    <div className="text-[#112033] text-xs sm:text-sm">Variation sur 1 an</div>
                    <div className="text-[#28A745] text-xs sm:text-sm font-semibold text-center">3.39%</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">8 257,88</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">6 763,76</div>
                  </div>

                  {/* 5 years */}
                  <div className="px-4 py-3 grid grid-cols-4 gap-4 items-center">
                    <div className="text-[#112033] text-xs sm:text-sm">Variation sur 5 ans</div>
                    <div className="text-[#28A745] text-xs sm:text-sm font-semibold text-center">54.64%</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">8 259,19</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">15,42</div>
                  </div>

                  {/* 10 years */}
                  <div className="px-4 py-3 grid grid-cols-4 gap-4 items-center">
                    <div className="text-[#112033] text-xs sm:text-sm">Variation sur 10 ans</div>
                    <div className="text-[#28A745] text-xs sm:text-sm font-semibold text-center">52.37%</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">8 259,19</div>
                    <div className="text-[#112033] text-xs sm:text-sm text-center">15,42</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAC 40 Explanation Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Content */}
            <div className="w-full lg:w-1/2">
              {/* Section Title */}
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="w-[45px] h-[1.5px] bg-[#4EBBBD] rounded-full"></div>
                  <h2 className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-normal uppercase leading-tight">
                    Qu'est-ce que l'indice : cac 40 et comment fonctionne-t-il ?
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6 text-[#686868] text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Le CAC 40 est</strong> un indice boursier calculé à partir du cours des actions de certaines sociétés cotées sur la Bourse de <strong>Paris</strong>. Il s'agit de l'indice le plus connu et utilisé pour suivre l'évolution d'Euronext Paris. À sa création en 1988, l'acronyme « CAC » signifiait « Compagnie des Agents de Change ». Aujourd'hui, il signifie « <strong>Cotation Assistée en Continu</strong> ». La valeur d'origine, au 31 décembre 1987, était fixée à 1 000 points. Néanmoins, sa première ouverture eut lieu le 15 juin 1888. Depuis, le CAC 40 a connu son plus haut niveau en 2000, le 4 septembre, avec 6 944,77 points. Ce niveau s'explique par une bulle spéculative portant sur les sociétés technologiques. L'indice a ainsi connu <strong>trois krachs boursiers majeurs</strong> : le premier à la suite à l'éclatement de la <strong>bulle internet</strong> en 2001 et 2002, le deuxième en 2008 au cours de la <strong>crise des subprimes</strong>, le troisième en 2020, avec pour déclencheur la <strong>pandémie de Covid-19</strong>.
                </p>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#4EBBBD] rounded-full"></div>
                  <span>Voir <a href="#" className="text-[#4EBBBD] underline">les cours de la bourse</a></span>
                </div>

                <p>
                  Dans « CAC 40 », le nombre 40 informe que l'indice porte sur 40 entreprises cotées. En effet, l'indice est <strong>déterminé sur les 40 plus importantes sociétés de la Bourse de Paris</strong>, telles qu'Airbus, Bouygues, Michelin, L'Oreal, Sanofi ou encore Total. La sélection est effectuée sous la forme d'un classement en fonction du volume de titres échangés et de la capitalisation boursière flottante de ces entreprises. Une réévaluation des entreprises présentes est effectuée chaque trimestre par le Conseil Scientifique des Indices (CSI). Le classement est alors mis à jour et <strong>des entreprises du CAC 40 peuvent être remplacées par des entreprises du CAC Next 20 si leur cotation est moins importante</strong>. Le CAC Next 20 est un indice regroupant les 20 capitalisations qui suivent le CAC 40. Ensemble, le CAC 40 et le CAC Next 20 forment le CAC Large 60, suivi par le CAC Mid 60 (les 60 valeurs qui suivent le CAC Large 60), puis le CAC Small. <strong>La combinaison du CAC Large 60 et du CAC Mid 60 forme le SBF 120</strong>, Société des Bourses Françaises 120. Cet indice est de plus en plus préféré au CAC 40 par les investisseurs, car il permet de se faire une idée plus précise de l'état de l'économie française. Le SBF 120 comprend plus de valeurs, il est donc plus représentatif de la situation générale.
                </p>

                <p>
                  Le CAC 40 est ainsi déterminé en fonction de la capitalisation boursière flottante des entreprises cotées. <strong>Afin d'obtenir l'indice, le nombre d'actions échangeables de chaque entreprise est multiplié par le prix d'une action</strong>. Pour conserver une certaine représentativité de l'économie française, les entreprises sont également sélectionnées en fonction de leur secteur d'activité et leur part au sein de l'indice ne peut excéder 15 %. Le CAC 40 est publié toutes les 15 secondes, aux horaires d'ouverture de la Bourse de Paris : de 9 h à 17 h 30.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="/images/cac40-explanation-image.png"
                alt="CAC 40 Explanation"
                className="w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Diversification CTA Section */}
      <section className="w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/images/diversification-background-image.png"
                alt="Diversification Background"
                className="w-full h-full object-cover"
                style={{
                  '--original-width': '1980px',
                  '--original-height': '1032px',
                  backgroundSize: 'calc(var(--original-width) * 0.41363638639450073) calc(var(--original-height) * 0.41363638639450073)',
                  backgroundRepeat: 'repeat'
                }}
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EB5E4F]/60 via-transparent to-[#EB9550]/60 opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="max-w-2xl">
                {/* Main Question */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-[#112033] text-lg sm:text-xl lg:text-2xl font-normal leading-tight mb-2">
                    Vous souhaitez{' '}
                    <span className="text-[#4EBBBD] font-semibold uppercase">
                      diversifier votre patrimoine
                    </span>
                    ?
                  </h3>
                </div>

                {/* Description */}
                <div className="mb-8 sm:mb-10">
                  <p className="text-[#686868] text-sm sm:text-base lg:text-lg font-semibold leading-relaxed">
                    Les experts Selexium vous accompagnent dans la gestion de votre patrimoine. Réalisez votre bilan patrimonial gratuitement et laissez-vous guider.
                  </p>
                </div>

                {/* CTA Button */}
                <div>
                  <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-semibold text-sm sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                    Réalisez votre bilan patrimonial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Market Advice Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16 relative">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/stock-advice-background-image-46b049.png"
            alt="Stock Advice Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="w-[45px] h-[1.5px] bg-[#4EBBBD] rounded-full"></div>
              <h2 className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-normal uppercase leading-tight">
                Nos conseils pour débuter en bourse
              </h2>
            </div>
          </div>

          {/* Advice Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Article 1 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
              <div className="flex items-center justify-between">
                <h3 className="text-[#666666] text-sm sm:text-base font-normal leading-tight">
                  Comment placer son argent en bourse ?
                </h3>
                <div className="w-3 h-3 border-r-2 border-b-2 border-[#666666] transform rotate-45"></div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
              <div className="flex items-center justify-between">
                <h3 className="text-[#666666] text-sm sm:text-base font-normal leading-tight">
                  Comment choisir une action en bourse ?
                </h3>
                <div className="w-3 h-3 border-r-2 border-b-2 border-[#666666] transform rotate-45"></div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
              <div className="flex items-center justify-between">
                <h3 className="text-[#666666] text-sm sm:text-base font-normal leading-tight">
                  Comment passer un ordre en bourse ?
                </h3>
                <div className="w-3 h-3 border-r-2 border-b-2 border-[#666666] transform rotate-45"></div>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
              <div className="flex items-center justify-between">
                <h3 className="text-[#666666] text-sm sm:text-base font-normal leading-tight">
                  Comment lire les cours des actions en bourse ?
                </h3>
                <div className="w-3 h-3 border-r-2 border-b-2 border-[#666666] transform rotate-45"></div>
              </div>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
              <div className="flex items-center justify-between">
                <h3 className="text-[#666666] text-sm sm:text-base font-normal leading-tight">
                  Comprendre les fluctuations en bourse
                </h3>
                <div className="w-3 h-3 border-r-2 border-b-2 border-[#666666] transform rotate-45"></div>
              </div>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
              <div className="flex items-center justify-between">
                <h3 className="text-[#666666] text-sm sm:text-base font-normal leading-tight">
                  Dividende
                </h3>
                <div className="w-3 h-3 border-r-2 border-b-2 border-[#666666] transform rotate-45"></div>
              </div>
            </div>

            {/* Article 7 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer lg:col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-[#666666] text-sm sm:text-base font-normal leading-tight">
                  OPCVM
                </h3>
                <div className="w-3 h-3 border-r-2 border-b-2 border-[#666666] transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full relative">
        {/* Map Background Section */}
        <section className="relative w-full h-[446px]">
          {/* Map Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/footer-map-background-image.png"
              alt="Map Background"
              className="w-full h-full object-cover"
              style={{
                '--original-width': '1899px',
                '--original-height': '423px',
                backgroundSize: 'calc(var(--original-width) * 0.7880220413208008) calc(var(--original-height) * 0.7880220413208008)',
                backgroundRepeat: 'repeat'
              }}
            />
          </div>

          {/* Agency Locations Card */}
          <div className="absolute top-3 right-4 w-full max-w-[544px] bg-white rounded-lg shadow-lg p-4">
            <div className="mb-4">
              <h3 className="text-[#005C69] text-sm font-semibold mb-4">
                Discover our agencies
              </h3>
            </div>
            
            {/* Agency Grid */}
            <div className="grid grid-cols-3 gap-4 text-[#686868] text-xs">
              <div>Aix-en-Provence-Marseille</div>
              <div>Biarritz</div>
              <div>Bordeaux</div>
              <div>Caen</div>
              <div>Chambéry</div>
              <div>Clermont-Ferrand</div>
              <div>Moutarde</div>
              <div>Lille</div>
              <div>Lyon</div>
              <div>Metz</div>
              <div>Montpellier</div>
              <div>Nantes</div>
              <div>Agréable</div>
              <div>Orléans</div>
              <div>Paris</div>
              <div>Reims</div>
              <div>Rennes</div>
              <div>Rouen</div>
              <div>Strasbourg</div>
              <div>Toulouse</div>
              <div>Visites guidées</div>
              <div>Vannes</div>
            </div>
          </div>
        </section>

        {/* Footer Content Section */}
        <section className="relative w-full">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/images/footer-overlay-background-image-3bc48d.png"
              alt="Footer Background"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#253F60] to-[#B99066] opacity-50"></div>
          </div>

          {/* Footer Content */}
          <div className="relative z-10 max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Expertise Column */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-6">Expertise</h3>
                <ul className="space-y-3 text-[#D1D5DB] text-sm">
                  <li>Imposition fiscale</li>
                  <li>Investissement immobilier</li>
                  <li>Investissements financiers</li>
                  <li>Planification de la retraite</li>
                  <li>Conseil en gestion de patrimoine</li>
                </ul>
              </div>

              {/* Outils Column */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-6">Outils</h3>
                <ul className="space-y-3 text-[#D1D5DB] text-sm">
                  <li>Blog</li>
                  <li>Simulateurs financiers</li>
                  <li>Calculatrices d'impôts</li>
                  <li>Ressources</li>
                  <li>FAQs</li>
                </ul>
              </div>

              {/* Contactez Column */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-6">Contactez</h3>
                <ul className="space-y-3 text-[#D1D5DB] text-sm">
                  <li>123 Rue Financière</li>
                  <li>New York, NY 10001</li>
                  <li>États-Unis</li>
                  <li>Téléphone : +1 (555) 123-4567</li>
                  <li>Courriel : <span className="underline">info@wealthadvisors.com</span></li>
                </ul>
              </div>

              {/* Entreprise Column */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-6">Entreprise</h3>
                <ul className="space-y-3 text-[#D1D5DB] text-sm">
                  <li>À propos de nous</li>
                  <li>Nos services</li>
                  <li>Notre équipe</li>
                  <li>Carrières</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="relative z-10 border-t border-[#1F2937] bg-black/20">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-[#D1D5DB] text-sm">
                  © 2025 WealthAdvisors. Tous droits réservés.
                </span>
                <div className="flex gap-6 text-[#0C2C5D] text-sm">
                  <a href="#" className="hover:underline">Légal</a>
                  <a href="#" className="hover:underline">Politique de confidentialité</a>
                  <a href="#" className="hover:underline">Conditions d'utilisation</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
} 