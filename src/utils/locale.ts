import { Locale } from '@/lib/translations';

/**
 * Type guard to check if a string is a valid Locale
 */
export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'cz';
}

/**
 * Validates and returns a Locale, falling back to 'en' if invalid
 */
export function validateLocale(value: string): Locale {
  return isLocale(value) ? value : 'en';
}

/**
 * Validates and returns a Locale, throwing an error if invalid
 * Use this when you want to catch invalid locales in development
 */
export function validateLocaleStrict(value: string): Locale {
  if (!isLocale(value)) {
    throw new Error(`Invalid locale: "${value}". Expected "en" or "cz".`);
  }
  return value;
}
