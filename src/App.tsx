import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import Articles from './components/Articles';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (replace with actual data fetching if needed)
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Profile />
          <About />
          <Projects />
          <Testimonials />
          <Articles />
          <Contact />
          <Footer />
          <BackToTop />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;