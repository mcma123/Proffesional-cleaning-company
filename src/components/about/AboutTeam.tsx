
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutTeam = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=987',
      bio: 'Sarah has over 15 years of experience in the cleaning industry and is passionate about sustainable cleaning solutions.'
    },
    {
      name: 'Michael Chen',
      position: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987',
      bio: 'Michael ensures that all cleaning operations run smoothly and efficiently, maintaining our high standards.'
    },
    {
      name: 'Priya Patel',
      position: 'Green Solutions Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988',
      bio: 'Priya leads our research into eco-friendly cleaning products and sustainable practices.'
    },
    {
      name: 'David Rodriguez',
      position: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987',
      bio: 'David is dedicated to ensuring our clients receive the best possible service and support.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Meet Our Team</h2>
          <p className="text-gray-700">
            Our dedicated professionals are committed to delivering exceptional cleaning services with care and precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover-float">
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-clean-green-600 text-sm mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
