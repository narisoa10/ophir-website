import { defaultLocale, isLocale } from "./config";
import type { Locale } from "./config";

interface LanguagePreference {
  language: string;
  quality: number;
  index: number;
}

export function getLocaleFromLanguageTag(
  languageTag: string | undefined
): Locale | undefined {
  if (!languageTag) {
    return undefined;
  }

  const [primaryLanguage] = languageTag
    .trim()
    .toLowerCase()
    .split(";")[0]
    .split("-");

  return isLocale(primaryLanguage) ? primaryLanguage : undefined;
}

export function parseAcceptLanguageHeader(
  acceptLanguage: string | null | undefined
): string[] {
  if (!acceptLanguage) {
    return [];
  }

  return acceptLanguage
    .split(",")
    .map<LanguagePreference | undefined>((entry, index) => {
      const [language, ...parameters] = entry.trim().split(";");

      if (!language) {
        return undefined;
      }

      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q=")
      );
      const quality = qualityParameter
        ? Number(qualityParameter.trim().slice(2))
        : 1;

      return {
        language,
        quality: Number.isFinite(quality) ? quality : 0,
        index,
      };
    })
    .filter((entry): entry is LanguagePreference => Boolean(entry))
    .sort((a, b) => b.quality - a.quality || a.index - b.index)
    .map((entry) => entry.language);
}

export function getPreferredLocaleFromLanguages(
  languages: readonly string[]
): Locale {
  for (const language of languages) {
    const locale = getLocaleFromLanguageTag(language);

    if (locale) {
      return locale;
    }
  }

  return defaultLocale;
}

export function getPreferredLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined
): Locale {
  return getPreferredLocaleFromLanguages(
    parseAcceptLanguageHeader(acceptLanguage)
  );
}

export function getPreferredLocaleFromBrowserLanguages(
  languages: readonly string[] | undefined,
  language: string | undefined
): Locale {
  const browserLanguages = Array.isArray(languages)
    ? [...languages]
    : [];

  if (browserLanguages.length === 0 && language) {
    browserLanguages.push(language);
  }

  return getPreferredLocaleFromLanguages(browserLanguages);
}
