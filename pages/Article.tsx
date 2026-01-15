
import React from 'react';
import { CorporateData, Language } from '../types';

interface ArticleProps {
  articleId: string;
  onBack: () => void;
  content: CorporateData;
  lang: Language;
}

const Article: React.FC<ArticleProps> = ({ articleId, onBack, content, lang }) => {
  const article = content.blog.find(post => post.id === articleId);

  const backLabel = lang === 'pl' ? 'Powrót do aktualności' : (lang === 'en' ? 'Back to News' : 'Volver a Noticias');

  if (!article) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Artículo no encontrado</h2>
        <button onClick={onBack} className="text-red-600 font-bold underline">Volver</button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-red-600 transition-colors mb-8 uppercase text-xs font-bold tracking-widest"
        >
          <span className="mr-2">←</span> {backLabel}
        </button>

        <div className="flex items-center text-xs font-bold text-red-600 uppercase tracking-widest mb-4">
          {article.category} • {article.date}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
          {article.title}
        </h1>

        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-slate-800">
            {article.excerpt}
          </p>
          
          {lang === 'es' ? (
            <>
              <p>Hacia 2026, el panorama del comercio electrónico ha experimentado una transformación sin precedentes impulsada por la integración masiva de la Inteligencia Artificial y la reconfiguración de las rutas logísticas globales.</p>
              <p>Europa del Este se consolida como el hub logístico preferido gracias a su infraestructura moderna y su posición estratégica que conecta los centros de producción mundiales con el consumidor final europeo de manera ultra-eficiente.</p>
              <p>Los algoritmos predictivos ahora permiten anticipar la demanda local con una precisión del 95%, permitiendo que los stocks se muevan incluso antes de que se realice la compra, optimizando el capital de trabajo de los holdings internacionales.</p>
            </>
          ) : lang === 'pl' ? (
            <>
              <p>Do 2026 r. krajobraz handlu elektronicznego przeszedł bezprecedensową transformację napędzaną przez masową integrację sztucznej inteligencji i rekonfigurację globalnych tras logistycznych.</p>
              <p>Europa Wschodnia umacnia się jako preferowany hub logistyczny dzięki nowoczesnej infrastrukturze i strategicznemu położeniu łączącemu światowe ośrodki produkcyjne z europejskim konsumentem końcowym w sposób ultra-wydajny.</p>
            </>
          ) : (
            <>
              <p>By 2026, the e-commerce landscape has undergone an unprecedented transformation driven by the massive integration of Artificial Intelligence and the reconfiguration of global logistics routes.</p>
              <p>Eastern Europe is consolidating its position as the preferred logistics hub thanks to its modern infrastructure and its strategic position connecting world production centers with the European end consumer in an ultra-efficient manner.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;
