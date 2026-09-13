import { ModuleData } from '../types';

export const module1Data: ModuleData = {
  id: 'module-1',
  tierRequired: 1,
  th: {
    title: 'โมดูลที่ 1: ปรับแต่งโปรไฟล์ให้โดดเด่นและจริงใจ',
    tagline: 'คู่มือการเขียนคำบรรยายตัวตนให้น่าประทับใจ ดึงดูดคนที่ใช่ และปลอดภัย',
    description: 'เรียนรู้วิธีการเขียนแนะนำตัวอย่างเป็นธรรมชาติ ไม่ดูสั้นเกินไปหรือเปิดเผยข้อมูลส่วนตัวมากเกินไป พร้อมตัวอย่างจริงและแบบฝึกหัดเขียนโปรไฟล์',
    duration: 'ใช้เวลาประมาณ 25-35 นาที',
    badge: 'พื้นฐานสำคัญ',
  },
  fr: {
    title: 'Module 1 : Améliorer son profil avec authenticité',
    tagline: 'Guide pour rédiger une présentation captivante, sincère et sécurisée',
    description: 'Apprenez à vous présenter avec naturel, sans être trop brève ni trop exposer votre vie privée, avec exemples concrets et atelier de rédaction.',
    duration: 'Durée estimée : 25-35 minutes',
    badge: 'Socle fondamental',
  },
  exerciseType: 'profile_builder',
  checklistTitle: {
    th: 'เช็กลิสต์: โปรไฟล์ของคุณพร้อมแล้วหรือยัง?',
    fr: 'Checklist finale : Mon profil est-il prêt ?',
  },
  checklist: [
    {
      id: 'm1-c1',
      th: 'คำขึ้นต้นอ่านง่าย น่าสนใจ และสร้างรอยยิ้มตั้งแต่ประโยคแรก',
      fr: 'La phrase d\'accroche est claire, chaleureuse et donne envie d\'en savoir plus.',
      category: 'hook'
    },
    {
      id: 'm1-c2',
      th: 'บอกเล่าบุคลิกภาพด้วยตัวอย่างกิจกรรมจริง ไม่ใช่แค่ใส่คำคุณศัพท์ลอยๆ',
      fr: 'Votre personnalité est illustrée par des exemples concrets, pas juste des adjectifs.',
      category: 'personality'
    },
    {
      id: 'm1-c3',
      th: 'ความยาวพอเหมาะ (ประมาณ 8-15 บรรทัด) อ่านจบได้ใน 45 วินาที',
      fr: 'Longueur équilibrée (8 à 15 lignes environ), lisible en 45 secondes.',
      category: 'length'
    },
    {
      id: 'm1-c4',
      th: 'ระบุสิ่งที่มองหาในความสัมพันธ์อย่างอบอุ่นและชัดเจน (ไม่ตั้งเงื่อนไขแบบกดดัน)',
      fr: 'Vos attentes relationnelles sont exprimées avec bienveillance et clarté.',
      category: 'intentions'
    },
    {
      id: 'm1-c5',
      th: 'ไม่เปิดเผยข้อมูลส่วนบุคคลที่เสี่ยงต่อความปลอดภัย (เบอร์โทร, ที่อยู่เจาะจง, ไอดีไลน์ส่วนตัว)',
      fr: 'Aucune information sensible ou risquée n\'est mentionnée (adresse exacte, finances, etc.).',
      category: 'safety'
    },
    {
      id: 'm1-c6',
      th: 'ไม่มีข้อความที่เน้นเรื่องเงิน ทรัพย์สิน หรือคำตัดพ้อจากความรักในอดีต',
      fr: 'Aucune mention d\'argent, de statut financier ni de rancœur envers le passé.',
      category: 'attitude'
    },
    {
      id: 'm1-c7',
      th: 'เปิดโอกาสให้ผู้ชายมีหัวข้อเริ่มต้นทักทายได้ง่าย เช่น คำถามน่ารักๆ ท้ายประโยค',
      fr: 'Vous terminez par une invitation ouverte ou une question facile pour lancer la discussion.',
      category: 'conversation_starter'
    }
  ],
  chapters: [
    {
      id: 'm1-ch1',
      order: 1,
      th: {
        id: 'm1-ch1',
        title: '1. ทำไมคำบรรยายโปรไฟล์ถึงมีความสำคัญมาก?',
        explanation: 'รูปภาพอาจช่วยให้คนหยุดดู แต่ "คำบรรยายตัวตน" คือสิ่งที่จะทำให้ผู้ชายที่จริงใจตัดสินใจส่งข้อความทักทายคุณ ผู้ชายฝรั่งเศสส่วนใหญ่มักให้คุณค่ากับการสนทนาและบุคลิกภาพ การมีข้อความที่สื่อถึงตัวตนจริงๆ จะช่วยคัดกรองคนที่มองหาความสัมพันธ์จริงจังออกจากคนที่เข้ามาเพียงแค่ผิวเผิน',
        bulletPoints: [
          'เป็นสะพานเชื่อมบทสนทนาแรก: ทำให้เขามีเรื่องชวนคุยอย่างมีความหมาย',
          'สะท้อนความเป็นตัวคุณ: ผู้ชายฝรั่งเศสมักชื่นชอบผู้หญิงที่มีความคิดและเอกลักษณ์ของตัวเอง',
          'สร้างความอุ่นใจ: แสดงให้เห็นว่าโปรไฟล์นี้เป็นบุคคลจริงที่มีเจตนาจริงใจ'
        ],
        practicalTip: 'อย่ามองว่าโปรไฟล์คือการกรอกใบสมัครงาน แต่ให้มองว่าเป็นการ "เปิดประตูบ้านต้อนรับเพื่อนใหม่ที่ให้เกียรติกัน"'
      },
      fr: {
        id: 'm1-ch1',
        title: '1. Pourquoi la description du profil est essentielle',
        explanation: 'Si les photos attirent le premier regard, c\'est la description écrite qui incite un homme sérieux à vous envoyer un premier message. La culture française accorde une grande importance à la conversation et à la personnalité : un texte réfléchi permet d\'attirer des hommes sincères et d\'écarter ceux qui ne cherchent que la superficialité.',
        bulletPoints: [
          'Elle offre un pont de conversation immédiat pour briser la glace.',
          'Elle reflète votre singularité et votre sensibilité.',
          'Elle inspire confiance en montrant une démarche réfléchie et honnête.'
        ],
        practicalTip: 'Voyez votre description non comme un CV rigide, mais comme une invitation chaleureuse à échanger.'
      }
    },
    {
      id: 'm1-ch2',
      order: 2,
      th: {
        id: 'm1-ch2',
        title: '2. ข้อผิดพลาดที่พบบ่อยในคำบรรยายโปรไฟล์',
        explanation: 'หลายครั้งที่เราอาจเผลอเขียนข้อความตามความเคยชิน แต่ในมุมมองของผู้ชายต่างชาติ ข้อความบางประเภทอาจทำให้เกิดความเข้าใจผิดหรือทำให้เขารู้สึกไม่กล้าทักทาย',
        bulletPoints: [
          'เขียนสั้นเกินไป เช่น "Hi, ask me" หรือ "หาคนจริงใจ": ดูไม่ค่อยตั้งใจและไม่มีเรื่องให้คุยต่อ',
          'เขียนตัดพ้อถึงอดีต เช่น "เกลียดคนโกหก เคยโดนหลอกมา": ทำให้บรรยากาศดูตึงเครียดและมีพลังลบ',
          'เน้นเรื่องความช่วยเหลือทางการเงินหรือความลำบาก: ส่งสัญญาณที่ไม่ดี และดึงดูดกลุ่มคนที่ไม่น่าไว้วางใจ',
          'การใช้คำแปลกูเกิลแบบประโยคยาวติดกันจนอ่านไม่รู้เรื่อง: ควรสื่อสารด้วยประโยคง่ายๆ กระชับ'
        ],
        errorsToAvoid: [
          'หลีกเลี่ยงการเขียนข้อเรียกร้องเป็นรายการยาวเหยียด (เช่น ต้องสูง ต้องรวย ต้องเลี้ยงดู)',
          'หลีกเลี่ยงการคัดลอกคำคมภาษาอังกฤษหรือปรัชญายาวๆ โดยไม่มีเรื่องเกี่ยวกับตัวเองเลย'
        ],
        practicalTip: 'เน้นความสดใสและพลังบวก คนเราจะอยากคุยกับคนที่ทำให้รู้สึกสบายใจเมื่อได้อ่าน'
      },
      fr: {
        id: 'm1-ch2',
        title: '2. Les erreurs fréquentes dans une description',
        explanation: 'Certaines habitudes d\'écriture peuvent involontairement freiner les hommes sérieux ou envoyer un signal négatif sans que l\'on s\'en rende compte.',
        bulletPoints: [
          'Descriptions trop courtes (« Hi, ask me ») : donnent l\'impression d\'un manque d\'investissement.',
          'Amertume liée aux déceptions passées (« Marre des menteurs ») : instaure une tension négative d\'emblée.',
          'Mentions d\'aide financière ou de difficultés matérielles : risquent d\'attirer des profils mal intentionnés.',
          'Traduction automatique trop complexe et incompréhensible : privilégiez des phrases simples et limpides.'
        ],
        errorsToAvoid: [
          'Éviter les listes d\'exigences matérielles rigides dès la première ligne.',
          'Éviter d\'aligner uniquement des citations philosophiques impersonnelles.'
        ],
        practicalTip: 'Privilégiez la clarté et la sérénité : les hommes bienveillants cherchent avant tout une rencontre apaisante.'
      }
    },
    {
      id: 'm1-ch3',
      order: 3,
      th: {
        id: 'm1-ch3',
        title: '3. วิธีเริ่มต้นประโยคแรก (Accroche) ให้น่าอ่าน',
        explanation: 'ประโยคแรกมีผลมากที่สุดในการดึงดูดสายตา แทนที่จะเริ่มด้วยคำว่า "สวัสดีค่ะ ฉันชื่อ..." แบบธรรมดา ลองเริ่มต้นด้วยบรรยากาศอบอุ่น สิ่งที่คุณกำลังชอบทำ หรือคำทักทายที่เป็นมิตร',
        examples: [
          {
            bad: {
              text: 'Hello. I am a Thai woman looking for a good man. I am 32 years old.',
              explanation: 'ธรรมดาเกินไป เหมือนโปรไฟล์อื่นๆ อีกนับพันคน ไม่บอกเล่าอะไรเกี่ยวกับตัวคุณ'
            },
            good: {
              text: 'Sawasdee ka! ☀️ A smile from Bangkok. If you love good coffee, discovering traditional cooking, and meaningful conversations, I’d love to welcome you.',
              explanation: 'อบอุ่น มีเอกลักษณ์ สื่อถึงรอยยิ้มและความสนใจ ชวนให้อยากคุยต่อทันที'
            }
          }
        ],
        practicalTip: 'ลองนึกภาพว่าคุณกำลังส่งยิ้มและทักทายเพื่อนใหม่ในร้านกาแฟบรรยากาศสบายๆ'
      },
      fr: {
        id: 'm1-ch3',
        title: '3. Comment commencer sa présentation (L\'accroche)',
        explanation: 'La première phrase donne le ton. Plutôt qu\'un classique « Bonjour, je m\'appelle X, j\'ai 32 ans », commencez par un trait d\'ambiance chaleureux, une note positive ou un clin d\'œil culturel naturel.',
        examples: [
          {
            bad: {
              text: 'Hello. I am a Thai woman looking for a good man. I am 32 years old.',
              explanation: 'Très impersonnel, ressemble à des milliers d\'autres fiches sans refléter votre étincelle.'
            },
            good: {
              text: 'Sawasdee ka ! ☀️ Un sourire chaleureux depuis Bangkok. Si vous aimez le bon café, les recettes authentiques et les discussions sincères, bienvenue.',
              explanation: 'Chaleureux, évocateur, présente des centres d\'intérêt et invite spontanément à répondre.'
            }
          }
        ],
        practicalTip: 'Imaginez que vous accueillez un invité avec un thé ou un café dans un lieu convivial.'
      }
    },
    {
      id: 'm1-ch4',
      order: 4,
      th: {
        id: 'm1-ch4',
        title: '4. การบอกเล่าบุคลิกภาพอย่างเป็นธรรมชาติ',
        explanation: 'แทนที่จะบอกแค่ว่า "ฉันเป็นคนใจดีและยิ้มเก่ง" ให้ลองยกตัวอย่างสั้นๆ ในชีวิตประจำวัน การเล่าด้วยภาพจะทำให้ผู้ชายมองเห็นภาพคุณได้ชัดเจนและน่าจดจำยิ่งขึ้น',
        bulletPoints: [
          'เล่าถึงสิ่งเล็กๆ ที่ทำให้คุณมีความสุข เช่น การจัดดอกไม้ การทำอาหารให้คนรอบข้างทาน หรือการฟังเพลงชิลล์ๆ',
          'แสดงอารมณ์ขันเล็กๆ น้อยๆ หรือความเป็นคนเข้าถึงง่าย',
          'พูดถึงทัศนคติที่ดีต่อชีวิตและการเรียนรู้สิ่งใหม่'
        ],
        examples: [
          {
            bad: {
              text: 'I am very kind, funny, sweet, and family girl.',
              explanation: 'การใช้คำคุณศัพท์เรียงกัน ทำให้ดูเหมือนคำโฆษณา ไม่ได้สะท้อนความเป็นจริง'
            },
            good: {
              text: 'People often say my laugh is contagious! In my daily life, I love simple joys: preparing spicy mango salad for my friends or listening to acoustic music on a rainy afternoon.',
              explanation: 'เห็นภาพชัดเจน น่ารัก และบ่งบอกถึงความเป็นคนมีชีวิตชีวา'
            }
          }
        ],
        practicalTip: 'ใช้สูตร "แสดงให้เห็น ดีกว่าแค่บอกเฉยๆ" (Show, don\'t just tell)'
      },
      fr: {
        id: 'm1-ch4',
        title: '4. Comment parler naturellement de sa personnalité',
        explanation: 'Plutôt que d\'empiler des qualificatifs convenus (« gentille, douce, drôle »), illustrez vos traits de caractère par une petite scène du quotidien. Les hommes français sont particulièrement sensibles à l\'authenticité.',
        examples: [
          {
            bad: {
              text: 'I am very kind, funny, sweet, and family girl.',
              explanation: 'Une suite d\'adjectifs génériques qui ne permettent pas de vous différencier.'
            },
            good: {
              text: 'On dit souvent que mon rire s\'entend de loin ! J\'aime les bonheurs simples : préparer un plat typique pour mes amis ou flâner avec un bon morceau de musique.',
              explanation: 'Image vivante, sympathique et personnalisée.'
            }
          }
        ],
        practicalTip: 'Appliquez le principe : « Montrez par un exemple plutôt que d\'affirmer sans preuve ».'
      }
    },
    {
      id: 'm1-ch5',
      order: 5,
      th: {
        id: 'm1-ch5',
        title: '5. แนะนำงานอดิเรกและความสนใจ (Centres d\'intérêt)',
        explanation: 'งานอดิเรกคือหัวข้อชั้นเยี่ยมที่ช่วยให้เกิดบทสนทนาที่ลื่นไหล ผู้ชายฝรั่งเศสมักชื่นชอบการท่องเที่ยว ธรรมชาติ อาหาร ศิลปะ หรือกิจกรรมกลางแจ้ง การระบุความชอบเฉพาะตัวจะช่วยให้เจอคนที่มีไลฟ์สไตล์ตรงกัน',
        bulletPoints: [
          'ระบุ 2-3 สิ่งที่คุณชอบทำจริงๆ ในเวลาว่าง (เช่น เดินตลาดนัดต้นไม้ ทำขนม ถ่ายภาพคาเฟ่ ปั่นจักรยาน)',
          'เปิดโอกาสให้เกิดการแลกเปลี่ยนทางวัฒนธรรม เช่น "ฉันชอบทำอาหารไทย และอยากลองชิมอาหารฝรั่งเศสแท้ๆ สักวัน"',
          'อย่าเขียนสิ่งที่ไม่ได้ทำจริง เพียงเพื่อเอาใจผู้อื่น เพราะความเป็นตัวเองคือเสน่ห์ที่ดีที่สุด'
        ],
        practicalTip: 'เลือกงานอดิเรกที่คุณสามารถพูดคุยต่อได้อย่างมีความสุขและกระตือรือร้น'
      },
      fr: {
        id: 'm1-ch5',
        title: '5. Comment présenter ses centres d\'intérêt',
        explanation: 'Les loisirs sont le meilleur tremplin pour des conversations riches. Les hommes français aiment souvent voyager, cuisiner, explorer la nature, la lecture ou les activités créatives. Partager vos vraies passions permet de trouver une réelle complicité.',
        bulletPoints: [
          'Citez 2 à 3 activités qui vous passionnent vraiment (cuisine, jardinage, randonnée, photographie, musique).',
          'Ouvrez une passerelle culturelle : « J\'adore faire découvrir les saveurs thaïes et je serais curieuse d\'apprendre la gastronomie française. »',
          'Restez fidèle à vous-même : ne prétendez pas aimer des loisirs qui ne vous correspondent pas.'
        ],
        practicalTip: 'Partagez un sujet sur lequel vous prendrez plaisir à discuter pendant des heures.'
      }
    },
    {
      id: 'm1-ch6',
      order: 6,
      th: {
        id: 'm1-ch6',
        title: '6. พูดถึงสถานการณ์ส่วนตัวโดยไม่เปิดเผยมากเกินไป (Sécurité)',
        explanation: 'ความซื่อสัตย์เป็นสิ่งที่ดี แต่ในโลกออนไลน์ ความปลอดภัยต้องมาก่อนเสมอ คุณสามารถบอกเล่าข้อมูลพื้นฐาน เช่น สายงานทั่วไป หรือการมีลูกโดยไม่จำเป็นต้องลงรายละเอียดส่วนตัวที่ลึกเกินไปในโปรไฟล์สาธารณะ',
        bulletPoints: [
          'บอกอาชีพในเชิงกว้าง เช่น "ทำงานด้านการบริการ" หรือ "ทำงานในสำนักงาน" โดยไม่ระบุชื่อบริษัทหรือสถานที่ทำงาน',
          'หากมีบุตร สามารถระบุอย่างอบอุ่นและภูมิใจ เช่น "คุณแม่ลูกหนึ่งที่ภูมิใจและมีชีวิตที่ลงตัว" โดยไม่ลงชื่อหรือรูปถ่ายชัดๆ ของเด็กในโปรไฟล์สาธารณะ',
          'รักษาขอบเขตส่วนตัว: เรื่องสถานะทางการเงิน ภาระหนี้สิน หรือปัญหาครอบครัว ไม่ใช่เรื่องที่ควรเขียนลงบนโปรไฟล์'
        ],
        errorsToAvoid: [
          'ห้ามใส่ที่อยู่อาศัยที่เฉพาะเจาะจง (บอกแค่จังหวัดหรือภูมิภาคก็เพียงพอ)',
          'ห้ามใส่ช่องทางติดต่อส่วนตัวลงในหน้าโปรไฟล์ทันที (รอพูดคุยจนมั่นใจก่อน)'
        ],
        practicalTip: 'บอกเล่าสิ่งที่ทำให้เขารู้จักคุณในฐานะผู้หญิงคนหนึ่ง ส่วนรายละเอียดเชิงลึกค่อยแบ่งปันเมื่อเริ่มสนิทและมั่นใจในความปลอดภัย'
      },
      fr: {
        id: 'm1-ch6',
        title: '6. Parler de sa situation personnelle sans trop en dire',
        explanation: 'L\'honnêteté est essentielle, mais la prudence numérique l\'est tout autant. Vous pouvez mentionner les grandes lignes de votre vie (métier, enfants) sans dévoiler d\'éléments intimes ou vulnérables sur une vitrine publique.',
        bulletPoints: [
          'Activité professionnelle : donnez le domaine général (restauration, commerce, santé) sans nommer votre entreprise ni votre adresse.',
          'Enfants : si vous êtes maman, vous pouvez l\'évoquer avec fierté et sérénité (« Maman comblée d\'une petite fille ») sans afficher le visage de vos enfants en public.',
          'Préserver l\'intimité : les finances, dettes ou conflits familiaux n\'ont aucune place sur un profil de rencontre.'
        ],
        errorsToAvoid: [
          'Ne jamais inscrire d\'adresse précise ni de coordonnées privées immédiates.',
          'Ne pas afficher d\'informations financières.'
        ],
        practicalTip: 'Partagez qui vous êtes en tant que personne ; les détails de vie se confieront au fil de la confiance grandissante.'
      }
    },
    {
      id: 'm1-ch7',
      order: 7,
      th: {
        id: 'm1-ch7',
        title: '7. วิธีสื่อสารว่าเรามองหาอะไรในความสัมพันธ์',
        explanation: 'การบอกความต้องการของคุณอย่างชัดเจนจะช่วยดึงดูดผู้ชายที่มีเป้าหมายเดียวกัน แต่อย่าเขียนในลักษณะที่เป็นเงื่อนไขบังคับหรือกดดัน ให้เขียนในเชิงคุณค่าทางใจและความเข้าใจซึ่งกันและกัน',
        examples: [
          {
            bad: {
              text: 'I want a man who takes care of me 100%, marries me, and moves to Thailand soon. No players!',
              explanation: 'ดูเป็นการตั้งเงื่อนไขฝ่ายเดียวและอาจทำให้ผู้ชายที่จริงจังรู้สึกกลัวความกดดัน'
            },
            good: {
              text: 'I am looking for a sincere, caring partner with whom to build a peaceful relationship based on mutual respect, complicity, and laughter. Someone who appreciates honest communication.',
              explanation: 'เน้นความรู้สึก ความผูกพัน และการให้เกียรติ ซึ่งตรงใจผู้ชายที่มองหารักแท้'
            }
          }
        ],
        practicalTip: 'เน้น "ความรู้สึกที่เราจะสร้างร่วมกัน" มากกว่ารายการสิ่งของหรือข้อเรียกร้อง'
      },
      fr: {
        id: 'm1-ch7',
        title: '7. Comment exprimer ce que l\'on recherche dans une relation',
        explanation: 'Exprimer clairement votre vision amoureuse permet d\'attirer des hommes sur la même longueur d\'onde, à condition de privilégier les valeurs partagées plutôt qu\'une liste d\'exigences unilatérales.',
        examples: [
          {
            bad: {
              text: 'I want a man who takes care of me 100%, marries me, and moves to Thailand soon. No players !',
              explanation: 'Perçu comme une série d\'injonctions rigides qui peut faire fuir les hommes équilibrés.'
            },
            good: {
              text: 'Je recherche un partenaire sincère et bienveillant pour bâtir une relation sereine fondée sur le respect mutuel, la complicité et l\'écoute. Quelqu\'un avec qui partager de vrais projets de vie.',
              explanation: 'Met l\'accent sur la réciprocité, les valeurs et la construction commune.'
            }
          }
        ],
        practicalTip: 'Parlez de ce que vous souhaitez apporter et construire à deux, pas seulement de ce que vous attendez qu\'on vous apporte.'
      }
    },
    {
      id: 'm1-ch8',
      order: 8,
      th: {
        id: 'm1-ch8',
        title: '8. สิ่งที่ควรหลีกเลี่ยงในโปรไฟล์แรกพบ',
        explanation: 'ความประทับใจแรกเป็นเรื่องละเอียดอ่อน ข้อความบางประโยคอาจดูธรรมดาสำหรับเรา แต่อาจสร้างความรู้สึกไม่สบายใจหรือเข้าใจผิดในวัฒนธรรมฝรั่งเศส',
        bulletPoints: [
          'หลีกเลี่ยงการใช้คำว่า "Take care of me" โดยไม่ขยายความ เพราะในวัฒนธรรมตะวันตก คำนี้อาจถูกมองว่าเป็นการพึ่งพาทางการเงินเพียงอย่างเดียว',
          'หลีกเลี่ยงการเขียนคำเตือนขู่ดักหน้า เช่น "ถ้าไม่ใช่คนดีอย่าทักมา" เพราะผู้ชายดีๆ มักจะรู้สึกว่าคุณมองโลกในแง่ลบ',
          'หลีกเลี่ยงการใช้สัญลักษณ์อีโมจิจนลายตาเกินไป (ใช้อย่างพอเหมาะ 2-4 ตัวช่วยเพิ่มความน่ารัก)',
          'หลีกเลี่ยงการลงรูปที่ผ่านฟิลเตอร์จนไม่เหมือนตัวจริง หรือรูปที่สวมแว่นกันแดดปิดหน้าทุกรูป'
        ],
        practicalTip: 'โปรไฟล์ที่ดีทำให้คนที่อ่านรู้สึกสบายใจและอยากเข้ามาทำความรู้จักด้วยความเคารพ'
      },
      fr: {
        id: 'm1-ch8',
        title: '8. Ce qu\'il vaut mieux éviter dans une première présentation',
        explanation: 'Certaines expressions courantes peuvent générer des malentendus interculturels inattendus.',
        bulletPoints: [
          'Éviter « take care of me » sans nuance : en France, cela peut être interprété comme une attente de dépendance matérielle totale plutôt qu\'une attention affective.',
          'Éviter les mises en garde agressives (« Si vous n\'êtes pas sérieux, passez votre chemin ») : cela donne une image défensive et fatiguée.',
          'Éviter l\'excès d\'émojis qui nuit à la lisibilité et au sérieux du profil.',
          'Éviter les photos excessivement filtrées ou le port systématique de lunettes de soleil.'
        ],
        practicalTip: 'Laissez transparaître votre douceur et votre confiance plutôt que vos défenses.'
      }
    },
    {
      id: 'm1-ch9',
      order: 9,
      th: {
        id: 'm1-ch9',
        title: '9. สร้างความไว้วางใจโดยไม่เปิดเผยข้อมูลส่วนตัวมากเกินไป',
        explanation: 'ความโปร่งใสไม่ได้หมายความว่าต้องบอกทุกอย่างในทันที คุณสามารถสร้างความน่าเชื่อถือได้ด้วยความสม่ำเสมอ ความจริงใจ และรูปถ่ายที่มีคุณภาพ',
        bulletPoints: [
          'ใช้รูปถ่ายที่เห็นรอยยิ้มและแววตาชัดเจน ในแสงธรรมชาติ',
          'เขียนภาษาอังกฤษที่เข้าใจง่าย หากใช้แอปช่วยแปล ให้ตรวจทานว่าประโยคสื่อความหมายสุภาพและตรงประเด็น',
          'เก็บข้อมูลเช่น นามสกุลจริง บัญชีธนาคาร ที่อยู่บ้าน และชื่อโรงเรียนของลูก ไว้เป็นเรื่องส่วนตัวอย่างเด็ดขาด'
        ],
        practicalTip: 'ความปลอดภัยของคุณสำคัญที่สุดเสมอ หากใครเร่งรัดขอข้อมูลส่วนตัวเร็วเกินไป ให้สงสัยไว้ก่อน'
      },
      fr: {
        id: 'm1-ch9',
        title: '9. Inspirer confiance sans donner trop d\'informations personnelles',
        explanation: 'Inspirer confiance ne nécessite pas de tout dévoiler. La transparence s\'exprime par la clarté du propos et des photos authentiques, tout en gardant strictement protégée votre vie privée.',
        bulletPoints: [
          'Photos lumineuses, naturelles et souriantes où l\'on distingue bien votre regard.',
          'Ton posé et poli qui démontre une démarche sérieuse.',
          'Protection absolue : ne communiquez jamais nom de famille complet, lieu de travail précis, ni comptes bancaires.'
        ],
        practicalTip: 'Votre sécurité passe avant tout. Toute personne bienveillante comprendra et respectera votre retenue.'
      }
    },
    {
      id: 'm1-ch10',
      order: 10,
      th: {
        id: 'm1-ch10',
        title: '10. การเปรียบเทียบ: สั้นเกินไป / ยาวเกินไป / สมดุลพอดี',
        explanation: 'ความยาวของโปรไฟล์มีผลต่อการอ่านบนหน้าจอมือถืออย่างมาก มาดูตัวอย่างเปรียบเทียบทั้งสามแบบเพื่อนำไปปรับใช้',
        bulletPoints: [
          'แบบสั้นเกินไป (1-2 บรรทัด): "Hi, nice to meet you. Chat with me." ❌ ผลลัพธ์: ดูไม่น่าค้นหา ไม่มีหัวข้อให้คุยต่อ',
          'แบบยาวเกินไป (เกิน 30 บรรทัด): เล่าประวัติชีวิตตั้งแต่วัยเด็กจนถึงปัจจุบัน ❌ ผลลัพธ์: คนอ่านบนมือถือมักจะเลื่อนผ่านเพราะตาลาย',
          'แบบสมดุลพอดี (10-15 บรรทัด แบ่งเป็น 3-4 ย่อหน้าสั้นๆ): มีคำทักทาย เล่าตัวตน งานอดิเรก สิ่งที่ตามหา และคำถามเปิดท้ายข้อความ ✅ ผลลัพธ์: สบายตา ชวนอ่าน และมีเสน่ห์มากที่สุด'
        ],
        practicalTip: 'แบ่งข้อความเป็นย่อหน้าสั้นๆ ย่อหน้าละ 2-3 บรรทัด เพื่อให้อ่านบนมือถือได้สบายตาที่สุด'
      },
      fr: {
        id: 'm1-ch10',
        title: '10. Comparaison : Trop courte, trop longue et équilibrée',
        explanation: 'Sur un écran de smartphone, le formatage visuel compte autant que les mots choisis.',
        bulletPoints: [
          'Trop courte (1-2 lignes) : « Hello, send me message. » ❌ Aucun angle d\'attaque pour entamer une vraie conversation.',
          'Trop longue (+ de 30 lignes de bloc) : biographie exhaustive depuis l\'enfance ❌ Décourageante à lire sur mobile.',
          'Équilibrée (10 à 15 lignes aérées en 3-4 petits paragraphes) : accroche, personnalité, loisir phare, attente et question finale ✅ Format idéal.'
        ],
        practicalTip: 'Aérez votre texte avec des sauts de ligne pour un confort de lecture optimal sur smartphone.'
      }
    },
    {
      id: 'm1-ch11',
      order: 11,
      th: {
        id: 'm1-ch11',
        title: '11. ตัวอย่างโปรไฟล์ที่ไม่ดี และการวิเคราะห์สาเหตุ',
        explanation: 'ศึกษาข้อผิดพลาดจากตัวอย่างจริง เพื่อให้เห็นภาพชัดเจนว่าทำไมข้อความบางแบบถึงไม่ได้ผล',
        examples: [
          {
            bad: {
              text: 'I am simple girl looking for honest foreigner man who can sponsor my family and take me to Europe. No fake men, no liar please.',
              explanation: 'ปัญหา: 1) เน้นเรื่องเงินและการอุปถัมภ์ครอบครัวทำให้ผู้ชายดีๆ กลัว 2) คำว่า "no fake men" แสดงถึงความระแวงและพลังลบ 3) ไม่มีจุดเด่นของตัวเองเลย'
            },
            good: {
              text: 'Sawasdee ka! I work in marketing and enjoy creative projects. In my free time, I love cooking Thai food and swimming. I am looking for a warm, respectful partner to share life joys and mutual dreams.',
              explanation: 'ปรับปรุง: เน้นความสามารถ ความสดใส และความเป็นอิสระของผู้หญิง มีเกียรติและน่าเคารพ'
            }
          }
        ],
        practicalTip: 'ผู้ชายคุณภาพสูงมักมองหา "คู่คิดและเพื่อนคู่ชีวิต" ไม่ใช่อีกฝ่ายที่มองเขาเป็นเพียงตู้เอทีเอ็ม'
      },
      fr: {
        id: 'm1-ch11',
        title: '11. Exemples de mauvaises descriptions et analyse des problèmes',
        explanation: 'Comprendre pourquoi certaines formulations bien intentionnées provoquent en réalité un blocage chez l\'interlocuteur.',
        examples: [
          {
            bad: {
              text: 'I am simple girl looking for honest foreigner man who can sponsor my family and take me to Europe. No fake men, no liar please.',
              explanation: 'Problèmes majeurs : réduction de la relation à une aide financière, posture défensive (« no liar ») et absence d\'échange d\'égal à égal.'
            },
            good: {
              text: 'Sawasdee ka ! Active et curieuse, j\'aime mon métier et les projets créatifs. Mes passions : cuisiner pour mes proches et voyager. Je cherche une belle complicité basée sur l\'honnêteté et le rire.',
              explanation: 'Mise en avant de l\'autonomie, de la dignité et du désir sincère de complicité.'
            }
          }
        ],
        practicalTip: 'Un homme mature et respectueux cherche une partenaire de vie avec qui partager, pas une dépendance.'
      }
    },
    {
      id: 'm1-ch12',
      order: 12,
      th: {
        id: 'm1-ch12',
        title: '12. ตัวอย่างโปรไฟล์ที่ดีเยี่ยมและมีเสน่ห์',
        explanation: 'นี่คือรูปแบบโปรไฟล์ที่ได้รับการตอบรับที่ดีมากจากผู้ชายที่มีวุฒิภาวะและมองหาความรักที่จริงใจ',
        examples: [
          {
            bad: {
              text: 'Looking for husband only.',
              explanation: 'กดดันและเร่งรัดเกินไป'
            },
            good: {
              text: 'Sawasdee ka! 🌿\n\nI’m a positive, caring person who loves nature, good humor, and quiet evenings with a homemade meal. By day, I work in graphic design; on weekends, I’m often taking care of my plants or exploring new coffee places.\n\nI value loyalty, kindness, and honest communication. I would love to meet a gentleman who enjoys laughing, sharing cultures, and taking time to build a genuine connection.\n\nWhat is your favorite dish when you want to treat yourself? 😊',
              explanation: 'มีครบทุกองค์ประกอบ: คำทักทายสดใส, ชีวิตการงาน, ไลฟ์สไตล์, ค่านิยมความสัมพันธ์, และคำถามเปิดท้ายที่ทำให้เขาง่ายต่อการส่งข้อความแรกมาคุย'
            }
          }
        ],
        practicalTip: 'บันทึกโครงสร้างนี้ไว้ แล้วนำมาปรับใส่รายละเอียดที่เป็นตัวคุณเองในแบบฝึกหัดท้ายโมดูล'
      },
      fr: {
        id: 'm1-ch12',
        title: '12. Exemples de descriptions exemplaires et inspirantes',
        explanation: 'Un modèle qui séduit particulièrement les hommes cultivés et respectueux.',
        examples: [
          {
            bad: {
              text: 'Looking for husband only.',
              explanation: 'Beaucoup trop abrupt et oppressant pour un premier contact.'
            },
            good: {
              text: 'Sawasdee ka ! 🌿\n\nD\'un naturel souriant et attentionné, j\'aime la nature, l\'humour fin et les soirées calmes autour d\'un bon repas. Dans la vie, je travaille dans le graphisme ; le week-end, vous me trouverez souvent à m\'occuper de mes plantes ou à tester un nouveau café.\n\nJ\'accorde une grande valeur à la loyauté, la tendresse et la communication sincère. J\'aimerais rencontrer un homme qui aime rire, échanger sur nos cultures et prendre le temps de construire un lien véritable.\n\nEt vous, quel est votre plat préféré pour vous faire plaisir ? 😊',
              explanation: 'Parfait équilibre : accroche, quotidien, valeurs affectives et question ouverte engageante.'
            }
          }
        ],
        practicalTip: 'Gardez cette trame sous les yeux pour l\'exercice de rédaction suivant.'
      }
    },
    {
      id: 'm1-ch13',
      order: 13,
      th: {
        id: 'm1-ch13',
        title: '13. วิธีการ 4 ขั้นตอนง่ายๆ ในการเขียนโปรไฟล์ของคุณใหม่',
        explanation: 'คุณไม่จำเป็นต้องเก่งภาษาอังกฤษอย่างสมบูรณ์แบบ เพียงทำตามสูตร 4 ส่วนนี้ แล้วคุณจะได้โปรไฟล์ที่สวยงามและน่าประทับใจ',
        bulletPoints: [
          'ขั้นตอนที่ 1 (Accroche): ทักทายด้วยรอยยิ้ม + แนะนำตัวสั้นๆ ด้วยพลังบวก',
          'ขั้นตอนที่ 2 (Mon Monde): เล่าชีวิตประจำวัน งานที่ทำ หรืองานอดิเรกที่คุณมีความสุข 1-2 อย่าง',
          'ขั้นตอนที่ 3 (Mes Valeurs): บอกสิ่งที่คุณมองหาในความสัมพันธ์ (ความซื่อสัตย์ ความเคารพ การดูแลเอาใจใส่)',
          'ขั้นตอนที่ 4 (Invitation): เชิญชวนหรือทิ้งคำถามเปิดง่ายๆ ให้เขาตอบกลับ'
        ],
        practicalTip: 'คลิกเข้าสู่ "แบบฝึกหัดเขียนโปรไฟล์" ด้านล่าง เพื่อสร้างโปรไฟล์ของคุณทีละขั้นตอนได้ทันที!'
      },
      fr: {
        id: 'm1-ch13',
        title: '13. Méthode simple en 4 étapes pour réécrire sa description',
        explanation: 'Inutile de maîtriser parfaitement l\'anglais ou le français : suivez simplement cette structure éprouvée pour un résultat élégant et percutant.',
        bulletPoints: [
          'Étape 1 (Accroche) : Saluer avec le sourire et donner une tonalité positive.',
          'Étape 2 (Mon Univers) : Partager 1 ou 2 éléments de votre quotidien ou passions.',
          'Étape 3 (Mes Valeurs) : Exprimer vos aspirations relationnelles (respect, tendresse, écoute).',
          'Étape 4 (Invitation) : Poser une question douce et facile pour encourager le premier message.'
        ],
        practicalTip: 'Passez maintenant à l\'exercice pratique interactif ci-dessous pour rédiger votre texte pas à pas.'
      }
    }
  ]
};
