'use client';
import React from 'react';

const PagerIndicator = ({ totalPages = 3, currentPage = 0, onPageChange }) => {
  return (
    <div className="flex justify-center lg:justify-start items-center gap-2 px-4 sm:px-6 lg:px-[92px] py-2 lg:py-0">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange && onPageChange(index)}
          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
            index === currentPage 
              ? 'bg-global-5 scale-125' :'bg-gray-300 hover:bg-gray-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default PagerIndicator;