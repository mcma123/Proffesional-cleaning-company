
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutMission } from '@/components/about/AboutMission';
import { AboutValues } from '@/components/about/AboutValues';
import { AboutHistory } from '@/components/about/AboutHistory';
import { AboutCTA } from '@/components/about/AboutCTA';
import { AboutVision } from '@/components/about/AboutVision';
import { AboutCompany } from '@/components/about/AboutCompany';
import { AboutStaffing } from '@/components/about/AboutStaffing';

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutHero />
      <AboutMission />
      <AboutVision />
      <AboutCompany />
      <AboutValues />
      <AboutHistory />
      <AboutStaffing />
      <AboutCTA />
    </MainLayout>
  );
};

export default AboutPage;
