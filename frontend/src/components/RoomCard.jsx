import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const RoomCard = ({ room }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group"
    >
      <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-luxury-black/60 backdrop-blur-md px-3 py-1 rounded-full text-luxury-gold font-bold text-sm border border-luxury-gold/20">
          ₹{room.price.toLocaleString('en-IN')} / Night
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-luxury-gold/80 font-bold">{room.type}</span>
            <h3 className="text-xl font-playfair font-bold text-white group-hover:text-luxury-gold transition-colors">{room.name}</h3>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center text-luxury-gold mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-current" />
              ))}
            </div>
            <span className="text-[10px] text-white/40 uppercase tracking-tighter">5-Star Luxury</span>
          </div>
        </div>

        <p className="text-white/60 text-sm line-clamp-2">
          {room.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <Link to={`/rooms/${room.id}`} className="text-white hover:text-luxury-gold transition-colors text-sm font-semibold flex items-center gap-2">
            View Details <ArrowRight size={16} />
          </Link>
          <Link to="/booking">
            <Button variant="primary" className="py-2 px-4 text-xs uppercase tracking-tighter">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
