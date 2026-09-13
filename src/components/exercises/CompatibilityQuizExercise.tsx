import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertCircle, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../../types';

interface QuizQuestion {
  id: number;
  thTitle: string;
  frTitle: string;
  options: {
    id: string;
    th: string;
    fr: string;
    feedbackTh: string;
    feedbackFr: string;
    isIdeal: boolean;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    thTitle: '1. เมื่อมีความเห็นไม่ตรงกันในเรื่องเล็กๆ คุณคิดว่าวิธีรับมือที่ดีที่สุดคืออะไร?',
    frTitle: '1. Face à un désaccord mineur, quelle réaction privilégiez-vous ?',
    options: [
      {
        id: '1a',
        th: 'เงียบไว้และเก็บความไม่พอใจไว้ในใจ รอให้เขาคิดได้เอง',
        fr: 'Garder le silence et attendre qu\'il devine la cause de votre mécontentement.',
        feedbackTh: 'ในวัฒนธรรมฝรั่งเศส การเงียบอาจทำให้เขาคิดว่าไม่มีปัญหาอะไรเลย และอาจเกิดความอึดอัดสะสมได้',
        feedbackFr: 'Le non-dit crée l\'incompréhension. Les Français ont besoin d\'échanges verbaux clairs.',
        isIdeal: false
      },
      {
        id: '1b',
        th: 'อธิบายความรู้สึกและเหตุผลของคุณอย่างใจเย็นและสุภาพ เพื่อแลกเปลี่ยนมุมมองกัน',
        fr: 'Exprimer calmement votre ressenti avec bienveillance pour échanger vos points de vue.',
        feedbackTh: 'ยอดเยี่ยมมาก! การสื่อสารอย่างตรงไปตรงมาด้วยความสุภาพคือสิ่งที่สร้างความเคารพซึ่งกันและกันอย่างแท้จริง',
        feedbackFr: 'Excellent ! C\'est la clé d\'une relation équilibrée et durable avec un homme sérieux.',
        isIdeal: true
      }
    ]
  },
  {
    id: 2,
    thTitle: '2. หากผู้ชายที่คุยด้วยเริ่มขอร้องให้คุณโอนเงินช่วยค่าใช้จ่ายหรือชวนลงทุน คุณจะทำอย่างไร?',
    frTitle: '2. Si un homme rencontré en ligne vous demande une aide financière ou un investissement :',
    options: [
      {
        id: '2a',
        th: 'เห็นใจและโอนให้ เพราะคิดว่าเขาคงเดือดร้อนจริงๆ',
        fr: 'Lui transférer de l\'argent par compassion en pensant qu\'il est en difficulté.',
        feedbackTh: 'อันตรายมาก! นี่คือกลโกงของมิจฉาชีพ 100% ผู้ชายที่จริงจังและให้เกียรติจะไม่มีวันขอเงินจากคุณเด็ดขาด',
        feedbackFr: 'Alerte rouge absolue ! C\'est le mode opératoire des escrocs en ligne à 100 %.',
        isIdeal: false
      },
      {
        id: '2b',
        th: 'ปฏิเสธทันที ยุติการติดต่อ และบล็อกเพื่อความปลอดภัยของตนเอง',
        fr: 'Refuser catégoriquement, cesser tout échange et bloquer le contact sans hésiter.',
        feedbackTh: 'ถูกต้องที่สุด! การปกป้องตัวเองและเงินทองคือสิทธิ์เด็ดขาดของคุณ',
        feedbackFr: 'Parfait réflexe de sécurité. Ne faites jamais aucune concession sur ce point.',
        isIdeal: true
      }
    ]
  },
  {
    id: 3,
    thTitle: '3. คุณมองเรื่อง "พื้นที่ส่วนตัวและความเป็นอิสระ" ในชีวิตคู่อย่างไร?',
    frTitle: '3. Quelle est votre vision de l\'indépendance personnelle au sein du couple ?',
    options: [
      {
        id: '3a',
        th: 'ต้องอยู่ด้วยกันตลอดเวลา และรายงานทุกการเคลื่อนไหว 24 ชั่วโมง',
        fr: 'Être toujours ensemble et rendre compte de chaque déplacement 24h/24.',
        feedbackTh: 'ผู้ชายฝรั่งเศสส่วนใหญ่มักให้คุณค่ากับความเป็นอิสระ การผูกมัดแน่นเกินไปอาจทำให้เขารู้สึกอึดอัด',
        feedbackFr: 'Un excès de contrôle étouffe la complicité dans la culture occidentale.',
        isIdeal: false
      },
      {
        id: '3b',
        th: 'มีความสุขร่วมกัน และต่างคนต่างมีพื้นที่ทำงาน งานอดิเรก และเพื่อนฝูงของตัวเอง',
        fr: 'Partager de doux moments complices tout en respectant les activités et amis de chacun.',
        feedbackTh: 'สมบูรณ์แบบ! ความสัมพันธ์ที่ดีเกิดจากคนสองคนที่มีความมั่นคงในตัวเองและพร้อมมาร่วมแบ่งปันความสุข',
        feedbackFr: 'C\'est l\'équilibre parfait qui favorise l\'admiration mutuelle et la fidélité durable.',
        isIdeal: true
      }
    ]
  },
  {
    id: 4,
    thTitle: '4. สำหรับการนัดพบตัวจริงครั้งแรก สถานที่ใดที่คุณคิดว่าปลอดภัยและเหมาะสมที่สุด?',
    frTitle: '4. Pour un premier rendez-vous en vrai, quel cadre choisissez-vous ?',
    options: [
      {
        id: '4a',
        th: 'สถานที่สาธารณะที่มีผู้คนสัญจร ในช่วงเวลากลางวัน พร้อมบอกคนใกล้ชิดไว้',
        fr: 'Un café ou restaurant animé en plein jour, en informant une amie de confiance.',
        feedbackTh: 'ถูกต้องและปลอดภัย 100%! ความปลอดภัยในชีวิตจริงต้องมาก่อนเสมอ',
        feedbackFr: 'Indispensable pour votre sérénité et sécurité absolue.',
        isIdeal: true
      },
      {
        id: '4b',
        th: 'ไปพบที่ห้องพักส่วนตัว หรือสถานที่เปลี่ยวตามที่เขาร้องขอ',
        fr: 'Se rendre dans une chambre privée ou un endroit isolé s\'il insiste.',
        feedbackTh: 'อันตรายเด็ดขาด! ห้ามไปในที่รโหฐานในเดทแรก ไม่ว่าจะคุยกันถูกคอแค่ไหนในแชต',
        feedbackFr: 'À proscrire impérativement pour votre protection personnelle.',
        isIdeal: false
      }
    ]
  }
];

