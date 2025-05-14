
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Animation delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  return <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Professional Cleaning Services" className="w-full h-full object-cover" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl glass-dark p-8 rounded-2xl transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The <span className="text-gradient">Future</span> of Clean
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional cleaning services with cutting-edge technology and eco-friendly solutions. Experience the difference with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-clean-green-500 hover:bg-clean-green-600 text-white px-8 py-6 text-lg rounded-xl hover-float">
                Book Now
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-float">
        <ArrowDown className="h-10 w-10 text-white" />
      </div>
    </div>;
};
