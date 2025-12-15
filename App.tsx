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
    <div className="bg-dark min-h-screen text-slate-100 selection:bg-primary/30 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <SkillsChart />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Daniel Lobos. Creado con React y Tailwind.
          </p>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;