import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import { ZoomIn, Link, ExternalLink } from 'lucide-react';

const Projects = () => {
  const isotope = useRef<Isotope | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true, mirror: false });

    if (containerRef.current) {
      isotope.current = new Isotope(containerRef.current, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
          columnWidth: '.portfolio-item',
          gutter: 64, // Match Tailwind gap-16 (64px)
        },
      });
    }

    const filters = document.querySelectorAll('.portfolio-filters .nav-link');
    filters.forEach((filter) => {
      filter.addEventListener('click', function () {
        filters.forEach((f) => f.classList.remove('filter-active'));
        this.classList.add('filter-active');
        const filterValue = this.getAttribute('data-filter');
        if (isotope.current) {
          isotope.current.arrange({ filter: filterValue });
        }
      });
    });

    const lightbox = GLightbox({ selector: '.glightbox' });

    return () => {
      filters.forEach((filter) => {
        filter.removeEventListener('click', () => { });
      });
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, []);

  const projects = [
    {
      title: 'ABC Evantra',
      tech: 'Java | Spring Boot | React-Ts | PostgreSQL',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/abc-evantra/refs/heads/main/abc-evantra-screenshot.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/abc-evantra/refs/heads/main/abc-evantra-screenshot.png',
      github: 'https://github.com/AadityaUoHyd/abc-evantra',
      live: 'https://abc-evantra.vercel.app/',
      filters: ['filter-app'],
      gallery: 'portfolio-gallery-app',
    },
    {
      title: 'The PlateNet',
      tech: 'Java | Spring Boot | ReactJs | MongoDB | AWS-S3',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/the-platenet/refs/heads/main/screenshot.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/the-platenet/refs/heads/main/screenshot.png',
      github: 'https://github.com/AadityaUoHyd/the-platenet',
      live: 'https://the-platenet.vercel.app/',
      filters: ['filter-app', 'filter-cloud'],
      gallery: 'portfolio-gallery-app',
    },
    {
      title: 'Billing ABC',
      tech: 'Java | PostgreSQL | React',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/the-billing-abc/refs/heads/main/Screenshot.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/the-billing-abc/refs/heads/main/Screenshot.png',
      github: 'https://github.com/AadityaUoHyd/billing-abc',
      live: 'https://billing-abc.vercel.app/',
      filters: ['filter-app'],
      gallery: 'portfolio-gallery-app',
    },
    {
      title: 'Muscle-AI',
      tech: 'NextJs | Vapi | Clerk',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/muscle-ai/refs/heads/main/public/screenshot-for-readme.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/muscle-ai/refs/heads/main/public/screenshot-for-readme.png',
      github: 'https://github.com/AadityaUoHyd/muscle-ai',
      live: 'https://the-muscle-ai.vercel.app/',
      filters: ['filter-app', 'filter-ml'],
      gallery: 'portfolio-gallery-ml',
    },
    {
      title: 'e-Renaissance',
      tech: 'MERN Stack | Cloudinary',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/e-renaissance-frontend/refs/heads/main/src/assets/hero1.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/e-renaissance-frontend/refs/heads/main/src/assets/hero1.png',
      github: 'https://github.com/AadityaUoHyd/e-renaissance-frontend',
      live: 'https://e-renaissance.vercel.app/',
      filters: ['filter-app'],
      gallery: 'portfolio-gallery-app',
    },
    {
      title: 'Healthcare-Prescription-Guide',
      tech: 'Python | Machine Learning',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/healthcare-prescription-guide/refs/heads/main/static/images/img.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/healthcare-prescription-guide/refs/heads/main/static/images/img.png',
      github: 'https://github.com/AadityaUoHyd/healthcare-prescription-guide',
      live: 'https://healthcare-prescription-guide.onrender.com/',
      filters: ['filter-ml'],
      gallery: 'portfolio-gallery-ml',
    },
    {
      title: 'Geopolitik Simplified',
      tech: 'Java | PostgreSQL | React',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/geopolitiksimplified/refs/heads/main/src/assets/logo.jpg',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/geopolitiksimplified/refs/heads/main/src/assets/logo.jpg',
      github: 'https://github.com/AadityaUoHyd/geopolitiksimplified',
      live: 'https://geopolitiksimplified.onrender.com/',
      filters: ['filter-app'],
      gallery: 'portfolio-gallery-app',
    },
    {
      title: 'ABC BUS BOOKINGS',
      tech: 'Python | Django | React',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/abc-bus-bookings/refs/heads/main/Screenshot.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/abc-bus-bookings/refs/heads/main/Screenshot.png',
      github: 'https://github.com/AadityaUoHyd/abc-bus-bookings',
      live: 'https://abc-bus-bookings.vercel.app/',
      filters: ['filter-app'],
      gallery: 'portfolio-gallery-app',
    },
    {
      title: 'AadityaCom',
      tech: 'Java | Angular | Docker',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/aadityacom/refs/heads/main/aadityacom-screenshot.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/aadityacom/refs/heads/main/aadityacom-screenshot.png',
      github: 'https://github.com/AadityaUoHyd/AadityaCom',
      live: 'https://github.com/AadityaUoHyd/AadityaCom',
      filters: ['filter-app'],
      gallery: 'portfolio-gallery-app',
    },
    {
      title: 'ABCart',
      tech: 'NextJs | Sanity.io | Clerk | React',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/ABCart/refs/heads/main/abcart2.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/ABCart/refs/heads/main/abcart2.png',
      github: 'https://github.com/AadityaUoHyd/ABCart',
      live: 'https://abcart-sigma.vercel.app/',
      filters: ['filter-app'],
      gallery: 'portfolio-gallery-app',
    },
    {
      title: 'Library Book Network',
      tech: 'Spring Boot | Angular | PostgreSQL | Keycloak',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/library-book-network-keycloak-app/refs/heads/master/adding-book.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/library-book-network-keycloak-app/refs/heads/master/adding-book.png',
      github: 'https://github.com/AadityaUoHyd/library-book-network-keycloak-app',
      live: 'https://github.com/AadityaUoHyd/library-book-network-keycloak-app',
      filters: ['filter-app'],
      gallery: 'portfolio-gallery-app',
    },
    {
      title: 'Personify Resume with AI',
      tech: 'Spring AI',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/personify-resume-with-ai/refs/heads/main/screenshots/2generate-resume.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/personify-resume-with-ai/refs/heads/main/screenshots/2generate-resume.png',
      github: 'https://github.com/AadityaUoHyd/personify-resume-with-ai',
      live: 'https://github.com/AadityaUoHyd/personify-resume-with-ai',
      filters: ['filter-app', 'filter-ml'],
      gallery: 'portfolio-gallery-ml',
    },
    {
      title: 'ABC-Quizzy',
      tech: 'FastAPI | PostgreSQL | React | AI',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/abc-quizzy/refs/heads/main/abc-quizzy-screenshot.png',
      preview: 'https://raw.githubusercontent.com/AadityaUoHyd/abc-quizzy/refs/heads/main/abc-quizzy-screenshot.png',
      github: 'https://github.com/AadityaUoHyd/abc-quizzy',
      live: 'https://abc-quizzy.vercel.app',
      filters: ['filter-app', 'filter-ml'],
      gallery: 'portfolio-gallery-ml',
    },
  ];

  return (
    <section id="projects" className="text-center items-center py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-poppins flex justify-center items-center">
            <img src="/logo.png" className="w-12 h-12 mr-3 rounded-full" alt="Aaditya's Profile Icon" />
            My Projects
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
            Explore my collection of full-stack and backend projects showcasing expertise in Java, Spring Boot, AWS, and DevOps. Each project reflects scalable architecture, cloud integration, and innovative AI solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          className="mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ul className="flex flex-wrap justify-center gap-4 portfolio-filters">
            {['All', 'Web Apps', 'Cloud/DevOps', 'AI/ML'].map((filter, idx) => (
              <li key={idx}>
                <motion.button
                  className={`nav-link px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${idx === 0
                      ? 'filter-active bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 hover:shadow-lg'
                    }`}
                  data-filter={
                    idx === 0 ? '*' :
                      filter === 'Web Apps' ? '.filter-app' :
                        filter === 'Cloud/DevOps' ? '.filter-cloud' :
                          '.filter-ml'
                  }
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {filter}
                </motion.button>
              </li>
            ))}
          </ul>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16 xl:grid-cols-3 isotope-container text-center">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className={`portfolio-item ${project.filters.join(' ')} py-4`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 24px rgba(239, 68, 68, 0.3)' }}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
              style={{ margin: 0 }}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-[340px] border border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <img
                    src={project.image}
                    className="w-full h-40 object-cover"
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white font-poppins text-center mb-2 line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-inter text-center mb-4 line-clamp-2 flex-grow">
                    {project.tech}
                  </p>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <a
                      href={project.preview}
                      title={project.title}
                      data-gallery={project.gallery}
                      className="glightbox flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 cursor-pointer"
                    >
                      <ZoomIn size={14} /> Preview
                    </a>
                    <a
                      href={project.github}
                      title="More Details"
                      className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-blue-500 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 hover:text-white transition-all duration-300 cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link size={14} /> GitHub
                    </a>
                    <a
                      href={project.live}
                      title="Live Demo"
                      className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-green-500 dark:text-green-400 bg-green-100 dark:bg-green-900/50 rounded-full hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 dark:hover:from-green-600 dark:hover:to-green-700 hover:text-white transition-all duration-300 cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;