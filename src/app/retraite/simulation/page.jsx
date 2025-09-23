"use client";
import React from "react";
import Header from "../../../components/common/Header";

export default function SimulationPage() {
  return (
    <>
      <Header />
      
      {/* Page cachée */}
      <section className="relative w-full min-h-screen bg-gradient-to-r from-[#253F60] to-[#B99066] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-cairo font-semibold mb-6">
            Page en cours de développement
            </h1>
          <p className="text-white text-xl opacity-90 mb-8">
            Cette page sera bientôt disponible
          </p>
          <button 
            onClick={() => window.history.back()}
            className="bg-[#B99066] text-white px-8 py-4 rounded-full font-source-sans font-semibold text-lg hover:bg-[#A67C52] transition-colors"
          >
            Retour
          </button>
        </div>
      </section>
    </>
  );
}