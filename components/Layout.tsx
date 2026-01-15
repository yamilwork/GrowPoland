
import React, { useState, useEffect } from 'react';
import { CorporateData, Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
  lang: Language;
  onLangChange: (lang: Language) => void;
  content: CorporateData;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, currentPage, lang, onLangChange, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    if (e) e.preventDefault();
    
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-slate-900 shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-bold text-white text-xl">GP</div>
            <span className={`font-bold text-xl tracking-tight text-white`}>
              GrowPoland <span className="font-light">Investment</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-white/90">
            <button onClick={() => onNavigate('home')} className={`hover:text-red-500 transition-colors ${currentPage === 'home' ? 'text-red-500' : ''}`}>{content.navigation.start}</button>
            <button onClick={(e) => handleAnchorClick(e, 'about')} className="hover:text-red-500 transition-colors">{content.navigation.about}</button>
            <button onClick={(e) => handleAnchorClick(e, 'brands')} className="hover:text-red-500 transition-colors">{content.navigation.portfolio}</button>
            <button onClick={(e) => handleAnchorClick(e, 'export')} className="hover:text-red-500 transition-colors">{content.navigation.export}</button>
            <button onClick={(e) => handleAnchorClick(e, 'news')} className="hover:text-red-500 transition-colors">{content.navigation.news}</button>
            
            <div className="flex items-center space-x-2 border-l border-white/20 pl-6 h-6 ml-2">
              <button onClick={() => onLangChange('es')} className={`text-[10px] font-bold px-1 transition-colors ${lang === 'es' ? 'text-red-500' : 'text-white/60 hover:text-white'}`}>ES</button>
              <button onClick={() => onLangChange('en')} className={`text-[10px] font-bold px-1 transition-colors ${lang === 'en' ? 'text-red-500' : 'text-white/60 hover:text-white'}`}>EN</button>
              <button onClick={() => onLangChange('pl')} className={`text-[10px] font-bold px-1 transition-colors ${lang === 'pl' ? 'text-red-500' : 'text-white/60 hover:text-white'}`}>PL</button>
            </div>

            <button onClick={() => onNavigate('admin')} className={`px-4 py-2 bg-white/10 hover:bg-white/20 rounded border border-white/20 transition-all ${currentPage === 'admin' ? 'bg-white/20' : ''}`}>{content.navigation.admin}</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-white">GP</div>
                <span className="font-bold text-lg tracking-tight">GrowPoland</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {content.footer.description}
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">{content.footer.company}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><button onClick={(e) => handleAnchorClick(e, 'about')} className="hover:text-red-500">{content.footer.links.about}</button></li>
                <li><button onClick={(e) => handleAnchorClick(e, 'brands')} className="hover:text-red-500">{content.footer.links.brands}</button></li>
                <li><button onClick={(e) => handleAnchorClick(e, 'export')} className="hover:text-red-500">{content.footer.links.export}</button></li>
                <li><button className="hover:text-red-500">{content.footer.links.careers}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">{content.footer.support}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><button onClick={(e) => handleAnchorClick(e, 'news')} className="hover:text-red-500">{content.footer.links.news}</button></li>
                <li><button className="hover:text-red-500">{content.footer.links.investors}</button></li>
                <li><button className="hover:text-red-500">{content.footer.links.privacy}</button></li>
                <li><button className="hover:text-red-500">{content.footer.links.terms}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">{content.footer.contact}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start text-xs">
                  <span className="text-red-600 mr-2">📍</span>
                  {content.contact.address}
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✉️</span>
                  {content.contact.email}
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">📞</span>
                  {content.contact.phone}
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-tighter">
            <p>&copy; 2024 GrowPoland Investment Holding S.A. {content.footer.rights}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-slate-700">{content.footer.madeIn}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
