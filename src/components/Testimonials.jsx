import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Jay Chaudhry",
            rating: 5,
            text: "Outstanding technical expertise and efficiency. I had the pleasure of working with Mr. Chatterjee on a complex web application, and the results were beyond my expectations. The project was delivered on time, with clean and maintainable code. Communication was clear and efficient, and they were always proactive in suggesting improvements. Undoubtly, I highly recommended him for anyone looking for a professional and reliable Java developer!",
            company: "CEO, ABC Technologies"
        },
        {
            id: 2,
            name: "Arvind Krishna",
            rating: 4,
            text: "Excellent problem-solving and attention to detail. Working with AB Chatterjee was an absolute pleasure. They quickly understood our requirements and provided an elegant, scalable solution using Java. Their attention to detail and ability to troubleshoot issues under tight deadlines saved us time and resources. What impressed me most was their dedication to delivering quality & optimized work, also performance and user experience was awesome.",
            company: "CEO, Krishna Infotech"
        },
        {
            id: 3,
            name: "Deep Goyal",
            rating: 5,
            text: "Highly skilled and easy to work with. We hired Bachchu Chatterjee for a Java-based web development project, and they exceeded all expectations. Not only were they technically proficient, but they also made the whole process smooth and hassle-free. They took the time to explain technical concepts to our non-technical team and were always open to feedback. The end result was a high-quality product that met all of our requirements.",
            company: "CEO, Grapes Solutions"
        },
        {
            id: 4,
            name: "Revathi Advaithi",
            rating: 5,
            text: "Great collaboration and timely delivery. I hired Aaditya to build a custom web application for my business, and I couldn’t be happier with the results. They were incredibly responsive to our needs and provided regular updates throughout the process. The project was delivered on time, and the Java code was well-structured, efficient, and easy to understand. I would definitely work with them again on future web development projects!",
            company: "CEO, Revathi Finances"
        },
        {
            id: 5,
            name: "Leena Nair",
            rating: 4,
            text: "Reliable, professional, and detail-oriented. I can’t recommend Aadi highly enough. They worked on the back-end of our Java web application, and their contribution was instrumental in delivering a product that was both functional and stable. They consistently followed best practices, optimized performance, and kept us informed every step of the way. What impressed me the most was their commitment, and the solution was tailored to our goals.",
            company: "CEO, Star Enterprises"
        }
    ]

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative' >
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>I do part-time freelancing job. Here is what my customers has to say : </h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
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
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                {item.rating === 4 ? (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star />
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                    </div>
                                )}
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1'>{item.company}</p>
                                    </div>
                                    <Quote className='text-red-400'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
