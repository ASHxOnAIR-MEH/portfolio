import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Startup from './components/Startup';
import CoFounder from './components/CoFounder';
import Products from './components/Products';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimations from './hooks/useScrollAnimations';

function App() {
  useScrollAnimations();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Startup />
      <CoFounder />
      <Products />
      <Timeline />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
