
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { Gallery } from '@/components/home/Gallery';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Testimonials } from '@/components/home/Testimonials';
import { CallToAction } from '@/components/home/CallToAction';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <Gallery />
      <FeaturedProducts />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
};

export default HomePage;
