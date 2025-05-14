
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const AboutCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-clean-green-500 to-clean-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let our professional team transform your space with our eco-friendly and effective cleaning solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-clean-green-600 hover:bg-white/90 hover:text-clean-green-700 text-base px-8 py-6">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 text-base px-8 py-6">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
