import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type AppTechnologiesInlineContent =
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

type AppTechnologiesBlock =
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "paragraph";
      content: readonly AppTechnologiesInlineContent[];
    }
  | {
      type: "callout";
      content: readonly AppTechnologiesInlineContent[];
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
      items: readonly (readonly AppTechnologiesInlineContent[])[];
    }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly (readonly AppTechnologiesInlineContent[])[])[];
    }
  | {
      type: "address";
      content: readonly AppTechnologiesInlineContent[];
    };

type AppTechnologiesSection = {
  key: string;
  title: string;
  includeInNavigation?: false;
  blocks: readonly AppTechnologiesBlock[];
};

type AppTechnologiesDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  intro: readonly AppTechnologiesBlock[];
  sections: readonly AppTechnologiesSection[];
};

export const appTechnologiesContent = {
  "en": {
    "title": "Application Technologies and Cookies Policy",
    "seoTitle": "Application Technologies and Cookies Policy | OPHIR",
    "description": "This Policy explains the use of technical tools within the OPHIR mobile application and, where applicable, on OPHIR websites. It supplements the OPHIR Privacy Policy and Terms of Service.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Canadian English Version"
          }
        ]
      },
      {
        "type": "metadata",
        "items": [
          {
            "label": "Effective date:",
            "value": "July 28, 2026",
            "dateTime": "2026-07-28"
          },
          {
            "label": "Last updated:",
            "value": "July 29, 2026",
            "dateTime": "2026-07-29"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "This Policy explains the use of technical tools within the OPHIR mobile application and, where applicable, on OPHIR websites. It supplements "
          },
          {
            "type": "internalLink",
            "text": "the OPHIR Privacy Policy",
            "page": "privacyPolicy"
          },
          {
            "type": "text",
            "text": " and "
          },
          {
            "type": "internalLink",
            "text": "Terms of Service",
            "page": "termsOfService"
          },
          {
            "type": "text",
            "text": "."
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
                "text": "General inquiries: "
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
                "text": "The OPHIR mobile application does not use browser cookies in the same manner as a conventional website. To operate securely, the application may use authentication tokens, secure local storage, installation identifiers, operating-system permissions, security logs, and diagnostic tools."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "As of the effective date of this Policy:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "OPHIR does not use advertising SDKs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR does not track users across applications and websites operated by other companies;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR does not use connected financial-account data for advertising;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR does not sell personal information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid, Apple, Google, and financial institutions may use their own technologies within their interfaces;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "optional analytics or tracking technologies will not be enabled without the notice and consent required by applicable law."
                }
              ]
            ]
          },
          {
            "type": "table",
            "headers": [
              "Environment",
              "Main technologies",
              "Purpose"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Mobile application"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Tokens, secure storage, installation identifier, system permissions, and diagnostics"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Sign-in, security, preferences, stability, and requested features"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "OPHIR website"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Strictly necessary cookies, session tokens, and local storage"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Website operation, security, and remembering user choices"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Plaid and financial institutions"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Technologies controlled by the applicable provider"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Authentication, consent, and secure account connection"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Apple and Google"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "System and platform technologies"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Application distribution, subscriptions, notifications, and security"
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-1",
        "title": "1. Scope",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This Policy applies to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the OPHIR mobile application;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR websites and web pages;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "account registration, sign-in, and account-management interfaces;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "financial-account connections;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "notifications, support, and related digital functionality,"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "collectively, the “Service.”"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This Policy governs technologies used by OPHIR or by providers acting on its behalf. It does not govern independent processing by Plaid, Apple, Google, financial institutions, or other third-party services."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Mobile Application Technologies",
        "blocks": [
          {
            "type": "subheading",
            "text": "2.1 Authentication and Session Tokens"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "After you sign in, the application may receive a secure token that allows it to authenticate your session without transmitting your password with every request."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A token may be terminated:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "when you sign out;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "when it expires;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "when security information changes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "when suspicious activity is detected;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "when the account is deleted;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "when OPHIR revokes the token."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Tokens are not intended for advertising tracking."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.2 Secure Local Storage"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The application may store limited information on the device to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "preserve language and interface preferences;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "support secure authentication;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "remember selected functionality;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "maintain temporary application state;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "prevent the loss of unsaved actions."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sensitive information should be stored using available secure operating-system mechanisms. OPHIR does not store your online-banking password in the application's local storage."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.3 Installation Identifier"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may create an internal identifier for a particular installation of the application in order to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "associate a secure session with the installation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "deliver service notifications;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "diagnose errors;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "detect misuse;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "prevent duplicate technical events."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "An installation identifier is not a financial-account number and is not used for cross-service advertising."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.4 System Permissions"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The application may request an operating-system permission only when it is required for a selected feature."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Depending upon the functionality, permissions may include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "notifications;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "biometric unlock;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "network access;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "other permissions explained at the time of the request."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You may change permissions through iOS or Android settings. Withdrawing a permission may disable the dependent feature, but should not affect unrelated functionality."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.5 Logs and Diagnostics"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may collect limited technical information, including:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "application and operating-system version;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "device type and model;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the time and nature of a crash;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "network status;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "technical error codes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the sequence of technical events leading to an error;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "information about suspicious activity."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This information is used for security, error correction, and service stability. OPHIR seeks to avoid including the contents of financial transactions, notes, or user messages in diagnostic logs."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. SDKs and Embedded Components",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "An SDK is a software component that helps implement a particular application function. OPHIR may use SDKs for:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Plaid connectivity;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "authentication;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "notifications;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "subscription validation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "crash diagnostics;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "security."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Before implementing an SDK, OPHIR should assess:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "what information it collects;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the purposes for collection;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "whether the provider acts only for OPHIR or also for its own purposes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "where the information is processed;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "whether collection can be limited;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "whether user consent is required;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "whether the SDK is consistent with App Store and Google Play disclosures."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "As of the effective date of this Policy, OPHIR does not use an SDK for cross-service behavioural advertising."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Website and Cookies",
        "blocks": [
          {
            "type": "subheading",
            "text": "4.1 Application to the Website"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Browser cookies apply primarily to OPHIR websites and web pages, rather than to the core operation of the mobile application."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "An OPHIR website may use strictly necessary cookies or local storage to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "maintain a secure session;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "protect a form or request;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "preserve a language selection;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "remember a privacy choice;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "prevent misuse;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ensure that a page functions properly."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "4.2 Optional Cookies"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If OPHIR introduces optional analytics, advertising, or profiling on its own website, the relevant technologies will not be activated until the required information has been provided and consent has been obtained, unless applicable law permits otherwise."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Users should be able to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "accept optional categories;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "reject them;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "change their choice later;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "continue using core functionality after rejecting optional technologies."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "4.3 Browser Controls"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A browser may allow you to view, block, and delete cookies, clear local storage, or restrict third-party tracking."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Blocking strictly necessary technologies may prevent a secure web page or sign-in process from functioning."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Plaid and Financial Account Connections",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "When you connect an account, the application may open Plaid Link or a secure interface provided by your financial institution."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid and the financial institution may use their own tokens, cookies, local storage, logs, and security mechanisms to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "authenticate you;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "display institutions and accounts;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "record consent;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "secure the connection;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "prevent fraud;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "support reauthentication;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "resolve connection errors."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR does not control every technology used by Plaid or a financial institution. Their independent processing is governed by their own policies."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid's End User "
              },
              {
                "type": "internalLink",
                "text": "Privacy Policy",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": ":\n"
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
                "text": "Plaid Portal, where available:\n"
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
                "text": "Unless OPHIR expressly states otherwise, the application does not receive or store your online-banking password."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. Apple, Google, and System Services",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple and Google may process technical information in connection with:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "application distribution;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "subscriptions and receipts;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "system notifications;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "platform security;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "diagnostics;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "device settings."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You may manage certain settings through iOS or Android settings, your Apple ID, your Google account, and the applicable application-store interface."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR does not request permission under Apple's App Tracking Transparency framework if the application does not track user activity across applications and websites operated by other companies for advertising or disclosure to a data broker."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If such tracking is introduced in the future, OPHIR must first:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "update this Policy and the "
                },
                {
                  "type": "internalLink",
                  "text": "Privacy Policy",
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
                  "text": "clearly explain the purpose;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "obtain Apple's system permission where required;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "provide the applicable Android controls;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "update App Store and Google Play disclosures."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Analytics",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may process technical information necessary to protect the Service and maintain its stability."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Optional product analytics that allow OPHIR to understand the use of screens and features should be:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "separated from strictly necessary diagnostics;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "limited to defined purposes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "configured to minimize collection;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "disclosed to users;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "activated on the basis of the appropriate choice or consent, where required."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Analytics information is not used to sell a financial profile or for third-party behavioural advertising."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Advertising and Tracking",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "As of the effective date of this Policy:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "OPHIR does not display behavioural advertising;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR does not use advertising identifiers to create a cross-service profile;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR does not disclose connected financial-account data to advertising networks;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR does not sell or rent personal information."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ordinary service communications about subscriptions, security, new features, or OPHIR operations are not third-party behavioural advertising."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Consent and Settings",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Strictly necessary technologies may be used without separate consent where they are required for a requested feature, security, or legal compliance."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For an optional technology, OPHIR provides information about:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the information collected;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the purpose;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the provider or categories of recipients;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the consequences of consenting or declining;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the method for withdrawing the choice."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Where required by applicable law, consent must be clear, free, informed, specific, temporary, granular, understandable, and requested separately from other written information."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You may withdraw consent through an available OPHIR interface or by contacting "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Withdrawal does not affect the lawfulness of prior processing or override mandatory retention requirements."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Retention",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Technical information is retained only for as long as reasonably necessary for the relevant purpose."
              }
            ]
          },
          {
            "type": "table",
            "headers": [
              "Category",
              "General retention principle"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Session token"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Until sign-out, expiration, revocation, or replacement"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Application preferences"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Until changed, reset, or the application or account is deleted"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Installation identifier"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "While the installation remains active or the identifier is needed for security and diagnostics"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Security log"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "In accordance with the retention schedule and investigation requirements"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Diagnostic information"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "For a limited period necessary for analysis and correction"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Consent choice"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "As long as necessary to apply and demonstrate the choice"
                  }
                ]
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Deleting the application may remove local information, but does not necessarily delete server-side information or information independently controlled by a third-party provider."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. Security",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Depending upon the technology, OPHIR may use:"
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
                  "text": "secure operating-system storage;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "limited token lifetimes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "access controls;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "secret-management practices;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request-integrity verification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "monitoring of suspicious activity;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vulnerability management;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "incident-response procedures."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "No system can guarantee absolute security. You are responsible for protecting your device, passcode, account, and email."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. User Rights",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If technical information directly or indirectly identifies a user, it may constitute personal information."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Depending upon applicable law, you may:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "request access;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request correction;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "withdraw consent;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request deletion in circumstances provided by law;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "obtain information about purposes, categories, and recipients;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "submit a complaint."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Requests may be sent to "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". To protect the account, OPHIR may request reasonable identity verification."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Changes to this Policy",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may update this Policy when the application, website, providers, technologies, or law changes."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The updated version will identify a new date. Before activating a materially new optional technology, OPHIR will provide notice and obtain new consent where required."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Related Documents",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This Policy supplements:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "internalLink",
                  "text": "the OPHIR Privacy Policy",
                  "page": "privacyPolicy"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "the OPHIR Terms of Service",
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
                  "text": "contextual notices within the application;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "system permission interfaces;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "third-party policies governing their independent processing."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Language",
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
                "text": "Nothing in any language version limits rights that cannot be waived. If different versions are inconsistent, mandatory law and the version that must legally prevail will govern."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Contact Information",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For questions about application technologies, SDKs, cookies, or personal information:"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "text",
                "text": "Soavinjato Andrianarisoa\nOPHIR Privacy Officer\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada\n"
              },
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
                "text": "When contacting us, do not send online-banking passwords, complete payment-card numbers, one-time authentication codes, or other secret credentials."
              }
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Politique relative aux technologies de l'application et aux cookies",
    "seoTitle": "Politique relative aux technologies de l'application et aux cookies | OPHIR",
    "description": "La présente Politique explique l'utilisation d'outils techniques dans l'application mobile OPHIR et, s'il y a lieu, sur les sites Web d'OPHIR. Elle complète la Politique de confidentialité et les Conditions d'utilisation d'OPHIR.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Version canadienne française"
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
            "value": "29 juillet 2026",
            "dateTime": "2026-07-29"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "La présente Politique explique l'utilisation d'outils techniques dans l'application mobile OPHIR et, s'il y a lieu, sur les sites Web d'OPHIR. Elle complète "
          },
          {
            "type": "internalLink",
            "text": "la Politique de confidentialité",
            "page": "privacyPolicy"
          },
          {
            "type": "text",
            "text": " et "
          },
          {
            "type": "internalLink",
            "text": "les Conditions d'utilisation",
            "page": "termsOfService"
          },
          {
            "type": "text",
            "text": " d'OPHIR."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "exploitant-du-service",
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
                "text": "Demandes générales : "
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
        "key": "apercu-en-langage-clair",
        "title": "Aperçu en langage clair",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L'application mobile OPHIR n'utilise pas les cookies de navigateur de la même façon qu'un site Web traditionnel. Pour fonctionner de manière sécuritaire, l'application peut utiliser des jetons d'authentification, un stockage local sécurisé, des identifiants d'installation, des autorisations du système d'exploitation, des journaux de sécurité et des outils de diagnostic."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "À la date d'entrée en vigueur de la présente Politique :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "OPHIR n'utilise aucun SDK publicitaire;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR ne suit pas les utilisateurs entre les applications et les sites Web exploités par d'autres entreprises;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR n'utilise pas les données de comptes financiers connectés à des fins publicitaires;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR ne vend pas de renseignements personnels;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid, Apple, Google et les institutions financières peuvent utiliser leurs propres technologies dans leurs interfaces;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aucune technologie facultative d'analyse ou de suivi n'est activée sans l'avis et le consentement exigés par la loi applicable."
                }
              ]
            ]
          },
          {
            "type": "table",
            "headers": [
              "Environnement",
              "Principales technologies",
              "Finalité"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Application mobile"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Jetons, stockage sécurisé, identifiant d'installation, autorisations système et diagnostics"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Connexion, sécurité, préférences, stabilité et fonctions demandées"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Site Web d'OPHIR"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Cookies strictement nécessaires, jetons de session et stockage local"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Fonctionnement du site, sécurité et mémorisation des choix de l'utilisateur"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Plaid et institutions financières"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Technologies contrôlées par le fournisseur concerné"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Authentification, consentement et connexion sécurisée du compte"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Apple et Google"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Technologies système et de plateforme"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Distribution de l'application, abonnements, notifications et sécurité"
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-1",
        "title": "1. Portée",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente Politique s'applique :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "à l'application mobile OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux sites et pages Web d'OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux interfaces d'inscription, de connexion et de gestion du compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux connexions de comptes financiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux notifications, à l'assistance et aux fonctions numériques connexes,"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "collectivement, le « Service »."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente Politique régit les technologies utilisées par OPHIR ou par les fournisseurs qui agissent pour son compte. Elle ne régit pas le traitement indépendant effectué par Plaid, Apple, Google, les institutions financières ou d'autres services tiers."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Technologies de l'application mobile",
        "blocks": [
          {
            "type": "subheading",
            "text": "2.1 Jetons d'authentification et de session"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Après votre connexion, l'application peut recevoir un jeton sécurisé lui permettant d'authentifier votre session sans transmettre votre mot de passe à chaque demande."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Un jeton peut prendre fin :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "lorsque vous vous déconnectez;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "lorsqu'il expire;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "lorsque les renseignements de sécurité sont modifiés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "lorsqu'une activité suspecte est détectée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "lorsque le compte est supprimé;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "lorsqu'OPHIR révoque le jeton."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les jetons ne sont pas destinés au suivi publicitaire."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.2 Stockage local sécurisé"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L'application peut conserver des renseignements limités sur l'appareil afin :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "de conserver les préférences linguistiques et d'interface;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de soutenir l'authentification sécurisée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de mémoriser les fonctions sélectionnées;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de maintenir temporairement l'état de l'application;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d'éviter la perte d'actions non enregistrées."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements sensibles doivent être conservés au moyen des mécanismes sécurisés disponibles dans le système d'exploitation. OPHIR ne conserve pas votre mot de passe de services bancaires en ligne dans le stockage local de l'application."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.3 Identifiant d'installation"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut créer un identifiant interne propre à une installation de l'application afin :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "d'associer une session sécurisée à cette installation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de transmettre des notifications de service;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de diagnostiquer des erreurs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de détecter les utilisations abusives;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d'éviter les événements techniques en double."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Un identifiant d'installation n'est pas un numéro de compte financier et n'est pas utilisé à des fins de publicité entre différents services."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.4 Autorisations système"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L'application peut demander une autorisation du système d'exploitation uniquement lorsqu'elle est nécessaire à une fonction sélectionnée."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Selon les fonctions, les autorisations peuvent comprendre :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "les notifications;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le déverrouillage biométrique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'accès au réseau;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d'autres autorisations expliquées au moment de la demande."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous pouvez modifier les autorisations dans les réglages d'iOS ou d'Android. Le retrait d'une autorisation peut désactiver la fonction qui en dépend, mais ne devrait pas toucher les fonctions sans lien avec celle-ci."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.5 Journaux et diagnostics"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut recueillir des renseignements techniques limités, notamment :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "la version de l'application et du système d'exploitation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le type et le modèle de l'appareil;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'heure et la nature d'une panne;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'état du réseau;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les codes d'erreur techniques;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la séquence d'événements techniques ayant mené à une erreur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des renseignements sur les activités suspectes."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ces renseignements sont utilisés pour la sécurité, la correction des erreurs et la stabilité du Service. OPHIR cherche à éviter d'inclure le contenu des opérations financières, des notes ou des messages de l'utilisateur dans les journaux de diagnostic."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. SDK et composants intégrés",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Un SDK est un composant logiciel qui aide à mettre en œuvre une fonction particulière de l'application. OPHIR peut utiliser des SDK pour :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "la connexion à Plaid;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l'authentification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les notifications;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la validation des abonnements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le diagnostic des pannes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la sécurité."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Avant d'intégrer un SDK, OPHIR doit évaluer :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "les renseignements qu'il recueille;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les fins de la collecte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "si le fournisseur agit uniquement pour OPHIR ou également à ses propres fins;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le lieu où les renseignements sont traités;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la possibilité de limiter la collecte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la nécessité d'obtenir le consentement de l'utilisateur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la conformité du SDK avec les déclarations dans l'App Store et Google Play."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "À la date d'entrée en vigueur de la présente Politique, OPHIR n'utilise aucun SDK à des fins de publicité comportementale entre différents services."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Site Web et cookies",
        "blocks": [
          {
            "type": "subheading",
            "text": "4.1 Application au site Web"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les cookies de navigateur concernent principalement les sites et pages Web d'OPHIR plutôt que le fonctionnement principal de l'application mobile."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Un site Web d'OPHIR peut utiliser des cookies strictement nécessaires ou un stockage local afin :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "de maintenir une session sécurisée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de protéger un formulaire ou une demande;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de conserver le choix de langue;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de mémoriser un choix relatif à la confidentialité;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de prévenir les utilisations abusives;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d'assurer le bon fonctionnement d'une page."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "4.2 Cookies facultatifs"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si OPHIR introduit sur son propre site Web des fonctions facultatives d'analyse, de publicité ou de profilage, les technologies concernées ne seront pas activées avant que les renseignements requis aient été fournis et que le consentement ait été obtenu, sauf disposition contraire permise par la loi applicable."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les utilisateurs devraient pouvoir :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "accepter les catégories facultatives;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les refuser;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "modifier leur choix ultérieurement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "continuer d'utiliser les fonctions essentielles après avoir refusé les technologies facultatives."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "4.3 Contrôles du navigateur"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Votre navigateur peut vous permettre d'afficher, de bloquer et de supprimer les cookies, d'effacer le stockage local ou de limiter le suivi effectué par des tiers."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le blocage de technologies strictement nécessaires peut empêcher le fonctionnement d'une page Web sécurisée ou d'un processus de connexion."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Plaid et connexion de comptes financiers",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsque vous connectez un compte, l'application peut ouvrir Plaid Link ou une interface sécurisée fournie par votre institution financière."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid et l'institution financière peuvent utiliser leurs propres jetons, cookies, stockages locaux, journaux et mécanismes de sécurité afin :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "de vous authentifier;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d'afficher les institutions et les comptes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de consigner le consentement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de sécuriser la connexion;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de prévenir la fraude;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de permettre une nouvelle authentification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de résoudre les erreurs de connexion."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne contrôle pas toutes les technologies utilisées par Plaid ou par une institution financière. Leur traitement indépendant est régi par leurs propres politiques."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "internalLink",
                "text": "Politique de confidentialité",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": " de Plaid destinée aux utilisateurs finaux :\n"
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
                "text": "Portail Plaid, lorsqu'il est offert :\n"
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
                "text": "Sauf indication contraire expresse d'OPHIR, l'application ne reçoit ni ne conserve votre mot de passe de services bancaires en ligne."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. Apple, Google et services système",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple et Google peuvent traiter des renseignements techniques relativement :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "à la distribution de l'application;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux abonnements et aux reçus;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux notifications système;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "à la sécurité de la plateforme;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux diagnostics;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux réglages de l'appareil."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous pouvez gérer certains paramètres dans les réglages d'iOS ou d'Android, dans votre identifiant Apple, votre compte Google et l'interface du magasin d'applications concerné."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne demande pas l'autorisation prévue par le cadre App Tracking Transparency d'Apple lorsque l'application ne suit pas l'activité de l'utilisateur entre les applications et les sites Web exploités par d'autres entreprises à des fins de publicité ou de communication à un courtier en données."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si un tel suivi est introduit à l'avenir, OPHIR doit d'abord :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "mettre à jour la présente Politique et "
                },
                {
                  "type": "internalLink",
                  "text": "la Politique de confidentialité",
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
                  "text": "expliquer clairement la finalité;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "obtenir l'autorisation système d'Apple lorsqu'elle est requise;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "fournir les contrôles Android applicables;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "mettre à jour les déclarations dans l'App Store et Google Play."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Analyse",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut traiter les renseignements techniques nécessaires à la protection et à la stabilité du Service."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les fonctions facultatives d'analyse de produit permettant à OPHIR de comprendre l'utilisation des écrans et des fonctions devraient être :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "séparées des diagnostics strictement nécessaires;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "limitées à des fins définies;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "configurées de façon à réduire au minimum la collecte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "divulguées aux utilisateurs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "activées en fonction du choix ou du consentement approprié, lorsque cela est requis."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements d'analyse ne sont pas utilisés pour vendre un profil financier ni pour la publicité comportementale de tiers."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Publicité et suivi",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "À la date d'entrée en vigueur de la présente Politique :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "OPHIR n'affiche aucune publicité comportementale;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR n'utilise pas d'identifiant publicitaire pour créer un profil entre différents services;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR ne communique pas les données de comptes financiers connectés à des réseaux publicitaires;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR ne vend ni ne loue les renseignements personnels."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les communications ordinaires relatives aux abonnements, à la sécurité, aux nouvelles fonctions ou au fonctionnement d'OPHIR ne constituent pas de la publicité comportementale de tiers."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Consentement et paramètres",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les technologies strictement nécessaires peuvent être utilisées sans consentement distinct lorsqu'elles sont requises pour une fonction demandée, la sécurité ou le respect de la loi."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour une technologie facultative, OPHIR fournit des renseignements sur :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "les renseignements recueillis;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la finalité;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le fournisseur ou les catégories de destinataires;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les conséquences de l'acceptation ou du refus;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la méthode permettant de retirer le choix."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsque la loi applicable l'exige, le consentement doit être manifeste, libre, éclairé, spécifique, temporaire, granulaire, compréhensible et demandé distinctement de toute autre information écrite."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous pouvez retirer votre consentement au moyen d'une interface OPHIR disponible ou en écrivant à "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Le retrait n'affecte pas la légalité du traitement antérieur et ne remplace pas les exigences obligatoires de conservation."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Conservation",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements techniques sont conservés uniquement pendant la durée raisonnablement nécessaire à la fin concernée."
              }
            ]
          },
          {
            "type": "table",
            "headers": [
              "Catégorie",
              "Principe général de conservation"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Jeton de session"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Jusqu'à la déconnexion, l'expiration, la révocation ou le remplacement"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Préférences de l'application"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Jusqu'à leur modification ou réinitialisation, ou jusqu'à la suppression de l'application ou du compte"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Identifiant d'installation"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Tant que l'installation demeure active ou que l'identifiant est nécessaire à la sécurité et aux diagnostics"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Journal de sécurité"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Conformément au calendrier de conservation et aux besoins d'une enquête"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Renseignements de diagnostic"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Pendant une période limitée nécessaire à l'analyse et à la correction"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Choix de consentement"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Aussi longtemps que nécessaire pour appliquer et démontrer le choix"
                  }
                ]
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La suppression de l'application peut effacer les renseignements locaux, mais ne supprime pas nécessairement les renseignements côté serveur ni ceux qui sont contrôlés de manière indépendante par un fournisseur tiers."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. Sécurité",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Selon la technologie, OPHIR peut utiliser :"
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
                  "text": "le stockage sécurisé du système d'exploitation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des durées de validité limitées pour les jetons;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des contrôles d'accès;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des pratiques de gestion des secrets;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la vérification de l'intégrité des demandes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la surveillance des activités suspectes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la gestion des vulnérabilités;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des procédures de gestion des incidents."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Aucun système ne peut garantir une sécurité absolue. Vous êtes responsable de la protection de votre appareil, de votre code d'accès, de votre compte et de votre courriel."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Droits des utilisateurs",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lorsque des renseignements techniques permettent d'identifier directement ou indirectement un utilisateur, ils peuvent constituer des renseignements personnels."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Selon la loi applicable, vous pouvez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "demander l'accès;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander la rectification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "retirer votre consentement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander la suppression dans les cas prévus par la loi;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "obtenir des renseignements sur les fins, les catégories et les destinataires;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "déposer une plainte."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les demandes peuvent être envoyées à "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Afin de protéger le compte, OPHIR peut demander une vérification raisonnable de l'identité."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Modifications de la présente Politique",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut modifier la présente Politique lorsque l'application, le site Web, les fournisseurs, les technologies ou la loi changent."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La version modifiée indiquera une nouvelle date. Avant d'activer une technologie facultative sensiblement nouvelle, OPHIR fournira un avis et obtiendra un nouveau consentement lorsque cela est requis."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Documents connexes",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente Politique complète :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "internalLink",
                  "text": "la Politique de confidentialité",
                  "page": "privacyPolicy"
                },
                {
                  "type": "text",
                  "text": " d'OPHIR;"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "les Conditions d'utilisation",
                  "page": "termsOfService"
                },
                {
                  "type": "text",
                  "text": " d'OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les avis contextuels dans l'application;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les interfaces d'autorisations système;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les politiques de tiers qui régissent leur traitement indépendant."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Langue",
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
                "text": "Aucune version linguistique ne limite les droits auxquels il est interdit de renoncer. En cas de divergence entre les versions, les règles impératives et la version qui doit légalement prévaloir s'appliquent."
              }
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
                "type": "text",
                "text": "Pour toute question sur les technologies de l'application, les SDK, les cookies ou les renseignements personnels :"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "text",
                "text": "Soavinjato Andrianarisoa\nResponsable de la protection des renseignements personnels d'OPHIR\n1203 Rue Normont\nLaval (Québec) H7G 3H3\nCanada\n"
              },
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
    "title": "Политика использования технологий приложения и файлов cookie",
    "seoTitle": "Политика использования технологий приложения и файлов cookie | OPHIR",
    "description": "Настоящая Политика объясняет использование технических средств в мобильном приложении OPHIR и, где применимо, на веб-сайтах OPHIR. Она дополняет Политику конфиденциальности и Условия использования OPHIR.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Канадская версия на русском языке"
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
            "label": "Дата последнего обновления:",
            "value": "29 июля 2026 года",
            "dateTime": "2026-07-29"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Настоящая Политика объясняет использование технических средств в мобильном приложении OPHIR и, где применимо, на веб-сайтах OPHIR. Она дополняет "
          },
          {
            "type": "internalLink",
            "text": "Политику конфиденциальности",
            "page": "privacyPolicy"
          },
          {
            "type": "text",
            "text": " и "
          },
          {
            "type": "internalLink",
            "text": "Условия использования OPHIR",
            "page": "termsOfService"
          },
          {
            "type": "text",
            "text": "."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section",
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
                "text": "Общие вопросы: "
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
        "key": "section",
        "title": "Краткий обзор",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мобильное приложение OPHIR не использует браузерные файлы cookie так же, как обычный веб-сайт. Для безопасной работы приложение может использовать токены авторизации, защищённое локальное хранилище, идентификаторы установки, системные разрешения, журналы безопасности и средства диагностики."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "На дату вступления настоящей Политики в силу:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "OPHIR не использует рекламные SDK;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR не отслеживает пользователей между приложениями и сайтами других компаний;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR не использует данные подключённых финансовых счетов для рекламы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR не продаёт персональную информацию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Plaid, Apple, Google и финансовые учреждения могут использовать собственные технологии в своих интерфейсах;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "необязательные технологии аналитики или отслеживания не должны включаться без требуемого уведомления и согласия."
                }
              ]
            ]
          },
          {
            "type": "table",
            "headers": [
              "Среда",
              "Основные технологии",
              "Назначение"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Мобильное приложение"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Токены, защищённое хранилище, идентификатор установки, системные разрешения, диагностика"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Вход, безопасность, настройки, стабильность и запрошенные функции"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Веб-сайт OPHIR"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Строго необходимые cookie, токены сеанса и локальное хранилище"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Работа сайта, безопасность и сохранение выбора"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Plaid и финансовые учреждения"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Технологии, управляемые соответствующим поставщиком"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Аутентификация, согласие и защищённое подключение счёта"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Apple и Google"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Системные и платформенные технологии"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Распространение приложения, подписки, уведомления и безопасность"
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-1",
        "title": "1. Сфера действия",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящая Политика применяется к:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "мобильному приложению OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "веб-сайтам и веб-страницам OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "интерфейсам регистрации, входа и управления учётной записью;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подключению финансовых счетов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "уведомлениям, поддержке и связанным цифровым функциям,"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "совместно именуемым «Сервис»."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Политика регулирует технологии, используемые OPHIR или поставщиками, действующими от его имени. Она не регулирует независимую обработку Plaid, Apple, Google, финансовых учреждений и иных сторонних сервисов."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Технологии мобильного приложения",
        "blocks": [
          {
            "type": "subheading",
            "text": "2.1 Токены авторизации и сеанса"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "После входа приложение может получать защищённый токен, позволяющий подтверждать сеанс без повторной передачи пароля при каждом запросе."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Токен может быть прекращён при:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "выходе из учётной записи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "истечении срока;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "смене данных безопасности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обнаружении подозрительной активности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "удалении учётной записи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отзыве со стороны OPHIR."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Токены не предназначены для рекламного отслеживания."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.2 Защищённое локальное хранилище"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Приложение может хранить на устройстве ограниченные сведения, необходимые для:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "сохранения языка и интерфейсных настроек;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "безопасной авторизации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запоминания выбранных функций;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "временного состояния приложения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предотвращения потери несохранённых действий."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Чувствительная информация должна храниться с использованием доступных защищённых механизмов операционной системы. OPHIR не хранит пароль интернет-банка в локальном хранилище приложения."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.3 Идентификатор установки"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может создать внутренний идентификатор конкретной установки приложения для:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "связывания защищённого сеанса с установкой;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "доставки сервисных уведомлений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "диагностики ошибок;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обнаружения злоупотреблений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предотвращения дублирования технических событий."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Идентификатор установки не является номером финансового счёта и не используется для межсервисной рекламы."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.4 Системные разрешения"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Приложение может запрашивать разрешение операционной системы только тогда, когда оно необходимо для выбранной функции."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В зависимости от функций это может включать:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "уведомления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "биометрическую разблокировку;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "доступ к сети;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "иные разрешения, прямо объяснённые в момент запроса."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Пользователь может изменить разрешения в настройках iOS или Android. Отзыв разрешения может отключить зависимую функцию, но не должен влиять на несвязанные возможности."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.5 Журналы и диагностика"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может собирать ограниченные технические сведения:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "версию приложения и операционной системы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "модель и тип устройства;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "время и характер сбоя;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сетевое состояние;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "код технической ошибки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "последовательность технических событий, приведших к ошибке;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения о подозрительной активности."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Такие сведения используются для безопасности, исправления ошибок и стабильности. OPHIR стремится не включать в диагностические журналы содержимое финансовых операций, заметок и сообщений пользователя."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. SDK и встроенные компоненты",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "SDK - программный компонент, помогающий реализовать отдельную функцию приложения. OPHIR может использовать SDK для:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "подключения к Plaid;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "аутентификации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "уведомлений;"
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
                  "text": "диагностики сбоев;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "безопасности."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Перед внедрением SDK OPHIR должен оценить:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "какие сведения он собирает;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "для каких целей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "действует ли поставщик только от имени OPHIR или для собственных целей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "где обрабатываются данные;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "можно ли ограничить сбор;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "требуется ли согласие пользователя;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "соответствует ли SDK раскрытиям App Store и Google Play."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "На дату вступления настоящей Политики в силу OPHIR не использует SDK для межсервисной поведенческой рекламы."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Веб-сайт и файлы cookie",
        "blocks": [
          {
            "type": "subheading",
            "text": "4.1 Применение к веб-сайту"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Браузерные файлы cookie относятся прежде всего к веб-сайтам и веб-страницам OPHIR, а не к основной работе мобильного приложения."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Веб-сайт может использовать строго необходимые cookie или локальное хранилище для:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "поддержания защищённого сеанса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "защиты формы или запроса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сохранения языка;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запоминания выбора конфиденциальности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предотвращения злоупотреблений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обеспечения корректной работы страницы."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "4.2 Необязательные cookie"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если OPHIR внедрит необязательную аналитику, рекламу или профилирование на собственном сайте, соответствующие технологии не должны активироваться до предоставления требуемой информации и получения согласия, кроме случаев, когда закон разрешает иное."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Пользователь должен иметь возможность:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "принять необязательные категории;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отклонить их;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "изменить выбор позднее;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "продолжить использование основных функций после отказа."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "4.3 Управление в браузере"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Браузер может позволять просматривать, блокировать и удалять cookie, очищать локальное хранилище или ограничивать стороннее отслеживание."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Блокировка строго необходимых технологий может нарушить работу защищённой веб-страницы или входа."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Plaid и подключение финансовых счетов",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "При подключении счёта приложение может открыть Plaid Link или защищённый интерфейс финансового учреждения."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid и финансовое учреждение могут использовать собственные токены, cookie, локальное хранилище, журналы и механизмы безопасности для:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "аутентификации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отображения учреждений и счетов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "фиксации согласия;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "защиты соединения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предотвращения мошенничества;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "повторной аутентификации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "устранения ошибок подключения."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не управляет всеми технологиями, используемыми Plaid или финансовым учреждением. Их независимая обработка регулируется собственными политиками."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "internalLink",
                "text": "Политика конфиденциальности",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": " Plaid:\n"
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
                "text": "Портал Plaid, если доступен:\n"
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
                "text": "Если OPHIR прямо не сообщает иное, приложение не получает и не хранит пароль интернет-банка."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. Apple, Google и системные сервисы",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple и Google могут обрабатывать технические сведения в связи с:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "распространением приложения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подписками и квитанциями;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "системными уведомлениями;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "безопасностью платформы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "диагностикой;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "настройками устройства."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Пользователь может управлять отдельными параметрами через настройки iOS или Android, Apple ID, аккаунт Google и интерфейс магазина приложений."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не запрашивает разрешение Apple App Tracking Transparency, если приложение не отслеживает активность пользователя в приложениях и на сайтах других компаний для рекламы или передачи брокеру данных."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если такое отслеживание будет внедрено в будущем, OPHIR должен сначала:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "обновить настоящую Политику и "
                },
                {
                  "type": "internalLink",
                  "text": "Политику конфиденциальности",
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
                  "text": "ясно объяснить цель;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "получить системное разрешение Apple, где оно требуется;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предоставить соответствующие настройки Android;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обновить раскрытия App Store и Google Play."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Аналитика",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может обрабатывать необходимую техническую информацию для обеспечения безопасности и стабильности Сервиса."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Необязательная продуктовая аналитика, позволяющая изучать использование экранов и функций, должна быть:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "отделена от строго необходимой диагностики;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ограничена определёнными целями;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "настроена на минимальный сбор;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "раскрыта пользователю;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "активирована на основании соответствующего выбора или согласия, когда это требуется."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Аналитические данные не используются для продажи финансового профиля или сторонней поведенческой рекламы."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Реклама и отслеживание",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "На дату вступления настоящей Политики в силу:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "OPHIR не показывает поведенческую рекламу;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR не использует рекламные идентификаторы для построения межсервисного профиля;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR не передаёт данные подключённых финансовых счетов рекламным сетям;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR не продаёт и не сдаёт в аренду персональную информацию."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Обычные сервисные сообщения о подписке, безопасности, новых функциях или работе OPHIR не считаются сторонней поведенческой рекламой."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Согласие и настройки",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Строго необходимые технологии могут применяться без отдельного согласия, если они необходимы для запрошенной функции, безопасности или соблюдения закона."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для необязательной технологии OPHIR предоставляет информацию о:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "собираемых сведениях;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "цели;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "поставщике или категории получателей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "последствиях согласия или отказа;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "способе отзыва выбора."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Когда этого требует применимое право, согласие должно быть ясным, свободным, информированным, конкретным, временным, детализированным, понятным и запрашиваться отдельно от иной письменной информации."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Отозвать согласие можно через доступный интерфейс OPHIR или обратившись на "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Отзыв не влияет на законность предыдущей обработки и не отменяет обязательное хранение."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Сроки хранения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Технические сведения хранятся только столько, сколько обоснованно необходимо для соответствующей цели."
              }
            ]
          },
          {
            "type": "table",
            "headers": [
              "Категория",
              "Общий принцип хранения"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Токен сеанса"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "До выхода, истечения срока, отзыва или замены"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Настройки приложения"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "До изменения, сброса, удаления приложения или учётной записи"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Идентификатор установки"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Пока установка активна или пока он необходим для безопасности и диагностики"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Журнал безопасности"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Согласно графику хранения и необходимости расследования"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Диагностика"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "В течение ограниченного срока, необходимого для анализа и исправления"
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Выбор согласия"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Столько, сколько необходимо для применения и подтверждения выбора"
                  }
                ]
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Удаление приложения может удалить локальные сведения, но не обязательно удаляет серверную информацию или данные, самостоятельно контролируемые сторонним поставщиком."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. Безопасность",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В зависимости от технологии OPHIR может применять:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "шифрование соединения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "защищённое хранилище операционной системы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ограниченные сроки токенов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "контроль доступа;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "управление секретами;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверку целостности запросов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "мониторинг подозрительной активности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "управление уязвимостями;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "процедуры реагирования на инциденты."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ни одна система не гарантирует абсолютную безопасность. Пользователь обязан защищать устройство, код доступа, учётную запись и электронную почту."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Права пользователя",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если технические данные позволяют прямо или косвенно идентифицировать пользователя, они могут являться персональной информацией."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В зависимости от применимого права пользователь может:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "запросить доступ;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "потребовать исправления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отозвать согласие;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросить удаление в предусмотренных законом случаях;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "получить сведения о целях, категориях и получателях;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подать жалобу."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Запрос направляется на "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Для защиты учётной записи OPHIR может запросить разумное подтверждение личности."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Изменения настоящей Политики",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может обновлять настоящую Политику при изменении приложения, веб-сайта, поставщиков, технологий или законодательства."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Обновлённая версия будет содержать новую дату. До активации существенно новой необязательной технологии OPHIR предоставит уведомление и получит новое согласие, если это требуется."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Связанные документы",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящая Политика дополняет:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "internalLink",
                  "text": "Политику конфиденциальности OPHIR",
                  "page": "privacyPolicy"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Условия использования OPHIR",
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
                  "text": "контекстные уведомления приложения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "системные интерфейсы разрешений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "политики сторонних сервисов в отношении их независимой обработки."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Язык",
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
                "text": "Ничто ни в одной языковой версии не ограничивает права, от которых нельзя отказаться. При расхождении версий применяются императивные нормы и версия, которая должна иметь преимущественную силу по закону."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Контактная информация",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "По вопросам о технологиях приложения, SDK, cookie или персональной информации:"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "text",
                "text": "Soavinjato Andrianarisoa\nОтветственный за защиту персональной информации OPHIR\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada\n"
              },
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
                "text": "При обращении не отправляйте пароль интернет-банка, полный номер платёжной карты, одноразовый код или иные секретные учётные данные."
              }
            ]
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  AppTechnologiesDocument
>;
