import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, Users, Image, Car, Droplets } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-clean-blue-500" />,
      title: 'Home/Office Cleaning',
      description: 'Professional cleaning services for homes and offices with eco-friendly products.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Building className="h-12 w-12 text-clean-blue-500" />,
      title: 'Building Cleaning',
      description: 'Comprehensive cleaning solutions for all types of buildings and facilities.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1613825787113-a4e1e87117e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    },
    {
      icon: <Users className="h-12 w-12 text-clean-blue-500" />,
      title: 'Commercial Cleaning',
      description: 'Specialized cleaning services for businesses, retailers, and commercial spaces.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Image className="h-12 w-12 text-clean-blue-500" />,
      title: 'Window Cleaning',
      description: 'Crystal clear window cleaning for residential and commercial properties.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Car className="h-12 w-12 text-clean-blue-500" />,
      title: 'Mobile Carwash',
      description: 'Convenient mobile car washing and detailing services that come to you.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1549275301-c9d60945be6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Droplets className="h-12 w-12 text-clean-blue-500" />,
      title: 'High Pressure Cleaning',
      description: 'Powerful pressure cleaning for driveways, patios, and exterior surfaces.',
      path: '/services',
      image: 'https://images.unsplash.com/photo-1635771632419-1f9ed027fcee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
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
