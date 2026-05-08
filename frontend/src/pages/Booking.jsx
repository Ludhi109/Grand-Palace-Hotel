import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { CheckCircle, Calendar, Users, Hotel } from 'lucide-react';

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <section className="section-padding min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="glass-card p-10 md:p-16"
              >
                <div className="text-center mb-12">
                  <span className="text-luxury-gold uppercase tracking-[0.3em] font-bold text-xs">Reservation</span>
                  <h2 className="text-4xl font-playfair font-bold text-white mt-2">Book Your <span className="text-luxury-gold">Stay</span></h2>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1 flex items-center gap-2">
                      <Calendar size={14} className="text-luxury-gold" /> Check-in Date
                    </label>
                    <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1 flex items-center gap-2">
                      <Calendar size={14} className="text-luxury-gold" /> Check-out Date
                    </label>
                    <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1 flex items-center gap-2">
                      <Hotel size={14} className="text-luxury-gold" /> Room Type
                    </label>
                    <select required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white">
                      <option className="bg-luxury-dark">Presidential Suite</option>
                      <option className="bg-luxury-dark">Executive Suite</option>
                      <option className="bg-luxury-dark">Premium Deluxe Room</option>
                      <option className="bg-luxury-dark">Deluxe Room</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1 flex items-center gap-2">
                      <Users size={14} className="text-luxury-gold" /> Total Guests
                    </label>
                    <select required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white">
                      <option className="bg-luxury-dark">1 Adult</option>
                      <option className="bg-luxury-dark">2 Adults</option>
                      <option className="bg-luxury-dark">3 Adults</option>
                      <option className="bg-luxury-dark">4+ Adults</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 pt-8">
                    <Button variant="primary" className="w-full py-5 text-lg" type="submit">
                      Confirm Reservation
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-16 text-center space-y-8"
              >
                <div className="w-24 h-24 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto text-luxury-gold">
                  <CheckCircle size={60} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-playfair font-bold text-white">Booking Confirmed!</h2>
                  <p className="text-white/60 text-lg max-w-md mx-auto">
                    Thank you for choosing Grand Palace Hotel. A confirmation email has been sent to your address with all the details.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Make Another Booking
                  </Button>
                  <Button variant="primary" onClick={() => window.location.href = '/'}>
                    Back to Home
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
