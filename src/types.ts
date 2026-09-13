export type Language = 'th' | 'fr';

export type TierLevel = 1 | 2 | 3;

export interface ExamplePair {
  bad: {
    text: string;
    explanation: string;
  };
  good: {
    text: string;
    explanation: string;
  };
}

export interface ChapterContent {
  id: string;
  title: string;
  subtitle?: string;
  explanation: string;
  bulletPoints?: string[];
  examples?: ExamplePair[];
  errorsToAvoid?: string[];
  practicalTip?: string;
  quickExercise?: {
    prompt: string;
    placeholder: string;
    guidance: string;
  };
}

export interface Chapter {
  id: string;
  order: number;
  th: ChapterContent;
  fr: ChapterContent;
}

export interface ChecklistItem {
  id: string;
  th: string;
  fr: string;
  category?: string;
}

export interface ModuleData {
  id: string;
  tierRequired: TierLevel;
  th: {
    title: string;
    tagline: string;
    description: string;
    duration: string;
    badge: string;
  };
  fr: {
    title: string;
    tagline: string;
    description: string;
    duration: string;
    badge: string;
  };
  chapters: Chapter[];
  checklistTitle: {
    th: string;
    fr: string;
  };
  checklist: ChecklistItem[];
  exerciseType: 'profile_builder' | 'video_script' | 'compatibility_assessment';
}

export interface OfferPlan {
  id: string;
  tier: TierLevel;
  priceThb: number;
  priceEur: number;
  stripePaymentLinkDefault: string;
  th: {
    name: string;
    shortDescription: string;
    targetAudience: string;
    features: string[];
    ctaText: string;
    badge?: string;
  };
  fr: {
    name: string;
    shortDescription: string;
    targetAudience: string;
    features: string[];
    ctaText: string;
    badge?: string;
  };
}

export interface UserAccessState {
  currentTier: TierLevel | 0;
  enteredCode: string | null;
  unlockedAt: string | null;
}

export interface UserProgressState {
  completedChapters: string[]; // chapter ids
  completedChecklists: string[]; // item ids
  profileDraft?: {
    hook: string;
    personality: string;
    hobbies: string;
    seeking: string;
  };
  videoScript?: {
    intro: string;
    passions: string;
    intentions: string;
    closing: string;
  };
}
