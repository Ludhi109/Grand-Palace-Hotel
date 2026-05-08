import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageSquare as Facebook, MessageSquare as Instagram, MessageSquare as Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-playfair font-bold tracking-widest text-luxury-gold">
              GRAND PALACE
            </span>
            <span className="text-[10px] tracking-[0.3em] text-white/60 font-light -mt-1">
              HOTEL & RESORTS
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Experience the pinnacle of luxury and comfort in the heart of Hyderabad. Our commitment to excellence ensures an unforgettable stay for every guest.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-luxury-gold hover:border-luxury-gold transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-playfair font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Rooms', 'Services', 'Gallery', 'Booking', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white/60 hover:text-luxury-gold transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-playfair font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-white/60 text-sm">
              <MapPin size={18} className="text-luxury-gold shrink-0" />
              <span>Banjara Hills, Road No. 1, Hyderabad, Telangana 500034, India</span>
            </li>
            <li className="flex items-center space-x-3 text-white/60 text-sm">
              <Phone size={18} className="text-luxury-gold shrink-0" />
              <span>+91 40 1234 5678</span>
            </li>
            <li className="flex items-center space-x-3 text-white/60 text-sm">
              <Mail size={18} className="text-luxury-gold shrink-0" />
              <span>contact@grandpalace.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-playfair font-bold text-white mb-6 uppercase tracking-wider">Newsletter</h4>
          <p className="text-white/60 text-sm mb-4">Subscribe to receive exclusive offers and updates.</p>
          <form className="relative">
            <input 
              type="email" 
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
            />
            <button className="absolute right-1 top-1 bottom-1 px-4 bg-luxury-gold text-luxury-black rounded-full text-xs font-bold uppercase hover:bg-gold-dark transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-white/40 text-xs">
        <p>© 2026 Grand Palace Hotel. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
