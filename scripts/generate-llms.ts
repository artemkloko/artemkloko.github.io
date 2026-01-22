import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resumeData } from '../src/data/resume.en';
import { updateSitemap } from './utils';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target file
const outputFile = path.resolve(__dirname, '../dist/llms.txt');

function generateMarkdown(): string {
  const { profile, summary, experience, skills, preferences } = resumeData;
  // ... (content generation remains the same)

  const experienceSections = experience.map(job => {
    // Format "present" if end is missing
    const endDate = job.period.end || 'Present';
    return `### ${job.role} @ ${job.company.name} (${job.period.start} - ${endDate})
*${job.meta.employmentType} | ${job.company.location}*
- Overview: ${job.details.slice(0, 2).join(', ')}
${job.details.slice(2).map(d => `- ${d}`).join('\n')}
`;
  }).join('\n');

  const skillSections = skills.map(g => {
    return `**${g.category}:** ${g.items.join(', ')}`;
  }).join('\n\n');

  const links = profile.contacts.socials.map(s => `  - ${s.network}: ${s.url}`).join('\n');

  return `# ${profile.name} - ${profile.title}

## Profile

- **Title:** ${profile.title}
- **Location:** ${profile.contacts.location}
- **Email:** ${profile.contacts.email}
- **Phone:** ${profile.contacts.phone}
- **Links:**
  - website: https://artemkloko.github.io
  - [English Resume (PDF)](https://artemkloko.github.io/resume-en.pdf)
  - [German Resume (PDF)](https://artemkloko.github.io/resume-de.pdf)
${links}

## Summary

${summary.bio}
Citizenship: ${summary.citizenship}. Languages: ${summary.languages}.

## Work Experience

${experienceSections}

## Skills

${skillSections}

## Preferences

${preferences.items.map(p => `**${p.title}:** ${p.content}`).join('\n\n')}
`;
}

try {
  const content = generateMarkdown();
  fs.writeFileSync(outputFile, content, 'utf-8');
  console.log(`✅ Successfully generated llms.txt at ${outputFile}`);



  // Update Sitemap
  updateSitemap(path.resolve(__dirname, '../dist'), [
    {
      loc: 'https://artemkloko.github.io/llms.txt',
      changefreq: 'weekly',
      priority: 0.5
    }
  ]);
} catch (error) {
  console.error('❌ Error generating llms.txt:', error);
  process.exit(1);
}
