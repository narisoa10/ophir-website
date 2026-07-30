import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type CancellationInlineContent =
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

type CancellationBlock =
  | {
      type: "paragraph";
      content: readonly CancellationInlineContent[];
    }
  | {
      type: "callout";
      content: readonly CancellationInlineContent[];
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
      items: readonly (readonly CancellationInlineContent[])[];
    }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly (readonly CancellationInlineContent[])[])[];
    }
  | {
      type: "address";
      content: readonly CancellationInlineContent[];
    };

type CancellationSection = {
  key: string;
  title: string;
  blocks: readonly CancellationBlock[];
};

type CancellationDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  intro: readonly CancellationBlock[];
  sections: readonly CancellationSection[];
};

export const cancellationContent = {
  "en": {
    "title": "Cancellation and Refunds",
    "seoTitle": "Cancellation and Refunds | OPHIR",
    "description": "Learn how to cancel an OPHIR subscription, request a refund through Apple or Google Play, and understand the difference between cancellation and refunds.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Policy and practical guide for OPHIR subscriptions"
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
                "text": "Support: "
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
                "text": "OPHIR subscriptions are purchased through the Apple App Store or Google Play. Cancellation and a refund are separate actions: cancellation stops future renewal, while a refund concerns a completed charge. Nothing in this document limits rights that cannot be waived under applicable law."
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
              "Situation",
              "What to Do"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "You do not want the next charge"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Cancel through the Apple App Store or Google Play before the store's stated deadline."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "You deleted the application"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "The subscription is not cancelled automatically. Complete cancellation through the store."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "You are deleting your OPHIR account"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "First cancel the subscription separately, then submit the account deletion request."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "A charge has already occurred"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Cancellation does not automatically refund the charge. Submit a separate refund request."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "The purchase was through Apple"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Manage cancellation through Apple Account and request a refund through Apple Report a Problem."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "The purchase was through Google Play"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Manage cancellation and a refund request through the applicable Google Play tools."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "You have a mandatory consumer right"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "That right continues to apply regardless of OPHIR or store rules."
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "1. Scope",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This document applies to OPHIR subscriptions purchased through:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the Apple App Store;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Google Play."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "It supplements:"
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
                  "text": "Subscription Management guide",
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
                  "text": "information displayed on the purchase screen;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the purchase receipt;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "applicable Apple or Google rules."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The specific plan, price, currency, billing period, trial offer, and renewal date are determined by the information displayed and confirmed at purchase."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "2. Cancellation Compared With a Refund",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Cancellation"
              },
              {
                "type": "text",
                "text": " stops automatic renewal and future charges after the time determined by the store. Access to paid features generally continues until the end of the current paid period unless the store or applicable law provides otherwise."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "A refund"
              },
              {
                "type": "text",
                "text": " is a full or partial return of a completed payment. Cancellation alone:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "does not reverse previous billing periods;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "does not create an automatic right to a refund;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "does not cancel a payment already processed by the store;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "does not replace a separate refund request."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A refund decision depends on the purchase channel, timing, reason, store rules, and applicable law."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "3. When to Cancel",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Check the next renewal date in the store's subscription section. To avoid a new charge, complete cancellation before the deadline stated by Apple or Google."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For a trial or introductory period:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "review the end date before accepting the offer;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "set your own reminder;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "cancel in advance if you do not want the paid subscription to begin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirm that the store recorded the cancellation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple recommends cancelling a free or discounted trial at least 24 hours before it ends. For Google Play and the specific plan, follow the deadline shown by the store."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "4. Cancelling an Apple App Store Subscription",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "On iPhone or iPad:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "open Settings;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "tap your name;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "select Subscriptions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "select OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "tap Cancel Subscription;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "review the confirmation or expiry date."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If there is no cancellation button and an expiry message appears, the subscription may already be cancelled."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Official Apple instructions: "
              },
              {
                "type": "externalLink",
                "text": "https://support.apple.com/en-ca/118428",
                "href": "https://support.apple.com/en-ca/118428"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Use the Apple Account that made the purchase. If you cannot find the subscription, review the receipt and any other Apple Accounts you use."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "5. Cancelling a Google Play Subscription",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "On an Android device:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "open Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "tap the profile icon;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "select Payments and subscriptions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "select Subscriptions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "select OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "tap Cancel subscription;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "follow the instructions and review the confirmation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Manage subscriptions on the web: "
              },
              {
                "type": "externalLink",
                "text": "https://play.google.com/store/account/subscriptions",
                "href": "https://play.google.com/store/account/subscriptions"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Official Google Play instructions: "
              },
              {
                "type": "externalLink",
                "text": "https://support.google.com/googleplay/answer/7018481",
                "href": "https://support.google.com/googleplay/answer/7018481"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Use the Google Account that made the purchase. Uninstalling the application does not cancel the subscription."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "6. What Happens After Cancellation",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Unless the store states otherwise:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "automatic renewal stops;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "no new charge for a later period should occur after cancellation takes effect;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "paid access generally continues until the end of the paid period;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "paid features may become unavailable when the period ends;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "user data is not automatically deleted;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "financial accounts are not automatically disconnected;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the OPHIR account is not automatically deleted."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Keep a screenshot, email, or other cancellation confirmation. If another charge occurs after a confirmed and timely cancellation, contact the store and OPHIR."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "7. Deleting the Application or Account",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Deleting the OPHIR application does not tell Apple or Google to cancel the subscription."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Deleting an OPHIR account and cancelling a subscription are also separate processes:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "subscription cancellation governs future store charges;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "account deletion governs access to and data held by OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "disconnecting Plaid governs the financial account connection."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Recommended order:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "cancel the subscription through the store;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "keep the confirmation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "disconnect financial accounts if appropriate;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "submit the account and data deletion request."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "8. Requesting an Apple Refund",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For a purchase billed by Apple:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "sign in at "
                },
                {
                  "type": "externalLink",
                  "text": "https://reportaproblem.apple.com",
                  "href": "https://reportaproblem.apple.com"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "select the option to request a refund;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "choose the reason;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "select OPHIR or the applicable subscription;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "submit the request;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "check the request status with Apple."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Official Apple instructions: "
              },
              {
                "type": "externalLink",
                "text": "https://support.apple.com/en-us/118223",
                "href": "https://support.apple.com/en-us/118223"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple determines whether a purchase qualifies under its refund rules, taking account of country, region, and mandatory law. OPHIR cannot sign in to a user's Apple Account or guarantee Apple's decision."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If OPHIR did not provide the purchased feature or a technical error occurred, also contact "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": ". We can review OPHIR access status and provide relevant information, but we do not request an Apple Account password or full card number."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "9. Requesting a Google Play Refund",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For a purchase billed by Google Play:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "open the Google Play refund request page;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sign in to the Google Account used for the purchase;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "find the OPHIR order;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "describe the issue and submit the request;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "keep the confirmation and check its status."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Official Google Play refund request: "
              },
              {
                "type": "externalLink",
                "text": "https://support.google.com/googleplay/answer/15574897",
                "href": "https://support.google.com/googleplay/answer/15574897"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Google Play refund policies: "
              },
              {
                "type": "externalLink",
                "text": "https://support.google.com/googleplay/answer/2479637",
                "href": "https://support.google.com/googleplay/answer/2479637"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Google explains that, depending on the circumstances, a user may request a refund from Google or contact the developer. If the store directs you to OPHIR, email "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": " and provide the order number, date, amount, currency, and a concise explanation."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not send your full card number, Google Account password, PIN, or one-time code."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "10. When to Contact OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "internalLink",
                "text": "Contact",
                "page": "contact"
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
                "text": " if:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the store shows an active subscription but paid features did not open;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the purchase was not restored after changing devices or reinstalling;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a charge succeeded but OPHIR does not recognize the subscription;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "you do not understand which plan is linked to the OPHIR account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the store directs the request to the developer;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "you need OPHIR information for a dispute;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a technical access issue occurs after cancellation."
                }
              ]
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
                  "text": "Apple or Android platform;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the OPHIR account email;"
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
                  "text": "plan name;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "order or transaction number;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a concise description of the issue;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a redacted receipt image if needed."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not send banking passwords, your full card number, security code, PIN, or one-time code."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "11. Unauthorized or Unrecognized Charges",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you do not recognize a charge:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "review receipts and family purchases;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "check other Apple Accounts or Google Accounts;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "secure the store account and payment method;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "report the unauthorized transaction to Apple or Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "contact the payment-method issuer if appropriate;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "notify OPHIR if the charge relates to our application."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not use an ordinary refund request instead of reporting fraud if the transaction was genuinely unauthorized."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "12. Consumer Rights",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nothing in this document, the "
              },
              {
                "type": "internalLink",
                "text": "Terms of Service",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": ", or store rules excludes or limits rights that cannot be waived under applicable law."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For Quebec consumers, the Consumer Protection Act may provide remedies for distance contracts in certain circumstances, including:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "required information was not provided before purchase;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the contract or confirmation was not received;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the purchased service was not provided;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a charge was incorrect or not disclosed;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a refund was not made after a legally valid cancellation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The availability of a remedy depends on the facts, deadlines, the party legally treated as the merchant, and the payment channel. This document is not legal advice."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Official information from the Office de la protection du consommateur:\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.opc.gouv.qc.ca/consommateur/sujet/achat/internet/annulation/",
                "href": "https://www.opc.gouv.qc.ca/consommateur/sujet/achat/internet/annulation/"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you believe a mandatory right was not respected:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "preserve the purchase screen, receipt, correspondence, and cancellation confirmation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "contact Apple or Google through the purchase channel;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "send OPHIR a detailed request;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "contact the Office de la protection du consommateur or obtain legal advice if necessary."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "13. Disputes and Chargebacks",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A chargeback through the card issuer may be available where provided by law or payment-method rules. Before initiating one:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "try to cancel and request a refund through the correct channel;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "preserve evidence;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirm that the dispute concerns the correct transaction;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "understand that the store may restrict the associated account during its investigation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This section does not prevent immediate reporting of fraud or use of a mandatory chargeback right."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "14. Changes",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple, Google, and applicable law may change their procedures. Before cancelling or requesting a refund, review the subscription status, renewal date, receipt, purchase terms, and current store instructions."
              }
            ]
          }
        ]
      },
      {
        "key": "section-17",
        "title": "15. Contact",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Subscription and refund support:"
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
                "text": "Legal inquiries:"
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
                "text": "\nSoavinjato Andrianarisoa\n1203 Rue Normont\nLaval\nQuébec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Provide the order number, but do not send your full card number, store password, online banking password, PIN, or one-time code."
              }
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Annulation et remboursements",
    "seoTitle": "Annulation et remboursements | OPHIR",
    "description": "Découvrez comment annuler un abonnement OPHIR, demander un remboursement à Apple ou Google Play et comprendre la différence entre annulation et remboursement.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Politique et guide pratique sur les abonnements OPHIR"
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
                "text": "Soavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Assistance : "
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
                "text": "Les abonnements OPHIR sont achetés dans l’App Store d’Apple ou sur Google Play. L’annulation et le remboursement sont deux actions distinctes : l’annulation met fin au renouvellement futur, tandis que le remboursement concerne un prélèvement déjà effectué. Le présent document ne limite aucun droit auquel il est impossible de renoncer en vertu du droit applicable."
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
              "Situation",
              "Marche à suivre"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Vous ne voulez pas le prochain prélèvement"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Annulez l’abonnement dans l’App Store d’Apple ou sur Google Play avant l’échéance indiquée par le magasin."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Vous avez supprimé l’application"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "L’abonnement n’est pas annulé automatiquement. Terminez la procédure d’annulation dans le magasin."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Vous supprimez votre compte OPHIR"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Annulez d’abord l’abonnement séparément, puis présentez la demande de suppression du compte."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Un prélèvement a déjà été effectué"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "L’annulation ne rembourse pas automatiquement le prélèvement. Présentez une demande de remboursement distincte."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "L’achat a été effectué auprès d’Apple"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Gérez l’annulation dans votre compte Apple et demandez un remboursement au moyen de Signaler un problème d’Apple."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "L’achat a été effectué sur Google Play"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Gérez l’annulation et la demande de remboursement au moyen des outils applicables de Google Play."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Vous bénéficiez d’un droit impératif accordé aux consommateurs"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Ce droit continue de s’appliquer indépendamment des règles d’OPHIR ou du magasin."
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "1. Champ d’application",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le présent document s’applique aux abonnements OPHIR achetés dans :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "l’App Store d’Apple;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Google Play."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Il complète :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "les "
                },
                {
                  "type": "internalLink",
                  "text": "Conditions d’utilisation d’OPHIR",
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
                  "text": "le guide "
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
                  "text": "les renseignements présentés à l’écran d’achat;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le reçu d’achat;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les règles applicables d’Apple ou de Google."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le forfait, le prix, la devise, la période de facturation, l’offre d’essai et la date de renouvellement sont déterminés par les renseignements présentés et confirmés au moment de l’achat."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "2. Différence entre une annulation et un remboursement",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "L’annulation"
              },
              {
                "type": "text",
                "text": " met fin au renouvellement automatique et aux prélèvements futurs à partir du moment déterminé par le magasin. L’accès aux fonctions payantes se poursuit généralement jusqu’à la fin de la période déjà payée, sauf indication contraire du magasin ou du droit applicable."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Un remboursement"
              },
              {
                "type": "text",
                "text": " est la restitution totale ou partielle d’un paiement déjà effectué. L’annulation à elle seule :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "n’annule pas les périodes de facturation antérieures;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne crée pas un droit automatique à un remboursement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "n’annule pas un paiement déjà traité par le magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ne remplace pas une demande de remboursement distincte."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La décision concernant un remboursement dépend du canal d’achat, du moment de la demande, du motif, des règles du magasin et du droit applicable."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "3. Quand annuler",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vérifiez la prochaine date de renouvellement dans la section des abonnements du magasin. Pour éviter un nouveau prélèvement, terminez la procédure d’annulation avant l’échéance indiquée par Apple ou Google."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Dans le cas d’une période d’essai ou de lancement :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "vérifiez la date de fin avant d’accepter l’offre;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "créez votre propre rappel;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "annulez à l’avance si vous ne voulez pas que l’abonnement payant commence;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirmez que le magasin a enregistré l’annulation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple recommande d’annuler un abonnement d’essai gratuit ou à tarif réduit au moins 24 heures avant sa fin. Pour Google Play et le forfait concerné, respectez l’échéance affichée par le magasin."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "4. Annuler un abonnement de l’App Store d’Apple",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sur un iPhone ou un iPad :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ouvrez Réglages;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "touchez votre nom;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sélectionnez Abonnements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sélectionnez OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "touchez Annuler l’abonnement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vérifiez la confirmation ou la date d’expiration."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si aucun bouton d’annulation n’est affiché et qu’un message d’expiration apparaît, l’abonnement est peut-être déjà annulé."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "externalLink",
                "text": "Instructions officielles d’Apple",
                "href": "https://support.apple.com/fr-ca/118428"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Utilisez le compte Apple avec lequel l’achat a été effectué. Si vous ne trouvez pas l’abonnement, examinez le reçu ainsi que les autres comptes Apple que vous utilisez."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "5. Annuler un abonnement Google Play",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sur un appareil Android :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ouvrez Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "touchez l’icône du profil;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sélectionnez Paiements et abonnements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sélectionnez Abonnements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sélectionnez OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "touchez Annuler l’abonnement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "suivez les instructions et vérifiez la confirmation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "externalLink",
                "text": "Gérer les abonnements sur le Web",
                "href": "https://play.google.com/store/account/subscriptions"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "externalLink",
                "text": "Instructions officielles de Google Play",
                "href": "https://support.google.com/googleplay/answer/7018481?hl=fr-CA"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Utilisez le compte Google avec lequel l’achat a été effectué. La désinstallation de l’application n’annule pas l’abonnement."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "6. Après l’annulation",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sauf indication contraire du magasin :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le renouvellement automatique prend fin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aucun nouveau prélèvement pour une période ultérieure ne devrait être effectué après la prise d’effet de l’annulation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’accès payant se poursuit généralement jusqu’à la fin de la période déjà payée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les fonctions payantes peuvent devenir indisponibles à la fin de cette période;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les données de l’utilisateur ne sont pas supprimées automatiquement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les comptes financiers ne sont pas déconnectés automatiquement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le compte OPHIR n’est pas supprimé automatiquement."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Conservez une capture d’écran, un courriel ou une autre confirmation de l’annulation. Si un autre prélèvement est effectué après une annulation confirmée et faite à temps, communiquez avec le magasin et OPHIR."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "7. Suppression de l’application ou du compte",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La suppression de l’application OPHIR n’indique pas à Apple ou à Google d’annuler l’abonnement."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La suppression d’un compte OPHIR et l’annulation d’un abonnement sont également des processus distincts :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "l’annulation de l’abonnement concerne les futurs prélèvements du magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la suppression du compte concerne l’accès et les données détenues par OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la déconnexion de Plaid concerne la connexion du compte financier."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ordre recommandé :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "annulez l’abonnement dans le magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "conservez la confirmation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "déconnectez les comptes financiers, s’il y a lieu;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "présentez la demande de suppression du compte et des données."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "8. Demander un remboursement à Apple",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour un achat facturé par Apple :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ouvrez une session à l’adresse "
                },
                {
                  "type": "externalLink",
                  "text": "reportaproblem.apple.com",
                  "href": "https://reportaproblem.apple.com"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sélectionnez l’option permettant de demander un remboursement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "choisissez le motif;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sélectionnez OPHIR ou l’abonnement concerné;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "présentez la demande;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vérifiez l’état de la demande auprès d’Apple."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "externalLink",
                "text": "Instructions officielles d’Apple",
                "href": "https://support.apple.com/fr-ca/118223"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple détermine si un achat est admissible selon ses règles de remboursement, en tenant compte du pays, de la région et du droit impératif. OPHIR ne peut pas ouvrir une session dans le compte Apple d’un utilisateur ni garantir la décision d’Apple."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si OPHIR n’a pas fourni la fonction achetée ou si une erreur technique s’est produite, écrivez également à "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Nous pouvons examiner l’état de l’accès à OPHIR et fournir les renseignements pertinents, mais nous ne demandons pas le mot de passe d’un compte Apple ni le numéro complet d’une carte."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "9. Demander un remboursement sur Google Play",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour un achat facturé par Google Play :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ouvrez la page de demande de remboursement de Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ouvrez une session dans le compte Google utilisé pour l’achat;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "trouvez la commande OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "décrivez le problème et présentez la demande;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "conservez la confirmation et vérifiez son état."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "externalLink",
                "text": "Demande de remboursement officielle de Google Play",
                "href": "https://support.google.com/googleplay/answer/15574897?hl=fr-CA"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "externalLink",
                "text": "Règles de remboursement de Google Play",
                "href": "https://support.google.com/googleplay/answer/2479637?hl=fr-CA"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Google explique que, selon les circonstances, un utilisateur peut demander un remboursement à Google ou communiquer avec le développeur. Si le magasin vous dirige vers OPHIR, écrivez à "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": " et fournissez le numéro de commande, la date, le montant, la devise et une brève explication."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ne transmettez pas le numéro complet de votre carte, le mot de passe de votre compte Google, un NIP ni un code à usage unique."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "10. Quand communiquer avec OPHIR",
        "blocks": [
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
                "text": " dans les situations suivantes :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le magasin indique que l’abonnement est actif, mais les fonctions payantes ne sont pas accessibles;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’achat n’a pas été restauré après un changement d’appareil ou une réinstallation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le prélèvement a été effectué, mais OPHIR ne reconnaît pas l’abonnement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vous ne savez pas quel forfait est associé au compte OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le magasin vous a dirigé vers le développeur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vous avez besoin de renseignements d’OPHIR pour un litige;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un problème technique d’accès survient après l’annulation."
                }
              ]
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
                  "text": "la plateforme Apple ou Android;"
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
                  "text": "la date de l’achat ou du prélèvement;"
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
                  "text": "le numéro de commande ou de transaction;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "une brève description du problème;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "une image du reçu dont les renseignements sensibles ont été masqués, au besoin."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ne transmettez pas de mot de passe bancaire, le numéro complet de votre carte, son code de sécurité, un NIP ni un code à usage unique."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "11. Prélèvements non autorisés ou inconnus",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous ne reconnaissez pas un prélèvement :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "examinez les reçus et les achats familiaux;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vérifiez les autres comptes Apple ou comptes Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sécurisez le compte du magasin et le mode de paiement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "signalez la transaction non autorisée à Apple ou à Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "communiquez avec l’émetteur du mode de paiement, s’il y a lieu;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "informez OPHIR si le prélèvement concerne notre application."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si la transaction n’a véritablement pas été autorisée, n’utilisez pas une demande de remboursement ordinaire à la place d’un signalement de fraude."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "12. Droits des consommateurs",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le présent document, les "
              },
              {
                "type": "internalLink",
                "text": "Conditions d’utilisation",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " et les règles du magasin n’excluent ni ne limitent aucun droit auquel il est impossible de renoncer en vertu du droit applicable."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour les consommateurs québécois, la Loi sur la protection du consommateur peut prévoir des recours concernant les contrats conclus à distance dans certaines circonstances, notamment lorsque :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "les renseignements obligatoires n’ont pas été fournis avant l’achat;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le contrat ou sa confirmation n’a pas été reçu;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le service acheté n’a pas été fourni;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un prélèvement était incorrect ou n’avait pas été divulgué;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un remboursement n’a pas été effectué après une annulation juridiquement valide."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La disponibilité d’un recours dépend des faits, des délais, de la partie considérée juridiquement comme le commerçant et du canal de paiement. Le présent document ne constitue pas un avis juridique."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Renseignements officiels de l’Office de la protection du consommateur :\n"
              },
              {
                "type": "externalLink",
                "text": "Démarche pour annuler un achat en ligne",
                "href": "https://www.opc.gouv.qc.ca/consommateur/sujet/achat/internet/annulation/"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous croyez qu’un droit impératif n’a pas été respecté :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "conservez l’écran d’achat, le reçu, les communications et la confirmation d’annulation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "communiquez avec Apple ou Google par le canal d’achat;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "transmettez une demande détaillée à OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "communiquez avec l’Office de la protection du consommateur ou obtenez un avis juridique, au besoin."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "13. Litiges et rétrofacturation",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Une rétrofacturation par l’intermédiaire de l’émetteur de la carte peut être disponible lorsque le droit applicable ou les règles du mode de paiement le permettent. Avant d’en demander une :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "tentez d’annuler l’abonnement et de demander un remboursement par le canal approprié;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "conservez les éléments de preuve;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirmez que le litige concerne la bonne transaction;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "sachez que le magasin peut restreindre le compte associé pendant son enquête."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le présent article n’empêche pas le signalement immédiat d’une fraude ni l’exercice d’un droit impératif à la rétrofacturation."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "14. Modifications",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple, Google et le droit applicable peuvent modifier leurs procédures. Avant d’annuler un abonnement ou de demander un remboursement, vérifiez l’état de l’abonnement, la date de renouvellement, le reçu, les conditions d’achat et les instructions à jour du magasin."
              }
            ]
          }
        ]
      },
      {
        "key": "section-17",
        "title": "15. Contact",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Assistance relative aux abonnements et aux remboursements :"
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
                "text": "Demandes juridiques :"
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
                "text": "\nSoavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Fournissez le numéro de commande, mais ne transmettez pas le numéro complet de votre carte, le mot de passe du magasin, votre mot de passe de services bancaires en ligne, un NIP ni un code à usage unique."
              }
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "Отмена подписки и возвраты",
    "seoTitle": "Отмена подписки и возвраты | OPHIR",
    "description": "Узнайте, как отменить подписку OPHIR, запросить возврат через Apple или Google Play и понять разницу между отменой и возвратом.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Правила и практическое руководство для подписок OPHIR"
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
                "text": "Поддержка: "
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
                "text": "Подписки OPHIR приобретаются через Apple App Store или Google Play. Отмена подписки и возврат - разные действия: отмена останавливает будущее продление, а возврат относится к уже проведённому платежу. Ничто в этом документе не ограничивает права, от которых нельзя отказаться по применимому законодательству."
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
              "Ситуация",
              "Что делать"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Не хотите следующего списания"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Отмените подписку в Apple App Store или Google Play до срока, указанного магазином."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Удалили приложение"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Подписка не отменяется автоматически. Выполните отмену в магазине."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Удаляете аккаунт OPHIR"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Сначала отдельно отмените подписку, затем подайте запрос на удаление аккаунта."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Уже произошло списание"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Отмена не возвращает платёж автоматически. Подайте отдельный запрос на возврат."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Покупка через Apple"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Управляйте отменой через Apple Account, возвратом - через Apple Report a Problem."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Покупка через Google Play"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Управляйте отменой и запросом возврата через соответствующие инструменты Google Play."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Есть обязательное право потребителя"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Оно сохраняется независимо от правил OPHIR или магазина."
                  }
                ]
              ]
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "1. Сфера действия",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящий документ применяется к подпискам OPHIR, приобретённым через:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "Apple App Store;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "Google Play."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Он дополняет:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
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
                  "type": "internalLink",
                  "text": "руководство «Управление подпиской»",
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
                  "text": "сведения, показанные на экране покупки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "квитанцию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "применимые правила Apple или Google."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Конкретный план, цена, валюта, расчётный период, пробное предложение и дата продления определяются сведениями, показанными и подтверждёнными при покупке."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "2. Разница между отменой и возвратом",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Отмена подписки"
              },
              {
                "type": "text",
                "text": " прекращает автоматическое продление и будущие списания после момента, установленного магазином. Обычно доступ к уже оплаченным функциям сохраняется до окончания текущего периода, если магазин или применимый закон не предусматривает иное."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Возврат"
              },
              {
                "type": "text",
                "text": " означает полное или частичное возмещение уже проведённого платежа. Отмена сама по себе:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "не аннулирует предыдущие расчётные периоды;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не создаёт автоматического права на возврат;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не отменяет платёж, уже обработанный магазином;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "не заменяет отдельный запрос на возврат."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Решение о возврате зависит от канала покупки, времени обращения, причины, правил магазина и применимого законодательства."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "3. Срок отмены",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Проверьте дату следующего продления в разделе подписок магазина. Чтобы избежать нового списания, завершите отмену до крайнего срока, указанного Apple или Google."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для пробного или льготного периода:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "проверьте дату окончания до подтверждения предложения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "установите собственное напоминание;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отмените заранее, если не хотите переходить на платную подписку;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "убедитесь, что магазин подтвердил отмену."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple рекомендует отменять бесплатную или льготную пробную подписку не менее чем за 24 часа до её окончания. Для Google Play и конкретного плана ориентируйтесь на срок, указанный в магазине."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "4. Как отменить подписку Apple App Store",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "На iPhone или iPad:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "откройте «Настройки»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "нажмите своё имя;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выберите «Подписки»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выберите OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "нажмите «Отменить подписку»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверьте подтверждение или дату окончания."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если кнопки отмены нет, а отображается сообщение об окончании или истечении, подписка может быть уже отменена."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Официальная инструкция Apple: "
              },
              {
                "type": "externalLink",
                "text": "https://support.apple.com/en-ca/118428",
                "href": "https://support.apple.com/en-ca/118428"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Используйте Apple Account, с которого была совершена покупка. Если подписка не найдена, проверьте квитанцию и другие Apple Account, которыми вы пользуетесь."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "5. Как отменить подписку Google Play",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "На устройстве Android:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "откройте Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "нажмите значок профиля;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выберите «Платежи и подписки»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выберите «Подписки»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выберите OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "нажмите «Отменить подписку»;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выполните инструкции и проверьте подтверждение."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Управление через интернет: "
              },
              {
                "type": "externalLink",
                "text": "https://play.google.com/store/account/subscriptions",
                "href": "https://play.google.com/store/account/subscriptions"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Официальная инструкция Google Play: "
              },
              {
                "type": "externalLink",
                "text": "https://support.google.com/googleplay/answer/7018481",
                "href": "https://support.google.com/googleplay/answer/7018481"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Используйте Google Account, с которого была совершена покупка. Удаление приложения не отменяет подписку."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "6. Что происходит после отмены",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если магазин не сообщает иное:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "автоматическое продление прекращается;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "новые списания за очередной период не должны выполняться после вступления отмены в силу;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "платный доступ обычно сохраняется до окончания уже оплаченного периода;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "после окончания периода платные функции могут стать недоступными;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "пользовательские данные не удаляются автоматически;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "финансовые счета не отключаются автоматически;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "учётная запись OPHIR не удаляется автоматически."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сохраните снимок экрана, письмо или иное подтверждение отмены. Если после подтверждённой своевременной отмены произошло новое списание, обратитесь в магазин и в OPHIR."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "7. Удаление приложения или аккаунта",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Удаление приложения OPHIR не уведомляет Apple или Google о необходимости отменить подписку."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Удаление учётной записи OPHIR и отмена подписки также являются отдельными процессами:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "отмена подписки управляет будущими списаниями магазина;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "удаление аккаунта управляет доступом и данными OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отключение Plaid управляет подключением финансовых счетов."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Рекомендуемый порядок:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "отменить подписку в магазине;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сохранить подтверждение;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отключить финансовые счета, если это требуется;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подать запрос на удаление аккаунта и данных."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "8. Запрос возврата Apple",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для покупки, оплаченной Apple:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "войдите на "
                },
                {
                  "type": "externalLink",
                  "text": "https://reportaproblem.apple.com",
                  "href": "https://reportaproblem.apple.com"
                },
                {
                  "type": "text",
                  "text": ";"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выберите запрос возврата;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "укажите причину;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выберите OPHIR или соответствующую подписку;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отправьте запрос;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверяйте статус в Apple."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Официальная инструкция Apple: "
              },
              {
                "type": "externalLink",
                "text": "https://support.apple.com/en-us/118223",
                "href": "https://support.apple.com/en-us/118223"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple определяет соответствие покупки своим правилам возврата с учётом страны, региона и обязательного законодательства. OPHIR не может войти в Apple Account пользователя или гарантировать решение Apple."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если OPHIR не предоставил приобретённую функцию или произошла техническая ошибка, также напишите на "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": ". Мы можем проверить статус доступа и предоставить относящиеся к OPHIR сведения, но не запрашиваем пароль Apple Account или полный номер карты."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "9. Запрос возврата Google Play",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для покупки, оплаченной Google Play:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "откройте страницу запроса возврата Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "войдите в Google Account, использованный для покупки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "найдите заказ OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "укажите проблему и отправьте запрос;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сохраните подтверждение и проверяйте статус."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Официальный запрос возврата: "
              },
              {
                "type": "externalLink",
                "text": "https://support.google.com/googleplay/answer/15574897",
                "href": "https://support.google.com/googleplay/answer/15574897"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Правила возврата Google Play: "
              },
              {
                "type": "externalLink",
                "text": "https://support.google.com/googleplay/answer/2479637",
                "href": "https://support.google.com/googleplay/answer/2479637"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Google указывает, что в зависимости от обстоятельств пользователь может запросить возврат у Google или обратиться к разработчику. Если магазин направляет вас к OPHIR, напишите на "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": " и приложите номер заказа, дату, сумму, валюту и краткое описание причины."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не отправляйте полный номер карты, пароль Google Account, PIN-код или одноразовый код."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "10. Когда обращаться в OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Обратитесь на "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": ", если:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "магазин показывает активную подписку, но платные функции не открылись;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "покупка не восстановилась после смены устройства или переустановки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "с вас списали оплату, но OPHIR не распознаёт подписку;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "вы не понимаете, какой план привязан к учётной записи OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "магазин направил запрос разработчику;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "вам нужны сведения OPHIR для рассмотрения спора;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "после отмены возникла техническая ошибка доступа."
                }
              ]
            ]
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
                  "text": "Apple или Android;"
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
                  "text": "дату покупки или списания;"
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
                  "text": "номер заказа или транзакции;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "краткое описание проблемы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "скрытый снимок квитанции, если необходим."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не отправляйте банковские пароли, полный номер карты, код безопасности, PIN-код или одноразовый код."
              }
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "11. Несанкционированное или неизвестное списание",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы не узнаёте платёж:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "проверьте квитанции и семейные покупки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверьте другие Apple Account или Google Account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "защитите учётную запись магазина и способ оплаты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сообщите о несанкционированной операции Apple или Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "при необходимости обратитесь к эмитенту платёжного средства;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "уведомите OPHIR, если платёж относится к нашему приложению."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не используйте обычный запрос возврата вместо сообщения о мошенничестве, если платёж действительно не был разрешён."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "12. Права потребителей",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ничто в настоящем документе, Условиях использования или правилах магазина не исключает и не ограничивает права, от которых нельзя отказаться по применимому законодательству."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для потребителей Квебека Закон о защите прав потребителей может предоставлять средства защиты в отношении дистанционных договоров, включая определённые случаи:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "отсутствия обязательной информации до покупки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "неполучения договора или подтверждения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "непредоставления приобретённой услуги;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "неправильного или нераскрытого списания;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "невозврата средств после правомерной отмены."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Применимость права зависит от фактов, сроков, стороны, которая считается продавцом, и канала оплаты. Настоящий документ не является юридической консультацией."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Официальная информация Office de la protection du consommateur:\n"
              },
              {
                "type": "externalLink",
                "text": "https://www.opc.gouv.qc.ca/consommateur/sujet/achat/internet/annulation/",
                "href": "https://www.opc.gouv.qc.ca/consommateur/sujet/achat/internet/annulation/"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы считаете, что обязательное право нарушено:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "сохраните экран покупки, квитанцию, переписку и подтверждение отмены;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обратитесь в Apple или Google по каналу покупки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "направьте подробное обращение OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "при необходимости обратитесь в Office de la protection du consommateur или получите юридическую консультацию."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "13. Споры и возвратный платёж",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Возвратный платёж через эмитента карты может быть доступен в случаях, предусмотренных законом или правилами платёжного средства. До его инициирования:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "попытайтесь отменить подписку и запросить возврат через правильный канал;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сохраните доказательства;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "убедитесь, что спор относится к правильной транзакции;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "учитывайте, что магазин может ограничить связанную учётную запись во время расследования."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящий раздел не препятствует немедленному сообщению о мошенничестве или использованию обязательного права на возвратный платёж."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "14. Изменения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple, Google и применимое законодательство могут изменять процедуры. Перед отменой или запросом возврата проверяйте статус подписки, дату продления, квитанцию, условия покупки и актуальную инструкцию магазина."
              }
            ]
          }
        ]
      },
      {
        "key": "section-17",
        "title": "15. Контакты",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Поддержка подписки и возвратов:"
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
                "text": "Юридические вопросы:"
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
                "text": "Адрес:"
              },
              {
                "type": "text",
                "text": "\nSoavinjato Andrianarisoa\n1203 Rue Normont\nLaval\nQuébec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Указывайте номер заказа, но не отправляйте полный номер карты, пароль магазина, пароль интернет-банка, PIN-код или одноразовый код."
              }
            ]
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  CancellationDocument
>;
