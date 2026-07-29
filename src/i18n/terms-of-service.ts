type TermsOfServiceBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: readonly string[];
    }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly string[])[];
    };

type TermsOfServiceSection = {
  key: string;
  title: string;
  blocks: readonly TermsOfServiceBlock[];
};

type TermsOfServiceDocument = {
  title: string;
  seoTitle: string;
  description: string;
  updatedLabel: string;
  updated: string;
  updatedDate?: string;
  sections: readonly TermsOfServiceSection[];
};

export const termsOfServiceContent = {
  en: {
    title: "Terms of Service",
    seoTitle: "Terms of Service | OPHIR",
    description: "Terms governing access to and use of OPHIR, including accounts, connected financial data, subscriptions, and user responsibilities.",
    updatedLabel: "Effective date:",
    updated: "July 28, 2026",
    updatedDate: "2026-07-28",
    sections: [
      {
        key: "service-operator",
        title: "Service operator",
        blocks: [
          {
            type: "paragraph",
            text: "Soavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada\ncontact@joinophir.app"
          },
          {
            type: "paragraph",
            text: "Important: This document is a legal draft and should be reviewed by qualified Québec counsel before publication or launch."
          }
        ]
      },
      {
        key: "plain-language-overview",
        title: "Plain-language overview",
        blocks: [
          {
            type: "paragraph",
            text: "These Terms of Service govern your use of the OPHIR mobile application, website, financial data connections, budgeting tools, analytics, automated insights, and related services. The overview below is provided for convenience only. If it conflicts with the detailed provisions that follow, the detailed provisions control, subject always to rights that cannot legally be waived."
          },
          {
            type: "table",
            headers: [
              "Topic",
              "What it means"
            ],
            rows: [
              [
                "Eligibility",
                "OPHIR is intended for individuals in Canada who are at least 18 years old and legally able to enter into a contract."
              ],
              [
                "Subscription",
                "Paid subscriptions are purchased and managed through the Apple App Store or Google Play. Billing, cancellation, and refund administration generally follow the rules of the store through which you subscribed, together with applicable consumer law."
              ],
              [
                "Financial data",
                "You may connect eligible financial accounts through third-party providers such as Plaid. OPHIR is not a bank and does not hold or move your money."
              ],
              [
                "Analytics",
                "OPHIR provides budgeting, forecasting, categorization, and automated financial insights. These tools are informational and are not professional financial, investment, tax, accounting, legal, credit, or insurance advice."
              ],
              [
                "Your responsibilities",
                "You must protect your account, provide accurate information, review automated outputs, and use the service lawfully."
              ],
              [
                "Mandatory rights",
                "Nothing in these Terms removes rights or remedies that applicable law does not allow you to waive, including rights under Québec consumer protection law where applicable."
              ]
            ]
          },
          {
            type: "paragraph",
            text: "Please read the entire document carefully before creating an account, starting a subscription, or connecting a financial account."
          }
        ]
      },
      {
        key: "section-1-agreement-and-scope",
        title: "1. Agreement and scope",
        blocks: [
          {
            type: "paragraph",
            text: "These Terms of Service (the “Terms”) form a binding agreement between you and Soavinjato Andrianarisoa, carrying on activities under the name OPHIR (“OPHIR,” “we,” “us,” or “our”). They govern access to and use of the OPHIR mobile application, OPHIR websites, account aggregation features, budgeting tools, dashboards, reports, alerts, forecasts, automated insights, personal finance assistant features, customer support, and any related content or services that link to these Terms (collectively, the “Service”)."
          },
          {
            type: "paragraph",
            text: "By downloading the application, creating an account, purchasing a subscription, connecting a financial account, selecting “I agree,” or otherwise using the Service, you confirm that you have read, understood, and agreed to these Terms and to our Privacy Policy. If you do not agree, do not access or use the Service."
          },
          {
            type: "paragraph",
            text: "These Terms apply only to the relationship between you and OPHIR. Separate terms may apply to third-party services, including Apple, Google, Plaid, and your financial institution. Those third parties are not parties to these Terms merely because their technology or marketplace is used in connection with the Service."
          },
          {
            type: "paragraph",
            text: "Where consumer protection, privacy, language, or other applicable law gives you rights that cannot be excluded, restricted, or waived, those rights remain fully available. Any provision of these Terms must be interpreted accordingly."
          }
        ]
      },
      {
        key: "section-2-eligibility-and-availability",
        title: "2. Eligibility and availability",
        blocks: [
          {
            type: "paragraph",
            text: "The Service is offered for personal and household use by residents of Canada who are at least 18 years old, have the legal capacity to enter into a contract, and use the Service in accordance with these Terms. You must not create an account for a person who does not meet these requirements."
          },
          {
            type: "paragraph",
            text: "OPHIR may support only certain provinces, territories, financial institutions, account types, currencies, devices, operating systems, or languages at a given time. Availability may change as the Service develops. Access from a location where the Service is not offered does not create an obligation for OPHIR to provide local features, regulatory support, or customer service there."
          },
          {
            type: "paragraph",
            text: "You may use OPHIR for your own finances and, where a feature expressly allows it, for a household or family budget with the knowledge and authorization of the other people whose information is included. OPHIR is not currently intended for business accounting, fiduciary administration, professional money management, or the management of funds belonging to unrelated third parties."
          }
        ]
      },
      {
        key: "section-3-account-registration-and-security",
        title: "3. Account registration and security",
        blocks: [
          {
            type: "paragraph",
            text: "You may be required to create an OPHIR account and provide information such as your name, email address, region, preferred language, and authentication credentials. You agree that account information you provide will be accurate, current, and complete, and that you will update it when necessary."
          },
          {
            type: "paragraph",
            text: "You are responsible for maintaining the confidentiality and security of your credentials, devices, passcodes, recovery methods, and any authentication factors associated with your account. You must not share credentials or permit another person to use your account unless a specific OPHIR household feature authorizes shared access."
          },
          {
            type: "paragraph",
            text: "You must promptly contact support@joinophir.app if you believe that your account, device, connected financial account, or authentication method has been compromised. OPHIR may require reasonable verification before restoring access, changing sensitive account information, or responding to a deletion request."
          },
          {
            type: "paragraph",
            text: "You are responsible for activity performed through your account to the extent permitted by law. We may suspend access when we reasonably believe this is necessary to protect you, OPHIR, another user, a financial institution, or the integrity of the Service."
          }
        ]
      },
      {
        key: "section-4-the-ophir-service",
        title: "4. The OPHIR Service",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR is a personal financial organization and analytics service. Depending on your subscription, device, location, and connected institutions, the Service may allow you to view financial account information, categorize transactions, create budgets, organize recurring obligations, monitor cash flow, define goals, view forecasts, compare actual results with plans, and receive automated insights or recommended actions."
          },
          {
            type: "paragraph",
            text: "The Service is designed to help you understand information and make your own decisions. OPHIR does not open deposit accounts, hold customer funds, issue payment cards, lend money, execute trades, transfer money, collect debts, insure assets, or act as a bank, credit union, securities dealer, portfolio manager, financial planner, accountant, tax preparer, lawyer, or insurance intermediary."
          },
          {
            type: "paragraph",
            text: "Features may be labelled as beta, preview, experimental, or early access. Such features may be incomplete, change without notice, or produce less reliable results. You should not rely on an experimental feature for a decision that could cause significant financial or legal consequences."
          }
        ]
      },
      {
        key: "section-5-connected-financial-accounts-and-third-party-data-providers",
        title: "5. Connected financial accounts and third-party data providers",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR may permit you to connect eligible accounts held at banks, credit unions, card issuers, investment platforms, or other financial institutions. Connections may be facilitated by third-party data providers such as Plaid. By initiating a connection, you authorize OPHIR and the applicable provider to request, receive, process, and refresh account information as described in the Service and the Privacy Policy."
          },
          {
            type: "paragraph",
            text: "You represent that you are authorized to access every account you connect and to provide the required instructions and consents. You must not connect an account belonging to another person without lawful authority and that person’s knowledge where required."
          },
          {
            type: "paragraph",
            text: "Financial institutions and data providers control the availability, scope, frequency, and accuracy of data supplied through their systems. Connections may be delayed, interrupted, duplicated, incomplete, miscategorized, or discontinued. Some institutions may require you to reauthenticate or accept updated terms. OPHIR does not control those systems and does not guarantee continuous connectivity."
          },
          {
            type: "paragraph",
            text: "Unless OPHIR expressly states otherwise, OPHIR does not receive or store your online banking password. Authentication may occur through the financial institution or third-party provider. You remain subject to your institution’s agreements and security requirements."
          },
          {
            type: "paragraph",
            text: "You may disconnect an account through available settings. Disconnecting may stop future retrieval but does not necessarily delete information already imported or derived from that information. Deletion and retention are addressed in our Privacy Policy and in Section 16 of these Terms."
          }
        ]
      },
      {
        key: "section-6-financial-information-calculations-and-automated-insights",
        title: "6. Financial information, calculations, and automated insights",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR may process imported data and information you enter manually to create balances, summaries, categories, cash-flow views, budget calculations, forecasts, confidence indicators, alerts, explanations, and recommended actions. These outputs may rely on assumptions, statistical methods, rules-based logic, categorization models, or other automated processes."
          },
          {
            type: "paragraph",
            text: "Automated systems can make mistakes. Imported records may be outdated or incomplete; merchants may be incorrectly identified; transfers may be treated as income or spending; recurring transactions may be missed; and forecasts may not reflect unexpected events. You are responsible for reviewing the underlying data and determining whether an output is appropriate for your circumstances."
          },
          {
            type: "paragraph",
            text: "Any health score, stability indicator, confidence measure, risk label, projected balance, estimated savings amount, or similar metric is an OPHIR analytical construct. It is not a credit score, regulated suitability assessment, guarantee, certification, or determination by a financial institution or government authority."
          },
          {
            type: "paragraph",
            text: "OPHIR may improve models, categories, and methodologies over time. As a result, the same data may produce different outputs after an update. Historical comparisons may also change when transactions are corrected, recategorized, removed, or newly received."
          }
        ]
      },
      {
        key: "section-7-no-professional-advice-or-fiduciary-relationship",
        title: "7. No professional advice or fiduciary relationship",
        blocks: [
          {
            type: "paragraph",
            text: "All content and outputs provided through the Service are for general informational and educational purposes. They do not constitute financial planning, investment, securities, banking, credit, mortgage, tax, accounting, legal, insurance, insolvency, or other professional advice."
          },
          {
            type: "paragraph",
            text: "OPHIR does not know every fact that may affect your decisions. Before acting on information from the Service, you should independently verify it and, where appropriate, consult a qualified professional who can assess your complete circumstances."
          },
          {
            type: "paragraph",
            text: "Nothing in the Service creates a fiduciary, advisory, trustee, agency, partnership, employment, or professional-client relationship between you and OPHIR. You remain solely responsible for financial decisions, transactions, tax filings, legal obligations, and communications with financial institutions or creditors."
          },
          {
            type: "paragraph",
            text: "You must not use OPHIR as the sole basis for emergency decisions, debt enforcement responses, insolvency steps, tax reporting, investment trades, or actions where an error or delay could cause substantial loss."
          }
        ]
      },
      {
        key: "section-8-subscriptions-billing-renewal-and-cancellation",
        title: "8. Subscriptions, billing, renewal, and cancellation",
        blocks: [
          {
            type: "paragraph",
            text: "Access to some or all of the Service requires a paid subscription purchased through the Apple App Store or Google Play. The price, billing period, trial terms, included features, and applicable taxes will be displayed by the relevant store before purchase. Store prices may vary by platform, region, currency, promotion, or subscription plan."
          },
          {
            type: "paragraph",
            text: "Unless the purchase screen states otherwise, subscriptions renew automatically for successive billing periods until cancelled. The applicable store charges the payment method associated with your Apple ID or Google account under its own billing terms. OPHIR does not directly collect your full payment-card credentials for store purchases."
          },
          {
            type: "paragraph",
            text: "You may cancel through the subscription-management settings of the store where you purchased the subscription. Deleting the OPHIR application, disconnecting a financial account, or closing an OPHIR account does not by itself cancel a store subscription. You should cancel the subscription separately before the renewal date if you do not want another charge."
          },
          {
            type: "paragraph",
            text: "Cancellation normally takes effect at the end of the current paid period, and you may retain access until that period ends, subject to the store’s rules. Refund requests are generally administered by Apple or Google. Nothing in this Section limits any refund, cancellation, chargeback, or other remedy required by applicable law."
          },
          {
            type: "paragraph",
            text: "We may change subscription prices or plan features. Any price change will take effect only in accordance with applicable law and the procedures of the relevant store, which may require advance notice or your consent. If you do not accept a change, you may cancel before the change becomes effective."
          },
          {
            type: "paragraph",
            text: "Promotional trials or discounts may be subject to additional disclosed terms. A trial may convert into a paid subscription unless cancelled before the stated deadline. Eligibility for a promotion may be limited and may be determined by OPHIR or the applicable store."
          }
        ]
      },
      {
        key: "section-9-consumer-disclosures-and-electronic-contracting",
        title: "9. Consumer disclosures and electronic contracting",
        blocks: [
          {
            type: "paragraph",
            text: "Before you complete a paid subscription, OPHIR will provide, or the applicable purchase interface will display, material information such as the identity of the merchant of record or seller, a description of the Service, the price, recurring charges, taxes, billing frequency, payment terms, cancellation terms, and any material restrictions. The final store checkout and receipt form part of your transaction record."
          },
          {
            type: "paragraph",
            text: "You consent to entering into contracts and receiving notices, receipts, disclosures, and records electronically, including by email, in-app message, website publication, or store interface. You are responsible for maintaining a valid email address and a device capable of retaining or printing electronic records."
          },
          {
            type: "paragraph",
            text: "For a transaction governed by Québec rules on distance contracts, mandatory statutory requirements remain applicable, including requirements concerning pre-contract disclosure, the contents and delivery of the contract, and cancellation rights. These Terms are not intended to reduce those rights."
          },
          {
            type: "paragraph",
            text: "Apple or Google may be the merchant of record or payment intermediary for a store transaction depending on the platform and circumstances. The identity shown at checkout and on the receipt governs payment administration, without changing OPHIR’s responsibilities for providing and operating the Service."
          }
        ]
      },
      {
        key: "section-10-acceptable-use",
        title: "10. Acceptable use",
        blocks: [
          {
            type: "paragraph",
            text: "You may use the Service only for lawful personal and household purposes and in accordance with these Terms. You must not:"
          },
          {
            type: "list",
            items: [
              "gain or attempt to gain unauthorized access to the Service, another account, connected systems, source code, security controls, or non-public data;",
              "circumvent subscription controls, rate limits, authentication measures, geographic restrictions, or technical safeguards;",
              "use automated scripts, scraping tools, bots, or similar methods to extract data or interact with the Service except through interfaces expressly made available by OPHIR;",
              "introduce malware, malicious code, excessive traffic, or any content intended to disrupt, damage, test, or compromise the Service;",
              "reverse engineer, decompile, disassemble, or attempt to derive source code except to the limited extent such restriction is prohibited by law;",
              "use the Service to impersonate another person, misrepresent authority, commit fraud, launder money, evade legal obligations, or infringe the rights of another person;",
              "upload information that you are not authorized to use or that is unlawfully obtained;",
              "resell, sublicense, rent, commercially exploit, or provide the Service to third parties unless OPHIR has given written permission; or",
              "use Service outputs to build, train, benchmark, or improve a competing product or model without written authorization."
            ]
          },
          {
            type: "paragraph",
            text: "We may investigate suspected misuse and take proportionate measures, including restricting features, suspending an account, preserving relevant records, or reporting conduct where legally required or reasonably necessary to protect rights and safety."
          }
        ]
      },
      {
        key: "section-11-your-content-and-instructions",
        title: "11. Your content and instructions",
        blocks: [
          {
            type: "paragraph",
            text: "“Your Content” means information you manually submit to the Service, such as account labels, budget amounts, notes, goals, household settings, corrections, categories, and support communications. It does not include OPHIR software, designs, models, documentation, or other proprietary materials."
          },
          {
            type: "paragraph",
            text: "You retain ownership of Your Content. You grant OPHIR a non-exclusive, worldwide, royalty-free licence to host, reproduce, process, organize, transform, display, transmit, and otherwise use Your Content only as reasonably necessary to provide, secure, maintain, support, and improve the Service, comply with law, and exercise rights under these Terms and the Privacy Policy."
          },
          {
            type: "paragraph",
            text: "You confirm that you have the rights and permissions necessary to provide Your Content and associated instructions. You remain responsible for its legality and accuracy. We may remove or restrict content that violates these Terms or applicable law."
          },
          {
            type: "paragraph",
            text: "Feedback, ideas, or suggestions you voluntarily provide may be used by OPHIR without obligation or compensation, provided that we do not identify you publicly without permission."
          }
        ]
      },
      {
        key: "section-12-privacy-and-data-protection",
        title: "12. Privacy and data protection",
        blocks: [
          {
            type: "paragraph",
            text: "Our collection, use, disclosure, retention, and safeguarding of personal information are described in the OPHIR Privacy Policy. The Privacy Policy forms part of the overall framework governing the Service, but it is not intended to reduce rights available under applicable privacy law."
          },
          {
            type: "paragraph",
            text: "Because OPHIR operates from Québec and serves users in Canada, more than one privacy regime may apply depending on the nature and location of processing, including Québec private-sector privacy legislation and federal requirements for interprovincial or international commercial activities where applicable."
          },
          {
            type: "paragraph",
            text: "No security system can eliminate every risk. You should use strong device security, keep software current, review account activity, and promptly notify us of suspected unauthorized access. OPHIR may send security or service messages even if you have opted out of promotional communications."
          },
          {
            type: "paragraph",
            text: "We may use service providers to host data, provide analytics, enable financial-data connectivity, deliver communications, support authentication, prevent abuse, and perform other operational functions. Those providers may process information under contractual and legal obligations described in the Privacy Policy."
          }
        ]
      },
      {
        key: "section-13-intellectual-property-and-licence",
        title: "13. Intellectual property and licence",
        blocks: [
          {
            type: "paragraph",
            text: "The Service, including its software, interface, visual design, text, graphics, logos, trademarks, documentation, taxonomies, models, scoring methods, workflows, and compilations, is owned by or licensed to OPHIR and is protected by applicable intellectual property laws."
          },
          {
            type: "paragraph",
            text: "Subject to these Terms and payment of applicable fees, OPHIR grants you a limited, personal, revocable, non-exclusive, non-transferable, and non-sublicensable licence to install and use the application and access the Service for your own personal and household purposes during your subscription."
          },
          {
            type: "paragraph",
            text: "No ownership rights are transferred to you. Rights not expressly granted are reserved. You must not remove proprietary notices or use OPHIR names, logos, domains, or brand elements in a way that suggests sponsorship, affiliation, or endorsement without written permission."
          },
          {
            type: "paragraph",
            text: "Third-party names and marks belong to their respective owners. References to financial institutions, Apple, Google, Plaid, or other providers do not imply endorsement unless expressly stated."
          }
        ]
      },
      {
        key: "section-14-third-party-platforms-and-services",
        title: "14. Third-party platforms and services",
        blocks: [
          {
            type: "paragraph",
            text: "The Service may depend on or link to third-party platforms, including app stores, financial institutions, data aggregators, cloud providers, mapping services, analytics providers, communication services, and operating-system features. Your use of a third-party service is governed by its own terms and privacy practices."
          },
          {
            type: "paragraph",
            text: "OPHIR is not responsible for a third party’s acts, omissions, availability, security, accuracy, pricing, policies, or content, except to the extent liability cannot legally be excluded. A third-party outage or policy change may affect features without advance notice."
          },
          {
            type: "paragraph",
            text: "If you downloaded the application from Apple, you acknowledge that these Terms are between you and OPHIR, not Apple; OPHIR, not Apple, is responsible for the Service, maintenance and support, and claims relating to the Service, except to the extent Apple has responsibilities under its marketplace terms or applicable law. If you downloaded the application from Google Play, your use is also subject to applicable Google Play terms. In each case, the app store and its affiliates may be third-party beneficiaries of provisions intended for their protection where their terms so provide."
          }
        ]
      },
      {
        key: "section-15-changes-availability-and-maintenance",
        title: "15. Changes, availability, and maintenance",
        blocks: [
          {
            type: "paragraph",
            text: "We may update, improve, replace, limit, or discontinue features to maintain security, comply with law, respond to third-party changes, improve performance, or develop the Service. We will provide notice when required by law or when a material change adversely affects an active paid subscription."
          },
          {
            type: "paragraph",
            text: "The Service may be unavailable during maintenance, outages, security incidents, network failures, financial-institution disruptions, or events beyond our reasonable control. We do not guarantee uninterrupted, real-time, or error-free access."
          },
          {
            type: "paragraph",
            text: "We may issue application updates that are necessary for security, compatibility, or continued operation. Failure to install updates or use a supported device or operating system may result in limited functionality or loss of access."
          },
          {
            type: "paragraph",
            text: "Where a material paid feature is permanently removed during a prepaid period, we will provide any remedy required by applicable law and may offer an alternative feature, credit, or other reasonable resolution."
          }
        ]
      },
      {
        key: "section-16-suspension-termination-and-account-deletion",
        title: "16. Suspension, termination, and account deletion",
        blocks: [
          {
            type: "paragraph",
            text: "You may stop using the Service at any time and may request account deletion through available settings or by contacting support. Cancelling an OPHIR account does not automatically cancel an Apple App Store or Google Play subscription; you must manage the subscription through the relevant store."
          },
          {
            type: "paragraph",
            text: "We may suspend or terminate access where reasonably necessary because of non-payment, fraud, misuse, security risk, legal requirement, prolonged inactivity, violation of these Terms, or discontinuation of the Service. Where appropriate and legally required, we will provide notice and an opportunity to remedy the issue."
          },
          {
            type: "paragraph",
            text: "After termination, your licence ends and you must stop using the Service. Provisions that by their nature should survive will remain in effect, including provisions concerning ownership, accrued payment obligations, disclaimers, liability, dispute resolution, and interpretation."
          },
          {
            type: "paragraph",
            text: "Deletion does not always occur immediately. Information may remain for limited periods in backups, security logs, transaction records, legal records, or systems of third parties, as permitted or required by law and described in the Privacy Policy. Data that has been irreversibly de-identified may no longer be associated with your account."
          }
        ]
      },
      {
        key: "section-17-disclaimers",
        title: "17. Disclaimers",
        blocks: [
          {
            type: "paragraph",
            text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” OPHIR DOES NOT GUARANTEE THAT THE SERVICE WILL ALWAYS BE AVAILABLE, SECURE, ACCURATE, COMPLETE, CURRENT, OR SUITABLE FOR A PARTICULAR PURPOSE."
          },
          {
            type: "paragraph",
            text: "OPHIR DISCLAIMS IMPLIED WARRANTIES AND CONDITIONS TO THE EXTENT THEY MAY LAWFULLY BE DISCLAIMED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, AND NON-INFRINGEMENT."
          },
          {
            type: "paragraph",
            text: "OPHIR DOES NOT GUARANTEE THE ACCURACY OR AVAILABILITY OF DATA RECEIVED FROM FINANCIAL INSTITUTIONS OR THIRD-PARTY PROVIDERS, OR THAT A FORECAST, RECOMMENDATION, CATEGORY, ALERT, OR OTHER OUTPUT WILL PRODUCE A PARTICULAR FINANCIAL RESULT."
          },
          {
            type: "paragraph",
            text: "Nothing in this Section excludes a legal warranty, consumer protection, or other right that cannot be excluded under applicable law. In particular, these Terms do not limit mandatory protections available to consumers in Québec or elsewhere in Canada."
          }
        ]
      },
      {
        key: "section-18-limitation-of-liability",
        title: "18. Limitation of liability",
        blocks: [
          {
            type: "paragraph",
            text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPHIR WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST SAVINGS, LOST OPPORTUNITIES, LOSS OF DATA, LOSS OF GOODWILL, OR BUSINESS INTERRUPTION ARISING FROM OR RELATING TO THE SERVICE, EVEN IF ADVISED THAT SUCH LOSS WAS POSSIBLE."
          },
          {
            type: "paragraph",
            text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPHIR’S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATING TO THE SERVICE OR THESE TERMS WILL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID FOR THE OPHIR SUBSCRIPTION DURING THE TWELVE MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM; AND (B) CAD $100."
          },
          {
            type: "paragraph",
            text: "The limitations in this Section do not apply to fraud, intentional fault, gross negligence where it cannot be limited, bodily or moral injury, infringement of non-waivable rights, or any other liability that applicable law does not permit the parties to exclude or limit."
          },
          {
            type: "paragraph",
            text: "You acknowledge that subscription pricing reflects the allocation of risk in these Terms. If a limitation is held unenforceable, it will be applied to the greatest extent permitted by law rather than invalidating the remaining provisions."
          }
        ]
      },
      {
        key: "section-19-governing-law-and-disputes",
        title: "19. Governing law and disputes",
        blocks: [
          {
            type: "paragraph",
            text: "These Terms and the relationship between you and OPHIR are governed by the laws of the Province of Québec and the federal laws of Canada applicable there, without regard to conflict-of-law rules, except where mandatory law requires another result."
          },
          {
            type: "paragraph",
            text: "Before starting formal proceedings, you and OPHIR are encouraged to attempt in good faith to resolve the issue by contacting the other party and providing a reasonable description of the concern and requested resolution. You may contact OPHIR at contact@joinophir.app."
          },
          {
            type: "paragraph",
            text: "Any dispute that is not resolved informally may be brought before a court of competent jurisdiction. Nothing in these Terms requires a Québec consumer to submit a future dispute to mandatory arbitration, waive a class proceeding, or surrender any procedural or substantive right that cannot legally be waived. Arbitration may be used only where the parties validly agree after a dispute has arisen or where otherwise lawful."
          },
          {
            type: "paragraph",
            text: "The United Nations Convention on Contracts for the International Sale of Goods does not apply to these Terms."
          }
        ]
      },
      {
        key: "section-20-changes-to-these-terms",
        title: "20. Changes to these Terms",
        blocks: [
          {
            type: "paragraph",
            text: "We may amend these Terms to reflect changes to the Service, law, security practices, business operations, or third-party requirements. The updated version will identify its effective date."
          },
          {
            type: "paragraph",
            text: "For a material change, we will provide notice in a manner reasonably designed to reach you, such as an in-app notice, email, website notice, or store update, and will obtain consent where required by law. Changes will not retroactively reduce accrued rights unless legally permitted and clearly agreed."
          },
          {
            type: "paragraph",
            text: "If you do not agree to an updated version, you must stop using the affected Service and cancel any subscription before the change takes effect. Continued use after a validly notified effective date constitutes acceptance only to the extent permitted by law."
          }
        ]
      },
      {
        key: "section-21-general-provisions",
        title: "21. General provisions",
        blocks: [
          {
            type: "paragraph",
            text: "These Terms, together with the Privacy Policy, applicable purchase disclosures, and any feature-specific terms presented to you, constitute the agreement concerning the Service. If feature-specific terms conflict with these Terms, the feature-specific terms control for that feature, subject to mandatory law."
          },
          {
            type: "paragraph",
            text: "If any provision is found invalid or unenforceable, it will be interpreted or modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in effect."
          },
          {
            type: "paragraph",
            text: "Our failure to enforce a provision is not a waiver. You may not assign or transfer your rights or obligations without our written consent. OPHIR may transfer the agreement as part of a reorganization, financing, sale of assets, or transfer of the Service, subject to applicable law and privacy obligations."
          },
          {
            type: "paragraph",
            text: "Headings are for convenience only. “Including” means “including without limitation.” OPHIR may use this English version as the administrative master for preparing localized versions. Nothing in these Terms limits rights granted by the Charter of the French language or other mandatory language law, including any requirement to provide and maintain a French version where applicable."
          },
          {
            type: "paragraph",
            text: "Neither party is liable for delay caused by events beyond reasonable control, except that this does not excuse payment obligations already due or obligations that law does not permit a party to avoid."
          }
        ]
      },
      {
        key: "section-22-contact-information",
        title: "22. Contact information",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR is operated by:"
          },
          {
            type: "paragraph",
            text: "Soavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
          },
          {
            type: "paragraph",
            text: "General and legal inquiries: contact@joinophir.app\nCustomer support: support@joinophir.app\nPrivacy inquiries: privacy@joinophir.app\nGeneral information: hello@joinophir.app"
          },
          {
            type: "paragraph",
            text: "When contacting us about an account, do not send online banking passwords, complete payment-card numbers, one-time authentication codes, or other credentials."
          }
        ]
      },
      {
        key: "appendix-a-subscription-checklist-for-publication",
        title: "Appendix A — Subscription checklist for publication",
        blocks: [
          {
            type: "paragraph",
            text: "The following information should appear clearly in the Apple App Store or Google Play purchase flow and in any related in-app disclosure before the user confirms a subscription. This checklist supports implementation and is not an additional obligation imposed on the user."
          },
          {
            type: "list",
            items: [
              "Name and contact details of the merchant or service operator, including any telephone number required for Québec distance-contract disclosures.",
              "Clear description of the subscription and included features.",
              "Price, currency, applicable taxes, billing frequency, and total recurring amount.",
              "Length and terms of any free trial or promotional period.",
              "Automatic-renewal statement and the point at which the subscription renews.",
              "Instructions for cancellation through the applicable store.",
              "Refund and complaint information, without limiting statutory rights.",
              "A durable copy or receipt that the consumer can retain and print where required.",
              "Links to these Terms and the Privacy Policy before purchase."
            ]
          }
        ]
      }
    ]
  },
  ru: {
    title: "Условия использования",
    seoTitle: "Условия использования | OPHIR",
    description: "Условия доступа к OPHIR и использования сервиса, включая учётные записи, подключённые финансовые данные, подписки и обязанности пользователей.",
    updatedLabel: "Дата вступления в силу:",
    updated: "28 июля 2026 г.",
    updatedDate: "2026-07-28",
    sections: [
      {
        key: "service-operator",
        title: "Оператор сервиса",
        blocks: [
          {
            type: "paragraph",
            text: "Soavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada\ncontact@joinophir.app"
          },
          {
            type: "paragraph",
            text: "Важно: настоящий документ является юридическим проектом и должен быть рассмотрен квалифицированным юристом в Québec до публикации или запуска."
          }
        ]
      },
      {
        key: "plain-language-overview",
        title: "Краткий обзор простым языком",
        blocks: [
          {
            type: "paragraph",
            text: "Настоящие Условия использования регулируют использование вами мобильного приложения OPHIR, веб-сайта, подключений к финансовым данным, инструментов бюджетирования, аналитики, автоматизированных выводов и связанных услуг. Приведённый ниже обзор предоставляется исключительно для удобства. Если он противоречит подробным положениям, изложенным далее, применяются подробные положения, всегда с учётом прав, от которых нельзя законно отказаться."
          },
          {
            type: "table",
            headers: [
              "Тема",
              "Что это означает"
            ],
            rows: [
              [
                "Право на использование",
                "OPHIR предназначен для физических лиц в Канаде, достигших возраста не менее 18 лет и юридически способных заключать договор."
              ],
              [
                "Подписка",
                "Платные подписки приобретаются и управляются через Apple App Store или Google Play. Выставление счетов, отмена и администрирование возвратов обычно регулируются правилами магазина, через который вы оформили подписку, а также применимым законодательством о защите прав потребителей."
              ],
              [
                "Финансовые данные",
                "Вы можете подключать соответствующие финансовые счета через сторонних поставщиков, таких как Plaid. OPHIR не является банком и не хранит и не перемещает ваши деньги."
              ],
              [
                "Аналитика",
                "OPHIR предоставляет инструменты бюджетирования, прогнозирования, категоризации и автоматизированных финансовых выводов. Эти инструменты носят информационный характер и не являются профессиональной финансовой, инвестиционной, налоговой, бухгалтерской, юридической, кредитной или страховой консультацией."
              ],
              [
                "Ваши обязанности",
                "Вы должны защищать свой аккаунт, предоставлять точную информацию, проверять автоматизированные результаты и использовать сервис законно."
              ],
              [
                "Обязательные права",
                "Ничто в настоящих Условиях не устраняет права или средства правовой защиты, от которых применимое законодательство не позволяет вам отказаться, включая права по законодательству Québec о защите прав потребителей, где оно применимо."
              ]
            ]
          },
          {
            type: "paragraph",
            text: "Пожалуйста, внимательно прочитайте весь документ перед созданием аккаунта, оформлением подписки или подключением финансового счёта."
          }
        ]
      },
      {
        key: "section-1-agreement-and-scope",
        title: "1. Договор и сфера действия",
        blocks: [
          {
            type: "paragraph",
            text: "Настоящие Условия использования («Условия») образуют обязательный договор между вами и Soavinjato Andrianarisoa, осуществляющим деятельность под наименованием OPHIR («OPHIR», «мы», «нас» или «наш»). Они регулируют доступ к мобильному приложению OPHIR, веб-сайтам OPHIR, функциям агрегации счетов, инструментам бюджетирования, панелям управления, отчётам, уведомлениям, прогнозам, автоматизированным выводам, функциям персонального финансового ассистента, поддержке клиентов, а также любому связанному контенту или услугам, которые ссылаются на настоящие Условия (совместно — «Сервис»), и их использование."
          },
          {
            type: "paragraph",
            text: "Скачивая приложение, создавая аккаунт, приобретая подписку, подключая финансовый счёт, выбирая «Я согласен» или иным образом используя Сервис, вы подтверждаете, что прочитали, поняли и приняли настоящие Условия и нашу Политику конфиденциальности. Если вы не согласны, не получайте доступ к Сервису и не используйте его."
          },
          {
            type: "paragraph",
            text: "Настоящие Условия применяются только к отношениям между вами и OPHIR. К сторонним сервисам, включая Apple, Google, Plaid и вашу финансовую организацию, могут применяться отдельные условия. Такие третьи лица не становятся сторонами настоящих Условий только потому, что их технология или торговая площадка используется в связи с Сервисом."
          },
          {
            type: "paragraph",
            text: "Если законодательство о защите прав потребителей, конфиденциальности, языках или иное применимое законодательство предоставляет вам права, которые не могут быть исключены, ограничены или от которых нельзя отказаться, такие права сохраняются в полном объёме. Любое положение настоящих Условий должно толковаться соответствующим образом."
          }
        ]
      },
      {
        key: "section-2-eligibility-and-availability",
        title: "2. Право на использование и доступность",
        blocks: [
          {
            type: "paragraph",
            text: "Сервис предлагается для личного и домашнего использования резидентами Канады, которым исполнилось не менее 18 лет, которые обладают юридической способностью заключать договор и используют Сервис в соответствии с настоящими Условиями. Вы не должны создавать аккаунт для лица, которое не соответствует этим требованиям."
          },
          {
            type: "paragraph",
            text: "OPHIR может поддерживать только определённые провинции, территории, финансовые организации, типы счетов, валюты, устройства, операционные системы или языки в определённый момент времени. Доступность может изменяться по мере развития Сервиса. Доступ из места, где Сервис не предлагается, не создаёт для OPHIR обязанности предоставлять там локальные функции, регуляторную поддержку или обслуживание клиентов."
          },
          {
            type: "paragraph",
            text: "Вы можете использовать OPHIR для собственных финансов и, если функция прямо это позволяет, для домашнего или семейного бюджета с ведома и разрешения других лиц, чья информация включена. OPHIR в настоящее время не предназначен для бухгалтерского учёта бизнеса, фидуциарного администрирования, профессионального управления денежными средствами или управления средствами, принадлежащими не связанным с вами третьим лицам."
          }
        ]
      },
      {
        key: "section-3-account-registration-and-security",
        title: "3. Регистрация аккаунта и безопасность",
        blocks: [
          {
            type: "paragraph",
            text: "Для вас может потребоваться создать аккаунт OPHIR и предоставить такие сведения, как имя, адрес электронной почты, регион, предпочитаемый язык и учётные данные для аутентификации. Вы соглашаетесь, что предоставляемая вами информация аккаунта будет точной, актуальной и полной и что вы будете обновлять её при необходимости."
          },
          {
            type: "paragraph",
            text: "Вы несёте ответственность за сохранение конфиденциальности и безопасности своих учётных данных, устройств, кодов доступа, методов восстановления и любых факторов аутентификации, связанных с вашим аккаунтом. Вы не должны передавать учётные данные или разрешать другому лицу использовать ваш аккаунт, если только конкретная домашняя функция OPHIR не разрешает совместный доступ."
          },
          {
            type: "paragraph",
            text: "Вы должны незамедлительно связаться с support@joinophir.app, если считаете, что ваш аккаунт, устройство, подключённый финансовый счёт или метод аутентификации были скомпрометированы. OPHIR может потребовать разумную проверку перед восстановлением доступа, изменением чувствительной информации аккаунта или ответом на запрос об удалении."
          },
          {
            type: "paragraph",
            text: "Вы несёте ответственность за действия, совершённые через ваш аккаунт, в пределах, разрешённых законом. Мы можем приостановить доступ, если разумно считаем, что это необходимо для защиты вас, OPHIR, другого пользователя, финансовой организации или целостности Сервиса."
          }
        ]
      },
      {
        key: "section-4-the-ophir-service",
        title: "4. Сервис OPHIR",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR является сервисом организации и анализа личных финансов. В зависимости от вашей подписки, устройства, местоположения и подключённых организаций Сервис может позволять вам просматривать информацию о финансовых счетах, категоризировать операции, создавать бюджеты, организовывать регулярные обязательства, отслеживать денежные потоки, определять цели, просматривать прогнозы, сравнивать фактические результаты с планами и получать автоматизированные выводы или рекомендуемые действия."
          },
          {
            type: "paragraph",
            text: "Сервис предназначен для того, чтобы помогать вам понимать информацию и принимать собственные решения. OPHIR не открывает депозитные счета, не хранит клиентские средства, не выпускает платёжные карты, не выдаёт займы, не исполняет сделки, не переводит деньги, не взыскивает долги, не страхует активы и не действует как банк, кредитный союз, дилер по ценным бумагам, управляющий портфелем, финансовый планировщик, бухгалтер, налоговый специалист, юрист или страховой посредник."
          },
          {
            type: "paragraph",
            text: "Функции могут обозначаться как бета-версии, предварительные версии, экспериментальные функции или ранний доступ. Такие функции могут быть неполными, изменяться без уведомления или давать менее надёжные результаты. Не следует полагаться на экспериментальную функцию при принятии решения, которое может повлечь значительные финансовые или юридические последствия."
          }
        ]
      },
      {
        key: "section-5-connected-financial-accounts-and-third-party-data-providers",
        title: "5. Подключённые финансовые счета и сторонние поставщики данных",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR может позволять вам подключать соответствующие счета, открытые в банках, кредитных союзах, у эмитентов карт, на инвестиционных платформах или в других финансовых организациях. Подключения могут обеспечиваться сторонними поставщиками данных, такими как Plaid. Инициируя подключение, вы уполномочиваете OPHIR и соответствующего поставщика запрашивать, получать, обрабатывать и обновлять информацию о счёте, как описано в Сервисе и Политике конфиденциальности."
          },
          {
            type: "paragraph",
            text: "Вы заявляете, что уполномочены получать доступ к каждому счёту, который подключаете, и предоставлять требуемые инструкции и согласия. Вы не должны подключать счёт, принадлежащий другому лицу, без законных полномочий и, где требуется, без ведома этого лица."
          },
          {
            type: "paragraph",
            text: "Финансовые организации и поставщики данных контролируют доступность, объём, частоту и точность данных, предоставляемых через их системы. Подключения могут задерживаться, прерываться, дублироваться, быть неполными, неправильно категоризированными или прекращаться. Некоторые организации могут требовать повторной аутентификации или принятия обновлённых условий. OPHIR не контролирует эти системы и не гарантирует непрерывное подключение."
          },
          {
            type: "paragraph",
            text: "Если OPHIR прямо не указывает иное, OPHIR не получает и не хранит ваш пароль для онлайн-банкинга. Аутентификация может происходить через финансовую организацию или стороннего поставщика. Вы продолжаете соблюдать договоры и требования безопасности своей организации."
          },
          {
            type: "paragraph",
            text: "Вы можете отключить счёт через доступные настройки. Отключение может прекратить будущую загрузку данных, но не обязательно удаляет информацию, уже импортированную или полученную на её основе. Удаление и хранение регулируются нашей Политикой конфиденциальности и разделом 16 настоящих Условий."
          }
        ]
      },
      {
        key: "section-6-financial-information-calculations-and-automated-insights",
        title: "6. Финансовая информация, расчёты и автоматизированные выводы",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR может обрабатывать импортированные данные и информацию, которую вы вводите вручную, для создания балансов, сводок, категорий, представлений денежных потоков, бюджетных расчётов, прогнозов, индикаторов уверенности, уведомлений, объяснений и рекомендуемых действий. Такие результаты могут основываться на предположениях, статистических методах, логике на основе правил, моделях категоризации или иных автоматизированных процессах."
          },
          {
            type: "paragraph",
            text: "Автоматизированные системы могут ошибаться. Импортированные записи могут быть устаревшими или неполными; продавцы могут быть неверно идентифицированы; переводы могут быть обработаны как доходы или расходы; регулярные операции могут быть пропущены; а прогнозы могут не отражать непредвиденные события. Вы несёте ответственность за проверку исходных данных и определение того, подходит ли результат для ваших обстоятельств."
          },
          {
            type: "paragraph",
            text: "Любая оценка финансового здоровья, индикатор стабильности, мера уверенности, метка риска, прогнозируемый баланс, предполагаемая сумма сбережений или аналогичный показатель является аналитической конструкцией OPHIR. Это не кредитный рейтинг, не регулируемая оценка пригодности, не гарантия, не сертификация и не определение финансовой организации или государственного органа."
          },
          {
            type: "paragraph",
            text: "OPHIR может со временем улучшать модели, категории и методологии. В результате одни и те же данные могут давать разные результаты после обновления. Исторические сравнения также могут изменяться при исправлении, перекатегоризации, удалении или новом получении операций."
          }
        ]
      },
      {
        key: "section-7-no-professional-advice-or-fiduciary-relationship",
        title: "7. Отсутствие профессиональной консультации или фидуциарных отношений",
        blocks: [
          {
            type: "paragraph",
            text: "Весь контент и все результаты, предоставляемые через Сервис, предназначены для общих информационных и образовательных целей. Они не являются финансовым планированием, инвестиционной, связанной с ценными бумагами, банковской, кредитной, ипотечной, налоговой, бухгалтерской, юридической, страховой, консультацией по вопросам несостоятельности или иной профессиональной консультацией."
          },
          {
            type: "paragraph",
            text: "OPHIR не знает всех фактов, которые могут влиять на ваши решения. Перед тем как действовать на основании информации из Сервиса, вы должны самостоятельно проверить её и, когда уместно, проконсультироваться с квалифицированным специалистом, который может оценить всю вашу ситуацию."
          },
          {
            type: "paragraph",
            text: "Ничто в Сервисе не создаёт между вами и OPHIR фидуциарных, консультационных, доверительных, агентских, партнёрских, трудовых или профессионально-клиентских отношений. Вы остаётесь единолично ответственными за финансовые решения, операции, налоговые декларации, юридические обязательства и коммуникации с финансовыми организациями или кредиторами."
          },
          {
            type: "paragraph",
            text: "Вы не должны использовать OPHIR как единственное основание для срочных решений, ответов на меры взыскания долгов, процедур несостоятельности, налоговой отчётности, инвестиционных сделок или действий, при которых ошибка или задержка может вызвать существенный ущерб."
          }
        ]
      },
      {
        key: "section-8-subscriptions-billing-renewal-and-cancellation",
        title: "8. Подписки, выставление счетов, продление и отмена",
        blocks: [
          {
            type: "paragraph",
            text: "Доступ к части или ко всему Сервису требует платной подписки, приобретаемой через Apple App Store или Google Play. Цена, расчётный период, условия пробного периода, включённые функции и применимые налоги будут показаны соответствующим магазином до покупки. Цены в магазинах могут различаться в зависимости от платформы, региона, валюты, акции или плана подписки."
          },
          {
            type: "paragraph",
            text: "Если на экране покупки не указано иное, подписки автоматически продлеваются на последующие расчётные периоды до отмены. Соответствующий магазин списывает средства с платёжного метода, связанного с вашим Apple ID или аккаунтом Google, в соответствии со своими условиями выставления счетов. OPHIR не собирает напрямую полные данные вашей платёжной карты для покупок в магазине."
          },
          {
            type: "paragraph",
            text: "Вы можете отменить подписку через настройки управления подписками магазина, в котором она была приобретена. Удаление приложения OPHIR, отключение финансового счёта или закрытие аккаунта OPHIR само по себе не отменяет подписку в магазине. Если вы не хотите нового списания, следует отдельно отменить подписку до даты продления."
          },
          {
            type: "paragraph",
            text: "Отмена обычно вступает в силу в конце текущего оплаченного периода, и вы можете сохранять доступ до окончания этого периода с учётом правил магазина. Запросы на возврат обычно администрируются Apple или Google. Ничто в настоящем разделе не ограничивает возврат, отмену, оспаривание платежа или иное средство правовой защиты, требуемое применимым законодательством."
          },
          {
            type: "paragraph",
            text: "Мы можем изменять цены подписки или функции планов. Любое изменение цены вступает в силу только в соответствии с применимым законодательством и процедурами соответствующего магазина, которые могут требовать предварительного уведомления или вашего согласия. Если вы не принимаете изменение, вы можете отменить подписку до вступления изменения в силу."
          },
          {
            type: "paragraph",
            text: "Промо-пробные периоды или скидки могут регулироваться дополнительными раскрытыми условиями. Пробный период может перейти в платную подписку, если он не отменён до указанного срока. Право на участие в акции может быть ограничено и может определяться OPHIR или соответствующим магазином."
          }
        ]
      },
      {
        key: "section-9-consumer-disclosures-and-electronic-contracting",
        title: "9. Раскрытия для потребителей и электронное заключение договоров",
        blocks: [
          {
            type: "paragraph",
            text: "Перед тем как вы завершите платную подписку, OPHIR предоставит или соответствующий интерфейс покупки отобразит существенную информацию, такую как лицо, указанное продавцом по операции, или продавец, описание Сервиса, цену, регулярные платежи, налоги, частоту выставления счетов, условия оплаты, условия отмены и любые существенные ограничения. Финальная страница оплаты в магазине и квитанция являются частью записи вашей операции."
          },
          {
            type: "paragraph",
            text: "Вы соглашаетесь заключать договоры и получать уведомления, квитанции, раскрытия и записи в электронной форме, включая электронную почту, сообщения в приложении, публикации на веб-сайте или интерфейс магазина. Вы несёте ответственность за поддержание действительного адреса электронной почты и устройства, позволяющего сохранять или печатать электронные записи."
          },
          {
            type: "paragraph",
            text: "Для операции, регулируемой правилами Québec о договорах на расстоянии, обязательные законодательные требования сохраняют силу, включая требования к преддоговорному раскрытию, содержанию и доставке договора, а также правам на отмену. Настоящие Условия не направлены на сокращение этих прав."
          },
          {
            type: "paragraph",
            text: "Apple или Google может быть продавцом, указанным в платёжной операции, или платёжным посредником для операции в магазине в зависимости от платформы и обстоятельств. Лицо, указанное при оплате и в квитанции, определяет администрирование платежа, не изменяя обязанности OPHIR по предоставлению и эксплуатации Сервиса."
          }
        ]
      },
      {
        key: "section-10-acceptable-use",
        title: "10. Допустимое использование",
        blocks: [
          {
            type: "paragraph",
            text: "Вы можете использовать Сервис только для законных личных и домашних целей и в соответствии с настоящими Условиями. Вы не должны:"
          },
          {
            type: "list",
            items: [
              "получать или пытаться получить несанкционированный доступ к Сервису, другому аккаунту, подключённым системам, исходному коду, средствам контроля безопасности или непубличным данным;",
              "обходить механизмы контроля подписки, ограничения частоты, меры аутентификации, географические ограничения или технические средства защиты;",
              "использовать автоматизированные скрипты, инструменты автоматического извлечения данных, ботов или аналогичные методы для извлечения данных или взаимодействия с Сервисом, кроме как через интерфейсы, прямо предоставленные OPHIR;",
              "вносить вредоносное ПО, вредоносный код, чрезмерный трафик или любой контент, предназначенный для нарушения, повреждения, тестирования или компрометации Сервиса;",
              "осуществлять обратную разработку, декомпилировать, дизассемблировать или пытаться получить исходный код, кроме ограниченного объёма, в котором такой запрет запрещён законом;",
              "использовать Сервис для выдачи себя за другое лицо, ложного представления полномочий, совершения мошенничества, отмывания денег, уклонения от юридических обязательств или нарушения прав другого лица;",
              "загружать информацию, которую вы не уполномочены использовать или которая получена незаконно;",
              "перепродавать, сублицензировать, сдавать в аренду, коммерчески эксплуатировать или предоставлять Сервис третьим лицам, если OPHIR не дал письменное разрешение; или",
              "использовать результаты Сервиса для создания, обучения, сравнительного тестирования или улучшения конкурирующего продукта или модели без письменного разрешения."
            ]
          },
          {
            type: "paragraph",
            text: "Мы можем расследовать предполагаемое злоупотребление и принимать соразмерные меры, включая ограничение функций, приостановление аккаунта, сохранение соответствующих записей или сообщение о поведении, когда это требуется законом или разумно необходимо для защиты прав и безопасности."
          }
        ]
      },
      {
        key: "section-11-your-content-and-instructions",
        title: "11. Ваш контент и инструкции",
        blocks: [
          {
            type: "paragraph",
            text: "«Ваш контент» означает информацию, которую вы вручную отправляете в Сервис, такую как названия счетов, бюджетные суммы, заметки, цели, настройки домохозяйства, исправления, категории и обращения в поддержку. Он не включает программное обеспечение OPHIR, дизайны, модели, документацию или иные собственные материалы."
          },
          {
            type: "paragraph",
            text: "Вы сохраняете право собственности на Ваш контент. Вы предоставляете OPHIR неисключительную, всемирную, безвозмездную лицензию на размещение, воспроизведение, обработку, организацию, преобразование, отображение, передачу и иное использование Вашего контента только в той мере, в какой это разумно необходимо для предоставления, защиты, поддержания, сопровождения и улучшения Сервиса, соблюдения закона и осуществления прав по настоящим Условиям и Политике конфиденциальности."
          },
          {
            type: "paragraph",
            text: "Вы подтверждаете, что обладаете правами и разрешениями, необходимыми для предоставления Вашего контента и связанных инструкций. Вы остаётесь ответственными за его законность и точность. Мы можем удалить или ограничить контент, нарушающий настоящие Условия или применимое законодательство."
          },
          {
            type: "paragraph",
            text: "Отзывы, идеи или предложения, которые вы добровольно предоставляете, могут использоваться OPHIR без обязательств или компенсации, при условии что мы не будем публично идентифицировать вас без разрешения."
          }
        ]
      },
      {
        key: "section-12-privacy-and-data-protection",
        title: "12. Конфиденциальность и защита данных",
        blocks: [
          {
            type: "paragraph",
            text: "Сбор, использование, раскрытие, хранение и защита персональной информации описаны в Политике конфиденциальности OPHIR. Политика конфиденциальности является частью общей системы, регулирующей Сервис, но не предназначена для сокращения прав, доступных в соответствии с применимым законодательством о конфиденциальности."
          },
          {
            type: "paragraph",
            text: "Поскольку OPHIR осуществляет деятельность из Québec и обслуживает пользователей в Канаде, в зависимости от характера и места обработки может применяться более одного режима конфиденциальности, включая законодательство Québec о частном секторе и федеральные требования к межпровинциальной или международной коммерческой деятельности, где это применимо."
          },
          {
            type: "paragraph",
            text: "Ни одна система безопасности не может устранить все риски. Вам следует использовать надёжную защиту устройств, поддерживать программное обеспечение в актуальном состоянии, проверять активность аккаунта и незамедлительно уведомлять нас о предполагаемом несанкционированном доступе. OPHIR может отправлять сообщения о безопасности или сервисные сообщения, даже если вы отказались от рекламных коммуникаций."
          },
          {
            type: "paragraph",
            text: "Мы можем использовать поставщиков услуг для размещения данных, предоставления аналитики, обеспечения подключения к финансовым данным, доставки сообщений, поддержки аутентификации, предотвращения злоупотреблений и выполнения иных операционных функций. Эти поставщики могут обрабатывать информацию в соответствии с договорными и юридическими обязательствами, описанными в Политике конфиденциальности."
          }
        ]
      },
      {
        key: "section-13-intellectual-property-and-licence",
        title: "13. Интеллектуальная собственность и лицензия",
        blocks: [
          {
            type: "paragraph",
            text: "Сервис, включая его программное обеспечение, интерфейс, визуальный дизайн, тексты, графику, логотипы, товарные знаки, документацию, таксономии, модели, методы оценки, рабочие процессы и подборки, принадлежит OPHIR или лицензирован OPHIR и защищён применимым законодательством об интеллектуальной собственности."
          },
          {
            type: "paragraph",
            text: "При условии соблюдения настоящих Условий и оплаты применимых сборов OPHIR предоставляет вам ограниченную, личную, отзывную, неисключительную, непередаваемую и несублицензируемую лицензию на установку и использование приложения и доступ к Сервису для ваших собственных личных и домашних целей в течение срока вашей подписки."
          },
          {
            type: "paragraph",
            text: "Никакие права собственности вам не передаются. Все права, не предоставленные прямо, сохраняются. Вы не должны удалять уведомления о правах собственности или использовать названия, логотипы, домены или элементы бренда OPHIR способом, который предполагает спонсорство, аффилированность или одобрение, без письменного разрешения."
          },
          {
            type: "paragraph",
            text: "Названия и знаки третьих лиц принадлежат их соответствующим владельцам. Упоминания финансовых организаций, Apple, Google, Plaid или других поставщиков не подразумевают одобрения, если прямо не указано иное."
          }
        ]
      },
      {
        key: "section-14-third-party-platforms-and-services",
        title: "14. Сторонние платформы и сервисы",
        blocks: [
          {
            type: "paragraph",
            text: "Сервис может зависеть от сторонних платформ или ссылаться на них, включая магазины приложений, финансовые организации, агрегаторы данных, облачных провайдеров, картографические сервисы, поставщиков аналитики, коммуникационные сервисы и функции операционных систем. Ваше использование стороннего сервиса регулируется его собственными условиями и практиками конфиденциальности."
          },
          {
            type: "paragraph",
            text: "OPHIR не несёт ответственности за действия, бездействие, доступность, безопасность, точность, цены, политики или контент третьего лица, кроме случаев, когда ответственность не может быть законно исключена. Сбой третьей стороны или изменение политики может повлиять на функции без предварительного уведомления."
          },
          {
            type: "paragraph",
            text: "Если вы скачали приложение из Apple, вы признаёте, что настоящие Условия заключены между вами и OPHIR, а не Apple; OPHIR, а не Apple, несёт ответственность за Сервис, обслуживание и поддержку, а также претензии, связанные с Сервисом, за исключением случаев, когда Apple несёт ответственность по условиям своей торговой площадки или применимому законодательству. Если вы скачали приложение из Google Play, ваше использование также регулируется применимыми условиями Google Play. В каждом случае магазин приложений и его аффилированные лица могут быть третьими выгодоприобретателями положений, предназначенных для их защиты, если их условия это предусматривают."
          }
        ]
      },
      {
        key: "section-15-changes-availability-and-maintenance",
        title: "15. Изменения, доступность и обслуживание",
        blocks: [
          {
            type: "paragraph",
            text: "Мы можем обновлять, улучшать, заменять, ограничивать или прекращать функции для поддержания безопасности, соблюдения закона, реагирования на изменения третьих сторон, улучшения производительности или развития Сервиса. Мы предоставим уведомление, когда это требуется законом или когда существенное изменение неблагоприятно влияет на активную платную подписку."
          },
          {
            type: "paragraph",
            text: "Сервис может быть недоступен во время обслуживания, сбоев, инцидентов безопасности, сетевых отказов, нарушений в работе финансовых организаций или событий вне нашего разумного контроля. Мы не гарантируем непрерывный доступ в режиме реального времени или безошибочный доступ."
          },
          {
            type: "paragraph",
            text: "Мы можем выпускать обновления приложения, необходимые для безопасности, совместимости или продолжения работы. Невыполнение установки обновлений или использование неподдерживаемого устройства либо операционной системы может привести к ограниченной функциональности или потере доступа."
          },
          {
            type: "paragraph",
            text: "Если существенная платная функция окончательно удаляется в течение предоплаченного периода, мы предоставим любое средство правовой защиты, требуемое применимым законодательством, и можем предложить альтернативную функцию, кредит или иное разумное решение."
          }
        ]
      },
      {
        key: "section-16-suspension-termination-and-account-deletion",
        title: "16. Приостановление, прекращение и удаление аккаунта",
        blocks: [
          {
            type: "paragraph",
            text: "Вы можете прекратить использование Сервиса в любое время и запросить удаление аккаунта через доступные настройки или обратившись в поддержку. Отмена аккаунта OPHIR не отменяет автоматически подписку Apple App Store или Google Play; вы должны управлять подпиской через соответствующий магазин."
          },
          {
            type: "paragraph",
            text: "Мы можем приостановить или прекратить доступ, когда это разумно необходимо из-за неоплаты, мошенничества, злоупотребления, риска безопасности, юридического требования, длительной неактивности, нарушения настоящих Условий или прекращения Сервиса. Когда это уместно и юридически требуется, мы предоставим уведомление и возможность устранить проблему."
          },
          {
            type: "paragraph",
            text: "После прекращения ваша лицензия заканчивается, и вы должны прекратить использование Сервиса. Положения, которые по своей природе должны сохранять силу, останутся в силе, включая положения о собственности, начисленных платёжных обязательствах, отказах от гарантий, ответственности, разрешении споров и толковании."
          },
          {
            type: "paragraph",
            text: "Удаление не всегда происходит немедленно. Информация может сохраняться в течение ограниченных периодов в резервных копиях, журналах безопасности, записях операций, юридических документах или системах третьих лиц, как разрешено или требуется законом и описано в Политике конфиденциальности. Данные, которые были необратимо деидентифицированы, могут больше не быть связаны с вашим аккаунтом."
          }
        ]
      },
      {
        key: "section-17-disclaimers",
        title: "17. Отказы от гарантий",
        blocks: [
          {
            type: "paragraph",
            text: "В МАКСИМАЛЬНОЙ СТЕПЕНИ, РАЗРЕШЁННОЙ ПРИМЕНИМЫМ ЗАКОНОДАТЕЛЬСТВОМ, СЕРВИС ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ» И «ПО МЕРЕ ДОСТУПНОСТИ». OPHIR НЕ ГАРАНТИРУЕТ, ЧТО СЕРВИС ВСЕГДА БУДЕТ ДОСТУПНЫМ, БЕЗОПАСНЫМ, ТОЧНЫМ, ПОЛНЫМ, АКТУАЛЬНЫМ ИЛИ ПОДХОДЯЩИМ ДЛЯ КОНКРЕТНОЙ ЦЕЛИ."
          },
          {
            type: "paragraph",
            text: "OPHIR ОТКАЗЫВАЕТСЯ ОТ ПОДРАЗУМЕВАЕМЫХ ГАРАНТИЙ И УСЛОВИЙ В ТОЙ МЕРЕ, В КАКОЙ ОНИ МОГУТ БЫТЬ ЗАКОННО ИСКЛЮЧЕНЫ, ВКЛЮЧАЯ ПОДРАЗУМЕВАЕМЫЕ ГАРАНТИИ ТОВАРНОЙ ПРИГОДНОСТИ, ПРИГОДНОСТИ ДЛЯ КОНКРЕТНОЙ ЦЕЛИ, ПРАВА СОБСТВЕННОСТИ, СПОКОЙНОГО ПОЛЬЗОВАНИЯ И НЕНАРУШЕНИЯ ПРАВ."
          },
          {
            type: "paragraph",
            text: "OPHIR НЕ ГАРАНТИРУЕТ ТОЧНОСТЬ ИЛИ ДОСТУПНОСТЬ ДАННЫХ, ПОЛУЧЕННЫХ ОТ ФИНАНСОВЫХ ОРГАНИЗАЦИЙ ИЛИ СТОРОННИХ ПОСТАВЩИКОВ, ИЛИ ТО, ЧТО ПРОГНОЗ, РЕКОМЕНДАЦИЯ, КАТЕГОРИЯ, УВЕДОМЛЕНИЕ ИЛИ ИНОЙ РЕЗУЛЬТАТ ПРИВЕДЁТ К КОНКРЕТНОМУ ФИНАНСОВОМУ РЕЗУЛЬТАТУ."
          },
          {
            type: "paragraph",
            text: "Ничто в настоящем разделе не исключает законную гарантию, защиту потребителя или иное право, которое не может быть исключено по применимому законодательству. В частности, настоящие Условия не ограничивают обязательные защиты, доступные потребителям в Québec или в иных местах Канады."
          }
        ]
      },
      {
        key: "section-18-limitation-of-liability",
        title: "18. Ограничение ответственности",
        blocks: [
          {
            type: "paragraph",
            text: "В МАКСИМАЛЬНОЙ СТЕПЕНИ, РАЗРЕШЁННОЙ ЗАКОНОМ, OPHIR НЕ НЕСЁТ ОТВЕТСТВЕННОСТИ ЗА КОСВЕННЫЕ, СЛУЧАЙНЫЕ, СПЕЦИАЛЬНЫЕ, ПОСЛЕДУЮЩИЕ, ШТРАФНЫЕ ИЛИ ПРИМЕРНЫЕ УБЫТКИ, А ТАКЖЕ ЗА УПУЩЕННУЮ ПРИБЫЛЬ, УТРАЧЕННЫЕ СБЕРЕЖЕНИЯ, УПУЩЕННЫЕ ВОЗМОЖНОСТИ, ПОТЕРЮ ДАННЫХ, ПОТЕРЮ ДЕЛОВОЙ РЕПУТАЦИИ ИЛИ ПРЕРЫВАНИЕ ДЕЯТЕЛЬНОСТИ, ВОЗНИКАЮЩИЕ ИЗ СЕРВИСА ИЛИ СВЯЗАННЫЕ С НИМ, ДАЖЕ ЕСЛИ OPHIR БЫЛ УВЕДОМЛЁН О ВОЗМОЖНОСТИ ТАКОЙ ПОТЕРИ."
          },
          {
            type: "paragraph",
            text: "В МАКСИМАЛЬНОЙ СТЕПЕНИ, РАЗРЕШЁННОЙ ЗАКОНОМ, СОВОКУПНАЯ ОТВЕТСТВЕННОСТЬ OPHIR ПО ВСЕМ ПРЕТЕНЗИЯМ, ВОЗНИКАЮЩИМ ИЗ СЕРВИСА ИЛИ НАСТОЯЩИХ УСЛОВИЙ ИЛИ СВЯЗАННЫМ С НИМИ, НЕ ПРЕВЫШАЕТ БОЛЬШУЮ ИЗ СЛЕДУЮЩИХ СУММ: (A) СУММУ, УПЛАЧЕННУЮ ВАМИ ЗА ПОДПИСКУ OPHIR В ТЕЧЕНИЕ ДВЕНАДЦАТИ МЕСЯЦЕВ ДО СОБЫТИЯ, ПОСЛУЖИВШЕГО ОСНОВАНИЕМ ДЛЯ ПРЕТЕНЗИИ; И (B) 100 CAD."
          },
          {
            type: "paragraph",
            text: "Ограничения в настоящем разделе не применяются к мошенничеству, умышленной вине, грубой небрежности, когда она не может быть ограничена, телесному или моральному вреду, нарушению неотчуждаемых прав или любой другой ответственности, которую применимое законодательство не позволяет сторонам исключить или ограничить."
          },
          {
            type: "paragraph",
            text: "Вы признаёте, что цена подписки отражает распределение рисков в настоящих Условиях. Если ограничение признано неисполнимым, оно будет применяться в максимально разрешённой законом степени, а не приводить к недействительности остальных положений."
          }
        ]
      },
      {
        key: "section-19-governing-law-and-disputes",
        title: "19. Применимое право и споры",
        blocks: [
          {
            type: "paragraph",
            text: "Настоящие Условия и отношения между вами и OPHIR регулируются законами провинции Québec и федеральными законами Канады, применимыми в этой провинции, без учёта коллизионных норм, за исключением случаев, когда императивная норма требует иного результата."
          },
          {
            type: "paragraph",
            text: "Перед началом формального производства вам и OPHIR рекомендуется добросовестно попытаться урегулировать вопрос, связавшись с другой стороной и предоставив разумное описание проблемы и запрашиваемого решения. Вы можете связаться с OPHIR по адресу contact@joinophir.app."
          },
          {
            type: "paragraph",
            text: "Любой спор, который не урегулирован неформально, может быть передан в компетентный суд. Ничто в настоящих Условиях не требует от потребителя Québec передавать будущий спор на обязательный арбитраж, отказываться от коллективного иска или уступать любое процессуальное или материальное право, от которого нельзя законно отказаться. Арбитраж может использоваться только если стороны действительно договорились об этом после возникновения спора или если это иным образом законно."
          },
          {
            type: "paragraph",
            text: "Конвенция Организации Объединённых Наций о договорах международной купли-продажи товаров не применяется к настоящим Условиям."
          }
        ]
      },
      {
        key: "section-20-changes-to-these-terms",
        title: "20. Изменения настоящих Условий",
        blocks: [
          {
            type: "paragraph",
            text: "Мы можем изменять настоящие Условия, чтобы отразить изменения Сервиса, закона, практик безопасности, коммерческой деятельности или требований третьих сторон. Обновлённая версия будет указывать дату её вступления в силу."
          },
          {
            type: "paragraph",
            text: "При существенном изменении мы предоставим уведомление способом, разумно рассчитанным на то, чтобы оно дошло до вас, например уведомлением в приложении, электронным письмом, уведомлением на веб-сайте или обновлением в магазине, и получим согласие, когда это требуется законом. Изменения не будут ретроактивно сокращать возникшие права, если это не разрешено законом и не согласовано ясно."
          },
          {
            type: "paragraph",
            text: "Если вы не согласны с обновлённой версией, вы должны прекратить использование затронутого Сервиса и отменить любую подписку до вступления изменения в силу. Продолжение использования после надлежащим образом уведомлённой даты вступления в силу означает принятие только в той мере, в какой это разрешено законом."
          }
        ]
      },
      {
        key: "section-21-general-provisions",
        title: "21. Общие положения",
        blocks: [
          {
            type: "paragraph",
            text: "Настоящие Условия вместе с Политикой конфиденциальности, применимыми раскрытиями при покупке и любыми условиями, относящимися к конкретным функциям и представленными вам, составляют договор в отношении Сервиса. Если условия, относящиеся к конкретной функции, противоречат настоящим Условиям, такие специальные условия применяются к этой функции с учётом императивного права."
          },
          {
            type: "paragraph",
            text: "Если какое-либо положение признано недействительным или неисполнимым, оно будет истолковано или изменено в минимальной степени, необходимой для придания ему исполнимости, а остальные положения продолжат действовать."
          },
          {
            type: "paragraph",
            text: "Наше неисполнение требования о соблюдении положения не является отказом от него. Вы не можете уступать или передавать свои права или обязанности без нашего письменного согласия. OPHIR может передать договор в рамках реорганизации, финансирования, продажи активов или передачи Сервиса с учётом применимого законодательства и обязательств конфиденциальности."
          },
          {
            type: "paragraph",
            text: "Заголовки приведены только для удобства. «Включая» означает «включая, без ограничения». OPHIR может использовать эту английскую версию как административный основной документ для подготовки локализованных версий. Ничто в настоящих Условиях не ограничивает права, предоставленные Хартией французского языка или иным императивным языковым законодательством, включая любое требование предоставить и поддерживать французскую версию, где применимо."
          },
          {
            type: "paragraph",
            text: "Ни одна из сторон не несёт ответственности за задержку, вызванную событиями вне разумного контроля, за исключением того, что это не освобождает от уже наступивших платёжных обязательств или обязательств, от которых закон не позволяет стороне уклониться."
          }
        ]
      },
      {
        key: "section-22-contact-information",
        title: "22. Контактная информация",
        blocks: [
          {
            type: "paragraph",
            text: "OPHIR управляется:"
          },
          {
            type: "paragraph",
            text: "Soavinjato Andrianarisoa\n1203 Rue Normont\nLaval, Québec H7G 3H3\nCanada"
          },
          {
            type: "paragraph",
            text: "Общие и юридические вопросы: contact@joinophir.app\nПоддержка клиентов: support@joinophir.app\nВопросы конфиденциальности: privacy@joinophir.app\nОбщая информация: hello@joinophir.app"
          },
          {
            type: "paragraph",
            text: "Связываясь с нами по поводу аккаунта, не отправляйте пароли онлайн-банкинга, полные номера платёжных карт, одноразовые коды аутентификации или иные учётные данные."
          }
        ]
      },
      {
        key: "appendix-a-subscription-checklist-for-publication",
        title: "Приложение A — Контрольный список подписки для публикации",
        blocks: [
          {
            type: "paragraph",
            text: "Следующая информация должна ясно отображаться в процессе покупки в Apple App Store или Google Play и в любом связанном раскрытии в приложении до того, как пользователь подтвердит подписку. Этот контрольный список поддерживает реализацию и не является дополнительным обязательством, возлагаемым на пользователя."
          },
          {
            type: "list",
            items: [
              "Наименование и контактные данные продавца или оператора сервиса, включая любой номер телефона, требуемый для раскрытий по договорам на расстоянии в Québec.",
              "Чёткое описание подписки и включённых функций.",
              "Цена, валюта, применимые налоги, частота выставления счетов и общая регулярная сумма.",
              "Срок и условия любого бесплатного пробного или промо-периода.",
              "Заявление об автоматическом продлении и момент, в который подписка продлевается.",
              "Инструкции по отмене через соответствующий магазин.",
              "Информация о возвратах и жалобах без ограничения законных прав.",
              "Долговременная копия или квитанция, которую потребитель может сохранить и распечатать, где это требуется.",
              "Ссылки на настоящие Условия и Политику конфиденциальности до покупки."
            ]
          }
        ]
      }
    ]
  }
} satisfies Record<
  "en" | "ru",
  TermsOfServiceDocument
>;
