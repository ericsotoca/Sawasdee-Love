import { ModuleData } from '../types';

export const module2Data: ModuleData = {
  id: 'module-2',
  tierRequired: 2,
  th: {
    title: 'โมดูลที่ 2: ถ่ายวิดีโอแนะนำตัวด้วยสมาร์ตโฟนให้น่าดึงดูด',
    tagline: 'เทคนิคการเตรียมตัว ถ่ายทำ และพูดหน้ากล้องอย่างมั่นใจและเป็นธรรมชาติ',
    description: 'วิดีโอสั้น 45-60 วินาที มีพลังมากกว่ารูปถ่ายหลายเท่า เรียนรู้วิธีจัดแสง เสียง ท่าทาง บทพูด และแบบฝึกหัดซ้อมพูดหน้ากล้อง',
    duration: 'ใช้เวลาประมาณ 30-40 นาที',
    badge: 'เพิ่มเสน่ห์ x3',
  },
  fr: {
    title: 'Module 2 : Réaliser une vidéo attractive avec son smartphone',
    tagline: 'Techniques de tournage, posture et scénario pour rayonner à l\'écran',
    description: 'Une courte vidéo de 45 à 60 secondes inspire 10 fois plus confiance qu\'une simple photo. Maîtrisez la lumière, le son, la gestuelle et le script idéal.',
    duration: 'Durée estimée : 30-40 minutes',
    badge: 'Impact maximal x3',
  },
  exerciseType: 'video_script',
  checklistTitle: {
    th: 'เช็กลิสต์: วิดีโอของคุณพร้อมเผยแพร่แล้วหรือยัง?',
    fr: 'Checklist finale : Ma vidéo est-elle prête à être publiée ?',
  },
  checklist: [
    {
      id: 'm2-c1',
      th: 'แสงสว่างเพียงพอ ส่องตรงเข้าใบหน้า (ไม่ย้อนแสง หรือหน้ามืด)',
      fr: 'La lumière est claire et douce sur votre visage (aucun contre-jour).',
      category: 'lighting'
    },
    {
      id: 'm2-c2',
      th: 'เสียงพูดชัดเจน ไม่มีเสียงรบกวน เช่น เสียงพัดลม ทีวี หรือเสียงจราจรดัง',
      fr: 'Le son de votre voix est net, sans bruit parasite (ventilateur, TV, circulation).',
      category: 'audio'
    },
    {
      id: 'm2-c3',
      th: 'โทรศัพท์ตั้งนิ่งในระดับสายตา (ไม่ถือแกว่งไปมา และไม่มุมเสย)',
      fr: 'Le téléphone est stable, fixé à la hauteur de vos yeux (ni en plongée ni en contre-plongée).',
      category: 'framing'
    },
    {
      id: 'm2-c4',
      th: 'มองตรงไปที่เลนส์กล้อง (ไม่ใช่จ้องมองแต่หน้าตัวเองในจอ)',
      fr: 'Vous regardez bien l\'objectif de la caméra (et non votre propre reflet à l\'écran).',
      category: 'eye_contact'
    },
    {
      id: 'm2-c5',
      th: 'การแต่งกายสุภาพ เรียบร้อย และส่งเสริมบุคลิกภาพอย่างเหมาะสม',
      fr: 'La tenue vestimentaire est soignée, élégante et naturelle.',
      category: 'outfit'
    },
    {
      id: 'm2-c6',
      th: 'ความยาววิดีโอกำลังพอดี (ระหว่าง 45 ถึง 60 วินาที ไม่ยืดยาวเกินไป)',
      fr: 'La durée est idéale (entre 45 et 60 secondes, dynamique et rythmée).',
      category: 'timing'
    },
    {
      id: 'm2-c7',
      th: 'พูดด้วยน้ำเสียงและรอยยิ้มที่เป็นธรรมชาติ ไม่ท่องจำเหมือนอ่านข้อสอบ',
      fr: 'Le ton est spontané, souriant et fluide, sans récitation mécanique.',
      category: 'delivery'
    }
  ],
  chapters: [
    {
      id: 'm2-ch1',
      order: 1,
      th: {
        id: 'm2-ch1',
        title: '1. ทำไมวิดีโอถึงสำคัญเป็นพิเศษบนแพลตฟอร์มนี้?',
        explanation: 'ในความสัมพันธ์ทางไกล วิดีโอคือเครื่องมือสร้าง "ความไว้วางใจ" ที่ทรงพลังที่สุด รูปภาพอาจถูกตกแต่งหรือใช้ฟิลเตอร์ได้ แต่วิดีโอจะเผยให้เห็นรอยยิ้ม น้ำเสียง แววตา และบุคลิกที่แท้จริงของคุณ ซึ่งทำให้ผู้ชายรู้สึกว่าคุณมีตัวตนจริงๆ และน่าเข้าหาอย่างมาก',
        bulletPoints: [
          'ยืนยันความจริงใจ: พิสูจน์ทันทีว่าคุณไม่ใช่โปรไฟล์ปลอมหรือแชตบ็อต',
          'ส่งผ่านพลังบวก: รอยยิ้มและเสียงหัวเราะบนวิดีโอมีเสน่ห์มากกว่าตัวหนังสือ',
          'ดึงดูดผู้ชายที่จริงจัง: ผู้ชายที่พร้อมจะพัฒนาความสัมพันธ์จริงจังจะให้ความสำคัญกับวิดีโอแนะนำตัวเป็นอันดับแรก'
        ],
        practicalTip: 'เป้าหมายของวิดีโอไม่ใช่การแสดงเป็นดารา แต่คือการแสดงให้เห็นว่าคุณเป็นผู้หญิงที่อบอุ่นและเข้าถึงง่าย'
      },
      fr: {
        id: 'm2-ch1',
        title: '1. Pourquoi la vidéo est capitale sur ce type de plateforme',
        explanation: 'À distance, la vidéo est le gage de sincérité le plus fort. Si une photo peut être retouchée, la vidéo révèle votre voix, votre regard et votre énergie vivante. Elle rassure instantanément un homme sérieux en lui montrant une femme authentique et accessible.',
        bulletPoints: [
          'Garantie d\'authenticité : élimine tout doute de faux profil.',
          'Transmission d\'émotions : le sourire et le regard captivent bien plus que le texte brut.',
          'Sélection naturelle : attire les hommes véritablement motivés pour faire connaissance.'
        ],
        practicalTip: 'Votre objectif n\'est pas d\'être une actrice de cinéma, mais une femme douce, vraie et accueillante.'
      }
    },
    {
      id: 'm2-ch2',
      order: 2,
      th: {
        id: 'm2-ch2',
        title: '2. การเลือกสถานที่ถ่ายทำ (Le lieu)',
        explanation: 'สถานที่ที่คุณเลือกถ่ายทำจะบ่งบอกถึงวิถีชีวิตและความใส่ใจของคุณ ควรเลือกพื้นที่ที่ดูสะอาดตา สว่าง และเป็นระเบียบเรียบร้อย',
        bulletPoints: [
          'สถานที่แนะนำ: มุมนั่งเล่นในบ้านที่จัดเรียบร้อย มุมคาเฟ่เงียบๆ ริมระเบียงที่มีต้นไม้ หรือมุมโต๊ะทำงานที่สว่าง',
          'สิ่งที่ต้องระวัง: หลีกเลี่ยงการถ่ายบนเตียงนอนที่มีผ้าห่มยับยู่ยี่ หรือห้องที่มีเสื้อผ้ากองอยู่ด้านหลัง',
          'ความสงบ: ตรวจสอบให้แน่ใจว่าจะไม่มีคนเดินผ่านไปมา หรือสัตว์เลี้ยงกระโดดเข้ามาขัดจังหวะ'
        ],
        practicalTip: 'ฉากหลังที่เรียบง่ายและมีต้นไม้สีเขียวเล็กๆ จะช่วยเพิ่มความรู้สึกผ่อนคลายและสบายตา'
      },
      fr: {
        id: 'm2-ch2',
        title: '2. Choisir un bon endroit pour filmer',
        explanation: 'Le décor en arrière-plan transmet un message subtil sur votre cadre de vie et votre sens du détail.',
        bulletPoints: [
          'Lieux idéaux : un coin salon rangé, une terrasse ombragée avec des plantes, ou un café calme.',
          'À éviter : filmer depuis un lit défait ou devant une pièce en désordre.',
          'Tranquillité : assurez-vous de ne pas être interrompue par des allées et venues.'
        ],
        practicalTip: 'Un arrière-plan sobre agrémenté d\'une touche végétale crée une atmosphère reposante et flatteuse.'
      }
    },
    {
      id: 'm2-ch3',
      order: 3,
      th: {
        id: 'm2-ch3',
        title: '3. ความสำคัญของแสง (La lumière)',
        explanation: 'แสงสว่างที่ดีจะทำให้ผิวหน้าของคุณดูผ่องใสและดวงตาเป็นประกาย โดยไม่ต้องพึ่งพาฟิลเตอร์หนักๆ',
        bulletPoints: [
          'แสงธรรมชาติคือสิ่งที่ดีที่สุด: ยืนหรือนั่งหันหน้าเข้าหาหน้าต่างหรือประตูในตอนเช้าหรือบ่ายคล้อย',
          'ห้ามย้อนแสง: อย่าวางหน้าต่างหรือหลอดไฟไว้ด้านหลังของคุณ เพราะจะทำให้หน้าของคุณมืดเป็นเงาดำ',
          'แสงประดิษฐ์: หากถ่ายตอนค่ำ ควรใช้โคมไฟสีขาวนวล (Warm White) วางไว้ด้านหน้าข้างกล้อง'
        ],
        practicalTip: 'สังเกตจุดประกายแสงเล็กๆ ในดวงตา (Catchlight) หากมีจุดนี้ในดวงตา คุณจะดูมีชีวิตชีวาและมีเสน่ห์ขึ้นทันที'
      },
      fr: {
        id: 'm2-ch3',
        title: '3. L\'importance cruciale de la lumière',
        explanation: 'Une belle lumière naturelle adoucit les traits et fait pétiller le regard sans aucun artifice.',
        bulletPoints: [
          'Lumière naturelle : placez-vous face à une fenêtre (en début de matinée ou fin d\'après-midi).',
          'Bannir le contre-jour : ne placez jamais la fenêtre ou une lampe derrière vous.',
          'Lumière artificielle : si vous filmez en intérieur le soir, orientez une lumière douce face à vous.'
        ],
        practicalTip: 'Recherchez le petit reflet de lumière dans vos yeux : il donne instantanément de la vitalité au visage.'
      }
    },
    {
      id: 'm2-ch4',
      order: 4,
      th: {
        id: 'm2-ch4',
        title: '4. ความสำคัญของเสียง (Le son)',
        explanation: 'คนเราสามารถทนดูวิดีโอที่ภาพธรรมดาได้ แต่จะทนฟังวิดีโอที่เสียงแย่ไม่ได้เลย เสียงลม เสียงพัดลม หรือเสียงรถที่ดังเกินไปจะทำลายบรรยากาศทันที',
        bulletPoints: [
          'ปิดพัดลม แอร์ที่ส่งเสียงดัง หรือทีวีในห้องก่อนเริ่มถ่าย',
          'หากมีไมโครโฟนไร้สายขนาดเล็กหรือหูฟังสมอลทอล์ก ให้ลองทดสอบบันทึกเสียงล่วงหน้า',
          'พูดใกล้โทรศัพท์ประมาณ 50-80 เซนติเมตร เพื่อให้ไมค์ของโทรศัพท์รับเสียงของคุณได้ชัดเจนที่สุด'
        ],
        practicalTip: 'อัดคลิปทดสอบ 5 วินาทีก่อนเสมอ แล้วเปิดฟังด้วยระดับเสียงปกติเพื่อตรวจเช็กความชัดเจน'
      },
      fr: {
        id: 'm2-ch4',
        title: '4. L\'importance du son',
        explanation: 'Un son parasité ou étouffé gâche immédiatement l\'écoute. La voix est un vecteur d\'attachement majeur.',
        bulletPoints: [
          'Éteignez impérativement ventilateur, télévision et climatiseur bruyant.',
          'Testez si possible avec des écouteurs munis d\'un micro ou placez le smartphone à 60 cm environ.',
          'Parlez à un volume posé et chaleureux, sans chuchoter.'
        ],
        practicalTip: 'Faites toujours un essai de 5 secondes au préalable pour écouter la clarté de votre voix.'
      }
    },
    {
      id: 'm2-ch5',
      order: 5,
      th: {
        id: 'm2-ch5',
        title: '5. การเลือกชุดและเครื่องแต่งกาย (La tenue)',
        explanation: 'ชุดที่คุณสวมใส่ควรสะท้อนถึงความเคารพในตัวเองและความสบายใจในการเป็นตัวคุณ',
        bulletPoints: [
          'ชุดที่แนะนำ: เสื้อผ้าสไตล์เรียบหรู คอกลม คอวีที่ไม่ลึกเกินไป สีสันสดใสสบายตา (เช่น สีพาสเทล สีฟ้าอ่อน สีครีม สีชมพูอ่อน)',
          'หลีกเลี่ยง: เสื้อผ้าลายทางถี่ๆ (อาจทำให้ภาพในกล้องลายตา), ชุดนอน, หรือเสื้อผ้าที่เปิดเผยเนื้อตัวมากเกินไปจนดูไม่เหมาะสม',
          'การแต่งหน้าและทรงผม: แต่งหน้าเบาๆ เน้นความเป็นธรรมชาติ ผมหวีเรียบร้อย ไม่ตกลงมาบดบังแววตา'
        ],
        practicalTip: 'แต่งตัวเหมือนที่คุณจะแต่งไปนั่งจิบกาแฟในวันเดทแรกที่น่าประทับใจ'
      },
      fr: {
        id: 'm2-ch5',
        title: '5. Choisir une tenue adaptée et valorisante',
        explanation: 'Votre style doit refléter une élégance simple et le respect de vous-même.',
        bulletPoints: [
          'Tenues recommandées : chemisier, robe d\'été élégante, teintes douces (pastel, crème, corail, bleu ciel).',
          'À éviter : décolletés plongeants excessifs, tenues de nuit, vêtements trop relâchés ou rayures trop fines qui vibrent à l\'écran.',
          'Maquillage et coiffure : mise en beauté légère et soignée, visage dégagé.'
        ],
        practicalTip: 'Habillez-vous comme pour un agréable premier rendez-vous dans un joli salon de thé.'
      }
    },
    {
      id: 'm2-ch6',
      order: 6,
      th: {
        id: 'm2-ch6',
        title: '6. ตำแหน่งและมุมกล้องของโทรศัพท์ (Cadrage)',
        explanation: 'การวางโทรศัพท์ให้อยู่ในตำแหน่งที่ถูกต้องมีผลอย่างมากต่อความสวยงามของภาพ',
        bulletPoints: [
          'ตั้งโทรศัพท์ในแนวตั้ง (Vertical / Portrait) ซึ่งเป็นมาตรฐานที่ผู้ชายจะเปิดดูบนสมาร์ตโฟน',
          'ระดับสายตา: ให้เลนส์กล้องอยู่ระดับเดียวกับดวงตาของคุณพอดี อย่าถ่ายมุมต่ำช้อนขึ้น (เพราะจะเห็นเหนียงและเพดาน) และอย่ายกสูงเกินไปจนดูเหมือนมุมเซลฟี่วัยรุ่น',
          'ใช้ขาตั้งกล้องหรือวางพิงกับหนังสือหนาๆ ให้มั่นคง ห้ามถือโทรศัพท์ด้วยมือเปล่าถ่าย เพราะภาพจะสั่นไหวและทำให้ดูไม่เป็นมืออาชีพ'
        ],
        practicalTip: 'วางโทรศัพท์ห่างจากตัวพอให้เห็นตั้งแต่ช่วงอกขึ้นไปจนถึงศีรษะ (Medium Close-Up)'
      },
      fr: {
        id: 'm2-ch6',
        title: '6. Position et cadrage du smartphone',
        explanation: 'La hauteur et la stabilité du téléphone déterminent la qualité perçue de votre présentation.',
        bulletPoints: [
          'Format vertical (portrait) adapté à la lecture sur smartphone.',
          'Hauteur des yeux : l\'objectif doit être rigoureusement au niveau de votre regard (bannir l\'angle en contre-plongée depuis le bas).',
          'Stabilité : utilisez un trépied ou calez solidement votre téléphone. Ne filmez pas à main levée pour éviter tout tremblement.'
        ],
        practicalTip: 'Cadrez à hauteur de poitrine pour laisser voir votre posture et vos expressions.'
      }
    },
    {
      id: 'm2-ch7',
      order: 7,
      th: {
        id: 'm2-ch7',
        title: '7. มองที่เลนส์กล้อง (Regarder la caméra)',
        explanation: 'นี่คือข้อผิดพลาดอันดับหนึ่งของคนถ่ายวิดีโอ! หลายคนมักมองภาพหน้าตัวเองบนจอโทรศัพท์ ซึ่งทำให้ในวิดีโอดูเหมือนคุณกำลังมองไปที่อื่นและไม่ได้สบตากับคนดู',
        bulletPoints: [
          'หาจุดกล้องเล็กๆ (เลนส์กล้องหน้าหรือกล้องหลัง) แล้วส่งสายตามองตรงไปที่จุดนั้น',
          'การสบตากับเลนส์กล้องเปรียบเสมือนการสบตากับผู้ชายที่กำลังดูวิดีโอของคุณอยู่โดยตรง',
          'หากเผลอมองจอ ให้ติดสติกเกอร์สีชิ้นเล็กๆ หรือวาดรูปรอยยิ้มไว้ข้างเลนส์กล้องเพื่อเตือนสายตา'
        ],
        practicalTip: 'นึกภาพว่าเลนส์กล้องตัวเล็กๆ นั้นคือสายตาของคนใจดีที่คุณกำลังคุยด้วยอย่างสนิทใจ'
      },
      fr: {
        id: 'm2-ch7',
        title: '7. Regarder l\'objectif de la caméra',
        explanation: 'L\'erreur la plus fréquente consiste à regarder son propre reflet sur l\'écran plutôt que le petit trou de l\'objectif.',
        bulletPoints: [
          'Fixez la lentille de l\'appareil photo : c\'est ce qui crée l\'illusion d\'un vrai contact visuel les yeux dans les yeux.',
          'Astuce : collez une petite gommette ou un petit cœur coloré juste à côté de l\'objectif pour guider votre regard.'
        ],
        practicalTip: 'Imaginez que la lentille est le regard d\'un interlocuteur bienveillant assis en face de vous.'
      }
    },
    {
      id: 'm2-ch8',
      order: 8,
      th: {
        id: 'm2-ch8',
        title: '8. รอยยิ้มและการแสดงออกทางสีหน้าอย่างเป็นธรรมชาติ',
        explanation: 'รอยยิ้มแบบไทยมีความงดงามและอบอุ่นเป็นเอกลักษณ์ แต่ควรรักษาความเป็นธรรมชาติ ไม่ต้องเกร็งยิ้มค้างตลอดเวลาจนเมื่อยหน้า',
        bulletPoints: [
          'ยิ้มต้อนรับตั้งแต่ 2 วินาทีก่อนกดเริ่มพูด และรักษารอยยิ้มไว้เล็กน้อยตลอดการพูด',
          'ให้สีหน้าเปลี่ยนไปตามเรื่องที่เล่า เช่น ตาเป็นประกายเมื่อพูดถึงอาหารจานโปรด',
          'หายใจเข้าลึกๆ ผ่อนคลายกล้ามเนื้อไหล่และใบหน้าก่อนกดบันทึกวิดีโอ'
        ],
        practicalTip: 'ถ้าเริ่มรู้สึกเกร็ง ให้หยุดพัก ดื่มน้ำ หัวเราะกับตัวเองเบาๆ แล้วค่อยกดเริ่มใหม่ ไม่ต้องรีบร้อน'
      },
      fr: {
        id: 'm2-ch8',
        title: '8. Sourire et expression naturelle',
        explanation: 'Le sourire thaïlandais est réputé pour sa grâce et sa chaleur. Veillez à ce qu\'il reste naturel et détendu.',
        bulletPoints: [
          'Initiez un sourire chaleureux 2 secondes avant de commencer à parler.',
          'Laissez votre visage s\'animer au fil de vos anecdotes (les yeux qui s\'éclairent en parlant d\'un loisir).',
          'Respirez profondément pour relâcher les épaules avant d\'enregistrer.'
        ],
        practicalTip: 'En cas de trac, faites une pause, buvez une gorgée d\'eau et recommencez paisiblement.'
      }
    },
    {
      id: 'm2-ch9',
      order: 9,
      th: {
        id: 'm2-ch9',
        title: '9. ท่าทางและภาษากาย (Posture et langage corporel)',
        explanation: 'ภาษากายบอกความรู้สึกได้ถึง 80% นั่งหลังตรงแต่ผ่อนคลาย ไม่กอดอก และใช้มือประกอบท่าทางอย่างสุภาพ',
        bulletPoints: [
          'นั่งหรือยืนหลังตรงเพื่อแสดงความมั่นใจในตัวเอง',
          'การใช้มือ: สามารถยกมือไหว้แบบไทยสวยๆ ในช่วงเริ่มต้น แล้ววางมือสบายๆ หรือขยับมือประกอบคำพูดเล็กน้อยอย่างเป็นธรรมชาติ',
          'หลีกเลี่ยงการโยกตัวไปมา หรือเอามือจับผมบ่อยเกินไปเพราะจะแสดงถึงความประหม่า'
        ],
        practicalTip: 'การไหว้แบบไทย "สวัสดีค่ะ" ในตอนต้น เป็นเอกลักษณ์ที่น่ารักและสร้างความประทับใจที่ดีมากสำหรับชาวฝรั่งเศส'
      },
      fr: {
        id: 'm2-ch9',
        title: '9. Posture et langage corporel',
        explanation: 'Le corps exprime la confiance et la sérénité bien avant les mots.',
        bulletPoints: [
          'Tenez-vous droite mais détendue, les épaules relâchées.',
          'Le « Wai » traditionnel thaï au début est un geste de politesse très apprécié et remarqué des Français.',
          'Évitez de vous balancer d\'avant en arrière ou de toucher nerveusement vos cheveux.'
        ],
        practicalTip: 'Un salut gracieux dès l\'ouverture de la vidéo marque immédiatement les esprits avec élégance.'
      }
    },
    {
      id: 'm2-ch10',
      order: 10,
      th: {
        id: 'm2-ch10',
        title: '10. พูดด้วยประโยคง่ายๆ และไม่จำเป็นต้องสำเนียงเป๊ะ',
        explanation: 'คุณไม่จำเป็นต้องมีสำเนียงฝรั่งเศสหรืออังกฤษระดับเจ้าของภาษา ผู้ชายฝรั่งเศสจำนวนมากพบว่าสำเนียงไทยที่พูดช้าๆ ชัดถ้อยชัดคำ มีเสน่ห์และน่ารักมาก',
        bulletPoints: [
          'พูดช้ากว่าปกติเล็กน้อย เพื่อให้ผู้ฟังเข้าใจได้ง่าย',
          'ใช้คำศัพท์พื้นฐานที่คุณคุ้นเคยและออกเสียงได้คล่อง',
          'หากพูดภาษาอังกฤษ ให้ใช้ประโยคสั้นๆ หากพูดภาษาไทย ให้ยิ้มและพูดอย่างนุ่มนวล (หรืออาจทักทายภาษาฝรั่งเศสง่ายๆ เช่น "Bonjour")'
        ],
        practicalTip: 'ความมั่นใจและความจริงใจในแววตามีค่ามากกว่าการพูดเร็วหรือใช้คำศัพท์ยากๆ'
      },
      fr: {
        id: 'm2-ch10',
        title: '10. Parler simplement sans complexe d\'accent',
        explanation: 'Inutile de viser une perfection bilingue. Les Français trouvent souvent l\'accent thaïlandais particulièrement doux et charmant dès lors que le débit est posé.',
        bulletPoints: [
          'Parlez un peu plus lentement que d\'habitude.',
          'Utilisez des phrases courtes et des mots du quotidien que vous maîtrisez bien.',
          'Un petit « Bonjour ! » glissé avec le sourire fait toujours plaisir.'
        ],
        practicalTip: 'La clarté et la douceur priment sur la rapidité.'
      }
    },
    {
      id: 'm2-ch11',
      order: 11,
      th: {
        id: 'm2-ch11',
        title: '11. วิธีหลีกเลี่ยงการท่องจำแบบหุ่นยนต์',
        explanation: 'อย่าพยายามท่องจำบทพูดยาวๆ ทีละคำ เพราะจะทำให้สายตาดูเลื่อนลอยและพูดด้วยน้ำเสียงราบเรียบเหมือนอ่านหนังสือ',
        bulletPoints: [
          'จำแค่ "หัวข้อสำคัญ 3 ข้อ" ไม่ต้องจำทุกคำในประโยค',
          'ให้ความรู้สึกเหมือนกำลังเล่าเรื่องให้เพื่อนสนิทฟัง',
          'หากพูดผิดเล็กน้อย ไม่ต้องตกใจ แค่ยิ้มและพูดต่อได้เลย ความผิดพลาดเล็กๆ น้อยๆ ทำให้คุณดูเป็นธรรมชาติยิ่งขึ้น'
        ],
        practicalTip: 'ใช้ตัวโน้ตสั้นๆ 3 บรรทัดแปะไว้ด้านบนของโทรศัพท์ เพื่อช่วยเตือนความจำ'
      },
      fr: {
        id: 'm2-ch11',
        title: '11. Éviter de réciter un texte comme un robot',
        explanation: 'La récitation mot à mot fige le regard et crée un ton monocorde sans vie.',
        bulletPoints: [
          'Mémorisez simplement 3 idées clés, et non un texte figé mot à mot.',
          'Parlez comme si vous racontiez votre journée à une amie bienveillante.',
          'Si vous hésitez ou trébuchez sur un mot, souriez : cette petite maladresse rend le moment attachant et vivant.'
        ],
        practicalTip: 'Notez seulement 3 puces mémo sur un post-it fixé au-dessus du téléphone.'
      }
    },
    {
      id: 'm2-ch12',
      order: 12,
      th: {
        id: 'm2-ch12',
        title: '12. ความยาวที่เหมาะสมที่สุด (45 ถึง 60 วินาที)',
        explanation: 'ความยาวที่สมบูรณ์แบบสำหรับวิดีโอแนะนำตัวแรกพบคือ 45-60 วินาที ไม่สั้นเกินไปจนไม่ทันได้รู้จัก และไม่ยาวเกินไปจนน่าเบื่อ',
        bulletPoints: [
          'สั้นเกินไป (< 20 วินาที): ยังไม่ทันได้เห็นบุคลิกภาพก็จบแล้ว',
          'ยาวเกินไป (> 90 วินาที): มักจะเริ่มพูดวนซ้ำและสูญเสียความน่าสนใจ',
          'สัดส่วนเวลาทองคำ: 10 วินาทีแรก (ทักทาย) + 25 วินาที (ตัวตนและสิ่งที่ชอบ) + 15 วินาที (สิ่งที่ตามหา) + 10 วินาที (คำลาและรอยยิ้ม)'
        ],
        practicalTip: 'ใช้เครื่องมือฝึกซ้อมจับเวลาในแบบฝึกหัดท้ายโมดูลนี้ เพื่อกะจังหวะเวลาได้อย่างแม่นยำ'
      },
      fr: {
        id: 'm2-ch12',
        title: '12. La durée idéale : 45 à 60 secondes',
        explanation: 'C\'est le format roi : suffisamment riche pour ressentir votre univers, et assez dynamique pour garder toute l\'attention.',
        bulletPoints: [
          'Moins de 20s : trop furtif, on n\'a pas le temps d\'entendre votre voix.',
          'Plus de 90s : risque de longueurs et de répétitions.',
          'Structure d\'or : 10s d\'accueil + 25s passions & quotidien + 15s vision du couple + 10s conclusion chaleureuse.'
        ],
        practicalTip: 'Utilisez le chronomètre d\'entraînement intégré à notre exercice pratique pour caler votre rythme.'
      }
    },
    {
      id: 'm2-ch13',
      order: 13,
      th: {
        id: 'm2-ch13',
        title: '13. จะพูดอะไรในช่วง 5-10 วินาทีแรก?',
        explanation: 'ช่วงเริ่มต้นคือช่วงตัดสินว่าคนดูจะดูต่อจนจบหรือไม่ เริ่มต้นด้วยพลังงานที่ดีและสดใส',
        examples: [
          {
            bad: {
              text: '(ยืนเงียบ 3 วินาที เคาะหน้าจอ ปรับกล้อง) "เอ่อ... Hello can you hear me?"',
              explanation: 'ทำให้ดูไม่พร้อมและเสียช่วงเวลาสำคัญไป'
            },
            good: {
              text: '"Bonjour! Sawasdee ka. I’m May from Chiang Mai. I’m so happy to share a little bit of my world with you today!"',
              explanation: 'มีพลัง ยิ้มแย้ม มั่นใจ และดึงดูดสายตาทันที'
            }
          }
        ],
        practicalTip: 'ยิ้มรอไว้ในใจ 1-2 วินาที ก่อนที่จะเอ่ยคำแรกออกมาเสมอ'
      },
      fr: {
        id: 'm2-ch13',
        title: '13. Que dire pendant les premières secondes',
        explanation: 'Les premières secondes déterminent l\'envie de regarder la vidéo jusqu\'au bout.',
        examples: [
          {
            bad: {
              text: '(3 secondes de silence, tapote l\'écran) « Euh... Hello ? Can you hear me ? »',
              explanation: 'Donne une impression d\'impréparation.'
            },
            good: {
              text: '« Bonjour ! Sawasdee ka. Je suis May, depuis Chiang Mai. Ravie de partager quelques instants de mon univers avec vous ! »',
              explanation: 'Accroche claire, tonique, lumineuse et pleine d\'élégance.'
            }
          }
        ],
        practicalTip: 'Fixez l\'objectif avec un regard bienveillant avant même de prononcer le premier mot.'
      }
    },
    {
      id: 'm2-ch14',
      order: 14,
      th: {
        id: 'm2-ch14',
        title: '14. โครงสร้างการเล่าเรื่องตัวตน (Storytelling)',
        explanation: 'แบ่งเนื้อหาออกเป็น 3 ส่วนหลักเพื่อให้การพูดลื่นไหลเป็นธรรมชาติ',
        bulletPoints: [
          'ส่วนที่ 1: คุณคือใคร และทำอะไร (งาน สิ่งที่คุณภูมิใจ)',
          'ส่วนที่ 2: งานอดิเรกที่มีชีวิตชีวา (ทำอาหาร ท่องเที่ยว ดนตรี ดูแลต้นไม้)',
          'ส่วนที่ 3: บรรยากาศของความสัมพันธ์ที่คุณมองหา'
        ],
        practicalTip: 'อย่าพยายามเล่าประวัติศาสตร์ทั้งชีวิต เล่าเฉพาะ "ช่วงเวลาที่มีความสุขและน่าจดจำในปัจจุบัน"'
      },
      fr: {
        id: 'm2-ch14',
        title: '14. Comment structurer sa présentation personnelle',
        explanation: 'Une structure narrative fluide permet d\'enchaîner sans hésitation.',
        bulletPoints: [
          'Partie 1 : Votre prénom, votre région, votre métier ou votre univers créatif.',
          'Partie 2 : Vos passe-temps favoris en quelques mots vivants.',
          'Partie 3 : Votre vision d\'un échange harmonieux.'
        ],
        practicalTip: 'Ne racontez pas toute votre biographie : focalisez sur ce qui fait vibrer votre quotidien aujourd\'hui.'
      }
    },
    {
      id: 'm2-ch15',
      order: 15,
      th: {
        id: 'm2-ch15',
        title: '15. การพูดถึงความสนใจและกิจกรรมที่คุณรัก',
        explanation: 'เวลาคนเราพูดถึงสิ่งที่ตัวเองรัก แววตาจะเปล่งประกายและใบหน้าจะมีเสน่ห์ขึ้นโดยอัตโนมัติ',
        bulletPoints: [
          'เลือกกิจกรรมที่มีความเคลื่อนไหว เช่น การทำผัดไทย การไปตลาดน้ำ หรือการวาดรูป',
          'เปิดพื้นที่เชื่อมโยง เช่น "ฉันชอบชิมขนมหวาน และอยากลองชิมครัวซองต์ฝรั่งเศสของแท้สักครั้ง"',
          'ยิ้มอย่างมีความสุขขณะพูดถึงกิจกรรมนั้น'
        ],
        practicalTip: 'เสน่ห์ที่แท้จริงเกิดจากความหลงใหลในสิ่งที่คุณทำ ไม่ใช่การพยายามแกล้งทำเป็นคนอื่น'
      },
      fr: {
        id: 'm2-ch15',
        title: '15. Comment parler de ses passions avec éclat',
        explanation: 'Quand on évoque une passion sincère, le visage s\'anime et le charme opère naturellement.',
        bulletPoints: [
          'Citez des activités évocatrices : cuisine, promenades, musique, décoration.',
          'Faites un clin d\'œil à la culture française : « J\'adore la bonne cuisine et j\'ai hâte de goûter un vrai croissant parisien ! »',
          'Laissez votre enthousiasme transparaître.'
        ],
        practicalTip: 'C\'est votre authenticité qui touche le cœur, jamais l\'artifice.'
      }
    },
    {
      id: 'm2-ch16',
      order: 16,
      th: {
        id: 'm2-ch16',
        title: '16. อธิบายสิ่งที่คุณมองหาในความสัมพันธ์อย่างอ่อนโยน',
        explanation: 'บอกความต้องการของคุณในเชิงบวก เน้นความเคารพ ความสุข และการเติบโตไปด้วยกัน',
        examples: [
          {
            bad: {
              text: 'I want rich man who buy me house.',
              explanation: 'ทำลายความน่าเชื่อถือทันที'
            },
            good: {
              text: 'I hope to meet a thoughtful, kind-hearted man who values communication and honest feelings, to build a happy journey together.',
              explanation: 'สื่อถึงความรักแท้ วุฒิภาวะ และการให้เกียรติ'
            }
          }
        ],
        practicalTip: 'คำพูดที่จริงใจจากหัวใจจะดึงดูดคนที่มีหัวใจแบบเดียวกันเข้ามา'
      },
      fr: {
        id: 'm2-ch16',
        title: '16. Exprimer ce que l\'on recherche avec douceur',
        explanation: 'Définissez la relation souhaitée avec finesse et maturité émotionnelle.',
        examples: [
          {
            bad: {
              text: 'I want rich man who buy me house.',
              explanation: 'Écarte immédiatement les hommes de valeur.'
            },
            good: {
              text: 'J\'espère rencontrer un homme doux et respectueux, avec qui partager de belles conversations et bâtir une relation durable.',
              explanation: 'Met l\'accent sur la tendresse, la confiance et l\'équilibre.'
            }
          }
        ],
        practicalTip: 'Parlez de ce qui nourrit le cœur et la complicité durable.'
      }
    },
    {
      id: 'm2-ch17',
      order: 17,
      th: {
        id: 'm2-ch17',
        title: '17. สิ่งที่ห้ามทำในวิดีโอเด็ดขาด',
        explanation: 'ข้อควรระวังสำคัญเพื่อรักษาเกียรติและความปลอดภัยของคุณเอง',
        errorsToAvoid: [
          'ห้ามถ่ายวิดีโอในขณะที่กำลังขับขี่รถมอเตอร์ไซค์หรือเดินอยู่ริมถนนที่มีเสียงดัง',
          'ห้ามใส่ฟิลเตอร์สัตว์ หูกระต่าย หรือฟิลเตอร์การ์ตูนลงบนใบหน้า เพราะทำให้ดูเหมือนเด็กเล่นและไม่จริงจัง',
          'ห้ามถ่ายคลิปในลักษณะล่อแหลมหรือวาบหวิว เพราะจะดึงดูดคนไม่ดีและอาจถูกนำคลิปไปใช้ในทางที่ผิด',
          'ห้ามให้เห็นเด็ก บุตรหลาน หรือบุคคลในครอบครัวโดยไม่จำเป็น เพื่อความปลอดภัยของคนรอบข้าง'
        ],
        practicalTip: 'รักษาความสง่างามและความเป็นส่วนตัวไว้เสมอ'
      },
      fr: {
        id: 'm2-ch17',
        title: '17. Ce qu\'il faut absolument éviter dans une vidéo',
        explanation: 'Les erreurs rédhibitoires à ne jamais commettre pour votre sécurité et votre image.',
        errorsToAvoid: [
          'Ne filmez jamais en conduisant un scooter ou en marchant au milieu d\'un trafic assourdissant.',
          'Bannissez les filtres déformants (oreilles de chat, paillettes artificielles) qui décrédibilisent votre démarche.',
          'Évitez toute posture équivoque ou suggestive qui attirerait de mauvaises intentions.',
          'Ne montrez jamais vos enfants à l\'écran pour préserver leur sécurité.'
        ],
        practicalTip: 'L\'élégance et la retenue sont vos plus précieux atouts.'
      }
    },
    {
      id: 'm2-ch18',
      order: 18,
      th: {
        id: 'm2-ch18',
        title: '18. เปรียบเทียบ: บทพูดที่ไม่ดี vs บทพูดที่ดีเยี่ยม',
        explanation: 'มาดูตัวอย่างการเปรียบเทียบสคริปต์ทั้งสองแบบ เพื่อให้เห็นความแตกต่างอย่างชัดเจน',
        examples: [
          {
            bad: {
              text: 'Hello. My name is Noi. I am 35. I like shopping. I am single. I want good husband to look after me. Okay thank you bye bye.',
              explanation: 'แห้งแล้ง ไม่มีจุดเด่น ดูเหมือนการบังคับพูด และจบห้วนเกินไป'
            },
            good: {
              text: 'Bonjour! Sawasdee ka. My name is Noi. 🌸 I live in Bangkok where I work in hospitality. When I’m not at work, I love creating new recipes in my kitchen and walking in local flower markets. I am looking for a kind, open-minded man with whom I can laugh, share cultures, and build a peaceful, loving future. I hope this little video brought a smile to your day. À bientôt!',
              explanation: 'ไพเราะ มีระดับ นำเสนอตัวตนได้ครบถ้วน และทิ้งท้ายด้วยความรู้สึกดี'
            }
          }
        ],
        practicalTip: 'สังเกตการเปิดด้วยคำทักทายสองภาษา และการจบด้วยคำว่า À bientôt (แล้วพบกันใหม่)'
      },
      fr: {
        id: 'm2-ch18',
        title: '18. Comparatif : Mauvais scénario vs Scénario d\'excellence',
        explanation: 'Mise en parallèle d\'un script terne et d\'un script captivant.',
        examples: [
          {
            bad: {
              text: 'Hello. My name is Noi. I am 35. I like shopping. I am single. I want good husband to look after me. Okay thank you bye bye.',
              explanation: 'Monotone, réducteur et dépourvu de charme.'
            },
            good: {
              text: 'Bonjour ! Sawasdee ka. Je m\'appelle Noi. 🌸 Je vis à Bangkok où je travaille dans l\'hôtellerie. Durant mes jours de repos, j\'adore tester de nouvelles recettes et explorer les marchés aux fleurs. Je cherche un homme doux et ouvert d\'esprit pour rire, échanger nos cultures et bâtir un avenir serein. J\'espère que cette vidéo vous donnera le sourire. À bientôt !',
              explanation: 'Complet, harmonieux, élégant et chaleureux.'
            }
          }
        ],
        practicalTip: 'La conclusion bienveillante laisse une impression mémorable.'
      }
    },
    {
      id: 'm2-ch19',
      order: 19,
      th: {
        id: 'm2-ch19',
        title: '19. แม่แบบบทพูด 50 วินาทีที่ปรับใช้ได้ทันที',
        explanation: 'คุณสามารถนำโครงสร้างนี้ไปเติมคำในช่องว่าง เพื่อสร้างบทพูดของคุณเองได้อย่างง่ายดาย',
        bulletPoints: [
          '[0-10 วินาที] สวัสดี + แนะนำชื่อ + ถิ่นที่อยู่: "Bonjour! Sawasdee ka. My name is [ชื่อคุณ] from [จังหวัดของคุณ]..."',
          '[10-30 วินาที] อาชีพ + สิ่งที่รักในชีวิตประจำวัน: "I work as [อาชีพของคุณ]. In my free time, I really enjoy [งานอดิเรก 1] and [งานอดิเรก 2]..."',
          '[30-45 วินาที] สิ่งที่ตามหาในความสัมพันธ์: "I am here hoping to meet a sincere, respectful man to build a sweet and meaningful relationship..."',
          '[45-55 วินาที] คำอวยพรและคำทักทายปิดท้าย: "Thank you for watching, and have a wonderful day! À bientôt! 😊"'
        ],
        practicalTip: 'ไปที่แบบฝึกหัดท้ายโมดูล เพื่อกรอกข้อมูลและทดลองใช้เครื่องมือซ้อมพูดหน้ากล้องได้เลย!'
      },
      fr: {
        id: 'm2-ch19',
        title: '19. Modèle de scénario en 50 secondes prêt à l\'emploi',
        explanation: 'Une matrice modulable où vous n\'avez plus qu\'à insérer vos éléments personnels.',
        bulletPoints: [
          '[0-10s] Salutations et origine : « Bonjour ! Sawasdee ka. Je m\'appelle [Votre Prénom] depuis [Votre Ville]... »',
          '[10-30s] Activité et passions : « J\'exerce comme [Métier]. À mes heures perdues, j\'aime particulièrement [Passion 1] et [Passion 2]... »',
          '[30-45s] Aspirations amoureuses : « J\'aimerais rencontrer un homme sérieux et bienveillant pour partager un chemin de vie complice... »',
          '[45-55s] Mot de clôture souriant : « Merci d\'avoir regardé cette vidéo, très belle journée à vous et à bientôt ! 😊 »'
        ],
        practicalTip: 'Rendez-vous dans l\'atelier pratique ci-dessous pour générer votre script sur-mesure !'
      }
    },
    {
      id: 'm2-ch20',
      order: 20,
      th: {
        id: 'm2-ch20',
        title: '20. เทคนิคก่อนกดปุ่มเผยแพร่ (Verification finale)',
        explanation: 'ก่อนอัปโหลดวิดีโอขึ้นสู่โปรไฟล์ของคุณ ให้ตรวจเช็ก 3 สิ่งนี้เสมอ',
        bulletPoints: [
          'ดูซ้ำแบบเปิดเสียงดังสุด: มีเสียงแตก หรือเสียงลมรบกวนหรือไม่?',
          'ดูภาพนิ่งตอนหยุดวิดีโอ (Thumbnail): ใบหน้าของคุณดูยิ้มแย้มและสว่างชัดเจนหรือไม่?',
          'ถามความรู้สึกตัวเอง: วิดีโอนี้สะท้อนความเป็นตัวคุณและทำให้คุณรู้สึกภูมิใจในตัวเองหรือไม่?'
        ],
        practicalTip: 'หากรู้สึกพอใจและยิ้มได้เมื่อดูตัวเอง วิดีโอนี้ก็พร้อมส่งต่อรอยยิ้มให้คนที่ใช่แล้ว!'
      },
      fr: {
        id: 'm2-ch20',
        title: '20. Dernières vérifications avant publication',
        explanation: 'Avant de mettre votre vidéo en ligne, passez ces 3 critères en revue.',
        bulletPoints: [
          'Vérifiez le son au volume maximum : aucun grésillement gênant ?',
          'Vérifiez l\'image d\'accueil : votre visage est-il souriant et net ?',
          'Écoutez votre ressenti : cette vidéo vous rend-elle fière de vous-même ?'
        ],
        practicalTip: 'Si vous souriez en vous regardant, votre vidéo est prête à conquérir les cœurs !'
      }
    }
  ]
};
