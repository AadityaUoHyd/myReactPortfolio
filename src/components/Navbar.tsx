import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import Logo from '../assets/Logo.png';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 px-4 lg:px-0"
    >
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img src={Logo} alt="Aaditya Chatterjee" className="w-36" />
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-lg font-medium font-poppins">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-red-500 text-gray-600 dark:text-gray-300 hover:dark:text-red-400"
              whileHover={{ scale: 1.1 }}
            >
              {link.label}
            </motion.a>
          ))}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTheme('light')}
              className={`p-2 rounded-full ${theme === 'light' ? 'bg-red-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              title="Light Mode"
            >
              <Sun size={18} />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-red-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              title="Dark Mode"
            >
              <Moon size={18} />
            </button>
            <button
              onClick={() => setTheme('system')}
              className={`p-2 rounded-full ${theme === 'system' ? 'bg-red-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              title="System Mode"
            >
              <Monitor size={18} />
            </button>
          </div>
        </nav>
        <button
          className="inline-flex md:hidden items-center justify-center rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-600 dark:text-gray-300" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex justify-center space-x-4 py-2">
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-full ${theme === 'light' ? 'bg-red-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                <Sun size={18} />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-full ${theme === 'dark' ? 'bg-red-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                <Moon size={18} />
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`p-2 rounded-full ${theme === 'system' ? 'bg-red-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                <Monitor size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;