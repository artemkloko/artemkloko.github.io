import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

// Type-safe locale definition
export type Locale = 'en' | 'de';
export const SUPPORTED_LOCALES: Locale[] = ['en', 'de'];

export const i18n = createI18n({
  legacy: false, // For Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    de
  }
})
