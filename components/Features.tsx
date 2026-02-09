
import React from 'react';

const differentials = [
  { title: 'Confiabilidade', desc: 'Sistemas resilientes e suporte que você pode contar 24/7.' },
  { title: 'Segurança Nativa', desc: 'Protocolos de proteção integrados em cada etapa do projeto.' },
  { title: 'Eficiência Máxima', desc: 'Otimização de processos para reduzir custos e aumentar produtividade.' },
  { title: 'Inovação Constante', desc: 'Sempre atualizados com as últimas tendências do mercado global.' }
];

const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-blue-600/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Por que a Prottech?</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8 leading-tight">
              O diferencial técnico que seu negócio precisa para crescer
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
              Não entregamos apenas tecnologia; entregamos tranquilidade. Nossa metodologia foca em 
              antecipar problemas e construir alicerces digitais indestrutíveis.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {differentials.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-10 rounded-full"></div>
             <div className="relative glass p-8 rounded-[3rem] border border-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 h-32 flex flex-col justify-end">
                    <div className="text-3xl font-bold text-blue-500">6+</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Anos de XP</div>
                  </div>
                  <div className="bg-blue-600 p-6 rounded-2xl h-40 flex flex-col justify-end">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-xs uppercase tracking-wider text-blue-100">Comprometimento</div>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 h-40 flex flex-col justify-end col-span-2">
                    <div className="text-2xl font-bold text-white">Suporte Premium</div>
                    <p className="text-sm text-slate-400">Atendimento humanizado e especializado em cada demanda.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
