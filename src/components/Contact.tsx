import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';
import medium from '../assets/medium.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import githubLogo from '../assets/githubLogo.png';
import youtube from '../assets/youtube.png';

const Contact = () => {
  const socialLinks = [
    { href: 'https://medium.com/@aadityabchatterjee', img: medium, title: 'Medium' },
    { href: 'https://github.com/AadityaUoHyd', img: githubLogo, title: 'Github' },
    { href: 'https://www.youtube.com/@geopolitiksimplified', img: youtube, title: 'Youtube' },
    { href: 'https://www.instagram.com/geopolitiksimplified/', img: instagram, title: 'Instagram' },
    { href: 'https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/', img: linkedin, title: 'LinkedIn' },
    { href: 'https://x.com/AadityaRaj8', img: twitter, title: 'X' },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-800 dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold mb-4 text-red-500 font-poppins">Get in Touch</h2>
            <p className="mb-6 text-gray-300">
              I'm always open to new opportunities and collaborations. 
            </p>
            <p className="mb-6 text-gray-300">Feel free to reach out!</p>
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px] mt-8" />
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-lg border border-red-300 shadow-lg shadow-red-500 dark:shadow-red-700 p-8"
            id="contact-form"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white font-poppins">Contact Me</h2>
            <input type="hidden" name="access_key" value="031cb32e-4e5b-4310-9cfc-f82dda78ed5b" />
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Full Name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'Your Email' },
              { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject of Your Message' },
            ].map((field) => (
              <div key={field.id} className="mb-4">
                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  required
                  placeholder={field.placeholder}
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                />
              </div>
            ))}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type Your Message Here"
                required
                className="mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                rows={4}
              />
            </div>
            <motion.button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-poppins"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;