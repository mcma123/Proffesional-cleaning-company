
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
