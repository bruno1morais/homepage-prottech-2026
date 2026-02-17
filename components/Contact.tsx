
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contato" className="relative py-32 bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Vamos construir algo <br />
                <span className="text-blue-500">seguro juntos?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
                Tem um desafio técnico ou precisa de um orçamento para sua empresa? 
                Nossa equipe está pronta para oferecer a melhor solução em TI.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email</div>
                    <div className="text-lg font-medium text-white">prottech@icloud.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">WhatsApp</div>
                    <div className="text-lg font-medium text-white">+55 63 99968-6766</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="glass p-10 rounded-[3rem] border border-white/10 shadow-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Nome Completo</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-6 py-4 bg-slate-900/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                      placeholder="Ex: João Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">E-mail Corporativo</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-6 py-4 bg-slate-900/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                      placeholder="joao@empresa.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Assunto</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-6 py-4 bg-slate-900/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                    placeholder="Ex: Orçamento de Consultoria"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Sua Mensagem</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-6 py-4 bg-slate-900/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 resize-none"
                    placeholder="Como podemos ajudar seu negócio hoje?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98] mt-4"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
