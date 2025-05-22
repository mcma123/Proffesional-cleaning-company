
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PhoneCall, Calendar } from 'lucide-react';

export const ServicesCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-clean-green-500/10 to-clean-blue-500/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-clean-green-500/20 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-clean-blue-500/20 translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </motion.div>
          
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience the difference with our professional cleaning services. 
              Book now for a cleaner, healthier environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-clean-green-500 hover:bg-clean-green-600 text-white px-8 py-6 text-lg rounded-xl w-full sm:w-auto group">
                  <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Book a Service
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="border-clean-green-500 text-clean-green-700 hover:bg-clean-green-50 px-8 py-6 text-lg rounded-xl w-full sm:w-auto group">
                  <PhoneCall className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Contact Us
                </Button>
              </motion.div>
            </div>
            
            <p className="mt-6 text-gray-600">
              Perfection is Our Signature
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
