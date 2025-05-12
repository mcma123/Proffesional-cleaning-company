
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const GalleryVideos = () => {
  const videoCategories = [
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "specialized", label: "Specialized" },
  ];
  
  const videos = [
    {
      id: 1,
      category: "residential",
      title: "Complete House Deep Cleaning",
      thumbnail: "https://images.unsplash.com/photo-1527689638836-411945a2b57c?q=80&w=640",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Watch our team transform a family home with our comprehensive deep cleaning service."
    },
    {
      id: 2,
      category: "residential",
      title: "Carpet Shampooing Process",
      thumbnail: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=640",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "See how we revitalize carpets and remove deep-seated stains and allergens."
    },
    {
      id: 3,
      category: "commercial",
      title: "Office Sanitization Protocol",
      thumbnail: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=640",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Our commercial sanitization process ensures a safe and healthy workplace environment."
    },
    {
      id: 4,
      category: "commercial",
      title: "Retail Store Overnight Cleaning",
      thumbnail: "https://images.unsplash.com/photo-1613825787113-a4e1e87117e1?q=80&w=640",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Behind-the-scenes look at our retail cleaning service working through the night."
    },
    {
      id: 5,
      category: "specialized",
      title: "High-Pressure Driveway Cleaning",
      thumbnail: "https://images.unsplash.com/photo-1635771632419-1f9ed027fcee?q=80&w=640",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Witness the satisfying transformation as we restore driveways to like-new condition."
    },
    {
      id: 6,
      category: "specialized",
      title: "Window Cleaning at Heights",
      thumbnail: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=640",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Our professional team safely cleaning exterior windows on high-rise buildings."
    },
  ];
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Cleaning in <span className="text-gradient">Action</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our professional cleaning team in action. These videos showcase our techniques, equipment, and the amazing results we achieve.
          </p>
        </motion.div>
        
        <Tabs defaultValue="residential" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 p-1 rounded-full">
              {videoCategories.map((category) => (
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
          
          {videoCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {videos
                  .filter(video => video.category === category.id)
                  .map((video) => (
                    <motion.div 
                      key={video.id} 
                      className="glass-card overflow-hidden"
                      variants={fadeInUp}
                    >
                      <div className="relative group cursor-pointer h-64">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                          <div className="w-16 h-16 bg-clean-green-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                            <Play className="h-8 w-8 text-white fill-current ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                        <p className="text-gray-600">{video.description}</p>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
