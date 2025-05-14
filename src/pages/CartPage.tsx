
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ShoppingCart } from '@/components/shop/ShoppingCart';

const CartPage = () => {
  return (
    <MainLayout>
      <div className="pt-24">
        <ShoppingCart />
      </div>
    </MainLayout>
  );
};

export default CartPage;
