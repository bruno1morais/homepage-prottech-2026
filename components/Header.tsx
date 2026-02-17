
import React, { useState, useEffect } from 'react';
import { LogoIcon } from './icons/LogoIcon';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

const navItems = [
  { name: 'Início', href: '#' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre nós', href: '#sobre-nos' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contato', href: '#contato' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'py-4 glass border-b border-white/10 shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <img
              src="/logo_prottech_fundo_transparente.png"
              alt="Prottech Logo"
              className="h-14 w-14 transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Prot<span className="text-blue-500">tech</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contato"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            Fale Conosco
          </a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-[72px] bg-slate-950/98 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-semibold text-slate-100 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl"
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
