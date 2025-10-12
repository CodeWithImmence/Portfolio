import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Resumes from "./components/Resumes.js";
import Projects from "./components/Projects.js";
import Services from "./components/Services.js";
import Testimonials from "./components/Testimonials.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import ScrollToTop from "./components/ScrollToTop.js";
import Preloader from "./components/Preloader.js";
import Chatbot from "./components/Chatbot.js";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO"; // ✅ Reusable SEO component

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* 🔹 SEO applied globally */}
        <SEO pageTitle="Technical Consultant II" />
        <Header />
        <main className="main">
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Resumes />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />

        {/* ✅ Hide ScrollToTop when chat is open */}
        <ScrollToTop visible={!chatOpen} />

        {/* ✅ Chatbot will tell App.js whether it's open or closed */}
        <Chatbot onToggle={(open) => setChatOpen(open)} />

        <Preloader />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
