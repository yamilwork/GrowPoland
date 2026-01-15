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
  const backLabel = lang === 'pl' ? 'Powrót' : (lang === 'en' ? 'Back' : 'Volver');

  if (!article) return <div>No encontrado</div>;

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <button onClick={onBack} className="text-slate-400 hover:text-red-600 mb-8 uppercase text-xs font-bold tracking-widest">
          ← {backLabel}
        </button>
        <div className="flex items-center text-xs font-bold text-red-600 uppercase tracking-widest mb-4">
          {article.category} • {article.date}
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">{article.title}</h1>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
          <p className="text-xl font-medium text-slate-800 mb-6">{article.excerpt}</p>
          <p>Hacia 2026, el panorama del comercio electrónico ha experimentado una transformación sin precedentes impulsada por la integración masiva de la Inteligencia Artificial y la reconfiguración de las rutas logísticas globales.</p>
          <p>Europa del Este se consolida como el hub logístico preferido gracias a su infraestructura moderna y su posición estratégica que conecta los centros de producción mundiales con el consumidor final europeo.</p>
        </div>
      </div>
    </div>
  );
};

export default Article;