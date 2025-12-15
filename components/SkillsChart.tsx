import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { SKILLS_DATA } from '../constants';

const SkillsChart: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary block rounded-full"></span>
              Arsenal Técnico
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Me especializo en un stack moderno que enfatiza el rendimiento, la escalabilidad y la experiencia del desarrollador.
              Aunque mi mayor fortaleza reside en la arquitectura frontend, me muevo con comodidad por todo el stack tecnológico.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {SKILLS_DATA.map((skill) => (
                <div key={skill.subject} className="glass-panel p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-medium group-hover:text-primary transition-colors">{skill.subject}</span>
                    <span className="text-gray-500 text-sm font-mono">{skill.A}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                      style={{ width: `${skill.A}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="h-[450px] w-full glass-panel rounded-3xl p-6 flex items-center justify-center relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
             <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILLS_DATA}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1', fontSize: 13, fontWeight: 500 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Nivel"
                  dataKey="A"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  fill="#6366f1"
                  fillOpacity={0.4}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', borderColor: '#334155', color: '#f3f4f6', borderRadius: '12px', backdropFilter: 'blur(8px)' }}
                  itemStyle={{ color: '#a855f7' }}
                  labelStyle={{ color: '#94a3b8' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsChart;
