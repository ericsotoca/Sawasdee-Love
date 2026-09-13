import React, { useState } from 'react';
import { X, KeyRound, CheckCircle2, AlertCircle, Sparkles, LogOut, ArrowRight } from 'lucide-react';
import { Language, TierLevel } from '../types';
import { verifyAccessCode, DEFAULT_ACCESS_CODES } from '../data/accessCodes';

interface AccessCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTier: TierLevel | 0;
  onUnlockTier: (tier: TierLevel, code: string) => void;
  onClearAccess: () => void;
  language: Language;
}

export const AccessCodeModal: React.FC<AccessCodeModalProps> = ({
  isOpen,
  onClose,
  currentTier,
  onUnlockTier,
  onClearAccess,
  language,
}) => {
  const [inputCode, setInputCode] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const res = verifyAccessCode(inputCode);
    if (res.valid && res.tier > 0) {
      onUnlockTier(res.tier as TierLevel, inputCode.trim().toUpperCase());
      setSuccessMsg(
        language === 'th'
          ? `ปลดล็อกแพ็กเกจ ${res.tier} เรียบร้อยแล้ว! เข้าสู่บทเรียนได้ทันทีค่ะ`
          : `Félicitations ! Pack ${res.tier} déverrouillé avec succès.`
      );
      setTimeout(() => {
        onClose();
        setSuccessMsg(null);
        setInputCode('');
      }, 1500);
    } else {
      setErrorMsg(
        language === 'th'
          ? 'รหัสไม่ถูกต้อง กรุณาตรวจสอบรหัสผ่านที่คุณได้รับจากอีเมล'
          : 'Code d\'accès incorrect. Veuillez vérifier le code reçu après paiement.'
      );
    }
  };

  const handleApplyPreset = (code: string) => {
    setInputCode(code);
    setErrorMsg(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-5 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-rose-100 text-rose-600">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                {language === 'th' ? 'ใส่รหัสเข้าเรียน' : 'Accéder à votre formation'}
              </h3>
              <p className="text-xs text-stone-500">
                {language === 'th' ? 'ไม่ต้องสร้างบัญชี เพียงกรอกรหัสผ่านของคุณ' : 'Sans création de compte : saisissez votre code'}
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

        {/* Current status if unlocked */}
        {currentTier > 0 && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 text-emerald-900 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>
                {language === 'th'
                  ? `ขณะนี้คุณปลดล็อก: แพ็กเกจที่ ${currentTier}`
                  : `Statut actuel : Pack ${currentTier} déverrouillé`}
              </span>
            </div>
            <button
              onClick={onClearAccess}
              className="text-stone-500 hover:text-rose-600 flex items-center space-x-1 font-semibold underline"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{language === 'th' ? 'ออกจากระบบ' : 'Déconnexion'}</span>
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-stone-700 block mb-1">
              {language === 'th' ? 'รหัสเข้าเรียน (Code d\'accès):' : 'Code d\'accès :'}
            </label>
            <input
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="e.g. SAWASDEE-VIP3"
              className="w-full uppercase font-mono tracking-wider text-center text-base font-bold bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-stone-900 focus:bg-white focus:outline-rose-500 focus:border-rose-500 transition-colors"
              autoFocus
            />
          </div>

          {errorMsg && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold text-sm shadow-md hover:from-rose-700 hover:to-amber-700 transition-all flex items-center justify-center space-x-2 active:scale-98"
          >
            <span>{language === 'th' ? 'ยืนยันรหัสเพื่อเข้าเรียน' : 'Valider mon code d\'accès'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Demo / Quick Test Shortcuts for Evaluators & Creator */}
        <div className="pt-3 border-t border-stone-100 space-y-2">
          <div className="flex items-center space-x-1.5 text-[11px] text-stone-500 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{language === 'th' ? 'รหัสทดสอบด่วน (Codes de démonstration):' : 'Codes d\'accès démo :'}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleApplyPreset(DEFAULT_ACCESS_CODES[1][0])}
              className="px-2 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-[11px] font-mono text-stone-700 text-center font-medium"
            >
              Pack 1
              <span className="block text-[9px] text-stone-500">{DEFAULT_ACCESS_CODES[1][0]}</span>
            </button>
            <button
              onClick={() => handleApplyPreset(DEFAULT_ACCESS_CODES[2][0])}
              className="px-2 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-[11px] font-mono text-stone-700 text-center font-medium"
            >
              Pack 2
              <span className="block text-[9px] text-stone-500">{DEFAULT_ACCESS_CODES[2][0]}</span>
            </button>
            <button
              onClick={() => handleApplyPreset(DEFAULT_ACCESS_CODES[3][0])}
              className="px-2 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-[11px] font-mono text-stone-700 text-center font-medium"
            >
              Pack 3 (VIP)
              <span className="block text-[9px] text-stone-500">{DEFAULT_ACCESS_CODES[3][0]}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
