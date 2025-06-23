import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-8 sm:py-16 bg-gray-800 dark:bg-gray-900 relative w-full max-w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 mb-6 md:mb-0"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-500 font-poppins">
              Get in Touch
            </h2>
            <p className="mb-4 text-xs sm:text-base text-gray-300 font-inter">
              I'm always open to new opportunities and collaborations.
            </p>
            <p className="mb-6 text-xs sm:text-base text-gray-300 font-inter">
              Feel free to reach out!
            </p>
            <Lottie
              animationData={contact}
              className="w-full max-w-64 sm:max-w-[350px] lg:max-w-[500px] mx-auto mt-6 sm:mt-8"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 overflow-hidden"
          >
            <motion.form
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-full bg-white dark:bg-gray-800 rounded-lg border border-red-300 shadow-lg shadow-red-500 dark:shadow-red-700 p-6 sm:p-8"
              id="contact-form"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white font-poppins">
                Contact Me
              </h2>
              <input
                type="hidden"
                name="access_key"
                value="031cb32e-4e5b-4310-9cfc-f82dda78ed5b"
              />
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Full Name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'Your Email' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject of Your Message' },
              ].map((field) => (
                <div key={field.id} className="mb-4">
                  <label
                    htmlFor={field.id}
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    placeholder={field.placeholder}
                    className="mt-1 p-2 sm:p-3 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 text-xs sm:text-base"
                  />
                </div>
              ))}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type Your Message Here"
                  required
                  className="mt-1 p-2 sm:p-3 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 text-xs sm:text-base"
                  rows={4}
                />
              </div>
              <motion.button
                type="submit"
                className="bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-600 dark:hover:bg-red-700 transition-all duration-300 font-poppins text-xs sm:text-base"
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;