import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import ParticleBackground from './components/Particle'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Profile />
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
