
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-clean-green-500 to-clean-blue-500 bg-clip-text text-transparent">
              ProClean
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium text-gray-700 hover:text-clean-green-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            <Link to="/shop/cart" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
            </Link>
            <Button className="bg-clean-green-500 hover:bg-clean-green-600">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 glass-card my-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-4 py-2 font-medium text-gray-700 hover:text-clean-green-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-200 my-2" />
              <Link to="/search" className="px-4 py-2 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <Search className="h-5 w-5" />
                <span>Search</span>
              </Link>
              <Link to="/shop/cart" className="px-4 py-2 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
              </Link>
              <div className="px-4 py-2">
                <Button className="w-full bg-clean-green-500 hover:bg-clean-green-600">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
