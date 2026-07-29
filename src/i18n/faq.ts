import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type FaqInlineContent =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "strong";
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

type FaqBlock =
  | {
      type: "paragraph";
      content: readonly FaqInlineContent[];
    }
  | {
      type: "list";
      items: readonly (readonly FaqInlineContent[])[];
    };

type FaqItem = {
  number: number;
  question: string;
  answer: readonly FaqBlock[];
};

type FaqSection = {
  key: string;
  title: string;
  includeInNavigation?: boolean;
  blocks?: readonly FaqBlock[];
  faqItems?: readonly FaqItem[];
};

type FaqDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  categoryNavigationLabel: string;
  intro: readonly FaqBlock[];
  sections: readonly FaqSection[];
};

export const faqContent = {
  "en": {
    "title": "Frequently Asked Questions",
    "seoTitle": "Frequently Asked Questions | OPHIR",
    "description": "Answers to frequently asked questions about OPHIR, financial account connections, Plaid, subscriptions, security, privacy, and account deletion.",
    "showDescription": false,
    "categoryNavigationLabel": "FAQ categories",
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Find concise answers about OPHIR, financial account connections, the financial assistant, subscriptions, security, and data management."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Could not find your answer? "
          },
          {
            "type": "internalLink",
            "text": "Contact OPHIR Support",
            "page": "support"
          },
          {
            "type": "text",
            "text": " or email "
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
            "text": "This page is provided for convenience and does not replace the "
          },
          {
            "type": "internalLink",
            "text": "Terms of Service",
            "page": "termsOfService"
          },
          {
            "type": "text",
            "text": ", "
          },
          {
            "type": "internalLink",
            "text": "Privacy Policy",
            "page": "privacyPolicy"
          },
          {
            "type": "text",
            "text": ", or information displayed when you purchase a subscription. If there is a conflict, the applicable document, app store terms, and mandatory law govern."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section-1",
        "title": "About OPHIR",
        "faqItems": [
          {
            "number": 1,
            "question": "What is OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR is an application for organizing and analyzing personal and household finances. It may help you review your financial picture, organize transactions, manage budgets and goals, identify recurring expenses, generate forecasts, and receive informational insights."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Available features may depend on the application version, platform, subscription, and connected financial institution."
                  }
                ]
              }
            ]
          },
          {
            "number": 2,
            "question": "Who is OPHIR for?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR is intended for individuals who live in Canada, are at least 18 years old, and have the legal capacity to enter into a contract."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "The Service is intended for personal and household use. Do not create an account for a person who does not meet these requirements."
                  }
                ]
              }
            ]
          },
          {
            "number": 3,
            "question": "Is OPHIR a bank?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "No. OPHIR is not a bank, credit union, investment dealer, or financial institution. OPHIR does not hold user funds or transfer money."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Connected accounts remain serviced by the applicable financial institution."
                  }
                ]
              }
            ]
          },
          {
            "number": 4,
            "question": "Are OPHIR insights financial advice?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "No. Budgets, categories, forecasts, alerts, and financial assistant responses are provided for informational and educational purposes."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "They are not individualized financial, investment, credit, tax, accounting, or legal advice. Before making an important decision, verify the source information and consult a qualified professional where appropriate."
                  }
                ]
              }
            ]
          },
          {
            "number": 5,
            "question": "Do I have to connect a financial account?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "No. You connect an account only if you choose to do so and grant the permission shown during the connection process."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "If manual features are available in your version of OPHIR, you may use them without connecting a financial institution. Some automatic refresh, analysis, and forecasting features may be limited without a connection."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "Account and Access",
        "faqItems": [
          {
            "number": 6,
            "question": "What should I do if I cannot sign in?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "First:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "verify the email address and sign-in method you are using;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "confirm that you have an internet connection;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "update OPHIR and your operating system to a supported version;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "restart the application;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "use an available account or password recovery option;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "check your junk or spam folder if you are expecting an email or code."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "If the problem continues, email "
                  },
                  {
                    "type": "emailLink",
                    "text": "support@joinophir.app",
                    "email": "support@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": " from the address associated with the account. Include the device, operating system version, approximate time of the error, and error text. Do not send your password or one-time code."
                  }
                ]
              }
            ]
          },
          {
            "number": 7,
            "question": "May I share my sign-in credentials with someone else?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "No. Do not share your password, passcode, or one-time code with another person. Sharing credentials increases the risk of unauthorized access and may prevent OPHIR from verifying the account holder."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "If OPHIR offers a family feature, use the access and permissions provided for that feature instead of sharing a password."
                  }
                ]
              }
            ]
          },
          {
            "number": 8,
            "question": "What should I do if I suspect unauthorized access?",
            "answer": [
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
                      "text": "close unfamiliar sessions if the application provides session management;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "review connected financial accounts;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "if necessary, change banking credentials directly through the financial institution;"
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
                      "text": " as soon as possible."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Learn more on the "
                  },
                  {
                    "type": "internalLink",
                    "text": "OPHIR Security page",
                    "page": "security"
                  },
                  {
                    "type": "text",
                    "text": "."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "Financial Account Connections and Plaid",
        "faqItems": [
          {
            "number": 9,
            "question": "What is Plaid, and why does OPHIR use it?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Plaid is an independent financial data connectivity provider. With your permission, OPHIR may use Plaid to establish a connection with a supported financial institution and receive data needed for the features you select."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "During connection, the Plaid or financial institution interface may display the requested data categories and purpose of access."
                  }
                ]
              }
            ]
          },
          {
            "number": 10,
            "question": "Does OPHIR receive my online-banking password?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Unless OPHIR expressly states otherwise, the application does not receive or store your online-banking password. Authentication ordinarily occurs in the Plaid or financial institution interface."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Never enter a banking password, PIN, or one-time code in notes, financial assistant messages, or support requests."
                  }
                ]
              }
            ]
          },
          {
            "number": 11,
            "question": "Which banks and account types can I connect?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Availability depends on Plaid, the financial institution, account type, region, and current connection status. OPHIR does not guarantee support for every bank, credit union, card issuer, investment platform, or account type."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "The connection interface displays the current list. If an institution or account is unavailable, contact support, but do not send online-banking credentials."
                  }
                ]
              }
            ]
          },
          {
            "number": 12,
            "question": "Why will my financial account not connect?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Possible causes include:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "incorrect or changed sign-in credentials;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "additional verification required by the financial institution;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "temporary maintenance by the bank, Plaid, or a network provider;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "an unsupported account type;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "an outdated application version;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "expired permission or required reauthentication;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "a restriction imposed by the financial institution."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Try updating the application, connecting again later, and following the onscreen instructions. If the error continues, tell support the institution name and error text, but do not send your password or one-time code."
                  }
                ]
              }
            ]
          },
          {
            "number": 13,
            "question": "Why is a balance or transaction delayed?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR depends on when the financial institution and connection provider refresh data. Transactions may remain pending, change after settlement, appear later, or use a description supplied by the bank."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR does not guarantee real-time data. For an urgent decision or to confirm available funds, use the financial institution's official channel."
                  }
                ]
              }
            ]
          },
          {
            "number": 14,
            "question": "Why might a transaction category or forecast be inaccurate?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Categories and forecasts use available transaction descriptions, history, and automated rules or models. Incomplete, delayed, or changed data may affect the result."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "If the application allows it, correct the category or source information. Before making a financial decision, compare the result with your bank statement and your own records."
                  }
                ]
              }
            ]
          },
          {
            "number": 15,
            "question": "How do I disconnect a financial account?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Use the available connection controls in OPHIR settings. Depending on the connection, you may also manage access through "
                  },
                  {
                    "type": "externalLink",
                    "text": "Plaid Portal",
                    "href": "https://my.plaid.com"
                  },
                  {
                    "type": "text",
                    "text": " or the financial institution."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Disconnecting ordinarily stops future data refreshes, but it does not necessarily delete information previously received by OPHIR, Plaid, or the financial institution."
                  }
                ]
              }
            ]
          },
          {
            "number": 16,
            "question": "Does disconnecting an account delete previously imported data?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Not necessarily. Disconnecting and deleting data are separate actions."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "To delete data already held by OPHIR, delete your account or submit a separate request. See "
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
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "To manage data independently controlled by Plaid, use Plaid Portal or Plaid's privacy request tools."
                  }
                ]
              }
            ]
          },
          {
            "number": 17,
            "question": "Can I reconnect a disconnected account?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "A supported account can ordinarily be connected again through the application. New authentication and consent may be required."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "The ability to reconnect depends on the financial institution, Plaid, account status, and available OPHIR features."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "Budgets, Forecasts, and the Financial Assistant",
        "faqItems": [
          {
            "number": 18,
            "question": "What can the OPHIR financial assistant do?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Depending on the available version, it may help:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "explain financial information;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "organize transactions and categories;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "identify possible recurring income and expenses;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "create budget summaries;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "estimate future cash flow;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "draw attention to changes and potential risks;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "suggest informational next steps."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "The application displays the features currently available, and those features may change."
                  }
                ]
              }
            ]
          },
          {
            "number": 19,
            "question": "Can the financial assistant be wrong?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Yes. An automated result may be inaccurate, incomplete, outdated, or unsuitable for your situation. It may be affected by source-data quality, delays in financial institution updates, settings, and limitations of the model used."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Verify important amounts, dates, categories, and assumptions. OPHIR does not guarantee a particular financial outcome."
                  }
                ]
              }
            ]
          },
          {
            "number": 20,
            "question": "Does OPHIR make credit or other legally significant decisions?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR does not use the application's informational insights to make a decision on behalf of a bank about credit, insurance, employment, or access to an essential service."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "If you have a question about a significant automated result or want to correct source information, email "
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
            "number": 21,
            "question": "Can OPHIR transfer money or pay bills?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "No, unless a separate payment feature is expressly implemented and disclosed in the application. OPHIR's ordinary features are intended to organize and analyze financial information, not hold or transfer funds."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Never treat a displayed balance as final confirmation that funds are available for an urgent transaction."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Subscriptions, Billing, and Refunds",
        "faqItems": [
          {
            "number": 22,
            "question": "Where do I purchase an OPHIR subscription?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR subscriptions are purchased through the Apple App Store or Google Play. Before you confirm the purchase, the store displays the plan, price, currency, billing period, trial offer, and renewal date."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Apple or Google processes the payment. OPHIR may receive limited purchase confirmation but not your full payment-card number."
                  }
                ]
              }
            ]
          },
          {
            "number": 23,
            "question": "Where can I see my plan, price, and renewal date?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Use the store account that made the purchase:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "Apple: Settings -> your name -> Subscriptions -> OPHIR;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "Google Play: profile -> Payments and subscriptions -> Subscriptions -> OPHIR."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Also review the store receipt. Learn more on the "
                  },
                  {
                    "type": "internalLink",
                    "text": "Subscription Management page",
                    "page": "subscription"
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
            "number": 24,
            "question": "How do I cancel a subscription?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Cancel through the store where you made the purchase:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "externalLink",
                      "text": "official Apple instructions",
                      "href": "https://support.apple.com/en-ca/118428"
                    },
                    {
                      "type": "text",
                      "text": ";"
                    }
                  ],
                  [
                    {
                      "type": "externalLink",
                      "text": "official Google Play instructions",
                      "href": "https://support.google.com/googleplay/answer/7018481"
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
                    "text": "Confirm that the store shows a cancellation confirmation or access end date. Cancellation ordinarily stops future renewal, while access continues until the end of the paid period unless the store or applicable law provides otherwise."
                  }
                ]
              }
            ]
          },
          {
            "number": 25,
            "question": "Does deleting the application or my account cancel the subscription?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "No. Deleting the application, signing out, disconnecting Plaid, or deleting your OPHIR account does not by itself cancel an Apple or Google subscription."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "If you are deleting your account, first cancel the subscription separately through the store and keep the confirmation."
                  }
                ]
              }
            ]
          },
          {
            "number": 26,
            "question": "How do I request a refund?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Cancellation and a refund are separate actions. For a completed payment, use the procedure provided by the store that processed the purchase. Refund availability depends on the purchase channel, timing, reason, store rules, and mandatory law."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "See instructions and contact details on the "
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
              }
            ]
          },
          {
            "number": 27,
            "question": "What should I do if I paid but the paid features did not unlock?",
            "answer": [
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "do not purchase the subscription a second time;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "confirm the subscription status in the Apple App Store or Google Play;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "make sure you are using the same Apple Account or Google Account;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "sign in to the correct OPHIR account;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "update and restart the application;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "use Restore Purchases if that feature is available;"
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
                    "text": "Include the platform, OPHIR account email, plan, purchase date, and order number from the receipt. Redact unnecessary payment information."
                  }
                ]
              }
            ]
          },
          {
            "number": 28,
            "question": "Can I transfer a subscription between Apple and Google?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "App stores ordinarily do not support transferring a purchase between the Apple App Store and Google Play. Do not purchase a second subscription until you have reviewed the first subscription's status and contacted support."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "Privacy and Security",
        "faqItems": [
          {
            "number": 29,
            "question": "What information may OPHIR process?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Depending on the features you use, OPHIR may process:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "account information and settings;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "information you enter;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "authorized data from connected financial accounts;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "budgets, categories, goals, and notes;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "financial assistant prompts and responses if they are retained;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "subscription information;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "technical, diagnostic, and security data;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "support communications."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "See the complete description in the "
                  },
                  {
                    "type": "internalLink",
                    "text": "Privacy Policy",
                    "page": "privacyPolicy"
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
            "number": 30,
            "question": "Does OPHIR sell personal information?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR does not sell or rent personal information. Information may be disclosed to service providers and other recipients only for the described purposes, to the extent necessary, and subject to applicable law."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Plaid, Apple, Google, financial institutions, and other independent services may process certain information under their own policies."
                  }
                ]
              }
            ]
          },
          {
            "number": 31,
            "question": "How does OPHIR protect information?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR applies administrative, organizational, contractual, technical, and physical safeguards appropriate to the sensitivity of the information and the risks. These may include protecting data in transit and at rest, access controls, multi-factor authentication for administrative access, secrets management, logging, monitoring, updates, backups, and incident-response procedures."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "No digital system can guarantee absolute security. Learn more on the "
                  },
                  {
                    "type": "internalLink",
                    "text": "OPHIR Security page",
                    "page": "security"
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
            "number": 32,
            "question": "Does the application use cookies?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "The mobile application does not ordinarily use browser cookies in the same way as a conventional website. For operation and security, it may use tokens, secure local storage, installation identifiers, system permissions, SDKs, security logs, and diagnostics."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR web pages may use strictly necessary cookies or similar technologies. Learn more in the "
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
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "Account Deletion and Data Rights",
        "faqItems": [
          {
            "number": 33,
            "question": "How do I delete my OPHIR account?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "In the application, open Settings -> Account -> Delete Account, review the consequences, and confirm the request."
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
                    "text": " with the subject \"Delete My OPHIR Account.\" Include the account email address, but do not send your password or banking secrets."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Before deletion, separately cancel the subscription and save any information you need. See the complete instructions on the "
                  },
                  {
                    "type": "internalLink",
                    "text": "Account Deletion and Data Requests page",
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
            "number": 34,
            "question": "What data is deleted with my account?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "After confirming a valid request, OPHIR closes the account and deletes or de-identifies active user data under its control in accordance with the applicable retention schedule."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Limited records may be retained where required or permitted by law, including for security, fraud prevention, accounting, disputes, documentation of request completion, or legal claims. Backups are deleted or overwritten during their ordinary cycle."
                  }
                ]
              }
            ]
          },
          {
            "number": 35,
            "question": "How do I obtain a copy of my data or correct information?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
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
                    "text": ". Include your name, account email address, request type, and information that will help locate the records."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR may request reasonable identity verification. Depending on applicable law, you may have rights to access, correction, deletion, withdrawal of consent, information about processing, and portability of certain computerized personal information."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "Support",
        "faqItems": [
          {
            "number": 36,
            "question": "How do I contact OPHIR?",
            "answer": [
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "technical support, access, and subscriptions: "
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
                      "text": "privacy, account deletion, and data requests: "
                    },
                    {
                      "type": "emailLink",
                      "text": "privacy@joinophir.app",
                      "email": "privacy@joinophir.app"
                    },
                    {
                      "type": "text",
                      "text": ";"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "general and legal inquiries: "
                    },
                    {
                      "type": "emailLink",
                      "text": "contact@joinophir.app",
                      "email": "contact@joinophir.app"
                    },
                    {
                      "type": "text",
                      "text": ";"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "general information: "
                    },
                    {
                      "type": "emailLink",
                      "text": "hello@joinophir.app",
                      "email": "hello@joinophir.app"
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
                    "text": "Mailing address: Soavinjato Andrianarisoa, 1203 Rue Normont, Laval, Québec H7G 3H3, Canada."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Include the OPHIR account email, platform, device, application version, time of the problem, error text, and troubleshooting steps already taken. If needed, attach a screenshot with personal and payment information redacted."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Never send an online-banking password, Apple or Google password, full card number, card security code, PIN, one-time code, or another secret."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "internalLink",
                    "text": "Contact Support",
                    "page": "support"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "related-pages",
        "title": "Related Pages",
        "includeInNavigation": false,
        "blocks": [
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "internalLink",
                  "text": "Contact Support",
                  "page": "support"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Subscription Management",
                  "page": "subscription"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Cancellation and Refunds",
                  "page": "cancellation"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Account Deletion and Data Requests",
                  "page": "accountData"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Security",
                  "page": "security"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Privacy Policy",
                  "page": "privacyPolicy"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Terms of Service",
                  "page": "termsOfService"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Application Technologies and Cookies Policy",
                  "page": "appTechnologies"
                }
              ]
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Questions fréquentes",
    "seoTitle": "Questions fréquentes | OPHIR",
    "description": "Réponses aux questions fréquentes sur OPHIR, la connexion de comptes financiers, Plaid, les abonnements, la sécurité, la protection des renseignements personnels et la suppression du compte.",
    "showDescription": false,
    "categoryNavigationLabel": "Catégories de FAQ",
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Vous trouverez ici des réponses concises au sujet d’OPHIR, de la connexion de comptes financiers, de l’assistant financier, des abonnements, de la sécurité et de la gestion des données."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Vous n’avez pas trouvé la réponse à votre question? "
          },
          {
            "type": "internalLink",
            "text": "Contactez l’assistance OPHIR",
            "page": "support"
          },
          {
            "type": "text",
            "text": " ou écrivez à "
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
            "text": "Cette page est fournie à titre pratique et ne remplace pas les "
          },
          {
            "type": "internalLink",
            "text": "Conditions d’utilisation",
            "page": "termsOfService"
          },
          {
            "type": "text",
            "text": ", la "
          },
          {
            "type": "internalLink",
            "text": "Politique de confidentialité",
            "page": "privacyPolicy"
          },
          {
            "type": "text",
            "text": " ni les renseignements présentés lors de l’achat d’un abonnement. En cas de contradiction, le document applicable, les conditions du magasin d’applications et les dispositions impératives de la loi prévalent."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section-1",
        "title": "À propos d’OPHIR",
        "faqItems": [
          {
            "number": 1,
            "question": "Qu’est-ce qu’OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR est une application qui permet d’organiser et d’analyser les finances personnelles et familiales. Elle peut vous aider à examiner votre situation financière, à organiser vos opérations, à gérer vos budgets et vos objectifs, à repérer les dépenses récurrentes, à produire des prévisions et à recevoir des observations informatives."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Les fonctions disponibles peuvent varier selon la version de l’application, la plateforme, l’abonnement et l’institution financière connectée."
                  }
                ]
              }
            ]
          },
          {
            "number": 2,
            "question": "À qui s’adresse OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR s’adresse aux personnes qui résident au Canada, qui ont au moins 18 ans et qui ont la capacité juridique de conclure un contrat."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Le Service est destiné à un usage personnel et familial. Ne créez pas de compte pour une personne qui ne satisfait pas à ces exigences."
                  }
                ]
              }
            ]
          },
          {
            "number": 3,
            "question": "OPHIR est-il une banque?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Non. OPHIR n’est ni une banque, ni une caisse populaire, ni un courtier en valeurs mobilières, ni une institution financière. OPHIR ne détient pas les fonds des utilisateurs et n’effectue pas de transferts de fonds."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Les comptes connectés continuent d’être administrés par l’institution financière concernée."
                  }
                ]
              }
            ]
          },
          {
            "number": 4,
            "question": "Les observations d’OPHIR constituent-elles des conseils financiers?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Non. Les budgets, les catégories, les prévisions, les alertes et les réponses de l’assistant financier sont fournis à des fins d’information et d’éducation."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Ils ne constituent pas des conseils personnalisés en matière de finances, de placements, de crédit, de fiscalité, de comptabilité ou de droit. Avant de prendre une décision importante, vérifiez les renseignements à la source et consultez un professionnel qualifié lorsque la situation l’exige."
                  }
                ]
              }
            ]
          },
          {
            "number": 5,
            "question": "Dois-je connecter un compte financier?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Non. Vous connectez un compte uniquement si vous choisissez de le faire et accordez l’autorisation présentée pendant le processus de connexion."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Si des fonctions de saisie manuelle sont offertes dans votre version d’OPHIR, vous pouvez les utiliser sans connecter une institution financière. Certaines fonctions d’actualisation automatique, d’analyse et de prévision peuvent être limitées sans connexion."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "Compte et accès",
        "faqItems": [
          {
            "number": 6,
            "question": "Que dois-je faire si je n’arrive pas à ouvrir une session?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Commencez par effectuer les vérifications suivantes :"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "vérifiez l’adresse de courriel et la méthode de connexion utilisées;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "confirmez que vous disposez d’une connexion Internet;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "mettez à jour OPHIR et votre système d’exploitation vers une version prise en charge;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "redémarrez l’application;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "utilisez une option disponible de récupération de compte ou de mot de passe;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "vérifiez votre dossier de courrier indésirable si vous attendez un courriel ou un code."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Si le problème persiste, écrivez à "
                  },
                  {
                    "type": "emailLink",
                    "text": "support@joinophir.app",
                    "email": "support@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": " à partir de l’adresse associée au compte. Indiquez l’appareil, la version du système d’exploitation, l’heure approximative de l’erreur et le texte de l’erreur. Ne transmettez pas votre mot de passe ni votre code à usage unique."
                  }
                ]
              }
            ]
          },
          {
            "number": 7,
            "question": "Puis-je communiquer mes renseignements de connexion à une autre personne?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Non. Ne communiquez à personne votre mot de passe, votre code d’accès ou votre code à usage unique. Le partage des renseignements de connexion augmente le risque d’accès non autorisé et peut empêcher OPHIR de vérifier le titulaire du compte."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Si OPHIR offre une fonction familiale, utilisez les accès et les autorisations prévus pour cette fonction plutôt que de partager un mot de passe."
                  }
                ]
              }
            ]
          },
          {
            "number": 8,
            "question": "Que dois-je faire si je soupçonne un accès non autorisé?",
            "answer": [
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
                      "text": "fermez les sessions que vous ne reconnaissez pas si l’application permet de gérer les sessions;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "examinez les comptes financiers connectés;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "au besoin, modifiez vos renseignements de connexion bancaire directement auprès de l’institution financière;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "communiquez avec "
                    },
                    {
                      "type": "emailLink",
                      "text": "support@joinophir.app",
                      "email": "support@joinophir.app"
                    },
                    {
                      "type": "text",
                      "text": " dès que possible."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Pour en savoir plus, consultez la page "
                  },
                  {
                    "type": "internalLink",
                    "text": "Sécurité d’OPHIR",
                    "page": "security"
                  },
                  {
                    "type": "text",
                    "text": "."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "Connexion de comptes financiers et Plaid",
        "faqItems": [
          {
            "number": 9,
            "question": "Qu’est-ce que Plaid et pourquoi OPHIR l’utilise-t-il?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Plaid est un fournisseur indépendant de technologies de connectivité de données financières. Avec votre autorisation, OPHIR peut faire appel à Plaid pour établir une connexion avec une institution financière prise en charge et recevoir les données nécessaires aux fonctions que vous choisissez."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Pendant la connexion, l’interface de Plaid ou de l’institution financière peut afficher les catégories de données demandées et la raison de l’accès."
                  }
                ]
              }
            ]
          },
          {
            "number": 10,
            "question": "OPHIR reçoit-il mon mot de passe de services bancaires en ligne?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Sauf indication expresse contraire d’OPHIR, l’application ne reçoit ni ne conserve votre mot de passe de services bancaires en ligne. L’authentification s’effectue habituellement dans l’interface de Plaid ou de l’institution financière."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "N’inscrivez jamais un mot de passe bancaire, un NIP ou un code à usage unique dans vos notes, vos messages destinés à l’assistant financier ou vos demandes d’assistance."
                  }
                ]
              }
            ]
          },
          {
            "number": 11,
            "question": "Quelles banques et quels types de comptes puis-je connecter?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "La disponibilité dépend de Plaid, de l’institution financière, du type de compte, de la région et de l’état actuel de la connexion. OPHIR ne garantit pas la prise en charge de chaque banque, caisse populaire, émetteur de cartes, plateforme de placement ou type de compte."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "L’interface de connexion affiche la liste à jour. Si une institution ou un compte n’est pas disponible, communiquez avec l’assistance, mais ne transmettez aucun renseignement de connexion bancaire."
                  }
                ]
              }
            ]
          },
          {
            "number": 12,
            "question": "Pourquoi mon compte financier ne se connecte-t-il pas?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Les causes possibles comprennent :"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "des renseignements de connexion incorrects ou modifiés;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "une vérification supplémentaire exigée par l’institution financière;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "une maintenance temporaire effectuée par la banque, Plaid ou un fournisseur de réseau;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "un type de compte non pris en charge;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "une version désuète de l’application;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "une autorisation expirée ou une nouvelle authentification requise;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "une restriction imposée par l’institution financière."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Essayez de mettre l’application à jour, de vous reconnecter plus tard et de suivre les instructions à l’écran. Si l’erreur persiste, indiquez à l’assistance le nom de l’institution et le texte de l’erreur, mais ne transmettez pas votre mot de passe ni votre code à usage unique."
                  }
                ]
              }
            ]
          },
          {
            "number": 13,
            "question": "Pourquoi le solde ou une opération s’affiche-t-il avec retard?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR dépend du moment où l’institution financière et le fournisseur de connexion actualisent les données. Une opération peut rester en attente, changer après son règlement, apparaître plus tard ou utiliser une description fournie par la banque."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR ne garantit pas la transmission des données en temps réel. Pour prendre une décision urgente ou confirmer les fonds disponibles, utilisez un canal officiel de l’institution financière."
                  }
                ]
              }
            ]
          },
          {
            "number": 14,
            "question": "Pourquoi une catégorie d’opération ou une prévision peut-elle être inexacte?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Les catégories et les prévisions utilisent les descriptions d’opérations disponibles, l’historique ainsi que des règles ou des modèles automatisés. Des données incomplètes, retardées ou modifiées peuvent influer sur le résultat."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Si l’application le permet, corrigez la catégorie ou les renseignements à la source. Avant de prendre une décision financière, comparez le résultat avec votre relevé bancaire et vos propres dossiers."
                  }
                ]
              }
            ]
          },
          {
            "number": 15,
            "question": "Comment puis-je déconnecter un compte financier?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Utilisez les commandes de connexion disponibles dans les paramètres d’OPHIR. Selon le type de connexion, vous pouvez également gérer l’accès au moyen du "
                  },
                  {
                    "type": "externalLink",
                    "text": "portail Plaid",
                    "href": "https://my.plaid.com"
                  },
                  {
                    "type": "text",
                    "text": " ou auprès de l’institution financière."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "La déconnexion met habituellement fin aux actualisations futures des données, mais elle ne supprime pas nécessairement les renseignements déjà reçus par OPHIR, Plaid ou l’institution financière."
                  }
                ]
              }
            ]
          },
          {
            "number": 16,
            "question": "La déconnexion d’un compte supprime-t-elle les données déjà importées?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Pas nécessairement. La déconnexion et la suppression des données sont deux actions distinctes."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Pour supprimer des données déjà détenues par OPHIR, supprimez votre compte ou présentez une demande distincte. Consultez la page "
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
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Pour gérer les données contrôlées séparément par Plaid, utilisez le portail Plaid ou les outils de demande relatifs à la vie privée de Plaid."
                  }
                ]
              }
            ]
          },
          {
            "number": 17,
            "question": "Puis-je reconnecter un compte déconnecté?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Un compte pris en charge peut habituellement être reconnecté à partir de l’application. Une nouvelle authentification et un nouveau consentement peuvent être nécessaires."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "La possibilité de se reconnecter dépend de l’institution financière, de Plaid, de l’état du compte et des fonctions d’OPHIR disponibles."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "Budgets, prévisions et assistant financier",
        "faqItems": [
          {
            "number": 18,
            "question": "Que peut faire l’assistant financier d’OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Selon la version disponible, il peut vous aider à :"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "expliquer des renseignements financiers;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "organiser les opérations et les catégories;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "repérer les revenus et les dépenses qui pourraient être récurrents;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "produire des sommaires budgétaires;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "estimer les flux de trésorerie futurs;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "attirer votre attention sur des changements et des risques possibles;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "proposer des prochaines étapes à titre informatif."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "L’application affiche les fonctions offertes à ce moment, et celles-ci peuvent changer."
                  }
                ]
              }
            ]
          },
          {
            "number": 19,
            "question": "L’assistant financier peut-il se tromper?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Oui. Un résultat automatisé peut être inexact, incomplet, désuet ou inadapté à votre situation. Il peut être influencé par la qualité des données à la source, les retards de mise à jour des institutions financières, les paramètres et les limites du modèle utilisé."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Vérifiez les montants, les dates, les catégories et les hypothèses qui sont importants. OPHIR ne garantit aucun résultat financier particulier."
                  }
                ]
              }
            ]
          },
          {
            "number": 20,
            "question": "OPHIR prend-il des décisions de crédit ou d’autres décisions ayant un effet juridique important?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR n’utilise pas les observations informatives de l’application pour prendre, au nom d’une banque, une décision concernant le crédit, l’assurance, l’emploi ou l’accès à un service essentiel."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Si vous avez une question au sujet d’un résultat automatisé important ou souhaitez corriger les renseignements à la source, écrivez à "
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
            "number": 21,
            "question": "OPHIR peut-il transférer de l’argent ou payer des factures?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Non, sauf si une fonction de paiement distincte est expressément mise en œuvre et présentée dans l’application. Les fonctions habituelles d’OPHIR servent à organiser et à analyser des renseignements financiers, et non à détenir ou à transférer des fonds."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Ne considérez jamais un solde affiché comme la confirmation définitive que des fonds sont disponibles pour une opération urgente."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Abonnements, facturation et remboursements",
        "faqItems": [
          {
            "number": 22,
            "question": "Où puis-je acheter un abonnement OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Les abonnements OPHIR sont achetés dans l’App Store d’Apple ou sur Google Play. Avant de confirmer l’achat, le magasin affiche le forfait, le prix, la devise, la période de facturation, l’offre d’essai et la date de renouvellement."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Apple ou Google traite le paiement. OPHIR peut recevoir une confirmation limitée de l’achat, mais pas le numéro complet de votre carte de paiement."
                  }
                ]
              }
            ]
          },
          {
            "number": 23,
            "question": "Où puis-je consulter mon forfait, son prix et sa date de renouvellement?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Utilisez le compte du magasin avec lequel l’achat a été effectué :"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "Apple : Réglages -> votre nom -> Abonnements -> OPHIR;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "Google Play : profil -> Paiements et abonnements -> Abonnements -> OPHIR."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Consultez également le reçu du magasin. Pour en savoir plus, consultez la page "
                  },
                  {
                    "type": "internalLink",
                    "text": "Gérer l’abonnement",
                    "page": "subscription"
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
            "number": 24,
            "question": "Comment puis-je annuler un abonnement?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Annulez-le dans le magasin où l’achat a été effectué :"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "externalLink",
                      "text": "instructions officielles d’Apple",
                      "href": "https://support.apple.com/en-ca/118428"
                    },
                    {
                      "type": "text",
                      "text": ";"
                    }
                  ],
                  [
                    {
                      "type": "externalLink",
                      "text": "instructions officielles de Google Play",
                      "href": "https://support.google.com/googleplay/answer/7018481"
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
                    "text": "Vérifiez que le magasin affiche une confirmation d’annulation ou une date de fin d’accès. L’annulation met habituellement fin au renouvellement futur, tandis que l’accès se poursuit jusqu’à la fin de la période payée, sauf indication contraire du magasin ou du droit applicable."
                  }
                ]
              }
            ]
          },
          {
            "number": 25,
            "question": "La suppression de l’application ou de mon compte annule-t-elle l’abonnement?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Non. La suppression de l’application, la fermeture de session, la déconnexion de Plaid ou la suppression de votre compte OPHIR n’annule pas à elle seule un abonnement Apple ou Google."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Si vous supprimez votre compte, annulez d’abord l’abonnement séparément dans le magasin et conservez la confirmation."
                  }
                ]
              }
            ]
          },
          {
            "number": 26,
            "question": "Comment puis-je demander un remboursement?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "L’annulation et le remboursement sont deux actions distinctes. Pour un paiement déjà effectué, utilisez la procédure du magasin qui a traité l’achat. La possibilité d’obtenir un remboursement dépend du canal d’achat, du délai, du motif, des règles du magasin et des dispositions impératives de la loi."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Consultez les instructions et les coordonnées à la page "
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
              }
            ]
          },
          {
            "number": 27,
            "question": "Que dois-je faire si j’ai payé, mais que les fonctions payantes ne sont pas accessibles?",
            "answer": [
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "n’achetez pas l’abonnement une deuxième fois;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "vérifiez l’état de l’abonnement dans l’App Store d’Apple ou Google Play;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "assurez-vous d’utiliser le même compte Apple ou le même compte Google;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "ouvrez une session dans le bon compte OPHIR;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "mettez l’application à jour et redémarrez-la;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "utilisez la fonction Restaurer les achats si elle est disponible;"
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
                    "text": "Indiquez la plateforme, l’adresse de courriel du compte OPHIR, le forfait, la date d’achat et le numéro de commande figurant sur le reçu. Masquez les renseignements de paiement qui ne sont pas nécessaires."
                  }
                ]
              }
            ]
          },
          {
            "number": 28,
            "question": "Puis-je transférer un abonnement entre Apple et Google?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Les magasins d’applications ne permettent généralement pas de transférer un achat entre l’App Store d’Apple et Google Play. N’achetez pas un deuxième abonnement avant d’avoir vérifié l’état du premier et communiqué avec l’assistance."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "Protection des renseignements personnels et sécurité",
        "faqItems": [
          {
            "number": 29,
            "question": "Quels renseignements OPHIR peut-il traiter?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Selon les fonctions que vous utilisez, OPHIR peut traiter :"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "les renseignements et les paramètres du compte;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "les renseignements que vous saisissez;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "les données autorisées provenant des comptes financiers connectés;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "les budgets, les catégories, les objectifs et les notes;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "les demandes adressées à l’assistant financier et ses réponses, si elles sont conservées;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "les renseignements relatifs à l’abonnement;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "les données techniques, diagnostiques et de sécurité;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "les communications avec l’assistance."
                    }
                  ]
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
                    "text": "Politique de confidentialité",
                    "page": "privacyPolicy"
                  },
                  {
                    "type": "text",
                    "text": " contient la description complète."
                  }
                ]
              }
            ]
          },
          {
            "number": 30,
            "question": "OPHIR vend-il des renseignements personnels?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR ne vend ni ne loue de renseignements personnels. Des renseignements peuvent être communiqués à des fournisseurs de services et à d’autres destinataires uniquement aux fins décrites, dans la mesure nécessaire et sous réserve du droit applicable."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Plaid, Apple, Google, les institutions financières et d’autres services indépendants peuvent traiter certains renseignements conformément à leurs propres politiques."
                  }
                ]
              }
            ]
          },
          {
            "number": 31,
            "question": "Comment OPHIR protège-t-il les renseignements?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR applique des mesures de protection administratives, organisationnelles, contractuelles, techniques et physiques adaptées à la sensibilité des renseignements et aux risques. Elles peuvent comprendre la protection des données en transit et au repos, des contrôles d’accès, l’authentification multifacteur pour les accès administratifs, la gestion des secrets, la journalisation, la surveillance, les mises à jour, les sauvegardes et des procédures d’intervention en cas d’incident."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Aucun système numérique ne peut garantir une sécurité absolue. Pour en savoir plus, consultez la page "
                  },
                  {
                    "type": "internalLink",
                    "text": "Sécurité d’OPHIR",
                    "page": "security"
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
            "number": 32,
            "question": "L’application utilise-t-elle des cookies?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "L’application mobile n’utilise habituellement pas les cookies de navigateur de la même manière qu’un site Web conventionnel. Pour son fonctionnement et sa sécurité, elle peut utiliser des jetons, un stockage local sécurisé, des identifiants d’installation, des autorisations système, des trousses de développement logiciel (SDK), des journaux de sécurité et des données diagnostiques."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Les pages Web d’OPHIR peuvent utiliser des cookies strictement nécessaires ou des technologies semblables. Pour en savoir plus, consultez la "
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
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "Suppression du compte et droits relatifs aux données",
        "faqItems": [
          {
            "number": 33,
            "question": "Comment puis-je supprimer mon compte OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Dans l’application, ouvrez Paramètres -> Compte -> Supprimer le compte, prenez connaissance des conséquences et confirmez la demande."
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
                    "text": " avec l’objet « Supprimer mon compte OPHIR ». Indiquez l’adresse de courriel du compte, mais ne transmettez pas votre mot de passe ni vos renseignements bancaires confidentiels."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Avant la suppression, annulez séparément l’abonnement et enregistrez les renseignements dont vous avez besoin. Consultez les instructions complètes à la page "
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
            "number": 34,
            "question": "Quelles données sont supprimées avec mon compte?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Après la confirmation d’une demande valide, OPHIR ferme le compte et supprime ou dépersonnalise les données actives de l’utilisateur qui relèvent de son contrôle, conformément au calendrier de conservation applicable."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Certains documents peuvent être conservés lorsque la loi l’exige ou le permet, notamment pour assurer la sécurité, prévenir la fraude, tenir la comptabilité, régler les différends, documenter l’exécution d’une demande ou traiter des réclamations juridiques. Les sauvegardes sont supprimées ou écrasées selon leur cycle normal."
                  }
                ]
              }
            ]
          },
          {
            "number": 35,
            "question": "Comment puis-je obtenir une copie de mes données ou faire corriger des renseignements?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
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
                    "text": ". Indiquez votre nom, l’adresse de courriel du compte, le type de demande et les renseignements qui aideront à trouver les documents."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR peut demander une vérification raisonnable de l’identité. Selon le droit applicable, vous pouvez avoir des droits d’accès, de rectification et de suppression, ainsi que des droits relatifs au retrait du consentement, aux renseignements sur le traitement et à la portabilité de certains renseignements personnels informatisés."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "Assistance",
        "faqItems": [
          {
            "number": 36,
            "question": "Comment puis-je communiquer avec OPHIR?",
            "answer": [
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "assistance technique, accès et abonnements : "
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
                      "text": "protection des renseignements personnels, suppression du compte et demandes relatives aux données : "
                    },
                    {
                      "type": "emailLink",
                      "text": "privacy@joinophir.app",
                      "email": "privacy@joinophir.app"
                    },
                    {
                      "type": "text",
                      "text": ";"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "demandes générales et juridiques : "
                    },
                    {
                      "type": "emailLink",
                      "text": "contact@joinophir.app",
                      "email": "contact@joinophir.app"
                    },
                    {
                      "type": "text",
                      "text": ";"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "renseignements généraux : "
                    },
                    {
                      "type": "emailLink",
                      "text": "hello@joinophir.app",
                      "email": "hello@joinophir.app"
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
                    "text": "Adresse postale : Soavinjato Andrianarisoa, 1203 Rue Normont, Laval, Québec H7G 3H3, Canada."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Indiquez l’adresse de courriel du compte OPHIR, la plateforme, l’appareil, la version de l’application, l’heure du problème, le texte de l’erreur et les étapes de dépannage déjà essayées. Au besoin, joignez une capture d’écran après avoir masqué les renseignements personnels et de paiement."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Ne transmettez jamais un mot de passe de services bancaires en ligne, un mot de passe Apple ou Google, un numéro complet de carte, un code de sécurité de carte, un NIP, un code à usage unique ou tout autre secret."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "internalLink",
                    "text": "Contacter l’assistance",
                    "page": "support"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "related-pages",
        "title": "Pages connexes",
        "includeInNavigation": false,
        "blocks": [
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "internalLink",
                  "text": "Contacter l’assistance",
                  "page": "support"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Gérer l’abonnement",
                  "page": "subscription"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Annulation et remboursements",
                  "page": "cancellation"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Suppression du compte et demandes relatives aux données",
                  "page": "accountData"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Sécurité",
                  "page": "security"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Politique de confidentialité",
                  "page": "privacyPolicy"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Conditions d’utilisation",
                  "page": "termsOfService"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Politique sur les technologies de l’application et les cookies",
                  "page": "appTechnologies"
                }
              ]
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "Частые вопросы",
    "seoTitle": "Частые вопросы | OPHIR",
    "description": "Ответы на частые вопросы об OPHIR, подключении финансовых счетов, Plaid, подписке, безопасности, конфиденциальности и удалении аккаунта.",
    "showDescription": false,
    "categoryNavigationLabel": "Категории FAQ",
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Здесь собраны краткие ответы об OPHIR, подключении финансовых счетов, работе финансового помощника, подписке, безопасности и управлении данными."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Не нашли ответ? "
          },
          {
            "type": "internalLink",
            "text": "Свяжитесь с поддержкой OPHIR",
            "page": "support"
          },
          {
            "type": "text",
            "text": " или напишите на "
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
            "text": "Эта страница подготовлена для удобства и не заменяет "
          },
          {
            "type": "internalLink",
            "text": "Условия использования",
            "page": "termsOfService"
          },
          {
            "type": "text",
            "text": ", "
          },
          {
            "type": "internalLink",
            "text": "Политику конфиденциальности",
            "page": "privacyPolicy"
          },
          {
            "type": "text",
            "text": " и сведения, показанные при покупке подписки. При противоречии применяются соответствующий документ, условия магазина приложений и обязательное законодательство."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section-1",
        "title": "Об OPHIR",
        "faqItems": [
          {
            "number": 1,
            "question": "Что такое OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR - приложение для организации и анализа личных и семейно-бытовых финансов. Оно может помогать просматривать финансовую картину, организовывать операции, вести бюджеты и цели, выявлять регулярные расходы, формировать прогнозы и получать информационные подсказки."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Доступные функции могут зависеть от версии приложения, платформы, подписки и подключённого финансового учреждения."
                  }
                ]
              }
            ]
          },
          {
            "number": 2,
            "question": "Для кого предназначен OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR предназначен для физических лиц, проживающих в Канаде, достигших 18 лет и обладающих законной возможностью заключать договоры."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Сервис рассчитан на личное и семейно-бытовое использование. Не создавайте учётную запись для лица, которое не соответствует этим требованиям."
                  }
                ]
              }
            ]
          },
          {
            "number": 3,
            "question": "Является ли OPHIR банком?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Нет. OPHIR не является банком, кредитным союзом, инвестиционным дилером или финансовым учреждением. OPHIR не хранит денежные средства пользователей и не выполняет их перевод."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Подключённые счета продолжают обслуживаться соответствующим финансовым учреждением."
                  }
                ]
              }
            ]
          },
          {
            "number": 4,
            "question": "Являются ли подсказки OPHIR финансовой консультацией?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Нет. Бюджеты, категории, прогнозы, предупреждения и ответы финансового помощника предоставляются в информационных и образовательных целях."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Они не являются индивидуальной финансовой, инвестиционной, кредитной, налоговой, бухгалтерской или юридической консультацией. Перед важным решением проверьте исходные данные и при необходимости обратитесь к квалифицированному специалисту."
                  }
                ]
              }
            ]
          },
          {
            "number": 5,
            "question": "Обязательно ли подключать финансовый счёт?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Нет. Подключение счёта выполняется только по вашему выбору и с разрешения, показанного во время подключения."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Если в вашей версии OPHIR доступны ручные функции, ими можно пользоваться без подключения финансового учреждения. Некоторые возможности автоматического обновления, анализа и прогнозирования без подключения могут быть ограничены."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "Учётная запись и доступ",
        "faqItems": [
          {
            "number": 6,
            "question": "Что делать, если я не могу войти?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Сначала:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "проверьте адрес электронной почты и используемый способ входа;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "убедитесь, что есть подключение к интернету;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "обновите OPHIR и операционную систему до поддерживаемой версии;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "перезапустите приложение;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "используйте доступную функцию восстановления доступа или пароля;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "проверьте папку нежелательной почты, если ожидаете письмо или код."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Если проблема сохраняется, напишите на "
                  },
                  {
                    "type": "emailLink",
                    "text": "support@joinophir.app",
                    "email": "support@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": " с адреса, связанного с учётной записью. Укажите устройство, версию операционной системы, примерное время ошибки и её текст. Не отправляйте пароль или одноразовый код."
                  }
                ]
              }
            ]
          },
          {
            "number": 7,
            "question": "Можно ли передавать другому человеку свои данные для входа?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Нет. Не передавайте пароль, код доступа или одноразовый код другому человеку. Совместное использование учётных данных повышает риск несанкционированного доступа и может помешать OPHIR проверить владельца учётной записи."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Если OPHIR предлагает семейную функцию, используйте предусмотренный для неё способ доступа и разрешений, а не общий пароль."
                  }
                ]
              }
            ]
          },
          {
            "number": 8,
            "question": "Что делать, если я подозреваю несанкционированный доступ?",
            "answer": [
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
                      "text": "измените пароль OPHIR, если такая функция доступна;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "завершите незнакомые сеансы, если приложение показывает управление сеансами;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "проверьте подключённые финансовые счета;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "при необходимости измените банковские данные непосредственно в финансовом учреждении;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "как можно скорее напишите на "
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
                    "text": "Подробнее: "
                  },
                  {
                    "type": "internalLink",
                    "text": "Безопасность OPHIR",
                    "page": "security"
                  },
                  {
                    "type": "text",
                    "text": "."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "Подключение финансовых счетов и Plaid",
        "faqItems": [
          {
            "number": 9,
            "question": "Что такое Plaid и зачем он нужен OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Plaid - независимый поставщик технологии подключения финансовых счетов. OPHIR может использовать Plaid, чтобы по вашему разрешению установить соединение с поддерживаемым финансовым учреждением и получить данные, необходимые для выбранных функций."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Во время подключения интерфейс Plaid или финансового учреждения может показать запрашиваемые категории данных и цель доступа."
                  }
                ]
              }
            ]
          },
          {
            "number": 10,
            "question": "Получает ли OPHIR пароль от интернет-банка?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Если OPHIR прямо не сообщает иное, приложение не получает и не хранит ваш пароль интернет-банка. Аутентификация обычно выполняется в интерфейсе Plaid или финансового учреждения."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Никогда не вводите банковский пароль, PIN-код или одноразовый код в заметки, сообщения финансовому помощнику или обращения в поддержку."
                  }
                ]
              }
            ]
          },
          {
            "number": 11,
            "question": "Какие банки и типы счетов можно подключить?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Доступность зависит от Plaid, финансового учреждения, типа счёта, региона и текущего состояния подключения. OPHIR не гарантирует поддержку каждого банка, кредитного союза, эмитента карты, инвестиционной платформы или типа счёта."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Фактический список показывается в интерфейсе подключения. Если учреждение или нужный счёт отсутствует, напишите в поддержку, но не отправляйте банковские данные для входа."
                  }
                ]
              }
            ]
          },
          {
            "number": 12,
            "question": "Почему финансовый счёт не подключается?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Возможные причины:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "неверные или изменённые данные для входа;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "дополнительная проверка финансового учреждения;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "временное обслуживание банка, Plaid или сети;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "неподдерживаемый тип счёта;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "устаревшая версия приложения;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "истёкшее разрешение или необходимость повторной аутентификации;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "ограничение, установленное финансовым учреждением."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Попробуйте обновить приложение, повторить подключение позднее и выполнить инструкции на экране. Если ошибка сохраняется, сообщите поддержке название учреждения и текст ошибки, но не пароль и не одноразовый код."
                  }
                ]
              }
            ]
          },
          {
            "number": 13,
            "question": "Почему остаток или операция отображаются с задержкой?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR зависит от времени обновления данных финансовым учреждением и поставщиком подключения. Операции могут быть ожидающими, измениться после окончательной обработки, появиться с задержкой или содержать описание, предоставленное банком."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR не гарантирует получение данных в реальном времени. Для срочного решения или проверки доступных средств используйте официальный канал финансового учреждения."
                  }
                ]
              }
            ]
          },
          {
            "number": 14,
            "question": "Почему категория операции или прогноз могут быть неточными?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Категории и прогнозы формируются на основе доступного описания операции, истории и автоматизированных правил или моделей. Неполные, задержанные или изменённые данные могут повлиять на результат."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Если приложение позволяет, исправьте категорию или исходные сведения. Перед финансовым решением проверяйте результат по банковской выписке и собственным данным."
                  }
                ]
              }
            ]
          },
          {
            "number": 15,
            "question": "Как отключить финансовый счёт?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Используйте доступное управление подключениями в настройках OPHIR. В зависимости от подключения также можно управлять доступом через "
                  },
                  {
                    "type": "externalLink",
                    "text": "Plaid Portal",
                    "href": "https://my.plaid.com"
                  },
                  {
                    "type": "text",
                    "text": " или финансовое учреждение."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Отключение обычно прекращает будущие обновления данных, но не обязательно удаляет сведения, которые OPHIR, Plaid или финансовое учреждение получили ранее."
                  }
                ]
              }
            ]
          },
          {
            "number": 16,
            "question": "Отключение счёта удаляет ранее импортированные данные?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Не обязательно. Отключение и удаление данных - разные действия."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Чтобы удалить данные, уже находящиеся у OPHIR, удалите учётную запись или подайте отдельный запрос. Инструкции: "
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
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Чтобы управлять данными, самостоятельно контролируемыми Plaid, используйте Plaid Portal или средства запроса конфиденциальности Plaid."
                  }
                ]
              }
            ]
          },
          {
            "number": 17,
            "question": "Можно ли снова подключить отключённый счёт?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Обычно поддерживаемый счёт можно подключить повторно из приложения. Может потребоваться новая аутентификация и согласие."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Возможность повторного подключения зависит от финансового учреждения, Plaid, состояния счёта и доступных функций OPHIR."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "Бюджеты, прогнозы и финансовый помощник",
        "faqItems": [
          {
            "number": 18,
            "question": "Что может делать финансовый помощник OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "В зависимости от доступной версии он может помогать:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "объяснять финансовую информацию;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "организовывать операции и категории;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "выявлять предполагаемые регулярные доходы и расходы;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "формировать бюджетные сводки;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "оценивать будущий денежный поток;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "обращать внимание на изменения и возможные риски;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "предлагать информационные следующие шаги."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Фактические возможности показываются внутри приложения и могут изменяться."
                  }
                ]
              }
            ]
          },
          {
            "number": 19,
            "question": "Может ли финансовый помощник ошибаться?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Да. Автоматизированный результат может быть неточным, неполным, устаревшим или неприменимым к вашей ситуации. На него влияют качество исходных данных, задержки банковского обновления, настройки и ограничения используемой модели."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Проверяйте важные суммы, даты, категории и допущения. OPHIR не гарантирует определённый финансовый результат."
                  }
                ]
              }
            ]
          },
          {
            "number": 20,
            "question": "Принимает ли OPHIR кредитные или другие юридически значимые решения?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR не использует информационные выводы приложения для принятия от имени банка решения о кредите, страховании, трудоустройстве или доступе к существенной услуге."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Если у вас есть вопрос о существенном автоматизированном результате или вы хотите исправить исходные сведения, напишите на "
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
            "number": 21,
            "question": "Может ли OPHIR переводить деньги или оплачивать счета?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Нет, если отдельная платёжная функция прямо не внедрена и не раскрыта в приложении. Обычные функции OPHIR предназначены для организации и анализа финансовой информации, а не для хранения или перевода средств."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Никогда не воспринимайте отображаемый остаток как окончательное подтверждение доступности денег для срочной операции."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Подписка, оплата и возвраты",
        "faqItems": [
          {
            "number": 22,
            "question": "Где оформляется подписка OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Подписка OPHIR оформляется через Apple App Store или Google Play. Магазин показывает план, цену, валюту, расчётный период, пробное предложение и дату продления до подтверждения покупки."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Apple или Google обрабатывает платёж. OPHIR может получить ограниченное подтверждение покупки, но не полный номер вашей платёжной карты."
                  }
                ]
              }
            ]
          },
          {
            "number": 23,
            "question": "Где посмотреть план, цену и дату продления?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Используйте учётную запись магазина, с которой была совершена покупка:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "Apple: «Настройки» -> ваше имя -> «Подписки» -> OPHIR;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "Google Play: профиль -> «Платежи и подписки» -> «Подписки» -> OPHIR."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Также проверьте квитанцию магазина. Подробнее: "
                  },
                  {
                    "type": "internalLink",
                    "text": "Управление подпиской",
                    "page": "subscription"
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
            "number": 24,
            "question": "Как отменить подписку?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Отмените её через магазин, в котором была совершена покупка:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "externalLink",
                      "text": "официальная инструкция Apple",
                      "href": "https://support.apple.com/en-ca/118428"
                    },
                    {
                      "type": "text",
                      "text": ";"
                    }
                  ],
                  [
                    {
                      "type": "externalLink",
                      "text": "официальная инструкция Google Play",
                      "href": "https://support.google.com/googleplay/answer/7018481"
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
                    "text": "Убедитесь, что магазин показал подтверждение отмены или дату окончания. Отмена обычно прекращает будущее продление, а доступ сохраняется до конца уже оплаченного периода, если магазин или закон не предусматривает иное."
                  }
                ]
              }
            ]
          },
          {
            "number": 25,
            "question": "Удаление приложения или аккаунта отменяет подписку?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Нет. Удаление приложения, выход, отключение Plaid или удаление учётной записи OPHIR сами по себе не отменяют подписку Apple или Google."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Если вы удаляете аккаунт, сначала отдельно отмените подписку в магазине и сохраните подтверждение."
                  }
                ]
              }
            ]
          },
          {
            "number": 26,
            "question": "Как запросить возврат?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Отмена и возврат - разные действия. Для уже проведённого платежа используйте процедуру магазина, через который была совершена покупка. Возможность возврата зависит от канала покупки, времени, причины, правил магазина и обязательного законодательства."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Инструкции и контакты: "
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
              }
            ]
          },
          {
            "number": 27,
            "question": "Что делать, если подписка оплачена, но платные функции не открылись?",
            "answer": [
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "не покупайте подписку второй раз;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "проверьте статус подписки в Apple App Store или Google Play;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "убедитесь, что используется тот же Apple Account или Google Account;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "войдите в правильную учётную запись OPHIR;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "обновите и перезапустите приложение;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "используйте «Восстановить покупки», если эта функция доступна;"
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
                    "text": "В обращении укажите платформу, адрес учётной записи OPHIR, план, дату покупки и номер заказа из квитанции. Скрывайте лишние платёжные данные."
                  }
                ]
              }
            ]
          },
          {
            "number": 28,
            "question": "Можно ли перенести подписку между Apple и Google?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Обычно магазины не поддерживают перенос покупки между Apple App Store и Google Play. Не оформляйте вторую подписку, пока не проверите состояние первой и не обратитесь в поддержку."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "Конфиденциальность и безопасность",
        "faqItems": [
          {
            "number": 29,
            "question": "Какие данные может обрабатывать OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "В зависимости от используемых функций OPHIR может обрабатывать:"
                  }
                ]
              },
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "сведения учётной записи и настройки;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "данные, которые вы вводите;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "разрешённые данные подключённых финансовых счетов;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "бюджеты, категории, цели и заметки;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "запросы и ответы финансового помощника, если они сохраняются;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "сведения подписки;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "технические, диагностические и безопасностные данные;"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "обращения в поддержку."
                    }
                  ]
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Полное описание: "
                  },
                  {
                    "type": "internalLink",
                    "text": "Политика конфиденциальности",
                    "page": "privacyPolicy"
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
            "number": 30,
            "question": "Продаёт ли OPHIR персональную информацию?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR не продаёт и не сдаёт в аренду персональную информацию. Информация может раскрываться поставщикам услуг и другим получателям только для описанных целей, в необходимом объёме и с учётом применимого законодательства."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Plaid, Apple, Google, финансовые учреждения и другие независимые сервисы могут обрабатывать определённые сведения по собственным правилам."
                  }
                ]
              }
            ]
          },
          {
            "number": 31,
            "question": "Как OPHIR защищает данные?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR применяет административные, организационные, договорные, технические и физические меры, соответствующие чувствительности информации и рискам. Они могут включать защиту передачи и хранения, разграничение доступа, многофакторную аутентификацию административного доступа, управление секретами, журналирование, мониторинг, обновления, резервное копирование и процедуры реагирования на инциденты."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Ни одна цифровая система не может гарантировать абсолютную безопасность. Подробнее: "
                  },
                  {
                    "type": "internalLink",
                    "text": "Безопасность OPHIR",
                    "page": "security"
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
            "number": 32,
            "question": "Использует ли приложение cookie?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Мобильное приложение обычно не использует браузерные cookie так же, как обычный сайт. Для работы и безопасности оно может использовать токены, защищённое локальное хранилище, идентификаторы установки, системные разрешения, SDK, журналы безопасности и диагностику."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Веб-страницы OPHIR могут использовать строго необходимые cookie или аналогичные технологии. Подробнее: "
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
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "Удаление аккаунта и права на данные",
        "faqItems": [
          {
            "number": 33,
            "question": "Как удалить учётную запись OPHIR?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "В приложении откройте «Настройки» -> «Учётная запись» -> «Удалить аккаунт», ознакомьтесь с последствиями и подтвердите запрос."
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
                    "text": " с темой «Удаление аккаунта OPHIR». Укажите адрес электронной почты учётной записи, но не отправляйте пароль или банковские секреты."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Перед удалением отдельно отмените подписку и сохраните нужные сведения. Полная инструкция: "
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
            "number": 34,
            "question": "Какие данные удаляются вместе с аккаунтом?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "После допустимого подтверждённого запроса OPHIR закрывает учётную запись и удаляет либо обезличивает активные пользовательские данные под своим контролем в соответствии с применимым графиком хранения."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Ограниченные записи могут сохраняться, когда это требуется или разрешается законом, например для безопасности, предотвращения мошенничества, бухгалтерского учёта, споров, подтверждения выполнения запроса или юридических требований. Резервные копии удаляются или перезаписываются в обычном цикле."
                  }
                ]
              }
            ]
          },
          {
            "number": 35,
            "question": "Как получить копию данных или исправить информацию?",
            "answer": [
              {
                "type": "paragraph",
                "content": [
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
                    "text": ". Укажите имя, адрес электронной почты учётной записи, вид запроса и сведения, которые помогут найти записи."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "OPHIR может запросить разумное подтверждение личности. В зависимости от применимого законодательства вы можете иметь право на доступ, исправление, удаление, отзыв согласия, сведения об обработке и переносимость определённой компьютеризированной информации."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "Поддержка",
        "faqItems": [
          {
            "number": 36,
            "question": "Как связаться с OPHIR?",
            "answer": [
              {
                "type": "list",
                "items": [
                  [
                    {
                      "type": "text",
                      "text": "техническая поддержка, доступ и подписка: "
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
                      "text": "конфиденциальность, удаление аккаунта и запросы о данных: "
                    },
                    {
                      "type": "emailLink",
                      "text": "privacy@joinophir.app",
                      "email": "privacy@joinophir.app"
                    },
                    {
                      "type": "text",
                      "text": ";"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "общие и юридические вопросы: "
                    },
                    {
                      "type": "emailLink",
                      "text": "contact@joinophir.app",
                      "email": "contact@joinophir.app"
                    },
                    {
                      "type": "text",
                      "text": ";"
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "text": "общая информация: "
                    },
                    {
                      "type": "emailLink",
                      "text": "hello@joinophir.app",
                      "email": "hello@joinophir.app"
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
                    "text": "Почтовый адрес: Soavinjato Andrianarisoa, 1203 Rue Normont, Laval, Québec H7G 3H3, Canada."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "В обращении укажите адрес учётной записи OPHIR, платформу, устройство, версию приложения, время проблемы, текст ошибки и выполненные шаги. При необходимости приложите снимок экрана со скрытыми личными и платёжными сведениями."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Никогда не отправляйте пароль интернет-банка, пароль Apple или Google, полный номер карты, код безопасности карты, PIN-код, одноразовый код или иной секрет."
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "internalLink",
                    "text": "Связаться с поддержкой",
                    "page": "support"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "related-pages",
        "title": "Полезные страницы",
        "includeInNavigation": false,
        "blocks": [
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "internalLink",
                  "text": "Связаться с поддержкой",
                  "page": "support"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Управление подпиской",
                  "page": "subscription"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Отмена подписки и возвраты",
                  "page": "cancellation"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Удаление аккаунта и запросы о данных",
                  "page": "accountData"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Безопасность",
                  "page": "security"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Политика конфиденциальности",
                  "page": "privacyPolicy"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Условия использования",
                  "page": "termsOfService"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Технологии приложения и cookie",
                  "page": "appTechnologies"
                }
              ]
            ]
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  FaqDocument
>;
