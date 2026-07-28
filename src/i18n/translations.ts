import type { Locale } from "./config";
import { privacyPolicyContent } from "./privacy-policy";

export const translations = {
  en: {
    meta: {
      title: "OPHIR — Personal and Family Finance",
      description:
        "OPHIR helps individuals and families understand their finances and make healthier financial decisions.",
    },

    navigation: {
      homeLabel: "OPHIR home",
      primaryLabel: "Primary navigation",
      menu: "Menu",
      plaidUsage: "Plaid",
      dataAccess: "Data",
      features: "Capabilities",
      family: "For Families",
      assistant: "Assistant",
      security: "Security",
      faq: "FAQ",
      contact: "Contact",
    },

    theme: {
      switchToDark: "Switch to dark theme",
      switchToLight: "Switch to light theme",
    },

    footer: {
      ariaLabel: "Footer navigation",
      brandLabel: "OPHIR home",
      description:
        "OPHIR helps individuals and families understand their finances, prepare for what comes next, and make more confident everyday decisions.",
      contactLabel: "Contact",
      emailLabel: "Email",
      addressLabel: "Address",
      availability:
        "OPHIR is in development. Public account setup is not available on this site yet.",
      groups: {
        product: "Product",
        trust: "Trust",
        legal: "Legal",
      },
      links: {
        features: "Capabilities",
        assistant: "Assistant",
        dataAccess: "Data",
        faq: "FAQ",
        trust: "Trust",
        security: "Security",
        data: "Data",
        plaid: "Plaid",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
      },
      copyrightPrefix: "©",
      copyrightSuffix: "All rights reserved.",
      countryNote: "Made in Canada.",
    },

    pages: {
      trust: {
        title: "Trust",
      },
      security: {
        title: "Security",
      },
      data: {
        title: "Data",
      },
      plaid: {
        title: "OPHIR and Plaid",
      },
      faq: {
        title: "FAQ",
      },
      privacyPolicy: {
        ...privacyPolicyContent.en,
      },
      termsOfService: {
        title: "Terms of Service",
      },
      cookiePolicy: {
        title: "Cookie Policy",
      },
    },

    home: {
      hero: {
        title: "Order starts here.",
        description:
          "Life is simpler when your finances are under control.",
        primaryAction: "Bring Order to My Finances",
        secondaryAction: "See How It Works",
        securityNote: "Bank-level security. Your data stays yours.",
        panelLabel: "Hero highlights",
        tiles: [
          {
            icon: "chart",
            title: "Understand",
            text: "See where your money goes.",
          },
          {
            icon: "family",
            title: "Plan Together",
            text: "Create budgets and goals as a family.",
          },
          {
            icon: "guidance",
            title: "Get Guidance",
            text: "Helpful insights support more confident decisions.",
          },
          {
            icon: "shield",
            title: "Stay Secure",
            text: "Your financial data remains protected.",
          },
        ],
      },
      title: "Understand your finances",
      subtitle: "Make healthier financial decisions.",
      description:
        "OPHIR brings your personal and family finances into one clear view, helping you understand where you are and what to improve next.",
      primaryAction: "Get OPHIR",
      secondaryAction: "Explore features",
      problem: {
        title: "Money gets harder to read as life grows",
        description:
          "Accounts, subscriptions, shared expenses, and long-term plans often live in different places. That makes everyday decisions feel heavier than they should.",
        cards: [
          {
            title: "Scattered accounts",
            description:
              "Bank accounts, cards, savings, and debts can sit across separate apps, statements, and logins.",
          },
          {
            title: "Spending without a clear picture",
            description:
              "Small purchases, recurring bills, and irregular costs make it hard to see where money actually goes.",
          },
          {
            title: "Family finances are hard to coordinate",
            description:
              "Shared responsibilities, different habits, and uneven visibility can turn simple choices into long conversations.",
          },
          {
            title: "Goals without a practical plan",
            description:
              "Saving, paying down debt, and preparing for the future are difficult when the next step is not obvious.",
          },
        ],
      },
      productOverview: {
        eyebrow: "One platform",
        title: "Your financial assistant every day.",
        assurance: [
          "Works with connected and manual accounts.",
          "Built for individuals and families.",
        ],
      },
      dataAccess: {
        eyebrow: "Data access",
        title: "How OPHIR works with your data",
        description:
          "OPHIR is designed to make financial information understandable while keeping data access, storage and deletion clear.",
        items: [
          {
            title: "What OPHIR receives",
            description:
              "OPHIR receives the Plaid-enabled financial data needed to show balances, transactions, categories, goals, budgets, household views and analysis.",
          },
          {
            title: "What Plaid receives",
            description:
              "Plaid receives the information needed to authenticate your bank connection and provide authorized financial data back to OPHIR.",
          },
          {
            title: "What is stored",
            description:
              "OPHIR stores account, transaction, budget, goal, household and analysis data needed to operate your workspace.",
          },
          {
            title: "What is not stored",
            description:
              "OPHIR does not store bank login passwords, debit card PINs, full card numbers or credentials that let OPHIR move money.",
          },
          {
            title: "How data is used",
            description:
              "Data is used to organize your financial picture, explain changes, power product features and support customer requests.",
          },
          {
            title: "No data sales",
            description:
              "OPHIR does not sell user financial data.",
          },
          {
            title: "Secure storage",
            description:
              "Stored data is protected with security practices designed for sensitive financial information.",
          },
          {
            title: "Deletion by request",
            description:
              "You can request deletion of your OPHIR data through the privacy and data deletion contact.",
          },
        ],
      },
      assistant: {
        backLabel: "Back",
        infoLabel: "Information",
        chartLabel: "Spending chart",
        step: "1",
        title: "Current state",
        todayLabel: ({ date }: { date: string }) => `Today, ${date}`,
        periodLabel: ({
          currentDay,
          totalDays,
        }: {
          currentDay: string;
          totalDays: string;
        }) => `${currentDay} of ${totalDays} days`,
        incomeTitle: "Income",
        expenseTitle: "Expense",
        planLabel: "Plan",
        actualLabel: "Actual",
        planToDateLabel: "Plan to date",
        expensePlanProgressTitle: "Expense plan progress",
        monthlyPlanLabel: "monthly plan",
        monthEndForecastTitle: "Month-end forecast",
        expensePlanLabel: "Expense plan",
        expenseForecastLabel: "Expense forecast",
        projectedShortfallLabel: "Projected shortfall",
        unchangedCaption: "if nothing changes",
        alertTitle: "You are spending faster than planned.",
        alertDescription: ({ shortfall }: { shortfall: string }) =>
          `If nothing changes, the next paycheck will be short by ${shortfall}.`,
      },
      assistantPlanDeviation: {
        backLabel: "Back",
        infoLabel: "Information",
        chartLabel: "Fund variance chart",
        requiredFundIconLabel: "Required fund",
        necessaryFundIconLabel: "Necessary fund",
        flexibleFundIconLabel: "Flexible fund",
        savingsFundIconLabel: "Savings and goals",
        pieChartLabel: "Projected shortfall distribution",
        step: "2",
        title: "What causes the deviation",
        planProgressTitle: ({ progress }: { progress: string }) =>
          `Plan is ${progress} complete`,
        deviationSubtitleLine1: "Main deviations from plan",
        deviationSubtitleLine2: "by fund",
        amountOf: ({
          actual,
          plan,
        }: {
          actual: string;
          plan: string;
        }) => `${actual} of ${plan}`,
        projectedOverrun: ({ amount }: { amount: string }) =>
          `Projected overrun: ${amount}`,
        summaryLead: ({ share }: { share: string }) =>
          `${share} of projected shortfall`,
        summaryBody: "is linked to overspending in the flexible fund.",
        incomeOnPlan: "Income is on plan.",
        funds: {
          requiredTitle: "Required fund",
          necessaryTitle: "Necessary fund",
          flexibleTitle: "Flexible fund",
          savingsTitle: "Savings and goals",
          withinPlanStatus: "Within plan",
          noChangesStatus: "No changes yet",
        },
      },
      assistantRecommendedActions: {
        backLabel: "Back",
        infoLabel: "Information",
        calendarIconLabel: "Paycheck calendar",
        pieChartIconLabel: "Flexible spending limit",
        shoppingBagIconLabel: "Large purchases",
        cupIconLabel: "Optional spending",
        shieldIconLabel: "Required payments",
        checkIconLabel: "Plan confirmation",
        step: "3",
        title: "What to change now",
        daysRemainingLabel: "Days until paycheck",
        daysRemainingValue: ({ days }: { days: string }) => `${days} days`,
        goalLabel: "Goal: avoid a shortfall",
        recommendedActionsTitle: "Recommended actions",
        limitFlexibleTitle: "Limit flexible spending",
        limitFlexibleBeforeAmount: "Use no more than ",
        limitFlexibleAfterAmount: "by month end",
        postponePurchasesTitle: "Move large purchases",
        postponePurchasesDescription:
          "It is better to move planned purchases to next month",
        reduceOptionalTitle: "Reduce non-essential spending",
        reduceOptionalLine1: "For example, restaurants and entertainment",
        reduceOptionalLine2: ({ range }: { range: string }) =>
          `by ${range} per week`,
        requiredPaymentsTitle: "Required payments",
        requiredPaymentsLine1: "Keep paying according to plan.",
        requiredPaymentsLine2: "No changes are required",
        successTitle:
          "These measures will help finish the month without a shortfall.",
        successDescription: "Follow the plan through month end.",
      },
      assistantPlanOutcome: {
        backLabel: "Back",
        infoLabel: "Information",
        forecastIconLabel: "Forecast when following recommendations",
        checkIconLabel: "Completed",
        starIconLabel: "Financial plan status",
        calendarIconLabel: "Next period planning",
        step: "4",
        title: "If you follow the plan",
        forecastTitleLine1: "Forecast when following",
        forecastTitleLine2: "recommendations",
        projectedShortfallLabel: "Projected shortfall",
        nextPaycheckBalanceLabel: "Balance by next paycheck",
        requiredPaymentsTitle: "Required payments",
        requiredPaymentsDescription: "Will be paid in full",
        reserveSavingsTitle: "Reserve and savings",
        reserveSavingsDescription: "Preserved",
        monthlyGoalTitle: "Monthly goal",
        monthlyGoalDescription: ({ progress }: { progress: string }) =>
          `Will be reached at ${progress}`,
        planSavedTitleLine1: "Your financial plan can still",
        planSavedTitleLine2: "be preserved.",
        planSavedDescriptionLine1: "The month will end without a shortfall.",
        planSavedDescriptionLine2: "No extra money, but not in the negative.",
        improveNextPeriodTitle: "The next period can be improved",
        improveNextPeriodDescriptionLine1:
          "After the month ends, Assistant will help",
        improveNextPeriodDescriptionLine2: "adjust the plan.",
      },
      assistantShowcase: {
        title: "How the assistant works",
        subtitles: {
          diagnosis: "Diagnosis",
          planDeviation: "Plan deviation",
          recommendedActions: "Recommended actions",
          planOutcome: "Plan outcome",
        },
      },
      features: {
        eyebrow: "Everything connected",
        title: "Everything you need to manage your money",
        description:
          "From tracking daily spending to planning long-term goals, OPHIR brings every part of your financial life together.",
        features: [
          {
            icon: "accounts",
            variant: "wide",
            title: "Accounts",
            description:
              "Connect your financial accounts or add them manually. See all balances in one place.",
            visual: {
              title: "Connected balances",
              items: [
                {
                  label: "Checking",
                  value: "$12,430",
                },
                {
                  label: "Savings",
                  value: "$38,900",
                },
                {
                  label: "Credit",
                  value: "-$1,240",
                },
              ],
            },
          },
          {
            icon: "transactions",
            variant: "standard",
            title: "Transactions",
            description:
              "Import, review and organize your income and spending without losing the full picture.",
            visual: {
              title: "Recent activity",
              items: [
                {
                  label: "Salary",
                  value: "+$4,800",
                },
                {
                  label: "Groceries",
                  value: "-$164",
                },
                {
                  label: "Utilities",
                  value: "-$92",
                },
              ],
            },
          },
          {
            icon: "budgets",
            variant: "standard",
            title: "Budgets",
            description:
              "Plan how your money should be distributed and understand what remains available.",
            visual: {
              title: "Monthly plan",
              items: [
                {
                  label: "Essentials",
                  value: "72%",
                  width: "72%",
                },
                {
                  label: "Savings",
                  value: "48%",
                  width: "48%",
                },
                {
                  label: "Flexible",
                  value: "35%",
                  width: "35%",
                },
              ],
            },
          },
          {
            icon: "categories",
            variant: "tall",
            title: "Categories",
            description:
              "See exactly where your money goes with a clear and consistent category system.",
            visual: {
              title: "Spending mix",
              items: [
                {
                  label: "Housing",
                  value: "34%",
                  width: "82%",
                },
                {
                  label: "Food",
                  value: "18%",
                  width: "56%",
                },
                {
                  label: "Transport",
                  value: "12%",
                  width: "42%",
                },
                {
                  label: "Health",
                  value: "9%",
                  width: "30%",
                },
              ],
            },
          },
          {
            icon: "goals",
            variant: "wide",
            title: "Goals",
            description:
              "Create financial goals, track progress and understand what is required to reach them.",
            visual: {
              title: "Home deposit",
              items: [
                {
                  label: "Saved",
                  value: "64%",
                  width: "64%",
                },
                {
                  label: "Next milestone",
                  value: "$5,000",
                },
              ],
            },
          },
          {
            icon: "family",
            variant: "standard",
            title: "Family Finance",
            description:
              "Manage personal and shared finances together while keeping responsibilities clear.",
            visual: {
              title: "Shared space",
              items: [
                {
                  label: "Alex",
                  value: "Owner",
                },
                {
                  label: "Maya",
                  value: "Shared",
                },
                {
                  label: "Kids",
                  value: "Goals",
                },
              ],
            },
          },
          {
            icon: "assistant",
            variant: "standard",
            title: "Financial Assistant",
            description:
              "Receive explanations, insights and practical recommendations based on your financial situation.",
            visual: {
              title: "Insight",
              insight:
                "Your subscriptions rose 14% this month. Review recurring charges before setting next month's budget.",
            },
          },
          {
            icon: "reports",
            variant: "wide",
            title: "Reports",
            description:
              "Understand your cash flow, spending patterns and financial progress through clear summaries.",
            visual: {
              title: "Cash flow summary",
              items: [
                {
                  label: "Income",
                  value: "$8,400",
                  width: "88%",
                },
                {
                  label: "Spending",
                  value: "$5,920",
                  width: "62%",
                },
                {
                  label: "Net",
                  value: "$2,480",
                  width: "48%",
                },
              ],
            },
          },
        ],
      },
      financialAssistant: {
        eyebrow: "Financial assistant",
        title: "Understand what changed and what to do next",
        description:
          "OPHIR turns financial data into clear explanations, practical priorities and realistic projections before you make a decision.",
        mockup: {
          ariaLabel:
            "Demonstration mockup of a financial assistant analysis with diagnosis, priorities and expected impact.",
          statusLabel: "Current financial status",
          statusValue: "Stable, with pressure building",
          diagnosisLabel: "Diagnosis",
          diagnosis:
            "Cash flow is positive, but recurring costs are rising faster than flexible income.",
          factorsLabel: "Main factors",
          factors: [
            {
              label: "Subscriptions",
              value: "+14%",
              tone: "warning",
            },
            {
              label: "Groceries",
              value: "+8%",
              tone: "warning",
            },
            {
              label: "Savings rate",
              value: "12%",
              tone: "positive",
            },
          ],
          trendsLabel: "Trends",
          trends: [
            {
              label: "Positive",
              description: "Emergency savings stayed on track this month.",
              tone: "positive",
            },
            {
              label: "Needs attention",
              description: "Recurring charges are reducing monthly flexibility.",
              tone: "warning",
            },
          ],
          priorityLabel: "Next priority",
          priority:
            "Review recurring expenses before increasing the household budget.",
          impactLabel: "Expected impact",
          impact:
            "Reducing two unused charges could free up about $95 per month.",
          sequence: ["Diagnosis", "Priority", "Expected impact"],
        },
        benefits: [
          {
            title: "Explains the why",
            description:
              "See the main reasons behind the current financial picture.",
          },
          {
            title: "Highlights what matters first",
            description:
              "Focus attention on the issue most likely to improve the next decision.",
          },
          {
            title: "Shows possible outcomes",
            description:
              "Compare the likely effect of changes before acting on them.",
          },
        ],
      },
      pricing: {
        eyebrow: "Simple plans",
        title: "Choose the right starting point",
        description:
          "OPHIR will offer clear options for personal and household finance, with final pricing shared before public launch.",
        plans: [
          {
            name: "Personal",
            audience: "For one person",
            status: "Free to start",
            description:
              "A focused way to understand personal accounts, budgets and goals.",
            features: [
              "Personal accounts and budget",
              "Clear financial picture",
              "Basic analytical insights",
              "Personal goals",
            ],
            cta: "Join waitlist",
          },
          {
            name: "Family",
            audience: "Most suitable for households",
            status: "Early access",
            description:
              "A shared workspace for coordinating household money while keeping personal context clear.",
            badge: "Recommended",
            features: [
              "Everything in Personal",
              "Shared household workspace",
              "Multiple household members",
              "Shared budgets and goals",
              "Family analytics",
              "Personal and shared contexts",
            ],
            cta: "Get early access",
          },
          {
            name: "Advisor",
            audience: "For deeper planning needs",
            status: "Pricing to be announced",
            description:
              "A future level for deeper analysis, expanded forecasting and planning scenarios.",
            features: [
              "Deeper financial analytics",
              "Expanded forecasts",
              "Additional planning scenarios",
              "Priority access to new capabilities",
            ],
            cta: "Learn more",
          },
        ],
        note:
          "Plans, availability and commercial terms may change before public launch.",
      },
      faq: {
        eyebrow: "Questions",
        title: "Before you join OPHIR",
        description:
          "Clear answers about what OPHIR is, what it is not, and how it is designed to support personal and household finances.",
        items: [
          {
            question: "What is OPHIR?",
            answer:
              "OPHIR is a financial workspace for personal and family budgeting, analysis and planning.",
          },
          {
            question: "Is OPHIR a bank?",
            answer:
              "No. OPHIR is not presented as a bank and does not claim to provide banking services.",
          },
          {
            question: "Can OPHIR move or spend my money?",
            answer:
              "No. OPHIR is designed for analysis, planning and decision support, not for making transactions on your behalf.",
          },
          {
            question: "How does family finance work?",
            answer:
              "A shared space can bring together household budgets, goals and a family financial picture.",
          },
          {
            question: "Can personal and shared finances remain separate?",
            answer:
              "Yes. OPHIR is designed around separate personal and shared contexts where that distinction matters.",
          },
          {
            question: "Does OPHIR replace a financial advisor?",
            answer:
              "No. The assistant can help analyze information and show options, but it is not a guaranteed replacement for professional financial advice.",
          },
          {
            question: "Which languages are supported?",
            answer:
              "The website currently supports English, Français and Русский.",
          },
          {
            question: "When will OPHIR be available?",
            answer:
              "OPHIR is in development. Early access and public availability will be shared without committing to a fixed launch date yet.",
          },
        ],
      },
    },
  },

  fr: {
    meta: {
      title: "OPHIR — Finances personnelles et familiales",
      description:
        "OPHIR aide les individus et les familles à comprendre leurs finances et à prendre de meilleures décisions financières.",
    },

    navigation: {
      homeLabel: "Accueil OPHIR",
      primaryLabel: "Navigation principale",
      menu: "Menu",
      plaidUsage: "Plaid",
      dataAccess: "Données",
      features: "Fonctionnalités",
      family: "Pour les familles",
      assistant: "Assistant",
      security: "Sécurité",
      faq: "FAQ",
      contact: "Contact",
    },

    theme: {
      switchToDark: "Passer au thème sombre",
      switchToLight: "Passer au thème clair",
    },

    footer: {
      ariaLabel: "Navigation du pied de page",
      brandLabel: "Accueil OPHIR",
      description:
        "OPHIR aide les individus et les familles à comprendre leurs finances, à préparer la suite et à prendre des décisions quotidiennes plus confiantes.",
      contactLabel: "Contact",
      emailLabel: "Courriel",
      addressLabel: "Adresse",
      availability:
        "OPHIR est en développement. La création de compte public n'est pas encore disponible sur ce site.",
      groups: {
        product: "Produit",
        trust: "Confiance",
        legal: "Juridique",
      },
      links: {
        features: "Fonctionnalités",
        assistant: "Assistant",
        dataAccess: "Données",
        faq: "FAQ",
        trust: "Confiance",
        security: "Sécurité",
        data: "Données",
        plaid: "Plaid",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
      },
      copyrightPrefix: "©",
      copyrightSuffix: "Tous droits réservés.",
      countryNote: "Conçu au Canada.",
    },

    pages: {
      trust: {
        title: "Trust",
      },
      security: {
        title: "Sécurité",
      },
      data: {
        title: "Données",
      },
      plaid: {
        title: "OPHIR et Plaid",
      },
      faq: {
        title: "FAQ",
      },
      privacyPolicy: {
        ...privacyPolicyContent.fr,
      },
      termsOfService: {
        title: "Conditions d'utilisation",
      },
      cookiePolicy: {
        title: "Politique d'utilisation des cookies",
      },
    },

    home: {
      hero: {
        title: "L'ordre commence ici.",
        description:
          "La vie est plus simple lorsque vos finances sont sous contrôle.",
        primaryAction: "Mettre de l'ordre dans mes finances",
        secondaryAction: "Voir comment ça fonctionne",
        securityNote:
          "Sécurité de niveau bancaire. Vos données restent les vôtres.",
        panelLabel: "Points clés du Hero",
        tiles: [
          {
            icon: "chart",
            title: "Comprendre",
            text: "Voyez où va votre argent.",
          },
          {
            icon: "family",
            title: "Planifier ensemble",
            text: "Créez des budgets et des objectifs en famille.",
          },
          {
            icon: "guidance",
            title: "Être guidé",
            text: "Des conseils utiles vous aident à décider avec confiance.",
          },
          {
            icon: "shield",
            title: "Rester protégé",
            text: "Vos données financières restent protégées.",
          },
        ],
      },
      title: "Comprenez vos finances",
      subtitle: "Prenez de meilleures décisions financières.",
      description:
        "OPHIR réunit vos finances personnelles et familiales dans une vue claire pour vous aider à comprendre votre situation et les prochaines améliorations possibles.",
      primaryAction: "Découvrir OPHIR",
      secondaryAction: "Voir les fonctionnalités",
      problem: {
        title:
          "Les finances deviennent plus difficiles à lire quand la vie s'élargit",
        description:
          "Les comptes, abonnements, dépenses partagées et projets à long terme se trouvent souvent à des endroits différents. Les décisions du quotidien deviennent alors plus lourdes qu'elles ne devraient l'être.",
        cards: [
          {
            title: "Comptes dispersés",
            description:
              "Comptes bancaires, cartes, épargne et dettes peuvent être répartis entre plusieurs applications, relevés et accès.",
          },
          {
            title: "Dépenses difficiles à clarifier",
            description:
              "Petits achats, factures récurrentes et coûts irréguliers compliquent la compréhension de la destination réelle de l'argent.",
          },
          {
            title: "Finances familiales difficiles à coordonner",
            description:
              "Responsabilités partagées, habitudes différentes et visibilité inégale peuvent transformer des choix simples en longues discussions.",
          },
          {
            title: "Objectifs sans plan lisible",
            description:
              "Épargner, rembourser des dettes ou préparer l'avenir devient plus difficile lorsque la prochaine étape n'est pas évidente.",
          },
        ],
      },
      productOverview: {
        eyebrow: "Une plateforme",
        title: "L'assistant financier du quotidien",
        assurance: [
          "Fonctionne avec les comptes connectés et manuels.",
          "Conçu pour les individus et les familles.",
        ],
      },
      dataAccess: {
        eyebrow: "Accès aux données",
        title: "Comment OPHIR travaille avec vos données",
        description:
          "OPHIR est conçu pour rendre les informations financières compréhensibles tout en gardant l'accès, le stockage et la suppression des données clairs.",
        items: [
          {
            title: "Ce qu'OPHIR reçoit",
            description:
              "OPHIR reçoit les données financières autorisées via Plaid nécessaires aux soldes, transactions, catégories, objectifs, budgets, vues familiales et analyses.",
          },
          {
            title: "Ce que Plaid reçoit",
            description:
              "Plaid reçoit les informations nécessaires pour authentifier votre connexion bancaire et transmettre les données financières autorisées à OPHIR.",
          },
          {
            title: "Ce qui est stocké",
            description:
              "OPHIR stocke les données de comptes, transactions, budgets, objectifs, foyer et analyses nécessaires au fonctionnement de votre espace.",
          },
          {
            title: "Ce qui n'est pas stocké",
            description:
              "OPHIR ne stocke pas les mots de passe bancaires, les NIP de carte de débit, les numéros complets de carte ni les identifiants permettant de déplacer de l'argent.",
          },
          {
            title: "Utilisation des données",
            description:
              "Les données servent à organiser votre situation financière, expliquer les changements, alimenter les fonctionnalités et répondre aux demandes d'assistance.",
          },
          {
            title: "Aucune vente de données",
            description:
              "OPHIR ne vend pas les données financières des utilisateurs.",
          },
          {
            title: "Stockage sécurisé",
            description:
              "Les données stockées sont protégées par des pratiques de sécurité adaptées aux informations financières sensibles.",
          },
          {
            title: "Suppression sur demande",
            description:
              "Vous pouvez demander la suppression de vos données OPHIR via le contact confidentialité et suppression des données.",
          },
        ],
      },
      assistant: {
        backLabel: "Retour",
        infoLabel: "Information",
        chartLabel: "Graphique des dépenses",
        step: "1",
        title: "État actuel",
        todayLabel: ({ date }: { date: string }) => `Aujourd'hui, ${date}`,
        periodLabel: ({
          currentDay,
          totalDays,
        }: {
          currentDay: string;
          totalDays: string;
        }) => `${currentDay} sur ${totalDays} jours`,
        incomeTitle: "Revenu",
        expenseTitle: "Dépense",
        planLabel: "Plan",
        actualLabel: "Réel",
        planToDateLabel: "Plan à date",
        expensePlanProgressTitle: "Avancement du plan de dépenses",
        monthlyPlanLabel: "plan mensuel",
        monthEndForecastTitle: "Prévision de fin de mois",
        expensePlanLabel: "Plan de dépenses",
        expenseForecastLabel: "Prévision des dépenses",
        projectedShortfallLabel: "Déficit prévu",
        unchangedCaption: "si rien ne change",
        alertTitle: "Vous dépensez plus vite que prévu.",
        alertDescription: ({ shortfall }: { shortfall: string }) =>
          `Si rien ne change, il manquera ${shortfall} au prochain salaire.`,
      },
      assistantPlanDeviation: {
        backLabel: "Retour",
        infoLabel: "Information",
        chartLabel: "Graphique des écarts par fonds",
        requiredFundIconLabel: "Fonds obligatoire",
        necessaryFundIconLabel: "Fonds nécessaire",
        flexibleFundIconLabel: "Fonds flexible",
        savingsFundIconLabel: "Épargne et objectifs",
        pieChartLabel: "Répartition du déficit prévu",
        step: "2",
        title: "Ce qui explique l'écart",
        planProgressTitle: ({ progress }: { progress: string }) =>
          `Le plan est réalisé à ${progress}`,
        deviationSubtitleLine1: "Principaux écarts par rapport au plan",
        deviationSubtitleLine2: "par fonds",
        amountOf: ({
          actual,
          plan,
        }: {
          actual: string;
          plan: string;
        }) => `${actual} sur ${plan}`,
        projectedOverrun: ({ amount }: { amount: string }) =>
          `Dépassement prévu : ${amount}`,
        summaryLead: ({ share }: { share: string }) =>
          `${share} du déficit prévu`,
        summaryBody: "sont liés au dépassement du fonds flexible.",
        incomeOnPlan: "Le revenu est conforme au plan.",
        funds: {
          requiredTitle: "Fonds obligatoire",
          necessaryTitle: "Fonds nécessaire",
          flexibleTitle: "Fonds flexible",
          savingsTitle: "Épargne et objectifs",
          withinPlanStatus: "Dans le plan",
          noChangesStatus: "Aucun changement pour l'instant",
        },
      },
      assistantRecommendedActions: {
        backLabel: "Retour",
        infoLabel: "Information",
        calendarIconLabel: "Calendrier du salaire",
        pieChartIconLabel: "Limite des dépenses flexibles",
        shoppingBagIconLabel: "Achats importants",
        cupIconLabel: "Dépenses non essentielles",
        shieldIconLabel: "Paiements obligatoires",
        checkIconLabel: "Confirmation du plan",
        step: "3",
        title: "Que changer maintenant",
        daysRemainingLabel: "Jours avant le salaire",
        daysRemainingValue: ({ days }: { days: string }) => `${days} jours`,
        goalLabel: "Objectif : éviter un déficit",
        recommendedActionsTitle: "Actions recommandées",
        limitFlexibleTitle: "Limitez les dépenses flexibles",
        limitFlexibleBeforeAmount: "N'utilisez pas plus de ",
        limitFlexibleAfterAmount: "d'ici la fin du mois",
        postponePurchasesTitle: "Reportez les achats importants",
        postponePurchasesDescription:
          "Il vaut mieux reporter les achats planifiés au mois prochain",
        reduceOptionalTitle: "Réduisez les dépenses non essentielles",
        reduceOptionalLine1: "Par exemple, restaurants et loisirs",
        reduceOptionalLine2: ({ range }: { range: string }) =>
          `de ${range} par semaine`,
        requiredPaymentsTitle: "Paiements obligatoires",
        requiredPaymentsLine1: "Continuez à payer selon le plan.",
        requiredPaymentsLine2: "Aucun changement requis",
        successTitle: "Ces mesures aideront à terminer le mois sans déficit.",
        successDescription: "Suivez le plan jusqu'à la fin du mois.",
      },
      assistantPlanOutcome: {
        backLabel: "Retour",
        infoLabel: "Information",
        forecastIconLabel: "Prévision en suivant les recommandations",
        checkIconLabel: "Terminé",
        starIconLabel: "État du plan financier",
        calendarIconLabel: "Planification de la période suivante",
        step: "4",
        title: "Si vous suivez le plan",
        forecastTitleLine1: "Prévision en suivant",
        forecastTitleLine2: "les recommandations",
        projectedShortfallLabel: "Déficit prévu",
        nextPaycheckBalanceLabel: "Solde avant le prochain salaire",
        requiredPaymentsTitle: "Paiements obligatoires",
        requiredPaymentsDescription: "Seront payés en totalité",
        reserveSavingsTitle: "Réserve et épargne",
        reserveSavingsDescription: "Préservées",
        monthlyGoalTitle: "Objectif du mois",
        monthlyGoalDescription: ({ progress }: { progress: string }) =>
          `Sera atteint à ${progress}`,
        planSavedTitleLine1: "Votre plan financier peut",
        planSavedTitleLine2: "encore être préservé.",
        planSavedDescriptionLine1: "Le mois se terminera sans déficit.",
        planSavedDescriptionLine2: "Sans argent supplémentaire, mais pas en négatif.",
        improveNextPeriodTitle: "La période suivante peut être améliorée",
        improveNextPeriodDescriptionLine1:
          "Après la fin du mois, Assistant aidera",
        improveNextPeriodDescriptionLine2: "à ajuster le plan.",
      },
      assistantShowcase: {
        title: "Comment fonctionne l'assistant",
        subtitles: {
          diagnosis: "Diagnostic",
          planDeviation: "Écart au plan",
          recommendedActions: "Actions recommandées",
          planOutcome: "Résultat du plan",
        },
      },
      features: {
        eyebrow: "Tout est connecté",
        title: "Tout ce qu'il faut pour gérer votre argent",
        description:
          "Du suivi des dépenses quotidiennes à la planification des objectifs à long terme, OPHIR rassemble chaque partie de votre vie financière.",
        features: [
          {
            icon: "accounts",
            variant: "wide",
            title: "Comptes",
            description:
              "Connectez vos comptes financiers ou ajoutez-les manuellement. Consultez tous les soldes au même endroit.",
            visual: {
              title: "Soldes connectés",
              items: [
                {
                  label: "Compte courant",
                  value: "12 430 $",
                },
                {
                  label: "Épargne",
                  value: "38 900 $",
                },
                {
                  label: "Crédit",
                  value: "-1 240 $",
                },
              ],
            },
          },
          {
            icon: "transactions",
            variant: "standard",
            title: "Transactions",
            description:
              "Importez, vérifiez et organisez vos revenus et dépenses sans perdre la vue d'ensemble.",
            visual: {
              title: "Activité récente",
              items: [
                {
                  label: "Salaire",
                  value: "+4 800 $",
                },
                {
                  label: "Courses",
                  value: "-164 $",
                },
                {
                  label: "Services",
                  value: "-92 $",
                },
              ],
            },
          },
          {
            icon: "budgets",
            variant: "standard",
            title: "Budgets",
            description:
              "Planifiez la répartition de votre argent et comprenez ce qui reste disponible.",
            visual: {
              title: "Plan mensuel",
              items: [
                {
                  label: "Essentiel",
                  value: "72 %",
                  width: "72%",
                },
                {
                  label: "Épargne",
                  value: "48 %",
                  width: "48%",
                },
                {
                  label: "Flexible",
                  value: "35 %",
                  width: "35%",
                },
              ],
            },
          },
          {
            icon: "categories",
            variant: "tall",
            title: "Catégories",
            description:
              "Voyez précisément où va votre argent grâce à un système de catégories clair et cohérent.",
            visual: {
              title: "Répartition",
              items: [
                {
                  label: "Logement",
                  value: "34 %",
                  width: "82%",
                },
                {
                  label: "Alimentation",
                  value: "18 %",
                  width: "56%",
                },
                {
                  label: "Transport",
                  value: "12 %",
                  width: "42%",
                },
                {
                  label: "Santé",
                  value: "9 %",
                  width: "30%",
                },
              ],
            },
          },
          {
            icon: "goals",
            variant: "wide",
            title: "Objectifs",
            description:
              "Créez des objectifs financiers, suivez les progrès et comprenez ce qui est nécessaire pour les atteindre.",
            visual: {
              title: "Apport logement",
              items: [
                {
                  label: "Épargné",
                  value: "64 %",
                  width: "64%",
                },
                {
                  label: "Prochaine étape",
                  value: "5 000 $",
                },
              ],
            },
          },
          {
            icon: "family",
            variant: "standard",
            title: "Finances familiales",
            description:
              "Gérez les finances personnelles et partagées ensemble tout en gardant des responsabilités claires.",
            visual: {
              title: "Espace partagé",
              items: [
                {
                  label: "Alex",
                  value: "Propriétaire",
                },
                {
                  label: "Maya",
                  value: "Partagé",
                },
                {
                  label: "Enfants",
                  value: "Objectifs",
                },
              ],
            },
          },
          {
            icon: "assistant",
            variant: "standard",
            title: "Assistant financier",
            description:
              "Recevez des explications, des éclairages et des recommandations pratiques selon votre situation financière.",
            visual: {
              title: "Observation",
              insight:
                "Vos abonnements ont augmenté de 14 % ce mois-ci. Vérifiez les frais récurrents avant de définir le prochain budget.",
            },
          },
          {
            icon: "reports",
            variant: "wide",
            title: "Rapports",
            description:
              "Comprenez votre flux de trésorerie, vos habitudes de dépense et vos progrès financiers grâce à des synthèses claires.",
            visual: {
              title: "Résumé de trésorerie",
              items: [
                {
                  label: "Revenus",
                  value: "8 400 $",
                  width: "88%",
                },
                {
                  label: "Dépenses",
                  value: "5 920 $",
                  width: "62%",
                },
                {
                  label: "Net",
                  value: "2 480 $",
                  width: "48%",
                },
              ],
            },
          },
        ],
      },
      financialAssistant: {
        eyebrow: "Assistant financier",
        title: "Comprendre ce qui a changé et quoi faire ensuite",
        description:
          "OPHIR transforme les données financières en explications claires, priorités pratiques et projections réalistes avant la décision.",
        mockup: {
          ariaLabel:
            "Maquette de démonstration d'une analyse d'assistant financier avec diagnostic, priorités et impact attendu.",
          statusLabel: "Situation financière actuelle",
          statusValue: "Stable, mais sous pression",
          diagnosisLabel: "Diagnostic",
          diagnosis:
            "Le flux de trésorerie reste positif, mais les coûts récurrents augmentent plus vite que les revenus flexibles.",
          factorsLabel: "Facteurs principaux",
          factors: [
            {
              label: "Abonnements",
              value: "+14 %",
              tone: "warning",
            },
            {
              label: "Courses",
              value: "+8 %",
              tone: "warning",
            },
            {
              label: "Taux d'épargne",
              value: "12 %",
              tone: "positive",
            },
          ],
          trendsLabel: "Tendances",
          trends: [
            {
              label: "Positif",
              description:
                "L'épargne de précaution est restée conforme au plan ce mois-ci.",
              tone: "positive",
            },
            {
              label: "À surveiller",
              description:
                "Les charges récurrentes réduisent la flexibilité mensuelle.",
              tone: "warning",
            },
          ],
          priorityLabel: "Prochaine priorité",
          priority:
            "Revoir les dépenses récurrentes avant d'augmenter le budget du foyer.",
          impactLabel: "Impact estimé",
          impact:
            "Supprimer deux frais inutilisés pourrait libérer environ 95 $ par mois.",
          sequence: ["Diagnostic", "Priorité", "Impact attendu"],
        },
        benefits: [
          {
            title: "Explique les causes",
            description:
              "Identifiez les raisons principales derrière la situation financière actuelle.",
          },
          {
            title: "Priorise l'attention",
            description:
              "Concentrez-vous sur le point qui peut le plus améliorer la prochaine décision.",
          },
          {
            title: "Montre les effets possibles",
            description:
              "Comparez l'effet probable des changements avant de les appliquer.",
          },
        ],
      },
      pricing: {
        eyebrow: "Offres simples",
        title: "Choisissez le bon point de départ",
        description:
          "OPHIR proposera des options claires pour les finances personnelles et familiales, avec des tarifs définitifs communiqués avant le lancement public.",
        plans: [
          {
            name: "Personnel",
            audience: "Pour une personne",
            status: "Gratuit pour commencer",
            description:
              "Une façon ciblée de comprendre ses comptes, budgets et objectifs personnels.",
            features: [
              "Comptes et budget personnels",
              "Vue financière claire",
              "Analyses de base",
              "Objectifs personnels",
            ],
            cta: "Rejoindre la liste",
          },
          {
            name: "Famille",
            audience: "Le plus adapté aux foyers",
            status: "Accès anticipé",
            description:
              "Un espace partagé pour coordonner l'argent du foyer tout en gardant le contexte personnel clair.",
            badge: "Recommandé",
            features: [
              "Tout ce qui est inclus dans Personnel",
              "Espace partagé du foyer",
              "Plusieurs membres du foyer",
              "Budgets et objectifs partagés",
              "Analyses familiales",
              "Contextes personnels et partagés",
            ],
            cta: "Demander l'accès",
          },
          {
            name: "Conseil",
            audience: "Pour une planification plus avancée",
            status: "Tarifs à annoncer",
            description:
              "Un futur niveau pour des analyses plus profondes, des prévisions étendues et des scénarios de planification.",
            features: [
              "Analyses financières plus poussées",
              "Prévisions étendues",
              "Scénarios de planification supplémentaires",
              "Accès prioritaire aux nouveautés",
            ],
            cta: "En savoir plus",
          },
        ],
        note:
          "Les offres, la disponibilité et les conditions commerciales peuvent évoluer avant le lancement public.",
      },
      faq: {
        eyebrow: "Questions",
        title: "Avant de rejoindre OPHIR",
        description:
          "Des réponses simples sur ce qu'est OPHIR, ce qu'il n'est pas et la façon dont il accompagne les finances personnelles et familiales.",
        items: [
          {
            question: "Qu'est-ce qu'OPHIR ?",
            answer:
              "OPHIR est un espace financier pour le budget, l'analyse et la planification des finances personnelles et familiales.",
          },
          {
            question: "OPHIR est-il une banque ?",
            answer:
              "Non. OPHIR n'est pas présenté comme une banque et ne prétend pas fournir des services bancaires.",
          },
          {
            question: "OPHIR peut-il déplacer ou dépenser mon argent ?",
            answer:
              "Non. OPHIR est conçu pour l'analyse, la planification et l'aide à la décision, pas pour effectuer des transactions à votre place.",
          },
          {
            question: "Comment fonctionnent les finances familiales ?",
            answer:
              "Un espace partagé peut réunir les budgets, les objectifs et la vue financière du foyer.",
          },
          {
            question:
              "Les finances personnelles et partagées peuvent-elles rester séparées ?",
            answer:
              "Oui. OPHIR est conçu autour de contextes personnels et partagés distincts lorsque cette séparation est importante.",
          },
          {
            question: "OPHIR remplace-t-il un conseiller financier ?",
            answer:
              "Non. L'assistant peut aider à analyser l'information et à voir des options, mais il ne remplace pas de façon garantie un conseil financier professionnel.",
          },
          {
            question: "Quelles langues sont prises en charge ?",
            answer:
              "Le site prend actuellement en charge English, Français et Русский.",
          },
          {
            question: "Quand OPHIR sera-t-il disponible ?",
            answer:
              "OPHIR est en développement. L'accès anticipé et la disponibilité publique seront communiqués sans annoncer de date fixe pour le moment.",
          },
        ],
      },
    },
  },

  ru: {
    meta: {
      title: "OPHIR — Личные и семейные финансы",
      description:
        "OPHIR помогает людям и семьям понимать свои финансы и принимать более здоровые финансовые решения.",
    },

    navigation: {
      homeLabel: "Главная OPHIR",
      primaryLabel: "Основная навигация",
      menu: "Меню",
      plaidUsage: "Plaid",
      dataAccess: "Данные",
      features: "Возможности",
      family: "Для семьи",
      assistant: "Ассистент",
      security: "Безопасность",
      faq: "Вопросы",
      contact: "Контакты",
    },

    theme: {
      switchToDark: "Переключить на тёмную тему",
      switchToLight: "Переключить на светлую тему",
    },

    footer: {
      ariaLabel: "Навигация в подвале сайта",
      brandLabel: "Главная OPHIR",
      description:
        "OPHIR помогает отдельным пользователям и семьям понимать свои финансы, готовиться к следующим шагам и увереннее принимать повседневные решения.",
      contactLabel: "Контакты",
      emailLabel: "Электронная почта",
      addressLabel: "Адрес",
      availability:
        "OPHIR находится в разработке. Создание публичного аккаунта на этом сайте пока недоступно.",
      groups: {
        product: "Продукт",
        trust: "Доверие",
        legal: "Правовая информация",
      },
      links: {
        features: "Возможности",
        assistant: "Ассистент",
        dataAccess: "Данные",
        faq: "Вопросы",
        trust: "Доверие",
        security: "Безопасность",
        data: "Данные",
        plaid: "Plaid",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
      },
      copyrightPrefix: "©",
      copyrightSuffix: "Все права защищены.",
      countryNote: "Сделано в Канаде.",
    },

    pages: {
      trust: {
        title: "Надёжность",
      },
      security: {
        title: "Безопасность",
      },
      data: {
        title: "Данные",
      },
      plaid: {
        title: "OPHIR и Plaid",
      },
      faq: {
        title: "FAQ",
      },
      privacyPolicy: {
        ...privacyPolicyContent.ru,
      },
      termsOfService: {
        title: "Условия использования",
      },
      cookiePolicy: {
        title: "Политика cookie",
      },
    },

    home: {
      hero: {
        title: "Порядок начинается здесь.",
        description:
          "Жить проще, когда финансы под контролем.",
        primaryAction: "Навести порядок",
        secondaryAction: "Посмотреть возможности",
        securityNote:
          "Защита банковского уровня. Ваши данные остаются вашими.",
        panelLabel: "Ключевые пункты Hero",
        tiles: [
          {
            icon: "chart",
            title: "Понимайте",
            text: "Видьте, куда направляются ваши деньги.",
          },
          {
            icon: "family",
            title: "Планируйте вместе",
            text: "Создавайте семейные бюджеты и цели.",
          },
          {
            icon: "guidance",
            title: "Получайте ориентиры",
            text: "Полезные подсказки помогают принимать уверенные решения.",
          },
          {
            icon: "shield",
            title: "Оставайтесь защищёнными",
            text: "Ваши финансовые данные надёжно защищены.",
          },
        ],
      },
      title: "Понимайте свои финансы",
      subtitle: "Принимайте более здоровые финансовые решения.",
      description:
        "OPHIR объединяет личные и семейные финансы в одной понятной картине, помогая увидеть текущее положение и определить следующие улучшения.",
      primaryAction: "Узнать об OPHIR",
      secondaryAction: "Посмотреть возможности",
      problem: {
        title: "Финансы труднее понимать, когда жизнь усложняется",
        description:
          "Счета, подписки, общие расходы и долгосрочные планы часто находятся в разных местах. Из-за этого повседневные решения ощущаются сложнее, чем должны быть.",
        cards: [
          {
            title: "Разрозненные счета",
            description:
              "Банковские счета, карты, накопления и долги могут быть разбросаны по разным приложениям, выпискам и личным кабинетам.",
          },
          {
            title: "Нет ясности в расходах",
            description:
              "Мелкие покупки, регулярные платежи и нерегулярные траты мешают увидеть, куда на самом деле уходят деньги.",
          },
          {
            title: "Семейными финансами сложно управлять",
            description:
              "Общие обязательства, разные привычки и неравный доступ к информации могут превращать простые решения в долгие обсуждения.",
          },
          {
            title: "Финансовые цели без понятного плана",
            description:
              "Копить, закрывать долги и готовиться к будущему сложнее, когда следующий шаг неочевиден.",
          },
        ],
      },
      productOverview: {
        eyebrow: "Единая платформа",
        title: "Ваш финансовый ассистент каждый день.",
        assurance: [
          "Работает с подключенными и ручными счетами.",
          "Создан для отдельных пользователей и семей.",
        ],
      },
      dataAccess: {
        eyebrow: "Доступ к данным",
        title: "Как OPHIR работает с вашими данными",
        description:
          "OPHIR создан, чтобы делать финансовую информацию понятнее и при этом сохранять прозрачными доступ к данным, хранение и удаление.",
        items: [
          {
            title: "Что получает OPHIR",
            description:
              "OPHIR получает разрешенные через Plaid финансовые данные, необходимые для балансов, транзакций, категорий, целей, бюджетов, семейных представлений и анализа.",
          },
          {
            title: "Что получает Plaid",
            description:
              "Plaid получает информацию, необходимую для аутентификации банковского подключения и передачи разрешенных финансовых данных в OPHIR.",
          },
          {
            title: "Что хранится",
            description:
              "OPHIR хранит данные счетов, транзакций, бюджетов, целей, семьи и анализа, необходимые для работы вашего пространства.",
          },
          {
            title: "Что не хранится",
            description:
              "OPHIR не хранит банковские пароли, PIN-коды дебетовых карт, полные номера карт или учетные данные, которые позволяют перемещать деньги.",
          },
          {
            title: "Как используются данные",
            description:
              "Данные используются, чтобы организовать финансовую картину, объяснять изменения, поддерживать функции продукта и обрабатывать запросы поддержки.",
          },
          {
            title: "Данные не продаются",
            description:
              "OPHIR не продает финансовые данные пользователей.",
          },
          {
            title: "Безопасное хранение",
            description:
              "Хранимые данные защищаются практиками безопасности, рассчитанными на чувствительную финансовую информацию.",
          },
          {
            title: "Удаление по запросу",
            description:
              "Вы можете запросить удаление данных OPHIR через контакт для вопросов конфиденциальности и удаления данных.",
          },
        ],
      },
      assistant: {
        backLabel: "Назад",
        infoLabel: "Информация",
        chartLabel: "График расходов",
        step: "1",
        title: "Текущее состояние",
        todayLabel: ({ date }: { date: string }) => `Сегодня, ${date}`,
        periodLabel: ({
          currentDay,
          totalDays,
        }: {
          currentDay: string;
          totalDays: string;
        }) => `${currentDay} из ${totalDays} дней`,
        incomeTitle: "Доход",
        expenseTitle: "Расход",
        planLabel: "План",
        actualLabel: "Факт",
        planToDateLabel: "План на сегодня",
        expensePlanProgressTitle: "Выполнение плана расходов",
        monthlyPlanLabel: "план на месяц",
        monthEndForecastTitle: "Прогноз на конец месяца",
        expensePlanLabel: "План расходов",
        expenseForecastLabel: "Прогноз расходов",
        projectedShortfallLabel: "Прогнозируемый дефицит",
        unchangedCaption: "если ничего не изменить",
        alertTitle: "Вы тратите быстрее, чем планировали.",
        alertDescription: ({ shortfall }: { shortfall: string }) =>
          `Если ничего не изменить, к следующей зарплате не хватит ${shortfall}.`,
      },
      assistantPlanDeviation: {
        backLabel: "Назад",
        infoLabel: "Информация",
        chartLabel: "График отклонений по фондам",
        requiredFundIconLabel: "Обязательный фонд",
        necessaryFundIconLabel: "Необходимый фонд",
        flexibleFundIconLabel: "Свободный фонд",
        savingsFundIconLabel: "Накопления и цели",
        pieChartLabel: "Структура прогнозируемого дефицита",
        step: "2",
        title: "Что вызывает отклонение",
        planProgressTitle: ({ progress }: { progress: string }) =>
          `План выполняется на ${progress}`,
        deviationSubtitleLine1: "Основные отклонения от плана",
        deviationSubtitleLine2: "по фондам",
        amountOf: ({
          actual,
          plan,
        }: {
          actual: string;
          plan: string;
        }) => `${actual} из ${plan}`,
        projectedOverrun: ({ amount }: { amount: string }) =>
          `Прогноз превышения: ${amount}`,
        summaryLead: ({ share }: { share: string }) =>
          `${share} прогнозируемого дефицита`,
        summaryBody: "связаны с превышением свободного фонда.",
        incomeOnPlan: "Доход соответствует плану.",
        funds: {
          requiredTitle: "Обязательный фонд",
          necessaryTitle: "Необходимый фонд",
          flexibleTitle: "Свободный фонд",
          savingsTitle: "Накопления и цели",
          withinPlanStatus: "В пределах плана",
          noChangesStatus: "Пока без изменений",
        },
      },
      assistantRecommendedActions: {
        backLabel: "Назад",
        infoLabel: "Информация",
        calendarIconLabel: "Календарь зарплаты",
        pieChartIconLabel: "Лимит свободных расходов",
        shoppingBagIconLabel: "Крупные покупки",
        cupIconLabel: "Необязательные траты",
        shieldIconLabel: "Обязательные платежи",
        checkIconLabel: "Подтверждение плана",
        step: "3",
        title: "Что изменить сейчас",
        daysRemainingLabel: "До зарплаты осталось",
        daysRemainingValue: ({ days }: { days: string }) => `${days} дней`,
        goalLabel: "Цель: избежать дефицита",
        recommendedActionsTitle: "Рекомендуемые действия",
        limitFlexibleTitle: "Ограничьте свободные расходы",
        limitFlexibleBeforeAmount: "Используйте не более ",
        limitFlexibleAfterAmount: "до конца месяца",
        postponePurchasesTitle: "Перенесите крупные покупки",
        postponePurchasesDescription:
          "Лучше отложить запланированные покупки на следующий месяц",
        reduceOptionalTitle: "Сократите необязательные траты",
        reduceOptionalLine1: "Например, рестораны и развлечения",
        reduceOptionalLine2: ({ range }: { range: string }) =>
          `на ${range} в неделю`,
        requiredPaymentsTitle: "Обязательные платежи",
        requiredPaymentsLine1: "Продолжайте оплачивать по плану.",
        requiredPaymentsLine2: "Изменений не требуется",
        successTitle: "Эти меры помогут завершить месяц без дефицита.",
        successDescription: "Следуйте плану до конца месяца.",
      },
      assistantPlanOutcome: {
        backLabel: "Назад",
        infoLabel: "Информация",
        forecastIconLabel: "Прогноз при соблюдении рекомендаций",
        checkIconLabel: "Выполнено",
        starIconLabel: "Состояние финансового плана",
        calendarIconLabel: "Планирование следующего периода",
        step: "4",
        title: "Если следовать плану",
        forecastTitleLine1: "Прогноз при соблюдении",
        forecastTitleLine2: "рекомендаций",
        projectedShortfallLabel: "Прогнозируемый дефицит",
        nextPaycheckBalanceLabel: "Остаток к следующей зарплате",
        requiredPaymentsTitle: "Обязательные платежи",
        requiredPaymentsDescription: "Будут оплачены в полном объёме",
        reserveSavingsTitle: "Резерв и накопления",
        reserveSavingsDescription: "Сохранены",
        monthlyGoalTitle: "Цель месяца",
        monthlyGoalDescription: ({ progress }: { progress: string }) =>
          `Будет достигнута на ${progress}`,
        planSavedTitleLine1: "Ваш финансовый план всё ещё",
        planSavedTitleLine2: "можно сохранить.",
        planSavedDescriptionLine1: "Месяц завершится без дефицита.",
        planSavedDescriptionLine2: "Без лишних денег, но не в минус.",
        improveNextPeriodTitle: "Можно улучшить следующий период",
        improveNextPeriodDescriptionLine1:
          "После завершения месяца Assistant",
        improveNextPeriodDescriptionLine2: "поможет скорректировать план.",
      },
      assistantShowcase: {
        title: "Как работает ассистент",
        subtitles: {
          diagnosis: "Диагностика",
          planDeviation: "Отклонение от плана",
          recommendedActions: "Рекомендуемые действия",
          planOutcome: "Итог плана",
        },
      },
      features: {
        eyebrow: "Все связано",
        title: "Все, что нужно для управления деньгами",
        description:
          "От отслеживания ежедневных расходов до планирования долгосрочных целей OPHIR объединяет все части вашей финансовой жизни.",
        features: [
          {
            icon: "accounts",
            variant: "wide",
            title: "Счета",
            description:
              "Подключайте финансовые счета или добавляйте их вручную. Видьте все балансы в одном месте.",
            visual: {
              title: "Подключенные балансы",
              items: [
                {
                  label: "Текущий счет",
                  value: "$12,430",
                },
                {
                  label: "Накопления",
                  value: "$38,900",
                },
                {
                  label: "Кредит",
                  value: "-$1,240",
                },
              ],
            },
          },
          {
            icon: "transactions",
            variant: "standard",
            title: "Транзакции",
            description:
              "Импортируйте, проверяйте и упорядочивайте доходы и расходы, не теряя общей картины.",
            visual: {
              title: "Последние операции",
              items: [
                {
                  label: "Зарплата",
                  value: "+$4,800",
                },
                {
                  label: "Продукты",
                  value: "-$164",
                },
                {
                  label: "Услуги",
                  value: "-$92",
                },
              ],
            },
          },
          {
            icon: "budgets",
            variant: "standard",
            title: "Бюджеты",
            description:
              "Планируйте распределение денег и понимайте, сколько остается доступным.",
            visual: {
              title: "План на месяц",
              items: [
                {
                  label: "Основное",
                  value: "72%",
                  width: "72%",
                },
                {
                  label: "Накопления",
                  value: "48%",
                  width: "48%",
                },
                {
                  label: "Гибкие траты",
                  value: "35%",
                  width: "35%",
                },
              ],
            },
          },
          {
            icon: "categories",
            variant: "tall",
            title: "Категории",
            description:
              "Точно видьте, куда уходят деньги, с понятной и последовательной системой категорий.",
            visual: {
              title: "Структура расходов",
              items: [
                {
                  label: "Жилье",
                  value: "34%",
                  width: "82%",
                },
                {
                  label: "Еда",
                  value: "18%",
                  width: "56%",
                },
                {
                  label: "Транспорт",
                  value: "12%",
                  width: "42%",
                },
                {
                  label: "Здоровье",
                  value: "9%",
                  width: "30%",
                },
              ],
            },
          },
          {
            icon: "goals",
            variant: "wide",
            title: "Цели",
            description:
              "Создавайте финансовые цели, отслеживайте прогресс и понимайте, что нужно для их достижения.",
            visual: {
              title: "Взнос за жилье",
              items: [
                {
                  label: "Накоплено",
                  value: "64%",
                  width: "64%",
                },
                {
                  label: "Следующий этап",
                  value: "$5,000",
                },
              ],
            },
          },
          {
            icon: "family",
            variant: "standard",
            title: "Семейные финансы",
            description:
              "Управляйте личными и общими финансами вместе, сохраняя понятные зоны ответственности.",
            visual: {
              title: "Общее пространство",
              items: [
                {
                  label: "Алекс",
                  value: "Владелец",
                },
                {
                  label: "Майя",
                  value: "Общий доступ",
                },
                {
                  label: "Дети",
                  value: "Цели",
                },
              ],
            },
          },
          {
            icon: "assistant",
            variant: "standard",
            title: "Финансовый ассистент",
            description:
              "Получайте объяснения, выводы и практические рекомендации на основе вашей финансовой ситуации.",
            visual: {
              title: "Вывод",
              insight:
                "Ваши подписки выросли на 14% в этом месяце. Проверьте регулярные списания перед планированием следующего бюджета.",
            },
          },
          {
            icon: "reports",
            variant: "wide",
            title: "Отчеты",
            description:
              "Понимайте денежный поток, структуру расходов и финансовый прогресс через понятные сводки.",
            visual: {
              title: "Сводка потока",
              items: [
                {
                  label: "Доход",
                  value: "$8,400",
                  width: "88%",
                },
                {
                  label: "Расходы",
                  value: "$5,920",
                  width: "62%",
                },
                {
                  label: "Итог",
                  value: "$2,480",
                  width: "48%",
                },
              ],
            },
          },
        ],
      },
      financialAssistant: {
        eyebrow: "Финансовый ассистент",
        title: "Понимайте, что изменилось и что делать дальше",
        description:
          "OPHIR превращает финансовые данные в понятные объяснения, практичные приоритеты и реалистичные прогнозы до принятия решения.",
        mockup: {
          ariaLabel:
            "Демонстрационный макет анализа финансового ассистента с диагнозом, приоритетами и ожидаемым эффектом.",
          statusLabel: "Текущее финансовое состояние",
          statusValue: "Стабильно, но нагрузка растет",
          diagnosisLabel: "Диагноз",
          diagnosis:
            "Денежный поток остается положительным, но регулярные расходы растут быстрее гибкого дохода.",
          factorsLabel: "Главные факторы",
          factors: [
            {
              label: "Подписки",
              value: "+14%",
              tone: "warning",
            },
            {
              label: "Продукты",
              value: "+8%",
              tone: "warning",
            },
            {
              label: "Доля накоплений",
              value: "12%",
              tone: "positive",
            },
          ],
          trendsLabel: "Тенденции",
          trends: [
            {
              label: "Положительно",
              description:
                "Резервные накопления в этом месяце остались по плану.",
              tone: "positive",
            },
            {
              label: "Требует внимания",
              description:
                "Регулярные списания уменьшают ежемесячную гибкость.",
              tone: "warning",
            },
          ],
          priorityLabel: "Следующий приоритет",
          priority:
            "Проверить регулярные расходы перед увеличением семейного бюджета.",
          impactLabel: "Ожидаемый эффект",
          impact:
            "Отмена двух неиспользуемых списаний может освободить около $95 в месяц.",
          sequence: ["Диагноз", "Приоритет", "Ожидаемый эффект"],
        },
        benefits: [
          {
            title: "Объясняет причины",
            description:
              "Показывает главные факторы текущей финансовой картины.",
          },
          {
            title: "Выделяет главное",
            description:
              "Помогает сфокусироваться на том, что важнее для следующего решения.",
          },
          {
            title: "Показывает возможный эффект",
            description:
              "Позволяет сравнить вероятный результат изменений до действий.",
          },
        ],
      },
      pricing: {
        eyebrow: "Понятные планы",
        title: "Выберите подходящую точку старта",
        description:
          "OPHIR предложит понятные варианты для личных и семейных финансов, а финальные условия будут опубликованы до публичного запуска.",
        plans: [
          {
            name: "Личный",
            audience: "Для одного пользователя",
            status: "Бесплатно для старта",
            description:
              "Сфокусированный способ разобраться в личных счетах, бюджете и целях.",
            features: [
              "Личные счета и бюджет",
              "Понятная финансовая картина",
              "Базовые аналитические подсказки",
              "Личные цели",
            ],
            cta: "Встать в список",
          },
          {
            name: "Семейный",
            audience: "Лучше всего для семей",
            status: "Ранний доступ",
            description:
              "Общее пространство для координации семейных денег с сохранением личного контекста.",
            badge: "Рекомендуется",
            features: [
              "Все из Личного плана",
              "Общее семейное пространство",
              "Несколько участников семьи",
              "Совместные бюджеты и цели",
              "Семейная аналитика",
              "Личный и общий контекст",
            ],
            cta: "Получить ранний доступ",
          },
          {
            name: "Советник",
            audience: "Для более глубокого планирования",
            status: "Цена будет объявлена",
            description:
              "Будущий уровень для более глубокой аналитики, расширенных прогнозов и сценариев планирования.",
            features: [
              "Более глубокая финансовая аналитика",
              "Расширенные прогнозы",
              "Дополнительные сценарии планирования",
              "Приоритетный доступ к новым возможностям",
            ],
            cta: "Узнать больше",
          },
        ],
        note:
          "Планы, доступность и коммерческие условия могут измениться до публичного запуска.",
      },
      faq: {
        eyebrow: "Вопросы",
        title: "Перед тем как присоединиться к OPHIR",
        description:
          "Короткие ответы о том, что такое OPHIR, чем он не является и как он помогает с личными и семейными финансами.",
        items: [
          {
            question: "Что такое OPHIR?",
            answer:
              "OPHIR — это финансовое пространство для личного и семейного бюджета, анализа и планирования.",
          },
          {
            question: "OPHIR — это банк?",
            answer:
              "Нет. OPHIR не позиционируется как банк и не заявляет, что предоставляет банковские услуги.",
          },
          {
            question: "Может ли OPHIR переводить или тратить мои деньги?",
            answer:
              "Нет. OPHIR предназначен для анализа, планирования и помощи в принятии решений, а не для самостоятельного совершения транзакций.",
          },
          {
            question: "Как работают семейные финансы?",
            answer:
              "Общее пространство может объединять семейные бюджеты, цели и финансовую картину семьи.",
          },
          {
            question: "Могут ли личные и общие финансы оставаться раздельными?",
            answer:
              "Да. OPHIR проектируется вокруг отдельных личных и общих контекстов там, где это важно.",
          },
          {
            question: "Заменяет ли OPHIR финансового консультанта?",
            answer:
              "Нет. Ассистент может помогать анализировать информацию и видеть варианты, но не является гарантированной заменой профессиональной финансовой консультации.",
          },
          {
            question: "Какие языки поддерживаются?",
            answer: "Сайт сейчас поддерживает English, Français и Русский.",
          },
          {
            question: "Когда OPHIR будет доступен?",
            answer:
              "OPHIR находится в разработке. Информация о раннем доступе и публичной доступности будет опубликована без указания фиксированной даты запуска.",
          },
        ],
      },
    },
  },
} as const satisfies Record<Locale, object>;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
