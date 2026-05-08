import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { services } from '../data/data';
import * as Icons from 'lucide-react';

const Services = () => {
  return (
    <Layout>
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?auto=format&fit=crop&q=80&w=2070" 
            alt="Services Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/70" />
        </div>
        <div className="relative text-center z-10">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4">Elite <span className="text-luxury-gold">Services</span></h1>
          <p className="text-white/60 tracking-widest uppercase text-sm">Every detail matters</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = Icons[service.icon] || Icons.Sparkles;
            return (
              <div key={service.id} className="glass-card group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-luxury-gold mb-6 group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-500">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-luxury-gold transition-colors">{service.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {service.description} We pride ourselves on delivering exceptional {service.title.toLowerCase()} experiences that cater to the most discerning tastes.
                </p>
                <Link 
                  to="/contact" 
                  className="mt-6 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity block text-luxury-gold text-xs font-bold uppercase tracking-widest hover:underline"
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-luxury-dark py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">Why Choose <span className="text-luxury-gold">Us</span>?</h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Icons.Shield, title: "24/7 Security", desc: "Your safety is our top priority with around-the-clock professional security and surveillance." },
            { icon: Icons.Zap, title: "Instant Check-in", desc: "Experience seamless arrival with our express digital check-in and luggage assistance." },
            { icon: Icons.Sparkles, title: "Concierge Service", desc: "Our dedicated concierge team is available to assist with any request, no matter how small." }
          ].map((item, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="text-luxury-gold flex justify-center">{item.icon && <item.icon size={40} />}</div>
              <h4 className="text-xl font-bold text-white">{item.title}</h4>
              <p className="text-white/40 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
