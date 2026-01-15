import React, { useState } from 'react';
import { CorporateData } from './types.ts';

interface HomeProps {
  content: CorporateData;
  onNavigateToArticle: (articleId: string) => void;
  onNavigateToBrand: (brandId: string) => void;
}

const Home: React.FC<HomeProps> = ({ content, onNavigateToArticle, onNavigateToBrand }) => {
  const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);

  const scrollInto = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Warsaw & Global Connectivity Map */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Warsaw Skyline at night"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
          
          {/* Animated Global Connection Map Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Warsaw Node */}
            <circle cx="550" cy="220" r="4" fill="#ef4444" filter="url(#glow)">
              <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
            </circle>
            
            {/* Connection Lines (Arrows) to UK, USA, AU */}
            {/* To UK */}
            <path d="M 550 220 Q 500 180 440 190" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="5s" repeatCount="indefinite" />
            </path>
            <circle cx="440" cy="190" r="2" fill="white" />
            
            {/* To USA (New York) */}
            <path d="M 550 220 Q 300 200 150 250" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="7s" repeatCount="indefinite" />
            </path>
            <circle cx="150" cy="250" r="2" fill="white" />

            {/* To Australia (Sydney) */}
            <path d="M 550 220 Q 750 400 900 500" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="10s" repeatCount="indefinite" />
            </path>
            <circle cx="900" cy="500" r="2" fill="white" />

            {/* Labels (Conceptual) */}
            <text x="560" y="215" fill="white" fontSize="10" fontWeight="bold" className="uppercase tracking-widest">Warsaw Hub</text>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-12 h-0.5 bg-red-600"></span>
              <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm">GrowPoland Investment</span>
            </div>
            {/* Ajustado tamaño de texto de 5xl md:text-7xl a 4xl md:text-6xl */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
              {content.hero.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => scrollInto('contact')}
                className="px-10 py-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/40"
              >
                {content.hero.cta}
              </button>
              <button 
                onClick={() => scrollInto('brands')}
                className="px-10 py-4 bg-transparent border border-white/30 text-white font-bold rounded hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                {content.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-16 relative z-20 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-slate-900 rounded-xl shadow-2xl p-10 border border-slate-800">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl font-black text-white mb-2 group-hover:text-red-500 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us - Updated with modern office visual */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000" 
                  alt="GrowPoland Corporate Offices" 
                  className="rounded-2xl shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-600 rounded-2xl -z-0 opacity-10 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs">{content.about.badge}</span>
              <h2 className="text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                {content.about.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 italic border-l-4 border-slate-200 pl-6">
                {content.about.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-100 transition-colors">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span> {content.about.missionLabel}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{content.about.mission}</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span> {content.about.visionLabel}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{content.about.vision}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Brands */}
      <section id="brands" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs">{content.brandsSection.badge}</span>
            <h2 className="text-4xl font-black text-slate-900 mt-4 mb-4">{content.brandsSection.title}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {content.brandsSection.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.brands.map((brand) => (
              <div key={brand.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900">
                    {brand.market}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{brand.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {brand.description}
                  </p>
                  <button 
                    onClick={() => onNavigateToBrand(brand.id)}
                    className="text-slate-900 text-xs font-bold uppercase tracking-widest border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors"
                  >
                    {content.brandsSection.viewDetails} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Division Feature */}
      <section id="export" className="py-24 relative overflow-hidden bg-slate-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:w-2/3 mb-10 lg:mb-0">
              <span className="px-4 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 inline-block">
                {content.exportDivision.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                {content.exportDivision.title}
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                {content.exportDivision.description}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-red-800" src={`https://picsum.photos/100/100?random=${i}`} />
                  ))}
                </div>
                <p className="text-sm font-medium text-white/60 italic">
                  {content.exportDivision.socialText}
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 flex flex-col items-center">
              <div className="bg-white text-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center transform lg:rotate-6 hover:rotate-0 transition-all duration-500 border border-slate-100">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black mb-3">{content.exportDivision.statusLabel}</span>
                <div className="text-2xl font-black mb-6 text-slate-900">{content.exportDivision.status}</div>
                <button 
                  onClick={() => setIsSupplierModalOpen(true)}
                  className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl uppercase text-[10px] tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl"
                >
                  {content.exportDivision.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/News */}
      <section id="news" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs">{content.blogSection.badge}</span>
              <h2 className="text-4xl font-black text-slate-900 mt-4">{content.blogSection.title}</h2>
            </div>
            <button 
              onClick={() => scrollInto('news')}
              className="hidden md:block text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-red-600 transition-colors"
            >
              {content.blogSection.viewAll} →
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {content.blog.map((post) => (
              <div 
                key={post.id} 
                className="flex flex-col sm:flex-row gap-8 group cursor-pointer"
                onClick={() => onNavigateToArticle(post.id)}
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden rounded-xl">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="sm:w-3/5 py-2">
                  <div className="flex items-center text-xs font-bold text-red-600 uppercase tracking-widest mb-3">
                    {post.category} • {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-xs font-bold uppercase text-red-600 tracking-widest group-hover:underline">{content.blogSection.readMore} →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800 skew-x-12 transform translate-x-1/2 -z-0 opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl font-black mb-8">{content.contact.title}</h2>
                <p className="text-slate-400 text-lg mb-12">
                  {content.contact.description}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      ✉️
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">{content.contact.emailLabel}</div>
                      <div className="font-bold">{content.contact.email}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white text-slate-900 p-10 rounded-2xl shadow-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{content.contact.form.name}</label>
                      <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder={content.contact.form.name} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{content.contact.form.company}</label>
                      <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder={content.contact.form.company} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{content.contact.form.email}</label>
                    <input type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder="email@domain.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{content.contact.form.message}</label>
                    <textarea rows={4} className="w-full p-3 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder="..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-slate-900 text-white font-bold rounded uppercase text-xs tracking-widest hover:bg-red-600 transition-all shadow-lg" onClick={(e) => e.preventDefault()}>
                    {content.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Modal */}
      {isSupplierModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl transition-all animate-in">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-xl w-full shadow-2xl relative zoom-in border border-slate-100">
            <button 
              onClick={() => setIsSupplierModalOpen(false)} 
              className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="mb-8">
              <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px] block mb-3">{content.exportDivision.badge}</span>
              <h3 className="text-3xl font-black text-slate-900 leading-tight mb-4">Registro de Proveedor Polaco</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Únase a nuestra red de exportación premium 2026. Auditoría de producción local para UK, USA y Australia.
              </p>
            </div>
            
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsSupplierModalOpen(false); }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{content.contact.form.name}</label>
                  <input type="text" required placeholder="Nombre completo" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{content.contact.form.company}</label>
                  <input type="text" required placeholder="Nombre de empresa" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{content.contact.form.email}</label>
                <input type="email" required placeholder="email@corporativo.pl" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Detalles de Producto</label>
                <textarea rows={3} required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" placeholder="Describa sus productos y capacidades..."></textarea>
              </div>
              <button className="w-full py-5 mt-4 bg-red-600 text-white font-bold rounded-2xl uppercase text-xs tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl">
                {content.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;