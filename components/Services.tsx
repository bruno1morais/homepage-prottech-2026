
import React from 'react';
import { BackupIcon } from './icons/BackupIcon';
import { NetworkIcon } from './icons/NetworkIcon';
import { InfraIcon } from './icons/InfraIcon';
import { ConsultingIcon } from './icons/ConsultingIcon';
import { SupportIcon } from './icons/SupportIcon';
import { SecurityIcon } from './icons/SecurityIcon';

const servicesData = [
  {
    icon: <BackupIcon />,
    title: 'Backups Estratégicos',
    description: 'Soluções inteligentes que garantem a integridade e disponibilidade total dos dados vitais da sua organização.',
  },
  {
    icon: <NetworkIcon />,
    title: 'Engenharia de Redes',
    description: 'Gestão avançada de conectividade, switches e roteamento com foco em performance e estabilidade.',
  },
  {
    icon: <InfraIcon />,
    title: 'Infraestrutura Robusta',
    description: 'Projetos escaláveis que unem o melhor do hardware físico com a flexibilidade da nuvem.',
  },
  {
    icon: <ConsultingIcon />,
    title: 'Consultoria Especializada',
    description: 'Aconselhamento estratégico para tomada de decisões tecnológicas que geram valor real ao negócio.',
  },
  {
    icon: <SupportIcon />,
    title: 'Suporte Multi-Canal',
    description: 'Atendimento ágil e resolutivo via WhatsApp, Telefone e Remoto para manter seu fluxo de trabalho.',
  },
  {
    icon: <SecurityIcon />,
    title: 'Cyber Segurança',
    description: 'Proteção 360º contra ameaças digitais, garantindo a privacidade e o cumprimento de normas de segurança.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Excelência em <br />
              <span className="text-blue-500">Serviços de TI</span>
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Aliamos experiência técnica a uma visão estratégica para oferecer o que há de mais moderno em infraestrutura e segurança digital.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-1 w-32 bg-blue-500 rounded-full mb-4"></div>
            <div className="h-1 w-20 bg-blue-500/30 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative p-10 bg-slate-900/40 border border-white/5 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[60px] group-hover:bg-blue-600/20 transition-all"></div>
              
              <div className="relative z-10">
                <div className="mb-8 w-16 h-16 flex items-center justify-center bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <div className="scale-75 text-blue-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
