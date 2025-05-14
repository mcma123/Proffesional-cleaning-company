
import React from 'react';

export const AboutHero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-clean-green-600/90 to-clean-blue-600/80 mix-blend-multiply" />
        <img 
          src="https://images.unsplash.com/photo-1556911073-38141963c9e0?q=80&w=2500" 
          alt="Professional cleaning team" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Transforming spaces with cutting-edge cleaning technology and eco-friendly solutions since 2015
          </p>
        </div>
      </div>
    </section>
  );
};
