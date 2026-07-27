import type { Locale } from "../i18n/config";

import { siteSections, type SiteSectionKey } from "./site-sections";

export const internalPagePaths = {
  trust: "/trust",
  security: "/security",
  data: "/data",
  plaid: "/plaid",
  faq: "/faq",
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
  cookiePolicy: "/cookie-policy",
} as const;

export type InternalPageKey = keyof typeof internalPagePaths;

export const internalPageKeys = Object.keys(
  internalPagePaths
) as InternalPageKey[];

export function getInternalPageSlug(page: InternalPageKey) {
  return internalPagePaths[page].slice(1);
}

export function getLocalizedHomePath(locale: Locale) {
  return `/${locale}/`;
}

export function getLocalizedHomeSectionHref(
  locale: Locale,
  section: SiteSectionKey
) {
  return `${getLocalizedHomePath(locale)}${siteSections[section]}`;
}

export function getLocalizedInternalPageHref(
  locale: Locale,
  page: InternalPageKey
) {
  return `/${locale}${internalPagePaths[page]}`;
}
