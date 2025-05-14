
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import LocationMap from '@/components/contact/LocationMap';

const ContactPage = () => {
  return (
    <MainLayout>
      <ContactHero />
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactInfo />
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
