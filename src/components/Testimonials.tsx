import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Arjun Sharma',
      company: 'TechTrend Innovations',
      rating: 5,
      text: 'Aaditya built an outstanding e-commerce platform for us. His mastery of Java and React ensured a seamless user experience, and he delivered ahead of schedule. Highly recommended!',
    },
    {
      id: 2,
      name: 'Priya Nair',
      company: 'CloudVista Solutions',
      rating: 4,
      text: 'Collaborating with Aaditya on our AWS project was a delight. His DevOps expertise made deployment effortless, and his communication was exceptional.',
    },
    {
      id: 3,
      name: 'Vikram Patel',
      company: 'AI Nexus Labs',
      rating: 5,
      text: 'Aaditya’s work on our AI-driven app was phenomenal. He integrated machine learning models perfectly and offered valuable insights throughout the project.',
    },
    {
      id: 4,
      name: 'Ananya Desai',
      company: 'WebSpark Technologies',
      rating: 4,
      text: 'Aaditya’s full-stack skills transformed our website. The UI is intuitive, and the backend is robust, making our platform highly reliable.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
          What My Clients Say
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-inter">
          I offer part-time freelancing services. Here’s feedback from my satisfied clients.
        </p>
      </motion.div>
      <div className="max-w-6xl mx-auto px-5">
        <Swiper
          style={{
            '--swiper-pagination-color': '#EF4444',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '10px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          } as any}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                className="border border-gray-300 dark:border-gray-600 shadow-lg shadow-red-300 dark:shadow-red-700 rounded-lg flex flex-col p-6 bg-white dark:bg-gray-700 h-[280px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex mb-3">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-inter flex-grow overflow-hidden">
                  {item.text}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h3 className="font-semibold text-red-500 text-base font-poppins">{item.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-inter">{item.company}</p>
                  </div>
                  <Quote className="text-red-400 w-5 h-5" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination my-10 gap-1 relative"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;