
import React from 'react';
import { Language } from '../types.ts';

interface LegalProps {
  type: 'privacy' | 'terms';
  onBack: () => void;
  content: { legal: any };
  lang: Language;
}

const Legal: React.FC<LegalProps> = ({ type, onBack, content, lang }) => {
  const legalData = type === 'privacy' ? content.legal.privacy : content.legal.terms;
  const backLabel = lang === 'pl' ? 'Powrót' : (lang === 'en' ? 'Back' : 'Volver');

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <button 
          onClick={onBack} 
          className="flex items-center text-slate-400 hover:text-red-600 mb-12 uppercase text-[10px] font-black tracking-[0.3em] transition-all"
        >
          <span className="mr-3">←</span> {backLabel}
        </button>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-950 mb-12 tracking-tighter leading-none">
          {legalData.title}
        </h1>
        
        <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed font-light">
          <p className="whitespace-pre-wrap">{legalData.content}</p>
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-sm">GrowPoland Investment Holding S.A.<br/>Varsovia, 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
