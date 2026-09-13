import React, { useState } from 'react';
import { Copy, Check, Sparkles, RefreshCw, Eye, MessageSquareQuote } from 'lucide-react';
import { Language } from '../../types';

interface ProfileBuilderProps {
  language: Language;
}

export const ProfileBuilderExercise: React.FC<ProfileBuilderProps> = ({ language }) => {
  const [hookChoice, setHookChoice] = useState(0);
  const [jobHobbyChoice, setJobHobbyChoice] = useState(0);
  const [seekingChoice, setSeekingChoice] = useState(0);
  const [questionChoice, setQuestionChoice] = useState(0);
  const [customName, setCustomName] = useState('May');
  const [customCity, setCustomCity] = useState('Bangkok');
  const [customProfession, setCustomProfession] = useState('hospitality');
  const [copied, setCopied] = useState(false);

  const hooks = [
    {
      th: 'Sawasdee ka! ☀️ รอยยิ้มอบอุ่นส่งตรงจาก [เมือง]. ดีใจที่ได้เปิดพื้นที่ทำความรู้จักกันตรงนี้นะคะ',
      en: 'Sawasdee ka! ☀️ A warm smile directly from {city}. Glad to welcome you to my world.',
      fr: 'Sawasdee ka ! ☀️ Un sourire chaleureux depuis {city}. Ravie de vous accueillir dans mon univers.'
    },
    {
      th: 'Bonjour & Sawasdee ka! 🌿 ฉันชื่อ [ชื่อ] คนสบายๆ ที่เชื่อมั่นในความจริงใจและรอยยิ้ม',
      en: 'Bonjour & Sawasdee ka! 🌿 I’m {name}, a positive and caring person who values true kindness.',
      fr: 'Bonjour & Sawasdee ka ! 🌿 Je m\'appelle {name}, une personne douce qui croit en la sincérité.'
    },
    {
      th: 'Sawasdee ka! ☕ ถ้าคุณชอบกาแฟหอมๆ บทสนทนาที่สบายใจ และการแลกเปลี่ยนวัฒนธรรม ยินดีที่ได้รู้จักค่ะ',
      en: 'Sawasdee ka! ☕ If you appreciate good coffee, peaceful conversations, and cultural sharing, nice to meet you!',
      fr: 'Sawasdee ka ! ☕ Si vous aimez le bon café, les échanges apaisants et le partage culturel, enchantée !'
    }
  ];

  const jobHobbies = [
    {
      th: 'ฉันทำงานด้าน [อาชีพ] เวลาว่างชอบทำอาหารไทยพื้นบ้าน จัดดอกไม้ และเดินเล่นรับลมเย็นๆ',
      en: 'I work in {profession}. In my free time, I love cooking traditional Thai dishes, arranging flowers, and peaceful walks.',
      fr: 'Je travaille dans {profession}. À mes heures perdues, j\'adore cuisiner des plats thaïs, fleurir ma maison et me promener au calme.'
    },
    {
      th: 'ในชีวิตประจำวันฉันทำงานด้าน [อาชีพ] และมีความสุขกับสิ่งเรียบง่าย เช่น การฟังเพลงอะคูสติก และดูแลต้นไม้',
      en: 'Daily, I work in {profession} and find joy in simple things: acoustic music, quiet reading, and caring for green plants.',
      fr: 'Au quotidien, je travaille dans {profession} et je savoure les plaisirs simples : musique acoustique et soins aux plantes.'
    },
    {
      th: 'ฉันรักการเรียนรู้สิ่งใหม่ๆ ชอบลองชิมอาหารอร่อยๆ และถ่ายภาพความทรงจำในมุมสวยๆ ของเมือง',
      en: 'I love learning new things, tasting delicious flavors, and capturing sweet moments with photography.',
      fr: 'J\'aime découvrir de nouveaux horizons, goûter de délicieuses saveurs et capturer les jolis moments du quotidien.'
    }
  ];

  const seekings = [
    {
      th: 'ฉันมองหาผู้ชายที่อบอุ่น ให้เกียรติซึ่งกันและกัน เพื่อร่วมสร้างความสัมพันธ์ที่มั่นคงและเปี่ยมด้วยเสียงหัวเราะ',
      en: 'I am looking for a thoughtful, respectful gentleman to build a peaceful, lasting relationship filled with laughter.',
      fr: 'Je recherche un homme doux et respectueux pour bâtir une relation sereine et complice, pleine de rires.'
    },
    {
      th: 'ฉันให้คุณค่ากับความซื่อสัตย์ การรับฟัง และการสื่อสารที่ตรงไปตรงมา พร้อมก้าวเดินไปด้วยกันอย่างเข้าใจ',
      en: 'I value honesty, attentive listening, and sincere communication to grow together step by step.',
      fr: 'J\'accorde une grande valeur à l\'honnêteté, l\'écoute attentive et la communication sincère pour avancer ensemble.'
    },
    {
      th: 'หวังว่าจะได้พบคนใจดี ที่ชอบแลกเปลี่ยนมุมมองชีวิต และพร้อมเปิดใจเรียนรู้วัฒนธรรมของกันและกัน',
      en: 'Hoping to meet a kind-hearted man who enjoys sharing life stories and discovering each other’s cultures.',
      fr: 'J\'espère rencontrer un homme bienveillant qui aime échanger sur la vie et découvrir nos cultures respectives.'
    }
  ];

  const questions = [
    {
      th: 'แล้วคุณล่ะคะ กิจกรรมโปรดที่ช่วยให้คุณผ่อนคลายในวันหยุดคืออะไร? 😊',
      en: 'And what about you, what is your favorite way to unwind on a relaxing weekend? 😊',
      fr: 'Et vous, quelle est votre activité préférée pour décompresser le week-end ? 😊'
    },
    {
      th: 'ถ้าคุณมาเมืองไทย เมนูอาหารไทยอย่างแรกที่คุณอยากลองชิมคืออะไรคะ? 🍜',
      en: 'If you visit Thailand, what is the first authentic dish you would love to taste? 🍜',
      fr: 'Si vous venez en Thaïlande, quel est le premier plat authentique que vous aimeriez goûter ? 🍜'
    },
    {
      th: 'อะไรคือสิ่งเล็กๆ ในแต่ละวันที่ทำให้คุณยิ้มได้เสมอคะ? ☀️',
      en: 'What is a little daily thing that always brings a smile to your face? ☀️',
      fr: 'Quelle est la petite chose du quotidien qui vous redonne toujours le sourire ? ☀️'
    }
  ];

  const buildEnglishProfile = () => {
    const p1 = hooks[hookChoice].en.replace('{name}', customName).replace('{city}', customCity);
    const p2 = jobHobbies[jobHobbyChoice].en.replace('{profession}', customProfession);
    const p3 = seekings[seekingChoice].en;
    const p4 = questions[questionChoice].en;
    return `${p1}\n\n${p2}\n\n${p3}\n\n${p4}`;
  };

  const buildFrenchTranslation = () => {
    const p1 = hooks[hookChoice].fr.replace('{name}', customName).replace('{city}', customCity);
    const p2 = jobHobbies[jobHobbyChoice].fr.replace('{profession}', customProfession);
    const p3 = seekings[seekingChoice].fr;
    const p4 = questions[questionChoice].fr;
    return `${p1}\n\n${p2}\n\n${p3}\n\n${p4}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildEnglishProfile());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-stone-200 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-stone-100 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-stone-900 text-lg">
              {language === 'th' ? 'แบบฝึกหัดปฏิบัติ: สร้างโปรไฟล์ของคุณทีละขั้นตอน' : 'Atelier pratique : Rédiger sa description étape par étape'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {language === 'th'
              ? 'เลือกข้อความและใส่ข้อมูลส่วนตัว ระบบจะรวบรวมเป็นโปรไฟล์ภาษาอังกฤษที่สุภาพ พร้อมคำแปลให้คุณคัดลอกไปใช้ได้ทันที'
              : 'Composez votre profil idéal : les phrases sélectionnées génèrent un texte anglais élégant et prêt à l\'emploi.'}
          </p>
        </div>
      </div>

      {/* Step 0: Personal touches */}
      <div className="bg-stone-50 p-3.5 sm:p-4 rounded-xl space-y-3">
        <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
          {language === 'th' ? 'ข้อมูลส่วนตัวของคุณ (ปรับเปลี่ยนได้):' : 'Vos informations personnalisées :'}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <span className="text-xs text-stone-500 block mb-1">
              {language === 'th' ? 'ชื่อเล่น (Nickname):' : 'Prénom :'}
            </span>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-sm font-medium text-stone-800 focus:outline-rose-500"
              placeholder="e.g. May, Nok, Fon"
            />
          </div>
          <div>
            <span className="text-xs text-stone-500 block mb-1">
              {language === 'th' ? 'จังหวัด/เมือง (City):' : 'Ville :'}
            </span>
            <input
              type="text"
              value={customCity}
              onChange={(e) => setCustomCity(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-sm font-medium text-stone-800 focus:outline-rose-500"
              placeholder="e.g. Bangkok, Chiang Mai"
            />
          </div>
          <div>
            <span className="text-xs text-stone-500 block mb-1">
              {language === 'th' ? 'สายงานทั่วไป (Field of work):' : 'Domaine d\'activité :'}
            </span>
            <input
              type="text"
              value={customProfession}
              onChange={(e) => setCustomProfession(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-sm font-medium text-stone-800 focus:outline-rose-500"
              placeholder="e.g. hospitality, design, finance"
            />
          </div>
        </div>
      </div>

      {/* Step 1: Hook */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center">1</span>
          <h4 className="text-sm font-semibold text-stone-900">
            {language === 'th' ? 'เลือกประโยคทักทายแรก (Accroche)' : 'Étape 1 : Choisir la phrase d\'accroche'}
          </h4>
        </div>
        <div className="space-y-2">
          {hooks.map((h, i) => (
            <button
              key={i}
              onClick={() => setHookChoice(i)}
              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                hookChoice === i
                  ? 'border-rose-500 bg-rose-50/50 text-rose-950 font-medium'
                  : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
              }`}
            >
              <div className="font-semibold text-stone-900 mb-0.5">
                {language === 'th' ? h.th.replace('[ชื่อ]', customName).replace('[เมือง]', customCity) : h.fr.replace('{name}', customName).replace('{city}', customCity)}
              </div>
              <div className="text-[11px] text-stone-500 font-mono">
                EN: {h.en.replace('{name}', customName).replace('{city}', customCity)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Personality & Work */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center">2</span>
          <h4 className="text-sm font-semibold text-stone-900">
            {language === 'th' ? 'บอกเล่าตัวตนและงานอดิเรก (Personnalité & Loisirs)' : 'Étape 2 : Partager votre quotidien et vos passions'}
          </h4>
        </div>
        <div className="space-y-2">
          {jobHobbies.map((jh, i) => (
            <button
              key={i}
              onClick={() => setJobHobbyChoice(i)}
              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                jobHobbyChoice === i
                  ? 'border-rose-500 bg-rose-50/50 text-rose-950 font-medium'
                  : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
              }`}
            >
              <div className="font-semibold text-stone-900 mb-0.5">
                {language === 'th' ? jh.th.replace('[อาชีพ]', customProfession) : jh.fr.replace('{profession}', customProfession)}
              </div>
              <div className="text-[11px] text-stone-500 font-mono">
                EN: {jh.en.replace('{profession}', customProfession)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 3: Seeking */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center">3</span>
          <h4 className="text-sm font-semibold text-stone-900">
            {language === 'th' ? 'สิ่งที่คุณมองหาในความสัมพันธ์ (Ce que vous recherchez)' : 'Étape 3 : Exprimer vos aspirations relationnelles'}
          </h4>
        </div>
        <div className="space-y-2">
          {seekings.map((s, i) => (
            <button
              key={i}
              onClick={() => setSeekingChoice(i)}
              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                seekingChoice === i
                  ? 'border-rose-500 bg-rose-50/50 text-rose-950 font-medium'
                  : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
              }`}
            >
              <div className="font-semibold text-stone-900 mb-0.5">
                {language === 'th' ? s.th : s.fr}
              </div>
              <div className="text-[11px] text-stone-500 font-mono">
                EN: {s.en}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 4: Closing Question */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center">4</span>
          <h4 className="text-sm font-semibold text-stone-900">
            {language === 'th' ? 'คำถามเปิดท้ายข้อความ (Invitation & Question)' : 'Étape 4 : Poser une question engageante'}
          </h4>
        </div>
        <div className="space-y-2">
          {questions.map((q, i) => (
            <button
              key={i}
              onClick={() => setQuestionChoice(i)}
              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                questionChoice === i
                  ? 'border-rose-500 bg-rose-50/50 text-rose-950 font-medium'
                  : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
              }`}
            >
              <div className="font-semibold text-stone-900 mb-0.5">
                {language === 'th' ? q.th : q.fr}
              </div>
              <div className="text-[11px] text-stone-500 font-mono">
                EN: {q.en}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Generated Result Preview Box */}
      <div className="mt-6 border-2 border-dashed border-rose-200 rounded-2xl p-4 sm:p-5 bg-rose-50/30">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <MessageSquareQuote className="w-5 h-5 text-rose-600" />
            <span className="font-bold text-stone-900 text-sm sm:text-base">
              {language === 'th' ? 'โปรไฟล์ฉบับพร้อมใช้งานของคุณ (ภาษาอังกฤษ)' : 'Votre profil prêt à publier (version anglaise)'}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-rose-600 text-white hover:bg-rose-700 active:scale-95'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (language === 'th' ? 'คัดลอกแล้ว!' : 'Copié !') : (language === 'th' ? 'คัดลอกข้อความ' : 'Copier')}</span>
          </button>
        </div>

        {/* English Text Output */}
        <div className="bg-white p-4 rounded-xl border border-stone-200 font-sans text-xs sm:text-sm leading-relaxed text-stone-800 whitespace-pre-line shadow-inner">
          {buildEnglishProfile()}
        </div>

        {/* French translation toggle for creator review */}
        <details className="mt-3 text-xs text-stone-600">
          <summary className="cursor-pointer font-medium text-stone-700 hover:text-stone-900 flex items-center space-x-1 py-1">
            <Eye className="w-3.5 h-3.5 text-stone-500" />
            <span>{language === 'th' ? 'ดูความหมายภาษาฝรั่งเศส (Traduction de contrôle FR)' : 'Voir la traduction française exacte'}</span>
          </summary>
          <div className="mt-2 p-3 bg-stone-100 rounded-lg text-stone-700 whitespace-pre-line leading-relaxed italic border border-stone-200">
            {buildFrenchTranslation()}
          </div>
        </details>
      </div>
    </div>
  );
};
