
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Gallery = () => {
  // Mock gallery items (in a real app, these would come from a database or API)
  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1580256081112-e52d3148b6ed?q=80&w=640',
      alt: 'Office cleaning',
      category: 'Office'
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=640',
      alt: 'Window cleaning process',
      category: 'Windows'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1627905646269-7f034dcc7987?q=80&w=640',
      alt: 'Residential cleaning',
      category: 'Residential'
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=640',
      alt: 'Pressure washing demonstration',
      category: 'Pressure Washing'
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src={item.type === 'image' ? item.src : item.thumbnail} 
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-clean-green-500 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-white font-medium">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-clean-green-500 hover:bg-clean-green-600 px-8 py-6 text-lg rounded-xl hover-float">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
