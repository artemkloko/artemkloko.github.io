<script setup lang="ts">
import CVLayout from './components/CVLayout.vue';
import ProfileHeader from './components/ProfileHeader.vue';
import PersonalSummary from './components/PersonalSummary.vue';
import WorkExperienceItem from './components/WorkExperienceItem.vue';
import SkillGroup from './components/SkillGroup.vue';
import PreferenceBlock from './components/PreferenceBlock.vue';
import ActionFooter from './components/ActionFooter.vue';
import { resumeData } from './data/resume';
</script>

<template>
  <CVLayout>
    <ProfileHeader :profile="resumeData.profile" />

    <PersonalSummary :summary="resumeData.summary" />

    <!-- Experience Section -->
    <div class="px-6 py-6 border-b border-gray-200">
      <h2 class="text-2xl font-black text-gray-800 uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600 inline-block">
        <font-awesome-icon icon="briefcase" class="mr-3 text-blue-500" />
        Work Experience
      </h2>
      <div class="flex flex-col">
        <WorkExperienceItem
          v-for="(job, index) in resumeData.experience"
          :key="index"
          :experience="job"
        />
      </div>
    </div>

    <!-- Skills Section -->
    <div class="px-6 py-6 border-b border-gray-200 break-inside-avoid">
       <h2 class="text-2xl font-black text-gray-800 uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600 inline-block">
        <font-awesome-icon icon="code" class="mr-3 text-blue-500" />
        Skills
      </h2>
      <div class="flex flex-col">
        <SkillGroup
          v-for="(group, index) in resumeData.skills"
          :key="index"
          :skill-group="group"
        />
      </div>
    </div>

     <!-- Preferences Section -->
    <div class="px-6 py-6 break-inside-avoid">
       <h2 class="text-2xl font-black text-gray-800 uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600 inline-block">
        <font-awesome-icon icon="heart" class="mr-3 text-blue-500" />
        What I am looking for
      </h2>
      <div class="flex flex-col">
        <PreferenceBlock
          v-for="(pref, index) in resumeData.preferences.items"
          :key="index"
          :preference="pref"
        />
      </div>
    </div>

    <ActionFooter :footer="resumeData.footer" />
  </CVLayout>
</template>

