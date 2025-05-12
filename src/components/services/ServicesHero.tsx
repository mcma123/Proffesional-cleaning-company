
import React, { useState, useEffect } from 'react';

export const ServicesHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Our Professional Cleaning Services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div 
            className={`max-w-3xl glass-dark p-8 rounded-2xl transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-200 mb-4">
              Discover our comprehensive range of professional cleaning solutions designed to transform your spaces.
            </p>
            <p className="text-lg text-gray-300">
              Using cutting-edge technology and eco-friendly products, our expert team delivers exceptional results for homes, businesses, and commercial facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
