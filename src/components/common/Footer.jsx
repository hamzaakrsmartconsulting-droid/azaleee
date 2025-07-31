'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-global-7 px-4 sm:px-6 lg:px-[113px] py-6 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 max-w-7xl mx-auto">
        {/* Latest News Section */}
        <div className="flex-1">
          <div className="w-10 h-px bg-global-5 mb-3"></div>
          <h2 className="text-base font-source-sans font-normal uppercase text-global-2 mb-6">Latest news</h2>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Large News Item */}
            <div className="relative md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden shadow-lg">
                <img 
                  src="/images/img_image_1229.png" 
                  className="w-full h-[172px] object-cover" 
                  alt="Budget 2026 news" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-footer-1 p-3">
                  <h3 className="text-xs font-source-sans uppercase text-global-7 mb-2">
                    Budget 2026 : a financial plan contested by the French
                  </h3>
                  <div className="w-full h-px bg-footer-2 mb-2"></div>
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-1.5">
                      <img src="/images/img_svg_black_900.svg" className="w-2.5 h-2.5" alt="date" />
                      <span className="text-global-7 font-source-sans">16 Juillet 2025</span>
                    </div>
                    <span className="text-global-7 font-source-sans uppercase">Taxes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium News Item */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-lg">
                <img 
                  src="/images/img_image_1230.png" 
                  className="w-full h-[172px] object-cover" 
                  alt="Livret A news" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-footer-1 p-3">
                  <h3 className="text-xs font-source-sans uppercase text-global-7 mb-2">
                    Livret A : une nouvelle baisse de rendement à 1,7 %
                  </h3>
                  <div className="w-full h-px bg-footer-2 mb-2"></div>
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-1.5">
                      <img src="/images/img_svg_black_900.svg" className="w-2.5 h-2.5" alt="date" />
                      <span className="text-global-7 font-source-sans">15 Juillet 2025</span>
                    </div>
                    <span className="text-global-7 font-source-sans uppercase">News</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom News Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Small News Item */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-lg">
                <img 
                  src="/images/img_image_1231.png" 
                  className="w-full h-[172px] object-cover" 
                  alt="PEA news" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-footer-1 p-3">
                  <h3 className="text-xs font-source-sans uppercase text-global-7 mb-2">
                    PEA : Éric Ciotti wants to revive investment in stocks
                  </h3>
                  <div className="w-full h-px bg-footer-2 mb-2"></div>
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-1.5">
                      <img src="/images/img_svg_black_900.svg" className="w-2.5 h-2.5" alt="date" />
                      <span className="text-global-7 font-source-sans">01 Juillet 2025</span>
                    </div>
                    <span className="text-global-7 font-source-sans uppercase">Finance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Large News Item */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-lg">
                <img 
                  src="/images/img_image_1232.png" 
                  className="w-full h-[172px] object-cover" 
                  alt="Real estate news" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-footer-1 p-3">
                  <h3 className="text-xs font-source-sans uppercase text-global-7 mb-2">
                    Statut du bailleur privé : un nouveau souffle grâce au Parlement
                  </h3>
                  <div className="w-full h-px bg-footer-2 mb-2"></div>
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-1.5">
                      <img src="/images/img_svg_black_900.svg" className="w-2.5 h-2.5" alt="date" />
                      <span className="text-global-7 font-source-sans">30 juin 2025</span>
                    </div>
                    <span className="text-global-7 font-source-sans uppercase">Real estate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News List Section */}
        <div className="w-full lg:w-[350px] space-y-0">
          {/* News Item 1 */}
          <div className="bg-global-8 p-4 shadow-lg">
            <h4 className="text-xs font-source-sans text-global-2 mb-2 leading-tight">
              François Bayrou : un gouvernement sous le feu des critiques pour sa richesse déclarée
            </h4>
            <div className="flex justify-between items-center">
              <p className="text-xs font-source-sans text-global-4 flex-1 mr-4">
                La HATVP révèle un patrimoine record pour l'exécutif 2025.
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs font-source-sans uppercase text-global-2">Lire l'article</span>
                <img src="/images/img_svg_gray_900_01_6x6.svg" className="w-1.5 h-1.5" alt="arrow" />
              </div>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="bg-global-8 p-4 shadow-lg border-t border-gray-200">
            <h4 className="text-xs font-source-sans text-global-2 mb-2">
              Pension reform: the bill for 65 years old divides opinion
            </h4>
            <div className="flex justify-between items-center">
              <p className="text-xs font-source-sans text-global-4 flex-1 mr-4">
                Une mesure qui continue d'alimenter les tensions sociales.
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs font-source-sans uppercase text-global-2">Lire l'article</span>
                <img src="/images/img_svg_gray_900_01_6x6.svg" className="w-1.5 h-1.5" alt="arrow" />
              </div>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="bg-global-8 p-4 shadow-lg border-t border-gray-200">
            <h4 className="text-xs font-source-sans text-global-2 mb-2">
              Budget proposal 2026: French people facing new tax measures
            </h4>
            <div className="flex justify-between items-center">
              <p className="text-xs font-source-sans text-global-4 flex-1 mr-4">
                A budget law that sparks debates and concerns.
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs font-source-sans uppercase text-global-2">Lire l'article</span>
                <img src="/images/img_svg_gray_900_01_6x6.svg" className="w-1.5 h-1.5" alt="arrow" />
              </div>
            </div>
          </div>

          {/* News Item 4 */}
          <div className="bg-global-8 p-4 shadow-lg border-t border-gray-200">
            <h4 className="text-xs font-source-sans text-global-2 mb-2">
              Diminution du taux du Livret A : nouvelle baisse à 1,7 %
            </h4>
            <div className="flex justify-between items-center">
              <p className="text-xs font-source-sans text-global-4 flex-1 mr-4">
                Un impact direct sur l'épargne des ménages.
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs font-source-sans uppercase text-global-2">Lire l'article</span>
                <img src="/images/img_svg_gray_900_01_6x6.svg" className="w-1.5 h-1.5" alt="arrow" />
              </div>
            </div>
          </div>

          {/* News Item 5 */}
          <div className="bg-global-8 p-4 shadow-lg border-t border-gray-200">
            <h4 className="text-xs font-source-sans text-global-2 mb-2">
              Retraite progressive at 60 ans : green light from the Senate
            </h4>
            <div className="flex justify-between items-center">
              <p className="text-xs font-source-sans text-global-4 flex-1 mr-4">
                Un vote attendu par de nombreux actifs.
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs font-source-sans uppercase text-global-2">Lire l'article</span>
                <img src="/images/img_svg_gray_900_01_6x6.svg" className="w-1.5 h-1.5" alt="arrow" />
              </div>
            </div>
          </div>

          {/* News Item 6 */}
          <div className="bg-global-8 p-4 shadow-lg border-t border-gray-200">
            <h4 className="text-xs font-source-sans text-global-2 mb-2">
              MaPrimeRénov' : freeze of energy renovation grants starting in July 2025
            </h4>
            <div className="flex justify-between items-center">
              <p className="text-xs font-source-sans text-global-4 flex-1 mr-4">
                Changes that worry the owners.
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs font-source-sans uppercase text-global-2">Lire l'article</span>
                <img src="/images/img_svg_gray_900_01_6x6.svg" className="w-1.5 h-1.5" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-end items-center mt-8 px-4 lg:px-0">
        <div className="flex items-center gap-3">
          <span className="text-xs font-source-sans text-footer-1">Discover all the news</span>
          <img src="/images/img_svg_teal_300.svg" className="w-3 h-3" alt="arrow" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;