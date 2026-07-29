import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type SubscriptionInlineContent =
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

type SubscriptionBlock =
  | {
      type: "paragraph";
      content: readonly SubscriptionInlineContent[];
    }
  | {
      type: "callout";
      content: readonly SubscriptionInlineContent[];
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
      items: readonly (readonly SubscriptionInlineContent[])[];
    }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly (readonly SubscriptionInlineContent[])[])[];
    }
  | {
      type: "address";
      content: readonly SubscriptionInlineContent[];
    };

type SubscriptionSection = {
  key: string;
  title: string;
  blocks: readonly SubscriptionBlock[];
};

type SubscriptionDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  intro: readonly SubscriptionBlock[];
  sections: readonly SubscriptionSection[];
};

export const subscriptionContent = {
  "en": {
    "title": "Subscription Management",
    "seoTitle": "Subscription Management | OPHIR",
    "description": "Learn how to purchase, renew, restore, cancel, and manage an OPHIR subscription through the Apple App Store or Google Play.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Guide to purchasing, renewal, and access management**"
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
                "text": "Subscription support: "
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
                "text": "This guide explains how to manage an OPHIR subscription. The terms of a specific purchase shown by the Apple App Store or Google Play, the receipt, and the applicable store rules form part of your purchase. Nothing in this guide limits mandatory consumer rights."
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
              "Question",
              "Answer"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Where is a subscription purchased?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Through the Apple App Store or Google Play from within the OPHIR application."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Who processes payment?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "The store through which the subscription is purchased. OPHIR does not receive your full payment card number."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Does a subscription renew?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "A recurring subscription generally renews automatically until cancelled, unless the purchase screen states otherwise."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Where can I see its status?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "In the subscription settings of the Apple Account or Google Account used for the purchase."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Does deleting the application cancel it?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "No. You must separately cancel the subscription through the applicable store."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Where can I get help?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "For OPHIR features, contact "
                  },
                  {
                    "type": "emailLink",
                    "text": "support@joinophir.app",
                    "email": "support@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": ". Store billing questions may also require Apple or Google support."
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
                "text": "This guide applies to paid OPHIR plans purchased through:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the Apple App Store purchase system on a supported Apple device;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the Google Play billing system on a supported Android device."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "It supplements the "
              },
              {
                "type": "internalLink",
                "text": "OPHIR Terms of Service",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " and the "
              },
              {
                "type": "internalLink",
                "text": "Cancellation and Refunds",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": " page. It does not replace:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the plan, price, currency, tax, and billing-period information on the purchase screen;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the Apple or Google receipt;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the applicable store rules;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "mandatory consumer protection law."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If OPHIR offers payment through another channel in the future, this guide and the "
              },
              {
                "type": "internalLink",
                "text": "Terms of Service",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " should be updated before those sales begin."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "2. What an OPHIR Subscription Provides",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A subscription provides access to paid OPHIR features for the period and to the extent described at purchase. Available plans, features, prices, trial offers, and billing periods may depend on:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "platform;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "store country or region;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "currency and applicable taxes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "current promotion;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "application version;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a previously purchased plan."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Before purchase is confirmed, the store should display applicable information. Review it carefully, including:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "plan name;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "price and currency;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "billing-period length;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "whether a trial or introductory period applies and how long it lasts;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the first or next charge date;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "automatic renewal terms;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the available cancellation method."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "3. Purchase and Confirmation",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A purchase is confirmed using Apple or Google tools. The store may require a password, biometric check, or another authentication method."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "After a successful purchase:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the store issues an electronic receipt;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR may receive a limited purchase confirmation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "paid features are activated after the subscription is validated;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "activation may take time because of connectivity, store processing, or synchronization."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Keep the receipt. It can identify the store, the Apple Account or Google Account, order number, purchase date, and plan."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may receive information needed to manage access, such as subscription status, product or plan, entitlement period, transaction or receipt identifier, and cancellation or refund status. OPHIR does not receive your full payment card number from the store."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "4. Automatic Renewal",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Unless the purchase screen states otherwise, a recurring subscription renews for another billing period until cancelled."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple or Google charges the payment method linked to the store account in accordance with its procedures. The exact renewal date appears in subscription settings or on the receipt."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "To avoid the next charge:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "check the renewal date in the store;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "cancel before the store's stated deadline;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirm that the status changed to cancelled or that an expiry date appears;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "keep the cancellation confirmation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Cancellation after a new charge has been processed generally does not reverse the completed transaction. A refund must be considered separately."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "5. Identifying Where the Subscription Was Purchased",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Check:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the email receipt from Apple or Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the Apple Account subscriptions section;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the Google Play Payments and subscriptions section;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the transaction description on the payment method statement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the store account used on the device."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If the subscription does not appear, possible reasons include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "you are signed in to a different Apple Account or Google Account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a family-group member made the purchase;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the purchase is still processing;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the plan has expired or was cancelled;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the purchase was not completed;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the transaction relates to another application."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not send support your full card number, PIN, Apple Account or Google Account password, online banking password, or one-time code."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "6. Managing an Apple App Store Subscription",
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
                  "text": "review the plan, price, renewal date, and available actions."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple may also provide subscription management through Apple Account on the web."
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
                "text": "You must use the Apple Account that made the purchase. OPHIR does not know your Apple Account password and cannot sign in on your behalf."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "7. Managing a Google Play Subscription",
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
                  "text": "review the plan, price, renewal date, and available actions."
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
                "text": "You must use the Google Account that made the purchase. OPHIR does not know your Google Account password and cannot manage it on your behalf."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "8. Changing a Plan or Billing Period",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If OPHIR offers more than one plan, the store or application may allow you to change the plan or billing period."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Before confirming a change, check:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the new price and currency;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "when the change takes effect;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "whether an immediate charge will occur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "how the unused portion of the current period is treated;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "whether the renewal date changes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "which features will begin or end."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The timing of an upgrade, downgrade, or replacement is determined by OPHIR's available configuration and store rules. If the desired action is unavailable, do not make a second purchase through another store account. "
              },
              {
                "type": "internalLink",
                "text": "Contact",
                "page": "contact"
              },
              {
                "type": "text",
                "text": " support first."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "9. Restoring a Purchase",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If an active subscription is not recognized after reinstalling the application, changing devices, or signing in:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "confirm that you are using the same Apple Account or Google Account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirm that the subscription is active in the store;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "update OPHIR to the current version;"
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
                  "text": "use Restore Purchases if that feature is available;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "restart the application after restoration;"
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
                  "text": " if necessary."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "In your request, identify the platform, OPHIR account email, plan, purchase date, and order or transaction number from the receipt. Conceal unrelated payment and personal information."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A subscription purchased through one Apple Account or Google Account may not be available through another store account. Stores generally do not support transferring a purchase between Apple and Google."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "10. Payment Problems",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If a payment method is declined, the store may:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "retry the charge;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ask you to update the payment method;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "temporarily continue access during a store-provided grace period;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "suspend or end the subscription."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Review the payment method and store messages. OPHIR does not receive your full card number and generally cannot correct a bank or payment-method decline."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If the charge succeeded but paid features were not activated:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "do not purchase the subscription again;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "review the order status;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "restore the purchase;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "contact support with the receipt and a description of the error."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "11. Actions That Do Not Cancel a Subscription",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The following actions do not, by themselves, cancel a store subscription:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "deleting the OPHIR application;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "signing out;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "disconnecting a financial account or Plaid;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "stopping use of paid features;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "deleting the OPHIR account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "changing devices;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "contacting support without completing the store cancellation process."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you delete your OPHIR account, first cancel the subscription separately in the Apple App Store or Google Play. Account deletion governs OPHIR data, while subscription cancellation governs future store charges."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "12. Payment Privacy and Security",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple or Google processes payment credentials under its own rules. OPHIR receives only limited information needed to verify access, provide support, and comply with law."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Never send OPHIR:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "your full payment card number;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the card security code;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a PIN;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a store or online banking password;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a one-time verification code;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a full identity document unless it has been separately and reasonably requested for a legally permitted verification."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "13. Related Documents",
        "blocks": [
          {
            "type": "list",
            "items": [
              [
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
                  "type": "internalLink",
                  "text": "Account Deletion and Data Requests",
                  "page": "accountData"
                },
                {
                  "type": "text",
                  "text": " once that page is published."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Store rules may change. Check current Apple or Google information before taking action."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "14. Contact",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Subscription and access support:"
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
                "text": "In your request, identify the platform, OPHIR account email, purchase date, and order number. Do not send a password, full card number, PIN, or one-time code."
              }
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Gérer l’abonnement",
    "seoTitle": "Gérer l’abonnement | OPHIR",
    "description": "Découvrez comment acheter, renouveler, restaurer, annuler et gérer un abonnement OPHIR dans l’App Store d’Apple ou sur Google Play.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Guide d’achat, de renouvellement et de gestion de l’accès**"
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
                "text": "Assistance relative aux abonnements : "
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
                "text": "Le présent guide explique comment gérer un abonnement OPHIR. Les conditions d’un achat donné qui sont présentées dans l’App Store d’Apple ou sur Google Play, le reçu et les règles applicables du magasin font partie de votre achat. Le présent guide ne limite aucun droit impératif accordé aux consommateurs."
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
              "Question",
              "Réponse"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Où l’abonnement est-il acheté?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Dans l’App Store d’Apple ou sur Google Play à partir de l’application OPHIR."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Qui traite le paiement?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Le magasin dans lequel l’abonnement est acheté. OPHIR ne reçoit pas le numéro complet de votre carte de paiement."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "L’abonnement est-il renouvelé?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Un abonnement récurrent est généralement renouvelé automatiquement jusqu’à son annulation, sauf indication contraire à l’écran d’achat."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Où puis-je consulter son état?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Dans les paramètres d’abonnement du compte Apple ou du compte Google utilisé pour l’achat."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "La suppression de l’application annule-t-elle l’abonnement?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Non. Vous devez annuler l’abonnement séparément dans le magasin concerné."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Où puis-je obtenir de l’aide?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Pour les fonctions d’OPHIR, écrivez à "
                  },
                  {
                    "type": "emailLink",
                    "text": "support@joinophir.app",
                    "email": "support@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": ". Les questions de facturation du magasin peuvent également nécessiter l’aide d’Apple ou de Google."
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
                "text": "Le présent guide s’applique aux forfaits OPHIR payants achetés au moyen :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "du système d’achat de l’App Store sur un appareil Apple pris en charge;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "du système de facturation de Google Play sur un appareil Android pris en charge."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Il complète les "
              },
              {
                "type": "internalLink",
                "text": "Conditions d’utilisation d’OPHIR",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " et la page "
              },
              {
                "type": "internalLink",
                "text": "Annulation et remboursements",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": ". Il ne remplace pas :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "les renseignements sur le forfait, le prix, la devise, les taxes et la période de facturation présentés à l’écran d’achat;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le reçu d’Apple ou de Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les règles applicables du magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les dispositions impératives du droit de la protection du consommateur."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si OPHIR offre à l’avenir le paiement par un autre canal, le présent guide et les "
              },
              {
                "type": "internalLink",
                "text": "Conditions d’utilisation",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " devront être mis à jour avant que ces ventes commencent."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "2. Ce que procure un abonnement OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Un abonnement donne accès aux fonctions payantes d’OPHIR pendant la période et dans la mesure indiquées au moment de l’achat. Les forfaits, les fonctions, les prix, les offres d’essai et les périodes de facturation disponibles peuvent varier selon :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "la plateforme;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le pays ou la région du magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la devise et les taxes applicables;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la promotion en cours;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la version de l’application;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un forfait acheté antérieurement."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Avant la confirmation de l’achat, le magasin devrait afficher les renseignements applicables. Examinez-les attentivement, notamment :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le nom du forfait;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le prix et la devise;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la durée de la période de facturation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’existence et la durée d’une période d’essai ou d’une période de lancement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la date du premier ou du prochain prélèvement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les modalités de renouvellement automatique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la méthode d’annulation disponible."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "3. Achat et confirmation",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L’achat est confirmé au moyen des outils d’Apple ou de Google. Le magasin peut exiger un mot de passe, une vérification biométrique ou une autre méthode d’authentification."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Après un achat réussi :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le magasin délivre un reçu électronique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR peut recevoir une confirmation limitée de l’achat;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les fonctions payantes sont activées après la validation de l’abonnement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’activation peut prendre un certain temps en raison de la connectivité, du traitement par le magasin ou de la synchronisation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Conservez le reçu. Il peut servir à identifier le magasin, le compte Apple ou le compte Google, le numéro de commande, la date d’achat et le forfait."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut recevoir les renseignements nécessaires pour gérer l’accès, comme l’état de l’abonnement, le produit ou le forfait, la période d’admissibilité, l’identifiant de transaction ou de reçu ainsi que l’état d’une annulation ou d’un remboursement. OPHIR ne reçoit pas du magasin le numéro complet de votre carte de paiement."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "4. Renouvellement automatique",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sauf indication contraire à l’écran d’achat, un abonnement récurrent est renouvelé pour une autre période de facturation jusqu’à son annulation."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple ou Google débite le mode de paiement associé au compte du magasin conformément à ses procédures. La date exacte du renouvellement figure dans les paramètres d’abonnement ou sur le reçu."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour éviter le prochain prélèvement :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "vérifiez la date de renouvellement dans le magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "annulez l’abonnement avant l’échéance indiquée par le magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirmez que l’état est passé à « annulé » ou qu’une date d’expiration est affichée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "conservez la confirmation d’annulation."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "L’annulation effectuée après le traitement d’un nouveau prélèvement n’annule généralement pas la transaction déjà réalisée. Toute demande de remboursement doit être examinée séparément."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "5. Déterminer où l’abonnement a été acheté",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vérifiez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le reçu transmis par courriel par Apple ou Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la section des abonnements du compte Apple;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la section Paiements et abonnements de Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la description de la transaction sur le relevé du mode de paiement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le compte du magasin utilisé sur l’appareil."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si l’abonnement ne s’affiche pas, les raisons possibles comprennent :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "vous avez ouvert une session dans un autre compte Apple ou compte Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un membre d’un groupe familial a effectué l’achat;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’achat est toujours en cours de traitement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le forfait a expiré ou a été annulé;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’achat n’a pas été effectué;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la transaction concerne une autre application."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ne transmettez pas à l’assistance le numéro complet de votre carte, un NIP, le mot de passe de votre compte Apple ou de votre compte Google, votre mot de passe de services bancaires en ligne ni un code à usage unique."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "6. Gérer un abonnement de l’App Store d’Apple",
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
                  "text": "examinez le forfait, le prix, la date de renouvellement et les actions disponibles."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple peut également permettre la gestion des abonnements à partir du compte Apple sur le Web."
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
                "text": "Vous devez utiliser le compte Apple avec lequel l’achat a été effectué. OPHIR ne connaît pas le mot de passe de votre compte Apple et ne peut pas ouvrir une session en votre nom."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "7. Gérer un abonnement Google Play",
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
                  "text": "examinez le forfait, le prix, la date de renouvellement et les actions disponibles."
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
                "text": "Vous devez utiliser le compte Google avec lequel l’achat a été effectué. OPHIR ne connaît pas le mot de passe de votre compte Google et ne peut pas gérer ce compte en votre nom."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "8. Modifier le forfait ou la période de facturation",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si OPHIR offre plus d’un forfait, le magasin ou l’application peut vous permettre de modifier le forfait ou la période de facturation."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Avant de confirmer une modification, vérifiez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le nouveau prix et la devise;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la date de prise d’effet de la modification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "si un prélèvement immédiat sera effectué;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la façon dont la portion inutilisée de la période en cours sera traitée;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "si la date de renouvellement changera;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les fonctions qui commenceront ou cesseront d’être offertes."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le moment où une augmentation, une réduction ou un remplacement de forfait prend effet est déterminé par la configuration disponible d’OPHIR et les règles du magasin. Si l’action souhaitée n’est pas disponible, n’effectuez pas un deuxième achat avec un autre compte du magasin. Communiquez d’abord avec l’assistance."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "9. Restaurer un achat",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si un abonnement actif n’est pas reconnu après la réinstallation de l’application, un changement d’appareil ou l’ouverture d’une session :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "confirmez que vous utilisez le même compte Apple ou le même compte Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "confirmez que l’abonnement est actif dans le magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "mettez OPHIR à jour vers la version actuelle;"
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
                  "text": "utilisez la fonction Restaurer les achats si elle est disponible;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "redémarrez l’application après la restauration;"
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
                  "text": " au besoin."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Dans votre demande, indiquez la plateforme, l’adresse de courriel du compte OPHIR, le forfait, la date d’achat et le numéro de commande ou de transaction figurant sur le reçu. Masquez les renseignements personnels et de paiement sans rapport avec la demande."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Un abonnement acheté avec un compte Apple ou un compte Google peut ne pas être disponible dans un autre compte du magasin. Les magasins ne permettent généralement pas de transférer un achat entre Apple et Google."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "10. Problèmes de paiement",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si un mode de paiement est refusé, le magasin peut :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "tenter de nouveau le prélèvement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vous demander de mettre à jour le mode de paiement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "maintenir temporairement l’accès pendant un délai de grâce offert par le magasin;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "suspendre l’abonnement ou y mettre fin."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Examinez le mode de paiement et les messages du magasin. OPHIR ne reçoit pas le numéro complet de votre carte et ne peut généralement pas corriger un refus provenant d’une banque ou du mode de paiement."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si le prélèvement a été effectué, mais que les fonctions payantes ne sont pas activées :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "n’achetez pas l’abonnement de nouveau;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vérifiez l’état de la commande;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "restaurez l’achat;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "communiquez avec l’assistance en joignant le reçu et une description de l’erreur."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "11. Actions qui n’annulent pas un abonnement",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les actions suivantes n’annulent pas à elles seules un abonnement acheté dans un magasin :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "supprimer l’application OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "fermer la session;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "déconnecter un compte financier ou Plaid;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "cesser d’utiliser les fonctions payantes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "supprimer le compte OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "changer d’appareil;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "communiquer avec l’assistance sans terminer la procédure d’annulation du magasin."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous supprimez votre compte OPHIR, annulez d’abord l’abonnement séparément dans l’App Store d’Apple ou sur Google Play. La suppression du compte concerne les données détenues par OPHIR, tandis que l’annulation de l’abonnement concerne les futurs prélèvements du magasin."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "12. Confidentialité et sécurité des paiements",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple ou Google traite les renseignements de paiement conformément à ses propres règles. OPHIR reçoit uniquement les renseignements limités nécessaires pour vérifier l’accès, fournir de l’assistance et respecter le droit applicable."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ne transmettez jamais à OPHIR :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "le numéro complet de votre carte de paiement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le code de sécurité de la carte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un NIP;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un mot de passe du magasin ou de services bancaires en ligne;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un code de vérification à usage unique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "une pièce d’identité complète, sauf si elle a fait l’objet d’une demande distincte et raisonnable aux fins d’une vérification permise par la loi."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "13. Documents connexes",
        "blocks": [
          {
            "type": "list",
            "items": [
              [
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
                  "type": "internalLink",
                  "text": "Suppression du compte et demandes relatives aux données",
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
                "text": "Les règles des magasins peuvent changer. Consultez les renseignements à jour d’Apple ou de Google avant d’agir."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "14. Contact",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Assistance relative aux abonnements et à l’accès :"
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
                "text": "Adresse postale :"
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
                "text": "Dans votre demande, indiquez la plateforme, l’adresse de courriel du compte OPHIR, la date d’achat et le numéro de commande. Ne transmettez pas de mot de passe, de numéro complet de carte, de NIP ni de code à usage unique."
              }
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "Управление подпиской",
    "seoTitle": "Управление подпиской | OPHIR",
    "description": "Узнайте, как оформить, продлить, восстановить, отменить подписку OPHIR и управлять ею через Apple App Store или Google Play.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Руководство по покупке, продлению и управлению доступом**"
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
                "text": "Поддержка подписки: "
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
                "text": "Это руководство объясняет управление подпиской OPHIR. Условия конкретной покупки, указанные на экране Apple App Store или Google Play, в квитанции и в применимых правилах магазина, являются частью вашей покупки. Ничто в этом документе не ограничивает обязательные права потребителя."
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
              "Вопрос",
              "Ответ"
            ],
            "rows": [
              [
                [
                  {
                    "type": "text",
                    "text": "Где оформляется подписка?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Через Apple App Store или Google Play из приложения OPHIR."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Кто обрабатывает оплату?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Магазин, через который оформлена подписка. OPHIR не получает полный номер платёжной карты."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Продлевается ли подписка?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Повторяющаяся подписка обычно продлевается автоматически до отмены, если на экране покупки не указано иное."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Где посмотреть статус?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "В настройках подписок Apple Account или Google Account, использованного для покупки."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Удаление приложения отменяет подписку?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "Нет. Подписку необходимо отменить отдельно в соответствующем магазине."
                  }
                ]
              ],
              [
                [
                  {
                    "type": "text",
                    "text": "Куда обращаться?"
                  }
                ],
                [
                  {
                    "type": "text",
                    "text": "По вопросам функций OPHIR - "
                  },
                  {
                    "type": "emailLink",
                    "text": "support@joinophir.app",
                    "email": "support@joinophir.app"
                  },
                  {
                    "type": "text",
                    "text": "; по оплате магазина также может потребоваться поддержка Apple или Google."
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
                "text": "Настоящее руководство применяется к платным планам OPHIR, приобретаемым через:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "систему покупок Apple App Store на поддерживаемом устройстве Apple;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "систему оплаты Google Play на поддерживаемом устройстве Android."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Руководство дополняет "
              },
              {
                "type": "internalLink",
                "text": "Условия использования",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " OPHIR и страницу «"
              },
              {
                "type": "internalLink",
                "text": "Отмена подписки и возвраты",
                "page": "cancellation"
              },
              {
                "type": "text",
                "text": "». Оно не заменяет:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "сведения о плане, цене, валюте, налогах и расчётном периоде на экране покупки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "квитанцию Apple или Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "правила соответствующего магазина;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обязательное законодательство о защите прав потребителей."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если OPHIR в будущем предложит оплату через иной канал, до начала такой продажи настоящее руководство и "
              },
              {
                "type": "internalLink",
                "text": "Условия использования",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " должны быть обновлены."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "2. Что представляет собой подписка OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Подписка предоставляет доступ к платным функциям OPHIR на период и в объёме, указанных при покупке. Доступные планы, функции, цены, пробные предложения и расчётные периоды могут зависеть от:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "платформы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "страны или региона магазина;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "валюты и применимых налогов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "действующей акции;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "версии приложения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "ранее приобретённого плана."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Перед подтверждением покупки магазин должен показать применимые сведения. Пользователь обязан проверить их до оплаты, включая:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "наименование плана;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "стоимость и валюту;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "длительность расчётного периода;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "наличие и длительность пробного или льготного периода;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "дату первого или следующего списания;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "правила автоматического продления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "доступный способ отмены."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "3. Покупка и подтверждение",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Покупка подтверждается средствами Apple или Google. Магазин может потребовать пароль, биометрическую проверку или иной способ аутентификации."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "После успешной покупки:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "магазин выдаёт электронную квитанцию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "OPHIR может получить ограниченное подтверждение покупки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "платные функции активируются после проверки действительности подписки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "активация может занять некоторое время из-за связи, обработки магазина или синхронизации."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сохраняйте квитанцию. Она помогает определить магазин, Apple Account или Google Account, номер заказа, дату покупки и план."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может получать сведения, необходимые для управления доступом, например статус подписки, продукт или план, период действия, идентификатор транзакции или квитанции и сведения об отмене или возврате. OPHIR не получает от магазина полный номер вашей платёжной карты."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "4. Автоматическое продление",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если на экране покупки не указано иное, повторяющаяся подписка продлевается на очередной расчётный период до её отмены."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple или Google списывает оплату со способа платежа, связанного с учётной записью магазина, в порядке и сроки, установленные магазином. Точная дата продления отображается в настройках подписки или квитанции."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Чтобы избежать следующего списания:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "проверьте дату продления в магазине;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отмените подписку до установленного магазином срока;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "убедитесь, что статус изменился на отменённый или появилась дата окончания;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сохраните подтверждение отмены."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Отмена после обработки нового списания обычно не отменяет уже завершённую транзакцию. Вопрос возврата рассматривается отдельно."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "5. Как определить, где оформлена подписка",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Проверьте:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "квитанцию по электронной почте от Apple или Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "раздел подписок Apple Account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "раздел «Платежи и подписки» в Google Play;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "описание операции в выписке по способу оплаты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "учётную запись магазина, используемую на устройстве."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если подписка не отображается, возможные причины:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "выполнен вход в другой Apple Account или Google Account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "покупку совершил участник семейной группы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "покупка ещё обрабатывается;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "план уже истёк или отменён;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "покупка не была завершена;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "транзакция относится к другому приложению."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не отправляйте в поддержку полный номер карты, PIN-код, пароль Apple Account или Google Account, пароль интернет-банка или одноразовый код."
              }
            ]
          }
        ]
      },
      {
        "key": "section-8",
        "title": "6. Управление подпиской Apple App Store",
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
                  "text": "просмотрите план, цену, дату продления и доступные действия."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple также может предоставлять управление подписками через Apple Account в интернете."
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
                "text": "Для просмотра или изменения подписки необходимо использовать Apple Account, с которого была совершена покупка. OPHIR не знает пароль Apple Account и не может войти в него от имени пользователя."
              }
            ]
          }
        ]
      },
      {
        "key": "section-9",
        "title": "7. Управление подпиской Google Play",
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
                  "text": "просмотрите план, цену, дату продления и доступные действия."
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
                "text": "Необходимо использовать Google Account, с которого была совершена покупка. OPHIR не знает пароль Google Account и не может управлять им от имени пользователя."
              }
            ]
          }
        ]
      },
      {
        "key": "section-10",
        "title": "8. Изменение плана или расчётного периода",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если OPHIR предлагает несколько планов, магазин или приложение может позволять перейти на другой план или расчётный период."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "До подтверждения изменения проверьте:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "новую цену и валюту;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "дату вступления изменения в силу;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "будет ли списание немедленным;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "как учитывается неиспользованная часть текущего периода;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "меняется ли дата продления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "какие функции добавляются или прекращаются."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Порядок повышения, понижения или замены плана определяется доступной конфигурацией OPHIR и правилами магазина. Если нужного действия нет, не оформляйте вторую покупку через другую учётную запись: сначала обратитесь в поддержку."
              }
            ]
          }
        ]
      },
      {
        "key": "section-11",
        "title": "9. Восстановление покупки",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если действующая подписка не распознана после переустановки приложения, смены устройства или входа:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "убедитесь, что используется тот же Apple Account или Google Account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверьте, что подписка активна в магазине;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обновите OPHIR до актуальной версии;"
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
                  "text": "используйте функцию «Восстановить покупки», если она доступна;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "перезапустите приложение после восстановления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "при необходимости обратитесь на "
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
                "text": "В обращении укажите платформу, адрес электронной почты OPHIR, название плана, дату покупки и номер заказа или транзакции из квитанции. Скрывайте ненужные платёжные и персональные сведения."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Подписка, приобретённая через один Apple Account или Google Account, может быть недоступна в другой учётной записи магазина. Перенос покупки между Apple и Google обычно не поддерживается магазинами."
              }
            ]
          }
        ]
      },
      {
        "key": "section-12",
        "title": "10. Проблемы с оплатой",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если способ оплаты отклонён, магазин может:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "повторить попытку списания;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предложить обновить способ оплаты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "временно сохранить доступ в течение предусмотренного им льготного периода;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "приостановить или прекратить подписку."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Проверьте способ оплаты и сообщения магазина. OPHIR не получает полный номер карты и обычно не может исправить отклонение банка или платёжного метода."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если списание прошло, но платные функции не активировались:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "не покупайте подписку повторно;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "проверьте статус заказа;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выполните восстановление покупки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обратитесь в поддержку с квитанцией и описанием ошибки."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-13",
        "title": "11. Что не отменяет подписку",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Следующие действия сами по себе не отменяют подписку магазина:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "удаление приложения OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "выход из учётной записи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отключение финансового счёта или Plaid;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "прекращение использования платных функций;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "удаление учётной записи OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "смена устройства;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "обращение в поддержку без завершения процедуры отмены магазина."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы удаляете аккаунт OPHIR, сначала отдельно отмените подписку в Apple App Store или Google Play. Удаление аккаунта регулирует данные OPHIR, а отмена подписки регулирует будущие списания магазина."
              }
            ]
          }
        ]
      },
      {
        "key": "section-14",
        "title": "12. Конфиденциальность и безопасность платежей",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Apple или Google обрабатывает платёжные реквизиты в соответствии со своими правилами. OPHIR получает только ограниченные сведения, необходимые для проверки доступа, поддержки и соблюдения закона."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Никогда не отправляйте OPHIR:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "полный номер платёжной карты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "код безопасности карты;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "PIN-код;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "пароль магазина или интернет-банка;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "одноразовый код подтверждения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "полный снимок документа, если он не был отдельно и обоснованно запрошен для предусмотренной законом проверки."
                }
              ]
            ]
          }
        ]
      },
      {
        "key": "section-15",
        "title": "13. Связанные документы",
        "blocks": [
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "internalLink",
                  "text": "Условия использования",
                  "page": "termsOfService"
                },
                {
                  "type": "text",
                  "text": " OPHIR;"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Политика конфиденциальности",
                  "page": "privacyPolicy"
                },
                {
                  "type": "text",
                  "text": " OPHIR;"
                }
              ],
              [
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
                  "type": "internalLink",
                  "text": "Удаление аккаунта и запросы о данных",
                  "page": "accountData"
                },
                {
                  "type": "text",
                  "text": " после публикации соответствующей страницы."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Правила магазина могут изменяться. Перед действием проверяйте актуальную информацию Apple или Google."
              }
            ]
          }
        ]
      },
      {
        "key": "section-16",
        "title": "14. Контакты",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Поддержка подписки и доступа:"
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
                "text": "В обращении укажите платформу, адрес учётной записи OPHIR, дату покупки и номер заказа. Не отправляйте пароль, полный номер карты, PIN-код или одноразовый код."
              }
            ]
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  SubscriptionDocument
>;
