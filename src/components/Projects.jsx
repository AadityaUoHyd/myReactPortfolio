import React from 'react'
import AadityaGram from '../assets/AadityaGram.png'
import AadiChatterBox from '../assets/AadiChatterBox.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'AadityaGram',
          desc: 'A social media website. Tried to replicate few major functions of instagram. A MERN stack practice code.',
          image: AadityaGram,
          live: "https://aadityagram.onrender.com/login",
          github: "https://github.com/AadityaUoHyd/aadityagram"
        },
        {
          title: 'AadiChatterBox',
          desc: 'A Web based chat app with real-time messaging, and File sharing (images, videos, documents). Built with Java-SpringBoot & Angular.',
          image: AadiChatterBox,
          live: "https://aadichatterbox.netlify.app/",
          github: "https://github.com/AadityaUoHyd/aadichatterbox-frontend"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((item)=> {
                return <Cards key={item.title} item={item}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
