
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building, 
  Users, 
  Image as ImageIcon, 
  Car, 
  Droplets 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Service data from homepage
export const ServicesList = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-clean-blue-500" />,
      title: 'Home/Office Cleaning',
      description: 'Transform your living and working spaces with our comprehensive cleaning services. Using eco-friendly products and advanced techniques, we ensure every corner of your home or office shines with cleanliness. Our trained professionals pay attention to detail, focusing on high-touch surfaces, hard-to-reach areas, and specialized cleaning needs.',
      longDescription: 'Our home and office cleaning services are designed to meet the unique needs of modern living and working environments. We understand that a clean space contributes to productivity, health, and overall wellbeing. Our team uses industry-leading equipment and environmentally responsible products to deliver results that exceed expectations. From regular maintenance to deep cleaning sessions, we customize our approach to fit your schedule and specific requirements.',
      benefits: [
        'Improved air quality and healthier environment',
        'Customized cleaning plans tailored to your needs',
        'Eco-friendly products safe for children and pets',
        'Trained professionals with attention to detail',
        'Flexible scheduling options including evenings and weekends'
      ],
      path: '/services/home-office',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Building className="h-12 w-12 text-clean-blue-500" />,
      title: 'Building Cleaning',
      description: 'Keep your building impeccable with our specialized cleaning solutions. We handle everything from lobbies and common areas to restrooms and maintenance spaces. Our services are designed to maintain the value and appearance of your property while providing a clean, healthy environment for occupants.',
      longDescription: 'Our building cleaning services address the complex needs of multi-level structures, apartment complexes, and commercial buildings. We employ specialized equipment and trained staff to ensure every aspect of your building receives proper attention. From high-rise window cleaning to parking garage maintenance, our comprehensive approach keeps your entire property looking its best. We work closely with building managers to develop maintenance schedules that minimize disruption while maximizing cleanliness and safety.',
      benefits: [
        'Comprehensive cleaning of all common areas and facilities',
        'Specialized equipment for high-rise and large-scale buildings',
        'Regular maintenance schedules to prevent dirt buildup',
        'Emergency cleaning services available',
        'Compliance with all safety and building regulations'
      ],
      path: '/services/building',
      image: 'https://images.unsplash.com/photo-1613825787113-a4e1e87117e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    },
    {
      icon: <Users className="h-12 w-12 text-clean-blue-500" />,
      title: 'Commercial Cleaning',
      description: 'Specialized cleaning services for businesses, retailers, and commercial spaces. We understand the unique requirements of commercial environments and deliver spotless results with minimal disruption to your operations.',
      longDescription: 'Our commercial cleaning services are tailored for businesses that understand the importance of a clean, professional environment. We serve retail stores, restaurants, medical facilities, and office complexes with customized cleaning programs that enhance your brand image and customer experience. Our teams work during off-hours or during low-traffic periods to minimize business disruption while maintaining the highest standards of cleanliness. We use commercial-grade equipment and industry-approved cleaning agents to tackle the challenges specific to high-traffic business environments.',
      benefits: [
        'Enhanced brand image through spotless facilities',
        'Improved customer experience and perception',
        'Reduced employee sick days through better sanitation',
        'Flexible scheduling that works around your business hours',
        'Specialized cleaning for industry-specific requirements'
      ],
      path: '/services/commercial',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <ImageIcon className="h-12 w-12 text-clean-blue-500" />,
      title: 'Window Cleaning',
      description: 'Crystal clear window cleaning for residential and commercial properties. Our skilled technicians use professional equipment and techniques to achieve streak-free, sparkling windows that enhance your view and let in maximum natural light.',
      longDescription: 'Our professional window cleaning services go beyond simply wiping glass surfaces. We use specialized tools and purified water systems to clean windows, frames, sills, and screens. For multi-story buildings, our trained technicians employ safe and effective methods including water-fed pole systems and, when necessary, rope access techniques. Regular window cleaning not only improves appearance but also extends the life of your windows by removing corrosive contaminants and preventing permanent damage from hard water stains, oxidation, and acid rain.',
      benefits: [
        'Streak-free, crystal clear results on all glass surfaces',
        'Extended window lifespan through removal of corrosive elements',
        'Improved natural lighting and energy efficiency',
        'Safe cleaning solutions for high-rise and difficult access windows',
        'Inspection for potential window problems during cleaning'
      ],
      path: '/services/window',
      image: 'https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Car className="h-12 w-12 text-clean-blue-500" />,
      title: 'Mobile Carwash',
      description: "Convenient mobile car washing and detailing services that come to you. Our eco-friendly approach saves water while delivering professional results, from basic washes to complete detailing packages that restore your vehicle's showroom shine.",
      longDescription: "Our mobile carwash brings convenience and professional results directly to your location. Whether at home, work, or another location, our self-contained units provide everything needed for exceptional vehicle cleaning. We offer a range of services from express exterior washes to complete detailing packages that include interior cleaning, waxing, and paint protection. Our eco-conscious approach uses specialized equipment that minimizes water usage while maximizing cleaning effectiveness. All products are biodegradable and environmentally responsible.",
      benefits: [
        'Time-saving service that comes to your location',
        'Water-efficient cleaning techniques',
        'Environmentally friendly, biodegradable products',
        'Comprehensive interior and exterior cleaning options',
        'Professional detailing services for showroom-quality results'
      ],
      path: '/services/carwash',
      image: 'https://images.unsplash.com/photo-1549275301-c9d60945be6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Droplets className="h-12 w-12 text-clean-blue-500" />,
      title: 'High Pressure Cleaning',
      description: 'Powerful pressure cleaning for driveways, patios, and exterior surfaces. Our high-pressure systems remove deep-seated dirt, grime, mold, and stains, instantly rejuvenating your outdoor spaces and building exteriors.',
      longDescription: 'Our high-pressure cleaning services effectively remove years of accumulated dirt, grime, mildew, moss, and stains from exterior surfaces. Using professional-grade equipment with adjustable pressure settings, we can safely clean a wide variety of surfaces including concrete, brick, stone, wood decking, and vinyl siding. Our technicians are trained to select the appropriate pressure levels and cleaning solutions for each surface type, ensuring thorough cleaning without damage. This environmentally responsible method uses significantly less water than traditional cleaning methods while achieving superior results.',
      benefits: [
        'Dramatic transformation of dingy, stained surfaces',
        'Removal of slippery mold and mildew for improved safety',
        'Extended lifespan of driveways, decks, and exterior surfaces',
        'Environmentally responsible cleaning with minimal water usage',
        'Preparation of surfaces for sealing, staining, or painting'
      ],
      path: '/services/pressure-cleaning',
      image: 'https://images.unsplash.com/photo-1635771632419-1f9ed027fcee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Explore Our <span className="text-gradient">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive cleaning solutions tailored to your unique needs, using cutting-edge technology and eco-friendly products.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:border-clean-green-300 group">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-3xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-full bg-clean-green-50 p-3">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-semibold group-hover:text-clean-green-500 transition-colors">
                      {service.title}
                    </h4>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h5 className="font-semibold text-xl">What we offer:</h5>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="rounded-full bg-clean-green-100 p-1 mt-1">
                            <div className="h-2 w-2 rounded-full bg-clean-green-500"></div>
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-gray-700 mt-6 pt-4 border-t border-gray-100">
                      {service.longDescription}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
