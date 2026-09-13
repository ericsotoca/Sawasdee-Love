import React from 'react';
import { CheckSquare, Square, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { ChecklistItem, Language } from '../types';

interface ChecklistProps {
  title: { th: string; fr: string };
  items: ChecklistItem[];
  completedIds: string[];
  onToggleItem: (id: string) => void;
  language: Language;
}

export const ChecklistSection: React.FC<ChecklistProps> = ({
  title,
  items,
  completedIds,
  onToggleItem,
  language,
}) => {
  const completedCount = items.filter((item) => completedIds.includes(item.id)).length;
  const percentage = Math.round((completedCount / items.length) * 100);
  const isAllDone = completedCount === items.length;

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-stone-200 shadow-sm space-y-5">
      <div className="flex items-start justify-between border-b border-stone-100 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-rose-600" />
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              {language === 'th' ? title.th : title.fr}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {language === 'th'
              ? 'ตรวจสอบทุกข้อเพื่อความมั่นใจ 100% ก่อนนำไปใช้งานจริง'
              : 'Validez chaque critère pour vous assurer de la qualité de votre démarche.'}
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-rose-600 font-mono">
            {completedCount}/{items.length}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-stone-400 font-medium">
          <span>{language === 'th' ? `ความพร้อม: ${percentage}%` : `Complété : ${percentage}%`}</span>
          {isAllDone && (
            <span className="text-emerald-600 font-bold flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'th' ? 'พร้อมเผยแพร่แล้ว!' : 'Prêt à 100% !'}</span>
            </span>
          )}
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-2.5">
        {items.map((item) => {
          const checked = completedIds.includes(item.id);
          return (
            <button
              key={item.id}
              onClick={() => onToggleItem(item.id)}
              className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start space-x-3 ${
                checked
                  ? 'bg-emerald-50/50 border-emerald-300 text-stone-800'
                  : 'bg-white border-stone-200 hover:border-stone-300 text-stone-700'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {checked ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Square className="w-5 h-5 text-stone-300" />
                )}
              </div>
              <span className={`text-xs sm:text-sm leading-relaxed ${checked ? 'font-medium text-stone-900' : ''}`}>
                {language === 'th' ? item.th : item.fr}
              </span>
            </button>
          );
        })}
      </div>

      {/* Congrats card */}
      {isAllDone && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center space-x-3 text-emerald-900">
          <Sparkles className="w-6 h-6 text-emerald-600 shrink-0" />
          <div className="text-xs sm:text-sm">
            <div className="font-bold">
              {language === 'th' ? 'ยินดีด้วยค่ะ! คุณพร้อมอย่างสมบูรณ์แบบ' : 'Félicitations ! Votre préparation est optimale.'}
            </div>
            <div className="text-emerald-800 mt-0.5">
              {language === 'th'
                ? 'คุณได้ปฏิบัติตามมาตรฐานที่ถูกต้อง ปลอดภัย และมีเสน่ห์ ขอให้พบเจอกับความสัมพันธ์ที่ดีและจริงใจนะคะ'
                : 'Vous disposez des meilleurs atouts pour une belle rencontre sincère et respectueuse.'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
