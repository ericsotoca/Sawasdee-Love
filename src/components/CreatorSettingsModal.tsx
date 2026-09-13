import React, { useState } from 'react';
import {
  X,
  Settings,
  Globe,
  CreditCard,
  KeyRound,
  CheckCircle2,
  ExternalLink,
  Save,
  HelpCircle,
  Sparkles,
  Github
} from 'lucide-react';
import { Language, TierLevel } from '../types';
import {
  getStripePaymentLinks,
  saveStripePaymentLinks,
  getCustomCodes,
  saveCustomCodes
} from '../data/accessCodes';

interface CreatorSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onToggleLanguage: () => void;
  currentTier: TierLevel | 0;
  onQuickSetTier: (tier: TierLevel | 0) => void;
}

export const CreatorSettingsModal: React.FC<CreatorSettingsModalProps> = ({
  isOpen,
  onClose,
  language,
  onToggleLanguage,
  currentTier,
  onQuickSetTier,
}) => {
  const [activeTab, setActiveTab] = useState<'stripe' | 'codes' | 'github'>('stripe');
  const [stripeLinks, setStripeLinks] = useState(getStripePaymentLinks());
  const [customCodes, setCustomCodesState] = useState(getCustomCodes());
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveStripe = (e: React.FormEvent) => {
    e.preventDefault();
    saveStripePaymentLinks(stripeLinks);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleSaveCodes = (e: React.FormEvent) => {
    e.preventDefault();
    saveCustomCodes(customCodes);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-stone-200 space-y-5 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                Panneau Créateur / Administration
              </h3>
              <p className="text-xs text-stone-500">
                Gestion des liens Stripe, codes d'accès et contrôle pédagogique
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Language Toggle Bar */}
        <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-stone-600" />
            <span className="text-xs font-semibold text-stone-800">
              Langue d'affichage du site :
            </span>
          </div>
          <button
            onClick={onToggleLanguage}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
              language === 'fr'
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-100'
            }`}
          >
            {language === 'fr' ? '🇫🇷 Français (Mode contrôle actif)' : '🇹🇭 Thaïlandais (Expérience utilisatrice)'}
          </button>
        </div>

        {/* Quick Tier Tester (Instant evaluation for the creator) */}
        <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-900 uppercase tracking-wide flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>Simulateur d'accès immédiat (Test créateur) :</span>
            </span>
            <span className="text-[11px] font-mono font-bold text-rose-700">
              Actuel : Tier {currentTier}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => onQuickSetTier(1)}
              className={`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                currentTier === 1
                  ? 'bg-rose-600 text-white border-rose-600'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-rose-100'
              }`}
            >
              Module 1
            </button>
            <button
              onClick={() => onQuickSetTier(2)}
              className={`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                currentTier === 2
                  ? 'bg-rose-600 text-white border-rose-600'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-rose-100'
              }`}
            >
              Modules 1+2
            </button>
            <button
              onClick={() => onQuickSetTier(3)}
              className={`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                currentTier === 3
                  ? 'bg-rose-600 text-white border-rose-600'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-rose-100'
              }`}
            >
              Modules 1+2+3
            </button>
            <button
              onClick={() => onQuickSetTier(0)}
              className="px-2 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 bg-white text-stone-500 hover:text-stone-800"
            >
              Réinitialiser
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 space-x-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('stripe')}
            className={`pb-2 px-1 border-b-2 transition-colors flex items-center space-x-1.5 ${
              activeTab === 'stripe'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-stone-400 hover:text-stone-700'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Liens Stripe (3 Offres)</span>
          </button>
          <button
            onClick={() => setActiveTab('codes')}
            className={`pb-2 px-1 border-b-2 transition-colors flex items-center space-x-1.5 ${
              activeTab === 'codes'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-stone-400 hover:text-stone-700'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Codes d'accès</span>
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`pb-2 px-1 border-b-2 transition-colors flex items-center space-x-1.5 ${
              activeTab === 'github'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-stone-400 hover:text-stone-700'
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Pages</span>
          </button>
        </div>

        {/* Tab 1: Stripe Configuration */}
        {activeTab === 'stripe' && (
          <form onSubmit={handleSaveStripe} className="space-y-4">
            <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded-xl">
              Vous pouvez coller ici vos liens de paiement Stripe générés depuis votre dashboard Stripe (menu <em>Paiements &gt; Liens de paiement</em>).
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Lien Stripe Offre 1 : Profil (490 THB / 14 €)
                </label>
                <input
                  type="url"
                  value={stripeLinks[1]}
                  onChange={(e) => setStripeLinks({ ...stripeLinks, 1: e.target.value })}
                  placeholder="https://buy.stripe.com/..."
                  className="w-full text-xs font-mono bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Lien Stripe Offre 2 : Profil + Vidéo (890 THB / 24 €)
                </label>
                <input
                  type="url"
                  value={stripeLinks[2]}
                  onChange={(e) => setStripeLinks({ ...stripeLinks, 2: e.target.value })}
                  placeholder="https://buy.stripe.com/..."
                  className="w-full text-xs font-mono bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Lien Stripe Offre 3 : Profil + Vidéo + Homme français (1 490 THB / 39 €)
                </label>
                <input
                  type="url"
                  value={stripeLinks[3]}
                  onChange={(e) => setStripeLinks({ ...stripeLinks, 3: e.target.value })}
                  placeholder="https://buy.stripe.com/..."
                  className="w-full text-xs font-mono bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-stone-500">
                Sauvegardé localement dans votre navigateur
              </span>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Enregistrer les liens</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Access Codes */}
        {activeTab === 'codes' && (
          <form onSubmit={handleSaveCodes} className="space-y-4">
            <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded-xl">
              Chaque offre possède ses codes d'accès uniques. Les utilisatrices reçoivent leur code sur la page de confirmation Stripe après leur achat.
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Codes Offre 1 (Module 1 seul) - Séparés par des virgules :
                </label>
                <input
                  type="text"
                  value={customCodes[1].join(', ')}
                  onChange={(e) =>
                    setCustomCodesState({
                      ...customCodes,
                      1: e.target.value.split(',').map((s) => s.trim())
                    })
                  }
                  className="w-full text-xs font-mono uppercase bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Codes Offre 2 (Module 1 + 2) :
                </label>
                <input
                  type="text"
                  value={customCodes[2].join(', ')}
                  onChange={(e) =>
                    setCustomCodesState({
                      ...customCodes,
                      2: e.target.value.split(',').map((s) => s.trim())
                    })
                  }
                  className="w-full text-xs font-mono uppercase bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Codes Offre 3 (Modules 1 + 2 + 3) :
                </label>
                <input
                  type="text"
                  value={customCodes[3].join(', ')}
                  onChange={(e) =>
                    setCustomCodesState({
                      ...customCodes,
                      3: e.target.value.split(',').map((s) => s.trim())
                    })
                  }
                  className="w-full text-xs font-mono uppercase bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-stone-500">
                Codes par défaut : SAWASDEE-P1, SAWASDEE-V2, SAWASDEE-VIP3
              </span>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Enregistrer les codes</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 3: GitHub Pages Deployment */}
        {activeTab === 'github' && (
          <div className="space-y-3 text-xs text-stone-700">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <h4 className="font-bold text-stone-900 flex items-center space-x-1.5">
                <Github className="w-4 h-4 text-stone-800" />
                <span>Déploiement gratuit automatique sur GitHub Pages</span>
              </h4>
              <p className="leading-relaxed">
                Le projet est 100% compatible GitHub Pages (architecture SPA React/Vite sans serveur payant). Le fichier <code>.github/workflows/deploy.yml</code> est prêt.
              </p>
            </div>

            <ol className="list-decimal list-inside space-y-2 pl-1 leading-relaxed">
              <li>Créez un dépôt sur GitHub (public ou privé).</li>
              <li>Envoyez le code avec <code>git push</code>.</li>
              <li>Dans GitHub, allez dans <strong>Settings &gt; Pages &gt; Build and deployment</strong> et choisissez <strong>GitHub Actions</strong>.</li>
              <li>Votre site sera immédiatement en ligne gratuitement sur <code>https://&lt;pseudo&gt;.github.io/&lt;repo&gt;/</code> !</li>
            </ol>
          </div>
        )}

        {savedSuccess && (
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Modifications enregistrées avec succès !</span>
          </div>
        )}
      </div>
    </div>
  );
};
