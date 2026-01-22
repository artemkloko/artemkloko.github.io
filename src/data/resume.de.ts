import type { ResumeData } from './types';
import { commonData } from './common';

export * from './types';

export const resumeData: ResumeData = {
  profile: {
    name: "Artem Titkov",
    title: "Lead Software Engineer",
    image: commonData.profile.image,
    contacts: {
      email: commonData.profile.email,
      phone: commonData.profile.phone,
      location: "Berlin, Deutschland",
      socials: commonData.profile.socials
    }
  },
  summary: {
    citizenship: "EU-Bürger",
    languages: "Englisch, Griechisch, Russisch",
    bio: "Lead Software Engineer mit Spezialisierung auf Frontend und Fokus auf Product Engineering. Ich schätze ehrliche, menschliche Kommunikation, Arbeitsumgebungen mit guter Kultur und aufgeschlossenen Menschen, Teamarbeit in flachen Hierarchien, Transparenz in der Zusammenarbeit, Verantwortung sowie die Natur, Motorräder und Katzen :3"
  },
  experience: [
    {
      period: {
        start: "2025-09",
        end: "2026-03"
      },
      role: "Lead Software Engineer",
      company: {
        name: "Wikimedia Foundation",
        url: "https://wikimediafoundation.org/",
        location: "New York, Vereinigte Staaten"
      },
      details: [
        "Frontend - Vue, Tailwind, Motion, Typescript, Vanilla Javascript",
        "Backend - PHP, Mediawiki, Wikibase",
        "Mehrsprachiges, interaktives Storytelling-Erlebnis zur Feier von 25 Jahren Wikipedia, das Rich-Media-Animationen mit einer dynamischen User Journey verbindet",
        "MediaWiki-Erweiterung, die kontextsensitive, animierte Charaktere auf Artikeln darstellt, mit einem robusten Filter- und Konfigurationssystem für die Community"
      ],
      meta: {
        sector: "Gemeinnützig / Bildung",
        employmentType: "Freiberuflich / Remote"
      }
    },
    {
      period: {
        start: "2025-02",
        end: "2025-04"
      },
      role: "Lead Software Engineer",
      company: {
        name: "Wikimedia Foundation",
        url: "https://wikimediafoundation.org/",
        location: "New York, Vereinigte Staaten"
      },
      details: [
        "Frontend - Vue, Pinia, Tailwind, Motion, Typescript",
        "Backend - Fastify, Prisma, Zod",
        "Mobil-orientierte Web-App in Form eines pädagogischen Textspiels",
        "Von der initialen Einrichtung bis zum Produktions-Deployment in 2,5 Monaten, vollständig nach Spezifikationen geliefert"
      ],
      meta: {
        sector: "Gemeinnützig / Bildung",
        employmentType: "Freiberuflich / Remote"
      }
    },
    {
      period: {
        start: "2023-01",
        end: "2023-10"
      },
      role: "Front End Entwickler",
      company: {
        name: "SAP SE",
        url: "https://www.sap.com/",
        location: "Berlin, Deutschland"
      },
      details: [
        "Frontend - React Native, Fastlane, App Core Design, Functional Components, Typescript",
        "Im Regierungsauftrag entwickelte App für Post-COVID-Hilfen, genutzt von Millionen 18-Jähriger in ganz Deutschland",
        "Von der initialen Einrichtung bis zum Produktions-Deployment in 6 Monaten, vollständig nach Spezifikationen geliefert",
        "Architektur und Entwicklung der Repository-Struktur, Branching-Strategie, Entwicklungs-Styleguide und UI-Komponentenbibliothek zur Sicherstellung von Konsistenz, Wiederverwendbarkeit, Modularität und Wartbarkeit",
        "Design und Implementierung eines Frontend-API-Clients basierend auf RTK Query für die nahtlose Kommunikation mit mehreren Backends, einschließlich Authentifizierung und essentieller kryptografischer Funktionen",
        "Umfassende Web-Barrierefreiheit in der gesamten Anwendung, unter voller Einhaltung der WCAG-Standards",
        "Teamübergreifende Abstimmung und Architektur"
      ],
      meta: {
        sector: "E-Commerce Mobile Apps",
        employmentType: "Freiberuflich / Remote"
      }
    },
    {
      period: {
        start: "2020-12",
        end: "2022-11"
      },
      role: "Full Stack Entwickler",
      company: {
        name: "Klarna Bank AB",
        url: "https://www.klarna.com/",
        location: "Berlin, Deutschland"
      },
      details: [
        "Frontend - React Native, Functional Components, Hooks, Typescript, EsNext",
        "Cloud Backend - NodeJS Services auf AWS",
        "Technisches Design, Aufschlüsselung und Leitung der Entwicklung mehrerer Features",
        "Entwicklung und Wartung von feature-orientierten Backend-for-Frontend (BFF) Lösungen",
        "Teamübergreifende Abstimmung und Architektur, sowohl als Konsumenten als auch als Anbieter von funktionalen Frontend-Services"
      ],
      meta: {
        sector: "Fintech Mobile Apps",
        employmentType: "Freiberuflich / Remote / Hybrid"
      }
    },
    {
      period: {
        start: "2020-01",
        end: "2020-08"
      },
      role: "Full Stack Entwickler",
      company: {
        name: "Get Together Software UG",
        url: "http://www.dashapp.net/",
        location: "Berlin, Deutschland"
      },
      details: [
        "Frontend - React Native, Apollo Client, Functional Components, Hooks, Typescript, EsNext",
        "Cloud Backend - AWS Amplify, AppSync GraphQL, Cognito, DynamoDb, Lambda, ElasticSearch",
        "Datenarchitektur"
      ],
      meta: {
        sector: "Soziale Mobile Apps",
        employmentType: "Freiberuflich / Remote"
      }
    },
    {
      period: {
        start: "2017-08",
        end: "2019-05"
      },
      role: "Teamleiter Tracking",
      company: {
        name: "Dunnhumby Germany GmbH",
        url: "https://www.dunnhumby.com/germany",
        location: "Berlin, Deutschland"
      },
      details: [
        "Frontend - React, Redux, EsNext, Kommunikation mit REST APIs",
        "Tooling - Docker, NodeJs, Bash",
        "Wartung und Weiterentwicklung der Web-App für Administration und Reporting",
        "Implementierung des ElasticSearch / Logstash / Kibana Stacks für Datenreporting und -analyse",
        "Anleitung, Entwicklung und Auslieferung teamübergreifender Features",
        "Feature-Recherche, Lösungsvorschläge und Auswirkungsanalyse",
        "Mitarbeiterengagement, Führung und Karriereentwicklung"
      ],
      meta: {
        sector: "Real-Time Bidding / Kundendatenwissenschaft",
        employmentType: "Festanstellung / Büro"
      }
    },
    {
        period: {
          start: "2015-02",
          end: "2017-07"
        },
        role: "Senior Webentwickler",
        company: {
          name: "Sociomantic Labs GmbH",
          url: "https://www.sociomantic.com/",
          location: "Berlin, Deutschland"
        },
        details: [
          "Frontend - Vanilla Javascript, Advanced Cookies, ECMAScript 3",
          "Tooling - Docker, Python, NodeJs, Selenium WebDriver, Vanilla Javascript, Bash",
          "Wartung und Weiterentwicklung des User-Tracking-Frameworks",
          "Entwicklung eines E2E-Testing-Tools für das oben genannte Framework"
        ],
        meta: {
          sector: "Real-Time Bidding / Ad-Tech",
          employmentType: "Festanstellung / Büro"
        }
      },
      {
        period: {
          start: "2007-10",
          end: "2013-06"
        },
        role: "Webentwickler",
        company: {
          name: "Radial",
          url: "https://radial.gr/",
          location: "Athen, Griechenland"
        },
        details: [
          "Frontend - HTML, CSS, Javascript, jQuery",
          "Backend - PHP, Propel ORM, Wordpress, Python, Django",
          "Debugging und Refactoring von Legacy-Projekten",
          "Entwicklung von kleinen bis großen B2C- und B2B-Websites",
          "Entwicklung eines benutzerdefinierten Content-Management-Systems",
          "Entwicklung von benutzerdefinierten Wordpress-Plugins und Themes",
          "Social-Media-Integration"
        ],
        meta: {
          sector: "Webentwicklung / Online-Branding",
          employmentType: "Festanstellung / Büro"
        }
      }
  ],
  skills: [
    {
      category: "Aktuell arbeite ich mit",
      layoutType: "inline",
      items: [
        "React",
        "React Native",
        "Expo",
        "Vue.js",
        "Next.js",
        "Typescript",
        "Node.js",
        "Python",
        "REST APIs",
        "GraphQL",
        "NoSQL",
        "SQL",
        "Docker",
        "GitLab CI / CD",
        "GitHub Actions",
        "Unix Systems",
        "AWS Amplify / AppSync / Cognito / DynamoDb / Lambda / ElasticSearch"
      ]
    },
    {
      category: "Frontend-Spezialisierung",
      layoutType: "inline",
      items: [
        "Projektarchitektur",
        "API-Client-Design und -Implementierung",
        "API-Cache-Layer",
        "UI-Komponentenbibliothek",
        "Navigation",
        "Internationalisierung",
        "Store-Modellierung / Thunks / Side-Effects / Persistenz"
      ]
    },
    {
      category: "Technologien, die ich gerne nutze",
      layoutType: "inline",
      items: [
        "Asynchrone Ausführung",
        "Observables und Event Emitters",
        "Daten- und Event-Streams",
        "Funktionale Programmierung",
        "Websockets",
        "Datenverarbeitung",
        "Microservices",
        "Continuous Integration",
        "End-to-End / Integration / Logic Tests",
        "Debugger",
        "ECMAScript.Next",
        "Moderne Web-Features",
        "Experimentelle UIs"
      ]
    },
    {
      category: "Organisation und Management",
      layoutType: "list",
      items: [
        "Starke analytische Fähigkeiten, Problemlösungskompetenz und autodidaktische Fähigkeiten",
        "Selbstgesteuert, mit einer positiven 'Can-Do'-Einstellung",
        "Bereit, Aufgaben, Verantwortung und Projektentwicklungsführung zu übernehmen",
        "Interessiert an Wissensaustausch im Team und in der gesamten Organisation",
        "Gute Kommunikationsfähigkeiten mit Kunden, Kollegen und der Nutzerbasis"
      ]
    },
    {
        category: "Andere beim Wachstum unterstützen",
        layoutType: "list",
        items: [
            "Vier Erfolgsgeschichten durch Mentoring von Universitäts-/Bootcamp-Absolventen, die einen Job als Junior Dev erhalten haben"
        ]
    }
  ],
  preferences: {
    items: [
        {
            title: "Position",
            content: "Ich suche eine Position als Lead oder Staff Software Engineer. Ich spezialisiere mich auf Product Engineering und Systemarchitektur und übernehme die Verantwortung für den gesamten Entwicklungszyklus. Mein Fokus liegt auf der Übersetzung komplexer Anforderungen in skalierbare technische Designs, der Etablierung von Engineering Best Practices und der Optimierung der Developer Experience. Ich setze auf technische Führung, Code-Qualität, Mentoring und High-Velocity-Delivery in cross-funktionalen Teams."
        },
        {
            title: "Standort",
            content: "Ich bin offen für Remote-, Hybrid- und Vor-Ort-Positionen. Ich lebe in Berlin, Deutschland, muss aber manchmal aus familiären oder beruflichen Gründen reisen."
        },
        {
            title: "Beschäftigungsart",
            content: "Ich bin offen für Vollzeit-Festanstellungen sowie kurz- und langfristige Freelance- oder Contractor-Projekte."
        },
        {
            title: "Arbeitsproben",
            content: "Bitte besuchen Sie mein GitHub-Konto, wenn Sie einige meiner persönlichen Projekte und Open-Source-Beiträge ansehen möchten. Leider ist ein Großteil der harten Arbeit, die ich in der Vergangenheit geleistet habe, nicht Open Source und gehört privaten Unternehmen, aber bei Zusammenarbeitsbedarf kann ich den Technologie-Stack und die Verfahren skizzieren, die ich in der Vergangenheit verwendet habe."
        }
    ]
  },
  footer: commonData.footer
};
