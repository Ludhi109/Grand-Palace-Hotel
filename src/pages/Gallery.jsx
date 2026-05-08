import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { galleryImages } from '../data/data';

const Gallery = () => {
  return (
    <Layout>
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551882547-ff43c63efe5c?auto=format&fit=crop&q=80&w=2070" 
            alt="Gallery Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/70" />
        </div>
        <div className="relative text-center z-10">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4">Our <span className="text-luxury-gold">Gallery</span></h1>
          <p className="text-white/60 tracking-widest uppercase text-sm">Visual journey through luxury</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl cursor-zoom-in group"
            >
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold tracking-[0.3em] uppercase text-xs">View Large</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
