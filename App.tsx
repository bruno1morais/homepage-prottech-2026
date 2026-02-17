
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import BlogPreview from './components/BlogPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Features />
          <BlogPreview />
          <Contact />
        </main>
        <Footer />
        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5563999686766?text=Olá,%20vim%20pelo%20site%20da%20Prottech"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[999] hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/whatsapp.png"
            alt="Chat no WhatsApp"
            className="w-48 md:w-64"
          />
        </a>


      </div>
    </div>
  );
};

export default App;
