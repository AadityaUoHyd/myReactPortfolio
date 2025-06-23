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
      className="border border-red-300 dark:border-red-700 rounded-lg w-full max-w-[350px] sm:max-w-[400px] bg-white dark:bg-gray-800 shadow-lg shadow-red-300 dark:shadow-red-700 overflow-hidden"
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-6">
        <h1 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white font-poppins">{item.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.desc}</p>
        <div className="flex gap-3">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-sm font-poppins"
          >
            Live Preview
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition flex items-center gap-2 text-sm font-poppins"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;