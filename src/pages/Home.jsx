import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import RoomCard from '../components/RoomCard';
import { rooms, services } from '../data/data';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] -mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070" 
            alt="Grand Palace Hotel"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/60 to-luxury-black" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-luxury-gold uppercase tracking-[0.4em] font-bold text-sm mb-4"
          >
            Welcome to Paradise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-playfair font-bold text-white mb-8 leading-tight"
          >
            Experience Luxury <br /> <span className="text-luxury-gold">&</span> Comfort
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/rooms">
              <Button variant="primary" className="px-10 py-4">
                Explore Rooms
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="outline" className="px-10 py-4">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Search Form */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass p-8 rounded-3xl grid grid-cols-4 gap-6 items-end"
          >
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-1 flex items-center gap-2">
                <Calendar size={14} className="text-luxury-gold" /> Check In
              </label>
              <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-luxury-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-1 flex items-center gap-2">
                <Calendar size={14} className="text-luxury-gold" /> Check Out
              </label>
              <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-luxury-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-1 flex items-center gap-2">
                <Users size={14} className="text-luxury-gold" /> Guests
              </label>
              <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-luxury-gold">
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </select>
            </div>
            <Button variant="primary" className="w-full py-3.5">
              Check Availability
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070" 
            alt="Luxury Interior"
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 glass p-4 rounded-3xl">
             <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070" 
              alt="Pool"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="space-y-8">
          <span className="text-luxury-gold uppercase tracking-[0.3em] font-bold text-xs">Our Heritage</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">A Legacy of <span className="text-luxury-gold">Excellence</span> & Hospitality</h2>
          <p className="text-white/60 leading-relaxed">
            Since 1995, the Grand Palace Hotel has been the epitome of luxury in Hyderabad. We combine traditional Indian hospitality with modern sophistication to provide an unparalleled experience for our guests.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-playfair font-bold text-luxury-gold">25+</h4>
              <p className="text-xs uppercase tracking-widest text-white/40 mt-1">Years of Service</p>
            </div>
            <div>
              <h4 className="text-3xl font-playfair font-bold text-luxury-gold">150+</h4>
              <p className="text-xs uppercase tracking-widest text-white/40 mt-1">Luxury Rooms</p>
            </div>
          </div>
          <Link to="/about">
            <Button variant="outline" className="mt-4">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="bg-luxury-dark/50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-luxury-gold uppercase tracking-[0.3em] font-bold text-xs">Stay with us</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">Our Featured <span className="text-luxury-gold">Rooms</span></h2>
            </div>
            <Link to="/rooms" className="text-luxury-gold hover:text-gold-light transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
              View All Rooms <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="section-padding text-center">
        <span className="text-luxury-gold uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Unmatched Services</span>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-16">World Class <span className="text-luxury-gold">Amenities</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all">
                {/* Dynamically render icon - simple mapping for now */}
                <div className="font-bold text-xl">+</div>
              </div>
              <span className="text-sm font-bold text-white/80 group-hover:text-luxury-gold">{service.title}</span>
            </motion.div>
          ))}
        </div>
        
        <Link to="/services">
          <Button variant="outline" className="mt-16">
            View All Services
          </Button>
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
