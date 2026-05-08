import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 shadow-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-luxury-gold hover:bg-gold-dark text-luxury-black",
    outline: "border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black",
    ghost: "text-white hover:text-gold transition-colors",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
