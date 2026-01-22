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
