
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { SprayCan, Trash2, Droplets, ShoppingCart } from 'lucide-react';

const categories = [
  {
    id: 'all-purpose',
    name: 'All-Purpose Cleaners',
    icon: <SprayCan className="h-8 w-8 text-clean-green-500" />,
    description: 'Versatile cleaners for multiple surfaces',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200'
  },
  {
    id: 'specialized',
    name: 'Specialized Solutions',
    icon: <Droplets className="h-8 w-8 text-clean-blue-500" />,
    description: 'Targeted formulas for specific cleaning tasks',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200'
  },
  {
    id: 'eco-friendly',
    name: 'Eco-Friendly Products',
    icon: <Trash2 className="h-8 w-8 text-green-600" />,
    description: 'Environmentally conscious cleaning solutions',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1200'
  },
  {
    id: 'tools',
    name: 'Cleaning Tools & Equipment',
    icon: <ShoppingCart className="h-8 w-8 text-amber-500" />,
    description: 'Professional-grade equipment and accessories',
    image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1200'
  }
];

export const ShopCategories = () => {
  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our carefully selected categories of professional cleaning products to find exactly what you need
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-gray-100 mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <a 
                    href={`#${category.id}`}
                    className="inline-block text-clean-green-500 font-medium hover:text-clean-green-600 transition-colors"
                  >
                    Browse Products →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
