import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
  ];

  return (
    <nav className="fixed w-full z-50 top-6 px-4 pointer-events-none flex justify-center">
      <div className={`pointer-events-auto transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'w-[90%] md:w-auto bg-dark/70 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.2)]' 
          : 'w-full max-w-7xl px-4 py-4 bg-transparent border-transparent'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-primary/20 p-2 rounded-lg border border-primary/20 group-hover:border-primary/50 transition-colors">
              <Terminal size={20} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-white hidden sm:block">
              DL<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            
            <a href="#contact" className="ml-2 px-5 py-2 bg-white text-dark font-bold rounded-full hover:bg-gray-200 transition-all text-sm transform hover:scale-105">
              Contactar
            </a>
          </div>

          {/* Socials Desktop */}
          <div className={`hidden md:flex items-center space-x-3 ${scrolled ? 'ml-6 border-l border-white/10 pl-6' : ''}`}>
             <a href="https://github.com/DanielLobos2894" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
               <Github size={20} />
             </a>
             <a href="https://www.linkedin.com/in/lobosarriaza" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
               <Linkedin size={20} />
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden fixed inset-0 bg-dark/95 backdrop-blur-2xl z-40 transition-all duration-300 flex flex-col items-center justify-center space-y-8 pointer-events-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-gray-400 hover:text-white"
          >
            <X size={32} />
          </button>
          
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-white font-bold rounded-full text-lg mt-4"
            onClick={() => setIsOpen(false)}
          >
            Contactar Ahora
          </a>
          
          <div className="flex space-x-8 mt-8">
             <a href="https://github.com/DanielLobos2894" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
               <Github size={28} />
             </a>
             <a href="https://www.linkedin.com/in/lobosarriaza" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
               <Linkedin size={28} />
             </a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;