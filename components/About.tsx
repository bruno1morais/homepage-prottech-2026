
import React from 'react';

const skills = [
  'Active Directory', 'Zabbix', 'UniFi', 'Linux', 'Fortinet', 'GLPI', 'Virtualização', 'Cloud Computing', 'Cyber Security'
];

const About: React.FC = () => {
  return (
    <section id="sobre-nos" className="relative py-32 bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-blue-500/20 shadow-2xl shadow-blue-500/10">
                <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center p-12">
                   {/* Abstract Tech Graphic */}
                   <svg className="w-full h-full text-blue-500/20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10"/>
                      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2"/>
                      <path d="M100 20V180M20 100H180" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                      <circle cx="100" cy="100" r="5" fill="currentColor"/>
                   </svg>
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-[2rem] -z-10 flex flex-col items-center justify-center p-6 text-center shadow-xl shadow-blue-500/20">
                <span className="text-4xl font-black text-white">6+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Anos de Experiência Técnica</span>
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Identidade & Propósito</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8">Especialista em Infraestrutura de TI</h2>
            
            <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
              <p>
                Sou graduado em <span className="text-white font-medium">Sistemas de Informação</span>, com uma trajetória de mais de 6 anos focada na estabilidade e segurança de ecossistemas digitais.
              </p>
              <p>
                Minha expertise abrange desde o suporte crítico ao usuário até o gerenciamento complexo de servidores e redes, com foco contínuo em <span className="text-blue-400 font-medium">Cyber Security</span>.
              </p>
            </div>

            <div className="mt-12">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Expertise Principal</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800/50 border border-white/5 text-slate-300 rounded-xl text-sm hover:border-blue-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
