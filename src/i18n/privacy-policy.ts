import { siteConfig } from "../config/site";
import type { Locale } from "./config";

const privacyContactEmail = siteConfig.contacts.privacy;
const updatedDate = "2026-07-26";

const sectionKeys = [
  "introduction",
  "scope",
  "informationWeProcess",
  "informationYouProvide",
  "financialAccountInformation",
  "technicalInformation",
  "howWeUseInformation",
  "legalBases",
  "serviceProviders",
  "financialDataConnectivityProviders",
  "dataRetention",
  "dataDeletion",
  "securityMeasures",
  "internationalProcessing",
  "userRights",
  "childrenPrivacy",
  "policyChanges",
  "contactInformation",
] as const;

type PrivacyPolicySectionKey = (typeof sectionKeys)[number];

type PrivacyPolicyBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: readonly string[];
    }
  | {
      type: "email";
      label: string;
      email: string;
    };

type PrivacyPolicySection = {
  key: PrivacyPolicySectionKey;
  title: string;
  blocks: readonly PrivacyPolicyBlock[];
};

type PrivacyPolicyDocument = {
  title: string;
  seoTitle: string;
  description: string;
  updatedLabel: string;
  updated: string;
  updatedDate: string;
  sections: readonly PrivacyPolicySection[];
};

