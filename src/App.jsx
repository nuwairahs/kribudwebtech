import React from "react";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import About from "./components/About";
import Clients from "./components/Clients";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Process />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
