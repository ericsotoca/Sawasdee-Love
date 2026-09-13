import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  PenTool,
  ClipboardCheck,
  Lock,
  Sparkles
} from 'lucide-react';
import { ModuleData, Language, TierLevel } from '../types';
import { ChapterReader } from './ChapterReader';
import { ChecklistSection } from './ChecklistSection';
import { ProfileBuilderExercise } from './exercises/ProfileBuilderExercise';
import { VideoScriptExercise } from './exercises/VideoScriptExercise';
import { CompatibilityQuizExercise } from './exercises/CompatibilityQuizExercise';

interface ModuleViewProps {
  module: ModuleData;
  language: Language;
  currentTier: TierLevel | 0;
  completedChapters: string[];
  completedChecklists: string[];
  onToggleChapterComplete: (chapterId: string) => void;
  onToggleChecklistItem: (itemId: string) => void;
  onBackToHome: () => void;
  onOpenAccessModal: () => void;
}

export const ModuleView: React.FC<ModuleViewProps> = ({
  module,
  language,
  currentTier,
  completedChapters,
  completedChecklists,
  onToggleChapterComplete,
  onToggleChecklistItem,
  onBackToHome,
  onOpenAccessModal,
}) => {
  const [activeTab, setActiveTab] = useState<'chapters' | 'exercise' | 'checklist'>('chapters');
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);

  const isUnlocked = currentTier >= module.tierRequired;
  const currentChapter = module.chapters[selectedChapterIndex];

  // Calculate module progress
  const finishedChaptersCount = module.chapters.filter((ch) => completedChapters.includes(ch.id)).length;
  const totalChapters = module.chapters.length;
  const progressPercent = Math.round((finishedChaptersCount / totalChapters) * 100);

  if (!isUnlocked) {
    return (
      <div className="py-12 max-w-lg mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
          <Lock className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            {language === 'th' ? 'โมดูลนี้ต้องการรหัสเข้าเรียน' : 'Accès réservé : Code requis'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {language === 'th'
              ? `โมดูลนี้อยู่ในแพ็กเกจที่ ${module.tierRequired} กรุณากรอกรหัสเข้าเรียนของคุณ หรือสมัครเรียนเพื่อรับรหัสทันที`
              : `Ce module nécessite l'accès au Pack ${module.tierRequired}. Entrez votre code d'accès pour déverrouiller ce contenu.`}
          </p>
        </div>
        <div className="flex justify-center space-x-3">
          <button
            onClick={onBackToHome}
            className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-colors"
          >
            {language === 'th' ? 'กลับหน้าแรก' : 'Retour à l\'accueil'}
          </button>
          <button
            onClick={onOpenAccessModal}
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md transition-colors"
          >
            {language === 'th' ? 'กรอกรหัสเข้าเรียน' : 'Saisir un code'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header & Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBackToHome}
            className="p-2 rounded-xl bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 transition-colors shrink-0"
            title="Retour"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">
              {language === 'th' ? module.th.badge : module.fr.badge}
            </span>
            <h1 className="text-lg sm:text-xl font-bold text-stone-900 leading-tight">
              {language === 'th' ? module.th.title : module.fr.title}
            </h1>
          </div>
        </div>

        {/* Progress Bar Badge */}
        <div className="flex items-center space-x-3 self-end sm:self-auto">
          <div className="w-28 sm:w-36 bg-stone-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-rose-500 to-amber-500 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-bold text-stone-700 font-mono">
            {finishedChaptersCount}/{totalChapters}
          </span>
        </div>
      </div>

      {/* Tabs Navigation (Chapters / Exercise / Checklist) */}
      <div className="grid grid-cols-3 gap-2 p-1 bg-stone-100 rounded-2xl">
        <button
          onClick={() => setActiveTab('chapters')}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
            activeTab === 'chapters'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{language === 'th' ? 'บทเรียน' : 'Chapitres'}</span>
        </button>

        <button
          onClick={() => setActiveTab('exercise')}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
            activeTab === 'exercise'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <PenTool className="w-3.5 h-3.5 shrink-0 text-rose-600" />
          <span className="truncate">{language === 'th' ? 'แบบฝึกหัด' : 'Atelier'}</span>
        </button>

        <button
          onClick={() => setActiveTab('checklist')}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
            activeTab === 'checklist'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <ClipboardCheck className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
          <span className="truncate">{language === 'th' ? 'เช็กลิสต์' : 'Checklist'}</span>
        </button>
      </div>

      {/* Tab 1: Chapters View */}
      {activeTab === 'chapters' && (
        <div className="space-y-6">
          {/* Horizontal scrollable chapters pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {module.chapters.map((ch, idx) => {
              const isDone = completedChapters.includes(ch.id);
              const isCurrent = idx === selectedChapterIndex;
              return (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChapterIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 border shrink-0 ${
                    isCurrent
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : isDone
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <span className="text-[10px] font-mono">{idx + 1}</span>
                  )}
                  <span>
                    {language === 'th' ? `บทที่ ${idx + 1}` : `Ch. ${idx + 1}`}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Chapter Reader */}
          <ChapterReader
            chapter={currentChapter}
            chapterIndex={selectedChapterIndex}
            totalChapters={totalChapters}
            isCompleted={completedChapters.includes(currentChapter.id)}
            onToggleComplete={() => onToggleChapterComplete(currentChapter.id)}
            onNext={() => {
              if (selectedChapterIndex < totalChapters - 1) {
                setSelectedChapterIndex(selectedChapterIndex + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                setActiveTab('exercise');
              }
            }}
            onPrev={() => {
              if (selectedChapterIndex > 0) {
                setSelectedChapterIndex(selectedChapterIndex - 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            language={language}
          />
        </div>
      )}

      {/* Tab 2: Practical Interactive Exercise */}
      {activeTab === 'exercise' && (
        <div>
          {module.exerciseType === 'profile_builder' && (
            <ProfileBuilderExercise language={language} />
          )}
          {module.exerciseType === 'video_script' && (
            <VideoScriptExercise language={language} />
          )}
          {module.exerciseType === 'compatibility_assessment' && (
            <CompatibilityQuizExercise language={language} />
          )}
        </div>
      )}

      {/* Tab 3: Final Checklist */}
      {activeTab === 'checklist' && (
        <ChecklistSection
          title={module.checklistTitle}
          items={module.checklist}
          completedIds={completedChecklists}
          onToggleItem={onToggleChecklistItem}
          language={language}
        />
      )}
    </div>
  );
};
