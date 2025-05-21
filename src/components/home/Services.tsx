import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brush, 
  Armchair, 
  BedDouble, 
  Blinds, 
  Sofa, 
  Truck,
  SprayCan, 
  AirVent, 
  Home, 
  Sun, 
  Flower,
  GraduationCap
} from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const Services = () => {
  const services = [
    {
      icon: <Brush className="h-12 w-12 text-clean-blue-500" />,
      title: 'Carpet Cleaning',
      description: 'Deep cleaning for all types of carpets to remove stains, odors, and allergens.',
      path: '/services',
      image: '/carpet cleaning sbu.jpg'
    },
    {
      icon: <Armchair className="h-12 w-12 text-clean-blue-500" />,
      title: 'Office Chairs',
      description: 'Professional cleaning services for office chairs and furniture.',
      path: '/services',
      image: '/office chair cleaning.jpg'
    },
    {
      icon: <BedDouble className="h-12 w-12 text-clean-blue-500" />,
      title: 'Mattress Cleaning',
      description: 'Thorough mattress cleaning to remove dust mites, allergens, and stains.',
      path: '/services',
      image: '/matress cleaning.jpg'
    },
    {
      icon: <Blinds className="h-12 w-12 text-clean-blue-500" />,
      title: 'Curtains',
      description: 'Professional cleaning for all types of curtains and drapes.',
      path: '/services',
      image: '/sbu curtain.jpg'
    },
    {
      icon: <Sofa className="h-12 w-12 text-clean-blue-500" />,
      title: 'Couches',
      description: 'Deep cleaning services for couches and upholstery to remove stains and odors.',
      path: '/services',
      image: '/couch cleaning.jpg'
    },
    {
      icon: <Truck className="h-12 w-12 text-clean-blue-500" />,
      title: 'Truck Mobile Car Wash',
      description: 'Mobile car washing services for trucks and large vehicles.',
      path: '/services',
      image: '/car truck sbu wash.jpg'
    },
    {
      icon: <SprayCan className="h-12 w-12 text-clean-blue-500" />,
      title: 'High Pressure Cleaning',
      description: 'Powerful pressure cleaning for driveways, patios, and exterior surfaces.',
      path: '/services',
      image: '/pressure cleaning.jpg'
    },
    {
      icon: <AirVent className="h-12 w-12 text-clean-blue-500" />,
      title: 'Duct Cleaning',
      description: 'Thorough cleaning of HVAC ducts to improve air quality and efficiency.',
      path: '/services',
      image: '/DUCT CLEANING.jpg'
    },
    {
      icon: <Home className="h-12 w-12 text-clean-blue-500" />,
      title: 'Window Cleaning',
      description: 'Crystal clear window cleaning for residential and commercial properties.',
      path: '/services',
      image: '/window cleaning.jpg'
    },
    {
      icon: <Sun className="h-12 w-12 text-clean-blue-500" />,
      title: 'Solar Panel Cleaning',
      description: 'Specialized cleaning for solar panels to maintain optimal efficiency.',
      path: '/services',
      image: '/solar panel cleaning.jpg'
    },
    {
      icon: <Flower className="h-12 w-12 text-clean-blue-500" />,
      title: 'Gardening & Pool Cleaning',
      description: 'Professional gardening and pool maintenance services.',
      path: '/services',
      image: '/Pool cleaning.jpg'
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-clean-blue-500" />,
      title: 'Training Services',
      description: 'Professional training for carpet cleaning and window cleaning techniques.',
      path: '/services',
      image: '/lovable-uploads/f3581cf3-79fe-4168-9d54-597f4ee8bee8.png'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-gradient">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of professional cleaning services to meet all your needs.
            Our team uses the latest technology and eco-friendly products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.path}
              className="group"
            >
              <div className="glass-card p-0 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group-hover:border-clean-green-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={3/2}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-full bg-clean-green-50 p-3 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-clean-green-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-clean-green-500 font-medium flex items-center">
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">
                      Learn more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
