import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-dark-gradient text-text-light transition-colors">
      <Nav />

      <main className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm">
        Copyright © {new Date().getFullYear()} Lim Yi Wei
      </footer>
    </div>
  );
}

export default App;