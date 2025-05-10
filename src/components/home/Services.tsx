
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, Users, Image, Car, Droplets } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-clean-blue-500" />,
      title: 'Home/Office Cleaning',
      description: 'Professional cleaning services for homes and offices with eco-friendly products.',
      path: '/services/home-office'
    },
    {
      icon: <Building className="h-12 w-12 text-clean-blue-500" />,
      title: 'Building Cleaning',
      description: 'Comprehensive cleaning solutions for all types of buildings and facilities.',
      path: '/services/building'
    },
    {
      icon: <Users className="h-12 w-12 text-clean-blue-500" />,
      title: 'Commercial Cleaning',
      description: 'Specialized cleaning services for businesses, retailers, and commercial spaces.',
      path: '/services/commercial'
    },
    {
      icon: <Image className="h-12 w-12 text-clean-blue-500" />,
      title: 'Window Cleaning',
      description: 'Crystal clear window cleaning for residential and commercial properties.',
      path: '/services/window'
    },
    {
      icon: <Car className="h-12 w-12 text-clean-blue-500" />,
      title: 'Mobile Carwash',
      description: 'Convenient mobile car washing and detailing services that come to you.',
      path: '/services/carwash'
    },
    {
      icon: <Droplets className="h-12 w-12 text-clean-blue-500" />,
      title: 'High Pressure Cleaning',
      description: 'Powerful pressure cleaning for driveways, patios, and exterior surfaces.',
      path: '/services/pressure-cleaning'
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
              <div className="glass-card p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group-hover:border-clean-green-300">
                <div className="mb-6 rounded-full bg-clean-green-50 p-4 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-clean-green-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <div className="mt-6 text-clean-green-500 font-medium flex items-center">
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">
                    Learn more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
