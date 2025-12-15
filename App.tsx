import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsChart from './components/SkillsChart';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-slate-100 selection:bg-primary/30 selection:text-white font-sans relative">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
      
      {/* Radial Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-tr from-dark via-transparent to-dark/80 pointer-events-none z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SkillsChart />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        <footer className="bg-black/40 py-8 border-t border-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Daniel Lobos. Creado con React y Tailwind.
            </p>
          </div>
        </footer>
      </div>

      <ChatBot />
    </div>
  );
};

export default App;