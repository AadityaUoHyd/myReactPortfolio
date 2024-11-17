import React, { useState } from 'react';
import medium from '../assets/medium.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import githubLogo from '../assets/githubLogo.png';
import youtube from '../assets/youtube.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {

  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
            <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
            <div className='flex space-x-4'>
              <div className='overflow-hidden inline-block rounded-lg' title="Medium">
                <a href="https://medium.com/@aadityabchatterjee" className='text-foreground/60 hover:text-foreground/80'>
                  <img src={medium} alt="Medium" className='h-6 w-6 rounded-md transform duration-500 transition-transform hover:scale-150' />
                </a>
              </div>
              <div className='overflow-hidden inline-block rounded-lg' title="Github">
                <a href="https://github.com/AadityaUoHyd" className='text-foreground/60 hover:text-foreground/80'>
                  <img src={githubLogo} alt="Github" className='h-6 w-6 rounded-md transform duration-500 transition-transform hover:scale-150' />
                </a>
              </div>
              <div className='overflow-hidden inline-block rounded-lg' title="Youtube">
                <a href="https://www.youtube.com/@geopolitiksimplified" className='text-foreground/60 hover:text-foreground/80'>
                  <img src={youtube} alt="Youtube" className='h-7 w-7 rounded-md transform duration-500 transition-transform hover:scale-150' />
                </a>
              </div>
              <div className='overflow-hidden inline-block rounded-lg' title="Instagram">
                <a href="https://www.instagram.com/geopolitiksimplified/" className='text-foreground/60 hover:text-foreground/80'>
                  <img src={instagram} alt="Instagram" className='h-6 w-6 rounded-md transform duration-500 transition-transform hover:scale-150' />
                </a>
              </div>
              <div className='overflow-hidden inline-block rounded-lg' title="LinkedIn">
                <a href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/" className='text-foreground/60 hover:text-foreground/80'>
                  <img src={linkedin} alt="LinkedIn" className='h-6 w-6 rounded-md transform duration-500 transition-transform hover:scale-150' />
                </a>
              </div>
              <div className='overflow-hidden inline-block rounded-lg' title="X">
                <a href="https://x.com/AadityaRaj8" className='text-foreground/60 hover:text-foreground/80'>
                  <img src={twitter} alt="X" className='h-6 w-6 rounded-md transform duration-500 transition-transform hover:scale-150' />
                </a>
              </div>
            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
          </div>


          <form action="https://api.web3forms.com/submit" method="POST" className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10' id="contact-form">
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
            <input type="hidden" name="access_key" value="031cb32e-4e5b-4310-9cfc-f82dda78ed5b"></input>
            <div className='mb-4'>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
              <input type="text" id='name' name='name' required placeholder='Your Full Name..' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
              <input type="email" id='email' name='email' required placeholder='Your Email-Id..' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <div className='mb-4'>
              <label htmlFor="subject" className='block text-sm font-medium text-gray-700'>Subject</label>
              <input type="text" id='subject' name='subject' required placeholder='Subject of your message..' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <div className='mb-4'>
              <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea
                id='message'
                name='message'
                placeholder='Type Your Message Here..'
                required
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </div>
            <button type="submit" className='bg-red-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;