import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center group">
          <span className="text-2xl md:text-3xl font-playfair font-bold tracking-widest text-luxury-gold group-hover:text-gold-light transition-colors">
            GRAND PALACE
          </span>
          <span className="text-[10px] tracking-[0.3em] text-white/60 font-light -mt-1 group-hover:text-white/80 transition-colors">
            HOTEL & RESORTS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link text-sm font-medium tracking-wider uppercase ${
                location.pathname === link.path ? 'text-luxury-gold after:w-full' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking">
            <Button variant="primary" className="text-sm py-2 px-6">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-luxury-dark/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-xl font-playfair tracking-wide ${
                    location.pathname === link.path ? 'text-luxury-gold' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/booking" className="w-full">
                <Button variant="primary" className="w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
