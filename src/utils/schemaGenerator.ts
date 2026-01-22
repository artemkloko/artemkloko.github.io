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

    if (!end) {
      isCurrent = true;
    } else {
        const endDate = new Date(end);
        if (endDate >= now) {
            isCurrent = true;
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
