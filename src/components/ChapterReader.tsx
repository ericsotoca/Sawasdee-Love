import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  FileCheck2,
  Eye,
  Globe,
  Sparkles
} from 'lucide-react';
import { Chapter, Language } from '../types';

interface ChapterReaderProps {
  chapter: Chapter;
  chapterIndex: number;
  totalChapters: number;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onNext: () => void;
  onPrev: () => void;
  language: Language;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  chapter,
  chapterIndex,
  totalChapters,
  isCompleted,
  onToggleComplete,
  onNext,
  onPrev,
  language,
}) => {
  // Local toggle for French control view if user is in Thai mode
  const [showFrenchMirror, setShowFrenchMirror] = useState(false);

  const activeContent = language === 'th' ? chapter.th : chapter.fr;
  const controlContent = language === 'th' ? chapter.fr : chapter.th;

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-7 border border-stone-200/90 shadow-sm space-y-6">
      {/* Chapter Top Bar */}
      <div className="flex items-center justify-between border-b border-stone-100 pb-3.5">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-xs font-bold font-mono">
            {chapterIndex + 1}/{totalChapters}
          </span>
          <span className="text-xs font-medium text-stone-500">
            {language === 'th' ? 'บทเรียน' : 'Chapitre'}
          </span>
        </div>

        {/* Quick Language Mirror toggle for creator inspection */}
        <button
          onClick={() => setShowFrenchMirror(!showFrenchMirror)}
          className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors border ${
            showFrenchMirror
              ? 'bg-blue-50 border-blue-200 text-blue-800'
              : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
          }`}
          title="Afficher la traduction française pour contrôle"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{showFrenchMirror ? 'ซ่อนฉบับฝรั่งเศส' : '🇫🇷 ดูฉบับแปล FR'}</span>
        </button>
      </div>

      {/* Chapter Title */}
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
          {activeContent.title}
        </h2>
        {activeContent.subtitle && (
          <p className="text-xs sm:text-sm text-stone-500 font-medium">
            {activeContent.subtitle}
          </p>
        )}
      </div>

      {/* French Mirror Box (if toggled) */}
      {showFrenchMirror && (
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-950 text-xs sm:text-sm space-y-2">
          <div className="flex items-center space-x-1.5 font-bold text-blue-900">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Contrôle créateur français (Traduction miroir) :</span>
          </div>
          <p className="font-semibold">{controlContent.title}</p>
          <p className="leading-relaxed whitespace-pre-line">{controlContent.explanation}</p>
        </div>
      )}

      {/* 1. Clear & benevolent explanation */}
      <div className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
        {activeContent.explanation}
      </div>

      {/* 2. Key Bullet points */}
      {activeContent.bulletPoints && activeContent.bulletPoints.length > 0 && (
        <div className="space-y-2.5 bg-stone-50/70 p-4 rounded-xl border border-stone-200/70">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
            {language === 'th' ? 'ประเด็นสำคัญที่ควรรู้:' : 'Points essentiels à retenir :'}
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
            {activeContent.bulletPoints.map((pt, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span className="leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 3. Concrete Examples (Bad vs Good) */}
      {activeContent.examples && activeContent.examples.length > 0 && (
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
            {language === 'th' ? 'ตัวอย่างเปรียบเทียบในชีวิตจริง:' : 'Exemples concrets comparés :'}
          </span>
          {activeContent.examples.map((ex, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Bad Example */}
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-rose-700">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{language === 'th' ? 'แบบที่ควรหลีกเลี่ยง (À éviter)' : 'Formulation déconseillée'}</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-rose-100 text-xs sm:text-sm font-sans italic text-stone-800 whitespace-pre-line">
                  "{ex.bad.text}"
                </div>
                <p className="text-[11px] text-rose-800 leading-normal">
                  <strong>{language === 'th' ? 'เพราะเหตุใด:' : 'Pourquoi :'}</strong> {ex.bad.explanation}
                </p>
              </div>

              {/* Good Example */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{language === 'th' ? 'แบบที่แนะนำและมีเสน่ห์ (Recommandé)' : 'Formulation recommandée'}</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-emerald-100 text-xs sm:text-sm font-sans font-medium text-stone-800 whitespace-pre-line">
                  "{ex.good.text}"
                </div>
                <p className="text-[11px] text-emerald-800 leading-normal">
                  <strong>{language === 'th' ? 'จุดเด่น:' : 'Points forts :'}</strong> {ex.good.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Errors to avoid */}
      {activeContent.errorsToAvoid && activeContent.errorsToAvoid.length > 0 && (
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-800">
            <AlertTriangle className="w-4 h-4" />
            <span>{language === 'th' ? 'ข้อควรระวังสำคัญ:' : 'Erreurs à proscrire :'}</span>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-amber-900">
            {activeContent.errorsToAvoid.map((err, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>{err}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 5. Practical tip (Conseil pratique) */}
      {activeContent.practicalTip && (
        <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200/80 flex items-start space-x-3">
          <div className="p-1.5 rounded-lg bg-rose-500 text-white shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-rose-800 uppercase tracking-wide block">
              {language === 'th' ? 'คำแนะนำเชิงปฏิบัติ (Conseil pratique):' : 'Conseil pratique :'}
            </span>
            <p className="text-xs sm:text-sm text-stone-800 font-medium mt-0.5 leading-relaxed">
              {activeContent.practicalTip}
            </p>
          </div>
        </div>
      )}

      {/* Bottom Completion & Navigation Controls */}
      <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Toggle completed button */}
        <button
          onClick={onToggleComplete}
          className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border shadow-xs ${
            isCompleted
              ? 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100'
              : 'bg-stone-50 border-stone-300 text-stone-700 hover:bg-stone-100'
          }`}
        >
          <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-stone-400'}`} />
          <span>
            {isCompleted
              ? language === 'th' ? 'เรียนบทนี้เรียบร้อยแล้ว ✓' : 'Chapitre terminé ✓'
              : language === 'th' ? 'ทำเครื่องหมายว่าอ่านจบแล้ว' : 'Marquer comme lu'}
          </span>
        </button>

        {/* Prev / Next */}
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
          <button
            onClick={onPrev}
            disabled={chapterIndex === 0}
            className="flex-1 sm:flex-none flex items-center justify-center space-x-1 px-3 py-2 rounded-xl text-xs font-semibold border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'th' ? 'บทก่อนหน้า' : 'Précédent'}</span>
          </button>
          <button
            onClick={onNext}
            disabled={chapterIndex === totalChapters - 1}
            className="flex-1 sm:flex-none flex items-center justify-center space-x-1 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>{language === 'th' ? 'บทถัดไป' : 'Suivant'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
