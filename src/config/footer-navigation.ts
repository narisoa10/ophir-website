import type { InternalPageKey } from "./site-routes";
import type { SiteSectionKey } from "./site-sections";

interface FooterHomeSectionLink {
  key: string;
  type: "homeSection";
  section: SiteSectionKey;
}

interface FooterInternalPageLink {
  key: string;
  type: "internalPage";
  page: InternalPageKey;
}

export type FooterNavigationLink =
  | FooterHomeSectionLink
  | FooterInternalPageLink;

export const footerNavigationGroups = [
  {
    key: "company",
    links: [
      {
        key: "about",
        type: "internalPage",
        page: "about",
      },
      {
        key: "contact",
        type: "internalPage",
        page: "contact",
      },
    ],
  },
  {
    key: "support",
    links: [
      {
        key: "faq",
        type: "internalPage",
        page: "faq",
      },
      {
        key: "contactSupport",
        type: "internalPage",
        page: "support",
      },
      {
        key: "manageSubscription",
        type: "internalPage",
        page: "subscription",
      },
      {
        key: "cancellationAndRefunds",
        type: "internalPage",
        page: "cancellation",
      },
      {
        key: "accountData",
        type: "internalPage",
        page: "accountData",
      },
    ],
  },
  {
    key: "trustLegal",
    links: [
      {
        key: "security",
        type: "internalPage",
        page: "security",
      },
      {
        key: "privacyPolicy",
        type: "internalPage",
        page: "privacyPolicy",
      },
      {
        key: "termsOfService",
        type: "internalPage",
        page: "termsOfService",
      },
      {
        key: "appTechnologies",
        type: "internalPage",
        page: "appTechnologies",
      },
      {
        key: "accessibility",
        type: "internalPage",
        page: "accessibility",
      },
    ],
  },
] as const;

export type FooterNavigationGroupKey =
  (typeof footerNavigationGroups)[number]["key"];

export type FooterNavigationLinkKey =
  (typeof footerNavigationGroups)[number]["links"][number]["key"];
