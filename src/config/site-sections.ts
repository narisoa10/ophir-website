export const siteSections = {
  dataAccess: "#data-access",
  features: "#features",
  assistant: "#assistant",
  contact: "#contact",
} as const;

export type SiteSectionKey = keyof typeof siteSections;
