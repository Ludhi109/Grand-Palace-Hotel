import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { rooms } from '../data/data';
import { Star, Check, Wifi, Coffee, Tv, Wind, MapPin, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const RoomDetails = () => {
  const { id } = useParams();
  const room = rooms.find(r => r.id === parseInt(id));
  
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end - start;
    const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 1;
  };

  const nights = calculateNights();
  const serviceFee = 500;
  const totalPrice = (room?.price || 0) * nights + serviceFee;

  if (!room) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h2 className="text-3xl font-playfair text-white">Room not found</h2>
          <Link to="/rooms" className="text-luxury-gold mt-4 block underline">Back to Rooms</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <Link to="/rooms" className="flex items-center gap-2 text-white/60 hover:text-luxury-gold mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to All Rooms
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-[500px]">
                <img src={room.gallery[0]} alt={room.name} className="w-full h-full object-cover rounded-3xl" />
              </div>
              {room.gallery.slice(1).map((img, idx) => (
                <div key={idx} className="h-48">
                  <img src={img} alt={`${room.name} ${idx + 1}`} className="w-full h-full object-cover rounded-2xl" />
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="flex flex-col md:row justify-between items-start gap-4">
                <div>
                  <span className="text-luxury-gold uppercase tracking-widest font-bold text-xs">{room.type}</span>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mt-2">{room.name}</h1>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-luxury-gold">₹{room.price.toLocaleString('en-IN')}</div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Per Night</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/60 text-sm">
                <div className="flex items-center text-luxury-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < Math.floor(room.rating) ? "fill-current" : ""} />
                  ))}
                  <span className="ml-2 text-white">{room.rating} Rating</span>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin size={16} /> Ocean Front</span>
              </div>

              <p className="text-white/70 leading-relaxed text-lg">
                {room.description} Our rooms are meticulously designed to offer a sanctuary of peace and luxury. From high-thread-count linens to custom-designed furniture, every element has been chosen to enhance your comfort and aesthetic experience.
              </p>
            </div>

            {/* Amenities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-bold text-white border-b border-white/10 pb-4">Room Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {room.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/60">
                    <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-luxury-gold">
                      <Check size={16} />
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Booking Form */}
          <div className="lg:col-span-1">
            <div className="glass-card sticky top-32 space-y-8">
              <h3 className="text-2xl font-playfair font-bold text-white text-center">Book This Room</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Check In</label>
                  <input 
                    type="date" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Check Out</label>
                  <input 
                    type="date" 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Guests</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold text-white">
                    <option className="bg-luxury-dark">1 Adult</option>
                    <option className="bg-luxury-dark">2 Adults</option>
                    <option className="bg-luxury-dark">3 Adults</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-white/60">
                  <span>₹{room.price.toLocaleString('en-IN')} x {nights} {nights === 1 ? 'night' : 'nights'}</span>
                  <span>₹{(room.price * nights).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Service Fee</span>
                  <span>₹{serviceFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-white pt-2">
                  <span>Total</span>
                  <span className="text-luxury-gold">₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <Link to="/booking">
                <Button variant="primary" className="w-full py-4 mt-4">
                  Confirm Booking
                </Button>
              </Link>
              
              <p className="text-center text-[10px] text-white/30 uppercase tracking-widest">Secure Payment Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoomDetails;
