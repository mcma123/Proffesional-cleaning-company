
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

export const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  // Using the same gallery items as in GalleryCarousel
  const galleryItems = [
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
      category: "residential",
      title: "Living Room",
      src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1080",
      alt: "Clean living room"
    },
    {
      id: 4,
      category: "commercial",
      title: "Restaurant",
      src: "/restarant  cleaning sbu.jpg",
      alt: "Clean restaurant"
    },
    {
      id: 10,
      category: "outdoor",
      title: "Driveway",
      src: "/driveway sbu.jpg",
      alt: "Clean driveway"
    },
    {
      id: 8,
      category: "commercial",
      title: "Office Space",
      src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1080",
      alt: "Clean office space"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-gradient">Work</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformation for yourself. Browse through our gallery of before and after cleaning projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item) => (
            <motion.div 
              key={item.id}
              className="relative group h-64 overflow-hidden rounded-xl shadow-lg"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <AspectRatio ratio={4/3} className="w-full h-full">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  <div className="mt-2">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      onClick={() => setActiveImage(item.src)}
                      className="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white"
                    >
                      <ZoomIn size={16} className="mr-1" /> View
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-clean-green-500 hover:bg-clean-green-600 px-8 py-6 text-lg rounded-xl hover-float">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>

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
    </section>
  );
};
