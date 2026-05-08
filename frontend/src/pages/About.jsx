import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Award, Shield, Heart, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Total Rooms', value: '150+' },
    { label: 'Happy Guests', value: '50k+' },
    { label: 'Awards Won', value: '25+' },
    { label: 'Staff Members', value: '200+' },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070" 
            alt="About Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/70" />
        </div>
        <div className="relative text-center z-10 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4"
          >
            About <span className="text-luxury-gold">Us</span>
          </motion.h1>
          <div className="w-24 h-1 bg-luxury-gold mx-auto" />
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-luxury-gold uppercase tracking-widest font-bold text-xs">Our Story</span>
            <h2 className="text-4xl font-playfair font-bold text-white">Experience the Pinnacle of <span className="text-luxury-gold">Luxury</span></h2>
            <p className="text-white/60 leading-relaxed">
              Grand Palace Hotel was founded with a single vision: to redefine luxury hospitality in Hyderabad. Over the decades, we have evolved from a boutique establishment into one of the most prestigious landmarks in the city.
            </p>
            <p className="text-white/60 leading-relaxed">
              Our philosophy is rooted in the ancient Indian principle of "Atithi Devo Bhava" (The guest is God). Every detail, from the hand-picked marble in our lobby to the personalized scent in each room, is designed to make your stay unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=2070" className="rounded-2xl" alt="Interior 1" />
            <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=2070" className="rounded-2xl translate-y-8" alt="Interior 2" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-luxury-dark py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center space-y-2"
              >
                <h3 className="text-5xl font-playfair font-bold text-luxury-gold">{stat.value}</h3>
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-white">Our Core <span className="text-luxury-gold">Values</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "Excellence", desc: "We strive for perfection in everything we do." },
            { icon: Shield, title: "Integrity", desc: "Honesty and transparency are our foundations." },
            { icon: Heart, title: "Passion", desc: "We love what we do and it shows in our service." },
            { icon: Users, title: "Community", desc: "Supporting our local heritage and people." }
          ].map((item, idx) => (
            <div key={idx} className="glass-card text-center space-y-4">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-luxury-gold mx-auto">
                <item.icon size={30} />
              </div>
              <h4 className="text-xl font-bold text-white">{item.title}</h4>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
