import type { ResumeData } from '../data/types';

export function generatePersonSchema(data: ResumeData, siteUrl: string) {
  const { profile, summary, experience, skills } = data;

  // Flatten skills into a single list of strings
  const allSkills = skills.flatMap(group => group.items);

  // Map social links
  const sameAs = profile.contacts.socials.map(social => social.url);

  // Classify experience into current (worksFor) and past (alumniOf)
  const worksFor: any[] = [];
  const alumniOf: any[] = [];

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-indexed

  experience.forEach(job => {
    const org = {
      '@type': 'Organization',
      'name': job.company.name,
      'url': job.company.url,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': job.company.location
      }
    };

    let isCurrent = false;
    const end = job.period.end;

    if (end.toLowerCase() === 'present') {
      isCurrent = true;
    } else {
      // Try parsing "Month YYYY"
      const parts = end.split(' ');
      if (parts.length === 2 && parts[1] && parts[0]) {
        const year = parseInt(parts[1], 10);

        if (!isNaN(year)) {
             // Simple mapping for month name to index if needed, but year check is usually enough for quick heuristics
            // If year is greater than current year, it's definitely current/future
            if (year > currentYear) {
                isCurrent = true;
            } else if (year === currentYear) {
                // If same year, check month
                const monthName = parts[0].toLowerCase();
                const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
                const monthIndex = months.findIndex(m => m === monthName);
                if (monthIndex >= currentMonth) {
                    isCurrent = true;
                }
            }
        }
      }
    }

    if (isCurrent) {
        // Avoid duplicates in worksFor if multiple roles at same company
        if (!worksFor.some(o => o.name === org.name)) {
            worksFor.push(org);
        }
    } else {
        // Avoid duplicates in alumniOf
        if (!alumniOf.some(o => o.name === org.name)) {
            alumniOf.push(org);
        }
    }
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': profile.name,
    'jobTitle': profile.title,
    'image': `${siteUrl}${profile.image}`,
    'url': siteUrl,
    'description': summary.bio,
    'email': profile.contacts.email,
    'telephone': profile.contacts.phone,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': profile.contacts.location
    },
    'sameAs': sameAs,
    'knowsAbout': allSkills,
    'nationality': summary.citizenship,
    'knowsLanguage': summary.languages,
    'worksFor': worksFor,
    'alumniOf': alumniOf
  };
}
