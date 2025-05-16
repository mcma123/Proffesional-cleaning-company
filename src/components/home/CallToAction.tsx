
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CallToAction = () => {
  return <section className="py-20 bg-clean-blue-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="25" cy="25" r="12.5" fill="#ffffff"></circle>
          </pattern>
          <rect fill="url(#pattern-circles)" width="100%" height="100%"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the difference with our professional cleaning services. Book now and enjoy a cleaner, healthier environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-clean-blue-500 hover:bg-white/90 text-lg px-8 py-6 rounded-xl hover-float">
              <Link to="/contact">Book a Service</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
