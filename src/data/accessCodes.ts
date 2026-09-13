import { TierLevel, UserAccessState } from '../types';

export interface AccessCodeConfig {
  code: string;
  tier: TierLevel;
  label: string;
}

// Default access codes provided for the platform
// The creator can also customize these in the Creator Settings or via environment
export const DEFAULT_ACCESS_CODES: Record<TierLevel, string[]> = {
  1: ['SAWASDEE-P1', 'PROFIL2025', 'THAI-P1'],
  2: ['SAWASDEE-V2', 'VIDEO2025', 'THAI-V2'],
  3: ['SAWASDEE-VIP3', 'FRANCE2025', 'THAI-VIP3']
};

const STORAGE_KEY_ACCESS = 'sawasdee_love_access_state';
const STORAGE_KEY_CUSTOM_CODES = 'sawasdee_love_custom_codes';
const STORAGE_KEY_STRIPE_LINKS = 'sawasdee_love_stripe_links';
const STORAGE_KEY_COMPLETED_CHAPTERS = 'sawasdee_love_completed_chapters';
const STORAGE_KEY_COMPLETED_CHECKLISTS = 'sawasdee_love_completed_checklists';

export function getStoredAccessState(): UserAccessState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACCESS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.currentTier === 'number') {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to load access state', e);
  }
  return {
    currentTier: 0,
    enteredCode: null,
    unlockedAt: null
  };
}

export const getUserAccessState = getStoredAccessState;

export function saveAccessState(state: UserAccessState): void {
  try {
    localStorage.setItem(STORAGE_KEY_ACCESS, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save access state', e);
  }
}

export const saveUserAccessState = saveAccessState;

export function getCompletedChapters(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_COMPLETED_CHAPTERS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load completed chapters', e);
  }
  return [];
}

export function saveCompletedChapters(chapters: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_COMPLETED_CHAPTERS, JSON.stringify(chapters));
  } catch (e) {
    console.error('Failed to save completed chapters', e);
  }
}

export function getCompletedChecklists(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_COMPLETED_CHECKLISTS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load completed checklists', e);
  }
  return [];
}

export function saveCompletedChecklists(items: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_COMPLETED_CHECKLISTS, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save completed checklists', e);
  }
}

export function clearAccessState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_ACCESS);
  } catch (e) {
    console.error('Failed to clear access state', e);
  }
}

export function getCustomCodes(): Record<TierLevel, string[]> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_CODES);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load custom codes', e);
  }
  return DEFAULT_ACCESS_CODES;
}

export function saveCustomCodes(codes: Record<TierLevel, string[]>): void {
  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_CODES, JSON.stringify(codes));
  } catch (e) {
    console.error('Failed to save custom codes', e);
  }
}

export function verifyAccessCode(inputCode: string): { valid: boolean; tier: TierLevel | 0; message?: string } {
  const cleanCode = inputCode.trim().toUpperCase();
  if (!cleanCode) {
    return { valid: false, tier: 0, message: 'กรุณากรอกรหัสผ่าน / Veuillez entrer un code' };
  }

  const customCodes = getCustomCodes();

  // Check tier 3 first (highest access)
  if (
    customCodes[3]?.some(c => c.toUpperCase() === cleanCode) ||
    DEFAULT_ACCESS_CODES[3].some(c => c.toUpperCase() === cleanCode)
  ) {
    return { valid: true, tier: 3 };
  }

  // Check tier 2
  if (
    customCodes[2]?.some(c => c.toUpperCase() === cleanCode) ||
    DEFAULT_ACCESS_CODES[2].some(c => c.toUpperCase() === cleanCode)
  ) {
    return { valid: true, tier: 2 };
  }

  // Check tier 1
  if (
    customCodes[1]?.some(c => c.toUpperCase() === cleanCode) ||
    DEFAULT_ACCESS_CODES[1].some(c => c.toUpperCase() === cleanCode)
  ) {
    return { valid: true, tier: 1 };
  }

  return { valid: false, tier: 0, message: 'รหัสไม่ถูกต้อง กรุณาตรวจสอบรหัสผ่านของคุณ / Code invalide' };
}

export function getStripePaymentLinks(): Record<TierLevel, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STRIPE_LINKS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load Stripe links', e);
  }
  return {
    1: 'https://buy.stripe.com/test_offer1_profil',
    2: 'https://buy.stripe.com/test_offer2_video',
    3: 'https://buy.stripe.com/test_offer3_vip'
  };
}

export function saveStripePaymentLinks(links: Record<TierLevel, string>): void {
  try {
    localStorage.setItem(STORAGE_KEY_STRIPE_LINKS, JSON.stringify(links));
  } catch (e) {
    console.error('Failed to save Stripe links', e);
  }
}
