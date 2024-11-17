import React from 'react';
import AadityaGram from '../assets/AadityaGram.png';
import AadiChatterBox from '../assets/AadiChatterBox.png';
import RoomRosterApp from '../assets/RoomRosterApp.png';
import lazeezDiet from '../assets/lazeezDiet.png';
import opedflow from '../assets/opedflow.png';
import aadityacom from '../assets/aadityacom.png';
import dearabc from '../assets/dearabc.png';
import lbn from '../assets/lbn.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Projects = () => {

  const projectJson = [
    {
      title: 'AadityaGram',
      desc: 'A social media website. Tried to replicate few major functions of Instagram. A MERN stack practice code.',
      image: AadityaGram,
      live: "https://aadityagram.onrender.com/login",
      github: "https://github.com/AadityaUoHyd/aadityagram"
    },
    {
      title: 'AadiChatterBox',
      desc: 'A web-based chat app with real-time messaging, and file sharing. Built with Java-SpringBoot and Angular.',
      image: AadiChatterBox,
      live: "https://aadichatterbox.netlify.app/",
      github: "https://github.com/AadityaUoHyd/aadichatterbox-frontend"
    },
    {
      title: 'RoomRosterApp',
      desc: 'App to book conference rooms online for any events across India. Built using AppWrite and Next-JS.',
      image: RoomRosterApp,
      live: "https://room-roster-app.vercel.app/",
      github: "https://github.com/AadityaUoHyd/RoomRosterApp"
    },
    {
      title: 'Library Book Management',
      desc: 'Application to share books among library members. Built using Java-Springboot and Angular.',
      image: lbn,
      live: "#",
      github: "https://github.com/AadityaUoHyd/library-book-network-keycloak-app"
    },
    {
      title: 'AadityaCom',
      desc: 'An ecommerce platform to sell various kind of items online. Built using Java-Springboot and Angular.',
      image: aadityacom,
      live: "#",
      github: "https://github.com/AadityaUoHyd/aadityacom"
    },
    {
      title: 'LazeezDiet',
      desc: 'Basically a food delivery app, with all kind of hotels & restaurents selling food. Built using MERN stack.',
      image: lazeezDiet,
      live: "#",
      github: "https://github.com/AadityaUoHyd/LazeezDiet"
    },
    {
      title: 'OpEdFLOW',
      desc: 'Inspired from medium social-blogging platform, where anybody can post articles. Built using React Js and Firebase.',
      image: opedflow,
      live: "#",
      github: "https://github.com/AadityaUoHyd/opedflow"
    },
    {
      title: 'DearABC',
      desc: 'A Blogging website for various category of topics, built for personal use. Built using Python and Django.',
      image: dearabc,
      live: "#",
      github: "https://github.com/AadityaUoHyd/DearABC"
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      
      <h2 className="mx-auto text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">My Projects</h2>
      
      <div className="flex justify-center w-full">
        <div className="max-w-6xl py-6 px-6 w-full">
          <Swiper
            style={{
              "--swiper-pagination-color": "#EF4444",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            className="mySwiper"
          >
            {projectJson.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4 bg-black min-h-full w-full">
                  <img src={item.image} alt={item.title} className="rounded-lg mb-4" />
                  <h3 className="font-semibold text-red-500 text-lg">{item.title}</h3>
                  <p className="text-white py-3">{item.desc}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <a 
                      href={item.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:underline bg-blue-900 px-2 py-1 rounded-lg mb-2">
                      Live Demo
                    </a>
                    <a 
                      href={item.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:underline bg-blue-900 px-2 py-1 rounded-lg mb-2">
                      GitHub Link
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination my-10 gap-1 relative"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
