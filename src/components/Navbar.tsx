import React from 'react';
import { Heart, KeyRound, Globe, Settings, Lock, CheckCircle2 } from 'lucide-react';
import { Language, TierLevel } from '../types';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  currentTier: TierLevel | 0;
  onOpenAccessModal: () => void;
  onOpenSettingsModal: () => void;
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  currentTier,
  onOpenAccessModal,
  onOpenSettingsModal,
  onNavigateHome,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <button
          id="nav-brand-button"
          onClick={onNavigateHome}
          className="flex items-center space-x-2.5 text-left group focus:outline-hidden"
          title={language === 'th' ? 'กลับหน้าแรก' : 'Accueil'}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-white" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-stone-900 tracking-tight text-base sm:text-lg">
                Sawasdee Love
              </span>
              <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 tracking-wider">
                FR-TH
              </span>
            </div>
            <p className="text-[11px] text-stone-500 leading-none">
              {language === 'th' ? 'คู่มือพัฒนาโปรไฟล์ & การสื่อสาร' : 'Guide pédagogique bilingue'}
            </p>
          </div>
        </button>

        {/* Right action controls */}
        <div className="flex items-center space-x-2">
          {/* Language toggle: Bilingual control for French creator / Thai users */}
          <button
            id="nav-language-toggle"
            onClick={onToggleLanguage}
            className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              language === 'fr'
                ? 'bg-blue-50 border-blue-300 text-blue-800'
                : 'bg-stone-100 border-stone-200 text-stone-700 hover:bg-stone-200'
            }`}
            title={language === 'th' ? 'ดูเป็นภาษาฝรั่งเศส (โหมดควบคุม)' : 'Passer en thaïlandais'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === 'th' ? '🇹🇭 TH | ดู FR' : '🇫🇷 Mode FR'}</span>
          </button>

          {/* Access Code Button / Tier Badge */}
          {currentTier > 0 ? (
            <button
              id="nav-unlocked-tier-button"
              onClick={onOpenAccessModal}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {language === 'th'
                  ? `แพ็กเกจ ${currentTier}`
                  : `Pack ${currentTier}`}
              </span>
            </button>
          ) : (
            <button
              id="nav-enter-code-button"
              onClick={onOpenAccessModal}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 text-white shadow-xs hover:bg-rose-700 transition-colors active:scale-95"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>
                {language === 'th' ? 'ใส่รหัสเข้าเรียน' : 'Entrer un code'}
              </span>
            </button>
          )}

          {/* Creator settings button (gear) */}
          <button
            id="nav-creator-settings-button"
            onClick={onOpenSettingsModal}
            className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
            title={language === 'th' ? 'ตั้งค่าระบบและ Stripe' : 'Administration & Stripe'}
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
