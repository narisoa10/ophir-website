import type { translations } from "../i18n/translations";

import type { SiteSectionKey } from "./site-sections";

type NavigationTranslations =
  (typeof translations)[keyof typeof translations]["navigation"];

export type PrimaryNavigationKey = Extract<
  keyof NavigationTranslations,
  SiteSectionKey
>;

interface PrimaryNavigationItem {
  key: PrimaryNavigationKey;
  section: SiteSectionKey;
}

export const primaryNavigationItems = [
  {
    key: "assistant",
    section: "assistant",
  },
] as const satisfies readonly PrimaryNavigationItem[];
