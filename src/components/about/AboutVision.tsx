
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export const AboutVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-clean-blue-100 rounded-full z-0"></div>
            <Card className="glass-card relative z-10 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2500" 
                  alt="Professional cleaning equipment" 
                  className="w-full h-80 object-cover"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-clean-green-100 rounded-full z-0"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-clean-blue-500 mr-3" />
              <h2 className="text-3xl font-bold text-gradient">Our Vision</h2>
            </div>
            <p className="text-gray-700 mb-6">
              To meet the growing demand for cleaning services with the latest equipment and train staff 
              and fulfil the requirements of both our Domestic and Commercial clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
