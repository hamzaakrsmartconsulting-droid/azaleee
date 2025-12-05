"use client";
import React from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function RobienPage() {
  return (
    <>
      <Header />
      
      {/* Maintenance Page */}
      <section className="relative w-full min-h-screen bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24 flex items-center justify-center">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 lg:p-16 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">🔧</span>
            </div>
            
            <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
              Page en cours de développement
            </h1>
            
            <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
              Cette page est actuellement en cours de développement. Elle sera bientôt disponible avec du contenu complet et à jour.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.history.back()}
                className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200"
              >
                Retour
              </button>
              <a 
                href="/"
                className="bg-transparent border-2 border-[#253F60] text-[#253F60] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#253F60] hover:text-white transition-colors duration-200"
              >
                Accueil
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 