import React from 'react';
import { ArrowRight, Download, ChevronDown, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-30 animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-30 animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-20 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="animate-fade-in flex flex-col items-center">
          
          <div className="mb-8 opacity-0 animate-slide-up flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md" style={{ animationDelay: '0.1s' }}>
             <Sparkles size={14} className="text-yellow-400" />
             <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">
               Disponible para nuevos proyectos
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-[1.1] mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Hola, soy <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow">
                {HERO_DATA.name}
              </span>
              {/* Underline decoration */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {HERO_DATA.tagline}
          </p>
          
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {HERO_DATA.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="#projects" className="group px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1">
              Ver Portafolio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="group px-8 py-4 border border-white/10 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 backdrop-blur-sm">
              Descargar CV
              <Download size={20} className="group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-50">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;