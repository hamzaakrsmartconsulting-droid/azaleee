"use client";
import React, { useState, useMemo } from 'react';
import Header from '../../../components/common/Header';

// Utility functions
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

const computeFamilyParts = (situation, children) => {
  let parts = 1;
  if (situation === 'Marié(e)' || situation === 'Pacsé(e)') {
    parts += 1;
  }
  if (children === 'Oui') {
    parts += 0.5;
  }
  return parts;
};

const calculateProgressiveTax = (income, familyParts) => {
  const taxableIncome = income / familyParts;
  
  const brackets = [
    { threshold: 0, rate: 0 },
    { threshold: 11294, rate: 0.11 },
    { threshold: 28797, rate: 0.30 },
    { threshold: 82341, rate: 0.41 },
    { threshold: 177106, rate: 0.45 }
  ];

  let totalTax = 0;
  for (let i = 1; i < brackets.length; i++) {
    const currentBracket = brackets[i];
    const previousBracket = brackets[i - 1];
    
    if (taxableIncome > previousBracket.threshold) {
      const taxableInBracket = Math.min(
        taxableIncome - previousBracket.threshold,
        currentBracket.threshold - previousBracket.threshold
      );
      totalTax += taxableInBracket * currentBracket.rate;
    }
  }

  return totalTax * familyParts;
};

export default function CalculatriceImpotsPage() {
  const [formData, setFormData] = useState({
    revenuAnnuel: 50000,
    situationMatrimoniale: 'Célibataire',
    enfants: 'Non'
  });

  const [results, setResults] = useState(null);

  const familyParts = useMemo(() => {
    return computeFamilyParts(formData.situationMatrimoniale, formData.enfants);
  }, [formData.situationMatrimoniale, formData.enfants]);

  const handleCalculate = () => {
    const tax = calculateProgressiveTax(formData.revenuAnnuel, familyParts);
    const effectiveRate = (tax / formData.revenuAnnuel) * 100;
    
    setResults({
      tax,
      effectiveRate,
      familyParts,
      taxableIncomePerPart: formData.revenuAnnuel / familyParts
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4EBBBD] to-[#3DA8AA] text-white py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Calculatrice d'Impôts
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Calculez votre impôt sur le revenu en fonction de votre situation familiale et de vos revenus
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-[#112033] mb-6">
                Vos informations
              </h2>
              
              <div className="space-y-6">
                {/* Annual Income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Revenu annuel net imposable
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formData.revenuAnnuel}
                      onChange={(e) => handleInputChange('revenuAnnuel', clamp(parseInt(e.target.value) || 0, 0, 1000000))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      placeholder="50000"
                    />
                    <span className="absolute right-3 top-3 text-gray-500">€</span>
                  </div>
                </div>

                {/* Marital Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Situation matrimoniale
                  </label>
                  <select
                    value={formData.situationMatrimoniale}
                    onChange={(e) => handleInputChange('situationMatrimoniale', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  >
                    <option value="Célibataire">Célibataire</option>
                    <option value="Marié(e)">Marié(e)</option>
                    <option value="Pacsé(e)">Pacsé(e)</option>
                  </select>
                </div>

                {/* Children */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Avez-vous des enfants à charge ?
                  </label>
                  <select
                    value={formData.enfants}
                    onChange={(e) => handleInputChange('enfants', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  >
                    <option value="Non">Non</option>
                    <option value="Oui">Oui</option>
                  </select>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={handleCalculate}
                  className="w-full bg-[#4EBBBD] text-white py-3 px-6 rounded-lg hover:bg-[#3DA8AA] transition-colors font-semibold"
                >
                  Calculer mon impôt
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-[#112033] mb-6">
                Résultats du calcul
              </h2>
              
              {results ? (
                <div className="space-y-6">
                  {/* Tax Amount */}
                  <div className="bg-gradient-to-r from-[#EAF7F7] to-[#F0F9F9] p-6 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Impôt sur le revenu</p>
                      <p className="text-3xl font-bold text-[#4EBBBD]">
                        {formatCurrency(results.tax)}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Taux effectif</span>
                      <span className="font-semibold text-[#112033]">
                        {results.effectiveRate.toFixed(1)}%
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Nombre de parts</span>
                      <span className="font-semibold text-[#112033]">
                        {results.familyParts}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600">Revenu imposable par part</span>
                      <span className="font-semibold text-[#112033]">
                        {formatCurrency(results.taxableIncomePerPart)}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">
                    Remplissez le formulaire et cliquez sur "Calculer" pour voir vos résultats
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tax Brackets Information */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#112033] text-center mb-8">
            Barème de l'impôt sur le revenu 2024
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#4EBBBD] mb-2">Tranche 1</h3>
              <p className="text-sm text-gray-600">Jusqu'à 11 294 €</p>
              <p className="text-lg font-bold text-[#112033]">0%</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#4EBBBD] mb-2">Tranche 2</h3>
              <p className="text-sm text-gray-600">De 11 295 € à 28 797 €</p>
              <p className="text-lg font-bold text-[#112033]">11%</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#4EBBBD] mb-2">Tranche 3</h3>
              <p className="text-sm text-gray-600">De 28 798 € à 82 341 €</p>
              <p className="text-lg font-bold text-[#112033]">30%</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#4EBBBD] mb-2">Tranche 4</h3>
              <p className="text-sm text-gray-600">De 82 342 € à 177 106 €</p>
              <p className="text-lg font-bold text-[#112033]">41%</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#4EBBBD] mb-2">Tranche 5</h3>
              <p className="text-sm text-gray-600">Au-delà de 177 106 €</p>
              <p className="text-lg font-bold text-[#112033]">45%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 