
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Carpet, 
  Chair, 
  Bed, 
  Curtains, 
  Sofa, 
  Truck,
  SprayCan, 
  AirVent, 
  Window, 
  Sun, 
  Flower
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Carpet className="h-12 w-12 text-clean-blue-500" />,
      title: 'Carpet Cleaning',
      description: 'Deep cleaning for all types of carpets to remove stains, odors, and allergens.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Chair className="h-12 w-12 text-clean-blue-500" />,
      title: 'Office Chairs',
      description: 'Professional cleaning services for office chairs and furniture.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Bed className="h-12 w-12 text-clean-blue-500" />,
      title: 'Mattress Cleaning',
      description: 'Thorough mattress cleaning to remove dust mites, allergens, and stains.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Curtains className="h-12 w-12 text-clean-blue-500" />,
      title: 'Curtains',
      description: 'Professional cleaning for all types of curtains and drapes.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1628611225459-226c4cecc5cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Sofa className="h-12 w-12 text-clean-blue-500" />,
      title: 'Couches',
      description: 'Deep cleaning services for couches and upholstery to remove stains and odors.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Truck className="h-12 w-12 text-clean-blue-500" />,
      title: 'Truck Mobile Car Wash',
      description: 'Mobile car washing services for trucks and large vehicles.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1549275301-c9d60945be6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <SprayCan className="h-12 w-12 text-clean-blue-500" />,
      title: 'High Pressure Cleaning',
      description: 'Powerful pressure cleaning for driveways, patios, and exterior surfaces.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <AirVent className="h-12 w-12 text-clean-blue-500" />,
      title: 'Duct Cleaning',
      description: 'Thorough cleaning of HVAC ducts to improve air quality and efficiency.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Window className="h-12 w-12 text-clean-blue-500" />,
      title: 'Window Cleaning',
      description: 'Crystal clear window cleaning for residential and commercial properties.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Sun className="h-12 w-12 text-clean-blue-500" />,
      title: 'Solar Panel Cleaning',
      description: 'Specialized cleaning for solar panels to maintain optimal efficiency.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Flower className="h-12 w-12 text-clean-blue-500" />,
      title: 'Gardening & Pool Cleaning',
      description: 'Professional gardening and pool maintenance services.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1470753323753-3f8091bb0232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
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
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
