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

  if (!brand) return <div>No encontrado</div>;

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <button onClick={onBack} className="text-slate-400 hover:text-red-600 mb-8 uppercase text-xs font-bold tracking-widest">
          ← {backLabel}
        </button>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block mb-6">
              {brand.market}
            </div>
            <h1 className="text-5xl font-black text-slate-900 mb-6">{brand.name}</h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10">{brand.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;