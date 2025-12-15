import React, { useEffect, useState } from 'react';
import { ExternalLink, Star, Book, Loader, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DanielLobos2894/repos?sort=pushed&direction=desc&per_page=6');
        
        if (!response.ok) {
          throw new Error('No se pudo conectar con GitHub');
        }
        
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching repos:", err);
        setError("Hubo un problema cargando los proyectos desde GitHub.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/5 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Proyectos Destacados
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
               Una selección de mis últimos experimentos y soluciones de código, sincronizados en tiempo real desde GitHub.
            </p>
          </div>
          <a 
            href="https://github.com/DanielLobos2894" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 hover:border-white/30 backdrop-blur-sm group"
          >
            <Github size={20} />
            <span>Ver todo en GitHub</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-80 text-gray-500">
            <Loader size={48} className="animate-spin mb-4 text-primary" />
            <p>Sincronizando repositorios...</p>
          </div>
        ) : error ? (
           <div className="text-center p-8 border border-red-500/20 bg-red-500/5 rounded-2xl text-red-200">
             {error}
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((repo) => (
              <div key={repo.id} className="group glass-panel rounded-2xl p-1 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                {/* Hover Glow Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="bg-dark/95 h-full rounded-xl p-7 flex flex-col relative z-10 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors">
                      <Book size={20} className="text-white" />
                    </div>
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-500 hover:text-white transition-colors bg-white/5 p-2 rounded-lg hover:bg-white/10"
                      title="Ver Código"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-3 truncate group-hover:text-primary transition-colors">
                    {repo.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-8 flex-1 line-clamp-3 leading-relaxed">
                    {repo.description || "Sin descripción disponible."}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-5 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-default">
                      <Star size={14} className="fill-current" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;