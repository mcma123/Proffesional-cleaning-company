
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-clean-green-400 to-clean-blue-400 bg-clip-text text-transparent">Professional Cleaning Company</h3>
            <p className="text-gray-400 mb-4">
              The future of cleaning services, providing innovative and eco-friendly solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/pcc_cleaners?igsh=MTdvOWRyN3VtZDY1eA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-clean-green-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <img src="/instagram.svg" alt="Instagram" className="h-6 w-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@professionalcleaningc?_t=ZM-8vxnLoGgUYX&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-clean-green-400 transition-colors"
              >
                <span className="sr-only">TikTok</span>
                <img src="/tiktok.svg" alt="TikTok" className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/pcc_cleanerz?s=21&t=OP2IoKv7_TNix7KZaXLQ9Q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-clean-green-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <img src="/x.svg" alt="Twitter" className="h-6 w-6" />
              </a>
              <a 
                href="http://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=sibusiso-m-287a0340" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-clean-green-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-clean-green-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-clean-green-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-clean-green-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-clean-green-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-clean-green-400 transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-clean-green-400 transition-colors">Cart</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-clean-green-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#carpet" className="text-gray-400 hover:text-clean-green-400 transition-colors">Carpet Cleaning</Link>
              </li>
              <li>
                <Link to="/services#hotel-cleaning" className="text-gray-400 hover:text-clean-green-400 transition-colors">Hotel Cleaning</Link>
              </li>
              <li>
                <Link to="/services#mattress" className="text-gray-400 hover:text-clean-green-400 transition-colors">Mattress Cleaning</Link>
              </li>
              <li>
                <Link to="/services#curtains" className="text-gray-400 hover:text-clean-green-400 transition-colors">Curtains Cleaning</Link>
              </li>
              <li>
                <Link to="/services#couches" className="text-gray-400 hover:text-clean-green-400 transition-colors">Couch Cleaning</Link>
              </li>
              <li>
                <Link to="/services#commercial-dustbin" className="text-gray-400 hover:text-clean-green-400 transition-colors">Commercial Dustbin Washing</Link>
              </li>
              <li>
                <Link to="/services#Mobile-Truck-Wash" className="text-gray-400 hover:text-clean-green-400 transition-colors">Mobile Truck Wash</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-clean-green-400 mr-3 mt-0.5" />
                <p className="text-gray-400">174 Smit St. Braamfontein, 2001</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-clean-green-400 mr-3" />
                <p className="text-gray-400">+27 68 379 5401</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-clean-green-400 mr-3" />
                <p className="text-gray-400">info@PCC.co.za</p>
              </div>
              <div className="pt-2">
                <Button className="w-full bg-clean-green-500 hover:bg-clean-green-600">
                  Book a Service
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Professional Cleaning Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
