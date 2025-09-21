'use client';
import React, { useState, useEffect } from 'react';

const StockTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample stock data - you can replace this with real API data
  const stockData = [
    { symbol: 'CAC40', price: '7,873.30', change: '+0.63%', changeType: 'positive' },
    { symbol: 'SBF120', price: '6,245.18', change: '+0.45%', changeType: 'positive' },
    { symbol: 'DAX', price: '18,245.67', change: '+0.32%', changeType: 'positive' },
    { symbol: 'FTSE100', price: '8,123.45', change: '-0.12%', changeType: 'negative' },
    { symbol: 'S&P500', price: '5,234.56', change: '+0.78%', changeType: 'positive' },
    { symbol: 'NASDAQ', price: '16,789.12', change: '+1.23%', changeType: 'positive' },
    { symbol: 'NIKKEI', price: '38,456.78', change: '-0.45%', changeType: 'negative' },
    { symbol: 'HANG SENG', price: '18,234.56', change: '+0.89%', changeType: 'positive' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stockData.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [stockData.length]);

  return (
    <section className="w-full bg-[#112033] py-4">
      <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Market Status */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Marché Ouvert</span>
            </div>
            <span className="text-gray-400 text-sm">|</span>
            <span className="text-gray-400 text-sm">Dernière mise à jour: {new Date().toLocaleTimeString('fr-FR')}</span>
          </div>

          {/* Stock Ticker */}
          <div className="flex items-center space-x-6 overflow-hidden">
            {stockData.map((stock, index) => (
              <div
                key={stock.symbol}
                className={`flex items-center space-x-3 transition-all duration-500 ${
                  index === currentIndex ? 'opacity-100 scale-105' : 'opacity-60 scale-95'
                }`}
              >
                <span className="text-white text-sm font-semibold">{stock.symbol}</span>
                <span className="text-white text-sm">{stock.price}</span>
                <span
                  className={`text-sm font-medium ${
                    stock.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {stock.change}
                </span>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <button className="text-[#4EBBBD] text-sm font-medium hover:text-[#3A9A9C] transition-colors">
            Voir tous les indices →
          </button>
        </div>
      </div>
    </section>
  );
};

export default StockTicker;











