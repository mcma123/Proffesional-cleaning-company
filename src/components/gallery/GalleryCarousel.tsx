
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, ZoomIn } from 'lucide-react';

export const GalleryCarousel = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const imageCategories = [
    { id: "before-after", label: "Before & After" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "outdoor", label: "Outdoor" },
  ];
  
  const images = [
    {
      id: 1,
      category: "before-after",
      title: "Kitchen Transformation",
      src: "/deep cleaning before and after.webp",
      alt: "Kitchen before and after cleaning"
    },
    {
      id: 2,
      category: "before-after",
      title: "Bathroom Revival",
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1080",
      alt: "Bathroom before and after cleaning"
    },
    {
      id: 3,
      category: "before-after",
      title: "Carpet Deep Clean",
      src: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1080",
      alt: "Carpet before and after cleaning"
    },
    {
      id: 4,
      category: "residential",
      title: "Living Room",
      src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1080",
      alt: "Clean living room"
    },
    {
      id: 5,
      category: "residential",
      title: "Bedroom",
      src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1080",
      alt: "Clean bedroom"
    },
    {
      id: 6,
      category: "residential",
      title: "Dining Area",
      src: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=1080",
      alt: "Clean dining area"
    },
    {
      id: 7,
      category: "commercial",
      title: "Office Space",
      src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1080",
      alt: "Clean office space"
    },
    {
      id: 8,
      category: "commercial",
      title: "Restaurant",
      src: "/restarant  cleaning sbu.jpg",
      alt: "Clean restaurant"
    },
    {
      id: 9,
      category: "commercial",
      title: "Retail Store",
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1080",
      alt: "Clean retail store"
    },
    {
      id: 10,
      category: "outdoor",
      title: "Driveway",
      src: "/driveway sbu.jpg",
      alt: "Clean driveway"
    },
    {
      id: 11,
      category: "outdoor",
      title: "Patio",
      src: "https://images.unsplash.com/photo-1622127922040-13cab637ee78?q=80&w=1080",
      alt: "Clean patio"
    },
    {
      id: 12,
      category: "outdoor",
      title: "Building Exterior",
      src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1080",
      alt: "Clean building exterior"
    },
  ];

  return (
    <section id="photos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Cleaning <span className="text-gradient">Showcase</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of cleaning projects. These images highlight the quality and attention to detail that defines our service.
          </p>
        </motion.div>

        <Tabs defaultValue="before-after" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white p-1 rounded-full border border-gray-200">
              {imageCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-clean-green-500 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {imageCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="focus:outline-none">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {images
                    .filter(image => image.category === category.id)
                    .map((image) => (
                      <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                        <motion.div 
                          className="relative group h-80 rounded-xl overflow-hidden"
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                              <div className="mt-2 flex space-x-2">
                                <Button 
                                  size="sm" 
                                  variant="secondary" 
                                  onClick={() => setActiveImage(image.src)}
                                  className="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white"
                                >
                                  <ZoomIn size={16} className="mr-1" /> View
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
                  <CarouselNext className="relative static right-0 translate-y-0" />
                </div>
              </Carousel>
            </TabsContent>
          ))}
        </Tabs>

        {/* Lightbox for image preview */}
        {activeImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img 
              src={activeImage} 
              className="max-w-full max-h-full p-4 object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
              onClick={() => setActiveImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
