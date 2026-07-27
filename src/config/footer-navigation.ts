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
    key: "product",
    links: [
      {
        key: "features",
        type: "homeSection",
        section: "features",
      },
      {
        key: "assistant",
        type: "homeSection",
        section: "assistant",
      },
      {
        key: "dataAccess",
        type: "homeSection",
        section: "dataAccess",
      },
      {
        key: "faq",
        type: "internalPage",
        page: "faq",
      },
    ],
  },
  {
    key: "trust",
    links: [
      {
        key: "trust",
        type: "internalPage",
        page: "trust",
      },
      {
        key: "security",
        type: "internalPage",
        page: "security",
      },
      {
        key: "data",
        type: "internalPage",
        page: "data",
      },
      {
        key: "plaid",
        type: "internalPage",
        page: "plaid",
      },
    ],
  },
  {
    key: "legal",
    links: [
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
        key: "cookiePolicy",
        type: "internalPage",
        page: "cookiePolicy",
      },
    ],
  },
] as const;

export type FooterNavigationGroupKey =
  (typeof footerNavigationGroups)[number]["key"];

export type FooterNavigationLinkKey =
  (typeof footerNavigationGroups)[number]["links"][number]["key"];
