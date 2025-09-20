"use client";
import React from "react";
import Header from "../../components/common/Header";

export default function PlacementsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[543px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="w-full lg:w-[733px] bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
              {/* Main Title */}
              <h1 className="text-black text-xs sm:text-2xl lg:text-4xl font-cairo font-semibold leading-tight mb-6 sm:mb-8 text-center lg:text-left">
                Placements Financiers – Optimisez votre épargne avec Azalee Wealth
              </h1>
              
              {/* Description */}
              <p className="text-[#374151] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-8 sm:mb-10 text-center lg:text-left">
                Votre partenaire de confiance en gestion de patrimoine depuis plus de 30 ans. Nous vous accompagnons pour diversifier vos placements, optimiser vos rendements, et construire un portefeuille d'investissements adapté à vos objectifs et votre profil de risque.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                  Demander une étude patrimoniale gratuite
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-[467px] flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#B99066]/20 to-[#4EBBBD]/20 rounded-2xl"></div>
                
                {/* Main image */}
                <img
                  src="/images/placement.webp"
                  alt="Expert en placements financiers consultant des graphiques et analyses de marché"
                  className="relative z-10 w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover border-4 border-white"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => {
                    console.log('Placement card image failed to load:', e.target.src);
                  }}
                  onLoad={() => console.log('Placement card image loaded successfully')}
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div>
                      <p className="text-[#112033] font-semibold text-sm">0 €</p>
                      <p className="text-[#4A5568] text-xs">Analyse gratuite</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <nav className="flex items-center text-xs sm:text-sm lg:text-base">
              <a href="#" className="text-[#005C69] font-source-sans font-semibold hover:underline">
                Accueil
              </a>
              <span className="text-[#686868] mx-2">{'>'}</span>
              <span className="text-[#4EBBBD] font-source-sans font-semibold">
                Solutions de placement
              </span>
            </nav>
          </div>

          {/* L'essentiel Block */}
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-10 mb-8 sm:mb-12 relative">
            {/* Left Vertical Bar - Mobile/Tablet */}
            <div className="absolute left-2 sm:left-4 lg:hidden top-0 bottom-0 w-1 bg-[#EB5E4F]"></div>
            
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-8">
              {/* Left: Image */}
              <div className="w-full lg:w-[96px] flex-shrink-0 flex justify-center lg:justify-start">
                <img
                  src="/images/placements-responsive-content-image-94979.png"
                  alt="L'essentiel"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-lg"
                />
              </div>
              
              {/* Right: Content */}
              <div className="flex-1">
                {/* Title */}
                <h2 className="text-[#EB5E4F] text-xs sm:text-sm lg:text-4xl font-source-sans font-semibold leading-tight mb-2 sm:mb-3 lg:mb-8">
                  L'essentiel
                </h2>
                
                {/* Content */}
                <div className="text-black text-xs sm:text-sm lg:text-lg font-source-sans font-semibold leading-relaxed">
                  <p className="mb-2 sm:mb-3 lg:mb-4">
                    Le bilan patrimonial a pour vocation d'apporter une vision claire de votre situation financière et de vos objectifs à moyen et long terme.
                  </p>
                  <p className="mb-2 sm:mb-3 lg:mb-4">
                    Grâce à cette analyse, vous identifiez les leviers pertinents pour :
                  </p>
                  <p className="mb-1 sm:mb-2 lg:mb-4">
                    Faire grandir votre patrimoine,
                  </p>
                  <p className="mb-1 sm:mb-2 lg:mb-4">
                    Protéger vos proches,
                  </p>
                  <p>
                    Optimiser durablement votre fiscalité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Wealth Management Definition */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-black text-xs sm:text-lg lg:text-4xl font-source-sans font-normal leading-tight mb-3 sm:mb-4 lg:mb-8">
              Gestion de patrimoine : Définition
            </h3>
            <div className="text-black text-xs sm:text-sm lg:text-lg font-source-sans leading-relaxed">
              <p className="mb-2 sm:mb-3 lg:mb-4">
                Le patrimoine peut inclure différents types d'actifs, notamment :
              </p>
              <p className="mb-1 sm:mb-2">Biens immobiliers</p>
              <p className="mb-1 sm:mb-2">Placements financiers</p>
              <p className="mb-1 sm:mb-2">Participations professionnelles</p>
              <p className="mb-1 sm:mb-2">Actifs mobiliers</p>
              <p className="mb-1 sm:mb-2">Droits d'usufruit</p>
              <p className="mb-1 sm:mb-2">Propriétés intellectuelles</p>
              <p>
                Droits à la retraite et rentes
              </p>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="text-[#686868] text-xs sm:text-sm lg:text-lg font-source-sans leading-relaxed">
            <p className="mb-2 sm:mb-3 lg:mb-4">
              Le bilan patrimonial a pour vocation d'apporter une vision claire de votre situation financière et de vos objectifs à moyen et long terme.
            </p>
            <p className="mb-2 sm:mb-3 lg:mb-4">
              Grâce à cette analyse, vous identifiez les leviers pertinents pour :
            </p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4">
              <li>Faire grandir votre patrimoine,</li>
              <li>Protéger vos proches,</li>
              <li>Optimiser durablement votre fiscalité.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Assets Types Section */}
      <section className="w-full bg-white py-6 sm:py-8 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-12 items-start">
            {/* Left: Image */}
            <div className="w-full lg:w-[338px] flex-shrink-0 flex justify-center lg:justify-start">
              <img
                src="/images/placements-responsive-assets-types-image-95080.png"
                alt="Types d'actifs patrimoniaux"
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-full lg:h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right: Content */}
            <div className="flex-1">
              <div className="text-black text-xs sm:text-sm lg:text-2xl font-source-sans leading-relaxed">
                <p className="mb-3 sm:mb-4 lg:mb-6 font-semibold">
                  Le patrimoine peut inclure différents types d'actifs, notamment :
                </p>
                <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
                  <li>• Biens immobiliers</li>
                  <li>• Placements financiers</li>
                  <li>• Participations professionnelles</li>
                  <li>• Actifs mobiliers</li>
                  <li>• Droits d'usufruit</li>
                  <li>• Propriétés intellectuelles</li>
                  <li>• Droits à la retraite et rentes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wealth Management Advisor Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16 relative">
        {/* Left Vertical Bar */}
        <div className="absolute left-0 top-0 w-1 h-full bg-[#B99066] opacity-50"></div>
        
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-8 sm:mb-12">
            <h4 className="text-[#005C69] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-normal leading-tight">
              Pourquoi s'entourer d'un conseiller en gestion de patrimoine ?
            </h4>
          </div>
          
          {/* Content */}
          <div className="text-black text-base sm:text-lg lg:text-xl font-source-sans leading-relaxed">
            <p className="mb-6">
              Le conseiller en gestion de patrimoine est votre allié pour structurer, développer et sécuriser votre patrimoine.
            </p>
            <p className="mb-6">
              Son rôle commence par une analyse complète de votre situation financière — le bilan patrimonial — pour dresser l'inventaire de vos actifs existants.
            </p>
            <p className="mb-6">
              À partir de ce diagnostic, il définit avec vous une stratégie d'investissement alignée sur vos objectifs : accroître vos revenus, préparer votre retraite, protéger vos proches ou anticiper votre transmission.
            </p>
            <p className="mb-6">
              Au-delà du simple conseil, le gestionnaire de patrimoine vous accompagne dans le suivi de vos placements, l'optimisation fiscale et l'adaptation de votre stratégie aux évolutions de votre situation ou de la réglementation.
            </p>
            <p>
              Un partenaire de confiance, pour un accompagnement global et durable.
            </p>
          </div>
        </div>
      </section>

      {/* Wealth Assessment Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16 relative">
        {/* Left Vertical Bar */}
        <div className="absolute left-0 top-0 w-1 h-full bg-[#B99066] opacity-50"></div>
        
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight">
              Réalisez un bilan complet de votre situation patrimoniale
            </h3>
          </div>
          
          {/* Introduction */}
          <div className="mb-12 sm:mb-16">
            <p className="text-[#686868] text-base sm:text-lg lg:text-xl font-source-sans leading-relaxed">
              Pour vous conseiller efficacement, votre conseiller en gestion de patrimoine (CGP) commence par établir un état précis de votre patrimoine.
            </p>
          </div>
          
          {/* Three Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Step 1: L'inventaire */}
            <div className="text-center">
              <h4 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-source-sans font-semibold uppercase leading-tight mb-4 sm:mb-6">
                L'inventaire
              </h4>
              <p className="text-[#686868] text-sm sm:text-base lg:text-lg font-source-sans leading-relaxed">
                Recensement détaillé de vos actifs : immobilier, placements financiers, épargne, mais aussi de vos revenus, dettes et charges futures. Cette étape constitue la base de toute stratégie patrimoniale solide.
              </p>
            </div>
            
            {/* Step 2: Le diagnostic */}
            <div className="text-center">
              <h4 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-source-sans font-semibold uppercase leading-tight mb-4 sm:mb-6">
                Le diagnostic
              </h4>
              <p className="text-[#686868] text-sm sm:text-base lg:text-lg font-source-sans leading-relaxed">
                Analyse complète de votre situation financière et patrimoniale. Cette évaluation permet de définir votre profil d'investisseur et d'identifier les axes d'optimisation possibles.
              </p>
            </div>
            
            {/* Step 3: Le plan d'action */}
            <div className="text-center">
              <h4 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-source-sans font-semibold uppercase leading-tight mb-4 sm:mb-6">
                Le plan d'action
              </h4>
              <p className="text-[#686868] text-sm sm:text-base lg:text-lg font-source-sans leading-relaxed">
                Mise en place d'une stratégie personnalisée d'investissement, ajustée à votre profil, vos objectifs et les conclusions du diagnostic. Votre conseiller vous oriente vers les placements les mieux adaptés.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#B99066] to-[#B99066] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg shadow-lg font-source-sans font-semibold text-base sm:text-lg lg:text-xl hover:bg-[#A67A5A] transition-colors duration-200">
              J'optimise mon patrimoine dès maintenant
            </button>
          </div>
        </div>
      </section>

      {/* Wealth Building Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16 relative">
        {/* Left Vertical Bar */}
        <div className="absolute left-0 top-0 w-1 h-full bg-[#EB5E4F] opacity-50"></div>
        
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-black text-lg sm:text-xl lg:text-2xl font-source-sans leading-relaxed">
            <h3 className="text-black text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight mb-6 sm:mb-8">
              Construire et valoriser son patrimoine
            </h3>
            
            <p className="mb-6">
              Assurer votre avenir financier passe par une gestion active et réfléchie de votre patrimoine. Qu'il s'agisse d'investissements immobiliers, de placements financiers ou d'autres actifs, bâtir un patrimoine solide vous permet de générer des revenus complémentaires et d'améliorer votre qualité de vie, tout en sécurisant l'avenir de vos proches.
            </p>
            
            <p className="mb-6">
              Nos conseillers vous aident à comprendre les différentes composantes de votre patrimoine :
            </p>
            
            <ul className="space-y-2 sm:space-y-3 ml-4">
              <li>• Investissements immobiliers ou financiers</li>
              <li>• Patrimoine professionnel</li>
              <li>• Biens mobiliers</li>
              <li>• Usufruit et démembrement de propriété</li>
              <li>• Propriétés intellectuelles</li>
              <li>• Droits à la retraite ou rentes viagères</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bon à savoir Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-black text-base sm:text-lg lg:text-xl font-inter leading-relaxed">
            <h4 className="text-black text-lg sm:text-xl lg:text-2xl font-inter font-semibold leading-tight mb-4 sm:mb-6">
              Bon à savoir
            </h4>
            
            <p className="mb-6">
              Prendre conseil auprès de nos experts en gestion de patrimoine, c'est faire un pas décisif pour sécuriser votre avenir et celui de vos proches. Développer son patrimoine, c'est non seulement se garantir des revenus futurs, mais aussi offrir une véritable protection financière à sa famille.
            </p>
            
            <p className="mb-6">
              Savoir que vos enfants disposeront toujours d'un logement, ou que votre conjoint sera à l'abri du besoin en cas d'imprévu, procure une véritable sérénité face à l'avenir.
            </p>
            
            <p className="font-semibold">
              ➔ Évaluez dès maintenant si votre patrimoine est adapté à votre situation et à votre âge.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Wealth Management Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="text-black text-base sm:text-lg lg:text-xl font-inter leading-relaxed mb-8 sm:mb-12">
            <h3 className="text-black text-xl sm:text-2xl lg:text-3xl font-inter font-semibold leading-tight mb-6 sm:mb-8">
              Un accompagnement sur-mesure pour développer votre patrimoine
            </h3>
            
            <p className="mb-6">
              Avec votre conseiller Azalee Wealth, différentes stratégies peuvent être étudiées pour bâtir un patrimoine solide et pérenne.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <p>
                ➔ L'investissement immobilier reste une solution sûre et durable pour faire croître votre patrimoine et générer des revenus complémentaires.
              </p>
              
              <p>
                ➔ Les placements financiers, quant à eux, offrent l'opportunité de faire fructifier votre capital tout en bénéficiant de leviers fiscaux avantageux.
              </p>
              
              <p>
                ➔ L'assurance prévoyance complète cette approche en protégeant vos proches des aléas de la vie, tout en vous permettant d'optimiser votre fiscalité.
              </p>
            </div>
            
            <p className="mt-6">
              Pour faire les meilleurs choix — rentables, sécurisés et adaptés à votre profil — un bilan patrimonial personnalisé est essentiel.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <button className="bg-[#B99066] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg font-source-sans font-semibold text-sm sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
              En savoir plus
            </button>
          </div>

          {/* Tax Optimization Section */}
          <div className="text-black text-base sm:text-lg lg:text-xl font-inter leading-relaxed mb-8 sm:mb-12">
            <h4 className="text-black text-lg sm:text-xl lg:text-2xl font-inter font-semibold leading-tight mb-4 sm:mb-6">
              Allégez votre fiscalité avec des solutions adaptées
            </h4>
            
            <p>
              Avec une pression fiscale parmi les plus élevées d'Europe — près de 47,5 % du PIB —, il est naturel de chercher à optimiser son imposition.
            </p>
          </div>

          {/* Blockquote Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 relative">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Left: Quote Icon */}
              <div className="w-full lg:w-[48px] flex-shrink-0">
                <div className="w-12 h-12 bg-[#EB5E4F] rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">"</span>
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="flex-1">
                <div className="text-[#686868] text-base sm:text-lg lg:text-xl font-source-sans leading-relaxed">
                  <h5 className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-source-sans font-semibold leading-tight mb-4 sm:mb-6">
                    Bon à savoir
                  </h5>
                  
                  <p>
                    La gestion du patrimoine des dirigeants d'entreprise nécessite une attention particulière. Leur fiscalité varie selon le statut juridique de leur société et le mode de rémunération choisi. C'est pourquoi nos experts vous conseillent sur les meilleures options pour optimiser votre fiscalité personnelle et professionnelle, tout en protégeant vos intérêts patrimoniaux.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Left Vertical Bar */}
            <div className="absolute left-0 top-0 w-1 h-full bg-[#EB5E4F] opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Retirement Planning Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="text-[#686868] text-base sm:text-lg lg:text-xl font-source-sans leading-relaxed mb-8 sm:mb-12">
            <h3 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight mb-6 sm:mb-8">
              Préparer votre retraite
            </h3>
            
            <p className="mb-6">
              <span className="font-semibold">Nos experts en gestion de patrimoine Selexium vous démontreront que </span>
              <a href="#" className="text-[#4EBBBD] hover:underline">bien préparer sa retraite</a>
              <span className="font-semibold"> quitté la vie active</span>
              . Ce moment de la vie est important et beaucoup d'entre nous l'attendent avec impatience. Pouvoir profiter pleinement d'un temps de liberté, de repos, parfois synonyme de voyages ou de nouvelles expériences, c'est un idéal qui en fait rêver plus d'un ! Mais pour cela, il faut l
              <span className="font-semibold">efficacement</span>.
            </p>
            
            <p>
              En effet, tout ne tourne pas toujours comme on l'avait imaginé. Il arrive que le départ en retraite entraîne une diminution du confort de vie que vous pouviez avoir en travaillant, causé notamment par des revenus revus à la baisse. De plus, selon l'évolution de votre santé, vous pouvez être amené à générer des dépenses non prévues.
            </p>
          </div>

          {/* Blockquote Section */}
          <div className="bg-gradient-to-r from-[#253F60] to-[#5B4733] rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 relative">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Left: Quote Image */}
              <div className="w-full lg:w-[62px] flex-shrink-0">
                <img
                  src="/images/placements-retirement-quote-image-56586a.png"
                  alt="Quote Icon"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Right: Content */}
              <div className="flex-1">
                <div className="text-white text-lg sm:text-xl lg:text-2xl font-source-sans leading-relaxed">
                  <h5 className="text-white text-lg sm:text-xl lg:text-2xl font-source-sans font-semibold leading-tight mb-4 sm:mb-6">
                    À savoir
                  </h5>
                  
                  <p>
                    Avec l'âge, la perte d'autonomie ou les frais de santé peuvent peser lourdement sur votre budget. Pour vivre votre retraite selon vos attentes, il est essentiel de prévoir dès aujourd'hui des solutions d'investissement adaptées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Planning Continuation & Heritage Transmission Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Retirement Planning Continuation */}
          <div className="text-[#686868] text-base sm:text-lg lg:text-xl font-source-sans leading-relaxed mb-8 sm:mb-12">
            <p className="mb-6">
              <span className="font-semibold">pour assurer son niveau de vie après avoir</span>
              <span className="font-semibold">'anticiper</span>
            </p>
            
            <p className="mb-6">
              Anticiper sa future retraite vous permettra de vous constituer des compléments de revenus le moment venu, tout en bénéficiant d'avantages fiscaux pendant que vous travaillez. Par ailleurs, ces capitaux épargnés pourront également être versés à vos proches en cas de décès : c'est le cas par exemple, de l'assurance-vie.
            </p>
            
            <p className="mb-6">
              D'autres dispositifs comme le plan d'épargne populaire (PERP, un produit d'épargne à long terme) ou la Loi Madelin, pour les travailleurs non-salariés, pourront, selon votre profil, vous permettre de générer des compléments de revenus ou de pallier les carences des régimes généraux. Pour pouvoir profiter de sa retraite de façon épanouie sans se soucier de ses fins de mois,
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
              <span className="font-semibold">
                nous vous proposons des solutions pour vous constituer, à long terme, un complément de retraite adéquat à vos besoins.
              </span>
              <button className="bg-[#B99066] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg font-source-sans font-semibold text-sm sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Heritage Transmission Section */}
          <div className="text-black text-lg sm:text-xl lg:text-2xl font-source-sans leading-relaxed mb-8 sm:mb-12">
            <h3 className="text-black text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight mb-6 sm:mb-8">
              Transmettre son patrimoine
            </h3>
            
            <p className="mb-6">
              La transmission de patrimoine est une étape clé qu'il convient d'anticiper pour assurer la protection de vos proches et préserver l'harmonie familiale.
            </p>
            
            <p className="mb-6">
              Souvent perçue comme délicate, cette démarche permet pourtant de sécuriser l'avenir de vos enfants, de votre conjoint ou de vos héritiers, tout en limitant les risques de conflits liés à la succession.
            </p>
            
            <p className="mb-6">
              Nos experts vous accompagnent pour structurer la transmission de vos biens — qu'il s'agisse de donations, d'investissements immobiliers ou de dispositifs successoraux adaptés — afin d'alléger votre fiscalité et d'optimiser la gestion de votre héritage.
            </p>
            
            <p className="mb-6">
              Investir dans l'immobilier reste une solution efficace pour transmettre un patrimoine tangible, générer des revenus ou valoriser un bien à la revente.
            </p>
            
            <p className="mb-6">
              En complément, la prévoyance retraite s'intègre dans cette logique de transmission sécurisée, offrant des avantages fiscaux et une protection accrue pour votre entourage.
            </p>
            
            <p className="mb-8">
              Nous vous aidons à anticiper, organiser et formaliser votre transmission patrimoniale, pour garantir la pérennité de vos volontés et la sécurité de vos proches.
            </p>
            
            <div className="flex justify-center">
              <button className="bg-[#B99066] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg font-source-sans font-semibold text-sm sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Blockquote Section */}
          <div className="bg-gradient-to-r from-[#253F60] to-[#5B4733] rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 relative">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Left: Quote Image */}
              <div className="w-full lg:w-[62px] flex-shrink-0">
                <img
                  src="/images/placements-heritage-quote-image-56586a.png"
                  alt="Quote Icon"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Right: Content */}
              <div className="flex-1">
                <div className="text-white text-lg sm:text-xl lg:text-2xl font-source-sans leading-relaxed">
                  <h5 className="text-white text-lg sm:text-xl lg:text-2xl font-source-sans font-semibold leading-tight mb-4 sm:mb-6">
                    Bon à savoir
                  </h5>
                  
                  <p>
                    Les solutions que nous vous recommandons — telles que l'investissement immobilier ou la préparation de la retraite — sont pensées pour vous aider à organiser efficacement la transmission de votre patrimoine.
                  </p>
                  
                  <p className="mt-4">
                    Notre objectif : construire avec vous une stratégie sur-mesure, cohérente avec votre situation personnelle et patrimoniale, afin de sécuriser vos biens et d'assurer une transmission optimisée et conforme à vos souhaits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protect Loved Ones Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-black text-lg sm:text-xl lg:text-2xl font-source-sans leading-relaxed">
            <h3 className="text-black text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight mb-6 sm:mb-8">
              Protéger ses proches
            </h3>
            
            <p className="mb-6">
              Assurer la sécurité financière de vos proches face aux aléas de la vie est une démarche essentielle.
            </p>
            
            <p className="mb-6">
              Accidents, imprévus de santé ou événements exceptionnels peuvent survenir à tout moment, souvent sans préparation. Les dispositifs classiques de protection sociale restent insuffisants pour couvrir l'ensemble des besoins.
            </p>
            
            <p className="mb-6">
              Nous vous conseillons donc d'anticiper avec des solutions de prévoyance personnalisées qui garantissent à votre famille un soutien financier durable.
            </p>
            
            <p className="mb-6">
              L'assurance-vie, par exemple, combine protection, transmission de capital et avantages fiscaux attractifs.
            </p>
            
            <p>
              Optez pour une approche prévoyante afin de préserver la sérénité de votre entourage, quoi qu'il arrive.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <button className="bg-[#B99066] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg shadow-lg font-source-sans font-semibold text-sm sm:text-base lg:text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <div className="w-10 h-1 bg-[#4EBBBD] rounded-full"></div>
            <h3 className="text-[#112033] text-xs sm:text-lg lg:text-2xl font-source-sans font-normal uppercase leading-tight">
              Latest news
            </h3>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {/* Article 1 */}
            <div className="bg-white/20 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/images/placements-responsive-news-article-1-48ed7d.png"
                  alt="Budget 2026"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                  <h4 className="text-white text-xs sm:text-sm font-source-sans font-normal uppercase leading-tight mb-1 sm:mb-2">
                    Budget 2026 : a financial plan contested by the French
                  </h4>
                  <div className="w-full h-px bg-white/80 mb-1 sm:mb-2"></div>
                  <div className="flex justify-between items-center text-white text-xs">
                    <span>16 Juillet 2025</span>
                    <span className="uppercase">Taxes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white/20 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/images/placements-responsive-news-article-2-92e27a.png"
                  alt="Livret A"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                  <h4 className="text-white text-xs sm:text-sm font-source-sans font-normal uppercase leading-tight mb-1 sm:mb-2">
                    Livret A : une nouvelle baisse de rendement à 1,7 %
                  </h4>
                  <div className="w-full h-px bg-white/80 mb-1 sm:mb-2"></div>
                  <div className="flex justify-between items-center text-white text-xs">
                    <span>15 Juillet 2025</span>
                    <span className="uppercase">News</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white/20 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/images/placements-responsive-news-article-3-47d3ab.png"
                  alt="PEA"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                  <h4 className="text-white text-xs sm:text-sm font-source-sans font-normal uppercase leading-tight mb-1 sm:mb-2">
                    PEA : Éric Ciotti wants to revive investment in stocks
                  </h4>
                  <div className="w-full h-px bg-white/80 mb-1 sm:mb-2"></div>
                  <div className="flex justify-between items-center text-white text-xs">
                    <span>01 Juillet 2025</span>
                    <span className="uppercase">Finance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white/20 rounded-lg shadow-lg overflow-hidden sm:col-span-2 lg:col-span-2">
              <div className="relative">
                <img
                  src="/images/placements-responsive-news-article-4-7e916a.png"
                  alt="Statut du bailleur privé"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                  <h4 className="text-white text-xs sm:text-sm font-source-sans font-normal uppercase leading-tight mb-1 sm:mb-2">
                    Statut du bailleur privé : un nouveau souffle grâce au Parlement
                  </h4>
                  <div className="w-full h-px bg-white/80 mb-1 sm:mb-2"></div>
                  <div className="flex justify-between items-center text-white text-xs">
                    <span>30 juin 2025</span>
                    <span className="uppercase">Real estate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Discover All News Link */}
          <div className="flex justify-end">
            <a href="#" className="flex items-center gap-2 text-[#4EBBBD] text-xs sm:text-sm font-source-sans hover:underline">
              Discover all the news
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#4EBBBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Featured Articles Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 mt-8 sm:mt-12">
            {/* Featured Articles */}
            <div className="lg:col-span-2">
              <div className="space-y-2 sm:space-y-4">
                {/* Featured Article 1 */}
                <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[#112033] text-xs font-source-sans leading-tight">
                      Pension reform: the bill for 65 years old divides opinion
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#112033] text-xs uppercase">Lire l'article</span>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 3.5L1 6" stroke="#112033" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#686868] text-xs leading-relaxed">
                    Une mesure qui continue d'alimenter les tensions sociales.
                  </p>
                </div>

                {/* Featured Article 2 */}
                <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 border-t border-[#E6E6E6]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[#112033] text-xs font-source-sans leading-tight">
                      Budget proposal 2026: French people facing new tax measures
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#112033] text-xs uppercase">Lire l'article</span>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 3.5L1 6" stroke="#112033" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#686868] text-xs leading-relaxed">
                    A budget law that sparks debates and concerns.
                  </p>
                </div>

                {/* Featured Article 3 */}
                <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 border-t border-[#E6E6E6]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[#112033] text-xs font-source-sans leading-tight">
                      Diminution du taux du Livret A : nouvelle baisse à 1,7 %
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#112033] text-xs uppercase">Lire l'article</span>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 3.5L1 6" stroke="#112033" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#686868] text-xs leading-relaxed">
                    Un impact direct sur l'épargne des ménages.
                  </p>
                </div>

                {/* Featured Article 4 */}
                <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 border-t border-[#E6E6E6]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[#112033] text-xs font-source-sans leading-tight">
                      Retraite progressive at 60 ans : green light from the Senate
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#112033] text-xs uppercase">Lire l'article</span>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 3.5L1 6" stroke="#112033" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#686868] text-xs leading-relaxed">
                    Un vote attendu par de nombreux actifs.
                  </p>
                </div>

                {/* Featured Article 5 */}
                <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 border-t border-[#E6E6E6]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[#112033] text-xs font-source-sans leading-tight">
                      MaPrimeRénov' : freeze of energy renovation grants starting in July 2025
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#112033] text-xs uppercase">Lire l'article</span>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 3.5L1 6" stroke="#112033" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#686868] text-xs leading-relaxed">
                    Changes that worry the owners.
                  </p>
                </div>

                {/* Featured Article 6 */}
                <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 border-t border-[#E6E6E6]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[#112033] text-xs font-source-sans leading-tight">
                      François Bayrou : un gouvernement sous le feu des critiques pour sa richesse déclarée
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#112033] text-xs uppercase">Lire l'article</span>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 3.5L1 6" stroke="#112033" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#686868] text-xs leading-relaxed">
                    La HATVP révèle un patrimoine record pour l'exécutif 2025.
                  </p>
                </div>
              </div>
            </div>

            {/* Agency Locations Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4">
                <h3 className="text-[#005C69] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  Discover our agencies
                </h3>
                <div className="grid grid-cols-1 gap-1 sm:gap-2 text-[#686868] text-xs">
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
              src="/images/placements-responsive-footer-map.png"
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
        </section>

        {/* Footer Content Section */}
        <section className="relative w-full">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/images/placements-responsive-footer-overlay-3bc48d.png"
              alt="Footer Background"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#253F60] to-[#B99066] opacity-50"></div>
          </div>

          {/* Footer Content */}
          <div className="relative z-10 max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
              {/* Expertise Column */}
              <div>
                <h3 className="text-white text-xs sm:text-lg font-semibold mb-3 sm:mb-6">Expertise</h3>
                <ul className="space-y-2 sm:space-y-3 text-[#D1D5DB] text-xs sm:text-sm">
                  <li>Imposition fiscale</li>
                  <li>Investissement immobilier</li>
                  <li>Investissements financiers</li>
                  <li>Planification de la retraite</li>
                  <li>Conseil en gestion de patrimoine</li>
                </ul>
              </div>

              {/* Outils Column */}
              <div>
                <h3 className="text-white text-xs sm:text-lg font-semibold mb-3 sm:mb-6">Outils</h3>
                <ul className="space-y-2 sm:space-y-3 text-[#D1D5DB] text-xs sm:text-sm">
                  <li>Blog</li>
                  <li>Simulateurs financiers</li>
                  <li>Calculatrices d'impôts</li>
                  <li>Ressources</li>
                  <li>FAQs</li>
                </ul>
              </div>

              {/* Contactez Column */}
              <div>
                <h3 className="text-white text-xs sm:text-lg font-semibold mb-3 sm:mb-6">Contactez</h3>
                <ul className="space-y-2 sm:space-y-3 text-[#D1D5DB] text-xs sm:text-sm">
                  <li>123 Rue Financière</li>
                  <li>New York, NY 10001</li>
                  <li>États-Unis</li>
                  <li>Téléphone : +1 (555) 123-4567</li>
                  <li>Courriel : <span className="underline">info@wealthadvisors.com</span></li>
                </ul>
              </div>

              {/* Entreprise Column */}
              <div>
                <h3 className="text-white text-xs sm:text-lg font-semibold mb-3 sm:mb-6">Entreprise</h3>
                <ul className="space-y-2 sm:space-y-3 text-[#D1D5DB] text-xs sm:text-sm">
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
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4">
                <span className="text-[#D1D5DB] text-xs sm:text-sm">
                  © 2025 WealthAdvisors. Tous droits réservés.
                </span>
                <div className="flex gap-4 sm:gap-6 text-[#0C2C5D] text-xs sm:text-sm">
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