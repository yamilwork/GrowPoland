
import React from 'react';
import { CorporateData, Language } from './types.ts';

interface BrandDetailProps {
  brandId: string;
  onBack: () => void;
  content: CorporateData;
  lang: Language;
}

const BrandDetail: React.FC<BrandDetailProps> = ({ brandId, onBack, content, lang }) => {
  const brand = content.brands.find(b => b.id === brandId);
  const backLabel = lang === 'pl' ? 'Powrót' : (lang === 'en' ? 'Back' : 'Volver');
  const detailsLabel = lang === 'pl' ? 'Szczegóły marki' : (lang === 'en' ? 'Brand details' : 'Detalles de marca');
  const nextMarketsLabel = lang === 'pl' ? 'Planowana ekspansja' : (lang === 'en' ? 'Planned expansion' : 'Expansión proyectada');

  if (!brand) return (
    <div className="pt-32 pb-20 container mx-auto px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Error 404</h2>
      <button onClick={onBack} className="text-red-600 font-bold underline">Volver</button>
    </div>
  );

  const isMorleyn = brand.id === 'morleyn-pet';

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <button 
          onClick={onBack} 
          className="flex items-center text-slate-400 hover:text-red-600 mb-12 uppercase text-[10px] font-black tracking-[0.3em] transition-all"
        >
          <span className="mr-3">←</span> {backLabel}
        </button>
        
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl">
              <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 py-6">
            <div className="bg-red-50 text-red-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] inline-block mb-8">
              {brand.market}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tighter leading-none">
              {brand.name}
            </h1>
            <p className="text-2xl text-slate-500 leading-relaxed mb-12 font-light">
              {brand.description}
            </p>
            
            <div className="grid grid-cols-2 gap-10 border-t border-slate-100 pt-10">
              <div className="col-span-1">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">{detailsLabel}</h4>
                <div className="text-slate-950 font-bold">Contemporary Segment</div>
              </div>
              <div className="col-span-1">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Status</h4>
                <div className="text-red-600 font-bold uppercase text-xs tracking-widest">{brand.market}</div>
              </div>
              
              {isMorleyn && (
                <div className="col-span-2 pt-6">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">{nextMarketsLabel}</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Spain', 'USA', 'Australia', 'Germany', 'Poland'].map(m => {
                      const localizedMarket = lang === 'es' ? (m === 'Spain' ? 'España' : (m === 'Germany' ? 'Alemania' : m)) : 
                                             lang === 'pl' ? (m === 'Spain' ? 'Hiszpania' : (m === 'Germany' ? 'Niemcy' : (m === 'Poland' ? 'Polska' : m))) : m;
                      return (
                        <span key={m} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-700 uppercase tracking-widest">
                          {localizedMarket}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-6">
              {brand.website && (
                <a 
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 bg-slate-950 text-white font-black rounded-2xl uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 transition-all shadow-xl text-center"
                >
                  Visit Official Website
                </a>
              )}
              <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="px-12 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl uppercase text-[10px] tracking-[0.3em] hover:bg-slate-50 transition-all"
              >
                Inquire Collaboration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;
