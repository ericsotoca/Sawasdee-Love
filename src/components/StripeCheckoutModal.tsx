import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { OfferPlan, Language, TierLevel } from '../types';
import { DEFAULT_ACCESS_CODES } from '../data/accessCodes';

interface StripeCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: OfferPlan | null;
  stripeUrl: string;
  onPaymentSuccess: (tier: TierLevel, generatedCode: string) => void;
  language: Language;
}

export const StripeCheckoutModal: React.FC<StripeCheckoutModalProps> = ({
  isOpen,
  onClose,
  offer,
  stripeUrl,
  onPaymentSuccess,
  language,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [deliveredCode, setDeliveredCode] = useState('');

  if (!isOpen || !offer) return null;

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const code = DEFAULT_ACCESS_CODES[offer.tier][0];
      setDeliveredCode(code);
      setIsSuccess(true);
    }, 1200);
  };

  const handleConfirmAccess = () => {
    onPaymentSuccess(offer.tier, deliveredCode);
    onClose();
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-5 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-rose-100 text-rose-600">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                {language === 'th' ? 'การชำระเงินปลอดภัย' : 'Paiement sécurisé'}
              </h3>
              <p className="text-xs text-stone-500 font-mono">
                Stripe Payments • SSL 256-bit
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

        {!isSuccess ? (
          <>
            {/* Offer Recap Card */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                    {offer.th.badge || `Pack ${offer.tier}`}
                  </span>
                  <h4 className="font-bold text-stone-900 text-sm mt-1">
                    {language === 'th' ? offer.th.name : offer.fr.name}
                  </h4>
                </div>
                <div className="text-right">
                  <div className="text-lg font-extrabold text-stone-900">
                    {offer.priceThb.toLocaleString()} ฿
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">
                    ~ {offer.priceEur} €
                  </div>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {language === 'th' ? offer.th.shortDescription : offer.fr.shortDescription}
              </p>
            </div>

            {/* Reassurance */}
            <div className="flex items-center space-x-2 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {language === 'th'
                  ? 'ชำระครั้งเดียว เข้าใช้งานได้ตลอดชีพ ไม่มีค่าธรรมเนียมแอบแฝง'
                  : 'Paiement unique, accès à vie sans abonnement récurrent.'}
              </span>
            </div>

            {/* Action buttons */}
            <div className="space-y-2.5 pt-2">
              {/* Simulation button (Works instantly for demonstration and direct access) */}
              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold text-sm shadow-md hover:from-rose-700 hover:to-amber-700 transition-all flex items-center justify-center space-x-2 active:scale-98 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{language === 'th' ? 'กำลังดำเนินการ...' : 'Traitement sécurisé...'}</span>
                  </span>
                ) : (
                  <>
                    <span>
                      {language === 'th'
                        ? `ชำระเงิน ${offer.priceThb} บาท (รับรหัสทันที)`
                        : `Régler ${offer.priceEur} € (Test & Obtenir le code)`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Real Stripe link option if creator wants to test outbound Stripe */}
              {stripeUrl && stripeUrl.startsWith('http') && (
                <a
                  href={stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 font-semibold text-xs transition-colors flex items-center justify-center space-x-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                  <span>
                    {language === 'th'
                      ? 'เปิดหน้า Stripe Checkout ภายนอก'
                      : 'Ouvrir lien Stripe officiel'}
                  </span>
                </a>
              )}
            </div>
          </>
        ) : (
          /* Payment Success & Access Code Delivery */
          <div className="space-y-4 text-center py-2 animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-lg font-bold text-stone-900">
                {language === 'th' ? 'การชำระเงินสำเร็จ!' : 'Paiement confirmé !'}
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                {language === 'th'
                  ? 'นี่คือรหัสเข้าเรียนส่วนตัวของคุณ กรุณาบันทึกไว้:'
                  : 'Voici votre code d\'accès personnel à conserver précieusement :'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border-2 border-dashed border-amber-300">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                {language === 'th' ? 'รหัสผ่านของคุณ (Code)' : 'Votre code d\'accès'}
              </div>
              <div className="text-2xl font-mono font-extrabold text-stone-900 tracking-wider">
                {deliveredCode}
              </div>
            </div>

            <button
              onClick={handleConfirmAccess}
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {language === 'th'
                  ? 'ปลดล็อกและเริ่มเรียนทันที'
                  : 'Débloquer et commencer immédiatement'}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
