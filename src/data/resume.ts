export interface SocialLink {
  network: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  image: string;
  contacts: {
    email: string;
    phone: string;
    location: string;
    socials: SocialLink[];
  };
}

export interface Summary {
  citizenship: string;
  languages: string;
  bio: string;
}

export interface Experience {
  period: {
    start: string;
    end: string;
    duration: string;
  };
  role: string;
  company: {
    name: string;
    url: string;
    location: string;
  };
  details: string[];
  meta: {
    sector: string;
    employmentType: string;
  };
}

export interface SkillCategory {
  category: string;
  layoutType: 'inline' | 'list';
  items: string[];
}

export interface PreferenceItem {
  title: string;
  content: string;
}

export interface Preferences {
  items: PreferenceItem[];
}

export interface Footer {
  meetingUrl: string;
  email: string;
}

export interface ResumeData {
  profile: Profile;
  summary: Summary;
  experience: Experience[];
  skills: SkillCategory[];
  preferences: Preferences;
  footer: Footer;
}

export const resumeData: ResumeData = {
  profile: {
    name: "Artem Titkov",
    title: "Front End / Full Stack Engineer",
    image: "/profile.jpg", // Placeholder path, assumes image in public
    contacts: {
      email: "artemkloko@gmail.com",
      phone: "+49 15 256 067890",
      location: "Berlin, Germany",
      socials: [
        {
          network: "email",
          url: "mailto:artemkloko@gmail.com",
          icon: "fas fa-envelope"
        },
        {
          network: "github",
          url: "https://github.com/artemkloko",
          icon: "fab fa-github-alt"
        },
        {
          network: "docker",
          url: "https://hub.docker.com/u/artemkloko",
          icon: "fab fa-docker"
        },
        {
          network: "stackoverflow",
          url: "https://stackoverflow.com/users/4968678/artemkloko",
          icon: "fab fa-stack-overflow"
        },
        {
          network: "linkedin",
          url: "https://www.linkedin.com/in/artemkloko/",
          icon: "fab fa-linkedin"
        }
      ]
    }
  },
  summary: {
    citizenship: "European",
    languages: "English, Greek, Russian",
    bio: "Full stack engineer with front end specialization. Experienced with modern JS/TS frameworks, backend integration, and cloud infrastructure."
  },
  experience: [
    {
      period: {
        start: "September 2025",
        end: "March 2026",
        duration: "5 months"
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
        "Multilingual, interactive storytelling experience...",
        "Mediawiki extension that renders context-sensitive..."
      ],
      meta: {
        sector: "Non-profit / Education",
        employmentType: "Freelance / Remote"
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
        "TypeScript",
        "Tailwind CSS",
        "Node.js"
      ]
    },
    {
      category: "Frontend specialization",
      layoutType: "inline",
      items: [
        "Project architecture",
        "API client design and implementation",
        "Performance optimization"
      ]
    },
     {
      category: "Organisational and managerial",
      layoutType: "list",
      items: [
        "Strong analytical, problem solving and self education skills",
        "Team leadership and mentoring"
      ]
    }
  ],
  preferences: {
    items: [
        {
            title: "Position",
            content: "I am looking for a Senior or Lead position..."
        },
        {
            title: "Location",
            content: "I am open to remote, hybrid, and on-site positions..."
        },
        {
            title: "Employment type",
            content: "I am open to full-time permanent employment..."
        }
    ]
  },
  footer: {
      meetingUrl: "https://calendly.com/artemkloko/meeting",
      email: "artemkloko@gmail.com"
  }
};
