import React from 'react';
import { motion } from 'framer-motion';
import JavaStack from '../assets/javastack.png';
import MernStack from '../assets/mernstack.png';
import theDevops from '../assets/theDevops.jpg';
import convoPic from '../assets/convoPic.jpg';
import convoPic2 from '../assets/convoPic2.jpg';
import convoPic3 from '../assets/convoPic3.png';
import aadi1 from '../assets/aadi1.png';
import aadi2 from '../assets/aadi2.png';
import aadi3 from '../assets/aadi3.jpg';
import aadi4 from '../assets/aadi4.jpg';
import aadi5 from '../assets/aadi5.jpg';
import aadi6 from '../assets/aadi6.jpg';
import aadi7 from '../assets/aadi7.jpg';
import aadi8 from '../assets/aadi8.jpg';
import aadi9 from '../assets/aadi9.jpg';
import { skills } from './skills'; // Import skills from a separate file

const About = () => {
  const timelineEvents = [
    { year: '2011-2014', event: 'Completed MCA at University of Hyderabad, India' },
    { year: '2014-2016', event: 'Started career as a Java Developer' },
    { year: '2016-2019', event: 'Mastered Spring Boot and Microservices' },
    { year: '2019-2022', event: 'Expanded skills in MERN stack and DevOps' },
    { year: '2022-Present', event: 'Freelancing and building scalable web applications' },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase font-poppins">
            About Me
          </h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Hello, I'm Aaditya B Chatterjee
          </h3>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300 font-inter mx-auto">
            <strong>"Aaditya"</strong> is my preferred nickname. I'm a Full-Stack Java Developer with expertise in web and API development, complemented by proficiency in DevOps and AWS Cloud.
          </p>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-blue-600 dark:text-blue-400 font-inter mx-auto">
            Alma Mater: <span className="text-gray-900 dark:text-white">MCA (2011-2014), University of Hyderabad, India</span>
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {[convoPic, convoPic2, convoPic3].map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Convocation ${idx + 1}`}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl object-cover shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>

        {/* Journey and Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Journey Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-poppins">My Journey</h3>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300 font-inter">
              My journey in web development began with a passion for creating intuitive and scalable applications. Proficient in Java, Spring Boot, Microservices, Angular, and React.js, I have developed projects like AadiChatterBox and e-commerce platforms. I’ve also worked on MERN stack projects, such as food ordering websites and AadityaGram, and mastered the Python-Django stack. My projects showcase my ability to integrate robust backend solutions with user-friendly frontend designs.
            </p>
            <p className="mt-4 text-base text-blue-600 dark:text-blue-400 font-inter">
              <strong>Area of Expertise: Java Full Stack</strong>
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <img src={JavaStack} alt="Java Stack" className="w-36 h-28 sm:w-40 sm:h-32 rounded-xl object-fit shadow-md" loading="lazy" />
              <img src={MernStack} alt="MERN Stack" className="w-50 h-30 sm:w-40 sm:h-32 rounded-xl object-fit shadow-md" loading="lazy" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 font-poppins">Timeline</h3>
            <div className="mt-4">
              {timelineEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="w-16 sm:w-24 text-right pr-0 sm:pr-4 mb-2 sm:mb-0">
                    <span className="text-base font-semibold text-red-500">{event.year}</span>
                  </div>
                  <div className="flex-1 border-l-2 border-red-500 pl-4">
                    <p className="text-base text-gray-600 dark:text-gray-300 font-inter">{event.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="border border-blue-500 rounded-xl p-6 flex flex-col gap-6 items-center shadow-lg shadow-blue-200 dark:shadow-blue-800 bg-white dark:bg-gray-800"
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 font-poppins">My Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="border border-blue-300 flex items-center gap-2 px-2 py-1 rounded-lg shadow-md shadow-blue-200 dark:shadow-blue-600 bg-gray-50 dark:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={skill.icon} alt={skill.name} className="h-5 w-5 rounded-full object-cover" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-4 font-poppins">Skill Proficiency</h3>
            <div className="w-full space-y-3">
              {[
                { name: 'Java', level: 90 },
                { name: 'Spring Boot', level: 85 },
                { name: 'React.js', level: 80 },
                { name: 'DevOps', level: 75 },
                { name: 'AWS', level: 70 },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.2, ease: 'easeInOut' }}
                  className="relative group"
                >
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{skill.name}</p>
                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full relative">
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DevOps Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="mb-12"
        >
          <img
            src={theDevops}
            alt="DevOps"
            className="w-full max-w-lg mx-auto rounded-xl object-cover shadow-lg "
            loading="lazy"
          />
        </motion.div>

        {/* More About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-poppins text-center">More About Me</h3>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300 font-inter text-center max-w-2xl mx-auto">
            Beyond coding, I am passionate about exploring new technologies and staying updated with the latest trends in web development and DevOps. An avid reader of non-fiction, particularly biographies and autobiographies, I also enjoy geopolitics, cricket, and movies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[aadi1, aadi2, aadi3, aadi4, aadi5, aadi6, aadi7, aadi8, aadi9].map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Personal ${idx + 1}`}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;