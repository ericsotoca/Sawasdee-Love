import { ModuleData } from '../types';

export const module3Data: ModuleData = {
  id: 'module-3',
  tierRequired: 3,
  th: {
    title: 'โมดูลที่ 3: ทำความเข้าใจและสื่อสารกับหนุ่มฝรั่งเศสอย่างลึกซึ้ง',
    tagline: 'คู่มือความเข้าใจทางวัฒนธรรม การสนทนาอย่างมีเสน่ห์ และความปลอดภัยในความสัมพันธ์',
    description: 'เนื้อหาพรีเมียมที่เจาะลึกความแตกต่างทางวัฒนธรรม วิธีสร้างบทสนทนาที่มีคุณภาพ วิธีสังเกตสัญญาณคนจริงใจ และความปลอดภัยสูงสุด',
    duration: 'ใช้เวลาประมาณ 45-60 นาที',
    badge: 'เนื้อหาพรีเมียมเจาะลึก',
  },
  fr: {
    title: 'Module 3 : Comprendre et aborder un homme français',
    tagline: 'Nuances culturelles, art de la conversation et sécurité relationnelle',
    description: 'Le contenu à plus forte valeur ajoutée : décryptez les codes culturels avec nuance, initiez de vraies discussions complices et apprenez à repérer un homme réellement sérieux.',
    duration: 'Durée estimée : 45-60 minutes',
    badge: 'Valeur ajoutée maximale',
  },
  exerciseType: 'compatibility_assessment',
  checklistTitle: {
    th: 'เช็กลิสต์: คุณพร้อมที่จะเริ่มความสัมพันธ์กับหนุ่มฝรั่งเศสหรือยัง?',
    fr: 'Checklist finale : Suis-je prête à commencer une relation avec un homme français ?',
  },
  checklist: [
    {
      id: 'm3-c1',
      th: 'เข้าใจว่าหนุ่มฝรั่งเศสแต่ละคนมีความคิด บุคลิก และวิถีชีวิตที่แตกต่างกัน ไม่เหมารวมว่าเป็นเหมือนกันทุกคน',
      fr: 'Je comprends que chaque homme français est unique et qu\'il n\'existe aucun stéréotype absolu.',
      category: 'cultural_mindset'
    },
    {
      id: 'm3-c2',
      th: 'พร้อมที่จะสื่อสารอย่างตรงไปตรงมา และกล้าบอกความต้องการหรือความรู้สึกของตัวเองด้วยความสุภาพ',
      fr: 'Je suis prête à exprimer mes ressentis avec clarté et bienveillance sans détour excessif.',
      category: 'communication'
    },
    {
      id: 'm3-c3',
      th: 'รู้หลักการสร้างบทสนทนาที่มีการแลกเปลี่ยนความคิดเห็น ไม่ถามตอบแบบฝ่ายเดียว',
      fr: 'Je sais alterner questions ouvertes et anecdotes pour une vraie conversation vivante.',
      category: 'conversation'
    },
    {
      id: 'm3-c4',
      th: 'จำสัญญาณเตือนภัย (Red Flags) ได้แม่นยำ และตั้งใจแน่วแน่ว่าจะไม่มีวันส่งเงินให้คนที่รู้จักทางออนไลน์เด็ดขาด',
      fr: 'Je connais les signaux d\'alerte et je ne verserai JAMAIS d\'argent à un inconnu en ligne.',
      category: 'safety'
    },
    {
      id: 'm3-c5',
      th: 'ตระหนักว่าการนัดเจอตัวจริงต้องทำในสถานที่สาธารณะ และบอกคนใกล้ชิดที่ไว้ใจได้เสมอ',
      fr: 'Je sais que la première rencontre doit impérativement avoir lieu dans un lieu public sécurisé.',
      category: 'real_meeting'
    },
    {
      id: 'm3-c6',
      th: 'ให้ความสำคัญกับ "ความเข้ากันได้จริง (Compatibilité)" และความสุขระยะยาว มากกว่าแค่สัญชาติของเขา',
      fr: 'Mon objectif est de trouver un homme compatible avec mes valeurs de vie profondes.',
      category: 'compatibility'
    }
  ],
  chapters: [
    // PARTIE 1
    {
      id: 'm3-ch1',
      order: 1,
      th: {
        id: 'm3-ch1',
        title: 'ส่วนที่ 1.1: การสื่อสารทางตรงและความเกรงใจ',
        explanation: 'สิ่งสำคัญที่สุดที่ต้องเข้าใจคือ "ผู้ชายฝรั่งเศสไม่ได้คิดเหมือนกันทุกคน" แต่ละคนมีครอบครัว การศึกษา และประสบการณ์ที่แตกต่างกัน อย่างไรก็ตาม ในบริบทวัฒนธรรมตะวันตก มักพบว่าผู้ชายฝรั่งเศสจำนวนไม่น้อยคุ้นเคยกับการสื่อสารที่ตรงไปตรงมา',
        bulletPoints: [
          'ความตรงไปตรงมาไม่ใช่ความหยาบคาย: ในขณะที่คนไทยเน้น "ความเกรงใจ" และมักไม่กล้าปฏิเสธตรงๆ ผู้ชายฝรั่งเศสหลายคนกลับมองว่าการพูดความจริงอย่างสุภาพคือการให้เกียรติกัน',
          'ถ้าเขาถามความคิดเห็นของคุณ: เขาอยากฟังความคิดของคุณจริงๆ อย่าตอบแค่ "แล้วแต่อะไรก็ได้" (Up to you) ตลอดเวลา',
          'การแสดงความรู้สึก: หากคุณไม่สบายใจกับสิ่งใด การอธิบายด้วยเหตุผลสั้นๆ อย่างใจเย็น จะได้รับความเข้าใจมากกว่าการเงียบหรือรอให้เขาเดาใจ'
        ],
        practicalTip: 'หากคุณต้องการเวลาคิด สามารถบอกอย่างตรงไปตรงมาได้ว่า "ฉันขอเวลาคิดเรื่องนี้สักนิดนะคะ" เขาจะเคารพการตัดสินใจของคุณ'
      },
      fr: {
        id: 'm3-ch1',
        title: 'Partie 1.1 : Communication directe et indirecte',
        explanation: 'Rappel essentiel : chaque homme français est unique. Cependant, sur le plan culturel général, il est fréquent que les hommes français valorisent une communication plus directe que celle traditionnellement observée en Thaïlande.',
        bulletPoints: [
          'La franchise n\'est pas de l\'agressivité : exprimer poliment son point de vue est perçu comme une marque d\'honnêteté et de considération.',
          'Éviter le « Up to you » permanent : donnez votre avis, vos goûts, vos préférences, c\'est ce qui fait votre charme.',
          'En cas de doute ou de désaccord : formuler calmement son ressenti plutôt que de s\'enfermer dans le silence.'
        ],
        practicalTip: 'Osez dire gentiment ce que vous aimez ou n\'aimez pas : l\'affirmation sereine de soi est très appréciée.'
      }
    },
    {
      id: 'm3-ch2',
      order: 2,
      th: {
        id: 'm3-ch2',
        title: 'ส่วนที่ 1.2: วัฒนธรรมการสนทนาและอารมณ์ขัน',
        explanation: 'สำหรับชาวฝรั่งเศสจำนวนมาก การนั่งพูดคุยแลกเปลี่ยนความคิดเห็นบนโต๊ะอาหารเป็นศิลปะอย่างหนึ่งในชีวิตประจำวัน',
        bulletPoints: [
          'การสนทนาคือหัวใจของความใกล้ชิด: เขาไม่ได้มองหาแค่แฟน แต่เขามองหาคู่สนทนาที่สามารถแลกเปลี่ยนเรื่องราว วัฒนธรรม และมุมมองต่อชีวิตได้',
          'อารมณ์ขันและการหยอกล้อ (Second degré): ผู้ชายฝรั่งเศสมักชอบเล่นมุกตลกรองเชิงหรือหยอกล้อเบาๆ บางครั้งอาจเป็นการแซวเล่นเพื่อสร้างความเป็นกันเอง ไม่ได้มีเจตนาล้อเลียนหรือทำให้เสียหน้า',
          'การแสดงความคิดเห็นต่าง: ในวัฒนธรรมฝรั่งเศส การมีความคิดเห็นไม่ตรงกันในบางเรื่องถือเป็นเรื่องปกติและเป็นเสน่ห์ของการพูดคุย ไม่ใช่ความขัดแย้งที่ต้องกลัว'
        ],
        practicalTip: 'อย่ากังวลเรื่องภาษา ค่อยๆ อธิบายด้วยความจริงใจ รอยยิ้ม และความอยากรู้อยากเห็นในวัฒนธรรมของกันและกัน'
      },
      fr: {
        id: 'm3-ch2',
        title: 'Partie 1.2 : L\'art de la conversation et le second degré',
        explanation: 'En France, la discussion est une véritable source de plaisir partagé et le premier moteur de la séduction intellectuelle et affective.',
        bulletPoints: [
          'La conversation rapproche : échanger sur ses voyages, la cuisine ou ses lectures crée un lien profond.',
          'L\'humour et l\'ironie légère : certains hommes usent de taquineries bienveillantes (le fameux second degré) pour détendre l\'atmosphère.',
          'Le débat d\'idées : avoir des avis divergents sur un sujet n\'est pas une dispute, mais un échange stimulant.'
        ],
        practicalTip: 'Soyez curieuse et posez des questions sur sa région ou sa culture, cela suscite toujours un vif enthousiasme.'
      }
    },
    {
      id: 'm3-ch3',
      order: 3,
      th: {
        id: 'm3-ch3',
        title: 'ส่วนที่ 1.3: ความเป็นอิสระ ครอบครัว และเรื่องเงิน',
        explanation: 'นี่คือจุดที่มักมีความแตกต่างระหว่างวัฒนธรรมไทยและฝรั่งเศส ซึ่งจำเป็นต้องทำความเข้าใจอย่างเปิดใจและมีสติ',
        bulletPoints: [
          'ความเป็นอิสระส่วนตัว: ผู้ชายฝรั่งเศสมักให้ความสำคัญกับพื้นที่ส่วนตัว เช่น เวลาที่เขาออกไปพบเพื่อน ออกกำลังกาย หรือทำงานอดิเรก การให้พื้นที่ซึ่งกันและกันคือสัญญาณของความไว้ใจ',
          'บทบาทของครอบครัว: ในสังคมไทย ครอบครัวใหญ่มักมีความผูกพันใกล้ชิดมาก ในขณะที่ผู้ชายฝรั่งเศสส่วนใหญ่มักมีความเป็นปัจเจกชนและตัดสินใจเรื่องชีวิตคู่ด้วยตัวเองเป็นหลัก',
          'เรื่องการเงินและการทำงาน: ชายฝรั่งเศสส่วนใหญ่มักมองหาความสัมพันธ์ที่เคารพซึ่งกันและกันอย่างเท่าเทียม การพูดถึงเรื่องเงินทองหรือภาระหนี้สินในระยะเริ่มต้นมักจะทำให้เขารู้สึกระแวงและถอยห่าง'
        ],
        practicalTip: 'ความสัมพันธ์ที่ยั่งยืนเริ่มต้นจากการให้เกียรติในความพึ่งพาตนเองของทั้งสองฝ่าย'
      },
      fr: {
        id: 'm3-ch3',
        title: 'Partie 1.3 : Indépendance, famille et rapport à l\'argent',
        explanation: 'Des différences de perception notables peuvent exister entre les deux cultures concernant la sphère privée et financière.',
        bulletPoints: [
          'Le respect de l\'indépendance : chacun garde son espace personnel, ses amis et ses passions.',
          'La cellule familiale : la prise de décision amoureuse est généralement très individuelle en France.',
          'Le travail et l\'argent : l\'autonomie et la responsabilité personnelle sont valorisées. Les attentes financières précoces provoquent immédiatement un rejet.'
        ],
        practicalTip: 'Construisez d\'abord une complicité sincère ; les aspects matériels s\'organisent d\'un commun accord bien plus tard.'
      }
    },

    // PARTIE 2
    {
      id: 'm3-ch4',
      order: 4,
      th: {
        id: 'm3-ch4',
        title: 'ส่วนที่ 2.1: วิธีตอบข้อความแรกให้ประทับใจ',
        explanation: 'เมื่อมีผู้ชายส่งข้อความแรกมาทักทาย วิธีที่คุณตอบกลับจะเป็นตัวกำหนดทิศทางของความสัมพันธ์ทั้งหมด',
        bulletPoints: [
          'อย่าตอบแค่คำเดียว: การตอบแค่ "Hello", "Yes", "OK" ทำให้ดูเหมือนคุณไม่อยากคุย และทำให้เขารู้สึกหมดกำลังใจที่จะสานต่อ',
          'ทักทายกลับพร้อมตั้งคำถามสั้นๆ: รับคำทักทาย และต่อยอดบทสนทนาด้วยความสนใจในตัวเขา',
          'ความเร็วในการตอบ: ไม่จำเป็นต้องเฝ้าตอบทันทีทุกวินาที การตอบตามจังหวะเวลาที่คุณสะดวกอย่างสุภาพแสดงถึงความมีวุฒิภาวะ'
        ],
        examples: [
          {
            bad: {
              text: 'He: "Bonjour, your profile is lovely, you love cooking?"\nYou: "Yes."',
              explanation: 'ปิดบทสนทนาทันที เขาจะไม่รู้จะคุยอะไรต่อ'
            },
            good: {
              text: 'He: "Bonjour, your profile is lovely, you love cooking?"\nYou: "Bonjour! Thank you very much. Yes, I really enjoy cooking spicy dishes with fresh herbs! And you, do you like cooking or do you prefer discovering good restaurants?"',
              explanation: 'น่ารัก ขยายความ และโยนคำถามกลับไปอย่างลื่นไหล'
            }
          }
        ],
        practicalTip: 'ใช้สูตร "ตอบคำถาม + เติมเรื่องเล่าเล็กๆ + ถามเขากลับ"'
      },
      fr: {
        id: 'm3-ch4',
        title: 'Partie 2.1 : Comment répondre au premier message',
        explanation: 'La réponse au premier message donne le tempo de l\'échange.',
        bulletPoints: [
          'Bannir les réponses d\'un seul mot (« Yes », « Fine ») qui coupent net l\'élan.',
          'Répondre avec chaleur en rebondissant sur sa phrase.',
          'Garder un rythme naturel sans urgence anxiogène.'
        ],
        examples: [
          {
            bad: {
              text: 'Lui : « Bonjour, ton profil est très sympa, tu aimes cuisiner ? »\nElle : « Yes. »',
              explanation: 'Met fin à l\'échange avant même qu\'il n\'ait commencé.'
            },
            good: {
              text: 'Lui : « Bonjour, ton profil est très sympa, tu aimes cuisiner ? »\nElle : « Bonjour ! Merci beaucoup. Oui, j\'adore cuisiner des plats épicés avec des herbes fraîches ! Et toi, tu aimes cuisiner ou tu préfères dénicher de bonnes tables ? »',
              explanation: 'Relance fluide et engageante.'
            }
          }
        ],
        practicalTip: 'Appliquez la règle des 3 temps : Remercier / Partager un détail / Poser une question en retour.'
      }
    },
    {
      id: 'm3-ch5',
      order: 5,
      th: {
        id: 'm3-ch5',
        title: 'ส่วนที่ 2.2: การตั้งคำถามที่ดี และการหลีกเลี่ยงบทสนทนาที่น่าเบื่อ',
        explanation: 'บทสนทนาที่ดีไม่ควรเหมือนการกรอกประวัติราชการ เช่น "อายุเท่าไหร่ ทำงานอะไร กินข้าวหรือยัง" ควรถามคำถามที่เปิดให้เขาได้เล่าความรู้สึกและความสนใจ',
        bulletPoints: [
          'คำถามเปิด (Open questions): เช่น "อะไรคือสิ่งที่คุณชอบที่สุดเกี่ยวกับเมืองที่คุณอยู่?" หรือ "เวลาว่างช่วงวันหยุด คุณชอบใช้เวลาทำอะไรมากที่สุด?"',
          'หลีกเลี่ยงการถามเรื่องเงินในระยะแรก: เช่น "เงินเดือนเท่าไหร่", "มีบ้านกี่หลัง", "ขับรถอะไร" เพราะจะทำให้ดูมีเจตนาแอบแฝงทันที',
          'ถามถึงสิ่งที่เขาเขียนไว้ในโปรไฟล์: แสดงให้เห็นว่าคุณใส่ใจและอ่านโปรไฟล์ของเขาจริงๆ'
        ],
        practicalTip: 'ผู้คนจะชอบคุยกับคนที่ทำให้พวกเขารู้สึกว่าตนเองมีคุณค่าและได้รับการรับฟัง'
      },
      fr: {
        id: 'm3-ch5',
        title: 'Partie 2.2 : Poser de bonnes questions et éviter la monotonie',
        explanation: 'Sortez du schéma répétitif « Tu as quel âge / tu fais quoi / as-tu mangé ? » en privilégiant des questions ouvertes.',
        bulletPoints: [
          'Questions ouvertes : « Qu\'est-ce qui te plaît le plus dans ta région ? » ou « Quel a été ton plus beau voyage ? »',
          'Bannir toute question d\'ordre matériel (salaire, loyer, modèle de voiture) qui crée une méfiance rédhibitoire.',
          'Rebondir sur les détails de sa biographie pour prouver votre attention sincère.'
        ],
        practicalTip: 'Montrez-vous curieuse de son histoire personnelle.'
      }
    },

    // PARTIE 3
    {
      id: 'm3-ch6',
      order: 6,
      th: {
        id: 'm3-ch6',
        title: 'ส่วนที่ 3: การรักษาความสนใจและพัฒนาบทสนทนาอย่างมีเสน่ห์',
        explanation: 'การคุยให้มีความผูกพันต้องอาศัยการแลกเปลี่ยนที่สมดุล ไม่ใช่การสอบปากคำ และไม่ใช่การเอาแต่พูดเรื่องของตัวเองฝ่ายเดียว',
        bulletPoints: [
          'การสลับจังหวะ: แชร์เรื่องราวของคุณ 1 ส่วน แล้วเปิดโอกาสให้เขาเล่า 1 ส่วน สลับกันไปอย่างเพลิดเพลิน',
          'ส่งรูปภาพชีวิตประจำวันง่ายๆ: เช่น รูปอาหารที่คุณเพิ่งทำเสร็จ หรือวิวท้องฟ้าสวยๆ ช่วยให้เขารู้สึกมีส่วนร่วมในวันของคุณ',
          'เคารพเวลาและพื้นที่ส่วนตัว: หากเขาตอบช้าลงเพราะทำงาน อย่าเพิ่งตีโพยตีพายหรือส่งข้อความรัวๆ ด้วยความกังวลใจ ให้เขามีเวลาจัดการธุระของเขา'
        ],
        practicalTip: 'ความสงบและความมั่นคงทางอารมณ์คือหนึ่งในคุณสมบัติที่มีเสน่ห์ดึงดูดใจมากที่สุด'
      },
      fr: {
        id: 'm3-ch6',
        title: 'Partie 3 : Maintenir l\'intérêt et nourrir la complicité',
        explanation: 'Créer une réelle alchimie repose sur l\'équilibre entre écoute active et partage de son propre univers.',
        bulletPoints: [
          'Alternance harmonieuse : partagez une petite anecdote, puis invitez-le à rebondir.',
          'Partager des photos simples du quotidien : un plat cuisiné, un coucher de soleil, une plante qui fleurit.',
          'Respecter le rythme de vie : s\'il met quelques heures à répondre en journée, ne cédez pas à l\'angoisse ni aux relances insistantes.'
        ],
        practicalTip: 'La maturité affective et la patience sont extrêmement séduisantes.'
      }
    },

    // PARTIE 4
    {
      id: 'm3-ch7',
      order: 7,
      th: {
        id: 'm3-ch7',
        title: 'ส่วนที่ 4.1: วิธีสังเกตว่าผู้ชายจริงจังจริงหรือไม่ (Indicateurs)',
        explanation: 'ผู้ชายที่จริงใจไม่ได้วัดกันที่คำหวาน แต่สังเกตได้จากการกระทำที่สม่ำเสมอและการให้เกียรติคุณในทุกมิติ',
        bulletPoints: [
          'ความสม่ำเสมอ: ติดต่อพูดคุยอย่างต่อเนื่อง ไม่หายไปเป็นสัปดาห์แล้วจู่ๆ ก็โผล่มา',
          'อยากรู้จักตัวตนของคุณจริงๆ: ถามถึงความฝัน ความชอบ ความคิด และครอบครัวของคุณ ไม่ใช่โฟกัสแต่เรื่องรูปร่างหน้าตา',
          'ความโปร่งใสที่สมเหตุสมผล: ยินดีเปิดกล้องวิดีโอคอล พูดคุยอย่างเปิดเผย และแนะนำวิถีชีวิตของเขาให้คุณเห็น',
          'เคารพขอบเขต: เมื่อคุณบอกว่า "ยังไม่พร้อม" สำหรับบางเรื่อง เขาจะรับฟังและไม่กดดันคุณ'
        ],
        practicalTip: 'ดูสิ่งที่เขา "ทำ" ในระยะยาว ไม่ใช่แค่สิ่งที่เขา "พูด" ในช่วงสัปดาห์แรก'
      },
      fr: {
        id: 'm3-ch7',
        title: 'Partie 4.1 : Reconnaître un homme réellement sérieux',
        explanation: 'La sincérité ne s\'évalue pas aux mots doux prématurés, mais à la cohérence des actes dans la durée.',
        bulletPoints: [
          'Régularité des échanges : présence stable sans disparitions inexpliquées de plusieurs semaines.',
          'Intérêt véritable pour votre personne : questions sur votre vie, vos aspirations, vos valeurs.',
          'Transparence raisonnable : accepte volontiers les appels vidéo et parle de son cadre de vie avec franchise.',
          'Respect de vos limites : n\'exerce aucune pression lorsque vous exprimez une retenue.'
        ],
        practicalTip: 'Fiez-vous à la constance de ses actions plutôt qu\'aux grandes déclarations hâtives.'
      }
    },
    {
      id: 'm3-ch8',
      order: 8,
      th: {
        id: 'm3-ch8',
        title: 'ส่วนที่ 4.2: สัญญาณเตือนภัยและความปลอดภัยเด็ดขาด (Red Flags & Sécurité)',
        explanation: '⚠️ กฎเหล็กด้านความปลอดภัยที่คุณต้องจดจำไว้ตลอดชีวิต ไม่ว่าคุณจะรู้สึกชอบเขามากแค่ไหนก็ตาม',
        errorsToAvoid: [
          'ขอเงินหรือให้ลงทุน: หากมีใครอ้างว่ากระเป๋าเงินหาย มีปัญหาทางธุรกิจ หรือชวนเล่นคริปโต ให้รู้ไว้ทันทีว่าคือ "มิจฉาชีพ 100%" แม้เขาจะส่งหลักฐานอะไรมาก็ตาม!',
          'ขอรูปถ่ายหรือวิดีโอส่วนตัวล่อแหลม: ชายที่ให้เกียรติคุณอย่างแท้จริงจะไม่มีวันเรียกร้องสิ่งนี้ผ่านแชต',
          'เร่งรัดความสัมพันธ์ผิดปกติ: บอกรักตั้งแต่วันที่สอง สัญญาจะซื้อบ้านให้ หรืออยากแต่งงานทันที มักเป็นเทคนิคหลอกล่อเพื่อผลประโยชน์',
          'พฤติกรรมก้าวร้าว หงุดหงิดเวลาที่คุณไม่ตอบ หรือพูดจาเหยียดหยาม'
        ],
        practicalTip: 'จำไว้ให้ขึ้นใจ: "ห้ามโอนเงิน หรือส่งข้อมูลทางการเงินให้คนที่เจอทางออนไลน์เด็ดขาด ไม่ว่าด้วยเหตุผลใดทั้งสิ้น"'
      },
      fr: {
        id: 'm3-ch8',
        title: 'Partie 4.2 : Signaux d\'alerte et impératifs absolus de sécurité',
        explanation: 'Règles vitales de prudence à graver dans votre esprit, quelle que soit la sympathie ressentie.',
        errorsToAvoid: [
          'Demandes d\'argent ou investissements : tout prétexte d\'urgence financière, de problème de douane ou de cryptomonnaie est une arnaque à 100 % !',
          'Demandes d\'images intimes ou dénudées : un homme respectueux ne demandera jamais cela en ligne.',
          'Déclarations enflammées trop rapides (« Je t\'aime » au bout de 48h, promesses de mariage immédiates) : signe classique de manipulation.',
          'Agressivité, reproches culpabilisants dès que vous êtes indisponible.'
        ],
        practicalTip: 'Règle d\'or inconditionnelle : n\'envoyez JAMAIS d\'argent à une personne rencontrée en ligne, sous aucun prétexte.'
      }
    },

    // PARTIE 5
    {
      id: 'm3-ch9',
      order: 9,
      th: {
        id: 'm3-ch9',
        title: 'ส่วนที่ 5: จากการแชตสู่วิดีโอคอล และการนัดพบตัวจริงอย่างปลอดภัย',
        explanation: 'เมื่อคุยกันไประยะหนึ่ง การพัฒนาขั้นต่อไปคือการคุยผ่านวิดีโอคอล และวางแผนการพบเจอในโลกแห่งความเป็นจริง',
        bulletPoints: [
          'เมื่อไหร่ควรเปิดวิดีโอคอล: หลังพูดคุยแชตอย่างต่อเนื่องประมาณ 1-2 สัปดาห์ การคอล 10-15 นาทีจะช่วยยืนยันตัวตนและความรู้สึกได้ดีที่สุด',
          'การจัดนัดพบครั้งแรก: ต้องเลือกสถานที่สาธารณะที่มีผู้คนเสมอ เช่น ร้านอาหาร คาเฟ่ในห้างสรรพสินค้า ไม่นัดในที่พักส่วนตัวในเดทแรกเด็ดขาด',
          'แจ้งคนใกล้ชิด: บอกเพื่อนสนิทหรือครอบครัวเสมอว่าคุณจะไปพบใคร ที่ไหน และเมื่อไหร่',
          'เคารพจังหวะของตัวเอง: หากคุณยังไม่พร้อม หรือมีความรู้สึกไม่สบายใจ คุณมีสิทธิ์ปฏิเสธการนัดพบได้เสมอโดยไม่ต้องรู้สึกผิด'
        ],
        practicalTip: 'เดทแรกควรเป็นช่วงเวลากลางวัน ในสถานที่ที่คุณคุ้นเคยและเดินทางกลับได้อย่างสะดวกสบาย'
      },
      fr: {
        id: 'm3-ch9',
        title: 'Partie 5 : De la conversation virtuelle à la première rencontre',
        explanation: 'Comment franchir l\'étape de l\'appel vidéo puis du premier rendez-vous en toute sérénité.',
        bulletPoints: [
          'Appel vidéo : après 1 à 2 semaines d\'échanges réguliers, un court appel vidéo valide l\'authenticité mutuelle.',
          'Premier rendez-vous en lieu public : café central, restaurant en journée, jamais dans une chambre d\'hôtel ou un lieu isolé.',
          'Prévenir un proche : indiquez toujours à une amie de confiance le lieu et l\'heure de votre rencontre.',
          'Suivre son propre rythme : vous n\'avez aucune obligation d\'accepter une invitation si vous ne vous sentez pas prête.'
        ],
        practicalTip: 'Privilégiez toujours un rendez-vous en journée dans un quartier que vous connaissez parfaitement.'
      }
    },

    // PARTIE 6
    {
      id: 'm3-ch10',
      order: 10,
      th: {
        id: 'm3-ch10',
        title: 'ส่วนที่ 6: สร้างความสัมพันธ์ที่แท้จริงบนพื้นฐานความเข้ากันได้ (Compatibilité)',
        explanation: 'เป้าหมายสูงสุดไม่ใช่เพียงแค่ "การดึงดูดผู้ชายฝรั่งเศส" แต่คือ "การค้นพบคนที่มีหัวใจตรงกัน เข้าใจกัน และร่วมสร้างความสุขที่แท้จริงในระยะยาว"',
        bulletPoints: [
          'ความซื่อสัตย์และความจริงใจ: อย่าเสแสร้งเป็นคนอื่นเพื่อให้เขาถูกใจ เพราะความสัมพันธ์ระยะยาวจะยั่งยืนได้ก็ต่อเมื่อคุณมีความสุขกับการเป็นตัวของตัวเอง',
          'ความอดทนและการเรียนรู้: วัฒนธรรม ภาษา และพื้นเพที่ต่างกันต้องอาศัยเวลาและความอดทนในการปรับตัวเข้าหากัน',
          'ความเข้ากันได้ในชีวิตจริง: ดูเป้าหมายชีวิต แผนการในอนาคต เรื่องที่อยู่อาศัย และทัศนคติครอบครัวว่าสอดคล้องกันหรือไม่'
        ],
        practicalTip: 'คลิกเข้าสู่ "แบบประเมินความเข้ากันได้" ด้านล่าง เพื่อสำรวจความต้องการที่แท้จริงในใจคุณ'
      },
      fr: {
        id: 'm3-ch10',
        title: 'Partie 6 : Construire une relation durable fondée sur la compatibilité',
        explanation: 'L\'objectif n\'est pas d\'attirer n\'importe qui, mais de construire une histoire épanouissante avec un homme compatible avec vos valeurs profondes.',
        bulletPoints: [
          'Authenticité avant tout : ne jouez pas de rôle pour plaire ; l\'amour durable s\'épanouit dans la liberté d\'être soi-même.',
          'Patience et écoute : les différences linguistiques et culturelles demandent du temps et de la tendresse mutuelle.',
          'Compatibilité concrète : vision du couple, souhaits pour l\'avenir, projet de vie partagé.'
        ],
        practicalTip: 'Rendez-vous dans l\'atelier de réflexion finale pour identifier vos critères prioritaires.'
      }
    }
  ]
};
