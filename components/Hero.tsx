import React from 'react';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-40 animate-blob mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 opacity-30 animate-blob animation-delay-2000 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="animate-fade-in flex flex-col items-center">
          
          <div className="mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
             <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)]">
               {HERO_DATA.role}
             </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[1.1] mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Hola, soy <br />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
              {HERO_DATA.name}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {HERO_DATA.tagline}
          </p>
          
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {HERO_DATA.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="#projects" className="group px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1">
              Ver Trabajo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="group px-8 py-4 border border-gray-700 bg-gray-900/50 text-gray-300 font-bold rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all flex items-center gap-2 backdrop-blur-sm">
              Descargar CV
              <Download size={20} className="group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;