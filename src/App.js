import "./assests/css/main.css";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Resumes from "./components/Resumes.js";
import Portfolio from "./components/Portfolio.js";
import Services from "./components/Services.js";
import Testimonials from "./components/Testonomial.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import ScrollToTop from "./components/ScrollToTop.js";
import Preloader from "./components/Preloader.js";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resumes />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <Preloader />
    </>
  );
}

export default App;
