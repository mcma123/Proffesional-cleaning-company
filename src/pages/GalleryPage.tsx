
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { GalleryHero } from '@/components/gallery/GalleryHero';
import { GalleryVideos } from '@/components/gallery/GalleryVideos';
import { GalleryCarousel } from '@/components/gallery/GalleryCarousel';
import { GalleryCTA } from '@/components/gallery/GalleryCTA';

const GalleryPage = () => {
  return (
    <MainLayout>
      <GalleryHero />
      <GalleryVideos />
      <GalleryCarousel />
      <GalleryCTA />
    </MainLayout>
  );
};

export default GalleryPage;
