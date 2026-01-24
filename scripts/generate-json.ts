import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resumeData } from '../src/data/resume.en';
import { updateSitemap } from './utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputFile = path.resolve(__dirname, '../dist/cv.json');

function generateCvJson() {
  const { profile, summary, experience, skills } = resumeData;

  const basics = {
    name: profile.name,
    label: profile.title,
    image: profile.image,
    email: profile.contacts.email,
    phone: profile.contacts.phone,
    url: 'https://artemkloko.github.io',
    summary: summary.bio,
    location: {
      address: profile.contacts.location,
      city: profile.contacts.location.split(',')[0].trim(),
      countryCode: "DE", // Hardcoded based on data
      region: profile.contacts.location.split(',')[1].trim()
    },
    profiles: profile.contacts.socials.map(s => ({
      network: s.network,
      username: s.url.split('/').pop() || s.network,
      url: s.url
    }))
  };

  const work = experience.map(job => ({
    name: job.company.name,
    position: job.role,
    url: job.company.url,
    startDate: job.period.start,
    endDate: job.period.end || 'Present',
    summary: job.details[0] || '',
    highlights: job.details,
    location: job.company.location
  }));

  const mappedSkills = skills.map(skillGroup => ({
    name: skillGroup.category,
    keywords: skillGroup.items
  }));

  const languages = summary.languages.split(',').map(l => ({
    language: l.trim(),
    fluency: "Native or Proficient" // Assumption
  }));

  const resume = {
    basics,
    work,
    skills: mappedSkills,
    languages,
    meta: {
      canonical: "https://artemkloko.github.io/cv.json",
      version: "v1.0.0",
      lastModified: new Date().toISOString()
    }
  };

  return JSON.stringify(resume, null, 2);
}

try {
  // Ensure dist exists
  const distDir = path.dirname(outputFile);
  if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
  }

  const content = generateCvJson();
  fs.writeFileSync(outputFile, content, 'utf-8');
  console.log(`✅ Successfully generated cv.json at ${outputFile}`);

  updateSitemap(path.resolve(__dirname, '../dist'), [
    {
      loc: 'https://artemkloko.github.io/cv.json',
      changefreq: 'weekly',
      priority: 0.5
    }
  ]);
} catch (error) {
  console.error('❌ Error generating cv.json:', error);
  process.exit(1);
}
