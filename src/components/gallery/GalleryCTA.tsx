
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const GalleryCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-clean-blue-600 to-clean-green-600 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to experience our premium cleaning services?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join our satisfied customers and discover why we're the preferred choice for professional cleaning services. Book your appointment today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white hover:bg-gray-100 text-clean-blue-600 py-6 px-8 text-lg hover-float">
                <Link to="/services">
                  View Our Services <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg hover-float">
                <Link to="/#contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full"></div>
        <div className="absolute top-40 -right-20 w-60 h-60 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-20 left-1/3 w-40 h-40 bg-white/10 rounded-full"></div>
      </div>
    </section>
  );
};
