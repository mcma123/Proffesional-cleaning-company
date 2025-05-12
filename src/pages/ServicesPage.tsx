
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesList } from '@/components/services/ServicesList';
import { ServicesCTA } from '@/components/services/ServicesCTA';

const ServicesPage = () => {
  return (
    <MainLayout>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </MainLayout>
  );
};

export default ServicesPage;
