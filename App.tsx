
import React, { useState } from 'react';
import Layout from './Layout.tsx';
import Home from './Home.tsx';
import Admin from './Admin.tsx';
import Article from './Article.tsx';
import BrandDetail from './BrandDetail.tsx';
import Legal from './pages/Legal.tsx';
import { Language } from './types.ts';
import { translations } from './data.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState<Language>('es'); 
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);

  const currentContent = translations[lang];

  const navigate = (page: string) => {
    setCurrentPage(page);
    setSelectedArticleId(null);
    setSelectedBrandId(null);
    window.scrollTo(0, 0);
  };

  const navigateToArticle = (id: string) => {
    setSelectedArticleId(id);
    setSelectedBrandId(null);
    setCurrentPage('article');
    window.scrollTo(0, 0);
  };

  const navigateToBrand = (id: string) => {
    setSelectedBrandId(id);
    setSelectedArticleId(null);
    setCurrentPage('brand-detail');
    window.scrollTo(0, 0);
  };

  return (
    <Layout 
      onNavigate={navigate} 
      currentPage={currentPage} 
      lang={lang} 
      onLangChange={setLang}
      content={currentContent}
    >
      {currentPage === 'home' && (
        <Home 
          content={currentContent}
          onNavigateToArticle={navigateToArticle} 
          onNavigateToBrand={navigateToBrand}
        />
      )}
      {currentPage === 'admin' && (
        <Admin 
          content={currentContent as any} 
          onBack={() => navigate('home')} 
        />
      )}
      {currentPage === 'article' && selectedArticleId && (
        <Article 
          articleId={selectedArticleId} 
          onBack={() => navigate('home')} 
          content={currentContent}
          lang={lang}
        />
      )}
      {currentPage === 'brand-detail' && selectedBrandId && (
        <BrandDetail 
          brandId={selectedBrandId} 
          onBack={() => navigate('home')} 
          content={currentContent}
          lang={lang}
        />
      )}
      {(currentPage === 'privacy' || currentPage === 'terms') && (
        <Legal 
          type={currentPage as 'privacy' | 'terms'} 
          onBack={() => navigate('home')} 
          content={currentContent as any}
          lang={lang}
        />
      )}
    </Layout>
  );
};

export default App;
