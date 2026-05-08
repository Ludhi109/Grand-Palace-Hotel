import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { testimonials } from '../data/data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [userRating, setUserRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Layout>
      <section className="section-padding min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-playfair font-black text-white/5 select-none -z-10">
          REVIEWS
        </div>

        <div className="text-center mb-20">
          <span className="text-luxury-gold uppercase tracking-[0.4em] font-bold text-xs">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mt-4">What Our <span className="text-luxury-gold">Guests</span> Say</h2>
        </div>

        <div className="max-w-5xl w-full px-4 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-10 md:p-20 text-center space-y-8"
            >
              <div className="relative inline-block">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-24 h-24 rounded-full border-4 border-luxury-gold mx-auto object-cover"
                />
                <div className="absolute -top-2 -right-2 bg-luxury-gold text-luxury-black p-2 rounded-full">
                  <Quote size={20} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center text-luxury-gold gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < testimonials[current].rating ? "fill-current" : ""} />
                  ))}
                </div>
                <p className="text-xl md:text-3xl font-playfair italic text-white/80 leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[current].name}</h4>
                  <p className="text-luxury-gold text-sm uppercase tracking-widest mt-1">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-12">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-luxury-gold hover:border-luxury-gold transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-luxury-gold hover:border-luxury-gold transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 transition-all duration-500 rounded-full ${idx === current ? 'w-8 bg-luxury-gold' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
      </section>
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">Share Your Experience</h3>
            <p className="text-white/60">We value your feedback. Tell us about your stay at Grand Palace Hotel.</p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-16 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto text-luxury-gold">
                <Star size={40} className="fill-current" />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-white">Thank You!</h3>
              <p className="text-white/60">Your review has been submitted successfully. We appreciate your feedback!</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-luxury-gold font-bold uppercase tracking-widest text-xs hover:underline"
              >
                Submit another review
              </button>
            </motion.div>
          ) : (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
              }}
              className="glass-card p-10 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input required type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input required type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Rating</label>
                <div className="flex gap-2 text-luxury-gold">
                  {[...Array(5)].map((_, i) => (
                    <button 
                      type="button" 
                      key={i} 
                      onClick={() => setUserRating(i + 1)}
                      className="hover:scale-120 transition-transform cursor-pointer"
                    >
                      <Star size={28} className={i < userRating ? "fill-current" : ""} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Your Review</label>
                <textarea required rows="5" placeholder="Tell us about your experience..." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white resize-none"></textarea>
              </div>

              <div className="text-center pt-4">
                <button type="submit" className="bg-luxury-gold text-luxury-black font-bold uppercase tracking-widest text-xs px-12 py-5 rounded-full hover:bg-white transition-all transform hover:-translate-y-1">
                  Submit Review
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
