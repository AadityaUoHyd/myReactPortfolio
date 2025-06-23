import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Articles = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false });
    return () => {};
  }, []);

  const articles = [
    {
      title: 'Design Patterns for Microservices',
      link: 'https://medium.com/@aadityabchatterjee/design-patterns-for-microservices-e40b0d51e213',
      description: 'Explores key design patterns for building scalable and maintainable microservices architectures.',
      icon: 'bi-diagram-3',
      iconColor: 'text-primary',
    },
    {
      title: 'Compiling Dreams From Debugging Life’s Errors',
      link: 'https://medium.com/@aadityabchatterjee/compiling-dreams-from-debugging-lifes-errors-the-power-of-persistence-for-one-line-at-a-time-the-12351fe1dd76',
      description: 'A reflective piece on the journey of becoming a Java coding expert through persistence and problem-solving.',
      icon: 'bi-code-slash',
      iconColor: 'text-warning',
    },
    {
      title: 'Quantum Computing Are Shaping Our Future?',
      link: 'https://dearabc.vercel.app/blog/quantum-computing-majorana1-story/',
      description: 'From Mythical Particles to Million-Qubit Machines - A Storytelling Journey Through Quantum Computing’s Biggest Breakthrough - Majorana1 chip.',
      icon: 'bi-robot',
      iconColor: 'text-teal',
    },
    {
      title: 'How Chasm of Political Opinion Leads to Dichotomy in Friendships',
      link: 'https://aadimyarticles.blogspot.com/2019/04/how-chasm-of-political-opinion-leads-us.html',
      description: 'Analyzes how differing political views can strain personal relationships and foster division.',
      icon: 'bi-people',
      iconColor: 'text-danger',
    },
    {
      title: 'The Hue and Cry of Indian Politics',
      link: 'https://aadimyarticles.blogspot.com/2019/04/the-hue-and-cry-of-indian-politics.html',
      description: 'Discusses how political noise in India overshadows scientific progress and rational discourse.',
      icon: 'bi-globe',
      iconColor: 'text-indigo',
    },
    {
      title: 'The Social Media Conundrum in Consumerism Matrix',
      link: 'https://aadimyarticles.blogspot.com/2023/08/the-social-media-conundrum-in.html',
      description: 'Investigates the impact of social media on consumer behavior and societal values.',
      icon: 'bi-phone',
      iconColor: 'text-pink',
    },
    {
      title: 'The End of Dinosaurs, and Lessons for Humans',
      link: 'https://www.youtube.com/watch?v=2O0jtVyREKI',
      description: 'A YouTube video exploring parallels between the extinction of dinosaurs and potential lessons for humanity.',
      icon: 'bi-youtube',
      iconColor: 'text-danger',
    },
    {
      title: 'The Trump Effect: Impact on India and Global Power Dynamics',
      link: 'https://medium.com/@aadityabchatterjee/the-trump-effect-how-his-second-term-may-impact-india-world-power-dynamics-2ce8b8cc4af8',
      description: 'Analyzes the potential geopolitical implications of a second Trump presidency on India and the world.',
      icon: 'bi-globe-americas',
      iconColor: 'text-warning',
    },
    {
      title: 'From Pixels to Perfection: Netflix’s Engine & Algorithm',
      link: 'https://medium.com/@aadityabchatterjee/from-pixels-to-perfection-a-deep-dive-into-netflixs-engine-algorithm-how-your-next-binge-is-a6774fae06c7',
      description: 'A deep dive into the technology and algorithms behind Netflix’s recommendation engine.',
      icon: 'bi-tv',
      iconColor: 'text-teal',
    },
    {
      title: 'The Evolution of Digital Glue - Why MCP Servers Are the Future',
      link: 'https://abc-tech-blog.vercel.app/post/the-evolution-of-digital-glue---why-mcp-servers-are-the-future',
      description: 'We will analyze how MCP servers coupled with AI agents can change programming paradigm.',
      icon: 'bi-asterisk',
      iconColor: 'text-info',
    },
    {
      title: 'From Grief to Grit - How India Responded to the Pahalgam Massacre',
      link: 'https://geopolitiksimplified.onrender.com/posts/64cd2745-c477-4e93-959c-3a9ab5213edc',
      description: 'Analyzes the Operation SINDOOR and will it end the terrorism? Personally I feel, Indus water treaty holds the key.',
      icon: 'bi-airplane-engines',
      iconColor: 'text-danger',
    },
    {
      title: 'Motivational: Eight rules, that will ensure your successful career and life',
      link: 'https://www.youtube.com/watch?v=HLL3VHro_LI',
      description: 'Analyzes how people can become success in their life and careers. Find my Youtube Video.',
      icon: 'bi-bullseye',
      iconColor: 'text-success',
    },
  ];

  return (
    <section id="articles" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white font-poppins flex justify-center items-center">
            <img src="/logo.png" className="w-8 h-8 mr-2" alt="Aaditya's Profile Icon" />
            Articles
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A collection of my written works, exploring topics in software development, artificial intelligence, and socio-political dynamics.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <motion.div
              key={article.title}
              className="h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
            >
              <div className="card h-full shadow-md border-0 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <div className="card-body p-6">
                  <div className={`icon mb-4 text-center ${article.iconColor}`}>
                    <i className={`bi ${article.icon}`} style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h3 className="card-title text-xl font-bold text-center text-gray-900 dark:text-white font-poppins">
                    <a
                      href={article.link}
                      className="text-decoration-none text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="card-text text-gray-600 dark:text-gray-400 mt-2 text-sm">{article.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;