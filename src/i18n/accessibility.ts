import type { InternalPageKey } from "../config/site-routes";
import type { Locale } from "./config";

type AccessibilityInlineContent =
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

type AccessibilityBlock =
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "paragraph";
      content: readonly AccessibilityInlineContent[];
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
      items: readonly (readonly AccessibilityInlineContent[])[];
    }
  | {
      type: "address";
      content: readonly AccessibilityInlineContent[];
    };

type AccessibilitySection = {
  key: string;
  title: string;
  blocks: readonly AccessibilityBlock[];
};

type AccessibilityDocument = {
  title: string;
  seoTitle: string;
  description: string;
  showDescription: false;
  intro: readonly AccessibilityBlock[];
  sections: readonly AccessibilitySection[];
};

export const accessibilityContent = {
  "en": {
    "title": "Accessibility",
    "seoTitle": "Accessibility | OPHIR",
    "description": "OPHIR is committed to making its mobile application, website, and support materials accessible to people with disabilities and to people who interact with digital services in different ways.",
    "showDescription": false,
    "intro": [
      {
        "type": "metadata",
        "items": [
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
            "text": "OPHIR is committed to making its mobile application, website, and support materials accessible to people with disabilities and to people who interact with digital services in different ways."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Accessibility is an ongoing effort, not a one-time review. We consider accessibility in the design, development, content preparation, testing, and continuing improvement of OPHIR."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "our-commitment",
        "title": "Our Commitment",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "We aim to reduce barriers for people with visual, hearing, motor, speech, cognitive, and learning disabilities, as well as for people who use assistive technologies."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Our goal is for core activities in OPHIR, including understanding financial information, navigating the service, completing forms, obtaining support, and managing an account, to be available in a predictable and understandable way."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If you encounter an accessibility barrier, please tell us. Feedback based on real-world experience helps identify issues that automated testing may not detect."
              }
            ]
          }
        ]
      },
      {
        "key": "accessibility-guidelines",
        "title": "Accessibility Guidelines",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For the OPHIR website, we use the "
              },
              {
                "type": "externalLink",
                "text": "Web Content Accessibility Guidelines (WCAG) 2.2",
                "href": "https://www.w3.org/TR/WCAG22/"
              },
              {
                "type": "text",
                "text": " as a development and evaluation reference, with particular attention to Level A and Level AA success criteria."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "For the mobile application and electronic documents, we also consider the W3C's informative "
              },
              {
                "type": "externalLink",
                "text": "WCAG2ICT",
                "href": "https://www.w3.org/TR/wcag2ict-22/"
              },
              {
                "type": "text",
                "text": " guidance on applying WCAG principles to non-web software and documents, together with the built-in accessibility features and guidance of the iOS and Android platforms."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "These references help us plan and evaluate our work, but using them does not by itself establish conformance. OPHIR does not claim full conformance with WCAG 2.2 or another accessibility standard unless and until the relevant product scope has been evaluated and the results have been documented."
              }
            ]
          }
        ]
      },
      {
        "key": "what-we-consider",
        "title": "What We Consider",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "When designing, developing, and evaluating OPHIR, we focus on the following areas."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Perception and Presentation of Information"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "sufficient contrast for text, controls, and important states;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "communication of meaning through more than colour, position, or shape alone;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "support for larger text, zoom, and interface resizing without loss of essential content;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "text labels and descriptions for meaningful images, icons, and controls;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "understandable text alternatives for charts, graphs, and other visual presentations of financial information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "captions, transcripts, or other alternatives if OPHIR publishes meaningful audio or video content."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Navigation and Operation"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "logical organization of screens, pages, headings, and regions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "a predictable focus order and visible focus indicator;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "keyboard operation of the website without focus traps;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "understandable names, roles, values, and states for interactive elements;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "touch target sizes and spacing intended to reduce accidental activation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "alternatives to complex gestures, dragging, or actions that depend only on device motion, where applicable;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "no unnecessary time limits, or a clear way to request additional time when reasonably possible."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Understandability and Error Prevention"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "clear labels, instructions, and error messages;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "identification of the field that needs correction and an explanation of how to correct it;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "consistent navigation and placement of recurring help features;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "an opportunity to review important information before an action affecting data, a subscription, or an account;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "clear identification of automated insights and their limitations;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "plain language where technical or legal complexity is not required."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Compatibility"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR aims to use standard components and platform accessibility services to support interaction with assistive technologies. Depending on the device, operating system, and application version, this may include screen readers, larger text, zoom, voice control, switch control, external keyboards, and reduced-motion settings."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Actual compatibility may vary by platform, version, device, and third-party interface. Using the latest supported versions of OPHIR and your operating system may provide the most current accessibility improvements and fixes."
              }
            ]
          }
        ]
      },
      {
        "key": "scope",
        "title": "Scope",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "This page applies to:"
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
                  "text": "OPHIR web pages;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "support, trust, and legal information pages;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "electronic documents prepared by OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "communication and support channels controlled by OPHIR."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Where reasonably possible, essential website content should be available in accessible HTML, and a PDF should not be the only way to obtain important information."
              }
            ]
          }
        ]
      },
      {
        "key": "third-party-services",
        "title": "Third-Party Services",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Some activities may open an interface or resource operated by a third party, such as Plaid, Apple, Google, or a financial institution. The accessibility of that interface, its content, and its support for assistive technologies is controlled by the relevant third party."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR cannot modify an independent third-party interface or bypass its security requirements. We nevertheless aim to avoid creating additional barriers in the parts of an integration that OPHIR controls and to consider feedback about problems that arise when moving between services."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If a barrier occurs within a third-party interface, OPHIR may help identify the appropriate support channel but cannot guarantee that the third-party service will make a change."
              }
            ]
          }
        ]
      },
      {
        "key": "current-status-and-possible-limitations",
        "title": "Current Status and Possible Limitations",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR continues to develop, test, and evaluate accessibility. A complete independent assessment of every feature, platform, document, and third-party transition has not yet been confirmed. This page is therefore not a certification of conformance."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Areas that may require particular attention include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "charts and complex presentations of financial information;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "dynamically updated balances, transactions, forecasts, and notifications;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "automated insights provided by the financial assistant;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "financial account connection and reauthentication;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "subscription and purchase restoration processes in app stores;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "third-party interfaces and content;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "PDFs and other downloadable documents."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "An item appearing in this list does not mean it is inaccessible to every user. These are areas that require evaluation across different devices, settings, and assistive technologies."
              }
            ]
          }
        ]
      },
      {
        "key": "alternative-assistance",
        "title": "Alternative Assistance",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "If a feature, page, or document is not accessible to you, OPHIR will try to provide reasonable assistance or an alternative format where possible and as required by applicable law. For example, we may:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "provide an accessible text copy of the material;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "explain the content or an available process by email;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "help identify a setting or an alternative route within OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "direct you to the party that controls a third-party interface."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR cannot request or accept your online banking password, PIN, one-time passcode, or full card number, and cannot perform banking activities on your behalf."
              }
            ]
          }
        ]
      },
      {
        "key": "how-to-report-an-accessibility-issue",
        "title": "How to Report an Accessibility Issue",
        "blocks": [
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
                "text": " or use the "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Suggested subject line: Accessibility."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Where possible, please include:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "the page, screen, document, or feature involved;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the action you were trying to complete;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the barrier you encountered and the result you expected;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "your device and operating-system version;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "your OPHIR application version or browser;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the assistive technology and version you were using;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "the approximate date and time of the issue;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "your preferred accessible format or method of response."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Do not send a password, full bank account or card number, card security code, PIN, one-time passcode, or secret key. If you attach a screenshot, conceal information that is not needed to evaluate the accessibility issue."
              }
            ]
          }
        ]
      },
      {
        "key": "what-happens-after-you-contact-us",
        "title": "What Happens After You Contact Us",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR will review the report and may request additional information to understand and reproduce the issue. We aim to respond within a reasonable period."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "The priority and timing of a correction may depend on the severity of the barrier, the number of affected users, the complexity of the change, security requirements, and the involvement of a third-party provider. OPHIR cannot promise that every report will result in an immediate change, but we use accessibility feedback to identify and plan improvements."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Information submitted with your report is handled in accordance with our "
              },
              {
                "type": "internalLink",
                "text": "Privacy Policy",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": ". Please provide only the information needed to review the issue."
              }
            ]
          }
        ]
      },
      {
        "key": "contact-information",
        "title": "Contact Information",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Accessibility and technical support:"
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
                "text": "OPHIR operator:"
              },
              {
                "type": "text",
                "text": "\nSoavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          }
        ]
      },
      {
        "key": "updates-to-this-page",
        "title": "Updates to This Page",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR may update this page as the application, website, standards, testing results, and available support methods change. The date of the most recent update appears at the beginning of the page."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nothing on this page limits any right or remedy that cannot be waived under applicable law."
              }
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Accessibilité",
    "seoTitle": "Accessibilité | OPHIR",
    "description": "OPHIR s’engage à rendre son application mobile, son site Web et ses documents d’assistance accessibles aux personnes en situation de handicap ainsi qu’aux personnes qui interagissent avec les services numériques de différentes façons.",
    "showDescription": false,
    "intro": [
      {
        "type": "metadata",
        "items": [
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
            "text": "OPHIR s’engage à rendre son application mobile, son site Web et ses documents d’assistance accessibles aux personnes en situation de handicap ainsi qu’aux personnes qui interagissent avec les services numériques de différentes façons."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "L’accessibilité est un effort continu, et non une vérification ponctuelle. Nous en tenons compte dans la conception, le développement, la préparation du contenu, les essais et l’amélioration continue d’OPHIR."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "notre-engagement",
        "title": "Notre engagement",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nous cherchons à réduire les obstacles pour les personnes ayant une déficience visuelle, auditive, motrice, de la parole, cognitive ou liée à l’apprentissage, ainsi que pour les personnes qui utilisent des technologies d’assistance."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Notre objectif est que les activités essentielles dans OPHIR, notamment comprendre l’information financière, parcourir le service, remplir des formulaires, obtenir de l’aide et gérer un compte, puissent être réalisées de manière prévisible et compréhensible."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si vous rencontrez un obstacle à l’accessibilité, veuillez nous en informer. Les commentaires fondés sur l’expérience réelle permettent de repérer des problèmes que les essais automatisés peuvent ne pas détecter."
              }
            ]
          }
        ]
      },
      {
        "key": "lignes-directrices-en-matiere-d-accessibilite",
        "title": "Lignes directrices en matière d’accessibilité",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour le site Web d’OPHIR, nous utilisons les "
              },
              {
                "type": "externalLink",
                "text": "Règles pour l’accessibilité des contenus Web (WCAG) 2.2",
                "href": "https://www.w3.org/TR/WCAG22/"
              },
              {
                "type": "text",
                "text": " comme référence pour le développement et l’évaluation, en accordant une attention particulière aux critères de succès des niveaux A et AA."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Pour l’application mobile et les documents électroniques, nous tenons également compte du document informatif du W3C "
              },
              {
                "type": "externalLink",
                "text": "WCAG2ICT",
                "href": "https://www.w3.org/TR/wcag2ict-22/"
              },
              {
                "type": "text",
                "text": " sur l’application des principes WCAG aux logiciels et aux documents non Web, ainsi que des fonctionnalités d’accessibilité intégrées et des recommandations des plateformes iOS et Android."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ces références nous aident à planifier et à évaluer notre travail, mais leur utilisation ne suffit pas, à elle seule, à établir la conformité. OPHIR ne prétend pas être entièrement conforme aux WCAG 2.2 ni à une autre norme d’accessibilité tant que la portée pertinente du produit n’a pas été évaluée et que les résultats n’ont pas été documentés."
              }
            ]
          }
        ]
      },
      {
        "key": "elements-pris-en-compte",
        "title": "Éléments pris en compte",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lors de la conception, du développement et de l’évaluation d’OPHIR, nous accordons une attention particulière aux éléments suivants."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Perception et présentation de l’information"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "un contraste suffisant pour le texte, les commandes et les états importants;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la communication du sens autrement que par la couleur, la position ou la forme seulement;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la prise en charge de l’agrandissement du texte, du zoom et du redimensionnement de l’interface sans perte de contenu essentiel;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des étiquettes et des descriptions textuelles pour les images, les icônes et les commandes porteuses de sens;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des équivalents textuels compréhensibles pour les diagrammes, les graphiques et les autres représentations visuelles de l’information financière;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des sous-titres, des transcriptions ou d’autres solutions de rechange si OPHIR publie du contenu audio ou vidéo porteur de sens."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Navigation et utilisation"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "une organisation logique des écrans, des pages, des titres et des régions;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un ordre de focus prévisible et un indicateur de focus visible;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’utilisation du site Web au clavier sans piège au clavier;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des noms, des rôles, des valeurs et des états compréhensibles pour les éléments interactifs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des dimensions et un espacement des cibles tactiles visant à réduire les activations accidentelles;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "des solutions de rechange aux gestes complexes, au glissement ou aux actions qui dépendent uniquement du mouvement de l’appareil, lorsque cela s’applique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’absence de limites de temps inutiles ou, dans la mesure du raisonnable, un moyen clair de demander du temps supplémentaire."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Compréhension et prévention des erreurs"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "des étiquettes, des instructions et des messages d’erreur clairs;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’identification du champ à corriger et une explication de la façon de le corriger;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "une navigation uniforme et un emplacement cohérent pour les fonctions d’aide récurrentes;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la possibilité de vérifier les renseignements importants avant une action touchant les données, un abonnement ou un compte;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’identification claire des analyses automatisées et de leurs limites;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "un langage clair lorsque la complexité technique ou juridique n’est pas nécessaire."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Compatibilité"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR cherche à utiliser des composants standards et les services d’accessibilité des plateformes afin de faciliter l’interaction avec les technologies d’assistance. Selon l’appareil, le système d’exploitation et la version de l’application, cela peut comprendre les lecteurs d’écran, l’agrandissement du texte, le zoom, la commande vocale, le contrôle de sélection, les claviers externes et les réglages de réduction des animations."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La compatibilité réelle peut varier selon la plateforme, la version, l’appareil et l’interface d’un tiers. L’utilisation des versions prises en charge les plus récentes d’OPHIR et de votre système d’exploitation peut vous permettre de profiter des améliorations et des correctifs d’accessibilité les plus récents."
              }
            ]
          }
        ]
      },
      {
        "key": "portee",
        "title": "Portée",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présente page s’applique :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "à l’application mobile OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux pages Web d’OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux pages d’assistance, de confiance et d’information juridique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux documents électroniques préparés par OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "aux moyens de communication et d’assistance contrôlés par OPHIR."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Dans la mesure du raisonnable, le contenu essentiel du site Web devrait être offert en HTML accessible, et un document PDF ne devrait pas être le seul moyen d’obtenir de l’information importante."
              }
            ]
          }
        ]
      },
      {
        "key": "services-de-tiers",
        "title": "Services de tiers",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Certaines activités peuvent ouvrir une interface ou une ressource exploitée par un tiers, comme Plaid, Apple, Google ou une institution financière. L’accessibilité de cette interface, de son contenu et de sa prise en charge des technologies d’assistance relève du tiers concerné."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne peut pas modifier une interface indépendante exploitée par un tiers ni contourner ses exigences de sécurité. Nous cherchons néanmoins à éviter de créer des obstacles supplémentaires dans les parties d’une intégration que nous contrôlons et à tenir compte des commentaires concernant les problèmes qui surviennent lors du passage d’un service à un autre."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si un obstacle se trouve dans l’interface d’un tiers, OPHIR peut vous aider à repérer le canal d’assistance approprié, mais ne peut pas garantir que le service tiers apportera une modification."
              }
            ]
          }
        ]
      },
      {
        "key": "etat-actuel-et-limites-possibles",
        "title": "État actuel et limites possibles",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR poursuit le développement, les essais et l’évaluation de l’accessibilité. Une évaluation indépendante complète de chaque fonctionnalité, plateforme, document et transition vers un tiers n’a pas encore été confirmée. La présente page ne constitue donc pas une certification de conformité."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les éléments qui peuvent nécessiter une attention particulière comprennent :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "les diagrammes et les présentations complexes de l’information financière;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les soldes, les opérations, les prévisions et les notifications mis à jour de façon dynamique;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les analyses automatisées fournies par l’assistant financier;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la connexion d’un compte financier et la réauthentification;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les processus d’abonnement et de restauration des achats dans les boutiques d’applications;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les interfaces et le contenu de tiers;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "les documents PDF et les autres documents téléchargeables."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La présence d’un élément dans cette liste ne signifie pas qu’il est inaccessible à chaque personne. Il s’agit de domaines qui doivent être évalués sur différents appareils, avec différents réglages et différentes technologies d’assistance."
              }
            ]
          }
        ]
      },
      {
        "key": "autres-formes-d-assistance",
        "title": "Autres formes d’assistance",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Si une fonctionnalité, une page ou un document ne vous est pas accessible, OPHIR tentera de fournir une assistance raisonnable ou un autre format lorsque cela est possible et exigé par la loi applicable. Par exemple, nous pouvons :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "fournir une copie texte accessible du contenu;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "expliquer le contenu ou une procédure disponible par courriel;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vous aider à repérer un réglage ou un autre parcours dans OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "vous diriger vers la partie qui contrôle une interface de tiers."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR ne peut pas vous demander ni accepter votre mot de passe de services bancaires en ligne, votre NIP, votre code à usage unique ou le numéro complet de votre carte, et ne peut pas effectuer d’opérations bancaires en votre nom."
              }
            ]
          }
        ]
      },
      {
        "key": "comment-signaler-un-probleme-d-accessibilite",
        "title": "Comment signaler un problème d’accessibilité",
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
                "text": " ou utilisez la page "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Objet suggéré : Accessibilité."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Dans la mesure du possible, veuillez indiquer :"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "la page, l’écran, le document ou la fonctionnalité concerné;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’action que vous tentiez d’effectuer;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "l’obstacle rencontré et le résultat attendu;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "votre appareil et la version de son système d’exploitation;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la version de votre application OPHIR ou votre navigateur;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la technologie d’assistance utilisée et sa version;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "la date et l’heure approximatives du problème;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "le format accessible ou le mode de réponse que vous préférez."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "N’envoyez pas de mot de passe, de numéro complet de compte bancaire ou de carte, de code de sécurité de carte, de NIP, de code à usage unique ni de clé secrète. Si vous joignez une capture d’écran, masquez les renseignements qui ne sont pas nécessaires à l’évaluation du problème d’accessibilité."
              }
            ]
          }
        ]
      },
      {
        "key": "ce-qui-se-passe-apres-votre-communication",
        "title": "Ce qui se passe après votre communication",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR examinera le signalement et pourrait demander des renseignements supplémentaires afin de comprendre et de reproduire le problème. Nous cherchons à répondre dans un délai raisonnable."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "La priorité et le délai de correction peuvent dépendre de la gravité de l’obstacle, du nombre de personnes touchées, de la complexité de la modification, des exigences de sécurité et de la participation d’un fournisseur tiers. OPHIR ne peut pas promettre que chaque signalement entraînera une modification immédiate, mais nous utilisons les commentaires sur l’accessibilité pour repérer et planifier les améliorations."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Les renseignements transmis avec votre signalement sont traités conformément à notre "
              },
              {
                "type": "internalLink",
                "text": "Politique de confidentialité",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": ". Veuillez fournir uniquement les renseignements nécessaires à l’examen du problème."
              }
            ]
          }
        ]
      },
      {
        "key": "coordonnees",
        "title": "Coordonnées",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Accessibilité et soutien technique :"
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
                "text": "Exploitant d’OPHIR :"
              },
              {
                "type": "text",
                "text": "\nSoavinjato Andrianarisoa\n1203 Rue Normont\nLaval (Québec) H7G 3H3\nCanada"
              }
            ]
          }
        ]
      },
      {
        "key": "mises-a-jour-de-la-presente-page",
        "title": "Mises à jour de la présente page",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR peut mettre la présente page à jour à mesure que l’application, le site Web, les normes, les résultats des essais et les méthodes d’assistance disponibles évoluent. La date de la mise à jour la plus récente figure au début de la page."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Rien dans la présente page ne limite un droit ou un recours auquel il est impossible de renoncer en vertu de la loi applicable."
              }
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "Доступность",
    "seoTitle": "Доступность | OPHIR",
    "description": "OPHIR стремится сделать мобильное приложение, сайт и материалы поддержки доступными для людей с разными возможностями и способами взаимодействия с цифровыми сервисами.",
    "showDescription": false,
    "intro": [
      {
        "type": "metadata",
        "items": [
          {
            "label": "Последнее обновление:",
            "value": "29 июля 2026 г.",
            "dateTime": "2026-07-29"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "OPHIR стремится сделать мобильное приложение, сайт и материалы поддержки доступными для людей с разными возможностями и способами взаимодействия с цифровыми сервисами."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Доступность - это постоянная работа, а не одноразовая проверка. Мы учитываем её при проектировании, разработке, подготовке контента, тестировании и последующем улучшении OPHIR."
          }
        ]
      }
    ],
    "sections": [
      {
        "key": "наше-обязательство",
        "title": "Наше обязательство",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Мы стремимся уменьшать барьеры для людей с нарушениями зрения, слуха, моторики, речи, восприятия и обучения, а также для пользователей вспомогательных технологий."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Наша цель - чтобы основные действия в OPHIR, включая понимание финансовой информации, навигацию, работу с формами, получение поддержки и управление учётной записью, можно было выполнять предсказуемым и понятным способом."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если вы столкнулись с барьером, сообщите нам. Практический опыт пользователей помогает определять проблемы, которые могут быть не обнаружены автоматизированной проверкой."
              }
            ]
          }
        ]
      },
      {
        "key": "ориентиры-доступности",
        "title": "Ориентиры доступности",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для сайта OPHIR использует "
              },
              {
                "type": "externalLink",
                "text": "Руководство по обеспечению доступности веб-контента WCAG 2.2",
                "href": "https://www.w3.org/TR/WCAG22/"
              },
              {
                "type": "text",
                "text": " как ориентир при разработке и оценке, уделяя особое внимание критериям уровней A и AA."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Для мобильного приложения и электронных документов мы также учитываем информационное руководство W3C "
              },
              {
                "type": "externalLink",
                "text": "WCAG2ICT",
                "href": "https://www.w3.org/TR/wcag2ict-22/"
              },
              {
                "type": "text",
                "text": " о применении принципов WCAG к невеб-программному обеспечению и документам, а также встроенные средства доступности и рекомендации платформ iOS и Android."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Эти ориентиры помогают планировать и проверять работу, но сами по себе не подтверждают соответствие. OPHIR не заявляет о полном соответствии WCAG 2.2 или иному стандарту до завершения и документирования проверки соответствующего объёма продукта."
              }
            ]
          }
        ]
      },
      {
        "key": "что-мы-учитываем",
        "title": "Что мы учитываем",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "При проектировании, разработке и проверке OPHIR мы уделяем внимание следующим направлениям."
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Восприятие и представление информации"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "достаточный контраст текста, элементов управления и важных состояний;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "передача смысла не только цветом, положением или формой;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "поддержка увеличения текста, масштабирования и изменения размера интерфейса без потери важного содержания;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "текстовые названия и описания для значимых изображений, значков и элементов управления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "понятная текстовая альтернатива для диаграмм, графиков и иных визуальных представлений финансовых данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "субтитры, расшифровки или иные альтернативы, если OPHIR публикует значимые аудио- или видеоматериалы."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Навигация и управление"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "логичная структура экранов, страниц, заголовков и областей;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предсказуемый порядок фокуса и видимый индикатор фокуса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "управление сайтом с клавиатуры без ловушек фокуса;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "понятные названия, роли, значения и состояния интерактивных элементов;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "размеры целей касания и интервалы, снижающие риск случайного нажатия;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "альтернативы сложным жестам, перетаскиванию и действиям, зависящим только от движения устройства, когда это применимо;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "отсутствие необязательных ограничений времени либо понятный способ запросить дополнительное время, когда это возможно."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Понятность и предотвращение ошибок"
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "ясные подписи, инструкции и сообщения об ошибках;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "объяснение того, какое поле требует исправления и как это сделать;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "последовательная навигация и расположение повторяющихся средств помощи;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "возможность проверить важные сведения перед действием, которое затрагивает данные, подписку или учётную запись;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "понятное обозначение автоматизированных выводов и их ограничений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "простой язык там, где сложная формулировка не требуется законом или содержанием."
                }
              ]
            ]
          },
          {
            "type": "subheading",
            "text": "Совместимость"
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR стремится использовать стандартные компоненты и службы доступности платформы, чтобы поддерживать взаимодействие со вспомогательными технологиями. В зависимости от устройства, операционной системы и версии приложения это может включать программы экранного доступа, увеличение текста, масштабирование, голосовое управление, переключатели, внешнюю клавиатуру и настройки уменьшения движения."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Фактическая совместимость может различаться между платформами, версиями, устройствами и сторонними интерфейсами. Использование последней поддерживаемой версии OPHIR и операционной системы может помочь получить актуальные исправления доступности."
              }
            ]
          }
        ]
      },
      {
        "key": "область-деиствия",
        "title": "Область действия",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Настоящая страница относится к:"
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
                  "text": "веб-страницам OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "страницам поддержки, доверия и юридической информации;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "электронным документам, подготовленным OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "каналам связи и поддержки, контролируемым OPHIR."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "По возможности основное содержимое сайта должно предоставляться в доступном формате HTML, а PDF не должен быть единственным способом получить важную информацию."
              }
            ]
          }
        ]
      },
      {
        "key": "сторонние-сервисы",
        "title": "Сторонние сервисы",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Некоторые действия могут открывать интерфейс или ресурс, которым управляет третья сторона, например Plaid, Apple, Google или финансовое учреждение. Доступность такого интерфейса, его содержимого и вспомогательных технологий контролируется соответствующей стороной."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не может изменять независимый сторонний интерфейс или обходить его требования безопасности. При этом мы стремимся не создавать дополнительных барьеров в собственных частях интеграции и учитывать сообщения пользователей о проблемах, возникающих при переходе между сервисами."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если барьер находится в стороннем интерфейсе, OPHIR может помочь определить соответствующий канал поддержки, но не может гарантировать исправление стороннего сервиса."
              }
            ]
          }
        ]
      },
      {
        "key": "текущии-статус-и-возможные-ограничения",
        "title": "Текущий статус и возможные ограничения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR продолжает разработку, тестирование и оценку доступности. Полная независимая проверка всех функций, платформ, документов и сторонних переходов пока не подтверждена, поэтому эта страница не является сертификатом соответствия."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Особого внимания могут требовать:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "диаграммы и сложные представления финансовых данных;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "динамически обновляемые остатки, операции, прогнозы и уведомления;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "автоматизированные выводы финансового помощника;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "подключение финансового счёта и повторная аутентификация;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "процессы подписки и восстановления покупки в магазинах приложений;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "сторонние интерфейсы и содержимое;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "PDF и иные загружаемые документы."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Наличие пункта в этом списке не означает, что он недоступен для каждого пользователя. Это области, которые требуют проверки на разных устройствах, с разными настройками и вспомогательными технологиями."
              }
            ]
          }
        ]
      },
      {
        "key": "альтернативныи-способ-получения-помощи",
        "title": "Альтернативный способ получения помощи",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Если функция, страница или документ недоступны для вас, OPHIR постарается предложить разумную помощь или альтернативный формат, когда это возможно и требуется применимым законодательством. Например, мы можем:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "предоставить доступную текстовую копию материала;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "объяснить содержание или доступный порядок действий по электронной почте;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "помочь найти настройку или альтернативный маршрут в OPHIR;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "направить к стороне, которая контролирует сторонний интерфейс."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR не может запрашивать или принимать ваш пароль от интернет-банка, PIN-код, одноразовый код либо полный номер карты и не может выполнять банковские действия от вашего имени."
              }
            ]
          }
        ]
      },
      {
        "key": "как-сообщить-о-проблеме-доступности",
        "title": "Как сообщить о проблеме доступности",
        "blocks": [
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
                "text": " или используйте страницу "
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
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Рекомендуемая тема письма: «Доступность / Accessibility»."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "По возможности укажите:"
              }
            ]
          },
          {
            "type": "list",
            "items": [
              [
                {
                  "type": "text",
                  "text": "страницу, экран, документ или функцию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "действие, которое вы пытались выполнить;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "возникший барьер и ожидаемый результат;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "устройство и версию операционной системы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "версию приложения OPHIR или браузер;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "используемую вспомогательную технологию и её версию;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "примерную дату и время проблемы;"
                }
              ],
              [
                {
                  "type": "text",
                  "text": "предпочтительный доступный формат или способ ответа."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Не отправляйте пароль, полный номер банковского счёта или карты, код безопасности карты, PIN-код, одноразовый код либо секретный ключ. Прикладывая снимок экрана, скройте сведения, которые не нужны для проверки доступности."
              }
            ]
          }
        ]
      },
      {
        "key": "что-произоидет-после-обращения",
        "title": "Что произойдёт после обращения",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR рассмотрит сообщение и может запросить дополнительные сведения, чтобы понять и воспроизвести проблему. Мы стремимся отвечать в разумный срок."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Приоритет и срок исправления могут зависеть от серьёзности барьера, количества затронутых пользователей, сложности изменения, требований безопасности и участия стороннего поставщика. OPHIR не может обещать, что каждое сообщение приведёт к немедленному изменению, но использует обратную связь для определения и планирования улучшений."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Сведения из обращения обрабатываются в соответствии с "
              },
              {
                "type": "internalLink",
                "text": "Политикой конфиденциальности",
                "page": "privacyPolicy"
              },
              {
                "type": "text",
                "text": ". Предоставляйте только информацию, необходимую для проверки вопроса."
              }
            ]
          }
        ]
      },
      {
        "key": "контактная-информация",
        "title": "Контактная информация",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "strong",
                "text": "Доступность и техническая поддержка:"
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
                "text": "Общие вопросы:"
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
                "text": "Оператор OPHIR:"
              },
              {
                "type": "text",
                "text": "\nSoavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
              }
            ]
          }
        ]
      },
      {
        "key": "обновление-настоящеи-страницы",
        "title": "Обновление настоящей страницы",
        "blocks": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OPHIR может обновлять эту страницу по мере изменения приложения, сайта, стандартов, результатов тестирования и доступных способов поддержки. Дата последнего обновления указана в начале страницы."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ничто на этой странице не ограничивает права или средства правовой защиты, от которых нельзя отказаться в соответствии с применимым законодательством."
              }
            ]
          }
        ]
      }
    ]
  }
} as const satisfies Record<
  Locale,
  AccessibilityDocument
>;
