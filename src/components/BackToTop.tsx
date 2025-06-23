import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      className={`fixed bottom-8 right-8 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
      animate={{ y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

export default BackToTop;