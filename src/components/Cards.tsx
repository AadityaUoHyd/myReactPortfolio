import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface CardProps {
  item: {
    image: string;
    title: string;
    desc: string;
    live: string;
    github: string;
  };
}

const Cards: React.FC<CardProps> = ({ item }) => {
  return (
    <motion.div
      className="border border-red-300 dark:border-red-700 rounded-lg w-full max-w-[320px] sm:max-w-[400px] bg-white dark:bg-gray-800 shadow-lg shadow-red-300 dark:shadow-red-700 overflow-hidden"
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-4 sm:p-6">
        <h1 className="font-semibold text-lg sm:text-xl mb-2 text-gray-900 dark:text-white font-poppins line-clamp-2">
          {item.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3">
          {item.desc}
        </p>
        <div className="flex gap-2 sm:gap-3 flex-wrap">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:bg-red-600 transition-all duration-300 text-xs sm:text-sm font-poppins"
          >
            Live Preview
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 dark:bg-gray-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-poppins"
          >
            <Github size={16} className="sm:w-5 sm:h-5" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;