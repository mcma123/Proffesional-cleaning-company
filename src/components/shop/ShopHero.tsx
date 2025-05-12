
import React from 'react';
import { motion } from 'framer-motion';

export const ShopHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1551634979-2b11f8c946fe?q=80&w=1920" 
          alt="Cleaning products background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/90"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Professional <span className="text-gradient">Cleaning</span> Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Discover our range of premium cleaning products designed for exceptional results in your home and business.
          </p>
          <motion.div
            className="flex justify-center space-x-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a href="#categories" className="bg-clean-green-500 hover:bg-clean-green-600 text-white px-6 py-3 rounded-xl hover-float">
              Browse Categories
            </a>
            <a href="#featured" className="bg-transparent border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-xl hover-float">
              Featured Products
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
