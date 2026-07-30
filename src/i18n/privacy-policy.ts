import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type PrivacyPolicyInlineContent =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "strong";
      text: string;
    }
  | {
      type: "inlineCode";
      text: string;
    }
  | {
      type: "internalLink";
      text: string;
      page: InternalPageKey;
    }
  | {
      type: "emailLink";
      text: string;
      email: string;
    }
  | {
      type: "externalLink";
      text: string;
      href: string;
    };

type PrivacyPolicyBlock =
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "paragraph";
      content: readonly PrivacyPolicyInlineContent[];
    }
  | {
      type: "callout";
      content: readonly PrivacyPolicyInlineContent[];
    }
  | {
      type: "metadata";
      items: readonly {
        label: string;
        value: string;
        dateTime?: string;
      }[];
    }
  | {
      type: "list";
      items: readonly (readonly PrivacyPolicyInlineContent[])[];
    }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly (readonly PrivacyPolicyInlineContent[])[])[];
    }
  | {
      type: "address";
      content: readonly PrivacyPolicyInlineContent[];
    };

type PrivacyPolicySection = {
  key: string;
  title: string;
  includeInNavigation?: false;
  blocks: readonly PrivacyPolicyBlock[];
};

type PrivacyPolicyDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  intro: readonly PrivacyPolicyBlock[];
  sections: readonly PrivacyPolicySection[];
};

