import { Language, Translations } from './types';
import { uz } from './uz';
import { ru } from './ru';
import { en } from './en';

export const translations: Record<Language, Translations> = {
  uz,
  ru,
  en,
};

export const defaultLanguage: Language = 'uz';

export * from './types';
