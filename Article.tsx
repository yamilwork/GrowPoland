
import React from 'react';
import { CorporateData, Language } from './types.ts';

interface ArticleProps {
  articleId: string;
  onBack: () => void;
  content: CorporateData;
  lang: Language;
}

const Article: React.FC<ArticleProps> = ({ articleId, onBack, content, lang }) => {
  const article = content.blog.find(post => post.id === articleId);
  
  // Usar etiquetas dinámicas basadas en el idioma
  const backLabel = lang === 'pl' ? 'Powrót' : (lang === 'en' ? 'Back' : 'Volver');

  if (!article) return (
    <div className="pt-32 pb-20 container mx-auto px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Error 404</h2>
      <button onClick={onBack} className="text-red-600 font-bold underline">Volver</button>
    </div>
  );

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack} 
          className="flex items-center text-slate-400 hover:text-red-600 mb-12 uppercase text-[10px] font-black tracking-[0.3em] transition-all"
        >
          <span className="mr-3">←</span> {backLabel}
        </button>
        
        <div className="flex items-center text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-6">
          {article.category} <span className="mx-2 text-slate-300">•</span> {article.date}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-950 mb-12 leading-tight tracking-tighter">
          {article.title}
        </h1>
        
        <div className="aspect-[21/9] w-full rounded-[2.5rem] overflow-hidden mb-16 shadow-3xl">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
        
        <div className="prose prose-xl prose-slate max-w-none text-slate-600 leading-relaxed font-light">
          <p className="text-2xl font-medium text-slate-900 mb-10 leading-snug">
            {article.excerpt}
          </p>
          
          {/* Contenido dinámico por idioma para evitar que cambie a español */}
          {lang === 'es' ? (
            <div className="space-y-8">
              <p>Hacia 2026, el panorama del comercio electrónico ha experimentado una transformación sin precedentes impulsada por la integración masiva de la Inteligencia Artificial y la reconfiguración de las rutas logísticas globales.</p>
              <p>Europa del Este se consolida como el hub logístico preferido gracias a su infraestructura moderna y su posición estratégica que conecta los centros de producción mundiales con el consumidor final europeo de manera ultra-eficiente.</p>
            </div>
          ) : lang === 'pl' ? (
            <div className="space-y-8">
              <p>Do 2026 roku krajobraz handlu elektronicznego przeszedł bezprecedensową transformację napędzaną przez masową integrację sztucznej inteligencji.</p>
              <p>Europa Wschodnia umacnia swoją pozycję jako preferowane centrum logistyczne dzięki nowoczesnej infrastrukturze i strategicznemu położeniu.</p>
            </div>
          ) : (
            <div className="space-y-8">
              <p>By 2026, the e-commerce landscape has undergone an unprecedented transformation driven by the massive integration of Artificial Intelligence and the reconfiguration of global logistics routes.</p>
              <p>Eastern Europe is consolidating its position as the preferred logistics hub thanks to its modern infrastructure and its strategic position connecting world production centers.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;
