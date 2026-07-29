import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type SupportInlineContent =
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

type SupportBlock =
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "contactCards";
      cards: readonly {
        title: string;
        blocks: readonly SupportBlock[];
      }[];
    }
  | {
      type: "paragraph";
      content: readonly SupportInlineContent[];
    }
  | {
      type: "list";
      items: readonly (readonly SupportInlineContent[])[];
    }
  | {
      type: "address";
      content: readonly SupportInlineContent[];
    };

type SupportSection = {
  key: string;
  title: string;
  blocks: readonly SupportBlock[];
};

type SupportDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  intro: readonly SupportBlock[];
  sections: readonly SupportSection[];
};

export const supportContent = {
  "en": {
    "title": "Contact Support",
    "seoTitle": "Contact Support | OPHIR",
    "description": "Contact OPHIR Support about your account, financial account connections, Plaid, subscriptions, security, and privacy.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "We can help with your OPHIR account, financial account connections, application functionality, subscriptions, and other questions."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "For a faster response, choose the correct contact channel and provide the information needed to review the issue. Never send an online-banking password, full card number, PIN, or one-time code."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section-1",
        "title": "Choose a Request Type",
        "blocks": [
          {
            "type": "contactCards",
            "cards": [
              {
                "title": "Technical Support",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "For questions about:"
                      }
                    ]
                  },
                  {
                    "type": "list",
                    "items": [
                      [
                        {
                          "type": "text",
                          "text": "signing in and account access;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "application functionality;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "connecting or refreshing a financial account;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "Plaid;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "transactions, categories, budgets, and forecasts;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "the financial assistant;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "subscriptions and restoring a purchase;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "suspicious activity or a possible vulnerability."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Email: "
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
                "title": "Privacy and Data",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "For:"
                      }
                    ]
                  },
                  {
                    "type": "list",
                    "items": [
                      [
                        {
                          "type": "text",
                          "text": "account deletion;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "access to or a copy of personal information;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "correction of information;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "deletion of specific information;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "withdrawal of consent;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "questions about automated processing;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "privacy complaints."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Email: "
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
                        "text": "Instructions: "
                      },
                      {
                        "type": "internalLink",
                        "text": "Account Deletion and Data Requests",
                        "page": "accountData"
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
                "title": "General and Legal Inquiries",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "For legal notices, questions about the Terms of Service, business inquiries, and other formal communications:"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Email: "
                      },
                      {
                        "type": "emailLink",
                        "text": "contact@joinophir.app",
                        "email": "contact@joinophir.app"
                      }
                    ]
                  }
                ]
              },
              {
                "title": "General Information",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "For general questions about OPHIR that do not require technical or legal review:"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Email: "
                      },
                      {
                        "type": "emailLink",
                        "text": "hello@joinophir.app",
                        "email": "hello@joinophir.app"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "Quick Solutions",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The answer may already be available:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "general questions about OPHIR and Plaid: "
                },
                {
                  "type": "internalLink",
                  "text": "Frequently Asked Questions",
                  "page": "faq"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "review your plan, renewal date, or restore a purchase: "
                },
                {
                  "type": "internalLink",
                  "text": "Subscription Management",
                  "page": "subscription"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "stop future charges: "
                },
                {
                  "type": "internalLink",
                  "text": "Cancellation and Refunds",
                  "page": "cancellation"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request a refund for a completed charge: "
                },
                {
                  "type": "internalLink",
                  "text": "Cancellation and Refunds",
                  "page": "cancellation"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "delete an account or request a copy of data: "
                },
                {
                  "type": "internalLink",
                  "text": "Account Deletion and Data Requests",
                  "page": "accountData"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "protect an account or report a vulnerability: "
                },
                {
                  "type": "internalLink",
                  "text": "Security",
                  "page": "security"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "learn how information is collected and used: "
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
                  "text": "learn about mobile application and website technologies: "
                },
                {
                  "type": "internalLink",
                  "text": "Application Technologies and Cookies Policy",
                  "page": "appTechnologies"
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
        "key": "section-3",
        "title": "What to Include in a Support Request",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Send your request to the appropriate email address above. Include the following information when relevant."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Request Details"
          },
          {
            "type": "subheading",
            "text": "Request category"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Identify the category that best fits your request:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "sign-in or account access;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "financial account connection or Plaid;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "transactions, balances, or data refresh;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "categories, budget, or forecast;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "financial assistant;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "subscription or paid access;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "cancellation or refund;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "privacy, account deletion, or data request;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "security or suspicious activity;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "application or website accessibility;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "technical error;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "other."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Reply email"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Provide an address where OPHIR can respond. If the request concerns an account, use the address associated with that account where possible."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Platform"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Include Apple/iOS, Android, or the OPHIR website."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Subject"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Briefly identify the issue, for example, \"Transactions are not refreshing\" or \"Subscription is active, but paid features are unavailable.\""
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Description"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Explain:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "what you were trying to do;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "what you expected to see;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "what actually happened;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the error message;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "when the issue started and whether it repeats;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "what troubleshooting steps you already tried."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Technical information"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If known, include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "device model;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "iOS or Android version;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR application version;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "approximate date, time, and time zone of the issue;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "financial institution name without online-banking credentials."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Safe screenshots and receipts"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If needed, send a screenshot or redacted copy of a receipt by email. Before sending it, hide or remove:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "full card or account numbers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "balances and transactions unrelated to the issue;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "your address, date of birth, and document number;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "passwords, PINs, and one-time codes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "another person's personal information."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "Information for a Specific Issue",
        "blocks": [
          {
            "type": "subheading",
            "text": "Financial Account Connection Problem"
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
                  "text": "the financial institution name;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the general account type;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the step where the error appeared;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the exact error text;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "whether you can sign in through the institution's official website or application;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "whether you attempted to reconnect."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not send sign-in credentials. OPHIR may depend on Plaid and the financial institution and cannot bypass their security checks or restrictions."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Balance or Transaction Did Not Refresh"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Identify the account without revealing its number, provide the approximate date of the last successful refresh, and describe the missing or delayed transaction. Redact account numbers and information unrelated to the issue."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Financial institution data may be delayed and is not guaranteed to be available in real time. To confirm available funds for an urgent decision, use the institution's official channel."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Subscription or Paid Features"
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
                  "text": "Apple or Google Play platform;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR account email;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "plan name;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "purchase or charge date;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "order or transaction number from the receipt;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "subscription status shown by the store;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "whether you attempted to restore the purchase."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not send your full card number, Apple Account password, or Google Account password. A store billing question may require contacting the store directly."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Refund Request"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Subscription cancellation and a refund are separate actions. For a completed payment, first use the applicable Apple App Store or Google Play procedure."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If the store directs you to OPHIR, include the order number, date, amount, currency, reason for the request, and the store's response. Learn more on the "
              },
              {
                "type": "internalLink",
                "text": "Cancellation and Refunds page",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Account Deletion or Data Request"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "To delete your account in the application, use:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "inlineCode",
                "text": "Settings -> Account -> Delete Account"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you cannot sign in or the feature is temporarily unavailable, email "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Use the same address for access, correction, deletion, or portability requests."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Remember to cancel an Apple or Google subscription separately before deleting the account."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Security and Urgent Situations",
        "blocks": [
          {
            "type": "subheading",
            "text": "Suspicious Access to OPHIR"
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
                  "text": "close unfamiliar sessions if session management is available;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "review financial account connections;"
                }
              ],
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
                  "text": " from the address associated with the account."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may request reasonable identity verification before changing access or disclosing information."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Suspicious Banking Transaction"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR is not a bank and cannot block a card, freeze a bank account, or reverse a banking transaction. If you do not recognize a transaction or believe banking credentials were compromised, immediately contact the financial institution through its official channel."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "After protecting the bank account, notify OPHIR if the issue may relate to the application or financial connection."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Reporting a Vulnerability"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Email "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": " and include a concise description, the affected feature, application version, and safe reproduction steps."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "access another user's data;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "change or delete another person's information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "disrupt the Service;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "use social engineering;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "publish details before OPHIR has had a reasonable opportunity to investigate and address the issue."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A report does not create a right to compensation. A separate reward program applies only if OPHIR officially publishes one."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "What Happens After You Contact Support",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "After receiving a request, OPHIR may:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "request additional technical information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "request reasonable identity verification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "suggest troubleshooting steps;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "refer the issue to an applicable provider where necessary;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "direct the user to Apple, Google, Plaid, or a financial institution for a matter controlled by that party."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We aim to respond within a reasonable period. Complex technical issues, security reviews, data requests, and matters that depend on a third-party provider may require additional time. Do not send duplicate requests unless you have new and important information."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "Privacy of Support Requests",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR uses information from a support request to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "investigate and resolve the issue;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "respond to the user;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "protect the account and Service;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "prevent fraud and abuse;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "document the request;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "improve the application and support;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "comply with applicable law."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Requests and attachments are processed in accordance with the "
              },
              {
                "type": "internalLink",
                "text": "Privacy Policy",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": ". Provide only the information needed to resolve the issue."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you need an accessible communication format or another reasonable accommodation when communicating with support, identify that need in your request."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "Contact Information",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Technical support and security:"
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
                "text": "Privacy and data requests:"
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
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "strong",
                "text": "General information:"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "hello@joinophir.app",
                "email": "hello@joinophir.app"
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
                "text": "\nSoavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR does not ask you to send an online-banking password, full payment-card number, card security code, PIN, one-time code, or secret key by email."
              }
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Contacter l’assistance",
    "seoTitle": "Contacter l’assistance | OPHIR",
    "description": "Obtenez l’aide d’OPHIR pour votre compte, la connexion de comptes financiers, Plaid, les abonnements, la sécurité et la protection des renseignements personnels.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Nous pouvons vous aider au sujet de votre compte OPHIR, de la connexion de comptes financiers, du fonctionnement de l’application, des abonnements et d’autres questions."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Pour obtenir une réponse plus rapidement, choisissez le canal approprié et fournissez les renseignements nécessaires à l’examen du problème. Ne transmettez jamais un mot de passe de services bancaires en ligne, un numéro complet de carte, un NIP ou un code à usage unique."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section-1",
        "title": "Choisir un type de demande",
        "blocks": [
          {
            "type": "contactCards",
            "cards": [
              {
                "title": "Assistance technique",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Pour les questions concernant :"
                      }
                    ]
                  },
                  {
                    "type": "list",
                    "items": [
                      [
                        {
                          "type": "text",
                          "text": "la connexion et l’accès au compte;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "le fonctionnement de l’application;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "la connexion ou l’actualisation d’un compte financier;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "Plaid;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "les opérations, les catégories, les budgets et les prévisions;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "l’assistant financier;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "les abonnements et la restauration d’un achat;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "une activité suspecte ou une vulnérabilité possible."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Courriel : "
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
                "title": "Protection des renseignements personnels et données",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Pour demander ou signaler :"
                      }
                    ]
                  },
                  {
                    "type": "list",
                    "items": [
                      [
                        {
                          "type": "text",
                          "text": "la suppression d’un compte;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "l’accès à vos renseignements personnels ou une copie de ceux-ci;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "la rectification de renseignements;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "la suppression de renseignements précis;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "le retrait de votre consentement;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "des précisions sur le traitement automatisé;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "une plainte relative à la protection des renseignements personnels."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Courriel : "
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
                        "text": "Instructions : "
                      },
                      {
                        "type": "internalLink",
                        "text": "Suppression du compte et demandes relatives aux données",
                        "page": "accountData"
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
                "title": "Demandes générales et juridiques",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Pour les avis juridiques, les questions concernant les Conditions d’utilisation, les demandes commerciales et les autres communications officielles :"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Courriel : "
                      },
                      {
                        "type": "emailLink",
                        "text": "contact@joinophir.app",
                        "email": "contact@joinophir.app"
                      }
                    ]
                  }
                ]
              },
              {
                "title": "Renseignements généraux",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Pour les questions générales au sujet d’OPHIR qui ne nécessitent pas un examen technique ou juridique :"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Courriel : "
                      },
                      {
                        "type": "emailLink",
                        "text": "hello@joinophir.app",
                        "email": "hello@joinophir.app"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "Solutions rapides",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La réponse est peut-être déjà disponible :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "questions générales au sujet d’OPHIR et de Plaid : "
                },
                {
                  "type": "internalLink",
                  "text": "Questions fréquentes",
                  "page": "faq"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "consulter votre forfait ou sa date de renouvellement, ou restaurer un achat : "
                },
                {
                  "type": "internalLink",
                  "text": "Gérer l’abonnement",
                  "page": "subscription"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "mettre fin aux frais futurs : "
                },
                {
                  "type": "internalLink",
                  "text": "Annulation et remboursements",
                  "page": "cancellation"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander le remboursement d’un paiement effectué : "
                },
                {
                  "type": "internalLink",
                  "text": "Annulation et remboursements",
                  "page": "cancellation"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "supprimer un compte ou demander une copie de données : "
                },
                {
                  "type": "internalLink",
                  "text": "Suppression du compte et demandes relatives aux données",
                  "page": "accountData"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "protéger un compte ou signaler une vulnérabilité : "
                },
                {
                  "type": "internalLink",
                  "text": "Sécurité",
                  "page": "security"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "comprendre comment les renseignements sont recueillis et utilisés : "
                },
                {
                  "type": "internalLink",
                  "text": "Politique de confidentialité",
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
                  "text": "en savoir plus sur les technologies de l’application mobile et du site Web : "
                },
                {
                  "type": "internalLink",
                  "text": "Politique sur les technologies de l’application et les cookies",
                  "page": "appTechnologies"
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
        "key": "section-3",
        "title": "Renseignements à inclure dans une demande d’assistance",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Envoyez votre demande à l’adresse de courriel appropriée ci-dessus. Incluez les renseignements suivants lorsqu’ils sont pertinents."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Détails de la demande"
          },
          {
            "type": "subheading",
            "text": "Catégorie de la demande"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Indiquez la catégorie qui correspond le mieux à votre demande :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "connexion ou accès au compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "connexion d’un compte financier ou Plaid;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "opérations, soldes ou actualisation des données;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "catégories, budget ou prévision;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "assistant financier;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "abonnement ou accès payant;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "annulation ou remboursement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "protection des renseignements personnels, suppression du compte ou demande relative aux données;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sécurité ou activité suspecte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "accessibilité de l’application ou du site Web;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "erreur technique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "autre."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Courriel de réponse"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Indiquez une adresse à laquelle OPHIR peut vous répondre. Si la demande concerne un compte, utilisez si possible l’adresse associée à ce compte."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Plateforme"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Indiquez Apple/iOS, Android ou le site Web d’OPHIR."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Objet"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Décrivez brièvement le problème, par exemple : « Les opérations ne s’actualisent pas » ou « L’abonnement est actif, mais les fonctions payantes ne sont pas accessibles »."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Description"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Précisez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ce que vous tentiez de faire;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ce que vous vous attendiez à voir;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ce qui s’est réellement produit;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le message d’erreur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le moment où le problème a commencé et s’il se répète;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les étapes de dépannage que vous avez déjà essayées."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Renseignements techniques"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous les connaissez, indiquez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le modèle de l’appareil;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la version d’iOS ou d’Android;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la version de l’application OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la date et l’heure approximatives du problème ainsi que le fuseau horaire;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le nom de l’institution financière, sans aucun renseignement de connexion bancaire."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Captures d’écran et reçus sécurisés"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Au besoin, envoyez par courriel une capture d’écran ou une copie d’un reçu dont les renseignements sensibles ont été masqués. Avant de l’envoyer, masquez ou supprimez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "les numéros complets de carte ou de compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les soldes et les opérations sans rapport avec le problème;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "votre adresse, votre date de naissance et le numéro d’une pièce d’identité;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les mots de passe, les NIP et les codes à usage unique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les renseignements personnels d’une autre personne."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "Renseignements à fournir selon le problème",
        "blocks": [
          {
            "type": "subheading",
            "text": "Problème de connexion d’un compte financier"
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
                  "text": "le nom de l’institution financière;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le type général de compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’étape à laquelle l’erreur s’est produite;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le texte exact de l’erreur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "si vous pouvez ouvrir une session dans le site Web ou l’application officielle de l’institution;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "si vous avez tenté de vous reconnecter."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ne transmettez pas vos renseignements de connexion. OPHIR peut dépendre de Plaid et de l’institution financière et ne peut pas contourner leurs contrôles de sécurité ou leurs restrictions."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Le solde ou une opération ne s’est pas actualisé"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Identifiez le compte sans en révéler le numéro, indiquez la date approximative de la dernière actualisation réussie et décrivez l’opération manquante ou retardée. Masquez les numéros de compte et les renseignements sans rapport avec le problème."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les données provenant des institutions financières peuvent être transmises avec retard et leur disponibilité en temps réel n’est pas garantie. Pour confirmer les fonds disponibles en vue d’une décision urgente, utilisez un canal officiel de l’institution."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Abonnement ou fonctions payantes"
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
                  "text": "la plateforme Apple ou Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’adresse de courriel du compte OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le nom du forfait;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la date de l’achat ou du prélèvement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le numéro de commande ou de transaction figurant sur le reçu;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’état de l’abonnement affiché par le magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "si vous avez tenté de restaurer l’achat."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ne transmettez pas le numéro complet de votre carte ni le mot de passe de votre compte Apple ou de votre compte Google. Une question de facturation du magasin peut nécessiter de communiquer directement avec celui-ci."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Demande de remboursement"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L’annulation d’un abonnement et le remboursement sont deux actions distinctes. Pour un paiement déjà effectué, utilisez d’abord la procédure applicable de l’App Store d’Apple ou de Google Play."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si le magasin vous dirige vers OPHIR, indiquez le numéro de commande, la date, le montant, la devise, le motif de la demande et la réponse du magasin. Pour en savoir plus, consultez la page "
              },
              {
                "type": "internalLink",
                "text": "Annulation et remboursements",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Suppression du compte ou demande relative aux données"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour supprimer votre compte dans l’application, utilisez :"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "inlineCode",
                "text": "Paramètres -> Compte -> Supprimer le compte"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous n’arrivez pas à ouvrir une session ou si la fonction est temporairement indisponible, écrivez à "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Utilisez également cette adresse pour les demandes d’accès, de rectification, de suppression ou de portabilité."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "N’oubliez pas d’annuler séparément tout abonnement Apple ou Google avant de supprimer le compte."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Sécurité et situations urgentes",
        "blocks": [
          {
            "type": "subheading",
            "text": "Accès suspect à OPHIR"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "sécurisez le compte de courriel associé à OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "modifiez votre mot de passe OPHIR si cette fonction est disponible;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "fermez les sessions que vous ne reconnaissez pas si la gestion des sessions est disponible;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "examinez les connexions aux comptes financiers;"
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
                  "text": " à partir de l’adresse associée au compte."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut demander une vérification raisonnable de l’identité avant de modifier l’accès ou de communiquer des renseignements."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Opération bancaire suspecte"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR n’est pas une banque et ne peut pas bloquer une carte, geler un compte bancaire ni annuler une opération bancaire. Si vous ne reconnaissez pas une opération ou croyez que vos renseignements de connexion bancaire ont été compromis, communiquez immédiatement avec l’institution financière par l’un de ses canaux officiels."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Après avoir protégé le compte bancaire, informez OPHIR si le problème pourrait être lié à l’application ou à la connexion financière."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Signaler une vulnérabilité"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Écrivez à "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": " et fournissez une brève description, la fonction touchée, la version de l’application et des étapes de reproduction sécuritaires."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ne faites pas ce qui suit :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "accéder aux données d’un autre utilisateur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "modifier ou supprimer les renseignements d’une autre personne;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "perturber le Service;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "recourir à l’ingénierie sociale;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "publier des détails avant qu’OPHIR ait eu une possibilité raisonnable d’enquêter sur le problème et de le corriger."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le signalement ne crée aucun droit à une rémunération. Un programme de récompenses distinct ne s’applique que si OPHIR en publie officiellement un."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "Après l’envoi de la demande",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Après avoir reçu une demande, OPHIR peut :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "demander des renseignements techniques supplémentaires;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "demander une vérification raisonnable de l’identité;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "proposer des étapes de dépannage;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "transmettre le problème à un fournisseur concerné lorsque cela est nécessaire;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "diriger l’utilisateur vers Apple, Google, Plaid ou une institution financière lorsqu’il appartient à cette organisation de traiter la question."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous nous efforçons de répondre dans un délai raisonnable. Les problèmes techniques complexes, les examens de sécurité, les demandes relatives aux données et les questions qui dépendent d’un fournisseur tiers peuvent nécessiter plus de temps. Ne présentez pas plusieurs demandes identiques à moins de disposer de renseignements nouveaux et importants."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "Protection des renseignements contenus dans les demandes d’assistance",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR utilise les renseignements contenus dans une demande d’assistance pour :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "examiner et résoudre le problème;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "répondre à l’utilisateur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "protéger le compte et le Service;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "prévenir la fraude et les abus;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "documenter la demande;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "améliorer l’application et l’assistance;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "respecter le droit applicable."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les demandes et les pièces jointes sont traitées conformément à la "
              },
              {
                "type": "internalLink",
                "text": "Politique de confidentialité",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": ". Fournissez uniquement les renseignements nécessaires pour résoudre le problème."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous avez besoin d’un format de communication accessible ou d’une autre mesure d’adaptation raisonnable pour communiquer avec l’assistance, précisez-le dans votre demande."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "Coordonnées",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Assistance technique et sécurité :"
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
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "strong",
                "text": "Renseignements généraux :"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "hello@joinophir.app",
                "email": "hello@joinophir.app"
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
                "text": "\nSoavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne vous demande pas d’envoyer un mot de passe de services bancaires en ligne, un numéro complet de carte de paiement, un code de sécurité de carte, un NIP, un code à usage unique ou une clé secrète par courriel."
              }
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "Связаться с поддержкой",
    "seoTitle": "Связаться с поддержкой | OPHIR",
    "description": "Поддержка OPHIR по вопросам учётной записи, подключения финансовых счетов, Plaid, подписки, безопасности и конфиденциальности.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Мы поможем с учётной записью OPHIR, подключением финансовых счетов, работой приложения, подпиской и другими вопросами."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Для более быстрого ответа выберите правильный адрес и предоставьте сведения, необходимые для проверки проблемы. Никогда не отправляйте банковский пароль, полный номер карты, PIN-код или одноразовый код."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section-1",
        "title": "Выберите тип обращения",
        "blocks": [
          {
            "type": "contactCards",
            "cards": [
              {
                "title": "Техническая поддержка",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Для вопросов о:"
                      }
                    ]
                  },
                  {
                    "type": "list",
                    "items": [
                      [
                        {
                          "type": "text",
                          "text": "входе и доступе к учётной записи;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "работе приложения;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "подключении или обновлении финансового счёта;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "Plaid;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "операциях, категориях, бюджетах и прогнозах;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "финансовом помощнике;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "подписке и восстановлении покупки;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "подозрительной активности или возможной уязвимости."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Email: "
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
                "title": "Конфиденциальность и данные",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Для:"
                      }
                    ]
                  },
                  {
                    "type": "list",
                    "items": [
                      [
                        {
                          "type": "text",
                          "text": "удаления учётной записи;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "доступа к персональной информации или получения копии;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "исправления данных;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "удаления отдельных сведений;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "отзыва согласия;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "вопросов об автоматизированной обработке;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "жалоб о конфиденциальности."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Email: "
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
                        "text": "Инструкции: "
                      },
                      {
                        "type": "internalLink",
                        "text": "Удаление аккаунта и запросы о данных",
                        "page": "accountData"
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
                "title": "Общие и юридические вопросы",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Для юридических уведомлений, вопросов об Условиях использования, деловых и иных официальных обращений:"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Email: "
                      },
                      {
                        "type": "emailLink",
                        "text": "contact@joinophir.app",
                        "email": "contact@joinophir.app"
                      }
                    ]
                  }
                ]
              },
              {
                "title": "Общая информация",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Для общих вопросов об OPHIR, не требующих технической или юридической проверки:"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Email: "
                      },
                      {
                        "type": "emailLink",
                        "text": "hello@joinophir.app",
                        "email": "hello@joinophir.app"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "Быстрые решения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Возможно, ответ уже готов:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "общие вопросы об OPHIR и Plaid: "
                },
                {
                  "type": "internalLink",
                  "text": "Частые вопросы",
                  "page": "faq"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "просмотр плана, даты продления и восстановление покупки: "
                },
                {
                  "type": "internalLink",
                  "text": "Управление подпиской",
                  "page": "subscription"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "прекращение будущих списаний: "
                },
                {
                  "type": "internalLink",
                  "text": "Отмена подписки и возвраты",
                  "page": "cancellation"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "возврат уже проведённого платежа: "
                },
                {
                  "type": "internalLink",
                  "text": "Отмена подписки и возвраты",
                  "page": "cancellation"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "удаление аккаунта или запрос копии данных: "
                },
                {
                  "type": "internalLink",
                  "text": "Удаление аккаунта и запросы о данных",
                  "page": "accountData"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "защита учётной записи и сообщение об уязвимости: "
                },
                {
                  "type": "internalLink",
                  "text": "Безопасность",
                  "page": "security"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сведения о сборе и использовании данных: "
                },
                {
                  "type": "internalLink",
                  "text": "Политика конфиденциальности",
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
                  "text": "технологии мобильного приложения и сайта: "
                },
                {
                  "type": "internalLink",
                  "text": "Технологии приложения и cookie",
                  "page": "appTechnologies"
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
        "key": "section-3",
        "title": "Что указать в обращении в поддержку",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Отправьте обращение на подходящий адрес электронной почты, указанный выше. Добавьте следующие сведения, если они относятся к вашей ситуации."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Сведения для обращения"
          },
          {
            "type": "subheading",
            "text": "Категория обращения"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Укажите наиболее подходящую категорию:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "вход и учётная запись;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подключение финансового счёта или Plaid;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "операции, остатки или обновление данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "категории, бюджет или прогноз;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "финансовый помощник;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подписка или платный доступ;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отмена или возврат;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "конфиденциальность, удаление аккаунта или запрос о данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "безопасность или подозрительная активность;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "доступность приложения или сайта;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "техническая ошибка;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "другое."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Адрес электронной почты"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Укажите адрес, по которому OPHIR может ответить. Если обращение связано с учётной записью, используйте связанный с ней адрес, когда это возможно."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Платформа"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Укажите Apple/iOS, Android или веб-сайт OPHIR."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Тема"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Кратко опишите проблему, например: «Не обновляются операции» или «Подписка активна, но функции недоступны»."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Описание"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Укажите:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "что вы пытались сделать;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "что ожидали увидеть;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "что произошло фактически;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "текст сообщения об ошибке;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "когда возникла проблема и повторяется ли она;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "какие действия уже выполнялись."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Технические сведения"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если они известны, добавьте:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "модель устройства;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "версию iOS или Android;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "версию приложения OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "приблизительную дату, время и часовой пояс проблемы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "название финансового учреждения без банковских данных для входа."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Безопасные снимки экрана и квитанции"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "При необходимости отправьте по электронной почте снимок экрана или скрытую копию квитанции. Перед отправкой закройте или удалите:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "полный номер карты или счёта;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "остатки и операции, не относящиеся к проблеме;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "адрес, дату рождения и номер документа;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "пароли, PIN-коды и одноразовые коды;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "персональную информацию другого человека."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "Что указать для конкретной проблемы",
        "blocks": [
          {
            "type": "subheading",
            "text": "Проблема с подключением финансового счёта"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Укажите:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "название финансового учреждения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "тип счёта в общих словах;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "этап, на котором появилась ошибка;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "точный текст ошибки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "получилось ли войти через официальный сайт или приложение учреждения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выполнялось ли повторное подключение."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не отправляйте данные для входа. OPHIR может зависеть от Plaid и финансового учреждения и не может обойти их проверку безопасности или ограничения."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Остаток или операция не обновились"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Укажите счёт в обезличенном виде, примерную дату последнего успешного обновления и описание отсутствующей или задержанной операции. Скройте номера счетов и сведения, не относящиеся к проблеме."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Данные финансового учреждения могут поступать с задержкой и не гарантируются в реальном времени. Для срочного подтверждения доступных средств используйте официальный канал учреждения."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Подписка или платные функции"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Укажите:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Apple или Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "адрес учётной записи OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "название плана;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "дату покупки или списания;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "номер заказа или транзакции из квитанции;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отображаемый статус подписки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выполнялось ли восстановление покупки."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не отправляйте полный номер карты, пароль Apple Account или Google Account. По вопросам платежа может потребоваться обращение непосредственно в магазин."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Запрос возврата"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Отмена подписки и возврат являются разными действиями. Для уже проведённого платежа сначала используйте процедуру Apple App Store или Google Play."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если магазин направил вас к OPHIR, приложите номер заказа, дату, сумму, валюту, причину запроса и ответ магазина. Подробнее: "
              },
              {
                "type": "internalLink",
                "text": "Отмена подписки и возвраты",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Удаление аккаунта или запрос о данных"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для удаления аккаунта используйте в приложении:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "inlineCode",
                "text": "Настройки -> Учётная запись -> Удалить аккаунт"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы не можете войти или функция временно недоступна, напишите на "
              },
              {
                "type": "emailLink",
                "text": "privacy@joinophir.app",
                "email": "privacy@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Для доступа, исправления, удаления или переноса данных также используйте этот адрес."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не забудьте отдельно отменить подписку Apple или Google до удаления аккаунта."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Безопасность и срочные ситуации",
        "blocks": [
          {
            "type": "subheading",
            "text": "Подозрительный доступ к OPHIR"
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
                  "text": "измените пароль OPHIR, если функция доступна;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "завершите незнакомые сеансы, если управление сеансами доступно;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверьте финансовые подключения;"
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
                "text": "OPHIR может запросить разумное подтверждение личности до изменения доступа или раскрытия сведений."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Подозрительная банковская операция"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не является банком и не может заблокировать карту, заморозить банковский счёт или отменить банковскую операцию. Если вы не узнаёте операцию или считаете, что банковские данные скомпрометированы, немедленно обратитесь в финансовое учреждение через его официальный канал."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "После защиты банковского счёта сообщите OPHIR, если проблема может быть связана с приложением или финансовым подключением."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Сообщение об уязвимости"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Напишите на "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": " и укажите краткое описание, затронутую функцию, версию приложения и безопасные шаги воспроизведения."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "получайте доступ к данным другого пользователя;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "изменяйте или удаляйте чужую информацию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "нарушайте работу Сервиса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "используйте социальную инженерию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "публикуйте сведения до того, как OPHIR получит разумное время для проверки и устранения проблемы."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сообщение не создаёт права на вознаграждение. Отдельная программа вознаграждений применяется только в случае её официальной публикации OPHIR."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "Что произойдёт после отправки",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "После получения обращения OPHIR может:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "попросить дополнительные технические сведения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "запросить разумное подтверждение личности;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предложить действия по устранению проблемы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "передать вопрос соответствующему поставщику, если это необходимо;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "направить пользователя в Apple, Google, Plaid или финансовое учреждение по вопросу, который контролируется этой стороной."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы стремимся отвечать в разумный срок. Сложные проблемы, проверка безопасности, запросы о данных и вопросы, зависящие от стороннего поставщика, могут потребовать дополнительного времени. Не отправляйте несколько одинаковых обращений, если не появились новые важные сведения."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "Конфиденциальность обращений",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR использует сведения из обращения для:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "проверки и решения проблемы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ответа пользователю;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "защиты учётной записи и Сервиса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предотвращения мошенничества и злоупотреблений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "документирования запроса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "улучшения приложения и поддержки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "соблюдения применимого законодательства."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Обращения и вложения обрабатываются в соответствии с "
              },
              {
                "type": "internalLink",
                "text": "Политикой конфиденциальности",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": ". Предоставляйте только сведения, необходимые для решения вопроса."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вам требуется доступный формат сообщения или иное разумное приспособление для общения с поддержкой, укажите это в обращении."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "Контактная информация",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Техническая поддержка и безопасность:"
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
              },
              {
                "type": "text",
                "text": "\n"
              },
              {
                "type": "strong",
                "text": "Общая информация:"
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "emailLink",
                "text": "hello@joinophir.app",
                "email": "hello@joinophir.app"
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
                "text": "\nSoavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не просит отправлять по электронной почте пароль интернет-банка, полный номер платёжной карты, код безопасности карты, PIN-код, одноразовый код или секретный ключ."
              }
            ]
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  SupportDocument
>;
