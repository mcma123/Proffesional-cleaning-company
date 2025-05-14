
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutMission } from '@/components/about/AboutMission';
import { AboutValues } from '@/components/about/AboutValues';
import { AboutTeam } from '@/components/about/AboutTeam';
import { AboutHistory } from '@/components/about/AboutHistory';
import { AboutCTA } from '@/components/about/AboutCTA';

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutHistory />
      <AboutTeam />
      <AboutCTA />
    </MainLayout>
  );
};

export default AboutPage;
