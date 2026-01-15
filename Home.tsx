
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
      {/* Hero Section with Global Connectivity Map */}
      <section className="relative min-h-screen md:h-screen flex items-center overflow-hidden bg-slate-950 py-32 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Warsaw Skyline at night"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent"></div>
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="glow-red-ultra-soft">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <g transform="translate(680, 180)">
              <circle r="8" fill="rgba(239, 68, 68, 0.15)" className="node-pulse-ring" />
              <circle r="2.5" fill="#ef4444" filter="url(#glow-red-ultra-soft)" className="opacity-80" />
              <text x="12" y="4" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="800" className="uppercase tracking-[0.5em]">WARSAW HUB</text>
            </g>

            <g className="opacity-30">
              <path d="M 680 180 Q 580 140 480 150" fill="none" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="0.8" strokeLinecap="round" className="path-anim" style={{ animationDuration: '8s' }} />
              <g transform="translate(480, 150)">
                <circle r="1.5" fill="white" className="opacity-50" />
                <text x="-8" y="-8" fill="rgba(255,255,255,0.3)" fontSize="7" fontWeight="700" textAnchor="end" className="uppercase tracking-widest">London</text>
              </g>
            </g>

            <g className="opacity-25">
              <path d="M 680 180 Q 820 120 940 160" fill="none" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="0.8" strokeLinecap="round" className="path-anim" style={{ animationDuration: '7s', animationDelay: '-1s' }} />
              <g transform="translate(940, 160)">
                <circle r="1.5" fill="white" className="opacity-50" />
                <text x="10" y="4" fill="rgba(255,255,255,0.3)" fontSize="7" fontWeight="700" className="uppercase tracking-widest">Tokyo</text>
              </g>
            </g>

            <g className="opacity-20">
              <path d="M 680 180 Q 800 350 920 520" fill="none" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="0.8" strokeLinecap="round" className="path-anim" style={{ animationDuration: '10s', animationDelay: '-4s' }} />
              <g transform="translate(920, 520)">
                <circle r="1.5" fill="white" className="opacity-50" />
                <text x="-8" y="-8" fill="rgba(255,255,255,0.3)" fontSize="7" fontWeight="700" textAnchor="end" className="uppercase tracking-widest">Sydney</text>
              </g>
            </g>

            <g className="opacity-40">
              <path d="M 680 180 L 640 195" fill="none" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="0.6" strokeDasharray="1,3" />
            </g>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6 animate-in">
              <span className="w-12 h-0.5 bg-red-600"></span>
              <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm">GrowPoland Investment</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 animate-in delay-75 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              {content.hero.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl font-light animate-in delay-150 drop-shadow-md">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-in delay-200">
              <button 
                onClick={() => scrollInto('contact')}
                className="px-12 py-6 bg-red-600 text-white font-black rounded-xl uppercase text-[11px] tracking-[0.3em] hover:bg-red-700 transition-all shadow-2xl shadow-red-900/40 transform hover:-translate-y-1"
              >
                {content.hero.cta}
              </button>
              <button 
                onClick={() => scrollInto('brands')}
                className="px-12 py-6 bg-slate-900/80 border border-white/20 text-white font-black rounded-xl uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all backdrop-blur-xl transform hover:-translate-y-1 shadow-2xl"
              >
                {content.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white pb-12 pt-12 md:py-12 md:-mt-16 relative z-20 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-slate-900 rounded-[2rem] shadow-2xl p-8 md:p-12 border border-slate-800">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-red-500 transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000" 
                  alt="GrowPoland Corporate Offices" 
                  className="rounded-3xl shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-600 rounded-3xl -z-0 opacity-10 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px]">{content.about.badge}</span>
              <h2 className="text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                {content.about.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 italic border-l-4 border-slate-200 pl-6">
                {content.about.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-red-100 transition-all group">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center uppercase text-xs tracking-widest">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span> {content.about.missionLabel}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{content.about.mission}</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-slate-300 transition-all group">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center uppercase text-xs tracking-widest">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span> {content.about.visionLabel}
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
          <div className="text-center mb-20">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px]">{content.brandsSection.badge}</span>
            <h2 className="text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tighter">{content.brandsSection.title}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light">
              {content.brandsSection.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {content.brands.map((brand) => (
              <div key={brand.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 hover:-translate-y-2">
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-xl">
                    {brand.market}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{brand.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {brand.description}
                  </p>
                  <div className="flex items-center space-x-6">
                    <button 
                      onClick={() => onNavigateToBrand(brand.id)}
                      className="text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-red-600 pb-1 hover:text-red-600 hover:border-slate-900 transition-all"
                    >
                      {content.brandsSection.viewDetails} →
                    </button>
                    {brand.website && (
                      <a 
                        href={brand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] hover:text-red-600 transition-all flex items-center"
                      >
                        Official Site <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Validation / Reviews Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">{content.reviewsSection.badge}</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 mt-4 mb-4 tracking-tighter">{content.reviewsSection.title}</h2>
            <p className="text-slate-500 font-light text-sm">{content.reviewsSection.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {content.reviews.map((review) => (
              <div key={review.id} className="p-10 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex text-slate-200">
                      {[1,2,3,4,5].map(star => (
                        <svg key={star} className="w-4 h-4 fill-current group-hover:text-red-600 transition-colors" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 font-light text-lg leading-relaxed mb-10">
                    "{review.content}"
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-50">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
                    <img src={review.avatar} alt={review.author} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-950 text-sm uppercase tracking-wider">{review.author}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{review.position} <span className="mx-1">•</span> <span className="text-slate-900">{review.company}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Division Feature */}
      <section id="export" className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-slate-950 rounded-[3.5rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between text-white shadow-3xl">
            <div className="lg:w-2/3 mb-12 lg:mb-0">
              <span className="px-5 py-2 bg-red-600/20 text-red-500 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 inline-block">
                {content.exportDivision.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
                {content.exportDivision.title}
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl font-light">
                {content.exportDivision.description}
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                    <img key={i} className="w-12 h-12 rounded-full border-4 border-slate-950 object-cover" src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Partner" />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {content.exportDivision.socialText}
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 flex flex-col items-center w-full">
              <div className="bg-white text-slate-900 p-10 md:p-14 rounded-[3rem] shadow-3xl text-center transform lg:rotate-3 hover:rotate-0 transition-all duration-700 border border-slate-100 w-full max-sm:max-w-xs">
                <span className="block text-[9px] uppercase tracking-[0.4em] text-slate-400 font-black mb-4">{content.exportDivision.statusLabel}</span>
                <div className="text-2xl font-black mb-10 text-slate-950 tracking-tighter">{content.exportDivision.status}</div>
                <button 
                  onClick={() => setIsSupplierModalOpen(true)}
                  className="w-full py-6 bg-red-600 text-white font-black rounded-2xl uppercase text-[11px] tracking-[0.3em] hover:bg-red-700 transition-all shadow-2xl shadow-red-900/40"
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="w-full md:w-auto">
              <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px]">{content.blogSection.badge}</span>
              <h2 className="text-4xl font-black text-slate-900 mt-4 tracking-tighter">{content.blogSection.title}</h2>
            </div>
            <button 
              onClick={() => scrollInto('news')}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600 pb-2"
            >
              {content.blogSection.viewAll} →
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {content.blog.map((post) => (
              <div 
                key={post.id} 
                className="flex flex-col sm:flex-row gap-10 group cursor-pointer"
                onClick={() => onNavigateToArticle(post.id)}
              >
                <div className="sm:w-2/5 h-56 sm:h-64 overflow-hidden rounded-[2rem] shadow-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="sm:w-3/5 py-4">
                  <div className="flex items-center text-[10px] font-black text-red-600 uppercase tracking-widest mb-4">
                    {post.category} <span className="mx-2 text-slate-300">•</span> {post.date}
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-4 group-hover:text-red-600 transition-colors tracking-tight leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-[10px] font-black uppercase text-slate-900 tracking-[0.2em] group-hover:text-red-600 transition-colors">{content.blogSection.readMore} →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 blur-[120px] -z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-5xl font-black mb-10 tracking-tighter">{content.contact.title}</h2>
                <p className="text-slate-400 text-xl mb-16 font-light leading-relaxed">
                  {content.contact.description}
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black mb-1">{content.contact.emailLabel}</div>
                      <div className="text-lg font-bold">{content.contact.email}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white text-slate-900 p-12 rounded-[3.5rem] shadow-3xl">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{content.contact.form.name}</label>
                      <input type="text" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" placeholder={content.contact.form.name} />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{content.contact.form.company}</label>
                      <input type="text" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" placeholder={content.contact.form.company} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{content.contact.form.email}</label>
                    <input type="email" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" placeholder="email@domain.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{content.contact.form.message}</label>
                    <textarea rows={4} className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" placeholder="..."></textarea>
                  </div>
                  <button className="w-full py-6 bg-slate-950 text-white font-black rounded-2xl uppercase text-[11px] tracking-[0.4em] hover:bg-red-600 transition-all shadow-3xl">
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/95 backdrop-blur-2xl transition-all animate-in fade-in duration-300">
          <div className="bg-white rounded-[3.5rem] p-10 md:p-16 max-w-2xl w-full shadow-3xl relative animate-in zoom-in duration-500 border border-slate-100 overflow-y-auto max-h-[90vh]">
            <button 
              onClick={() => setIsSupplierModalOpen(false)} 
              className="absolute top-10 right-10 text-slate-300 hover:text-slate-950 transition-colors"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="mb-10">
              <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">{content.exportDivision.badge}</span>
              <h3 className="text-4xl font-black text-slate-950 leading-tight mb-6 tracking-tighter">{content.exportDivision.modalTitle}</h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                {content.exportDivision.modalDescription}
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSupplierModalOpen(false); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{content.contact.form.name}</label>
                  <input type="text" required placeholder={content.contact.form.name} className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{content.contact.form.company}</label>
                  <input type="text" required placeholder={content.contact.form.company} className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{content.contact.form.email}</label>
                <input type="email" required placeholder={content.contact.form.email} className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{content.exportDivision.formLabelProduct}</label>
                <textarea rows={3} required className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-red-600/5 focus:border-red-600 transition-all" placeholder={content.exportDivision.formPlaceholderProduct}></textarea>
              </div>
              <button className="w-full py-6 mt-6 bg-red-600 text-white font-black rounded-2xl uppercase text-xs tracking-[0.4em] hover:bg-slate-950 transition-all shadow-3xl shadow-red-900/40">
                {content.contact.form.submit}
              </button>
              <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest mt-6 font-bold">
                {content.exportDivision.securityText}
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
