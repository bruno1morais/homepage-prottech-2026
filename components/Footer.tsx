
import React from 'react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { EmailIcon } from './icons/EmailIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 border-t border-white/5 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <span className="text-3xl font-black text-white">Prot<span className="text-blue-500">tech</span></span>
            </a>
            <p className="text-lg text-slate-500 max-w-sm leading-relaxed mb-8">
              Sua parceira estratégica em infraestrutura e tecnologia. 
              Garantindo segurança e performance para empresas que não param de crescer.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/bruno-1morais/" className="w-12 h-12 flex items-center justify-center bg-slate-900 rounded-xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a href="https://wa.me/5563999686766?text=Olá,%20vim%20pelo%20site%20da%20Prottech" className="w-12 h-12 flex items-center justify-center bg-slate-900 rounded-xl text-slate-400 hover:bg-green-600 hover:text-white transition-all shadow-lg">
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a href="https://bruno.1moraisbezerra@gmail.com/" className="w-12 h-12 flex items-center justify-center bg-slate-900 rounded-xl text-slate-400 hover:bg-white hover:text-slate-900 transition-all shadow-lg">
                <EmailIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-slate-500 hover:text-blue-500 transition-colors">Serviços</a></li>
              <li><a href="#sobre-nos" className="text-slate-500 hover:text-blue-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#blog" className="text-slate-500 hover:text-blue-500 transition-colors">Insights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Suporte</h4>
            <ul className="space-y-4">
              {/* <li><a href="#contato" className="text-slate-500 hover:text-blue-500 transition-colors">Fale Conosco</a></li> */}
              <li><a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm">
            &copy; {currentYear} Prottech Soluções em Tecnologia. Todos os direitos reservados. CNPJ: 44.970.120/0001-97
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600 font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Sistemas Monitorados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
