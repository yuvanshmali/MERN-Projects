import React from 'react';

import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Qualifications from './components/Qualifications';
import Footer from './components/Footer';

function App() {

  return (
    <div className='w-[90%]  mx-auto'>
      <Navbar />
      
      {/* Other pages */}
      <div id="hero"><Hero/></div>
      <div id="about"><About/></div>
      <div id="qualifications"><Qualifications/></div>
      <div id="projects"><Projects/></div>
      <div id="contact-me"><Contact/></div>

      <Footer/>
    </div>
  )
}

export default App
