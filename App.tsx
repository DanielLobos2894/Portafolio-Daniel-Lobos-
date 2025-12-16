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
      {/* Background Gradient Spotlights */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SkillsChart />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        <footer className="bg-black/40 py-12 border-t border-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold font-display text-white mb-2">DL.</h2>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Daniel Lobos. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>

      
    </div>
  );
};

export default App;