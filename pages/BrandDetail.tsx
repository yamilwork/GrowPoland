
import React from 'react';
import { CorporateData, Language } from '../types';

interface BrandDetailProps {
  brandId: string;
  onBack: () => void;
  content: CorporateData;
  lang: Language;
}

const BrandDetail: React.FC<BrandDetailProps> = ({ brandId, onBack, content, lang }) => {
  const brand = content.brands.find(b => b.id === brandId);

  /* Use lang prop instead of accessing non-existent content.lang */
  const backLabel = lang === 'pl' ? 'Powrót do Portfolio' : (lang === 'en' ? 'Back to Portfolio' : 'Volver al Portfolio');
  const nextMarketsLabel = lang === 'pl' ? 'Następne Rynki' : (lang === 'en' ? 'Next Markets' : 'Próximos Mercados');
  const managementLabel = lang === 'pl' ? 'Zarządzanie Holdingiem' : (lang === 'en' ? 'Holding Management' : 'Gestión del Holding');

  if (!brand) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Brand not found</h2>
        <button onClick={onBack} className="text-red-600 font-bold underline">Back</button>
      </div>
    );
  }

  const isMorleyn = brand.id === 'morleyn-pet';

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-red-600 transition-colors mb-8 uppercase text-xs font-bold tracking-widest"
        >
          <span className="mr-2">←</span> {backLabel}
        </button>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
              {(brand.market.includes('Coming') || brand.market.includes('Wkrótce') || brand.market.includes('Próximamente')) && (
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center">
                  <div className="bg-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest text-slate-900">
                    {content.exportDivision.badge}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block mb-6">
              {brand.market}
            </div>
            <h1 className="text-5xl font-black text-slate-900 mb-6">{brand.name}</h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              {brand.description}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="border-t border-slate-100 pt-6">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Business Model</div>
                <div className="text-slate-900 font-bold">D2C / Retail E-commerce</div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Status</div>
                <div className="text-slate-900 font-bold">{brand.market}</div>
              </div>
              {isMorleyn && (
                <div className="border-t border-slate-100 pt-6 col-span-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{nextMarketsLabel}</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['EE.UU.', 'Australia', 'Alemania', 'Polonia'].map(m => (
                      <span key={m} className="px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-700">{m}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">{managementLabel}</h3>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-sm text-slate-600">
                  GrowPoland manages the technological infrastructure and logistics synchronization for this brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;
