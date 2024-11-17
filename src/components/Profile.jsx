import React from 'react'
import abc from '../assets/ABC.png'
import medium from '../assets/medium.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import githubLogo from '../assets/githubLogo.png'
import youtube from '../assets/youtube.png'

const Profile = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Bachchu <span className='text-red-500'>Chatterjee.</span></h1>
               <p className='md:text-2xl text-xl mb-4'>Full Stack Java Developer & DevOps Engineer.</p>
               <p className='mb-4'>I'm a passionate software developer with expertise in Java, Springboot, and Microservices. I have ample experience in Angular, React, Next JS, MERN stack, Python-Django, AWS Cloud, DevOps, and how modern web technologies work. I like creating beautiful functional websites and APIs, that solve real world problems.</p>
               <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="https://drive.google.com/file/d/1zmPK84xWim4vhW9ZTXdBHQRLopMeoG5t/view?usp=sharing" download target='_blank' className="hover:text-red-500"
               >Download CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={abc} alt="" className='lg:h-[90vh] h-96' />
            </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-4 rounded-full'> 

    <a href="https://medium.com/@aadityabchatterjee" target="_blank" rel="noopener noreferrer" title="Medium">
        <div className='overflow-hidden inline-block rounded-lg'>
          <img src={medium} alt="Medium" className='w-9 rounded-full transform duration-500 transition-transform hover:scale-150' />
        </div>
    </a>

    <a href="https://github.com/AadityaUoHyd" target="_blank" rel="noopener noreferrer" title="Github">
      <div className='overflow-hidden inline-block rounded-lg'>
        <img src={githubLogo} alt="github" className='w-10 transform duration-500 transition-transform hover:scale-150' />
      </div>
    </a>
    <a href="https://www.youtube.com/@geopolitiksimplified" target="_blank" rel="noopener noreferrer" title="Youtube">
      <div className='overflow-hidden inline-block rounded-lg'>
        <img src={youtube} alt="youtube" className='w-10 transform duration-500 transition-transform hover:scale-150' />
      </div>
    </a>
    <a href="https://www.instagram.com/geopolitiksimplified/" target="_blank" rel="noopener noreferrer" title="Instagram">
      <div className='overflow-hidden inline-block rounded-lg'>
        <img src={instagram} alt="Instagram" className='w-9 transform duration-500 transition-transform hover:scale-150' />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
      <div className='overflow-hidden inline-block rounded-lg'>
        <img src={linkedin} alt="LinkedIn" className='w-10 transform duration-500 transition-transform hover:scale-150' />
      </div>
    </a>
    <a href="https://x.com/AadityaRaj8" target="_blank" rel="noopener noreferrer" title="X">
      <div className='overflow-hidden inline-block rounded-lg'>
        <img src={twitter} alt="Twitter" className='w-11 transform duration-500 transition-transform hover:scale-150' />
      </div>
    </a>
</div>

    </section>
  )
}

export default Profile
