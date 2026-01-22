import { computed } from 'vue';
import { i18n } from '../i18n';
import { resumeData as enData } from './resume.en';
import { resumeData as deData } from './resume.de';
import type { ResumeData } from './types';

export * from './types';

export function useResumeData() {
  const resumeData = computed<ResumeData>(() => {
    // Access the global locale ref directly
    if (i18n.global.locale.value === 'de') {
      return deData;
    }
    return enData;
  });

  return { resumeData };
}
