
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-[0.03] text-blue-500 fill-current">
          <circle cx="20" cy="20" r="15" />
          <circle cx="80" cy="80" r="20" />
          <path d="M0 100 Q 50 50 100 100" stroke="currentColor" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
            Tecnologia & Inovação
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-8 text-white">
            Transformando o seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">
              Futuro Digital
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed font-light">
            Entendemos que problemas técnicos podem ser incômodos. Oferecemos soluções rápidas, 
            eficientes e seguras para garantir que sua tecnologia impulsione seu negócio, não o atrase.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <a
              href="#servicos"
              className="group relative w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Nossas Soluções</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            
            <a
              href="#contato"
              className="w-full sm:w-auto px-10 py-5 bg-slate-900/50 hover:bg-slate-800 text-slate-200 font-bold rounded-2xl border border-white/10 backdrop-blur-sm transition-all hover:border-white/20"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
