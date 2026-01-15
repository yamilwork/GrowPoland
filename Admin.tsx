
import React, { useState } from 'react';
import { CorporateData } from './types.ts';

interface AdminProps {
  content: CorporateData & { restricted: any };
  onBack: () => void;
}

const Admin: React.FC<AdminProps> = ({ content, onBack }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError(null);
    
    // Simulate API call and failure
    setTimeout(() => {
      setIsSubmitting(false);
      setLoginError(content.restricted.error);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden font-inter">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 blur-[150px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-slate-800/20 blur-[150px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-md mx-auto">
          {!showLoginForm ? (
            <div className="text-center animate-in fade-in duration-700">
              {/* Lock Icon Visual */}
              <div className="mb-10 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl animate-in zoom-in duration-700">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
                  {content.restricted.badge}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
                  {content.restricted.title}
                </h1>
                <p className="text-lg text-slate-400 font-light mb-10 leading-relaxed">
                  {content.restricted.subtitle}
                </p>

                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setShowLoginForm(true)}
                    className="w-full py-5 bg-red-600 text-white font-black rounded-2xl uppercase text-[11px] tracking-[0.2em] hover:bg-red-700 transition-all duration-500 shadow-2xl shadow-red-900/20"
                  >
                    Corporate Login
                  </button>
                  <button 
                    onClick={onBack}
                    className="w-full py-5 bg-white/5 border border-white/10 text-slate-400 font-black rounded-2xl uppercase text-[11px] tracking-[0.2em] hover:bg-white/10 hover:text-white transition-all duration-500"
                  >
                    {content.restricted.back}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-500">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-black text-white mb-2">Partner Identity</h2>
                <p className="text-slate-500 text-xs uppercase tracking-widest">Secure Authentication</p>
              </div>
              
              <form className="space-y-6" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-2">Corporate ID</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder-slate-700"
                    placeholder="partner.id@growpoland.pl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-2">Access Key</label>
                  <input 
                    type="password" 
                    required
                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder-slate-700"
                    placeholder="••••••••••••"
                  />
                </div>
                
                {loginError && (
                  <div className="p-4 bg-red-950/30 border border-red-900/50 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-[10px] font-medium text-red-400 leading-tight text-center">
                      ⚠️ {loginError}
                    </p>
                  </div>
                )}
                
                <div className="pt-4 space-y-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 bg-red-600 text-white font-black rounded-2xl uppercase text-[11px] tracking-[0.2em] hover:bg-red-700 transition-all duration-500 flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      'Authorize Access'
                    )}
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setShowLoginForm(false); setLoginError(null); }}
                    className="w-full text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-white/5 text-center">
                <p className="text-[10px] text-slate-600 uppercase tracking-widest leading-relaxed">
                  Encryption active: AES-256-GCM<br/>
                  GrowPoland Security Gateway v4.2
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Warsaw Graphic Detail */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
         <span className="text-[8px] font-black uppercase tracking-[1em] text-white">Secure Gateway 2026</span>
      </div>
    </div>
  );
};

export default Admin;
