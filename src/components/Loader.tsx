import React from 'react';
import { motion } from 'framer-motion';
const abc = '/logo.png';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <motion.img
        src={abc}
        alt="Loading"
        className="w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
    </div>
  );
};

export default Loader;