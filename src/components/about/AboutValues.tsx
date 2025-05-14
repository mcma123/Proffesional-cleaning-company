
import React from 'react';
import { Award, Briefcase, Building, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutValues = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-clean-green-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest quality results.'
    },
    {
      icon: <Star className="h-8 w-8 text-clean-green-500" />,
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our business dealings.'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-clean-green-500" />,
      title: 'Reliability',
      description: 'Our clients can count on us to deliver consistent and reliable cleaning services.'
    },
    {
      icon: <Building className="h-8 w-8 text-clean-green-500" />,
      title: 'Sustainability',
      description: 'We are committed to using eco-friendly products and practices to protect our environment.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Our Core Values</h2>
          <p className="text-gray-700">
            These principles guide our actions and decisions as we strive to be the most trusted cleaning company in the industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover-float">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-clean-green-50 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
