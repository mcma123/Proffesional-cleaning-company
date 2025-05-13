import React from 'react';
import { motion } from 'framer-motion';
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
import { Card, CardContent } from '@/components/ui/card';

// Updated service data
export const ServicesList = () => {
  const services = [
    {
      icon: <Carpet className="h-12 w-12 text-clean-blue-500" />,
      title: 'Carpet Cleaning',
      description: 'Deep cleaning for all types of carpets to remove stains, odors, and allergens. Our advanced extraction method provides deeper cleaning compared to traditional methods.',
      longDescription: 'Our carpet cleaning service uses hot water extraction (steam cleaning) to penetrate deep into carpet fibers, removing dirt, allergens, and stains that regular vacuum cleaners cannot reach. We use eco-friendly cleaning solutions that are safe for children and pets, while still being effective against tough stains and odors. Regular professional carpet cleaning not only improves appearance but also extends the life of your carpets by removing abrasive dirt particles.',
      benefits: [
        'Removes deep-seated dirt, allergens, and dust mites',
        'Eliminates stubborn stains and unpleasant odors',
        'Extends carpet life by removing abrasive particles',
        'Improves indoor air quality',
        'Safe for all types of carpets including wool and delicate fibers'
      ],
      path: '/services/carpet',
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Chair className="h-12 w-12 text-clean-blue-500" />,
      title: 'Office Chair Cleaning',
      description: 'Professional cleaning services for office chairs and furniture. Remove years of accumulated dirt and restore the appearance of your office furniture.',
      longDescription: 'Office chairs endure daily use and can accumulate dirt, oils, and germs over time. Our specialized office chair cleaning service addresses both the fabric and mechanical components of your chairs. Using commercial-grade cleaning equipment, we extract embedded dirt, remove stains, and sanitize surfaces. We pay special attention to high-touch areas like armrests and adjustment levers. Our service helps maintain a professional office environment while extending the life of your furniture investment.',
      benefits: [
        'Removes embedded dirt, stains, and accumulated oils',
        'Sanitizes high-touch surfaces to reduce germ transmission',
        'Improves the professional appearance of your office',
        'Extends the lifespan of expensive office furniture',
        'Quick drying process minimizes business disruption'
      ],
      path: '/services/office-chairs',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Bed className="h-12 w-12 text-clean-blue-500" />,
      title: 'Mattress Cleaning',
      description: 'Thorough mattress cleaning to remove dust mites, allergens, and stains. Improve your sleep quality with a professionally sanitized mattress.',
      longDescription: 'Our mattress cleaning service addresses the unseen contaminants that accumulate in your bed over time. The average mattress can contain millions of dust mites and significant amounts of dead skin cells, sweat residue, and other allergens. Our multi-step process includes UV sanitization to kill bacteria, powerful extraction to remove allergens, stain treatment, and deodorization. This comprehensive approach not only improves the hygiene of your sleeping environment but can also help alleviate symptoms for allergy and asthma sufferers.',
      benefits: [
        'Eliminates dust mites and their allergens',
        'Removes stains, sweat residue, and odors',
        'UV sanitization kills bacteria and other microorganisms',
        'May reduce symptoms for allergy and asthma sufferers',
        'Extends the useful life of your mattress'
      ],
      path: '/services/mattress',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Curtains className="h-12 w-12 text-clean-blue-500" />,
      title: 'Curtains Cleaning',
      description: 'Professional cleaning for all types of curtains and drapes. Our careful cleaning process preserves fabric quality while removing dust and allergens.',
      longDescription: 'Curtains and drapes act as filters, collecting dust, pollen, and odors over time. Our curtain cleaning service handles all fabric types including delicate materials that require special care. Depending on the fabric, we use either wet cleaning, dry cleaning, or steam cleaning methods. We can clean your curtains either on-site or with our take-down and re-hanging service. Regular curtain cleaning not only improves appearance but also removes allergens that can affect indoor air quality and respiratory health.',
      benefits: [
        'Removes accumulated dust, allergens, and odors',
        'Specialized cleaning methods for different fabric types',
        'Option for on-site cleaning or take-down service',
        'Extends fabric life by removing damaging particles',
        'Improves room appearance and air quality'
      ],
      path: '/services/curtains',
      image: 'https://images.unsplash.com/photo-1628611225459-226c4cecc5cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Sofa className="h-12 w-12 text-clean-blue-500" />,
      title: 'Couch Cleaning',
      description: 'Deep cleaning services for couches and upholstery to remove stains, odors, and allergens. Revitalize your furniture with our professional cleaning service.',
      longDescription: 'Our upholstery cleaning service rejuvenates couches and soft furnishings by addressing both visible stains and hidden contaminants. We begin with a thorough inspection to identify fabric types and soiling conditions, followed by careful pre-treatment of stains. Our hot water extraction method then deeply cleans the upholstery while carefully controlling moisture. This process removes dirt, allergens, and residues that regular cleaning cannot address, leaving your furniture refreshed and sanitized.',
      benefits: [
        'Removes deep-seated dirt and persistent stains',
        'Eliminates pet odors and other unpleasant smells',
        'Extends furniture lifespan by removing abrasive dirt',
        'Safe for various upholstery types including delicate fabrics',
        'Improves indoor air quality by removing allergens'
      ],
      path: '/services/couches',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Truck className="h-12 w-12 text-clean-blue-500" />,
      title: 'Truck Mobile Car Wash',
      description: 'Mobile car washing services for trucks and large vehicles. Our truck brings all necessary equipment to your location for a convenient washing experience.',
      longDescription: 'Our truck mobile car wash service brings professional vehicle cleaning to your location. This service is particularly valuable for fleet operators, construction companies, and owners of large vehicles who find traditional car washes impractical. Our self-contained washing unit provides everything needed for a comprehensive clean, from exterior washing and waxing to interior vacuuming and detailing. We use water-efficient systems and environmentally responsible cleaning products that effectively remove road grime, salt, and industrial contaminants.',
      benefits: [
        'Convenient on-site service saves time and logistics',
        'Specialized equipment for large vehicles and fleets',
        'Eco-friendly washing system uses minimal water',
        'Complete service from exterior washing to interior detailing',
        'Flexible scheduling including weekends and after hours'
      ],
      path: '/services/truck-wash',
      image: 'https://images.unsplash.com/photo-1549275301-c9d60945be6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <SprayCan className="h-12 w-12 text-clean-blue-500" />,
      title: 'High Pressure Cleaning',
      description: 'Powerful pressure cleaning for driveways, patios, and exterior surfaces. Our high-pressure systems remove deep-seated dirt, grime, mold, and stains.',
      longDescription: 'Our high-pressure cleaning service effectively removes years of accumulated dirt, grime, mildew, moss, and stains from exterior surfaces. Using professional-grade equipment with adjustable pressure settings, we can safely clean a wide variety of surfaces including concrete, brick, stone, wood decking, and vinyl siding. Our technicians are trained to select the appropriate pressure levels and cleaning solutions for each surface type, ensuring thorough cleaning without damage. This environmentally responsible method uses significantly less water than traditional cleaning methods while achieving superior results.',
      benefits: [
        'Dramatic transformation of dingy, stained surfaces',
        'Removal of slippery mold and mildew for improved safety',
        'Extended lifespan of driveways, decks, and exterior surfaces',
        'Environmentally responsible cleaning with minimal water usage',
        'Preparation of surfaces for sealing, staining, or painting'
      ],
      path: '/services/pressure-cleaning',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <AirVent className="h-12 w-12 text-clean-blue-500" />,
      title: 'Duct Cleaning',
      description: 'Thorough cleaning of HVAC ducts to improve air quality and system efficiency. Remove dust, allergens, and contaminants from your ventilation system.',
      longDescription: 'Our comprehensive duct cleaning service improves indoor air quality by removing accumulated contaminants from your HVAC system. Over time, air ducts collect dust, pollen, mold spores, pet dander, and other allergens that are then circulated throughout your home or business. Our process begins with inspection using specialized cameras, followed by thorough cleaning using negative air pressure equipment and specialized brushes. We also clean other components of your HVAC system including the supply and return vents, registers, grilles, diffusers, and coils when accessible.',
      benefits: [
        'Improves indoor air quality by removing circulating contaminants',
        'May reduce symptoms for allergy and asthma sufferers',
        'Increases HVAC system efficiency and potentially reduces energy costs',
        'Removes musty odors from the ventilation system',
        'Complete cleaning of all accessible ductwork and HVAC components'
      ],
      path: '/services/duct',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Window className="h-12 w-12 text-clean-blue-500" />,
      title: 'Window Cleaning',
      description: 'Crystal clear window cleaning for residential and commercial properties. Our skilled technicians use professional equipment and techniques to achieve streak-free results.',
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
      icon: <Sun className="h-12 w-12 text-clean-blue-500" />,
      title: 'Solar Panel Cleaning',
      description: 'Specialized cleaning for solar panels to maintain optimal efficiency. Remove dust, bird droppings, and other debris that reduce energy production.',
      longDescription: 'Our solar panel cleaning service helps maintain the efficiency and output of your renewable energy investment. Even a thin layer of dust, pollen, or bird droppings can significantly reduce the electricity generation capacity of solar panels. We use specialized equipment including soft brushes, purified water systems, and biodegradable cleaning solutions that effectively clean without scratching or damaging the panels. Our technicians are trained in safe working methods for rooftop access and are knowledgeable about different panel types and their specific cleaning requirements.',
      benefits: [
        'Maintains optimal energy production efficiency',
        'Extends system lifespan by removing potentially damaging contaminants',
        'Ensures warranty compliance through proper maintenance',
        'Uses non-abrasive methods safe for all panel types',
        'Professional inspection identifies any potential issues'
      ],
      path: '/services/solar-panel',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      icon: <Flower className="h-12 w-12 text-clean-blue-500" />,
      title: 'Gardening & Pool Cleaning',
      description: 'Professional gardening and pool maintenance services to keep your outdoor spaces beautiful and functional year-round.',
      longDescription: 'Our comprehensive outdoor maintenance service combines professional gardening and pool cleaning to keep your exterior spaces in perfect condition. Our gardening services include regular lawn mowing, edging, pruning, weeding, fertilization, and seasonal planting. Our pool maintenance includes water testing and balancing, skimming, vacuuming, filter cleaning, and equipment checks. By combining these services, we provide a convenient one-stop solution for complete outdoor care, saving you time and ensuring consistent quality across all aspects of your outdoor space.',
      benefits: [
        'Comprehensive care of all outdoor spaces',
        'Professional garden design and seasonal planting options',
        'Complete pool maintenance including water chemistry management',
        'Regular scheduled service with consistent quality',
        'Environmentally responsible practices and products'
      ],
      path: '/services/gardening-pool',
      image: 'https://images.unsplash.com/photo-1470753323753-3f8091bb0232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
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
