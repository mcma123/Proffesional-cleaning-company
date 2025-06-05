
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Star, SprayCan, Trash2, Droplets, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

// Define product types for better type safety
type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  description: string;
  bestSeller?: boolean;
  eco?: boolean;
  professional?: boolean;
  training?: boolean;
  inStock: boolean;
};

// Product data with prices in Rands
const products: Product[] = [
  // All-Purpose Cleaners
  
  
  
  
  // Eco-Friendly Products
  
  // Training Products (New)
  {
    id: 'training-1',
    name: 'Carpet Cleaning Training Course',
    price: 1200.00,
    category: 'training',
    rating: 5.0,
    image: '/lovable-uploads/f3581cf3-79fe-4168-9d54-597f4ee8bee8.png',
    description: 'Professional carpet cleaning training for up to 3 people. Learn machine usage, chemical mixing, and carpet identification.',
    training: true,
    professional: true,
    inStock: true
  },
  {
    id: 'training-2',
    name: 'Window Cleaning Training Course',
    price: 800.00,
    category: 'training',
    rating: 4.9,
    image: '/window cleaning.jpg',
    description: 'Learn professional window cleaning techniques including pure water systems, pH testing, and chemical usage.',
    training: true,
    inStock: true
  }
];

// Function to render star ratings
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
      <span className="ml-1 text-xs text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export const FeaturedProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  // Filter products based on active tab and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeTab === 'all' || product.category === activeTab;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (productId: string, productName: string) => {
    toast.success(`${productName} added to cart!`);
  };
  
  return (
    <section id="featured" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">Our Products</h2>
            <p className="text-gray-600 mt-2">
              Quality cleaning products for every need
            </p>
          </div>
          
          <div className="w-full md:w-1/3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList>
              <TabsTrigger value="all" className="px-5">All Products</TabsTrigger>
              <TabsTrigger value="all-purpose" className="px-5">All-Purpose</TabsTrigger>
              <TabsTrigger value="specialized" className="px-5">Specialised</TabsTrigger>
              <TabsTrigger value="eco-friendly" className="px-5">Eco-Friendly</TabsTrigger>
              <TabsTrigger value="tools" className="px-5">Tools & Equipment</TabsTrigger>
              <TabsTrigger value="training" className="px-5">Training</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-6">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <Card className="h-full flex flex-col group overflow-hidden">
                      <div className="relative">
                        <div className="h-72 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        
                        {/* Product badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1">
                          {product.bestSeller && (
                            <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
                              Best Seller
                            </span>
                          )}
                          {product.eco && (
                            <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                              Eco-Friendly
                            </span>
                          )}
                          {product.professional && (
                            <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                              Professional
                            </span>
                          )}
                          {product.training && (
                            <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                              Training Course
                            </span>
                          )}
                        </div>
                        
                        {/* Category icon - Updated with proper icons */}
                        <div className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow-md">
                          {product.category === 'all-purpose' && <SprayCan className="h-5 w-5 text-clean-green-500" />}
                          {product.category === 'specialized' && <Droplets className="h-5 w-5 text-clean-blue-500" />}
                          {product.category === 'eco-friendly' && <Trash2 className="h-5 w-5 text-green-600" />}
                          {product.category === 'tools' && <ShoppingCart className="h-5 w-5 text-amber-500" />}
                          {product.category === 'training' && <GraduationCap className="h-5 w-5 text-blue-600" />}
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex-grow">
                        <div className="mb-2">
                          <StarRating rating={product.rating} />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                        <p className="font-bold text-xl text-clean-green-700">
                          R {product.price.toFixed(2)}
                        </p>
                        {product.category === 'training' && (
                          <p className="text-xs font-medium text-gray-500 mt-1">
                            Maximum 3 participants per session
                          </p>
                        )}
                      </CardContent>
                      
                      <CardFooter className="p-6 pt-0">
                        <Button 
                          onClick={() => handleAddToCart(product.id, product.name)}
                          className="w-full" 
                          variant={product.inStock ? "default" : "outline"}
                          disabled={!product.inStock}
                        >
                          {product.category === 'training' ? (
                            <>
                              <GraduationCap className="mr-2 h-4 w-4" />
                              Book Training
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="mr-2 h-4 w-4" /> 
                              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
