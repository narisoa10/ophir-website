import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type AboutInlineContent =
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

type AboutBlock =
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "paragraph";
      content: readonly AboutInlineContent[];
    }
  | {
      type: "list";
      items: readonly (readonly AboutInlineContent[])[];
    };

type AboutSection = {
  key: string;
  title: string;
  blocks: readonly AboutBlock[];
};

type AboutDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  intro: readonly AboutBlock[];
  sections: readonly AboutSection[];
};

export const aboutContent = {
  "en": {
    "title": "About",
    "seoTitle": "About | OPHIR",
    "description": "Learn why OPHIR was created, how the application helps people understand personal and household finances, and the principles that guide us.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "OPHIR helps individuals and families better understand their finances, prepare for what comes next, and make everyday decisions with greater confidence."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "We are building OPHIR in Québec, Canada, as a straightforward tool for organizing and analyzing personal finances. Our purpose is not to make decisions for you. It is to help you see a more complete financial picture, understand the information available to you, and choose appropriate next steps for yourself."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section-1",
        "title": "Why OPHIR Exists",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Financial information is often spread across bank accounts and cards, lists of recurring payments, budgets, goals, and personal notes. As a result, even a simple question - how much can I spend, what should I prepare for, or why has my cash flow changed - can take time to answer."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR brings useful tools together in one application to make it easier to:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "review your overall personal and household financial picture;"
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
                  "text": "create budgets and track goals;"
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
                  "text": "analyze cash flow and potential future changes; and"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "receive clear informational explanations and financial assistant insights."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Available features may depend on the application version, device, subscription, region, and support from a particular financial institution."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "Our Approach",
        "blocks": [
          {
            "type": "subheading",
            "text": "Clarity"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "A financial tool should help make information easier to understand, not more complicated. We aim to use plain language, provide important context, and explain the limitations of calculations, forecasts, and automated results."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "User Control"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "You decide what information to provide and which available features to use. We aim to offer clear ways to manage financial connections, settings, your account, and requests concerning your personal information."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Privacy"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Financial information is sensitive. OPHIR aims to collect and use only the information needed to provide, protect, and improve the features you choose. OPHIR does not sell or rent personal information."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For details about data categories, processing purposes, service providers, retention, and user rights, see the "
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
            "type": "subheading",
            "text": "Security"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We treat the protection of data and accounts as an ongoing responsibility. Security measures evolve with the application, technology, and risks. At the same time, no digital service can promise absolute security."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For information about shared responsibilities, protecting your account, and reporting a possible vulnerability, see "
              },
              {
                "type": "internalLink",
                "text": "Security",
                "page": "security"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Honest Limitations"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Financial institution data may be delayed, and categories, forecasts, and automated responses may be inaccurate or incomplete. OPHIR provides information to support your decisions, but it does not replace reviewing official financial institution records, seeking professional advice, or applying your own judgment."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "Financial Account Connections",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you choose to connect a supported financial account, OPHIR may use Plaid, an independent financial data connectivity provider. A connection is initiated only at your direction and with your permission."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid or your financial institution may display the requested data categories and perform authentication in its own interface. Unless OPHIR expressly states otherwise, the application does not receive or store your online-banking password."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Connecting a financial account is not required for OPHIR features that are available through manual entry. Connection availability depends on Plaid, the financial institution, account type, and region."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Learn more in the "
              },
              {
                "type": "internalLink",
                "text": "Frequently Asked Questions",
                "page": "faq"
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
                "text": ", and "
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
        ]
      },
      {
        "key": "section-4",
        "title": "What OPHIR Is Not",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR is not a bank, credit union, investment dealer, or other financial institution. OPHIR does not hold user funds or transfer money."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Budgets, forecasts, categories, alerts, and financial assistant responses are provided for informational and educational purposes. They are not professional financial, investment, tax, accounting, legal, credit, or insurance advice and do not guarantee a particular outcome."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Verify important amounts, dates, and decisions against the financial institution's official information and consult a qualified professional where appropriate."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Who OPHIR Is For",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR is intended for people who live in Canada, are at least 18 years old, have the legal capacity to enter into a contract, and want to organize their own personal or household finances. The Service is not intended for professional management of another person's money or business accounting."
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
                "text": "Terms of Service",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " contain the complete eligibility and use requirements."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "Who Operates OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The OPHIR Service is operated by:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Soavinjato Andrianarisoa"
              },
              {
                "type": "text",
                "text": "\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR is built in Québec, Canada."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "Learn More",
        "blocks": [
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "internalLink",
                  "text": "Frequently Asked Questions",
                  "page": "faq"
                }
              ],
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
                  "text": "Application Technologies and Cookies",
                  "page": "appTechnologies"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Contact",
                  "page": "contact"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For general information, email "
              },
              {
                "type": "emailLink",
                "text": "hello@joinophir.app",
                "email": "hello@joinophir.app"
              },
              {
                "type": "text",
                "text": ".\nFor help with the application or your account, visit "
              },
              {
                "type": "internalLink",
                "text": "Contact Support",
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
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "À propos",
    "seoTitle": "À propos | OPHIR",
    "description": "Découvrez pourquoi OPHIR a été créé, comment l’application aide à mieux comprendre les finances personnelles et familiales, et les principes qui nous guident.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "OPHIR aide les particuliers et les familles à mieux comprendre leur situation financière, à se préparer aux prochaines étapes et à prendre leurs décisions quotidiennes avec plus de confiance."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Nous développons OPHIR au Québec, au Canada, comme un outil simple pour organiser et analyser les finances personnelles. Notre objectif n’est pas de prendre des décisions à votre place, mais de vous aider à obtenir un portrait financier plus complet, à comprendre les renseignements dont vous disposez et à choisir vous-même les prochaines étapes qui vous conviennent."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section-1",
        "title": "Pourquoi OPHIR existe",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements financiers sont souvent dispersés entre des comptes bancaires et des cartes, des listes de paiements récurrents, des budgets, des objectifs et des notes personnelles. Dans ce contexte, même une question simple — combien puis-je dépenser, à quoi dois-je me préparer ou pourquoi mes flux de trésorerie ont-ils changé? — peut demander du temps."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR réunit des outils utiles dans une même application afin de faciliter les tâches suivantes :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "obtenir une vue d’ensemble de vos finances personnelles et familiales;"
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
                  "text": "établir des budgets et suivre des objectifs;"
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
                  "text": "analyser les flux de trésorerie et les changements futurs possibles;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "recevoir des explications claires et des observations informatives de l’assistant financier."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les fonctions disponibles peuvent varier selon la version de l’application, l’appareil, l’abonnement, la région et la prise en charge par une institution financière donnée."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "Notre approche",
        "blocks": [
          {
            "type": "subheading",
            "text": "Clarté"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Un outil financier devrait rendre l’information plus facile à comprendre, et non plus complexe. Nous cherchons à employer un langage clair, à fournir le contexte important et à expliquer les limites des calculs, des prévisions et des résultats automatisés."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Contrôle par l’utilisateur"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vous choisissez les renseignements que vous fournissez et les fonctions disponibles que vous utilisez. Nous cherchons à proposer des moyens clairs de gérer les connexions financières, les paramètres, votre compte et vos demandes concernant vos renseignements personnels."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Confidentialité"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements financiers sont sensibles. OPHIR cherche à recueillir et à utiliser uniquement les renseignements nécessaires pour fournir, protéger et améliorer les fonctions que vous choisissez. OPHIR ne vend ni ne loue vos renseignements personnels."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour en savoir plus sur les catégories de données, les fins du traitement, les fournisseurs de services, la conservation et les droits des utilisateurs, consultez la "
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
            "type": "subheading",
            "text": "Sécurité"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous considérons la protection des données et des comptes comme une responsabilité continue. Les mesures de sécurité évoluent avec l’application, les technologies et les risques. Toutefois, aucun service numérique ne peut promettre une sécurité absolue."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour en savoir plus sur les responsabilités partagées, la protection de votre compte et le signalement d’une vulnérabilité possible, consultez la page "
              },
              {
                "type": "internalLink",
                "text": "Sécurité",
                "page": "security"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Des limites clairement expliquées"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les données provenant des institutions financières peuvent être transmises avec retard, et les catégories, les prévisions ainsi que les réponses automatisées peuvent être inexactes ou incomplètes. OPHIR fournit de l’information pour vous aider à prendre vos décisions, mais ne remplace ni la vérification des documents officiels de votre institution financière, ni les conseils d’un professionnel, ni votre propre jugement."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "Connexion de comptes financiers",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous choisissez de connecter un compte financier pris en charge, OPHIR peut faire appel à Plaid, un fournisseur indépendant de technologies de connectivité de données financières. La connexion est amorcée uniquement à votre demande et avec votre permission."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid ou votre institution financière peut afficher les catégories de données demandées et effectuer l’authentification dans sa propre interface. Sauf indication expresse contraire d’OPHIR, l’application ne reçoit ni ne conserve votre mot de passe de services bancaires en ligne."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La connexion d’un compte financier n’est pas nécessaire pour utiliser les fonctions d’OPHIR offertes au moyen de la saisie manuelle. La disponibilité des connexions dépend de Plaid, de l’institution financière, du type de compte et de la région."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour en savoir plus, consultez les "
              },
              {
                "type": "internalLink",
                "text": "Questions fréquentes",
                "page": "faq"
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
                "text": " et les "
              },
              {
                "type": "internalLink",
                "text": "Conditions d’utilisation",
                "page": "termsOfService"
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
        "key": "section-4",
        "title": "Ce qu’OPHIR n’est pas",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR n’est ni une banque, ni une caisse populaire, ni un courtier en valeurs mobilières, ni une autre institution financière. OPHIR ne détient pas les fonds des utilisateurs et n’effectue pas de transferts de fonds."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les budgets, les prévisions, les catégories, les alertes et les réponses de l’assistant financier sont fournis à des fins d’information et d’éducation. Ils ne constituent pas des conseils professionnels en matière de finances, de placements, de fiscalité, de comptabilité, de droit, de crédit ou d’assurance et ne garantissent aucun résultat précis."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vérifiez les montants, les dates et les décisions importantes à partir des renseignements officiels de l’institution financière et consultez un professionnel qualifié lorsque la situation l’exige."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "À qui s’adresse OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR s’adresse aux personnes qui résident au Canada, qui ont au moins 18 ans, qui ont la capacité juridique de conclure un contrat et qui souhaitent organiser leurs propres finances personnelles ou familiales. Le Service n’est pas destiné à la gestion professionnelle de l’argent d’une autre personne ni à la comptabilité d’une entreprise."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les "
              },
              {
                "type": "internalLink",
                "text": "Conditions d’utilisation",
                "page": "termsOfService"
              },
              {
                "type": "text",
                "text": " énoncent toutes les exigences d’admissibilité et d’utilisation."
              }
            ]
          }
        ]
      },
      {
        "key": "section-6",
        "title": "Qui exploite OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Le Service OPHIR est exploité par :"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Soavinjato Andrianarisoa"
              },
              {
                "type": "text",
                "text": "\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR est développé au Québec, au Canada."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "En savoir plus",
        "blocks": [
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "internalLink",
                  "text": "Questions fréquentes",
                  "page": "faq"
                }
              ],
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
                  "text": "Technologies de l’application et cookies",
                  "page": "appTechnologies"
                }
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Contact",
                  "page": "contact"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour toute demande de renseignements généraux, écrivez à "
              },
              {
                "type": "emailLink",
                "text": "hello@joinophir.app",
                "email": "hello@joinophir.app"
              },
              {
                "type": "text",
                "text": ".\nPour obtenir de l’aide avec l’application ou votre compte, consultez la page "
              },
              {
                "type": "internalLink",
                "text": "Contacter l’assistance",
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
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "О нас",
    "seoTitle": "О нас | OPHIR",
    "description": "Узнайте, зачем создан OPHIR, как приложение помогает понимать личные и семейные финансы и какими принципами мы руководствуемся.",
    "showDescription": false,
    "intro": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "OPHIR помогает отдельным пользователям и семьям лучше понимать свои финансы, готовиться к следующим шагам и увереннее принимать повседневные решения."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Мы создаём OPHIR в Квебеке, Канада, как понятный инструмент для организации и анализа личных финансов. Наша цель - не решать за пользователя, а помочь ему увидеть более полную финансовую картину, разобраться в доступной информации и самостоятельно выбрать подходящие действия."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "section-1",
        "title": "Зачем нужен OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Финансовая информация часто находится в разных местах: на банковских счетах и картах, в списках регулярных платежей, бюджетах, целях и собственных заметках. Из-за этого даже простой вопрос - сколько можно потратить, к чему подготовиться или почему изменился денежный поток - может потребовать много времени."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR объединяет полезные инструменты в одном приложении, чтобы пользователю было проще:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "просматривать общую картину личных и семейно-бытовых финансов;"
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
                  "text": "составлять бюджеты и отслеживать цели;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "замечать предполагаемые регулярные доходы и расходы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "анализировать денежный поток и возможные будущие изменения;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "получать понятные информационные объяснения и подсказки финансового помощника."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Доступные возможности могут зависеть от версии приложения, устройства, подписки, региона и поддержки конкретного финансового учреждения."
              }
            ]
          }
        ]
      },
      {
        "key": "section-2",
        "title": "Наш подход",
        "blocks": [
          {
            "type": "subheading",
            "text": "Ясность"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Финансовый инструмент должен помогать понимать информацию, а не усложнять её. Мы стремимся использовать понятные формулировки, показывать важный контекст и объяснять ограничения расчётов, прогнозов и автоматизированных результатов."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Контроль пользователя"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Пользователь сам решает, какие сведения предоставить и какие доступные функции использовать. Мы стремимся предоставлять понятные способы управления финансовыми подключениями, настройками, учётной записью и запросами о персональной информации."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Конфиденциальность"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Финансовая информация является чувствительной. OPHIR стремится собирать и использовать только те сведения, которые необходимы для предоставления, защиты и улучшения выбранных функций. OPHIR не продаёт и не сдаёт в аренду персональную информацию."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Подробнее о категориях данных, целях обработки, поставщиках услуг, сроках хранения и правах пользователя рассказано в "
              },
              {
                "type": "internalLink",
                "text": "Политике конфиденциальности",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Безопасность"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы рассматриваем защиту данных и учётных записей как постоянную обязанность. Меры безопасности развиваются вместе с приложением, технологиями и рисками. При этом ни один цифровой сервис не может обещать абсолютную безопасность."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Подробнее о распределении ответственности, защите учётной записи и сообщении о возможной уязвимости: "
              },
              {
                "type": "internalLink",
                "text": "Безопасность",
                "page": "security"
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Честные ограничения"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Данные финансового учреждения могут поступать с задержкой, а категории, прогнозы и ответы автоматизированных инструментов могут быть неточными или неполными. Поэтому OPHIR показывает информацию для поддержки решения, но не заменяет проверку банковских данных, профессиональную консультацию или собственную оценку пользователя."
              }
            ]
          }
        ]
      },
      {
        "key": "section-3",
        "title": "Подключение финансовых счетов",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если пользователь решает подключить поддерживаемый финансовый счёт, OPHIR может использовать Plaid - независимого поставщика технологии подключения финансовых данных. Подключение выполняется только по инициативе и с разрешения пользователя."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Plaid или финансовое учреждение может показывать запрашиваемые категории данных и выполнять аутентификацию в собственном интерфейсе. Если OPHIR прямо не сообщает иное, приложение не получает и не хранит пароль от интернет-банка."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Подключение финансового счёта не является обязательным для тех функций OPHIR, которые доступны при ручном вводе. Доступность подключений зависит от Plaid, финансового учреждения, типа счёта и региона."
              }
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
                "text": "Частые вопросы",
                "page": "faq"
              },
              {
                "type": "text",
                "text": ", "
              },
              {
                "type": "internalLink",
                "text": "Политика конфиденциальности",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": " и "
              },
              {
                "type": "internalLink",
                "text": "Условия использования",
                "page": "termsOfService"
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
        "key": "section-4",
        "title": "Чем OPHIR не является",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не является банком, кредитным союзом, инвестиционным дилером или иным финансовым учреждением. OPHIR не хранит денежные средства пользователей и не осуществляет их перевод."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Бюджеты, прогнозы, категории, предупреждения и ответы финансового помощника предоставляются в информационных и образовательных целях. Они не являются профессиональной финансовой, инвестиционной, налоговой, бухгалтерской, юридической, кредитной или страховой консультацией и не гарантируют определённый результат."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Важные суммы, даты и решения следует проверять по официальным сведениям финансового учреждения и, когда это необходимо, обсуждать с квалифицированным специалистом."
              }
            ]
          }
        ]
      },
      {
        "key": "section-5",
        "title": "Для кого создан OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR предназначен для проживающих в Канаде пользователей, которые достигли 18 лет, обладают законной возможностью заключать договоры и хотят организовывать собственные личные или семейно-бытовые финансы. Сервис не предназначен для профессионального управления чужими денежными средствами или ведения бухгалтерского учёта бизнеса."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Точные условия доступа и использования изложены в "
              },
              {
                "type": "internalLink",
                "text": "Условиях использования",
                "page": "termsOfService"
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
        "key": "section-6",
        "title": "Кто управляет OPHIR",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сервис OPHIR управляется:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Soavinjato Andrianarisoa"
              },
              {
                "type": "text",
                "text": "\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR создан в Квебеке, Канада."
              }
            ]
          }
        ]
      },
      {
        "key": "section-7",
        "title": "Узнайте больше",
        "blocks": [
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "internalLink",
                  "text": "Частые вопросы",
                  "page": "faq"
                }
              ],
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
              ],
              [
                {
                  "type": "internalLink",
                  "text": "Контакты",
                  "page": "contact"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для общей информации напишите на "
              },
              {
                "type": "emailLink",
                "text": "hello@joinophir.app",
                "email": "hello@joinophir.app"
              },
              {
                "type": "text",
                "text": ".\nДля помощи с приложением или учётной записью используйте страницу "
              },
              {
                "type": "internalLink",
                "text": "Связаться с поддержкой",
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
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  AboutDocument
>;
