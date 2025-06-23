import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from './ThemeContext';
import HeroImg from '../assets/hero-img.png';

const Profile = () => {
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
    AOS.init({ duration: 800, easing: 'ease-out', once: true });
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 600 } },
      color: { value: theme === 'dark' ? '#ffffff' : '#4B5563' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 120,
        color: theme === 'dark' ? '#ffffff' : '#EF4444',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        random: false,
        straight: false,
        outModes: { default: 'out' },
        bounce: false,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: { enable: true },
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
        push: { particles_nb: 3 },
      },
    },
    retina_detect: true,
  };

  return (
    <section
      id="profile"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-8 w-full max-w-full overflow-x-hidden"
    >
      <Particles
        id="tsparticles"
        options={particlesConfig}
        className="absolute inset-0 z-0 w-full h-full"
      />
      {/* Left Section: Passport Image + Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center w-full md:w-1/2 px-4 mb-6 md:mb-0"
        data-aos="fade-up"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-poppins text-center">
          Aaditya Bachchu
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 font-poppins text-center">
          Chatterjee
        </h1>
        <h2 className="text-base sm:text-lg text-amber-500 dark:text-amber-400 font-poppins mt-1 text-center">
          Full-Stack Developer & AI Enthusiast
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-inter leading-relaxed max-w-md text-center">
          Passionate about building scalable web applications and integrating AI solutions. Skilled in Java, Spring Boot, React, AWS, and DevOps, I create robust systems that solve real-world problems.
        </p>
        <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-red-600 dark:hover:bg-red-700 transition-colors duration-300"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/AadityaUoHyd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            View GitHub
          </a>
        </div>
      </motion.div>
      {/* Right Section: Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 flex items-center justify-center w-full md:w-1/2 px-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          src={HeroImg}
          alt="Hero Image"
          className="w-full max-w-full sm:max-w-md md:max-w-lg max-h-[60vh] sm:max-h-[80vh] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Profile;