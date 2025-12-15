import React from 'react';
import { Briefcase, Calendar, GraduationCap, Award, MapPin, Download, ChevronRight } from 'lucide-react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Column 1: Work Experience */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl text-primary border border-primary/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <Briefcase size={32} />
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight">Experiencia</h2>
            </div>

            <div className="relative border-l-2 border-transparent ml-4 space-y-12">
              {/* Custom Gradient Line */}
              <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-primary via-purple-500 to-transparent rounded-full"></div>

              {EXPERIENCE.map((job) => (
                <div key={job.id} className="relative pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] top-0 h-5 w-5 rounded-full border-4 border-dark bg-primary shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10 transition-transform duration-300 group-hover:scale-125"></div>

                  <div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 group-hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                       <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.role}</h3>
                       <span className="text-xs font-bold font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 whitespace-nowrap shadow-sm">
                         {job.period}
                       </span>
                    </div>
                    
                    <div className="mb-6 pb-4 border-b border-white/5">
                      <div className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                        {job.company}
                      </div>
                      {job.location && (
                        <div className="flex items-center gap-1.5 text-sm text-gray-400 mt-2">
                          <MapPin size={14} className="text-secondary" />
                          {job.location}
                        </div>
                      )}
                    </div>
                    
                    <ul className="space-y-3">
                      {job.description.map((desc, i) => (
                        <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 bg-secondary/70 rounded-full flex-shrink-0 shadow-[0_0_5px_rgba(168,85,247,0.5)]" />
                          <span className="group-hover:text-gray-300 transition-colors">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Certifications */}
          <div className="space-y-20">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl text-secondary border border-secondary/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <GraduationCap size={32} />
                </div>
                <h2 className="text-4xl font-bold text-white tracking-tight">Educación</h2>
              </div>

              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="group relative flex gap-6 p-6 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 border border-white/5 hover:border-secondary/30">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-500 font-bold text-lg shadow-lg">
                        {edu.institution.substring(0, 1)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">{edu.degree}</h4>
                      <p className="text-gray-300 font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 bg-dark/50 w-fit px-3 py-1 rounded-full border border-white/5">
                        <Calendar size={12} />
                        {edu.period}
                      </div>
                      {edu.description && (
                        <p className="text-sm text-gray-400 italic">
                          "{edu.description}"
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                  <Award size={32} />
                </div>
                <h2 className="text-4xl font-bold text-white tracking-tight">Certificaciones</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <a 
                    key={index} 
                    href={cert.pdfUrl || '#'}
                    download={!!cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 p-5 
                      transition-all duration-300 hover:border-green-500/40 hover:bg-gray-800/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]
                      flex items-center justify-between gap-4
                      ${cert.pdfUrl ? 'cursor-pointer' : ''}
                    `}
                  >
                    <div className="flex items-center gap-4 z-10">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
                        <Award size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-white group-hover:text-green-400 transition-colors">{cert.name}</p>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">{cert.institution}</p>
                      </div>
                    </div>
                    
                    {cert.pdfUrl && (
                      <div className="flex items-center gap-2 text-xs font-medium text-gray-500 group-hover:text-white transition-colors z-10 bg-dark/50 px-3 py-1.5 rounded-full border border-gray-700 group-hover:border-green-500/30">
                        <span>PDF</span>
                        <Download size={14} />
                      </div>
                    )}

                    {/* Background glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-0" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;