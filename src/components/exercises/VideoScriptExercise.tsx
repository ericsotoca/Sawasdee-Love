import React, { useState, useEffect } from 'react';
import { Video, Play, Pause, RotateCcw, Copy, Check, Clock, Sparkles, Volume2, Eye } from 'lucide-react';
import { Language } from '../../types';

interface VideoScriptProps {
  language: Language;
}

export const VideoScriptExercise: React.FC<VideoScriptProps> = ({ language }) => {
  const [name, setName] = useState('Ploy');
  const [city, setCity] = useState('Chiang Mai');
  const [profession, setProfession] = useState('hospitality');
  const [hobby1, setHobby1] = useState('cooking local recipes');
  const [hobby2, setHobby2] = useState('morning yoga in nature');
  const [lookingFor, setLookingFor] = useState('a kind, thoughtful man with a warm sense of humor');
  
  // Timer state
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const scriptParts = {
    intro: {
      en: `Bonjour! Sawasdee ka. My name is ${name} from ${city}.`,
      fr: `Bonjour ! Sawasdee ka. Je m'appelle ${name} depuis ${city}.`,
      cue: '0 - 10 วินาที: ทักทายด้วยรอยยิ้ม ไหว้แบบไทยสวยๆ และสบตาเลนส์กล้อง'
    },
    passions: {
      en: `I work in ${profession}. When I have free time, I truly enjoy ${hobby1} and ${hobby2}. Simple joys always make me smile!`,
      fr: `Je travaille dans ${profession}. Pendant mes moments libres, j'aime particulièrement ${hobby1} et ${hobby2}. Les bonheurs simples me font toujours sourire !`,
      cue: '10 - 30 วินาที: เล่าด้วยสายตาเป็นประกาย ท่าทางสบายๆ'
    },
    intentions: {
      en: `I am hoping to meet ${lookingFor}, to share genuine laughter, learn from each other, and build a peaceful relationship.`,
      fr: `J'espère rencontrer ${lookingFor}, pour partager de vrais rires, apprendre l'un de l'autre et construire une relation sereine.`,
      cue: '30 - 45 วินาที: น้ำเสียงนุ่มนวล จริงใจ สบตาตรงเลนส์'
    },
    closing: {
      en: `Thank you for taking the time to listen to my video. Have a beautiful day, and à bientôt!`,
      fr: `Merci d'avoir pris le temps d'écouter ma vidéo. Passez une très belle journée, et à bientôt !`,
      cue: '45 - 55 วินาที: ส่งยิ้มหวาน โบกมือเบาๆ รอ 2 วินาทีก่อนกดหยุด'
    }
  };

  const fullScriptEn = `${scriptParts.intro.en}\n\n${scriptParts.passions.en}\n\n${scriptParts.intentions.en}\n\n${scriptParts.closing.en}`;
  const fullScriptFr = `${scriptParts.intro.fr}\n\n${scriptParts.passions.fr}\n\n${scriptParts.intentions.fr}\n\n${scriptParts.closing.fr}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullScriptEn);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Progress percentage out of 50s ideal
  const targetDuration = 50;
  const progressPercent = Math.min(100, Math.round((seconds / targetDuration) * 100));

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-stone-200 shadow-sm space-y-6">
      {/* Title */}
      <div className="flex items-start justify-between border-b border-stone-100 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Video className="w-5 h-5 text-rose-600" />
            <h3 className="font-bold text-stone-900 text-lg">
              {language === 'th' ? 'แบบฝึกหัดปฏิบัติ: สร้างสคริปต์และซ้อมถ่ายวิดีโอ 50 วินาที' : 'Atelier pratique : Scénario & Entraînement vidéo 50 secondes'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {language === 'th'
              ? 'กรอกข้อมูลของคุณเพื่อสร้างบทพูดภาษาอังกฤษที่กระชับ และใช้ตัวจับเวลาเพื่อฝึกพูดให้จบใน 45-55 วินาที'
              : 'Renseignez vos éléments pour générer votre script et entraînez-vous avec le chronomètre interactif.'}
          </p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-stone-50 p-4 rounded-xl">
        <div>
          <label className="text-xs font-semibold text-stone-600 block mb-1">
            {language === 'th' ? 'ชื่อเล่น (Nickname):' : 'Prénom :'}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-stone-800"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 block mb-1">
            {language === 'th' ? 'เมือง/จังหวัด (City):' : 'Ville :'}
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-stone-800"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 block mb-1">
            {language === 'th' ? 'งานอดิเรกที่ 1 (Hobby 1):' : 'Passion 1 :'}
          </label>
          <input
            type="text"
            value={hobby1}
            onChange={(e) => setHobby1(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-stone-800"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 block mb-1">
            {language === 'th' ? 'งานอดิเรกที่ 2 (Hobby 2):' : 'Passion 2 :'}
          </label>
          <input
            type="text"
            value={hobby2}
            onChange={(e) => setHobby2(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-stone-800"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-stone-600 block mb-1">
            {language === 'th' ? 'ลักษณะผู้ชายที่คุณมองหา:' : 'Ce que vous recherchez chez un homme :'}
          </label>
          <input
            type="text"
            value={lookingFor}
            onChange={(e) => setLookingFor(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-stone-800"
          />
        </div>
      </div>

      {/* Script Sections Display (Teleprompter style) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
            {language === 'th' ? 'บทพูด 4 ช่วง (พร้อมคำแนะนำจังหวะ):' : 'Découpage du script en 4 étapes :'}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-xs font-semibold text-rose-600 hover:text-rose-800"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (language === 'th' ? 'คัดลอกแล้ว' : 'Copié') : (language === 'th' ? 'คัดลอกทั้งหมด' : 'Tout copier')}</span>
          </button>
        </div>

        {/* 1. Intro */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-rose-200 transition-colors">
          <div className="flex items-center justify-between text-xs text-rose-600 font-bold mb-1">
            <span>{language === 'th' ? 'ช่วงที่ 1: คำทักทาย (0-10 วิ)' : 'Étape 1 : Accroche (0-10s)'}</span>
            <span className="text-stone-400 font-normal">⏱ ~10s</span>
          </div>
          <p className="text-sm font-medium text-stone-800 mb-1">{scriptParts.intro.en}</p>
          <p className="text-xs text-stone-500 italic">{language === 'th' ? scriptParts.intro.cue : scriptParts.intro.fr}</p>
        </div>

        {/* 2. Passions */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-rose-200 transition-colors">
          <div className="flex items-center justify-between text-xs text-rose-600 font-bold mb-1">
            <span>{language === 'th' ? 'ช่วงที่ 2: งานและสิ่งที่ชอบ (10-30 วิ)' : 'Étape 2 : Passions & univers (10-30s)'}</span>
            <span className="text-stone-400 font-normal">⏱ ~20s</span>
          </div>
          <p className="text-sm font-medium text-stone-800 mb-1">{scriptParts.passions.en}</p>
          <p className="text-xs text-stone-500 italic">{language === 'th' ? scriptParts.passions.cue : scriptParts.passions.fr}</p>
        </div>

        {/* 3. Intentions */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-rose-200 transition-colors">
          <div className="flex items-center justify-between text-xs text-rose-600 font-bold mb-1">
            <span>{language === 'th' ? 'ช่วงที่ 3: ความสัมพันธ์ที่มองหา (30-45 วิ)' : 'Étape 3 : Attentes amoureuses (30-45s)'}</span>
            <span className="text-stone-400 font-normal">⏱ ~15s</span>
          </div>
          <p className="text-sm font-medium text-stone-800 mb-1">{scriptParts.intentions.en}</p>
          <p className="text-xs text-stone-500 italic">{language === 'th' ? scriptParts.intentions.cue : scriptParts.intentions.fr}</p>
        </div>

        {/* 4. Closing */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-rose-200 transition-colors">
          <div className="flex items-center justify-between text-xs text-rose-600 font-bold mb-1">
            <span>{language === 'th' ? 'ช่วงที่ 4: คำทักทายปิดท้าย (45-50 วิ)' : 'Étape 4 : Conclusion souriante (45-50s)'}</span>
            <span className="text-stone-400 font-normal">⏱ ~5s</span>
          </div>
          <p className="text-sm font-medium text-stone-800 mb-1">{scriptParts.closing.en}</p>
          <p className="text-xs text-stone-500 italic">{language === 'th' ? scriptParts.closing.cue : scriptParts.closing.fr}</p>
        </div>
      </div>

      {/* Interactive Rehearsal Countdown Timer */}
      <div className="bg-stone-900 text-white p-5 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm">
              {language === 'th' ? 'เครื่องมือจับเวลาซ้อมพูดหน้ากล้อง' : 'Chronomètre d\'entraînement'}
            </span>
          </div>
          <span className="text-xs text-stone-400">
            {language === 'th' ? 'เป้าหมาย: 45 - 55 วินาที' : 'Cible idéale : 45 - 55s'}
          </span>
        </div>

        <div className="flex items-center justify-center space-x-6 py-2">
          <div className="text-4xl font-mono font-bold tracking-wider text-amber-400">
            {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTimer}
              className={`p-3 rounded-xl font-bold flex items-center space-x-2 transition-all active:scale-95 ${
                isActive ? 'bg-amber-500 text-stone-950' : 'bg-rose-600 text-white hover:bg-rose-700'
              }`}
            >
              {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="text-xs">
                {isActive ? (language === 'th' ? 'หยุดชั่วคราว' : 'Pause') : (language === 'th' ? 'เริ่มซ้อมพูด' : 'Lancer')}
              </span>
            </button>
            <button
              onClick={resetTimer}
              className="p-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="รีเซ็ต"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                seconds >= 45 && seconds <= 60
                  ? 'bg-emerald-400'
                  : seconds > 60
                  ? 'bg-rose-400'
                  : 'bg-amber-400'
              }`}
              style={{ width: `${Math.min(100, (seconds / 60) * 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-stone-400 font-mono">
            <span>0s</span>
            <span className="text-emerald-400">45s - 55s (โซนที่ดีที่สุด)</span>
            <span>60s</span>
          </div>
        </div>
      </div>

      {/* Creator French text view */}
      <details className="text-xs text-stone-600">
        <summary className="cursor-pointer font-medium text-stone-700 hover:text-stone-900 flex items-center space-x-1 py-1">
          <Eye className="w-3.5 h-3.5 text-stone-500" />
          <span>{language === 'th' ? 'ดูความหมายภาษาฝรั่งเศส (Traduction de contrôle FR)' : 'Voir la traduction française du script'}</span>
        </summary>
        <div className="mt-2 p-3 bg-stone-100 rounded-lg text-stone-700 whitespace-pre-line leading-relaxed italic border border-stone-200">
          {fullScriptFr}
        </div>
      </details>
    </div>
  );
};
