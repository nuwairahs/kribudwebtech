import React from "react";
import About from './components/About.js'
import Clients from './components/Clients.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import Hero from './components/Hero.js'
import NavBar from './components/NavBar.js'
import Process from './components/Process.js'
import ServiceCard from './components/ServiceCard.js'
import Services from './components/Services.js'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default App
