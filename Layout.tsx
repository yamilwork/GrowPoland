
import React, { useState, useEffect } from 'react';
import { CorporateData, Language } from './types.ts';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);
    
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

  const navigateAndClose = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' || isMenuOpen ? 'bg-slate-900 shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer z-50"
            onClick={() => navigateAndClose('home')}
          >
            <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-bold text-white text-xl">GP</div>
            <span className="font-bold text-xl tracking-tight text-white">
              GrowPoland <span className="font-light">Investment</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
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

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden z-50 text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col h-full pt-32 px-10">
            <div className="flex flex-col space-y-8 text-2xl font-black text-white uppercase tracking-tighter">
              <button onClick={() => navigateAndClose('home')} className="text-left hover:text-red-600 transition-colors">{content.navigation.start}</button>
              <button onClick={(e) => handleAnchorClick(e, 'about')} className="text-left hover:text-red-600 transition-colors">{content.navigation.about}</button>
              <button onClick={(e) => handleAnchorClick(e, 'brands')} className="text-left hover:text-red-600 transition-colors">{content.navigation.portfolio}</button>
              <button onClick={(e) => handleAnchorClick(e, 'export')} className="text-left hover:text-red-600 transition-colors">{content.navigation.export}</button>
              <button onClick={(e) => handleAnchorClick(e, 'news')} className="text-left hover:text-red-600 transition-colors">{content.navigation.news}</button>
            </div>

            <div className="mt-auto mb-16 space-y-10">
              <div className="flex items-center space-x-6 text-sm font-bold tracking-widest text-slate-500">
                <button onClick={() => {onLangChange('es'); setIsMenuOpen(false);}} className={lang === 'es' ? 'text-red-600' : ''}>ESPAÑOL</button>
                <button onClick={() => {onLangChange('en'); setIsMenuOpen(false);}} className={lang === 'en' ? 'text-red-600' : ''}>ENGLISH</button>
                <button onClick={() => {onLangChange('pl'); setIsMenuOpen(false);}} className={lang === 'pl' ? 'text-red-600' : ''}>POLSKI</button>
              </div>
              
              <button 
                onClick={() => navigateAndClose('admin')}
                className="w-full py-5 bg-red-600 text-white font-black rounded-2xl uppercase text-xs tracking-[0.3em] shadow-2xl shadow-red-900/40"
              >
                {content.navigation.admin}
              </button>
            </div>
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
            </div>

            <div>
              <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">{content.footer.company}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><button onClick={(e) => handleAnchorClick(e, 'about')} className="hover:text-red-500 text-left">{content.footer.links.about}</button></li>
                <li><button onClick={(e) => handleAnchorClick(e, 'brands')} className="hover:text-red-500 text-left">{content.footer.links.brands}</button></li>
                <li><button onClick={(e) => handleAnchorClick(e, 'export')} className="hover:text-red-500 text-left">{content.footer.links.export}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">{content.footer.support}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><button onClick={() => navigateAndClose('privacy')} className="hover:text-red-500 text-left">{content.footer.links.privacy}</button></li>
                <li><button onClick={() => navigateAndClose('terms')} className="hover:text-red-500 text-left">{content.footer.links.terms}</button></li>
                <li><button onClick={(e) => handleAnchorClick(e, 'news')} className="hover:text-red-500 text-left">{content.footer.links.news}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">{content.footer.contact}</h4>
              <ul className="space-y-4 text-sm text-slate-400 text-left">
                <li className="flex items-start text-xs">
                  <span className="text-red-600 mr-2">📍</span>
                  {content.contact.address}
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✉️</span>
                  {content.contact.email}
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-tighter">
            <p className="text-center md:text-left">&copy; 2026 GrowPoland Investment Holding S.A. {content.footer.rights}</p>
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