export const privacyPolicyContent = {
  en: {
    title: "Privacy Policy",
    seoTitle: "Privacy Policy | OPHIR",
    description:
      "How OPHIR processes personal information, financial information, account connections, data retention, deletion, and user rights.",
    updatedLabel: "Last updated:",
    updated: "July 26, 2026",
    updatedDate,
    sections: [
      {
        key: "introduction",
        title: "Introduction",
        blocks: [
          {
            type: "paragraph",
            text: "This Privacy Policy explains how OPHIR processes personal information and financial information on the website, in user accounts, product interfaces, support channels, and related services. The product brings personal and family finances into a clear workspace for budgets, analysis, planning, and day-to-day financial decisions. Clear rules for working with data are part of that experience: users need to see what information enters the product, why it is used, and how control over connected information works.",
          },
          {
            type: "paragraph",
            text: "The service provides informational tools and features for organizing finances. OPHIR is not a bank, does not hold user funds, and does not transfer money on behalf of a user. This Policy describes data processing practices and applies together with the product terms and notices displayed for individual features or permissions.",
          },
        ],
      },
      {
        key: "scope",
        title: "Scope of this Policy",
        blocks: [
          {
            type: "paragraph",
            text: "This Policy applies when a person visits the OPHIR website, creates or uses a user account, connects financial accounts, manually enters financial information, joins a shared or family workspace, contacts support, or uses a feature based on personal or financial information.",
          },
          {
            type: "paragraph",
            text: "External services are governed by their own privacy policies and terms. Financial institutions, Plaid, app stores, identity providers, and other third parties process information according to the permissions, contracts, and policies that apply to their services. The user's relationship with those services remains separate from the relationship with OPHIR.",
          },
        ],
      },
      {
        key: "informationWeProcess",
        title: "Information We Process",
        blocks: [
          {
            type: "paragraph",
            text: "The information processed depends on the features selected by the user. It includes profile data, contact details, authentication-related records, workspace settings, information about family or household members, product preferences, support messages, and records of activity in the service.",
          },
          {
            type: "paragraph",
            text: "Financial information covers account names and types, balances, transaction details, dates, merchants, categories, recurring transactions, budgets, goals, savings plans, debts, notes, labels, and analytics created in the product. Collection is connected to the operation, protection, improvement, and support of the service.",
          },
        ],
      },
      {
        key: "informationYouProvide",
        title: "Information Provided by the User",
        blocks: [
          {
            type: "paragraph",
            text: "A user provides information when creating a user account, completing initial setup, configuring a profile, adding a budget, entering transactions, creating goals, naming accounts, inviting family members, selecting preferences, or contacting support. Manual records and user labels make the financial picture more useful and accurate, especially when a connected account does not fully explain the purpose of a transaction.",
          },
          {
            type: "paragraph",
            text: "Shared workspaces require separate attention. Depending on roles and permissions, information added by one participant is visible to other participants. Workspace settings determine who can see personal and shared financial context.",
          },
        ],
      },
      {
        key: "financialAccountInformation",
        title: "Financial Account Information",
        blocks: [
          {
            type: "paragraph",
            text: "After a financial account is connected, authorized information is received from a financial data provider. This information is used for balances, transaction imports, categorization, cash-flow views, budgets, goals, reports, and analytics.",
          },
          {
            type: "paragraph",
            text: "OPHIR does not receive the credentials used to sign in to an account at a financial institution. The connection process is performed by the provider and the financial institution. The provider is responsible for its own services and privacy practices, while OPHIR processes the financial information available for the user's workspace.",
          },
        ],
      },
      {
        key: "technicalInformation",
        title: "Technical Information",
        blocks: [
          {
            type: "paragraph",
            text: "The website and product rely on technical information for stable and protected operation. It includes device and browser data, IP address, region based on network data, language, referring pages, timestamps, cookies or similar identifiers, sessions, diagnostic data, and service logs. These records also help distinguish ordinary use from activity that creates risk for accounts or the service.",
          },
          {
            type: "paragraph",
            text: "These records support account sessions, product preferences, error detection, performance monitoring, abuse prevention, service protection operations, and product improvement. Browser settings and product controls determine how individual cookies and similar technologies work.",
          },
        ],
      },
      {
        key: "howWeUseInformation",
        title: "How We Use Information",
        blocks: [
          {
            type: "paragraph",
            text: "Information is used in the day-to-day operation of the service. It supports accounts, shows financial information in context, turns budgets and goals into understandable views, prepares summaries and analytics, synchronizes connected accounts, helps respond to requests, and enables service communications.",
          },
          {
            type: "paragraph",
            text: "It also supports product quality, issue resolution, service protection, abuse prevention, enforcement of terms, and performance of applicable obligations. Users' financial information is not sold.",
          },
        ],
      },
      {
        key: "legalBases",
        title: "Legal Bases, Where Applicable",
        blocks: [
          {
            type: "paragraph",
            text: "When applicable law requires a legal basis, that basis depends on the context. The service relies, in particular, on providing the requested product, taking steps at the user's request before an account relationship begins, fulfilling legal obligations, legitimate interests in the product and security, and consent for individual features.",
          },
          {
            type: "paragraph",
            text: "Consent plays a key role for financial account connections, additional features, and certain communication or privacy settings. Withdrawing consent affects features that depend on the relevant information, including account synchronization or additional personalization.",
          },
        ],
      },
      {
        key: "serviceProviders",
        title: "Sharing Information with Service Providers",
        blocks: [
          {
            type: "paragraph",
            text: "Selected service providers support the operation of the product, including infrastructure, communications, customer support, and financial data connectivity. Providers that process user information for OPHIR must use it only for the services they provide and protect it in a manner consistent with this Policy and applicable requirements.",
          },
          {
            type: "paragraph",
            text: "Information is disclosed when required by law, a lawful request, security needs, investigation of misuse, enforcement of agreements, or a corporate transaction. Such transactions include a merger, acquisition, financing, restructuring, or transfer of assets.",
          },
        ],
      },
      {
        key: "financialDataConnectivityProviders",
        title: "Financial Data Providers",
        blocks: [
          {
            type: "paragraph",
            text: "Plaid is used as a financial data provider to help users connect accounts and import authorized data. The connection takes place through Plaid Link, where the user selects a financial institution and authorizes the sharing of accounts and data for OPHIR features.",
          },
          {
            type: "paragraph",
            text: "Plaid's processing is governed by Plaid's privacy policy and terms. Users choose which accounts to connect and manage or disconnect them through OPHIR, Plaid Portal where available, or the financial institution. Disconnecting an account stops future updates; data already imported into OPHIR is processed under OPHIR's data retention and deletion rules.",
          },
        ],
      },
      {
        key: "dataRetention",
        title: "Data Retention",
        blocks: [
          {
            type: "paragraph",
            text: "Information remains in the service while it is needed for account operation, historical context, requested features, dispute handling, abuse prevention, legal or operational requirements, and the security and integrity of the product.",
          },
          {
            type: "paragraph",
            text: "Retention periods vary depending on the type of information, account status, product settings, user requests, and applicable obligations. When information is no longer needed, it is deleted, de-identified, aggregated, or retained only in a limited form for protective, legal, or operational records.",
          },
        ],
      },
      {
        key: "dataDeletion",
        title: "Data Deletion",
        blocks: [
          {
            type: "paragraph",
            text: "Users may submit a deletion request for their OPHIR account and personal information associated with that account. Account deletion ends access to the account and starts deletion or de-identification of information that no longer serves legitimate service, protective, legal, or operational purposes.",
          },
          {
            type: "paragraph",
            text: "Some records are retained for limited reasons, including dispute resolution, fraud prevention, security, accounting, backups, legal obligations, or enforcement of agreements. Disconnecting a financial account is different from deleting OPHIR data: disconnection stops future imports, while deletion concerns information already held by the service.",
          },
        ],
      },
      {
        key: "securityMeasures",
        title: "Security Measures",
        blocks: [
          {
            type: "paragraph",
            text: "Protecting user information is one of the key principles in the development and operation of OPHIR.",
          },
          {
            type: "paragraph",
            text: "We apply administrative, technical, and organizational measures aimed at reducing the risk of unauthorized access, loss, alteration, disclosure, or improper use of information.",
          },
          {
            type: "paragraph",
            text: "Depending on the nature of the data processed and the features used, such measures may include:",
          },
          {
            type: "list",
            items: [
              "access control for internal systems;",
              "separation of employee access rights;",
              "use of protected data transmission channels;",
              "encryption of information in transit;",
              "protection of infrastructure against unauthorized access;",
              "security monitoring;",
              "maintenance of security logs;",
              "backup of critical data;",
              "regular software updates;",
              "procedures for responding to information security incidents.",
            ],
          },
          {
            type: "paragraph",
            text: "Despite these measures, no method of transmitting information over the Internet or storing it electronically can guarantee absolute security. For this reason, OPHIR cannot guarantee that any technical measures fully exclude the possibility of incidents.",
          },
          {
            type: "paragraph",
            text: "The user also plays an important role in protecting their information. We recommend using strong passwords, updating device software in a timely manner, limiting access by third parties to personal devices, staying alert to fraud attempts, and notifying us promptly about any suspicious activity related to use of the user account.",
          },
        ],
      },
      {
        key: "internationalProcessing",
        title: "International Processing of Information",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR may provide its services to users in different countries.",
          },
          {
            type: "paragraph",
            text: "For that reason, information may be processed in countries where servers, infrastructure, service providers, or other organizations involved in providing product features are located.",
          },
          {
            type: "paragraph",
            text: "Data protection laws in such countries may differ from the laws of the user's country of residence.",
          },
          {
            type: "paragraph",
            text: "Where required by applicable law, OPHIR takes reasonable measures to ensure an appropriate level of protection for information during international transfer, including the use of data transfer mechanisms provided by law and contractual obligations with service providers.",
          },
        ],
      },
      {
        key: "userRights",
        title: "Your Rights",
        blocks: [
          {
            type: "paragraph",
            text: "Depending on applicable law, the user may have the following rights in relation to their personal information:",
          },
          {
            type: "list",
            items: [
              "receive information about which data is processed;",
              "access their personal information;",
              "request correction of inaccurate or incomplete data;",
              "request deletion of personal information;",
              "restrict processing of information in cases provided by law;",
              "object to certain types of processing;",
              "withdraw previously provided consent;",
              "receive a copy of provided information in a portable format, where such right is provided by law;",
              "submit complaints to competent personal data protection authorities.",
            ],
          },
          {
            type: "paragraph",
            text: "To protect users, OPHIR may request additional information that allows us to verify the identity of the requester before providing access to information or fulfilling the relevant request.",
          },
          {
            type: "paragraph",
            text: "If a request concerns information controlled by a financial institution, Plaid, or another independent organization, OPHIR may direct the user to the relevant party because OPHIR does not have authority to modify or delete such information.",
          },
          {
            type: "paragraph",
            text: "If the user participates in a shared family workspace, fulfillment of certain requests may be limited by the need to preserve information related to other participants in that workspace.",
          },
        ],
      },
      {
        key: "childrenPrivacy",
        title: "Children's Privacy",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR is intended for use by persons who have the right to enter into agreements independently under applicable law.",
          },
          {
            type: "paragraph",
            text: "The service is not intended for children and was not created as a product for use by minors without the involvement of legal representatives.",
          },
          {
            type: "paragraph",
            text: "We do not knowingly collect personal information directly from children through registration or use of OPHIR.",
          },
          {
            type: "paragraph",
            text: "Shared family finance features are intended for adult users who independently decide the composition of participants in the shared workspace and are responsible for the information they add to the service.",
          },
          {
            type: "paragraph",
            text: "If we become aware that a child's personal information has been obtained in violation of applicable law, we will take reasonable measures to delete it as soon as possible.",
          },
        ],
      },
      {
        key: "policyChanges",
        title: "Changes to this Policy",
        blocks: [
          {
            type: "paragraph",
            text: "We may update this Privacy Policy from time to time in connection with the development of OPHIR, changes in law, implementation of new features, changes in the composition of service providers, or improvement of data processing practices.",
          },
          {
            type: "paragraph",
            text: "The current version of the Policy is always published on the official OPHIR website with the date of the last update.",
          },
          {
            type: "paragraph",
            text: "If changes materially affect user rights or the way personal information is processed, we may also notify users by means provided by product functionality or applicable legal requirements.",
          },
          {
            type: "paragraph",
            text: "Continued use of OPHIR after changes take effect means that the updated version of the Privacy Policy applies, unless otherwise provided by law.",
          },
        ],
      },
      {
        key: "contactInformation",
        title: "Contact Information",
        blocks: [
          {
            type: "paragraph",
            text: "If you have questions related to this Privacy Policy, processing of personal information, use of financial information, or exercise of your rights, you can contact us.",
          },
          {
            type: "email",
            label: "Email:",
            email: privacyContactEmail,
          },
          {
            type: "paragraph",
            text: "When contacting us, please do not send bank logins, passwords, verification codes, full bank card numbers, full financial account numbers, or other confidential information by email if it is not required to review your request.",
          },
          {
            type: "paragraph",
            text: "If additional legal or postal details are required to comply with legal requirements, the relevant information will be provided upon request or published in the official sections of the OPHIR website.",
          },
        ],
      },
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    seoTitle: "Politique de confidentialité | OPHIR",
    description:
      "Comment OPHIR traite les informations personnelles, les informations financières, les connexions de comptes, la conservation des informations, la suppression et les droits des utilisateurs.",
    updatedLabel: "Dernière mise à jour :",
    updated: "26 juillet 2026",
    updatedDate,
    sections: [
      {
        key: "introduction",
        title: "Introduction",
        blocks: [
          {
            type: "paragraph",
            text: "La présente Politique de confidentialité explique comment OPHIR traite les informations personnelles et les informations financières sur le site, dans les comptes utilisateur, les interfaces produit, les canaux d'assistance et les services associés. Le produit réunit les finances personnelles et familiales dans un espace de travail clair pour les budgets, l'analyse, la planification et les décisions financières du quotidien. Des règles compréhensibles de traitement des données font partie de cette expérience : l'utilisateur doit savoir quelles informations entrent dans le produit, pourquoi elles sont utilisées et comment le contrôle des informations connectées est organisé.",
          },
          {
            type: "paragraph",
            text: "Le service fournit des outils d'information et des fonctionnalités d'organisation financière. OPHIR n'est pas une banque, ne conserve pas les fonds des utilisateurs et ne transfère pas d'argent au nom d'un utilisateur. Cette Politique décrit les pratiques de traitement des informations et s'applique avec les conditions du produit et les avis affichés pour certaines fonctionnalités ou autorisations.",
          },
        ],
      },
      {
        key: "scope",
        title: "Champ d'application de cette Politique",
        blocks: [
          {
            type: "paragraph",
            text: "Cette Politique s'applique lorsqu'une personne visite le site OPHIR, crée ou utilise un compte utilisateur, connecte des comptes financiers, saisit manuellement des informations financières, rejoint un espace partagé ou familial, contacte l'assistance ou utilise une fonctionnalité fondée sur des informations personnelles ou financières.",
          },
          {
            type: "paragraph",
            text: "Les services externes sont régis par leurs propres politiques de confidentialité et conditions. Les institutions financières, Plaid, les boutiques d'applications, les fournisseurs d'identité et les autres tiers traitent les informations conformément aux autorisations, contrats et politiques applicables à leurs services. La relation de l'utilisateur avec ces services reste distincte de sa relation avec OPHIR.",
          },
        ],
      },
      {
        key: "informationWeProcess",
        title: "Informations que nous traitons",
        blocks: [
          {
            type: "paragraph",
            text: "La composition des informations dépend des fonctionnalités choisies par l'utilisateur. Ces informations comprennent les données de profil, les coordonnées, les enregistrements liés à l'authentification, les paramètres de l'espace de travail, les informations relatives aux membres de la famille ou du foyer, les préférences produit, les messages adressés à l'assistance et les enregistrements d'activité dans le service.",
          },
          {
            type: "paragraph",
            text: "Les informations financières couvrent les noms et types de comptes, les soldes, les détails des transactions, les dates, les commerçants, les catégories, les opérations récurrentes, les budgets, les objectifs, les plans d'épargne, les dettes, les notes, les libellés et les analyses créées dans le produit. La collecte est liée au fonctionnement, à la protection, à l'amélioration et à l'assistance du service.",
          },
        ],
      },
      {
        key: "informationYouProvide",
        title: "Informations fournies par l'utilisateur",
        blocks: [
          {
            type: "paragraph",
            text: "L'utilisateur fournit des informations lors de la création d'un compte utilisateur, de la configuration initiale, de la configuration d'un profil, de l'ajout d'un budget, de la saisie de transactions, de la création d'objectifs, du nommage de comptes, de l'invitation de membres de la famille, du choix de préférences ou d'une demande d'assistance. Les enregistrements manuels et les libellés utilisateur rendent la vue financière plus utile et plus exacte, en particulier lorsqu'un compte connecté n'explique pas entièrement l'objet d'une transaction.",
          },
          {
            type: "paragraph",
            text: "Les espaces partagés nécessitent une attention particulière. Selon les rôles et les autorisations, les informations ajoutées par un participant sont visibles par d'autres participants. Les paramètres de l'espace déterminent qui voit le contexte financier personnel et partagé.",
          },
        ],
      },
      {
        key: "financialAccountInformation",
        title: "Informations relatives aux comptes financiers",
        blocks: [
          {
            type: "paragraph",
            text: "Après la connexion d'un compte financier, les informations autorisées proviennent d'un fournisseur de données financières. Ces informations sont utilisées pour les soldes, l'importation des transactions, la catégorisation, les vues de flux de trésorerie, les budgets, les objectifs, les rapports et les analyses.",
          },
          {
            type: "paragraph",
            text: "OPHIR ne reçoit pas les identifiants utilisés pour se connecter à un compte auprès d'une institution financière. Le processus de connexion est exécuté par le fournisseur et l'institution financière. Le fournisseur est responsable de ses propres services et pratiques de confidentialité, tandis qu'OPHIR traite les informations financières disponibles pour l'espace de travail de l'utilisateur.",
          },
        ],
      },
      {
        key: "technicalInformation",
        title: "Informations techniques",
        blocks: [
          {
            type: "paragraph",
            text: "Le site et le produit s'appuient sur des informations techniques pour fonctionner de manière stable et protégée. Elles comprennent les données de l'appareil et du navigateur, l'adresse IP, la région établie à partir des données réseau, la langue, les pages de provenance, les horodatages, les cookies ou identifiants similaires, les sessions, les données de diagnostic et les journaux de service. Ces enregistrements aident aussi à distinguer l'utilisation normale d'une activité créant un risque pour les comptes ou le service.",
          },
          {
            type: "paragraph",
            text: "Ces enregistrements prennent en charge les sessions de compte, les préférences produit, la détection des erreurs, le suivi des performances, la prévention des abus, les opérations de protection du service et l'amélioration du produit. Les paramètres du navigateur et les contrôles du produit déterminent le fonctionnement des différents cookies et technologies similaires.",
          },
        ],
      },
      {
        key: "howWeUseInformation",
        title: "Comment nous utilisons les informations",
        blocks: [
          {
            type: "paragraph",
            text: "Les informations sont utilisées dans le fonctionnement quotidien du service. Elles prennent en charge les comptes, affichent les informations financières en contexte, transforment les budgets et objectifs en vues compréhensibles, préparent des synthèses et des analyses, synchronisent les comptes connectés, aident à répondre aux demandes et permettent les communications de service.",
          },
          {
            type: "paragraph",
            text: "Elles soutiennent également la qualité du produit, la résolution des problèmes, la protection du service, la prévention des abus, l'application des conditions et l'exécution des obligations applicables. Les informations financières des utilisateurs ne sont pas vendues.",
          },
        ],
      },
      {
        key: "legalBases",
        title: "Bases juridiques, le cas échéant",
        blocks: [
          {
            type: "paragraph",
            text: "Lorsque le droit applicable exige une base juridique, cette base dépend du contexte. Le service s'appuie notamment sur la fourniture du produit demandé, les mesures prises à la demande de l'utilisateur avant le début d'une relation de compte, l'exécution d'obligations légales, les intérêts légitimes liés au produit et à la sécurité, ainsi que le consentement pour certaines fonctionnalités.",
          },
          {
            type: "paragraph",
            text: "Le consentement joue un rôle essentiel pour les connexions de comptes financiers, les fonctionnalités supplémentaires et certains paramètres de communication ou de confidentialité. Le retrait du consentement affecte les fonctionnalités qui dépendent des informations concernées, y compris la synchronisation des comptes ou une personnalisation supplémentaire.",
          },
        ],
      },
      {
        key: "serviceProviders",
        title: "Transmission des informations aux prestataires de services",
        blocks: [
          {
            type: "paragraph",
            text: "Des prestataires de services sélectionnés soutiennent le fonctionnement du produit, notamment l'infrastructure, les communications, l'assistance client et la connectivité des données financières. Les prestataires qui traitent des informations d'utilisateurs pour OPHIR doivent les utiliser uniquement pour les services qu'ils fournissent et les protéger d'une manière conforme à cette Politique et aux exigences applicables.",
          },
          {
            type: "paragraph",
            text: "Les informations sont divulguées lorsque la loi, une demande légale, des impératifs de sécurité, une enquête sur des abus, l'application d'accords ou une opération d'entreprise l'exige. Ces opérations comprennent une fusion, une acquisition, un financement, une restructuration ou un transfert d'actifs.",
          },
        ],
      },
      {
        key: "financialDataConnectivityProviders",
        title: "Fournisseurs de données financières",
        blocks: [
          {
            type: "paragraph",
            text: "Plaid est utilisé comme fournisseur de données financières afin d'aider les utilisateurs à connecter des comptes et à importer des données autorisées. La connexion s'effectue via Plaid Link, où l'utilisateur choisit une institution financière et autorise le partage des comptes et des données pour les fonctionnalités OPHIR.",
          },
          {
            type: "paragraph",
            text: "Le traitement effectué par Plaid est régi par la politique de confidentialité et les conditions de Plaid. Les utilisateurs choisissent les comptes à connecter et les gèrent ou les déconnectent via OPHIR, Plaid Portal lorsqu'il est disponible, ou l'institution financière. La déconnexion d'un compte met fin aux futures mises à jour ; les données déjà importées dans OPHIR sont traitées selon les règles de conservation des informations et de suppression d'OPHIR.",
          },
        ],
      },
      {
        key: "dataRetention",
        title: "Conservation des informations",
        blocks: [
          {
            type: "paragraph",
            text: "Les informations restent dans le service tant qu'elles sont nécessaires au fonctionnement du compte, au contexte historique, aux fonctionnalités demandées, au traitement des litiges, à la prévention des abus, aux exigences légales ou opérationnelles, ainsi qu'à la sécurité et à l'intégrité du produit.",
          },
          {
            type: "paragraph",
            text: "Les durées de conservation varient selon le type d'information, l'état du compte, les paramètres du produit, les demandes de l'utilisateur et les obligations applicables. Lorsque les informations ne sont plus nécessaires, elles sont supprimées, anonymisées, agrégées ou conservées uniquement sous une forme limitée pour des enregistrements de protection, juridiques ou opérationnels.",
          },
        ],
      },
      {
        key: "dataDeletion",
        title: "Suppression des données",
        blocks: [
          {
            type: "paragraph",
            text: "Les utilisateurs peuvent présenter une demande de suppression de leur compte OPHIR et des informations personnelles associées à ce compte. La suppression du compte met fin à l'accès au compte et lance la suppression ou l'anonymisation des informations qui ne servent plus des finalités légitimes de service, de protection, juridiques ou opérationnelles.",
          },
          {
            type: "paragraph",
            text: "Certains enregistrements sont conservés pour des raisons limitées, notamment la résolution des litiges, la prévention de la fraude, la sécurité, la comptabilité, les sauvegardes, les obligations légales ou l'application des accords. La déconnexion d'un compte financier est différente de la suppression des données OPHIR : la déconnexion met fin aux futurs imports, tandis que la suppression concerne les informations déjà détenues par le service.",
          },
        ],
      },
      {
        key: "securityMeasures",
        title: "Mesures de sécurité",
        blocks: [
          {
            type: "paragraph",
            text: "La protection des informations des utilisateurs est l'un des principes clés du développement et de l'exploitation d'OPHIR.",
          },
          {
            type: "paragraph",
            text: "Nous appliquons des mesures administratives, techniques et organisationnelles visant à réduire le risque d'accès non autorisé, de perte, de modification, de divulgation ou d'utilisation abusive des informations.",
          },
          {
            type: "paragraph",
            text: "Selon la nature des données traitées et les fonctionnalités utilisées, ces mesures peuvent inclure :",
          },
          {
            type: "list",
            items: [
              "le contrôle d'accès aux systèmes internes ;",
              "la séparation des droits d'accès des employés ;",
              "l'utilisation de canaux sécurisés de transmission des données ;",
              "le chiffrement des informations lors de leur transmission ;",
              "la protection de l'infrastructure contre les accès non autorisés ;",
              "la surveillance de la sécurité ;",
              "la tenue de journaux de sécurité ;",
              "la sauvegarde des données critiques ;",
              "la mise à jour régulière des logiciels ;",
              "des procédures de réponse aux incidents de sécurité de l'information.",
            ],
          },
          {
            type: "paragraph",
            text: "Malgré les mesures prises, aucun mode de transmission d'informations sur Internet ni aucune méthode de stockage électronique ne peut garantir une sécurité absolue. Pour cette raison, OPHIR ne peut pas garantir que des mesures techniques excluent totalement la possibilité d'incidents.",
          },
          {
            type: "paragraph",
            text: "L'utilisateur joue également un rôle important dans la protection de ses informations. Nous recommandons d'utiliser des mots de passe robustes, de mettre rapidement à jour les logiciels des appareils, de limiter l'accès de tiers à ses appareils, de rester attentif aux tentatives de fraude et de nous signaler sans délai toute activité suspecte liée à l'utilisation du compte utilisateur.",
          },
        ],
      },
      {
        key: "internationalProcessing",
        title: "Traitement international des informations",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR peut fournir ses services à des utilisateurs de différents pays.",
          },
          {
            type: "paragraph",
            text: "En conséquence, le traitement des informations peut être effectué dans les pays où se trouvent les serveurs, l'infrastructure, les prestataires de services ou d'autres organisations participant à la fourniture des fonctionnalités du produit.",
          },
          {
            type: "paragraph",
            text: "La législation relative à la protection des informations personnelles dans ces pays peut différer de celle du pays de résidence de l'utilisateur.",
          },
          {
            type: "paragraph",
            text: "Lorsque le droit applicable l'exige, OPHIR prend des mesures raisonnables pour assurer un niveau approprié de protection des informations lors de leur transfert international, y compris l'utilisation de mécanismes de transfert de données prévus par la loi et d'obligations contractuelles avec les prestataires de services.",
          },
        ],
      },
      {
        key: "userRights",
        title: "Vos droits",
        blocks: [
          {
            type: "paragraph",
            text: "Selon le droit applicable, l'utilisateur peut disposer des droits suivants concernant ses informations personnelles :",
          },
          {
            type: "list",
            items: [
              "recevoir des informations sur les données qui sont traitées ;",
              "accéder à ses informations personnelles ;",
              "demander la correction de données inexactes ou incomplètes ;",
              "demander la suppression des informations personnelles ;",
              "limiter le traitement des informations dans les cas prévus par la loi ;",
              "s'opposer à certains types de traitement ;",
              "retirer un consentement précédemment donné ;",
              "recevoir une copie des informations fournies dans un format portable, lorsque ce droit est prévu par la loi ;",
              "déposer des plaintes auprès des autorités compétentes en matière de protection des données personnelles.",
            ],
          },
          {
            type: "paragraph",
            text: "Pour protéger les utilisateurs, OPHIR peut demander des informations supplémentaires permettant de confirmer l'identité du demandeur avant de fournir l'accès aux informations ou d'exécuter la demande correspondante.",
          },
          {
            type: "paragraph",
            text: "Si une demande concerne des informations contrôlées par une institution financière, Plaid ou une autre organisation indépendante, OPHIR peut orienter l'utilisateur directement vers la partie concernée, car OPHIR n'a pas le pouvoir de modifier ou de supprimer ces informations.",
          },
          {
            type: "paragraph",
            text: "Si l'utilisateur participe à un espace familial partagé, l'exécution de certaines demandes peut être limitée par la nécessité de préserver des informations relatives aux autres participants de cet espace.",
          },
        ],
      },
      {
        key: "childrenPrivacy",
        title: "Confidentialité des enfants",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR est destiné aux personnes qui ont le droit de conclure des accords de manière autonome conformément au droit applicable.",
          },
          {
            type: "paragraph",
            text: "Le service n'est pas destiné aux enfants et n'a pas été créé comme un produit destiné à être utilisé par des mineurs sans l'intervention de représentants légaux.",
          },
          {
            type: "paragraph",
            text: "Nous ne collectons pas sciemment d'informations personnelles directement auprès d'enfants par l'inscription ou l'utilisation d'OPHIR.",
          },
          {
            type: "paragraph",
            text: "Les fonctionnalités de gestion commune des finances familiales sont destinées aux utilisateurs adultes qui décident eux-mêmes de la composition des participants à l'espace partagé et assument la responsabilité des informations qu'ils ajoutent au service.",
          },
          {
            type: "paragraph",
            text: "Si nous apprenons que des informations personnelles d'un enfant ont été obtenues en violation du droit applicable, nous prendrons des mesures raisonnables pour les supprimer dans les meilleurs délais.",
          },
        ],
      },
      {
        key: "policyChanges",
        title: "Modifications de cette Politique",
        blocks: [
          {
            type: "paragraph",
            text: "Nous pouvons mettre à jour la présente Politique de confidentialité de temps à autre en lien avec le développement d'OPHIR, les changements de législation, la mise en œuvre de nouvelles fonctionnalités, l'évolution de la composition des prestataires de services ou l'amélioration des processus de traitement des informations.",
          },
          {
            type: "paragraph",
            text: "La version actuelle de la Politique est toujours publiée sur le site officiel d'OPHIR avec la date de la dernière mise à jour.",
          },
          {
            type: "paragraph",
            text: "Si les modifications affectent de manière importante les droits des utilisateurs ou les modalités de traitement des informations personnelles, nous pouvons en outre informer les utilisateurs par les moyens prévus par les fonctionnalités du produit ou par les exigences du droit applicable.",
          },
          {
            type: "paragraph",
            text: "La poursuite de l'utilisation d'OPHIR après l'entrée en vigueur des modifications signifie l'application de la version mise à jour de la Politique de confidentialité, sauf disposition contraire de la loi.",
          },
        ],
      },
      {
        key: "contactInformation",
        title: "Informations de contact",
        blocks: [
          {
            type: "paragraph",
            text: "Si vous avez des questions concernant la présente Politique de confidentialité, le traitement des informations personnelles, l'utilisation des informations financières ou l'exercice de vos droits, vous pouvez nous contacter.",
          },
          {
            type: "email",
            label: "Email :",
            email: privacyContactEmail,
          },
          {
            type: "paragraph",
            text: "Lorsque vous nous contactez, veuillez ne pas envoyer par email des identifiants bancaires, des mots de passe, des codes de confirmation, des numéros complets de cartes bancaires, des numéros complets de comptes financiers ou toute autre information confidentielle qui n'est pas nécessaire à l'examen de votre demande.",
          },
          {
            type: "paragraph",
            text: "Si des informations juridiques ou postales supplémentaires sont nécessaires pour satisfaire aux exigences légales, les informations correspondantes seront fournies sur demande ou publiées dans les sections officielles du site OPHIR.",
          },
        ],
      },
    ],
  },
  ru: {
    title: "Политика конфиденциальности",
    seoTitle: "Политика конфиденциальности | OPHIR",
    description:
      "Как OPHIR обрабатывает персональную информацию, финансовые данные, подключения счетов, хранение, удаление и права пользователя.",
    updatedLabel: "Последнее обновление",
    updated: "26 июля 2026",
    updatedDate,
    sections: [
      {
        key: "introduction",
        title: "Введение",
        blocks: [
          {
            type: "paragraph",
            text: "Настоящая Политика конфиденциальности объясняет, как OPHIR обрабатывает персональную информацию и финансовые данные на сайте, в аккаунте, продуктовых интерфейсах, каналах поддержки и связанных сервисах. Продукт объединяет личные и семейные финансы в понятном рабочем пространстве для бюджетов, анализа, планирования и повседневных финансовых решений. Понятные правила работы с данными являются частью этого опыта: пользователю важно видеть, какие сведения попадают в продукт, зачем они используются и как устроен контроль подключённой информации.",
          },
          {
            type: "paragraph",
            text: "Сервис предоставляет информационные инструменты и функции для организации финансов. OPHIR не является банком, не хранит денежные средства пользователей и не переводит деньги от имени пользователя. Эта политика описывает практики обработки информации и действует вместе с условиями продукта и уведомлениями, которые отображаются для отдельных функций или разрешений.",
          },
        ],
      },
      {
        key: "scope",
        title: "Область действия политики",
        blocks: [
          {
            type: "paragraph",
            text: "Политика применяется, когда человек посещает сайт OPHIR, создаёт или использует аккаунт, подключает финансовые счета, вручную вводит финансовую информацию, присоединяется к общему семейному пространству, обращается в поддержку или использует функцию, основанную на персональной либо финансовой информации.",
          },
          {
            type: "paragraph",
            text: "Внешние сервисы регулируются собственными политиками конфиденциальности и условиями. Финансовые организации, Plaid, магазины приложений, поставщики идентификации и другие третьи стороны обрабатывают информацию в соответствии с разрешениями, договорами и политиками, применимыми к их сервисам. Отношения пользователя с такими сервисами остаются отдельными от отношений с OPHIR.",
          },
        ],
      },
      {
        key: "informationWeProcess",
        title: "Информация, которую мы обрабатываем",
        blocks: [
          {
            type: "paragraph",
            text: "Состав информации зависит от функций, выбранных пользователем. К такой информации относятся данные профиля, контактные сведения, записи, связанные с аутентификацией, настройки рабочего пространства, сведения об участниках семьи или домохозяйства, продуктовые предпочтения, сообщения в поддержку и записи об активности в сервисе.",
          },
          {
            type: "paragraph",
            text: "Финансовая информация охватывает названия и типы счетов, балансы, детали транзакций, даты, продавцов, категории, регулярные операции, бюджеты, цели, планы накоплений, долги, заметки, метки и аналитику, созданную в продукте. Сбор связан с работой, защитой, улучшением и поддержкой сервиса.",
          },
        ],
      },
      {
        key: "informationYouProvide",
        title: "Информация, предоставляемая пользователем",
        blocks: [
          {
            type: "paragraph",
            text: "Пользователь предоставляет информацию при создании аккаунта, первичной настройке, настройке профиля, добавлении бюджета, внесении транзакций, создании целей, именовании счетов, приглашении участников семьи, выборе предпочтений или обращении в поддержку. Ручные записи и пользовательские метки делают финансовую картину полезнее и точнее, особенно когда подключённый счёт не объясняет назначение транзакции полностью.",
          },
          {
            type: "paragraph",
            text: "Общие пространства требуют отдельного внимания. В зависимости от ролей и разрешений информация, добавленная одним участником, видна другим участникам. Настройки пространства определяют, кто видит личный и общий финансовый контекст.",
          },
        ],
      },
      {
        key: "financialAccountInformation",
        title: "Информация о финансовых счетах",
        blocks: [
          {
            type: "paragraph",
            text: "После подключения финансового счёта авторизованная информация поступает от поставщика подключения финансовых данных. Эти сведения используются для балансов, импорта транзакций, категоризации, представлений денежных потоков, бюджетов, целей, отчётов и аналитики.",
          },
          {
            type: "paragraph",
            text: "OPHIR не получает учётные данные, используемые для входа в аккаунт финансовой организации. Процесс подключения выполняют поставщик подключения и финансовая организация. Поставщик отвечает за собственные сервисы и практики конфиденциальности, а OPHIR обрабатывает финансовые данные, доступные для рабочего пространства пользователя.",
          },
        ],
      },
      {
        key: "technicalInformation",
        title: "Техническая информация",
        blocks: [
          {
            type: "paragraph",
            text: "Сайт и продукт опираются на техническую информацию для стабильной и защищённой работы. Она включает данные устройства и браузера, IP-адрес, регион на основе сетевых данных, язык, страницы-источники перехода, временные метки, cookie или похожие идентификаторы, сессии, диагностические данные и сервисные журналы. Эти записи также помогают отличать обычное использование от активности, которая создаёт риск для аккаунтов или сервиса.",
          },
          {
            type: "paragraph",
            text: "Эти записи поддерживают сессии аккаунта, продуктовые предпочтения, обнаружение ошибок, мониторинг производительности, предотвращение злоупотреблений, операции по защите сервиса и улучшение продукта. Настройки браузера и элементы управления в продукте определяют работу отдельных cookie и похожих технологий.",
          },
        ],
      },
      {
        key: "howWeUseInformation",
        title: "Как мы используем информацию",
        blocks: [
          {
            type: "paragraph",
            text: "Информация используется в повседневной работе сервиса. Она поддерживает аккаунты, показывает финансовые данные в контексте, превращает бюджеты и цели в понятные представления, готовит сводки и аналитику, синхронизирует подключённые счета, помогает отвечать на обращения и обеспечивает сервисные коммуникации.",
          },
          {
            type: "paragraph",
            text: "Она также поддерживает качество продукта, устранение проблем, защиту сервиса, предотвращение злоупотреблений, применение условий и выполнение применимых обязанностей. Финансовые данные пользователей не продаются.",
          },
        ],
      },
      {
        key: "legalBases",
        title: "Правовые основания, где применимо",
        blocks: [
          {
            type: "paragraph",
            text: "Когда применимое право требует правового основания, основание зависит от контекста. Сервис опирается, в частности, на предоставление запрошенного продукта, действия по запросу пользователя до начала отношений по аккаунту, выполнение юридических обязанностей, законные интересы продукта и безопасности, а также согласие для отдельных функций.",
          },
          {
            type: "paragraph",
            text: "Согласие играет ключевую роль для подключений финансовых счетов, дополнительных функций и отдельных коммуникационных настроек или настроек конфиденциальности. Отзыв согласия влияет на функции, зависящие от соответствующей информации, включая синхронизацию счетов или дополнительную персонализацию.",
          },
        ],
      },
      {
        key: "serviceProviders",
        title: "Передача информации поставщикам услуг",
        blocks: [
          {
            type: "paragraph",
            text: "Выбранные поставщики услуг поддерживают работу продукта, включая инфраструктуру, коммуникации, клиентскую поддержку и подключение финансовых данных. Поставщики, которые обрабатывают информацию пользователей для OPHIR, должны использовать её только для оказываемых услуг и защищать способом, согласующимся с этой политикой и применимыми требованиями.",
          },
          {
            type: "paragraph",
            text: "Информация раскрывается, когда этого требует закон, законный запрос, безопасность, расследование злоупотреблений, применение соглашений или корпоративная операция. К таким операциям относятся слияние, приобретение, финансирование, реструктуризация или передача активов.",
          },
        ],
      },
      {
        key: "financialDataConnectivityProviders",
        title: "Поставщики подключения финансовых данных",
        blocks: [
          {
            type: "paragraph",
            text: "Plaid используется как поставщик подключения финансовых данных, чтобы помогать пользователям соединять счета и импортировать авторизованные данные. Подключение проходит через Plaid Link, где пользователь выбирает финансовую организацию и разрешает передачу счетов и данных для функций OPHIR.",
          },
          {
            type: "paragraph",
            text: "Обработка со стороны Plaid регулируется политикой конфиденциальности и условиями Plaid. Пользователи выбирают, какие счета подключать, и управляют ими или отключают их через OPHIR, Plaid Portal при его доступности либо финансовую организацию. Отключение счёта прекращает будущие обновления; данные, уже импортированные в OPHIR, обрабатываются по правилам хранения и удаления OPHIR.",
          },
        ],
      },
      {
        key: "dataRetention",
        title: "Хранение данных",
        blocks: [
          {
            type: "paragraph",
            text: "Информация остаётся в сервисе, пока она нужна для работы аккаунта, исторического контекста, запрошенных функций, обработки споров, предотвращения злоупотреблений, юридических или операционных требований, а также безопасности и целостности продукта.",
          },
          {
            type: "paragraph",
            text: "Сроки хранения различаются в зависимости от типа информации, статуса аккаунта, настроек продукта, запросов пользователя и применимых обязанностей. Когда информация больше не нужна, она удаляется, обезличивается, агрегируется или сохраняется только в ограниченной форме для защитных, юридических или операционных записей.",
          },
        ],
      },
      {
        key: "dataDeletion",
        title: "Удаление данных",
        blocks: [
          {
            type: "paragraph",
            text: "Пользователи вправе запросить удаление аккаунта OPHIR и персональной информации, связанной с этим аккаунтом. Удаление аккаунта прекращает доступ к аккаунту и запускает удаление или обезличивание информации, которая больше не служит легитимным сервисным, защитным, юридическим или операционным целям.",
          },
          {
            type: "paragraph",
            text: "Некоторые записи сохраняются по ограниченным причинам, включая разрешение споров, предотвращение мошенничества, безопасность, бухгалтерский учёт, резервные копии, юридические обязанности или применение соглашений. Отключение финансового счёта отличается от удаления данных OPHIR: отключение прекращает будущий импорт, а удаление относится к информации, уже находящейся у сервиса.",
          },
        ],
      },
      {
        key: "securityMeasures",
        title: "Меры безопасности",
        blocks: [
          {
            type: "paragraph",
            text: "Защита информации пользователей является одним из ключевых принципов разработки и эксплуатации OPHIR.",
          },
          {
            type: "paragraph",
            text: "Мы применяем административные, технические и организационные меры, направленные на снижение риска несанкционированного доступа, утраты, изменения, раскрытия или неправомерного использования информации.",
          },
          {
            type: "paragraph",
            text: "В зависимости от характера обрабатываемых данных и используемых функций такие меры могут включать:",
          },
          {
            type: "list",
            items: [
              "контроль доступа к внутренним системам;",
              "разграничение прав доступа сотрудников;",
              "использование защищённых каналов передачи данных;",
              "шифрование информации при передаче;",
              "защиту инфраструктуры от несанкционированного доступа;",
              "мониторинг безопасности;",
              "ведение журналов безопасности;",
              "резервное копирование критически важных данных;",
              "регулярное обновление программного обеспечения;",
              "процедуры реагирования на инциденты информационной безопасности.",
            ],
          },
          {
            type: "paragraph",
            text: "Несмотря на принимаемые меры, ни один способ передачи информации через Интернет или её электронного хранения не может гарантировать абсолютную безопасность. По этой причине OPHIR не может гарантировать, что любые технические меры полностью исключают возможность возникновения инцидентов.",
          },
          {
            type: "paragraph",
            text: "Пользователь также играет важную роль в защите своей информации. Мы рекомендуем использовать надёжные пароли, своевременно обновлять программное обеспечение устройств, ограничивать доступ посторонних лиц к своим устройствам, внимательно относиться к попыткам мошенничества и незамедлительно сообщать нам о любой подозрительной активности, связанной с использованием учётной записи.",
          },
        ],
      },
      {
        key: "internationalProcessing",
        title: "Международная обработка информации",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR может предоставлять свои услуги пользователям из различных стран.",
          },
          {
            type: "paragraph",
            text: "В связи с этим обработка информации может осуществляться в странах, где расположены серверы, инфраструктура, поставщики услуг или иные организации, участвующие в предоставлении функций продукта.",
          },
          {
            type: "paragraph",
            text: "Законодательство о защите персональной информации в таких странах может отличаться от законодательства страны проживания пользователя.",
          },
          {
            type: "paragraph",
            text: "В случаях, когда это требуется применимым законодательством, OPHIR принимает разумные меры для обеспечения надлежащего уровня защиты информации при её международной передаче, включая использование предусмотренных законом механизмов передачи данных и договорных обязательств с поставщиками услуг.",
          },
        ],
      },
      {
        key: "userRights",
        title: "Ваши права",
        blocks: [
          {
            type: "paragraph",
            text: "В зависимости от применимого законодательства пользователь может обладать следующими правами в отношении своей персональной информации:",
          },
          {
            type: "list",
            items: [
              "получать информацию о том, какие данные обрабатываются;",
              "получать доступ к своей персональной информации;",
              "требовать исправления неточных или неполных данных;",
              "требовать удаления персональной информации;",
              "ограничивать обработку информации в случаях, предусмотренных законодательством;",
              "возражать против отдельных видов обработки;",
              "отзывать ранее предоставленное согласие;",
              "получать копию предоставленной информации в переносимом формате, если такое право предусмотрено законодательством;",
              "обращаться с жалобами в компетентные органы по защите персональных данных.",
            ],
          },
          {
            type: "paragraph",
            text: "Для защиты пользователей OPHIR вправе запросить дополнительную информацию, позволяющую подтвердить личность заявителя, прежде чем предоставить доступ к информации или выполнить соответствующий запрос.",
          },
          {
            type: "paragraph",
            text: "Если запрос касается информации, которая находится под контролем финансовой организации, Plaid или иной независимой организации, OPHIR может направить пользователя непосредственно к соответствующей стороне, поскольку не обладает полномочиями изменять или удалять такую информацию.",
          },
          {
            type: "paragraph",
            text: "Если пользователь участвует в совместном семейном пространстве, выполнение отдельных запросов может быть ограничено необходимостью сохранения информации, относящейся к другим участникам такого пространства.",
          },
        ],
      },
      {
        key: "childrenPrivacy",
        title: "Конфиденциальность детей",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR предназначен для использования лицами, имеющими право самостоятельно заключать соглашения в соответствии с применимым законодательством.",
          },
          {
            type: "paragraph",
            text: "Сервис не предназначен для детей и не создавался как продукт для использования несовершеннолетними без участия законных представителей.",
          },
          {
            type: "paragraph",
            text: "Мы сознательно не собираем персональную информацию непосредственно у детей посредством регистрации или использования OPHIR.",
          },
          {
            type: "paragraph",
            text: "Функции совместного ведения семейных финансов предназначены для взрослых пользователей, которые самостоятельно принимают решение о составе участников общего пространства и несут ответственность за информацию, которую добавляют в сервис.",
          },
          {
            type: "paragraph",
            text: "Если нам станет известно, что персональная информация ребёнка была получена с нарушением применимого законодательства, мы примем разумные меры для её удаления в максимально короткий срок.",
          },
        ],
      },
      {
        key: "policyChanges",
        title: "Изменения настоящей Политики",
        blocks: [
          {
            type: "paragraph",
            text: "Мы можем время от времени обновлять настоящую Политику конфиденциальности в связи с развитием OPHIR, изменением законодательства, внедрением новых функций, изменением состава поставщиков услуг или совершенствованием процессов обработки информации.",
          },
          {
            type: "paragraph",
            text: "Актуальная версия Политики всегда публикуется на официальном сайте OPHIR с указанием даты последнего обновления.",
          },
          {
            type: "paragraph",
            text: "Если изменения существенно затрагивают права пользователей или порядок обработки персональной информации, мы можем дополнительно уведомить пользователей способами, предусмотренными функциональностью продукта или требованиями применимого законодательства.",
          },
          {
            type: "paragraph",
            text: "Продолжение использования OPHIR после вступления изменений в силу означает применение обновлённой редакции Политики конфиденциальности, если иное не предусмотрено законодательством.",
          },
        ],
      },
      {
        key: "contactInformation",
        title: "Контактная информация",
        blocks: [
          {
            type: "paragraph",
            text: "Если у вас возникли вопросы, связанные с настоящей Политикой конфиденциальности, обработкой персональной информации, использованием финансовых данных или реализацией ваших прав, вы можете связаться с нами.",
          },
          {
            type: "email",
            label: "Email:",
            email: privacyContactEmail,
          },
          {
            type: "paragraph",
            text: "При обращении, пожалуйста, не отправляйте по электронной почте банковские логины, пароли, коды подтверждения, полные номера банковских карт, полные номера финансовых счетов или иную конфиденциальную информацию, которая не требуется для рассмотрения вашего запроса.",
          },
          {
            type: "paragraph",
            text: "Если для выполнения требований законодательства потребуется предоставить дополнительные юридические или почтовые реквизиты, соответствующая информация будет предоставлена по запросу или опубликована в официальных разделах сайта OPHIR.",
          },
        ],
      },
    ],
  },
} as const satisfies Record<Locale, PrivacyPolicyDocument>;
