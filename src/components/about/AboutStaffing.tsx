
import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutStaffing = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-clean-blue-500 mr-3" />
              <h2 className="text-3xl font-bold text-gradient">Staffing</h2>
            </div>
          </div>
          
          <Card className="shadow-lg hover-float">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6">
                Staff shall be adjusted as required to accomplish any periodical maintenance. Any extra services 
                will be performed at a predetermined rate agreed by both parties.
              </p>
              <p className="text-gray-700 font-medium text-lg">
                It is the intention of Professional Cleaning Company to provide our clients with a high standard of cleanliness 
                and that their needs are met.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
