<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import CVLayout from '../components/CVLayout.vue';
import ProfileHeader from '../components/ProfileHeader.vue';
import PersonalSummary from '../components/PersonalSummary.vue';
import WorkExperienceItem from '../components/WorkExperienceItem.vue';
import SkillGroup from '../components/SkillGroup.vue';
import PreferenceBlock from '../components/PreferenceBlock.vue';
import ActionFooter from '../components/ActionFooter.vue';
import { useResumeData } from '../data';

const { resumeData } = useResumeData();
const { locale } = useI18n();

const siteUrl = 'https://artemkloko.github.io';

useHead({
  title: computed(() => `Artem Titkov - ${resumeData.value.profile.title}`),
  meta: [
    {
      name: 'description',
      content: computed(() => resumeData.value.summary.bio)
    },
    {
      property: 'og:title',
      content: computed(() => `Artem Titkov - ${resumeData.value.profile.title}`)
    },
    {
      property: 'og:description',
      content: computed(() => resumeData.value.summary.bio)
    },
    {
      property: 'og:image',
      content: computed(() => `${siteUrl}${resumeData.value.profile.image}`)
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: computed(() => `${siteUrl}/${locale.value}`)
    },
    { rel: 'alternate', hreflang: 'en', href: `${siteUrl}/en` },
    { rel: 'alternate', hreflang: 'de', href: `${siteUrl}/de` },
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}/en` }
  ]
});
</script>

<template>
  <CVLayout>
    <ProfileHeader :profile="resumeData.profile" />

    <PersonalSummary :summary="resumeData.summary" />

    <!-- Experience Section -->
    <section id="experience" class="px-6 py-6 border-b border-gray-200" aria-labelledby="experience-heading">
      <h2 id="experience-heading" class="text-2xl font-black text-gray-800 uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600 inline-block">
        <font-awesome-icon icon="briefcase" class="mr-3 text-blue-500" />
        {{ $t('section.experience') }}
      </h2>
      <div class="flex flex-col">
        <WorkExperienceItem
          v-for="(job, index) in resumeData.experience"
          :key="index"
          :experience="job"
        />
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="px-6 py-6 border-b border-gray-200 break-inside-avoid" aria-labelledby="skills-heading">
       <h2 id="skills-heading" class="text-2xl font-black text-gray-800 uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600 inline-block">
        <font-awesome-icon icon="code" class="mr-3 text-blue-500" />
        {{ $t('section.skills') }}
      </h2>
      <div class="flex flex-col">
        <SkillGroup
          v-for="(group, index) in resumeData.skills"
          :key="index"
          :skill-group="group"
        />
      </div>
    </section>

     <!-- Preferences Section -->
    <section id="preferences" class="px-6 py-6 break-inside-avoid" aria-labelledby="preferences-heading">
       <h2 id="preferences-heading" class="text-2xl font-black text-gray-800 uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600 inline-block">
        <font-awesome-icon icon="heart" class="mr-3 text-blue-500" />
        {{ $t('section.lookingFor') }}
      </h2>
      <div class="flex flex-col">
        <PreferenceBlock
          v-for="(pref, index) in resumeData.preferences.items"
          :key="index"
          :preference="pref"
        />
      </div>
    </section>

    <ActionFooter :footer="resumeData.footer" />
  </CVLayout>
</template>
