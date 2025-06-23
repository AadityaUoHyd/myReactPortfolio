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
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 p-3 sm:p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
      animate={{ y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} className="sm:w-6 sm:h-6" />
    </motion.button>
  );
};

export default BackToTop;