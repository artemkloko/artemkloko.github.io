<script setup lang="ts">
import { type PropType } from 'vue';
import type { Experience } from '../data';

defineProps({
  experience: {
    type: Object as PropType<Experience>,
    required: true
  }
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 py-6 border-b border-gray-100 last:border-0 break-inside-avoid">
    <!-- Left: Dates -->
    <div class="md:col-span-3 text-left md:text-right text-gray-600">
        <div class="font-bold text-gray-800 inline md:block">{{ experience.period.start }}</div>
        <div class="font-bold text-gray-800 inline md:hidden"> - </div>
        <div class="font-bold text-gray-800 inline md:block">{{ experience.period.end }}</div>
        <div class="text-xs uppercase tracking-wide mt-1 text-gray-500">{{ experience.period.duration }}</div>
    </div>

    <!-- Right: Content -->
    <div class="md:col-span-9">
        <h3 class="text-xl font-bold text-blue-600">{{ experience.role }}</h3>
        <div class="text-sm font-medium text-gray-600 mb-3">
            <span class="font-bold text-gray-700">{{ experience.company.name }}</span>
            <span v-if="experience.company.url" class="mx-2 text-gray-300">|</span>
            <a v-if="experience.company.url" :href="experience.company.url" target="_blank" class="text-blue-500 hover:underline break-all">{{ experience.company.url }}</a>
            <span v-if="experience.company.location" class="mx-2 text-gray-300">|</span>
            <span v-if="experience.company.location">{{ experience.company.location }}</span>
        </div>

        <ul class="list-disc list-outside ml-5 space-y-1 text-gray-700 mb-3 leading-relaxed">
            <li v-for="(detail, idx) in experience.details" :key="idx">{{ detail }}</li>
        </ul>

        <div class="text-xs text-gray-400 pt-2 flex flex-wrap gap-2 uppercase tracking-wider">
            <span>{{ experience.meta.sector }}</span>
            <span class="text-gray-300">|</span>
            <span>{{ experience.meta.employmentType }}</span>
        </div>
    </div>
  </div>
</template>
