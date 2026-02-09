
import React from 'react';

const posts = [
  { category: 'Segurança', title: '5 Dicas para proteger sua rede Wi-Fi corporativa', date: '22 Abr, 2024' },
  { category: 'Infraestrutura', title: 'Cloud vs On-premise: Qual o melhor para sua empresa?', date: '15 Abr, 2024' },
  { category: 'Tendências', title: 'O impacto da IA no suporte técnico de TI em 2024', date: '08 Abr, 2024' }
];

const BlogPreview: React.FC = () => {
  return (
    <section id="blog" className="py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black mb-4">Insights & <span className="text-blue-500">Blog</span></h2>
            <p className="text-slate-400 max-w-lg">Mantenha-se atualizado com as últimas novidades e tutoriais do mundo da tecnologia.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-blue-500 font-bold hover:gap-3 transition-all">
            Ver todos os artigos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video bg-slate-900 rounded-3xl mb-6 overflow-hidden border border-white/5 group-hover:border-blue-500/30 transition-all">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
                   <svg className="w-12 h-12 text-slate-700 group-hover:text-blue-500/50 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase text-blue-500 bg-blue-500/10 px-2 py-1 rounded-md">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