export const CompatibilityQuizExercise: React.FC<{ language: Language }> = ({ language }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSelect = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-stone-200 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-stone-100 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-rose-600" />
            <h3 className="font-bold text-stone-900 text-lg">
              {language === 'th'
                ? 'แบบประเมินความพร้อม: ผู้ชายแบบไหนที่เข้ากับคุณได้อย่างแท้จริง?'
                : 'Atelier de réflexion : Quel homme est réellement compatible avec vous ?'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {language === 'th'
              ? 'สำรวจทัศนคติและค่านิยมความสัมพันธ์ เพื่อสร้างความรักที่ปลอดภัย มีเกียรติ และมีความสุขระยะยาว'
              : 'Testez vos réflexes face aux situations concrètes d\'une rencontre interculturelle.'}
          </p>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {quizQuestions.map((q) => {
          const selectedOption = q.options.find((opt) => opt.id === answers[q.id]);
          return (
            <div key={q.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                {language === 'th' ? q.thTitle : q.frTitle}
              </h4>
              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isSelected = answers[q.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                        isSelected
                          ? opt.isIdeal
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium'
                            : 'border-rose-400 bg-rose-50 text-rose-950 font-medium'
                          : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        <span className="mt-0.5">
                          {isSelected ? (
                            opt.isIdeal ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-stone-300 shrink-0" />
                          )}
                        </span>
                        <span>{language === 'th' ? opt.th : opt.fr}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback box */}
              {selectedOption && (
                <div
                  className={`p-3 rounded-lg text-xs leading-relaxed ${
                    selectedOption.isIdeal
                      ? 'bg-emerald-100/70 text-emerald-900 border border-emerald-200'
                      : 'bg-rose-100/70 text-rose-900 border border-rose-200'
                  }`}
                >
                  <span className="font-bold block mb-0.5">
                    {language === 'th' ? '💡 ข้อคิดสำคัญ:' : '💡 Analyse bienveillante :'}
                  </span>
                  {language === 'th' ? selectedOption.feedbackTh : selectedOption.feedbackFr}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Box */}
      {answeredCount === quizQuestions.length && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200 space-y-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-rose-600" />
            <h4 className="font-bold text-stone-900 text-base">
              {language === 'th' ? 'บทสรุปความรักที่เข้ากันได้จริง' : 'Bilan de compatibilité'}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {language === 'th'
              ? 'ความสัมพันธ์ที่ยั่งยืนไม่ได้สร้างขึ้นจากการเสแสร้ง หรือการพยายามเอาใจคนอื่นจนสูญเสียตัวเอง แต่เกิดจากการค้นพบคนที่เคารพตัวตนของคุณ ให้เกียรติซึ่งกันและกัน และพร้อมจะสื่อสารอย่างเปิดเผย ความปลอดภัย ความซื่อสัตย์ และความสบายใจ คือหัวใจสำคัญที่สุดเสมอค่ะ'
              : 'Une relation harmonieuse repose sur la liberté d\'être soi-même, l\'honnêteté, le respect mutuel et une sécurité absolue. Ne faites aucun compromis sur vos valeurs fondamentales.'}
          </p>
        </div>
      )}
    </div>
  );
};
