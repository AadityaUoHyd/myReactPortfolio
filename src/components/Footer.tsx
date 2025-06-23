import React from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  PenTool,
  Globe,
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
    { href: 'https://medium.com/@aadityabchatterjee', icon: PenTool, label: 'Medium' },
  ];

  const blogLinks = [
    { href: 'https://geopolitiksimplified.onrender.com', icon: Globe, label: 'Geopolitics' },
    { href: 'https://abc-tech-blog.vercel.app', icon: Globe, label: 'Tech Blogs' },
    { href: 'https://dearabc.vercel.app', icon: Rss, label: 'General Musings' },
  ];

  return (
    <footer className="bg-black text-gray-200 py-12 relative z-20">
      <div className="container mx-auto px-6 sm:px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white font-poppins">About Me</h2>
          <p className="text-sm sm:text-base max-w-xs mx-auto md:mx-0 font-inter">
            I’m Aaditya Bachchu Chatterjee—a full-stack developer, writer, and curious mind exploring tech, geopolitics, and the world through code and words.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white font-poppins">Connect</h2>
          <ul className="space-y-3 text-sm sm:text-base">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-red-400 hover:bg-gray-800 px-2 py-1 rounded transition-colors duration-300 cursor-pointer z-10"
                >
                  <link.icon size={18} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Personal Blogs */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white font-poppins">My Blogs</h2>
          <ul className="space-y-3 text-sm sm:text-base">
            {blogLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-red-400 hover:bg-gray-800 px-2 py-1 rounded transition-colors duration-300 cursor-pointer z-10"
                >
                  <link.icon size={18} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white font-poppins">Newsletter</h2>
          <form className="flex flex-col space-y-3 w-full max-w-xs mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 bg-gray-800 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-2 rounded transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm font-inter">
        © {year} Aaditya Bachchu Chatterjee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;