export const privacyPolicyContent = {
  "en": {
    "title": "Privacy Policy",
    "seoTitle": "Privacy Policy | OPHIR",
    "description": "Canadian English master version",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Canadian English master version"
          }
        ]
      },
      {
        "type": "metadata",
        "items": [
          {
            "label": "Effective Date:",
            "value": "July 28, 2026",
            "dateTime": "2026-07-28"
          },
          {
            "label": "Last Updated:",
            "value": "July 28, 2026",
            "dateTime": "2026-07-28"
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "service-operator",
        "title": "Service Operator",
        "includeInNavigation": false,
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR is operated by:"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "text",
                "text": "Soavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "General and legal inquiries: "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nPrivacy inquiries: "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nSupport: "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              }
            ]
          }
        ]
      },
      {
        "key": "plain-language-overview",
        "title": "Plain-Language Overview",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Protecting privacy is one of OPHIR's fundamental responsibilities."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We understand that financial information, budgeting information, and personal financial goals are highly sensitive. OPHIR is designed to help you understand and organize your finances while giving you meaningful control over how your personal information is collected, used, disclosed, retained, and protected."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This Privacy Policy explains:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "what personal information we collect;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "how and why we collect it;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "how we use and disclose it;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "how long we retain it;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "how we protect it;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the rights available to you under applicable privacy law; and"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "how you may exercise those rights."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This Privacy Policy applies when you use the OPHIR mobile application, websites, financial account connectivity services, budgeting and forecasting tools, analytics, AI-assisted features, customer support, or any related product or service that links to this Privacy Policy (collectively, the "
              },
              {
                "type": "strong",
                "text": "Service"
              },
              {
                "type": "text",
                "text": ")."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This overview is provided for convenience. If it conflicts with a detailed provision below, the detailed provision governs, subject always to rights that applicable law does not permit us to waive or restrict."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Privacy at a Glance"
          },
          {
            "type": "table",
            "headers": [
              "Topic",
              "Summary"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Information We Collect"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "We collect information you provide, information received from connected financial institutions with your authorization, technical information generated through use of the Service, and information needed to secure and improve OPHIR."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Financial Data"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR may receive financial account information through authorized connectivity providers such as Plaid. OPHIR is not a bank and does not hold customer funds."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "AI Features"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Automated systems may categorize transactions, generate budgeting insights, identify recurring expenses, estimate future cash flow, and provide informational recommendations. These features do not replace professional financial advice."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Sharing"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "We do not sell or rent personal information. We disclose it only as described in this Privacy Policy or as required or permitted by applicable law."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Security"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "We use administrative, organizational, contractual, technical, and physical safeguards designed to protect personal information against unauthorized access, use, disclosure, alteration, loss, or destruction."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Your Rights"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Depending on applicable law, you may request access, correction, deletion, information about processing, withdrawal of consent, or portability, and may submit a privacy complaint."
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-1",
        "title": "1. Scope of this Privacy Policy",
        "blocks": [
          {
            "type": "address",
            "content": []
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This Privacy Policy describes how Soavinjato Andrianarisoa, operating as OPHIR ("
              },
              {
                "type": "strong",
                "text": "OPHIR"
              },
              {
                "type": "text",
                "text": ", "
              },
              {
                "type": "strong",
                "text": "we"
              },
              {
                "type": "text",
                "text": ", "
              },
              {
                "type": "strong",
                "text": "us"
              },
              {
                "type": "text",
                "text": ", or "
              },
              {
                "type": "strong",
                "text": "our"
              },
              {
                "type": "text",
                "text": "), collects, uses, discloses, retains, and protects personal information when you use:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the OPHIR mobile application and websites;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "account creation and management features;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "financial institution connections;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "budgeting, categorization, forecasting, and analytics tools;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "automated financial insights and the personal financial assistant;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "customer support, notifications, and related services."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This Privacy Policy applies to personal information processed by OPHIR. Third-party services, including Plaid, Apple, Google, and your financial institution, may independently process information under their own privacy policies."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This Privacy Policy should be read together with the "
              },
              {
                "type": "internalLink",
                "text": "OPHIR Terms of Service",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " and any notices shown when information is collected or consent is requested."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Our Privacy Principles",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Protection of personal information is a core design principle of OPHIR."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.1 Accountability"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR is responsible for personal information under its control. The person identified in Section 24 is responsible for privacy compliance and may be contacted about our practices."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.2 Identified Purposes"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Before or at the time personal information is collected, we identify the purposes for which it is required, except where otherwise permitted or required by law."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.3 Consent"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Where required by applicable law, we obtain consent that is clear, free, informed, and given for specific purposes before collecting, using, or disclosing personal information. We present a written request for consent separately from other information where required. Consent may be express or implied depending on the sensitivity of the information and the circumstances, as permitted by law."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Where processing is based on consent, you may withdraw that consent, subject to legal or contractual restrictions and reasonable notice."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.4 Data Minimization"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We seek to collect only the personal information reasonably necessary to provide, secure, improve, and support the Service. We do not intentionally collect personal information unrelated to the purposes described in this Privacy Policy."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.5 Limited Use and Disclosure"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Personal information is used only for the identified purposes unless you authorize another purpose or the use or disclosure is permitted or required by law."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.6 Accuracy"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We take reasonable steps to keep personal information accurate, complete, and up to date for the purposes for which it is used. Because some financial information is supplied by financial institutions or data providers, you should review imported information and report material inaccuracies."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.7 Safeguards"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We maintain safeguards appropriate to the sensitivity of the personal information under our control and the reasonably foreseeable risks."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.8 Transparency"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We seek to explain our privacy practices in clear, accessible language and to make information about those practices readily available."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.9 Individual Participation"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Subject to applicable law, individuals may request access to, correction of, or additional information about personal information under our control."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.10 Privacy by Design"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Where reasonably practicable, privacy considerations are incorporated into the design, development, deployment, and ongoing operation of the Service, including new features and data-processing activities."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. Applicable Privacy Laws",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR operates from Québec and provides services primarily to individuals in Canada."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Our privacy practices are designed with regard to applicable Canadian legislation, including:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Québec's Act respecting the protection of personal information in the private sector, as amended;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Québec Law 25;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the federal Personal Information Protection and Electronic Documents Act ("
                },
                {
                  "type": "strong",
                  "text": "PIPEDA"
                },
                {
                  "type": "text",
                  "text": "), where applicable;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "applicable consumer-protection, cybersecurity, and record-retention requirements."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If mandatory law provides greater protection, that law prevails. Nothing in this Privacy Policy excludes, limits, or waives a right that cannot lawfully be excluded, limited, or waived."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Definitions",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Personal information"
              },
              {
                "type": "text",
                "text": " means information about an identifiable natural person, including information that can identify a person directly or indirectly. Financial information is generally sensitive and requires heightened protection."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Information that has been lawfully de-identified or aggregated so that it can no longer reasonably be associated with an identifiable person may not be treated as personal information where applicable law so provides. We do not attempt to re-identify properly de-identified information except for lawful purposes such as testing de-identification methods, security, or compliance."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Personal Information We Collect",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The information collected depends on the features you use, the institutions you connect, the Plaid products enabled, your device, and your settings."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.1 Account and Profile Information"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We may collect:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "name and email address;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "region or province and preferred language;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "internal account identifier;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "authentication data and status;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "security and recovery settings;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "account creation, sign-in, and change history."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "5.2 Connected Financial Account Information"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Only after you initiate a connection and provide the required authorization may OPHIR and the connectivity provider receive information you permit through the connection interface. Depending on the institution and enabled products, this may include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "financial institution name;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "account name, type, subtype, description, and masked account number;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "account and connection identifiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "current, available, or other displayed balances and currency;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "transaction amount, date, description, merchant, category, location, and status;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "recurring income and expense information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "credit or liability balances, limits, interest rates, payment dates and amounts, and repayment terms;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "investment account, holding, value, and transaction information if that feature is expressly offered and authorized;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "account-holder name and contact information if required by an enabled product and authorized by you;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "connection status, errors, reauthentication needs, and consent history."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR requests only the categories needed for activated features. OPHIR is not designed to initiate payments and, unless a separate payment feature is expressly implemented and disclosed, does not request full account and routing numbers for transferring funds."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Unless OPHIR expressly states otherwise, we do not receive or store your online banking password. Authentication generally occurs in the interface of your financial institution or connectivity provider."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.3 Information You Enter"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We may collect:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "custom account names and categories;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "budgets, financial goals, and planned amounts;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "notes and corrections;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "recurring-obligation information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "household settings;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "prompts and instructions submitted to assistant features;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "feedback, survey responses, and other information you voluntarily provide."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not enter online banking passwords, full payment-card numbers, one-time codes, secret keys, or other credentials in notes, support messages, or assistant prompts."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.4 Subscription Information"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Subscriptions are purchased through the Apple App Store or Google Play. We may receive limited information needed to validate and manage access, such as:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "store and subscription plan;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "subscription, trial, renewal, or cancellation status;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "transaction or receipt identifiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "purchase date and entitlement period;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "store country or currency;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "refund or dispute information."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR does not receive your full payment-card number from the store. Apple or Google processes payment information under its own terms and privacy policy."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.5 Device, Technical, and Usage Information"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We may automatically collect:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "device type and model;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "operating system and application version;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "language, time zone, and approximate region;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "IP address and network information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "installation, session, and device identifiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "access dates and times;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "screens viewed, features used, and interaction sequence;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "crash, performance, diagnostic, and security logs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "installation source, consent records, and notification settings."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We use this information to operate, secure, diagnose, and improve the Service, not to sell a user profile."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.6 Communications and Support"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you contact us, we may collect your contact details, message content, attachments, technical details, request history, and information reasonably required to verify identity and resolve the matter."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.7 Other Lawful Sources"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We may receive information:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "from Plaid and financial institutions at your request;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "from Apple or Google in connection with a subscription;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "from providers of security, abuse prevention, communications, hosting, and analytics services;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "from public or government sources when lawful and necessary;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "from a person lawfully authorized to act for you."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. How We Collect Personal Information",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We collect personal information:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "directly from you when you register, configure the Service, enter information, or contact us;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "through a financial account connection you authorize;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "automatically through operation of the application, website, and server infrastructure;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "from service providers and platforms to the extent needed to provide the Service;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "when otherwise permitted or required by law."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "At collection, we provide clear information about material purposes. For sensitive information, we request express consent where required. Additional contextual notices may appear before connecting an account, enabling a new feature, or using information for a new purpose."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Why We Collect and Use Personal Information",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We may use personal information for the following purposes."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "7.1 Providing the Service"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "create and maintain an account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "authenticate users and recover access;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "connect and refresh authorized financial information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "display accounts, balances, and transactions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "categorize transactions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "create budgets, goals, summaries, and reports;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "calculate cash-flow estimates and forecasts;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "identify recurring transactions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "generate alerts, explanations, and automated insights;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "synchronize settings across supported devices;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "manage subscription entitlements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "carry out your requests and instructions."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "7.2 Security and Integrity"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "prevent unauthorized access, fraud, and abuse;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "detect anomalous activity;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "diagnose failures and protect infrastructure;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "maintain security logs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "verify identity for sensitive requests;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "investigate incidents and support continuity."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "7.3 Support and Communications"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "respond to inquiries;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "send service, transactional, and security notices;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "communicate changes to the Service, this Privacy Policy, or the "
                },
                {
                  "type": "internalLink",
                  "text": "Terms of Service",
                  "page": "termsOfService"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "receive feedback and assess service quality."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "7.4 Improvement and Development"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "analyze performance and feature use;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "correct errors and improve reliability;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "improve categorization, forecasts, and analytical methods;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "develop new features;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "conduct internal testing and quality control."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "When improving models, we seek to use the minimum information necessary and, where reasonably practicable, aggregated or de-identified information. We do not use connected financial account data to train a publicly available artificial-intelligence model unless we first give a separate clear notice and obtain any express consent required by law."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "7.5 Legal and Business Purposes"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "comply with applicable law and valid legal process;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "maintain required records;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "protect the rights, safety, and property of users, OPHIR, and others;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "establish, exercise, or defend legal claims;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "support audits, financing, reorganization, sale, or transfer of the Service with appropriate safeguards."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We do not use personal information for a purpose that a reasonable person would consider inappropriate in the circumstances."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Consent and Your Choices",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Depending on the context and applicable law, processing may be based on express or implied consent or on a lawful exception."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Because financial information is sensitive, we request the required authorization before connecting a financial account. Plaid or your financial institution may show the requested data categories and purposes. Your selections in that interface apply to the relevant connection."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If we intend to use or disclose information for a materially new purpose, we will provide notice and obtain new consent where required."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You may withdraw consent subject to reasonable notice and legal or contractual restrictions. Withdrawal may disconnect a financial account, stop data refreshes, or prevent us from providing a dependent feature. It does not affect the lawfulness of earlier processing or remove mandatory retention requirements."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You may:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "choose not to connect a financial account and use available manual features;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "select supported accounts during connection;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "disconnect an account in settings;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "change permissions through an available reconnection process;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "disable optional notifications or analytics settings where controls are offered;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "unsubscribe from promotional messages while continuing to receive necessary service and security messages."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Plaid and Financial Account Connections",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may use Plaid Technologies Inc., its Canadian affiliates, or related entities ("
              },
              {
                "type": "strong",
                "text": "Plaid"
              },
              {
                "type": "text",
                "text": ") to establish connections with supported financial institutions."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "When you use Plaid:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "you proceed through Plaid Link or your financial institution's interface;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid identifies the requested data categories and connection purpose;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "you select the institution and, where available, the accounts;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid and the institution handle authentication and transmit authorized data to OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR receives only the data and metadata available through the enabled products and your authorization;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid may keep consent and connection records under its own obligations and policies;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "use of Plaid is also subject to Plaid's privacy policy."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid's privacy policy:\n"
              },
              {
                "type": "externalLink",
                "text": "https://plaid.com/legal/#end-user-privacy-policy",
                "href": "https://plaid.com/legal/#end-user-privacy-policy"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid Portal, where available for your connection:\n"
              },
              {
                "type": "externalLink",
                "text": "https://my.plaid.com",
                "href": "https://my.plaid.com"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You may disconnect an account through OPHIR settings, available Plaid tools, or your financial institution. Disconnection normally stops future refreshes but may not immediately delete information previously received by OPHIR, Plaid, or the institution. To request deletion of information held by OPHIR, use the account-deletion feature or contact "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Plaid's separate tools and policies may apply to information it controls."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Automated Processing, Profiling, and AI-Assisted Features",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may use automated rules, statistical methods, and categorization models to produce budget calculations, forecasts, indicators, alerts, and suggested actions."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Such processing may:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "classify transactions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "identify expected recurring payments or income;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "calculate projected balances and cash flow;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "flag unusual changes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "generate explanations and personalized prompts."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Where we collect personal information using technology that can identify, locate, or profile a person, we provide the notice and activation information required by applicable law before collection."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "These outputs are informational. They are not credit decisions, regulated suitability assessments, professional advice, or legally binding decisions. OPHIR does not use an exclusively automated output to decide, on behalf of a bank, whether you qualify for credit, insurance, employment, or an essential service."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You may correct available categories and source information. Contact "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": " with questions about a material automated output."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. When We Disclose Personal Information",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We do not sell or rent personal information. We disclose it only as necessary for the purposes described below."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.1 Service Providers"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Recipients may include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Plaid and other financial-data connectivity providers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "cloud hosting, database, backup, and content-delivery providers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "authentication, security, and abuse-prevention providers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "performance analytics and crash-diagnostics services;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "email, notification, and customer-support providers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Apple and Google for subscriptions, distribution, and platform functions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "professional advisers, auditors, insurers, and legal counsel."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Providers are authorized to process information for the contracted service and are subject to appropriate contractual, confidentiality, and security obligations, except where a provider independently determines its processing under its published policy and applicable law."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.2 At Your Direction"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We may disclose information to an institution, service, household member, or other person when you clearly direct us to do so and the relevant feature permits the disclosure."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.3 Legal Requirements and Safety"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We may disclose information when we believe in good faith that disclosure is necessary to comply with applicable law, valid court process, or a lawful request from a competent authority; protect rights or safety; investigate fraud or an incident; or establish, exercise, or defend a legal claim."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We assess legal requests and, where lawful and appropriate, limit disclosure to what is necessary."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.4 Business Transactions"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "In connection with financing, reorganization, merger, asset sale, or transfer of the Service, information may be disclosed to prospective or actual participants subject to confidentiality and applicable law. A successor must comply with applicable obligations or provide notice and obtain consent where required."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Processing Outside Québec",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR operates from Québec, but service providers, Plaid, Apple, Google, financial institutions, or infrastructure may process or store information elsewhere in Canada, in the United States, or in other countries."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Information processed in another jurisdiction may be subject to local law and accessible to courts, law-enforcement authorities, or government bodies under that law."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Before communicating personal information outside Québec, OPHIR conducts any privacy impact assessment required by law and considers the sensitivity of the information, purposes, safeguards, contractual terms, and legal framework in the destination. We use contractual and other reasonable measures intended to provide adequate protection."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For additional information about the principal categories of providers and processing locations, contact "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Retention, De-identification, and Destruction",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We retain personal information only as long as reasonably necessary for the purposes described in this Privacy Policy and to meet legal, accounting, security, and contractual requirements."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Retention depends on:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the duration of your account and subscription;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the need to provide requested features;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the nature and sensitivity of the information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "limitation periods and mandatory recordkeeping;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the need to prevent fraud, investigate incidents, and resolve disputes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "backup and service-provider system capabilities."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "After account closure, we delete or de-identify active user data according to our retention schedule unless further retention is required or permitted by law. Limited records may remain longer in security logs, backups, consent records, receipts, legal files, or provider systems."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Backups are deleted or overwritten in the ordinary cycle and are isolated from normal use until then. Properly de-identified information may be retained for analytics, security, and Service improvement."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Disconnecting a financial account stops future refreshes but is not a request to delete information already imported. To request deletion, use the account-deletion feature or contact "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. How We Protect Personal Information",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We use administrative, organizational, contractual, technical, and physical measures appropriate to the sensitivity of financial information and the risks, including where applicable:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "encryption in transit;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "infrastructure protections for stored information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "role-based and need-to-know access controls;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "multi-factor authentication for administrative access;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "secrets management and a prohibition on storing online banking passwords at OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "logging, monitoring, and detection of suspicious activity;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "updates, vulnerability management, and secure development practices;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "backups and recovery planning;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "contractual requirements for providers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "incident-response procedures;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "periodic review of safeguards."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "No system can guarantee absolute security. You are also responsible for protecting your device, password, access code, and email account. Contact "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": " promptly if you suspect compromise."
              }
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Confidentiality Incidents",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We maintain a process to identify, assess, contain, document, and remediate incidents involving personal information."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If an incident creates a risk of serious injury or meets another notification threshold under applicable law, we will notify the competent authority and affected individuals as required and provide information about the incident, potential consequences, and recommended steps. We also maintain any incident register required by law."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Your Privacy Rights",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Subject to applicable law and limited exceptions, you may:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ask whether we hold personal information about you;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request access to and a copy of that information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request correction of inaccurate, incomplete, or equivocal information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request deletion or cessation of dissemination where the law provides;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "withdraw consent to a use or disclosure;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "obtain information about purposes, collection methods, access categories, recipients, processing locations, and retention;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request information about a material decision based exclusively on automated processing where such a right applies;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request computerized personal information in a structured, commonly used technological format where the portability right applies;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "submit a complaint to OPHIR or a competent regulator."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "16.1 How to Submit a Request"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Send a written request to the person in charge of the protection of personal information:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Include your name, account email address, the type of request, and enough information to locate the relevant records. Do not send an online banking password, full card number, or one-time code."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We may request reasonable identity verification to prevent unauthorized disclosure. We respond within the period required by applicable law. If we cannot fully grant a request, we will provide reasons where permitted and explain available review options."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Access is ordinarily provided without charge. Where the law permits a reasonable fee, we will give advance notice."
              }
            ]
          }
        ]
      },
      {
        "key": "section-17",
        "title": "17. Complaints",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You may first send a privacy question or complaint to "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". We will acknowledge it, conduct a fair review, and provide a substantive response within a reasonable period."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you are not satisfied, you may contact:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Commission d'accès à l'information du Québec"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.cai.gouv.qc.ca",
                "href": "https://www.cai.gouv.qc.ca"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "or, where applicable:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Office of the Privacy Commissioner of Canada"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.priv.gc.ca",
                "href": "https://www.priv.gc.ca"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Contacting OPHIR does not restrict your right to contact a competent authority."
              }
            ]
          }
        ]
      },
      {
        "key": "section-18",
        "title": "18. Cookies and Similar Technologies",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The website and application may use strictly necessary local storage, session tokens, SDKs, or similar technologies to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "sign you in and maintain a session;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "remember settings;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "support security and prevent abuse;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "measure performance and diagnose problems;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "understand feature use."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If we use optional analytics or advertising technologies, we will provide any required notice and choice before activation. We do not use connected financial account data for cross-context tracking or third-party behavioural advertising."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You may control certain technologies through application, browser, or operating-system settings, or through a consent interface where provided. Blocking strictly necessary technologies may prevent the Service from working correctly."
              }
            ]
          }
        ]
      },
      {
        "key": "section-19",
        "title": "19. Communications",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We may send necessary notices about your account, security, financial connections, subscription, and changes to the Service. You cannot opt out of notices that are necessary to provide the Service."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Promotional communications are sent in accordance with applicable law and available consents. You may unsubscribe through the message or available settings. Unsubscribing from marketing does not stop service or security communications."
              }
            ]
          }
        ]
      },
      {
        "key": "section-20",
        "title": "20. Children",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The Service is intended for Canadian residents who are at least 18 years old and legally capable of entering into a contract. We do not knowingly direct the Service to children or knowingly collect personal information from anyone under 18."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you believe a minor provided personal information to us, contact "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". We will review the matter and take appropriate action."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If a household-budget feature allows you to add information about another person, you must have lawful authority and any consent required from that person. Do not provide another person's information without an appropriate legal basis."
              }
            ]
          }
        ]
      },
      {
        "key": "section-21",
        "title": "21. Third-Party Services and Links",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The Service may link to Plaid, Apple, Google, financial institutions, and other third-party resources. Their activities are governed by their own terms and privacy policies. Review those policies before providing information."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This Privacy Policy does not apply to information a third party collects directly as an independent organization, although OPHIR remains responsible for its own provider selection and oversight to the extent required by law."
              }
            ]
          }
        ]
      },
      {
        "key": "section-22",
        "title": "22. Changes to this Privacy Policy",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We may update this Privacy Policy to reflect changes to the Service, technology, providers, law, or our practices."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "An updated version will show a new date. For material changes, we will provide notice reasonably designed to reach you, such as through the application, email, website, or application store. We will obtain new consent before applying a materially new purpose where required by law."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We encourage you to review this Privacy Policy periodically. Previous versions may be made available where required by law or reasonably practicable."
              }
            ]
          }
        ]
      },
      {
        "key": "section-23",
        "title": "23. Language",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This Canadian English version serves as OPHIR's administrative master version. A French version is provided for users in Québec and wherever required by applicable language law. Other translations may also be provided for convenience."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nothing in any language version limits rights that cannot be waived. Processing remains governed by applicable Québec and Canadian federal law, including, where applicable, Québec's Act respecting the protection of personal information in the private sector and PIPEDA. If different versions are inconsistent, mandatory law and the version that must legally prevail will govern."
              }
            ]
          }
        ]
      },
      {
        "key": "section-24",
        "title": "24. Contact Information",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For privacy questions, rights requests, and complaints:"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "strong",
                "text": "Soavinjato Andrianarisoa"
              },
              {
                "type": "text",
                "text": "\nPerson in charge of the protection of personal information for OPHIR\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "General and legal inquiries: "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nSupport: "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nGeneral information: "
              },
              {
                "type": "emailLink",
                "text": "hello@joinophir.app",
                "email": "hello@joinophir.app"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not send your online banking password, full payment-card number, one-time authentication code, or other secret credentials when contacting us."
              }
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Politique de confidentialité",
    "seoTitle": "Politique de confidentialité | OPHIR",
    "description": "Version française destinée au public",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Version française destinée au public"
          }
        ]
      },
      {
        "type": "metadata",
        "items": [
          {
            "label": "Date d'entrée en vigueur :",
            "value": "28 juillet 2026",
            "dateTime": "2026-07-28"
          },
          {
            "label": "Dernière mise à jour :",
            "value": "28 juillet 2026",
            "dateTime": "2026-07-28"
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "service-operator",
        "title": "Exploitant du Service",
        "includeInNavigation": false,
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR est exploité par :"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "text",
                "text": "Soavinjato Andrianarisoa\n1203 Rue Normont\nLaval (Québec) H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Demandes générales et juridiques : "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nDemandes relatives à la protection des renseignements personnels : "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nAssistance : "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              }
            ]
          }
        ]
      },
      {
        "key": "aperc-u-en-langage-clair",
        "title": "Aperçu en langage clair",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La protection de la vie privée constitue l'une des responsabilités fondamentales d'OPHIR."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous comprenons que les renseignements financiers, les données budgétaires et les objectifs financiers personnels sont particulièrement sensibles. OPHIR est conçu pour vous aider à comprendre et à organiser vos finances tout en vous donnant un contrôle véritable sur la collecte, l'utilisation, la communication, la conservation et la protection de vos renseignements personnels."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente Politique de confidentialité explique :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "quels renseignements personnels nous recueillons;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "comment et pourquoi nous les recueillons;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "comment nous les utilisons et les communiquons;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "combien de temps nous les conservons;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "comment nous les protégeons;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "quels droits vous confère la législation applicable; et"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "comment exercer ces droits."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente Politique s'applique lorsque vous utilisez l'application mobile OPHIR, les sites Web, les services de connexion de comptes financiers, les outils de budgétisation et de prévision, les fonctions d'analyse et d'intelligence artificielle, le service à la clientèle ou tout produit ou service connexe qui renvoie à la présente Politique (collectivement, le "
              },
              {
                "type": "strong",
                "text": "Service"
              },
              {
                "type": "text",
                "text": ")."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Cet aperçu est fourni à titre pratique. En cas de divergence avec une disposition détaillée ci-dessous, cette dernière prévaut, sous réserve des droits auxquels la loi applicable ne permet pas de renoncer ou qu'elle ne permet pas de restreindre."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "La confidentialité en bref"
          },
          {
            "type": "table",
            "headers": [
              "Sujet",
              "Résumé"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Renseignements recueillis"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Nous recueillons les renseignements que vous fournissez, ceux que nous transmettent les institutions financières connectées avec votre autorisation, les données techniques produites lors de l'utilisation du Service et les renseignements nécessaires à la sécurité et à l'amélioration d'OPHIR."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Données financières"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR peut recevoir des renseignements sur des comptes financiers par l'intermédiaire de fournisseurs de connexion autorisés comme Plaid. OPHIR n'est pas une banque et ne détient pas les fonds des utilisateurs."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Fonctions d'IA"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Des systèmes automatisés peuvent catégoriser des opérations, produire des observations budgétaires, repérer des dépenses récurrentes, estimer les flux de trésorerie futurs et formuler des recommandations informatives. Ces fonctions ne remplacent pas les conseils d'un professionnel."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Communication"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Nous ne vendons ni ne louons les renseignements personnels. Nous les communiquons uniquement de la manière décrite dans la présente Politique ou lorsque la loi applicable l'exige ou le permet."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Sécurité"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Nous utilisons des mesures administratives, organisationnelles, contractuelles, techniques et physiques conçues pour protéger les renseignements personnels contre l'accès, l'utilisation, la communication, la modification, la perte ou la destruction non autorisés."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Vos droits"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Selon la loi applicable, vous pouvez demander l'accès, la rectification, la suppression, des renseignements sur le traitement, le retrait du consentement ou la portabilité, et déposer une plainte."
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-1",
        "title": "1. Portée de la présente Politique",
        "blocks": [
          {
            "type": "address",
            "content": []
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente Politique explique comment Soavinjato Andrianarisoa, exerçant ses activités sous le nom OPHIR ("
              },
              {
                "type": "strong",
                "text": "OPHIR"
              },
              {
                "type": "text",
                "text": ", "
              },
              {
                "type": "strong",
                "text": "nous"
              },
              {
                "type": "text",
                "text": ", "
              },
              {
                "type": "strong",
                "text": "notre"
              },
              {
                "type": "text",
                "text": " ou "
              },
              {
                "type": "strong",
                "text": "nos"
              },
              {
                "type": "text",
                "text": "), recueille, utilise, communique, conserve et protège les renseignements personnels lorsque vous utilisez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "l'application mobile et les sites Web OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les fonctions de création et de gestion d'un compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les connexions à des institutions financières;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les outils de budgétisation, de catégorisation, de prévision et d'analyse;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les observations financières automatisées et l'assistant financier personnel;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'assistance, les notifications et les services connexes."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente Politique s'applique aux renseignements personnels traités par OPHIR. Des services tiers, notamment Plaid, Apple, Google et votre institution financière, peuvent traiter des renseignements de manière indépendante conformément à leurs propres politiques de confidentialité."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente Politique doit être lue avec les "
              },
              {
                "type": "internalLink",
                "text": "Conditions d'utilisation",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " d'OPHIR et les avis présentés au moment de la collecte ou d'une demande de consentement."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Nos principes de protection des renseignements personnels",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La protection des renseignements personnels constitue un principe fondamental de conception d'OPHIR."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.1 Responsabilité"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR est responsable des renseignements personnels sous son contrôle. La personne nommée à l'article 24 est responsable du respect des règles de protection des renseignements personnels et peut être jointe au sujet de nos pratiques."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.2 Détermination des fins"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Avant ou au moment de la collecte, nous déterminons les fins auxquelles les renseignements sont nécessaires, sauf disposition contraire permise ou exigée par la loi."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.3 Consentement"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsque la loi applicable l'exige, nous obtenons un consentement manifeste, libre, éclairé et donné à des fins spécifiques avant de recueillir, d'utiliser ou de communiquer des renseignements personnels. Nous présentons séparément toute demande de consentement écrite lorsque la loi l'exige. Selon la sensibilité des renseignements et les circonstances, le consentement peut être exprès ou implicite lorsque la loi le permet."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsque le traitement repose sur le consentement, vous pouvez retirer celui-ci, sous réserve des restrictions légales ou contractuelles et d'un préavis raisonnable."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.4 Limitation de la collecte"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous cherchons à recueillir uniquement les renseignements personnels raisonnablement nécessaires pour fournir, protéger, améliorer et soutenir le Service. Nous ne recueillons pas sciemment de renseignements sans lien avec les fins décrites dans la présente Politique."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.5 Limitation de l'utilisation et de la communication"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements personnels ne sont utilisés qu'aux fins déterminées, sauf si vous autorisez une autre fin ou si la loi permet ou exige l'utilisation ou la communication."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.6 Exactitude"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous prenons des mesures raisonnables pour que les renseignements personnels soient exacts, complets et à jour au regard des fins auxquelles ils sont utilisés. Certains renseignements financiers provenant d'institutions ou de fournisseurs de données peuvent comporter des erreurs; vous devriez donc vérifier les renseignements importés et nous signaler toute inexactitude importante."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.7 Mesures de protection"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous maintenons des mesures adaptées à la sensibilité des renseignements personnels sous notre contrôle et aux risques raisonnablement prévisibles."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.8 Transparence"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous cherchons à expliquer nos pratiques dans un langage clair et accessible et à rendre facilement accessibles les renseignements pertinents à leur sujet."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.9 Participation individuelle"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sous réserve de la loi applicable, toute personne peut demander l'accès aux renseignements personnels qui la concernent, leur rectification ou des précisions sur leur traitement."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.10 Protection de la vie privée dès la conception"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Dans la mesure raisonnablement possible, nous intégrons la protection de la vie privée à la conception, au développement, au déploiement et à l'exploitation continue du Service, y compris aux nouvelles fonctions et activités de traitement."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. Lois applicables",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR exerce ses activités à partir du Québec et offre principalement ses services aux personnes qui se trouvent au Canada."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nos pratiques sont conçues en tenant compte des lois canadiennes applicables, notamment :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "la Loi sur la protection des renseignements personnels dans le secteur privé du Québec, dans sa version modifiée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la Loi 25 du Québec;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la Loi sur la protection des renseignements personnels et les documents électroniques ("
                },
                {
                  "type": "strong",
                  "text": "LPRPDE"
                },
                {
                  "type": "text",
                  "text": ") du Canada, lorsqu'elle s'applique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les exigences applicables en matière de protection du consommateur, de cybersécurité et de conservation des documents."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsqu'une règle impérative accorde une protection plus étendue, elle prévaut. La présente Politique n'exclut, ne limite ni ne supprime aucun droit auquel il est interdit de renoncer."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Définitions",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Un "
              },
              {
                "type": "strong",
                "text": "renseignement personnel"
              },
              {
                "type": "text",
                "text": " est un renseignement concernant une personne physique qui permet, directement ou indirectement, de l'identifier. Les renseignements financiers sont généralement sensibles et exigent une protection accrue."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements légalement dépersonnalisés ou agrégés de façon à ne plus pouvoir raisonnablement être associés à une personne identifiable peuvent ne plus être considérés comme des renseignements personnels lorsque la loi applicable le prévoit. Nous ne tentons pas de réidentifier des renseignements correctement dépersonnalisés, sauf à des fins légitimes comme la vérification des méthodes de dépersonnalisation, la sécurité ou la conformité."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Renseignements personnels que nous recueillons",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements recueillis dépendent des fonctions que vous utilisez, des institutions que vous connectez, des produits Plaid activés, de votre appareil et de vos paramètres."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.1 Renseignements sur le compte et le profil"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous pouvons recueillir :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le nom et l'adresse courriel;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la région ou la province et la langue préférée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'identifiant interne du compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les données et l'état d'authentification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les paramètres de sécurité et de récupération;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'historique de création, de connexion et de modification du compte."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "5.2 Renseignements provenant de comptes financiers connectés"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ce n'est qu'après que vous avez lancé une connexion et donné les autorisations requises qu'OPHIR et le fournisseur de connexion peuvent recevoir les renseignements permis dans l'interface de connexion. Selon l'institution et les produits activés, ces renseignements peuvent comprendre :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le nom de l'institution financière;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le nom, le type, le sous-type et la description du compte ainsi que son numéro masqué;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les identifiants du compte et de la connexion;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le solde courant, disponible ou autrement affiché et la devise;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le montant, la date, la description, le commerçant, la catégorie, le lieu et l'état des opérations;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les revenus et dépenses récurrents;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les soldes, limites, taux d'intérêt, dates et montants des paiements et modalités de remboursement relatifs aux crédits ou aux dettes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements sur les comptes de placement, les actifs, les valeurs et les opérations si cette fonction est expressément offerte et autorisée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le nom et les coordonnées du titulaire si un produit activé l'exige et si vous l'autorisez;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'état de la connexion, les erreurs, les besoins de réauthentification et l'historique des consentements."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne demande que les catégories nécessaires aux fonctions activées. OPHIR n'est pas conçu pour initier des paiements et, sauf si une fonction de paiement distincte est expressément mise en œuvre et divulguée, ne demande pas les numéros complets de compte et d'acheminement nécessaires au transfert de fonds."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sauf indication contraire expresse d'OPHIR, nous ne recevons ni ne conservons votre mot de passe de services bancaires en ligne. L'authentification s'effectue généralement dans l'interface de votre institution financière ou du fournisseur de connexion."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.3 Renseignements que vous saisissez"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous pouvons recueillir :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "les noms de compte personnalisés et les catégories;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les budgets, objectifs financiers et montants prévus;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les notes et corrections;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements sur les obligations récurrentes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les paramètres du ménage;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les requêtes et instructions transmises aux fonctions d'assistance;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les commentaires, réponses à des sondages et autres renseignements fournis volontairement."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ne saisissez pas de mot de passe de services bancaires en ligne, de numéro complet de carte de paiement, de code à usage unique, de clé secrète ni d'autres identifiants dans les notes, les messages d'assistance ou les requêtes adressées à l'assistant."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.4 Renseignements sur l'abonnement"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les abonnements sont achetés par l'intermédiaire de l'App Store d'Apple ou de Google Play. Nous pouvons recevoir des renseignements limités nécessaires à la validation et à la gestion de l'accès, notamment :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le magasin et le forfait d'abonnement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'état de l'abonnement, de l'essai, du renouvellement ou de l'annulation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les identifiants de transaction ou de reçu;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la date d'achat et la période d'accès;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le pays ou la devise du magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements relatifs à un remboursement ou à une contestation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne reçoit pas du magasin le numéro complet de votre carte de paiement. Apple ou Google traite les renseignements de paiement conformément à ses propres conditions et à sa politique de confidentialité."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.5 Données sur l'appareil, données techniques et données d'utilisation"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous pouvons recueillir automatiquement :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le type et le modèle de l'appareil;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le système d'exploitation et la version de l'application;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la langue, le fuseau horaire et la région approximative;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'adresse IP et les renseignements sur le réseau;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les identifiants d'installation, de session et d'appareil;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les dates et heures d'accès;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les écrans consultés, les fonctions utilisées et la séquence des interactions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les journaux de panne, de rendement, de diagnostic et de sécurité;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la source d'installation, les dossiers de consentement et les paramètres de notification."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous utilisons ces renseignements pour exploiter, protéger, diagnostiquer et améliorer le Service, et non pour vendre un profil d'utilisateur."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.6 Communications et assistance"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsque vous communiquez avec nous, nous pouvons recueillir vos coordonnées, le contenu du message, les pièces jointes, les renseignements techniques, l'historique de la demande et les données raisonnablement nécessaires pour vérifier votre identité et résoudre le problème."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.7 Autres sources légitimes"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous pouvons recevoir des renseignements :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "de Plaid et des institutions financières à votre demande;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d'Apple ou de Google relativement à un abonnement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de fournisseurs de services de sécurité, de prévention des abus, de communication, d'hébergement ou d'analyse;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de sources publiques ou gouvernementales lorsque cela est légal et nécessaire;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d'une personne légalement autorisée à agir pour vous."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. Comment nous recueillons les renseignements personnels",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous recueillons des renseignements personnels :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "directement auprès de vous lorsque vous vous inscrivez, configurez le Service, saisissez des renseignements ou communiquez avec nous;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "au moyen d'une connexion de compte financier que vous autorisez;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "automatiquement dans le cadre du fonctionnement de l'application, du site Web et de l'infrastructure serveur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "auprès de fournisseurs de services et de plateformes dans la mesure nécessaire à la prestation du Service;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "dans les autres cas permis ou exigés par la loi."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Au moment de la collecte, nous fournissons des renseignements clairs sur les fins importantes. Pour les renseignements sensibles, nous demandons un consentement exprès lorsque la loi l'exige. Des avis contextuels supplémentaires peuvent être présentés avant la connexion d'un compte, l'activation d'une nouvelle fonction ou l'utilisation de renseignements à une nouvelle fin."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Pourquoi nous recueillons et utilisons les renseignements personnels",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous pouvons utiliser les renseignements personnels aux fins suivantes."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "7.1 Prestation du Service"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "créer et maintenir un compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "authentifier les utilisateurs et rétablir l'accès;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "connecter et actualiser les renseignements financiers autorisés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "afficher les comptes, les soldes et les opérations;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "catégoriser les opérations;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "créer des budgets, des objectifs, des résumés et des rapports;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "calculer des estimations et des prévisions de flux de trésorerie;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "repérer les opérations récurrentes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "produire des alertes, des explications et des observations automatisées;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "synchroniser les paramètres entre les appareils pris en charge;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "gérer les droits d'accès liés à l'abonnement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "exécuter vos demandes et instructions."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "7.2 Sécurité et intégrité"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "prévenir les accès non autorisés, la fraude et les abus;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "détecter les activités anormales;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "diagnostiquer les défaillances et protéger l'infrastructure;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "tenir des journaux de sécurité;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vérifier l'identité pour les demandes sensibles;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "enquêter sur les incidents et assurer la continuité."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "7.3 Assistance et communications"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "répondre aux demandes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "transmettre des avis de service, de transaction et de sécurité;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "communiquer les modifications apportées au Service, à la présente Politique ou aux "
                },
                {
                  "type": "internalLink",
                  "text": "Conditions d'utilisation",
                  "page": "termsOfService"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "recevoir des commentaires et évaluer la qualité du Service."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "7.4 Amélioration et développement"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "analyser le rendement et l'utilisation des fonctions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "corriger les erreurs et améliorer la fiabilité;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "améliorer la catégorisation, les prévisions et les méthodes d'analyse;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "développer de nouvelles fonctions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "effectuer des essais internes et des contrôles de qualité."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour améliorer les modèles, nous cherchons à utiliser le minimum de renseignements nécessaire et, lorsque cela est raisonnablement possible, des renseignements agrégés ou dépersonnalisés. Nous n'utilisons pas les données de comptes financiers connectés pour entraîner un modèle d'intelligence artificielle accessible au public sans fournir au préalable un avis distinct et clair et obtenir le consentement exprès exigé par la loi."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "7.5 Fins juridiques et commerciales"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "respecter les lois applicables et les procédures juridiques valides;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "tenir les dossiers requis;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "protéger les droits, la sécurité et les biens des utilisateurs, d'OPHIR et d'autres personnes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "établir, exercer ou défendre une réclamation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "soutenir un audit, un financement, une réorganisation, une vente ou un transfert du Service avec des garanties appropriées."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous n'utilisons pas les renseignements personnels à une fin qu'une personne raisonnable jugerait inappropriée dans les circonstances."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Consentement et choix",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Selon le contexte et la loi applicable, le traitement peut reposer sur un consentement exprès ou implicite ou sur une exception prévue par la loi."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Comme les renseignements financiers sont sensibles, nous demandons les autorisations requises avant de connecter un compte financier. Plaid ou votre institution financière peut afficher les catégories de données demandées et les fins de la connexion. Vos choix dans cette interface s'appliquent à la connexion concernée."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si nous prévoyons utiliser ou communiquer des renseignements à une fin sensiblement nouvelle, nous fournirons un avis et obtiendrons un nouveau consentement lorsque la loi l'exige."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous pouvez retirer votre consentement, sous réserve d'un préavis raisonnable et des restrictions légales ou contractuelles. Le retrait peut entraîner la déconnexion d'un compte financier, l'arrêt de l'actualisation des données ou l'impossibilité de fournir une fonction qui en dépend. Il n'affecte pas la légalité du traitement antérieur et ne supprime pas les obligations de conservation imposées par la loi."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous pouvez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "choisir de ne pas connecter de compte financier et utiliser les fonctions manuelles offertes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sélectionner les comptes pris en charge au moment de la connexion;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "déconnecter un compte dans les paramètres;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "modifier les autorisations au moyen d'un processus de reconnexion offert;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "désactiver les notifications facultatives ou les paramètres d'analyse lorsqu'un contrôle est offert;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vous désabonner des messages promotionnels tout en continuant de recevoir les communications nécessaires au Service et à la sécurité."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Plaid et connexion de comptes financiers",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut utiliser Plaid Technologies Inc., ses sociétés affiliées canadiennes ou des entités liées ("
              },
              {
                "type": "strong",
                "text": "Plaid"
              },
              {
                "type": "text",
                "text": ") afin d'établir des connexions avec les institutions financières prises en charge."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsque vous utilisez Plaid :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "vous passez par Plaid Link ou l'interface de votre institution financière;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid indique les catégories de données demandées et l'objet de la connexion;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vous sélectionnez l'institution et, lorsque l'option est offerte, les comptes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid et l'institution gèrent l'authentification et transmettent à OPHIR les données autorisées;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR ne reçoit que les données et métadonnées accessibles par les produits activés et votre autorisation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid peut conserver des dossiers de consentement et de connexion conformément à ses obligations et politiques;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'utilisation de Plaid est également assujettie à la politique de confidentialité de Plaid."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Politique de confidentialité de Plaid :\n"
              },
              {
                "type": "externalLink",
                "text": "https://plaid.com/legal/#end-user-privacy-policy",
                "href": "https://plaid.com/legal/#end-user-privacy-policy"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Portail Plaid, lorsqu'il est offert pour votre connexion :\n"
              },
              {
                "type": "externalLink",
                "text": "https://my.plaid.com",
                "href": "https://my.plaid.com"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous pouvez déconnecter un compte dans les paramètres d'OPHIR, au moyen des outils Plaid offerts ou auprès de votre institution financière. La déconnexion met normalement fin aux actualisations futures, mais peut ne pas supprimer immédiatement les renseignements déjà reçus par OPHIR, Plaid ou l'institution. Pour demander la suppression des renseignements détenus par OPHIR, utilisez la fonction de suppression du compte ou écrivez à "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Les outils et politiques distincts de Plaid peuvent s'appliquer aux renseignements sous son contrôle."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Traitement automatisé, profilage et fonctions d'IA",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut utiliser des règles automatisées, des méthodes statistiques et des modèles de catégorisation pour produire des calculs budgétaires, des prévisions, des indicateurs, des alertes et des mesures suggérées."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ce traitement peut :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "classifier les opérations;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "repérer des paiements ou revenus récurrents prévus;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "calculer des soldes et des flux de trésorerie projetés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "signaler des changements inhabituels;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "produire des explications et des messages personnalisés."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsque nous recueillons des renseignements personnels au moyen d'une technologie qui permet d'identifier, de localiser ou d'effectuer un profilage d'une personne, nous fournissons avant la collecte l'avis et les renseignements relatifs à l'activation exigés par la loi applicable."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ces résultats sont fournis à titre informatif. Ils ne constituent pas une décision de crédit, une évaluation réglementée de convenance, un conseil professionnel ni une décision juridiquement contraignante. OPHIR n'utilise pas un résultat exclusivement automatisé pour décider, au nom d'une banque, de votre admissibilité au crédit, à l'assurance, à un emploi ou à un service essentiel."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous pouvez corriger les catégories et les renseignements sources lorsque cette fonction est offerte. Écrivez à "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": " pour toute question concernant un résultat automatisé important."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. Quand nous communiquons des renseignements personnels",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous ne vendons ni ne louons les renseignements personnels. Nous les communiquons uniquement dans la mesure nécessaire aux fins décrites ci-dessous."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.1 Fournisseurs de services"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les destinataires peuvent comprendre :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Plaid et d'autres fournisseurs de connexion de données financières;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des fournisseurs d'hébergement infonuagique, de bases de données, de sauvegarde et de diffusion de contenu;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des fournisseurs d'authentification, de sécurité et de prévention des abus;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des services d'analyse du rendement et de diagnostic des pannes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des fournisseurs de courriel, de notification et de soutien à la clientèle;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Apple et Google pour les abonnements, la distribution et les fonctions de leurs plateformes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des conseillers professionnels, des auditeurs, des assureurs et des avocats."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les fournisseurs sont autorisés à traiter les renseignements pour le service convenu et sont assujettis à des obligations contractuelles, de confidentialité et de sécurité appropriées, sauf lorsqu'un fournisseur détermine de façon indépendante son traitement conformément à sa politique publiée et à la loi applicable."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.2 Selon vos instructions"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous pouvons communiquer des renseignements à une institution, à un service, à un membre de votre ménage ou à une autre personne lorsque vous nous donnez une instruction claire et que la fonction concernée permet cette communication."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.3 Exigences juridiques et sécurité"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous pouvons communiquer des renseignements lorsque nous croyons de bonne foi que cette communication est nécessaire pour respecter la loi applicable, une procédure judiciaire valide ou une demande légale d'une autorité compétente; protéger des droits ou la sécurité; enquêter sur une fraude ou un incident; ou établir, exercer ou défendre une réclamation."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous évaluons les demandes juridiques et, lorsque cela est légal et approprié, limitons la communication à ce qui est nécessaire."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.4 Opérations commerciales"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Dans le cadre d'un financement, d'une réorganisation, d'une fusion, d'une vente d'actifs ou d'un transfert du Service, des renseignements peuvent être communiqués aux participants éventuels ou réels, sous réserve de la confidentialité et de la loi applicable. Un successeur doit respecter les obligations applicables ou fournir un avis et obtenir un consentement lorsque cela est requis."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Traitement à l'extérieur du Québec",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR exerce ses activités à partir du Québec, mais des fournisseurs de services, Plaid, Apple, Google, des institutions financières ou des infrastructures peuvent traiter ou conserver des renseignements ailleurs au Canada, aux États-Unis ou dans d'autres pays."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements traités dans une autre juridiction peuvent être assujettis aux lois locales et accessibles aux tribunaux, aux organismes d'application de la loi ou aux autorités gouvernementales conformément à ces lois."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Avant de communiquer des renseignements personnels à l'extérieur du Québec, OPHIR réalise toute évaluation des facteurs relatifs à la vie privée exigée par la loi et tient compte de la sensibilité des renseignements, des fins, des mesures de protection, des conditions contractuelles et du cadre juridique applicable dans le lieu de destination. Nous utilisons des mesures contractuelles et d'autres mesures raisonnables visant à assurer une protection adéquate."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour obtenir des renseignements supplémentaires sur les principales catégories de fournisseurs et les lieux de traitement, écrivez à "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Conservation, dépersonnalisation et destruction",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous conservons les renseignements personnels uniquement pendant la durée raisonnablement nécessaire aux fins décrites dans la présente Politique et au respect des exigences juridiques, comptables, contractuelles et de sécurité."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La période de conservation dépend :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "de la durée de votre compte et de votre abonnement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de la nécessité de fournir les fonctions demandées;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de la nature et de la sensibilité des renseignements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des délais de prescription et des obligations de tenue de dossiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de la nécessité de prévenir la fraude, d'enquêter sur les incidents et de régler les différends;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des capacités des systèmes de sauvegarde et des fournisseurs."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Après la fermeture du compte, nous supprimons ou dépersonnalisons les données actives de l'utilisateur selon notre calendrier de conservation, sauf si une conservation supplémentaire est exigée ou permise par la loi. Certains dossiers limités peuvent subsister plus longtemps dans les journaux de sécurité, les sauvegardes, les dossiers de consentement, les reçus, les dossiers juridiques ou les systèmes de fournisseurs."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les sauvegardes sont supprimées ou écrasées au cours du cycle normal et sont isolées de l'utilisation courante jusque-là. Des renseignements correctement dépersonnalisés peuvent être conservés à des fins d'analyse, de sécurité et d'amélioration du Service."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La déconnexion d'un compte financier met fin aux actualisations futures, mais ne constitue pas une demande de suppression des renseignements déjà importés. Pour demander une suppression, utilisez la fonction de suppression du compte ou écrivez à "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Comment nous protégeons les renseignements personnels",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous utilisons des mesures administratives, organisationnelles, contractuelles, techniques et physiques adaptées à la sensibilité des renseignements financiers et aux risques, notamment, selon le cas :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le chiffrement en transit;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des mesures d'infrastructure visant les renseignements conservés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des contrôles d'accès fondés sur les rôles et le besoin de connaître;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'authentification multifacteur pour l'accès administratif;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la gestion des secrets et l'interdiction de conserver les mots de passe de services bancaires en ligne chez OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la journalisation, la surveillance et la détection des activités suspectes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les mises à jour, la gestion des vulnérabilités et les pratiques de développement sécurisé;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les sauvegardes et la planification de la reprise;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les exigences contractuelles imposées aux fournisseurs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les procédures de gestion des incidents;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la révision périodique des mesures de protection."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Aucun système ne peut garantir une sécurité absolue. Vous êtes également responsable de la protection de votre appareil, de votre mot de passe, de votre code d'accès et de votre compte de courriel. Écrivez rapidement à "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": " si vous soupçonnez une compromission."
              }
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Incidents de confidentialité",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous maintenons un processus visant à identifier, évaluer, contenir, documenter et corriger les incidents concernant des renseignements personnels."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsqu'un incident présente un risque de préjudice sérieux ou atteint un autre seuil de notification prévu par la loi applicable, nous avisons l'autorité compétente et les personnes concernées conformément aux exigences et fournissons des renseignements sur l'incident, ses conséquences possibles et les mesures recommandées. Nous tenons également tout registre d'incidents exigé par la loi."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Vos droits en matière de protection des renseignements personnels",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sous réserve de la loi applicable et d'exceptions limitées, vous pouvez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "demander si nous détenons des renseignements personnels à votre sujet;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander l'accès à ces renseignements et en obtenir une copie;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander la rectification de renseignements inexacts, incomplets ou équivoques;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander la suppression ou la cessation de diffusion dans les cas prévus par la loi;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "retirer un consentement à l'utilisation ou à la communication;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "obtenir des renseignements sur les fins, les moyens de collecte, les catégories de personnes qui ont accès, les destinataires, les lieux de traitement et la conservation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander des renseignements sur une décision importante fondée exclusivement sur un traitement automatisé lorsqu'un tel droit s'applique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander des renseignements personnels informatisés dans un format technologique structuré et couramment utilisé lorsque le droit à la portabilité s'applique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "déposer une plainte auprès d'OPHIR ou d'un organisme compétent."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "16.1 Comment présenter une demande"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Envoyez une demande écrite à la personne responsable de la protection des renseignements personnels :"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Indiquez votre nom, l'adresse courriel du compte, le type de demande et suffisamment de précisions pour repérer les dossiers concernés. N'envoyez pas de mot de passe de services bancaires en ligne, de numéro complet de carte ni de code à usage unique."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous pouvons demander une vérification raisonnable de l'identité afin d'éviter une communication non autorisée. Nous répondons dans le délai prévu par la loi applicable. Si nous ne pouvons pas donner entièrement suite à une demande, nous fournirons les motifs lorsque la loi le permet et expliquerons les recours possibles."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L'accès est normalement gratuit. Lorsqu'une loi permet des frais raisonnables, nous vous en aviserons à l'avance."
              }
            ]
          }
        ]
      },
      {
        "key": "section-17",
        "title": "17. Plaintes",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous pouvez d'abord transmettre une question ou une plainte à "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Nous en accuserons réception, procéderons à un examen équitable et fournirons une réponse substantielle dans un délai raisonnable."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si la réponse ne vous satisfait pas, vous pouvez communiquer avec :"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Commission d'accès à l'information du Québec"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.cai.gouv.qc.ca",
                "href": "https://www.cai.gouv.qc.ca"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "ou, lorsqu'il y a lieu :"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Commissariat à la protection de la vie privée du Canada"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.priv.gc.ca",
                "href": "https://www.priv.gc.ca"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le fait de communiquer avec OPHIR ne limite pas votre droit de vous adresser à une autorité compétente."
              }
            ]
          }
        ]
      },
      {
        "key": "section-18",
        "title": "18. Cookies et technologies similaires",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le site Web et l'application peuvent utiliser un stockage local strictement nécessaire, des jetons de session, des SDK ou des technologies similaires pour :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "vous connecter et maintenir une session;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "mémoriser des paramètres;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "soutenir la sécurité et prévenir les abus;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "mesurer le rendement et diagnostiquer des problèmes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "comprendre l'utilisation des fonctions."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si nous utilisons des technologies d'analyse ou de publicité facultatives, nous fournirons tout avis et choix requis avant leur activation. Nous n'utilisons pas les données de comptes financiers connectés pour le suivi entre différents contextes ni pour la publicité comportementale de tiers."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous pouvez contrôler certaines technologies dans les paramètres de l'application, du navigateur ou du système d'exploitation, ou au moyen d'une interface de consentement lorsqu'elle est offerte. Le blocage de technologies strictement nécessaires peut empêcher le bon fonctionnement du Service."
              }
            ]
          }
        ]
      },
      {
        "key": "section-19",
        "title": "19. Communications",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous pouvons transmettre les avis nécessaires concernant votre compte, la sécurité, les connexions financières, l'abonnement et les modifications du Service. Vous ne pouvez pas refuser les avis nécessaires à la prestation du Service."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les communications promotionnelles sont envoyées conformément à la loi applicable et aux consentements disponibles. Vous pouvez vous désabonner au moyen du message ou des paramètres offerts. Le désabonnement des communications commerciales ne met pas fin aux communications de service ou de sécurité."
              }
            ]
          }
        ]
      },
      {
        "key": "section-20",
        "title": "20. Enfants",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le Service s'adresse aux résidents du Canada âgés d'au moins 18 ans et légalement capables de conclure un contrat. Nous ne dirigeons pas sciemment le Service vers des enfants et ne recueillons pas sciemment les renseignements personnels de personnes de moins de 18 ans."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous croyez qu'une personne mineure nous a fourni des renseignements personnels, écrivez à "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Nous examinerons la situation et prendrons les mesures appropriées."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si une fonction de budget familial vous permet d'ajouter des renseignements sur une autre personne, vous devez avoir le pouvoir légal et tout consentement requis de cette personne. Ne fournissez pas les renseignements d'un tiers sans fondement juridique approprié."
              }
            ]
          }
        ]
      },
      {
        "key": "section-21",
        "title": "21. Services et liens de tiers",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le Service peut contenir des liens vers Plaid, Apple, Google, des institutions financières et d'autres ressources tierces. Leurs activités sont régies par leurs propres conditions et politiques de confidentialité. Consultez ces politiques avant de fournir des renseignements."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente Politique ne s'applique pas aux renseignements qu'un tiers recueille directement en tant qu'organisation indépendante, bien qu'OPHIR demeure responsable de son propre choix et de sa surveillance des fournisseurs dans la mesure prévue par la loi."
              }
            ]
          }
        ]
      },
      {
        "key": "section-22",
        "title": "22. Modifications de la présente Politique",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous pouvons modifier la présente Politique afin de tenir compte de changements apportés au Service, aux technologies, aux fournisseurs, à la loi ou à nos pratiques."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Une version modifiée indiquera une nouvelle date. En cas de modification importante, nous donnerons un avis raisonnablement conçu pour vous joindre, par exemple dans l'application, par courriel, sur le site Web ou par l'intermédiaire du magasin d'applications. Nous obtiendrons un nouveau consentement avant d'appliquer une fin sensiblement nouvelle lorsque la loi l'exige."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous vous encourageons à consulter périodiquement la présente Politique. Les versions antérieures peuvent être rendues accessibles lorsque la loi l'exige ou lorsque cela est raisonnablement possible."
              }
            ]
          }
        ]
      },
      {
        "key": "section-23",
        "title": "23. Langue",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente version française est fournie aux utilisateurs du Québec et dans tous les cas où les lois linguistiques applicables l'exigent. OPHIR conserve également une version administrative principale en anglais canadien et peut offrir d'autres traductions à titre pratique."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Aucune version linguistique ne limite les droits auxquels il est interdit de renoncer. Le traitement demeure régi par les lois applicables du Québec et du Canada, notamment, lorsqu'elles s'appliquent, la Loi sur la protection des renseignements personnels dans le secteur privé du Québec et la LPRPDE. En cas de divergence entre les versions, les règles impératives et la version qui doit légalement prévaloir s'appliquent."
              }
            ]
          }
        ]
      },
      {
        "key": "section-24",
        "title": "24. Coordonnées",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour toute question, demande d'exercice de droits ou plainte relative à la protection des renseignements personnels :"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "strong",
                "text": "Soavinjato Andrianarisoa"
              },
              {
                "type": "text",
                "text": "\nResponsable de la protection des renseignements personnels d'OPHIR\n1203 Rue Normont\nLaval (Québec) H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Demandes générales et juridiques : "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nAssistance : "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nRenseignements généraux : "
              },
              {
                "type": "emailLink",
                "text": "hello@joinophir.app",
                "email": "hello@joinophir.app"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsque vous communiquez avec nous, n'envoyez pas votre mot de passe de services bancaires en ligne, le numéro complet d'une carte de paiement, un code d'authentification à usage unique ni d'autres identifiants secrets."
              }
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "Политика конфиденциальности",
    "seoTitle": "Политика конфиденциальности | OPHIR",
    "description": "Русский перевод канадской основной английской версии",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Русский перевод канадской основной английской версии"
          }
        ]
      },
      {
        "type": "metadata",
        "items": [
          {
            "label": "Дата вступления в силу:",
            "value": "28 июля 2026 года",
            "dateTime": "2026-07-28"
          },
          {
            "label": "Последнее обновление:",
            "value": "28 июля 2026 года",
            "dateTime": "2026-07-28"
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "service-operator",
        "title": "Оператор Сервиса",
        "includeInNavigation": false,
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR управляется:"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "text",
                "text": "Soavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Общие и юридические вопросы: "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nВопросы конфиденциальности: "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nПоддержка: "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              }
            ]
          }
        ]
      },
      {
        "key": "краткии-обзор-простым-языком",
        "title": "Краткий обзор простым языком",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Защита конфиденциальности является одной из основных обязанностей OPHIR."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы понимаем, что финансовые сведения, данные о бюджете и личных финансовых целях относятся к наиболее чувствительным категориям персональной информации. OPHIR создан, чтобы помогать вам понимать и организовывать финансы, одновременно предоставляя осмысленный контроль над сбором, использованием, раскрытием, хранением и защитой персональной информации."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящая Политика объясняет:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "какие персональные сведения мы собираем;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "как и зачем мы их собираем;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "как мы используем и раскрываем сведения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "как долго мы их храним;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "как мы их защищаем;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "какие права предоставляет вам применимое законодательство; и"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "как воспользоваться этими правами."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Политика применяется при использовании мобильного приложения OPHIR, веб-сайтов, подключения финансовых счетов, инструментов бюджетирования и прогнозирования, аналитики, функций с поддержкой искусственного интеллекта, поддержки пользователей и связанных сервисов (совместно — "
              },
              {
                "type": "strong",
                "text": "Сервис"
              },
              {
                "type": "text",
                "text": ")."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Этот обзор приведён для удобства. При противоречии преимущественную силу имеют подробные положения ниже с неизменным сохранением прав, которые нельзя ограничить или отменить законом."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Конфиденциальность: главное"
          },
          {
            "type": "table",
            "headers": [
              "Тема",
              "Краткое описание"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Собираемые сведения"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Мы собираем сведения, предоставленные вами, данные финансовых учреждений, полученные с вашего разрешения, технические данные использования и сведения, необходимые для защиты и улучшения OPHIR."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Финансовые данные"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR может получать сведения о счетах через уполномоченных поставщиков подключения, таких как Plaid. OPHIR не является банком и не хранит средства пользователей."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Функции AI"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Автоматизированные системы могут категоризировать операции, формировать бюджетные выводы, выявлять регулярные расходы, оценивать будущий денежный поток и предоставлять информационные рекомендации. Они не заменяют профессиональную финансовую консультацию."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Раскрытие"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Мы не продаём и не сдаём в аренду персональную информацию. Она раскрывается только согласно настоящей Политике либо когда это требуется или разрешено применимым законодательством."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Безопасность"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Мы применяем административные, организационные, договорные, технические и физические меры защиты от несанкционированного доступа, использования, раскрытия, изменения, потери или уничтожения."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Ваши права"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "В зависимости от применимого права вы можете запросить доступ, исправление, удаление, сведения об обработке, отзыв согласия или переносимость данных, а также подать жалобу."
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-1",
        "title": "1. Сфера действия настоящей Политики",
        "blocks": [
          {
            "type": "address",
            "content": []
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящая Политика конфиденциальности описывает, как Soavinjato Andrianarisoa, осуществляющий деятельность под наименованием OPHIR ("
              },
              {
                "type": "strong",
                "text": "OPHIR"
              },
              {
                "type": "text",
                "text": ", "
              },
              {
                "type": "strong",
                "text": "мы"
              },
              {
                "type": "text",
                "text": ", "
              },
              {
                "type": "strong",
                "text": "нас"
              },
              {
                "type": "text",
                "text": " или "
              },
              {
                "type": "strong",
                "text": "наш"
              },
              {
                "type": "text",
                "text": "), собирает, использует, раскрывает, хранит и защищает персональную информацию при использовании вами:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "мобильного приложения и веб-сайтов OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "функций создания и управления учётной записью;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подключений к финансовым учреждениям;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "инструментов бюджетирования, категоризации, прогнозирования и аналитики;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "автоматизированных финансовых выводов и персонального финансового помощника;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "поддержки пользователей, уведомлений и связанных сервисов."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящая Политика применяется к персональной информации, обрабатываемой OPHIR. Сторонние сервисы, включая Plaid, Apple, Google и ваше финансовое учреждение, могут самостоятельно обрабатывать информацию в соответствии со своими политиками конфиденциальности."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящую Политику следует читать вместе с Условиями использования OPHIR и уведомлениями, показываемыми в момент сбора сведений или запроса согласия."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Наши принципы конфиденциальности",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Защита персональной информации является одним из основных принципов проектирования OPHIR."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.1 Ответственность"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR отвечает за находящуюся под его контролем персональную информацию. Лицо, указанное в разделе 24, отвечает за соблюдение требований конфиденциальности, и к нему можно обратиться по вопросам наших практик."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.2 Определённые цели"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "До начала или в момент сбора мы определяем цели, для которых необходима персональная информация, кроме случаев, разрешённых или требуемых законом."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.3 Согласие"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Когда это требуется применимым законодательством, до сбора, использования или раскрытия персональной информации мы получаем ясное, свободное и информированное согласие, предоставленное для конкретных целей. Письменный запрос согласия представляется отдельно от иной информации, если это требуется законом. В зависимости от чувствительности сведений и обстоятельств согласие может быть явным или подразумеваемым, если это допускается законом."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если обработка основана на согласии, вы можете его отозвать с учётом юридических или договорных ограничений и разумного уведомления."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.4 Минимизация данных"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы стремимся собирать только сведения, обоснованно необходимые для предоставления, защиты, улучшения и поддержки Сервиса. Мы сознательно не собираем сведения, не относящиеся к целям настоящей Политики."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.5 Ограниченное использование и раскрытие"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сведения используются только для определённых целей, если вы не разрешили иную цель либо использование или раскрытие не требуется или не разрешено законом."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.6 Точность"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "С учётом целей использования мы принимаем разумные меры для поддержания точности, полноты и актуальности информации. Данные финансовых учреждений или поставщиков могут содержать ошибки; вам следует проверять импортированные сведения и сообщать о существенных неточностях."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.7 Меры защиты"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы применяем меры, соответствующие чувствительности информации под нашим контролем и разумно предсказуемым рискам."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.8 Прозрачность"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы стремимся объяснять практики конфиденциальности ясным и доступным языком и обеспечивать доступность информации о таких практиках."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.9 Участие пользователя"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "С учётом применимого права пользователь может запросить доступ, исправление или дополнительную информацию о персональных сведениях под нашим контролем."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.10 Конфиденциальность при проектировании"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В разумно возможной степени вопросы конфиденциальности учитываются при проектировании, разработке, внедрении и эксплуатации Сервиса, включая новые функции и операции обработки данных."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. Применимое законодательство",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR работает из провинции Квебек и предоставляет услуги преимущественно физическим лицам в Канаде."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Наши практики разработаны с учётом применимого канадского законодательства, включая:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Закон Квебека о защите персональной информации в частном секторе с изменениями;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Закон Квебека 25;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "федеральный Закон о защите персональной информации и электронных документах ("
                },
                {
                  "type": "strong",
                  "text": "PIPEDA"
                },
                {
                  "type": "text",
                  "text": "), где он применим;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "применимые требования по защите потребителей, кибербезопасности и хранению записей."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если императивное право предоставляет более широкую защиту, оно имеет преимущественную силу. Настоящая Политика не исключает, не ограничивает и не отменяет права, отказ от которых не допускается законом."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Определения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Персональная информация"
              },
              {
                "type": "text",
                "text": " означает информацию о физическом лице, которая позволяет прямо или косвенно установить его личность. Финансовые сведения обычно являются чувствительными и требуют усиленной защиты."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Законно обезличенные или агрегированные сведения, которые больше нельзя обоснованно связать с определённым лицом, могут не считаться персональной информацией в предусмотренных законом случаях. Мы не пытаемся повторно идентифицировать надлежащим образом обезличенную информацию, кроме разрешённых целей, таких как проверка методов обезличивания, безопасность или соблюдение требований."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Персональная информация, которую мы собираем",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Фактический объём сведений зависит от используемых функций, подключённых учреждений, выбранных продуктов Plaid, устройства и настроек."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.1 Сведения учётной записи и профиля"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы можем собирать:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "имя и адрес электронной почты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "регион или провинцию и предпочтительный язык;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "внутренний идентификатор учётной записи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "данные и состояние аутентификации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "настройки безопасности и восстановления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "историю создания, входов и изменений учётной записи."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "5.2 Финансовые данные подключённых счетов"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Только после того, как вы инициируете подключение и предоставите необходимые разрешения, OPHIR и поставщик подключения могут получать данные, разрешённые вами в интерфейсе подключения. В зависимости от подключённого учреждения и включённых продуктов это может включать:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "наименование финансового учреждения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "название, тип, подтип и описание счёта, а также маскированный номер;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "идентификаторы счёта и подключения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "текущий, доступный или иной отображаемый остаток и валюту;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сумму, дату, описание, продавца, категорию, местоположение и статус операции;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения о регулярных поступлениях и расходах;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения о кредитах или обязательствах: остаток, лимит, процентную ставку, даты и суммы платежей и условия погашения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения об инвестиционных счетах, активах, стоимости и операциях, если соответствующая функция явно предлагается и разрешена;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "имя и контактные сведения владельца счёта, если они необходимы для включённого продукта и разрешены вами;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "состояние подключения, ошибки, необходимость повторной аутентификации и историю согласий."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR запрашивает только категории, необходимые для активированных функций. OPHIR не предназначен для инициирования платежей и, если отдельная платёжная функция прямо не внедрена и не раскрыта, не запрашивает полные номера счетов и маршрутизации для перевода средств."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если OPHIR прямо не сообщает иное, мы не получаем и не храним ваш пароль интернет-банка. Аутентификация обычно происходит в интерфейсе финансового учреждения или поставщика подключения."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.3 Сведения, вводимые вами"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы можем собирать:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "названия счетов и пользовательские категории;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "бюджеты, финансовые цели и плановые суммы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "заметки и исправления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения о регулярных обязательствах;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "настройки домашнего хозяйства;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросы и инструкции, направленные функциям помощника;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отзывы, опросы и иные добровольно предоставленные сведения."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не вводите пароли интернет-банка, полные номера платёжных карт, одноразовые коды, секретные ключи или иные учётные данные в заметки, обращения в поддержку или помощнику."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.4 Сведения о подписке"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Подписки приобретаются через Apple App Store или Google Play. Мы можем получать ограниченные сведения, необходимые для подтверждения и управления доступом:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "магазин и план подписки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "статус подписки, пробного периода, продления или отмены;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "идентификаторы транзакции или квитанции;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "дату покупки и период действия;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "страну или валюту магазина;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения о возврате или споре."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не получает от магазина полный номер вашей платёжной карты. Apple или Google обрабатывают платёжные данные по своим условиям и политике конфиденциальности."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.5 Технические данные и данные использования"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы можем автоматически собирать:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "тип и модель устройства;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "операционную систему и версию приложения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "язык, часовой пояс и приблизительный регион;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "IP-адрес и сетевые сведения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "идентификаторы установки, сеанса и устройства;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "даты и время доступа;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "просмотренные экраны, использованные функции и последовательность действий;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "журналы сбоев, производительности, диагностики и безопасности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "источник установки, записи о согласии и настройки уведомлений."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы используем такие сведения для работы, защиты, диагностики и улучшения Сервиса, а не для продажи профиля пользователя."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.6 Обращения и поддержка"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы связываетесь с нами, мы можем собирать контактные данные, содержание сообщения, вложения, технические сведения, историю обращения и информацию, обоснованно необходимую для проверки личности и решения вопроса."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "5.7 Сведения из иных законных источников"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы можем получать информацию:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "от Plaid и финансовых учреждений по вашему запросу;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "от Apple или Google в связи с подпиской;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "от поставщиков безопасности, предотвращения злоупотреблений, связи, хостинга и аналитики;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "из общедоступных или государственных источников, когда это законно и необходимо;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "от другого лица, имеющего законные полномочия действовать от вашего имени."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. Как мы собираем персональную информацию",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы собираем информацию:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "непосредственно от вас при регистрации, настройке, вводе данных и обращении;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "через разрешённое вами подключение финансового счёта;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "автоматически при работе приложения, сайта и серверной инфраструктуры;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "от поставщиков услуг и платформ в объёме, необходимом для предоставления Сервиса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "когда это иным образом разрешено или требуется законом."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В момент сбора мы предоставляем ясную информацию о существенных целях, а для чувствительных данных запрашиваем явное согласие, когда это требуется. Дополнительные контекстные уведомления могут отображаться перед подключением счёта, включением новой функции или использованием данных для новой цели."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Зачем мы собираем и используем персональную информацию",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы можем использовать персональную информацию для следующих целей."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "7.1 Предоставление Сервиса"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "создание и обслуживание учётной записи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "аутентификация и восстановление доступа;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подключение и обновление разрешённых финансовых данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отображение счетов, остатков и операций;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "категоризация операций;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "создание бюджетов, целей, сводок и отчётов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "расчёт денежных потоков и прогнозов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выявление регулярных операций;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "формирование предупреждений, объяснений и автоматизированных выводов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "синхронизация настроек между поддерживаемыми устройствами;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "управление правами доступа по подписке;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "исполнение ваших запросов и инструкций."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "7.2 Безопасность и целостность"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "предотвращение несанкционированного доступа, мошенничества и злоупотреблений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выявление аномальной активности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "диагностика сбоев и защита инфраструктуры;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ведение журналов безопасности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверка личности при чувствительных запросах;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "расследование инцидентов и обеспечение непрерывности."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "7.3 Поддержка и связь"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ответы на обращения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "направление сервисных, транзакционных и безопасностных уведомлений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сообщение об изменениях Сервиса, настоящей Политики или Условий использования;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "получение отзывов и оценка качества."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "7.4 Улучшение и разработка"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "анализ работы и использования функций;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "исправление ошибок и повышение надёжности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "улучшение категоризации, прогнозов и аналитических методик;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "разработка новых функций;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проведение внутреннего тестирования и контроля качества."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "При улучшении моделей мы стремимся использовать минимально необходимые, а когда это разумно — агрегированные или обезличенные данные. Мы не используем данные подключённых финансовых счетов для обучения общедоступной модели искусственного интеллекта, если предварительно не предоставили отдельное ясное уведомление и не получили требуемое законом явное согласие."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "7.5 Юридические и деловые цели"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "соблюдение применимого законодательства и действительных юридических требований;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ведение обязательных записей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "защита прав, безопасности и имущества пользователей, OPHIR и других лиц;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "установление, осуществление или защита юридических требований;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "аудит, финансирование, корпоративная реорганизация, продажа или передача Сервиса с надлежащими гарантиями."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы не используем персональную информацию для цели, которую разумное лицо сочло бы неуместной в данных обстоятельствах."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Согласие и ваш выбор",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В зависимости от контекста и применимого закона обработка может основываться на вашем явном или подразумеваемом согласии либо на предусмотренном законом исключении."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Поскольку финансовая информация чувствительна, мы запрашиваем необходимые разрешения до подключения финансового счёта. Интерфейс Plaid или финансового учреждения может показывать конкретные категории данных и цели использования. Ваш выбор в таком интерфейсе применяется к соответствующему подключению."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если мы намерены использовать или раскрывать информацию для существенно новой цели, мы предоставим уведомление и получим новое согласие, когда это требуется."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Вы можете отозвать согласие с учётом разумного уведомления и законных либо договорных ограничений. Отзыв может привести к отключению подключённого счёта, прекращению обновления данных или невозможности предоставлять зависимую функцию. Отзыв не затрагивает законность ранее выполненной обработки и не отменяет обязательное хранение."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Вы можете:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "не подключать финансовый счёт и использовать доступные ручные функции;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выбирать поддерживаемые счета при подключении;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отключить счёт в настройках;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "изменить разрешения через доступный процесс повторного подключения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отключить необязательные уведомления и параметры аналитики, если такие элементы управления предлагаются;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отказаться от рекламных сообщений, сохранив необходимые сервисные и безопасностные сообщения."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Plaid и подключение финансовых счетов",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может использовать Plaid Technologies Inc., её канадские аффилированные лица или связанные организации ("
              },
              {
                "type": "strong",
                "text": "Plaid"
              },
              {
                "type": "text",
                "text": ") для установления соединения с поддерживаемыми финансовыми учреждениями."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "При использовании Plaid:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "вы переходите через интерфейс Plaid Link или интерфейс вашего финансового учреждения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid сообщает категории запрашиваемых данных и цель подключения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "вы выбираете учреждение и, где доступно, счета;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid и учреждение обрабатывают аутентификацию и передают OPHIR разрешённые данные;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR получает только данные и метаданные, доступ к которым предусмотрен активированными продуктами и вашим разрешением;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid может вести записи о согласии и подключении в соответствии со своими обязанностями и политиками;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "использование Plaid регулируется также политикой конфиденциальности Plaid."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Политика конфиденциальности Plaid:\n"
              },
              {
                "type": "externalLink",
                "text": "https://plaid.com/legal/#end-user-privacy-policy",
                "href": "https://plaid.com/legal/#end-user-privacy-policy"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Портал Plaid, если он доступен для вашего подключения:\n"
              },
              {
                "type": "externalLink",
                "text": "https://my.plaid.com",
                "href": "https://my.plaid.com"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Отключить счёт можно в настройках OPHIR, через доступные средства Plaid или финансового учреждения. Отключение обычно прекращает будущие обновления, но может не удалять немедленно данные, ранее полученные OPHIR, Plaid или учреждением. Для удаления данных OPHIR используйте функцию удаления учётной записи или обратитесь на "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Для сведений под контролем Plaid могут применяться отдельные средства и правила Plaid."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Автоматизированная обработка, профилирование и функции AI",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может использовать автоматизированные правила, статистические методы и модели категоризации для создания бюджетных расчётов, прогнозов, показателей, предупреждений и рекомендуемых действий."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Такая обработка может:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "классифицировать операции;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выявлять предполагаемые регулярные платежи или доходы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "рассчитывать прогнозируемые остатки и денежные потоки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отмечать необычные изменения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "формировать объяснения и персонализированные подсказки."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если мы собираем персональную информацию с помощью технологии, позволяющей идентифицировать, определять местонахождение или профилировать лицо, до начала сбора мы предоставляем уведомление и сведения об активации, требуемые применимым законодательством."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Эти результаты носят информационный характер. Они не являются кредитным решением, регулируемой оценкой пригодности, профессиональной консультацией или юридически обязательным решением. OPHIR не использует исключительно автоматизированный результат для принятия от имени банка решения о доступе к кредиту, страхованию, трудоустройству или существенной услуге."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Вы можете исправлять доступные категории и исходные сведения. По вопросам о существенном автоматизированном результате обращайтесь на "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. Когда мы раскрываем персональную информацию",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы не продаём и не сдаём в аренду персональную информацию. Мы раскрываем её только в объёме, необходимом для описанных ниже целей."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.1 Поставщики услуг"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Получателями могут быть:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Plaid и другие поставщики подключения финансовых данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "облачный хостинг, базы данных, резервное копирование и доставка контента;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "поставщики аутентификации, безопасности и предотвращения злоупотреблений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сервисы аналитики производительности и диагностики сбоев;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сервисы электронной почты, уведомлений и поддержки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Apple и Google для подписок, распространения приложения и платформенных функций;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "профессиональные консультанты, аудиторы, страховщики и юристы."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Поставщикам разрешается обрабатывать сведения для согласованных услуг, и на них распространяются надлежащие договорные, конфиденциальные и безопасностные обязательства, кроме случаев, когда поставщик самостоятельно определяет обработку по своей опубликованной политике и применимому закону."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.2 По вашему указанию"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы можем раскрывать информацию учреждению, сервису, члену домашнего хозяйства или иному лицу, если вы ясно поручили это и соответствующая функция допускает раскрытие."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.3 Юридические требования и безопасность"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы можем раскрыть сведения, если добросовестно считаем это необходимым для соблюдения применимого закона, действительного судебного производства или законного требования компетентного органа; защиты прав или безопасности; расследования мошенничества или инцидента; либо установления, осуществления или защиты юридического требования."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы проверяем юридические запросы и, когда это законно и уместно, ограничиваем раскрытие необходимым объёмом."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "11.4 Корпоративная сделка"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "При финансировании, реорганизации, слиянии, продаже активов или передаче Сервиса сведения могут быть раскрыты потенциальным и фактическим участникам при соблюдении конфиденциальности и применимого закона. Новый оператор обязан соблюдать применимые обязательства или предоставить уведомление и получить согласие, когда это требуется."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Обработка за пределами Квебека",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR работает из Квебека, но поставщики услуг, Plaid, Apple, Google, финансовые учреждения или инфраструктура могут обрабатывать либо хранить информацию в других провинциях Канады, Соединённых Штатах или иных странах."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В другой юрисдикции информация может подпадать под местное законодательство и быть доступна судам, правоохранительным или государственным органам в соответствии с ним."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "До передачи персональной информации за пределы Квебека OPHIR проводит требуемую законом оценку факторов конфиденциальности и учитывает чувствительность данных, цели, меры защиты, договорные условия и правовой режим места обработки. Мы используем договорные и иные разумные меры, направленные на обеспечение надлежащей защиты."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Получить дополнительную информацию об основных категориях поставщиков и местах обработки можно по адресу "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Хранение, обезличивание и уничтожение",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы храним персональную информацию только столько, сколько разумно необходимо для целей, описанных в настоящей Политике, и для соблюдения юридических, бухгалтерских, безопасностных и договорных обязанностей."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Срок зависит от:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "продолжительности вашей учётной записи и подписки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "необходимости предоставлять запрошенные функции;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "характера и чувствительности сведений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сроков исковой давности и обязательного хранения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "необходимости предотвращать мошенничество, расследовать инциденты и разрешать споры;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "возможностей резервных систем и систем поставщиков."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "После закрытия учётной записи мы удаляем или обезличиваем активные пользовательские данные в соответствии с нашим графиком хранения, если дальнейшее хранение не требуется или не разрешено законом. Ограниченные записи могут дольше сохраняться в журналах безопасности, резервных копиях, записях согласий, квитанциях, юридических делах или системах поставщиков."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Резервные копии удаляются или перезаписываются в ходе обычного цикла и до этого изолируются от обычного использования. Надлежащим образом обезличенные данные могут сохраняться для аналитики, безопасности и улучшения Сервиса."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Отключение финансового счёта прекращает будущие обновления, но не является запросом на удаление уже импортированных данных. Для удаления используйте функцию удаления учётной записи или обратитесь на "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Как мы защищаем персональную информацию",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы применяем административные, организационные, договорные, технические и физические меры, соответствующие чувствительности финансовой информации и рискам, включая, где применимо:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "шифрование данных при передаче;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "защиту хранимых данных средствами инфраструктуры;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "разграничение доступа по ролям и принципу необходимого знания;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "многофакторную аутентификацию административного доступа;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "управление секретами и запрет хранения банковских паролей OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "журналирование, мониторинг и выявление подозрительной активности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обновления, управление уязвимостями и безопасную разработку;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "резервное копирование и планы восстановления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "договорные требования к поставщикам;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "процедуры реагирования на инциденты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "периодическую оценку мер безопасности."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ни одна система не обеспечивает абсолютную безопасность. Вы также отвечаете за защиту устройства, пароля, кода доступа и электронной почты. Незамедлительно сообщите на "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": ", если подозреваете компрометацию."
              }
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Инциденты конфиденциальности",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы поддерживаем процесс выявления, оценки, сдерживания, документирования и устранения инцидентов, затрагивающих персональную информацию."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если инцидент создаёт риск серьёзного вреда или достигает иного порога уведомления по применимому закону, мы уведомим компетентный орган и затронутых лиц согласно требованиям и предоставим информацию о характере инцидента, возможных последствиях и рекомендуемых мерах. Мы также ведём требуемый законом реестр инцидентов."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Ваши права в отношении конфиденциальности",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "С учётом применимого законодательства и ограниченных исключений вы можете:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "узнать, существует ли у нас ваша персональная информация;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросить доступ к ней и получить копию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросить исправление неточной, неполной или неоднозначной информации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросить удаление либо прекращение распространения в предусмотренных законом случаях;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отозвать согласие на использование или раскрытие;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "получить сведения о целях, способах сбора, категориях лиц с доступом, получателях, местах обработки и сроках хранения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "получить объяснение существенного решения, основанного исключительно на автоматизированной обработке, если такое право применимо;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросить передачу компьютеризированной персональной информации в структурированном и широко используемом технологическом формате, когда право на переносимость применяется;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подать жалобу OPHIR или компетентному органу."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "16.1 Как подать запрос"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Направьте письменный запрос ответственному за защиту персональной информации:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Укажите имя, адрес электронной почты учётной записи, характер запроса и достаточные сведения для поиска записей. Не отправляйте банковский пароль, полный номер карты или одноразовый код."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для защиты от несанкционированного раскрытия мы можем запросить разумное подтверждение личности. Мы ответим в срок, установленный применимым законодательством. Если мы не можем удовлетворить запрос полностью, мы сообщим причины, если закон разрешает, и доступные способы обжалования."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Доступ обычно предоставляется бесплатно. Если закон разрешает разумную плату, мы сообщим о ней заранее."
              }
            ]
          }
        ]
      },
      {
        "key": "section-17",
        "title": "17. Жалобы",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сначала вы можете направить вопрос или жалобу по адресу "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Мы подтвердим получение, проведём справедливое рассмотрение и предоставим содержательный ответ в разумный срок."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если результат вас не удовлетворяет, вы можете обратиться в:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Commission d'accès à l'information du Québec"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.cai.gouv.qc.ca",
                "href": "https://www.cai.gouv.qc.ca"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "или, когда применимо, в:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Office of the Privacy Commissioner of Canada"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.priv.gc.ca",
                "href": "https://www.priv.gc.ca"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Обращение в OPHIR не ограничивает ваше право обратиться в компетентный орган."
              }
            ]
          }
        ]
      },
      {
        "key": "section-18",
        "title": "18. Файлы cookie и аналогичные технологии",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Веб-сайт и приложение могут использовать строго необходимые локальные хранилища, токены сеанса, SDK или сходные технологии для:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "входа и поддержания сеанса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запоминания настроек;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "безопасности и предотвращения злоупотреблений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "измерения производительности и диагностики;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "понимания использования функций."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если мы используем необязательные аналитические или рекламные технологии, мы предоставим требуемое уведомление и выбор до их активации. Мы не используем данные подключённых финансовых счетов для межсервисного отслеживания или сторонней поведенческой рекламы."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Вы можете управлять отдельными технологиями через настройки приложения, браузера, операционной системы или показанный интерфейс согласия. Блокировка строго необходимых технологий может нарушить работу Сервиса."
              }
            ]
          }
        ]
      },
      {
        "key": "section-19",
        "title": "19. Сообщения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы можем направлять необходимые сообщения об учётной записи, безопасности, подключениях, подписке и изменениях Сервиса. От сообщений, необходимых для предоставления Сервиса, нельзя отказаться."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Рекламные сообщения направляются в соответствии с применимым законодательством и доступными согласиями. Отказаться можно по ссылке в сообщении или через доступные настройки. Отказ от маркетинга не прекращает сервисные или безопасностные сообщения."
              }
            ]
          }
        ]
      },
      {
        "key": "section-20",
        "title": "20. Дети",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сервис предназначен для жителей Канады в возрасте не менее 18 лет, обладающих законной возможностью заключать договоры. Мы сознательно не направляем Сервис детям и не собираем сознательно персональную информацию лиц младше 18 лет."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы считаете, что несовершеннолетнее лицо предоставило нам персональную информацию, напишите на "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Мы рассмотрим вопрос и примем надлежащие меры."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если функция семейного бюджета позволяет добавить сведения другого человека, вы обязаны иметь законные полномочия и, где требуется, его согласие. Не предоставляйте нам сведения третьих лиц без надлежащего правового основания."
              }
            ]
          }
        ]
      },
      {
        "key": "section-21",
        "title": "21. Сторонние сервисы и ссылки",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сервис может содержать ссылки на Plaid, Apple, Google, финансовые учреждения и другие сторонние ресурсы. Их действия регулируются собственными условиями и политиками конфиденциальности. Ознакомьтесь с этими политиками до передачи информации."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящая Политика не распространяется на данные, которые третья сторона собирает непосредственно как самостоятельная организация, хотя OPHIR остаётся ответственным за собственный выбор поставщиков и надзор за ними в предусмотренной законом степени."
              }
            ]
          }
        ]
      },
      {
        "key": "section-22",
        "title": "22. Изменения настоящей Политики",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы можем обновлять настоящую Политику с учётом изменений Сервиса, технологий, поставщиков, законодательства или наших практик."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Обновлённая версия будет содержать новую дату. О существенных изменениях мы уведомим способом, разумно рассчитанным на то, чтобы связаться с вами: в приложении, по электронной почте, на сайте или через магазин приложений. Мы получим новое согласие до применения существенно новой цели, если это требуется законом."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы рекомендуем периодически просматривать Политику. Предыдущие версии могут быть предоставлены, если это требуется законом или разумно возможно."
              }
            ]
          }
        ]
      },
      {
        "key": "section-23",
        "title": "23. Язык",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящий документ является русским переводом канадской основной английской версии. Французская версия предоставляется пользователям в Квебеке и во всех случаях, предусмотренных применимым языковым законодательством. Другие переводы могут предоставляться для удобства."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ничто ни в одной языковой версии не ограничивает права, от которых нельзя отказаться. Обработка регулируется применимым законодательством Квебека и федеральным законодательством Канады, включая, где применимо, Закон Квебека о защите персональной информации в частном секторе и PIPEDA. При расхождении версий применяются императивные нормы и версия, которая должна иметь преимущественную силу по закону."
              }
            ]
          }
        ]
      },
      {
        "key": "section-24",
        "title": "24. Контактная информация",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "По вопросам конфиденциальности, запросам о правах и жалобам:"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "strong",
                "text": "Soavinjato Andrianarisoa"
              },
              {
                "type": "text",
                "text": "\nОтветственный за защиту персональной информации OPHIR\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Общие и юридические вопросы: "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nПоддержка: "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nОбщая информация: "
              },
              {
                "type": "emailLink",
                "text": "hello@joinophir.app",
                "email": "hello@joinophir.app"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "При обращении не отправляйте пароль интернет-банка, полный номер платёжной карты, одноразовый код аутентификации или иные секретные учётные данные."
              }
            ]
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  PrivacyPolicyDocument
>;
