"use client";
import React from "react";
import Header from "../../../components/common/Header";

export default function ScellierPage() {
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
                Dispositif Scellier – Lorem Ipsum Dolor Sit Amet
              </h1>
              
              {/* Description */}
              <p className="text-[#374151] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-8 sm:mb-10 text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200">
                  Lorem Ipsum Dolor
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
                  Lorem Ipsum Dolor
                </h2>
              </div>
              
              {/* Floating Price Card */}
              <div className="absolute -top-16 -right-8 w-[51.3px] h-[51.3px] sm:w-[202px] sm:h-[202px] bg-gradient-to-r from-[#FFB263] to-[#79C3BD] rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center text-white font-source-sans font-semibold text-xs sm:text-base lg:text-xl leading-tight px-1 sm:px-0">
                  <span className="hidden sm:block">12% →<br /></span>
                  <span className="sm:hidden">12%</span>
                  <span className="hidden sm:block">Lorem Ipsum Dolor</span>
                </div>
              </div>
              
              {/* Services List */}
              <div className="mt-8 sm:mt-12">
                <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm font-source-sans font-semibold leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Consectetur adipiscing elit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Sed do eiusmod tempor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">✓</span>
                    <span>Ut labore et dolore magna</span>
                  </li>
                </ul>
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
              <a href="/" className="text-[#005C69] font-source-sans font-semibold hover:underline">
                Accueil
              </a>
              <span className="text-[#686868] mx-2">{'>'}</span>
              <a href="/immobilier" className="text-[#005C69] font-source-sans font-semibold hover:underline">
                Immobilier
              </a>
              <span className="text-[#686868] mx-2">{'>'}</span>
              <span className="text-[#4EBBBD] font-source-sans font-semibold">
                Dispositif Scellier
              </span>
            </nav>
          </div>

          {/* Avantages Scellier */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold mb-6">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] p-6 rounded-lg">
                  <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Lorem Ipsum Dolor</h3>
                  <ul className="text-[#374151] font-inter space-y-2">
                    <li>• Lorem ipsum dolor sit amet</li>
                    <li>• Consectetur adipiscing elit</li>
                    <li>• Sed do eiusmod tempor</li>
                    <li>• Ut labore et dolore magna</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] p-6 rounded-lg">
                  <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Sit Amet Consectetur</h3>
                  <ul className="text-[#374151] font-inter space-y-2">
                    <li>• Lorem ipsum dolor sit amet</li>
                    <li>• Consectetur adipiscing elit</li>
                    <li>• Sed do eiusmod tempor</li>
                    <li>• Ut labore et dolore magna</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] p-6 rounded-lg">
                  <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Adipiscing Elit</h3>
                  <ul className="text-[#374151] font-inter space-y-2">
                    <li>• Lorem ipsum dolor sit amet</li>
                    <li>• Consectetur adipiscing elit</li>
                    <li>• Sed do eiusmod tempor</li>
                    <li>• Ut labore et dolore magna</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] p-6 rounded-lg">
                  <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Sed Do Eiusmod</h3>
                  <ul className="text-[#374151] font-inter space-y-2">
                    <li>• Lorem ipsum dolor sit amet</li>
                    <li>• Consectetur adipiscing elit</li>
                    <li>• Sed do eiusmod tempor</li>
                    <li>• Ut labore et dolore magna</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Calcul de la réduction */}
          <div className="bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Lorem Ipsum Dolor</h3>
                <div className="text-3xl font-bold text-[#59E2E4] mb-2">24 000€</div>
                <p className="text-[#374151] text-sm font-inter">Sit amet consectetur adipiscing</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Consectetur Adipiscing</h3>
                <div className="text-3xl font-bold text-[#B99066] mb-2">2 667€</div>
                <p className="text-[#374151] text-sm font-inter">Elit sed do eiusmod tempor</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-3">Sed Do Eiusmod</h3>
                <div className="text-3xl font-bold text-[#59E2E4] mb-2">+12 000€</div>
                <p className="text-[#374151] text-sm font-inter">Tempor incididunt ut labore</p>
              </div>
            </div>
          </div>

          {/* Nos Programmes Scellier */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-[#005C69] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-[#005C69] font-cairo font-semibold text-xl mb-4">Lorem Ipsum Dolor</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#374151] font-inter">Lorem ipsum</span>
                    <span className="font-semibold text-[#005C69]">150 000€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#374151] font-inter">Dolor sit amet</span>
                    <span className="font-semibold text-[#59E2E4]">18 000€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#374151] font-inter">Consectetur adipiscing</span>
                    <span className="font-semibold text-[#B99066]">6-8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#374151] font-inter">Sed do eiusmod</span>
                    <span className="font-semibold text-[#005C69]">Incluse</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-[#005C69] font-cairo font-semibold text-xl mb-4">Sit Amet Consectetur</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#374151] font-inter">Lorem ipsum</span>
                    <span className="font-semibold text-[#005C69]">200 000€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#374151] font-inter">Dolor sit amet</span>
                    <span className="font-semibold text-[#59E2E4]">24 000€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#374151] font-inter">Consectetur adipiscing</span>
                    <span className="font-semibold text-[#B99066]">5-7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#374151] font-inter">Sed do eiusmod</span>
                    <span className="font-semibold text-[#005C69]">Inclus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-4 sm:mb-6">
              Lorem Ipsum Dolor Sit Amet ?
            </h2>
            <p className="text-white text-base sm:text-lg font-inter mb-6 sm:mb-8 max-w-2xl mx-auto">
              Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#005C69] px-8 py-4 rounded-lg font-inter font-semibold hover:bg-gray-100 transition-colors duration-200">
                Lorem Ipsum
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold hover:bg-white hover:text-[#005C69] transition-colors duration-200">
                Dolor Sit Amet
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 