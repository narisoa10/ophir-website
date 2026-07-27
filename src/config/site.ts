const siteUrl = "https://joinophir.app";

export const siteConfig = {
  name: "OPHIR",
  title: "OPHIR — Personal and Family Finance",
  description:
    "OPHIR helps individuals and families understand their finances and make healthier financial decisions.",
  siteUrl,
  url: siteUrl,
  locale: "en",
  author: "OPHIR",
  contacts: {
    hello: "hello@joinophir.app",
    general: "contact@joinophir.app",
    privacy: "privacy@joinophir.app",
    support: "support@joinophir.app",
  },
  address: {
    street: "1203 Rue Normont",
    city: "Laval",
    region: "Québec",
    postalCode: "H7G 3H3",
    country: "Canada",
  },
} as const;
