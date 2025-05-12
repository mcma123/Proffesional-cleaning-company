
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ShopHero } from '@/components/shop/ShopHero';
import { ShopCategories } from '@/components/shop/ShopCategories';
import { FeaturedProducts } from '@/components/shop/FeaturedProducts';
import { ShopNewsletter } from '@/components/shop/ShopNewsletter';

const ShopPage = () => {
  return (
    <MainLayout>
      <ShopHero />
      <ShopCategories />
      <FeaturedProducts />
      <ShopNewsletter />
    </MainLayout>
  );
};

export default ShopPage;
