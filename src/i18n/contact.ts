import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type ContactInlineContent =
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
    };

type ContactBlock =
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "contactCards";
      cards: readonly {
        title: string;
        blocks: readonly ContactBlock[];
      }[];
    }
  | {
      type: "paragraph";
      content: readonly ContactInlineContent[];
    }
  | {
      type: "list";
      items: readonly (readonly ContactInlineContent[])[];
    }
  | {
      type: "address";
      content: readonly ContactInlineContent[];
    };

type ContactSection = {
  key: string;
  title: string;
  blocks: readonly ContactBlock[];
};

type ContactDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  intro: readonly ContactBlock[];
  sections: readonly ContactSection[];
};

export const contactContent = {
  "en": {
    "title": "Contact",
    "seoTitle": "Contact | OPHIR",
    "description": "Contact information for OPHIR general inquiries, technical support, privacy, legal notices, and business communications.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Contact OPHIR through the channel that best fits your inquiry so it can be directed to the appropriate process. For technical assistance, you may also use the "
          },
          {
            "type": "internalLink",
            "text": "Contact Support",
            "page": "support"
          },
          {
            "type": "text",
            "text": " page."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section-1",
        "title": "Choose a Contact",
        "blocks": [
          {
            "type": "contactCards",
            "cards": [
              {
                "title": "General Information",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "For general questions about OPHIR, the application, or available materials that do not require technical, legal, or privacy review:"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Email:"
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
                  }
                ]
              },
              {
                "title": "Technical Support and Security",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Use this address for questions about:"
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
                          "text": "application functionality and technical errors;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "connecting or refreshing a financial account and Plaid;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "transactions, categories, budgets, forecasts, and the financial assistant;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "subscriptions, paid access, and restoring a purchase;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "suspicious activity or a possible vulnerability; and"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "application or website accessibility."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Email:"
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
                        "text": "Detailed instructions and form:"
                      },
                      {
                        "type": "text",
                        "text": " "
                      },
                      {
                        "type": "internalLink",
                        "text": "Contact Support",
                        "page": "support"
                      }
                    ]
                  }
                ]
              },
              {
                "title": "Privacy and Personal Information",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Use this address for:"
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
                          "text": "correction or deletion of information;"
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
                          "text": "portability of certain computerized personal information;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "questions about automated processing; and"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "privacy complaints and other privacy inquiries."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Email:"
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
                        "text": "Instructions:"
                      },
                      {
                        "type": "text",
                        "text": " "
                      },
                      {
                        "type": "internalLink",
                        "text": "Account Deletion and Data Requests",
                        "page": "accountData"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "OPHIR may require reasonable identity verification before completing a request that affects an account or personal information."
                      }
                    ]
                  }
                ]
              },
              {
                "title": "Official, Legal, and Business Communications",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "For legal notices, questions about the "
                      },
                      {
                        "type": "internalLink",
                        "text": "Terms of Service",
                        "page": "termsOfService"
                      },
                      {
                        "type": "text",
                        "text": ", business inquiries, and other formal communications:"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Email:"
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
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Using this email address does not waive or replace any method of service, delivery, or filing required by applicable law, contract, or official procedure."
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
        "title": "Quick Actions",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Some matters can be addressed without waiting for a response:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "answers about OPHIR, financial connections, and Plaid: "
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
                  "text": "plan, renewal, and purchase-restoration information: "
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
                  "text": "stopping future charges and requesting a refund: "
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
                  "text": "account deletion or a data request: "
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
                  "text": "account protection and vulnerability reporting: "
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
                  "text": "collection and use of personal information: "
                },
                {
                  "type": "internalLink",
                  "text": "Privacy Policy",
                  "page": "privacyPolicy"
                },
                {
                  "type": "text",
                  "text": "; and"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "mobile application and website technologies: "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Cancelling a subscription, deleting the application, deleting an account, and disconnecting a financial account are separate actions. To stop future charges, cancel the subscription directly through the Apple App Store or Google Play."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "What to Include",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "To help us understand your inquiry, include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "an email address where OPHIR can respond;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a short, clear subject;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a description of your question or issue;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the platform, device, and application version, if relevant;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the approximate date, time, and time zone of an error;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the error text and steps you have already tried; and"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the order number from an Apple or Google receipt if the inquiry concerns a subscription."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If your inquiry concerns an account, write from the email address associated with that account where possible. Send one inquiry to the single address that best fits the matter. Sending the same message to multiple addresses may delay review."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "Do Not Send Confidential Credentials",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR does not ask you to send the following by email:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "an online-banking password;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "an Apple Account or Google Account password;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a full bank account or payment card number;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a card security code;"
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
                  "text": "a one-time code; or"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a secret key or backup recovery code."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Before sending a screenshot or receipt, hide information that is not needed to address your inquiry. If you believe a bank account or card has been compromised, contact the financial institution immediately through its official channel. OPHIR cannot block a card, freeze a bank account, or reverse a banking transaction."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Mailing Address",
        "blocks": [
          {
            "type": "address",
            "content": [
              {
                "type": "strong",
                "text": "OPHIR operator:"
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
                "text": "For urgent technical issues, use "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": " rather than postal mail."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "Responses and Inquiry Handling",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR aims to respond within a reasonable time. Complex technical issues, security reviews, personal information requests, and matters that depend on Apple, Google, Plaid, or a financial institution may take additional time."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may request additional information or reasonable identity verification, or direct you to the appropriate third party if that party controls the matter. Personal information requests are handled within the time and process required by applicable law."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Information in an inquiry is used to review and address the matter, respond to the user, protect the account and Service, prevent abuse, and meet legal obligations. For details, see the "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you require an accessible communication format or another reasonable accommodation when communicating with OPHIR, include that request in your inquiry."
              }
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Contact",
    "seoTitle": "Contact | OPHIR",
    "description": "Coordonnées d’OPHIR pour les demandes générales, l’assistance technique, la protection des renseignements personnels, les avis juridiques et les communications commerciales.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Communiquez avec OPHIR en utilisant le canal qui correspond le mieux à votre demande afin qu’elle soit dirigée vers le processus approprié. Pour obtenir de l’aide technique, vous pouvez également consulter la page "
          },
          {
            "type": "internalLink",
            "text": "Contacter l’assistance",
            "page": "support"
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
        "key": "section-1",
        "title": "Choisir le bon point de contact",
        "blocks": [
          {
            "type": "contactCards",
            "cards": [
              {
                "title": "Renseignements généraux",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Pour toute question générale au sujet d’OPHIR, de l’application ou de la documentation disponible qui ne nécessite pas un examen technique, juridique ou lié à la protection des renseignements personnels :"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Courriel :"
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
                  }
                ]
              },
              {
                "title": "Assistance technique et sécurité",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Utilisez cette adresse pour les questions concernant :"
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
                          "text": "le fonctionnement de l’application et les erreurs techniques;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "la connexion ou l’actualisation d’un compte financier et Plaid;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "les opérations, les catégories, les budgets, les prévisions et l’assistant financier;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "les abonnements, l’accès payant et la restauration d’un achat;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "une activité suspecte ou une vulnérabilité possible;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "l’accessibilité de l’application ou du site Web."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Courriel :"
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
                        "text": "Instructions détaillées et formulaire :"
                      },
                      {
                        "type": "text",
                        "text": " "
                      },
                      {
                        "type": "internalLink",
                        "text": "Contacter l’assistance",
                        "page": "support"
                      }
                    ]
                  }
                ]
              },
              {
                "title": "Protection des renseignements personnels",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Utilisez cette adresse pour demander ou signaler :"
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
                          "text": "la rectification ou la suppression de renseignements;"
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
                          "text": "la portabilité de certains renseignements personnels informatisés;"
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
                          "text": "une plainte ou toute autre question relative à la protection des renseignements personnels."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Courriel :"
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
                        "text": "Instructions :"
                      },
                      {
                        "type": "text",
                        "text": " "
                      },
                      {
                        "type": "internalLink",
                        "text": "Suppression du compte et demandes relatives aux données",
                        "page": "accountData"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "OPHIR peut exiger une vérification raisonnable de l’identité avant de donner suite à une demande qui concerne un compte ou des renseignements personnels."
                      }
                    ]
                  }
                ]
              },
              {
                "title": "Communications officielles, juridiques et commerciales",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Pour les avis juridiques, les questions relatives aux "
                      },
                      {
                        "type": "internalLink",
                        "text": "Conditions d’utilisation",
                        "page": "termsOfService"
                      },
                      {
                        "type": "text",
                        "text": ", les demandes commerciales et les autres communications officielles :"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Courriel :"
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
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "L’utilisation de cette adresse de courriel ne constitue pas une renonciation à un mode de signification, de remise ou de dépôt exigé par le droit applicable, un contrat ou une procédure officielle, et ne remplace pas un tel mode."
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
        "title": "Accès rapide",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Certaines questions peuvent être réglées sans attendre de réponse :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "réponses au sujet d’OPHIR, des connexions financières et de Plaid : "
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
                  "text": "renseignements sur le forfait, le renouvellement et la restauration d’un achat : "
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
                  "text": "arrêt des frais futurs et demande de remboursement : "
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
                  "text": "suppression d’un compte ou demande relative aux données : "
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
                  "text": "protection du compte et signalement d’une vulnérabilité : "
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
                  "text": "collecte et utilisation des renseignements personnels : "
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
                  "text": "technologies de l’application mobile et du site Web : "
                },
                {
                  "type": "internalLink",
                  "text": "Technologies de l’application et cookies",
                  "page": "appTechnologies"
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
                "text": "L’annulation d’un abonnement, la suppression de l’application, la suppression d’un compte et la déconnexion d’un compte financier sont des actions distinctes. Pour mettre fin aux frais futurs, annulez l’abonnement directement dans l’App Store d’Apple ou Google Play."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "Renseignements à fournir",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour nous aider à comprendre votre demande, indiquez :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "une adresse de courriel à laquelle OPHIR peut vous répondre;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un objet court et précis;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "une description de votre question ou du problème;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la plateforme, l’appareil et la version de l’application, s’il y a lieu;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la date et l’heure approximatives de l’erreur ainsi que le fuseau horaire;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le texte de l’erreur et les étapes que vous avez déjà essayées;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le numéro de commande figurant sur le reçu d’Apple ou de Google si la demande concerne un abonnement."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si votre demande concerne un compte, utilisez si possible l’adresse de courriel associée à ce compte. Envoyez votre demande uniquement à l’adresse qui correspond le mieux à la situation. L’envoi du même message à plusieurs adresses peut retarder son traitement."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "Ne transmettez pas de renseignements d’authentification confidentiels",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne vous demande pas d’envoyer les éléments suivants par courriel :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "votre mot de passe de services bancaires en ligne;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "votre mot de passe de compte Apple ou de compte Google;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le numéro complet d’un compte bancaire ou d’une carte de paiement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le code de sécurité d’une carte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un numéro d’identification personnel (NIP);"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un code à usage unique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "une clé secrète ou un code de récupération de secours."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Avant d’envoyer une capture d’écran ou un reçu, masquez les renseignements qui ne sont pas nécessaires au traitement de votre demande. Si vous croyez qu’un compte bancaire ou une carte a été compromis, communiquez immédiatement avec l’institution financière par l’un de ses canaux officiels. OPHIR ne peut pas bloquer une carte, geler un compte bancaire ni annuler une opération bancaire."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Adresse postale",
        "blocks": [
          {
            "type": "address",
            "content": [
              {
                "type": "strong",
                "text": "Exploitant d’OPHIR :"
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
                "text": "Pour les problèmes techniques urgents, utilisez "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": " plutôt que le courrier postal."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "Réponses et traitement des demandes",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR s’efforce de répondre dans un délai raisonnable. Les problèmes techniques complexes, les examens de sécurité, les demandes relatives aux renseignements personnels et les questions qui dépendent d’Apple, de Google, de Plaid ou d’une institution financière peuvent nécessiter plus de temps."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut demander des renseignements supplémentaires ou une vérification raisonnable de l’identité, ou vous diriger vers le tiers approprié si celui-ci contrôle la situation. Les demandes relatives aux renseignements personnels sont traitées dans les délais et selon les procédures prévus par le droit applicable."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements contenus dans une demande servent à examiner et à traiter la situation, à répondre à l’utilisateur, à protéger le compte et le Service, à prévenir les abus et à respecter les obligations légales. Pour en savoir plus, consultez la "
              },
              {
                "type": "internalLink",
                "text": "Politique de confidentialité",
                "page": "privacyPolicy"
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
                "text": "Si vous avez besoin d’un format de communication accessible ou d’une autre mesure d’adaptation raisonnable pour communiquer avec OPHIR, précisez-le dans votre demande."
              }
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "Контакты",
    "seoTitle": "Контакты | OPHIR",
    "description": "Контактные данные OPHIR для общих вопросов, технической поддержки, конфиденциальности, юридических и деловых обращений.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Свяжитесь с OPHIR по подходящему адресу, чтобы обращение сразу попало к нужному типу обработки. Для технической помощи также доступна страница "
          },
          {
            "type": "internalLink",
            "text": "Связаться с поддержкой",
            "page": "support"
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
        "key": "section-1",
        "title": "Выберите адрес",
        "blocks": [
          {
            "type": "contactCards",
            "cards": [
              {
                "title": "Общая информация",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Для общих вопросов об OPHIR, приложении или доступных материалах, которые не требуют технической, юридической или конфиденциальной проверки:"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Email:"
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
                  }
                ]
              },
              {
                "title": "Техническая поддержка и безопасность",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Обращайтесь по вопросам:"
                      }
                    ]
                  },
                  {
                    "type": "list",
                    "items": [
                      [
                        {
                          "type": "text",
                          "text": "входа и доступа к учётной записи;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "работы приложения и технических ошибок;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "подключения или обновления финансового счёта и Plaid;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "операций, категорий, бюджетов, прогнозов и финансового помощника;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "подписки, платного доступа и восстановления покупки;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "подозрительной активности или возможной уязвимости;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "доступности приложения или сайта."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Email:"
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
                        "text": "Подробные инструкции и форма:"
                      },
                      {
                        "type": "text",
                        "text": " "
                      },
                      {
                        "type": "internalLink",
                        "text": "Связаться с поддержкой",
                        "page": "support"
                      }
                    ]
                  }
                ]
              },
              {
                "title": "Конфиденциальность и персональная информация",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Используйте этот адрес для:"
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
                          "text": "доступа к персональной информации или получения её копии;"
                        }
                      ],
                      [
                        {
                          "type": "text",
                          "text": "исправления или удаления сведений;"
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
                          "text": "запроса о переносимости определённой компьютеризированной информации;"
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
                          "text": "жалоб и иных вопросов о конфиденциальности."
                        }
                      ]
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Email:"
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
                        "text": "Инструкции:"
                      },
                      {
                        "type": "text",
                        "text": " "
                      },
                      {
                        "type": "internalLink",
                        "text": "Удаление аккаунта и запросы о данных",
                        "page": "accountData"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "OPHIR может запросить разумное подтверждение личности перед исполнением запроса, затрагивающего учётную запись или персональную информацию."
                      }
                    ]
                  }
                ]
              },
              {
                "title": "Официальные, юридические и деловые обращения",
                "blocks": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Для юридических уведомлений, вопросов об "
                      },
                      {
                        "type": "internalLink",
                        "text": "Условиях использования",
                        "page": "termsOfService"
                      },
                      {
                        "type": "text",
                        "text": ", деловых предложений и иной официальной корреспонденции:"
                      }
                    ]
                  },
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "strong",
                        "text": "Email:"
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
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Использование этого адреса не отменяет обязательный способ вручения или подачи уведомления, если он установлен применимым законодательством, договором или официальной процедурой."
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
        "title": "Быстрые действия",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Некоторые вопросы можно решить без ожидания ответа:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ответы об OPHIR, финансовых подключениях и Plaid: "
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
                  "text": "сведения о плане, продлении и восстановлении покупки: "
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
                  "text": "прекращение будущих списаний и запрос возврата: "
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
                  "text": "удаление аккаунта или запрос о данных: "
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
                  "text": "сбор и использование персональной информации: "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Отмена подписки, удаление приложения, удаление учётной записи и отключение финансового счёта являются разными действиями. Если нужно прекратить будущие списания, отмените подписку непосредственно через Apple App Store или Google Play."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "Что указать в обращении",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Чтобы нам было проще разобраться в вопросе, укажите:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "адрес электронной почты, по которому OPHIR может ответить;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "краткую и понятную тему;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "описание вопроса или проблемы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "платформу, устройство и версию приложения, если это относится к обращению;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "примерную дату, время и часовой пояс ошибки;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "текст ошибки и действия, которые уже выполнялись;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "номер заказа из квитанции Apple или Google, если вопрос касается подписки."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если обращение связано с учётной записью, по возможности пишите с адреса, связанного с ней. Отправляйте одно обращение на один наиболее подходящий адрес. Повторная отправка одного и того же сообщения на несколько адресов может замедлить проверку."
              }
            ]
          }
        ]
      },
      {
        "key": "section-4",
        "title": "Не отправляйте конфиденциальные коды",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не просит отправлять по электронной почте:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "пароль от интернет-банка;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "пароль Apple Account или Google Account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "полный номер банковского счёта или платёжной карты;"
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
                  "text": "одноразовый код;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "секретный ключ или резервный код восстановления."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Перед отправкой снимка экрана или квитанции скройте сведения, которые не нужны для решения вопроса. Если вы считаете, что банковский счёт или карта скомпрометированы, сначала немедленно обратитесь в финансовое учреждение через его официальный канал. OPHIR не может заблокировать карту, заморозить банковский счёт или отменить банковскую операцию."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Почтовый адрес",
        "blocks": [
          {
            "type": "address",
            "content": [
              {
                "type": "strong",
                "text": "Оператор OPHIR:"
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
                "text": "Для срочных технических вопросов используйте "
              },
              {
                "type": "emailLink",
                "text": "support@joinophir.app",
                "email": "support@joinophir.app"
              },
              {
                "type": "text",
                "text": ", а не почтовую корреспонденцию."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "Ответ и обработка обращения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR стремится отвечать в разумный срок. Сложные технические проблемы, проверка безопасности, запросы о персональной информации и вопросы, зависящие от Apple, Google, Plaid или финансового учреждения, могут потребовать дополнительного времени."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может запросить дополнительные сведения, разумное подтверждение личности или направить пользователя к соответствующей третьей стороне, если вопрос контролируется этой стороной. Запросы о персональной информации обрабатываются в сроки и порядке, предусмотренных применимым законодательством."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сведения из обращения используются для проверки и решения вопроса, ответа пользователю, защиты учётной записи и Сервиса, предотвращения злоупотреблений и выполнения юридических обязанностей. Подробнее: "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вам требуется доступный формат сообщения или иное разумное приспособление для общения с OPHIR, укажите это в обращении."
              }
            ]
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  ContactDocument
>;
