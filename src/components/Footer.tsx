import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Map,
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  PenTool,
  Globe,
  LaptopMinimal,
  Rss,
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/AadityaUoHyd', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com/AadityaRaj8', icon: Twitter, label: 'Twitter' },
    { href: 'https://www.instagram.com/geopolitiksimplified/', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.youtube.com/@geopolitiksimplified', icon: Youtube, label: 'YouTube' },
  ];

  const blogLinks = [
    { href: 'https://medium.com/@aadityabchatterjee', icon: PenTool, label: 'Medium' },
    { href: 'https://geopolitiksimplified.onrender.com', icon: Globe, label: 'Geopolitics' },
    { href: 'https://abc-tech-blog.vercel.app', icon: LaptopMinimal, label: 'Tech Blogs' },
    { href: 'https://dearabc.vercel.app', icon: Rss, label: 'General Musings' },
  ];

  const funFacts = [
    { icon: Code, text: 'Built this portfolio with React & Tailwind in 2 days!' },
    { icon: Map, text: 'Geopolitics shapes my tech perspective.' },
    { icon: BookOpen, text: 'Wrote tons of blog posts on tech, geopolitics, and various other topics.' },
  ];

  return (
    <footer className="w-full max-w-full overflow-x-hidden bg-black text-gray-200 py-8 sm:p-16 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {/* About Me */}
        <div className="flex-col items-center md:items-center text-center md:text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-red-500 font-poppins">About Me</h2>
          <p className="text-xs sm:text-sm max-w-xs mx-auto md:mx-0 font-inter">
            I’m Aaditya Bachchu Chatterjee—a full-stack developer, writer, and curious mind exploring tech, geopolitics, and the world through code and words.
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 mb-4">
                Website Developed by -{" "}
                <a
                  href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500 hover:text-yellow-600 transition-colors duration-200"
                >
                  Aaditya B Chatterjee
                </a>
              </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-center text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-red-500 font-poppins">Connect</h2>
          <ul className="space-y-2 text-xs sm:text-sm">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 hover:text-red-500 hover:bg-gray-800 px-2 py-1 rounded-lg transition-all duration-300 cursor-pointer z-10"
                >
                  <link.icon size={16} className="sm:w-5 sm:h-5" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Personal Blogs */}
        <div className="flex flex-col items-center md:items-center text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-red-500 font-poppins">My Blogs</h2>
          <ul className="space-y-2 text-xs sm:text-sm">
            {blogLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 hover:text-red-500 hover:bg-gray-800 px-2 py-1 rounded-lg transition-all duration-300 cursor-pointer z-10"
                >
                  <link.icon size={16} className="sm:w-5 sm:h-5" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Fun Facts */}
        <div className="flex flex-col items-center md:items-center text-center md:text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-red-500 font-poppins">Fun Facts</h2>
          <div className="space-y-2 text-xs sm:text-sm">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="flex items-center sm:justify-center md:gap-2 justify-start gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <fact.icon size={16} className="sm:w-5 sm:h-5 text-red-500" />
                <span className="text-gray-300 dark:text-gray-300 font-inter">{fact.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 border-t border-gray-700 pt-4 sm:pt-6 text-center text-gray-400 text-xs sm:text-sm font-inter">
        © {year} Aaditya Bachchu Chatterjee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;