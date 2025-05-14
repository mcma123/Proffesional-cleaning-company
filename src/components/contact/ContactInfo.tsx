
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin,
  MessageSquare,
  Clock,
  Book,
} from 'lucide-react';
import LocationMap from './LocationMap';

// Social media icons
import LinkedInIcon from '../../assets/linkedin.svg';
import TikTokIcon from '../../assets/tiktok.svg';
import XIcon from '../../assets/x.svg';
import InstagramIcon from '../../assets/instagram.svg';

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      info: '+27 71 442 1210',
      action: 'tel:+27714421210'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      info: 'info@professionalcleaningco.com',
      action: 'mailto:info@professionalcleaningco.com'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      info: '174 Smit St. Braamfontein, 2001',
      action: 'https://maps.google.com/maps?q=174+Smit+St+Braamfontein+2001'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Business Hours',
      info: 'Mon - Fri: 8:00 AM - 6:00 PM',
      subInfo: 'Sat: 9:00 AM - 4:00 PM'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'http://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=sibusiso-m-287a0340',
      icon: LinkedInIcon
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@professionalcleaningc?_t=ZM-8vxnLoGgUYX&_r=1',
      icon: TikTokIcon
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/pcc_cleanerz?s=21&t=OP2IoKv7_TNix7KZaXLQ9Q',
      icon: XIcon
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/pcc_cleaners?igsh=MTdvOWRyN3VtZDY1eA%3D%3D&utm_source=qr',
      icon: InstagramIcon
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <MessageSquare className="h-6 w-6 text-clean-green-500" />
          Contact Information
        </h2>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="bg-clean-green-500/10 text-clean-green-500 p-3 rounded-full">
                {detail.icon}
              </div>
              <div>
                <h3 className="font-medium">{detail.title}</h3>
                {detail.action ? (
                  <a 
                    href={detail.action} 
                    className="text-gray-600 hover:text-clean-green-500"
                  >
                    {detail.info}
                  </a>
                ) : (
                  <p className="text-gray-600">{detail.info}</p>
                )}
                {detail.subInfo && <p className="text-gray-600">{detail.subInfo}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Map Component */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-clean-green-500" />
          Find Us
        </h2>
        <div className="h-[300px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <LocationMap />
        </div>
      </motion.div>
      
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Book className="h-6 w-6 text-clean-green-500" />
          Connect With Us
        </h2>
        
        <div className="flex gap-4 mt-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-clean-green-50 p-3 rounded-full transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label={`Visit our ${social.name} profile`}
            >
              <img 
                src={social.icon} 
                alt={social.name} 
                className="w-6 h-6" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Follow us on social media for tips, before & after transformations, and special offers!
        </p>
      </motion.div>
    </div>
  );
};
