import type { ResumeData } from './types';
import { commonData } from './common';

export * from './types';

export const resumeData: ResumeData = {
  profile: {
    name: "Artem Titkov",
    title: "Front End / Full Stack Engineer",
    image: commonData.profile.image,
    contacts: {
      email: commonData.profile.email,
      phone: commonData.profile.phone,
      location: "Berlin, Germany",
      socials: commonData.profile.socials
    }
  },
  summary: {
    citizenship: "European",
    languages: "English, Greek, Russian",
    bio: "Full stack engineer with front end specialization and solid understanding of cloud technologies. I value honest humane communication, working environments with good culture and open-minded people, teamwork in flat organizational structures, transparency in cooperation, responsibility, and nature, and motorcycles, and cats :3"
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
        location: "New York, United States"
      },
      details: [
        "Frontend - Vue, Tailwind, Motion, Typescript, Vanilla Javascript",
        "Backend - PHP, Mediawiki, Wikibase",
        "Multilingual, interactive storytelling experience to celebrate 25 years of Wikipedia, combining rich media animations with a dynamic user journey",
        "Mediawiki extension that renders context-sensitive, animated characters on articles, featuring a robust filtering and configuration system for the community"
      ],
      meta: {
        sector: "Non-profit / Education",
        employmentType: "Freelance / Remote"
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
        location: "New York, United States"
      },
      details: [
        "Frontend - Vue, Pinia, Tailwind, Motion, Typescript",
        "Backend - Fastify, Prisma, Zod",
        "Mobile oriented web app in form of an educational text game",
        "Initial setup to production deployment in 2.5 months, delivered fully to specifications"
      ],
      meta: {
        sector: "Non-profit / Education",
        employmentType: "Freelance / Remote"
      }
    },
    {
      period: {
        start: "2023-01",
        end: "2023-10"
      },
      role: "Front End Engineer",
      company: {
        name: "SAP SE",
        url: "https://www.sap.com/",
        location: "Berlin, Germany"
      },
      details: [
        "Frontend - React Native, Fastlane, App Core Design, Functional Components, Typescript",
        "Government-commissioned app for post-COVID relief, used by millions of 18-year-olds across Germany",
        "Initial setup to production deployment in 6 months, delivered fully to specifications",
        "Architecture and development of repository structure, branching strategy, development style guide, and UI component library, ensuring consistency, reusability, modularity and maintainability",
        "Design and implementation of a frontend API client based on RTK Query to seamlessly communicate with multiple backends, including authentication and essential cryptographic features",
        "Comprehensive web accessibility across the entire application, ensuring full compliance with WCAG standards",
        "Cross team alignment and architecture"
      ],
      meta: {
        sector: "E-commerce mobile apps",
        employmentType: "Freelance / Remote"
      }
    },
    {
      period: {
        start: "2020-12",
        end: "2022-11"
      },
      role: "Full Stack Engineer",
      company: {
        name: "Klarna Bank AB",
        url: "https://www.klarna.com/",
        location: "Berlin, Germany"
      },
      details: [
        "Frontend - React Native, Functional Components, Hooks, Typescript, EsNext",
        "Cloud backend - NodeJS services on AWS",
        "Technical design, breakdown and leading the development of multiple features",
        "Developed and maintained feature-oriented Backend for Frontend (BFF) solutions",
        "Cross team alignment and architecture, both as consumers and as providers of frontend functional services"
      ],
      meta: {
        sector: "Fintech mobile apps",
        employmentType: "Freelance / Remote / Hybrid"
      }
    },
    {
      period: {
        start: "2020-01",
        end: "2020-08"
      },
      role: "Full Stack Engineer",
      company: {
        name: "Get Together Software UG",
        url: "http://www.dashapp.net/",
        location: "Berlin, Germany"
      },
      details: [
        "Frontend - React Native, Apollo Client, Functional Components, Hooks, Typescript, EsNext",
        "Cloud backend - AWS Amplify, AppSync GraphQL, Cognito, DynamoDb, Lambda, ElasticSearch",
        "Data architecture"
      ],
      meta: {
        sector: "Social mobile apps",
        employmentType: "Freelance / Remote"
      }
    },
    {
      period: {
        start: "2017-08",
        end: "2019-05"
      },
      role: "Tracking Team Lead",
      company: {
        name: "Dunnhumby Germany GmbH",
        url: "https://www.dunnhumby.com/germany",
        location: "Berlin, Germany"
      },
      details: [
        "Frontend - React, Redux, EsNext, Communication with REST APIs",
        "Tooling - Docker, NodeJs, Bash",
        "Maintenance and further development of the administrative/reporting web app",
        "Implementation of ElasticSearch / Logstash / Kibana stack for data reporting and analysis",
        "Guiding, developing and shipping cross team features",
        "Features research, solutions proposals and impact evaluation",
        "People engagement, guiding and career development"
      ],
      meta: {
        sector: "Real time bidding / Customer data science",
        employmentType: "Permanent / In-office"
      }
    },
    {
        period: {
          start: "2015-02",
          end: "2017-07"
        },
        role: "Senior Web Developer",
        company: {
          name: "Sociomantic Labs GmbH",
          url: "https://www.sociomantic.com/",
          location: "Berlin, Germany"
        },
        details: [
          "Frontend - Vanilla Javascript, Advanced Cookies, ECMAScript 3",
          "Tooling - Docker, Python, NodeJs, Selenium WebDriver, Vanilla Javascript, Bash",
          "Maintenance and further development of the user tracking framework",
          "Development of an e2e testing tool for the previously mentioned framework"
        ],
        meta: {
          sector: "Real time bidding / Ad-tech",
          employmentType: "Permanent / In-office"
        }
      },
      {
        period: {
          start: "2007-10",
          end: "2013-06"
        },
        role: "Web Developer",
        company: {
          name: "Radial",
          url: "https://radial.gr/",
          location: "Athens, Greece"
        },
        details: [
          "Frontend - HTML, CSS, Javascript, jQuery",
          "Backend - PHP, Propel ORM, Wordpress, Python, Django",
          "Debugging and refactoring legacy projects",
          "Development of small-scale to large-scale B2C and B2B websites",
          "Development of custom content management system",
          "Development of custom Wordpress plugins and themes",
          "Social media integration"
        ],
        meta: {
          sector: "Web development / Online branding",
          employmentType: "Permanent / In-office"
        }
      }
  ],
  skills: [
    {
      category: "Currently I work with",
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
        "Unix systems",
        "AWS Amplify / AppSync / Cognito / DynamoDb / Lambda / ElasticSearch"
      ]
    },
    {
      category: "Frontend specialization",
      layoutType: "inline",
      items: [
        "Project architecture",
        "API client design and implementation",
        "API cache layer",
        "UI component library",
        "Navigation",
        "Internationalization",
        "Store modeling / thunks / side-effects / persistence"
      ]
    },
    {
      category: "Things I like using",
      layoutType: "inline",
      items: [
        "Asynchronous execution",
        "Observables and event emitters",
        "Data streams and event streams",
        "Functional programming",
        "Websockets",
        "Data processing",
        "Microservices",
        "Continuous integration",
        "End-to-End / integration / logic tests",
        "Debuggers",
        "ECMAScript.Next",
        "Contemporary web features",
        "Experimental UIs"
      ]
    },
    {
      category: "Organisational and managerial",
      layoutType: "list",
      items: [
        "Strong analytical, problem solving and self education skills",
        "Self-directed, with a positive can-do attitude",
        "Willing to take up tasks, responsibilities and project development guidance",
        "Interested in knowledge sharing in team and across organization",
        "Good communication skills with clients, co-workers and user base"
      ]
    },
    {
        category: "Helping others grow",
        layoutType: "list",
        items: [
            "Four success stories with mentoring university / bootcamp graduates landing a Junior Dev job"
        ]
    }
  ],
  preferences: {
    items: [
        {
            title: "Position",
            content: "I am looking for a Senior or Lead position. I love coding and driving the full development cycle of any feature forward, i.e. gathering requirements, setting up cross-team communication channels, writing proposals, scoping, estimating, planning, grooming, shipping and measuring the impact of each deployment, no matter if the feature is frontend, backend, or full-stack. I am also interested in leading and helping team members evolve, as I strongly believe that effective work and innovation can only be achieved by a team of engaged, diverse and responsible people."
        },
        {
            title: "Location",
            content: "I am open to remote, hybrid, and on-site positions. I am based in Berlin, Germany, but sometimes I need to travel for family or professional reasons."
        },
        {
            title: "Employment type",
            content: "I am open to full-time permanent employment, as well as short-term and long-term freelance or contractor projects."
        },
        {
            title: "Work samples",
            content: "Please visit my GitHub account if you want to check out some of my personal projects and open source contributions. Unfortunately a lot of the hard work I have done in the past is not open source and belongs to private companies, but upon the needs of collaboration, I can outline the technology stack and procedures that I used in the past."
        }
    ]
  },
  footer: commonData.footer
};
