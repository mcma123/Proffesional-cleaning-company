
import React from 'react';
import { Building, Check } from 'lucide-react';

export const AboutCompany = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-clean-green-500 mr-3" />
              <h2 className="text-3xl font-bold text-gradient">About Us</h2>
            </div>
          </div>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-6">
              Professional Cleaning Company was founded in 2012 by a well-experienced individual, Sibusiso Mahlangu, 
              who has vast experience in both the cleaning industry. The company was started with a modest amount of capital, 
              and it is growing fast in the evolving industry. It is a BBBEE Level 1 company.
            </p>
            <p className="mb-6">
              The company is supported by a strong management team and staff comprising of people with relevant technical skills 
              and experience. We strive to provide excellent, personalized and quick response cleaning services to satisfy 
              the challenging needs of our customers. Based on our experience in the cleaning industry from 2012, 
              PCC have gained a competitive edge in the following areas:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-clean-green-500" />
                </div>
                <p className="ml-3">
                  Our professional cleaning systems and methods are designed to cater for our clients' needs to achieve 
                  their requirements while great care is being taken to make sure that the customers' needs are met.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-clean-green-500" />
                </div>
                <p className="ml-3">
                  Our technical staff and trained workers aspire to deliver high quality cleaning services.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-clean-green-500" />
                </div>
                <p className="ml-3">
                  Our modern equipment, together with the right choice and quality of chemicals used in 
                  executing our services, enable us to ensure better finishing.
                </p>
              </div>
            </div>
            
            <p>
              If entrusted with the task of your housekeeping and cleaning services, P VX, as professionals in the cleaning industry, 
              will take full responsibility for your cleaning and will ensure that we make our best efforts 
              in meeting your requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
