import React, { useState } from 'react';
import Layout from '../components/Layout';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/data';
import { Filter } from 'lucide-react';

const Rooms = () => {
  const [filter, setFilter] = useState('All');
  
  const types = ['All', 'Suite', 'Deluxe', 'Villa', 'Superior'];

  const filteredRooms = filter === 'All' 
    ? rooms 
    : rooms.filter(room => room.type === filter);

  return (
    <Layout>
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2070" 
            alt="Rooms Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/70" />
        </div>
        <div className="relative text-center z-10">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4">Luxurious <span className="text-luxury-gold">Rooms</span></h1>
          <p className="text-white/60 tracking-widest uppercase text-sm">Find your perfect stay</p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  filter === type 
                  ? 'bg-luxury-gold text-luxury-black' 
                  : 'glass text-white/60 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Filter size={16} />
            <span>Showing {filteredRooms.length} rooms</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Rooms;
