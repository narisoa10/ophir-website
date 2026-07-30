import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type SecurityInlineContent =
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

type SecurityBlock =
  | {
      type: "paragraph";
      content: readonly SecurityInlineContent[];
    }
  | {
      type: "callout";
      content: readonly SecurityInlineContent[];
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
      items: readonly (readonly SecurityInlineContent[])[];
    }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly (readonly SecurityInlineContent[])[])[];
    }
  | {
      type: "address";
      content: readonly SecurityInlineContent[];
    };

type SecuritySection = {
  key: string;
  title: string;
  blocks: readonly SecurityBlock[];
};

type SecurityDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  intro: readonly SecurityBlock[];
  sections: readonly SecuritySection[];
};

export const securityContent = {
  "en": {
    "title": "Security",
    "seoTitle": "Security | OPHIR",
    "description": "Public overview of application and data protection",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Public overview of application and data protection"
          }
        ]
      },
      {
        "type": "metadata",
        "items": [
          {
            "label": "Effective Date:",
            "value": "July 29, 2026",
            "dateTime": "2026-07-29"
          },
          {
            "label": "Last Updated:",
            "value": "July 29, 2026",
            "dateTime": "2026-07-29"
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "service-operator",
        "title": "Service Operator",
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
                "text": "Security concerns and support: "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
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
                "text": "\nGeneral and legal inquiries: "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              }
            ]
          },
          {
            "type": "callout",
            "content": [
              {
                "type": "text",
                "text": "This document provides a public overview of OPHIR's approach to security. It does not disclose confidential architecture, configurations, keys, threat-detection rules, or other information that could make it easier to bypass safeguards."
              }
            ]
          }
        ]
      },
      {
        "key": "at-a-glance",
        "title": "At a Glance",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Topic",
              "OPHIR's Approach"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Purpose"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR helps users understand and organize personal and household finances."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Banking activity"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR is not a bank, does not hold user funds, and does not transfer money."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Account connection"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Supported financial accounts may be connected through Plaid and the relevant financial institution's interface."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Online banking password"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Unless OPHIR expressly states otherwise, the application does not receive or store your online banking password."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Data protection"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR uses administrative, organizational, contractual, technical, and physical safeguards appropriate to the sensitivity of the information and the risk."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Sale of data"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR does not sell or rent personal or financial information."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Reporting a concern"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "If you suspect unauthorized access or a vulnerability, contact "
                  },
                  {
                    "type": "emailLink",
                    "text": "support@joinophir.app",
                    "email": "support@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": "."
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-1",
        "title": "1. Purpose and Scope",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This overview explains how OPHIR seeks to protect:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "user accounts;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "personal and financial information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "connected financial account data;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "budgets, categories, goals, notes, and settings;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "technical logs, tokens, and identifiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the mobile application, web pages, and support interfaces;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "systems and service providers involved in delivering the Service."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Security is a shared responsibility among OPHIR, infrastructure providers, Plaid, financial institutions, Apple, Google, and the user. Each party protects the systems and information under its control."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This document supplements the "
              },
              {
                "type": "internalLink",
                "text": "OPHIR Privacy Policy",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": ", "
              },
              {
                "type": "internalLink",
                "text": "Terms of Service",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": ", and "
              },
              {
                "type": "internalLink",
                "text": "Application Technologies and Cookies Policy",
                "page": "appTechnologies"
              },
              {
                "type": "text",
                "text": ". If there is a conflict, the applicable legal document and mandatory law will govern."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. OPHIR's Security Model",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR treats financial information as sensitive. Safeguards are selected with regard to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the nature and sensitivity of the information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the volume and retention period;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "how the information is used and transferred;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the likelihood of unauthorized access or disclosure;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the potential harm to a user;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the state of technology and emerging risks."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "No single safeguard eliminates every risk. OPHIR therefore uses a layered approach in which organizational rules, access restrictions, infrastructure protection, secure development, monitoring, and incident response support one another."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. Data and Function Limitation",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Reducing the amount of data can reduce the potential consequences of an incident. OPHIR seeks to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "collect only information needed for selected features;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request through Plaid only the data categories needed for activated features;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "not use connected financial account data for behavioural advertising;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "not retain information longer than needed for stated purposes, security, and legal compliance;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "delete or de-identify information in accordance with applicable retention rules;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "limit financial content in diagnostic logs."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR is designed to analyze and organize financial information. Unless a separate feature is expressly implemented and disclosed, OPHIR does not:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "open bank or investment accounts;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "hold client funds;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "issue payment cards;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "execute payments, transfers, or securities trades;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request full account and routing numbers for moving money;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "receive your full payment card number when a subscription is purchased through the Apple App Store or Google Play."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Account Protection",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Depending on the features actually available, account protection may include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "authentication checks;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "protected session tokens with limited validity;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "session termination or revocation after sign-out, expiry, or detection of risk;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "identity verification before a sensitive request is completed;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "rate limits and other controls against automated abuse;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "notices about material security events;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "use of protected operating-system mechanisms for local secrets;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "on-device biometric unlocking when enabled by the user and supported by the application."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A biometric template used by Face ID, Touch ID, or a similar Android feature is generally evaluated by the device operating system. Unless expressly stated otherwise, OPHIR receives the result of the check, not a copy of the biometric template."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Connecting Financial Accounts Through Plaid",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "When a user chooses to connect a financial account, OPHIR may open Plaid Link or a protected interface of the financial institution. The user selects the institution, completes the required verification, and authorizes access to specified data."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Depending on the financial institution:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "authentication may occur directly on the institution's website or application;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid may provide the protected connection and transfer authorized data;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the institution may require multi-factor or renewed authentication;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the user may be able to select available accounts and data categories;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the connection may require periodic consent renewal."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Unless OPHIR expressly states otherwise, the application does not receive or store your online banking password. Never send a banking password, PIN, one-time code, or full card number in notes, assistant messages, or support requests."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid is an independent provider with its own technologies, policies, and responsibilities. Plaid publishes information about security, connection management, and data handling:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Plaid security: "
                },
                {
                  "type": "externalLink",
                  "text": "https://plaid.com/safety/",
                  "href": "https://plaid.com/safety/"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid connection management portal: "
                },
                {
                  "type": "externalLink",
                  "text": "https://my.plaid.com",
                  "href": "https://my.plaid.com"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid privacy policy: "
                },
                {
                  "type": "externalLink",
                  "text": "https://plaid.com/legal/#end-user-privacy-policy",
                  "href": "https://plaid.com/legal/#end-user-privacy-policy"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Disconnecting an account in OPHIR or Plaid stops or limits future data retrieval in accordance with available features, but it may not automatically delete information previously imported into OPHIR. Deletion of that information is governed by the "
              },
              {
                "type": "internalLink",
                "text": "Privacy Policy",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": " and the account and data deletion process."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. Transmission, Storage, and Access",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR uses safeguards appropriate to the sensitivity of financial information, including, where applicable:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "encryption of data in transit;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "protection of stored data through infrastructure controls;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "separation of production, testing, and local environments;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "management of secrets, tokens, and keys;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "restricted administrative access;"
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
                  "text": "role-based and need-to-know access controls;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "logging of significant security events;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "backup and recovery measures;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "secure deletion or de-identification at the end of the retention period."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Access to personal information should be granted only to people and providers who need it for a defined work purpose. Such access is limited by confidentiality obligations, contractual terms, and technical permissions."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR does not publish information about specific keys, backup locations, firewall rules, cloud configurations, or threat-detection mechanisms."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Secure Development and Operations",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR's development and operational approach includes, where appropriate:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "considering privacy and security requirements when designing features;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "reviewing changes before release;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "managing dependencies, libraries, and SDKs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "limiting secrets in source code and logs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "remediating known vulnerabilities according to risk;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "updating the application, server components, and infrastructure;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "reviewing application permissions and the amount of data transferred;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "assessing providers before giving them access to sensitive information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "testing recovery and incident-response procedures;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "periodically reviewing safeguards as technology and threats change."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Application updates may contain important security fixes. Using an outdated application version or unsupported operating system may limit functionality or increase risk."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Monitoring and Abuse Prevention",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "To protect the Service, OPHIR may process limited technical information and security logs, such as:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "sign-in time and the technical result of an attempt;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "account, installation, or session identifiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "device type, application version, and operating system version;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "IP address and approximate region;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "error codes and crash information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "token-revocation or reauthentication events;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "indicators of unusual, automated, or prohibited activity."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This information is used to prevent abuse, investigate errors, protect infrastructure, and respond to incidents. OPHIR seeks to limit the volume of logs and does not use them to sell user profiles."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Service Providers and Third-Party Services",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may use providers for:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "financial data connectivity;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "cloud hosting and databases;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "authentication and access management;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "backups;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "crash and performance diagnostics;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "message and notification delivery;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "subscription verification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "user support and abuse prevention."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Before granting access, OPHIR should assess the necessary data, purposes, risks, processing location, and available safeguards. Providers may process information only for agreed services and under applicable contractual, confidentiality, and security obligations, except where they independently determine processing under their own policies."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple, Google, Plaid, and financial institutions protect their own platforms and process certain information under their own terms and policies. Their safeguards should not be treated as certification or a guarantee of OPHIR's security."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Incident Response",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR maintains a process for:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "receiving and validating a report;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "containing a suspected threat;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "preserving necessary records;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "identifying affected systems and data;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "assessing information sensitivity and the likelihood of harm;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "remediating the cause and restoring service safely;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "documenting the incident and actions taken;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "notifying users, regulators, or other organizations when required by law;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "reviewing safeguards after the incident."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If an incident creates a legally defined risk of serious harm, OPHIR will provide required notices within the applicable time. A user notice may describe the event, the categories of information involved, OPHIR's response, and recommended actions."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR maintains incident records to the extent and for the period required by applicable law."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. What Users Should Do",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Users also influence the security of their information. We recommend that you:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "protect your device with a passcode and available biometrics;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "use a unique, strong password for OPHIR and your email account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "enable multi-factor authentication where available;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "never share a password, PIN, or one-time code;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "do not enter secret banking information in notes or support messages;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "install application and operating-system updates;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "download OPHIR only from an official store or official link;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "verify the website address and message sender before following a link;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "reject unexpected sign-in or multi-factor authentication requests;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sign out on a shared or third-party device;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "review connected accounts and disconnect connections you no longer need;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "immediately report a lost device or suspicious activity."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR should never ask you to email your full online banking password, full payment card number, PIN, or one-time authentication code."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Lost Device or Suspected Compromise",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If your device is lost, your account is compromised, or you notice unusual activity:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "secure the email account associated with OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "change your OPHIR password if that feature is available;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "end active sessions or contact support;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "disconnect financial connections you no longer need;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "if necessary, change banking credentials through your financial institution;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "review transactions and notify the financial institution of suspicious activity;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "contact "
                },
                {
                  "type": "emailLink",
                  "text": "support@joinophir.app",
                  "email": "support@joinophir.app"
                },
                {
                  "type": "text",
                  "text": " from the email address associated with the account."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not include a banking password, full card number, PIN, or one-time code. OPHIR may request reasonable identity verification before changing access or disclosing information."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Reporting a Vulnerability",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you believe you have found a vulnerability in OPHIR:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "email "
                },
                {
                  "type": "emailLink",
                  "text": "support@joinophir.app",
                  "email": "support@joinophir.app"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "provide a concise description and identify the affected feature;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "include safe reproduction steps, application version, and device model where relevant;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "do not include another user's personal or financial information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "do not use the vulnerability to access, change, or delete another person's information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "do not disrupt the Service or use social engineering;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "allow OPHIR reasonable time to investigate and remediate the issue before public disclosure."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A report does not create a right to payment. If OPHIR introduces a separate vulnerability disclosure or reward program, its specific terms will be published separately."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Limitations",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "No digital system, encryption method, or provider can guarantee absolute security. The internet, mobile devices, financial institutions, and third-party platforms may experience outages, errors, and attacks."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This overview:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "is not a guarantee that incidents will never occur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "does not replace the terms of Plaid, Apple, Google, or a financial institution;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "does not mean OPHIR is certified under a standard that is not expressly identified here;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "does not contain a complete list of internal safeguards;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "may be updated as features, technologies, risks, or legal requirements change."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR will communicate material changes in a manner appropriate to their nature and applicable law."
              }
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Related Documents",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For a complete understanding of how information is handled and protected, review:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the "
                },
                {
                  "type": "internalLink",
                  "text": "OPHIR Privacy Policy",
                  "page": "privacyPolicy"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the "
                },
                {
                  "type": "internalLink",
                  "text": "OPHIR Terms of Service",
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
                  "text": "the "
                },
                {
                  "type": "internalLink",
                  "text": "Application Technologies and Cookies Policy",
                  "page": "appTechnologies"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the "
                },
                {
                  "type": "internalLink",
                  "text": "Account Deletion and Data Requests",
                  "page": "accountData"
                },
                {
                  "type": "text",
                  "text": " page once published."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR's approach takes account of applicable requirements and guidance, including:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Quebec's Act respecting the protection of personal information in the private sector - "
                },
                {
                  "type": "externalLink",
                  "text": "legisquebec.gouv.qc.ca",
                  "href": "https://www.legisquebec.gouv.qc.ca"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "guidance from the Office of the Privacy Commissioner of Canada on safeguards and breaches - "
                },
                {
                  "type": "externalLink",
                  "text": "priv.gc.ca",
                  "href": "https://www.priv.gc.ca"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "guidance from the Canadian Centre for Cyber Security on account protection and multi-factor authentication - "
                },
                {
                  "type": "externalLink",
                  "text": "cyber.gc.ca",
                  "href": "https://www.cyber.gc.ca"
                },
                {
                  "type": "text",
                  "text": "."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Contact",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Security concerns and suspicious activity:"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "strong",
                "text": "Privacy and personal information requests:"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "strong",
                "text": "General and legal inquiries:"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "strong",
                "text": "Mailing address:"
              },
              {
                "type": "text",
                "text": " Soavinjato Andrianarisoa, 1203 Rue Normont, Laval, Québec H7G 3H3, Canada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not send your online banking password, full payment card number, PIN, one-time authentication code, secret key, or other confidential credentials."
              }
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Sécurité",
    "seoTitle": "Sécurité | OPHIR",
    "description": "Aperçu public de la protection de l’application et des données",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Aperçu public de la protection de l’application et des données"
          }
        ]
      },
      {
        "type": "metadata",
        "items": [
          {
            "label": "Date d’entrée en vigueur :",
            "value": "29 juillet 2026",
            "dateTime": "2026-07-29"
          },
          {
            "label": "Dernière mise à jour :",
            "value": "29 juillet 2026",
            "dateTime": "2026-07-29"
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "service-operator",
        "title": "Exploitant du Service",
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
                "text": "Assistance et signalement de problèmes de sécurité : "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
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
                "text": "\nDemandes générales et juridiques : "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              }
            ]
          },
          {
            "type": "callout",
            "content": [
              {
                "type": "text",
                "text": "Le présent document donne un aperçu public de l’approche d’OPHIR en matière de sécurité. Il ne divulgue aucune architecture confidentielle, configuration, clé, règle de détection des menaces ni aucun autre renseignement susceptible de faciliter le contournement des mesures de protection."
              }
            ]
          }
        ]
      },
      {
        "key": "at-a-glance",
        "title": "En bref",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Sujet",
              "Approche d’OPHIR"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Objet"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR aide les utilisateurs à comprendre et à organiser leurs finances personnelles et familiales."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Activités bancaires"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR n’est pas une banque, ne détient pas les fonds des utilisateurs et n’effectue aucun transfert d’argent."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Connexion de comptes"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Les comptes financiers pris en charge peuvent être connectés par l’intermédiaire de Plaid et de l’interface de l’institution financière concernée."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Mot de passe de services bancaires en ligne"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Sauf indication contraire expresse d’OPHIR, l’application ne reçoit ni ne conserve votre mot de passe de services bancaires en ligne."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Protection des données"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR utilise des mesures administratives, organisationnelles, contractuelles, techniques et physiques adaptées à la sensibilité des renseignements et au risque."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Vente de données"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR ne vend ni ne loue les renseignements personnels ou financiers."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Signalement d’un problème"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Si vous soupçonnez un accès non autorisé ou une vulnérabilité, écrivez à "
                  },
                  {
                    "type": "emailLink",
                    "text": "support@joinophir.app",
                    "email": "support@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": "."
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-1",
        "title": "1. Objet et portée",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le présent aperçu explique comment OPHIR cherche à protéger :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "les comptes des utilisateurs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements personnels et financiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les données provenant de comptes financiers connectés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les budgets, les catégories, les objectifs, les notes et les paramètres;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les journaux techniques, les jetons et les identifiants;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’application mobile, les pages Web et les interfaces d’assistance;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les systèmes et les fournisseurs de services qui participent à la prestation du Service."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La sécurité est une responsabilité partagée entre OPHIR, les fournisseurs d’infrastructure, Plaid, les institutions financières, Apple, Google et l’utilisateur. Chaque partie protège les systèmes et les renseignements sous son contrôle."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le présent document complète la "
              },
              {
                "type": "internalLink",
                "text": "Politique de confidentialité",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": ", les "
              },
              {
                "type": "internalLink",
                "text": "Conditions d’utilisation",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " ainsi que la Politique relative aux technologies de l’application et aux cookies d’OPHIR. En cas de divergence, le document juridique applicable et les dispositions impératives de la loi prévalent."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Modèle de sécurité d’OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR considère les renseignements financiers comme sensibles. Les mesures de protection sont choisies en tenant compte :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "de la nature et de la sensibilité des renseignements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de leur volume et de leur période de conservation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de la manière dont ils sont utilisés et transmis;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de la probabilité d’un accès ou d’une communication non autorisés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "du préjudice potentiel pour un utilisateur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de l’état de la technologie et de l’évolution des risques."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Aucune mesure ne peut, à elle seule, éliminer tous les risques. OPHIR adopte donc une approche à plusieurs niveaux dans laquelle les règles organisationnelles, les restrictions d’accès, la protection de l’infrastructure, le développement sécurisé, la surveillance et la gestion des incidents se complètent."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. Limitation des données et des fonctions",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La réduction du volume de données peut limiter les conséquences possibles d’un incident. OPHIR cherche à :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "recueillir uniquement les renseignements nécessaires aux fonctions sélectionnées;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander par l’intermédiaire de Plaid uniquement les catégories de données nécessaires aux fonctions activées;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne pas utiliser les données de comptes financiers connectés à des fins de publicité comportementale;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne pas conserver les renseignements plus longtemps que nécessaire aux fins déclarées, à la sécurité et au respect de la loi;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "supprimer ou dépersonnaliser les renseignements conformément aux règles de conservation applicables;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "limiter les renseignements financiers contenus dans les journaux de diagnostic."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR est conçu pour analyser et organiser des renseignements financiers. À moins qu’une fonction distincte ne soit expressément mise en œuvre et divulguée, OPHIR :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "n’ouvre aucun compte bancaire ou de placement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne détient pas les fonds des clients;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "n’émet aucune carte de paiement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "n’exécute aucun paiement, transfert ou opération sur valeurs mobilières;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne demande pas les numéros complets de compte et d’acheminement afin de transférer de l’argent;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne reçoit pas le numéro complet de votre carte de paiement lorsqu’un abonnement est acheté dans l’App Store d’Apple ou Google Play."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Protection du compte",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Selon les fonctions réellement offertes, la protection du compte peut comprendre :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "des vérifications d’authentification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des jetons de session protégés dont la durée de validité est limitée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la fermeture ou la révocation d’une session après la déconnexion, l’expiration ou la détection d’un risque;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "une vérification de l’identité avant l’exécution d’une demande sensible;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des limites de fréquence et d’autres contrôles contre les abus automatisés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des avis relatifs à des événements de sécurité importants;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’utilisation de mécanismes protégés du système d’exploitation pour les secrets conservés localement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le déverrouillage biométrique sur l’appareil lorsqu’il est activé par l’utilisateur et pris en charge par l’application."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le gabarit biométrique utilisé par Face ID, Touch ID ou une fonction Android semblable est généralement évalué par le système d’exploitation de l’appareil. Sauf indication contraire expresse, OPHIR reçoit le résultat de la vérification, et non une copie du gabarit biométrique."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Connexion de comptes financiers par l’intermédiaire de Plaid",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsqu’un utilisateur choisit de connecter un compte financier, OPHIR peut ouvrir Plaid Link ou une interface protégée de l’institution financière. L’utilisateur sélectionne l’institution, effectue la vérification requise et autorise l’accès aux données précisées."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Selon l’institution financière :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "l’authentification peut avoir lieu directement sur le site Web ou dans l’application de l’institution;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid peut fournir la connexion protégée et transmettre les données autorisées;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’institution peut exiger une authentification multifacteur ou une nouvelle authentification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’utilisateur peut être en mesure de sélectionner les comptes et les catégories de données disponibles;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la connexion peut exiger un renouvellement périodique du consentement."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sauf indication contraire expresse d’OPHIR, l’application ne reçoit ni ne conserve votre mot de passe de services bancaires en ligne. Ne transmettez jamais un mot de passe bancaire, un NIP, un code à usage unique ou le numéro complet d’une carte dans des notes, des messages adressés à l’assistant ou des demandes d’assistance."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid est un fournisseur indépendant doté de ses propres technologies, politiques et responsabilités. Plaid publie des renseignements sur la sécurité, la gestion des connexions et le traitement des données :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "sécurité de Plaid : "
                },
                {
                  "type": "externalLink",
                  "text": "https://plaid.com/safety/",
                  "href": "https://plaid.com/safety/"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "portail Plaid de gestion des connexions : "
                },
                {
                  "type": "externalLink",
                  "text": "https://my.plaid.com",
                  "href": "https://my.plaid.com"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "politique de confidentialité de Plaid : "
                },
                {
                  "type": "externalLink",
                  "text": "https://plaid.com/legal/#end-user-privacy-policy",
                  "href": "https://plaid.com/legal/#end-user-privacy-policy"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La déconnexion d’un compte dans OPHIR ou Plaid met fin ou impose des limites à la récupération future de données selon les fonctions offertes, mais elle ne supprime pas nécessairement de façon automatique les renseignements importés antérieurement dans OPHIR. La suppression de ces renseignements est régie par la "
              },
              {
                "type": "internalLink",
                "text": "Politique de confidentialité",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": " et par le processus de suppression du compte et des données."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. Transmission, stockage et accès",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR utilise des mesures de protection adaptées à la sensibilité des renseignements financiers, notamment, lorsqu’elles s’appliquent :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le chiffrement des données en transit;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la protection des données stockées au moyen de contrôles d’infrastructure;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la séparation des environnements de production, de test et locaux;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la gestion des secrets, des jetons et des clés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la restriction de l’accès administratif;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’authentification multifacteur pour l’accès administratif;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des contrôles d’accès fondés sur les rôles et le principe du besoin de savoir;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la journalisation des événements de sécurité importants;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des mesures de sauvegarde et de récupération;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la suppression sécurisée ou la dépersonnalisation à la fin de la période de conservation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L’accès aux renseignements personnels ne devrait être accordé qu’aux personnes et aux fournisseurs qui en ont besoin pour une finalité professionnelle définie. Cet accès est limité par des obligations de confidentialité, des modalités contractuelles et des autorisations techniques."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne publie aucun renseignement sur les clés précises, l’emplacement des copies de sauvegarde, les règles de pare-feu, les configurations infonuagiques ou les mécanismes de détection des menaces."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Développement et exploitation sécurisés",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L’approche d’OPHIR en matière de développement et d’exploitation comprend, lorsqu’il y a lieu :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "la prise en compte des exigences de protection des renseignements personnels et de sécurité lors de la conception des fonctions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’examen des modifications avant leur publication;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la gestion des dépendances, des bibliothèques et des trousses de développement logiciel;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la limitation des secrets dans le code source et les journaux;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la correction des vulnérabilités connues en fonction du risque;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la mise à jour de l’application, des composants de serveur et de l’infrastructure;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’examen des autorisations de l’application et du volume de données transmises;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’évaluation des fournisseurs avant de leur donner accès à des renseignements sensibles;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la mise à l’essai des procédures de récupération et de gestion des incidents;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’examen périodique des mesures de protection à mesure que la technologie et les menaces évoluent."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les mises à jour de l’application peuvent comprendre d’importants correctifs de sécurité. L’utilisation d’une version désuète de l’application ou d’un système d’exploitation qui n’est plus pris en charge peut limiter certaines fonctions ou accroître le risque."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Surveillance et prévention des abus",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Afin de protéger le Service, OPHIR peut traiter des renseignements techniques limités et des journaux de sécurité, notamment :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "l’heure de connexion et le résultat technique d’une tentative;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les identifiants du compte, de l’installation ou de la session;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le type d’appareil, la version de l’application et la version du système d’exploitation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’adresse IP et la région approximative;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les codes d’erreur et les renseignements sur les défaillances;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les événements de révocation de jetons ou de nouvelle authentification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les indices d’une activité inhabituelle, automatisée ou interdite."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ces renseignements servent à prévenir les abus, à examiner les erreurs, à protéger l’infrastructure et à gérer les incidents. OPHIR cherche à limiter le volume des journaux et ne les utilise pas pour vendre des profils d’utilisateurs."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Fournisseurs de services et services tiers",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut faire appel à des fournisseurs pour :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "la connectivité aux données financières;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’hébergement infonuagique et les bases de données;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’authentification et la gestion des accès;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les copies de sauvegarde;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le diagnostic des défaillances et du rendement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la livraison de messages et de notifications;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la vérification des abonnements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’assistance aux utilisateurs et la prévention des abus."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Avant d’accorder un accès, OPHIR devrait évaluer les données nécessaires, les finalités, les risques, le lieu du traitement et les mesures de protection disponibles. Les fournisseurs ne peuvent traiter les renseignements que pour les services convenus et conformément aux obligations contractuelles, de confidentialité et de sécurité applicables, sauf lorsqu’ils déterminent de façon indépendante le traitement selon leurs propres politiques."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple, Google, Plaid et les institutions financières protègent leurs propres plateformes et traitent certains renseignements conformément à leurs propres conditions et politiques. Leurs mesures de protection ne doivent pas être considérées comme une certification ou une garantie de la sécurité d’OPHIR."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Gestion des incidents",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR maintient un processus visant à :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "recevoir et valider un signalement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "circonscrire une menace soupçonnée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "préserver les dossiers nécessaires;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "déterminer les systèmes et les données touchés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "évaluer la sensibilité des renseignements et la probabilité d’un préjudice;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "corriger la cause et rétablir le Service de façon sécuritaire;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "documenter l’incident et les mesures prises;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aviser les utilisateurs, les organismes de réglementation ou d’autres organisations lorsque la loi l’exige;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "réexaminer les mesures de protection après l’incident."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si un incident présente un risque de préjudice sérieux au sens de la loi, OPHIR transmettra les avis requis dans le délai applicable. Un avis à l’utilisateur peut décrire l’événement, les catégories de renseignements en cause, les mesures prises par OPHIR et les actions recommandées."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR tient un registre des incidents dans la mesure et pendant la période exigées par la loi applicable."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. Mesures recommandées aux utilisateurs",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les utilisateurs jouent eux aussi un rôle dans la sécurité de leurs renseignements. Nous vous recommandons :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "de protéger votre appareil au moyen d’un code d’accès et des fonctions biométriques disponibles;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d’utiliser un mot de passe unique et robuste pour OPHIR et votre compte de courrier électronique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d’activer l’authentification multifacteur lorsqu’elle est offerte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de ne jamais communiquer un mot de passe, un NIP ou un code à usage unique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de ne pas saisir de renseignements bancaires secrets dans des notes ou des messages d’assistance;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d’installer les mises à jour de l’application et du système d’exploitation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de télécharger OPHIR uniquement à partir d’une boutique officielle ou d’un lien officiel;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de vérifier l’adresse du site Web et l’expéditeur d’un message avant de suivre un lien;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de refuser toute demande inattendue de connexion ou d’authentification multifacteur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de fermer votre session sur un appareil partagé ou appartenant à un tiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d’examiner vos comptes connectés et de déconnecter les connexions dont vous n’avez plus besoin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de signaler immédiatement la perte d’un appareil ou toute activité suspecte."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne devrait jamais vous demander d’envoyer par courriel votre mot de passe complet de services bancaires en ligne, le numéro complet d’une carte de paiement, un NIP ou un code d’authentification à usage unique."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Appareil perdu ou compromission soupçonnée",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si votre appareil est perdu, si votre compte est compromis ou si vous remarquez une activité inhabituelle :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "sécurisez le compte de courrier électronique associé à OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "changez votre mot de passe OPHIR, si cette fonction est offerte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "mettez fin aux sessions actives ou communiquez avec l’assistance;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "déconnectez les connexions financières dont vous n’avez plus besoin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "au besoin, modifiez vos identifiants bancaires auprès de votre institution financière;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "examinez les opérations et informez l’institution financière de toute activité suspecte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "écrivez à "
                },
                {
                  "type": "emailLink",
                  "text": "support@joinophir.app",
                  "email": "support@joinophir.app"
                },
                {
                  "type": "text",
                  "text": " à partir de l’adresse courriel associée au compte."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "N’incluez pas un mot de passe bancaire, le numéro complet d’une carte, un NIP ou un code à usage unique. OPHIR peut demander une vérification raisonnable de votre identité avant de modifier l’accès ou de communiquer des renseignements."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Signalement d’une vulnérabilité",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous croyez avoir découvert une vulnérabilité dans OPHIR :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "écrivez à "
                },
                {
                  "type": "emailLink",
                  "text": "support@joinophir.app",
                  "email": "support@joinophir.app"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "fournissez une description concise et indiquez la fonction touchée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "joignez des étapes de reproduction sécuritaires ainsi que la version de l’application et le modèle de l’appareil, s’il y a lieu;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "n’incluez aucun renseignement personnel ou financier appartenant à un autre utilisateur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "n’utilisez pas la vulnérabilité pour consulter, modifier ou supprimer les renseignements d’une autre personne;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne perturbez pas le Service et n’utilisez pas de techniques d’ingénierie sociale;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "accordez à OPHIR un délai raisonnable pour examiner et corriger le problème avant toute divulgation publique."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Un signalement ne confère aucun droit à une rémunération. Si OPHIR met en place un programme distinct de divulgation des vulnérabilités ou de récompense, ses conditions particulières seront publiées séparément."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Limites",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Aucun système numérique, aucune méthode de chiffrement et aucun fournisseur ne peut garantir une sécurité absolue. Internet, les appareils mobiles, les institutions financières et les plateformes tierces peuvent subir des interruptions, des erreurs et des attaques."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le présent aperçu :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ne garantit pas qu’aucun incident ne se produira;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne remplace pas les conditions de Plaid, d’Apple, de Google ou d’une institution financière;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne signifie pas qu’OPHIR est certifié selon une norme qui n’est pas expressément désignée dans les présentes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne contient pas une liste exhaustive des mesures de protection internes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "peut être mis à jour en fonction de l’évolution des fonctions, des technologies, des risques ou des exigences juridiques."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR communiquera les modifications importantes d’une manière adaptée à leur nature et à la loi applicable."
              }
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Documents connexes",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour bien comprendre la manière dont les renseignements sont traités et protégés, consultez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "la "
                },
                {
                  "type": "internalLink",
                  "text": "Politique de confidentialité d’OPHIR",
                  "page": "privacyPolicy"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les "
                },
                {
                  "type": "internalLink",
                  "text": "Conditions d’utilisation",
                  "page": "termsOfService"
                },
                {
                  "type": "text",
                  "text": " d’OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la Politique relative aux technologies de l’application et aux cookies;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la page "
                },
                {
                  "type": "internalLink",
                  "text": "Suppression du compte et demandes relatives aux renseignements personnels",
                  "page": "accountData"
                },
                {
                  "type": "text",
                  "text": "."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L’approche d’OPHIR tient compte des exigences et des lignes directrices applicables, notamment :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "la Loi sur la protection des renseignements personnels dans le secteur privé du Québec — "
                },
                {
                  "type": "externalLink",
                  "text": "legisquebec.gouv.qc.ca",
                  "href": "https://www.legisquebec.gouv.qc.ca"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les lignes directrices du Commissariat à la protection de la vie privée du Canada sur les mesures de protection et les atteintes — "
                },
                {
                  "type": "externalLink",
                  "text": "priv.gc.ca",
                  "href": "https://www.priv.gc.ca"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les conseils du Centre canadien pour la cybersécurité sur la protection des comptes et l’authentification multifacteur — "
                },
                {
                  "type": "externalLink",
                  "text": "cyber.gc.ca",
                  "href": "https://www.cyber.gc.ca"
                },
                {
                  "type": "text",
                  "text": "."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Coordonnées",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Problèmes de sécurité et activités suspectes :"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "strong",
                "text": "Protection des renseignements personnels et demandes relatives aux données :"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "strong",
                "text": "Demandes générales et juridiques :"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "strong",
                "text": "Adresse postale :"
              },
              {
                "type": "text",
                "text": " Soavinjato Andrianarisoa, 1203 Rue Normont, Laval (Québec) H7G 3H3, Canada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ne transmettez pas votre mot de passe de services bancaires en ligne, le numéro complet d’une carte de paiement, un NIP, un code d’authentification à usage unique, une clé secrète ni aucun autre renseignement d’authentification confidentiel."
              }
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "Безопасность",
    "seoTitle": "Безопасность | OPHIR",
    "description": "Публичный обзор защиты приложения и данных",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Публичный обзор защиты приложения и данных"
          }
        ]
      },
      {
        "type": "metadata",
        "items": [
          {
            "label": "Дата вступления в силу:",
            "value": "29 июля 2026 года",
            "dateTime": "2026-07-29"
          },
          {
            "label": "Дата последнего обновления:",
            "value": "29 июля 2026 года",
            "dateTime": "2026-07-29"
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "service-operator",
        "title": "Оператор Сервиса",
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
                "text": "Поддержка и сообщения о безопасности: "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
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
                "text": "\nОбщие и юридические вопросы: "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              }
            ]
          },
          {
            "type": "callout",
            "content": [
              {
                "type": "text",
                "text": "Этот документ содержит публичный обзор подхода OPHIR к безопасности. Он не раскрывает конфиденциальную архитектуру, конфигурации, ключи, правила обнаружения угроз или иные сведения, которые могут облегчить обход защиты."
              }
            ]
          }
        ]
      },
      {
        "key": "at-a-glance",
        "title": "Кратко",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Тема",
              "Подход OPHIR"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Назначение"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR помогает пользователям понимать и организовывать личные и семейные финансы."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Банковские операции"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR не является банком, не хранит денежные средства пользователей и не выполняет их перевод."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Подключение счетов"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Подключение поддерживаемых финансовых счетов может выполняться через Plaid и интерфейс соответствующего финансового учреждения."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Банковский пароль"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Если OPHIR прямо не сообщает иное, приложение не получает и не хранит пароль интернет-банка."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Защита данных"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Применяются административные, организационные, договорные, технические и физические меры, соответствующие чувствительности информации и риску."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Продажа данных"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "OPHIR не продаёт и не сдаёт в аренду персональную или финансовую информацию."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Сообщение о проблеме"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "При подозрении на несанкционированный доступ или уязвимость напишите на "
                  },
                  {
                    "type": "emailLink",
                    "text": "support@joinophir.app",
                    "email": "support@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": "."
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-1",
        "title": "1. Назначение и сфера действия",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящий обзор объясняет, как OPHIR стремится защищать:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "учётные записи пользователей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "персональную и финансовую информацию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "данные подключённых финансовых счетов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "бюджеты, категории, цели, заметки и настройки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "технические журналы, токены и идентификаторы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "мобильное приложение, веб-страницы и интерфейсы поддержки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "системы и поставщиков, участвующих в предоставлении Сервиса."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Безопасность является совместной ответственностью OPHIR, поставщиков инфраструктуры, Plaid, финансовых учреждений, Apple, Google и пользователя. Каждая сторона защищает те системы и сведения, которые находятся под её контролем."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящий документ дополняет Политику конфиденциальности, "
              },
              {
                "type": "internalLink",
                "text": "Условия использования",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " и Политику использования технологий приложения и файлов cookie OPHIR. При противоречии применяются соответствующий юридический документ и обязательные требования закона."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Модель безопасности OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR исходит из того, что финансовая информация является чувствительной. Меры защиты выбираются с учётом:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "характера и чувствительности сведений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "объёма и срока хранения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "способа использования и передачи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "вероятности несанкционированного доступа или раскрытия;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "возможного вреда пользователю;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "состояния технологий и появления новых рисков."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ни одна отдельная мера не устраняет все риски. Поэтому OPHIR использует многоуровневый подход, в котором организационные правила, ограничение доступа, защита инфраструктуры, безопасная разработка, мониторинг и реагирование на инциденты дополняют друг друга."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. Ограничение данных и функций",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Снижение объёма данных уменьшает возможные последствия инцидента. OPHIR стремится:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "собирать только сведения, необходимые для выбранных функций;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запрашивать через Plaid только категории данных, необходимые для работы активированных возможностей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не использовать данные подключённых счетов для поведенческой рекламы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не хранить информацию дольше, чем это необходимо для заявленных целей, безопасности и соблюдения закона;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "удалять или обезличивать сведения в соответствии с применимыми правилами хранения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ограничивать включение финансового содержания в диагностические журналы."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR предназначен для анализа и организации финансовой информации. Если отдельная функция прямо не внедрена и не раскрыта пользователю, OPHIR:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "не открывает банковские или инвестиционные счета;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не хранит средства клиентов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не выпускает платёжные карты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не исполняет платежи, переводы или биржевые сделки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не запрашивает полные номера счетов и маршрутизации для перевода средств;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не получает полный номер платёжной карты при покупке подписки через Apple App Store или Google Play."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Защита учётной записи",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В зависимости от фактически доступных функций защита учётной записи может включать:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "проверку данных аутентификации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "защищённые токены сеанса с ограниченным сроком действия;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "прекращение или отзыв сеанса после выхода, истечения срока или обнаружения риска;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверку личности перед выполнением чувствительного запроса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ограничение частоты попыток и иные средства против автоматизированных злоупотреблений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "уведомления о существенных событиях безопасности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "использование доступных защищённых механизмов операционной системы для локальных секретов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "биометрическую разблокировку на устройстве, если пользователь её включил и функция поддерживается."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Биометрический шаблон, используемый Face ID, Touch ID или аналогичной функцией Android, обычно проверяется операционной системой устройства. OPHIR получает результат проверки, а не копию биометрического шаблона, если прямо не сообщено иное."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Подключение финансовых счетов через Plaid",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Когда пользователь выбирает подключение финансового счёта, OPHIR может открыть Plaid Link либо защищённый интерфейс финансового учреждения. Пользователь выбирает учреждение, проходит предусмотренную им проверку и предоставляет разрешение на передачу определённых данных."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В зависимости от финансового учреждения:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "аутентификация может происходить непосредственно на сайте или в приложении учреждения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid может обеспечивать защищённое соединение и передачу разрешённых данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "учреждение может потребовать многофакторную или повторную аутентификацию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "пользователь может выбирать доступные счета и категории данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подключение может потребовать периодического обновления согласия."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если OPHIR прямо не сообщает иное, приложение не получает и не хранит пароль интернет-банка. Никогда не отправляйте банковский пароль, PIN-код, одноразовый код или полный номер карты в заметках, сообщениях помощнику или обращениях в поддержку."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid является самостоятельным поставщиком со своими технологиями, правилами и обязанностями. Plaid публикует сведения о безопасности, управлении подключениями и обработке данных:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "безопасность Plaid: "
                },
                {
                  "type": "externalLink",
                  "text": "https://plaid.com/safety/",
                  "href": "https://plaid.com/safety/"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "портал управления подключениями Plaid: "
                },
                {
                  "type": "externalLink",
                  "text": "https://my.plaid.com",
                  "href": "https://my.plaid.com"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "политика конфиденциальности Plaid: "
                },
                {
                  "type": "externalLink",
                  "text": "https://plaid.com/legal/#end-user-privacy-policy",
                  "href": "https://plaid.com/legal/#end-user-privacy-policy"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Отключение счёта в OPHIR или Plaid прекращает или ограничивает дальнейшее получение данных в соответствии с доступными функциями, но не обязательно автоматически удаляет сведения, ранее импортированные в OPHIR. Удаление таких сведений регулируется Политикой конфиденциальности и процедурой удаления аккаунта и данных."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. Передача, хранение и доступ",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR применяет меры, соответствующие чувствительности финансовой информации, включая, где применимо:"
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
                  "text": "защиту хранимых данных средствами используемой инфраструктуры;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "разделение производственных, тестовых и локальных сред;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "управление секретами, токенами и ключами;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ограничение административного доступа;"
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
                  "text": "разграничение прав по ролям и принципу необходимого знания;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "регистрацию значимых событий безопасности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "резервное копирование и меры восстановления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "безопасное удаление или обезличивание данных по окончании срока хранения."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Доступ к персональной информации должен предоставляться только лицам и поставщикам, которым он необходим для определённой рабочей цели. Такой доступ ограничивается обязанностями конфиденциальности, договорными условиями и техническими разрешениями."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не публикует сведения о конкретных ключах, расположении резервных копий, правилах брандмауэра, конфигурациях облака или механизмах обнаружения угроз."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Безопасная разработка и эксплуатация",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Подход OPHIR к разработке и эксплуатации включает, где это уместно:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "учёт требований конфиденциальности и безопасности при проектировании функций;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверку изменений до выпуска;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "управление зависимостями, библиотеками и SDK;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ограничение секретов в исходном коде и журналах;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "исправление известных уязвимостей в зависимости от риска;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обновление приложения, серверных компонентов и инфраструктуры;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверку разрешений приложения и объёма передаваемых данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "оценку поставщиков до предоставления им доступа к чувствительной информации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "тестирование восстановления и процедур реагирования;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "периодический пересмотр мер защиты по мере изменения технологий и угроз."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Обновления приложения могут содержать важные исправления безопасности. Использование устаревшей версии приложения или неподдерживаемой операционной системы может привести к ограничению функций или повышенному риску."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Мониторинг и предотвращение злоупотреблений",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для защиты Сервиса OPHIR может обрабатывать ограниченные технические сведения и журналы безопасности, например:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "время входа и технический результат попытки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "идентификатор учётной записи, установки или сеанса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "тип устройства, версию приложения и операционной системы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "IP-адрес и приблизительный регион;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "код ошибки и сведения о сбое;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "события отзыва токена или повторной аутентификации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "признаки необычной, автоматизированной или запрещённой активности."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Такая информация используется для предотвращения злоупотреблений, расследования ошибок, защиты инфраструктуры и реагирования на инциденты. OPHIR стремится ограничивать объём журналов и не использовать их для продажи пользовательских профилей."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Поставщики и сторонние сервисы",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может использовать поставщиков для:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "подключения финансовых данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "облачного размещения и баз данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "аутентификации и управления доступом;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "резервного копирования;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "диагностики сбоев и производительности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "доставки сообщений и уведомлений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверки подписки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "поддержки пользователей и предотвращения злоупотреблений."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Перед предоставлением поставщику доступа OPHIR должен оценить необходимые данные, цели, риски, расположение обработки и доступные меры защиты. Поставщикам разрешается обрабатывать сведения только для согласованных услуг и в соответствии с применимыми договорными, конфиденциальными и безопасностными обязательствами, кроме случаев, когда они самостоятельно определяют обработку по собственным правилам."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple, Google, Plaid и финансовые учреждения защищают собственные платформы и обрабатывают отдельные данные в соответствии со своими условиями и политиками. Их меры безопасности не следует считать сертификацией или гарантией безопасности OPHIR."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Реагирование на инциденты",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR поддерживает процесс для:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "получения и проверки сообщения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сдерживания предполагаемой угрозы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сохранения необходимых записей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "определения затронутых систем и данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "оценки чувствительности информации и вероятности вреда;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "устранения причины и безопасного восстановления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "документирования инцидента и принятых мер;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "уведомления пользователей, регуляторов или других организаций, когда этого требует применимый закон;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "пересмотра мер защиты после инцидента."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если инцидент создаёт предусмотренный законом риск серьёзного вреда, OPHIR направит требуемые уведомления в применимые сроки. Уведомление пользователю может содержать описание события, затронутые категории информации, меры OPHIR и рекомендуемые действия."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ведёт записи об инцидентах в объёме и в течение срока, предусмотренных применимым законодательством."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. Что должен делать пользователь",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Пользователь также влияет на безопасность своей информации. Рекомендуется:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "защищать устройство кодом доступа и доступной биометрией;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "использовать уникальный надёжный пароль для OPHIR и электронной почты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "включать многофакторную аутентификацию там, где она доступна;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не сообщать пароль, PIN-код или одноразовый код другим лицам;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не вводить секретные банковские данные в заметки или сообщения поддержки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "устанавливать обновления приложения и операционной системы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "загружать OPHIR только из официального магазина или по официальной ссылке;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверять адрес сайта и отправителя сообщения до перехода по ссылке;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не подтверждать неожиданный запрос входа или многофакторной аутентификации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выходить из учётной записи на общем или чужом устройстве;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "регулярно просматривать подключённые счета и отключать ненужные подключения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "немедленно сообщать о потерянном устройстве или подозрительной активности."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR никогда не должен просить пользователя отправить по электронной почте полный пароль интернет-банка, полный номер платёжной карты, PIN-код или одноразовый код аутентификации."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Потерянное устройство или подозрение на компрометацию",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если устройство потеряно, учётная запись взломана или замечена необычная активность:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "защитите электронную почту, связанную с OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "смените пароль OPHIR, если такая функция доступна;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "завершите активные сеансы или обратитесь в поддержку;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отключите ненужные финансовые подключения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "при необходимости измените банковские учётные данные через финансовое учреждение;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверьте операции и уведомите финансовое учреждение о подозрительной активности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "напишите на "
                },
                {
                  "type": "emailLink",
                  "text": "support@joinophir.app",
                  "email": "support@joinophir.app"
                },
                {
                  "type": "text",
                  "text": " с адреса учётной записи."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не включайте в обращение банковский пароль, полный номер карты, PIN-код или одноразовый код. OPHIR может запросить разумное подтверждение личности перед изменением доступа или раскрытием сведений."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Сообщение об уязвимости",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы считаете, что обнаружили уязвимость OPHIR:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "напишите на "
                },
                {
                  "type": "emailLink",
                  "text": "support@joinophir.app",
                  "email": "support@joinophir.app"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "укажите краткое описание и затронутую функцию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "приложите безопасные шаги воспроизведения, версию приложения и модель устройства, если это уместно;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не включайте персональные или финансовые данные других пользователей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не используйте уязвимость для доступа к чужим данным, изменения или удаления информации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не нарушайте работу Сервиса и не применяйте социальную инженерию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предоставьте OPHIR разумное время для проверки и устранения проблемы до публичного раскрытия."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сообщение не создаёт права на вознаграждение. Если OPHIR введёт отдельную программу раскрытия уязвимостей или вознаграждений, её специальные условия будут опубликованы отдельно."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Ограничения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ни одна цифровая система, метод шифрования или поставщик не может гарантировать абсолютную безопасность. Интернет, мобильные устройства, финансовые учреждения и сторонние платформы могут подвергаться сбоям, ошибкам и атакам."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящий обзор:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "не является гарантией отсутствия инцидентов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не заменяет условия Plaid, Apple, Google или финансового учреждения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не означает, что OPHIR сертифицирован по стандарту, который прямо здесь не указан;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не содержит полного перечня внутренних средств защиты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "может обновляться при изменении функций, технологий, рисков или требований закона."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "О существенных изменениях OPHIR сообщит способом, соответствующим их характеру и требованиям закона."
              }
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Связанные документы",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для полного понимания обработки и защиты информации ознакомьтесь с:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Политикой конфиденциальности OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Условиями использования OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Политикой использования технологий приложения и файлов cookie;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "страницей удаления аккаунта и запросов о данных после её публикации."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "При подготовке подхода к защите OPHIR учитывает применимые требования и рекомендации, включая:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Закон Квебека о защите персональной информации в частном секторе - "
                },
                {
                  "type": "externalLink",
                  "text": "legisquebec.gouv.qc.ca",
                  "href": "https://www.legisquebec.gouv.qc.ca"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "рекомендации Управления комиссара по вопросам конфиденциальности Канады о мерах защиты и инцидентах - "
                },
                {
                  "type": "externalLink",
                  "text": "priv.gc.ca",
                  "href": "https://www.priv.gc.ca"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "рекомендации Канадского центра кибербезопасности по защите учётных записей и многофакторной аутентификации - "
                },
                {
                  "type": "externalLink",
                  "text": "cyber.gc.ca",
                  "href": "https://www.cyber.gc.ca"
                },
                {
                  "type": "text",
                  "text": "."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Контакты",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Безопасность и подозрительная активность:"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "strong",
                "text": "Конфиденциальность и запросы о данных:"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "strong",
                "text": "Общие и юридические вопросы:"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "strong",
                "text": "Почтовый адрес:"
              },
              {
                "type": "text",
                "text": " Soavinjato Andrianarisoa, 1203 Rue Normont, Laval, Québec H7G 3H3, Canada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "При обращении не отправляйте пароль интернет-банка, полный номер платёжной карты, PIN-код, одноразовый код аутентификации, секретный ключ или другие конфиденциальные учётные данные."
              }
            ]
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  SecurityDocument
>;
