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
import { BrowserRouter } from "react-router-dom";
import Chatbot from "./components/Chatbot.js";

function App() {
  // ✅ Define chatbot open/close state here
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <BrowserRouter>
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
  );
}

export default App;
