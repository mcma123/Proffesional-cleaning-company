
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const FeaturedProducts = () => {
  // Mock products (in a real app, these would come from a database or API)
  const products = [
    
    {
      id: 2,
      name: 'Premium Microfiber Cloth Set',
      description: 'Pack of 5 ultra-absorbent microfiber cloths for streak-free cleaning.',
      price: 249.99,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=320'
    },
    {
      id: 3,
      name: 'Industrial Strength Degreaser',
      description: 'Professional-grade degreaser for tough kitchen messes.',
      price: 299.99,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=320'
    },
    {
      id: 4,
      name: 'Micro Fibre Cloth',
      description: 'High-quality microfibre cloth for all cleaning purposes.',
      price: 14.50,
      rating: 5,
      image: '/lovable-uploads/88dd7ddf-48b3-4792-aa1a-405366c05cfd.png'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Products</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Top-quality cleaning products used by our professionals, now available for you to purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="glass-card overflow-hidden">
              <div className="relative overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - product.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-300" />
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">R {product.price.toFixed(2)}</span>
                  <Button size="sm" className="bg-clean-blue-500 hover:bg-clean-blue-600">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-clean-blue-500 hover:bg-clean-blue-600 px-8 py-6 text-lg rounded-xl hover-float">
            <Link to="/shop">Visit Our Shop</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
