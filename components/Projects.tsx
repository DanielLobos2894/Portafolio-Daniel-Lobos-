import React, { useEffect, useState } from 'react';
import { ExternalLink, Star, GitFork, Book, Loader, Github } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch repositories sorted by recently pushed
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
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Últimos Proyectos</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
               Explorando código reciente. Estos son mis últimos repositorios públicos obtenidos directamente desde la API de GitHub en tiempo real.
            </p>
          </div>
          <a 
            href="https://github.com/DanielLobos2894" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all border border-white/10 hover:border-white/30 backdrop-blur-sm group"
          >
            <Github size={20} className="group-hover:scale-110 transition-transform" />
            <span>Ver perfil en GitHub</span>
            <ExternalLink size={14} className="opacity-50" />
          </a>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-80 text-gray-500">
            <Loader size={48} className="animate-spin mb-4 text-primary" />
            <p>Sincronizando con GitHub...</p>
          </div>
        ) : error ? (
           <div className="text-center p-8 border border-red-500/20 bg-red-500/5 rounded-2xl text-red-200">
             {error}
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((repo) => (
              <div key={repo.id} className="group glass-panel rounded-3xl p-8 flex flex-col h-full hover:border-primary/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                
                {/* Decorational Gradient Blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3.5 bg-dark/80 rounded-2xl text-primary border border-white/5 group-hover:border-primary/30 group-hover:text-white group-hover:bg-primary transition-all duration-300">
                    <Book size={22} />
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

                <h3 className="text-xl font-bold text-white mb-3 truncate group-hover:text-primary transition-colors relative z-10">
                  {repo.name}
                </h3>

                <p className="text-gray-400 text-sm mb-8 flex-1 line-clamp-3 leading-relaxed relative z-10">
                  {repo.description || "Sin descripción disponible."}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-5 border-t border-white/5 relative z-10">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors cursor-default">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                  </div>
                  <span className="text-gray-600 font-mono">
                    {new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                  </span>
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