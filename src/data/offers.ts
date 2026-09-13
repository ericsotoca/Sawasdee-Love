import { OfferPlan } from '../types';

export const offerPlans: OfferPlan[] = [
  {
    id: 'offer-1',
    tier: 1,
    priceThb: 490,
    priceEur: 14,
    stripePaymentLinkDefault: 'https://buy.stripe.com/4gMeVd8eXbTReGE6Sq1B600',
    th: {
      name: 'แพ็กเกจที่ 1: ปรับแต่งโปรไฟล์',
      shortDescription: 'เข้าถึงโมดูลที่ 1 ทั้งหมด เพื่อสร้างโปรไฟล์ที่ดึงดูดและปลอดภัย',
      targetAudience: 'เหมาะสำหรับผู้ที่ต้องการเริ่มต้นเขียนโปรไฟล์ให้ถูกต้อง ชัดเจน และมีเสน่ห์',
      features: [
        'เข้าถึงโมดูลที่ 1 (13 บทเรียนแบบละเอียด)',
        'เทคนิคการเขียนคำบรรยายตัวตนให้น่าประทับใจ',
        'ตัวอย่างโปรไฟล์จริง (ทั้งแบบที่ดีและแบบที่ควรเลี่ยง)',
        'แบบฝึกหัดสร้างโปรไฟล์ทีละขั้นตอน (Profile Builder)',
        'เช็กลิสต์ตรวจความพร้อมก่อนเผยแพร่โปรไฟล์',
        'เข้าใช้งานได้ตลอดชีพ ไม่มีวันหมดอายุ'
      ],
      ctaText: 'สมัครเรียนแพ็กเกจโปรไฟล์ (490 บาท)',
      badge: 'เริ่มต้นทันที'
    },
    fr: {
      name: 'Offre 1 : Améliorer son profil',
      shortDescription: 'Accès complet au Module 1 pour un profil attractif et sécurisé.',
      targetAudience: 'Pour celles qui souhaitent une présentation écrite captivante et rassurante.',
      features: [
        'Accès complet au Module 1 (13 chapitres détaillés)',
        'Techniques de rédaction d\'accroche et de présentation de soi',
        'Exemples réels analysés (bons et mauvais modèles)',
        'Atelier pratique interactif de rédaction pas à pas',
        'Checklist finale de validation du profil',
        'Accès illimité sans abonnement récurrent'
      ],
      ctaText: 'Choisir cette offre (14 € / 490 THB)',
      badge: 'Indispensable'
    }
  },
  {
    id: 'offer-2',
    tier: 2,
    priceThb: 890,
    priceEur: 24,
    stripePaymentLinkDefault: 'https://buy.stripe.com/test_offer2_video',
    th: {
      name: 'แพ็กเกจที่ 2: โปรไฟล์ + วิดีโอแนะนำตัว',
      shortDescription: 'เข้าถึงโมดูลที่ 1 + โมดูลที่ 2 เทคนิคถ่ายวิดีโอด้วยมือถือให้ทรงพลัง',
      targetAudience: 'เหมาะสำหรับผู้ที่ต้องการสร้างความน่าเชื่อถือและความประทับใจสูงสุดด้วยคลิปสั้น',
      features: [
        'รวมทุกอย่างในแพ็กเกจที่ 1 (โมดูลที่ 1)',
        'เข้าถึงโมดูลที่ 2 ทั้งหมด (20 เทคนิคถ่ายวิดีโอด้วยสมาร์ตโฟน)',
        'การจัดแสง เสียง เสื้อผ้า และมุมกล้องให้สวยเป็นธรรมชาติ',
        'แม่แบบบทพูดวิดีโอ 50 วินาที พร้อมปรับใช้ได้ทันที',
        'แบบฝึกหัดสร้างสคริปต์ + จับเวลาซ้อมพูดหน้ากล้อง',
        'เช็กลิสต์ความพร้อมก่อนโพสต์วิดีโอ'
      ],
      ctaText: 'สมัครเรียนแพ็กเกจโปรไฟล์ + วิดีโอ (890 บาท)',
      badge: 'ยอดนิยมสูงสุด'
    },
    fr: {
      name: 'Offre 2 : Profil + Vidéo smartphone',
      shortDescription: 'Accès aux Modules 1 et 2 pour maximiser la confiance et l\'attractivité.',
      targetAudience: 'Pour celles qui souhaitent ajouter une courte vidéo percutante et naturelle.',
      features: [
        'Tout le contenu du Module 1 inclus',
        'Accès complet au Module 2 (20 chapitres vidéo smartphone)',
        'Maîtrise de la lumière, du son, de la posture et du cadrage',
        'Scénario de 50 secondes clé en main facile à adapter',
        'Générateur de script interactif + chronomètre d\'entraînement',
        'Checklist complète de contrôle vidéo avant publication'
      ],
      ctaText: 'Choisir cette offre (24 € / 890 THB)',
      badge: 'Le plus populaire'
    }
  },
  {
    id: 'offer-3',
    tier: 3,
    priceThb: 1490,
    priceEur: 39,
    stripePaymentLinkDefault: 'https://buy.stripe.com/test_offer3_vip',
    th: {
      name: 'แพ็กเกจที่ 3: คอมพลีทโปรไฟล์ + วิดีโอ + เข้าใจหนุ่มฝรั่งเศส',
      shortDescription: 'เข้าถึงครบทั้ง 3 โมดูล เพื่อสร้างความสัมพันธ์ที่มีคุณภาพ ยั่งยืน และปลอดภัย',
      targetAudience: 'หลักสูตรที่ครบถ้วนที่สุด เข้าใจความแตกต่างทางวัฒนธรรมและจับสัญญาณคนจริงจัง',
      features: [
        'เข้าถึงครบทั้งหมด 3 โมดูล (โมดูล 1 + โมดูล 2 + โมดูล 3)',
        'ทำความเข้าใจวัฒนธรรม ความคิด และอารมณ์ขันของหนุ่มฝรั่งเศส',
        'วิธีเปิดบทสนทนาให้น่าคุย และวิธีตอบข้อความแรกอย่างมีเสน่ห์',
        'สัญญาณบอกว่าเขาจริงใจ vs สัญญาณเตือนภัยอันตราย (Red Flags)',
        'แนวทางความปลอดภัยสูงสุด กฎเหล็กป้องกันมิจฉาชีพ 100%',
        'เทคนิคการนัดเดทจริงในที่สาธารณะอย่างมั่นใจ',
        'แบบประเมินความเข้ากันได้ และเช็กลิสต์ความพร้อมเริ่มต้นความรัก'
      ],
      ctaText: 'สมัครแพ็กเกจสมบูรณ์ครบ 3 โมดูล (1,490 บาท)',
      badge: 'คุ้มค่าและสมบูรณ์ที่สุด'
    },
    fr: {
      name: 'Offre 3 : Profil + Vidéo + Comprendre un homme français',
      shortDescription: 'Accès intégral aux 3 Modules : la formation complète d\'excellence.',
      targetAudience: 'Pour celles qui recherchent une relation sincère, sereine et sans pièges culturels.',
      features: [
        'Accès intégral aux Modules 1, 2 et 3',
        'Décryptage des codes culturels, de l\'humour et de la communication française',
        'Comment initier la conversation et répondre avec charme et esprit',
        'Indicateurs d\'un homme sérieux vs Red flags d\'alerte immédiats',
        'Sécurité absolue : protection des données et anti-arnaques',
        'Organiser un appel vidéo et une première rencontre en toute sécurité',
        'Atelier de compatibilité personnelle et checklist relationnelle'
      ],
      ctaText: 'Choisir l\'offre intégrale (39 € / 1 490 THB)',
      badge: 'Valeur maximale'
    }
  }
];
