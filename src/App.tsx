import React, { useState, useEffect } from 'react';
import {
  Language,
  TierLevel,
  OfferPlan,
  UserAccessState
} from './types';
import {
  getUserAccessState,
  saveUserAccessState,
  getCompletedChapters,
  saveCompletedChapters,
  getCompletedChecklists,
  saveCompletedChecklists,
  getStripePaymentLinks
} from './data/accessCodes';
import { module1Data } from './data/module1';
import { module2Data } from './data/module2';
import { module3Data } from './data/module3';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ModuleView } from './components/ModuleView';
import { AccessCodeModal } from './components/AccessCodeModal';
import { StripeCheckoutModal } from './components/StripeCheckoutModal';
import { CreatorSettingsModal } from './components/CreatorSettingsModal';
import { BookOpen, Home, KeyRound, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('th');
  const [accessState, setAccessState] = useState<UserAccessState>(getUserAccessState);
  const [completedChapters, setCompletedChapters] = useState<string[]>(getCompletedChapters);
  const [completedChecklists, setCompletedChecklists] = useState<string[]>(getCompletedChecklists);

  // View routing: 'home' | 'module-1' | 'module-2' | 'module-3'
  const [currentView, setCurrentView] = useState<string>('home');

  // Modals state
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isCreatorModalOpen, setIsCreatorModalOpen] = useState(false);
  const [selectedOfferForCheckout, setSelectedOfferForCheckout] = useState<OfferPlan | null>(null);

  // Save states to localStorage on change
  useEffect(() => {
    saveUserAccessState(accessState);
  }, [accessState]);

  useEffect(() => {
    saveCompletedChapters(completedChapters);
  }, [completedChapters]);

  useEffect(() => {
    saveCompletedChecklists(completedChecklists);
  }, [completedChecklists]);

  // Handlers
  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'th' ? 'fr' : 'th'));
  };

  const handleUnlockTier = (tier: TierLevel, code: string) => {
    setAccessState({
      currentTier: tier,
      enteredCode: code,
      unlockedAt: new Date().toISOString()
    });
  };

  const handleClearAccess = () => {
    setAccessState({
      currentTier: 0,
      enteredCode: null,
      unlockedAt: null
    });
  };

  const handleQuickSetTier = (tier: TierLevel | 0) => {
    setAccessState({
      currentTier: tier,
      enteredCode: tier > 0 ? `DEMO-TIER-${tier}` : null,
      unlockedAt: tier > 0 ? new Date().toISOString() : null
    });
  };

  const handleToggleChapterComplete = (chapterId: string) => {
    setCompletedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const handleToggleChecklistItem = (itemId: string) => {
    setCompletedChecklists((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectOffer = (offer: OfferPlan) => {
    setSelectedOfferForCheckout(offer);
  };

  const handlePaymentSuccess = (tier: TierLevel, code: string) => {
    handleUnlockTier(tier, code);
    setCurrentView(`module-${tier}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get active module data if viewing a module
  const getActiveModule = () => {
    if (currentView === 'module-1') return module1Data;
    if (currentView === 'module-2') return module2Data;
    if (currentView === 'module-3') return module3Data;
    return null;
  };

  const activeModule = getActiveModule();
  const stripeLinks = getStripePaymentLinks();

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-rose-100 selection:text-rose-900">
      {/* Top Navigation */}
      <Navbar
        language={language}
        currentTier={accessState.currentTier}
        onToggleLanguage={handleToggleLanguage}
        onOpenAccessModal={() => setIsAccessModalOpen(true)}
        onOpenCreatorModal={() => setIsCreatorModalOpen(true)}
        onHomeClick={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-24 sm:pb-16">
        {currentView === 'home' || !activeModule ? (
          <HomeView
            language={language}
            currentTier={accessState.currentTier}
            onSelectOffer={handleSelectOffer}
            onOpenAccessModal={() => setIsAccessModalOpen(true)}
            onSelectModule={(moduleId) => {
              setCurrentView(moduleId);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <ModuleView
            module={activeModule}
            language={language}
            currentTier={accessState.currentTier}
            completedChapters={completedChapters}
            completedChecklists={completedChecklists}
            onToggleChapterComplete={handleToggleChapterComplete}
            onToggleChecklistItem={handleToggleChecklistItem}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAccessModal={() => setIsAccessModalOpen(true)}
          />
        )}
      </main>

      {/* Mobile Floating Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-2 flex items-center justify-around sm:hidden z-40 shadow-lg">
        <button
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center p-1.5 transition-colors ${
            currentView === 'home' ? 'text-rose-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{language === 'th' ? 'หน้าหลัก' : 'Accueil'}</span>
        </button>

        <button
          onClick={() => {
            setCurrentView('module-1');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center p-1.5 transition-colors ${
            currentView === 'module-1' ? 'text-rose-600 font-bold' : 'text-stone-500'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{language === 'th' ? 'โปรไฟล์' : 'Profil'}</span>
        </button>

        <button
          onClick={() => {
            setCurrentView('module-2');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center p-1.5 transition-colors ${
            currentView === 'module-2' ? 'text-rose-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{language === 'th' ? 'วิดีโอ' : 'Vidéo'}</span>
        </button>

        <button
          onClick={() => {
            setCurrentView('module-3');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center p-1.5 transition-colors ${
            currentView === 'module-3' ? 'text-rose-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Heart className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{language === 'th' ? 'หนุ่มฝรั่งเศส' : 'Français'}</span>
        </button>

        <button
          onClick={() => setIsAccessModalOpen(true)}
          className="flex flex-col items-center p-1.5 text-stone-500 hover:text-stone-800"
        >
          <KeyRound className="w-5 h-5 text-amber-600" />
          <span className="text-[10px] mt-0.5">{language === 'th' ? 'รหัสผ่าน' : 'Accès'}</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-8 px-4 text-center text-xs text-stone-500 space-y-2">
        <div className="flex items-center justify-center space-x-1 font-semibold text-stone-700">
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
          <span>
            {language === 'th'
              ? 'แพลตฟอร์มเพื่อการสื่อสารที่จริงใจและปลอดภัย'
              : 'Plateforme pédagogique bienveillante et respectueuse'}
          </span>
        </div>
        <p className="max-w-md mx-auto leading-relaxed">
          {language === 'th'
            ? 'มุ่งเน้นการสร้างความสัมพันธ์ที่ให้เกียรติซึ่งกันและกัน ปราศจากการเสแสร้ง และยึดมั่นในความปลอดภัยของผู้หญิงเป็นสำคัญ'
            : 'Favoriser des relations sincères, authentiques et équilibrées entre femmes thaïlandaises et hommes français.'}
        </p>
        <div className="pt-2 text-[11px] text-stone-400">
          © {new Date().getFullYear()} Sawasdee Amour • Compatible GitHub Pages & Stripe
        </div>
      </footer>

      {/* Modals */}
      <AccessCodeModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
        currentTier={accessState.currentTier}
        onUnlockTier={handleUnlockTier}
        onClearAccess={handleClearAccess}
        language={language}
      />

      <StripeCheckoutModal
        isOpen={!!selectedOfferForCheckout}
        onClose={() => setSelectedOfferForCheckout(null)}
        offer={selectedOfferForCheckout}
        stripeUrl={selectedOfferForCheckout ? stripeLinks[selectedOfferForCheckout.tier] : ''}
        onPaymentSuccess={handlePaymentSuccess}
        language={language}
      />

      <CreatorSettingsModal
        isOpen={isCreatorModalOpen}
        onClose={() => setIsCreatorModalOpen(false)}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        currentTier={accessState.currentTier}
        onQuickSetTier={handleQuickSetTier}
      />
    </div>
  );
}
