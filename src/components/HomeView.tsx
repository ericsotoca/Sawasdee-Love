import React from 'react';
import {
  Heart,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Video,
  FileText,
  Compass,
  ArrowRight,
  KeyRound,
  Lock,
  MessageCircle,
  Eye
} from 'lucide-react';
import { Language, TierLevel, OfferPlan } from '../types';
import { offerPlans } from '../data/offers';
import { module1Data } from '../data/module1';
import { module2Data } from '../data/module2';
import { module3Data } from '../data/module3';

interface HomeViewProps {
  language: Language;
  currentTier: TierLevel | 0;
  onSelectOffer: (offer: OfferPlan) => void;
  onOpenAccessModal: () => void;
  onSelectModule: (moduleId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  language,
  currentTier,
  onSelectOffer,
  onOpenAccessModal,
  onSelectModule,
}) => {
  const modules = [module1Data, module2Data, module3Data];

  return (
    <div className="space-y-10 pb-16">
      {/* Benevolent Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-rose-50/80 via-white to-stone-50 p-6 sm:p-10 border border-rose-100 shadow-xs">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-rose-100/70 text-rose-800 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
            <span>
              {language === 'th'
                ? 'หลักสูตรจริงใจ อบอุ่น และปลอดภัยสำหรับหญิงไทย'
                : 'Formation bienveillante, réaliste et respectueuse'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            {language === 'th' ? (
              <>
                นำเสนอตัวตนอย่างมีเสน่ห์ และเข้าใจ{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600">
                  หนุ่มฝรั่งเศส
                </span>{' '}
                อย่างแท้จริง
              </>
            ) : (
              <>
                Sublimez votre profil et créez une{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600">
                  vraie complicité
                </span>{' '}
                avec un homme français
              </>
            )}
          </h1>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {language === 'th'
              ? 'เรียนรู้วิธีเขียนโปรไฟล์ให้สะท้อนตัวตนจริง ถ่ายวิดีโอแนะนำตัวด้วยมือถืออย่างมั่นใจ และเข้าใจความแตกต่างทางวัฒนธรรม เพื่อสร้างความสัมพันธ์ที่มีคุณภาพและปลอดภัย'
              : 'Apprenez à rédiger une description sincère, réussir votre vidéo au smartphone et décrypter les nuances culturelles françaises pour une relation saine et durable.'}
          </p>

          {/* Quick Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#pricing-offers"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold text-sm shadow-md hover:from-rose-700 hover:to-amber-700 transition-all flex items-center justify-center space-x-2 active:scale-98"
            >
              <span>{language === 'th' ? 'เลือกแพ็กเกจเรียนรู้' : 'Découvrir les 3 offres'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenAccessModal}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 text-stone-700 font-semibold text-sm transition-colors flex items-center justify-center space-x-2"
            >
              <KeyRound className="w-4 h-4 text-stone-500" />
              <span>{language === 'th' ? 'มีรหัสอยู่แล้ว? กรอกที่นี่' : 'J\'ai déjà mon code d\'accès'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3 Pedagogical Offer Cards */}
      <section id="pricing-offers" className="space-y-6">
        <div className="text-center space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            {language === 'th' ? '3 แพ็กเกจการเรียนรู้ที่ออกแบบมาเพื่อคุณ' : '3 Offres Pédagogiques Claires & Transparentes'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
            {language === 'th'
              ? 'เลือกแพ็กเกจที่ตรงกับความต้องการของคุณ ชำระเงินครั้งเดียว เข้าเรียนได้ตลอดชีพ'
              : 'Paiement unique sans abonnement récurrent. Recevez immédiatement votre code d\'accès.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {offerPlans.map((offer) => {
            const isUnlocked = currentTier >= offer.tier;
            const isPopular = offer.tier === 2;
            const isVip = offer.tier === 3;

            return (
              <div
                key={offer.id}
                className={`relative flex flex-col rounded-3xl p-6 transition-all duration-200 ${
                  isVip
                    ? 'bg-gradient-to-b from-amber-50/60 via-white to-rose-50/40 border-2 border-amber-300 shadow-md ring-2 ring-amber-200/50'
                    : isPopular
                    ? 'bg-white border-2 border-rose-300 shadow-sm'
                    : 'bg-white border border-stone-200 shadow-xs'
                }`}
              >
                {/* Badge top */}
                {offer.th.badge && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs tracking-wider ${
                        isVip
                          ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white'
                          : isPopular
                          ? 'bg-rose-600 text-white'
                          : 'bg-stone-800 text-white'
                      }`}
                    >
                      {language === 'th' ? offer.th.badge : offer.fr.badge}
                    </span>
                  </div>
                )}

                {/* Offer Header */}
                <div className="space-y-2 mt-2">
                  <h3 className="font-bold text-stone-900 text-lg">
                    {language === 'th' ? offer.th.name : offer.fr.name}
                  </h3>
                  <p className="text-xs text-stone-600 min-h-[32px] leading-relaxed">
                    {language === 'th' ? offer.th.shortDescription : offer.fr.shortDescription}
                  </p>
                </div>

                {/* Pricing */}
                <div className="my-5 py-3 border-y border-stone-100 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-extrabold text-stone-900">
                      {offer.priceThb.toLocaleString()}
                    </span>
                    <span className="text-stone-500 text-sm font-semibold ml-1">฿</span>
                  </div>
                  <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2 py-1 rounded-md font-mono">
                    ~ {offer.priceEur} €
                  </span>
                </div>

                {/* Inclusions List */}
                <div className="space-y-2.5 flex-1 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                    {language === 'th' ? 'สิ่งที่คุณจะได้รับ:' : 'Contenu inclus :'}
                  </span>
                  <ul className="space-y-2 text-xs text-stone-600">
                    {(language === 'th' ? offer.th.features : offer.fr.features).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                {isUnlocked ? (
                  <button
                    onClick={() => onSelectModule(`module-${offer.tier}`)}
                    className="w-full py-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center justify-center space-x-1.5 hover:bg-emerald-100 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{language === 'th' ? 'เข้าสู่บทเรียน (ปลดล็อกแล้ว)' : 'Accéder au module'}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectOffer(offer)}
                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-sm active:scale-98 ${
                      isVip
                        ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white hover:from-amber-600 hover:to-rose-700'
                        : isPopular
                        ? 'bg-rose-600 text-white hover:bg-rose-700'
                        : 'bg-stone-900 text-white hover:bg-stone-800'
                    }`}
                  >
                    <span>{language === 'th' ? offer.th.ctaText : offer.fr.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Modules Curriculum Preview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-stone-900">
              {language === 'th' ? 'หลักสูตรทั้ง 3 โมดูล' : 'Programme détaillé des 3 Modules'}
            </h2>
            <p className="text-xs text-stone-500">
              {language === 'th' ? 'คลิกที่โมดูลเพื่อดูบทเรียนและเริ่มเรียนรู้' : 'Cliquez sur un module pour consulter ses chapitres'}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {modules.map((m, idx) => {
            const isUnlocked = currentTier >= m.tierRequired;
            const title = language === 'th' ? m.th.title : m.fr.title;
            const desc = language === 'th' ? m.th.description : m.fr.description;
            const duration = language === 'th' ? m.th.duration : m.fr.duration;

            return (
              <div
                key={m.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isUnlocked
                    ? 'bg-white border-stone-200 hover:border-rose-300 hover:shadow-xs'
                    : 'bg-stone-50/70 border-stone-200 opacity-90'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 text-xs font-bold font-mono">
                        MOD {idx + 1}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">{duration}</span>
                      {!isUnlocked && (
                        <span className="text-[10px] font-semibold bg-stone-200 text-stone-600 px-1.5 py-0.5 rounded-sm flex items-center space-x-1">
                          <Lock className="w-3 h-3" />
                          <span>{language === 'th' ? `ต้องใช้รหัสแพ็กเกจ ${m.tierRequired}` : `Requis : Pack ${m.tierRequired}`}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-stone-900 text-base sm:text-lg">{title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed max-w-xl">{desc}</p>
                  </div>

                  <div className="shrink-0">
                    {isUnlocked ? (
                      <button
                        onClick={() => onSelectModule(m.id)}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
                      >
                        <span>{language === 'th' ? 'เข้าเรียนโมดูลนี้' : 'Ouvrir le module'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={onOpenAccessModal}
                        className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white border border-stone-300 hover:border-stone-400 text-stone-700 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors"
                      >
                        <KeyRound className="w-3.5 h-3.5 text-rose-500" />
                        <span>{language === 'th' ? 'ใส่รหัสเพื่อปลดล็อก' : 'Débloquer avec un code'}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benevolent Reassurance Banner */}
      <section className="p-5 sm:p-6 rounded-3xl bg-stone-100/70 border border-stone-200/80 space-y-3">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="font-bold text-stone-900 text-sm sm:text-base">
            {language === 'th'
              ? 'หลักการความปลอดภัยและความจริงใจของเรา'
              : 'Engagement éthique & sécurité bienveillante'}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600">
          <div className="p-3 bg-white rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">
              {language === 'th' ? '1. ปลอดภัยเป็นอันดับหนึ่ง' : '1. Sécurité absolue'}
            </span>
            {language === 'th'
              ? 'ไม่มีการขอข้อมูลทางการเงิน ห้ามโอนเงินให้คนที่เจอทางเน็ตเด็ดขาด'
              : 'Protection stricte de vos données privées et règles anti-arnaques intransigeantes.'}
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">
              {language === 'th' ? '2. ไม่มีการชักจูงหรือหลอกล่อ' : '2. Zéro manipulation'}
            </span>
            {language === 'th'
              ? 'ไม่สอนให้เสแสร้ง เน้นความจริงใจ และการเคารพซึ่งกันและกันอย่างแท้จริง'
              : 'Aucune technique de séduction manipulatoire : valorisation de votre authenticité.'}
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">
              {language === 'th' ? '3. เข้าใจความหลากหลาย' : '3. Respect des nuances'}
            </span>
            {language === 'th'
              ? 'ไม่เหมารวมผู้ชายฝรั่งเศส ทุกคนมีความคิดและบุคลิกเฉพาะตัว'
              : 'Les hommes français sont présentés avec nuance et diversité, sans stéréotype réducteur.'}
          </div>
        </div>
      </section>
    </div>
  );
};
