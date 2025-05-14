
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gradient">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At ProClean, our mission is to revolutionize the cleaning industry by providing 
              environmentally responsible cleaning solutions that protect our planet while delivering 
              exceptional results for our clients.
            </p>
            <p className="text-gray-700">
              We are committed to maintaining the highest standards of cleanliness and hygiene, 
              using cutting-edge technology and eco-friendly products to create healthier spaces 
              for homes and businesses alike.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-clean-green-100 rounded-full z-0"></div>
            <Card className="glass-card relative z-10 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2500" 
                  alt="Eco-friendly cleaning products" 
                  className="w-full h-80 object-cover"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-clean-blue-100 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
