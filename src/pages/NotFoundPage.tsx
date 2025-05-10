
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 glass-card max-w-md">
        <h1 className="text-6xl font-bold text-clean-blue-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-clean-green-500 hover:bg-clean-green-600">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
