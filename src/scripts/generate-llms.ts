import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resumeData } from '../data/resume.en';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target file
const outputFile = path.resolve(__dirname, '../../public/llms.txt');

function generateMarkdown(): string {
  const { profile, summary, experience, skills, preferences } = resumeData;

  const experienceSections = experience.map(job => {
    return `### ${job.role} @ ${job.company.name} (${job.period.start} - ${job.period.end})
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
  - Website: https://artemkloko.github.io
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
} catch (error) {
  console.error('❌ Error generating llms.txt:', error);
  process.exit(1);
}
