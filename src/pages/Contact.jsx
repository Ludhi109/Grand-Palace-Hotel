import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { Mail, Phone, MapPin, MessageSquare as Facebook, MessageSquare as Instagram, MessageSquare as Twitter, MessageSquare as Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2080" 
            alt="Contact Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/70" />
        </div>
        <div className="relative text-center z-10">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4">Contact <span className="text-luxury-gold">Us</span></h1>
          <p className="text-white/60 tracking-widest uppercase text-sm">We are here for you</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-playfair font-bold text-white">Get in <span className="text-luxury-gold">Touch</span></h2>
              <p className="text-white/60 leading-relaxed max-w-md">
                Have questions or need a personalized reservation? Our team is available 24/7 to assist you with any inquiries.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-luxury-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Our Location</h4>
                  <p className="text-white/40 text-sm">Banjara Hills, Road No. 1, Hyderabad, TS 500034, India</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-luxury-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Phone Number</h4>
                  <p className="text-white/40 text-sm">+91 40 1234 5678</p>
                  <p className="text-white/40 text-sm">+91 40 8765 4321</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-luxury-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Email Address</h4>
                  <p className="text-white/40 text-sm">info@grandpalace.com</p>
                  <p className="text-white/40 text-sm">reservations@grandpalace.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-widest">Follow Us</h4>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 hover:text-luxury-gold hover:border-luxury-gold transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white">
                  <option className="bg-luxury-dark">Reservation Inquiry</option>
                  <option className="bg-luxury-dark">Event Planning</option>
                  <option className="bg-luxury-dark">Feedback</option>
                  <option className="bg-luxury-dark">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                <textarea rows="5" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold text-white resize-none"></textarea>
              </div>
              <Button variant="primary" className="w-full py-5 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-luxury-dark overflow-hidden grayscale contrast-125 opacity-70">
        <iframe 
          title="Grand Palace Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.757757913495!2d78.4485!3d17.412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973a00000001%3A0x1234567890abcdef!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Contact;
