import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type AccountDataInlineContent =
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

type AccountDataBlock =
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "paragraph";
      content: readonly AccountDataInlineContent[];
    }
  | {
      type: "callout";
      content: readonly AccountDataInlineContent[];
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
      items: readonly (readonly AccountDataInlineContent[])[];
    }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly (readonly AccountDataInlineContent[])[])[];
    }
  | {
      type: "address";
      content: readonly AccountDataInlineContent[];
    };

type AccountDataSection = {
  key: string;
  title: string;
  blocks: readonly AccountDataBlock[];
};

type AccountDataDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  intro: readonly AccountDataBlock[];
  sections: readonly AccountDataSection[];
};

export const accountDataContent = {
  "en": {
    "title": "Account Deletion and Data Requests",
    "seoTitle": "Account Deletion and Data Requests | OPHIR",
    "description": "Public guide to managing your account and personal information",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Public guide to managing your account and personal information"
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
        "key": "section-1",
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
                "text": "Privacy and data requests: "
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
                "text": "Deleting your OPHIR account, cancelling a subscription, disconnecting a financial account, and deleting data held by Plaid are separate actions. This page explains which action to choose, how to submit a request, and what happens afterward."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "At a Glance",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "What You Want to Do",
              "Required Action"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Delete your OPHIR account and associated active data"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "In the application, open Settings -> Account -> Delete Account and confirm the request. If the feature is temporarily unavailable, email "
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
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Stop future subscription charges"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Separately cancel the subscription through the Apple App Store or Google Play. Account deletion alone does not cancel a subscription."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Stop receiving new data from a financial institution"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Disconnect the applicable account in OPHIR and, where appropriate, through Plaid Portal or the financial institution."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Delete OPHIR data previously received through Plaid"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Delete your OPHIR account or submit a separate data deletion request to OPHIR."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Manage data Plaid holds as an independent provider"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Use Plaid Portal or Plaid's privacy request tools."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Obtain a copy, correct information, or exercise another right"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Email "
                  },
                  {
                    "type": "emailLink",
                    "text": "privacy@joinophir.app",
                    "email": "privacy@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": " and identify the type of request."
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
                "text": "This guide explains how an OPHIR user may:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "initiate deletion of their account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request access to or a copy of personal information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "correct inaccurate, incomplete, or equivocal information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request deletion of specific information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "withdraw consent or stop certain processing;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "obtain information about use, disclosure, retention, or automated processing;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "exercise a portability right where applicable;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "submit a privacy complaint."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This guide applies to personal information OPHIR processes in connection with the mobile application, web pages, support, subscriptions, financial connections, budgets, forecasts, and the financial assistant."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The "
              },
              {
                "type": "internalLink",
                "text": "OPHIR Privacy Policy",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": " provides the complete description of data categories, processing purposes, recipients, retention, security, and user rights. If there is a conflict, the "
              },
              {
                "type": "internalLink",
                "text": "Privacy Policy",
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
                "text": ", and mandatory law apply."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Four Separate Actions",
        "blocks": [
          {
            "type": "subheading",
            "text": "2.1 Deleting Your OPHIR Account"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Deletion closes your OPHIR account, ends ordinary access to the Service, and starts deletion or de-identification of associated active user data under OPHIR's control, subject to limited required retention."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.2 Cancelling a Subscription"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Subscriptions are purchased and managed through the Apple App Store or Google Play. Deleting the application or your OPHIR account does not ensure that automatic renewal through the store will stop. To avoid future charges, cancel the subscription separately before the deadline stated by Apple or Google."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Detailed instructions appear in the "
              },
              {
                "type": "internalLink",
                "text": "OPHIR Subscription Management",
                "page": "subscription"
              },
              {
                "type": "text",
                "text": " and "
              },
              {
                "type": "internalLink",
                "text": "Cancellation and Refunds",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": " documents."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.3 Disconnecting a Financial Account"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Disconnecting stops or limits future transmission and refreshes for the applicable connection. It does not necessarily delete data that OPHIR, Plaid, or the financial institution previously received."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.4 Deleting Data Held by Plaid"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid may process certain information as an independent provider under its own policy. Deleting OPHIR data does not necessarily delete every record Plaid must or may retain independently. To manage Plaid data, use the Plaid tools described in Section 9."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. Requests You May Submit to OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Subject to applicable law and limited exceptions, you may request:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "confirmation of whether OPHIR holds personal information about you;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "access to personal information and a copy of available records;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "correction of inaccurate, incomplete, or equivocal information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "deletion of your account and associated active user data;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "deletion of specific information without deleting the entire account, where technically and legally possible;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "withdrawal of consent to a particular use or disclosure;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "cessation of dissemination or de-indexing in circumstances provided by law;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "information about collection purposes and methods, persons with access, recipients, processing locations, and retention periods;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "required information about a significant decision based exclusively on automated processing;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "release of computerized personal information collected from you in a structured and commonly used technological format where a portability right applies;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "review of a complaint concerning the processing of personal information."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Withdrawing consent may disconnect a financial account, stop synchronization, or make a feature that requires the information unavailable. Withdrawal does not affect the lawfulness of processing completed before it took effect and does not override required retention."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Before Deleting Your Account",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Before confirming deletion, we recommend that you:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "cancel any active subscription through the Apple App Store or Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "keep the cancellation confirmation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "export or save any information you may need later;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "complete open support cases, disputes, and refund requests;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "disconnect financial accounts if you wish;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "make sure you understand the consequences of irreversible deletion."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "After deletion is completed, access to budgets, categories, goals, history, and other account information may be permanently lost. A deleted account cannot be used to confirm earlier settings or restore content, except for limited records OPHIR must or may retain."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. How to Delete Your Account in the Application",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The primary method is:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "sign in to OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "open Settings;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "select Account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "tap Delete Account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "review the consequences;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirm the request using the method shown in the application."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may require you to sign in again, enter a confirmation code sent to the registered email address, or provide another reasonable form of identity verification. This helps prevent another person from deleting your account without authorization."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If the deletion feature is temporarily unavailable because of a technical error, you cannot sign in, or you need assistance, email "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Use the subject line \"Delete My OPHIR Account,\" provide the account email address, and briefly describe the issue."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not send an online-banking password, Apple or Google password, full card number, PIN, card security code, or one-time code."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. How to Submit a Data Request",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Email the Privacy Officer at "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "your name;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the email address associated with your OPHIR account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the specific type of request;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the information or time period covered by the request;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "your preferred method of receiving a response;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "representative information if someone is submitting the request on your behalf."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Example subject lines:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "\"Access My Data\";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "\"Correct My Data\";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "\"Delete My OPHIR Account\";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "\"Delete Data Received Through Plaid\";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "\"Withdraw Consent\";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "\"Automated Processing Question\";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "\"Privacy Complaint\"."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The more precisely you describe the request, the more quickly OPHIR can locate the relevant records. If a request is too broad, we may ask you to clarify its scope."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Identity Verification",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Before disclosing, changing, or deleting data, OPHIR must reasonably confirm that the request comes from the account holder or an authorized representative."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Depending on the risk, we may:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ask you to sign in again;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "send a link or code to the registered email address;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "match limited account information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request documentary proof of a representative's authority;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request additional verification if access to the account has been lost."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We request only the information reasonably necessary for verification. If a document is required, we will explain its purpose and provide a secure transmission method. Verification information is used to process the request and protect against fraud, then retained only to the extent necessary."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR does not ask for an online-banking password or a financial institution's one-time code. Do not send such information even if you have not been asked for it."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. What OPHIR Account Deletion Covers",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "After confirming a valid request, OPHIR closes the account and deletes or de-identifies active user data under its control in accordance with the applicable retention schedule. Depending on the features used, this may include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "account profile, settings, and identifiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "active sessions, access tokens, and associated permissions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "connected financial accounts and connection tokens controlled by OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "imported balances, transactions, and financial account metadata;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "budgets, categories, rules, financial goals, notes, and user entries;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "forecasts, summaries, alerts, and personalized insights;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "financial assistant prompts and associated history, if that history was retained;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "notification settings and preferences;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "other active data directly associated with the account."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Deleting an account does not mean that every copy disappears from every system immediately. Limited records and backups are handled as described in Section 11."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you want to delete only certain information, identify it in your request. We will explain whether partial deletion is possible without disrupting a selected feature or violating a mandatory requirement."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Plaid and Financial Connections",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may use Plaid to connect to supported financial institutions. To set clear expectations, it is important to distinguish the following actions."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Disconnecting in OPHIR."
              },
              {
                "type": "text",
                "text": " This removes or deactivates the connection on the OPHIR side and stops future refreshes to the extent controlled by OPHIR. Previously imported data may remain until it is separately deleted."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Deleting your OPHIR account."
              },
              {
                "type": "text",
                "text": " This starts deletion of active OPHIR data, including previously imported financial data and connection tokens under OPHIR's control, subject to required retention."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Managing the connection through Plaid."
              },
              {
                "type": "text",
                "text": " Plaid Portal may allow you to view financial connections, disconnect applications, and manage certain Plaid data:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
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
                "text": "Plaid information about privacy and available requests:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
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
                "text": "Disconnecting an application through Plaid ordinarily stops future data sharing with that application, but it does not necessarily delete information the application previously received. To delete data already held by OPHIR, submit a request to OPHIR or delete your OPHIR account. To request deletion of data under Plaid's independent control, use Plaid Portal or Plaid's privacy tools."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The financial institution may also retain its own records and apply its own policy. OPHIR cannot delete records lawfully controlled by Plaid, Apple, Google, a financial institution, or another independent party."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Your Subscription After Account Deletion",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Deleting your OPHIR account does not instruct Apple or Google to stop automatic renewal. Before deletion:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "for an Apple subscription, open Settings -> your name -> Subscriptions -> OPHIR -> Cancel Subscription;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "for a Google Play subscription, open Google Play -> profile -> Payments and subscriptions -> Subscriptions -> OPHIR -> Cancel subscription;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "keep the cancellation confirmation and access end date."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you deleted your account before cancelling, open the store and cancel the subscription anyway. For help locating a purchase or resolving an access issue, email "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Cancelling a subscription does not automatically refund a completed charge. For a refund, use the separate process described in the "
              },
              {
                "type": "internalLink",
                "text": "OPHIR Cancellation and Refunds",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": " document."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. Limited Retention After Deletion",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR deletes or de-identifies active user data in accordance with its approved retention schedule unless continued retention is required or permitted by law."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Limited information may be retained longer where necessary to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "document receipt, verification, and completion of the request;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "comply with tax, accounting, consumer, or other legal obligations;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "maintain records of consents, withdrawals, complaints, and legal requests;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "prevent fraud, abuse, and re-registration by a blocked user;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "detect, investigate, and document security incidents;"
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
                  "text": "resolve disputes, refunds, and chargebacks;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "comply with a binding order from a court or public authority."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Backups are deleted or overwritten during their ordinary cycle. Until then, they are isolated from ordinary use and restored only for appropriate continuity, security, or legal compliance purposes. If restoration returns previously deleted data to an active system, OPHIR reapplies the deletion request within a reasonable period."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Retained information is limited to what is necessary, protected by appropriate safeguards, and not used for ordinary personalization or marketing. Properly de-identified information that can no longer identify an individual may be retained for analytics, security, and Service improvement."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Timing and Completion Confirmation",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "After receiving a request, OPHIR:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "acknowledges receipt and requests verification information where necessary;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "assesses the request's scope and applicable exceptions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "completes the request within the period required by applicable law;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "reports completion or explains a permitted delay, limitation, or refusal;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "for account deletion, confirms account closure through an available method."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For applicable access or correction requests in Quebec, a written response is generally provided promptly and no later than 30 days after receipt of the request. Other requests are handled within the period required by the applicable law and the nature of the operation."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If deletion requires manual review or completion of a technical process, we will provide the expected timing. Ordinary account access may end before deletion from backups and limited-retention systems is complete."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. When a Request May Be Limited",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may decline to complete a request in full only if and to the extent permitted or required by law. Possible reasons include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the requester's identity or authority could not reasonably be verified;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "retention is required by law;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "disclosure would affect another person's rights, security, or privacy;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "information is protected by legal privilege;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "data is needed to investigate fraud, an incident, or a violation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "information is needed for an existing or anticipated legal claim;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the request is manifestly unfounded, excessive, or prohibited by law;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the data has been properly de-identified and no longer relates to an identifiable individual."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If a request is limited or refused, OPHIR will provide a written explanation and information about available review or complaint options where required by law. We do not refuse a request merely because completing it is inconvenient."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Authorized Representatives",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You may act through a legally authorized representative. The representative must identify the person on whose behalf they are acting, describe the scope of their authority, provide appropriate written authorization or another required document, and complete reasonable identity verification."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may contact the account holder directly to confirm the representative's authority where lawful and appropriate. If the request concerns a deceased or legally incapable person, special rules apply and additional proof of status may be required."
              }
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Request Security",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "To reduce the risk of fraud:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "use the email address associated with the account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirm the sender's domain before following a link;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "do not disclose your OPHIR, Apple, Google, or online-banking password;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "do not send a full card number, PIN, or one-time code;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "redact unnecessary financial information from screenshots;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "promptly report a suspicious request or unauthorized access to "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may send necessary messages to verify the request, confirm deletion, and protect the account even if you opted out of marketing communications."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Complaints and Supervisory Authorities",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you believe a request was handled incorrectly, first contact the OPHIR Privacy Officer:"
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
                "text": "Include the date of the original request, the account email address, a concise description of the issue, and the outcome you are seeking. Contacting OPHIR does not limit your right to complain to a competent authority."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For Quebec:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Commission d'accès à l'information du Québec\n"
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
                "text": "At the federal level, where applicable:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Office of the Privacy Commissioner of Canada\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.priv.gc.ca",
                "href": "https://www.priv.gc.ca"
              }
            ]
          }
        ]
      },
      {
        "key": "section-17",
        "title": "17. Changes to This Guide",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may update this guide when the application, procedures, providers, or law changes. The updated version will show a new date. Material changes may be communicated in the application, by email, or on the website where appropriate or required by law."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Changing this guide does not reduce rights that already apply to a submitted request and does not limit rights that cannot be waived."
              }
            ]
          }
        ]
      },
      {
        "key": "section-18",
        "title": "18. Contact Information",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For privacy questions, account deletion, and data rights:"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "text",
                "text": "Soavinjato Andrianarisoa\nPrivacy Officer for OPHIR\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
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
                "text": "Technical support: "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nGeneral and legal inquiries: "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
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
                "text": "Do not send an online-banking password, full payment-card number, PIN, card security code, one-time code, or other secret credentials."
              }
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Suppression du compte et demandes relatives aux renseignements personnels",
    "seoTitle": "Suppression du compte et demandes relatives aux renseignements personnels | OPHIR",
    "description": "Guide public sur la gestion de votre compte et de vos renseignements personnels",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Guide public sur la gestion de votre compte et de vos renseignements personnels"
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
        "key": "section-1",
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
                "text": "Protection des renseignements personnels et demandes relatives aux données : "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nAssistance technique : "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
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
                "text": "La suppression de votre compte OPHIR, l’annulation d’un abonnement, la déconnexion d’un compte financier et la suppression de renseignements détenus par Plaid sont des actions distinctes. La présente page explique quelle action choisir, comment présenter une demande et ce qui se passe par la suite."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "En bref",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Ce que vous souhaitez faire",
              "Action requise"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Supprimer votre compte OPHIR et les données actives qui y sont associées"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Dans l’application, ouvrez Paramètres -> Compte -> Supprimer le compte, puis confirmez la demande. Si cette fonction est temporairement indisponible, écrivez à "
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
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Mettre fin aux futurs frais d’abonnement"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Annulez séparément l’abonnement dans l’App Store d’Apple ou Google Play. La suppression du compte n’annule pas à elle seule un abonnement."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Cesser de recevoir de nouveaux renseignements d’une institution financière"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Déconnectez le compte concerné dans OPHIR et, s’il y a lieu, dans le portail Plaid ou auprès de l’institution financière."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Supprimer les données d’OPHIR reçues antérieurement par l’intermédiaire de Plaid"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Supprimez votre compte OPHIR ou présentez à OPHIR une demande distincte de suppression de données."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Gérer les renseignements que Plaid détient comme fournisseur indépendant"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Utilisez le portail Plaid ou les outils de demande en matière de confidentialité de Plaid."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Obtenir une copie, rectifier des renseignements ou exercer un autre droit"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Écrivez à "
                  },
                  {
                    "type": "emailLink",
                    "text": "privacy@joinophir.app",
                    "email": "privacy@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": " en précisant le type de demande."
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
                "text": "Le présent guide explique comment un utilisateur d’OPHIR peut :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "demander la suppression de son compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander l’accès à ses renseignements personnels ou en obtenir une copie;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "faire rectifier des renseignements inexacts, incomplets ou équivoques;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander la suppression de renseignements précis;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "retirer son consentement ou faire cesser certains traitements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "obtenir des renseignements sur l’utilisation, la communication, la conservation ou le traitement automatisé;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "exercer un droit à la portabilité, lorsqu’il s’applique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "déposer une plainte en matière de protection des renseignements personnels."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le présent guide s’applique aux renseignements personnels traités par OPHIR dans le cadre de l’application mobile, des pages Web, de l’assistance, des abonnements, des connexions financières, des budgets, des prévisions et de l’assistant financier."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La "
              },
              {
                "type": "internalLink",
                "text": "Politique de confidentialité d’OPHIR",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": " décrit de façon complète les catégories de renseignements, les finalités du traitement, les destinataires, la conservation, la sécurité et les droits des utilisateurs. En cas de divergence, la "
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
                "text": " et les dispositions impératives de la loi s’appliquent."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Quatre actions distinctes",
        "blocks": [
          {
            "type": "subheading",
            "text": "2.1 Supprimer votre compte OPHIR"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La suppression ferme votre compte OPHIR, met fin à l’accès ordinaire au Service et déclenche la suppression ou la dépersonnalisation des données actives associées à l’utilisateur qui sont sous le contrôle d’OPHIR, sous réserve d’une conservation limitée lorsque celle-ci est requise."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.2 Annuler un abonnement"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les abonnements sont achetés et gérés dans l’App Store d’Apple ou Google Play. La suppression de l’application ou de votre compte OPHIR ne garantit pas l’arrêt du renouvellement automatique par la boutique. Pour éviter de futurs frais, annulez l’abonnement séparément avant l’échéance indiquée par Apple ou Google."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Des instructions détaillées figurent dans les documents d’OPHIR intitulés « "
              },
              {
                "type": "internalLink",
                "text": "Gestion de l’abonnement",
                "page": "subscription"
              },
              {
                "type": "text",
                "text": " » et « "
              },
              {
                "type": "internalLink",
                "text": "Annulation et remboursements",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": " »."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.3 Déconnecter un compte financier"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La déconnexion met fin ou impose des limites à la transmission et à l’actualisation futures des renseignements pour la connexion visée. Elle ne supprime pas nécessairement les renseignements déjà reçus par OPHIR, Plaid ou l’institution financière."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.4 Supprimer les renseignements détenus par Plaid"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid peut traiter certains renseignements comme fournisseur indépendant selon sa propre politique. La suppression des données détenues par OPHIR ne supprime pas nécessairement tous les renseignements que Plaid doit ou peut conserver de façon indépendante. Pour gérer les renseignements détenus par Plaid, utilisez les outils de Plaid décrits à la section 9."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. Demandes que vous pouvez présenter à OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sous réserve de la loi applicable et d’exceptions limitées, vous pouvez demander :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "la confirmation qu’OPHIR détient ou non des renseignements personnels à votre sujet;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’accès à vos renseignements personnels et une copie des documents disponibles;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la rectification de renseignements inexacts, incomplets ou équivoques;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la suppression de votre compte et des données actives qui y sont associées;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la suppression de renseignements précis sans supprimer l’ensemble du compte, lorsque cela est possible sur les plans technique et juridique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le retrait de votre consentement à une utilisation ou à une communication précise;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la cessation de la diffusion, la désindexation ou la réindexation dans les circonstances prévues par la loi;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des renseignements sur les finalités et les moyens de la collecte, les personnes ayant accès aux renseignements, les destinataires, les lieux de traitement et les périodes de conservation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements exigés au sujet d’une décision importante fondée exclusivement sur un traitement automatisé;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la communication des renseignements personnels informatisés recueillis auprès de vous dans un format technologique structuré et couramment utilisé, lorsqu’un droit à la portabilité s’applique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’examen d’une plainte concernant le traitement de renseignements personnels."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le retrait du consentement peut entraîner la déconnexion d’un compte financier, l’arrêt de la synchronisation ou l’indisponibilité d’une fonction qui nécessite les renseignements visés. Le retrait du consentement ne remet pas en cause la licéité du traitement effectué avant sa prise d’effet et n’écarte pas une obligation de conservation."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Avant de supprimer votre compte",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Avant de confirmer la suppression, nous vous recommandons :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "d’annuler tout abonnement actif dans l’App Store d’Apple ou Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de conserver la confirmation de l’annulation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "d’exporter ou de sauvegarder tout renseignement dont vous pourriez avoir besoin ultérieurement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de régler les demandes d’assistance, les différends et les demandes de remboursement en cours;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de déconnecter vos comptes financiers, si vous le souhaitez;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "de vous assurer que vous comprenez les conséquences d’une suppression irréversible."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Une fois la suppression effectuée, l’accès aux budgets, aux catégories, aux objectifs, à l’historique et aux autres renseignements du compte peut être définitivement perdu. Un compte supprimé ne peut pas servir à confirmer des paramètres antérieurs ou à restaurer du contenu, à l’exception de renseignements limités qu’OPHIR doit ou peut conserver."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Comment supprimer votre compte dans l’application",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La méthode principale est la suivante :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ouvrez une session dans OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ouvrez Paramètres;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sélectionnez Compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "appuyez sur Supprimer le compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "prenez connaissance des conséquences;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirmez la demande selon la méthode affichée dans l’application."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut vous demander d’ouvrir une nouvelle session, de saisir un code de confirmation envoyé à l’adresse courriel inscrite au compte ou de fournir une autre forme raisonnable de vérification de l’identité. Ces mesures aident à empêcher une autre personne de supprimer votre compte sans autorisation."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si la fonction de suppression est temporairement indisponible en raison d’une erreur technique, si vous ne pouvez pas ouvrir une session ou si vous avez besoin d’aide, écrivez à "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Utilisez l’objet « Supprimer mon compte OPHIR », indiquez l’adresse courriel associée au compte et décrivez brièvement le problème."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ne transmettez jamais votre mot de passe de services bancaires en ligne, votre mot de passe Apple ou Google, le numéro complet d’une carte, un NIP, le code de sécurité d’une carte ou un code à usage unique."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. Comment présenter une demande relative aux renseignements personnels",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Écrivez à la personne responsable de la protection des renseignements personnels à "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Indiquez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "votre nom;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’adresse courriel associée à votre compte OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le type précis de demande;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements ou la période visés par la demande;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le moyen par lequel vous préférez recevoir une réponse;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements sur le représentant, si une personne présente la demande en votre nom."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Exemples d’objets du courriel :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "« Accès à mes renseignements »;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "« Rectification de mes renseignements »;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "« Suppression de mon compte OPHIR »;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "« Suppression des données reçues par l’intermédiaire de Plaid »;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "« Retrait du consentement »;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "« Question sur le traitement automatisé »;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "« Plainte en matière de confidentialité »."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plus votre demande est précise, plus OPHIR pourra repérer rapidement les renseignements pertinents. Si une demande est trop générale, nous pouvons vous demander d’en préciser la portée."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Vérification de l’identité",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Avant de communiquer, de modifier ou de supprimer des renseignements, OPHIR doit raisonnablement confirmer que la demande provient du titulaire du compte ou d’un représentant autorisé."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Selon le niveau de risque, nous pouvons :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "vous demander d’ouvrir une nouvelle session;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "envoyer un lien ou un code à l’adresse courriel inscrite au compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "comparer un nombre limité de renseignements associés au compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander une preuve documentaire des pouvoirs du représentant;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander une vérification supplémentaire si l’accès au compte a été perdu."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous demandons uniquement les renseignements raisonnablement nécessaires à la vérification. Si un document est requis, nous expliquerons sa finalité et fournirons un moyen sécurisé de le transmettre. Les renseignements de vérification servent à traiter la demande et à prévenir la fraude, puis ne sont conservés que dans la mesure nécessaire."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne vous demande pas votre mot de passe de services bancaires en ligne ni un code à usage unique provenant d’une institution financière. Ne transmettez pas ces renseignements, même si personne ne vous les a demandés."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Ce que couvre la suppression du compte OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Après avoir confirmé la validité d’une demande, OPHIR ferme le compte et supprime ou dépersonnalise les données actives de l’utilisateur qui sont sous son contrôle, conformément au calendrier de conservation applicable. Selon les fonctions utilisées, cela peut comprendre :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le profil, les paramètres et les identifiants du compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les sessions actives, les jetons d’accès et les autorisations connexes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les comptes financiers connectés et les jetons de connexion sous le contrôle d’OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les soldes, les opérations et les métadonnées des comptes financiers importés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les budgets, les catégories, les règles, les objectifs financiers, les notes et les saisies de l’utilisateur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les prévisions, les sommaires, les alertes et les renseignements personnalisés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les demandes adressées à l’assistant financier et l’historique connexe, si cet historique a été conservé;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les paramètres et les préférences de notification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les autres données actives directement associées au compte."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La suppression d’un compte ne signifie pas que toutes les copies disparaissent immédiatement de tous les systèmes. Les documents conservés de façon limitée et les copies de sauvegarde sont traités conformément à la section 11."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous souhaitez supprimer uniquement certains renseignements, désignez-les dans votre demande. Nous vous indiquerons si une suppression partielle est possible sans compromettre le fonctionnement d’une fonction choisie ou contrevenir à une exigence impérative."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Plaid et les connexions financières",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut utiliser Plaid afin d’établir une connexion avec des institutions financières prises en charge. Pour établir des attentes claires, il importe de distinguer les actions suivantes."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Déconnexion dans OPHIR."
              },
              {
                "type": "text",
                "text": " Cette action supprime ou désactive la connexion du côté d’OPHIR et met fin aux actualisations futures dans la mesure où OPHIR les contrôle. Les données importées antérieurement peuvent demeurer jusqu’à ce qu’elles fassent l’objet d’une suppression distincte."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Suppression de votre compte OPHIR."
              },
              {
                "type": "text",
                "text": " Cette action déclenche la suppression des données actives détenues par OPHIR, y compris les données financières importées antérieurement et les jetons de connexion sous le contrôle d’OPHIR, sous réserve des obligations de conservation."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Gestion de la connexion par l’intermédiaire de Plaid."
              },
              {
                "type": "text",
                "text": " Le portail Plaid peut vous permettre de consulter vos connexions financières, de déconnecter des applications et de gérer certains renseignements détenus par Plaid :"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
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
                "text": "Renseignements de Plaid sur la confidentialité et les demandes offertes :"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
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
                "text": "La déconnexion d’une application par l’intermédiaire de Plaid met généralement fin au partage futur de données avec cette application, mais ne supprime pas nécessairement les renseignements déjà reçus par celle-ci. Pour supprimer les données déjà détenues par OPHIR, présentez une demande à OPHIR ou supprimez votre compte OPHIR. Pour demander la suppression de renseignements sous le contrôle indépendant de Plaid, utilisez le portail Plaid ou les outils de confidentialité de Plaid."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L’institution financière peut également conserver ses propres dossiers et appliquer sa propre politique. OPHIR ne peut pas supprimer les renseignements légalement contrôlés par Plaid, Apple, Google, une institution financière ou une autre partie indépendante."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Votre abonnement après la suppression du compte",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La suppression de votre compte OPHIR ne donne pas instruction à Apple ou à Google de mettre fin au renouvellement automatique. Avant la suppression :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "pour un abonnement Apple, ouvrez Réglages -> votre nom -> Abonnements -> OPHIR -> Annuler l’abonnement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "pour un abonnement Google Play, ouvrez Google Play -> profil -> Paiements et abonnements -> Abonnements -> OPHIR -> Annuler l’abonnement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "conservez la confirmation de l’annulation et la date de fin de l’accès."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous avez supprimé votre compte avant d’annuler l’abonnement, ouvrez tout de même la boutique et annulez l’abonnement. Pour obtenir de l’aide afin de retrouver un achat ou de résoudre un problème d’accès, écrivez à "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L’annulation d’un abonnement n’entraîne pas automatiquement le remboursement d’un paiement déjà effectué. Pour demander un remboursement, suivez la procédure distincte décrite dans le document d’OPHIR intitulé « "
              },
              {
                "type": "internalLink",
                "text": "Annulation et remboursements",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": " »."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. Conservation limitée après la suppression",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR supprime ou dépersonnalise les données actives de l’utilisateur conformément à son calendrier de conservation approuvé, sauf si une conservation prolongée est exigée ou permise par la loi."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Des renseignements limités peuvent être conservés plus longtemps lorsque cela est nécessaire pour :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "documenter la réception, la vérification et l’exécution de la demande;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "respecter des obligations fiscales, comptables, relatives à la protection du consommateur ou d’autres obligations légales;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "conserver une trace des consentements, des retraits, des plaintes et des demandes juridiques;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "prévenir la fraude, les abus et la réinscription d’un utilisateur bloqué;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "détecter les incidents de sécurité, mener une enquête à leur sujet et les documenter;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "établir, exercer ou défendre des droits en justice;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "régler des différends, des remboursements et des rétrofacturations;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "respecter une ordonnance contraignante d’un tribunal ou d’une autorité publique."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les copies de sauvegarde sont supprimées ou écrasées au cours de leur cycle normal. Entre-temps, elles sont isolées de l’utilisation courante et ne sont restaurées qu’à des fins appropriées de continuité, de sécurité ou de conformité juridique. Si une restauration remet des données précédemment supprimées dans un système actif, OPHIR applique de nouveau la demande de suppression dans un délai raisonnable."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements conservés sont limités à ce qui est nécessaire, protégés par des mesures appropriées et ne sont pas utilisés à des fins courantes de personnalisation ou de marketing. Les renseignements adéquatement dépersonnalisés qui ne permettent plus d’identifier une personne peuvent être conservés à des fins d’analyse, de sécurité et d’amélioration du Service."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Délais et confirmation de l’exécution",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Après avoir reçu une demande, OPHIR :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "en accuse réception et demande, au besoin, les renseignements nécessaires à la vérification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "évalue la portée de la demande et les exceptions applicables;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "donne suite à la demande dans le délai prévu par la loi applicable;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirme l’exécution ou explique tout délai supplémentaire, toute limitation ou tout refus permis;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "dans le cas d’une suppression de compte, confirme la fermeture du compte par un moyen disponible."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour les demandes d’accès ou de rectification auxquelles la loi québécoise s’applique, une réponse écrite est généralement fournie avec diligence et au plus tard 30 jours après la réception de la demande. Les autres demandes sont traitées dans le délai prévu par la loi applicable et selon la nature de l’opération."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si la suppression exige un examen manuel ou l’achèvement d’un processus technique, nous vous indiquerons le délai prévu. L’accès ordinaire au compte peut prendre fin avant que la suppression des copies de sauvegarde et des systèmes de conservation limitée soit terminée."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Cas où une demande peut être limitée",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut refuser de donner pleinement suite à une demande uniquement dans la mesure où la loi le permet ou l’exige. Les motifs possibles comprennent notamment les suivants :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "l’identité du demandeur ou les pouvoirs de son représentant n’ont pas pu être raisonnablement vérifiés;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la loi exige la conservation des renseignements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la communication porterait atteinte aux droits, à la sécurité ou à la vie privée d’une autre personne;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements sont protégés par le secret professionnel ou un autre privilège juridique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements sont nécessaires pour enquêter sur une fraude, un incident ou une violation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements sont nécessaires relativement à une réclamation ou à un recours actuel ou envisagé;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la demande est manifestement non fondée, excessive ou interdite par la loi;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements ont été adéquatement dépersonnalisés et ne concernent plus une personne identifiable."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si une demande est limitée ou refusée, OPHIR fournira une explication écrite et, lorsque la loi l’exige, des renseignements sur les recours ou les mécanismes de plainte disponibles. Nous ne refusons pas une demande simplement parce que son traitement est contraignant."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Représentants autorisés",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous pouvez agir par l’intermédiaire d’un représentant légalement autorisé. Le représentant doit :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "identifier la personne au nom de laquelle il agit;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "décrire l’étendue de ses pouvoirs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "fournir une autorisation écrite appropriée ou tout autre document requis;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "se soumettre à une vérification raisonnable de son identité."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut communiquer directement avec le titulaire du compte afin de confirmer les pouvoirs du représentant lorsque la loi le permet et que cela est approprié. Si la demande concerne une personne décédée ou juridiquement inapte, des règles particulières s’appliquent et une preuve supplémentaire du statut peut être exigée."
              }
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Sécurité des demandes",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Afin de réduire le risque de fraude :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "utilisez l’adresse courriel associée au compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vérifiez le domaine de l’expéditeur avant de suivre un lien;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne communiquez pas votre mot de passe OPHIR, Apple, Google ou de services bancaires en ligne;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne transmettez pas le numéro complet d’une carte, un NIP ou un code à usage unique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "masquez les renseignements financiers non nécessaires dans les captures d’écran;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "signalez rapidement toute demande suspecte ou tout accès non autorisé à "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut vous envoyer les communications nécessaires pour vérifier la demande, confirmer la suppression et protéger le compte, même si vous vous êtes désabonné des communications de marketing."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Plaintes et autorités de contrôle",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous estimez qu’une demande a été mal traitée, communiquez d’abord avec la personne responsable de la protection des renseignements personnels d’OPHIR :"
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
                "text": "Indiquez la date de la demande initiale, l’adresse courriel associée au compte, une brève description du problème et le résultat que vous recherchez. Le fait de communiquer avec OPHIR ne limite pas votre droit de vous adresser à une autorité compétente."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour le Québec :"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Commission d’accès à l’information du Québec\n"
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
                "text": "Au niveau fédéral, lorsque cela s’applique :"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Commissariat à la protection de la vie privée du Canada\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.priv.gc.ca",
                "href": "https://www.priv.gc.ca"
              }
            ]
          }
        ]
      },
      {
        "key": "section-17",
        "title": "17. Modifications du présent guide",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut mettre le présent guide à jour lorsque l’application, les procédures, les fournisseurs ou la loi changent. La version mise à jour indiquera une nouvelle date. Les modifications importantes peuvent être communiquées dans l’application, par courriel ou sur le site Web lorsque cela est approprié ou exigé par la loi."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La modification du présent guide ne réduit pas les droits déjà applicables à une demande présentée et ne limite pas les droits auxquels il ne peut être renoncé."
              }
            ]
          }
        ]
      },
      {
        "key": "section-18",
        "title": "18. Coordonnées",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour toute question relative à la protection des renseignements personnels, à la suppression du compte ou aux droits relatifs aux données :"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "text",
                "text": "Soavinjato Andrianarisoa\nResponsable de la protection des renseignements personnels pour OPHIR\n1203 Rue Normont\nLaval (Québec) H7G 3H3\nCanada"
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
                "text": "Assistance technique : "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nDemandes générales et juridiques : "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
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
                "text": "Ne transmettez pas votre mot de passe de services bancaires en ligne, le numéro complet d’une carte de paiement, un NIP, le code de sécurité d’une carte, un code à usage unique ou tout autre renseignement d’authentification secret."
              }
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "Удаление аккаунта и запросы о данных",
    "seoTitle": "Удаление аккаунта и запросы о данных | OPHIR",
    "description": "Публичное руководство по управлению учётной записью и персональной информацией",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Публичное руководство по управлению учётной записью и персональной информацией"
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
        "key": "section-1",
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
                "text": "Вопросы конфиденциальности и запросы о данных: "
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
                "text": "Удаление учётной записи OPHIR, отмена подписки, отключение финансового счёта и удаление данных, хранящихся у Plaid, являются отдельными действиями. На этой странице объясняется, какое действие выбрать, как подать запрос и что произойдёт после него."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "Кратко",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Что вы хотите сделать",
              "Необходимое действие"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Удалить учётную запись OPHIR и связанные с ней активные данные"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "В приложении откройте «Настройки» -> «Учётная запись» -> «Удалить аккаунт» и подтвердите запрос. Если функция временно недоступна, напишите на "
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
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Прекратить будущие списания за подписку"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Отдельно отмените подписку в Apple App Store или Google Play. Удаление аккаунта само по себе подписку не отменяет."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Прекратить получение новых данных от финансового учреждения"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Отключите соответствующий счёт в OPHIR и, при необходимости, в Plaid Portal или в финансовом учреждении."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Удалить данные OPHIR, ранее полученные через Plaid"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Удалите аккаунт OPHIR либо направьте OPHIR отдельный запрос на удаление данных."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Управлять данными, которые Plaid хранит как самостоятельный поставщик"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Используйте Plaid Portal или средства запроса конфиденциальности Plaid."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Получить копию, исправить сведения или воспользоваться иным правом"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Напишите на "
                  },
                  {
                    "type": "emailLink",
                    "text": "privacy@joinophir.app",
                    "email": "privacy@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": " и укажите вид запроса."
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
                "text": "Настоящее руководство объясняет, как пользователь OPHIR может:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "инициировать удаление своей учётной записи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросить доступ к персональной информации или её копию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "исправить неточную, неполную или неоднозначную информацию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросить удаление определённых сведений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отозвать согласие или прекратить отдельные виды обработки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "получить информацию об использовании, раскрытии, хранении или автоматизированной обработке;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "воспользоваться правом на переносимость, если оно применяется;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подать жалобу, связанную с конфиденциальностью."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Руководство применяется к персональной информации, которую OPHIR обрабатывает в связи с мобильным приложением, веб-страницами, поддержкой, подпиской, финансовыми подключениями, бюджетами, прогнозами и финансовым помощником."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "internalLink",
                "text": "Политика конфиденциальности OPHIR",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": " содержит полное описание категорий данных, целей обработки, получателей, хранения, безопасности и прав пользователей. При противоречии применяются "
              },
              {
                "type": "internalLink",
                "text": "Политика конфиденциальности",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": ", "
              },
              {
                "type": "internalLink",
                "text": "Условия использования",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " и обязательное законодательство."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "2. Четыре разных действия",
        "blocks": [
          {
            "type": "subheading",
            "text": "2.1 Удаление учётной записи OPHIR"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Удаление закрывает вашу учётную запись OPHIR, прекращает обычный доступ к Сервису и запускает удаление или обезличивание связанных активных пользовательских данных, находящихся под контролем OPHIR, с учётом ограниченного обязательного хранения."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.2 Отмена подписки"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Подписка приобретается и управляется через Apple App Store или Google Play. Удаление приложения или учётной записи OPHIR не гарантирует прекращение автоматического продления в магазине. Чтобы избежать будущих списаний, отмените подписку отдельно до срока, указанного Apple или Google."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Подробные инструкции приведены в документах OPHIR «"
              },
              {
                "type": "internalLink",
                "text": "Управление подпиской",
                "page": "subscription"
              },
              {
                "type": "text",
                "text": "» и «"
              },
              {
                "type": "internalLink",
                "text": "Отмена подписки и возвраты",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": "»."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.3 Отключение финансового счёта"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Отключение прекращает или ограничивает будущую передачу и обновление данных по соответствующему подключению. Оно не обязательно удаляет данные, которые OPHIR, Plaid или финансовое учреждение уже получили ранее."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "2.4 Удаление данных у Plaid"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid может обрабатывать отдельные сведения как самостоятельный поставщик в соответствии со своей политикой. Удаление данных OPHIR не обязательно удаляет все записи, которые Plaid обязан или вправе хранить самостоятельно. Для управления данными Plaid используйте средства Plaid, указанные в разделе 9."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "3. Какие запросы можно направить OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "С учётом применимого законодательства и ограниченных исключений вы можете запросить:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "подтверждение того, хранит ли OPHIR вашу персональную информацию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "доступ к персональной информации и копию доступных записей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "исправление неточных, неполных или неоднозначных сведений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "удаление учётной записи и связанных активных пользовательских данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "удаление отдельных сведений без удаления всей учётной записи, если это технически и юридически возможно;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отзыв согласия на определённое использование или раскрытие;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "прекращение распространения или деиндексацию в предусмотренных законом случаях;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения о целях и способах сбора, категориях лиц с доступом, получателях, местах обработки и сроках хранения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "объяснение применимого существенного решения, основанного исключительно на автоматизированной обработке;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "передачу компьютеризированной персональной информации в структурированном и широко используемом технологическом формате, если право на переносимость применяется;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "рассмотрение жалобы на обработку персональной информации."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Запрос на отзыв согласия может привести к отключению финансового счёта, прекращению синхронизации или недоступности функции, которой необходимы соответствующие данные. Отзыв не отменяет законность обработки, выполненной до его вступления в силу, и не отменяет обязательное хранение."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "4. Что сделать до удаления аккаунта",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Перед подтверждением удаления рекомендуется:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "отменить активную подписку в Apple App Store или Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сохранить подтверждение отмены;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "экспортировать или сохранить сведения, которые могут понадобиться вам позднее;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "завершить открытые обращения в поддержку, споры и запросы возврата;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "при желании отключить финансовые счета;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "убедиться, что вы понимаете последствия необратимого удаления."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "После завершения удаления доступ к бюджетам, категориям, целям, истории и другим данным учётной записи может быть утрачен без возможности восстановления. Удалённую учётную запись нельзя использовать для подтверждения прежних настроек или восстановления содержимого, кроме ограниченных записей, которые OPHIR обязан или вправе сохранить."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "5. Как удалить учётную запись в приложении",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Основной способ:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "войдите в OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "откройте «Настройки»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выберите «Учётная запись»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "нажмите «Удалить аккаунт»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ознакомьтесь с последствиями;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подтвердите запрос способом, показанным в приложении."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может потребовать повторный вход, код подтверждения, отправленный на зарегистрированный адрес электронной почты, или иное разумное подтверждение личности. Это необходимо, чтобы другое лицо не удалило вашу учётную запись без разрешения."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если функция удаления временно недоступна из-за технической ошибки, вы не можете войти или нуждаетесь в помощи, направьте запрос на "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Укажите тему «Удаление аккаунта OPHIR», адрес электронной почты учётной записи и кратко опишите проблему."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не отправляйте пароль интернет-банка, пароль Apple или Google, полный номер карты, PIN-код, код безопасности карты или одноразовый код."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "6. Как направить запрос о данных",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Напишите ответственному за защиту персональной информации по адресу "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В обращении укажите:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "имя;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "адрес электронной почты учётной записи OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "конкретный вид запроса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "какие сведения или период относятся к запросу;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предпочтительный способ получения ответа;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения о представителе, если обращение подаётся от имени другого лица."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Примеры темы письма:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "«Доступ к моим данным»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "«Исправление данных»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "«Удаление аккаунта OPHIR»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "«Удаление данных, полученных через Plaid»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "«Отзыв согласия»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "«Вопрос об автоматизированной обработке»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "«Жалоба о конфиденциальности»."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Чем точнее описан запрос, тем быстрее OPHIR сможет найти относящиеся к нему записи. Если запрос слишком общий, мы можем попросить уточнить его объём."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "7. Подтверждение личности",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "До раскрытия, изменения или удаления данных OPHIR должен разумно убедиться, что запрос поступил от владельца учётной записи или законного представителя."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "В зависимости от риска мы можем:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "попросить войти в учётную запись повторно;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отправить ссылку или код на зарегистрированный адрес электронной почты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сопоставить ограниченные сведения учётной записи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросить документальное подтверждение полномочий представителя;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросить дополнительное подтверждение, если доступ к учётной записи утрачен."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы запрашиваем только сведения, разумно необходимые для проверки. Если требуется копия документа, мы сообщим безопасный способ передачи и объясним назначение. Сведения проверки используются для обработки запроса и защиты от мошенничества, а затем хранятся только в необходимом объёме."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не просит сообщать банковский пароль или одноразовый код финансового учреждения. Не направляйте такие сведения даже по собственной инициативе."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "8. Что охватывает удаление аккаунта OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "После подтверждения допустимого запроса OPHIR закрывает учётную запись и удаляет либо обезличивает активные пользовательские данные, находящиеся под его контролем, в соответствии с применимым графиком хранения. В зависимости от использованных функций это может включать:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "профиль, настройки и идентификаторы учётной записи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "активные сеансы, токены доступа и связанные разрешения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подключённые финансовые счета и токены подключения, контролируемые OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "импортированные остатки, операции и метаданные финансовых счетов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "бюджеты, категории, правила, финансовые цели, заметки и пользовательские записи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "прогнозы, сводки, предупреждения и персонализированные выводы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросы финансовому помощнику и связанную историю, если такая история сохранялась;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "настройки уведомлений и предпочтения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "иные активные данные, непосредственно связанные с учётной записью."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Удаление учётной записи не означает, что каждая копия исчезает из всех систем мгновенно. Ограниченные записи и резервные копии обрабатываются согласно разделу 11."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы хотите удалить только определённые сведения, укажите их в запросе. Мы сообщим, возможно ли выполнить частичное удаление без нарушения работы выбранной функции или обязательных требований."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "9. Plaid и финансовые подключения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может использовать Plaid для подключения к поддерживаемым финансовым учреждениям. Для защиты ваших ожиданий важно различать следующие действия."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Отключение в OPHIR."
              },
              {
                "type": "text",
                "text": " Удаляет или деактивирует подключение со стороны OPHIR и прекращает будущие обновления, насколько это находится под контролем OPHIR. Ранее импортированные данные могут оставаться до отдельного удаления."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Удаление аккаунта OPHIR."
              },
              {
                "type": "text",
                "text": " Запускает удаление активных данных OPHIR, включая ранее импортированные финансовые данные и токены подключения под контролем OPHIR, с учётом обязательного хранения."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Управление через Plaid."
              },
              {
                "type": "text",
                "text": " Plaid Portal может позволять просматривать финансовые подключения, отключать приложения и управлять отдельными данными Plaid:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
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
                "text": "Информация Plaid о конфиденциальности и доступных запросах:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
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
                "text": "Отключение приложения в Plaid обычно прекращает будущую передачу данных этому приложению, но не обязательно удаляет сведения, которые приложение получило ранее. Чтобы удалить данные, уже находящиеся у OPHIR, направьте запрос OPHIR или удалите аккаунт OPHIR. Чтобы запросить удаление данных, находящихся под самостоятельным контролем Plaid, используйте Plaid Portal или средства конфиденциальности Plaid."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Финансовое учреждение также может хранить собственные записи и применять собственную политику. OPHIR не может удалить записи, которые законно контролируются Plaid, Apple, Google, финансовым учреждением или иным независимым лицом."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "10. Подписка после удаления аккаунта",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Удаление аккаунта OPHIR не является командой Apple или Google прекратить автоматическое продление. До удаления:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "для подписки Apple откройте «Настройки» -> ваше имя -> «Подписки» -> OPHIR -> «Отменить подписку»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "для подписки Google Play откройте Google Play -> профиль -> «Платежи и подписки» -> «Подписки» -> OPHIR -> «Отменить подписку»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сохраните подтверждение отмены и дату окончания доступа."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы удалили аккаунт до отмены подписки, всё равно откройте магазин и отмените подписку. По вопросам доступа или поиска покупки напишите на "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Отмена подписки не создаёт автоматического возврата уже проведённого платежа. Для возврата используйте отдельную процедуру, описанную в документе OPHIR «"
              },
              {
                "type": "internalLink",
                "text": "Отмена подписки и возвраты",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": "»."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "11. Ограниченное хранение после удаления",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR удаляет или обезличивает активные пользовательские данные в соответствии с утверждённым графиком хранения, если дальнейшее хранение не требуется или не разрешено законом."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ограниченные сведения могут сохраняться дольше, если это необходимо для:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "подтверждения получения, проверки и выполнения запроса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "соблюдения налоговых, бухгалтерских, потребительских или иных юридических обязанностей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ведения записей согласий, отказов, жалоб и правовых обращений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предотвращения мошенничества, злоупотреблений и повторной регистрации заблокированного пользователя;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выявления, расследования и документирования инцидентов безопасности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "установления, осуществления или защиты юридических требований;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "разрешения споров, возвратов и возвратных платежей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выполнения обязательных распоряжений суда или государственного органа."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Резервные копии удаляются или перезаписываются в ходе обычного цикла. До этого они изолируются от обычного использования и восстанавливаются только для надлежащих целей непрерывности, безопасности или соблюдения закона. Если восстановление возвращает ранее удалённые данные в активную систему, OPHIR повторно применяет запрос на удаление в разумный срок."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сохранённые сведения ограничиваются необходимым объёмом, защищаются соответствующими мерами и не используются для обычной персонализации или маркетинга. Надлежащим образом обезличенная информация, которая больше не позволяет установить личность, может сохраняться для аналитики, безопасности и улучшения Сервиса."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "12. Сроки и подтверждение выполнения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "После получения запроса OPHIR:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "подтверждает получение и при необходимости запрашивает сведения для проверки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "оценивает объём запроса и применимые исключения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выполняет запрос в срок, установленный применимым законодательством;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сообщает о завершении либо объясняет допустимую задержку, ограничение или отказ;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "при удалении подтверждает закрытие учётной записи доступным способом."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для применимых запросов о доступе или исправлении в Квебеке письменный ответ обычно предоставляется безотлагательно и не позднее 30 дней после получения запроса. Для других запросов применяется срок, установленный соответствующим законодательством и характером операции."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если удаление требует ручной проверки или завершения технического процесса, мы сообщим ожидаемый срок. Обычный доступ к учётной записи может быть прекращён до завершения удаления из резервных копий и ограниченных систем хранения."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "13. Когда запрос может быть ограничен",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может не выполнить запрос полностью, если и только в той мере, в какой это разрешено или требуется законом. Возможные причины включают:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "личность или полномочия заявителя не удалось разумно подтвердить;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сохранение необходимо по закону;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "раскрытие затронуло бы права, безопасность или конфиденциальность другого лица;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения защищены юридической привилегией;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "данные необходимы для расследования мошенничества, инцидента или нарушения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения необходимы для существующего или предполагаемого юридического требования;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запрос является явно необоснованным, чрезмерным или запрещённым законом;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "данные уже были надлежащим образом обезличены и больше не относятся к идентифицируемому лицу."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если запрос ограничен или отклонён, OPHIR предоставит письменное объяснение и информацию о доступных способах обжалования, когда это требуется законом. Мы не отказываем только потому, что выполнение запроса неудобно."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "14. Уполномоченные представители",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Вы можете действовать через законного представителя. Представитель должен:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "указать, от чьего имени он действует;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "описать объём полномочий;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предоставить надлежащее письменное разрешение или иной документ, если он требуется;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "пройти разумную проверку личности."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может связаться непосредственно с владельцем учётной записи для подтверждения полномочий, если это законно и уместно. Если запрос касается умершего или недееспособного лица, применяются специальные правила и может потребоваться дополнительное подтверждение статуса."
              }
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "15. Безопасность при подаче запроса",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Чтобы снизить риск мошенничества:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "используйте адрес электронной почты, связанный с учётной записью;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверяйте домен отправителя перед переходом по ссылке;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не передавайте пароль OPHIR, Apple, Google или интернет-банка;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не отправляйте полный номер карты, PIN-код или одноразовый код;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "скрывайте лишние финансовые данные на снимках экрана;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "немедленно сообщите на "
                },
                {
                  "type": "emailLink",
                  "text": "support@joinophir.app",
                  "email": "support@joinophir.app"
                },
                {
                  "type": "text",
                  "text": " о подозрительном запросе или несанкционированном доступе."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может направлять необходимые сообщения для проверки, подтверждения удаления и защиты учётной записи, даже если вы отказались от маркетинговых сообщений."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "16. Жалобы и надзорные органы",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы считаете, что запрос обработан неправильно, сначала обратитесь к ответственному за защиту персональной информации OPHIR:"
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
                "text": "Укажите дату первоначального запроса, адрес электронной почты учётной записи, краткое описание проблемы и желаемый результат. Обращение в OPHIR не ограничивает право подать жалобу компетентному органу."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для Квебека:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Commission d’accès à l’information du Québec\n"
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
                "text": "На федеральном уровне, когда применимо:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Office of the Privacy Commissioner of Canada\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.priv.gc.ca",
                "href": "https://www.priv.gc.ca"
              }
            ]
          }
        ]
      },
      {
        "key": "section-17",
        "title": "17. Изменения этого руководства",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может обновлять настоящее руководство при изменении приложения, процедур, поставщиков или законодательства. Обновлённая версия будет содержать новую дату. Существенные изменения могут быть сообщены в приложении, по электронной почте или на сайте, когда это уместно или требуется законом."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Изменение руководства не уменьшает права, которые уже применяются к поданному запросу, и не ограничивает права, от которых нельзя отказаться."
              }
            ]
          }
        ]
      },
      {
        "key": "section-18",
        "title": "18. Контактная информация",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "По вопросам конфиденциальности, удаления аккаунта и прав на данные:"
              }
            ]
          },
          {
            "type": "address",
            "content": [
              {
                "type": "text",
                "text": "Soavinjato Andrianarisoa\nОтветственный за защиту персональной информации OPHIR\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
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
                "text": "Техническая поддержка: "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": "\nОбщие и юридические вопросы: "
              },
              {
                "type": "emailLink",
                "text": "contact@joinophir.app",
                "email": "contact@joinophir.app"
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
                "text": "При обращении не отправляйте пароль интернет-банка, полный номер платёжной карты, PIN-код, код безопасности карты, одноразовый код или иные секретные учётные данные."
              }
            ]
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  AccountDataDocument
>;
